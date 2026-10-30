/* Usage: node src/validate.js [data_p1.js data_c2.js ...]   (default: all src/data_*.js) */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = __dirname;
const ctx = { console, Math, module: undefined };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dir, 'core.js'), 'utf8'), ctx, { filename: 'core.js' });
let files = process.argv.slice(2);
if (!files.length) files = fs.readdirSync(dir).filter(f => /^data_.*\.js$/.test(f)).sort();
let errs = 0, warns = 0;
const E = (id, m) => { errs++; console.log('  ✗ [' + id + '] ' + m); };
const W = (id, m) => { warns++; console.log('  ! [' + id + '] ' + m); };
for (const f of files) {
  try { vm.runInContext(fs.readFileSync(path.join(dir, path.basename(f)), 'utf8'), ctx, { filename: f }); }
  catch (e) { console.log('SYNTAX/RUNTIME ERROR in ' + f + ': ' + e.message); process.exit(1); }
}
const N = vm.runInContext('NEET', ctx);
const ids = N.order;
console.log('Units registered: ' + ids.length + ' → ' + ids.join(','));
const TAGS = ['Unit Conversion Trap', 'NCERT Exception', 'Sign Convention', 'Boundary Failure', 'Graph Trap', 'Approximation Limit', 'Zero-Case', 'Concept Trap', 'Order Inversion', 'Reagent Trap', 'Calculation Trap', 'Statement Trap', 'Stereo Trap', 'Practical Trap'];
const bad = s => /\bNaN\b|undefined|Infinity|\[object/.test(String(s));
for (const id of ids) {
  const u = N.units[id];
  const num = u.type === 'num';
  console.log('— ' + id + ' ' + u.name + ' (' + u.type + ')');
  ['id', 'subj', 'type', 'name', 'syl'].forEach(k => { if (!u[k]) E(id, 'missing ' + k); });
  if (!['num', 'conc'].includes(u.type)) E(id, 'type must be num|conc');
  const min = (arr, n, label) => { const l = (arr || []).length; if (l < n) E(id, label + ' has ' + l + ' (< ' + n + ')'); };
  min(u.kw, 6, 'kw');
  min(u.formulas, num ? 8 : 6, 'formulas');
  min(u.traps, 8, 'traps');
  min(u.flows, 3, 'flows');
  min(u.lab, 4, 'lab');
  min(u.pairs, num ? 8 : 18, 'pairs');
  min(u.orders, num ? 2 : 5, 'orders');
  min(u.facts && u.facts.T, num ? 8 : 12, 'facts.T');
  min(u.facts && u.facts.F, num ? 8 : 12, 'facts.F');
  min(u.mcq, num ? 6 : 14, 'mcq');
  if (num) min(u.gens, 6, 'gens');
  (u.formulas || []).forEach((x, i) => ['n', 'f', 'b'].forEach(k => { if (!x[k]) E(id, 'formulas[' + i + '].' + k + ' missing'); }));
  (u.traps || []).forEach((x, i) => { if (!x.t || !x.c) E(id, 'traps[' + i + '] missing t/c'); if (x.tag && !TAGS.includes(x.tag)) W(id, 'traps[' + i + '] unknown tag ' + x.tag); });
  (u.flows || []).forEach((x, i) => { if (!x.t || !(x.chain || (x.root && x.br))) E(id, 'flows[' + i + '] bad shape'); });
  (u.lab || []).forEach((x, i) => { if (!x.t || !x.d) E(id, 'lab[' + i + '] missing t/d'); });
  const gm = {};
  (u.pairs || []).forEach((p, i) => { if (!p.g || !p.a || !p.b) E(id, 'pairs[' + i + '] missing g/a/b'); (gm[p.g] = gm[p.g] || []).push(p); });
  Object.keys(gm).forEach(g => {
    if (gm[g].length < 4) W(id, 'pair group "' + g + '" has only ' + gm[g].length + ' (unused, needs ≥4)');
    const bs = gm[g].map(p => N.strip(p.b).toLowerCase()); if (new Set(bs).size !== bs.length) E(id, 'pair group "' + g + '" has duplicate b values');
    const as = gm[g].map(p => N.strip(p.a).toLowerCase()); if (new Set(as).size !== as.length) E(id, 'pair group "' + g + '" has duplicate a values');
  });
  (u.orders || []).forEach((o, i) => { if (!o.q || !o.s || o.s.length < 3) E(id, 'orders[' + i + '] needs q and ≥3 items'); if (new Set(o.s).size !== o.s.length) E(id, 'orders[' + i + '] duplicate items'); });
  (u.mcq || []).forEach((m, i) => {
    if (!m.q || !m.o || m.o.length !== 4) E(id, 'mcq[' + i + '] needs q and 4 options');
    else if (new Set(m.o.map(x => N.strip(x).toLowerCase())).size !== 4) E(id, 'mcq[' + i + '] duplicate options');
    if (!(m.a >= 0 && m.a <= 3)) E(id, 'mcq[' + i + '] bad answer index');
    if (m.tag && !TAGS.includes(m.tag)) W(id, 'mcq[' + i + '] unknown tag ' + m.tag);
    if (!m.sol || !m.sol.length) W(id, 'mcq[' + i + '] no sol');
  });
  (u.gens || []).forEach((g, i) => {
    let nulls = 0, ok = 0;
    for (let k = 0; k < 60; k++) {
      let r; try { r = g(N.R); } catch (e) { E(id, 'gens[' + i + '] threw: ' + e.message); break; }
      if (!r || r.ans === undefined || !Array.isArray(r.d) || !r.q) { E(id, 'gens[' + i + '] bad return shape'); break; }
      if (typeof r.ans === 'number' && !isFinite(r.ans)) { E(id, 'gens[' + i + '] non-finite ans'); break; }
      if (bad(r.q) || (r.sol || []).some(bad)) { E(id, 'gens[' + i + '] NaN/undefined in text: ' + N.strip(r.q).slice(0, 80)); break; }
      const q = N.GEN.G1({ gens: [g] }); if (q) ok++; else nulls++;
    }
    if (ok === 0) E(id, 'gens[' + i + '] never produced a valid question');
    else if (nulls > 30) W(id, 'gens[' + i + '] failed ' + nulls + '/60 (duplicate options?)');
  });
  const want = N.qcount(u);
  let short = 0, minLen = 1e9, srcCount = {};
  for (let k = 0; k < 200; k++) {
    const qs = N.build(id);
    minLen = Math.min(minLen, qs.length);
    if (qs.length < want) short++;
    qs.forEach(q => {
      srcCount[q.src] = (srcCount[q.src] || 0) + 1;
      if (!q.o || q.o.length !== 4) E(id, 'built question with ' + (q.o || []).length + ' options');
      if (!(q.a >= 0 && q.a < 4)) E(id, 'built question bad a');
      if (bad(q.q) || q.o.some(bad)) E(id, 'NaN/undefined in built question: ' + N.strip(q.q).slice(0, 80));
    });
  }
  if (short) E(id, 'drill short of ' + want + ' in ' + short + '/200 builds (min ' + minLen + ')');
  console.log('    drill OK ' + want + 'Q · mix ' + Object.keys(srcCount).map(k => k + ':' + Math.round(srcCount[k] / 200 * 10) / 10).join(' '));
}
console.log('\nRESULT: ' + errs + ' errors, ' + warns + ' warnings');
process.exit(errs ? 1 : 0);
