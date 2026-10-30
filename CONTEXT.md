# NEET-UG 40-Unit Tactical Revision Engine — CONTEXT

> Single source of truth for architecture, syllabus scope and the data contract.
> Every data author (human or agent) MUST follow §4 exactly.

## 1. Source Syllabus Analysis (`Notice_20260108180635.pdf`)

| Item | Finding |
|---|---|
| Document | NMC (UGMEB) Public Notice U-14023/19/NEET(UG Exam)/UGMEB dated 22-12-2025 — "Updated syllabus for NEET(UG)-2026" (18 pages) |
| Physics | 20 units (pp. 4–8). Unit 20 = Experimental Skills (18 listed experiments) |
| Chemistry | 20 units: Physical 1–8, Inorganic 9–12, Organic 13–19, Unit 20 Practical (pp. 9–14) |
| Biology | Pages 15–18 — **out of scope** for this app |

### 1.1 Official-syllabus deltas vs. the build brief (handled as follows)
| Unit | Official NMC 2026 text says | Build decision |
|---|---|---|
| P1 | Units, SI, least count, sig figs, errors, dimensions | as brief |
| P2 | Also **scalars & vectors, vector addition, dot/cross product, unit vector, resolution** | include vector items |
| P3 | Also **equilibrium of concurrent forces**, conservation of linear momentum | include |
| P4 | Also **potential energy of spring**, power | include |
| P5 | Also **radius of gyration, equilibrium of rigid bodies, linear vs rotational comparison** | include. Note: rolling on incline is *not explicitly* listed — keep as high-yield extension |
| P7 | Also **Hooke's law, streamline/turbulent flow, critical velocity, latent heat, change of state** | include |
| P9 | Also **work done on compressing a gas, Avogadro's number, kinetic interpretation of temperature** | include |
| P10 | Also **reflection of waves, longitudinal vs transverse, periodic functions** | include |
| P11 | Also **continuous charge distribution, PE of dipole/2-charge system, conductors & insulators, polarization** | include |
| P12 | Also **V-I of ohmic/non-ohmic, electrical energy & power, series/parallel resistors** | include |
| P13 | Also **current loop as magnetic dipole, bar magnet as equivalent solenoid, field on axis/equator of bar magnet, torque on magnetic dipole, effect of temperature on magnetism** | include |
| P14 | Also **AC generator** | include |
| P16 | Microscope & telescope **(reflecting and refracting)**, laws of reflection/refraction via Huygens | include |
| P17 | Hertz & Lenard observations | include |
| P18 | Also **atomic masses, mass–energy relation** | include |
| P19 | Official list: semiconductors, diode I-V, rectifier, LED, photodiode, solar cell, Zener, logic gates (OR, AND, NOT, NAND, NOR) | as brief (no transistor — removed from syllabus) |
| P20 | 18 experiments listed verbatim | all 18 mapped in `lab` |
| C1 | Matter, Dalton theory, laws of combination, atomic/molecular mass, mole, % composition, EF/MF, stoichiometry | concentration terms are formally in C5 — kept as bridging content |
| C2 | Also EM radiation nature, photoelectric effect, limitations of Bohr, shapes of s,p,d orbitals | include |
| C3 | Also **Kossel-Lewis, resonance, metallic bonding, bond length/energy** | include |
| C4 | Also **heat capacity, molar heat capacity, enthalpies of sublimation, phase transition, ionisation, solution**; ΔS(universe) & ΔG as spontaneity criteria | include |
| C5 | Concentration terms, Raoult, ideal/non-ideal, colligative, molar mass, van't Hoff | **Henry's law is officially in C6 (physical equilibria)** — covered in C6 and cross-referenced in C5 |
| C6 | Also **physical-process equilibria (solid-liquid, liquid-gas, solid-gas), Henry's law, multistage ionisation, ionisation of water** | include |
| C7 | Also electrolytic vs metallic conduction, types of electrodes | Faraday's laws/products of electrolysis not explicitly listed — kept as high-yield extension |
| C8 | Also factors affecting rate, elementary vs complex reactions, rate-constant units | include |
| C9 | Modern periodic law, s/p/d/f blocks, radii, IE, EGE, valence, oxidation states, reactivity | as brief |
| C10 | **Only "General introduction, configuration, trends, unique behaviour of first element" for Groups 13–18** | trends-focused (no individual compound preparations) |
| C11 | Also occurrence, alloy formation | include |
| C12 | Also importance in **qualitative analysis, extraction of metals**, biology | include |
| C13 | Also **crystallisation, detection of phosphorus; estimation of C, H, N, halogens, S, P; EF/MF numericals** | include |
| C14 | Also classification by functional groups, homologous series, reaction types (substitution, addition, elimination, rearrangement), bond fission | include |
| C15 | Also **polymerization** of alkenes/alkynes | include |
| C16 | Nature of C–X bond, substitution mechanisms, environmental effects | include |
| C17 | Phenol nitration & sulphonation; carbonyl + NH3 derivatives, Grignard; **Carboxylic acids: only acidic strength** | HVZ/decarboxylation kept as low-weight extension |
| C18 | Amines identification & basic character; diazonium salts in synthesis | include |
| C19 | Also **enzymes**, hormones (general intro) | include |
| C20 | Cations list: Pb²⁺, Cu²⁺, Al³⁺, Fe³⁺, Zn²⁺, Ni²⁺, Ca²⁺, Ba²⁺, Mg²⁺, NH₄⁺; Anions: CO₃²⁻, S²⁻, SO₄²⁻, NO₃⁻, NO₂⁻, Cl⁻, Br⁻, I⁻ (**insoluble salts excluded**) | include exactly this list |

