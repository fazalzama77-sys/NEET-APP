/* ==========================================================================
   DATA: Physics Units P1 – P10 (Class XI Mechanics, Bulk Matter, Thermal, Waves)
   Official NMC NEET(UG)-2026 Syllabus · Strict NCERT Compliance
   ========================================================================== */

/* ==========================================================================
   P1: PHYSICS AND MEASUREMENT
   ========================================================================== */
NEET.reg({
  id:'P1',
  subj:'Physics',
  type:'num',
  name:'Physics and Measurement',
  syl:'Units of measurements, System of Units, SI Units, fundamental and derived units, least count, significant figures, Errors in measurements, Dimensions of Physics quantities, dimensional analysis, and its applications.',
  kw:['least count','significant figure','vernier calliper','screw gauge','dimensional analysis','percentage error','relative error','solid angle','supplementary unit','principle of homogeneity','zero error','pitch'],

  formulas:[
    { n:'Vernier Callipers Least Count', f:'LC = 1 MSD − 1 VSD = (1 − N/M) MSD', u:'mm or cm', s:'N main scale divisions coincide with M vernier divisions (standard: 9 MSD = 10 VSD)', b:'Fails when N > M (retrograde vernier requires LC = (N/M − 1) MSD)' },
    { n:'Screw Gauge Least Count', f:'LC = Pitch / N', u:'mm', s:'Pitch = axial distance moved per full rotation; N = circular scale divisions', b:'Invalid if backlash error occurs due to worn-out screw threads when reversing rotation' },
    { n:'Total Reading with Zero Error', f:'True Reading = MSR + (CSR × LC) − Zero Error', u:'mm or cm', s:'Positive zero error is subtracted (inserted with + sign); negative zero error is added (inserted with − sign)', b:'Cannot compensate for random errors or non-uniform pitch along the screw length' },
    { n:'Mean Absolute & Relative Error', f:'Δa_mean = (Σ|a_i − a_mean|)/n ; δa = Δa_mean / a_mean', u:'dimensionless (for δa)', s:'|a_i − a_mean| is always taken positive before averaging', b:'Does not eliminate systematic instrumental bias or zero-offset errors' },
    { n:'Error in Sum or Difference', f:'Z = A ± B  ⇒  ΔZ = ΔA + ΔB', u:'same as Z', s:'Absolute errors always add in both addition and subtraction', b:'Percentage errors do NOT add directly in addition or subtraction; subtraction of nearly equal numbers causes massive relative error' },
    { n:'Error in Product or Quotient', f:'Z = A^p B^q / C^r  ⇒  ΔZ/Z = |p|ΔA/A + |q|ΔB/B + |r|ΔC/C', u:'dimensionless', s:'All exponents (positive or negative) take positive modulus signs in maximum fractional error', b:'Valid only for small relative errors (ΔA/A ≪ 1) where higher-order differentials (ΔA·ΔB) are negligible' },
    { n:'Principle of Homogeneity', f:'[LHS] = [RHS] = [each additive/subtractive term]', u:'—', s:'Only quantities of identical dimensions can be added, subtracted, or equated', b:'Dimensional consistency is a necessary but NOT sufficient condition for physical correctness (cannot verify dimensionless constants like ½ or 2π)' },
    { n:'Unit Conversion Factor', f:'n₁ u₁ = n₂ u₂  ⇒  n₂ = n₁ (M₁/M₂)^a (L₁/L₂)^b (T₁/T₂)^c', u:'—', s:'Numerical value n is inversely proportional to unit size u (n ∝ 1/u)', b:'Fails for shifted-zero scales such as Celsius to Kelvin (T_K = T_C + 273.15 is affine, not purely multiplicative)' },
    { n:'Plane & Solid Angle (Supplementary)', f:'θ = s/r (rad) ; Ω = ΔA / r² (sr)', u:'rad, sr', s:'ΔA is normal area component on spherical surface of radius r; full sphere Ω = 4π sr', b:'Both are dimensionless ([M⁰L⁰T⁰]) yet possess distinct SI supplementary units' }
  ],

  traps:[
    { t:'Dimensional analysis cannot derive relations when a physical quantity depends on more than three independent mechanical variables (in M, L, T)', c:'There are only three fundamental equations from powers of M, L, and T, leaving more unknowns than equations', tag:'Boundary Failure' },
    { t:'Trailing zeros in a number with a decimal point ARE significant (e.g., 0.0500 m has 3 significant figures), whereas trailing zeros without a decimal point are NOT significant (500 m has 1)', c:'Trailing zeros after a decimal explicitly indicate the precision (least count) of the measuring instrument', tag:'NCERT Exception' },
    { t:'Changing the system of units never changes the number of significant figures in a measured value (2.308 cm = 0.02308 m = 23.08 mm all have 4 sig figs)', c:'Leading zeros only locate the decimal point and never reflect instrument precision', tag:'Unit Conversion Trap' },
    { t:'Arguments of trigonometric, logarithmic, and exponential functions (sin(ωt − kx), exp(−t/RC), ln(P/P₀)) must be strictly dimensionless [M⁰L⁰T⁰]', c:'Power series expansions of transcendental functions sum terms of different powers (1 + x + x²/2! + ...), which violates homogeneity unless x is dimensionless', tag:'Concept Trap' },
    { t:'When Z = A − B and A ≈ B, the percentage error in Z can become huge even if A and B are measured to high precision', c:'Absolute errors add (ΔZ = ΔA + ΔB) while the denominator (A − B) shrinks toward zero', tag:'Zero-Case' },
    { t:'A dimensionally correct equation may be physically wrong, such as s = ut + at² (missing ½), whereas a dimensionally wrong equation is ALWAYS physically wrong', c:'Pure numbers and dimensionless constants (½, 2π, sin θ) have dimensions [M⁰L⁰T⁰] and are invisible to dimensional checks', tag:'Concept Trap' },
    { t:'Planck\'s constant (h) and angular momentum (L = mvr) share identical dimensions [ML²T⁻¹], whereas torque (τ) and work (W) share [ML²T⁻²] despite being fundamentally different (vector vs scalar)', c:'Dimensions depend only on base unit powers and ignore vector dot vs cross product nature', tag:'Concept Trap' },
    { t:'In rounding off an uncertain digit of 5 followed by zeros, the preceding digit is incremented by 1 ONLY if it is odd, and left unchanged if it is even', c:'Standard NCERT unbiased rounding convention prevents systematic upward drift in statistical data', tag:'NCERT Exception' },
    { t:'Relative permeability (μ_r), refractive index (n), Reynolds number (Re), and strain are all both unitless and dimensionless, whereas plane angle (rad) has a unit but no dimensions', c:'Supplementary SI quantities carry defined units (radian, steradian) despite being ratios of like lengths/areas', tag:'NCERT Exception' }
  ],

  flows:[
    { t:'Significant Figures Counting & Rounding Algorithm',
      chain:[
        'Strip all leading zeros before the first non-zero digit (0.0045 → start at 4)',
        'Count all non-zero digits and all zeros trapped between non-zero digits (4005 → 4 sig figs)',
        'Check trailing zeros: keep ONLY if a decimal point is present (45.00 → 4; 4500 → 2 unless written 4.50 × 10³)',
        'For × or ÷: round result to the LEAST number of significant figures among inputs',
        'For + or −: round result to the LEAST number of decimal places among inputs'
      ]
    },
    { t:'Vernier & Screw Gauge Zero Error Correction Decision Tree',
      root:'Bring jaws/studs completely together before placing object',
      br:[
        { l:'Vernier 0 lies RIGHT of Main 0 (or Circular 0 BELOW reference line)', n:['Positive Zero Error (+e)', 'e = +k × LC', 'Subtract from observed reading: True = Obs − (+e)'] },
        { l:'Vernier 0 lies LEFT of Main 0 (or Circular 0 ABOVE reference line)', n:['Negative Zero Error (−e)', 'Vernier: e = −(M − k) × LC ; Screw: e = −(N − k) × LC', 'Add magnitude to observed reading: True = Obs − (−e) = Obs + |e|'] },
        { l:'Zero marks coincide exactly', n:['No Zero Error (e = 0)', 'True Reading = MSR + (VSR/CSR × LC)'] }
      ]
    },
    { t:'Can Dimensional Analysis Derive This Formula?',
      root:'Inspect the target physical relationship',
      br:[
        { l:'Pure power-law product of ≤3 independent variables (e.g., T ∝ l^a g^b m^c)', n:['Solvable up to a dimensionless constant k', 'Equate powers of M, L, T on both sides', 'Find k experimentally'] },
        { l:'Contains ≥4 variables in M, L, T OR sums of two terms (s = ut + ½at²)', n:['Cannot be uniquely derived', 'Only term-by-term dimensional consistency can be verified'] },
        { l:'Contains trig, log, or exponential factor (e.g., I = I₀ e^(−t/τ))', n:['Cannot derive the functional form', 'Equate the exponent/argument to [M⁰L⁰T⁰] to find unknown constant dimensions'] }
      ]
    }
  ],

  lab:[
    { t:'Vernier Callipers — Internal, External & Depth jaws', d:'Lower jaws measure external diameter/length; upper (beak) jaws measure internal diameter of hollow cylinders; thin metallic strip at the tail measures depth of a beaker/blind hole.' },
    { t:'Screw Gauge — Ratchet & Backlash Error', d:'Always turn the ratchet (not the thimble directly) until it clicks so uniform pressure is applied. Backlash error arises from play between worn nut and screw threads — avoid it by rotating the screw in one direction only while taking readings.' },
    { t:'Spherometer — Radius of Curvature of Spherical Surface', d:'R = l²/(6h) + h/2, where l is the mean distance between the three outer legs and h is the sagitta (height difference between curved surface reading and plane glass plate reading).' },
    { t:'Parallax Error Elimination in Scale Reading', d:'Line of sight must be strictly perpendicular to the scale at the point of reading; mirror strips on electrical meters align pointer with its image to guarantee zero parallax.' }
  ],

  pairs:[
    { g:'Physical Quantity → Dimensional Formula', a:'Gravitational Constant (G)', b:'[M⁻¹L³T⁻²]' },
    { g:'Physical Quantity → Dimensional Formula', a:'Coefficient of Viscosity (η)', b:'[ML⁻¹T⁻¹]' },
    { g:'Physical Quantity → Dimensional Formula', a:'Planck\'s Constant (h) or Angular Momentum (L)', b:'[ML²T⁻¹]' },
    { g:'Physical Quantity → Dimensional Formula', a:'Surface Tension (S) or Force Constant (k)', b:'[MT⁻²]' },
    { g:'Physical Quantity → Dimensional Formula', a:'Thermal Conductivity (K)', b:'[MLT⁻³K⁻¹]' },
    { g:'Instrument / Parameter → Standard Value or Formula', a:'Standard Vernier Calliper (10 VSD = 9 MSD, 1 MSD = 1 mm)', b:'Least count = 0.1 mm (0.01 cm)' },
    { g:'Instrument / Parameter → Standard Value or Formula', a:'Screw Gauge (Pitch = 0.5 mm, 50 circular divisions)', b:'Least count = 0.01 mm (0.001 cm)' },
    { g:'Instrument / Parameter → Standard Value or Formula', a:'Exact constants (π, 2 in d = 2r, Avogadro defined)', b:'Infinite significant figures' },
    { g:'Instrument / Parameter → Standard Value or Formula', a:'1 parsec (parallax of 1 arcsecond)', b:'3.08 × 10¹⁶ m (≈ 3.26 light years)' },
    { g:'Instrument / Parameter → Standard Value or Formula', a:'1Unified Atomic Mass Unit (1 u)', b:'1.66 × 10⁻²⁷ kg' }
  ],

  orders:[
    { q:'Decreasing number of significant figures in the given measurements', s:['2.0050 m (5)', '0.02050 m (4)', '20.5 m (3)', '0.0025 m (2)'], sep:'>', why:'Leading zeros are never significant; captive and trailing zeros after a decimal point are always significant.' },
    { q:'Decreasing order of astronomical length units', s:['1 parsec (3.08 × 10¹⁶ m)', '1 light year (9.46 × 10¹⁵ m)', '1 astronomical unit (1.496 × 10¹¹ m)', '1 metre'], sep:'>', why:'1 parsec ≈ 3.26 light years > 1 light year > 1 AU > 1 m.' },
    { q:'Increasing power of Time (T) in the dimensional formula of the quantity', s:['Force [MLT⁻²]', 'Dynamic Viscosity [ML⁻¹T⁻¹]', 'Strain [M⁰L⁰T⁰]', 'Time Period [M⁰L⁰T¹]'], sep:'<', why:'Powers of T are −2 (Force) < −1 (Viscosity) < 0 (Strain) < +1 (Time Period).' }
  ],

  facts:{
    T:[
      'All non-zero digits and all zeros trapped between two non-zero digits are always significant regardless of the decimal position.',
      'A dimensionally incorrect equation is always physically incorrect, whereas a dimensionally correct equation may or may not be physically correct.',
      'Relative error and percentage error are dimensionless quantities, whereas absolute error has the same dimensions and unit as the measured quantity.',
      'In van der Waals equation (P + a/V²)(V − b) = RT, the constant a has dimensions [ML⁵T⁻²] and b has dimensions [L³].',
      'Torque and work have identical dimensions [ML²T⁻²], but torque is an axial vector measured in N·m while work is a scalar measured in joules.',
      'Velocity gradient (dv/dx), angular frequency (ω), activity of a radioactive sample (A), and decay constant (λ) all share the dimension [T⁻¹].',
      'When adding or subtracting measured numbers, the final result is rounded to the least number of decimal places present in the original numbers.',
      'Energy density (energy per unit volume), pressure, stress, and Young\'s modulus all share the exact same dimensional formula [ML⁻¹T⁻²].'
    ],
    F:[
      'In the relation Z = A − B, the maximum absolute error in Z is given by ΔZ = ΔA − ΔB.',
      'A quantity that has a defined unit must necessarily have non-zero dimensions in M, L, or T.',
      'Two physical quantities having the same dimensional formula must always represent the same physical quantity.',
      'Converting a measurement from 4.700 m to 470.0 cm or 4700 mm changes the number of significant figures.',
      'When multiplying two measurements, the result should be rounded off to the least number of decimal places among the factors.',
      'Dimensional analysis can determine whether a physical quantity is a scalar or a vector.',
      'Zero error in a screw gauge is a random error that can be reduced by taking the arithmetic mean of 100 observations.',
      'In a Vernier calliper where N main scale divisions equal (N + 1) vernier scale divisions, the least count is 1 MSD / N.'
    ]
  },

  mcq:[
    { q:'In the van der Waals gas equation (P + a/V²)(V − b) = nRT, the dimensions of the ratio (a / b) for 1 mole of gas are identical to those of:',
      o:['Energy (Work)', 'Pressure', 'Force', 'Momentum'],
      a:0, tag:'Concept Trap',
      sol:['By homogeneity, [a/V²] = [P] ⇒ [a] = [P][V²]', 'Also [b] = [V]', 'Therefore [a/b] = [P][V²]/[V] = [P][V] = [ML⁻¹T⁻²][L³] = [ML²T⁻²] = Energy.']
    },
    { q:'If force (F), velocity (V), and time (T) are chosen as the fundamental base quantities instead of M, L, T, then the dimensional formula for Mass (M) is:',
      o:['[F V⁻¹ T¹]', '[F V¹ T⁻¹]', '[F V⁻¹ T⁻¹]', '[F V⁻² T¹]'],
      a:0, tag:'Concept Trap',
      sol:['From Newton\'s second law, F = M a = M (V / T)', 'Rearranging for Mass: M = F · T / V', 'Thus [M] = [F¹ V⁻¹ T¹].']
    },
    { q:'The position of a particle at time t is given by x(t) = (v₀/α)(1 − e^(−αt)), where v₀ is a constant and α > 0. The dimensions of v₀ and α are respectively:',
      o:['[L T⁻¹] and [T⁻¹]', '[L T⁻¹] and [T¹]', '[L¹] and [T⁻¹]', '[L T⁻²] and [T⁻¹]'],
      a:0, tag:'Boundary Failure',
      sol:['Exponent (−αt) must be dimensionless: [αt] = [1] ⇒ [α] = [T⁻¹]', 'Since (1 − e^(−αt)) is dimensionless, [x] = [v₀ / α]', 'Therefore [v₀] = [x][α] = [L][T⁻¹] = [L T⁻¹].']
    },
    { q:'When the jaws of a Vernier calliper (1 MSD = 1 mm, 10 VSD = 9 MSD) are closed, the zero of the Vernier scale lies to the left of the main scale zero and the 6th Vernier division coincides with a main scale division. The zero error and zero correction are:',
      o:['−0.4 mm and +0.4 mm', '−0.6 mm and +0.6 mm', '+0.6 mm and −0.6 mm', '+0.4 mm and −0.4 mm'],
      a:0, tag:'Sign Convention',
      sol:['LC = 1 mm / 10 = 0.1 mm', 'Since Vernier zero is to the LEFT of main zero, zero error is negative', 'For negative zero error: e = −(10 − k) × LC = −(10 − 6) × 0.1 mm = −0.4 mm', 'Zero correction = −e = +0.4 mm.']
    },
    { q:'The length and breadth of a rectangular lamina are measured as (2.3 ± 0.1) cm and (1.6 ± 0.1) cm. Expressing the area with proper significant figures after rounding, the result is:',
      o:['(3.7 ± 0.4) cm²', '(3.68 ± 0.39) cm²', '(3.7 ± 0.2) cm²', '(3.68 ± 0.2) cm²'],
      a:0, tag:'Calculation Trap',
      sol:['True area A = 2.3 × 1.6 = 3.68 cm² → rounded to 2 sig figs = 3.7 cm²', 'ΔA / A = 0.1/2.3 + 0.1/1.6 = 0.0435 + 0.0625 = 0.106', 'ΔA = 0.106 × 3.68 = 0.39 cm² → rounded to 1 sig fig (matching 0.1 decimal place) = 0.4 cm²', 'Result = (3.7 ± 0.4) cm².']
    },
    { q:'Which of the following pairs of physical quantities does NOT have the same dimensional formula?',
      o:['Angular impulse and Planck\'s constant', 'Surface tension and Surface energy per unit area', 'Impulse and Linear momentum', 'Moment of inertia and Moment of force'],
      a:3, tag:'Concept Trap',
      sol:['Moment of inertia I = mr² has dimensions [M L² T⁰]', 'Moment of force (torque) τ = r × F has dimensions [M L² T⁻²]', 'All other pairs share identical dimensions ([ML²T⁻¹], [MT⁻²], [MLT⁻¹]).']
    },
    { q:'In an experiment, two resistances R₁ = (100 ± 3) Ω and R₂ = (200 ± 4) Ω are connected in series. Their equivalent resistance with error limit is:',
      o:['(300 ± 7) Ω', '(300 ± 1) Ω', '(300 ± 5) Ω', '(300 ± 3.5) Ω'],
      a:0, tag:'Calculation Trap',
      sol:['In series, R_eq = R₁ + R₂ = 100 + 200 = 300 Ω', 'Absolute errors always add: ΔR_eq = ΔR₁ + ΔR₂ = 3 + 4 = 7 Ω', 'Hence R_eq = (300 ± 7) Ω.']
    }
  ],

  gens:[
    function(R){
      var pA = R.int(1, 3), pB = R.int(1, 3), pC = R.int(1, 2), pD = R.int(1, 3);
      var eA = R.int(1, 4), eB = R.int(1, 3), eC = R.int(1, 4), eD = R.int(1, 3);
      var ans = pA*eA + pB*eB + pC*eC + pD*eD;
      var d1 = pA*eA + pB*eB - pC*eC - pD*eD;
      if (d1 <= 0) d1 = Math.abs(d1) + 1;
      var d2 = eA + eB + eC + eD;
      var d3 = ans + pC*eC;
      return {
        q:'A physical quantity X is given by X = A<sup>'+pA+'</sup> B<sup>'+pB+'</sup> / (C<sup>'+pC+'</sup> D<sup>'+pD+'</sup>). If the percentage errors in measuring A, B, C, and D are '+eA+'%, '+eB+'%, '+eC+'%, and '+eD+'% respectively, the maximum percentage error in X is:',
        ans:ans, d:[d1, d2, d3], u:'%', tag:'Sign Convention',
        sol:[
          'ΔX/X × 100 = '+pA+'(ΔA/A%) + '+pB+'(ΔB/B%) + '+pC+'(ΔC/C%) + '+pD+'(ΔD/D%)',
          'Note: Denominator exponents also add with positive sign in maximum error propagation',
          '= '+pA+'('+eA+') + '+pB+'('+eB+') + '+pC+'('+eC+') + '+pD+'('+eD+') = '+ans+'%'
        ]
      };
    },
    function(R){
      var N = R.pick([10, 20, 25, 50]);
      var M = N - R.pick([1, 2]);
      var msd = R.pick([0.5, 1, 2]);
      var lc = msd * (N - M) / N;
      var d1 = msd / N;
      var d2 = msd * M / N;
      var d3 = lc * 10;
      if (d1 === lc) d1 = msd / (N * 2);
      return {
        q:'In a special Vernier calliper, '+N+' vernier scale divisions coincide with '+M+' main scale divisions. If 1 main scale division is '+msd+' mm, the least count of the instrument is:',
        ans:lc, d:[d1, d2, d3], u:'mm', tag:'Calculation Trap',
        sol:[
          '1 VSD = ('+M+'/'+N+') MSD',
          'LC = 1 MSD − 1 VSD = (1 − '+M+'/'+N+') × '+msd+' mm',
          'LC = ('+(N-M)+'/'+N+') × '+msd+' = '+R.f(lc)+' mm'
        ]
      };
    },
    function(R){
      var pitch = R.pick([0.5, 1.0]);
      var divs = R.pick([50, 100]);
      var lc = pitch / divs;
      var msr = R.int(2, 6);
      var csr = R.int(12, 44);
      var zeSign = R.pick([-1, 1]);
      var zeDivs = R.int(2, 7);
      var ze = zeSign * zeDivs * lc;
      var obs = msr + csr * lc;
      var tr = Number((obs - ze).toFixed(4));
      var wrongSign = Number((obs + ze).toFixed(4));
      var noZe = Number(obs.toFixed(4));
      var wrongLc = Number((msr + csr * (1/divs) - ze).toFixed(4));
      if (wrongLc === tr) wrongLc = Number((tr + 0.05).toFixed(4));
      return {
        q:'A screw gauge has a pitch of '+pitch+' mm and '+divs+' divisions on its circular scale. It has a '+(zeSign>0?'positive':'negative')+' zero error of '+zeDivs+' circular divisions. While measuring the diameter of a wire, the main scale reads '+msr+' mm and the '+csr+'th circular division coincides with the reference line. The true diameter of the wire is:',
        ans:tr, d:[wrongSign, noZe, wrongLc], u:'mm', tag:'Sign Convention',
        sol:[
          'Least Count LC = Pitch / N = '+pitch+' / '+divs+' = '+lc+' mm',
          'Observed reading = MSR + CSR × LC = '+msr+' + '+csr+' × '+lc+' = '+obs.toFixed(3)+' mm',
          'Zero error e = '+(zeSign>0?'+':'−')+zeDivs+' × '+lc+' = '+ze.toFixed(3)+' mm',
          'True reading = Observed − e = '+obs.toFixed(3)+' − ('+ze.toFixed(3)+') = '+tr+' mm'
        ]
      };
    },
    function(R){
      var dr = R.int(1, 4);
      var dm = R.int(1, 5);
      var ans = dm + 3 * dr;
      var d1 = dm + dr;
      var d2 = Math.abs(dm - 3 * dr) || 1;
      var d3 = dm + 2 * dr;
      return {
        q:'The mass and radius of a solid sphere are measured with percentage errors of '+dm+'% and '+dr+'% respectively. The maximum percentage error in the calculated density of the sphere is:',
        ans:ans, d:[d1, d2, d3], u:'%', tag:'Calculation Trap',
        sol:[
          'Volume of sphere V = (4/3)πr³  ⇒  Density ρ = m / ((4/3)πr³)',
          'Δρ/ρ × 100 = Δm/m × 100 + 3(Δr/r × 100)',
          '= '+dm+'% + 3('+dr+'%) = '+ans+'%'
        ]
      };
    },
    function(R){
      var dL = R.int(1, 3);
      var dT = R.int(1, 3);
      var ans = dL + 2 * dT;
      var d1 = dL + dT;
      var d2 = dL + 0.5 * dT;
      var d3 = Math.abs(dL - 2 * dT) || 0.5;
      return {
        q:'In a simple pendulum experiment to determine acceleration due to gravity g using T = 2π√(L/g), the length L is measured with an accuracy of '+dL+'% and the time period T with an accuracy of '+dT+'%. The percentage error in the determination of g is:',
        ans:ans, d:[d1, d2, d3], u:'%', tag:'Calculation Trap',
        sol:[
          'Squaring T = 2π√(L/g) gives g = 4π² L / T²',
          'Therefore Δg/g × 100 = ΔL/L × 100 + 2(ΔT/T × 100)',
          '= '+dL+'% + 2('+dT+'%) = '+ans+'%'
        ]
      };
    },
    function(R){
      var mMult = R.pick([2, 4, 5, 10]);
      var lMult = R.pick([2, 5, 10]);
      var tMult = R.pick([2, 5, 10]);
      var jVal = R.int(2, 9) * mMult * lMult * lMult;
      var ans = jVal / (mMult * lMult * lMult) * (tMult * tMult);
      var d1 = jVal * mMult * lMult * lMult / (tMult * tMult);
      var d2 = jVal / (mMult * lMult) * tMult;
      var d3 = ans / tMult;
      return {
        q:'In a new system of units, the unit of mass is '+mMult+' kg, the unit of length is '+lMult+' m, and the unit of time is '+tMult+' s. How many units of energy in this new system equal '+jVal+' J in the SI system?',
        ans:ans, d:[d1, d2, d3], u:'new units', tag:'Unit Conversion Trap',
        sol:[
          'Dimensions of energy: [M¹ L² T⁻²]',
          'n₂ = n₁ (M₁/M₂)¹ (L₁/L₂)² (T₁/T₂)⁻²',
          'n₂ = '+jVal+' × (1/'+mMult+')¹ × (1/'+lMult+')² × (1/'+tMult+')⁻² = '+R.f(ans)
        ]
      };
    },
    function(R){
      var r1 = R.int(10, 30), dr1 = R.pick([1, 2]);
      var r2 = R.int(10, 30), dr2 = R.pick([1, 2]);
      var req = (r1 * r2) / (r1 + r2);
      var dreq = req * req * (dr1 / (r1 * r1) + dr2 / (r2 * r2));
      var pct = (dreq / req) * 100;
      var d1 = (dr1/r1 + dr2/r2) * 100;
      var d2 = ((dr1 + dr2) / (r1 + r2)) * 100;
      var d3 = pct * 2;
      return {
        q:'Two resistors R₁ = ('+r1+' ± '+dr1+') Ω and R₂ = ('+r2+' ± '+dr2+') Ω are connected in parallel. Using 1/R<sub>p</sub> = 1/R₁ + 1/R₂, the percentage error in the equivalent parallel resistance R<sub>p</sub> is:',
        ans:pct, d:[d1, d2, d3], u:'%', tag:'Calculation Trap',
        sol:[
          'Differentiating 1/R_p = 1/R₁ + 1/R₂ gives ΔR_p / R_p² = ΔR₁ / R₁² + ΔR₂ / R₂²',
          'Percentage error (ΔR_p / R_p)×100 = R_p [ ΔR₁/R₁² + ΔR₂/R₂² ] × 100',
          'R_p = '+R.f(req)+' Ω  ⇒  % error = '+R.f(pct)+'%'
        ]
      };
    }
  ]
});

/* ==========================================================================
   P2: KINEMATICS
   ========================================================================== */
