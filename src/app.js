/* ==========================================================================
   APP ENGINE: State Store, Spaced Repetition Radar, Smart Syllabus Parser,
   4-Block Pictographic Sheet Renderer, 3-Round Cognitive Drill, Mistake Vault
   ========================================================================== */
(function () {
  'use strict';

  var STORAGE_KEY = 'neetTacticalV1';
  var DECAY_DAYS = [1, 3, 7, 14];

  function defaultState() {
    return {
      theme: 'light',
      tab: 'dashboard',
      filter: 'all',          // 'all' | 'mock'
      subjFilter: 'ALL',      // 'ALL' | 'Physics' | 'Physical Chemistry' | 'Inorganic Chemistry' | 'Organic Chemistry' | 'Practical Chemistry'
      search: '',
      currentUnit: 'P1',
      blindRecall: false,
      notesPageFilter: 0,     // 0 = Show All 4-5 Pages, 1..5 = Jump/Focus Page
      notesItemFilter: 'all', // 'all' | 'starred' | 'unmastered'
      starredItems: {},       // { 'P1:f:0': true }
      masteredItems: {},      // { 'P1:f:0': true }
      userNotes: {},          // { 'P1': 'My coaching trick...' }
      mock: ['P1', 'P2', 'P3', 'C1', 'C2', 'C9', 'C14'],
      units: {},              // { P1: { last: 0, count: 0, best: null, mistakes: 0 } }
      vault: []               // [{ id, unit, q, o, a, chosen, tag, sol, ts }]
    };
  }

  var state = loadState();
  var drillSession = null;
  var paceTimer = null;

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      var parsed = JSON.parse(raw);
      var def = defaultState();
      for (var k in def) {
        if (parsed[k] === undefined) parsed[k] = def[k];
      }
      return parsed;
    } catch (e) {
      return defaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
    updateNavBadges();
  }

  function getUnitStats(id) {
    if (!state.units[id]) {
      state.units[id] = { last: 0, count: 0, best: null, mistakes: 0 };
    }
    return state.units[id];
  }

  /* ---------------- Spaced Repetition Status ----------------
     CRITICAL RED: Mock syllabus unit never revised OR drill accuracy < 75%
     DUE AMBER:    Revised unit hitting decay interval (1, 3, 7, or 14 days)
     LOCKED GREEN: Revised recently with >= 85% accuracy
  ------------------------------------------------------------- */
  function computeSRS(id) {
    var st = getUnitStats(id);
    var inMock = state.mock.indexOf(id) !== -1;
    var now = Date.now();
    var daysSince = st.last ? (now - st.last) / 86400000 : 9999;
    var interval = st.count > 0 ? DECAY_DAYS[Math.min(st.count - 1, 3)] : 0;

    if (inMock && (st.count === 0 || (st.best !== null && st.best < 75))) {
      return { code: 'crit', label: 'CRITICAL RED', reason: st.count === 0 ? 'Mock Unit · Unrevised' : 'Mock Unit · Acc ' + st.best + '% (<75%)' };
    }
    if (st.count > 0 && daysSince >= interval) {
      return { code: 'due', label: 'DUE AMBER', reason: Math.floor(daysSince) + 'd since review (Int: ' + interval + 'd)' };
    }
    if (st.count > 0 && st.best !== null && st.best >= 85) {
      return { code: 'lock', label: 'LOCKED GREEN', reason: 'Best ' + st.best + '% · Next in ' + Math.max(1, Math.ceil(interval - daysSince)) + 'd' };
    }
    if (st.count > 0 && st.best !== null && st.best < 75) {
      return { code: 'crit', label: 'CRITICAL RED', reason: 'Low Accuracy ' + st.best + '%' };
    }
    return { code: 'neutral', label: st.count > 0 ? 'REVISED (' + st.best + '%)' : 'UNREVISED', reason: st.count > 0 ? 'Count: ' + st.count : 'Not drilled yet' };
  }

  function formatAgo(ts) {
    if (!ts) return 'Never';
    var mins = Math.floor((Date.now() - ts) / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return mins + 'm ago';
    var hrs = Math.floor(mins / 60);
    if (hrs < 24) return hrs + 'h ago';
    return Math.floor(hrs / 24) + 'd ago';
  }

  function esc(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function updateNavBadges() {
    var mc = document.getElementById('navMockCount');
    var vc = document.getElementById('navVaultCount');
    if (mc) mc.textContent = state.mock.length;
    if (vc) vc.textContent = state.vault.length;
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
  }

  /* ---------------- Navigation & Tab Routing ---------------- */
  function switchTab(tab, unitId) {
    if (paceTimer) { clearInterval(paceTimer); paceTimer = null; }
    if (unitId && NEET.units[unitId]) state.currentUnit = unitId;
    state.tab = tab;
    saveState();

    var btns = document.querySelectorAll('#mainNav .tab-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-tab') === tab);
    }
    render();
    window.scrollTo(0, 0);
  }

  function render() {
    updateNavBadges();
    var root = document.getElementById('appRoot');
    if (!root) return;

    if (state.tab === 'dashboard') renderDashboard(root);
    else if (state.tab === 'mock') renderMockLock(root);
    else if (state.tab === 'notes') renderNotes(root);
    else if (state.tab === 'drill') renderDrill(root);
    else if (state.tab === 'vault') renderVault(root);
  }

  /* ==========================================================================
     VIEW 1: ANALYTICAL DASHBOARD & SPACED REPETITION RADAR
     ========================================================================== */
  function renderDashboard(root) {
    var crit = [], due = [], lock = [];
    NEET.order.forEach(function (id) {
      var srs = computeSRS(id);
      if (srs.code === 'crit') crit.push({ id: id, srs: srs });
      else if (srs.code === 'due') due.push({ id: id, srs: srs });
      else if (srs.code === 'lock') lock.push({ id: id, srs: srs });
    });

    var pillHtml = function (list, emptyMsg) {
      if (!list.length) return '<span style="font-size:12px;color:var(--text-muted)">' + emptyMsg + '</span>';
      return list.map(function (item) {
        var u = NEET.units[item.id];
        return '<button class="unit-pill" data-goto-notes="' + item.id + '" title="' + esc(u.name + ' — ' + item.srs.reason) + '">' +
          '<b>' + item.id + '</b> ' + esc(u.name.slice(0, 22)) + '</button>';
      }).join('');
    };

    var html = '' +
      '<div class="radar-grid">' +
        '<div class="radar-box crit">' +
          '<div class="radar-head"><span class="radar-title">CRITICAL RED · Revise Immediately</span><span class="badge badge-crit">' + crit.length + ' Units</span></div>' +
          '<div class="radar-desc">Next Mock Syllabus units never revised or with drill accuracy &lt; 75%.</div>' +
          '<div class="radar-pills">' + pillHtml(crit, 'Zero critical mock units pending.') + '</div>' +
        '</div>' +
        '<div class="radar-box due">' +
          '<div class="radar-head"><span class="radar-title">DUE AMBER · Spaced Decay Triggered</span><span class="badge badge-due">' + due.length + ' Units</span></div>' +
          '<div class="radar-desc">Units hitting 1, 3, 7, or 14-day Ebbinghaus forgetting curve intervals.</div>' +
          '<div class="radar-pills">' + pillHtml(due, 'No units due for spaced decay today.') + '</div>' +
        '</div>' +
        '<div class="radar-box lock">' +
          '<div class="radar-head"><span class="radar-title">LOCKED GREEN · Memory Consolidated</span><span class="badge badge-lock">' + lock.length + ' Units</span></div>' +
          '<div class="radar-desc">Units revised recently with ≥ 85% reflex drill accuracy.</div>' +
          '<div class="radar-pills">' + pillHtml(lock, 'Complete a unit drill with ≥85% accuracy to lock.') + '</div>' +
        '</div>' +
      '</div>';

    /* Filter Toolbar */
    var subjs = ['ALL', 'Physics', 'Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry', 'Practical Chemistry'];
    html += '' +
      '<div class="toolbar">' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;">' +
          '<div class="seg-group">' +
            '<button class="seg-btn ' + (state.filter === 'all' ? 'active' : '') + '" data-filter="all">Show All 40 NMC Units</button>' +
            '<button class="seg-btn ' + (state.filter === 'mock' ? 'active' : '') + '" data-filter="mock">Show Only Next Mock Syllabus (' + state.mock.length + ')</button>' +
          '</div>' +
          '<div class="seg-group">' +
            subjs.map(function (s) {
              return '<button class="seg-btn ' + (state.subjFilter === s ? 'active' : '') + '" data-subj="' + s + '">' + (s === 'ALL' ? 'All Sections' : s) + '</button>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<input type="search" class="search-input" id="dashSearch" placeholder="Search unit, formula, reagent, keyword..." value="' + esc(state.search) + '">' +
      '</div>';

    /* Group units by Section */
    var groups = [
      { title: 'SECTION A: PHYSICS (UNITS P1 TO P20 · 20Q DRILL EACH)', subj: ['Physics'] },
      { title: 'SECTION B: PHYSICAL CHEMISTRY (UNITS C1 TO C8 · 20Q DRILL EACH)', subj: ['Physical Chemistry'] },
      { title: 'SECTION C: INORGANIC CHEMISTRY (UNITS C9 TO C12 · 30Q DRILL EACH)', subj: ['Inorganic Chemistry'] },
      { title: 'SECTION D: ORGANIC & PRACTICAL CHEMISTRY (UNITS C13 TO C20 · 30Q DRILL EACH)', subj: ['Organic Chemistry', 'Practical Chemistry'] }
    ];

    var q = state.search.trim().toLowerCase();
    var anyRendered = false;

    groups.forEach(function (grp) {
      var list = NEET.order.filter(function (id) {
        var u = NEET.units[id];
        if (grp.subj.indexOf(u.subj) === -1) return false;
        if (state.filter === 'mock' && state.mock.indexOf(id) === -1) return false;
        if (state.subjFilter !== 'ALL' && u.subj !== state.subjFilter) return false;
        if (q) {
          var hay = (u.id + ' ' + u.name + ' ' + u.syl + ' ' + (u.kw || []).join(' ')).toLowerCase();
          if (hay.indexOf(q) === -1) return false;
        }
        return true;
      });

      if (!list.length) return;
      anyRendered = true;

      html += '<div class="section-hdr"><span>' + grp.title + '</span><span>' + list.length + ' Units</span></div>';
      html += '<div class="unit-grid">';
      list.forEach(function (id) {
        var u = NEET.units[id];
        var st = getUnitStats(id);
        var srs = computeSRS(id);
        var inMock = state.mock.indexOf(id) !== -1;
        var qTarget = NEET.qcount(u);

        html += '' +
          '<div class="unit-card st-' + srs.code + '">' +
            '<div>' +
              '<div class="uc-top">' +
                '<span class="uc-id">' + u.id + '</span>' +
                '<div class="uc-badges">' +
                  (inMock ? '<span class="badge badge-mock">NEXT MOCK</span>' : '') +
                  '<span class="badge badge-' + srs.code + '">' + srs.label + '</span>' +
                '</div>' +
              '</div>' +
              '<div class="uc-name" style="margin-top:7px;">' + esc(u.name) + '</div>' +
              '<div class="uc-syl" style="margin-top:4px;">' + esc(u.syl) + '</div>' +
            '</div>' +
            '<div>' +
              '<div class="uc-meta">' +
                '<span>Acc: <b>' + (st.best !== null ? st.best + '%' : '—') + '</b></span>' +
                '<span>Rev: <b>' + st.count + '</b> (' + formatAgo(st.last) + ')</span>' +
                '<span>' + qTarget + 'Q Engine</span>' +
              '</div>' +
              '<div class="uc-actions" style="margin-top:8px;">' +
                '<button class="btn" data-goto-notes="' + u.id + '">4-Block Sheet</button>' +
                '<button class="btn btn-primary" data-goto-drill="' + u.id + '">Start ' + qTarget + 'Q Drill</button>' +
              '</div>' +
            '</div>' +
          '</div>';
      });
      html += '</div>';
    });

    if (!anyRendered) {
      html += '<div class="panel-box" style="text-align:center;padding:32px;color:var(--text-muted)">No units match your active filter. Switch to "Show All 40 NMC Units" or clear the search box.</div>';
    }

    root.innerHTML = html;

    /* Bind events */
    var searchEl = document.getElementById('dashSearch');
    if (searchEl) {
      searchEl.addEventListener('input', function (e) {
        state.search = e.target.value;
        renderDashboard(root);
        var s2 = document.getElementById('dashSearch');
        if (s2) { s2.focus(); s2.setSelectionRange(s2.value.length, s2.value.length); }
      });
    }
    root.querySelectorAll('[data-filter]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.filter = b.getAttribute('data-filter');
        saveState();
        renderDashboard(root);
      });
    });
    root.querySelectorAll('[data-subj]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.subjFilter = b.getAttribute('data-subj');
        renderDashboard(root);
      });
    });
    root.querySelectorAll('[data-goto-notes]').forEach(function (b) {
      b.addEventListener('click', function () { switchTab('notes', b.getAttribute('data-goto-notes')); });
    });
    root.querySelectorAll('[data-goto-drill]').forEach(function (b) {
      b.addEventListener('click', function () { startDrill(b.getAttribute('data-goto-drill')); });
    });
  }

  /* ==========================================================================
     VIEW 2: NEXT MOCK SYLLABUS LOCK (1-Click Matrix + Smart Regex Text Parser)
     ========================================================================== */
  function parseSyllabusText(raw) {
    var text = String(raw || '').toLowerCase();
    var matched = [];
    NEET.order.forEach(function (id) {
      var u = NEET.units[id];
      var idRe = new RegExp('\\b' + id.toLowerCase() + '\\b');
      if (idRe.test(text) || text.indexOf(u.name.toLowerCase()) !== -1) {
        matched.push(id);
        return;
      }
      var kws = u.kw || [];
      for (var i = 0; i < kws.length; i++) {
        var kw = kws[i].toLowerCase().trim();
        if (kw.length >= 4 && text.indexOf(kw) !== -1) {
          matched.push(id);
          break;
        }
      }
    });
    return matched;
  }

  function renderMockLock(root) {
    var pUnits = NEET.order.filter(function (id) { return id.charAt(0) === 'P'; });
    var cUnits = NEET.order.filter(function (id) { return id.charAt(0) === 'C'; });

    var renderCheckboxes = function (ids) {
      return '<div class="check-grid">' + ids.map(function (id) {
        var u = NEET.units[id];
        var chk = state.mock.indexOf(id) !== -1;
        return '<label class="check-item ' + (chk ? 'checked' : '') + '">' +
          '<input type="checkbox" data-mock-id="' + id + '" ' + (chk ? 'checked' : '') + '>' +
          '<span><b>' + id + ':</b> ' + esc(u.name) + '</span>' +
        '</label>';
      }).join('') + '</div>';
    };

    root.innerHTML = '' +
      '<div class="mock-layout">' +
        '<div class="panel-box">' +
          '<div class="panel-title">' +
            '<span>Mode 1: 1-Click 40-Unit NMC Syllabus Matrix (' + state.mock.length + ' Locked)</span>' +
            '<div style="display:flex;gap:6px;">' +
              '<button class="btn" id="mockSelectAll">Select All 40</button>' +
              '<button class="btn" id="mockClearAll">Clear All</button>' +
            '</div>' +
          '</div>' +
          '<div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;">Select units scheduled for your next coaching mock test. Locked units trigger CRITICAL RED status if unrevised or below 75% accuracy.</div>' +
          '<div class="section-hdr" style="margin-top:8px;"><span>Physics (P1–P20)</span></div>' +
          renderCheckboxes(pUnits) +
          '<div class="section-hdr" style="margin-top:16px;"><span>Chemistry (C1–C20)</span></div>' +
          renderCheckboxes(cUnits) +
        '</div>' +
        '<div class="panel-box">' +
          '<div class="panel-title"><span>Mode 2: Smart Coaching Schedule Regex Parser</span></div>' +
          '<div style="font-size:12px;color:var(--text-muted);">Paste raw syllabus text from any Allen / Aakash / PW / NTA mock test schedule PDF. The regex engine scans chapter titles, subtopics, and keywords to auto-select matching NMC units.</div>' +
          '<textarea class="parser-textarea" id="syllabusPasteBox" placeholder="Example: Minor Test-4: Rotational Motion, Gravitation, Thermodynamics, Equilibrium, Redox & Electrochemistry, GOC, Hydrocarbons, Salt Analysis..."></textarea>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
            '<button class="btn btn-primary" id="runParserReplace">Detect &amp; Replace Mock Lock</button>' +
            '<button class="btn" id="runParserAdd">Detect &amp; Add to Current Lock</button>' +
            '<button class="btn" id="loadSampleSchedule">Load Sample Coaching Test Text</button>' +
          '</div>' +
          '<div id="parserResultBox" style="margin-top:14px;font-size:12.5px;color:var(--text-muted);"></div>' +
        '</div>' +
      '</div>';

    root.querySelectorAll('[data-mock-id]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var id = cb.getAttribute('data-mock-id');
        var idx = state.mock.indexOf(id);
        if (cb.checked && idx === -1) state.mock.push(id);
        else if (!cb.checked && idx !== -1) state.mock.splice(idx, 1);
        saveState();
        renderMockLock(root);
      });
    });

    document.getElementById('mockSelectAll').addEventListener('click', function () {
      state.mock = NEET.order.slice();
      saveState();
      renderMockLock(root);
    });
    document.getElementById('mockClearAll').addEventListener('click', function () {
      state.mock = [];
      saveState();
      renderMockLock(root);
    });
    document.getElementById('loadSampleSchedule').addEventListener('click', function () {
      document.getElementById('syllabusPasteBox').value =
        'AIATS Mock Test-05 Syllabus:\nPhysics: Kinematics (Projectile, Relative Velocity), Laws of Motion (Friction, Banking), Rotational Motion (Moment of Inertia, Rolling), Current Electricity (Kirchhoff, Metre Bridge), Optics (YDSE, Prism, Lens Maker), Semiconductors & Logic Gates.\nChemistry: Mole Concept & Limiting Reagent, Chemical Bonding (VSEPR, MOT), Chemical Equilibrium (pH, Buffer, Ksp), Coordination Compounds (CFT, Isomerism), Aldehydes Ketones (Aldol, Cannizzaro), Qualitative Salt Analysis.';
    });

    var handleParse = function (replace) {
      var raw = document.getElementById('syllabusPasteBox').value;
      var found = parseSyllabusText(raw);
      if (replace) {
        state.mock = found;
      } else {
        found.forEach(function (id) {
          if (state.mock.indexOf(id) === -1) state.mock.push(id);
        });
      }
      saveState();
      renderMockLock(root);
      var msgEl = document.getElementById('parserResultBox');
      if (msgEl) {
        msgEl.innerHTML = found.length
          ? '<span style="color:var(--green-tx);font-weight:700;">✔ Detected ' + found.length + ' NMC Units:</span> ' + found.join(', ')
          : '<span style="color:var(--red-tx);">No matching keywords detected. Try pasting topic names or unit IDs.</span>';
      }
    };
    document.getElementById('runParserReplace').addEventListener('click', function () { handleParse(true); });
    document.getElementById('runParserAdd').addEventListener('click', function () { handleParse(false); });
  }

  /* ==========================================================================
     VIEW 3: INTERACTIVE 4-TO-5 PAGE SHORT-NOTES REPLACEMENT ENGINE
     (Easy NCERT-Aligned Language, Active Recall, Live Formula Sandbox,
     Step-by-Step Pathway Walker, Order Scramble, NCERT Truth/Myth Spotter)
     ========================================================================== */
  var MEGA_UNITS = { P5: 1, P7: 1, P11: 1, P13: 1, P14: 1, P16: 1, P20: 1, C3: 1, C6: 1, C7: 1, C10: 1, C11: 1, C12: 1, C14: 1, C15: 1, C17: 1, C19: 1, C20: 1 };

  function isBigChapter(u) {
    if (MEGA_UNITS[u.id]) return true;
    var score = (u.formulas || []).length + (u.traps || []).length + (u.pairs || []).length + (u.mcq || []).length;
    return score >= 44;
  }

  function itemPassFilter(key) {
    if (state.notesItemFilter === 'starred') return !!state.starredItems[key];
    if (state.notesItemFilter === 'unmastered') return !state.masteredItems[key];
    return true;
  }

  function renderCardTools(key) {
    var st = !!state.starredItems[key];
    var ms = !!state.masteredItems[key];
    return '<span class="card-tools no-print">' +
      '<button class="tool-chip ' + (st ? 'starred' : '') + '" data-star-key="' + key + '" title="Pin to Starred High-Priority Revision">' + (st ? '★ Starred' : '☆ Star') + '</button>' +
      '<button class="tool-chip ' + (ms ? 'mastered' : '') + '" data-master-key="' + key + '" title="Mark as Mastered in Short Notes">' + (ms ? '✔ Mastered' : '○ Master') + '</button>' +
    '</span>';
  }

  function renderNotes(root) {
    var u = NEET.units[state.currentUnit] || NEET.units[NEET.order[0]];
    if (!u) return;
    state.currentUnit = u.id;

    var totalPages = isBigChapter(u) ? 5 : 4;
    if (state.notesPageFilter > totalPages) state.notesPageFilter = 0;

    var optionsHtml = NEET.order.map(function (id) {
      var item = NEET.units[id];
      var pgTag = isBigChapter(item) ? '5-Page High-Weightage' : '4-Page Standard';
      return '<option value="' + id + '" ' + (id === u.id ? 'selected' : '') + '>' + id + ' — ' + esc(item.name) + ' (' + pgTag + ')</option>';
    }).join('');

    /* Count unit mastery progress */
    var totalTrackable = (u.formulas || []).length + (u.traps || []).length + (u.orders || []).length + (u.lab || []).length;
    var masteredCount = 0;
    var starredCount = 0;
    ['f', 't', 'o', 'l'].forEach(function (prefix) {
      var arr = prefix === 'f' ? u.formulas : (prefix === 't' ? u.traps : (prefix === 'o' ? u.orders : u.lab));
      (arr || []).forEach(function (_, idx) {
        var k = u.id + ':' + prefix + ':' + idx;
        if (state.masteredItems[k]) masteredCount++;
        if (state.starredItems[k]) starredCount++;
      });
    });
    var masteryPct = totalTrackable ? Math.round((masteredCount / totalTrackable) * 100) : 0;

    /* ---------------- PAGE 1: Formula & Rule Matrix + Interactive Formula Sandbox ---------------- */
    var formulasHtml = (u.formulas || []).map(function (f, idx) {
      var key = u.id + ':f:' + idx;
      if (!itemPassFilter(key)) return '';
      var isM = !!state.masteredItems[key];
      return '' +
        '<div class="f-card ' + (isM ? 'item-mastered' : '') + '">' +
          '<div class="f-top">' +
            '<span class="f-name">' + (idx + 1) + '. ' + f.n + '</span>' +
            '<div style="display:flex;gap:6px;align-items:center;">' +
              '<span class="f-unit recall-target" title="SI Unit / Rule Type">' + (f.u || 'Rule') + '</span>' +
              renderCardTools(key) +
            '</div>' +
          '</div>' +
          '<div class="f-eq recall-target">' + f.f + '</div>' +
          (f.s ? '<div class="f-sign"><b>Easy Meaning &amp; Sign Rule:</b> <span class="recall-target">' + f.s + '</span></div>' : '') +
          '<div class="f-bound"><b>⚠ Where Students Lose Marks (Boundary Limit):</b> <span class="recall-target">' + f.b + '</span></div>' +
        '</div>';
    }).join('');

    var sandboxHtml = '';
    if (u.gens && u.gens.length) {
      sandboxHtml = '' +
        '<div class="sandbox-box no-print">' +
          '<div class="sandbox-head">' +
            '<div><b style="color:var(--blue-tx)">⚡ Interactive Numerical Worked-Example Sandbox</b> <span style="font-size:12px;color:var(--text-muted)">— Practice live numbers on this chapter\'s formulas</span></div>' +
            '<div style="display:flex;gap:6px;">' +
              '<button class="btn" id="rollSandboxBtn">🎲 Generate New Worked Numerical</button>' +
              '<button class="btn" id="toggleSandboxSolBtn">👁 Show / Hide Step-by-Step Calculation</button>' +
            '</div>' +
          '</div>' +
          '<div id="sandboxContent" style="font-size:13px;"></div>' +
        '</div>';
    }

    /* ---------------- PAGE 2: NTA Trap Vault + Interactive Priority Order Scramble ---------------- */
    var trapsHtml = (u.traps || []).map(function (t, idx) {
      var key = u.id + ':t:' + idx;
      if (!itemPassFilter(key)) return '';
      var isM = !!state.masteredItems[key];
      return '' +
        '<div class="t-card ' + (isM ? 'item-mastered' : '') + '">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:6px;">' +
            '<span class="badge badge-crit">TRAP #' + (idx + 1) + ' · ' + esc(t.tag || 'NCERT Exception') + '</span>' +
            renderCardTools(key) +
          '</div>' +
          '<div class="t-stmt recall-target">✔ NCERT Fact: ' + t.t + '</div>' +
          '<div class="t-cause"><b>💡 Easy Root Cause (Why this happens):</b> <span class="recall-target">' + t.c + '</span></div>' +
        '</div>';
    }).join('');

    var ordersHtml = (u.orders || []).map(function (o, idx) {
      var key = u.id + ':o:' + idx;
      if (!itemPassFilter(key)) return '';
      var sep = ' ' + (o.sep || '>') + ' ';
      return '' +
        '<div class="ord-card" data-ord-idx="' + idx + '">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:6px;">' +
            '<div class="ord-q"><b>Order #' + (idx + 1) + ':</b> ' + o.q + '</div>' +
            '<div class="no-print" style="display:flex;gap:5px;align-items:center;">' +
              '<button class="tool-chip" data-scramble-ord="' + idx + '" title="Test yourself by clicking items in order">🔀 Scramble &amp; Test</button>' +
              renderCardTools(key) +
            '</div>' +
          '</div>' +
          '<div class="ord-seq recall-target" id="ordSeq_' + idx + '">' + o.s.join(sep) + '</div>' +
          '<div id="ordScrambleBox_' + idx + '" class="no-print" style="display:none;"></div>' +
          (o.why ? '<div style="font-size:11.5px;color:var(--text-muted);margin-top:4px;"><b>Reason:</b> <span class="recall-target">' + o.why + '</span></div>' : '') +
        '</div>';
    }).join('');

    /* ---------------- PAGE 3: Interactive Step-by-Step Visual Flowcharts + Cue↔Response Flip Deck ---------------- */
    var flowsHtml = (u.flows || []).map(function (fl, fIdx) {
      if (fl.chain) {
        var chainNodes = fl.chain.map(function (step, idx) {
          var cls = idx > 0 ? 'flow-node recall-target flow-step-' + fIdx : 'flow-node';
          return '<span class="' + cls + '" data-step-idx="' + idx + '"><b>Step ' + (idx + 1) + ':</b> ' + step + '</span>';
        }).join('<span class="flow-arrow">⟶</span>');
        return '' +
          '<div class="flow-card">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">' +
              '<div class="flow-title" style="margin-bottom:0;">🗺 Pathway ' + (fIdx + 1) + ': ' + fl.t + '</div>' +
              '<button class="tool-chip no-print" data-step-walk="' + fIdx + '">▶ Step-by-Step Walk</button>' +
            '</div>' +
            '<div class="flow-chain">' + chainNodes + '</div>' +
          '</div>';
      }
      var branches = (fl.br || []).map(function (b) {
        var nodes = (b.n || []).map(function (n) {
          return '<span class="flow-node recall-target flow-step-' + fIdx + '">' + n + '</span>';
        }).join('<span class="flow-arrow">⟶</span>');
        return '<div class="flow-branch">' +
          '<div class="flow-cond">↳ Condition / Reagent: ' + b.l + '</div>' +
          '<div class="flow-chain">' + nodes + '</div>' +
        '</div>';
      }).join('');
      return '' +
        '<div class="flow-card">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">' +
            '<div class="flow-title" style="margin-bottom:0;">🌿 Decision Map ' + (fIdx + 1) + ': ' + fl.t + '</div>' +
            '<button class="tool-chip no-print" data-step-walk="' + fIdx + '">▶ Reveal Branches One-by-One</button>' +
          '</div>' +
          '<div class="flow-tree">' +
            '<div class="flow-root">START: ' + fl.root + '</div>' +
            '<div class="flow-branches">' + branches + '</div>' +
          '</div>' +
        '</div>';
    }).join('');

    var allPairs = u.pairs || [];
    var pairsHtml = allPairs.map(function (p, pIdx) {
      return '' +
        '<div class="l-card flip-pair-card" data-pair-idx="' + pIdx + '" style="cursor:pointer;" title="Click card to toggle answer">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;">' +
            '<span style="font-size:10.5px;color:var(--text-muted);font-family:var(--font-mono)">' + p.g + '</span>' +
            '<span class="tool-chip no-print" style="font-size:10px;">Click to Flip</span>' +
          '</div>' +
          '<div style="font-weight:700;font-size:12.5px;margin-top:4px;">Q: ' + p.a + '</div>' +
          '<div class="recall-target pair-ans" style="color:var(--green-tx);font-weight:700;font-size:12.5px;margin-top:4px;">➔ ' + p.b + '</div>' +
        '</div>';
    }).join('');

    /* ---------------- PAGE 4: Lab & Practical Triggers + Interactive NCERT Line Truth/Myth Spotter ---------------- */
    var labHtml = (u.lab || []).map(function (l, idx) {
      var key = u.id + ':l:' + idx;
      if (!itemPassFilter(key)) return '';
      var isM = !!state.masteredItems[key];
      return '' +
        '<div class="l-card ' + (isM ? 'item-mastered' : '') + '">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:6px;margin-bottom:4px;">' +
            '<div class="l-title" style="margin-bottom:0;">🔬 ' + l.t + '</div>' +
            renderCardTools(key) +
          '</div>' +
          '<div class="l-desc recall-target">' + l.d + '</div>' +
        '</div>';
    }).join('');

    var tFacts = ((u.facts && u.facts.T) || []).map(function (s) { return { s: s, isT: true }; });
    var fFacts = ((u.facts && u.facts.F) || []).map(function (s) { return { s: s, isT: false }; });
    var combinedStmts = [];
    var maxLen = Math.max(tFacts.length, fFacts.length);
    for (var si = 0; si < maxLen; si++) {
      if (si < tFacts.length) combinedStmts.push(tFacts[si]);
      if (si < fFacts.length) combinedStmts.push(fFacts[si]);
    }

    var stmtSpotterHtml = combinedStmts.map(function (item, sIdx) {
      return '' +
        '<div class="stmt-card" id="stmtCard_' + sIdx + '">' +
          '<div style="font-size:12.5px;"><b>Line #' + (sIdx + 1) + ':</b> ' + item.s + '</div>' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:6px;">' +
            '<div class="no-print" style="display:flex;gap:6px;">' +
              '<button class="tool-chip" data-stmt-guess="' + sIdx + '" data-guess="true" data-actual="' + item.isT + '">✔ NCERT True</button>' +
              '<button class="tool-chip" data-stmt-guess="' + sIdx + '" data-guess="false" data-actual="' + item.isT + '">✘ NTA Myth (False)</button>' +
            '</div>' +
            '<span class="recall-target" id="stmtBadge_' + sIdx + '" style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:' + (item.isT ? 'var(--green-tx)' : 'var(--red-tx)') + '">' +
              (item.isT ? '✔ TRUE NCERT STATEMENT' : '✘ FALSE (COMMON NTA TRAP)') +
            '</span>' +
          '</div>' +
        '</div>';
    }).join('');

    var stickyVal = state.userNotes[u.id] || '';
    var stickyHtml = '' +
      '<div style="margin-top:14px;">' +
        '<div style="font-weight:800;font-size:12px;color:var(--amber-tx);text-transform:uppercase;font-family:var(--font-mono);">📝 Your Personal Coaching / Margin Short-Notes (Auto-Saved for ' + u.id + ')</div>' +
        '<textarea class="sticky-notes-area" id="unitStickyInput" placeholder="Write your own mnemonics, teacher shortcuts, or page references for ' + esc(u.name) + '...">' + esc(stickyVal) + '</textarea>' +
      '</div>';

    /* ---------------- PAGE 5 (FOR BIG / HIGH-WEIGHTAGE NEET CHAPTERS ONLY):Solved NCERT Exemplar & PYQ Archetype Bank ---------------- */
    var page5Html = '';
    if (totalPages === 5) {
      var optLetters = ['A', 'B', 'C', 'D'];
      var mcqCards = (u.mcq || []).map(function (m, mIdx) {
        return '' +
          '<div class="f-card" id="notesMcq_' + mIdx + '">' +
            '<div class="f-top">' +
              '<span class="f-name">PYQ Archetype #' + (mIdx + 1) + '</span>' +
              '<span class="badge badge-crit">' + esc(m.tag || 'High-Yield Concept') + '</span>' +
            '</div>' +
            '<div style="font-weight:600;font-size:13px;margin:4px 0;">' + m.q + '</div>' +
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;font-size:12px;">' +
              (m.o || []).map(function (opt, oi) {
                return '<button class="tool-chip" style="text-align:left;padding:5px 8px;" data-inline-mcq="' + mIdx + '" data-oi="' + oi + '" data-ans="' + m.a + '">' +
                  '<b>' + optLetters[oi] + '.</b> ' + opt +
                '</button>';
              }).join('') +
            '</div>' +
            '<div class="f-bound recall-target" id="notesMcqSol_' + mIdx + '" style="margin-top:6px;">' +
              '<b>✔ Answer (' + optLetters[m.a] + '): ' + (m.o ? m.o[m.a] : '') + '</b><br>' +
              (m.sol || []).join(' ➔ ') +
            '</div>' +
          '</div>';
      }).join('');

      page5Html = '' +
        '<div class="print-page-break"></div>' +
        '<div class="notes-page-sheet" data-sheet-page="5" style="' + (state.notesPageFilter && state.notesPageFilter !== 5 ? 'display:none;' : '') + '">' +
          '<div class="page-ribbon">' +
            '<span><b>PAGE 5 OF 5 (HIGH-WEIGHTAGE CHAPTER EXTENSION)</b> · SOLVED PYQ ARCHETYPES &amp; DEEP APPLICATION</span>' +
            '<span>' + u.id + ': ' + esc(u.name) + '</span>' +
          '</div>' +
          '<section class="memory-block block-blue">' +
            '<div class="block-hdr">' +
              '<span class="block-title">PAGE 5 · HIGH-WEIGHTAGE NEET ARCHETYPE WORKBOOK (CLICK ANY OPTION TO TEST)</span>' +
              '<span style="font-size:11.5px;color:var(--text-muted)">' + (u.mcq || []).length + ' Solved Multi-Concept Cases</span>' +
            '</div>' +
            '<div class="formula-grid">' + mcqCards + '</div>' +
          '</section>' +
        '</div>';
    }

    var qTarget = NEET.qcount(u);

    /* Top Page Switcher Pills */
    var pagePillsHtml = '' +
      '<div class="page-pills no-print">' +
        '<button class="page-pill ' + (state.notesPageFilter === 0 ? 'active' : '') + '" data-pg-jump="0">All ' + totalPages + ' Pages (Full Chapter)</button>' +
        '<button class="page-pill ' + (state.notesPageFilter === 1 ? 'active' : '') + '" data-pg-jump="1">Page 1: Formulas &amp; Live Sandbox (' + (u.formulas || []).length + ')</button>' +
        '<button class="page-pill ' + (state.notesPageFilter === 2 ? 'active' : '') + '" data-pg-jump="2">Page 2: NCERT Exceptions &amp; Orders (' + ((u.traps || []).length + (u.orders || []).length) + ')</button>' +
        '<button class="page-pill ' + (state.notesPageFilter === 3 ? 'active' : '') + '" data-pg-jump="3">Page 3: Visual Flowcharts &amp; Flip-Deck (' + ((u.flows || []).length + allPairs.length) + ')</button>' +
        '<button class="page-pill ' + (state.notesPageFilter === 4 ? 'active' : '') + '" data-pg-jump="4">Page 4: Lab Triggers &amp; NCERT Line Spotter</button>' +
        (totalPages === 5 ? '<button class="page-pill ' + (state.notesPageFilter === 5 ? 'active' : '') + '" data-pg-jump="5">Page 5: High-Weightage PYQ Workbook (' + (u.mcq || []).length + ')</button>' : '') +
      '</div>';

    root.innerHTML = '' +
      '<div class="notes-bar no-print">' +
        '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">' +
          '<select class="unit-select" id="notesUnitSelect">' + optionsHtml + '</select>' +
          '<button class="blind-toggle ' + (state.blindRecall ? 'active' : '') + '" id="blindToggleBtn">' +
            (state.blindRecall ? '👁 Blind Recall ON (Click any blurred item to reveal)' : '🔒 Activate Blind Recall Mode') +
          '</button>' +
          (state.blindRecall ? '<button class="btn" id="resetRevealBtn">Re-Blur All</button>' : '') +
          '<div class="seg-group">' +
            '<button class="seg-btn ' + (state.notesItemFilter === 'all' ? 'active' : '') + '" data-item-flt="all">All Notes</button>' +
            '<button class="seg-btn ' + (state.notesItemFilter === 'starred' ? 'active' : '') + '" data-item-flt="starred">★ Starred (' + starredCount + ')</button>' +
            '<button class="seg-btn ' + (state.notesItemFilter === 'unmastered' ? 'active' : '') + '" data-item-flt="unmastered">Unmastered</button>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">' +
          '<span class="badge badge-lock">Mastered: ' + masteryPct + '% (' + masteredCount + '/' + totalTrackable + ')</span>' +
          '<button class="btn" id="printSheetBtn">🖨 Print ' + totalPages + '-Page Complete Notes</button>' +
          '<button class="btn btn-primary" id="startUnitDrillBtn">⚡ Launch ' + qTarget + 'Q Reflex Drill</button>' +
        '</div>' +
      '</div>' +

      pagePillsHtml +

      '<div id="pictographicSheet" class="' + (state.blindRecall ? 'blind-active' : '') + '">' +
        /* Chapter Header Banner */
        '<div class="sheet-unit-banner">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">' +
            '<div style="display:flex;gap:8px;align-items:center;">' +
              '<span class="badge badge-mock">' + u.id + ' · ' + esc(u.subj) + '</span>' +
              '<span class="badge badge-neutral">' + totalPages + '-Page Complete Short-Notes Replacement</span>' +
            '</div>' +
            '<span style="font-family:var(--font-mono);font-size:11.5px;color:var(--text-muted)">100% NCERT + Official NMC 2026 Syllabus Aligned</span>' +
          '</div>' +
          '<div class="sheet-unit-title">' + u.id + ': ' + esc(u.name) + '</div>' +
          '<div class="sheet-unit-syl"><b>Complete Chapter Roadmap:</b> ' + esc(u.syl) + '</div>' +
        '</div>' +

        /* PAGE 1 */
        '<div class="notes-page-sheet" data-sheet-page="1" style="' + (state.notesPageFilter && state.notesPageFilter !== 1 ? 'display:none;' : '') + '">' +
          '<div class="page-ribbon">' +
            '<span><b>PAGE 1 OF ' + totalPages + '</b> · BLUE FORMULA, NAMED REACTIONS, SIGN CONVENTIONS &amp; BOUNDARY LIMITS</span>' +
            '<span>Click ☆ Star or ✔ Master on each card to track your revision</span>' +
          '</div>' +
          '<section class="memory-block block-blue">' +
            '<div class="block-hdr">' +
              '<span class="block-title">PAGE 1 · MASTER FORMULA, SIGN CONVENTION &amp; BOUNDARY FAILURE MATRIX</span>' +
              '<span style="font-size:11.5px;color:var(--text-muted)">' + (u.formulas || []).length + ' Core Relations</span>' +
            '</div>' +
            '<div class="formula-grid">' + formulasHtml + '</div>' +
            sandboxHtml +
          '</section>' +
        '</div>' +

        /* PAGE 2 */
        '<div class="print-page-break"></div>' +
        '<div class="notes-page-sheet" data-sheet-page="2" style="' + (state.notesPageFilter && state.notesPageFilter !== 2 ? 'display:none;' : '') + '">' +
          '<div class="page-ribbon">' +
            '<span><b>PAGE 2 OF ' + totalPages + '</b> · RED-FLAG NTA TRAP VAULT, NCERT ANOMALIES &amp; PRIORITY ORDERS</span>' +
            '<span>Use "🔀 Scramble &amp; Test" to actively practice exception orders</span>' +
          '</div>' +
          '<section class="memory-block block-red">' +
            '<div class="block-hdr">' +
              '<span class="block-title">PAGE 2 · RED-FLAG NTA TRAP, EXCEPTION &amp; PRIORITY ORDER VAULT</span>' +
              '<span style="font-size:11.5px;color:var(--text-muted)">Every Exception Explained in Easy Language</span>' +
            '</div>' +
            '<div class="trap-grid">' + trapsHtml + '</div>' +
            (ordersHtml ? '<div style="margin-top:14px;font-weight:800;font-size:12px;color:var(--red-tx);text-transform:uppercase;font-family:var(--font-mono)">Interactive NCERT Trend &amp; Priority Orders (Click Scramble to Self-Test)</div><div class="order-strip">' + ordersHtml + '</div>' : '') +
          '</section>' +
        '</div>' +

        /* PAGE 3 */
        '<div class="print-page-break"></div>' +
        '<div class="notes-page-sheet" data-sheet-page="3" style="' + (state.notesPageFilter && state.notesPageFilter !== 3 ? 'display:none;' : '') + '">' +
          '<div class="page-ribbon">' +
            '<span><b>PAGE 3 OF ' + totalPages + '</b> · GREEN VISUAL ALGORITHMS, REACTION MAPS &amp; CUE→RESPONSE FLIP DECK</span>' +
            '<span>Click any Flash-Trigger card below to flip or reveal</span>' +
          '</div>' +
          '<section class="memory-block block-green">' +
            '<div class="block-hdr">' +
              '<span class="block-title">PAGE 3 · VISUAL DECISION TREES, REACTION PATHWAYS &amp; RAPID FLIP-DECK</span>' +
              '<span style="font-size:11.5px;color:var(--text-muted)">' + (u.flows || []).length + ' Visual Maps + ' + allPairs.length + ' Rapid Triggers</span>' +
            '</div>' +
            '<div class="flow-stack">' + flowsHtml + '</div>' +
            '<div style="margin-top:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">' +
              '<span style="font-weight:800;font-size:12px;color:var(--green-tx);text-transform:uppercase;font-family:var(--font-mono)">Complete One-Look Cue ➔ Response Flash Deck (' + allPairs.length + ' Cards)</span>' +
              '<button class="tool-chip no-print" id="hideAllPairsBtn">🙈 Hide All Answers for Self-Quiz</button>' +
            '</div>' +
            '<div class="lab-grid" style="margin-top:8px;">' + pairsHtml + '</div>' +
          '</section>' +
        '</div>' +

        /* PAGE 4 */
        '<div class="print-page-break"></div>' +
        '<div class="notes-page-sheet" data-sheet-page="4" style="' + (state.notesPageFilter && state.notesPageFilter !== 4 ? 'display:none;' : '') + '">' +
          '<div class="page-ribbon">' +
            '<span><b>PAGE 4 OF ' + totalPages + '</b> · AMBER PRACTICAL LAB TRIGGERS, NCERT LINE SPOTTER &amp; PERSONAL NOTES</span>' +
            '<span>Spot True NCERT Lines vs Planted Exam Myths</span>' +
          '</div>' +
          '<section class="memory-block block-amber">' +
            '<div class="block-hdr">' +
              '<span class="block-title">PAGE 4 · PRACTICAL / EXPERIMENTAL TRIGGERS &amp; NCERT LINE-BY-LINE TRUTH SPOTTER</span>' +
              '<span style="font-size:11.5px;color:var(--text-muted)">Lab Colours, Apparatus &amp; Statement Traps</span>' +
            '</div>' +
            '<div class="lab-grid">' + labHtml + '</div>' +
            '<div style="margin-top:16px;font-weight:800;font-size:12px;color:var(--amber-tx);text-transform:uppercase;font-family:var(--font-mono)">Interactive NCERT Line-by-Line Truth vs Myth Spotter (' + combinedStmts.length + ' Statements)</div>' +
            '<div class="stmt-grid" style="margin-top:8px;">' + stmtSpotterHtml + '</div>' +
            stickyHtml +
          '</section>' +
        '</div>' +

        /* PAGE 5 (Conditional for Major Chapters) */
        page5Html +
      '</div>';

    /* ---------------- Bind Interactive Short-Notes Controls ---------------- */
    document.getElementById('notesUnitSelect').addEventListener('change', function (e) {
      state.currentUnit = e.target.value;
      state.notesPageFilter = 0;
      saveState();
      renderNotes(root);
    });
    document.getElementById('blindToggleBtn').addEventListener('click', function () {
      state.blindRecall = !state.blindRecall;
      saveState();
      renderNotes(root);
    });
    var resetBtn = document.getElementById('resetRevealBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () { renderNotes(root); });
    }
    document.getElementById('printSheetBtn').addEventListener('click', function () {
      var prevPage = state.notesPageFilter;
      state.notesPageFilter = 0;
      renderNotes(root);
      window.print();
      state.notesPageFilter = prevPage;
      renderNotes(root);
    });
    document.getElementById('startUnitDrillBtn').addEventListener('click', function () {
      startDrill(u.id);
    });

    /* Page switcher pills */
    root.querySelectorAll('[data-pg-jump]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.notesPageFilter = parseInt(btn.getAttribute('data-pg-jump'), 10);
        renderNotes(root);
      });
    });

    /* Item filter (All / Starred / Unmastered) */
    root.querySelectorAll('[data-item-flt]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.notesItemFilter = btn.getAttribute('data-item-flt');
        renderNotes(root);
      });
    });

    /* Star & Master toggles */
    root.querySelectorAll('[data-star-key]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var k = btn.getAttribute('data-star-key');
        if (state.starredItems[k]) delete state.starredItems[k];
        else state.starredItems[k] = true;
        saveState();
        renderNotes(root);
      });
    });
    root.querySelectorAll('[data-master-key]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var k = btn.getAttribute('data-master-key');
        if (state.masteredItems[k]) delete state.masteredItems[k];
        else state.masteredItems[k] = true;
        saveState();
        renderNotes(root);
      });
    });

    /* Live Formula Numerical Sandbox */
    var sbContent = document.getElementById('sandboxContent');
    var rollSandbox = function () {
      if (!sbContent || !u.gens || !u.gens.length) return;
      var qObj = NEET.GEN.G1(u);
      if (!qObj) return;
      sbContent.innerHTML = '' +
        '<div style="font-weight:700;margin-bottom:6px;">Q: ' + qObj.q + '</div>' +
        '<div id="sbSolArea" style="padding:8px 10px;border-radius:5px;background:var(--bg-card);border-left:3px solid var(--green-bd);">' +
          '<div style="color:var(--green-tx);font-weight:800;margin-bottom:4px;">✔ Answer: ' + qObj.o[qObj.a] + '</div>' +
          '<ol style="padding-left:18px;font-size:12.5px;">' + (qObj.sol || []).map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol>' +
        '</div>';
    };
    if (sbContent) {
      rollSandbox();
      document.getElementById('rollSandboxBtn').addEventListener('click', rollSandbox);
      document.getElementById('toggleSandboxSolBtn').addEventListener('click', function () {
        var area = document.getElementById('sbSolArea');
        if (area) area.style.display = area.style.display === 'none' ? 'block' : 'none';
      });
    }

    /* Interactive Order Scramble Trainer */
    root.querySelectorAll('[data-scramble-ord]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.getAttribute('data-scramble-ord'), 10);
        var o = u.orders[idx];
        var seqEl = document.getElementById('ordSeq_' + idx);
        var boxEl = document.getElementById('ordScrambleBox_' + idx);
        if (!o || !boxEl) return;
        seqEl.style.display = 'none';
        boxEl.style.display = 'block';
        var shuffled = NEET.R.shuffle(o.s.slice());
        var picked = [];
        var sep = ' ' + (o.sep || '>') + ' ';

        var renderScr = function (msg) {
          boxEl.innerHTML = '' +
            '<div style="font-size:11.5px;color:var(--amber-tx);margin-top:4px;">' + (msg || 'Click items in the exact order (' + (o.sep || '>') + '):') + '</div>' +
            '<div class="scramble-chips">' +
              shuffled.map(function (item, sIdx) {
                var used = picked.indexOf(item) !== -1;
                return '<button class="scr-chip ' + (used ? 'picked' : '') + '" data-pick-item="' + sIdx + '" ' + (used ? 'disabled' : '') + '>' + item + '</button>';
              }).join('') +
            '</div>' +
            (picked.length ? '<div style="margin-top:6px;font-family:var(--font-mono);font-size:12px;">Your sequence: <b>' + picked.join(sep) + '</b></div>' : '');

          boxEl.querySelectorAll('[data-pick-item]').forEach(function (cBtn) {
            cBtn.addEventListener('click', function () {
              var cand = shuffled[parseInt(cBtn.getAttribute('data-pick-item'), 10)];
              var expected = o.s[picked.length];
              if (cand === expected) {
                picked.push(cand);
                if (picked.length === o.s.length) {
                  seqEl.style.display = 'block';
                  boxEl.innerHTML = '<div style="color:var(--green-tx);font-weight:700;font-size:12px;margin-top:4px;">✔ Perfect Recall! Sequence verified.</div>';
                } else {
                  renderScr('✔ Correct! Pick next item:');
                }
              } else {
                cBtn.classList.add('wrong-pick');
                renderScr('✘ Watch out! Expected "' + expected + '" before "' + cand + '". Try clicking "' + expected + '".');
              }
            });
          });
        };
        renderScr();
      });
    });

    /* Interactive Step-by-Step Pathway Walker */
    root.querySelectorAll('[data-step-walk]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var fIdx = btn.getAttribute('data-step-walk');
        var steps = root.querySelectorAll('.flow-step-' + fIdx);
        steps.forEach(function (el) { el.style.opacity = '0.12'; });
        var cur = 0;
        var stepTimer = setInterval(function () {
          if (cur >= steps.length) { clearInterval(stepTimer); return; }
          steps[cur].style.opacity = '1';
          steps[cur].classList.add('revealed');
          cur++;
        }, 480);
      });
    });

    /* Flash-Trigger Cue→Response Flip Cards */
    var hidePairsBtn = document.getElementById('hideAllPairsBtn');
    if (hidePairsBtn) {
      hidePairsBtn.addEventListener('click', function () {
        root.querySelectorAll('.pair-ans').forEach(function (el) {
          el.style.visibility = el.style.visibility === 'hidden' ? 'visible' : 'hidden';
        });
      });
    }
    root.querySelectorAll('.flip-pair-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var ans = card.querySelector('.pair-ans');
        if (ans) ans.style.visibility = ans.style.visibility === 'hidden' ? 'visible' : 'hidden';
      });
    });

    /* Interactive NCERT Statement Truth-vs-Myth Spotter */
    root.querySelectorAll('[data-stmt-guess]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sIdx = btn.getAttribute('data-stmt-guess');
        var guess = btn.getAttribute('data-guess') === 'true';
        var actual = btn.getAttribute('data-actual') === 'true';
        var card = document.getElementById('stmtCard_' + sIdx);
        var badge = document.getElementById('stmtBadge_' + sIdx);
        if (card) card.className = 'stmt-card ' + (actual ? 'revealed-true' : 'revealed-false');
        if (badge) {
          badge.classList.add('revealed');
          badge.textContent = (guess === actual ? '✔ SPOT ON! ' : '✘ TRAP HIT! ') + (actual ? 'Statement is NCERT TRUE' : 'Statement is FALSE (Planted Myth)');
        }
      });
    });

    /* Page 5 Inline PYQ Archetype Check */
    root.querySelectorAll('[data-inline-mcq]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var mIdx = btn.getAttribute('data-inline-mcq');
        var oi = parseInt(btn.getAttribute('data-oi'), 10);
        var ans = parseInt(btn.getAttribute('data-ans'), 10);
        var solEl = document.getElementById('notesMcqSol_' + mIdx);
        if (oi === ans) btn.classList.add('mastered');
        else btn.classList.add('wrong-pick');
        if (solEl) solEl.classList.add('revealed');
      });
    });

    /* Sticky Notes auto-save */
    var stickyEl = document.getElementById('unitStickyInput');
    if (stickyEl) {
      stickyEl.addEventListener('input', function () {
        state.userNotes[u.id] = stickyEl.value;
        saveState();
      });
    }

    /* Click-to-reveal in Blind Recall mode */
    root.querySelectorAll('.recall-target').forEach(function (el) {
      el.addEventListener('click', function () {
        if (state.blindRecall) el.classList.toggle('revealed');
      });
    });
  }

  /* ==========================================================================
     VIEW 4: COGNITIVE REFLEX DRILL & 3-ROUND EXAM TRAINER
     ========================================================================== */
  function startDrill(unitId) {
    var u = NEET.units[unitId] || NEET.units[state.currentUnit] || NEET.units[NEET.order[0]];
    state.currentUnit = u.id;
    var qs = NEET.build(u.id);
    drillSession = {
      unitId: u.id,
      questions: qs,
      idx: 0,
      round: 1,
      secOnQ: 0,
      status: qs.map(function () { return 'unseen'; }), // 'unseen' | 'ans' | 'r2'
      chosen: qs.map(function () { return null; }),
      finished: false
    };
    switchTab('drill', u.id);
  }

  function startPaceTimer() {
    if (paceTimer) clearInterval(paceTimer);
    if (!drillSession || drillSession.finished) return;
    drillSession.secOnQ = 0;
    paceTimer = setInterval(function () {
      if (!drillSession || drillSession.finished || state.tab !== 'drill') return;
      drillSession.secOnQ++;
      var bar = document.getElementById('paceBarFill');
      var lbl = document.getElementById('paceSecLabel');
      var pct = Math.min(100, (drillSession.secOnQ / 60) * 100);
      if (bar) {
        bar.style.width = pct + '%';
        bar.className = 'pace-bar' + (drillSession.secOnQ >= 60 ? ' over' : (drillSession.secOnQ >= 45 ? ' warn' : ''));
      }
      if (lbl) {
        lbl.textContent = drillSession.secOnQ + 's / 60s Pace' + (drillSession.secOnQ >= 60 ? ' — Skip to Round 2 if stuck!' : '');
      }
    }, 1000);
  }

  function finishDrill() {
    if (!drillSession) return;
    drillSession.finished = true;
    if (paceTimer) { clearInterval(paceTimer); paceTimer = null; }

    var correct = 0;
    drillSession.questions.forEach(function (q, i) {
      if (drillSession.chosen[i] === q.a) correct++;
    });
    var acc = Math.round((correct / drillSession.questions.length) * 100);
    var st = getUnitStats(drillSession.unitId);
    st.last = Date.now();
    st.count = (st.count || 0) + 1;
    if (st.best === null || acc > st.best) st.best = acc;
    saveState();
    render();
  }

  function renderDrill(root) {
    if (!drillSession || drillSession.unitId !== state.currentUnit) {
      var u0 = NEET.units[state.currentUnit] || NEET.units[NEET.order[0]];
      var qs0 = NEET.build(u0.id);
      drillSession = {
        unitId: u0.id,
        questions: qs0,
        idx: 0,
        round: 1,
        secOnQ: 0,
        status: qs0.map(function () { return 'unseen'; }),
        chosen: qs0.map(function () { return null; }),
        finished: false
      };
    }

    var u = NEET.units[drillSession.unitId];
    var qs = drillSession.questions;
    var i = drillSession.idx;
    var q = qs[i];
    var chosen = drillSession.chosen[i];
    var answeredCount = drillSession.chosen.filter(function (c) { return c !== null; }).length;
    var r2Count = drillSession.status.filter(function (s) { return s === 'r2'; }).length;

    var optionsHtml = NEET.order.map(function (id) {
      var item = NEET.units[id];
      return '<option value="' + id + '" ' + (id === u.id ? 'selected' : '') + '>' + id + ' — ' + esc(item.name) + ' (' + NEET.qcount(item) + 'Q)</option>';
    }).join('');

    if (drillSession.finished) {
      var cor = 0, wrg = 0, skp = 0;
      qs.forEach(function (item, idx) {
        if (drillSession.chosen[idx] === null) skp++;
        else if (drillSession.chosen[idx] === item.a) cor++;
        else wrg++;
      });
      var acc = Math.round((cor / qs.length) * 100);
      var neetScore = cor * 4 - wrg * 1;
      var maxScore = qs.length * 4;

      root.innerHTML = '' +
        '<div class="panel-box" style="max-width:780px;margin:0 auto;">' +
          '<div class="badge badge-mock" style="margin-bottom:8px;">DRILL COMPLETED · ' + u.id + '</div>' +
          '<h2 style="font-size:21px;margin-bottom:6px;">' + esc(u.name) + ' — Tactical Debrief</h2>' +
          '<p style="color:var(--text-muted);font-size:13px;margin-bottom:16px;">Spaced Repetition Radar updated. All wrong answers have been automatically logged to your Personal Mistake Vault.</p>' +
          '<div class="radar-grid">' +
            '<div class="radar-box lock"><div class="radar-title">Accuracy</div><div style="font-size:26px;font-weight:800;margin-top:4px;">' + acc + '%</div><div class="radar-desc">' + cor + ' Correct / ' + qs.length + ' Total</div></div>' +
            '<div class="radar-box due"><div class="radar-title">NEET (+4 / −1) Score</div><div style="font-size:26px;font-weight:800;margin-top:4px;">' + neetScore + ' / ' + maxScore + '</div><div class="radar-desc">' + wrg + ' Negative Traps Hit · ' + skp + ' Unattempted</div></div>' +
          '</div>' +
          '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;">' +
            '<button class="btn btn-primary" id="regenDrillBtn">↻ Generate Fresh ' + qs.length + 'Q Parametric Set</button>' +
            '<button class="btn" id="reviewDrillBtn">Inspect Questions</button>' +
            '<button class="btn" id="openVaultFromDrill">Open Mistake Vault (' + state.vault.length + ')</button>' +
          '</div>' +
        '</div>';

      document.getElementById('regenDrillBtn').addEventListener('click', function () { startDrill(u.id); });
      document.getElementById('reviewDrillBtn').addEventListener('click', function () {
        drillSession.finished = false;
        drillSession.idx = 0;
        renderDrill(root);
      });
      document.getElementById('openVaultFromDrill').addEventListener('click', function () { switchTab('vault'); });
      return;
    }

    var optLetters = ['A', 'B', 'C', 'D'];
    var optButtons = q.o.map(function (optText, oi) {
      var cls = 'opt-btn';
      if (chosen !== null) {
        if (oi === q.a) cls += ' correct';
        else if (oi === chosen) cls += ' wrong';
      }
      return '<button class="' + cls + '" data-opt="' + oi + '" ' + (chosen !== null ? 'disabled' : '') + '>' +
        '<span class="opt-key">' + optLetters[oi] + '</span>' +
        '<span>' + optText + '</span>' +
      '</button>';
    }).join('');

    var solHtml = '';
    if (chosen !== null) {
      var isOk = chosen === q.a;
      solHtml = '' +
        '<div class="sol-box">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">' +
            '<span style="font-weight:800;color:' + (isOk ? 'var(--green-tx)' : 'var(--red-tx)') + '">' +
              (isOk ? '✔ CORRECT (+4 Marks)' : '✘ TRAP TRIGGERED (−1 Mark · Saved to Mistake Vault)') +
            '</span>' +
            '<span class="badge badge-crit">' + esc(q.tag || 'Concept Trap') + '</span>' +
          '</div>' +
          '<ol class="sol-steps">' +
            (q.sol || []).map(function (s) { return '<li>' + s + '</li>'; }).join('') +
          '</ol>' +
        '</div>';
    }

    var paletteHtml = qs.map(function (_, qi) {
      var cls = 'pal-btn';
      if (qi === i) cls += ' cur';
      if (drillSession.chosen[qi] !== null) {
        cls += (drillSession.chosen[qi] === qs[qi].a) ? ' ok' : ' err';
      } else if (drillSession.status[qi] === 'r2') {
        cls += ' r2';
      }
      return '<button class="' + cls + '" data-jump="' + qi + '">' + (qi + 1) + '</button>';
    }).join('');

    root.innerHTML = '' +
      '<div class="drill-header">' +
        '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">' +
          '<select class="unit-select" id="drillUnitSelect">' + optionsHtml + '</select>' +
          '<span class="badge badge-mock">ROUND ' + drillSession.round + ' TRIAGE</span>' +
          '<span style="font-family:var(--font-mono);font-size:12px;color:var(--text-muted)" id="paceSecLabel">0s / 60s Pace</span>' +
        '</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
          (r2Count > 0 ? '<button class="btn btn-amber" id="jumpRound2Btn">Jump to Round-2 Queue (' + r2Count + ')</button>' : '') +
          '<button class="btn" id="newParamSetBtn">↻ New Parametric Set</button>' +
          '<button class="btn btn-primary" id="finishDrillBtn">Finish &amp; Log Score (' + answeredCount + '/' + qs.length + ')</button>' +
        '</div>' +
      '</div>' +

      '<div class="pace-wrap"><div class="pace-bar" id="paceBarFill" style="width:0%"></div></div>' +

      '<div class="drill-layout">' +
        '<div class="q-panel">' +
          '<div class="q-meta">' +
            '<span>QUESTION ' + (i + 1) + ' OF ' + qs.length + ' · ' + esc(q.src || 'Synthesis Engine') + '</span>' +
            '<span class="badge badge-neutral">' + esc(q.tag || 'NEET Trap') + '</span>' +
          '</div>' +
          '<div class="q-stem">' + q.q + '</div>' +
          '<div class="opt-list">' + optButtons + '</div>' +

          '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">' +
            '<div style="display:flex;gap:8px;">' +
              '<button class="btn" id="prevQBtn" ' + (i === 0 ? 'disabled' : '') + '>← Prev</button>' +
              '<button class="btn btn-amber" id="markR2SkipBtn">⚑ Mark for Round 2 &amp; Skip</button>' +
            '</div>' +
            '<button class="btn btn-primary" id="nextQBtn">' + (i === qs.length - 1 ? 'Finish Drill →' : 'Next Question →') + '</button>' +
          '</div>' +
          solHtml +
        '</div>' +

        '<div class="panel-box">' +
          '<div class="panel-title"><span>3-Round Question Palette</span></div>' +
          '<div style="font-size:11.5px;color:var(--text-muted);margin-bottom:8px;">' +
            '<b>Round 1:</b> Instant <45s hits.<br><b>Round 2 (Amber):</b> Ego-free skips for second pass.' +
          '</div>' +
          '<div class="palette-grid">' + paletteHtml + '</div>' +
        '</div>' +
      '</div>';

    startPaceTimer();

    document.getElementById('drillUnitSelect').addEventListener('change', function (e) {
      startDrill(e.target.value);
    });
    document.getElementById('newParamSetBtn').addEventListener('click', function () {
      startDrill(u.id);
    });
    document.getElementById('finishDrillBtn').addEventListener('click', finishDrill);

    root.querySelectorAll('[data-opt]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var oi = parseInt(btn.getAttribute('data-opt'), 10);
        drillSession.chosen[i] = oi;
        drillSession.status[i] = 'ans';
        if (oi !== q.a) {
          var st = getUnitStats(u.id);
          st.mistakes = (st.mistakes || 0) + 1;
          var dup = state.vault.some(function (v) { return v.unit === u.id && NEET.strip(v.q) === NEET.strip(q.q); });
          if (!dup) {
            state.vault.unshift({
              id: 'V' + Date.now() + '_' + Math.floor(Math.random() * 999),
              unit: u.id,
              q: q.q,
              o: q.o,
              a: q.a,
              chosen: oi,
              tag: q.tag || 'Concept Trap',
              sol: q.sol || [],
              ts: Date.now()
            });
          }
          saveState();
        }
        renderDrill(root);
      });
    });

    document.getElementById('prevQBtn').addEventListener('click', function () {
      if (drillSession.idx > 0) { drillSession.idx--; renderDrill(root); }
    });
    document.getElementById('nextQBtn').addEventListener('click', function () {
      if (drillSession.idx < qs.length - 1) { drillSession.idx++; renderDrill(root); }
      else finishDrill();
    });
    document.getElementById('markR2SkipBtn').addEventListener('click', function () {
      if (drillSession.chosen[i] === null) drillSession.status[i] = 'r2';
      drillSession.idx = (drillSession.idx + 1) % qs.length;
      renderDrill(root);
    });
    var r2Btn = document.getElementById('jumpRound2Btn');
    if (r2Btn) {
      r2Btn.addEventListener('click', function () {
        drillSession.round = 2;
        var nextR2 = drillSession.status.indexOf('r2');
        if (nextR2 !== -1) drillSession.idx = nextR2;
        renderDrill(root);
      });
    }
    root.querySelectorAll('[data-jump]').forEach(function (b) {
      b.addEventListener('click', function () {
        drillSession.idx = parseInt(b.getAttribute('data-jump'), 10);
        renderDrill(root);
      });
    });
  }

  /* ==========================================================================
     VIEW 5: PERSONAL MISTAKE VAULT
     ========================================================================== */
  function renderVault(root) {
    var list = state.vault;
    if (!list.length) {
      root.innerHTML = '' +
        '<div class="panel-box" style="text-align:center;padding:36px;">' +
          '<h3 style="margin-bottom:6px;">Personal Mistake Vault is Clean</h3>' +
          '<p style="color:var(--text-muted);font-size:13px;">Every wrong answer you hit in the 3-Round Reflex Drill is automatically captured here with its trap badge and visual step-by-step solution.</p>' +
        '</div>';
      return;
    }

    var optLetters = ['A', 'B', 'C', 'D'];
    var cards = list.map(function (v) {
      var u = NEET.units[v.unit];
      return '' +
        '<div class="q-panel" style="margin-bottom:12px;">' +
          '<div class="q-meta">' +
            '<span><b>' + v.unit + '</b> · ' + esc(u ? u.name : '') + ' · Logged ' + formatAgo(v.ts) + '</span>' +
            '<div style="display:flex;gap:8px;align-items:center;">' +
              '<span class="badge badge-crit">' + esc(v.tag) + '</span>' +
              '<button class="btn btn-danger" data-del-vault="' + v.id + '" style="padding:3px 8px;font-size:11px;">Remove</button>' +
            '</div>' +
          '</div>' +
          '<div class="q-stem" style="font-size:14px;">' + v.q + '</div>' +
          '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px;font-size:12.5px;margin-bottom:10px;">' +
            v.o.map(function (o, oi) {
              var bd = oi === v.a ? 'var(--green-bd)' : (oi === v.chosen ? 'var(--red-bd)' : 'var(--border)');
              var bg = oi === v.a ? 'var(--green-bg)' : (oi === v.chosen ? 'var(--red-bg)' : 'var(--bg-card)');
              return '<div style="padding:7px 10px;border-radius:5px;border:1px solid ' + bd + ';background:' + bg + '"><b>' + optLetters[oi] + '.</b> ' + o + '</div>';
            }).join('') +
          '</div>' +
          '<div class="sol-box" style="margin-top:6px;padding:10px 12px;">' +
            '<b>Visual Solution:</b>' +
            '<ol class="sol-steps">' + (v.sol || []).map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol>' +
          '</div>' +
        '</div>';
    }).join('');

    root.innerHTML = '' +
      '<div class="toolbar">' +
        '<div><b>' + list.length + ' Logged Traps</b> — Review before every mock test to eliminate repeat negative marking.</div>' +
        '<button class="btn btn-danger" id="clearVaultBtn">Clear Entire Mistake Vault</button>' +
      '</div>' +
      cards;

    document.getElementById('clearVaultBtn').addEventListener('click', function () {
      state.vault = [];
      saveState();
      renderVault(root);
    });
    root.querySelectorAll('[data-del-vault]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-del-vault');
        state.vault = state.vault.filter(function (x) { return x.id !== id; });
        saveState();
        renderVault(root);
      });
    });
  }

  /* ---------------- Bootstrapping ---------------- */
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme();
    document.querySelectorAll('#mainNav .tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchTab(btn.getAttribute('data-tab'));
      });
    });
    var themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme();
        saveState();
      });
    }
    render();
  });
})();