## 2. Product Architecture

```
index.html  (single deliverable — built from src/ by build.py)
 ├─ <style>      clinical dark/light theme, 4 colour blocks, blind-recall blur, @media print (3 pages)
 ├─ <script> core     NEET registry  →  NEET.reg(unitObject)
 ├─ <script> data     P1…P20, C1…C20   (src/data_*.js)
 └─ <script> app      Store (localStorage) · SRS Radar · Syllabus Lock + Regex parser
                      · Notes renderer · Question Synthesis Engine · Drill (3-round) · Mistake Vault · Print
```

### Views (tabs)
1. **Dashboard** – "What to Revise Today" queue (CRITICAL RED / DUE AMBER / LOCKED GREEN), unit grid with status chips, filter `[Show Only Next Mock Syllabus] / [Show All 40 NMC Units]`.
2. **Mock Lock** – 40 checkboxes (P1–P20, C1–C20) + Smart Syllabus Text Parser (regex over unit `kw`).
3. **Notes** – 4-block pictographic sheet + Blind Recall toggle + "Download / Print 3-Page Visual PDF".
4. **Drill** – 20 Q (type `num`) or 30 Q (type `conc`), 60-s calm pace bar, "Mark for Round 2 & Skip", feedback with `trapBadge` + `visualSolution`.
5. **Mistake Vault** – every wrong answer persisted; filter, re-drill, delete.

### Unit typing → drill length
| type | Units | Questions |
|---|---|---|
| `num` | P1–P20, C1–C8 | 20 |
| `conc` | C9–C20 | 30 |

## 3. Storage (`localStorage` key `neetTacticalV1`)
```js
{ theme:'dark'|'light', mock:['P3','C7'], filter:'mock'|'all',
  units:{ P1:{ last:epochMs|0, count:int, best:0-100|null, mistakes:int } },
  vault:[ {id, unit, q, o:[..], a:int, chosen:int, tag, sol:[..], ts} ] }
```
SRS status rules (computed per unit):
- **CRITICAL RED**: unit ∈ mock syllabus AND (`count==0` OR `best<75`).
- **DUE AMBER**: `count>0` and days since `last` ≥ interval where interval = `[1,3,7,14][min(count-1,3)]`.
- **LOCKED GREEN**: `count>0`, not due, `best>=85`.
- else **TRACKING** (neutral grey).