NEET.reg({
  id:'P2',
  subj:'Physics',
  type:'num',
  name:'Kinematics',
  syl:'Frame of reference, Motion in a straight line, Position-time graph, speed and velocity; Uniform and non-uniform motion, average speed and instantaneous velocity, Uniformly accelerated motion, velocity-time, position-time graph, relations for uniformly accelerated motion, Scalars and Vectors, Vector. Addition and subtraction, scalar and vector products, Unit Vector, Resolution of a Vector. Relative Velocity, Motion in a plane, Projectile Motion, Uniform Circular Motion.',
  kw:['projectile motion','relative velocity','displacement time graph','velocity time graph','centripetal acceleration','scalar product','vector product','unit vector','river boat','rain man','time of flight','horizontal range'],

  formulas:[
    { n:'Displacement in nth Second', f:'s_n = u + ½a(2n − 1)', u:'m', s:'s_n is displacement exclusively between t = (n−1) s and t = n s (dimensionally [L T⁻¹] because 1 s is implicit)', b:'Valid ONLY for constant acceleration AND only when velocity does not reverse direction between t = n−1 and t = n for distance' },
    { n:'Differential Kinematic Chain', f:'v = dx/dt ; a = dv/dt = d²x/dt² = v(dv/dx)', u:'m s⁻¹, m s⁻²', s:'Use a = v(dv/dx) whenever acceleration or velocity is given as a function of position x rather than time t', b:'Universal calculus relations; never replace with v = u + at when acceleration varies with t or x' },
    { n:'Vector Addition & Subtraction', f:'|A + B| = √(A² + B² + 2AB cos θ) ; |A − B| = √(A² + B² − 2AB cos θ)', u:'same as A, B', s:'θ is the angle between tail-to-tail vectors A and B; resultant makes tan α = B sin θ / (A + B cos θ) with A', b:'|A + B| = |A − B| holds ONLY when θ = 90° (A ⊥ B) or one vector is zero' },
    { n:'Scalar (Dot) & Vector (Cross) Products', f:'A · B = AB cos θ ; |A × B| = AB sin θ', u:'product of units', s:'Component of A along B is (A · B)/|B|; unit normal vector n̂ = (A × B)/|A × B|', b:'A · B = 0 requires θ = 90°; A × B = 0 requires θ = 0° or 180° (collinear/parallel vectors)' },
    { n:'Projectile Time, Height & Range', f:'T = 2u sin θ / g ; H = u² sin²θ / (2g) ; R = u² sin 2θ / g', u:'s, m, m', s:'θ is measured from horizontal; useful identity: R tan θ = 4H', b:'Strictly requires flat horizontal ground (launch level = landing level), zero air resistance, and uniform g' },
    { n:'Equation of Projectile Trajectory', f:'y = x tan θ − g x² / (2 u² cos²θ) = x tan θ (1 − x/R)', u:'m', s:'Parabola opening downward; replacing (1/cos²θ) with (1 + tan²θ) gives quadratic in tan θ for two launch angles reaching (x, y)', b:'Valid only below the horizon curvature scale where g is constant in magnitude and direction' },
    { n:'Relative Velocity & River Crossing', f:'v_AB = v_A − v_B ; t_cross = W / (v_br cos θ) ; drift x = (v_r − v_br sin θ) t_cross', u:'m s⁻¹, s, m', s:'θ is swimmer/boat angle upstream from the direct perpendicular line across river of width W', b:'Zero-drift crossing (sin θ = v_r / v_br) is IMPOSSIBLE if river speed exceeds boat speed (v_r > v_br)' },
    { n:'Non-Uniform Circular Acceleration', f:'a_c = v²/R = ω²R (radial) ; a_t = dv/dt = αR (tangential) ; a_net = √(a_c² + a_t²)', u:'m s⁻²', s:'d|v|/dt = a_t (rate of change of speed), whereas |dv/dt| = a_net (magnitude of total acceleration)', b:'In uniform circular motion a_t = 0 so d|v|/dt = 0, but |dv/dt| = v²/R ≠ 0' },
    { n:'Average Speed for Split Journeys', f:'Equal distances: v_avg = 2v₁v₂/(v₁ + v₂) ; Equal times: v_avg = (v₁ + v₂)/2', u:'m s⁻¹', s:'Harmonic mean applies to equal distance segments; arithmetic mean applies to equal time intervals', b:'Always satisfies |v_avg (vector)| ≤ average speed; equality holds ONLY for 1D motion without direction reversal' }
  ],

  traps:[
    { t:'If a particle reverses direction during time interval Δt, the area under the v–t curve taken with sign gives displacement, whereas the sum of absolute areas (∫|v|dt) gives distance travelled', c:'Speed is |v| ≥ 0 while velocity changes sign upon turnaround (where v = 0)', tag:'Graph Trap' },
    { t:'In uniform circular motion, speed, kinetic energy, and angular velocity are constant, but velocity, linear momentum, and centripetal acceleration are continuously changing vectors', c:'Centripetal acceleration always points radially inward toward the centre, rotating its direction continuously with the particle', tag:'Concept Trap' },
    { t:'At the highest point of an oblique projectile, velocity and acceleration are mutually perpendicular (θ = 90°), velocity is minimum (u cos θ ≠ 0), and radius of curvature is minimum (r_min = u² cos²θ / g)', c:'Vertical velocity v_y = 0 at the apex while horizontal velocity u cos θ remains constant and g acts vertically downward', tag:'Zero-Case' },
    { t:'For complementary launch angles θ and (90° − θ) with the same initial speed u, horizontal ranges are equal (R₁ = R₂), the ratio of maximum heights is tan²θ, and the product of flight times obeys T₁T₂ = 2R/g', c:'sin(2(90° − θ)) = sin(180° − 2θ) = sin 2θ makes R identical for both angles', tag:'Concept Trap' },
    { t:'On a velocity versus position (v–x) graph, the normal acceleration is NOT simply the slope dv/dx, but the product of velocity and slope: a = v(dv/dx)', c:'By chain rule, a = dv/dt = (dv/dx)(dx/dt) = v(dv/dx)', tag:'Graph Trap' },
    { t:'For any ball thrown vertically upward under gravity alone (ignoring air drag), the speed and time taken during the last second of ascent are always 9.8 m/s and 4.9 m respectively, COMPLETELY INDEPENDENT of the initial projection speed u', c:'Reversing time from the highest point (where v = 0) makes the last second of ascent identical to the first second of free fall from rest: d = ½g(1)² = 4.9 m', tag:'Concept Trap' },
    { t:'When air resistance (drag force f = kv acting opposite to v) is present in vertical projection, the time of ascent is LESS than the time of descent (t_up < t_down) and the landing speed is less than the launch speed', c:'During ascent gravity and drag both decelerate the body (a_up = g + f/m), whereas during descent drag opposes gravity (a_down = g − f/m)', tag:'NCERT Exception' },
    { t:'A position-time (x–t) graph can NEVER have a vertical tangent or loop back in time, and a speed-time graph can NEVER cross below the horizontal axis', c:'Infinite velocity at a vertical tangent and negative speed or backward time flow are physically impossible', tag:'Graph Trap' }
  ],

  flows:[
    { t:'1D Kinematics & Graph Conversion Pipeline',
      chain:[
        'Given x(t): Slope dx/dt gives instantaneous velocity v(t); concavity d²x/dt² gives acceleration sign',
        'Given v(t): Slope dv/dt gives acceleration a(t); signed area ∫v dt gives displacement Δx; unsigned area ∫|v| dt gives distance',
        'Given a(t): Area ∫a dt gives change in velocity Δv = v(t) − v(0)',
        'Given v(x): Multiply ordinate v by slope dv/dx to get acceleration a = v(dv/dx)',
        'Given a(x): Integrate ∫a dx = ∫v dv = ½(v² − u²) to find speed directly'
      ]
    },
    { t:'River–Swimmer Crossing Strategy Decision Tree',
      root:'Swimmer speed in still water = v_s, River flow speed = v_r, Width = W',
      br:[
        { l:'Goal 1: Minimum Time to cross', n:['Swim perpendicular to river flow (θ = 0° with normal)', 't_min = W / v_s (independent of v_r!)', 'Downstream drift x = v_r × (W / v_s)'] },
        { l:'Goal 2: Shortest Path (Zero Drift, v_s > v_r)', n:['Head upstream at angle sin θ = v_r / v_s from normal', 'Drift x = 0 (reaches directly opposite point)', 'Crossing time t = W / √(v_s² − v_r²)'] },
        { l:'Goal 3: Shortest Path when v_s < v_r (fast river)', n:['Zero drift is impossible', 'Head upstream at sin θ = v_s / v_r from normal to minimize drift', 'Minimum drift x_min = W √((v_r/v_s)² − 1)'] }
      ]
    },
    { t:'Vector Product & Angle Identification Map',
      root:'Two non-zero vectors A and B at angle θ',
      br:[
        { l:'Test Orthogonality (θ = 90°)', n:['Check A · B = A_x B_x + A_y B_y + A_z B_z = 0', 'Equivalently |A + B| = |A − B|'] },
        { l:'Test Collinearity / Parallelism (θ = 0° or 180°)', n:['Check A × B = 0 or A_x/B_x = A_y/B_y = A_z/B_z', 'If ratio > 0 → parallel (0°); if ratio < 0 → antiparallel (180°)'] },
        { l:'Find Projection of A along B', n:['Scalar component = (A · B) / |B|', 'Vector component along B = ((A · B) / |B|²) B'] }
      ]
    }
  ],

  lab:[
    { t:'Ticker-Tape / Stroboscopic Free-Fall Verification', d:'Successive displacements in equal time intervals Δt from rest follow Galileo\'s odd-number ratio 1 : 3 : 5 : 7 : 9, confirming constant acceleration without needing direct velocity sensors.' },
    { t:'Parallelogram Law of Vectors (Gravesand\'s Apparatus)', d:'Two known weights P and Q over frictionless pulleys balance a third weight R at a knot; the diagonal of the parallelogram drawn on paper to scale equals R in magnitude and is opposite in direction (no parallax with mirror strip under strings).' },
    { t:'Horizontal vs Oblique Projectile Range Bench Test', d:'Launching a ball at 30° and 60° with the same spring-gun setting lands at the exact same horizontal mark, while 45° gives the farthest mark on level ground.' },
    { t:'Motion Sensor v–t Plot for Bouncing Ball', d:'Shows parallel downward-sloping straight lines (slope = −g) separated by sharp vertical jumps during floor contact where acceleration spikes upward.' }
  ],

  pairs:[
    { g:'Projectile Condition → Resulting Relation', a:'Maximum horizontal range on level ground (θ = 45°)', b:'R_max = u²/g and H = R_max / 4' },
    { g:'Projectile Condition → Resulting Relation', a:'Horizontal range equals maximum height (R = H)', b:'Launch angle θ = tan⁻¹(4) ≈ 76°' },
    { g:'Projectile Condition → Resulting Relation', a:'Complementary launch angles θ and (90° − θ)', b:'R₁ / R₂ = 1 : 1 and H₁ / H₂ = tan²θ : 1' },
    { g:'Projectile Condition → Resulting Relation', a:'Kinetic energy at highest point when launched with KE₀ at 60°', b:'KE_top = KE₀ cos²60° = KE₀ / 4' },
    { g:'Projectile Condition → Resulting Relation', a:'Relation between R, H, and launch angle θ for any oblique projectile', b:'R tan θ = 4H' },
    { g:'Vector Condition (|A| = |B| = F) → Angle θ between A and B', a:'Resultant magnitude |A + B| = 2F', b:'θ = 0° (parallel vectors)' },
    { g:'Vector Condition (|A| = |B| = F) → Angle θ between A and B', a:'Resultant magnitude |A + B| = √3 F', b:'θ = 60°' },
    { g:'Vector Condition (|A| = |B| = F) → Angle θ between A and B', a:'Resultant magnitude |A + B| = √2 F (or |A + B| = |A − B|)', b:'θ = 90° (orthogonal vectors)' },
    { g:'Vector Condition (|A| = |B| = F) → Angle θ between A and B', a:'Resultant magnitude |A + B| = F', b:'θ = 120°' }
  ],

  orders:[
    { q:'Decreasing magnitude of the resultant of two equal forces F acting at the given angles', s:['θ = 0° (2F)', 'θ = 60° (√3F)', 'θ = 90° (√2F)', 'θ = 120° (F)', 'θ = 180° (0)'], sep:'>', why:'As angle θ increases from 0° to 180°, cos θ decreases monotonically from +1 to −1, reducing |R| = 2F cos(θ/2).' },
    { q:'Increasing horizontal range of a projectile fired with the same speed u at different angles from horizontal', s:['θ = 15°', 'θ = 65°', 'θ = 35°', 'θ = 45°'], sep:'<', why:'Range R ∝ sin 2θ increases as θ approaches 45°: |45°−15°|=30° (sin 30°=0.5) < |45°−65°|=20° (sin 130°=0.766) < |45°−35°|=10° (sin 70°=0.94) < 45° (sin 90°=1).' },
    { q:'Increasing time of flight of three projectiles having different maximum heights H₁ < H₂ < H₃', s:['Projectile 1 (lowest H₁)', 'Projectile 2 (medium H₂)', 'Projectile 3 (highest H₃)'], sep:'<', why:'Time of flight T = √(8H/g) depends purely on maximum vertical height H, completely independent of horizontal range R.' }
  ],

  facts:{
    T:[
      'For a particle moving in a straight line without reversing direction, the magnitude of displacement is equal to the distance travelled.',
      'A body can have zero instantaneous velocity and still have a non-zero constant acceleration, such as a ball at the highest point of its vertical toss.',
      'If two vectors A and B satisfy |A + B| = |A − B|, then the vectors A and B must be mutually perpendicular (A · B = 0).',
      'The horizontal component of velocity and the acceleration of a projectile under gravity remain constant throughout its flight (neglecting air drag).',
      'In uniform circular motion, the work done by the centripetal force is zero because centripetal acceleration is always perpendicular to instantaneous velocity.',
      'The angle between the velocity vector and acceleration vector of an oblique projectile decreases from (90° + θ) at launch to 90° at the apex and then to (90° − θ) at landing.',
      'Three projectiles having the exact same maximum height H must have the exact same time of flight T = √(8H/g) and identical vertical launch speed u_y, regardless of their horizontal ranges.',
      'The cross product of two vectors A × B is anti-commutative (A × B = −B × A) and points perpendicular to the plane containing both A and B.'
    ],
    F:[
      'If the average velocity of a particle over a time interval is zero, its average speed over the same interval must also be zero.',
      'At the highest point of an oblique projectile\'s trajectory, both its velocity and its acceleration become zero.',
      'The time taken by a swimmer to cross a river of width W is minimum when the swimmer heads slightly upstream to counteract the river current.',
      'In uniform circular motion, the magnitude of the rate of change of velocity |dv/dt| is zero because the speed is constant.',
      'The equations v = u + at and s = ut + ½at² can be applied directly when acceleration is given by a = kt (where k is a non-zero constant).',
      'If the scalar product A · B of two non-zero vectors is zero, then their vector product A × B must also be zero.',
      'For a projectile launched at 45° with kinetic energy K₀, its kinetic energy at the highest point is zero.',
      'The slope of a velocity-time (v–t) graph gives the instantaneous displacement of the particle.'
    ]
  },

  mcq:[
    { q:'A particle moves along a straight line such that its position x varies with time t as t = αx² + βx, where α and β are positive constants. If v is the instantaneous velocity of the particle, its retardation (deceleration) is equal to:',
      o:['2αv³', '2αv²', '2αβv³', 'αv³'],
      a:0, tag:'Calculation Trap',
      sol:['Differentiate t = αx² + βx with respect to x: dt/dx = 2αx + β', 'Since v = dx/dt, we have 1/v = 2αx + β', 'Differentiate again w.r.t. t: (−1/v²)(dv/dt) = 2α(dx/dt) = 2αv', 'Thus acceleration a = dv/dt = −2αv³ ⇒ retardation = 2αv³.']
    },
    { q:'A particle starts from rest with uniform acceleration. The ratio of the distance covered in the nth second to the total distance covered in n seconds is:',
      o:['(2n − 1) / n²', '2n / (2n − 1)', 'n² / (2n − 1)', '(2n + 1) / n²'],
      a:0, tag:'Concept Trap',
      sol:['For u = 0, displacement in nth second: s_n = ½a(2n − 1)', 'Total displacement in n seconds: S_n = ½a n²', 'Ratio s_n / S_n = (2n − 1) / n².']
    },
    { q:'For what value of m is the vector A = 2î + 3ĵ − 6k̂ perpendicular to the vector B = 3î − mĵ + 6k̂?',
      o:['−10', '+10', '−14/3', '+14/3'],
      a:0, tag:'Sign Convention',
      sol:['For perpendicular vectors, A · B = 0', '(2)(3) + (3)(−m) + (−6)(6) = 0', '6 − 3m − 36 = 0 ⇒ −3m = 30 ⇒ m = −10.']
    },
    { q:'Rain is falling vertically downward with a speed of 30 m s⁻¹. A woman rides a bicycle at 10√3 m s⁻¹ in the north-to-south direction. In which direction should she hold her umbrella to protect herself from the rain?',
      o:['30° with the vertical towards south', '30° with the vertical towards north', '60° with the vertical towards south', '60° with the vertical towards north'],
      a:0, tag:'Concept Trap',
      sol:['v_RM = v_R − v_M = −30 ĵ (downward) − 10√3 (−ŝ_south)', 'tan θ (with vertical) = v_M / v_R = 10√3 / 30 = 1/√3 ⇒ θ = 30°', 'She must tilt the umbrella in the direction of her motion, i.e., 30° with the vertical towards south.']
    },
    { q:'A projectile is fired from the ground with kinetic energy K at an angle of 60° with the horizontal. What is the magnitude of the change in its linear momentum |Δp| between the point of projection and the highest point of its trajectory?',
      o:['√(3mK / 2)', '√(2mK)', '√(mK / 2)', '0'],
      a:0, tag:'Concept Trap',
      sol:['Initial momentum p_i = mu cos 60° î + mu sin 60° ĵ; at highest point p_f = mu cos 60° î', 'Vector change Δp = p_f − p_i = −mu sin 60° ĵ', 'Magnitude |Δp| = mu sin 60° = √(2mK) × (√3 / 2) = √(3mK / 2).']
    },
    { q:'If |A × B| = √3 (A · B) for two non-zero vectors A and B, then the magnitude of their resultant |A + B| is:',
      o:['√(A² + B² + AB)', '√(A² + B² + √3 AB)', 'A + B', '√(A² + B² − AB)'],
      a:0, tag:'Calculation Trap',
      sol:['|A × B| = AB sin θ and A · B = AB cos θ', 'AB sin θ = √3 AB cos θ ⇒ tan θ = √3 ⇒ θ = 60°', '|A + B| = √(A² + B² + 2AB cos 60°) = √(A² + B² + AB).']
    }
  ],

  gens:[
    function(R){
      var v1 = R.pick([20, 30, 40, 60]);
      var v2 = R.pick([30, 40, 60, 80]);
      if (v1 === v2) v2 += 20;
      var ans = (2 * v1 * v2) / (v1 + v2);
      var d1 = (v1 + v2) / 2;
      var d2 = Math.sqrt(v1 * v2);
      var d3 = Math.abs(v2 - v1);
      if (d2 === ans) d2 = ans * 1.25;
      return {
        q:'A car travels the first half of the total distance between two cities at a constant speed of '+v1+' km h⁻¹ and the second half of the distance at a constant speed of '+v2+' km h⁻¹. Its average speed for the entire journey is:',
        ans:ans, d:[d1, d2, d3], u:'km h⁻¹', tag:'Calculation Trap',
        sol:[
          'For two equal distance halves, average speed is the harmonic mean:',
          'v_avg = 2 v₁ v₂ / (v₁ + v₂)  [NOT the arithmetic mean (v₁+v₂)/2]',
          'v_avg = 2 × '+v1+' × '+v2+' / ('+v1+' + '+v2+') = '+R.f(ans)+' km h⁻¹'
        ]
      };
    },
    function(R){
      var u = R.pick([0, 4, 8, 10]);
      var a = R.pick([2, 4, 6]);
      var n = R.int(3, 7);
      var ans = u + 0.5 * a * (2 * n - 1);
      var d1 = u * n + 0.5 * a * n * n;
      var d2 = u + 0.5 * a * (2 * n + 1);
      var d3 = u + a * (2 * n - 1);
      return {
        q:'A particle starts moving along a straight line with an initial velocity of '+u+' m s⁻¹ and a constant acceleration of '+a+' m s⁻². The distance covered by the particle during the '+n+'th second of its motion is:',
        ans:ans, d:[d1, d2, d3], u:'m', tag:'Boundary Failure',
        sol:[
          'Displacement in the nth second: s_n = u + ½a(2n − 1)',
          's_'+n+' = '+u+' + ½('+a+')(2×'+n+' − 1)',
          '= '+u+' + '+(0.5*a)+' × '+(2*n-1)+' = '+R.f(ans)+' m'
        ]
      };
    },
    function(R){
      var u = R.pick([20, 30, 40, 50]);
      var deg = R.pick([30, 45, 60]);
      var sin2 = deg === 45 ? 1 : (Math.sqrt(3) / 2);
      var sinSq = deg === 30 ? 0.25 : (deg === 45 ? 0.5 : 0.75);
      var g = 10;
      var mode = R.pick([0, 1]);
      if (mode === 0) {
        var ans = (u * u * sin2) / g;
        var d1 = (u * u * sinSq) / (2 * g);
        var d2 = (u * u * sin2) / (2 * g);
        var d3 = (2 * u * u * sin2) / g;
        return {
          q:'A projectile is launched from level ground with an initial speed of '+u+' m s⁻¹ at an angle of '+deg+'° with the horizontal (take g = 10 m s⁻²). Its horizontal range R is:',
          ans:ans, d:[d1, d2, d3], u:'m', tag:'Calculation Trap',
          sol:[
            'Horizontal range R = u² sin(2θ) / g',
            'R = ('+u+')² × sin('+(2*deg)+'°) / 10 = '+R.f(ans)+' m'
          ]
        };
      } else {
        var ansH = (u * u * sinSq) / (2 * g);
        var d1H = (u * u * sinSq) / g;
        var d2H = (u * u * (1 - sinSq)) / (2 * g);
        var d3H = (u * u * sin2) / g;
        if (d2H === ansH) d2H = ansH * 1.5;
        return {
          q:'A projectile is launched from level ground with an initial speed of '+u+' m s⁻¹ at an angle of '+deg+'° with the horizontal (take g = 10 m s⁻²). The maximum height H attained by it is:',
          ans:ansH, d:[d1H, d2H, d3H], u:'m', tag:'Calculation Trap',
          sol:[
            'Maximum height H = u² sin²θ / (2g)',
            'H = ('+u+')² × sin²('+deg+'°) / 20 = '+R.f(ansH)+' m'
          ]
        };
      }
    },
    function(R){
      var pair = R.pick([
        { vs:5, vr:3, w:120 },
        { vs:5, vr:4, w:150 },
        { vs:10, vr:6, w:240 },
        { vs:13, vr:5, w:240 }
      ]);
      var vnet = Math.sqrt(pair.vs * pair.vs - pair.vr * pair.vr);
      var ans = pair.w / vnet;
      var d1 = pair.w / pair.vs;
      var d2 = pair.w / (pair.vs + pair.vr);
      var d3 = pair.w / (pair.vs - pair.vr);
      return {
        q:'A swimmer can swim at '+pair.vs+' m s⁻¹ in still water. He wishes to cross a '+pair.w+' m wide river flowing at '+pair.vr+' m s⁻¹ along the shortest possible path (reaching the point directly opposite on the other bank). The time taken by him to cross the river is:',
        ans:ans, d:[d1, d2, d3], u:'s', tag:'Concept Trap',
        sol:[
          'For zero drift (shortest path), the swimmer heads upstream at sin θ = v_r / v_s',
          'Effective velocity across the river = √(v_s² − v_r²) = √('+pair.vs+'² − '+pair.vr+'²) = '+vnet+' m s⁻¹',
          'Time to cross t = W / √(v_s² − v_r²) = '+pair.w+' / '+vnet+' = '+R.f(ans)+' s'
        ]
      };
    },
    function(R){
      var ax = R.int(1, 5), ay = R.int(1, 5), az = R.int(-4, -1);
      var bx = R.int(2, 6), by = R.int(-5, -1), bz = R.int(1, 4);
      var ans = ax * bx + ay * by + az * bz;
      var d1 = ax * bx + ay * by - az * bz;
      var d2 = Math.abs(ax * bx) + Math.abs(ay * by) + Math.abs(az * bz);
      var d3 = ans + 2 * ay * by;
      if (d3 === ans) d3 = ans - 5;
      return {
        q:'A constant force F = ('+ax+'î + '+ay+'ĵ '+az+'k̂) N displaces a particle by r = ('+bx+'î '+by+'ĵ + '+bz+'k̂) m. The work done W = F · r by the force is:',
        ans:ans, d:[d1, d2, d3], u:'J', tag:'Sign Convention',
        sol:[
          'Scalar product W = F_x r_x + F_y r_y + F_z r_z',
          'W = ('+ax+')('+bx+') + ('+ay+')('+by+') + ('+az+')('+bz+')',
          'W = '+(ax*bx)+' + ('+(ay*by)+') + ('+(az*bz)+') = '+ans+' J'
        ]
      };
    },
    function(R){
      var rCm = R.pick([20, 40, 50, 80, 100]);
      var r = rCm / 100;
      var v = R.pick([2, 4, 6, 8, 10]);
      var ac = (v * v) / r;
      var at = R.pick([3, 5, 6, 8, 12]);
      var ans = Math.sqrt(ac * ac + at * at);
      var d1 = ac;
      var d2 = ac + at;
      var d3 = (v * v) / rCm;
      return {
        q:'A particle moves in a circle of radius '+rCm+' cm. At an instant when its linear speed is '+v+' m s⁻¹, its speed is increasing at a rate of '+at+' m s⁻². The magnitude of the net acceleration of the particle at this instant is:',
        ans:ans, d:[d1, d2, d3], u:'m s⁻²', tag:'Unit Conversion Trap',
        sol:[
          'Convert radius to SI: R = '+rCm+' cm = '+r+' m',
          'Centripetal acceleration a_c = v²/R = '+v+'² / '+r+' = '+R.f(ac)+' m s⁻²',
          'Tangential acceleration a_t = dv/dt = '+at+' m s⁻²',
          'Net acceleration a_net = √(a_c² + a_t²) = √('+R.f(ac)+'² + '+at+'²) = '+R.f(ans)+' m s⁻²'
        ]
      };
    }
  ]
});

/* ==========================================================================
   P3: LAWS OF MOTION
   ========================================================================== */
