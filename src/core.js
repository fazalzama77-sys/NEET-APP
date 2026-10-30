/* ==========================================================================
   CORE: Unit registry + R helper + Dynamic Parametric Question Synthesis Engine
   Pure logic (no DOM) — shared by the browser app and src/validate.js
   ========================================================================== */
var NEET = (function () {
  'use strict';
  var units = {};
  var order = [];

  function reg(u) {
    if (!u || !u.id) throw new Error('NEET.reg: missing id');
    if (!units[u.id]) order.push(u.id);
    units[u.id] = u;
  }

  /* ---------------- R helper ---------------- */
  var SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
  var R = {
    int: function (a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; },
    pick: function (arr) { return arr[Math.floor(Math.random() * arr.length)]; },
    shuffle: function (arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
      return a;
    },
    f: function (x, sig) {
      sig = sig || 3;
      if (typeof x !== 'number' || !isFinite(x)) return String(x);
      if (x === 0) return '0';
      var ax = Math.abs(x);
      if (ax >= 1e5 || ax < 1e-3) {
        var e = Math.floor(Math.log10(ax));
        var m = x / Math.pow(10, e);
        var ms = Number(m.toPrecision(sig));
        if (Math.abs(ms) >= 10) { ms = Number((ms / 10).toPrecision(sig)); e += 1; }
        var es = String(e).split('').map(function (c) { return SUP[c] || c; }).join('');
        return ms + ' × 10' + es;
      }
      return String(Number(x.toPrecision(sig)));
    }
  };

  /* ---------------- helpers ---------------- */
  function strip(s) { return String(s).replace(/<[^>]+>/g, '').trim(); }
  function uniq(arr) {
    var seen = {}, out = [];
    arr.forEach(function (x) { var k = strip(x).toLowerCase(); if (!seen[k]) { seen[k] = 1; out.push(x); } });
    return out;
  }
  function mk(q, correct, distractors, tag, sol, src, fixed) {
    var opts = [correct].concat(distractors.slice(0, 3));
    if (opts.length < 4) return null;
    if (uniq(opts).length !== 4) return null;
    if (fixed) return { q: q, o: fixed.opts, a: fixed.a, tag: tag, sol: sol, src: src };
    var sh = R.shuffle(opts.map(function (o, i) { return { o: o, c: i === 0 }; }));
    var a = 0;
    sh.forEach(function (x, i) { if (x.c) a = i; });
    return { q: q, o: sh.map(function (x) { return x.o; }), a: a, tag: tag, sol: sol, src: src };
  }
  function pickOthers(arr, idx, n) {
    var pool = arr.filter(function (_, i) { return i !== idx; });
    return R.shuffle(pool).slice(0, n);
  }

  /* ---------------- G1: parametric numeric ---------------- */
  var MULTS = [1.5, 0.5, 2, 0.25, 3, 4, 0.75, 1.25, 10, 0.1];
  function G1(u) {
    if (!u.gens || !u.gens.length) return null;
    var g = R.pick(u.gens);
    var r;
    try { r = g(R); } catch (e) { return null; }
    if (!r || r.ans === undefined || !r.d) return null;
    var unit = r.u ? ' ' + r.u : '';
    var isNum = typeof r.ans === 'number';
    if (isNum && !isFinite(r.ans)) return null;
    var fmt = function (x) { return typeof x === 'number' ? R.f(x) + unit : String(x); };
    var correct = fmt(r.ans);
    var opts = [correct];
    var seen = {}; seen[strip(correct).toLowerCase()] = 1;
    r.d.forEach(function (x) {
      if (opts.length >= 4) return;
      if (typeof x === 'number' && !isFinite(x)) return;
      var s = fmt(x);
      if (!seen[strip(s).toLowerCase()]) { seen[strip(s).toLowerCase()] = 1; opts.push(s); }
    });
    var k = 0;
    while (opts.length < 4 && isNum && k < MULTS.length) {
      var s2 = fmt(r.ans * MULTS[k++]);
      if (!seen[strip(s2).toLowerCase()]) { seen[strip(s2).toLowerCase()] = 1; opts.push(s2); }
    }
    if (opts.length < 4) return null;
    return mk(r.q, opts[0], opts.slice(1), r.tag || 'Calculation Trap', r.sol || [], 'Parametric Numerical');
  }

  /* ---------------- G2: seed MCQ ---------------- */
  function G2(u, st) {
    if (!u.mcq || !u.mcq.length) return null;
    st.g2 = st.g2 || R.shuffle(u.mcq.map(function (_, i) { return i; }));
    if (!st.g2.length) return null;
    var m = u.mcq[st.g2.pop()];
    if (!m || !m.o || m.o.length !== 4) return null;
    var correct = m.o[m.a];
    var dis = m.o.filter(function (_, i) { return i !== m.a; });
    return mk(m.q, correct, dis, m.tag || 'Concept Trap', m.sol || [], 'Seed Bank');
  }

  /* ---------------- G3: boundary / SI unit ---------------- */
  function G3(u) {
    var F = (u.formulas || []).filter(function (x) { return x.b; });
    if (F.length < 4) return null;
    var i = R.int(0, F.length - 1), f = F[i];
    if (Math.random() < 0.7) {
      var dis = pickOthers(F, i, 3).map(function (x) { return x.b; });
      return mk('<b>Boundary check:</b> The relation <b>' + f.n + '</b> &nbsp;[ ' + f.f + ' ] is NOT valid / breaks down when:',
        f.b, dis, 'Boundary Failure',
        ['Relation: ' + f.f, 'Validity limit → ' + strip(f.b), f.s ? 'Convention: ' + strip(f.s) : 'Always check the regime before plugging numbers.'], 'Boundary Generator');
    }
    var withU = F.filter(function (x) { return x.u && strip(x.u) !== '—' && strip(x.u) !== '-'; });
    var uu = uniq(withU.map(function (x) { return x.u; }));
    if (uu.length < 4 || !f.u) return null;
    var dis2 = R.shuffle(uu.filter(function (x) { return strip(x) !== strip(f.u); })).slice(0, 3);
    return mk('For <b>' + f.n + '</b> [ ' + f.f + ' ], the correct SI unit / dimension of the quantity is:',
      f.u, dis2, 'Unit Conversion Trap', ['Relation: ' + f.f, 'Unit → ' + strip(f.u), 'Distractors are units of other quantities in this chapter.'], 'Unit Generator');
  }

  /* ---------------- G4: Assertion–Reason ---------------- */
  var AR_OPTS = [
    'Both A and R are true and R is the correct explanation of A',
    'Both A and R are true but R is NOT the correct explanation of A',
    'A is true but R is false',
    'A is false but R is true'
  ];
  function G4(u) {
    var T = u.traps || [];
    if (T.length < 2) return null;
    var i = R.int(0, T.length - 1), t = T[i];
    var F = (u.facts && u.facts.F) || [];
    var mode = R.pick([0, 0, 1, 2, 3]);
    var A, Rs, ans, sol;
    if (mode === 0) { A = t.t; Rs = t.c; ans = 0; sol = ['A is a verified fact.', 'R is the exact root cause of A → correct explanation.']; }
    else if (mode === 1) {
      var o = pickOthers(T, i, 1)[0];
      A = t.t; Rs = o.c; ans = 1;
      sol = ['A is true.', 'R is a true statement but it explains a different fact: “' + strip(o.t) + '”.', 'Actual cause of A: ' + strip(t.c)];
    } else if (mode === 2 && F.length) {
      A = t.t; Rs = R.pick(F); ans = 2; sol = ['A is true. Root cause: ' + strip(t.c), 'R is a planted false statement.'];
    } else if (mode === 3 && F.length) {
      A = R.pick(F); Rs = t.c; ans = 3; sol = ['A is a planted false statement.', 'R is true (it is the cause of: “' + strip(t.t) + '”).'];
    } else { A = t.t; Rs = t.c; ans = 0; sol = ['A is a verified fact.', 'R is the exact root cause of A.']; }
    var q = '<span class="arl">Assertion (A):</span> ' + A + '<br><span class="arl">Reason (R):</span> ' + Rs;
    return { q: q, o: AR_OPTS.slice(), a: ans, tag: t.tag || 'Concept Trap', sol: sol, src: 'Assertion–Reason' };
  }

  /* ---------------- G5: Statement I / II ---------------- */
  var ST_OPTS = [
    'Both Statement I and Statement II are correct',
    'Both Statement I and Statement II are incorrect',
    'Statement I is correct but Statement II is incorrect',
    'Statement I is incorrect but Statement II is correct'
  ];
  function G5(u) {
    var T = (u.facts && u.facts.T) || [], F = (u.facts && u.facts.F) || [];
    if (T.length < 2 || F.length < 2) return null;
    var c1 = Math.random() < 0.55, c2 = Math.random() < 0.55;
    var s1 = R.pick(c1 ? T : F), s2 = R.pick(c2 ? T : F);
    if (s1 === s2) return null;
    var a = c1 && c2 ? 0 : (!c1 && !c2 ? 1 : (c1 ? 2 : 3));
    return {
      q: '<span class="arl">Statement I:</span> ' + s1 + '<br><span class="arl">Statement II:</span> ' + s2,
      o: ST_OPTS.slice(), a: a, tag: 'Statement Trap',
      sol: ['Statement I is ' + (c1 ? 'CORRECT.' : 'INCORRECT (planted NTA trap).'), 'Statement II is ' + (c2 ? 'CORRECT.' : 'INCORRECT (planted NTA trap).')],
      src: 'Statement Analysis'
    };
  }

  /* ---------------- G6: match cue ↔ response ---------------- */
  function groups(u) {
    var gmap = {};
    (u.pairs || []).forEach(function (p) { (gmap[p.g] = gmap[p.g] || []).push(p); });
    return Object.keys(gmap).map(function (k) { return gmap[k]; }).filter(function (g) { return g.length >= 4; });
  }
  function G6(u) {
    var gs = groups(u);
    if (!gs.length) return null;
    var g = R.pick(gs), i = R.int(0, g.length - 1), p = g[i];
    var others = pickOthers(g, i, 3);
    if (Math.random() < 0.65) {
      return mk('<span class="ctx">' + p.g + '</span><br>Identify the correct match for: <b>' + p.a + '</b>',
        p.b, others.map(function (x) { return x.b; }), 'Reagent Trap',
        [strip(p.a) + ' → ' + strip(p.b), 'Other options belong to: ' + others.map(function (x) { return strip(x.a); }).join('; ')], 'Match Generator');
    }
    return mk('<span class="ctx">' + p.g + '</span><br>Which cue gives / corresponds to: <b>' + p.b + '</b>?',
      p.a, others.map(function (x) { return x.a; }), 'Reagent Trap',
      [strip(p.b) + ' ← ' + strip(p.a), 'Reverse-recall trains retrieval from the result back to the cause.'], 'Reverse Match Generator');
  }

  /* ---------------- G7: order sequences ---------------- */
  function G7(u) {
    var O = u.orders || [];
    if (!O.length) return null;
    var o = R.pick(O), s = o.s, sep = ' ' + (o.sep || '>') + ' ';
    if (!s || s.length < 3) return null;
    var correct = s.join(sep), seen = {}; seen[correct] = 1;
    var dis = [];
    var cands = [s.slice().reverse()];
    for (var k = 0; k < s.length - 1; k++) { var c = s.slice(); var t = c[k]; c[k] = c[k + 1]; c[k + 1] = t; cands.push(c); }
    for (var z = 0; z < 20; z++) cands.push(R.shuffle(s));
    cands = R.shuffle(cands.slice(0, s.length)).concat(cands.slice(s.length));
    cands.forEach(function (c) { var j = c.join(sep); if (dis.length < 3 && !seen[j]) { seen[j] = 1; dis.push(j); } });
    if (dis.length < 3) return null;
    return mk(o.q + ':', correct, dis, 'Order Inversion', ['Correct sequence: ' + strip(correct), o.why ? strip(o.why) : 'Watch for anomalous positions — NTA plants a single swapped pair.'], 'Order Generator');
  }

  /* ---------------- G8: odd statement out ---------------- */
  function G8(u) {
    var T = (u.facts && u.facts.T) || [], F = (u.facts && u.facts.F) || [];
    if (T.length < 3 || F.length < 3) return null;
    if (Math.random() < 0.6) {
      var f = R.pick(F), ts = R.shuffle(T).slice(0, 3);
      return mk('Which of the following statements is <b>INCORRECT</b>?', f, ts, 'Statement Trap', ['Incorrect statement: ' + strip(f), 'The other three are verified NCERT facts.'], 'Odd-One-Out');
    }
    var t = R.pick(T), fs = R.shuffle(F).slice(0, 3);
    return mk('Which of the following statements is <b>CORRECT</b>?', t, fs, 'Statement Trap', ['Correct statement: ' + strip(t), 'The other three are planted misconceptions.'], 'Odd-One-Out');
  }

  var GEN = { G1: G1, G2: G2, G3: G3, G4: G4, G5: G5, G6: G6, G7: G7, G8: G8 };
  var MIX = {
    num: [['G1', 8], ['G2', 3], ['G3', 2], ['G4', 2], ['G5', 2], ['G6', 1], ['G7', 1], ['G8', 1]],
    conc: [['G2', 8], ['G6', 7], ['G7', 4], ['G4', 3], ['G5', 3], ['G8', 3], ['G3', 1], ['G1', 1]]
  };
  var REFILL = ['G1', 'G6', 'G5', 'G8', 'G4', 'G3', 'G7', 'G2'];

  function qcount(u) { return u.type === 'num' ? 20 : 30; }

  function build(id, n) {
    var u = units[id];
    if (!u) return [];
    var N = n || qcount(u);
    var out = [], keys = {}, st = {};
    function push(q) {
      if (!q) return false;
      var key = strip(q.q).toLowerCase() + '|' + strip(q.o[q.a]).toLowerCase();
      if (keys[key]) return false;
      keys[key] = 1; out.push(q); return true;
    }
    function run(g, k) {
      var got = 0, tries = 0;
      while (got < k && tries < k * 8 && out.length < N) { tries++; if (push(GEN[g](u, st))) got++; }
    }
    MIX[u.type === 'num' ? 'num' : 'conc'].forEach(function (m) { run(m[0], m[1]); });
    var guard = 0;
    while (out.length < N && guard < 60) { REFILL.forEach(function (g) { if (out.length < N) run(g, 1); }); guard++; }
    out = R.shuffle(out).slice(0, N);
    out.forEach(function (q, i) { q.unit = id; q.n = i + 1; });
    return out;
  }

  return { reg: reg, units: units, order: order, R: R, build: build, qcount: qcount, strip: strip, GEN: GEN };
})();
if (typeof module !== 'undefined') module.exports = NEET;