## 4. DATA CONTRACT (MANDATORY for `src/data_*.js`)

Each file contains only calls of the form `NEET.reg({...});` — plain ES2017, no imports, no external libs, no template-literal HTML injection from user input. HTML allowed inside strings **only** `<sub> <sup> <b> <i> <br>`. Use Unicode for symbols (→ ⇌ Δ λ μ θ ω π √ ≤ ≥ ≈ ∝ ° ⁻ ⁺ ½). Use single-quoted JS strings; escape inner apostrophes (`\'`).

```js
NEET.reg({
  id:'P1',                  // P1..P20, C1..C20
  subj:'Physics',           // 'Physics' | 'Physical Chemistry' | 'Inorganic Chemistry' | 'Organic Chemistry' | 'Practical Chemistry'
  type:'num',               // 'num' (20 Q drill) | 'conc' (30 Q drill)
  name:'Physics and Measurement',
  syl:'One-paragraph NMC 2026 syllabus scope (from §1).',
  kw:['measurement','significant figure','least count','dimension','error'],  // lowercase keywords/phrases for regex parser (8–15, distinctive; avoid words shared by many units)

  // BLUE block — Formula & Sign Matrix (num: ≥8, conc: ≥6; for organic use "Key Rules / Named Reactions" in same shape)
  formulas:[ { n:'Name', f:'v = u + at', u:'m s⁻¹', s:'Sign convention / meaning of symbols', b:'BOUNDARY: exactly when it fails / is invalid' } ],

  // RED block — NTA trap & NCERT exception vault (≥8)
  traps:[ { t:'Trap/anomaly statement (TRUE fact)', c:'Exact physical/chemical root cause', tag:'NCERT Exception' } ],

  // GREEN block — visual algorithms / reaction maps (≥3). Two shapes allowed:
  flows:[
    { t:'Title', chain:['Step 1','Step 2','Step 3'] },                         // linear chain
    { t:'Title', root:'Start / reactant / decision question',
      br:[ { l:'branch label (condition / reagent)', n:['node','node','final'] }, ... ] }  // 2–4 branches
  ],

  // AMBER block — Practical / experimental triggers (≥4)
  lab:[ { t:'Instrument / test / indicator', d:'What to remember (observation, colour, precaution)' } ],

  // Question seeds ----------------------------------------------------
  pairs:[ { g:'groupKey', a:'cue (reagent/condition/quantity)', b:'response (product/observation/value)' } ],
        // num ≥8, conc ≥18. Distractors are drawn from other pairs with SAME g → each g needs ≥4 pairs. All b within a g must be mutually exclusive.
        // g is SHOWN to the student as the question context → make it a readable label, e.g. 'Lassaigne extract test → observation'.
  orders:[ { q:'Correct order of X', s:['A','B','C','D'], sep:'>', why:'optional one-line reason shown in solution' } ],
        // num ≥2, conc ≥5. s = correct sequence (3–5 items, NO ties, unambiguous). Engine creates distractors by permuting.
  facts:{ T:['true statement', ...], F:['plausible but false statement', ...] },
        // num ≥8 each, conc ≥12 each. Single self-contained sentences.
  mcq:[ { q:'Question', o:['A','B','C','D'], a:0, tag:'Concept Trap', sol:['step 1','step 2','answer reason'] } ],
        // num ≥6, conc ≥14. a = index of correct option. Options must be distinct.

  // Parametric numerical generators (num: ≥6 REQUIRED; conc: optional, encouraged where numericals exist)
  gens:[ function(R){
      const v = R.int(10,40), t = R.int(2,8);
      const a = v/t;
      return { q:'A car reaches '+v+' m/s from rest in '+t+' s. Acceleration?',
               ans:a, d:[v*t, a*2, t/v], u:'m s⁻²',
               tag:'Calculation Trap',
               sol:['a = (v − u)/t', 'a = '+v+'/'+t, '= '+R.f(a)+' m s⁻²'] };
  } ]
});
```