NEET.reg({
  id:'P3',
  subj:'Physics',
  type:'num',
  name:'Laws of Motion',
  syl:'Force and inertia, Newton\'s First law of motion; Momentum, Newton\'s Second Law of motion, Impulses; Newton\'s Third Law of motion. Law of conservation of linear momentum and its applications. Equilibrium of concurrent forces. Static and Kinetic friction, laws of friction, rolling friction. Dynamics of uniform circular motion: centripetal force and its applications: vehicle on a level circular road, vehicle on a banked road.',
  kw:['impulse','linear momentum','atwood machine','static friction','kinetic friction','rolling friction','angle of repose','angle of friction','banked road','centripetal force','lami theorem','pseudo force','apparent weight'],

  formulas:[
    { n:'Newton\'s Second Law & Variable Mass', f:'F_ext = dp/dt = m(dv/dt) + v_rel(dm/dt)', u:'N (kg m s⁻²)', s:'v_rel is velocity of ejected/added mass relative to the main body; for constant mass F_ext = ma', b:'Valid ONLY in inertial frames of reference unless pseudo force (−m a_frame) is explicitly added' },
    { n:'Impulse–Momentum Theorem', f:'J = ∫ F dt = F_avg Δt = Δp = p_f − p_i', u:'N s or kg m s⁻¹', s:'Signed area under the F–t graph equals vector change in momentum Δp', b:'When a ball rebounds normally from a wall at speed v, Δp = 2mv (not zero!)' },
    { n:'Conservation of Linear Momentum & Recoil', f:'F_ext = 0  ⇒  Σp_i = Σp_f ; v_gun = −(m_b / M_g) v_b', u:'m s⁻¹', s:'Kinetic energy splits inversely with mass in a 2-body explosion from rest: K₁/K₂ = m₂/m₁', b:'Fails along any axis where an external impulse acts (e.g., normal reaction from ground during oblique mortar firing)' },
    { n:'Atwood Machine (Two Masses on Ideal Pulley)', f:'a = (m₁ − m₂)g / (m₁ + m₂) ; T = 2m₁m₂g / (m₁ + m₂)', u:'m s⁻², N', s:'m₁ > m₂; thrust on the pulley ceiling clamp is 2T = 4m₁m₂g / (m₁ + m₂)', b:'Breaks down if pulley has moment of inertia I (then T₁ ≠ T₂) or if string is massive' },
    { n:'Apparent Weight in Accelerating Lift', f:'N = m(g + a) (upward a) ; N = m(g − a) (downward a)', u:'N', s:'a is acceleration of the elevator; deceleration while moving up means downward acceleration a', b:'In free fall (a = g downward), N = 0 (weightlessness); if a > g downward, block leaves floor and hits ceiling' },
    { n:'Static vs Kinetic Friction & Angle of Repose', f:'0 ≤ f_s ≤ μ_s N ; f_k = μ_k N ; tan θ_r = μ_s', u:'N, dimensionless', s:'Angle of friction λ satisfies tan λ = μ_s; minimum force to move block on horizontal rough floor is μ_s mg / √(1 + μ_s²)', b:'f_s is self-adjusting and equals F_applied (NOT μ_s N) whenever the body remains at rest below impending slip' },
    { n:' Equilibrium of Three Concurrent Forces (Lami\'s Theorem)', f:'F₁ / sin α = F₂ / sin β = F₃ / sin γ', u:'N', s:'α, β, γ are the interior angles directly opposite to forces F₁, F₂, F₃ respectively (α + β + γ = 360°)', b:'Applicable ONLY when exactly THREE coplanar concurrent forces are in equilibrium' },
    { n:'Maximum Safe Speed on Level Circular Road', f:'v_max = √(μ_s R g)', u:'m s⁻¹', s:'Static friction towards the centre provides the required centripetal force mv²/R', b:'Independent of the mass of the vehicle; skidding outward occurs if v > √(μ_s R g)' },
    { n:'Banked Circular Road (With & Without Friction)', f:'v_opt = √(R g tan θ) ; v_max = √[ R g (tan θ + μ_s) / (1 − μ_s tan θ) ]', u:'m s⁻¹', s:'At v = v_opt, friction required is zero (zero tyre wear); for v < v_opt friction acts UP the incline', b:'If μ_s ≥ cot θ (1 − μ_s tan θ ≤ 0), v_max → ∞ (vehicle never skids outward at any speed)' }
  ],

  traps:[
    { t:'Static friction is a self-adjusting force: if a 10 N horizontal force acts on a block with limiting friction μ_s N = 25 N, the actual static friction acting is 10 N, NOT 25 N', c:'Setting f_s = 25 N would accelerate the block backward against the applied force, violating equilibrium', tag:'Concept Trap' },
    { t:'Action and reaction forces in Newton\'s third law ALWAYS act simultaneously on two different bodies, so they can never cancel each other out in a single-body free-body diagram', c:'Only forces acting on the SAME body are summed in ΣF = ma', tag:'Concept Trap' },
    { t:'Pulling a lawn roller at angle θ above the horizontal is easier than pushing it at the same angle θ below the horizontal', c:'Pulling reduces normal reaction N = mg − F sin θ (lowering friction), whereas pushing increases N = mg + F sin θ', tag:'Concept Trap' },
    { t:'Normal reaction N is NOT always equal to mg or mg cos θ — on a vertical wall where a block is pressed by horizontal force F, normal reaction is N = F and weight mg is balanced by vertical static friction', c:'Normal reaction is determined by constraint equilibrium perpendicular to the contact surface, not by gravity automatically', tag:'Boundary Failure' },
    { t:'During thepedalling of a bicycle on a level road, static friction from the ground acts FORWARD on the rear (powered) wheel and BACKWARD on the front (free-rolling) wheel', c:'The powered rear wheel pushes the ground backward at the contact patch, whereas the front wheel is pushed forward by the frame and spun up by backward ground friction', tag:'NCERT Exception' },
    { t:'Cutting a string causes tension in it to drop to zero INSTANTANEOUSLY, whereas cutting an attached spring leaves the tension in the remaining spring unchanged at the instant of cutting (t = 0⁺)', c:'A physical spring requires finite time to change its macroscopic extension Δx, so F_spring = kx cannot jump discontinuously', tag:'Zero-Case' },
    { t:'When a vehicle negotiates a banked curve at a speed LOWER than the optimum speed √(Rg tan θ), static friction acts UP the inclined road surface', c:'At low speed the inward horizontal component N sin θ exceeds mv²/R, tending to slide the car down the bank', tag:'Sign Convention' },
    { t:'The minimum force required to just start moving a block of mass m on a rough horizontal floor (coefficient μ) is mg sin λ = μmg / √(1 + μ²), NOT μmg', c:'Pulling upward at the angle of friction θ = λ = tan⁻¹(μ) simultaneously provides forward pull and reduces normal reaction', tag:'Calculation Trap' }
  ],

  flows:[
    { t:'Systematic Free-Body Diagram (FBD) & Constraint Algorithm',
      chain:[
        'Isolate each body and choose a convenient frame (inertial ground frame or non-inertial frame + pseudo force −m a₀)',
        'Draw non-contact forces (mg vertically downward) and contact forces (N perpendicular to surface, T along string away from body, f parallel to surface)',
        'Write string/wedge constraint: Σ(T · x) = 0 ⇒ Σ(T · v) = 0 ⇒ Σ(T · a) = 0',
        'Resolve forces along and perpendicular to the acceleration axis and solve ΣF = ma'
      ]
    },
    { t:'Friction Regime & Direction Decision Tree (Block on Incline θ)',
      root:'Compare incline angle θ (or net driving force F_drive) with limiting friction f_max = μ_s N',
      br:[
        { l:'F_drive = 0 (horizontal, no pull)', n:['Static regime', 'Friction f = 0', 'Acceleration a = 0'] },
        { l:'0 < F_drive ≤ f_max (or θ ≤ θ_r = tan⁻¹μ_s)', n:['Static equilibrium holds', 'f = F_drive (self-adjusting, opposes tendency of relative slip)', 'Acceleration a = 0'] },
        { l:'F_drive > f_max (or θ > θ_r)', n:['Kinetic sliding occurs', 'f = f_k = μ_k N (strictly constant)', 'a = (F_drive − μ_k N) / m'] }
      ]
    },
    { t:'Banked Circular Turn Friction Direction Tree',
      root:'Compare vehicle speed v with optimum banking speed v₀ = √(Rg tan θ)',
      br:[
        { l:'v = √(Rg tan θ)', n:['No tendency to slip', 'f_s = 0 (no friction needed)', 'N sin θ = mv²/R and N cos θ = mg'] },
        { l:'v > √(Rg tan θ)', n:['Car tends to skid UP the bank (outward)', 'f_s acts DOWN the incline', 'v_max = √[Rg(tan θ + μ_s)/(1 − μ_s tan θ)]'] },
        { l:'v < √(Rg tan θ)', n:['Car tends to slip DOWN the bank (inward)', 'f_s acts UP the incline', 'v_min = √[Rg(tan θ − μ_s)/(1 + μ_s tan θ)]'] }
      ]
    }
  ],

  lab:[
    { t:'Angle of Repose Inclined Plane Apparatus', d:'Slowly tilt a plank carrying a block until the block just begins to slide at angle θ_r; then μ_s = tan θ_r directly without needing a spring balance.' },
    { t:'Horizontal Table Pulley & Pan (Laws of Limiting Friction)', d:'Plot limiting weight in pan (F_L) vs total normal load (N = W_block + W_weights); the straight-line graph passes through the origin with slope = μ_s, verifying that limiting friction is independent of contact area.' },
    { t:'Atwood Machine Stroboscopic / Photogate Timing', d:'Small mass difference (m₁ − m₂) produces a slow, accurately measurable acceleration a = (m₁ − m₂)g/(m₁ + m₂) to verify Newton\'s second law.' },
    { t:'Ballistic Pendulum / Air-Track Glider Recoil', d:'Compressed spring released between two gliders of masses m₁ and m₂ on a frictionless air track yields v₁/v₂ = m₂/m₁, confirming p_total = 0.' }
  ],

  pairs:[
    { g:'Physical Situation → Resulting Tension / Reading', a:'Ideal Atwood machine with masses m and 3m', b:'Acceleration = g/2 and string tension = 1.5 mg' },
    { g:'Physical Situation → Resulting Tension / Reading', a:'Ideal Atwood machine with equal masses m and m', b:'Acceleration = 0 and string tension = mg' },
    { g:'Physical Situation → Resulting Tension / Reading', a:'Weighing scale reading in a lift accelerating upward at g/2', b:'Apparent weight = 1.5 mg' },
    { g:'Physical Situation → Resulting Tension / Reading', a:'Weighing scale reading in a lift moving upward but decelerating at g/2', b:'Apparent weight = 0.5 mg' },
    { g:'Physical Situation → Resulting Tension / Reading', a:'Weighing scale reading in a freely falling lift (cable snapped)', b:'Apparent weight = 0 (weightlessness)' },
    { g:'Friction / Circular Parameter → Exact Expression', a:'Angle of repose θ_r for static friction coefficient μ_s', b:'θ_r = tan⁻¹(μ_s)' },
    { g:'Friction / Circular Parameter → Exact Expression', a:'Resultant contact force R_c on rough surface at limiting equilibrium', b:'R_c = N √(1 + μ_s²)' },
    { g:'Friction / Circular Parameter → Exact Expression', a:'Minimum force to pull a block of mass m on rough horizontal floor', b:'F_min = μ_s mg / √(1 + μ_s²)' },
    { g:'Friction / Circular Parameter → Exact Expression', a:'Optimum speed on a banked road of radius R and angle θ (no friction)', b:'v₀ = √(R g tan θ)' }
  ],

  orders:[
    { q:'Decreasing magnitude of coefficients of friction for a given pair of surfaces', s:['Static friction coefficient (μ_s)', 'Kinetic friction coefficient (μ_k)', 'Rolling friction coefficient (μ_r)'], sep:'>', why:'Interlocking of cold welds is strongest at rest (μ_s), weaker during sliding (μ_k), and minimal in rolling (μ_r): μ_s > μ_k ≫ μ_r.' },
    { q:'Increasing apparent weight of a passenger of mass m in an elevator', s:['Free fall downward at g (0)', 'Accelerating downward at g/3 (2mg/3)', 'Moving upward at constant speed v (mg)', 'Accelerating upward at g/3 (4mg/3)'], sep:'<', why:'Apparent weight N = m(g + a_upward): 0 < 2mg/3 < mg < 4mg/3.' },
    { q:'Decreasing normal reaction N on a block of mass m placed on a rough horizontal floor', s:['Pushed at angle θ below horizontal (mg + F sin θ)', 'Pulled horizontally (mg)', 'Pulled at angle θ above horizontal (mg − F sin θ)'], sep:'>', why:'Vertical force equilibrium gives N = mg + F sin θ for push, N = mg for horizontal pull, and N = mg − F sin θ for upward pull.' }
  ],

  facts:{
    T:[
      'Newton\'s first law of motion defines force qualitatively and defines an inertial frame of reference.',
      'Impulse is a vector quantity whose direction is the same as the direction of the net change in linear momentum Δp.',
      'The coefficient of static friction μ_s can be greater than 1 for specially prepared clean or sticky surfaces (e.g., silicon rubber on glass), though it is usually less than 1.',
      'When a horse pulls a cart forward on a level road, the force that accelerates the horse-cart system forward is the horizontal component of the ground\'s reaction on the horse\'s hooves.',
      'If a person stands in an elevator moving upward with constant velocity, the normal reaction from the floor equals their true weight mg.',
      'Internal forces within a system of particlesalways occur in equal and opposite pairs and can change the kinetic energy of the system, but can NEVER change the total linear momentum of the system.',
      'For a block at rest on an inclined plane of angle θ < θ_r, the frictional force acting on the block is mg sin θ and NOT μ_s mg cos θ.',
      'In a conical pendulum of length L making angle θ with the vertical, the time period of revolution is T = 2π√(L cos θ / g).'
    ],
    F:[
      'Action and reaction forces cancel each other out because they are equal in magnitude and opposite in direction.',
      'Frictional force always opposes the motion of a body relative to the ground.',
      'The limiting force of static friction is directly proportional to the macroscopic area of contact between the two surfaces.',
      'When a shell explodes in mid-air at the highest point of its projectile path, both its total kinetic energy and total linear momentum are conserved.',
      'A passenger in a lift moving upward and slowing down experiences an apparent weight greater than their true weight mg.',
      'Centripetal force is a separate fourth fundamental force that must be added to the free-body diagram along with tension and gravity in an inertial frame.',
      'The angle of repose for a rough inclined plane depends on the mass of the block placed on it.',
      'On a banked circular road without friction, the normal reaction N on the car is equal to mg cos θ.'
    ]
  },

  mcq:[
    { q:'A monkey of mass 40 kg climbs on a massless rope which can stand a maximum tension of 600 N. In which of the following cases will the rope break? (Take g = 10 m s⁻²)',
      o:['The monkey climbs up with an acceleration of 6 m s⁻²', 'The monkey climbs down with an acceleration of 4 m s⁻²', 'The monkey climbs up with a uniform speed of 5 m s⁻¹', 'The monkey falls down the rope nearly freely under gravity'],
      a:0, tag:'Sign Convention',
      sol:['Tension in rope T = m(g + a_up)', 'When climbing up at a = 6 m s⁻²: T = 40 × (10 + 6) = 640 N > 600 N, so the rope breaks!', 'In the other cases T = 40(10−4) = 240 N, 40(10+0) = 400 N, and 0 N, all ≤ 600 N.']
    },
    { q:'Three blocks of masses m₁ = 2 kg, m₂ = 3 kg, and m₃ = 5 kg are connected by light inextensible strings on a smooth horizontal table and pulled with a horizontal force F = 20 N applied to m₃. If the order is m₁—(T₁)—m₂—(T₂)—m₃→F, the ratio of tensions T₁ : T₂ is:',
      o:['2 : 5', '5 : 2', '2 : 3', '3 : 5'],
      a:0, tag:'Concept Trap',
      sol:['Common acceleration a = F / (m₁ + m₂ + m₃)', 'T₁ pulls only m₁: T₁ = m₁ a = 2a', 'T₂ pulls both m₁ and m₂: T₂ = (m₁ + m₂)a = (2 + 3)a = 5a', 'Ratio T₁ : T₂ = 2 : 5.']
    },
    { q:'A block of mass m is placed on a smooth inclined wedge of inclination θ. The whole system is accelerated horizontally so that the block does not slip on the wedge. The horizontal acceleration of the wedge and the normal force exerted by the wedge on the block are:',
      o:['g tan θ and mg / cos θ', 'g sin θ and mg cos θ', 'g tan θ and mg cos θ', 'g cot θ and mg / sin θ'],
      a:0, tag:'Boundary Failure',
      sol:['In wedge frame, pseudo force ma acts horizontally opposite to wedge acceleration', 'For no slipping along incline: ma cos θ = mg sin θ ⇒ a = g tan θ', 'Vertical equilibrium in ground frame: N cos θ = mg ⇒ N = mg / cos θ (NOT mg cos θ!).']
    },
    { q:'A rigid ball of mass m strikes a rigid vertical wall at 60° to the normal and gets reflected without loss of speed at 60° to the normal. The magnitude of impulse imparted by the wall on the ball is:',
      o:['mv', '2mv', '√3 mv', 'mv / 2'],
      a:0, tag:'Sign Convention',
      sol:['Angle θ is measured with the NORMAL: θ = 60°', 'Component of momentum parallel to wall (mv sin 60°) remains unchanged', 'Normal component reverses: |Δp_x| = 2 m v cos 60° = 2 m v (1/2) = mv.']
    },
    { q:'A block of mass 5 kg is held against a rough vertical wall (μ_s = 0.5) by pressing it with a horizontal force of 120 N. Taking g = 10 m s⁻², the frictional force acting between the wall and the block is:',
      o:['50 N upward', '60 N upward', '50 N downward', '10 N upward'],
      a:0, tag:'Concept Trap',
      sol:['Normal reaction from wall N = F_horiz = 120 N', 'Maximum static friction available f_max = μ_s N = 0.5 × 120 = 60 N', 'Downward driving force (weight) mg = 5 × 10 = 50 N < 60 N', 'Since block remains at rest, self-adjusting static friction equals weight = 50 N upward.']
    },
    { q:'A heavy uniform chain of length L lies on a horizontal rough table with coefficient of friction μ. What maximum fraction of its length can hang over the edge of the table without the chain sliding off?',
      o:['μ / (1 + μ)', 'μ / (1 − μ)', '1 / (1 + μ)', 'μ'],
      a:0, tag:'Calculation Trap',
      sol:['Let fraction k of length L hang over the edge; mass hanging = km, mass on table = (1 − k)m', 'At limiting equilibrium: Weight of hanging part = Limiting friction on table part', 'k m g = μ (1 − k) m g  ⇒  k = μ − μk  ⇒  k = μ / (1 + μ).']
    }
  ],

  gens:[
    function(R){
      var m1 = R.int(4, 10);
      var m2 = R.int(1, m1 - 1);
      var g = 10;
      var a = ((m1 - m2) * g) / (m1 + m2);
      var T = (2 * m1 * m2 * g) / (m1 + m2);
      var mode = R.pick([0, 1]);
      if (mode === 0) {
        var d1 = ((m1 + m2) * g) / (m1 - m2);
        var d2 = (m1 * g) / (m1 + m2);
        var d3 = ((m1 - m2) * g) / m1;
        return {
          q:'Two masses m₁ = '+m1+' kg and m₂ = '+m2+' kg are connected at the two ends of a light inextensible string passing over a frictionless massless pulley (Atwood machine). Taking g = 10 m s⁻², the acceleration of the masses when released is:',
          ans:a, d:[d1, d2, d3], u:'m s⁻²', tag:'Calculation Trap',
          sol:[
            'Net driving force = (m₁ − m₂)g ; Total mass moved = m₁ + m₂',
            'a = (m₁ − m₂)g / (m₁ + m₂) = ('+m1+' − '+m2+')×10 / ('+m1+' + '+m2+') = '+R.f(a)+' m s⁻²'
          ]
        };
      } else {
        var dt1 = (m1 * m2 * g) / (m1 + m2);
        var dt2 = (4 * m1 * m2 * g) / (m1 + m2);
        var dt3 = ((m1 + m2) * g) / 2;
        if (dt3 === T) dt3 = T * 1.3;
        return {
          q:'Two masses m₁ = '+m1+' kg and m₂ = '+m2+' kg are suspended over a light frictionless pulley by an ideal string. Taking g = 10 m s⁻², the tension T in the string when the system is released is:',
          ans:T, d:[dt1, dt2, dt3], u:'N', tag:'Calculation Trap',
          sol:[
            'Tension in Atwood string: T = 2 m₁ m₂ g / (m₁ + m₂)',
            'T = 2 × '+m1+' × '+m2+' × 10 / ('+m1+' + '+m2+') = '+R.f(T)+' N'
          ]
        };
      }
    },
    function(R){
      var m = R.pick([2, 4, 5, 8, 10]);
      var mu = R.pick([0.4, 0.5, 0.6]);
      var g = 10;
      var fmax = mu * m * g;
      var F = R.int(Math.floor(fmax * 0.3), Math.floor(fmax * 0.85));
      var ans = F;
      var d1 = fmax;
      var d2 = fmax - F;
      var d3 = m * g;
      if (d2 === ans) d2 = fmax + 2;
      return {
        q:'A block of mass '+m+' kg rests on a rough horizontal floor having coefficient of static friction μ<sub>s</sub> = '+mu+' (take g = 10 m s⁻²). If a horizontal force of '+F+' N is applied to the block, the magnitude of the frictional force acting on the block is:',
        ans:ans, d:[d1, d2, d3], u:'N', tag:'Concept Trap',
        sol:[
          'Limiting static friction f_max = μ_s mg = '+mu+' × '+m+' × 10 = '+fmax+' N',
          'Since applied force F = '+F+' N < f_max ('+fmax+' N), the block does NOT move',
          'Static friction is self-adjusting: f_s = F_applied = '+F+' N'
        ]
      };
    },
    function(R){
      var mG = R.int(100, 500);
      var mKg = mG / 1000;
      var u = R.int(10, 25);
      var v = R.int(15, 30);
      var ans = mKg * (v + u);
      var d1 = mKg * Math.abs(v - u);
      var d2 = mG * (v + u);
      var d3 = 0.5 * mKg * (v * v - u * u);
      if (d1 === 0) d1 = mKg * u;
      return {
        q:'A cricket ball of mass '+mG+' g moving horizontally at '+u+' m s⁻¹ is hit straight back towards the bowler with a speed of '+v+' m s⁻¹. The magnitude of the impulse imparted to the ball by the bat is:',
        ans:ans, d:[d1, d2, d3], u:'N s', tag:'Sign Convention',
        sol:[
          'Convert mass to SI: m = '+mG+' g = '+mKg+' kg',
          'Since velocity reverses direction, |Δp| = m(v + u)  [NOT m(v − u)]',
          'Impulse J = '+mKg+' × ('+v+' + '+u+') = '+R.f(ans)+' N s'
        ]
      };
    },
    function(R){
      var M = R.pick([4, 5, 8, 10]);
      var mbG = R.pick([20, 25, 40, 50]);
      var mb = mbG / 1000;
      var vb = R.pick([200, 300, 400, 500]);
      var ans = (mb * vb) / M;
      var d1 = (mbG * vb) / M;
      var d2 = (M * vb) / mbG;
      var d3 = ans * 2;
      return {
        q:'A rifle of mass '+M+' kg fires a bullet of mass '+mbG+' g with a muzzle speed of '+vb+' m s⁻¹. The recoil speed of the rifle is:',
        ans:ans, d:[d1, d2, d3], u:'m s⁻¹', tag:'Unit Conversion Trap',
        sol:[
          'By conservation of linear momentum: M v_recoil = m_b v_b',
          'Convert bullet mass: m_b = '+mbG+' g = '+mb+' kg',
          'v_recoil = ('+mb+' × '+vb+') / '+M+' = '+R.f(ans)+' m s⁻¹'
        ]
      };
    },
    function(R){
      var mu = R.pick([0.2, 0.25, 0.4, 0.5]);
      var rad = R.pick([20, 40, 50, 80, 100]);
      var g = 10;
      var ans = Math.sqrt(mu * rad * g);
      var d1 = mu * rad * g;
      var d2 = Math.sqrt(rad * g / mu);
      var d3 = Math.sqrt(2 * mu * rad * g);
      return {
        q:'What is the maximum safe speed with which a car can negotiate an unbanked (level) circular turn of radius '+rad+' m if the coefficient of static friction between the tyres and the road is '+mu+'? (Take g = 10 m s⁻²)',
        ans:ans, d:[d1, d2, d3], u:'m s⁻¹', tag:'Calculation Trap',
        sol:[
          'On a level circular road, static friction provides centripetal force: m v² / R ≤ μ_s m g',
          'v_max = √(μ_s R g) = √('+mu+' × '+rad+' × 10) = '+R.f(ans)+' m s⁻¹'
        ]
      };
    },
    function(R){
      var m = R.pick([50, 60, 70, 80]);
      var a = R.pick([2, 3, 4, 5]);
      var up = R.pick([true, false]);
      var g = 10;
      var ans = up ? m * (g + a) : m * (g - a);
      var d1 = up ? m * (g - a) : m * (g + a);
      var d2 = m * g;
      var d3 = m * a;
      return {
        q:'A person of mass '+m+' kg stands on a weighing machine inside an elevator that is accelerating '+(up?'upward':'downward')+' at '+a+' m s⁻². Taking g = 10 m s⁻², the reading of the weighing machine (in N) is:',
        ans:ans, d:[d1, d2, d3], u:'N', tag:'Sign Convention',
        sol:[
          'Equation of motion for person: '+(up ? 'N − mg = ma ⇒ N = m(g + a)' : 'mg − N = ma ⇒ N = m(g − a)'),
          'N = '+m+' × (10 '+(up?'+':'−')+' '+a+') = '+ans+' N'
        ]
      };
    }
  ]
});

/* ==========================================================================
   P4: WORK, ENERGY, AND POWER
   ========================================================================== */
NEET.reg({
  id:'P4',
  subj:'Physics',
  type:'num',
  name:'Work, Energy, and Power',
  syl:'Work done by a constant force and a variable force; kinetic energy, work-energy theorem, power. Notion of potential energy, potential energy of a spring, conservative forces: conservation of mechanical energy (kinetic and potential energies); non-conservative forces: motion in a vertical circle; Elastic and inelastic collisions in one and two dimensions.',
  kw:['work energy theorem','conservative force','spring potential energy','vertical circular motion','coefficient of restitution','elastic collision','inelastic collision','instantaneous power','critical velocity','looping the loop','potential energy curve'],

  formulas:[
    { n:'Work Done by Constant & Variable Force', f:'W = F · s = Fs cos θ ; W = ∫ F_x dx + ∫ F_y dy + ∫ F_z dz', u:'J (N m)', s:'Signed area under the F–x graph gives work done; W < 0 when 90° < θ ≤ 180°', b:' NEVER use W = F · s if force varies with position x; integrate ∫ F(x) dx instead' },
    { n:'Work–Energy Theorem (Universal)', f:'W_total = W_cons + W_non-cons + W_ext = ΔK = K_f − K_i', u:'J', s:'Applies to total work done by ALL forces (internal + external, conservative + non-conservative)', b:'Valid in all inertial frames (and in non-inertial frames if work of pseudo force is included)' },
    { n:'Conservative Force & Potential Energy', f:'ΔU = −W_cons = −∫ F_c · dr  ⇔  F_x = −dU/dx', u:'J, N', s:'At equilibrium dU/dx = 0: d²U/dx² > 0 is stable (U min), d²U/dx² < 0 is unstable (U max)', b:'Potential energy U is defined ONLY for conservative forces (gravity, spring, electrostatic); friction has NO potential energy' },
    { n:'Spring Force & Elastic Potential Energy', f:'F_s = −kx ; U_s = ½kx² ; W_spring(x₁→x₂) = ½k(x₁² − x₂²)', u:'N, J', s:'x is measured from the natural (relaxed) length of the spring', b:'Valid within the elastic Hookean limit; work done by external agent slowly stretching is +½k(x₂² − x₁²)' },
    { n:'Kinetic Energy – Momentum Relations', f:'K = ½mv² = p² / (2m)  ⇔  p = √(2mK)', u:'J, kg m s⁻¹', s:'For small % changes (<5%): ΔK/K ≈ 2(Δp/p); for large changes: K₂/K₁ = (p₂/p₁)²', b:'Never use ΔK/K = 2(Δp/p) when momentum changes by 20%, 50%, or 100%!' },
    { n:'Instantaneous & Average Power', f:'P_inst = dW/dt = F · v = Fv cos θ ; P_avg = W_total / Δt', u:'W (J s⁻¹)', s:'1 hp = 746 W; for constant-power delivery (P = P₀): mv(dv/dt) = P₀ ⇒ v ∝ t^(1/2) and x ∝ t^(3/2)', b:'P = F · v gives instantaneous power; for water jet of area A, density ρ, speed v: dm/dt = ρAv, F = ρAv², P_KE = ½ρAv³' },
    { n:'Vertical Circular Motion (Mass on String/Track)', f:'v_top(min) = √(gR) ; v_bot(min) = √(5gR) ; v_mid(min) = √(3gR) ; T_bot − T_top = 6mg', u:'m s⁻¹, N', s:'At any angle θ from lowest point: T − mg cos θ = mv²/R and v² = u² − 2gR(1 − cos θ)', b:'Applies to a flexible string or inside a smooth loop; for a light rigid rod or bead on ring, v_top(min) = 0 and v_bot(min) = √(4gR) = 2√(gR)' },
    { n:'1D Collision & Coefficient of Restitution', f:'e = (v₂ − v₁) / (u₁ − u₂) ; ΔK_loss = ½ [m₁m₂/(m₁+m₂)] (u₁ − u₂)² (1 − e²)', u:'dimensionless, J', s:'e = 1 (perfectly elastic), 0 < e < 1 (partially inelastic), e = 0 (perfectly inelastic / bodies stick)', b:'Velocities u₁, u₂, v₁, v₂ MUST be projected along the line of impact (common normal) with consistent signs' },
    { n:'Ball Bouncing on Horizontal Floor', f:'v_n = e^n v₀ ; h_n = e^(2n) h₀ ; S_total = h₀(1 + e²)/(1 − e²) ; T_total = √(2h₀/g)(1 + e)/(1 − e)', u:'m s⁻¹, m, s', s:'h_n is height after nth rebound from initial drop height h₀', b:'Assumes floor is massive and stationary; fails if e = 1 (infinite bounces)' }
  ],

  traps:[
    { t:'For a particle driven by a machine delivering constant power P, velocity varies as v ∝ t^(1/2) and displacement varies as s ∝ t^(3/2), NOT s ∝ t²', c:'m v (dv/dt) = P ⇒ ∫v dv = ∫(P/m)dt ⇒ v² = (2P/m)t ⇒ dx/dt = √(2P/m) t^(1/2) ⇒ x ∝ t^(3/2)', tag:'Calculation Trap' },
    { t:'When two identical masses (m₁ = m₂) undergo a 1D head-on elastic collision (e = 1), they simply exchange their velocities (v₁ = u₂ and v₂ = u₁)', c:'Conservation of momentum u₁ + u₂ = v₁ + v₂ combined with v₂ − v₁ = u₁ − u₂ yields v₂ = u₁ and v₁ = u₂', tag:'Concept Trap' },
    { t:'In an oblique 2D elastic collision between two bodies of equal mass where the target is initially at rest (u₂ = 0), the two bodies always move off at right angles to each other (θ₁ + θ₂ = 90°) after collision', c:'p₁_i = p₁_f + p₂_f ⇒ p₁_i² = p₁_f² + p₂_f² + 2 p₁_f · p₂_f; comparing with K conservation (p₁_i²/2m = p₁_f²/2m + p₂_f²/2m) forces p₁_f · p₂_f = 0', tag:'Concept Trap' },
    { t:'If a mass is attached to a light rigid rod (instead of a string) of length R, the minimum speed required at the lowest point to complete a full vertical circle is √(4gR) = 2√(gR), NOT √(5gR)', c:'A rigid rod can support compressive force at the top, so it never goes slack; the critical condition at the top is simply v_top → 0 instead of T_top = 0', tag:'Boundary Failure' },
    { t:'When two springs with force constants k₁ > k₂ are stretched by the SAME force F, the softer spring (k₂) has more potential energy (U₁ < U₂); when stretched by the SAME distance x, the stiffer spring (k₁) has more potential energy (U₁ > U₂)', c:'For equal extension x: U = ½kx² ∝ k; for equal stretching force F: U = F²/(2k) ∝ 1/k', tag:'Order Inversion' },
    { t:'If a hanging vertical spring of stiffness k has a block of mass m attached and released suddenly from its unstretched position, the maximum elongation is 2mg/k, whereas if lowered slowly to equilibrium it is mg/k', c:'Sudden release converts gravitational PE into spring PE until v = 0: mg x_max = ½k x_max² ⇒ x_max = 2mg/k', tag:'Calculation Trap' },
    { t:'Total linear momentum is conserved in ALL collisions (elastic, inelastic, and perfectly inelastic) provided no external impulsive force acts, whereas kinetic energy is conserved ONLY in elastic collisions (and even there, KE dips into elastic PE during the instant of maximum deformation)', c:'Internal contact forces during impact obey Newton\'s third law (F₁₂ = −F₂₁) regardless of whether they are conservative or dissipative', tag:'Concept Trap' },
    { t:'If linear momentum of a body increases by 100% (doubles), its kinetic energy increases by 300% (quadruples), NOT 200%', c:'K ∝ p² ⇒ K_f / K_i = (2p / p)² = 4 ⇒ % increase = (4 − 1)/1 × 100% = 300%', tag:'Calculation Trap' }
  ],

  flows:[
    { t:'Vertical Circular Motion Regime Decision Tree (Mass on String of Length R, Speed u at Bottom)',
      root:'Check bottom launch speed u against critical values √(2gR) and √(5gR)',
      br:[
        { l:'u ≤ √(2gR)', n:['Oscillates back and forth like a pendulum below the horizontal diameter (θ ≤ 90°)', 'Velocity v becomes zero before or at the horizontal level while tension T ≥ 0', 'Height reached h = u² / (2g) ≤ R'] },
        { l:'√(2gR) < u < √(5gR)', n:['Crosses horizontal diameter (90° < θ < 180°) but string goes SLACK (T = 0) before reaching top while v > 0!', 'Leaves circular path at cos α = (2gR − u²)/(3gR) above centre and follows a parabolic projectile trajectory'] },
        { l:'u ≥ √(5gR)', n:['Successfully completes the full vertical circle (loops the loop)', 'At top: v_top ≥ √(gR) and T_top ≥ 0', 'Difference in tensions: T_bottom − T_top = 6mg (always!)'] }
      ]
    },
    { t:'1D Head-On Collision Solver Pipeline',
      chain:[
        'Assign +x direction and write signed initial velocities u₁ and u₂ along the line of impact',
        'Apply momentum conservation: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂',
        'Apply restitution equation: v₂ − v₁ = e(u₁ − u₂)',
        'For elastic (e=1) with u₂=0: v₁ = [(m₁−m₂)/(m₁+m₂)]u₁ and v₂ = [2m₁/(m₁+m₂)]u₁',
        'For kinetic energy loss: ΔK_loss = ½[m₁m₂/(m₁+m₂)](u₁ − u₂)²(1 − e²)'
      ]
    },
    { t:'Equilibrium Classification from Potential Energy Curve U(x)',
      root:'Locate points where force F_x = −dU/dx = 0 (horizontal tangent on U–x graph)',
      br:[
        { l:'Local Minimum of U(x) (d²U/dx² > 0, concave up valley)', n:['Stable Equilibrium', 'Small displacement produces restoring force back toward equilibrium'] },
        { l:'Local Maximum of U(x) (d²U/dx² < 0, concave down peak)', n:['Unstable Equilibrium', 'Small displacement produces force driving particle away from equilibrium'] },
        { l:'Flat Plateau of U(x) (d²U/dx² = 0 over region)', n:['Neutral Equilibrium', 'Force remains zero upon small displacement'] }
      ]
    }
  ],

  lab:[
    { t:'Loop-the-Loop Track Minimum Release Height', d:'Releasing a small sliding bead (frictionless) from height h on an incline into a circular loop of radius R requires h_min = (5/2)R = 2.5 R so that v_bottom = √(2gh) = √(5gR).' },
    { t:'Coefficient of Restitution Drop Test', d:'Drop a steel ball onto a hard floor from height h₀ and measure first rebound height h₁; then e = √(h₁ / h₀) directly.' },
    { t:'Newton\'s Cradle (Equal-Mass Pendulum Array)', d:'Pulling back 1 sphere and releasing causes exactly 1 sphere at the far end to swing out with the same speed while the striking sphere comes to complete rest (elastic velocity exchange for m₁ = m₂).' },
    { t:'Spring Force–Extension (F–x) Graph Area', d:'Triangular area under the linear F = kx plot from 0 to x equals ½Fx = ½kx², directly measuring stored elastic potential energy.' }
  ],

  pairs:[
    { g:'Vertical Circle Quantity (Mass m, String Length R, Just Looping) → Value', a:'Minimum speed at the lowest point (v_bottom)', b:'√(5gR)' },
    { g:'Vertical Circle Quantity (Mass m, String Length R, Just Looping) → Value', a:'Minimum speed at the highest point (v_top)', b:'√(gR)' },
    { g:'Vertical Circle Quantity (Mass m, String Length R, Just Looping) → Value', a:'Speed at the horizontal mid-level (v_mid)', b:'√(3gR)' },
    { g:'Vertical Circle Quantity (Mass m, String Length R, Just Looping) → Value', a:'Tension in the string at the lowest point (T_bottom)', b:'6 mg' },
    { g:'Vertical Circle Quantity (Mass m, String Length R, Just Looping) → Value', a:'Tension in the string at the horizontal mid-level (T_mid)', b:'3 mg' },
    { g:'Collision Type / Condition → Physical Outcome', a:'1D elastic collision (e = 1) of two identical masses', b:'Bodies exchange their velocities completely' },
    { g:'Collision Type / Condition → Physical Outcome', a:'2D oblique elastic collision of equal masses (target at rest)', b:'Bodies move perpendicular to each other (θ₁ + θ₂ = 90°)' },
    { g:'Collision Type / Condition → Physical Outcome', a:'Perfectly inelastic collision (e = 0)', b:'v_sep = 0 (bodies stick together with maximum KE loss)' },
    { g:'Collision Type / Condition → Physical Outcome', a:'Light particle (m ≪ M) hits stationary massive wall elastically', b:'Rebounds with v₁ ≈ −u₁ while wall remains practically at rest' }
  ],

  orders:[
    { q:'Decreasing tension in the string of a particle of mass m just looping a vertical circle of radius R', s:['Lowest point (6mg)', '60° from lowest point (4.5mg)', 'Horizontal mid-point (3mg)', 'Highest point (0)'], sep:'>', why:'T(θ) = 3mg(1 + cos θ) for critical looping: θ=0° gives 6mg, θ=60° gives 4.5mg, θ=90° gives 3mg, θ=180° gives 0.' },
    { q:'Increasing kinetic energy of two particles A (mass m) and B (mass 4m) vs equal momentum or equal speed', s:['Particle B (mass 4m) at same momentum p', 'Particle A (mass m) at same momentum p', 'Particle B (mass 4m) at same speed v (where p = mv)'], sep:'<', why:'At momentum p = mv: K_B = p²/(8m) = (1/8)mv² < K_A = p²/(2m) = (1/2)mv² < K_B(at speed v) = ½(4m)v² = 2mv².' }
  ],

  facts:{
    T:[
      'The work done by a conservative force around any closed path is always zero, and the work done between two points is independent of the path taken.',
      'According to the work-energy theorem, the change in kinetic energy of a particle equals the total work done by all forces (both conservative and non-conservative) acting on it.',
      'When a light body and a heavy body have the same kinetic energy, the heavy body has the greater linear momentum (p = √(2mK)).',
      'When a light body and a heavy body have the same linear momentum, the light body has the greater kinetic energy (K = p²/(2m)).',
      'In a head-on elastic collision of a moving neutron with a stationary nucleus, maximum fraction of kinetic energy is transferred when the target has mass equal to the neutron (e.g., hydrogen/proton).',
      'During the brief interval of contact in an elastic collision, part of the total kinetic energy is temporarily stored as elastic deformation potential energy.',
      'For a particle moving in a vertical circle attached to a string (without slackening), the difference between the tensions at the lowest and highest points is always 6mg, regardless of the speed (as long as u ≥ √(5gR)).',
      'Work done by static friction on an individual block can be positive, negative, or zero (e.g., positive on the upper block of a two-block system accelerating together), though total work of static friction on the pair of contacting surfaces is always zero.'
    ],
    F:[
      'Potential energy is defined for both conservative forces (like gravity) and non-conservative forces (like kinetic friction).',
      'In a perfectly inelastic collision between two bodies, both total linear momentum and total kinetic energy of the system become zero.',
      'Work done by a force is a vector quantity because both force and displacement are vectors.',
      'The minimum speed required at the lowest point for a bead threaded on a smooth circular wire loop of radius R to complete the vertical circle is √(5gR).',
      'If two springs of constants k₁ and k₂ (with k₁ > k₂) are stretched by the same constant force F, more work is done on the stiffer spring k₁.',
      'For a body driven by a source of constant power P, its acceleration remains constant with time.',
      'In an elastic collision, kinetic energy is conserved at every instant of time including the instant of maximum compression during contact.',
      'The coefficient of restitution e depends only on the initial velocities of the colliding bodies and not on their material properties.'
    ]
  },

  mcq:[
    { q:'A particle of mass m starts from rest and is driven by a machine that delivers a constant power P watts. The displacement of the particle as a function of time t is proportional to:',
      o:['t^(3/2)', 't^(1/2)', 't²', 't^(2/3)'],
      a:0, tag:'Calculation Trap',
      sol:['By work-energy theorem for constant power P: ½mv² = P t  ⇒  v = √(2P/m) t^(1/2)', 'Since v = dx/dt, integrating w.r.t. time t gives x = √(2P/m) × (2/3) t^(3/2)', 'Hence displacement x ∝ t^(3/2).']
    },
    { q:'Two springs A and B have force constants k_A and k_B such that k_A = 2 k_B. If both springs are stretched by the SAME stretching force F, then the ratio of potential energy stored in spring A to that in spring B (U_A : U_B) is:',
      o:['1 : 2', '2 : 1', '1 : 4', '4 : 1'],
      a:0, tag:'Order Inversion',
      sol:['For a given force F = kx, extension x = F/k', 'Potential energy U = ½kx² = ½k(F/k)² = F² / (2k)', 'At constant force F, U ∝ 1/k ⇒ U_A / U_B = k_B / k_A = 1 / 2.']
    },
    { q:'The potential energy of a particle in a conservative force field along the x-axis is given by U(x) = x²/2 − 2x joules (where x is in metres). The position of stable equilibrium of the particle is at:',
      o:['x = +2 m', 'x = −2 m', 'x = 0 m', 'x = +4 m'],
      a:0, tag:'Sign Convention',
      sol:['For equilibrium, F_x = −dU/dx = 0', 'dU/dx = x − 2 = 0  ⇒  x = +2 m', 'Also d²U/dx² = +1 > 0, confirming stable equilibrium at x = +2 m.']
    },
    { q:'A body of mass m moving with velocity u makes a head-on elastic collision with another stationary body of mass nm. What fraction of the incident kinetic energy is transferred to the struck body?',
      o:['4n / (1 + n)²', '2n / (1 + n)²', 'n / (1 + n)²', '(1 − n)² / (1 + n)²'],
      a:0, tag:'Calculation Trap',
      sol:['After 1D elastic collision with stationary target, speed of m₁ is v₁ = [(1 − n)/(1 + n)] u', 'Fraction of KE retained by m₁ = (v₁/u)² = (1 − n)² / (1 + n)²', 'Fraction of KE transferred to target = 1 − (1 − n)²/(1 + n)² = 4n / (1 + n)².']
    },
    { q:'A stone tied to a light string of length L is whirled in a vertical circle such that its speed at the lowest point is √(7gL). The ratio of the tension in the string at the lowest point to the tension at the highest point is:',
      o:['4 : 1', '7 : 2', '6 : 1', '3 : 1'],
      a:0, tag:'Calculation Trap',
      sol:['At lowest point: T_bot = mg + m v_bot² / L = mg + 7mg = 8mg', 'Using T_bot − T_top = 6mg (or v_top² = v_bot² − 4gL = 3gL ⇒ T_top = 3mg − mg = 2mg)', 'Ratio T_bot : T_top = 8mg : 2mg = 4 : 1.']
    },
    { q:'A water pump driven by an electric motor lifts water through a vertical height of 10 m and delivers it through a nozzle of cross-sectional area A with speed v. The rate of kinetic energy imparted to the emerging water jet is proportional to:',
      o:['v³', 'v²', 'v', 'v⁴'],
      a:0, tag:'Concept Trap',
      sol:['Mass of water emerging per unit time: dm/dt = ρ A v', 'Power imparting kinetic energy: P = dK/dt = ½ (dm/dt) v² = ½ ρ A v³', 'Hence P ∝ v³.']
    }
  ],

  gens:[
    function(R){
      var c1 = R.int(2, 6);
      var c2 = R.int(1, 5);
      var x = R.int(2, 5);
      var ans = 0.5 * c1 * x * x + c2 * x;
      var d1 = c1 * x * x + c2 * x;
      var d2 = (c1 * x + c2) * x;
      var d3 = c1 * x + c2;
      if (d1 === d2) d2 = ans + c1;
      return {
        q:'A particle moves along the x-axis from x = 0 to x = '+x+' m under the action of a variable force F(x) = ('+c1+'x + '+c2+') N. The work done by this force during the displacement is:',
        ans:ans, d:[d1, d2, d3], u:'J', tag:'Calculation Trap',
        sol:[
          'For variable force, integrate W = ∫₀^'+x+' ('+c1+'x + '+c2+') dx',
          'W = [ ½('+c1+')x² + '+c2+'x ]₀^'+x+'',
          'W = '+(0.5*c1)+'×'+x+'² + '+c2+'×'+x+' = '+R.f(ans)+' J'
        ]
      };
    },
    function(R){
      var pctP = R.pick([20, 40, 50, 100, 200]);
      var ratioP = 1 + pctP / 100;
      var ans = Math.round((ratioP * ratioP - 1) * 100);
      var d1 = 2 * pctP;
      var d2 = pctP;
      var d3 = Math.round((ratioP * ratioP) * 100);
      if (d1 === ans) d1 = ans - 10;
      return {
        q:'If the linear momentum of a moving body is increased by '+pctP+'%, the percentage increase in its kinetic energy is:',
        ans:ans, d:[d1, d2, d3], u:'%', tag:'Approximation Limit',
        sol:[
          'K = p² / (2m)  ⇒  K₂ / K₁ = (p₂ / p₁)²',
          'Here p₂ / p₁ = 1 + '+pctP+'/100 = '+ratioP+'  [Do NOT use 2Δp/p for large changes!]',
          'K₂ / K₁ = ('+ratioP+')² = '+R.f(ratioP*ratioP)+'  ⇒  % increase = ('+R.f(ratioP*ratioP)+' − 1) × 100 = '+ans+'%'
        ]
      };
    },
    function(R){
      var h0 = R.pick([16, 25, 32, 50, 64, 80, 100]);
      var e = R.pick([0.5, 0.25, 0.75]);
      var ans = h0 * Math.pow(e, 4);
      var d1 = h0 * Math.pow(e, 2);
      var d2 = h0 * e;
      var d3 = h0 * Math.pow(e, 3);
      return {
        q:'A ball is dropped from rest from a height of '+h0+' m onto a horizontal floor. If the coefficient of restitution between the ball and the floor is e = '+e+', the height to which the ball rises after its SECOND rebound is:',
        ans:ans, d:[d1, d2, d3], u:'m', tag:'Calculation Trap',
        sol:[
          'Height after nth bounce is h_n = e^(2n) h₀  (since h ∝ v² and v_n = e^n v₀)',
          'For 2nd rebound (n = 2): h₂ = e⁴ h₀ = ('+e+')⁴ × '+h0+' = '+R.f(ans)+' m'
        ]
      };
    },
    function(R){
      var k = R.pick([100, 200, 400, 500, 800]);
      var x1Cm = R.pick([5, 10]);
      var x2Cm = R.pick([15, 20, 25]);
      var x1 = x1Cm / 100, x2 = x2Cm / 100;
      var ans = 0.5 * k * (x2 * x2 - x1 * x1);
      var d1 = 0.5 * k * (x2 - x1) * (x2 - x1);
      var d2 = 0.5 * k * x2 * x2;
      var d3 = ans * 10000;
      return {
        q:'A spring of force constant k = '+k+' N m⁻¹ is initially stretched by '+x1Cm+' cm from its natural length. The additional work required to stretch it further from '+x1Cm+' cm to '+x2Cm+' cm from its natural length is:',
        ans:ans, d:[d1, d2, d3], u:'J', tag:'Calculation Trap',
        sol:[
          'Convert to metres: x₁ = '+x1+' m, x₂ = '+x2+' m',
          'Additional work W = U₂ − U₁ = ½k(x₂² − x₁²)  [NOT ½k(x₂ − x₁)²!]',
          'W = 0.5 × '+k+' × ('+x2+'² − '+x1+'²) = '+R.f(ans)+' J'
        ]
      };
    },
    function(R){
      var m = R.pick([100, 200, 300, 500]);
      var h = R.pick([10, 15, 20, 30]);
      var t = R.pick([10, 20, 25]);
      var eta = R.pick([50, 60, 75, 80]);
      var g = 10;
      var pout = (m * g * h) / t;
      var pin = pout / (eta / 100);
      var ans = pin / 1000;
      var d1 = pout / 1000;
      var d2 = (pout * (eta / 100)) / 1000;
      var d3 = pin;
      return {
        q:'An electric pump of '+eta+'% efficiency lifts '+m+' kg of water through a vertical height of '+h+' m in '+t+' s (take g = 10 m s⁻²). The electric input power consumed by the pump is:',
        ans:ans, d:[d1, d2, d3], u:'kW', tag:'Unit Conversion Trap',
        sol:[
          'Useful mechanical output power P_out = mgh / t = ('+m+' × 10 × '+h+') / '+t+' = '+R.f(pout)+' W',
          'Input power P_in = P_out / η = '+R.f(pout)+' / '+(eta/100)+' = '+R.f(pin)+' W',
          'In kilowatts: P_in = '+R.f(ans)+' kW'
        ]
      };
    },
    function(R){
      var m1 = R.pick([2, 3, 4, 6]);
      var m2 = R.pick([2, 3, 4, 6]);
      var u1 = R.pick([6, 8, 10, 12]);
      var ans = 0.5 * ((m1 * m2) / (m1 + m2)) * u1 * u1;
      var d1 = 0.5 * m1 * u1 * u1;
      var d2 = 0.5 * (m1 + m2) * Math.pow((m1 * u1) / (m1 + m2), 2);
      var d3 = ans * 2;
      if (d2 === ans) d2 = ans * 0.5;
      return {
        q:'A block of mass '+m1+' kg moving at '+u1+' m s⁻¹ on a smooth horizontal surface collides head-on with a stationary block of mass '+m2+' kg and sticks to it (perfectly inelastic collision). The loss of kinetic energy in the collision is:',
        ans:ans, d:[d1, d2, d3], u:'J', tag:'Calculation Trap',
        sol:[
          'For a perfectly inelastic collision (e = 0) with u₂ = 0:',
          'ΔK_loss = ½ [ m₁ m₂ / (m₁ + m₂) ] u₁²',
          'ΔK_loss = 0.5 × ('+m1+'×'+m2+' / '+(m1+m2)+') × '+u1+'² = '+R.f(ans)+' J'
        ]
      };
    }
  ]
});

