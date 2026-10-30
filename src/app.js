/* ==========================================================================
   APP ENGINE: State Store, Spaced Repetition Radar, Smart Syllabus Parser,
   4-Block Pictographic Sheet Renderer, 3-Round Cognitive Drill, Mistake Vault
   Enhanced with Modern UI, Fluid Animations, Light & Dark Theme Design
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
      statusFilter: 'all',    // 'all' | 'crit' | 'due' | 'lock'
      subjFilter: 'ALL',      // 'ALL' | 'Physics' | 'Physical Chemistry' | 'Inorganic Chemistry' | 'Organic Chemistry' | 'Practical Chemistry'
      search: '',
      currentUnit: 'P1',
      blindRecall: false,
      notesViewMode: 'sheets', // 'sheets' | 'guide' | 'blitz' | 'traps'
      notesPageFilter: 0,     // 0 = Show All Pages, 1..5 = Jump/Focus Page
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

  /* ---------------- Toast Notification System ---------------- */
  function showToast(msg, type) {
    var container = document.getElementById('toastContainer');
    if (!container) return;
    var t = document.createElement('div');
    t.className = 'toast ' + (type ? 'toast-' + type : 'toast-success');
    var icon = type === 'error' ? '⚠️' : (type === 'warn' ? '🔔' : '✨');
    t.innerHTML = '<span>' + icon + '</span><span>' + esc(msg) + '</span>';
    container.appendChild(t);
    setTimeout(function () {
      t.style.opacity = '0';
      t.style.transform = 'translateY(10px)';
      setTimeout(function () {
        if (t.parentNode) t.parentNode.removeChild(t);
      }, 300);
    }, 2800);
  }

  /* ---------------- Confetti Celebration Particles ---------------- */
  function fireConfetti() {
    var canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var W = canvas.width = window.innerWidth;
    var H = canvas.height = window.innerHeight;

    var colors = ['#0d9488', '#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'];
    var particles = [];
    for (var i = 0; i < 90; i++) {
      particles.push({
        x: W / 2,
        y: H / 2,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.8) * 16,
        r: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10,
        tiltV: Math.random() * 0.1 - 0.05,
        alpha: 1,
        life: 1
      });
    }

    var start = Date.now();
    function step() {
      var elapsed = (Date.now() - start) / 1000;
      ctx.clearRect(0, 0, W, H);
      var alive = false;
      particles.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.vx *= 0.98; // drag
        p.tilt += p.tiltV;
        p.life -= 0.015;
        if (p.life > 0) {
          alive = true;
          ctx.beginPath();
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.fillStyle = p.color;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.tilt);
          ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.5);
          ctx.restore();
        }
      });
      if (alive && elapsed < 2.5) {
        requestAnimationFrame(step);
      } else {
        ctx.clearRect(0, 0, W, H);
      }
    }
    requestAnimationFrame(step);
  }

  /* ---------------- Unit Statistics & SRS Logic ---------------- */
  function getUnitStats(id) {
    if (!state.units[id]) {
      state.units[id] = { last: 0, count: 0, best: null, mistakes: 0 };
    }
    return state.units[id];
  }

  function computeSRS(id) {
    var st = getUnitStats(id);
    var inMock = state.mock.indexOf(id) !== -1;
    var now = Date.now();
    var daysSince = st.last ? (now - st.last) / 86400000 : 9999;
    var interval = st.count > 0 ? DECAY_DAYS[Math.min(st.count - 1, 3)] : 0;

    if (inMock && (st.count === 0 || (st.best !== null && st.best < 75))) {
      return { code: 'crit', label: 'CRITICAL', reason: st.count === 0 ? 'Mock Unit · Unrevised' : 'Mock Unit · Acc ' + st.best + '% (<75%)' };
    }
    if (st.count > 0 && daysSince >= interval) {
      return { code: 'due', label: 'DUE', reason: Math.floor(daysSince) + 'd since review (Interval: ' + interval + 'd)' };
    }
    if (st.count > 0 && st.best !== null && st.best >= 85) {
      return { code: 'lock', label: 'LOCKED', reason: 'Best ' + st.best + '% · Next in ' + Math.max(1, Math.ceil(interval - daysSince)) + 'd' };
    }
    if (st.count > 0 && st.best !== null && st.best < 75) {
      return { code: 'crit', label: 'CRITICAL', reason: 'Low Accuracy ' + st.best + '%' };
    }
    return { code: 'neutral', label: st.count > 0 ? st.best + '%' : 'UNREVISED', reason: st.count > 0 ? 'Count: ' + st.count : 'Not drilled yet' };
  }

  function findHighestPriorityUnit() {
    for (var i = 0; i < NEET.order.length; i++) {
      var id = NEET.order[i];
      if (computeSRS(id).code === 'crit') return id;
    }
    for (var j = 0; j < NEET.order.length; j++) {
      var id2 = NEET.order[j];
      if (computeSRS(id2).code === 'due') return id2;
    }
    for (var k = 0; k < state.mock.length; k++) {
      var mId = state.mock[k];
      var st = getUnitStats(mId);
      if (st.count === 0) return mId;
    }
    return state.currentUnit || NEET.order[0];
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

    var mobMc = document.getElementById('mobMockBadge');
    var mobVc = document.getElementById('mobVaultBadge');
    if (mobMc) mobMc.textContent = state.mock.length;
    if (mobVc) mobVc.textContent = state.vault.length;
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    var icon = document.getElementById('themeBtnIcon');
    if (icon) {
      icon.textContent = state.theme === 'dark' ? '☾' : '☀';
      icon.style.animation = 'spin 0.3s ease';
      setTimeout(function () { icon.style.animation = ''; }, 300);
    }
  }

  /* ---------------- Navigation & Tab Routing ---------------- */
  function switchTab(tab, unitId) {
    if (paceTimer) { clearInterval(paceTimer); paceTimer = null; }
    if (unitId && NEET.units[unitId]) state.currentUnit = unitId;
    state.tab = tab;
    saveState();

    try {
      if (window.location.hash !== '#' + tab) {
        history.replaceState(null, '', '#' + tab);
      }
    } catch (e) {}

    var btns = document.querySelectorAll('#mainNav .tab-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-tab') === tab);
    }

    var mobBtns = document.querySelectorAll('#mobileBottomNav .mob-nav-btn');
    for (var j = 0; j < mobBtns.length; j++) {
      mobBtns[j].classList.toggle('active', mobBtns[j].getAttribute('data-tab') === tab);
    }

    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
     VIEW 1: MODERN HERO HUD & 40-UNIT TACTICAL DASHBOARD
     ========================================================================== */
  function renderDashboard(root) {
    var crit = [], due = [], lock = [];
    NEET.order.forEach(function (id) {
      var srs = computeSRS(id);
      if (srs.code === 'crit') crit.push({ id: id, srs: srs });
      else if (srs.code === 'due') due.push({ id: id, srs: srs });
      else if (srs.code === 'lock') lock.push({ id: id, srs: srs });
    });

    // Mock exam readiness calculation
    var mockTotal = state.mock.length;
    var mockRevised = 0;
    state.mock.forEach(function (id) {
      var st = getUnitStats(id);
      if (st.count > 0 && st.best >= 75) mockRevised++;
    });
    var readinessPct = mockTotal > 0 ? Math.round((mockRevised / mockTotal) * 100) : 0;
    var circleCircumference = 163.36; // 2 * pi * 26
    var strokeDashoffset = circleCircumference - (circleCircumference * readinessPct) / 100;

    var priorityUnitId = findHighestPriorityUnit();
    var priorityUnit = NEET.units[priorityUnitId] || NEET.units[NEET.order[0]];

    /* 1. Tactical Hero Command Strip (Sleek HUD) */
    var html = '' +
      '<div class="hero-hud">' +
        '<div class="hero-readiness">' +
          '<div class="readiness-ring-wrap">' +
            '<svg class="readiness-svg" viewBox="0 0 64 64">' +
              '<circle class="readiness-circle-bg" cx="32" cy="32" r="26"></circle>' +
              '<circle class="readiness-circle-bar" cx="32" cy="32" r="26" ' +
                'style="stroke-dasharray:' + circleCircumference + ';stroke-dashoffset:' + strokeDashoffset + ';"></circle>' +
            '</svg>' +
            '<span class="readiness-value">' + readinessPct + '%</span>' +
          '</div>' +
          '<div class="readiness-text">' +
            '<h3>Mock Readiness</h3>' +
            '<p>' + mockRevised + ' of ' + mockTotal + ' units locked (≥75% acc)</p>' +
          '</div>' +
        '</div>' +

        '<div class="hero-status-strip">' +
          '<div class="hud-stat-card crit ' + (state.statusFilter === 'crit' ? 'active' : '') + '" data-stat-filter="crit" title="Click to filter by Critical Units">' +
            '<div class="hud-stat-top">' +
              '<span class="hud-stat-label"><span class="hud-pulse-dot"></span> Critical Red</span>' +
              '<span class="badge badge-crit">' + crit.length + ' Units</span>' +
            '</div>' +
            '<div class="hud-stat-num">' + crit.length + '</div>' +
            '<div class="hud-stat-sub">Revise Immediately</div>' +
          '</div>' +

          '<div class="hud-stat-card due ' + (state.statusFilter === 'due' ? 'active' : '') + '" data-stat-filter="due" title="Click to filter by Due Units">' +
            '<div class="hud-stat-top">' +
              '<span class="hud-stat-label"><span class="hud-pulse-dot"></span> Spaced Decay</span>' +
              '<span class="badge badge-due">' + due.length + ' Units</span>' +
            '</div>' +
            '<div class="hud-stat-num">' + due.length + '</div>' +
            '<div class="hud-stat-sub">Hit 1/3/7/14-Day Curve</div>' +
          '</div>' +

          '<div class="hud-stat-card lock ' + (state.statusFilter === 'lock' ? 'active' : '') + '" data-stat-filter="lock" title="Click to filter by Mastered Units">' +
            '<div class="hud-stat-top">' +
              '<span class="hud-stat-label"><span class="hud-pulse-dot"></span> Consolidated</span>' +
              '<span class="badge badge-lock">' + lock.length + ' Units</span>' +
            '</div>' +
            '<div class="hud-stat-num">' + lock.length + '</div>' +
            '<div class="hud-stat-sub">Best Accuracy ≥85%</div>' +
          '</div>' +
        '</div>' +

        '<div class="hero-cta">' +
          '<button class="btn btn-primary" id="launchPriorityDrillBtn">' +
            '<span>⚡ Launch Priority Drill</span>' +
          '</button>' +
          '<span style="font-size:11px;color:var(--text-muted);text-align:center;">Target: <b>' + priorityUnit.id + '</b> ' + esc(priorityUnit.name.slice(0, 16)) + '</span>' +
        '</div>' +
      '</div>';

    /* 2. Unified Filter Toolbar */
    var subjs = [
      { id: 'ALL', label: 'All (40)', icon: '✨' },
      { id: 'Physics', label: 'Physics (20)', icon: '⚛️' },
      { id: 'Physical Chemistry', label: 'Physical Chem (8)', icon: '🧪' },
      { id: 'Inorganic Chemistry', label: 'Inorganic (4)', icon: '🔬' },
      { id: 'Organic Chemistry', label: 'Organic (7)', icon: '🧬' },
      { id: 'Practical Chemistry', label: 'Practical (2)', icon: '🧫' }
    ];

    html += '' +
      '<div class="toolbar-wrapper">' +
        '<div class="toolbar-top">' +
          '<div class="seg-group">' +
            '<button class="seg-btn ' + (state.filter === 'all' && state.statusFilter === 'all' ? 'active' : '') + '" data-filter-scope="all">Show All 40 Units</button>' +
            '<button class="seg-btn ' + (state.filter === 'mock' ? 'active' : '') + '" data-filter-scope="mock">🎯 Next Mock Syllabus (' + state.mock.length + ')</button>' +
            (state.statusFilter !== 'all' ? '<button class="seg-btn active" data-reset-status-filter="1">Filtered: ' + state.statusFilter.toUpperCase() + ' ✕</button>' : '') +
          '</div>' +

          '<div class="search-input-wrap">' +
            '<span class="search-icon">🔍</span>' +
            '<input type="search" class="search-input" id="dashSearch" placeholder="Search chapters, formulas, reagents (e.g. Optics, Aldol, P5)..." value="' + esc(state.search) + '">' +
            '<button class="search-clear-btn" id="clearSearchBtn">✕</button>' +
          '</div>' +
        '</div>' +

        '<div class="subject-pills">' +
          subjs.map(function (s) {
            var isAct = state.subjFilter === s.id;
            return '<button class="subj-pill-btn ' + (isAct ? 'active' : '') + '" data-subj="' + s.id + '">' +
              '<span>' + s.icon + '</span><span>' + s.label + '</span>' +
            '</button>';
          }).join('') +
        '</div>' +
      '</div>';

    /* 3. Section Groups & Unit Matrix */
    var groups = [
      { title: 'SECTION A: PHYSICS (UNITS P1 TO P20 · 20Q DRILL EACH)', subj: ['Physics'], icon: '⚛️' },
      { title: 'SECTION B: PHYSICAL CHEMISTRY (UNITS C1 TO C8 · 20Q DRILL EACH)', subj: ['Physical Chemistry'], icon: '🧪' },
      { title: 'SECTION C: INORGANIC CHEMISTRY (UNITS C9 TO C12 · 30Q DRILL EACH)', subj: ['Inorganic Chemistry'], icon: '🔬' },
      { title: 'SECTION D: ORGANIC & PRACTICAL CHEMISTRY (UNITS C13 TO C20 · 30Q DRILL EACH)', subj: ['Organic Chemistry', 'Practical Chemistry'], icon: '🧬' }
    ];

    var q = state.search.trim().toLowerCase();
    var anyRendered = false;
    var cardIndex = 0;

    groups.forEach(function (grp) {
      var list = NEET.order.filter(function (id) {
        var u = NEET.units[id];
        if (grp.subj.indexOf(u.subj) === -1) return false;
        if (state.filter === 'mock' && state.mock.indexOf(id) === -1) return false;
        if (state.statusFilter !== 'all') {
          var srs = computeSRS(id);
          if (srs.code !== state.statusFilter) return false;
        }
        if (state.subjFilter !== 'ALL' && u.subj !== state.subjFilter) return false;
        if (q) {
          var hay = (u.id + ' ' + u.name + ' ' + u.syl + ' ' + (u.kw || []).join(' ')).toLowerCase();
          if (hay.indexOf(q) === -1) return false;
        }
        return true;
      });

      if (!list.length) return;
      anyRendered = true;

      html += '<div class="section-hdr"><span>' + grp.icon + ' ' + grp.title + '</span><span class="section-badge">' + list.length + ' Units</span></div>';
      html += '<div class="unit-grid">';

      list.forEach(function (id) {
        cardIndex++;
        var u = NEET.units[id];
        var st = getUnitStats(id);
        var srs = computeSRS(id);
        var inMock = state.mock.indexOf(id) !== -1;
        var qTarget = NEET.qcount(u);

        var accVal = st.best !== null ? st.best : 0;
        var meterClass = accVal >= 85 ? 'high' : (accVal >= 70 ? 'mid' : 'low');

        html += '' +
          '<div class="unit-card st-' + srs.code + '" style="animation-delay:' + Math.min(cardIndex * 30, 300) + 'ms">' +
            '<div>' +
              '<div class="uc-top">' +
                '<div class="uc-id-badge">' +
                  '<span class="uc-id">' + u.id + '</span>' +
                  (inMock ? '<span class="badge badge-mock">🎯 MOCK</span>' : '') +
                '</div>' +
                '<div class="uc-badges">' +
                  '<span class="badge badge-' + srs.code + '">' + srs.label + '</span>' +
                '</div>' +
              '</div>' +
              '<div class="uc-name" style="margin-top:10px;">' + esc(u.name) + '</div>' +
              '<div class="uc-syl" style="margin-top:5px;" title="' + esc(u.syl) + '">' + esc(u.syl) + '</div>' +
              '<div class="uc-progress-track">' +
                '<div class="uc-progress-fill ' + meterClass + '" style="width:' + (st.best !== null ? st.best : 0) + '%"></div>' +
              '</div>' +
            '</div>' +
            '<div>' +
              '<div class="uc-meta">' +
                '<span>Acc: <b>' + (st.best !== null ? st.best + '%' : '—') + '</b></span>' +
                '<span>Rev: <b>' + st.count + '</b> (' + formatAgo(st.last) + ')</span>' +
                '<span>' + qTarget + 'Q Engine</span>' +
              '</div>' +
              '<div class="uc-actions">' +
                '<button class="btn" data-goto-notes="' + u.id + '">📖 Study Notes</button>' +
                '<button class="btn btn-primary" data-goto-drill="' + u.id + '">⚡ ' + qTarget + 'Q Drill</button>' +
              '</div>' +
            '</div>' +
          '</div>';
      });
      html += '</div>';
    });

    if (!anyRendered) {
      html += '' +
        '<div class="panel-box" style="text-align:center;padding:48px 24px;margin-top:20px;">' +
          '<div style="font-size:36px;margin-bottom:10px;">🔍</div>' +
          '<h3 style="font-size:16px;margin-bottom:6px;">No units match your active filter</h3>' +
          '<p style="color:var(--text-muted);font-size:13px;margin-bottom:16px;">Try clearing your search keyword or switching to "Show All 40 Units".</p>' +
          '<button class="btn btn-primary" id="resetFiltersBtn">Reset All Filters</button>' +
        '</div>';
    }

    root.innerHTML = html;

    /* Bind events */
    var searchEl = document.getElementById('dashSearch');
    var clearSearchBtn = document.getElementById('clearSearchBtn');
    if (searchEl) {
      if (searchEl.value) clearSearchBtn.style.display = 'block';
      searchEl.addEventListener('input', function (e) {
        state.search = e.target.value;
        if (clearSearchBtn) clearSearchBtn.style.display = state.search ? 'block' : 'none';
        renderDashboard(root);
        var s2 = document.getElementById('dashSearch');
        if (s2) { s2.focus(); s2.setSelectionRange(s2.value.length, s2.value.length); }
      });
    }
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', function () {
        state.search = '';
        renderDashboard(root);
      });
    }

    // Quick start priority drill
    var pBtn = document.getElementById('launchPriorityDrillBtn');
    if (pBtn) {
      pBtn.addEventListener('click', function () {
        startDrill(priorityUnitId);
      });
    }

    // Hero stat cards quick click filter
    root.querySelectorAll('[data-stat-filter]').forEach(function (el) {
      el.addEventListener('click', function () {
        var f = el.getAttribute('data-stat-filter');
        state.statusFilter = state.statusFilter === f ? 'all' : f;
        renderDashboard(root);
      });
    });

    // Reset status filter
    var rstStatBtn = root.querySelector('[data-reset-status-filter]');
    if (rstStatBtn) {
      rstStatBtn.addEventListener('click', function () {
        state.statusFilter = 'all';
        renderDashboard(root);
      });
    }

    // Scope filters (all / mock)
    root.querySelectorAll('[data-filter-scope]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.filter = b.getAttribute('data-filter-scope');
        state.statusFilter = 'all';
        saveState();
        renderDashboard(root);
      });
    });

    // Subject filters
    root.querySelectorAll('[data-subj]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.subjFilter = b.getAttribute('data-subj');
        renderDashboard(root);
      });
    });

    // Reset filters
    var resetBtn = document.getElementById('resetFiltersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        state.filter = 'all';
        state.statusFilter = 'all';
        state.subjFilter = 'ALL';
        state.search = '';
        renderDashboard(root);
      });
    }

    // Goto Notes & Drill
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

    
    var curMode = state.notesViewMode || 'sheets';
    var viewModeTabsHtml = '' +
      '<div class="view-mode-tabs no-print">' +
        '<button class="mode-tab-btn ' + (curMode === 'sheets' ? 'active' : '') + '" data-vmode="sheets">📑 4-Page Clinical Print Sheets</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'guide' ? 'active' : '') + '" data-vmode="guide">📖 Topic-by-Topic Chapter Masterclass</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'blitz' ? 'active' : '') + '" data-vmode="blitz">⚡ Formula Blitz &amp; Speed-Hacks (' + (u.formulas || []).length + ')</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'traps' ? 'active' : '') + '" data-vmode="traps">🚨 NTA Traps &amp; Exception Vault (' + (u.traps || []).length + ')</button>' +
      '</div>';

    root.innerHTML = '' +
      viewModeTabsHtml +
      '<div class="mock-layout">' +
        '<div class="panel-box">' +
          '<div class="panel-title">' +
            '<span>Mode 1: 1-Click 40-Unit Syllabus Lock (' + state.mock.length + ' Locked)</span>' +
            '<div style="display:flex;gap:6px;">' +
              '<button class="btn" id="mockSelectAll">Select All 40</button>' +
              '<button class="btn" id="mockClearAll">Clear All</button>' +
            '</div>' +
          '</div>' +
          '<div style="font-size:12.5px;color:var(--text-muted);margin-bottom:12px;">Lock units coming in your next coaching mock test. Locked units automatically trigger CRITICAL RED status if unrevised or below 75% accuracy.</div>' +
          '<div class="section-hdr" style="margin-top:10px;"><span>⚛️ Physics (P1–P20)</span></div>' +
          renderCheckboxes(pUnits) +
          '<div class="section-hdr" style="margin-top:18px;"><span>🧪 Chemistry (C1–C20)</span></div>' +
          renderCheckboxes(cUnits) +
        '</div>' +

        '<div class="panel-box">' +
          '<div class="panel-title"><span>Mode 2: Smart Coaching PDF Schedule Parser</span></div>' +
          '<div style="font-size:12.5px;color:var(--text-muted);">Paste test schedule text from any Allen / Aakash / PW / Unacademy PDF. The smart regex engine matches chapter names and subtopics to auto-select corresponding NMC units.</div>' +
          '<textarea class="parser-textarea" id="syllabusPasteBox" placeholder="Paste test syllabus text here (e.g. AIATS-04: Laws of Motion, Work Energy, Chemical Bonding, GOC, Thermodynamics...)" rows="6"></textarea>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
            '<button class="btn btn-primary" id="runParserReplace">Detect &amp; Replace Mock Lock</button>' +
            '<button class="btn" id="runParserAdd">Detect &amp; Add to Current Lock</button>' +
            '<button class="btn" id="loadSampleSchedule">Load Sample Test Text</button>' +
          '</div>' +
          '<div id="parserResultBox" style="margin-top:14px;font-size:13px;color:var(--text-muted);"></div>' +
        '</div>' +
      '</div>';

    root.querySelectorAll('[data-mock-id]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var id = cb.getAttribute('data-mock-id');
        var idx = state.mock.indexOf(id);
        if (cb.checked && idx === -1) {
          state.mock.push(id);
          showToast('Locked ' + id + ' for next mock test');
        } else if (!cb.checked && idx !== -1) {
          state.mock.splice(idx, 1);
        }
        saveState();
        renderMockLock(root);
      });
    });

    document.getElementById('mockSelectAll').addEventListener('click', function () {
      state.mock = NEET.order.slice();
      saveState();
      showToast('All 40 NMC Units Locked for Next Mock');
      renderMockLock(root);
    });
    document.getElementById('mockClearAll').addEventListener('click', function () {
      state.mock = [];
      saveState();
      showToast('Mock Syllabus Cleared');
      renderMockLock(root);
    });
    document.getElementById('loadSampleSchedule').addEventListener('click', function () {
      document.getElementById('syllabusPasteBox').value =
        'NEET Minor Test-05 Syllabus:\n' +
        'Physics: Kinematics (Projectile & Relative), Laws of Motion (Friction & Banking), Rotational Motion (Moment of Inertia, Torque), Current Electricity (Kirchhoff & Meter Bridge), Optics (Refraction, Prism, Lens).\n' +
        'Chemistry: Mole Concept, Chemical Bonding (MOT & Hybridisation), Thermodynamics (Enthalpy & Entropy), Equilibrium (pH & Buffer), Aldehydes Ketones & Carboxylic Acids, Salt Analysis.';
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
          ? '<span style="color:var(--green-tx);font-weight:700;">✔ Successfully Detected ' + found.length + ' NMC Units:</span> ' + found.join(', ')
          : '<span style="color:var(--red-tx);">No matching chapter keywords detected. Try pasting standard topic names.</span>';
      }
      if (found.length) showToast('Detected & locked ' + found.length + ' units!');
    };
    document.getElementById('runParserReplace').addEventListener('click', function () { handleParse(true); });
    document.getElementById('runParserAdd').addEventListener('click', function () { handleParse(false); });
  }

  /* ==========================================================================
     VIEW 3: 4-BLOCK PICTOGRAPHIC REVISION SHEET & ACTIVE RECALL NOTES
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
      '<button class="tool-chip ' + (st ? 'starred' : '') + '" data-star-key="' + key + '" title="Star for high-yield revision">' + (st ? '★ Starred' : '☆ Star') + '</button>' +
      '<button class="tool-chip ' + (ms ? 'mastered' : '') + '" data-master-key="' + key + '" title="Mark as mastered">' + (ms ? '✔ Mastered' : '○ Master') + '</button>' +
    '</span>';
  }

  function renderNotes(root) {
    var u = NEET.units[state.currentUnit] || NEET.units[NEET.order[0]];
    if (!u) return;
    state.currentUnit = u.id;

    var curIdx = NEET.order.indexOf(u.id);
    var prevId = curIdx > 0 ? NEET.order[curIdx - 1] : NEET.order[NEET.order.length - 1];
    var nextId = curIdx < NEET.order.length - 1 ? NEET.order[curIdx + 1] : NEET.order[0];

    var totalPages = isBigChapter(u) ? 5 : 4;
    if (state.notesPageFilter > totalPages) state.notesPageFilter = 0;

    var optionsHtml = NEET.order.map(function (id) {
      var item = NEET.units[id];
      var pgTag = isBigChapter(item) ? '5-Page' : '4-Page';
      return '<option value="' + id + '" ' + (id === u.id ? 'selected' : '') + '>' + id + ' — ' + esc(item.name) + ' (' + pgTag + ')</option>';
    }).join('');

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

    /* PAGE 1: Formulas */
    var speedHacksHtml = (typeof NEET !== 'undefined' && NEET.renderSpeedHacksHtml) ? NEET.renderSpeedHacksHtml(u) : '';
    var graphsHtml = (typeof NEET !== 'undefined' && NEET.renderGraphsHtml) ? NEET.renderGraphsHtml(u) : '';

    /* PAGE 1: Formulas */
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
          (f.s ? '<div class="f-sign"><b>Meaning &amp; Sign Convention:</b> <span class="recall-target">' + f.s + '</span></div>' : '') +
          '<div class="f-bound"><b>⚠ Boundary Limit / Where Traps Lie:</b> <span class="recall-target">' + f.b + '</span></div>' +
        '</div>';
    }).join('');

    var sandboxHtml = '';
    if (u.gens && u.gens.length) {
      sandboxHtml = '' +
        '<div class="sandbox-box no-print" style="margin-top:14px;background:var(--bg-panel);border:1px solid var(--blue-bd);border-radius:var(--radius-md);padding:14px;">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">' +
            '<div><b style="color:var(--blue-tx)">⚡ Interactive Worked Numerical Sandbox</b> <span style="font-size:12px;color:var(--text-muted)">— Live Parametric Calculations</span></div>' +
            '<div style="display:flex;gap:6px;">' +
              '<button class="btn" id="rollSandboxBtn">🎲 Roll New Numerical</button>' +
              '<button class="btn" id="toggleSandboxSolBtn">👁 Show / Hide Steps</button>' +
            '</div>' +
          '</div>' +
          '<div id="sandboxContent" style="font-size:13px;"></div>' +
        '</div>';
    }

    /* PAGE 2: Traps & Orders */
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
          '<div class="t-stmt recall-target">✔ NCERT Statement: ' + t.t + '</div>' +
          '<div class="t-cause"><b>💡 Physical / Chemical Root Cause:</b> <span class="recall-target">' + t.c + '</span></div>' +
        '</div>';
    }).join('');

    var ordersHtml = (u.orders || []).map(function (o, idx) {
      var key = u.id + ':o:' + idx;
      if (!itemPassFilter(key)) return '';
      var sep = ' ' + (o.sep || '>') + ' ';
      return '' +
        '<div class="ord-card" data-ord-idx="' + idx + '">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:6px;">' +
            '<div class="ord-q"><b>Priority Order #' + (idx + 1) + ':</b> ' + o.q + '</div>' +
            '<div class="no-print" style="display:flex;gap:5px;align-items:center;">' +
              '<button class="tool-chip" data-scramble-ord="' + idx + '" title="Test ordering sequence">🔀 Scramble &amp; Test</button>' +
              renderCardTools(key) +
            '</div>' +
          '</div>' +
          '<div class="ord-seq recall-target" id="ordSeq_' + idx + '">' + o.s.join(sep) + '</div>' +
          '<div id="ordScrambleBox_' + idx + '" class="no-print" style="display:none;"></div>' +
          (o.why ? '<div style="font-size:12px;color:var(--text-muted);margin-top:5px;"><b>Reason:</b> <span class="recall-target">' + o.why + '</span></div>' : '') +
        '</div>';
    }).join('');

    /* PAGE 3: Flows & Flipcards */
    var flowsHtml = (u.flows || []).map(function (fl, fIdx) {
      if (fl.chain) {
        var chainNodes = fl.chain.map(function (step, idx) {
          var cls = idx > 0 ? 'flow-node recall-target flow-step-' + fIdx : 'flow-node';
          return '<span class="' + cls + '" data-step-idx="' + idx + '"><b>Step ' + (idx + 1) + ':</b> ' + step + '</span>';
        }).join('<span class="flow-arrow">⟶</span>');
        return '' +
          '<div class="flow-card">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">' +
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
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">' +
            '<div class="flow-title" style="margin-bottom:0;">🌿 Decision Map ' + (fIdx + 1) + ': ' + fl.t + '</div>' +
            '<button class="tool-chip no-print" data-step-walk="' + fIdx + '">▶ Reveal Branches</button>' +
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
        '<div class="l-card flip-pair-card" data-pair-idx="' + pIdx + '" style="cursor:pointer;" title="Click card to flip / toggle answer">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;">' +
            '<span style="font-size:11px;color:var(--text-muted);font-family:var(--font-mono)">' + p.g + '</span>' +
            '<span class="tool-chip no-print" style="font-size:10px;">Click to Flip</span>' +
          '</div>' +
          '<div style="font-weight:700;font-size:13px;margin-top:6px;">Cue: ' + p.a + '</div>' +
          '<div class="recall-target pair-ans" style="color:var(--green-tx);font-weight:700;font-size:13px;margin-top:6px;">➔ ' + p.b + '</div>' +
        '</div>';
    }).join('');

    /* PAGE 4: Lab & NCERT Truth Spotter */
    var labHtml = (u.lab || []).map(function (l, idx) {
      var key = u.id + ':l:' + idx;
      if (!itemPassFilter(key)) return '';
      var isM = !!state.masteredItems[key];
      return '' +
        '<div class="l-card ' + (isM ? 'item-mastered' : '') + '">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:6px;margin-bottom:6px;">' +
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
          '<div style="font-size:13px;line-height:1.45;"><b>Line #' + (sIdx + 1) + ':</b> ' + item.s + '</div>' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">' +
            '<div class="no-print" style="display:flex;gap:6px;">' +
              '<button class="tool-chip" data-stmt-guess="' + sIdx + '" data-guess="true" data-actual="' + item.isT + '">✔ True</button>' +
              '<button class="tool-chip" data-stmt-guess="' + sIdx + '" data-guess="false" data-actual="' + item.isT + '">✘ False (Myth)</button>' +
            '</div>' +
            '<span class="recall-target" id="stmtBadge_' + sIdx + '" style="font-family:var(--font-mono);font-size:11px;font-weight:800;color:' + (item.isT ? 'var(--green-tx)' : 'var(--red-tx)') + '">' +
              (item.isT ? '✔ NCERT TRUE' : '✘ NTA MYTH (FALSE)') +
            '</span>' +
          '</div>' +
        '</div>';
    }).join('');

    var stickyVal = state.userNotes[u.id] || '';
    var stickyHtml = '' +
      '<div style="margin-top:16px;">' +
        '<div style="font-weight:800;font-size:12px;color:var(--amber-tx);text-transform:uppercase;font-family:var(--font-mono);">📝 Personal Teacher Shortcuts &amp; Memory Hooks (Auto-Saved for ' + u.id + ')</div>' +
        '<textarea class="sticky-notes-area" id="unitStickyInput" placeholder="Add your coaching tricks, page references or memory hooks for ' + esc(u.name) + '...">' + esc(stickyVal) + '</textarea>' +
      '</div>';

    /* PAGE 5 (Extension for Mega Chapters) */
    var page5Html = '';
    if (totalPages === 5) {
      var optLetters = ['A', 'B', 'C', 'D'];
      var mcqCards = (u.mcq || []).map(function (m, mIdx) {
        return '' +
          '<div class="f-card" id="notesMcq_' + mIdx + '">' +
            '<div class="f-top">' +
              '<span class="f-name">PYQ Archetype #' + (mIdx + 1) + '</span>' +
              '<span class="badge badge-crit">' + esc(m.tag || 'High-Yield') + '</span>' +
            '</div>' +
            '<div style="font-weight:600;font-size:13.5px;margin:6px 0;">' + m.q + '</div>' +
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:12.5px;">' +
              (m.o || []).map(function (opt, oi) {
                return '<button class="tool-chip" style="text-align:left;padding:6px 10px;" data-inline-mcq="' + mIdx + '" data-oi="' + oi + '" data-ans="' + m.a + '">' +
                  '<b>' + optLetters[oi] + '.</b> ' + opt +
                '</button>';
              }).join('') +
            '</div>' +
            '<div class="f-bound recall-target" id="notesMcqSol_' + mIdx + '" style="margin-top:8px;">' +
              '<b>✔ Correct Option (' + optLetters[m.a] + '): ' + (m.o ? m.o[m.a] : '') + '</b><br>' +
              (m.sol || []).join(' ➔ ') +
            '</div>' +
          '</div>';
      }).join('');

      page5Html = '' +
        '<div class="print-page-break"></div>' +
        '<div class="notes-page-sheet" data-sheet-page="5" style="' + (state.notesPageFilter && state.notesPageFilter !== 5 ? 'display:none;' : '') + '">' +
          '<div class="page-ribbon">' +
            '<span><b>PAGE 5 OF 5 (HIGH-WEIGHTAGE EXTENSION)</b> · SOLVED PYQ ARCHETYPES</span>' +
            '<span>' + u.id + ': ' + esc(u.name) + '</span>' +
          '</div>' +
          '<section class="memory-block block-blue">' +
            '<div class="block-hdr">' +
              '<span class="block-title">PAGE 5 · SOLVED PYQ ARCHETYPE WORKBOOK</span>' +
              '<span style="font-size:12px;color:var(--text-muted)">' + (u.mcq || []).length + ' Solved Core Problems</span>' +
            '</div>' +
            '<div class="formula-grid">' + mcqCards + '</div>' +
          '</section>' +
        '</div>';
    }

    var qTarget = NEET.qcount(u);

    /* Page Navigation Pills */
    var pagePillsHtml = '' +
      '<div class="page-pills no-print">' +
        '<button class="page-pill ' + (state.notesPageFilter === 0 ? 'active' : '') + '" data-pg-jump="0">All ' + totalPages + ' Pages</button>' +
        '<button class="page-pill ' + (state.notesPageFilter === 1 ? 'active' : '') + '" data-pg-jump="1">Page 1: Formulas &amp; Sandbox (' + (u.formulas || []).length + ')</button>' +
        '<button class="page-pill ' + (state.notesPageFilter === 2 ? 'active' : '') + '" data-pg-jump="2">Page 2: Traps &amp; Orders (' + ((u.traps || []).length + (u.orders || []).length) + ')</button>' +
        '<button class="page-pill ' + (state.notesPageFilter === 3 ? 'active' : '') + '" data-pg-jump="3">Page 3: Flowcharts &amp; Flip-Cards (' + ((u.flows || []).length + allPairs.length) + ')</button>' +
        '<button class="page-pill ' + (state.notesPageFilter === 4 ? 'active' : '') + '" data-pg-jump="4">Page 4: Lab &amp; Line Spotter</button>' +
        (totalPages === 5 ? '<button class="page-pill ' + (state.notesPageFilter === 5 ? 'active' : '') + '" data-pg-jump="5">Page 5: PYQ Archetypes (' + (u.mcq || []).length + ')</button>' : '') +
      '</div>';

    
    var curMode = state.notesViewMode || 'sheets';
    var viewModeTabsHtml = '' +
      '<div class="view-mode-tabs no-print">' +
        '<button class="mode-tab-btn ' + (curMode === 'sheets' ? 'active' : '') + '" data-vmode="sheets">📑 4-Page Clinical Print Sheets</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'guide' ? 'active' : '') + '" data-vmode="guide">📖 Topic-by-Topic Chapter Masterclass</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'blitz' ? 'active' : '') + '" data-vmode="blitz">⚡ Formula Blitz &amp; Speed-Hacks (' + (u.formulas || []).length + ')</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'traps' ? 'active' : '') + '" data-vmode="traps">🚨 NTA Traps &amp; Exception Vault (' + (u.traps || []).length + ')</button>' +
      '</div>';

    root.innerHTML = '' +
      viewModeTabsHtml +
      '<div class="notes-bar no-print">' +
        '<div class="unit-nav-strip">' +
          '<button class="btn" id="prevUnitNotesBtn" title="Previous Unit">← ' + prevId + '</button>' +
          '<select class="unit-select" id="notesUnitSelect">' + optionsHtml + '</select>' +
          '<button class="btn" id="nextUnitNotesBtn" title="Next Unit">' + nextId + ' →</button>' +
          '<button class="blind-toggle ' + (state.blindRecall ? 'active' : '') + '" id="blindToggleBtn">' +
            (state.blindRecall ? '👁 Blind Mode ON (Click to reveal)' : '🔒 Activate Blind Recall') +
          '</button>' +
          (state.blindRecall ? '<button class="btn" id="resetRevealBtn">Re-Blur All</button>' : '') +
        '</div>' +

        '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">' +
          '<div class="seg-group">' +
            '<button class="seg-btn ' + (state.notesItemFilter === 'all' ? 'active' : '') + '" data-item-flt="all">All</button>' +
            '<button class="seg-btn ' + (state.notesItemFilter === 'starred' ? 'active' : '') + '" data-item-flt="starred">★ (' + starredCount + ')</button>' +
            '<button class="seg-btn ' + (state.notesItemFilter === 'unmastered' ? 'active' : '') + '" data-item-flt="unmastered">Unmastered</button>' +
          '</div>' +
          '<button class="btn" id="printSheetBtn">🖨 Print ' + totalPages + '-Page Notes</button>' +
          '<button class="btn btn-primary" id="startUnitDrillBtn">⚡ Launch ' + qTarget + 'Q Drill</button>' +
        '</div>' +
      '</div>' +

      (curMode === 'sheets' ? pagePillsHtml : '') +

      (curMode === 'guide' ? (typeof NEET !== 'undefined' && NEET.renderTopicGuideHtml ? NEET.renderTopicGuideHtml(u) : '') :
       curMode === 'blitz' ? (
         '<div class="sheet-unit-banner"><div class="sheet-unit-title">⚡ ' + u.id + ': ' + esc(u.name) + ' — Formula Blitz &amp; Speed-Hacks</div></div>' +
         '<section class="memory-block block-blue"><div class="block-hdr"><span class="block-title">ALL CORE FORMULAS &amp; RELATIONS</span></div><div class="formula-grid">' + formulasHtml + '</div>' + speedHacksHtml + sandboxHtml + '</section>'
       ) :
       curMode === 'traps' ? (
         '<div class="sheet-unit-banner"><div class="sheet-unit-title">🚨 ' + u.id + ': ' + esc(u.name) + ' — NTA Traps &amp; Exceptions Vault</div></div>' +
         '<section class="memory-block block-red"><div class="block-hdr"><span class="block-title">CRITICAL EXAM TRAPS &amp; GRAPH ANALYSIS</span></div>' + graphsHtml + '<div class="trap-grid">' + trapsHtml + '</div>' + ordersHtml + '</section>'
       ) :
       '<div id="pictographicSheet" class="' + (state.blindRecall ? 'blind-active' : '') + '">' +
        '<div class="sheet-unit-banner">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">' +
            '<div style="display:flex;gap:8px;align-items:center;">' +
              '<span class="badge badge-mock">' + u.id + ' · ' + esc(u.subj) + '</span>' +
              '<span class="badge badge-neutral">' + totalPages + '-Page Visual Sheet</span>' +
            '</div>' +
            '<span class="badge badge-lock">Mastery: ' + masteryPct + '% (' + masteredCount + '/' + totalTrackable + ')</span>' +
          '</div>' +
          '<div class="sheet-unit-title">' + u.id + ': ' + esc(u.name) + '</div>' +
          '<div class="sheet-unit-syl"><b>NMC Scope Roadmap:</b> ' + esc(u.syl) + '</div>' +
        '</div>' +

        /* PAGE 1 */
        '<div class="notes-page-sheet" data-sheet-page="1" style="' + (state.notesPageFilter && state.notesPageFilter !== 1 ? 'display:none;' : '') + '">' +
          '<div class="page-ribbon">' +
            '<span><b>PAGE 1 OF ' + totalPages + '</b> · BLUE FORMULA &amp; BOUNDARY MATRIX</span>' +
            '<span>Click ☆ Star or ✔ Master on any card</span>' +
          '</div>' +
          '<section class="memory-block block-blue">' +
            '<div class="block-hdr">' +
              '<span class="block-title">PAGE 1 · MASTER FORMULA &amp; BOUNDARY FAILURE MATRIX</span>' +
              '<span style="font-size:12px;color:var(--text-muted)">' + (u.formulas || []).length + ' Formulations</span>' +
            '</div>' +
            '<div class="formula-grid">' + formulasHtml + '</div>' + speedHacksHtml +
            sandboxHtml +
          '</section>' +
        '</div>' +

        /* PAGE 2 */
        '<div class="notes-page-sheet" data-sheet-page="2" style="' + (state.notesPageFilter && state.notesPageFilter !== 2 ? 'display:none;' : '') + '">' +
          '<div class="page-ribbon">' +
            '<span><b>PAGE 2 OF ' + totalPages + '</b> · RED TRAP VAULT &amp; PRIORITY ORDERS</span>' +
            '<span>Watch Boundary Limits &amp; Common Pitfalls</span>' +
          '</div>' +
          '<section class="memory-block block-red">' +
            '<div class="block-hdr">' +
              '<span class="block-title">PAGE 2 · NCERT EXCEPTIONS &amp; NTA TRAP VAULT</span>' +
              '<span style="font-size:12px;color:var(--text-muted)">' + (u.traps || []).length + ' Common Traps</span>' +
            '</div>' +
            graphsHtml + '<div class="trap-grid">' + trapsHtml + '</div>' +
            '<div class="order-strip" style="margin-top:16px;">' + ordersHtml + '</div>' +
          '</section>' +
        '</div>' +

        /* PAGE 3 */
        '<div class="notes-page-sheet" data-sheet-page="3" style="' + (state.notesPageFilter && state.notesPageFilter !== 3 ? 'display:none;' : '') + '">' +
          '<div class="page-ribbon">' +
            '<span><b>PAGE 3 OF ' + totalPages + '</b> · GREEN VISUAL FLOWCHARTS &amp; FLIP-DECK</span>' +
            '<span>Click cards to flip answer</span>' +
          '</div>' +
          '<section class="memory-block block-green">' +
            '<div class="block-hdr">' +
              '<span class="block-title">PAGE 3 · VISUAL REACTION MAPS &amp; DECISION FLOWCHARTS</span>' +
              '<span style="font-size:12px;color:var(--text-muted)">' + (u.flows || []).length + ' Pathways</span>' +
            '</div>' +
            '<div class="flow-stack">' + flowsHtml + '</div>' +
            '<div class="section-hdr" style="margin-top:18px;"><span>Flash Cue ➔ Response Flip Deck (' + allPairs.length + ' Cards)</span></div>' +
            '<div class="lab-grid">' + pairsHtml + '</div>' +
          '</section>' +
        '</div>' +

        /* PAGE 4 */
        '<div class="notes-page-sheet" data-sheet-page="4" style="' + (state.notesPageFilter && state.notesPageFilter !== 4 ? 'display:none;' : '') + '">' +
          '<div class="page-ribbon">' +
            '<span><b>PAGE 4 OF ' + totalPages + '</b> · AMBER PRACTICAL TRIGGERS &amp; LINE SPOTTER</span>' +
            '<span>Spot True NCERT lines vs Planted Myths</span>' +
          '</div>' +
          '<section class="memory-block block-amber">' +
            '<div class="block-hdr">' +
              '<span class="block-title">PAGE 4 · PRACTICAL / EXPERIMENTAL TRIGGERS &amp; TRUTH SPOTTER</span>' +
              '<span style="font-size:12px;color:var(--text-muted)">' + (u.lab || []).length + ' Lab Items</span>' +
            '</div>' +
            '<div class="lab-grid">' + labHtml + '</div>' +
            '<div class="section-hdr" style="margin-top:18px;"><span>Interactive NCERT Truth vs Myth Spotter (' + combinedStmts.length + ' Lines)</span></div>' +
            '<div class="stmt-grid">' + stmtSpotterHtml + '</div>' +
            stickyHtml +
          '</section>' +
        '</div>' +

        page5Html +
      '</div>') + '';

    /* Bind events */
    document.getElementById('notesUnitSelect').addEventListener('change', function (e) {
      state.currentUnit = e.target.value;
      state.notesPageFilter = 0;
      saveState();
      renderNotes(root);
    });
    document.getElementById('prevUnitNotesBtn').addEventListener('click', function () {
      state.currentUnit = prevId;
      state.notesPageFilter = 0;
      saveState();
      renderNotes(root);
    });
    document.getElementById('nextUnitNotesBtn').addEventListener('click', function () {
      state.currentUnit = nextId;
      state.notesPageFilter = 0;
      saveState();
      renderNotes(root);
    });

    document.getElementById('blindToggleBtn').addEventListener('click', function () {
      state.blindRecall = !state.blindRecall;
      saveState();
      showToast(state.blindRecall ? 'Blind Recall Activated: click blurred items to test recall' : 'Blind Recall Deactivated');
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

    root.querySelectorAll('[data-pg-jump]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.notesPageFilter = parseInt(btn.getAttribute('data-pg-jump'), 10);
        renderNotes(root);
      });
    });

    root.querySelectorAll('[data-item-flt]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.notesItemFilter = btn.getAttribute('data-item-flt');
        renderNotes(root);
      });
    });

    root.querySelectorAll('[data-star-key]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var k = btn.getAttribute('data-star-key');
        if (state.starredItems[k]) {
          delete state.starredItems[k];
          showToast('Removed from Starred');
        } else {
          state.starredItems[k] = true;
          showToast('Pinned to Starred!');
        }
        saveState();
        renderNotes(root);
      });
    });

    root.querySelectorAll('[data-master-key]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var k = btn.getAttribute('data-master-key');
        if (state.masteredItems[k]) {
          delete state.masteredItems[k];
        } else {
          state.masteredItems[k] = true;
          showToast('Marked as Mastered! ✔');
        }
        saveState();
        renderNotes(root);
      });
    });

    // Sandbox
    var sbContent = document.getElementById('sandboxContent');
    var rollSandbox = function () {
      if (!sbContent || !u.gens || !u.gens.length) return;
      var qObj = NEET.GEN.G1(u);
      if (!qObj) return;
      sbContent.innerHTML = '' +
        '<div style="font-weight:700;margin-bottom:8px;">Q: ' + qObj.q + '</div>' +
        '<div id="sbSolArea" style="padding:10px 12px;border-radius:var(--radius-sm);background:var(--bg-card);border-left:4px solid var(--green-bd);">' +
          '<div style="color:var(--green-tx);font-weight:800;margin-bottom:6px;">✔ Answer: ' + qObj.o[qObj.a] + '</div>' +
          '<ol style="padding-left:18px;font-size:12.5px;line-height:1.5;">' + (qObj.sol || []).map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol>' +
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

    // Scramble orders
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
            '<div style="font-size:12px;color:var(--amber-tx);margin-top:4px;">' + (msg || 'Click items in the exact order (' + (o.sep || '>') + '):') + '</div>' +
            '<div class="scramble-chips">' +
              shuffled.map(function (item, sIdx) {
                var used = picked.indexOf(item) !== -1;
                return '<button class="scr-chip ' + (used ? 'picked' : '') + '" data-pick-item="' + sIdx + '" ' + (used ? 'disabled' : '') + '>' + item + '</button>';
              }).join('') +
            '</div>' +
            (picked.length ? '<div style="margin-top:8px;font-family:var(--font-mono);font-size:12.5px;">Your sequence: <b>' + picked.join(sep) + '</b></div>' : '');

          boxEl.querySelectorAll('[data-pick-item]').forEach(function (cBtn) {
            cBtn.addEventListener('click', function () {
              var cand = shuffled[parseInt(cBtn.getAttribute('data-pick-item'), 10)];
              var expected = o.s[picked.length];
              if (cand === expected) {
                picked.push(cand);
                if (picked.length === o.s.length) {
                  seqEl.style.display = 'block';
                  boxEl.innerHTML = '<div style="color:var(--green-tx);font-weight:700;font-size:12.5px;margin-top:6px;">✔ Perfect Recall! Sequence fully verified.</div>';
                  showToast('Order recall verified!');
                } else {
                  renderScr('✔ Correct! Pick next item:');
                }
              } else {
                cBtn.classList.add('wrong-pick');
                renderScr('✘ Watch out! Expected "' + expected + '" before "' + cand + '". Try again:');
              }
            });
          });
        };
        renderScr();
      });
    });

    // Step walk
    root.querySelectorAll('[data-step-walk]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var fIdx = btn.getAttribute('data-step-walk');
        var steps = root.querySelectorAll('.flow-step-' + fIdx);
        steps.forEach(function (el) { el.style.opacity = '0.15'; });
        var cur = 0;
        var stepTimer = setInterval(function () {
          if (cur >= steps.length) { clearInterval(stepTimer); return; }
          steps[cur].style.opacity = '1';
          steps[cur].classList.add('revealed');
          cur++;
        }, 420);
      });
    });

    // Flip pair cards
    root.querySelectorAll('.flip-pair-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var ans = card.querySelector('.pair-ans');
        if (ans) ans.style.visibility = ans.style.visibility === 'hidden' ? 'visible' : 'hidden';
      });
    });

    // Statement truth spotter
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
          badge.textContent = (guess === actual ? '✔ SPOT ON! ' : '✘ TRAP HIT! ') + (actual ? 'NCERT TRUE STATEMENT' : 'FALSE (PLANTED MYTH)');
        }
      });
    });

    // Page 5 inline MCQ check
    root.querySelectorAll('[data-inline-mcq]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var mIdx = btn.getAttribute('data-inline-mcq');
        var oi = parseInt(btn.getAttribute('data-oi'), 10);
        var ans = parseInt(btn.getAttribute('data-ans'), 10);
        var solEl = document.getElementById('notesMcqSol_' + mIdx);
        if (oi === ans) {
          btn.classList.add('mastered');
          showToast('Spot on! (+4 Marks)');
        } else {
          btn.classList.add('wrong-pick');
        }
        if (solEl) solEl.classList.add('revealed');
      });
    });

    // Sticky Notes autosave
    var stickyEl = document.getElementById('unitStickyInput');
    if (stickyEl) {
      stickyEl.addEventListener('input', function () {
        state.userNotes[u.id] = stickyEl.value;
        saveState();
      });
    }

    // Click to reveal in blind mode
    root.querySelectorAll('.recall-target').forEach(function (el) {
      el.addEventListener('click', function () {
        if (state.blindRecall) el.classList.toggle('revealed');
      });
    });
  }

  /* ==========================================================================
     VIEW 4: COGNITIVE REFLEX DRILL (Focus Game Engine + Keyboard Shortcuts)
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
      status: qs.map(function () { return 'unseen'; }),
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
        lbl.textContent = drillSession.secOnQ + 's / 60s' + (drillSession.secOnQ >= 60 ? ' (Skip to Round 2!)' : '');
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
    if (acc >= 75) fireConfetti();
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

    // Debrief screen
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

      
    var curMode = state.notesViewMode || 'sheets';
    var viewModeTabsHtml = '' +
      '<div class="view-mode-tabs no-print">' +
        '<button class="mode-tab-btn ' + (curMode === 'sheets' ? 'active' : '') + '" data-vmode="sheets">📑 4-Page Clinical Print Sheets</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'guide' ? 'active' : '') + '" data-vmode="guide">📖 Topic-by-Topic Chapter Masterclass</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'blitz' ? 'active' : '') + '" data-vmode="blitz">⚡ Formula Blitz &amp; Speed-Hacks (' + (u.formulas || []).length + ')</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'traps' ? 'active' : '') + '" data-vmode="traps">🚨 NTA Traps &amp; Exception Vault (' + (u.traps || []).length + ')</button>' +
      '</div>';

    root.innerHTML = '' +
      viewModeTabsHtml +
        '<div class="panel-box" style="max-width:800px;margin:20px auto;animation:fadeInUp 0.35s var(--ease-spring);">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">' +
            '<span class="badge badge-mock">DRILL COMPLETED · ' + u.id + '</span>' +
            '<span class="badge badge-lock">SRS Memory Updated</span>' +
          '</div>' +
          '<h2 style="font-size:24px;margin-bottom:8px;letter-spacing:-0.3px;">' + esc(u.name) + ' — Tactical Debrief</h2>' +
          '<p style="color:var(--text-muted);font-size:13.5px;margin-bottom:20px;">' +
            'Your Spaced Repetition status for ' + u.id + ' has been recalibrated. All traps hit are logged to your Mistake Vault.' +
          '</p>' +

          '<div class="hero-status-strip" style="margin-bottom:22px;">' +
            '<div class="hud-stat-card ' + (acc >= 75 ? 'lock' : 'crit') + '">' +
              '<div class="hud-stat-top"><span class="hud-stat-label">Accuracy</span><span class="badge">' + (acc >= 85 ? 'Consolidated' : 'Needs Practice') + '</span></div>' +
              '<div class="hud-stat-num">' + acc + '%</div>' +
              '<div class="hud-stat-sub">' + cor + ' Correct / ' + qs.length + ' Total</div>' +
            '</div>' +
            '<div class="hud-stat-card due">' +
              '<div class="hud-stat-top"><span class="hud-stat-label">NEET Score (+4 / −1)</span></div>' +
              '<div class="hud-stat-num">' + neetScore + ' <span style="font-size:14px;color:var(--text-muted);">/ ' + maxScore + '</span></div>' +
              '<div class="hud-stat-sub">' + wrg + ' Traps (−' + wrg + ') · ' + skp + ' Skipped</div>' +
            '</div>' +
            '<div class="hud-stat-card lock">' +
              '<div class="hud-stat-top"><span class="hud-stat-label">SRS Interval</span></div>' +
              '<div class="hud-stat-num">' + computeSRS(u.id).label + '</div>' +
              '<div class="hud-stat-sub">' + computeSRS(u.id).reason + '</div>' +
            '</div>' +
          '</div>' +

          '<div style="display:flex;gap:10px;flex-wrap:wrap;">' +
            '<button class="btn btn-primary" id="regenDrillBtn">↻ Fresh Parametric ' + qs.length + 'Q Drill</button>' +
            '<button class="btn" id="reviewDrillBtn">Review Questions One-by-One</button>' +
            '<button class="btn btn-amber" id="openVaultFromDrill">🛡️ Open Mistake Vault (' + state.vault.length + ')</button>' +
            '<button class="btn" id="returnDashboardBtn">Return to Dashboard</button>' +
          '</div>' +
        '</div>';

      document.getElementById('regenDrillBtn').addEventListener('click', function () { startDrill(u.id); });
      document.getElementById('reviewDrillBtn').addEventListener('click', function () {
        drillSession.finished = false;
        drillSession.idx = 0;
        renderDrill(root);
      });
      document.getElementById('openVaultFromDrill').addEventListener('click', function () { switchTab('vault'); });
      document.getElementById('returnDashboardBtn').addEventListener('click', function () { switchTab('dashboard'); });
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
        '<span style="line-height:1.45;">' + optText + '</span>' +
      '</button>';
    }).join('');

    var solHtml = '';
    if (chosen !== null) {
      var isOk = chosen === q.a;
      solHtml = '' +
        '<div class="sol-box">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">' +
            '<span style="font-weight:800;font-size:14px;color:' + (isOk ? 'var(--green-tx)' : 'var(--red-tx)') + '">' +
              (isOk ? '✔ CORRECT (+4 Marks)' : '✘ TRAP TRIGGERED (−1 Mark · Auto-logged to Mistake Vault)') +
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

    
    var curMode = state.notesViewMode || 'sheets';
    var viewModeTabsHtml = '' +
      '<div class="view-mode-tabs no-print">' +
        '<button class="mode-tab-btn ' + (curMode === 'sheets' ? 'active' : '') + '" data-vmode="sheets">📑 4-Page Clinical Print Sheets</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'guide' ? 'active' : '') + '" data-vmode="guide">📖 Topic-by-Topic Chapter Masterclass</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'blitz' ? 'active' : '') + '" data-vmode="blitz">⚡ Formula Blitz &amp; Speed-Hacks (' + (u.formulas || []).length + ')</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'traps' ? 'active' : '') + '" data-vmode="traps">🚨 NTA Traps &amp; Exception Vault (' + (u.traps || []).length + ')</button>' +
      '</div>';

    root.innerHTML = '' +
      viewModeTabsHtml +
      '<div class="drill-header">' +
        '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">' +
          '<select class="unit-select" id="drillUnitSelect">' + optionsHtml + '</select>' +
          '<span class="badge badge-mock">ROUND ' + drillSession.round + ' TRIAGE</span>' +
          '<span style="font-family:var(--font-mono);font-size:12px;color:var(--text-muted)" id="paceSecLabel">0s / 60s</span>' +
        '</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
          (r2Count > 0 ? '<button class="btn btn-amber" id="jumpRound2Btn">Jump to Round-2 Queue (' + r2Count + ')</button>' : '') +
          '<button class="btn" id="newParamSetBtn">↻ New Parametric Set</button>' +
          '<button class="btn btn-primary" id="finishDrillBtn">Finish &amp; Score (' + answeredCount + '/' + qs.length + ')</button>' +
        '</div>' +
      '</div>' +

      '<div class="pace-wrap"><div class="pace-bar" id="paceBarFill" style="width:0%"></div></div>' +

      '<div class="drill-layout">' +
        '<div class="q-panel" id="questionCardPanel">' +
          '<div class="q-meta">' +
            '<span>QUESTION ' + (i + 1) + ' OF ' + qs.length + ' · ' + esc(q.src || 'Parametric Engine') + '</span>' +
            '<span class="badge badge-neutral">' + esc(q.tag || 'NEET Trap') + '</span>' +
          '</div>' +
          '<div class="q-stem">' + q.q + '</div>' +
          '<div class="opt-list">' + optButtons + '</div>' +

          '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-top:10px;">' +
            '<div style="display:flex;gap:8px;">' +
              '<button class="btn" id="prevQBtn" ' + (i === 0 ? 'disabled' : '') + '>← Prev</button>' +
              '<button class="btn btn-amber" id="markR2SkipBtn">⚑ Mark Round 2 &amp; Skip</button>' +
            '</div>' +
            '<button class="btn btn-primary" id="nextQBtn">' + (i === qs.length - 1 ? 'Finish Drill →' : 'Next Question →') + '</button>' +
          '</div>' +
          solHtml +
        '</div>' +

        '<div class="panel-box">' +
          '<div class="panel-title"><span>Question Palette</span></div>' +
          '<div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;">' +
            '<b>Round 1:</b> Rapid hits.<br><b>Round 2 (Amber):</b> Difficult skips.<br>' +
            '<span style="font-size:11px;color:var(--text-light);margin-top:4px;display:block;">Shortcuts: [1..4 / A..D] answer · [Enter] next</span>' +
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

    var chooseOption = function (oi) {
      if (drillSession.chosen[i] !== null) return;
      drillSession.chosen[i] = oi;
      drillSession.status[i] = 'ans';

      var qCard = document.getElementById('questionCardPanel');
      if (oi === q.a) {
        if (qCard) {
          var floatPill = document.createElement('div');
          floatPill.className = 'floating-score';
          floatPill.textContent = '+4 MARKS';
          qCard.appendChild(floatPill);
          setTimeout(function () {
            if (floatPill.parentNode) floatPill.parentNode.removeChild(floatPill);
          }, 900);
        }
      } else {
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
    };

    root.querySelectorAll('[data-opt]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        chooseOption(parseInt(btn.getAttribute('data-opt'), 10));
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

  /* ---------------- Global Keyboard Shortcuts for Reflex Drilling ---------------- */
  window.addEventListener('keydown', function (e) {
    if (state.tab !== 'drill' || !drillSession || drillSession.finished) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

    var key = e.key.toUpperCase();
    var idx = drillSession.idx;
    var q = drillSession.questions[idx];

    // Options 1, 2, 3, 4 or A, B, C, D
    if (drillSession.chosen[idx] === null) {
      if (key === '1' || key === 'A') { selectOptionByIndex(0); e.preventDefault(); }
      else if (key === '2' || key === 'B') { selectOptionByIndex(1); e.preventDefault(); }
      else if (key === '3' || key === 'C') { selectOptionByIndex(2); e.preventDefault(); }
      else if (key === '4' || key === 'D') { selectOptionByIndex(3); e.preventDefault(); }
    }

    // Enter or Space for Next
    if (key === 'ENTER' || key === ' ') {
      if (drillSession.idx < drillSession.questions.length - 1) {
        drillSession.idx++;
        render();
        e.preventDefault();
      } else if (drillSession.chosen[idx] !== null) {
        finishDrill();
        e.preventDefault();
      }
    }

    // S for Skip to Round 2
    if (key === 'S') {
      var skipBtn = document.getElementById('markR2SkipBtn');
      if (skipBtn) skipBtn.click();
      e.preventDefault();
    }
  });

  function selectOptionByIndex(oi) {
    var optBtns = document.querySelectorAll('[data-opt="' + oi + '"]');
    if (optBtns.length) optBtns[0].click();
  }

  /* ==========================================================================
     VIEW 5: PERSONAL MISTAKE VAULT (Saved Pitfalls & Traps)
     ========================================================================== */
  function renderVault(root) {
    var list = state.vault;
    if (!list.length) {
      
    var curMode = state.notesViewMode || 'sheets';
    var viewModeTabsHtml = '' +
      '<div class="view-mode-tabs no-print">' +
        '<button class="mode-tab-btn ' + (curMode === 'sheets' ? 'active' : '') + '" data-vmode="sheets">📑 4-Page Clinical Print Sheets</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'guide' ? 'active' : '') + '" data-vmode="guide">📖 Topic-by-Topic Chapter Masterclass</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'blitz' ? 'active' : '') + '" data-vmode="blitz">⚡ Formula Blitz &amp; Speed-Hacks (' + (u.formulas || []).length + ')</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'traps' ? 'active' : '') + '" data-vmode="traps">🚨 NTA Traps &amp; Exception Vault (' + (u.traps || []).length + ')</button>' +
      '</div>';

    root.innerHTML = '' +
      viewModeTabsHtml +
        '<div class="panel-box" style="text-align:center;padding:54px 20px;max-width:760px;margin:20px auto;animation:fadeInUp 0.3s var(--ease-spring);">' +
          '<div style="font-size:42px;margin-bottom:12px;">🛡️</div>' +
          '<h3 style="font-size:18px;margin-bottom:8px;">Your Mistake Vault is Spotless!</h3>' +
          '<p style="color:var(--text-muted);font-size:13.5px;line-height:1.6;max-width:540px;margin:0 auto 20px;">' +
            'Every question you miss during the Reflex Drills is logged here automatically with its trap rationale and visual solution.' +
          '</p>' +
          '<button class="btn btn-primary" id="vaultGoDrillBtn">⚡ Launch a Reflex Drill</button>' +
        '</div>';
      var vBtn = document.getElementById('vaultGoDrillBtn');
      if (vBtn) vBtn.addEventListener('click', function () { switchTab('drill'); });
      return;
    }

    var optLetters = ['A', 'B', 'C', 'D'];
    var cards = list.map(function (v) {
      var u = NEET.units[v.unit];
      return '' +
        '<div class="q-panel" style="margin-bottom:14px;animation:fadeInUp 0.3s var(--ease-spring);">' +
          '<div class="q-meta">' +
            '<span><b>' + v.unit + '</b> · ' + esc(u ? u.name : '') + ' · Logged ' + formatAgo(v.ts) + '</span>' +
            '<div style="display:flex;gap:8px;align-items:center;">' +
              '<span class="badge badge-crit">' + esc(v.tag) + '</span>' +
              '<button class="btn btn-danger" data-del-vault="' + v.id + '" style="padding:4px 9px;font-size:11.5px;">Remove</button>' +
            '</div>' +
          '</div>' +
          '<div class="q-stem" style="font-size:14.5px;">' + v.q + '</div>' +
          '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:8px;font-size:13px;margin-bottom:12px;">' +
            v.o.map(function (o, oi) {
              var bd = oi === v.a ? 'var(--green-bd)' : (oi === v.chosen ? 'var(--red-bd)' : 'var(--border)');
              var bg = oi === v.a ? 'var(--green-bg)' : (oi === v.chosen ? 'var(--red-bg)' : 'var(--bg-card)');
              return '<div style="padding:9px 12px;border-radius:var(--radius-sm);border:1.5px solid ' + bd + ';background:' + bg + '"><b>' + optLetters[oi] + '.</b> ' + o + '</div>';
            }).join('') +
          '</div>' +
          '<div class="sol-box" style="margin-top:8px;padding:12px 14px;">' +
            '<b>Visual Solution:</b>' +
            '<ol class="sol-steps">' + (v.sol || []).map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol>' +
          '</div>' +
        '</div>';
    }).join('');

    
    var curMode = state.notesViewMode || 'sheets';
    var viewModeTabsHtml = '' +
      '<div class="view-mode-tabs no-print">' +
        '<button class="mode-tab-btn ' + (curMode === 'sheets' ? 'active' : '') + '" data-vmode="sheets">📑 4-Page Clinical Print Sheets</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'guide' ? 'active' : '') + '" data-vmode="guide">📖 Topic-by-Topic Chapter Masterclass</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'blitz' ? 'active' : '') + '" data-vmode="blitz">⚡ Formula Blitz &amp; Speed-Hacks (' + (u.formulas || []).length + ')</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'traps' ? 'active' : '') + '" data-vmode="traps">🚨 NTA Traps &amp; Exception Vault (' + (u.traps || []).length + ')</button>' +
      '</div>';

    root.innerHTML = '' +
      viewModeTabsHtml +
      '<div class="toolbar-wrapper" style="animation:fadeInUp 0.3s var(--ease-spring);">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">' +
          '<div><b>' + list.length + ' Traps Logged in Vault</b> — Review regularly to completely eliminate repeat negative marking in mocks.</div>' +
          '<button class="btn btn-danger" id="clearVaultBtn">Clear Entire Mistake Vault</button>' +
        '</div>' +
      '</div>' +
      cards;

    document.getElementById('clearVaultBtn').addEventListener('click', function () {
      if (confirm('Clear all ' + state.vault.length + ' logged mistakes?')) {
        state.vault = [];
        saveState();
        showToast('Mistake Vault Cleared');
        renderVault(root);
      }
    });
    root.querySelectorAll('[data-del-vault]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-del-vault');
        state.vault = state.vault.filter(function (x) { return x.id !== id; });
        saveState();
        showToast('Mistake removed');
        renderVault(root);
      });
    });
  }

  /* ==========================================================================
     PWA ENGINE: Service Worker Registration, Installability & Offline Management
     ========================================================================== */
  var deferredInstallPrompt = null;
  var isPwaStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                        window.navigator.standalone === true;

  function initPWA() {
    initServiceWorker();
    initInstallPrompt();
    initNetworkMonitor();
    initIosModal();
    initHashRouting();
  }

  function initServiceWorker() {
    // Only register on http(s) protocols (browsers disallow SW on file://)
    if (!('serviceWorker' in navigator)) return;
    if (window.location.protocol !== 'https:' &&
        window.location.hostname !== 'localhost' &&
        window.location.hostname !== '127.0.0.1') {
      return;
    }

    navigator.serviceWorker.register('./sw.js', { scope: './' })
      .then(function (reg) {
        // Check for updates
        reg.addEventListener('updatefound', function () {
          var newWorker = reg.installing;
          if (!newWorker) return;
          newWorker.addEventListener('statechange', function () {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showUpdateBar(newWorker);
            }
          });
        });
      })
      .catch(function (err) {
        console.warn('[PWA] Service worker registration failed:', err);
      });

    var refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });

    var dismissBtn = document.getElementById('pwaUpdateDismissBtn');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', function () {
        var bar = document.getElementById('pwaUpdateBar');
        if (bar) bar.style.display = 'none';
      });
    }
  }

  function showUpdateBar(worker) {
    var bar = document.getElementById('pwaUpdateBar');
    var reloadBtn = document.getElementById('pwaUpdateReloadBtn');
    if (!bar) return;
    bar.style.display = 'block';
    if (reloadBtn) {
      reloadBtn.onclick = function () {
        worker.postMessage({ type: 'SKIP_WAITING' });
      };
    }
  }

  function initInstallPrompt() {
    var installBtn = document.getElementById('pwaInstallBtn');

    // If already installed and launched as standalone PWA
    if (isPwaStandalone) {
      if (installBtn) installBtn.style.display = 'none';
      updateNetworkBadge();
      return;
    }

    // Chrome / Edge / Android beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      deferredInstallPrompt = e;
      if (installBtn) {
        installBtn.style.display = 'inline-flex';
        installBtn.title = 'Install NEET Tactical Engine as a standalone desktop or mobile app';
      }
    });

    // App installed event
    window.addEventListener('appinstalled', function () {
      deferredInstallPrompt = null;
      if (installBtn) installBtn.style.display = 'none';
      showToast('🎉 NEET Trainer installed! You can now study offline from your home screen or desktop.');
      if (typeof triggerConfetti === 'function') triggerConfetti();
    });

    // Install button click
    if (installBtn) {
      installBtn.addEventListener('click', function () {
        if (deferredInstallPrompt) {
          deferredInstallPrompt.prompt();
          deferredInstallPrompt.userChoice.then(function (choiceResult) {
            if (choiceResult.outcome === 'accepted') {
              installBtn.style.display = 'none';
            }
            deferredInstallPrompt = null;
          });
        } else {
          // If on iOS Safari
          var isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
          if (isIos) {
            var modal = document.getElementById('pwaIosModal');
            if (modal) modal.style.display = 'flex';
          } else {
            showToast('To install: click the Install icon in your browser address bar or menu.');
          }
        }
      });
    }
  }

  var isOnline = typeof navigator.onLine === 'boolean' ? navigator.onLine : true;

  function initNetworkMonitor() {
    updateNetworkBadge();
    window.addEventListener('online', function () {
      isOnline = true;
      updateNetworkBadge();
      showToast('Back online ⚡');
    });
    window.addEventListener('offline', function () {
      isOnline = false;
      updateNetworkBadge();
      showToast('Offline Mode: All 40 units, notes & drills are 100% functional offline!');
    });
  }

  function updateNetworkBadge() {
    var pill = document.getElementById('netStatusPill');
    var txt = document.getElementById('netStatusText');
    if (!pill || !txt) return;

    if (!isOnline) {
      pill.className = 'net-status-pill offline';
      txt.textContent = 'Offline Active';
      pill.title = 'Offline Mode Active — 100% functional without internet connection';
    } else if (isPwaStandalone) {
      pill.className = 'net-status-pill online';
      txt.textContent = 'Installed ⚡';
      pill.title = 'Running as installed PWA with offline caching enabled';
    } else {
      pill.className = 'net-status-pill online';
      txt.textContent = 'Ready';
      pill.title = 'Online & Offline-Ready (all assets cached)';
    }
  }

  function initIosModal() {
    var modal = document.getElementById('pwaIosModal');
    var closeBtn = document.getElementById('pwaIosModalClose');
    var gotItBtn = document.getElementById('pwaIosModalGotIt');
    if (!modal) return;

    var closeModal = function () { modal.style.display = 'none'; };
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (gotItBtn) gotItBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }

  function initHashRouting() {
    // Read initial hash if specified
    var hash = (window.location.hash || '').replace('#', '').trim();
    if (hash && ['dashboard', 'mock', 'notes', 'drill', 'vault'].indexOf(hash) !== -1) {
      state.tab = hash;
    }
    // Listen to hash changes (e.g. browser back/forward, shortcuts)
    window.addEventListener('hashchange', function () {
      var h = (window.location.hash || '').replace('#', '').trim();
      if (h && ['dashboard', 'mock', 'notes', 'drill', 'vault'].indexOf(h) !== -1 && h !== state.tab) {
        switchTab(h);
      }
    });
  }

  /* ---------------- Interactive Onboarding User Tour ---------------- */
  var TOUR_STORAGE_KEY = 'neetTourCompletedV1';
  var tourCurrentStep = 0;
  var TOUR_STEPS = [
    {
      tab: 'dashboard',
      icon: '⚡',
      badge: 'WELCOME TO NEET ENGINE',
      title: 'Master All 40 NMC Units With Clinical Speed',
      body: 'Engineered specifically for NEET-UG 2026. This app gives you a zero-bloat tactical revision system: 4-Block visual memory sheets, high-speed reflex drills, and automated forgetting-curve tracking.',
      tip: '🎯 <b>Core Strategy:</b> 100% NCERT recall, zero guesswork, and eliminate repeat negative marks.'
    },
    {
      tab: 'dashboard',
      icon: '📊',
      badge: 'EBBINGHAUS SPACED DECAY',
      title: 'Tactical Command HUD & Mock Readiness',
      body: 'The top HUD calculates your exact forgetting curve at 1, 3, 7, and 14-day intervals. <b>Critical Red</b> flags unrevised or low-accuracy units, <b>Due Amber</b> alerts you before memory fades, and <b>Locked Green</b> confirms ≥85% mastery.',
      tip: '💡 <i>Pro Tip:</i> Tap any status card on the HUD to instantly filter chapters!'
    },
    {
      tab: 'mock',
      icon: '🎯',
      badge: '1-CLICK TEST SYLLABUS',
      title: 'Lock Your Upcoming Coaching Mock Test',
      body: 'Got a Minor or AIATS test this Sunday? Select test chapters manually or paste your Allen / Aakash / PW test schedule text. The smart regex engine will auto-detect and lock your syllabus in 1 click.',
      tip: '🔍 <i>Try it:</i> Paste raw PDF schedule text in Mode 2 for instant auto-detection.'
    },
    {
      tab: 'notes',
      icon: '📖',
      badge: '4-BLOCK MEMORY SHEETS',
      title: 'Visual Notes with Active Blind Recall',
      body: 'Every chapter is structured into 4 visual blocks: <b>Blue</b> (Formulas & Boundaries), <b>Red</b> (NCERT Exceptions & Traps), <b>Green</b> (Reaction Pathways), and <b>Amber</b> (Lab Triggers). Activate <b>Blind Recall</b> to test yourself with frosted glass hiding answers!',
      tip: '👁️ <i>Active Recall:</i> Tap any blurred formula or trap to test if you truly remember it.'
    },
    {
      tab: 'drill',
      icon: '🚀',
      badge: 'REFLEX DRILLS & VAULT',
      title: '3-Round Speed Drills & Auto Mistake Vault',
      body: 'Practice with live 60-second pacing. Skip tough questions to Round 2 without ego. Missed questions are automatically logged to your <b>Personal Mistake Vault</b> with full visual solutions so you never repeat an exam error!',
      tip: '⚡ <i>Keyboard Speed:</i> Press keys 1..4 or A..D to answer, and Enter for Next.'
    }
  ];

  function startTour(stepIdx) {
    tourCurrentStep = (typeof stepIdx === 'number') ? stepIdx : 0;
    renderTour();
  }

  function renderTour() {
    var root = document.getElementById('tourRoot');
    if (!root) return;

    var s = TOUR_STEPS[tourCurrentStep];
    if (!s) {
      closeTour();
      return;
    }

    if (state.tab !== s.tab) {
      switchTab(s.tab);
    }

    var total = TOUR_STEPS.length;
    var dotsHtml = TOUR_STEPS.map(function (_, i) {
      return '<span class="tour-dot ' + (i === tourCurrentStep ? 'active' : '') + '"></span>';
    }).join('');

    var isLast = tourCurrentStep === total - 1;

    
    var curMode = state.notesViewMode || 'sheets';
    var viewModeTabsHtml = '' +
      '<div class="view-mode-tabs no-print">' +
        '<button class="mode-tab-btn ' + (curMode === 'sheets' ? 'active' : '') + '" data-vmode="sheets">📑 4-Page Clinical Print Sheets</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'guide' ? 'active' : '') + '" data-vmode="guide">📖 Topic-by-Topic Chapter Masterclass</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'blitz' ? 'active' : '') + '" data-vmode="blitz">⚡ Formula Blitz &amp; Speed-Hacks (' + (u.formulas || []).length + ')</button>' +
        '<button class="mode-tab-btn ' + (curMode === 'traps' ? 'active' : '') + '" data-vmode="traps">🚨 NTA Traps &amp; Exception Vault (' + (u.traps || []).length + ')</button>' +
      '</div>';

    root.innerHTML = '' +
      viewModeTabsHtml +
      '<div class="tour-backdrop" id="tourBackdropEl">' +
        '<div class="tour-card" id="tourCardEl">' +
          '<div class="tour-head">' +
            '<span class="tour-step-badge">STEP ' + (tourCurrentStep + 1) + ' OF ' + total + ' · ' + s.badge + '</span>' +
            '<button class="tour-close-btn" id="tourCloseBtn" aria-label="Skip Tour">&times;</button>' +
          '</div>' +

          '<div class="tour-icon-wrap">' + s.icon + '</div>' +
          '<h2 class="tour-title">' + s.title + '</h2>' +
          '<div class="tour-body">' + s.body + '</div>' +

          '<div class="tour-highlight-box">' +
            '<div>' + s.tip + '</div>' +
          '</div>' +

          '<div class="tour-footer">' +
            '<div class="tour-dots">' + dotsHtml + '</div>' +
            '<div class="tour-actions">' +
              (tourCurrentStep > 0 ? '<button class="btn" id="tourPrevBtn">← Back</button>' : '<button class="btn" id="tourSkipBtn">Skip Tour</button>') +
              '<button class="btn btn-primary" id="tourNextBtn">' + (isLast ? 'Start Revising 🚀' : 'Next Step →') + '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    document.getElementById('tourCloseBtn').addEventListener('click', closeTour);
    var skipBtn = document.getElementById('tourSkipBtn');
    if (skipBtn) skipBtn.addEventListener('click', closeTour);

    var prevBtn = document.getElementById('tourPrevBtn');
    if (prevBtn) prevBtn.addEventListener('click', function () {
      if (tourCurrentStep > 0) {
        tourCurrentStep--;
        renderTour();
      }
    });

    document.getElementById('tourNextBtn').addEventListener('click', function () {
      if (isLast) {
        closeTour();
        showToast('Welcome aboard! Start by checking your Critical Red units. 🎯', 'success');
      } else {
        tourCurrentStep++;
        renderTour();
      }
    });

    var backdrop = document.getElementById('tourBackdropEl');
    if (backdrop) {
      backdrop.addEventListener('click', function (e) {
        if (e.target === backdrop) closeTour();
      });
    }
  }

  function closeTour() {
    var root = document.getElementById('tourRoot');
    if (root) root.innerHTML = '';
    try {
      localStorage.setItem(TOUR_STORAGE_KEY, 'true');
    } catch (e) {}
  }

  /* ---------------- Bootstrapping ---------------- */
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme();

    document.querySelectorAll('#mainNav .tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchTab(btn.getAttribute('data-tab'));
      });
    });

    document.querySelectorAll('#mobileBottomNav .mob-nav-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchTab(btn.getAttribute('data-tab'));
      });
    });

    var brandBtn = document.getElementById('brandHomeBtn');
    if (brandBtn) {
      brandBtn.addEventListener('click', function () { switchTab('dashboard'); });
    }

    var themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme();
        saveState();
        showToast('Switched to ' + (state.theme === 'dark' ? 'Dark' : 'Light') + ' Mode');
      });
    }

    var tourHelpBtn = document.getElementById('tourHelpBtn');
    if (tourHelpBtn) {
      tourHelpBtn.addEventListener('click', function () {
        startTour(0);
      });
    }

    var headerDrillBtn = document.getElementById('headerQuickDrillBtn');
    if (headerDrillBtn) {
      headerDrillBtn.addEventListener('click', function () {
        var priId = findHighestPriorityUnit();
        startDrill(priId);
      });
    }

    initHashRouting();
    initPWA();
    render();

    // Launch onboarding tour on first visit
    try {
      if (!localStorage.getItem(TOUR_STORAGE_KEY)) {
        setTimeout(function () { startTour(0); }, 650);
      }
    } catch (e) {}
  });
})();