### 4.1 `R` helper (provided by engine)
| Call | Returns |
|---|---|
| `R.int(a,b)` | random integer in [a,b] |
| `R.pick(arr)` | random element |
| `R.f(x, sig=3)` | number formatted to `sig` significant figures (uses ×10ⁿ for very large/small) |
| `R.shuffle(arr)` | shuffled copy |

Generator return: `{ q, ans, d:[3 distractors], u?, tag, sol:[steps] }`.
- `ans`/`d` may be numbers (engine formats `R.f(x)+' '+u`) **or** strings (used verbatim, `u` ignored).
- Distractors MUST encode real mistakes (forgot conversion, wrong sign, squared vs root, used diameter for radius …).
- Generators must never return NaN/Infinity; must vary parameters on each call.

### 4.2 `tag` vocabulary (trapBadge)
`Unit Conversion Trap` · `NCERT Exception` · `Sign Convention` · `Boundary Failure` · `Graph Trap` · `Approximation Limit` · `Zero-Case` · `Concept Trap` · `Order Inversion` · `Reagent Trap` · `Calculation Trap` · `Statement Trap` · `Stereo Trap` · `Practical Trap`

## 5. Question Synthesis Engine (how 20/30 are produced)
Pools built per unit, deduped by stem, then interleaved:
| Generator | Source | Form |
|---|---|---|
| G1 Parametric numeric | `gens` | randomised numerical MCQ |
| G2 Seed MCQ | `mcq` | as authored, options shuffled |
| G3 Boundary-failure | `formulas[].b` | "When does *n* (*f*) fail?" distractors = other boundaries |
| G4 Assertion–Reason | `traps` | A = t, R = c (true, correct explanation) or R = other trap's cause (true, not explanation) |
| G5 Statement I/II | `facts` | 4 standard NEET statement options |
| G6 Match cue→response | `pairs` | forward & reverse forms |
| G7 Order sequence | `orders` | correct vs 3 permutations |
| G8 Odd-one-out | `facts` | "Which statement is INCORRECT?" (1 F + 3 T) |
Target mix — `num`(20): G1×8, G2×3, G3×2, G4×2, G5×2, G6×1, G7×1, G8×1. `conc`(30): G2×8, G6×7, G7×4, G4×3, G5×3, G8×3, G3×1, G1×1 (if gens). Shortfalls refilled from G1/G6/G5/G8.

## 6. Build
`python build.py` → concatenates `src/shell_head.html` + `src/core.js` + `src/data_*.js` + `src/app.js` + `src/shell_tail.html` into **`index.html`** (fully standalone, opens via `file://`).
Validation: `node src/validate.js` — schema minimums, 200 synthetic drills/unit, option distinctness, NaN checks.

## 7. Work Split
| File | Units | Owner | Status |
|---|---|---|---|
| `src/data_p1.js` | P1–P10 | data agent A | 100% Complete & Validated |
| `src/data_p2.js` | P11–P20 | data agent B | 100% Complete & Validated |
| `src/data_c1.js` | C1–C8 | data agent C | 100% Complete & Validated |
| `src/data_c2.js` | C9–C14 | data agent D | 100% Complete & Validated |
| `src/data_c3.js` | C15–C20 | data agent E | 100% Complete & Validated |
| shell, core, app, engine, validator, build | — | principal | 100% Complete & Validated |

## 8. Build & Verification Status
- Full 40 NMC Units Verified (20 Physics + 20 Chemistry)
- Strict Validation Suite passed: 0 errors, 0 warnings (`node src/validate.js`)
- Final Single-File Bundle: `d:\NEET APP\index.html` (~1.1 MB standalone, zero CDN dependencies)