/* ==========================================================================
   P5: ROTATIONAL MOTION
   ========================================================================== */
NEET.reg({
  id:'P5',
  subj:'Physics',
  type:'num',
  name:'Rotational Motion',
  syl:'Centre of mass of a two-particle system, Centre of mass of a rigid body; Basic concepts of rotational motion; moment of a force; torque, angular momentum, conservation of angular momentum and its applications; The moment of inertia, the radius of gyration, values of moments of inertia for simple geometrical objects, parallel and perpendicular axes theorems and their applications. Equilibrium of rigid bodies, rigid body rotation and equations of rotational motion, comparison of linear and rotational motions.',
  kw:['centre of mass','moment of inertia','radius of gyration','parallel axis theorem','perpendicular axis theorem','angular momentum','torque','rolling motion','rotational kinetic energy','couple','rigid body equilibrium','angular impulse'],

  formulas:[
    { n:'Centre of Mass & Cavity Subtraction', f:'R_cm = (Σ m_i r_i) / M ; x_cm(cavity) = (A₁x₁ − A₂x₂) / (A₁ − A₂)', u:'m', s:'For two particles m₁, m₂ separated by d: r₁ = m₂d/(m₁+m₂) and r₂ = m₁d/(m₁+m₂) from COM (r₁/r₂ = m₂/m₁)', b:'Velocity & acceleration obey M v_cm = Σ p_i and M a_cm = F_ext (internal forces NEVER affect COM motion)' },
    { n:'Torque & Angular Momentum', f:'τ = r × F = dL/dt ; L = r × p ; |τ| = r F sin θ = F r_⊥', u:'N m, J s (kg m² s⁻¹)', s:'For fixed-axis rotation of a symmetric rigid body: L = I ω and τ = I α', b:'Both τ and L depend on the choice of origin O unless the net force / net linear momentum of the system is zero' },
    { n:'Conservation of Angular Momentum', f:'τ_ext = 0  ⇒  L = I₁ ω₁ = I₂ ω₂ = constant', u:'kg m² s⁻¹', s:'Rotational kinetic energy K_rot = ½Iω² = L² / (2I) changes as K₂/K₁ = I₁/I₂ = ω₂/ω₁ when internal forces alter I', b:'Valid ONLY about an axis/point for which the net external torque τ_ext is strictly zero' },
    { n:'Moment of Inertia & Radius of Gyration', f:'I = Σ m_i r_i² = ∫ r² dm = M K²  ⇒  K = √(I / M)', u:'kg m², m', s:'r is perpendicular distance from the axis of rotation; K is radius of gyration', b:'Radius of gyration K depends ONLY on body geometry and axis location, and is completely independent of total mass M' },
    { n:'Parallel Axis Theorem (3D & 2D)', f:'I = I_cm + M d²', u:'kg m²', s:'I_cm MUST be about an axis passing through the centre of mass and strictly parallel to the target axis at distance d', b:'NEVER apply I_B = I_A + Md² between two non-COM parallel axes directly; always step through I_cm first!' },
    { n:'Perpendicular Axis Theorem (Planar Lamina Only)', f:'I_z = I_x + I_y', u:'kg m²', s:'x and y are mutually perpendicular axes lying IN the plane of the flat lamina; z is perpendicular to the lamina through their intersection', b:'STRICTLY INVALID for 3D bodies (spheres, cubes, cylinders of non-zero length)!' },
    { n:'Rotational Kinematics & Work–Power', f:'ω = ω₀ + αt ; θ = ω₀t + ½αt² ; ω² = ω₀² + 2αθ ; W = ∫ τ dθ ; P = τ · ω', u:'rad s⁻¹, rad s⁻², J, W', s:'Exact rotational analogues of linear kinematics with x ↔ θ, v ↔ ω, a ↔ α, m ↔ I, F ↔ τ, p ↔ L', b:'Constant α equations fail if torque τ or moment of inertia I varies with angle θ or time t' },
    { n:'Pure Rolling Without Slipping (Constraint & Energy)', f:'v_cm = R ω ; a_cm = R α ; K_total = ½Mv²(1 + K²/R²)', u:'m s⁻¹, m s⁻², J', s:'Instantaneous velocity of the bottommost contact point on a stationary ground is ZERO; top point has speed 2v_cm', b:'Fails during rolling with slipping (skidding or spinning) where v_cm ≠ Rω and kinetic friction dissipates energy' },
    { n:'Pure Rolling Down a Rough Inclined Plane', f:'a = g sin θ / (1 + K²/R²) ; f_s = Mg sin θ / (1 + R²/K²) ; μ_min = tan θ / (1 + R²/K²)', u:'m s⁻², N, dimensionless', s:'Velocity at bottom of height h is v = √[ 2gh / (1 + K²/R²) ]', b:'Work done by static friction in pure rolling is ZERO (point of contact has zero instantaneous displacement)' }
  ],

  traps:[
    { t:'The Perpendicular Axis Theorem (I_z = I_x + I_y) applies ONLY to flat 2D planar laminas (rings, thin discs, thin rectangular plates) and NEVER to 3D objects like spheres or solid cylinders', c:'For a 3D body, z-coordinates are non-zero so r_z² = x² + y² does not equal r_x² + r_y² = (y²+z²) + (x²+z²) = x² + y² + 2z²', tag:'Boundary Failure' },
    { t:'When an ice skater pulls her arms inward (reducing I to I/n with τ_ext = 0), angular momentum L remains constant, angular speed ω increases n-fold, AND rotational kinetic energy increases n-fold!', c:'K_rot = L²/(2I) increases because the skater does positive internal muscular work while pulling her arms inward against centrifugal tendency', tag:'Concept Trap' },
    { t:'If a shell moving along a parabolic trajectory explodes into fragments in mid-air (no air resistance), the Centre of Mass of the fragments continues along the EXACT same original parabola', c:'Explosion forces are purely internal (ΣF_int = 0), so a_cm = F_ext / M = g downward remains completely unaltered', tag:'Concept Trap' },
    { t:'On a FRICTIONLESS (smooth) inclined plane, a sphere or cylinder released from rest CANNOT roll — it slides purely down with a = g sin θ and ω = 0', c:'Gravity and normal reaction both pass through the centre of mass (zero torque about COM); static friction is essential to provide the torque τ = f_s R needed for angular acceleration', tag:'Zero-Case' },
    { t:'In pure rolling on a level horizontal surface at constant velocity v_cm = Rω, the static frictional force acting on the rolling wheel is ZERO, even if the surface is rough', c:'Since a_cm = 0 and α = 0, both F_net = f_s = 0 and τ_net = f_s R = 0', tag:'Zero-Case' },
    { t:'Melting a solid sphere of mass M and recasting it into a thin disc of the SAME radius R changes its moment of inertia from (2/5)MR² to (1/2)MR², even though M and R are unchanged', c:'Moment of inertia depends critically on how mass is distributed relative to the axis of rotation', tag:'Concept Trap' },
    { t:'When a circular disc of radius R/2 is cut and removed from the edge of a uniform disc of radius R, the COM of the remaining lamina shifts by R/6 away from the cavity centre (NOT R/2 or R/4)', c:'Area of cavity A₂ = π(R/2)² = A₁/4 at x₂ = R/2 ⇒ x_cm = (A₁·0 − (A₁/4)(R/2)) / (A₁ − A₁/4) = −R/6', tag:'Calculation Trap' },
    { t:'If the Earth suddenly shrinks to half its present radius without any loss of mass, the length of the day becomes 24/4 = 6 hours (NOT 12 hours)', c:'L = Iω = (2/5)MR²(2π/T) = constant ⇒ T ∝ R² ⇒ T_new = 24 × (1/2)² = 6 hours', tag:'Calculation Trap' }
  ],

  flows:[
    { t:'Standard Moments of Inertia & Axis-Shift Master Pipeline',
      chain:[
        'Identify base I_cm: Ring (MR²), Disc (½MR²), Hollow cylinder (MR²), Solid cylinder (½MR²), Thin rod (ML²/12), Hollow sphere (⅔MR²), Solid sphere (⅖MR²)',
        'If target axis is in the plane of a 2D lamina (diameter of ring/disc): apply Perpendicular Axis Theorem I_d = ½ I_z (Ring diameter = ½MR², Disc diameter = ¼MR²)',
        'If target axis is tangent or offset by distance d from COM axis: apply Parallel Axis Theorem I = I_cm + Md²',
        'Verify: Tangent in plane of disc = ¼MR² + MR² = (5/4)MR²; Tangent ⊥ to plane of disc = ½MR² + MR² = (3/2)MR²'
      ]
    },
    { t:'Rolling Race on Rough Incline Decision Tree (Released from Rest at Same Height h)',
      root:'Calculate shape factor β = K²/R² = I_cm / (MR²) for each rolling body',
      br:[
        { l:'Solid Sphere (β = 2/5 = 0.4) vs Disc/Solid Cylinder (β = 1/2 = 0.5)', n:['Smallest β wins the race!', 'a = g sin θ / (1 + β) is largest for Solid Sphere (a = 5/7 g sin θ)', 'Reaches bottom in minimum time with maximum translational speed'] },
        { l:'Hollow Sphere (β = 2/3 ≈ 0.67) vs Ring/Hollow Cylinder (β = 1.0)', n:['Ring has largest β = 1  ⇒  smallest acceleration a = ½ g sin θ', 'Ring arrives LAST with lowest translational speed v = √(gh)', 'Note: Mass M and Radius R completely cancel out of the race!'] },
        { l:'Compare Total Kinetic Energy at Bottom', n:['Since pure rolling has zero friction work (W_f = 0), K_total = K_trans + K_rot = Mgh for ALL bodies (if equal mass M)', 'Fraction of KE in rotation = β / (1 + β) (50% for ring, 33.3% for disc, 28.6% for solid sphere)'] }
      ]
    },
    { t:'Rigid Body Equilibrium Check Tree',
      root:'Test both conditions required for complete mechanical equilibrium of a rigid body',
      br:[
        { l:'Step 1: Translational Equilibrium (ΣF_ext = 0)', n:['ΣF_x = 0, ΣF_y = 0, ΣF_z = 0', 'Guarantees a_cm = 0'] },
        { l:'Step 2: Rotational Equilibrium (Στ_ext = 0 about ANY point)', n:['Take moments about the point where the maximum number of unknown contact forces act', 'Clockwise moments = Anticlockwise moments  ⇒  α = 0'] },
        { l:'Couple Case (ΣF_ext = 0 but Στ_ext ≠ 0)', n:['Equal and opposite parallel forces with separation d (e.g., turning a tap or steering wheel)', 'Translational equilibrium holds, but body undergoes pure angular acceleration (τ = F × d independent of pivot)'] }
      ]
    }
  ],

  lab:[
    { t:'Metre Scale Principle of Moments (Physical Balance)', d:'Balance a metre scale on a knife-edge at its centre of gravity G (≈50 cm); suspending weights W₁ at distance d₁ and W₂ at d₂ on opposite sides gives W₁ d₁ = W₂ d₂ in rotational equilibrium.' },
    { t:'Flywheel Moment of Inertia Determination', d:'A mass m falling through height h unwinds n₁ turns of string on an axle of radius r, imparting angular speed ω to the flywheel before detaching; measuring n₂ rotations to stop against bearing friction determines I.' },
    { t:'Inclined Plane Rolling Race Demonstration', d:'Releasing a solid sphere, a solid cylinder (regardless of mass or radius), and a hollow ring simultaneously from a starting bar on an incline always lands in the strict order: Solid Sphere → Solid Cylinder → Ring.' },
    { t:'Rotating Stool & Dumbbells (Angular Momentum Conservation)', d:'Sitting on a frictionless turntable spinning at ω₁ with arms outstretched and pulling heavy dumbbells inward to the chest dramatically increases spin rate to ω₂ = (I₁/I₂)ω₁.' }
  ],

  pairs:[
    { g:'Rigid Body & Axis of Rotation → Moment of Inertia (I)', a:'Thin circular ring of mass M, radius R about a diameter (in its plane)', b:'½ M R²' },
    { g:'Rigid Body & Axis of Rotation → Moment of Inertia (I)', a:'Uniform circular disc of mass M, radius R about a diameter (in its plane)', b:'¼ M R²' },
    { g:'Rigid Body & Axis of Rotation → Moment of Inertia (I)', a:'Uniform circular disc of mass M, radius R about a tangent in its plane', b:'(5/4) M R²' },
    { g:'Rigid Body & Axis of Rotation → Moment of Inertia (I)', a:'Uniform thin rod of mass M, length L about axis ⊥ to rod through one end', b:'⅓ M L²' },
    { g:'Rigid Body & Axis of Rotation → Moment of Inertia (I)', a:'Solid sphere of mass M, radius R about a tangent', b:'(7/5) M R²' },
    { g:'Rigid Body & Axis of Rotation → Moment of Inertia (I)', a:'Hollow thin spherical shell of mass M, radius R about a diameter', b:'⅔ M R²' },
    { g:'Pure Rolling Body → Rotational Fraction of Total Kinetic Energy (K_rot / K_total)', a:'Thin circular ring or hollow cylinder (K²/R² = 1)', b:'1/2 (50%)' },
    { g:'Pure Rolling Body → Rotational Fraction of Total Kinetic Energy (K_rot / K_total)', a:'Thin spherical shell (K²/R² = 2/3)', b:'2/5 (40%)' },
    { g:'Pure Rolling Body → Rotational Fraction of Total Kinetic Energy (K_rot / K_total)', a:'Uniform circular disc or solid cylinder (K²/R² = 1/2)', b:'1/3 (33.3%)' },
    { g:'Pure Rolling Body → Rotational Fraction of Total Kinetic Energy (K_rot / K_total)', a:'Solid sphere (K²/R² = 2/5)', b:'2/7 (28.6%)' }
  ],

  orders:[
    { q:'Decreasing linear acceleration down a rough inclined plane for bodies rolling without slipping', s:['Solid sphere (5/7 g sin θ)', 'Solid cylinder / Disc (2/3 g sin θ)', 'Hollow spherical shell (3/5 g sin θ)', 'Thin ring / Hollow cylinder (1/2 g sin θ)'], sep:'>', why:'a = g sin θ / (1 + K²/R²); as K²/R² increases from 0.4 (solid sphere) to 0.5 (disc) to 0.67 (hollow sphere) to 1.0 (ring), acceleration decreases.' },
    { q:'Increasing time taken to reach the bottom of a rough incline from rest (pure rolling)', s:['Solid sphere', 'Uniform disc', 'Hollow sphere', 'Thin circular ring'], sep:'<', why:'Time t = √(2s/a) is shortest for the body with the smallest K²/R² (solid sphere) and longest for the largest K²/R² (ring).' },
    { q:'Increasing distance of the Centre of Mass from the base along the axis of symmetry for bodies of height H', s:['Solid cone (H/4)', 'Hollow cone (H/3)', 'Uniform rod / Cylinder (H/2)'], sep:'<', why:'More mass is concentrated near the base in a solid cone (H/4) than a hollow cone (H/3) or uniform cylinder (H/2).' }
  ],

  facts:{
    T:[
      'The centre of mass of a rigid body may lie completely outside the material of the body, as in a circular ring, hollow sphere, or boomerang.',
      'Internal forces in a system of particles cannot change either the velocity of the centre of mass or the total angular momentum about a fixed origin.',
      'For a body in pure rolling without slipping on a stationary flat surface, the instantaneous speed of the topmost point is 2v_cm while the bottommost point in contact with the ground has zero instantaneous velocity.',
      'A couple consists of two equal and opposite non-collinear forces; it produces pure rotational acceleration without any translational acceleration of the centre of mass.',
      'The moment of inertia of a uniform rectangular lamina of mass M, length l, and breadth b about an axis perpendicular to its plane through its centre is M(l² + b²)/12.',
      'If two circular discs of the same mass M and thickness t are made from metals of densities d₁ > d₂, the disc with lower density d₂ has the larger radius and therefore the larger moment of inertia.',
      'The angular velocity ω of all particles of a rotating rigid body about the axis of rotation is identical at any given instant, whereas their linear speeds v = rω are proportional to their perpendicular distances r from the axis.',
      'In pure rolling down a rough inclined plane, static friction acts UP the incline to provide clockwise torque, yet does zero work because the point of contact does not slip.'
    ],
    F:[
      'The centre of mass of a two-particle system always lies exactly midway between the two particles regardless of their masses.',
      'The perpendicular axis theorem I_z = I_x + I_y can be used to find the moment of inertia of a solid sphere about its diameter from its axes.',
      'When a gymnast curls their body in mid-air during a somersault, both their angular velocity ω and their angular momentum L increase.',
      'A solid sphere of mass 5 kg and radius 10 cm rolls down a rough incline faster than a solid sphere of mass 1 kg and radius 5 cm.',
      'In pure rolling of a wheel at constant speed on a rough horizontal road, a backward kinetic friction force μ_k Mg continuously acts on the wheel.',
      'The radius of gyration of a rigid body is a fixed geometric constant of the body that does not change when the axis of rotation is shifted.',
      'Torque is a scalar quantity equal to the product of force and displacement in the direction of force.',
      'If the net external force on a rigid body is zero, the body is guaranteed to be in complete mechanical equilibrium.'
    ]
  },

  mcq:[
    { q:'Two particles of masses 2 kg and 4 kg are approaching each other with accelerations of 3 m s⁻² and 1.5 m s⁻² respectively due to their mutual gravitational/electrostatic interaction (no external force). The acceleration of their centre of mass is:',
      o:['0 m s⁻²', '2.0 m s⁻²', '2.25 m s⁻²', '1.5 m s⁻²'],
      a:0, tag:'Zero-Case',
      sol:['Mutual interaction forces are internal (F₁₂ = −F₂₁)', 'Since m₁ a₁ = 2 × 3 = 6 N and m₂ a₂ = 4 × (−1.5) = −6 N in opposite directions, a_cm = (m₁a₁ + m₂a₂)/(m₁ + m₂) = 0 m s⁻².']
    },
    { q:'From a uniform circular disc of radius R and mass 9M, a smaller concentric circular disc of radius R/3 is removed. The moment of inertia of the remaining annular disc about an axis perpendicular to its plane and passing through its centre is:',
      o:['(40/9) M R²', '4 M R²', '8 M R²', '(32/9) M R²'],
      a:0, tag:'Calculation Trap',
      sol:['Mass is proportional to area (∝ r²): removed concentric disc of radius R/3 has mass m = 9M × (1/3)² = M', 'I_full = ½ (9M) R² = (9/2) M R²', 'I_removed = ½ (M) (R/3)² = (1/18) M R²', 'I_rem = I_full − I_removed = (9/2 − 1/18) M R² = (80/18) M R² = (40/9) M R².']
    },
    { q:'A solid sphere, a uniform disc, and a thin circular ring (all of the same mass and radius) are released simultaneously from rest from the top of a rough inclined plane and roll down without slipping. The ratio of their linear accelerations (a_sphere : a_disc : a_ring) is:',
      o:['30 : 28 : 21', '15 : 14 : 10', '7 : 6 : 5', '5 : 4 : 3'],
      a:0, tag:'Calculation Trap',
      sol:['a = g sin θ / (1 + K²/R²)', 'For solid sphere (K²/R² = 2/5): a_s = (5/7) g sin θ', 'For uniform disc (K²/R² = 1/2): a_d = (2/3) g sin θ', 'For thin ring (K²/R² = 1): a_r = (1/2) g sin θ', 'Ratio 5/7 : 2/3 : 1/2 = (5×6) : (2×14) : (1×21) = 30 : 28 : 21.']
    },
    { q:'The moment of inertia of a uniform thin rod of mass M and length L about an axis perpendicular to the rod and passing through a point at a distance L/4 from one of its ends is:',
      o:['(7/48) M L²', '(1/12) M L²', '(1/3) M L²', '(5/48) M L²'],
      a:0, tag:'Calculation Trap',
      sol:['Distance of the axis from the centre of mass (midpoint L/2) is d = L/2 − L/4 = L/4', 'By Parallel Axis Theorem: I = I_cm + M d²', 'I = (1/12) M L² + M (L/4)² = (1/12 + 1/16) M L² = (7/48) M L².']
    },
    { q:'A solid cylinder of mass M and radius R rolls without slipping on a flat horizontal surface with translational speed v. Its total kinetic energy is:',
      o:['(3/4) M v²', '(1/2) M v²', '(7/10) M v²', 'M v²'],
      a:0, tag:'Calculation Trap',
      sol:['For a solid cylinder, I_cm = ½MR², so K²/R² = 1/2', 'Total kinetic energy K_total = ½Mv² (1 + K²/R²) = ½Mv² (1 + 1/2) = (3/4) M v².']
    },
    { q:'A thin circular ring of mass M and radius r is rotating about its axis with a constant angular velocity ω. Two objects each of mass m are attached gently to the opposite ends of a diameter of the ring. The ring now rotates with an angular velocity equal to:',
      o:['ω M / (M + 2m)', 'ω (M − 2m) / (M + 2m)', 'ω M / (M + m)', 'ω (M + 2m) / M'],
      a:0, tag:'Concept Trap',
      sol:['Since attachment is gentle (no external torque about axis), angular momentum L is conserved: I₁ ω₁ = I₂ ω₂', 'Initial I₁ = M r² ; Final I₂ = M r² + m r² + m r² = (M + 2m) r²', 'Therefore ω₂ = ω M / (M + 2m).']
    }
  ],

  gens:[
    function(R){
      var m1 = R.pick([2, 3, 4, 5]);
      var m2 = R.pick([3, 5, 6, 8]);
      var x1 = R.int(1, 4);
      var x2 = R.int(5, 10);
      var ans = (m1 * x1 + m2 * x2) / (m1 + m2);
      var d1 = (x1 + x2) / 2;
      var d2 = (m2 * x1 + m1 * x2) / (m1 + m2);
      var d3 = Math.abs(m2 * x2 - m1 * x1) / (m1 + m2);
      if (d2 === ans) d2 = ans + 1.5;
      return {
        q:'Two point masses of '+m1+' kg and '+m2+' kg are located on the x-axis at x = '+x1+' m and x = '+x2+' m respectively. The x-coordinate of their centre of mass is:',
        ans:ans, d:[d1, d2, d3], u:'m', tag:'Calculation Trap',
        sol:[
          'x_cm = (m₁ x₁ + m₂ x₂) / (m₁ + m₂)',
          'x_cm = ('+m1+'×'+x1+' + '+m2+'×'+x2+') / ('+m1+' + '+m2+') = '+R.f(ans)+' m'
        ]
      };
    },
    function(R){
      var shape = R.pick([
        { name:'uniform circular disc about an axis perpendicular to its plane', fcm:0.5, dName:'tangent perpendicular to its plane', f:1.5, d1:0.5, d2:1.25, d3:0.25 },
        { name:'solid sphere', fcm:0.4, dName:'tangent to its surface', f:1.4, d1:0.4, d2:1.67, d3:0.9 },
        { name:'thin circular ring about an axis in its plane', fcm:0.5, dName:'tangent in its own plane', f:1.5, d1:2.0, d2:0.5, d3:1.25 }
      ]);
      var M = R.pick([2, 4, 5, 10]);
      var rad = R.pick([1, 2, 3]);
      var ans = shape.f * M * rad * rad;
      var o1 = shape.d1 * M * rad * rad;
      var o2 = shape.d2 * M * rad * rad;
      var o3 = shape.d3 * M * rad * rad;
      return {
        q:'What is the moment of inertia of a '+shape.name+' of mass '+M+' kg and radius '+rad+' m about a '+shape.dName+'?',
        ans:ans, d:[o1, o2, o3], u:'kg m²', tag:'Calculation Trap',
        sol:[
          'About COM axis parallel to the tangent: I_cm = '+shape.fcm+' M R²',
          'By Parallel Axis Theorem: I_tangent = I_cm + M R² = '+shape.f+' M R²',
          'I_tangent = '+shape.f+' × '+M+' × '+rad+'² = '+R.f(ans)+' kg m²'
        ]
      };
    },
    function(R){
      var I1 = R.pick([2, 3, 4, 5, 6]);
      var w1 = R.pick([10, 12, 15, 20]);
      var I2 = R.pick([1, 1.5, 2]);
      if (I2 >= I1) I2 = I1 / 2;
      var ans = (I1 * w1) / I2;
      var d1 = (I2 * w1) / I1;
      var d2 = Math.sqrt(I1 / I2) * w1;
      var d3 = (I1 / I2) * (I1 / I2) * w1;
      return {
        q:'A platform diver spinning with an angular speed of '+w1+' rad s⁻¹ when his moment of inertia is '+I1+' kg m² curls his body tightly so that his moment of inertia decreases to '+I2+' kg m². Assuming no external torque acts, his new angular speed is:',
        ans:ans, d:[d1, d2, d3], u:'rad s⁻¹', tag:'Concept Trap',
        sol:[
          'Since external torque τ_ext = 0, angular momentum L = Iω is conserved:',
          'I₁ ω₁ = I₂ ω₂  ⇒  ω₂ = ('+I1+' × '+w1+') / '+I2+' = '+R.f(ans)+' rad s⁻¹'
        ]
      };
    },
    function(R){
      var M = R.pick([2, 4, 5, 10]);
      var v = R.pick([2, 4, 5, 6]);
      var body = R.pick([
        { name:'solid sphere', beta:0.4, f:0.7 },
        { name:'uniform solid cylinder', beta:0.5, f:0.75 },
        { name:'thin circular hoop (ring)', beta:1.0, f:1.0 }
      ]);
      var ans = body.f * M * v * v;
      var d1 = 0.5 * M * v * v;
      var d2 = 0.5 * body.beta * M * v * v;
      var d3 = (0.5 - 0.5 * body.beta) * M * v * v || (ans * 1.5);
      if (d2 === d1) d2 = ans * 1.25;
      return {
        q:'A '+body.name+' of mass '+M+' kg rolls without slipping on a level horizontal floor such that the speed of its centre of mass is '+v+' m s⁻¹. Its total kinetic energy (translational + rotational) is:',
        ans:ans, d:[d1, d2, d3], u:'J', tag:'Calculation Trap',
        sol:[
          'For a '+body.name+', shape factor K²/R² = '+body.beta,
          'Total kinetic energy K_total = ½ M v² (1 + K²/R²) = '+body.f+' M v²',
          'K_total = '+body.f+' × '+M+' × '+v+'² = '+R.f(ans)+' J'
        ]
      };
    },
    function(R){
      var rx = R.int(1, 4), ry = R.int(1, 4);
      var fx = R.int(2, 6), fy = R.int(5, 10);
      if (rx * fy === ry * fx) fy += 2;
      var ans = rx * fy - ry * fx;
      var d1 = rx * fx + ry * fy;
      var d2 = rx * fy + ry * fx;
      var d3 = ry * fx - rx * fy;
      return {
        q:'A force F = ('+fx+'î + '+fy+'ĵ) N acts on a particle whose position vector relative to the origin is r = ('+rx+'î + '+ry+'ĵ) m. The z-component of the torque τ = r × F about the origin is:',
        ans:ans, d:[d1, d2, d3], u:'N m', tag:'Sign Convention',
        sol:[
          'Cross product in the xy-plane: τ_z = x F_y − y F_x  [NOT x F_x + y F_y!]',
          'τ_z = ('+rx+')('+fy+') − ('+ry+')('+fx+') = '+(rx*fy)+' − '+(ry*fx)+' = '+ans+' N m'
        ]
      };
    },
    function(R){
      var I = R.pick([0.5, 1.5, 2.0, 2.5, 4.0]);
      var w = R.pick([10, 20, 30, 40]);
      var t = R.pick([2, 4, 5, 10]);
      var alpha = w / t;
      var ans = I * alpha;
      var d1 = I * w;
      var d2 = 0.5 * I * w * w / t;
      var d3 = (I * w) * t;
      return {
        q:'A flywheel of moment of inertia '+I+' kg m² is rotating at '+w+' rad s⁻¹. What constant braking torque is required to bring it to complete rest in '+t+' s?',
        ans:ans, d:[d1, d2, d3], u:'N m', tag:'Calculation Trap',
        sol:[
          'Angular deceleration magnitude α = Δω / Δt = '+w+' / '+t+' = '+R.f(alpha)+' rad s⁻²',
          'Required torque τ = I α = '+I+' × '+R.f(alpha)+' = '+R.f(ans)+' N m'
        ]
      };
    }
  ]
});

/* ==========================================================================
   P6: GRAVITATION
   ========================================================================== */
NEET.reg({
  id:'P6',
  subj:'Physics',
  type:'num',
  name:'Gravitation',
  syl:'The universal law of gravitation. Acceleration due to gravity and its variation with altitude and depth. Kepler\'s law of planetary motion. Gravitational potential energy; gravitational potential. Escape velocity, Orbital velocity of a satellite. Geo-stationary satellites.',
  kw:['universal gravitation','acceleration due to gravity','kepler law','areal velocity','gravitational potential','escape velocity','orbital velocity','geostationary satellite','binding energy','spherical shell','weightlessness'],

  formulas:[
    { n:'Newton\'s Universal Law & Surface Gravity', f:'F = G m₁ m₂ / r² ; g = G M / R² = (4/3) π G R ρ', u:'N, m s⁻²', s:'G = 6.67 × 10⁻¹¹ N m² kg⁻²; use g ∝ R ρ when comparing planets of given densities and radii', b:'Point-mass formula applies outside spherically symmetric bodies using centre-to-centre distance r ≥ R₁ + R₂' },
    { n:'Variation of g with Altitude h', f:'g_h = g / (1 + h/R)²  ;  for h ≪ R: g_h ≈ g(1 − 2h/R)', u:'m s⁻²', s:'h is height above the surface (so distance from centre is r = R + h)', b:'NEVER use the binomial approximation g(1 − 2h/R) when h is comparable to R (e.g., h = R/4, R/2, or R); use exact g/(1 + h/R)²!' },
    { n:'Variation of g with Depth d & Latitude λ', f:'g_d = g(1 − d/R)  ;  g\'_λ = g − ω² R cos²λ', u:'m s⁻²', s:'d is depth below the surface; λ is latitude (0° at equator, 90° at poles)', b:'g_d = g(1 − d/R) is exact for a uniform-density sphere all the way to the centre (d = R ⇒ g = 0); at poles (λ = 90°) rotation has zero effect' },
    { n:'Gravitational Potential (Shell & Solid Sphere)', f:'Shell (r ≤ R): V = −GM/R (const) ; Solid sphere (r ≤ R): V = −[GM/(2R³)](3R² − r²)', u:'J kg⁻¹', s:'For r ≥ R, both give V = −GM/r; inside a solid sphere at centre (r = 0), V_centre = 1.5 V_surface = −3GM/(2R)', b:'Inside a hollow spherical shell, gravitational field E = −dV/dr = 0 everywhere, so V is constant (NOT zero!) and equal to surface potential −GM/R' },
    { n:'Gravitational Potential Energy & Lifting Work', f:'U = −G M m / r ; ΔU(R → R+h) = m g h / (1 + h/R)', u:'J', s:'Zero reference of U is at infinity (U(∞) = 0); for h = nR, ΔU = [n/(n+1)] mgR', b:'The elementary formula ΔU = mgh fails unless h ≪ R; at h = R, work required is ½mgR (NOT mgR!)' },
    { n:'Escape Velocity', f:'v_e = √(2GM / R) = √(2gR) = R √(8πGρ / 3)', u:'m s⁻¹', s:'For Earth, v_e ≈ 11.2 km s⁻¹; if projected with v > v_e, interstellar speed at infinity is v_∞ = √(v² − v_e²)', b:'Escape speed is COMPLETELY INDEPENDENT of the mass m of the projectile and the angle of projection!' },
    { n:'Orbital Velocity & Time Period of Satellite', f:'v_o = √(GM / r) = R √(g / (R + h)) ; T = 2π √(r³ / GM)', u:'m s⁻¹, s', s:'For a close-orbit satellite (h ≪ R): v_o = √(gR) ≈ 7.92 km s⁻¹, v_e = √2 v_o, and T₀ = 2π√(R/g) = √(3π / Gρ) ≈ 84.6 min', b:'Valid for circular orbits of radius r = R + h measured from the planet\'s CENTRE' },
    { n:'Energetics of an Orbiting Satellite', f:'K = +GMm / (2r) ; U = −GMm / r ; E = K + U = −GMm / (2r)', u:'J', s:'Golden identity: K = −E and U = 2E (so K : U : E = +1 : −2 : −1); Binding Energy BE = −E = +GMm/(2r)', b:'Total mechanical energy E of any bound (circular or elliptical) orbit is strictly NEGATIVE; if E ≥ 0 the satellite escapes along a parabola (E=0) or hyperbola (E>0)' },
    { n:'Kepler\'s Three Laws of Planetary Motion', f:'1. Elliptical orbits (Sun at focus) ; 2. dA/dt = L/(2m) = const ; 3. T² = (4π²/GM) a³', u:'m² s⁻¹, s²', s:'At perihelion r_min = a(1 − e) and aphelion r_max = a(1 + e): v_max r_min = v_min r_max ⇒ v_max / v_min = (1 + e)/(1 − e)', b:'Kepler\'s 2nd law (constant areal velocity) holds for ANY central force (τ = 0); 3rd law T² ∝ a³ holds ONLY for an inverse-square force (F ∝ 1/r²)' }
  ],

  traps:[
    { t:'Using the approximation g_h = g(1 − 2h/R) at h = R/2 gives g_h = 0 (absurd!), whereas the exact formula g_h = g/(1 + h/R)² gives the correct value (4/9)g', c:'g(1 − 2h/R) is a first-order binomial expansion valid ONLY when h/R ≪ 1 (typically h ≤ 5% of R, i.e., ≤ 300 km on Earth)', tag:'Approximation Limit' },
    { t:'Inside a hollow spherical shell of mass M and radius R, the gravitational field intensity is ZERO everywhere, but the gravitational potential is NOT zero — it is constant and equal to −GM/R', c:'Field E = −dV/dr = 0 implies V(r) = constant = V(R) = −GM/R throughout the interior', tag:'Zero-Case' },
    { t:'When an orbiting satellite loses energy due to slight atmospheric drag at high altitude, its orbital radius r decreases and its speed v_o = √(GM/r) actually INCREASES!', c:'Loss of total energy makes E = −GMm/(2r) more negative (smaller r), and since K = −E = +GMm/(2r), kinetic energy increases by twice the energy lost as gravity pulls it inward', tag:'Order Inversion' },
    { t:'Escape velocity from a planet\'s surface is completely independent of the angle of projection (vertical, 45°, or tangential, assuming no atmosphere) and independent of the projectile\'s mass', c:'Escape depends strictly on scalar mechanical energy conservation (½mv_e² − GMm/R = 0), which is direction-independent', tag:'Concept Trap' },
    { t:'An astronaut inside an orbiting International Space Station (ISS) at 400 km altitude feels weightless NOT because g is zero (g is still ~88% of surface value!), but because both astronaut and station are in continuous free fall with the same centripetal acceleration g_h', c:'Apparent weight is the normal contact force N; since both capsule and astronaut satisfy a = g_h, N = m(g_h − a) = 0', tag:'Concept Trap' },
    { t:'A geostationary satellite MUST orbit in the Earth\'s equatorial plane from West to East at height h ≈ 35,800 km (r ≈ 6.6 R_E ≈ 42,200 km from centre) — a geostationary orbit over New Delhi or any non-zero latitude is physically impossible', c:'Gravitational attraction points toward Earth\'s centre; any orbit not lying in the equatorial plane has its centre offset or crosses latitudes, oscillating North–South daily', tag:'Boundary Failure' },
    { t:'If a packet is released gently from an orbiting satellite, it does NOT fall down to Earth — it continues to orbit right alongside the satellite in the exact same circular orbit', c:'At release, the packet already possesses the required orbital speed v_o = √(GM/r), and gravitational acceleration g_h = GM/r² is independent of mass', tag:'Concept Trap' },
    { t:'For a planet in an elliptical orbit around the Sun, angular momentum L and total energy E remain constant throughout the orbit, whereas linear speed v, kinetic energy K, and potential energy U vary continuously from perihelion to aphelion', c:'Gravitational force is central (τ = r × F = 0 ⇒ L = const) and conservative (E = const), but distance r changes so v = L/(mr sin θ) varies', tag:'Concept Trap' }
  ],

  flows:[
    { t:'Variation of g(r) & V(r) from Centre (r = 0) to Infinity for a Uniform Solid Sphere of Radius R',
      chain:[
        'At centre (r = 0): Field g = 0; Potential is at its deepest minimum V_c = −(3/2)(GM/R) = 1.5 V_surface',
        'Inside sphere (0 < r < R): Field increases linearly g(r) = g_s(r/R) ∝ r; Potential is parabolic V(r) = −[GM/(2R³)](3R² − r²)',
        'At surface (r = R): Field reaches maximum g_s = GM/R²; Potential V_s = −GM/R',
        'Outside sphere (r > R): Field drops as inverse square g(r) = GM/r² ∝ 1/r²; Potential rises hyperbolically V(r) = −GM/r → 0 at r → ∞'
      ]
    },
    { t:'Satellite Trajectory & Fate vs Launch Speed v at Orbit Radius r (Given Circular Speed v_o = √(GM/r) and Escape Speed v_e = √2 v_o)',
      root:'Compare tangential launch velocity v at distance r with v_o and v_e',
      br:[
        { l:'v = v_o (E = −GMm/2r < 0)', n:['Exact Circular Orbit of radius r', 'K = −E = ½mv_o²'] },
        { l:'v_o < v < √2 v_o (E < 0)', n:['Bound Elliptical Orbit', 'Launch point is the Perigee (closest point) of the ellipse'] },
        { l:'v = √2 v_o = v_e (E = 0)', n:['Parabolic Escape Trajectory', 'Reaches r → ∞ with asymptotic speed v_∞ = 0'] },
        { l:'v > √2 v_o (E > 0)', n:['Hyperbolic Escape Trajectory', 'Residual speed at infinity v_∞ = √(v² − v_e²)'] }
      ]
    },
    { t:'Choosing the Right Formula for Altitude h vs Depth d',
      root:'Check the magnitude of h / R before computing Δg or ΔU',
      br:[
        { l:'Small altitude h ≪ R (h ≤ 300 km, Δg/g ≤ 10%)', n:['Use linear approximation: g_h ≈ g(1 − 2h/R)', 'Percentage drop Δg/g × 100% ≈ 2(h/R) × 100%', 'Equal g at depth d and small height h requires d = 2h'] },
        { l:'Large altitude h comparable to R (h = R/n or nR)', n:['MUST use exact formula: g_h = g / (1 + h/R)²', 'Work to lift mass m from surface to h: W = ΔU = mgh / (1 + h/R)'] }
      ]
    }
  ],

  lab:[
    { t:'Cavendish Torsion Balance (Measurement of G)', d:'Two small lead spheres on a suspended horizontal rod twisted by gravitational attraction toward two large lead spheres deflect a reflected light beam on a scale; restores torque κθ = G M m L / d², yielding G = 6.67 × 10⁻¹¹ N m² kg⁻².' },
    { t:'Simple Pendulum Seconds Pendulum (g vs Altitude/Latitude)', d:'A pendulum of fixed length L loses time (runs slow, T = 2π√(L/g) increases) when taken to a mountain peak or to a deep mine or from poles to the equator because g decreases in all three cases.' },
    { t:'Kepler\'s Law Verification from Planetary Ephemeris', d:'Plotting log(T) against log(a) for the 8 solar-system planets yields a straight line of exact slope 3/2 = 1.5, verifying T² ∝ a³.' },
    { t:'Free-Fall Drop Tower / Zero-G Parabola Capsule', d:'An enclosed chamber dropped in an evacuated shaft shows floating objects inside (apparent weight = 0) during the entire free-fall interval.' }
  ],

  pairs:[
    { g:'Satellite / Gravitational Quantity → Exact Value or Formula', a:'Escape speed from Earth\'s surface (v_e)', b:'√(2gR) ≈ 11.2 km s⁻¹' },
    { g:'Satellite / Gravitational Quantity → Exact Value or Formula', a:'Orbital speed of a near-Earth satellite (v_o for h ≪ R)', b:'√(gR) ≈ 7.92 km s⁻¹' },
    { g:'Satellite / Gravitational Quantity → Exact Value or Formula', a:'Ratio of escape speed to near-surface orbital speed (v_e / v_o)', b:'√2 : 1' },
    { g:'Satellite / Gravitational Quantity → Exact Value or Formula', a:'Gravitational potential at the centre of a uniform solid sphere of radius R', b:'−(3/2) G M / R (1.5 × surface potential)' },
    { g:'Satellite / Gravitational Quantity → Exact Value or Formula', a:'Work required to lift a body of mass m from Earth\'s surface to height h = R', b:'½ m g R' },
    { g:'Kepler / Orbital Relation → Physical Law or Ratio', a:'Kepler\'s Second Law (dA/dt = L / 2m = constant)', b:'Direct consequence of conservation of angular momentum' },
    { g:'Kepler / Orbital Relation → Physical Law or Ratio', a:'Ratio of Kinetic : Potential : Total Energy for circular orbit (K : U : E)', b:'+1 : −2 : −1' },
    { g:'Kepler / Orbital Relation → Physical Law or Ratio', a:'Ratio of maximum to minimum speed in an elliptical orbit of eccentricity e', b:'(1 + e) / (1 − e)' },
    { g:'Kepler / Orbital Relation → Physical Law or Ratio', a:'Condition for equal g at small height h and depth d (h ≪ R)', b:'d = 2h' }
  ],

  orders:[
    { q:'Decreasing magnitude of acceleration due to gravity g on or near the Earth', s:['At the North/South Poles on surface', 'At the Equator on surface', 'At height h = 100 km above Equator', 'At the exact centre of the Earth (0)'], sep:'>', why:'g_pole > g_equator = g_pole − ω²R > g(h = 100 km) > g_centre = 0.' },
    { q:'Increasing value (taking algebraic sign into account!) of energies for a satellite in circular orbit', s:['Gravitational potential energy (U = −GMm/r)', 'Total mechanical energy (E = −GMm/2r)', 'Energy at infinity (0)', 'Kinetic energy (K = +GMm/2r)'], sep:'<', why:'With negative signs: U = −2K < E = −K < 0 < +K.' },
    { q:'Decreasing orbital speed v_o of satellites in circular orbits around Earth at different altitudes', s:['Low Earth Orbit (h = 400 km)', 'Medium Earth Orbit / GPS (h = 20,200 km)', 'Geostationary Orbit (h = 35,800 km)', 'Moon\'s Orbit (r ≈ 60 R_E)'], sep:'>', why:'Orbital speed v_o = √(GM/r) decreases monotonically as orbital radius r increases.' }
  ],

  facts:{
    T:[
      'Kepler\'s second law (law of areas, dA/dt = L/(2m) = constant) is a direct consequence of the conservation of angular momentum for any central force.',
      'Gravitational force between two point masses is completely independent of the medium present between them (unlike electrostatic or magnetic forces).',
      'If the Earth stops rotating about its polar axis, the apparent value of g at the equator will increase by ω²R, while g at the poles will remain unchanged.',
      'The gravitational potential energy of a system of two point masses is always negative (taking zero reference at infinite separation) because gravity is always an attractive force.',
      'For an artificial satellite in a circular orbit of radius r, its kinetic energy K is positive, its potential energy U is negative with |U| = 2K, and its total energy is E = −K.',
      'To make a satellite in a near-Earth circular orbit escape completely to infinity, its speed must be increased by (√2 − 1) × 100% ≈ 41.4% (or its kinetic energy doubled, +100%).',
      'The time period of a satellite orbiting just above the surface of a spherical planet of mean density ρ is T = √(3π / (Gρ)), which depends only on density ρ and not on the planet\'s radius!',
      'Inside a uniform solid sphere of radius R, the gravitational field intensity is directly proportional to the distance from the centre (g ∝ r for r ≤ R).'
    ],
    F:[
      'The escape velocity of a 1000 kg spacecraft from the Earth\'s surface is greater than the escape velocity of a 1 kg ball.',
      'Inside a hollow uniform spherical shell, both the gravitational field and the gravitational potential are zero everywhere.',
      'When a satellite is moved from a lower circular orbit of radius R₁ to a higher circular orbit of radius R₂, both its gravitational potential energy and its kinetic energy increase.',
      'A pendulum clock taken from the surface of the Earth to the bottom of a deep coal mine runs faster because it is closer to the Earth\'s centre.',
      'The work done against gravity in raising a body of mass m from the Earth\'s surface to an altitude h = R (one Earth radius) is m g R.',
      'Escape velocity depends on the angle at which the projectile is launched from the planet\'s surface.',
      'At the neutral point between the Earth and the Moon where net gravitational field is zero, the net gravitational potential is also zero.',
      'For a planet moving in an elliptical orbit around the Sun, its speed is maximum at aphelion (farthest point) and minimum at perihelion (closest point).'
    ]
  },

  mcq:[
    { q:'At what height h above the Earth\'s surface does the acceleration due to gravity become 1/9th of its value on the surface of the Earth (radius of Earth = R)?',
      o:['2 R', '3 R', 'R / 3', '8 R'],
      a:0, tag:'Approximation Limit',
      sol:['Since g_h = g/9 is a large change, use the EXACT formula: g_h = g / (1 + h/R)²', '1/9 = 1 / (1 + h/R)²  ⇒  1 + h/R = 3  ⇒  h = 2 R.']
    },
    { q:'A body of mass m is raised from the surface of the Earth (radius R, surface gravity g) to a height h = 3R above the surface. The change (increase) in its gravitational potential energy is:',
      o:['(3/4) m g R', '3 m g R', '(1/3) m g R', '(4/3) m g R'],
      a:0, tag:'Boundary Failure',
      sol:['ΔU = U_f − U_i = −GMm/(R + 3R) − (−GMm/R) = (3/4) GMm/R', 'Using GM = gR², ΔU = (3/4) m g R  (or directly ΔU = mgh / (1 + h/R) = mg(3R) / (1 + 3) = (3/4) mgR).']
    },
    { q:'A projectile is fired vertically upward from the surface of the Earth with a speed k v_e, where v_e is the escape velocity and k < 1. Neglecting air resistance, the maximum height above the Earth\'s surface (radius R) reached by the projectile is:',
      o:['R k² / (1 − k²)', 'R k²', 'R / (1 − k²)', 'R (1 − k²) / k²'],
      a:0, tag:'Calculation Trap',
      sol:['By conservation of mechanical energy: ½m(k v_e)² = ΔU = mgh / (1 + h/R)', 'Since ½mv_e² = mgR, the LHS is k² mgR', 'Thus k² R = h / (1 + h/R)  ⇒  k² R + k² h = h  ⇒  h = R k² / (1 − k²).']
    },
    { q:'Two spherical planets P and Q have the same uniform density ρ, and their radii are in the ratio R_P : R_Q = 1 : 2. The ratio of the escape velocities from their surfaces (v_eP : v_eQ) is:',
      o:['1 : 2', '1 : √2', '1 : 4', '√2 : 1'],
      a:0, tag:'Concept Trap',
      sol:['In terms of density ρ, mass M = (4/3)πR³ρ', 'Escape velocity v_e = √(2GM/R) = R √(8πGρ / 3) ∝ R √ρ', 'For equal density ρ, v_e ∝ R  ⇒  v_eP : v_eQ = R_P : R_Q = 1 : 2.']
    },
    { q:'A planet moves around the Sun in an elliptical orbit such that its minimum distance from the Sun (perihelion) is r₁ and its maximum distance (aphelion) is r₂. If the speed of the planet at perihelion is v₁, its speed at aphelion v₂ is:',
      o:['v₁ r₁ / r₂', 'v₁ r₂ / r₁', 'v₁ √(r₁ / r₂)', 'v₁ (r₁ / r₂)²'],
      a:0, tag:'Concept Trap',
      sol:['At both perihelion and aphelion, the velocity vector is strictly perpendicular to the radius vector (θ = 90°)', 'By conservation of angular momentum: L = m v₁ r₁ = m v₂ r₂  ⇒  v₂ = v₁ r₁ / r₂.']
    },
    { q:'What is the gravitational potential at the centre of a uniform solid sphere of mass M and radius R (taking zero potential at infinity)?',
      o:['−(3/2) G M / R', '−G M / R', '0', '−(1/2) G M / R'],
      a:0, tag:'NCERT Exception',
      sol:['Inside a uniform solid sphere (r ≤ R): V(r) = −[GM/(2R³)](3R² − r²)', 'At the centre (r = 0): V(0) = −(3/2) G M / R = 1.5 V_surface.']
    }
  ],

  gens:[
    function(R){
      var ratioR = R.pick([2, 4, 9, 16]);
      var t1 = R.pick([1, 2, 3, 5]);
      var ans = t1 * Math.pow(ratioR, 1.5);
      var d1 = t1 * ratioR;
      var d2 = t1 * Math.pow(ratioR, 2);
      var d3 = t1 * Math.sqrt(ratioR);
      return {
        q:'Two satellites A and B revolve around a planet in circular orbits of radii R and '+ratioR+'R respectively. If the time period of revolution of satellite A is '+t1+' h, the time period of satellite B is:',
        ans:ans, d:[d1, d2, d3], u:'h', tag:'Calculation Trap',
        sol:[
          'By Kepler\'s Third Law: T² ∝ r³  ⇒  T_B / T_A = (r_B / r_A)^(3/2)',
          'T_B = '+t1+' × ('+ratioR+')^(3/2) = '+t1+' × '+Math.pow(ratioR, 1.5)+' = '+ans+' h'
        ]
      };
    },
    function(R){
      var n = R.pick([1, 2, 3, 4]);
      var g0 = 9.8;
      var ans = g0 / ((1 + n) * (1 + n));
      var d1 = g0 / (n * n);
      var d2 = g0 / (1 + n);
      var d3 = g0 * (1 - 2 / (n + 2)) > 0 ? g0 / (2 * n) : g0 * 0.2;
      if (d1 === ans) d1 = g0 / ((n + 2) * (n + 2));
      return {
        q:'Taking the acceleration due to gravity on the Earth\'s surface as 9.8 m s⁻², what is its value at an altitude h = '+n+'R above the Earth\'s surface (where R is the radius of the Earth)?',
        ans:ans, d:[d1, d2, d3], u:'m s⁻²', tag:'Boundary Failure',
        sol:[
          'Distance from Earth\'s centre is r = R + h = R + '+n+'R = '+(n+1)+'R  [Do NOT use r = '+n+'R!]',
          'g_h = g / (1 + h/R)² = 9.8 / ('+(n+1)+')² = 9.8 / '+((n+1)*(n+1))+' = '+R.f(ans)+' m s⁻²'
        ]
      };
    },
    function(R){
      var pctD = R.pick([20, 25, 40, 50, 75, 80]);
      var g0 = 10;
      var ans = g0 * (1 - pctD / 100);
      var d1 = g0 / Math.pow(1 - pctD / 100, 2);
      var d2 = g0 * (1 - 2 * pctD / 100) > 0 ? g0 * (1 - 2 * pctD / 100) : g0 * 0.15;
      var d3 = g0 * (pctD / 100);
      if (d3 === ans) d3 = ans * 0.5;
      return {
        q:'Assuming the Earth to be a sphere of uniform mass density with surface gravity g = 10 m s⁻², what is the acceleration due to gravity at a depth equal to '+pctD+'% of the Earth\'s radius below the surface?',
        ans:ans, d:[d1, d2, d3], u:'m s⁻²', tag:'Calculation Trap',
        sol:[
          'Variation of g with depth d: g_d = g (1 − d/R)',
          'Here d/R = '+pctD+'/100 = '+(pctD/100),
          'g_d = 10 × (1 − '+(pctD/100)+') = '+R.f(ans)+' m s⁻²'
        ]
      };
    },
    function(R){
      var mMult = R.pick([2, 4, 8, 9]);
      var rMult = R.pick([1, 2, 4]);
      if (mMult === rMult) mMult = 4 * rMult;
      var veEarth = 11.2;
      var factor = Math.sqrt(mMult / rMult);
      var ans = veEarth * factor;
      var d1 = veEarth * (mMult / rMult);
      var d2 = veEarth * Math.sqrt(rMult / mMult);
      var d3 = veEarth * (mMult / (rMult * rMult));
      if (d1 === ans) d1 = ans * 2;
      return {
        q:'The escape velocity from the Earth\'s surface is 11.2 km s⁻¹. What is the escape velocity from the surface of another planet whose mass is '+mMult+' times that of the Earth and whose radius is '+rMult+' times that of the Earth?',
        ans:ans, d:[d1, d2, d3], u:'km s⁻¹', tag:'Calculation Trap',
        sol:[
          'v_e = √(2GM / R)  ⇒  v_p / v_E = √[ (M_p/M_E) / (R_p/R_E) ]',
          'v_p = 11.2 × √('+mMult+' / '+rMult+') = 11.2 × '+R.f(factor)+' = '+R.f(ans)+' km s⁻¹'
        ]
      };
    },
    function(R){
      var kMj = R.pick([100, 150, 200, 250, 300, 400]);
      var mode = R.pick([0, 1]);
      if (mode === 0) {
        var ansU = -2 * kMj;
        var d1U = -kMj;
        var d2U = 2 * kMj;
        var d3U = -0.5 * kMj;
        return {
          q:'An artificial satellite orbiting the Earth in a circular orbit has a kinetic energy of '+kMj+' MJ. Taking zero potential energy at infinity, its gravitational potential energy U is:',
          ans:ansU, d:[d1U, d2U, d3U], u:'MJ', tag:'Sign Convention',
          sol:[
            'For any circular orbit under inverse-square gravity: U = −2 K and E = −K',
            'Therefore U = −2 × '+kMj+' MJ = '+ansU+' MJ'
          ]
        };
      } else {
        var ansBE = kMj;
        var d1B = 2 * kMj;
        var d2B = 0.5 * kMj;
        var d3B = -kMj;
        return {
          q:'An artificial satellite orbiting the Earth in a circular orbit has a kinetic energy of '+kMj+' MJ. The minimum additional energy (binding energy) required to project this satellite out of the Earth\'s gravitational field to infinity is:',
          ans:ansBE, d:[d1B, d2B, d3B], u:'MJ', tag:'Concept Trap',
          sol:[
            'Total mechanical energy in circular orbit is E = −K = −'+kMj+' MJ',
            'To escape to infinity (where E_f = 0), additional energy required is ΔE = 0 − E = +K = '+kMj+' MJ'
          ]
        };
      }
    },
    function(R){
      var vMult = R.pick([2, 3]);
      var ve = 11.2;
      var v0 = vMult * ve;
      var ans = ve * Math.sqrt(vMult * vMult - 1);
      var d1 = (vMult - 1) * ve;
      var d2 = vMult * ve;
      var d3 = ve * Math.sqrt(vMult * vMult + 1);
      return {
        q:'The escape velocity of a body from the Earth\'s surface is 11.2 km s⁻¹. If a body is projected with a velocity of '+vMult+' × 11.2 km s⁻¹ (i.e., '+R.f(v0)+' km s⁻¹) and air resistance is neglected, the speed of the body in interstellar space far away from the Earth will be:',
        ans:ans, d:[d1, d2, d3], u:'km s⁻¹', tag:'Calculation Trap',
        sol:[
          'By conservation of energy: ½mv² − GMm/R = ½mv_∞² + 0',
          'Since GM/R = ½v_e², we get v_∞ = √(v² − v_e²)  [NOT v − v_e!]',
          'v_∞ = 11.2 × √('+vMult+'² − 1) = 11.2 × √'+(vMult*vMult-1)+' = '+R.f(ans)+' km s⁻¹'
        ]
      };
    }
  ]
});

/* ==========================================================================
   P7: PROPERTIES OF SOLIDS AND LIQUIDS
   ========================================================================== */
NEET.reg({
  id:'P7',
  subj:'Physics',
  type:'num',
  name:'Properties of Solids and Liquids',
  syl:'Elastic behaviour, Stress-strain relationship, Hooke\'s Law. Young\'s modulus, bulk modulus, modulus of rigidity. Pressure due to a fluid column; Pascal\'s law and its applications. Effect of gravity on fluid pressure. Viscosity. Stokes\' law. terminal velocity, streamline, and turbulent flow, critical velocity. Bernoulli\'s principle and its applications. Surface energy and surface tension, angle of contact, excess of pressure across a curved surface, application of surface tension - drops, bubbles, and capillary rise. Heat, temperature, thermal expansion; specific heat capacity, calorimetry; change of state, latent heat. Heat transfer-conduction, convection, and radiation. Newton\'s law of cooling.',
  kw:['young modulus','bulk modulus','stokes law','terminal velocity','reynolds number','bernoulli theorem','torricelli law','surface tension','excess pressure','capillary rise','thermal conductivity','newton law of cooling','stefan boltzmann','wien displacement'],

  formulas:[
    { n:'Hooke\'s Law, Moduli & Elastic Energy Density', f:'Y = (F/A)/(ΔL/L) ; B = −ΔP/(ΔV/V) ; u = ½ × Stress × Strain = ½ Y ε²', u:'Pa (N m⁻²), J m⁻³', s:'Compressibility K = 1/B; total elastic PE stored in a stretched wire of volume V is U = ½ F ΔL = (½ Y ε²) A L', b:'Hooke\'s linear proportionality holds ONLY up to the Proportional Limit on the stress-strain curve (slightly below the Elastic/Yield Point)' },
    { n:'Hydrostatic Pressure, Pascal & Buoyancy', f:'P = P_atm + ρ g h ; F_buoyant = V_sub ρ_liq g ; f_in = 1 − f_out = ρ_body / ρ_liq', u:'Pa, N, dimensionless', s:'Gauge pressure P_g = P − P_atm = ρgh depends ONLY on vertical depth h, not on vessel shape (hydrostatic paradox)', b:'In an accelerating or freely falling frame, replace g with g_eff (in free fall g_eff = 0 ⇒ buoyant force = 0 and hydrostatic pressure = 0)' },
    { n:'Continuity, Bernoulli\'s Theorem & Torricelli\'s Speed', f:'A₁v₁ = A₂v₂ ; P + ½ρv² + ρgh = const ; v_efflux = √(2gh) ; R_horiz = 2√[h(H − h)]', u:'m³ s⁻¹, Pa, m s⁻¹, m', s:'Maximum horizontal range R_max = H occurs when orifice is at depth h = H/2 (midpoint of water column H)', b:'Bernoulli\'s equation holds ONLY for steady, incompressible, irrotational, and non-viscous (ideal) fluid flow along a streamline; v_efflux = √(2gh) assumes A_orifice ≪ A_tank' },
    { n:'Viscosity, Stokes\' Law & Terminal Velocity', f:'F_v = −η A (dv/dz) ; F_Stokes = 6 π η r v ; v_T = (2/9) r² (ρ − σ) g / η', u:'N, N, m s⁻¹', s:'r = sphere radius, ρ = sphere density, σ = fluid density, η = dynamic viscosity (1 Poise = 0.1 Pa·s); v_T ∝ r²', b:'Valid ONLY for laminar flow (low Reynolds number Re < 1) around a smooth rigid sphere in an infinite homogeneous fluid' },
    { n:'Reynolds Number & Critical Velocity', f:'Re = ρ v D / η  ⇔  v_c = Re_c η / (ρ D)', u:'dimensionless, m s⁻¹', s:'In cylindrical pipes: Re < 1000 is laminar/streamline; Re > 2000 is turbulent; 1000–2000 is unstable transition', b:'Above v_c, viscous drag ceases to be linear (∝ v) and becomes approximately proportional to v²' },
    { n:'Surface Tension, Surface Energy & Excess Pressure', f:'S = F/L = ΔW / ΔA ; ΔP_drop = 2S/R ; ΔP_bubble(in air) = 4S/R', u:'N m⁻¹ (J m⁻²), Pa', s:'A liquid drop or underwater air bubble has 1 free interface (ΔA = 4πR², ΔP = 2S/R); a soap bubble in air has 2 free interfaces (ΔA = 8πR², ΔP = 4S/R)', b:'When two soap bubbles of radii r₁ < r₂ coalesce isothermally in vacuum, new radius is R = √(r₁² + r₂²); common interface radius is r_c = r₁r₂/(r₂ − r₁)' },
    { n:'Capillary Rise (Jurin\'s Law)', f:'h = 2 S cos θ / (r ρ g) = 2 S / (R_meniscus ρ g)', u:'m', s:'r = capillary tube bore radius, θ = angle of contact (θ < 90° rise, θ > 90° depression); r = R_meniscus cos θ', b:'In a tube of insufficient length L < h, liquid NEVER overflows like a fountain — it rises to the top rim (height L) and flattens its meniscus so h R_m = L R\'_m' },
    { n:'Thermal Expansion & Calorimetry (Mixtures & Latent Heat)', f:'β = 2α, γ = 3α ; Thermal stress = Y α ΔT ; Q = m c ΔT ; Q_phase = m L', u:'K⁻¹, Pa, J', s:'L_fusion(ice) = 80 cal g⁻¹ = 336 J g⁻¹; L_vap(steam) = 540 cal g⁻¹ = 2260 J g⁻¹; c_water = 1 cal g⁻¹ °C⁻¹ = 4.186 J g⁻¹ K⁻¹', b:'When mixing m g of ice at 0 °C with M g of water at θ °C, ALWAYS check if M θ ≥ 80 m before assuming all ice melts! If M θ < 80 m, final temperature is strictly 0 °C' },
    { n:'Thermal Conduction, Radiation & Newton\'s Cooling', f:'dQ/dt = K A ΔT / L = ΔT / R_th ; E = σ e T⁴ ; λ_m T = b ; dT/dt = −k(T − T₀)', u:'W, W m⁻², m K, K s⁻¹', s:'R_th = L/(KA); Stefan σ = 5.67×10⁻⁸ W m⁻² K⁻⁴; Wien b = 2.898×10⁻³ m K; average form of Newton\'s cooling: (T₁ − T₂)/Δt = K_c [(T₁ + T₂)/2 − T₀]', b:'Stefan\'s law requires ABSOLUTE temperature T in Kelvin; Newton\'s law of cooling is valid ONLY when (T − T₀) is small compared to T₀ (ΔT ≪ T₀)' }
  ],

  traps:[
    { t:'Steel is MORE elastic than rubber because for a given deforming stress, steel undergoes much smaller strain and therefore has a much higher Young\'s modulus Y', c:'In physics, elasticity is measured by the restoring stress per unit strain (Y = Stress/Strain), NOT by how easily a material stretches', tag:'Concept Trap' },
    { t:'When a work ΔW is done to blow a soap bubble of radius R from scratch in air, ΔW = 2 × (4πR²) S = 8πR²S (factor of 2!), whereas for a liquid drop it is 4πR²S', c:'A soap bubble in air has TWO concentric air-liquid interfaces (inner and outer surfaces of practically equal radius R)', tag:'Calculation Trap' },
    { t:'If a capillary tube is dipped into water such that its protruding length L above the water surface is LESS than the normal capillary rise h, water does NOT overflow — it rises to the top rim L and its meniscus radius of curvature increases from R_m to R\'_m = R_m(h/L)', c:'Overflowing without external work would create a perpetual motion machine violating conservation of energy; instead contact angle θ increases so cos θ\' = (L/h) cos θ', tag:'NCERT Exception' },
    { t:'When two soap bubbles of different radii (a smaller bubble and a larger bubble) are connected by a hollow tube, air flows from the SMALLER bubble into the LARGER bubble — the smaller bubble shrinks and the larger bubble grows!', c:'Excess pressure inside a bubble is ΔP = 4S/r ∝ 1/r; the smaller bubble has HIGHER internal pressure than the larger bubble', tag:'Order Inversion' },
    { t:'When N identical spherical mercury droplets of radius r coalesce to form a single large drop of radius R = N^(1/3) r, surface area decreases, surface energy is RELEASED as heat, and the temperature of the drop RISES', c:'Volume is conserved (4/3 πR³ = N · 4/3 πr³ ⇒ R = N^(1/3)r), so ΔU = 4πr²S(N − N^(2/3)) > 0 is liberated', tag:'Concept Trap' },
    { t:'Water exhibits anomalous thermal expansion between 0 °C and 4 °C: on heating from 0 °C to 4 °C, its volume DECREASES and its density reaches a maximum of 1000 kg m⁻³ at 4 °C', c:'Open hydrogen-bonded ice-like cages collapse into closer packing between 0 °C and 4 °C before normal thermal expansion dominates above 4 °C', tag:'NCERT Exception' },
    { t:'When a metallic disc or plate containing a circular hole (cavity) is heated uniformly, the diameter of the hole INCREASES (never shrinks!) in the exact same proportion as a solid plug of the same metal', c:'Thermal expansion is a photographic magnification of all linear dimensions, including distances between atoms on the inner rim of a cavity', tag:'Concept Trap' },
    { t:'When a wire of length L and cross-sectional area A is stretched by force F within its elastic limit, the work done is W = ½ F ΔL, even though the final applied force is F', c:'Restoring force increases linearly from 0 to F as extension grows from 0 to ΔL, so average force is F/2 (if stretched by hanging a constant dead weight F = Mg suddenly, Mg ΔL is lost ½ as heat and ½ stored as ½F ΔL)', tag:'Calculation Trap' }
  ],

  flows:[
    { t:'Ice–Water–Steam Calorimetry Mixture Solver Algorithm',
      chain:[
        'Convert all masses to grams and work in calories (c_ice = 0.5, L_f = 80, c_water = 1, L_v = 540 cal/g)',
        'Bring all components conceptually to a common reference (0 °C water) or compare Q_available (from hot body cooling to 0 °C) with Q_required (to melt all ice: m_ice × 80)',
        'Case A: If Q_avail < m_ice × 80 → Only (Q_avail / 80) grams of ice melt; final equilibrium temperature is STRICTLY 0 °C!',
        'Case B: If Q_avail = m_ice × 80 → All ice just melts; final temperature is 0 °C pure water',
        'Case C: If Q_avail > m_ice × 80 → All ice melts and remaining heat (Q_avail − 80 m_ice) warms total water mass (m_ice + m_water) to T_f = (Q_avail − 80 m_ice)/(m_ice + m_water)'
      ]
    },
    { t:'Composite Thermal Slabs: Series vs Parallel Conduction Tree',
      root:'Replace each conducting rod/slab of length L_i, area A_i, conductivity K_i with thermal resistance R_i = L_i / (K_i A_i)',
      br:[
        { l:'Slabs in Series (Same heat current H = dQ/dt, equal A)', n:['R_eq = R₁ + R₂ = L₁/(K₁A) + L₂/(K₂A)', 'For L₁ = L₂: K_series = 2 K₁ K₂ / (K₁ + K₂) (Harmonic Mean)', 'Junction temperature T_J = (K₁T₁/L₁ + K₂T₂/L₂) / (K₁/L₁ + K₂/L₂)'] },
        { l:'Rods in Parallel (Same temperature difference ΔT, equal L)', n:['1 / R_eq = 1 / R₁ + 1 / R₂', 'For A₁ = A₂: K_parallel = (K₁ + K₂) / 2 (Arithmetic Mean)', 'Total heat current H = H₁ + H₂'] }
      ]
    },
    { t:'Angle of Contact θ, Meniscus Shape & Capillary Action Tree',
      root:'Compare adhesive force (liquid–solid) vs cohesive force (liquid–liquid)',
      br:[
        { l:'Adhesion > Cohesion / √2 (e.g., Water on clean glass, θ < 90°)', n:['Liquid wets the solid surface', 'Concave upward meniscus', 'Capillary RISE (h > 0) because pressure just below meniscus is P_atm − 2S/R'] },
        { l:'Pure Water on Silver (θ = 90°)', n:['Flat horizontal meniscus (R_meniscus → ∞)', 'Zero excess pressure across surface (ΔP = 0)', 'No capillary rise or fall (h = 0)'] },
        { l:'Adhesion < Cohesion / √2 (e.g., Mercury on glass, θ ≈ 135° > 90°)', n:['Liquid does NOT wet the solid', 'Convex upward meniscus', 'Capillary DEPRESSION (h < 0,cos θ < 0)'] }
      ]
    }
  ],

  lab:[
    { t:'Searle\'s Apparatus for Young\'s Modulus (Y)', d:'Uses two identical wires (reference wire + experimental wire) suspended from the same rigid support so that thermal expansion of the wires and yielding of the ceiling support automatically cancel out; extension ΔL is measured by a spirit-level micrometer.' },
    { t:'Capillary Rise by Travelling Microscope', d:'Focus cross-hairs on the bottom of the concave water meniscus and then on the tip of a pointer just touching the free water level in the dish (after removing the dish) to measure h = 2S cos θ / (rρg).' },
    { t:'Stokes\' Terminal Velocity Viscometer', d:'Drop a small steel ball bearing along the central axis of a wide glycerine jar; begin timing ONLY after the ball passes a fiducial mark well below the surface where terminal speed v_T has been reached.' },
    { t:'Newton\'s Law of Cooling Calorimeter', d:'Plot cooling curve T(t) of hot water stirred continuously in a double-walled enclosure; log_e(T − T₀) vs time t is a straight line with negative slope −k.' }
  ],

  pairs:[
    { g:'Physical Phenomenon / Law → Underlying Principle or Relation', a:'Bernoulli\'s theorem for ideal fluid flow', b:'Conservation of mechanical energy per unit volume' },
    { g:'Physical Phenomenon / Law → Underlying Principle or Relation', a:'Equation of continuity (A₁v₁ = A₂v₂) for incompressible fluid', b:'Conservation of mass in fluid flow' },
    { g:'Physical Phenomenon / Law → Underlying Principle or Relation', a:'Hydraulic lift / hydraulic brakes (F₂/A₂ = F₁/A₁)', b:'Pascal\'s law of transmission of fluid pressure' },
    { g:'Physical Phenomenon / Law → Underlying Principle or Relation', a:'Dynamic lift on a spinning ball (curving trajectory)', b:'Magnus effect (Bernoulli pressure difference due to spin)' },
    { g:'Physical Phenomenon / Law → Underlying Principle or Relation', a:'Colour of a glowing star shifting from red to blue on heating', b:'Wien\'s displacement law (λ_m T = b = 2.898 × 10⁻³ m K)' },
    { g:'Surface / Elastic Configuration → Exact Formula', a:'Excess pressure inside a spherical liquid drop of radius R', b:'2 S / R' },
    { g:'Surface / Elastic Configuration → Exact Formula', a:'Excess pressure inside a spherical soap bubble of radius R in air', b:'4 S / R' },
    { g:'Surface / Elastic Configuration → Exact Formula', a:'Elastic potential energy per unit volume (energy density) of stretched wire', b:'½ × Stress × Strain = (Stress)² / (2Y)' },
    { g:'Surface / Elastic Configuration → Exact Formula', a:'Radius of curvature of interface between two fused soap bubbles (r₁ < r₂)', b:'r₁ r₂ / (r₂ − r₁) (bulging into the larger bubble)' },
    { g:'Surface / Elastic Configuration → Exact Formula', a:'Effective conductivity of two equal-length slabs in series', b:'2 K₁ K₂ / (K₁ + K₂)' }
  ],

  orders:[
    { q:'Decreasing order of Young\'s modulus of elasticity (Y) for common materials', s:['Diamond / Tungsten', 'Steel (2 × 10¹¹ Pa)', 'Copper (1.1 × 10¹¹ Pa)', 'Glass (6.5 × 10¹⁰ Pa)', 'Rubber (≈ 10⁶ Pa)'], sep:'>', why:'Covalent/metallic stiffness decreases from diamond and steel down to copper, glass, and elastomeric rubber.' },
    { q:'Decreasing rate of heat transfer speed among the three modes of thermal transmission', s:['Thermal radiation (speed of light c = 3 × 10⁸ m s⁻¹ in vacuum)', 'Convection (bulk fluid motion)', 'Conduction in solids/gases (phonon/molecular diffusion)'], sep:'>', why:'Radiation travels at electromagnetic wave speed c without needing a medium; convection transports heat via macroscopic flow; conduction is slowest diffusive transfer.' },
    { q:'Increasing excess pressure ΔP inside the given spherical systems of the SAME radius R and surface tension S', s:['Liquid drop in air (2S/R)', 'Soap bubble in air (4S/R)', 'Soap bubble of half the radius R/2 in air (8S/R)'], sep:'<', why:'ΔP_drop(R) = 2S/R < ΔP_bubble(R) = 4S/R < ΔP_bubble(R/2) = 4S/(R/2) = 8S/R.' }
  ],

  facts:{
    T:[
      'For an ideal rigid body, both Young\'s modulus Y and Shear modulus (modulus of rigidity) η are infinite because strain is zero for any applied stress.',
      'For an ideal incompressible liquid, the Bulk modulus B is infinite (compressibility K = 0) and the Shear modulus η is zero.',
      'Viscosity of liquids DECREASES with increase in temperature (due to weakening cohesive forces), whereas viscosity of gases INCREASES with increase in temperature (due to faster molecular momentum transport).',
      'Surface tension of a liquid generally decreases with rise in temperature and becomes zero at the critical temperature.',
      'Adding a highly soluble salt like NaCl increases the surface tension of water, whereas adding a sparingly soluble substance or surfactant (soap, detergent, phenol) decreases the surface tension of water.',
      'In steady streamline flow, no two streamlines can ever intersect each other because the fluid would have two different velocity directions at the point of intersection.',
      'Steam at 100 °C causes much more severe burns than boiling water at 100 °C because each gram of steam releases an extra 540 cal (2260 J) of latent heat of vaporization upon condensing.',
      'According to Kirchhoff\'s law of thermal radiation, good absorbers of a given wavelength are also good emitters of that same wavelength (hence a blackbody is both the best absorber and best emitter).'
    ],
    F:[
      'Rubber is more elastic than steel because rubber can be stretched to many times its original length easily.',
      'When two soap bubbles of unequal radii are connected through a stopcock tube, the smaller bubble expands at the expense of the larger bubble until both reach equal size.',
      'If a capillary tube of length 5 cm is dipped vertically into water where the normal capillary rise is 10 cm, water flows out continuously from the upper end like a fountain.',
      'When 8 small spherical water drops coalesce to form a single big drop, energy is absorbed from the surroundings and the temperature of the drop falls.',
      'The terminal velocity of a small sphere falling through a viscous liquid is directly proportional to the radius r of the sphere.',
      'When a metal ring with a small gap is heated uniformly, the width of the gap decreases as the metal expands into the empty space.',
      'In Bernoulli\'s equation P + ½ρv² = constant for a horizontal pipe, regions where the fluid speed v is highest have the highest static pressure P.',
      'If the absolute temperature of a blackbody is doubled from T to 2T, the total radiant energy emitted per second increases by a factor of 4.'
    ]
  },

  mcq:[
    { q:'Eight identical spherical raindrops, each falling through air with a steady terminal velocity of 5 cm s⁻¹, coalesce to form a single large spherical drop. What will be the new terminal velocity of the combined drop?',
      o:['20 cm s⁻¹', '40 cm s⁻¹', '10 cm s⁻¹', '5 cm s⁻¹'],
      a:0, tag:'Calculation Trap',
      sol:['By volume conservation: (4/3)πR³ = 8 × (4/3)πr³  ⇒  R = 8^(1/3) r = 2 r', 'From Stokes\' law, terminal velocity v_T ∝ r²', 'Therefore v_new / v_old = (R / r)² = 2² = 4  ⇒  v_new = 4 × 5 = 20 cm s⁻¹.']
    },
    { q:'The excess pressures inside two soap bubbles are in the ratio 3 : 1. What is the ratio of their volumes (V₁ : V₂)?',
      o:['1 : 27', '27 : 1', '1 : 9', '1 : 3'],
      a:0, tag:'Order Inversion',
      sol:['Excess pressure inside a soap bubble ΔP = 4S / r ∝ 1 / r', 'Since ΔP₁ : ΔP₂ = 3 : 1, the radii are in the inverse ratio r₁ : r₂ = 1 : 3', 'Volume V = (4/3)πr³ ∝ r³  ⇒  V₁ : V₂ = 1³ : 3³ = 1 : 27.']
    },
    { q:'Two cylindrical rods of the same dimensions have thermal conductivities K₁ and K₂. When they are connected end-to-end in series between two heat reservoirs, their equivalent thermal conductivity is K_s. The value of K_s is:',
      o:['2 K₁ K₂ / (K₁ + K₂)', '(K₁ + K₂) / 2', 'K₁ K₂ / (K₁ + K₂)', '√(K₁ K₂)'],
      a:0, tag:'Calculation Trap',
      sol:['In series, thermal resistances add: R_eq = R₁ + R₂', 'For two rods of length L each (total length 2L) and area A: (2L)/(K_s A) = L/(K₁ A) + L/(K₂ A)', '2 / K_s = 1/K₁ + 1/K₂  ⇒  K_s = 2 K₁ K₂ / (K₁ + K₂).']
    },
    { q:'A spherical blackbody of radius 12 cm radiates 450 W power at 500 K. If the radius were halved and the absolute temperature doubled, the power radiated in watts would be:',
      o:['1800 W', '900 W', '450 W', '3600 W'],
      a:0, tag:'Calculation Trap',
      sol:['By Stefan-Boltzmann law: P = σ A T⁴ = σ (4π R²) T⁴  ⇒  P ∝ R² T⁴', 'P₂ / P₁ = (R₂ / R₁)² × (T₂ / T₁)⁴ = (1/2)² × (2)⁴ = (1/4) × 16 = 4', 'Therefore P₂ = 4 × 450 W = 1800 W.']
    },
    { q:'A beaker is filled with water up to a height H. A small hole is drilled in its vertical side at a depth h below the free water surface. For the emerging horizontal water jet to strike the ground at the MAXIMUM horizontal distance from the base of the beaker, the depth h should be:',
      o:['H / 2', 'H / 4', '3H / 4', 'H'],
      a:0, tag:'Concept Trap',
      sol:['Efflux speed v = √(2gh) and time to fall remaining height (H − h) is t = √[2(H − h)/g]', 'Horizontal range R = v t = 2 √[h(H − h)]', 'R is maximum when h(H − h) is maximum, i.e., at h = H / 2, giving R_max = H.']
    },
    { q:'Two wires A and B are made of the same material (same Young\'s modulus Y). Wire A has twice the diameter and half the length of wire B. If both wires are stretched by the same tension force F, the ratio of the elongation of wire A to that of wire B (ΔL_A : ΔL_B) is:',
      o:['1 : 8', '1 : 4', '8 : 1', '1 : 2'],
      a:0, tag:'Calculation Trap',
      sol:['ΔL = F L / (A Y) = 4 F L / (π d² Y)  ⇒  for same F and Y, ΔL ∝ L / d²', 'ΔL_A / ΔL_B = (L_A / L_B) × (d_B / d_A)² = (1/2) × (1/2)² = 1 / 8.']
    }
  ],

  gens:[
    function(R){
      var n = R.pick([8, 27, 64, 125]);
      var cbrt = Math.round(Math.pow(n, 1/3));
      var v0 = R.pick([2, 3, 4, 5, 6]);
      var ans = v0 * cbrt * cbrt;
      var d1 = v0 * cbrt;
      var d2 = v0 * n;
      var d3 = v0 / cbrt;
      return {
        q:'If '+n+' identical small spherical water droplets, each falling with a terminal velocity of '+v0+' cm s⁻¹ in air, coalesce to form a single large spherical drop, the terminal velocity of the large drop will be:',
        ans:ans, d:[d1, d2, d3], u:'cm s⁻¹', tag:'Calculation Trap',
        sol:[
          'Volume conservation: (4/3)πR³ = '+n+' × (4/3)πr³  ⇒  R = '+n+'^(1/3) r = '+cbrt+' r',
          'Terminal velocity v_T ∝ r²  ⇒  v_new = ('+cbrt+')² × '+v0+' = '+(cbrt*cbrt)+' × '+v0+' = '+ans+' cm s⁻¹'
        ]
      };
    },
    function(R){
      var t1 = R.pick([60, 70, 80]);
      var t2 = t1 - 10;
      var t3 = t2 - 10;
      var t0 = R.pick([20, 25, 30]);
      var dt1 = R.pick([4, 5, 6]);
      var avg1 = (t1 + t2) / 2 - t0;
      var avg2 = (t2 + t3) / 2 - t0;
      var ans = dt1 * (avg1 / avg2);
      var d1 = dt1;
      var d2 = dt1 * (avg2 / avg1);
      var d3 = dt1 * (t1 / t2);
      return {
        q:'A pan filled with hot food cools from '+t1+' °C to '+t2+' °C in '+dt1+' minutes when the surrounding room temperature is at '+t0+' °C. Using the average form of Newton\'s law of cooling, how long will it take to cool further from '+t2+' °C to '+t3+' °C?',
        ans:ans, d:[d1, d2, d3], u:'min', tag:'Calculation Trap',
        sol:[
          'By average form of Newton\'s law of cooling: (T_i − T_f)/Δt = K [ (T_i + T_f)/2 − T₀ ]',
          'First interval: 10 / '+dt1+' = K [ '+((t1+t2)/2)+' − '+t0+' ] = K × '+avg1,
          'Second interval: 10 / Δt₂ = K [ '+((t2+t3)/2)+' − '+t0+' ] = K × '+avg2,
          'Dividing: Δt₂ = '+dt1+' × ('+avg1+' / '+avg2+') = '+R.f(ans)+' min'
        ]
      };
    },
    function(R){
      var mIce = R.pick([20, 40, 50, 60]);
      var mWat = R.pick([40, 50, 80, 100]);
      var tWat = R.pick([50, 60, 80, 90]);
      var qAvail = mWat * 1 * tWat;
      var qMelt = mIce * 80;
      if (qAvail <= qMelt) {
        mWat = mIce * 2;
        tWat = 80;
        qAvail = mWat * tWat;
      }
      var ans = (qAvail - qMelt) / (mIce + mWat);
      var d1 = qAvail / (mIce + mWat);
      var d2 = (qAvail + qMelt) / (mIce + mWat);
      var d3 = (mWat * tWat) / mWat / 2;
      if (d3 === ans) d3 = ans + 10;
      return {
        q:'When '+mIce+' g of ice at 0 °C is mixed with '+mWat+' g of water at '+tWat+' °C in an insulated calorimeter (take L<sub>fusion</sub> of ice = 80 cal g⁻¹ and c<sub>water</sub> = 1 cal g⁻¹ °C⁻¹), the final equilibrium temperature of the mixture is:',
        ans:ans, d:[d1, d2, d3], u:'°C', tag:'Calculation Trap',
        sol:[
          'Heat required to melt all '+mIce+' g ice at 0 °C: Q_melt = '+mIce+' × 80 = '+qMelt+' cal',
          'Heat available from '+mWat+' g water cooling to 0 °C: Q_avail = '+mWat+' × 1 × '+tWat+' = '+qAvail+' cal',
          'Since Q_avail > Q_melt, all ice melts; T_f = (Q_avail − Q_melt) / (m_ice + m_water) = ('+qAvail+' − '+qMelt+') / '+(mIce+mWat)+' = '+R.f(ans)+' °C'
        ]
      };
    },
    function(R){
      var s = R.pick([0.025, 0.03, 0.04, 0.05]);
      var rCm = R.pick([2, 4, 5, 10]);
      var r = rCm / 100;
      var isBubble = R.pick([true, false]);
      if (isBubble) {
        var ansB = (4 * s) / r;
        var d1B = (2 * s) / r;
        var d2B = (4 * s) / rCm;
        var d3B = (8 * s) / r;
        return {
          q:'The surface tension of a soap solution is '+s+' N m⁻¹. The excess pressure inside a spherical soap bubble of radius '+rCm+' cm blown in air is:',
          ans:ansB, d:[d1B, d2B, d3B], u:'Pa', tag:'Calculation Trap',
          sol:[
            'A soap bubble in air has TWO free surfaces, so ΔP = 4S / R  [NOT 2S / R!]',
            'Convert radius: R = '+rCm+' cm = '+r+' m',
            'ΔP = 4 × '+s+' / '+r+' = '+R.f(ansB)+' Pa'
          ]
        };
      } else {
        var ansD = (2 * s) / r;
        var d1D = (4 * s) / r;
        var d2D = (2 * s) / rCm;
        var d3D = s / r;
        return {
          q:'The surface tension of a liquid is '+s+' N m⁻¹. The excess pressure inside a spherical drop of this liquid of radius '+rCm+' cm in air is:',
          ans:ansD, d:[d1D, d2D, d3D], u:'Pa', tag:'Calculation Trap',
          sol:[
            'A liquid drop has ONLY ONE free surface, so ΔP = 2S / R',
            'Convert radius: R = '+rCm+' cm = '+r+' m',
            'ΔP = 2 × '+s+' / '+r+' = '+R.f(ansD)+' Pa'
          ]
        };
      }
    },
    function(R){
      var h = R.pick([1.8, 3.2, 5.0, 7.2, 9.8, 12.8]);
      var g = 10;
      var ans = Math.sqrt(2 * g * h);
      var d1 = 2 * g * h;
      var d2 = Math.sqrt(g * h);
      var d3 = 2 * Math.sqrt(g * h);
      return {
        q:'A large open water tank has a small circular orifice in its side wall at a depth of '+h+' m below the free water surface. Taking g = 10 m s⁻², the speed of efflux of water emerging from the orifice (by Torricelli\'s law) is:',
        ans:ans, d:[d1, d2, d3], u:'m s⁻¹', tag:'Calculation Trap',
        sol:[
          'By Torricelli\'s theorem: v = √(2 g h)',
          'v = √(2 × 10 × '+h+') = √'+(20*h)+' = '+R.f(ans)+' m s⁻¹'
        ]
      };
    },
    function(R){
      var t1 = R.pick([300, 400, 500, 600]);
      var multT = R.pick([2, 3]);
      var t2 = t1 * multT;
      var p1 = R.pick([10, 20, 50, 100]);
      var ans = p1 * Math.pow(multT, 4);
      var d1 = p1 * multT;
      var d2 = p1 * multT * multT;
      var d3 = p1 * Math.pow(multT, 3);
      return {
        q:'A blackbody at a temperature of '+t1+' K radiates thermal energy at a rate of '+p1+' W. If its temperature is raised to '+t2+' K, the rate at which it radiates thermal energy will become:',
        ans:ans, d:[d1, d2, d3], u:'W', tag:'Calculation Trap',
        sol:[
          'By Stefan-Boltzmann law: P ∝ T⁴',
          'P₂ / P₁ = (T₂ / T₁)⁴ = ('+t2+' / '+t1+')⁴ = '+multT+'⁴ = '+Math.pow(multT, 4),
          'P₂ = '+p1+' × '+Math.pow(multT, 4)+' = '+ans+' W'
        ]
      };
    }
  ]
});

/* ==========================================================================
   P8: THERMODYNAMICS
   ========================================================================== */
NEET.reg({
  id:'P8',
  subj:'Physics',
  type:'num',
  name:'Thermodynamics',
  syl:'Thermal equilibrium, zeroth law of thermodynamics, the concept of temperature. Heat, work, and internal energy. The first law of thermodynamics, isothermal and adiabatic processes. The second law of thermodynamics: reversible and irreversible processes.',
  kw:['zeroth law','first law of thermodynamics','internal energy','isothermal process','adiabatic process','isobaric process','isochoric process','indicator diagram','carnot engine','refrigerator','coefficient of performance','second law of thermodynamics'],

  formulas:[
    { n:'Zeroth Law & Internal Energy of Ideal Gas', f:'T_A = T_C and T_B = T_C  ⇒  T_A = T_B ; U = (f/2) n R T = n C_V T', u:'K, J', s:'For an ideal gas, internal energy U is a state function that depends EXCLUSIVELY on absolute temperature T and moles n (ΔU = n C_V ΔT for ALL processes!)', b:'Fails for real gases with intermolecular attractions where U depends on both T and volume V' },
    { n:'First Law of Thermodynamics (Physics Convention)', f:'ΔQ = ΔU + ΔW  ;  dW = P dV', u:'J', s:'ΔQ > 0: heat added to gas; ΔW > 0: gas EXPANDS (work done BY gas); ΔU > 0: temperature T rises', b:'WATCH SIGN CONVENTION: Physics NCERT uses ΔQ = ΔU + ΔW (W by gas > 0), whereas Chemistry NCERT uses ΔU = q + w (w on gas > 0)!' },
    { n:'Isothermal Process (T = constant, ΔU = 0)', f:'P V = const ; ΔQ = ΔW = n R T ln(V₂/V₁) = 2.3026 n R T log₁₀(P₁/P₂)', u:'J', s:'Slope of isotherm on P–V graph: (dP/dV)_T = −P/V; isothermal bulk modulus B_T = P; molar heat capacity C_iso = ∞', b:'Requires quasi-static (very slow) process with conducting diathermic walls; fails for free expansion in vacuum (where T = const but W = 0 and Q = 0)' },
    { n:'Adiabatic Process (ΔQ = 0, ΔU = −ΔW)', f:'P V^γ = const ; T V^(γ−1) = const ; T^γ P^(1−γ) = const ; W = (P₁V₁ − P₂V₂)/(γ − 1) = nR(T₁ − T₂)/(γ − 1)', u:'J', s:'Slope of adiabat: (dP/dV)_S = −γ(P/V) = γ × (isothermal slope); adiabatic bulk modulus B_S = γP; molar heat capacity C_adia = 0', b:'Requires rapid process or thermally insulated (adiabatic) walls AND reversible quasi-static path for PV^γ = const' },
    { n:'Isochoric (V = const) & Isobaric (P = const) Processes', f:'Isochoric: ΔW = 0, ΔQ = ΔU = n C_V ΔT ; Isobaric: ΔW = P ΔV = n R ΔT, ΔQ = n C_P ΔT', u:'J', s:'In an isobaric expansion of an ideal gas: fraction of heat going into internal energy is ΔU/ΔQ = C_V/C_P = 1/γ, and fraction going into work is ΔW/ΔQ = 1 − 1/γ', b:'Isobaric work ratio ΔW/ΔQ = 1 − 1/γ holds ONLY when no phase change occurs' },
    { n:'Polytropic Process (P V^x = constant)', f:'W = n R (T₁ − T₂) / (x − 1) ; C = C_V + R / (1 − x) = R/(γ − 1) + R/(1 − x)', u:'J, J mol⁻¹ K⁻¹', s:'Special cases: x = 0 (isobaric), x = 1 (isothermal), x = γ (adiabatic), x → ∞ (isochoric)', b:'For 1 < x < γ, molar heat capacity C is NEGATIVE (temperature drops even as heat is added because gas expands strongly)' },
    { n:'Cyclic Process & Indicator Diagram Area', f:'ΔU_cycle = 0  ⇒  Q_net = W_net = ∮ P dV = Enclosed Loop Area', u:'J', s:'Clockwise loop on P–V (or V–P? Wait: if P is on y-axis and V on x-axis, clockwise is +W; if V is on y-axis and P on x-axis, anticlockwise is +W!)', b:'Area of an ellipse on P–V graph with ranges ΔP and ΔV is W = (π/4) ΔP ΔV (remember the ¼ factor for diameters!)' },
    { n:'Heat Engine Efficiency & Carnot Cycle', f:'η = W / Q₁ = 1 − Q₂ / Q₁ ; η_Carnot = 1 − T₂ / T₁', u:'dimensionless', s:'T₁ = source temperature (MUST be in Kelvin!), T₂ = sink temperature (in Kelvin!); Carnot cycle = 2 isothermals + 2 adiabatics', b:'100% efficiency (η = 1) is impossible unless T₂ = 0 K (unattainable by Third Law / Kelvin-Planck Second Law)' },
    { n:'Refrigerator / Heat Pump Coefficient of Performance', f:'β (COP) = Q₂ / W = Q₂ / (Q₁ − Q₂) = T₂ / (T₁ − T₂) = (1 − η) / η', u:'dimensionless', s:'Q₂ is heat extracted from the COLD reservoir at T₂; W = Q₁ − Q₂ is external work input', b:'COP β can be much greater than 1 (typically 3 to 6), whereas engine efficiency η is always strictly < 1' }
  ],

  traps:[
    { t:'At any point of intersection on a P–V diagram, the adiabatic curve is ALWAYS steeper than the isothermal curve by a factor of γ: Slope_adiabatic = γ × Slope_isothermal', c:'Differentiating PV = const gives dP/dV = −P/V, whereas differentiating PV^γ = const gives dP/dV = −γ(P/V)', tag:'Graph Trap' },
    { t:'If the graph has Volume V on the vertical y-axis and Pressure P on the horizontal x-axis (inverted axes!), a CLOCKWISE loop represents NEGATIVE net work (compression), and an ANTICLOCKWISE loop represents POSITIVE net work!', c:'Work is ∫ P dV: expansion (increasing V) must occur at higher P than compression (decreasing V) for net work to be positive', tag:'Graph Trap' },
    { t:'In an isothermal free expansion of an ideal gas into an evacuated chamber (vacuum) with insulated walls, ΔQ = 0, ΔW = 0, ΔU = 0, and ΔT = 0, yet the process is BOTH isothermal and adiabatic (and completely irreversible, so PV^γ = const does NOT hold!)', c:'External opposing pressure is P_ext = 0 so W = 0, walls are insulated so Q = 0, hence ΔU = 0 ⇒ T_final = T_initial', tag:'NCERT Exception' },
    { t:'Lowering the sink temperature T₂ by ΔT increases Carnot engine efficiency MORE effectively than raising the source temperature T₁ by the exact same ΔT', c:'Compare η\' = 1 − (T₂ − ΔT)/T₁ = η + ΔT/T₁ with η\'\' = 1 − T₂/(T₁ + ΔT) = η + ΔT·T₂/[T₁(T₁+ΔT)]; since T₂ < T₁ + ΔT, η\' > η\'\'', tag:'Concept Trap' },
    { t:'Change in internal energy ΔU = n C_V ΔT is ALWAYS valid for an ideal gas across ANY thermodynamic process (isobaric, isothermal, adiabatic, or arbitrary), NOT just for an isochoric process!', c:'Internal energy U of an ideal gas is a state function of temperature T alone, so ΔU between T₁ and T₂ is path-independent', tag:'Concept Trap' },
    { t:'Leaving the door of a running refrigerator wide open inside a closed, thermally insulated room causes the average room temperature to RISE (warm up), NOT cool down!', c:'The refrigerator rejects Q₁ = Q₂ + W to the room while absorbing only Q₂ from inside the cabinet; the net electrical work W is dissipated as extra heat into the room', tag:'Concept Trap' },
    { t:'For equal expansion from (P₀, V₁) to final volume V₂, work done is maximum in Isobaric, intermediate in Isothermal, and minimum in Adiabatic (W_isobaric > W_isothermal > W_adiabatic)', c:'From (P₀, V₁), the isobar stays horizontal at P₀, the isotherm drops as 1/V, and the steeper adiabat drops fastest as 1/V^γ, enclosing the smallest area under P–V', tag:'Order Inversion' },
    { t:'For equal compression from (P₀, V₁) to a smaller volume V₂, the magnitude of work required is maximum in Adiabatic, intermediate in Isothermal, and minimum in Isobaric (|W_adia| > |W_iso| > |W_isobar|)', c:'Moving left to smaller V, the steeper adiabat rises ABOVE the isotherm, requiring greater compressive work', tag:'Order Inversion' }
  ],

  flows:[
    { t:'P–V Indicator Diagram & Cyclic Process Analysis Pipeline',
      chain:[
        'Check axis labels FIRST: Standard (P on y-axis, V on x-axis) vs Swapped (V on y-axis, P on x-axis)',
        'For each leg: V increasing → W > 0; V decreasing → W < 0; V constant → W = 0',
        'For complete cycle: ΔU_cycle = 0, so Q_net = W_net = ± Area enclosed (use π/4 × ΔP × ΔV for elliptical/circular loops)',
        'To compute thermal efficiency of a cycle: η = W_net / Q_absorbed (sum ONLY the positive ΔQ_in legs in the denominator, NEVER Q_net!)'
      ]
    },
    { t:'Identifying the Four Standard Thermodynamic Processes',
      root:'Check which thermodynamic variable or transfer is held zero/constant',
      br:[
        { l:'ΔT = 0 (Isothermal)', n:['ΔU = 0 ⇒ ΔQ = ΔW = nRT ln(V₂/V₁)', 'PV = constant ; C = ∞'] },
        { l:'ΔQ = 0 (Adiabatic)', n:['ΔU = −ΔW ⇒ expansion cools gas (ΔT < 0), compression heats gas (ΔT > 0)', 'PV^γ = constant ; TV^(γ−1) = constant ; C = 0'] },
        { l:'ΔV = 0 (Isochoric)', n:['ΔW = 0 ⇒ ΔQ = ΔU = n C_V ΔT', 'P / T = constant (Gay-Lussac law) ; vertical line on P–V'] },
        { l:'ΔP = 0 (Isobaric)', n:['ΔW = P ΔV = n R ΔT ; ΔQ = n C_P ΔT ; ΔU = n C_V ΔT', 'Ratio ΔU : ΔW : ΔQ = C_V : R : C_P = 1 : (γ − 1) : γ'] }
      ]
    },
    { t:'Second Law of Thermodynamics Equivalence Map',
      root:'Why ΔQ = ΔU + ΔW alone cannot govern the direction of spontaneous processes',
      br:[
        { l:'Kelvin–Planck Statement (Heat Engine Limit)', n:['No cyclic process can convert 100% of heat absorbed from a single reservoir completely into mechanical work (Q₂ > 0 always, so η < 1)'] },
        { l:'Clausius Statement (Refrigerator Limit)', n:['Heat cannot flow spontaneously from a colder body to a hotter body without external work W being performed on the system (COP < ∞)'] }
      ]
    }
  ],

  lab:[
    { t:'Clement & Desormes Adiabatic γ Determination', d:'Slightly compressed air in a large carboy is allowed to expand suddenly (adiabatically) to atmospheric pressure by opening a wide stopcock briefly, and then warmed back isochorically to room temperature; manometer heights h₁ and h₂ give γ = h₁ / (h₁ − h₂).' },
    { t:'Bicycle Pump / Fire Syringe Adiabatic Heating', d:'Rapidly pushing the piston down compresses air with negligible time for heat escape (ΔQ ≈ 0), so work done on the gas (−ΔW > 0) goes directly into ΔU > 0, making the pump barrel hot.' },
    { t:'CO₂ Fire Extinguisher Nozzle Adiabatic Cooling', d:'High-pressure CO₂ gas expanding rapidly through a nozzle does positive work against atmospheric pressure at the expense of its internal energy (ΔU = −ΔW < 0), cooling it enough to form dry ice snow.' },
    { t:'Joule\'s Mechanical Equivalent of Heat Paddle-Wheel', d:'Falling weights turn paddles churning water in an insulated calorimeter: 1 cal of thermal energy is consistently produced per 4.186 J of mechanical work dissipated.' }
  ],

  pairs:[
    { g:'Thermodynamic Process → Molar Heat Capacity (C) & Bulk Modulus (B)', a:'Isothermal process (T = constant)', b:'C = ∞  and  B = P' },
    { g:'Thermodynamic Process → Molar Heat Capacity (C) & Bulk Modulus (B)', a:'Adiabatic process (Q = constant)', b:'C = 0  and  B = γ P' },
    { g:'Thermodynamic Process → Molar Heat Capacity (C) & Bulk Modulus (B)', a:'Isochoric process (V = constant)', b:'C = C_V = fR/2  and  B = ∞' },
    { g:'Thermodynamic Process → Molar Heat Capacity (C) & Bulk Modulus (B)', a:'Isobaric process (P = constant)', b:'C = C_P = (f/2 + 1)R  and  B = 0' },
    { g:'Isobaric Expansion Quantity → Exact Ratio for Ideal Gas', a:'Fraction of heat supplied that does external work (ΔW / ΔQ)', b:'1 − 1/γ = R / C_P' },
    { g:'Isobaric Expansion Quantity → Exact Ratio for Ideal Gas', a:'Fraction of heat supplied stored as internal energy (ΔU / ΔQ)', b:'1 / γ = C_V / C_P' },
    { g:'Isobaric Expansion Quantity → Exact Ratio for Ideal Gas', a:'Ratio of work done to increase in internal energy (ΔW / ΔU)', b:'γ − 1 = R / C_V' },
    { g:'Isobaric Expansion Quantity → Exact Ratio for Ideal Gas', a:'Ratio of adiabatic P–V slope to isothermal P–V slope', b:'γ = C_P / C_V' },
    { g:'Isobaric Expansion Quantity → Exact Ratio for Ideal Gas', a:'Relation between Carnot efficiency η and Refrigerator COP β', b:'β = (1 − η) / η  ⇔  η = 1 / (1 + β)' }
  ],

  orders:[
    { q:'Decreasing work done BY an ideal gas when expanding from the same initial state (P₀, V₁) to the same final volume V₂', s:['Isobaric expansion', 'Isothermal expansion', 'Adiabatic expansion (diatomic, γ = 1.4)', 'Adiabatic expansion (monoatomic, γ = 1.67)'], sep:'>', why:'On a P–V diagram starting from (P₀, V₁) and moving right to V₂, a smaller exponent x in PV^x = const keeps the curve higher and encloses greater area: x=0 (isobaric) > x=1 (isothermal) > x=1.4 > x=1.67.' },
    { q:'Increasing final pressure P₂ when an ideal gas at (P₁, V₁) is compressed to half its volume (V₂ = V₁/2)', s:['Isobaric compression (P₂ = P₁)', 'Isothermal compression (P₂ = 2 P₁)', 'Adiabatic compression of diatomic gas (P₂ = 2^1.4 P₁)', 'Adiabatic compression of monoatomic gas (P₂ = 2^1.67 P₁)'], sep:'<', why:'During compression to V₁/2, P₂ = P₁ × 2^x increases with exponent x: 2⁰ < 2¹ < 2^1.4 < 2^1.67.' }
  ],

  facts:{
    T:[
      'Internal energy U, pressure P, volume V, and temperature T are thermodynamic state variables whose changes depend only on the initial and final states, whereas heat Q and work W are path-dependent quantities.',
      'The Zeroth Law of Thermodynamics provides the fundamental basis for defining empirical temperature and constructing thermometers.',
      'In a cyclic process, the system returns to its initial thermodynamic state, so the net change in internal energy ΔU is strictly zero and the net heat absorbed equals the net work done.',
      'According to Carnot\'s theorem, all reversible heat engines operating between the same two temperatures T₁ and T₂ have the exact same efficiency η = 1 − T₂/T₁, completely independent of the working substance.',
      'When an ideal gas undergoes a reversible adiabatic expansion, it does positive work (ΔW > 0) at the expense of its internal energy (ΔU = −ΔW < 0), so its temperature falls.',
      'In an isobaric expansion of a monoatomic ideal gas (γ = 5/3), 60% (3/5) of the heat supplied goes into increasing internal energy and 40% (2/5) goes into doing external work.',
      'Quasi-static processes are idealized infinitely slow processes in which the system remains infinitesimally close to thermodynamic equilibrium at every stage.',
      'Even if a process is frictionless and quasi-static, heat transfer across a finite temperature difference is irreversible.'
    ],
    F:[
      'In an isothermal expansion of an ideal gas, the heat absorbed by the gas goes entirely into increasing its internal energy.',
      'The molar heat capacity of a gas has a single fixed value regardless of the thermodynamic process it undergoes.',
      'A Carnot engine operating between 100 °C and 50 °C has an efficiency of η = 1 − 50/100 = 50%.',
      'The internal energy of an ideal gas increases during an isothermal expansion because its volume increases.',
      'In a P–V indicator diagram, the isothermal curve is steeper than the adiabatic curve passing through the same point.',
      'For an adiabatic process of an ideal gas, the product of pressure and temperature satisfies P T^γ = constant.',
      'The First Law of Thermodynamics prohibits a heat engine from converting 100% of absorbed heat into work in a cyclic process.',
      'When an ideal gas expands into a vacuum (free expansion), its temperature drops according to T V^(γ−1) = constant.'
    ]
  },

  mcq:[
    { q:'An ideal monoatomic gas (γ = 5/3) is compressed SUDDENLY (adiabatically) to 1/8th of its initial volume. If the initial pressure is P₀ and initial temperature is T₀, the final pressure and final temperature are respectively:',
      o:['32 P₀ and 4 T₀', '8 P₀ and 2 T₀', '32 P₀ and 2 T₀', '16 P₀ and 4 T₀'],
      a:0, tag:'Calculation Trap',
      sol:['For an adiabatic process with γ = 5/3 and V₁/V₂ = 8 = 2³:', 'P₂ = P₀ (V₁/V₂)^γ = P₀ (2³)^(5/3) = 2⁵ P₀ = 32 P₀', 'T₂ = T₀ (V₁/V₂)^(γ−1) = T₀ (2³)^(2/3) = 2² T₀ = 4 T₀.']
    },
    { q:'When 100 J of heat is given to an ideal diatomic gas (γ = 7/5 = 1.4) at constant pressure, the increase in its internal energy ΔU and the external work done ΔW by the gas are respectively:',
      o:['71.4 J and 28.6 J', '60 J and 40 J', '50 J and 50 J', '28.6 J and 71.4 J'],
      a:0, tag:'Calculation Trap',
      sol:['In an isobaric process: ΔU / ΔQ = C_V / C_P = 1 / γ = 5 / 7', 'ΔU = (5/7) × 100 J = 71.4 J', 'ΔW = ΔQ − ΔU = (1 − 5/7) × 100 = (2/7) × 100 = 28.6 J.']
    },
    { q:'A Carnot engine having an efficiency of 1/10 as a heat engine is used as a refrigerator. If the work done on the system is 10 J, the amount of thermal energy absorbed from the cold reservoir at lower temperature is:',
      o:['90 J', '100 J', '99 J', '1 J'],
      a:0, tag:'Concept Trap',
      sol:['Relation between COP β and efficiency η: β = (1 − η) / η', 'For η = 1/10: β = (1 − 1/10) / (1/10) = 9', 'Since β = Q₂ / W, heat extracted from cold reservoir Q₂ = β × W = 9 × 10 J = 90 J.']
    },
    { q:'An ideal gas is taken around a circular cycle on a P–V diagram where pressure varies between 100 kPa and 300 kPa and volume varies between 2 L and 6 L in a clockwise sense (with P on y-axis and V on x-axis). The net work done by the gas in one complete cycle is:',
      o:['200π J', '800π J', '400π J', '100π J'],
      a:0, tag:'Graph Trap',
      sol:['Pressure diameter ΔP = 300 − 100 = 200 kPa = 2 × 10⁵ Pa; Volume diameter ΔV = 6 − 2 = 4 L = 4 × 10⁻³ m³', 'Area of ellipse/circle in terms of diameters: W = (π / 4) × ΔP × ΔV  [Do NOT forget the 1/4 factor for radii!]', 'W = (π / 4) × (2 × 10⁵) × (4 × 10⁻³) = 200π J.']
    },
    { q:'During an adiabatic process, the pressure of an ideal gas is found to be proportional to the cube of its absolute temperature (P ∝ T³). The ratio of specific heats C_P / C_V (γ) for the gas is:',
      o:['3 / 2', '4 / 3', '5 / 3', '7 / 5'],
      a:0, tag:'Calculation Trap',
      sol:['For an adiabatic process, P^(1−γ) T^γ = constant  ⇒  P ∝ T^(γ / (γ − 1))', 'Given P ∝ T³, equate exponents: γ / (γ − 1) = 3', 'γ = 3γ − 3  ⇒  2γ = 3  ⇒  γ = 3 / 2 = 1.5.']
    },
    { q:'A Carnot engine operates between a source at 500 K and a sink at 300 K. If the engine absorbs 1000 J of heat per cycle from the source, the heat rejected to the sink per cycle is:',
      o:['600 J', '400 J', '500 J', '300 J'],
      a:0, tag:'Concept Trap',
      sol:['For a reversible Carnot cycle: Q₂ / Q₁ = T₂ / T₁', 'Q₂ = 1000 × (300 / 500) = 600 J (while work output W = Q₁ − Q₂ = 400 J).']
    }
  ],

  gens:[
    function(R){
      var t1C = R.pick([127, 227, 327, 527]);
      var t2C = R.pick([27, 77, 127]);
      if (t2C >= t1C) t2C = 27;
      var t1K = t1C + 273;
      var t2K = t2C + 273;
      var ans = ((t1K - t2K) / t1K) * 100;
      var d1 = ((t1C - t2C) / t1C) * 100;
      var d2 = (t2K / t1K) * 100;
      var d3 = ((t1K - t2K) / t2K) * 100;
      return {
        q:'A Carnot heat engine operates between a hot source at '+t1C+' °C and a cold sink at '+t2C+' °C. Its thermal efficiency (in %) is:',
        ans:ans, d:[d1, d2, d3], u:'%', tag:'Unit Conversion Trap',
        sol:[
          'Convert temperatures to Kelvin FIRST: T₁ = '+t1C+' + 273 = '+t1K+' K, T₂ = '+t2C+' + 273 = '+t2K+' K',
          'η = (1 − T₂/T₁) × 100% = (1 − '+t2K+'/'+t1K+') × 100% = '+R.f(ans)+'%'
        ]
      };
    },
    function(R){
      var qIn = R.int(300, 800);
      var wBy = R.int(100, 500);
      var isComp = R.pick([true, false]);
      if (isComp) {
        var ansC = qIn + wBy;
        var d1C = qIn - wBy;
        var d2C = wBy - qIn;
        var d3C = qIn;
        return {
          q:'In a thermodynamic process, '+qIn+' J of heat is supplied TO a gas while '+wBy+' J of mechanical work is done ON the gas (compression). According to the First Law of Thermodynamics, the change in internal energy ΔU of the gas is:',
          ans:ansC, d:[d1C, d2C, d3C], u:'J', tag:'Sign Convention',
          sol:[
            'First Law (Physics convention): ΔQ = ΔU + ΔW, where ΔW is work done BY the gas',
            'Since work is done ON the gas, ΔW = −'+wBy+' J while ΔQ = +'+qIn+' J',
            'ΔU = ΔQ − ΔW = '+qIn+' − (−'+wBy+') = +'+ansC+' J'
          ]
        };
      } else {
        var ansE = qIn - wBy;
        var d1E = qIn + wBy;
        var d2E = wBy - qIn;
        var d3E = wBy;
        if (d2E === ansE) d2E = ansE - 50;
        return {
          q:'In a thermodynamic process, '+qIn+' J of heat is absorbed BY a gas and the gas performs '+wBy+' J of external work in expanding. The change in internal energy ΔU of the gas is:',
          ans:ansE, d:[d1E, d2E, d3E], u:'J', tag:'Sign Convention',
          sol:[
            'By the First Law of Thermodynamics: ΔQ = ΔU + ΔW',
            'Here ΔQ = +'+qIn+' J and ΔW = +'+wBy+' J (expansion work done by gas)',
            'ΔU = ΔQ − ΔW = '+qIn+' − '+wBy+' = '+ansE+' J'
          ]
        };
      }
    },
    function(R){
      var qIn = R.pick([140, 210, 280, 350, 420]);
      var gas = R.pick([
        { name:'monoatomic', g:5/3, fW:0.4, fU:0.6 },
        { name:'rigid diatomic', g:7/5, fW:2/7, fU:5/7 }
      ]);
      var ans = qIn * gas.fW;
      var d1 = qIn * gas.fU;
      var d2 = qIn * 0.5;
      var d3 = qIn / gas.g;
      if (d3 === d1) d3 = qIn * 0.25;
      return {
        q:'If '+qIn+' J of heat is added to an ideal '+gas.name+' gas at constant pressure (isobaric process), the external work ΔW performed by the gas during the expansion is:',
        ans:ans, d:[d1, d2, d3], u:'J', tag:'Calculation Trap',
        sol:[
          'In an isobaric process: ΔW / ΔQ = nRΔT / (nC_PΔT) = R / C_P = 1 − 1/γ',
          'For a '+gas.name+' gas, 1 − 1/γ = '+R.f(gas.fW),
          'ΔW = '+qIn+' × '+R.f(gas.fW)+' = '+R.f(ans)+' J'
        ]
      };
    },
    function(R){
      var t2 = R.pick([250, 260, 270, 280]);
      var dt = R.pick([20, 25, 30, 40, 50]);
      var t1 = t2 + dt;
      var w = R.pick([100, 150, 200, 250]);
      var cop = t2 / dt;
      var ans = cop * w;
      var d1 = (t1 / dt) * w;
      var d2 = (dt / t2) * w;
      var d3 = ((t1 - t2) / t1) * w;
      return {
        q:'An ideal Carnot refrigerator extracts heat from a cold chamber at '+t2+' K and rejects heat to the surrounding room at '+t1+' K. If the electric motor supplies '+w+' J of mechanical work per cycle, the heat extracted from the cold chamber per cycle is:',
        ans:ans, d:[d1, d2, d3], u:'J', tag:'Calculation Trap',
        sol:[
          'Coefficient of performance β = T₂ / (T₁ − T₂) = '+t2+' / ('+t1+' − '+t2+') = '+R.f(cop),
          'Heat extracted from cold reservoir Q₂ = β × W = '+R.f(cop)+' × '+w+' = '+R.f(ans)+' J'
        ]
      };
    },
    function(R){
      var n = R.pick([1, 2, 3, 4]);
      var dt = R.pick([30, 50, 60, 100]);
      var gas = R.pick([
        { name:'monoatomic (γ = 5/3)', g:5/3, gm1:2/3 },
        { name:'diatomic (γ = 7/5)', g:7/5, gm1:2/5 }
      ]);
      var Rval = 8.31;
      var ans = (n * Rval * dt) / gas.gm1;
      var d1 = n * Rval * dt;
      var d2 = (n * Rval * dt) / gas.g;
      var d3 = n * Rval * dt * gas.gm1;
      return {
        q:'When '+n+' mole(s) of an ideal '+gas.name+' gas expands adiabatically and reversibly, its temperature falls by '+dt+' K. Taking R = 8.31 J mol⁻¹ K⁻¹, the work done by the gas during this adiabatic expansion is:',
        ans:ans, d:[d1, d2, d3], u:'J', tag:'Calculation Trap',
        sol:[
          'Adiabatic work done by gas: W = n R (T₁ − T₂) / (γ − 1)',
          'Here γ − 1 = '+R.f(gas.gm1)+' and ΔT = T₁ − T₂ = '+dt+' K',
          'W = ('+n+' × 8.31 × '+dt+') / '+R.f(gas.gm1)+' = '+R.f(ans)+' J'
        ]
      };
    },
    function(R){
      var dpKpa = R.pick([100, 200, 300, 400]);
      var dvL = R.pick([2, 3, 4, 5, 6]);
      var ans = 0.5 * dpKpa * dvL;
      var d1 = dpKpa * dvL;
      var d2 = 0.5 * dpKpa * dvL * 1000;
      var d3 = 0.25 * dpKpa * dvL;
      return {
        q:'An ideal gas undergoes a cyclic process represented by a right-angled triangle on a P–V diagram (with P on the vertical axis and V on the horizontal axis, traced clockwise). If the pressure span (height) of the triangle is '+dpKpa+' kPa and the volume span (base) is '+dvL+' L, the net work done by the gas in one cycle is:',
        ans:ans, d:[d1, d2, d3], u:'J', tag:'Graph Trap',
        sol:[
          'Note that 1 kPa × 1 L = (10³ Pa) × (10⁻³ m³) = 1 J directly!',
          'Net work in a clockwise cycle = Area of triangle = ½ × base × height',
          'W = ½ × '+dvL+' L × '+dpKpa+' kPa = '+R.f(ans)+' J'
        ]
      };
    }
  ]
});

/* ==========================================================================
   UNIT P9: KINETIC THEORY OF GASES
   ========================================================================== */
NEET.reg({
  id:'P9',
  subj:'Physics',
  type:'num',
  name:'Kinetic Theory of Gases',
  syl:'Equation of state of a perfect gas, work done on compressing a gas, Kinetic theory of gases - assumptions, the concept of pressure. Kinetic interpretation of temperature: RMS speed of gas molecules: Degrees of freedom. Law of equipartition of energy and applications to specific heat capacities of gases; Mean free path. Avogadro number.',
  kw:['kinetic theory', 'rms speed', 'mean free path', 'degrees of freedom', 'equipartition', 'molar heat capacity', 'monatomic', 'diatomic', 'avogadro', 'maxwell speed'],

  formulas:[
    { n:'Ideal Gas Equation (Microscopic)', f:'P V = N k_B T = n R T', u:'Pa · m³ (J)', s:'k_B = R / N_A = 1.38 × 10⁻²³ J K⁻¹; N = total molecule count', b:'Fails at high pressure and low temperature where intermolecular forces and finite molecular volume become significant.' },
    { n:'Pressure of an Ideal Gas', f:'P = (1/3) ρ v_rms² = (1/3) (M_total / V) v_rms²', u:'N m⁻² (Pa)', s:'ρ is mass density of the gas; v_rms is root-mean-square speed', b:'Assumes perfectly elastic collisions, negligible duration of collisions, and zero intermolecular potential energy.' },
    { n:'Kinetic Interpretation of Temperature', f:'E_k = (3/2) k_B T  (per molecule);  E_total = (3/2) n R T  (per mole)', u:'J', s:'Applies solely to translational kinetic energy of gas particles', b:'Does NOT include rotational or vibrational energy; valid strictly for classical non-relativistic regime.' },
    { n:'RMS Speed of Gas Molecules', f:'v_rms = √(3 R T / M) = √(3 k_B T / m)', u:'m s⁻¹', s:'M is molar mass in kg mol⁻¹ (e.g. O₂ = 0.032 kg mol⁻¹); T in Kelvin', b:'Fails if molar mass M is entered in grams per mole instead of SI kg per mole.' },
    { n:'Average Speed of Molecules', f:'v_avg = √(8 R T / (π M)) ≈ 0.921 v_rms', u:'m s⁻¹', s:'Mean of speed magnitude distribution; vector average velocity is identically 0', b:'Valid only for Maxwell-Boltzmann equilibrium distribution in 3 dimensions.' },
    { n:'Most Probable Speed', f:'v_mp = √(2 R T / M) ≈ 0.816 v_rms', u:'m s⁻¹', s:'Speed corresponding to the peak of the Maxwellian distribution curve', b:'Ratio v_mp : v_avg : v_rms = √2 : √(8/π) : √3 = 1 : 1.128 : 1.225; invariant of T or gas.' },
    { n:'Law of Equipartition of Energy', f:'U = (f / 2) n R T', u:'J', s:'f is active degrees of freedom (mono=3, rigid dia=5, non-linear poly=6)', b:'Fails at low temperatures where quantum freeze-out prevents rotational or vibrational excitation.' },
    { n:'Molar Heat Capacities & Adiabatic Index', f:'C_v = (f / 2) R,  C_p = (1 + f/2) R,  γ = C_p / C_v = 1 + 2/f', u:'J mol⁻¹ K⁻¹', s:'Mayer relation: C_p − C_v = R for 1 mole of an ideal gas', b:'Applies only to ideal gases; fails for real gases where internal energy depends on volume.' },
    { n:'Mean Free Path of Gas Molecules', f:'λ = 1 / (√2 π n_v d²) = k_B T / (√2 π d² P)', u:'m', s:'n_v = N/V is number density; d is molecular collision diameter', b:'Fails at extremely low density (vacuum) where collisions with container walls dominate over intermolecular collisions.' }
  ],

  traps:[
    { t:'At constant volume in a sealed container, increasing the gas temperature leaves the mean free path λ strictly unchanged.', c:'Mean free path depends exclusively on number density n_v = N/V and diameter d (λ = 1/(√2 π n_v d²)); since neither N nor V changes in a rigid sealed vessel, λ remains constant.', tag:'Zero-Case' },
    { t:'The vector average velocity of gas molecules in random thermal equilibrium is identically ZERO, while average speed is non-zero.', c:'Thermal motion is completely isotropic in all spatial directions, so molecular velocity vectors cancel pair-wise (⟨v_x⟩ = ⟨v_y⟩ = ⟨v_z⟩ = 0), though scalar speed magnitude is √(8RT/πM).', tag:'Concept Trap' },
    { t:'Doubling the pressure of an ideal gas at constant temperature has ZERO effect on the RMS speed of its molecules.', c:'v_rms = √(3RT/M); since temperature is constant, v_rms does not change. When P doubles at constant T, density ρ also doubles, leaving the ratio P/ρ unchanged.', tag:'Zero-Case' },
    { t:'Linear triatomic CO₂ has 5 active degrees of freedom at room temperature (like a diatomic gas), whereas non-linear H₂O has 6.', c:'Linear molecules have only 2 rotational axes perpendicular to the molecular axis (moment of inertia about bond axis is negligible), while non-linear molecules possess 3 independent rotational axes.', tag:'NCERT Exception' },
    { t:'When calculating v_rms = √(3RT/M), entering molar mass M in grams rather than kilograms leads to an answer that is too large by a factor of √1000 ≈ 31.6.', c:'SI base unit of mass is the kilogram; molar mass of oxygen O₂ must be entered as 0.032 kg mol⁻¹, not 32.', tag:'Unit Conversion Trap' },
    { t:'Vibrational degrees of freedom contribute 2 terms to energy per mode (one kinetic and one potential: k_B T total), unlike translational/rotational modes which contribute ½ k_B T each.', c:'A harmonic vibrational mode possesses both kinetic energy (½ m v²) and elastic potential energy (½ k x²), each contributing ½ k_B T to mean energy by equipartition.', tag:'NCERT Exception' },
    { t:'The adiabatic exponent γ for a mixture of n₁ moles of gas 1 and n₂ moles of gas 2 is NOT simply the weighted average (n₁γ₁ + n₂γ₂)/(n₁ + n₂).', c:'γ_mix must be calculated from heat capacities: γ_mix = C_p,mix / C_v,mix = (n₁ C_p1 + n₂ C_p2) / (n₁ C_v1 + n₂ C_v2).', tag:'Calculation Trap' },
    { t:'Two different gases at the same temperature and pressure having equal volumes contain identical numbers of molecules, but have different internal energies if their atomicity differs.', c:'Avogadro law guarantees equal number of molecules N, but total internal energy U = (f/2) N k_B T depends directly on the degrees of freedom f.', tag:'Concept Trap' }
  ],

  flows:[
    { t:'Molecular Speeds Magnitude Hierarchy', chain:['v_mp = √(2RT/M) = 1.414 √(RT/M)','v_avg = √(8RT/πM) = 1.596 √(RT/M)','v_rms = √(3RT/M) = 1.732 √(RT/M)'] },
    { t:'Degrees of Freedom & γ Decision Tree', root:'Determine Molecular Geometry & Temperature',
      br:[
        { l:'Monatomic (He, Ne, Ar)', n:['f = 3 (trans)','C_v = 1.5 R','C_p = 2.5 R','γ = 5/3 ≈ 1.67'] },
        { l:'Diatomic / Linear (H₂, O₂, N₂, CO₂ at 300K)', n:['f = 5 (3 trans + 2 rot)','C_v = 2.5 R','C_p = 3.5 R','γ = 7/5 = 1.40'] },
        { l:'Non-linear Polyatomic (H₂O, NH₃, CH₄)', n:['f = 6 (3 trans + 3 rot)','C_v = 3 R','C_p = 4 R','γ = 4/3 ≈ 1.33'] }
      ]
    },
    { t:'Mean Free Path Response to Thermodynamic Changes', root:'Formula: λ = 1 / (√2 π n_v d²) = k_B T / (√2 π d² P)',
      br:[
        { l:'Rigid Sealed Container (V = const)', n:['Number density n_v = N/V constant','Heating (T increases, P increases)','λ remains strictly CONSTANT'] },
        { l:'Constant Pressure Expansion (P = const)', n:['Gas heated at constant P','V increases, n_v decreases','λ increases linearly with T'] }
      ]
    }
  ],

  lab:[
    { t:'Dalton Law of Partial Pressures Apparatus', d:'Total pressure of a mixture of non-reacting gases equals the sum of partial pressures: P = Σ P_i = (Σ n_i) R T / V.' },
    { t:'Graham Law of Gaseous Diffusion', d:'Rate of effusion/diffusion r ∝ 1/√M ∝ v_rms. Lighter gas (e.g. NH₃) diffuses faster than heavier gas (e.g. HCl), forming NH₄Cl ring closer to the HCl end.' },
    { t:'Clement and Desormes Apparatus', d:'Measures adiabatic index γ = C_p / C_v by sudden adiabatic expansion of compressed gas followed by isochoric return to room temperature.' },
    { t:'Kundt Tube Acoustic Resonance', d:'Measures speed of sound in various gases v = √(γ P / ρ) to experimentally determine the atomicity and degrees of freedom of unknown gases.' }
  ],

  pairs:[
    { g:'Gas Molecule Type at Room Temperature → (Degrees of Freedom f, γ)', a:'Monatomic Gas (Helium He, Argon Ar)', b:'f = 3, C_v = 1.5 R, γ = 1.67 (5/3)' },
    { g:'Gas Molecule Type at Room Temperature → (Degrees of Freedom f, γ)', a:'Rigid Diatomic Gas (Nitrogen N₂, Oxygen O₂)', b:'f = 5, C_v = 2.5 R, γ = 1.40 (7/5)' },
    { g:'Gas Molecule Type at Room Temperature → (Degrees of Freedom f, γ)', a:'Non-linear Polyatomic Gas (Water vapour H₂O)', b:'f = 6, C_v = 3.0 R, γ = 1.33 (4/3)' },
    { g:'Gas Molecule Type at Room Temperature → (Degrees of Freedom f, γ)', a:'Vibrating Diatomic Gas at High T (>1000 K)', b:'f = 7, C_v = 3.5 R, γ = 1.29 (9/7)' },

    { g:'Thermodynamic Condition Change → Effect on Mean Free Path (λ)', a:'Pressure doubled at constant temperature', b:'Mean free path is halved (λ ∝ 1/P)' },
    { g:'Thermodynamic Condition Change → Effect on Mean Free Path (λ)', a:'Temperature doubled in a sealed rigid vessel (V = const)', b:'Mean free path is strictly unchanged (λ ∝ V/N)' },
    { g:'Thermodynamic Condition Change → Effect on Mean Free Path (λ)', a:'Absolute temperature doubled at constant pressure', b:'Mean free path is doubled (λ ∝ T)' },
    { g:'Thermodynamic Condition Change → Effect on Mean Free Path (λ)', a:'Molecular collision diameter d doubled at constant P and T', b:'Mean free path is reduced to one-fourth (λ ∝ 1/d²)' }
  ],

  orders:[
    { q:'Arrange the characteristic molecular speeds of an ideal gas at temperature T in ascending order of magnitude', s:['v_most_probable (√(2RT/M))', 'v_average (√(8RT/πM))', 'v_rms (√(3RT/M))'], sep:'<' },
    { q:'Arrange the following gases at 300 K in decreasing order of their RMS speed (v_rms)', s:['H₂ (M = 2)', 'He (M = 4)', 'N₂ (M = 28)', 'O₂ (M = 32)', 'CO₂ (M = 44)'], sep:'>' },
    { q:'Arrange the atomicity groups in decreasing order of their adiabatic index (γ = C_p / C_v)', s:['Monatomic (γ = 1.67)', 'Rigid Diatomic (γ = 1.40)', 'Non-linear Polyatomic (γ = 1.33)'], sep:'>' }
  ],

  facts:{
    T:[
      'The pressure exerted by an ideal gas on container walls equals one-third of the product of its mass density and the square of its RMS speed: P = (1/3) ρ v_rms².',
      'Translational kinetic energy per molecule of any ideal gas depends solely on absolute temperature and equals (3/2) k_B T, independent of molecular mass.',
      'In a rigid container of fixed volume, heating the gas changes pressure but leaves the molecular mean free path completely unaltered.',
      'According to Maxwell-Boltzmann distribution, as temperature increases, the peak of the curve shifts to higher speed and becomes broader and flatter.',
      'The average velocity vector of gas molecules in isotropic thermal equilibrium is identically zero.',
      'For a rigid diatomic molecule at room temperature, rotational motion contributes 2 degrees of freedom, making f = 5 and C_v = (5/2) R.',
      'Avogadro number represents the number of carbon-12 atoms in exactly 12 grams of carbon-12, equal to 6.022 × 10²³ mol⁻¹.',
      'At absolute zero temperature (0 K), the classical kinetic theory predicts that all molecular translational motion ceases.'
    ],
    F:[
      'Mean free path of gas molecules increases linearly with temperature in a sealed rigid container of constant volume.',
      'The RMS speed of gas molecules doubles when the gas pressure is doubled at constant temperature.',
      'Lighter gas molecules have higher average translational kinetic energy than heavier gas molecules at the exact same temperature.',
      'The ratio of most probable speed to RMS speed depends on the molar mass of the gas.',
      'Triatomic non-linear molecules such as water vapour possess 5 degrees of freedom at room temperature.',
      'The vector average velocity of gas molecules in a closed container at 300 K is equal to √(8RT/πM).',
      'The adiabatic index γ of a mixture of equal moles of monatomic and diatomic gas is equal to 1.50.',
      'Molecular collision diameter has no effect on the mean free path of gas particles.'
    ]
  },

  mcq:[
    {
      q:'At what temperature (in Kelvin) will the RMS speed of oxygen molecules (O₂, M = 32 g mol⁻¹) be equal to that of hydrogen molecules (H₂, M = 2 g mol⁻¹) at 47 °C?',
      o:['5120 K', '320 K', '1280 K', '2560 K'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'T(H₂) = 47 + 273 = 320 K.',
        'v_rms = √(3RT/M). For v_rms(O₂) = v_rms(H₂):',
        'T(O₂) / M(O₂) = T(H₂) / M(H₂)  ⇒  T(O₂) = 320 × (32 / 2) = 320 × 16 = 5120 K.'
      ]
    },
    {
      q:'An insulated container is divided into two equal compartments by a rigid partition. One compartment contains 1 mole of a monatomic gas (γ = 5/3) and the other contains 1 mole of a diatomic gas (γ = 7/5). If the partition is removed, the adiabatic exponent γ_mix of the mixture is:',
      o:['1.50', '1.40', '1.67', '1.45'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'C_v1 = (3/2)R, C_v2 = (5/2)R  ⇒  C_v,mix = (1.5R + 2.5R) / 2 = 2R.',
        'C_p,mix = C_v,mix + R = 3R.',
        'γ_mix = C_p,mix / C_v,mix = 3R / 2R = 1.50 (or 3/2).'
      ]
    },
    {
      q:'An ideal gas is enclosed in a rigid sealed vessel of constant volume V. If the temperature of the gas is raised from 300 K to 600 K, the mean free path of the gas molecules will:',
      o:['Remain unchanged', 'Double', 'Be halved', 'Increase by √2 times'],
      a:0,
      tag:'Zero-Case',
      sol:[
        'Mean free path λ = 1 / (√2 π n_v d²), where n_v = N/V.',
        'Since the vessel is rigid and closed, neither N nor V changes.',
        'Therefore, number density n_v is constant, and λ remains strictly unchanged!'
      ]
    },
    {
      q:'The total translational kinetic energy of 4.0 grams of Helium gas (monoatomic, molar mass 4 g mol⁻¹) at 127 °C is (take R = 8.31 J mol⁻¹ K⁻¹):',
      o:['4986 J', '2493 J', '7479 J', '9972 J'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Moles of He n = 4 g / 4 g mol⁻¹ = 1.0 mol.',
        'T = 127 + 273 = 400 K.',
        'Translational KE = (3/2) n R T = 1.5 × 1.0 × 8.31 × 400 = 4986 J.'
      ]
    },
    {
      q:'The ratio of the speed of sound in nitrogen gas to the RMS speed of nitrogen molecules at the same temperature is:',
      o:['√(γ/3) = √(7/15)', '√(3/γ) = √(15/7)', 'γ/3 = 7/15', '√(γ/2) = √(7/10)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Speed of sound v_sound = √(γ R T / M).',
        'RMS molecular speed v_rms = √(3 R T / M).',
        'Ratio v_sound / v_rms = √(γ / 3). For nitrogen (diatomic, γ = 7/5), ratio = √(7 / 15).'
      ]
    },
    {
      q:'If the absolute temperature of an ideal gas is quadrupled, the ratio of the new RMS speed to the original most probable speed is:',
      o:['2 √(3/2)', '2', '4 √(3/2)', '√6'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Original v_mp = √(2RT/M).',
        'New v_rms at 4T = √(3R(4T)/M) = 2 √(3RT/M).',
        'Ratio = 2 √(3RT/M) / √(2RT/M) = 2 √(3/2) = √6 ≈ 2.45.'
      ]
    }
  ],

  gens:[
    function(R){
      var tC = R.pick([27, 127, 327, 227]);
      var TK = tC + 273;
      var gas = R.pick([
        { name:'Hydrogen (H₂)', M:0.002 },
        { name:'Helium (He)', M:0.004 },
        { name:'Nitrogen (N₂)', M:0.028 },
        { name:'Oxygen (O₂)', M:0.032 }
      ]);
      var R_val = 8.314;
      var v_rms = Math.sqrt(3 * R_val * TK / gas.M);
      var d1 = Math.sqrt(2 * R_val * TK / gas.M);
      var d2 = Math.sqrt(8 * R_val * TK / (Math.PI * gas.M));
      var d3 = Math.sqrt(3 * R_val * tC / gas.M);
      return {
        q:'Calculate the RMS speed of ' + gas.name + ' molecules at ' + tC + ' °C (take R = 8.31 J mol⁻¹ K⁻¹):',
        ans:v_rms, d:[d1, d2, d3], u:'m s⁻¹',
        tag:'Calculation Trap',
        sol:[
          'Convert temperature to Kelvin: T = ' + tC + ' + 273 = ' + TK + ' K.',
          'Molar mass in SI units: M = ' + gas.M + ' kg mol⁻¹.',
          'v_rms = √(3 R T / M) = √(3 × 8.31 × ' + TK + ' / ' + gas.M + ') = ' + R.f(v_rms) + ' m s⁻¹.'
        ]
      };
    },
    function(R){
      var n = R.int(1, 4);
      var tC = R.pick([27, 77, 127]);
      var TK = tC + 273;
      var f = R.pick([3, 5, 6]);
      var gasName = f === 3 ? 'monatomic' : (f === 5 ? 'rigid diatomic' : 'non-linear polyatomic');
      var U = 0.5 * f * n * 8.314 * TK;
      var d1 = 0.5 * 3 * n * 8.314 * TK;
      var d2 = 0.5 * (f + 2) * n * 8.314 * TK;
      var d3 = 0.5 * f * n * 8.314 * tC;
      return {
        q:'Calculate the total internal energy of ' + n + ' mole(s) of an ideal ' + gasName + ' gas at ' + tC + ' °C (take R = 8.31 J mol⁻¹ K⁻¹):',
        ans:U, d:[d1, d2, d3], u:'J',
        tag:'Calculation Trap',
        sol:[
          'Degrees of freedom f = ' + f + ' for ' + gasName + ' gas.',
          'T = ' + tC + ' + 273 = ' + TK + ' K.',
          'Internal energy U = (f / 2) n R T = (' + f + '/2) × ' + n + ' × 8.31 × ' + TK + ' = ' + R.f(U) + ' J.'
        ]
      };
    },
    function(R){
      var t1C = R.pick([27, 47, 77]);
      var t1K = t1C + 273;
      var factor = R.pick([2, 3]);
      var t2K = t1K * factor * factor;
      var t2C = t2K - 273;
      var d1 = t1C * factor;
      var d2 = t1C * factor * factor;
      var d3 = t1K * factor - 273;
      return {
        q:'At ' + t1C + ' °C, the RMS speed of gas molecules is v. To what temperature in °C must the gas be heated so that its RMS speed becomes ' + factor + 'v?',
        ans:t2C, d:[d1, d2, d3], u:'°C',
        tag:'Calculation Trap',
        sol:[
          'v_rms ∝ √T  ⇒  T₂ / T₁ = (v₂ / v₁)² = ' + factor + '² = ' + (factor * factor) + '.',
          'T₁ = ' + t1C + ' + 273 = ' + t1K + ' K.',
          'T₂ = ' + (factor * factor) + ' × ' + t1K + ' = ' + t2K + ' K.',
          'In Celsius: T₂ = ' + t2K + ' − 273 = ' + t2C + ' °C.'
        ]
      };
    },
    function(R){
      var n = R.int(1, 3);
      var cv = 1.5 * 8.314;
      var cp = 2.5 * 8.314;
      var dt = R.pick([10, 20, 30, 40]);
      var q_v = n * cv * dt;
      var q_p = n * cp * dt;
      var d1 = q_p;
      var d2 = n * 8.314 * dt;
      var d3 = q_v / 2;
      return {
        q:'The heat required to raise the temperature of ' + n + ' mole(s) of a monatomic gas by ' + dt + ' K at constant volume is (R = 8.31 J mol⁻¹ K⁻¹):',
        ans:q_v, d:[d1, d2, d3], u:'J',
        tag:'Calculation Trap',
        sol:[
          'For a monatomic gas, C_v = (3/2) R = 1.5 × 8.31 = 12.465 J mol⁻¹ K⁻¹.',
          'ΔQ_v = n C_v ΔT = ' + n + ' × 12.465 × ' + dt + ' = ' + R.f(q_v) + ' J.'
        ]
      };
    },
    function(R){
      var f = R.pick([3, 5, 6]);
      var gamma = 1 + 2 / f;
      var d1 = 1 + 1 / f;
      var d2 = f / (f + 2);
      var d3 = (f + 1) / f;
      var gasLabel = f === 3 ? 'monatomic' : (f === 5 ? 'rigid diatomic' : 'non-linear polyatomic');
      return {
        q:'What is the ratio of specific heats γ = C_p / C_v for an ideal ' + gasLabel + ' gas (having ' + f + ' degrees of freedom)?',
        ans:gamma, d:[d1, d2, d3], u:'',
        tag:'Calculation Trap',
        sol:[
          'For f degrees of freedom: C_v = (f/2)R and C_p = (1 + f/2)R.',
          'γ = C_p / C_v = 1 + 2/f = 1 + 2/' + f + ' = ' + R.f(gamma) + '.'
        ]
      };
    },
    function(R){
      var pAtm = R.pick([1, 2, 4]);
      var ratio = pAtm;
      var d1 = 1 / pAtm;
      var d2 = pAtm * pAtm;
      var d3 = Math.sqrt(pAtm);
      return {
        q:'If an ideal gas at temperature T has its pressure increased from 1 atm to ' + pAtm + ' atm while temperature is kept constant, its molecular mean free path λ is changed by a factor of:',
        ans:1 / ratio, d:[ratio, d2, d3], u:'',
        tag:'Concept Trap',
        sol:[
          'At constant temperature: λ = k_B T / (√2 π d² P) ∝ 1/P.',
          'When pressure becomes ' + pAtm + ' times, mean free path becomes 1/' + pAtm + ' times the original value.'
        ]
      };
    }
  ]
});

/* ==========================================================================
   UNIT P10: OSCILLATIONS AND WAVES
   ========================================================================== */
NEET.reg({
  id:'P10',
  subj:'Physics',
  type:'num',
  name:'Oscillations and Waves',
  syl:'Oscillations and periodic motion – time period, frequency, displacement as a function of time. Periodic functions. Simple harmonic motion (S.H.M.) and its equation; phase: oscillations of a spring - restoring force and force constant: energy in S.H.M. - Kinetic and potential energies; Simple pendulum - derivation of expression for its time period; Wave motion. Longitudinal and transverse waves, speed of travelling wave. Displacement relation for a progressive wave. Principle of superposition of waves, reflection of waves. Standing waves in strings and organ pipes, fundamental mode and harmonics. Beats.',
  kw:['shm', 'simple harmonic', 'pendulum', 'spring constant', 'resonance', 'standing wave', 'organ pipe', 'harmonics', 'beats', 'superposition'],

  formulas:[
    { n:'SHM Acceleration & Equation of Motion', f:'a = −ω² x = −(k / m) x;   d²x/dt² + ω² x = 0', u:'m s⁻²', s:'Negative sign indicates restoring acceleration directed towards mean position', b:'Valid only for small displacements obeying Hooke law linear restoring force.' },
    { n:'SHM Velocity as Function of Position', f:'v = ± ω √(A² − x²)', u:'m s⁻¹', s:'Max speed v_max = ω A at mean position (x = 0); zero at extremes (x = ±A)', b:'Invalid if amplitude A is so large that non-linear restoring forces appear.' },
    { n:'Total Mechanical Energy in SHM', f:'E = K + U = (1/2) m ω² A² = (1/2) k A²', u:'J', s:'Constant at all positions: K = ½ k (A² − x²), U = ½ k x²', b:'Assumes zero non-conservative damping or dissipative forces.' },
    { n:'Time Period of Simple Pendulum', f:'T = 2π √(L / g_eff)', u:'s', s:'g_eff in accelerating lift: g + a (upward), g − a (downward), √(g² + a²) (horizontal)', b:'Fails for angular amplitudes > 10° where sin θ ≈ θ approximation breaks down.' },
    { n:'Spring Combinations Time Period', f:'T = 2π √(m / k_eff);  Series: 1/k_s = 1/k₁ + 1/k₂;  Parallel: k_p = k₁ + k₂', u:'s', s:'Cutting a spring into n equal parts increases stiffness of each piece to n k', b:'Assumes massless spring; inertia of spring adds (1/3) m_spring to effective mass.' },
    { n:'Speed of Transverse Wave on String', f:'v = √(T_tension / μ)', u:'m s⁻¹', s:'μ = m / L is linear mass density in kg m⁻¹; T_tension is tension in Newtons', b:'Valid only for small wave amplitudes and perfectly flexible strings without bending stiffness.' },
    { n:'Speed of Longitudinal (Sound) Wave', f:'v = √(B / ρ) = √(γ P / ρ)  (Laplace Correction)', u:'m s⁻¹', s:'Newton isothermal assumption gave √(P/ρ) which underestimated sound speed by ~15%', b:'Laplace adiabatic formula fails at extremely high frequencies where thermal conduction occurs.' },
    { n:'Standing Waves in Stretched Strings & Open Pipes', f:'f_n = n (v / 2L),  n = 1, 2, 3...  (All harmonics present)', u:'Hz', s:'Open organ pipe: anti-nodes at both open ends; length L includes end correction 2e', b:'End correction e ≈ 0.6 r per open end must be added for precise resonance.' },
    { n:'Standing Waves in Closed Organ Pipe', f:'f_n = (2n − 1) (v / 4L),  n = 1, 2, 3...  (Odd harmonics ONLY)', u:'Hz', s:'Closed end forms displacement node; open end forms displacement antinode', b:'Even harmonics are strictly absent; fundamental frequency is half that of identical open pipe.' },
    { n:'Beat Frequency', f:'f_beat = |f₁ − f₂|', u:'Hz', s:'Result of superposition of two waves of slightly different frequencies', b:'Beats are clearly audible to human ear only when |f₁ − f₂| ≤ 10 Hz due to persistence of hearing.' }
  ],

  traps:[
    { t:'In simple harmonic motion, kinetic energy and potential energy oscillate with TWICE the frequency of displacement: f_energy = 2 f_SHM.', c:'K = ½ k A² cos²(ωt) = ¼ k A² (1 + cos 2ωt); the cos² term oscillates at 2ω.', tag:'NCERT Exception' },
    { t:'A closed organ pipe produces ONLY ODD harmonics (1st, 3rd, 5th...); even harmonics are completely absent from its spectrum.', c:'Displacement node at closed boundary and antinode at open boundary enforce condition L = (2n − 1) λ/4.', tag:'NCERT Exception' },
    { t:'When a spring of constant k is cut into two equal halves, the spring constant of each individual half DOUBLES to 2k.', c:'k ∝ 1/L; for a shorter spring, achieving unit extension requires double the restoring force.', tag:'Calculation Trap' },
    { t:'Sound speed in air is INDEPENDENT of pressure changes at constant temperature.', c:'v = √(γ P / ρ); by Boyle law P/ρ is constant at fixed temperature, so isothermal pressure changes do not affect sound speed.', tag:'Zero-Case' },
    { t:'When sound travels from air into water, its frequency remains strictly CONSTANT, while its wavelength increases by ~4.3 times.', c:'Frequency is determined solely by the vibrating source; sound travels much faster in water (~1480 m/s vs ~340 m/s in air), so λ = v/f increases.', tag:'Concept Trap' },
    { t:'A simple pendulum in a freely falling lift (or orbiting satellite) has INFINITE time period (it stops oscillating altogether).', c:'g_eff = g − g = 0 in free fall; restoring torque τ = −m g_eff L sin θ becomes 0, so T = 2π√(L/0) → ∞.', tag:'Zero-Case' },
    { t:'At the position of half maximum amplitude (x = A/2) in SHM, potential energy is only ONE-FOURTH of total energy (U = E/4), and kinetic energy is THREE-FOURTHS (K = 3E/4).', c:'U = ½ k x² = ½ k (A/2)² = ¼ (½ k A²) = E/4; many students incorrectly guess 50% energy split.', tag:'Calculation Trap' },
    { t:'Reflection of a transverse wave from a rigid (denser) boundary introduces a phase change of π radians (180°), whereas reflection from a free boundary produces ZERO phase change.', c:'Newton third law exerts an opposing reaction force at a fixed boundary, inverting the reflected pulse.', tag:'Boundary Failure' }
  ],

  flows:[
    { t:'SHM Displacement, Velocity & Acceleration Phases', chain:['x = A sin(ωt) [Phase 0]','v = Aω cos(ωt) = Aω sin(ωt + π/2) [Leads x by 90°]','a = −Aω² sin(ωt) = Aω² sin(ωt + π) [Leads x by 180°]'] },
    { t:'Organ Pipe Resonance & Harmonics Decision Tree', root:'Check Organ Pipe Boundary Conditions',
      br:[
        { l:'Open at Both Ends (Open Pipe)', n:['Antinodes at both ends','Fundamental f₁ = v / 2L','All Harmonics: f_n = 1f₁, 2f₁, 3f₁, 4f₁...','Full richer acoustic timbre'] },
        { l:'Closed at One End (Closed Pipe)', n:['Displacement Node at closed end','Fundamental f₁ = v / 4L','Odd Harmonics ONLY: f_n = 1f₁, 3f₁, 5f₁...','Even harmonics prohibited'] }
      ]
    },
    { t:'Tuning Fork Waxing & Filing Beat Effects', root:'Two forks A and B produce beats: |f_A − f_B| = b',
      br:[
        { l:'Filing prong of fork A', n:['Reduces prong mass','Frequency f_A INCREASES','If beats increase: f_A > f_B; if beats decrease: f_A < f_B'] },
        { l:'Waxing / loading prong of fork A', n:['Increases prong mass','Frequency f_A DECREASES','If beats decrease: f_A > f_B; if beats increase: f_A < f_B'] }
      ]
    }
  ],

  lab:[
    { t:'Resonance Tube Experiment for Speed of Sound', d:'Uses tuning fork of frequency f. First resonance l₁, second resonance l₂. Wavelength λ = 2(l₂ − l₁); speed v = f λ = 2 f (l₂ − l₁). End correction e = (l₂ − 3l₁) / 2 = 0.3 d.' },
    { t:'Sonometer Frequency and Tension Law Verification', d:'f = (1/2L) √(T/μ). Verification of laws: (1) f ∝ 1/L, (2) f ∝ √T, (3) f ∝ 1/√μ using paper riders placed at the antinode.' },
    { t:'Simple Pendulum Amplitude Dissipation Graph', d:'Energy E = ½ m ω² A² decays exponentially with time due to viscous air drag. Plot of A² vs time shows dissipative damping.' },
    { t:'Melde Experiment for Transverse & Longitudinal Modes', d:'Electrically driven tuning fork coupled to string. Transverse mode: f_fork = f_string; Longitudinal mode: f_fork = 2 f_string.' }
  ],

  pairs:[
    { g:'Organ Pipe Type & Harmonic Mode → Frequency Expression', a:'Open Pipe Fundamental Mode (1st Harmonic)', b:'f = v / 2L' },
    { g:'Organ Pipe Type & Harmonic Mode → Frequency Expression', a:'Open Pipe Second Harmonic (1st Overtone)', b:'f = 2 (v / 2L) = v / L' },
    { g:'Organ Pipe Type & Harmonic Mode → Frequency Expression', a:'Closed Pipe Fundamental Mode (1st Harmonic)', b:'f = v / 4L' },
    { g:'Organ Pipe Type & Harmonic Mode → Frequency Expression', a:'Closed Pipe First Overtone (3rd Harmonic)', b:'f = 3 (v / 4L)' },

    { g:'SHM Position x → Energy Distribution (K vs U)', a:'Mean Position (x = 0)', b:'K = E_total (Max), U = 0 (Min)' },
    { g:'SHM Position x → Energy Distribution (K vs U)', a:'Half Amplitude (x = A / 2)', b:'K = (3/4) E_total, U = (1/4) E_total' },
    { g:'SHM Position x → Energy Distribution (K vs U)', a:'Crossover Position (x = A / √2)', b:'K = U = (1/2) E_total' },
    { g:'SHM Position x → Energy Distribution (K vs U)', a:'Extreme Position (x = ±A)', b:'K = 0 (Min), U = E_total (Max)' }
  ],

  orders:[
    { q:'Arrange the energy frequencies and displacement frequencies of SHM in ascending order', s:['Displacement Frequency (f)', 'Velocity Frequency (f)', 'Kinetic Energy Frequency (2f)'], sep:'<' },
    { q:'Arrange the frequencies of harmonics produced by a closed organ pipe in ascending order', s:['1st Harmonic (v/4L)', '3rd Harmonic (3v/4L)', '5th Harmonic (5v/4L)', '7th Harmonic (7v/4L)'], sep:'<' },
    { q:'Arrange the speeds of sound in different media at 20 °C in ascending order', s:['Air (~343 m/s)', 'Water (~1482 m/s)', 'Iron / Steel (~5960 m/s)'], sep:'<' }
  ],

  facts:{
    T:[
      'In simple harmonic motion, the restoring acceleration is always directly proportional to displacement and directed opposite to it: a = −ω² x.',
      'The kinetic energy and potential energy of an SHM oscillator cycle with twice the frequency of the oscillator displacement.',
      'An open organ pipe produces all integer harmonics (fundamental, 2nd, 3rd, 4th...), whereas a closed organ pipe produces only odd harmonics.',
      'The speed of sound in air is independent of pressure variations at a constant temperature.',
      'When two slightly mistuned sources of sound are sounded together, the number of beats heard per second equals the absolute difference between their frequencies.',
      'When a spring is cut into two equal pieces, the force constant of each half becomes double that of the original spring.',
      'In a standing wave on a string, all particles between two consecutive nodes vibrate in the exact same phase with different amplitudes.',
      'A simple pendulum transferred to a freely falling elevator has zero restoring force and an infinite time period.'
    ],
    F:[
      'In simple harmonic motion, maximum velocity occurs at the extreme positions where acceleration is maximum.',
      'A closed organ pipe produces both even and odd harmonics of equal acoustic intensity.',
      'Sound travels faster in dry air than in humid air at the exact same temperature and pressure.',
      'At half the amplitude of SHM (x = A/2), the mechanical energy is equally divided with 50% kinetic and 50% potential energy.',
      'The time period of a simple pendulum doubles when the mass of the pendulum bob is doubled.',
      'When sound waves travel from air into water, their frequency increases by four times due to the higher wave speed.',
      'Beats can be comfortably perceived and resolved by human ears even when the frequency difference exceeds 50 Hz.',
      'The phase difference between displacement and acceleration in SHM is zero.'
    ]
  },

  mcq:[
    {
      q:'A particle executes SHM with amplitude A. At what displacement from the mean position is its kinetic energy equal to three times its potential energy?',
      o:['x = A / 2', 'x = A / √2', 'x = A / √3', 'x = A / 4'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'K = ½ k (A² − x²) and U = ½ k x².',
        'Given K = 3 U  ⇒  ½ k (A² − x²) = 3 (½ k x²).',
        'A² − x² = 3 x²  ⇒  4 x² = A²  ⇒  x = A / 2.'
      ]
    },
    {
      q:'A closed organ pipe and an open organ pipe have the same length. The ratio of the frequency of the first overtone of the closed pipe to that of the first overtone of the open pipe is:',
      o:['3 : 4', '1 : 2', '3 : 2', '2 : 3'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'First overtone of closed pipe is its 3rd harmonic: f_c1 = 3 (v / 4L).',
        'First overtone of open pipe is its 2nd harmonic: f_o1 = 2 (v / 2L) = v / L = 4 (v / 4L).',
        'Ratio f_c1 / f_o1 = [3 (v / 4L)] / [4 (v / 4L)] = 3 / 4.'
      ]
    },
    {
      q:'A simple pendulum has time period T on the Earth surface. If it is taken into a lift accelerating upwards with acceleration a = g / 3, its new time period will be:',
      o:['(√3 / 2) T', '(2 / √3) T', 'T / 2', '2 T'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'In upward accelerating lift, effective gravity is g_eff = g + a = g + g/3 = (4/3) g.',
        'T_new = 2π √(L / g_eff) = 2π √(L / [(4/3)g]) = √(3/4) × 2π√(L/g) = (√3 / 2) T.'
      ]
    },
    {
      q:'Two tuning forks A and B produce 5 beats per second. When the prongs of fork A are loaded with a small piece of wax, the beat frequency decreases to 2 beats per second. If the frequency of fork B is 256 Hz, the original frequency of fork A was:',
      o:['261 Hz', '251 Hz', '258 Hz', '254 Hz'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Initial beats = 5  ⇒  f_A could be 256 + 5 = 261 Hz or 256 − 5 = 251 Hz.',
        'Waxing fork A decreases its frequency (f_A decreases).',
        'If f_A was 261 Hz and decreases towards 258 Hz, the beats with 256 Hz reduce from 5 to 2 (Matches observation!).',
        'If f_A were 251 Hz and decreases, beats would increase away from 5. Hence f_A = 261 Hz.'
      ]
    },
    {
      q:'In a resonance tube experiment, the first resonance occurs at a tube length of 16 cm and the second resonance occurs at 50 cm. The end correction for this resonance tube is:',
      o:['1.0 cm', '0.5 cm', '1.5 cm', '2.0 cm'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Resonance conditions: l₁ + e = λ/4 = 16 + e, and l₂ + e = 3λ/4 = 50 + e.',
        'Subtracting: l₂ − l₁ = λ/2 = 50 − 16 = 34 cm  ⇒  λ = 68 cm  ⇒  λ/4 = 17 cm.',
        'End correction e = λ/4 − l₁ = 17 − 16 = 1.0 cm (or e = (l₂ − 3l₁)/2 = (50 − 48)/2 = 1.0 cm).'
      ]
    },
    {
      q:'A transverse progressive wave on a string is given by y = 0.05 sin(200 t − 4 x) where x and y are in metres and t is in seconds. The speed of this wave is:',
      o:['50 m s⁻¹', '800 m s⁻¹', '25 m s⁻¹', '100 m s⁻¹'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Standard wave equation: y = A sin(ω t − k x).',
        'Here ω = 200 rad s⁻¹ and k = 4 m⁻¹.',
        'Wave speed v = ω / k = 200 / 4 = 50 m s⁻¹.'
      ]
    }
  ],

  gens:[
    function(R){
      var l = R.pick([1, 4, 9, 16]);
      var T = 2 * Math.PI * Math.sqrt(l / 9.8);
      var d1 = 2 * Math.PI * Math.sqrt(l / 1.6);
      var d2 = Math.PI * Math.sqrt(l / 9.8);
      var d3 = 2 * Math.PI * (l / 9.8);
      return {
        q:'Calculate the time period of a simple pendulum of length ' + l + ' m on the Earth surface (take g = 9.8 m s⁻²):',
        ans:T, d:[d1, d2, d3], u:'s',
        tag:'Calculation Trap',
        sol:[
          'Time period of simple pendulum: T = 2π √(L / g).',
          'T = 2 × 3.1416 × √(' + l + ' / 9.8) = ' + R.f(T) + ' s.'
        ]
      };
    },
    function(R){
      var m = R.pick([0.1, 0.2, 0.5, 1.0]);
      var k = R.pick([20, 50, 80, 200]);
      var omega = Math.sqrt(k / m);
      var d1 = Math.sqrt(m / k);
      var d2 = k / m;
      var d3 = 2 * Math.PI * Math.sqrt(k / m);
      return {
        q:'A body of mass ' + m + ' kg is attached to a spring of spring constant ' + k + ' N m⁻¹. What is the angular frequency ω of the resulting SHM?',
        ans:omega, d:[d1, d2, d3], u:'rad s⁻¹',
        tag:'Calculation Trap',
        sol:[
          'Angular frequency ω = √(k / m).',
          'ω = √(' + k + ' / ' + m + ') = ' + R.f(omega) + ' rad s⁻¹.'
        ]
      };
    },
    function(R){
      var A = R.int(4, 12);
      var x = A / 2;
      var k = R.pick([50, 100, 200]);
      var E_total = 0.5 * k * (A * 0.01) * (A * 0.01);
      var U = 0.25 * E_total;
      var K = 0.75 * E_total;
      var d1 = 0.5 * E_total;
      var d2 = E_total;
      var d3 = 0.125 * E_total;
      return {
        q:'A block executing SHM has amplitude ' + A + ' cm and total energy ' + R.f(E_total) + ' J. What is its potential energy when its displacement is x = ' + x + ' cm (half the amplitude)?',
        ans:U, d:[d1, d2, d3], u:'J',
        tag:'Calculation Trap',
        sol:[
          'U = ½ k x² = ½ k (A/2)² = ¼ (½ k A²) = ¼ E_total.',
          'U = 0.25 × ' + R.f(E_total) + ' J = ' + R.f(U) + ' J.'
        ]
      };
    },
    function(R){
      var L = R.pick([0.25, 0.5, 0.85, 1.0]);
      var v = 340;
      var f_closed = v / (4 * L);
      var d1 = v / (2 * L);
      var d2 = 3 * v / (4 * L);
      var d3 = v / L;
      return {
        q:'Calculate the fundamental frequency of sound produced by a closed organ pipe of length ' + L + ' m (speed of sound in air = 340 m s⁻¹):',
        ans:f_closed, d:[d1, d2, d3], u:'Hz',
        tag:'Calculation Trap',
        sol:[
          'Fundamental frequency of closed pipe: f₁ = v / (4 L).',
          'f₁ = 340 / (4 × ' + L + ') = ' + R.f(f_closed) + ' Hz.'
        ]
      };
    },
    function(R){
      var f1 = R.int(250, 400);
      var diff = R.int(3, 8);
      var f2 = f1 + diff;
      var d1 = f1 + f2;
      var d2 = Math.abs(f1 - f2) * 2;
      var d3 = Math.round((f1 + f2) / 2);
      return {
        q:'Two sound waves of frequencies ' + f1 + ' Hz and ' + f2 + ' Hz interfere at a point in space. How many beats will be heard per second?',
        ans:diff, d:[d1, d2, d3], u:'beats s⁻¹',
        tag:'Calculation Trap',
        sol:[
          'Beat frequency f_beat = |f₂ − f₁|.',
          'f_beat = |' + f2 + ' − ' + f1 + '| = ' + diff + ' beats s⁻¹.'
        ]
      };
    },
    function(R){
      var mass_g = R.pick([5, 10, 20]);
      var L_m = R.pick([1, 2, 5]);
      var mu = (mass_g * 0.001) / L_m;
      var T_tension = R.pick([20, 50, 80]);
      var v = Math.sqrt(T_tension / mu);
      var d1 = Math.sqrt(T_tension * mu);
      var d2 = T_tension / mu;
      var d3 = Math.sqrt(T_tension / (mass_g * 0.001));
      return {
        q:'A string of length ' + L_m + ' m has mass ' + mass_g + ' g and is stretched under tension ' + T_tension + ' N. What is the speed of transverse waves on this string?',
        ans:v, d:[d1, d2, d3], u:'m s⁻¹',
        tag:'Calculation Trap',
        sol:[
          'Linear mass density μ = m / L = ' + (mass_g * 0.001) + ' kg / ' + L_m + ' m = ' + R.f(mu) + ' kg m⁻¹.',
          'Speed v = √(T / μ) = √(' + T_tension + ' / ' + R.f(mu) + ') = ' + R.f(v) + ' m s⁻¹.'
        ]
      };
    }
  ]
});
