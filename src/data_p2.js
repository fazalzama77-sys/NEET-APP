/* ==========================================================================
   DATA P2: Physics Units P11–P20 (Class 12 + Experimental Skills)
   ========================================================================== */

NEET.reg({
  id:'P11',
  subj:'Physics',
  type:'num',
  name:'Electrostatics',
  syl:'Electric charges: conservation, Coulomb\'s law, superposition, continuous charge distribution. Electric field, field due to point charge, electric field lines, electric dipole, field due to a dipole, torque on a dipole in uniform electric field. Electric flux, Gauss\'s law and its applications to infinitely long uniformly charged straight wire, uniformly charged infinite plane sheet, and uniformly charged thin spherical shell. Electric potential and its calculation for a point charge, electric dipole and system of charges; equipotential surfaces, electrical potential energy of a system of two point charges and of electric dipole in an electrostatic field. Conductors and insulators, dielectrics and electric polarization, capacitors and capacitance, combination of capacitors in series and parallel, capacitance of a parallel plate capacitor with and without dielectric medium between the plates, energy stored in a capacitor.',
  kw:['coulomb','dipole','gauss law','electric flux','equipotential','capacitor','dielectric','polarization','spherical shell','parallel plate'],
  formulas:[
    { n:'Coulomb\'s Law in Medium', f:'F = (1 / 4πε₀K) · (|q₁q₂| / r²)', u:'N', s:'K = εᵣ ≥ 1 is dielectric constant; k = 1/(4πε₀) = 9 × 10⁹ N m² C⁻²', b:'Fails for extended non-spherical charge distributions at small separations or rapidly moving charges (where magnetic/retarded effects enter)' },
    { n:'Dipole Axial & Equatorial Field', f:'E_ax = 2kp / r³ ;  E_eq = kp / r³', u:'N C⁻¹ (or V m⁻¹)', s:'p = q(2a) from −q to +q; E_ax is parallel to p, E_eq is antiparallel to p', b:'Short-dipole approximation valid only when r ≫ a; exact axial denominator is (r² − a²)²' },
    { n:'Dipole Torque & Potential Energy', f:'τ = p × E (τ = pE sinθ) ;  U = −p · E = −pE cosθ', u:'N m ;  J', s:'θ is angle between p and E; U = 0 chosen at θ = 90°; stable at θ = 0°, unstable at θ = 180°', b:'Strictly valid in a uniform electric field; in non-uniform field a net translational force F = (p · ∇)E also acts' },
    { n:'Gauss\'s Law', f:'Φ_E = ∮ E · dA = q_in / ε₀', u:'N m² C⁻¹ (or V m)', s:'q_in is algebraic sum of charges strictly inside closed Gaussian surface; E on LHS is resultant field due to ALL charges (inside + outside)', b:'Cannot directly solve for E(r) unless the charge distribution possesses planar, cylindrical, or spherical symmetry' },
    { n:'Field of Line, Sheet & Conducting Surface', f:'E_line = λ / (2πε₀r) ;  E_sheet = σ / (2ε₀) ;  E_cond = σ / ε₀', u:'V m⁻¹', s:'λ = linear charge density, σ = surface charge density; E_sheet is independent of distance r', b:'Valid only for infinitely long wire / infinite plane sheet (i.e., field point distance r ≪ dimensions of wire/sheet)' },
    { n:'Potential & 2-Charge System PE', f:'V = kq / r ;  U₁₂ = kq₁q₂ / r₁₂ + q₁V_ext(r₁) + q₂V_ext(r₂)', u:'V ;  J', s:'Substitute q₁, q₂ WITH algebraic signs; E = −dV/dr along field line', b:'Reference V(∞) = 0 fails when charge distribution itself extends to infinity (infinite line or infinite sheet)' },
    { n:'Parallel Plate Capacitor with Dielectric Slab', f:'C = ε₀A / [d − t + (t / K)] ;  C_full = Kε₀A / d', u:'F', s:'t = slab thickness (t ≤ d), A = plate area, K = dielectric constant; for metal slab K → ∞ so C = ε₀A/(d − t)', b:'Parallel-plate formula ignores fringing fields at edges; requires plate separation d ≪ √A' },
    { n:'Capacitor Energy & Field Energy Density', f:'U = Q² / (2C) = ½CV² = ½QV ;  u_E = ½ε₀K E²', u:'J ;  J m⁻³', s:'Work done by battery in charging from 0 to V is QV, of which 50% (½CV²) is stored and 50% dissipated as heat/radiation', b:'½CV² applies to linear capacitors where C is independent of V; u_E = ½ε₀E² holds in any electrostatic field in vacuum' },
    { n:'Common Potential & Energy Loss on Sharing', f:'V_c = (C₁V₁ + C₂V₂) / (C₁ + C₂) ;  ΔU = ½ [C₁C₂ / (C₁ + C₂)] (V₁ − V₂)²', u:'V ;  J', s:'Use −V₂ if opposite polarities are connected together; ΔU is always ≥ 0 (lost as heat/spark)', b:'Assumes zero external EMF in the loop and complete steady state after redistribution' }
  ],
  traps:[
    { t:'Inside a uniformly charged thin spherical shell (or hollow/solid conductor in electrostatic equilibrium), the electric field E is zero everywhere, while the electric potential V is constant and equal to the surface value kQ/R.', c:'Because E = −dV/dr, E = 0 implies V is spatially constant (not zero) throughout the interior volume; no work is done in moving a test charge inside the shell.', tag:'Concept Trap' },
    { t:'In Gauss\'s law ∮ E · dA = q_in / ε₀, the electric field E in the surface integral is due to ALL charges in the universe (both inside and outside), whereas the net flux depends ONLY on the enclosed charge q_in.', c:'Field lines from external charges that enter the closed Gaussian surface must also exit it, contributing zero net flux while still altering the local value of E at points on the surface.', tag:'Concept Trap' },
    { t:'When a dielectric slab of constant K is inserted into a capacitor with the battery DISCONNECTED, charge Q stays constant, V decreases to V₀/K, E decreases to E₀/K, and stored energy U decreases to U₀/K.', c:'With the circuit open, charge is trapped on the plates; induced bound charges oppose the original field, lowering E, V, and U = Q²/(2C) as C increases by factor K (the slab is pulled in by fringing fields).', tag:'Boundary Failure' },
    { t:'When a dielectric slab (constant K) is inserted into a capacitor while the battery remains CONNECTED, potential V stays constant, E stays constant, C becomes KC₀, Q becomes KQ₀, and stored energy U increases to KU₀.', c:'The battery supplies extra charge ΔQ = (K − 1)C₀V to maintain constant potential V across plates; battery does work W_bat = (K − 1)C₀V², of which half increases U and half is mechanical/heat energy.', tag:'Boundary Failure' },
    { t:'Placing a third charge q₃ near two charges q₁ and q₂ does NOT change the Coulomb force exerted by q₁ on q₂, though the net force on q₂ changes.', c:'By the principle of superposition in vacuum, the pairwise electrostatic interaction between any two point charges is completely unaffected by the presence of other charges.', tag:'NCERT Exception' },
    { t:'On the equatorial line of an electric dipole, the electric potential is zero everywhere (V = 0), yet the electric field is non-zero (E = kp/r³ antiparallel to p).', c:'V is a scalar sum kq/r − kq/r = 0 because any equatorial point is equidistant from +q and −q, whereas the two field vectors have non-cancelling components antiparallel to the dipole axis.', tag:'Zero-Case' },
    { t:'If a point charge +q is displaced slightly from the midpoint between two fixed identical charges +Q and +Q, it is in stable equilibrium along the line joining them, but UNSTABLE along the perpendicular bisector.', c:'By Earnshaw\'s theorem (∇²V = 0 in free space), a point charge cannot be in 3D stable equilibrium under purely electrostatic forces; restoring force along the axis is accompanied by diverging field lines perpendicular to it.', tag:'Sign Convention' },
    { t:'A thin infinite non-conducting sheet of charge density σ produces field σ/(2ε₀), whereas the electric field just outside a charged conductor of surface density σ is σ/ε₀.', c:'In a conductor, σ is the local surface density on ONE face and E_inside = 0, so a Gaussian pillbox gives E·A = σA/ε₀; for a thin sheet, flux exits through BOTH faces (2EA = σA/ε₀).', tag:'Calculation Trap' }
  ],
  flows:[
    { t:'Dielectric Slab K Inserted into Parallel-Plate Capacitor', root:'Check battery state during dielectric insertion (C always becomes K·C₀)',
      br:[
        { l:'Battery DISCONNECTED (isolated plates)', n:['Q = Q₀ (constant)','V = V₀ / K  &  E = E₀ / K','U = U₀ / K (decreases; slab pulled in)'] },
        { l:'Battery CONNECTED (constant V₀)', n:['V = V₀  &  E = V₀/d (constant)','Q = K·Q₀ (battery supplies ΔQ)','U = K·U₀ (increases by factor K)'] }
      ]
    },
    { t:'Spherical Shell (Radius R, Charge Q) Field & Potential Profile', root:'Locate radial distance r from centre O',
      br:[
        { l:'Inside shell (r < R)', n:['q_in = 0 → E = 0','V = kQ / R (constant = surface V)','Graph: E is flat at 0; V is flat plateau'] },
        { l:'On surface (r = R)', n:['E_just_out = kQ / R² = σ / ε₀','V = kQ / R','E jumps discontinuously by σ/ε₀; V is continuous'] },
        { l:'Outside shell (r > R)', n:['Behaves as point charge Q at O','E = kQ / r² ∝ 1/r²','V = kQ / r ∝ 1/r'] }
      ]
    },
    { t:'Zero-Field (Null Point) Location for Two Point Charges q₁ and q₂ Separated by d', chain:[
      'Compare signs of q₁ and q₂ (let |q₁| ≤ |q₂|)',
      'Like charges (+,+ or −,−): null point lies BETWEEN them, closer to smaller magnitude |q₁| at x = d / (1 + √(|q₂|/|q₁|))',
      'Unlike charges (+,−): null point lies OUTSIDE on the side of smaller magnitude |q₁| at x = d / (√(|q₂|/|q₁|) − 1)',
      'If q₁ = −q₂ (equal & opposite, i.e., dipole): NO finite null point exists anywhere'
    ] }
  ],
  lab:[
    { t:'Gold-Leaf Electroscope (GLE)', d:'Detects charge and polarity: if a charged rod brought near the disc of a positively charged GLE increases leaf divergence, the rod is positive; if divergence decreases, the rod is negative OR uncharged (due to induction — repulsion is the only sure test of charge).' },
    { t:'Faraday\'s Ice-Pail / Cavity Shielding Demonstration', d:'A sensitive electroscope inside a closed hollow metallic cage shows zero deflection regardless of how strongly the outer surface is charged or exposed to external fields (electrostatic shielding, E_inside = 0).' },
    { t:'Dielectric Breakdown & Corona Discharge at Sharp Points', d:'Dry air breaks down at E_max ≈ 3 × 10⁶ V m⁻¹. On a non-spherical conductor, σ ∝ 1/R_curvature; sharp needles have tiny radius R, huge local σ and E, ionizing surrounding air (action of points in lightning conductors).' },
    { t:'Capacitor Charging / Discharging with Multimeter', d:'An initially uncharged capacitor acts as a short circuit at t = 0 and an open circuit (I = 0) at steady state t → ∞ under DC; polarity markings on electrolytic capacitors must strictly match battery terminals.' }
  ],
  pairs:[
    { g:'Charge distribution → distance dependence of electric field E(r)', a:'Single isolated point charge q', b:'E ∝ 1 / r²' },
    { g:'Charge distribution → distance dependence of electric field E(r)', a:'Short electric dipole (at large distance r ≫ a)', b:'E ∝ 1 / r³' },
    { g:'Charge distribution → distance dependence of electric field E(r)', a:'Infinitely long uniformly charged straight wire', b:'E ∝ 1 / r' },
    { g:'Charge distribution → distance dependence of electric field E(r)', a:'Uniformly charged infinite plane sheet', b:'E ∝ r⁰ (independent of r)' },
    { g:'Charge distribution → distance dependence of electric field E(r)', a:'Inside a uniformly charged solid non-conducting sphere (r < R)', b:'E ∝ r¹ (linearly proportional to r)' },
    { g:'Dipole orientation θ in uniform field E → torque τ & potential energy U', a:'θ = 0° (p aligned parallel to E)', b:'τ = 0, U = −pE (minimum PE, stable equilibrium)' },
    { g:'Dipole orientation θ in uniform field E → torque τ & potential energy U', a:'θ = 90° (p perpendicular to E)', b:'τ = pE (maximum torque), U = 0' },
    { g:'Dipole orientation θ in uniform field E → torque τ & potential energy U', a:'θ = 180° (p antiparallel to E)', b:'τ = 0, U = +pE (maximum PE, unstable equilibrium)' },
    { g:'Dipole orientation θ in uniform field E → torque τ & potential energy U', a:'θ = 60° between p and E', b:'τ = (√3/2)pE, U = −½pE' }
  ],
  orders:[
    { q:'Magnitude of electric field E at large distance r from the source (from fastest decay to slowest decay with r)', s:['Electric quadrupole (1/r⁴)','Short electric dipole (1/r³)','Point charge (1/r²)','Infinite line charge (1/r)','Infinite plane sheet (r⁰)'], sep:'>', why:'Power of 1/r decreases by 1 as source dimension increases from multipole → point → line → plane.' },
    { q:'Equivalent capacitance C_eq obtained using three identical capacitors each of capacitance C (from largest to smallest)', s:['All three in parallel (3C)','Two in series connected in parallel with the third (3C/2)','Two in parallel connected in series with the third (2C/3)','All three in series (C/3)'], sep:'>', why:'3C = 3.0C > 3C/2 = 1.5C > 2C/3 ≈ 0.67C > C/3 ≈ 0.33C.' }
  ],
  facts:{
    T:[
      'Electric field lines never form closed loops in electrostatic situations because the electrostatic field is conservative (∮ E · dl = 0).',
      'Equipotential surfaces are always perpendicular to electric field lines at every point, and no two equipotential surfaces having different potentials can intersect.',
      'The work done in moving a test charge between any two points on an equipotential surface is identically zero.',
      'In a region of strong electric field, equipotential surfaces for equal potential differences ΔV are crowded closely together because Δr = −ΔV / E.',
      'When n identical charged spherical mercury drops each at potential V₀ coalesce into a single big drop, the new potential becomes n^(2/3) V₀.',
      'For a short electric dipole at distance r, the magnitude of the axial electric field is exactly twice the magnitude of the equatorial electric field (E_ax = 2 E_eq).',
      'The net electric charge of any isolated system is conserved and is always an integral multiple of the elementary charge e = 1.6 × 10⁻¹⁹ C.',
      'A polar dielectric (such as H₂O or HCl) has permanent molecular dipole moments even in the absence of an external electric field, whereas a non-polar dielectric (such as O₂ or H₂) develops induced dipoles only when an external field is applied.',
      'Electric susceptibility χ_e and dielectric constant K of a linear isotropic dielectric are related by K = 1 + χ_e.'
    ],
    F:[
      'If the electric field E at a point is zero, the electric potential V at that point must also be zero.',
      'If the electric potential V at a point is zero, the electric field E at that point must necessarily be zero.',
      'Electrostatic field lines can pass uninterrupted through the interior of a solid metallic conductor in electrostatic equilibrium.',
      'Inserting a dielectric slab of constant K between the plates of an isolated charged capacitor increases the electric field between the plates by a factor of K.',
      'The capacitance of a parallel-plate capacitor is directly proportional to the charge Q given to its plates.',
      'When two identical capacitors charged to different potentials V₁ and V₂ are connected in parallel, both total charge and total electrostatic energy are conserved.',
      'The angle between the net electric field vector on the equatorial line of a dipole and its dipole moment vector p is 0°.',
      'Inside a hollow charged spherical conductor, the electric potential varies inversely with distance from the centre (V ∝ 1/r).'
    ]
  },
  mcq:[
    { q:'Eight identical small spherical drops of mercury, each charged to a potential of 5 V, coalesce to form a single large spherical drop. The electric potential of the large drop is:',
      o:['20 V','40 V','10 V','5 V'], a:0, tag:'Calculation Trap',
      sol:['Volume conservation: (4/3)πR³ = 8 × (4/3)πr³ ⇒ R = 2r.','Charge conservation: Q = 8q.','V_big = kQ/R = k(8q)/(2r) = 4(kq/r) = 4 × 5 V = 20 V (using V = n^(2/3) V₀ with n = 8).'] },
    { q:'An electric dipole is placed inside a closed Gaussian surface in vacuum. If the dipole moment is p = q(2a), the net electric flux Φ_E coming out of the surface is:',
      o:['Zero','2q / ε₀','p / ε₀','q / (2ε₀)'], a:0, tag:'Zero-Case',
      sol:['An electric dipole consists of equal and opposite charges +q and −q.','Net enclosed charge q_in = (+q) + (−q) = 0.','By Gauss\'s law, Φ_E = q_in / ε₀ = 0 regardless of dipole position inside the surface.'] },
    { q:'In a certain region of space, the electric potential is constant and equal to 12 V throughout a volume. The electric field inside this volume is:',
      o:['Zero everywhere','12 V m⁻¹ directed radially outward','Infinite','Uniform and non-zero'], a:0, tag:'Concept Trap',
      sol:['Electric field is the negative gradient of potential: E = −∇V (or E_r = −dV/dr).','Since V = 12 V (constant) throughout the volume, all spatial derivatives vanish: dV/dx = dV/dy = dV/dz = 0.','Therefore E = 0 everywhere inside that volume.'] },
    { q:'A parallel-plate air capacitor of capacitance C is charged to a potential V and then disconnected from the battery. A dielectric slab of dielectric constant K completely fills the space between the plates. Which pair of quantities represents the new potential difference and new stored energy?',
      o:['V / K and ½CV² / K','K V and ½K CV²','V and ½K CV²','V / K and ½K CV²'], a:0, tag:'Boundary Failure',
      sol:['Battery disconnected ⇒ charge Q = CV remains constant.','New capacitance C\' = KC.','New potential V\' = Q / C\' = CV / (KC) = V / K; new energy U\' = Q² / (2C\') = U₀ / K = ½CV² / K.'] },
    { q:'Two point charges +4 μC and +1 μC are separated by a distance d in vacuum. Where on the line joining them is the resultant electric field zero?',
      o:['Between the charges, at a distance d/3 from the +1 μC charge','Between the charges, at a distance d/3 from the +4 μC charge','Outside the segment, at a distance d from the +1 μC charge','At the midpoint d/2 between the two charges'], a:0, tag:'Calculation Trap',
      sol:['For two like charges, the null point lies between them, closer to the smaller charge (+1 μC).','Distance from +1 μC is x = d / (1 + √(q₂/q₁)) = d / (1 + √(4/1)) = d / (1 + 2) = d/3.'] },
    { q:'An electric dipole of moment p is initially aligned parallel to a uniform electric field E (stable equilibrium, θ₁ = 0°). The external work required to rotate it slowly to the antiparallel position (θ₂ = 180°) is:',
      o:['+2pE','+pE','Zero','−2pE'], a:0, tag:'Sign Convention',
      sol:['Potential energy of dipole is U(θ) = −pE cosθ.','W_ext = U(180°) − U(0°) = (−pE cos 180°) − (−pE cos 0°) = (+pE) − (−pE) = +2pE.'] },
    { q:'The electric potential in a region is given by V(x, y, z) = 4x² volts, where x is in metres. The electric field at the point (1 m, 0, 2 m) is:',
      o:['8 V m⁻¹ along negative x-axis','8 V m⁻¹ along positive x-axis','4 V m⁻¹ along negative x-axis','16 V m⁻¹ along negative z-axis'], a:0, tag:'Sign Convention',
      sol:['E_x = −∂V/∂x = −d(4x²)/dx = −8x; E_y = 0, E_z = 0.','At x = 1 m, E_x = −8(1) = −8 V m⁻¹, i.e. 8 V m⁻¹ along the negative x-axis.'] }
  ],
  gens:[
    function(R){
      var c1 = R.pick([2,3,4,6,8,10,12]);
      var c2 = R.pick([3,4,6,8,12,15,20]);
      if (c1 === c2) c2 += 3;
      var V = R.pick([10,12,20,24,30,50,100]);
      var Ceq = (c1 * c2) / (c1 + c2);
      var Q = Ceq * V;
      return {
        q:'Two capacitors of capacitances ' + c1 + ' μF and ' + c2 + ' μF are connected in series across a ' + V + ' V DC supply. The charge on each capacitor is:',
        ans:Q, d:[(c1 + c2) * V, c1 * V, Q / 2], u:'μC',
        tag:'Calculation Trap',
        sol:['In series, C_eq = C₁C₂ / (C₁ + C₂) = (' + c1 + ' × ' + c2 + ') / (' + (c1 + c2) + ') = ' + R.f(Ceq) + ' μF', 'Charge on each capacitor Q = C_eq · V = ' + R.f(Ceq) + ' × ' + V + ' = ' + R.f(Q) + ' μC']
      };
    },
    function(R){
      var C = R.pick([2,4,5,6,8,10,12,20]);
      var V = R.pick([10,20,30,40,50,100]);
      var U = 0.5 * C * V * V;
      return {
        q:'A capacitor of capacitance ' + C + ' μF is charged to a potential difference of ' + V + ' V. The electrostatic energy stored in the capacitor (in μJ) is:',
        ans:U, d:[C * V * V, 0.5 * C * V, C * V], u:'μJ',
        tag:'Calculation Trap',
        sol:['Energy stored U = ½ C V²', 'U = 0.5 × ' + C + ' μF × (' + V + ' V)² = ' + R.f(U) + ' μJ']
      };
    },
    function(R){
      var q = R.pick([2,4,5,6,8,10,12,15]);
      var eps_q = q / 8.854e-12;
      var fluxCube = eps_q;
      var fluxFace = fluxCube / 6;
      var askFace = R.pick([true, false]);
      if (askFace) {
        return {
          q:'A point charge of +' + q + ' μC is placed at the geometric centre of a cube of side ' + R.int(10,50) + ' cm. The electric flux emerging through ANY ONE face of the cube is (take ε₀ = 8.85 × 10⁻¹² C² N⁻¹ m⁻²):',
          ans:fluxFace * 1e-6, d:[fluxCube * 1e-6, (fluxFace * 1e-6) * 2, (fluxCube * 1e-6) * 6], u:'N m² C⁻¹',
          tag:'Concept Trap',
          sol:['Total flux through all 6 faces by Gauss\'s law: Φ_total = q / ε₀', 'By symmetry of the centre, flux through 1 face: Φ_face = q / (6ε₀) = (' + q + ' × 10⁻⁶) / (6 × 8.854 × 10⁻¹²) = ' + R.f(fluxFace * 1e-6) + ' N m² C⁻¹']
        };
      }
      return {
        q:'A point charge of +' + q + ' μC is enclosed inside a spherical Gaussian surface of radius ' + R.int(5,40) + ' cm. The total electric flux through the surface is (take ε₀ = 8.85 × 10⁻¹² C² N⁻¹ m⁻²):',
        ans:fluxCube * 1e-6, d:[fluxFace * 1e-6, (fluxCube * 1e-6) / 2, (fluxCube * 1e-6) * 4], u:'N m² C⁻¹',
        tag:'Concept Trap',
        sol:['By Gauss\'s law, total flux Φ = q_in / ε₀ (independent of radius)', 'Φ = (' + q + ' × 10⁻⁶) / (8.854 × 10⁻¹²) = ' + R.f(fluxCube * 1e-6) + ' N m² C⁻¹']
      };
    },
    function(R){
      var p = R.pick([2,3,4,5,6,8]);
      var E = R.pick([2,3,4,5,6,10]);
      var ang = R.pick([30, 60, 90]);
      var sVal = ang === 30 ? 0.5 : (ang === 60 ? 0.866025 : 1.0);
      var cVal = ang === 30 ? 0.866025 : (ang === 60 ? 0.5 : 0.01);
      var tau = p * E * sVal;
      return {
        q:'An electric dipole of dipole moment ' + p + ' × 10⁻⁶ C m is placed at an angle of ' + ang + '° with a uniform electric field of magnitude ' + E + ' × 10⁴ N C⁻¹. The magnitude of torque acting on the dipole is:',
        ans:tau * 1e-2, d:[p * E * cVal * 1e-2, p * E * 2 * 1e-2, (p / E) * 1e-2], u:'N m',
        tag:'Sign Convention',
        sol:['Torque τ = p E sinθ', 'τ = (' + p + ' × 10⁻⁶) × (' + E + ' × 10⁴) × sin(' + ang + '°) = ' + R.f(tau * 1e-2) + ' N m']
      };
    },
    function(R){
      var n = R.pick([8, 27, 64, 125]);
      var cbrt = Math.round(Math.pow(n, 1/3));
      var V0 = R.pick([2, 3, 4, 5, 6, 10]);
      var Vbig = cbrt * cbrt * V0;
      return {
        q:n + ' identical small charged spherical droplets, each at an electric potential of ' + V0 + ' V, coalesce to form a single large drop. The potential of the resulting large drop is:',
        ans:Vbig, d:[n * V0, cbrt * V0, V0 / cbrt], u:'V',
        tag:'Calculation Trap',
        sol:['Radius scales as R = n^(1/3) r = ' + cbrt + ' r; total charge Q = n q = ' + n + ' q', 'V_big = kQ/R = n^(2/3) V₀ = ' + (cbrt * cbrt) + ' × ' + V0 + ' = ' + Vbig + ' V']
      };
    },
    function(R){
      var C1 = R.pick([2, 4, 6, 8]);
      var C2 = R.pick([3, 6, 9, 12]);
      if (C1 === C2) C2 += 2;
      var V1 = R.pick([20, 30, 40, 50]);
      var Vc = (C1 * V1) / (C1 + C2);
      var dU = 0.5 * ((C1 * C2) / (C1 + C2)) * V1 * V1;
      return {
        q:'A ' + C1 + ' μF capacitor charged to ' + V1 + ' V is disconnected from the battery and connected in parallel with an uncharged ' + C2 + ' μF capacitor. The common potential difference across the combination is:',
        ans:Vc, d:[V1 / 2, (C2 * V1) / (C1 + C2), V1 * (C1 / C2)], u:'V',
        tag:'Calculation Trap',
        sol:['By conservation of charge, Q_total = C₁V₁ + 0 = ' + (C1 * V1) + ' μC', 'Common potential V_c = C₁V₁ / (C₁ + C₂) = ' + (C1 * V1) + ' / ' + (C1 + C2) + ' = ' + R.f(Vc) + ' V (energy lost = ' + R.f(dU) + ' μJ)']
      };
    },
    function(R){
      var C0 = R.pick([4, 6, 8, 10, 12, 15, 20]);
      var K = R.pick([2, 3, 4, 5, 6]);
      var halfSlab = R.pick([true, false]);
      if (halfSlab) {
        var Cnew = (2 * K * C0) / (K + 1);
        return {
          q:'A parallel-plate air capacitor has capacitance ' + C0 + ' pF. A dielectric slab of dielectric constant K = ' + K + ' and thickness t = d/2 (half the plate separation) is introduced between the plates. The new capacitance is:',
          ans:Cnew, d:[K * C0, ((K + 1) / 2) * C0, C0 / K], u:'pF',
          tag:'Calculation Trap',
          sol:['C = ε₀A / [d − t + t/K]; for t = d/2, denominator = d/2 + d/(2K) = d(K + 1)/(2K)', 'C\' = [2K / (K + 1)] C₀ = (' + (2 * K) + ' / ' + (K + 1) + ') × ' + C0 + ' = ' + R.f(Cnew) + ' pF']
        };
      }
      var Cfull = K * C0;
      return {
        q:'An air-filled parallel-plate capacitor has capacitance ' + C0 + ' μF. When the space between its plates is completely filled with a dielectric of relative permittivity K = ' + K + ', the new capacitance is:',
        ans:Cfull, d:[C0 / K, C0 + K, (K - 1) * C0], u:'μF',
        tag:'Calculation Trap',
        sol:['For complete dielectric filling (t = d), C\' = K · C₀', 'C\' = ' + K + ' × ' + C0 + ' = ' + Cfull + ' μF']
      };
    }
  ]
});

NEET.reg({
  id:'P12',
  subj:'Physics',
  type:'num',
  name:'Current Electricity',
  syl:'Electric current, drift velocity, mobility and their relation with electric current; Ohm\'s law, electrical resistance, V-I characteristics of Ohmic and non-ohmic conductors, electrical energy and power, electrical resistivity and conductivity, temperature dependence of resistance, series and parallel combinations of resistors, internal resistance of a cell, potential difference and emf of a cell, combination of cells in series and in parallel, Kirchhoff\'s laws and their applications, Wheatstone bridge, Metre bridge.',
  kw:['drift velocity','mobility','ohm law','resistivity','internal resistance','kirchhoff','wheatstone bridge','metre bridge','manganin','terminal voltage'],
  formulas:[
    { n:'Drift Velocity & Current Density', f:'I = n e A v_d ;  v_d = (e E τ) / m ;  J = σ E', u:'A ;  m s⁻¹ ;  A m⁻²', s:'n = free electron density (~10²⁸ m⁻³ in metals), τ = relaxation time, J = I/A along E', b:'Relaxation-time model assumes τ is independent of E; fails at very high electric fields where non-linear hot-electron effects occur' },
    { n:'Mobility of Charge Carriers', f:'μ = |v_d| / E = e τ / m', u:'m² V⁻¹ s⁻¹', s:'μ is always defined as positive; depends only on nature of conductor and temperature (via τ), NOT on applied E', b:'Constant μ holds only in the linear Ohmic regime where drift speed v_d ≪ thermal speed v_rms' },
    { n:'Resistance, Resistivity & Wire Stretching', f:'R = ρ l / A ;  ρ = m / (n e² τ) ;  R_stretched ∝ l² ∝ 1 / A² ∝ 1 / r⁴', u:'Ω ;  Ω m', s:'ρ depends ONLY on material & temperature (not dimensions); stretching at constant volume V = Al gives R\' = n²R for l\' = nl', b:'R ∝ l² holds ONLY when a single wire is stretched/compressed at constant volume, NOT when extra wire is added' },
    { n:'Temperature Dependence of Resistivity', f:'ρ_T = ρ₀ [1 + α (T − T₀)] ;  R_T = R₀ [1 + α ΔT]', u:'α in K⁻¹ (or °C⁻¹)', s:'Metals: α > 0; semiconductors & insulators (Ge, Si, carbon): α < 0; alloys (manganin, constantan, nichrome): α ≈ 0 (very small +)', b:'Linear approximation valid for moderate ΔT (typically ≤ 100–200 K); semiconductors strictly follow ρ = ρ₀ exp(E_g / 2k_BT)' },
    { n:'Cell EMF & Terminal Potential Difference', f:'Discharging: V = ε − I r ;  Charging: V = ε + I r ;  Open circuit: V = ε', u:'V', s:'ε = EMF (work per unit charge around full loop), r = internal resistance; short circuit (R = 0) gives I_max = ε/r and V = 0', b:'During charging by an external source, current enters the positive terminal of the cell so terminal voltage V EXCEEDS EMF ε' },
    { n:'Parallel Grouping of Unequal Cells', f:'ε_eq = (ε₁/r₁ + ε₂/r₂) / (1/r₁ + 1/r₂) ;  1/r_eq = 1/r₁ + 1/r₂', u:'V ;  Ω', s:'Invert sign of ε₂ if the second cell is connected with reversed polarity', b:'Valid for parallel branches; for n identical cells (ε, r) in parallel, ε_eq = ε and r_eq = r/n' },
    { n:'Maximum Power Transfer Theorem', f:'P_ext = I² R = [ε / (R + r)]² R ;  P_max = ε² / (4r) at R = r', u:'W', s:'At R = r, load power is maximum, but battery efficiency η = R/(R + r) is only 50%', b:'Applies when internal resistance r is fixed and external load R is varied; if r is variable for fixed R, P_ext is max at r = 0' },
    { n:'Kirchhoff\'s Junction (KCL) & Loop (KVL) Rules', f:'Σ I_junction = 0 (charge conservation) ;  Σ ΔV_loop = 0 (energy conservation)', u:'A ;  V', s:'Traversing resistor in direction of current: −IR; against current: +IR; cell from − to +: +ε', b:'KVL assumes electrostatic field (dΦ_B/dt = 0); fails when time-varying magnetic flux threads the loop' },
    { n:'Wheatstone Bridge & Metre Bridge Balance', f:'P / Q = R / S  (at I_g = 0) ;  R / S = l₁ / (100 − l₁)', u:'dimensionless ;  l₁ in cm', s:'At balance, central galvanometer branch carries zero current and its two nodes are at identical potential', b:'Metre bridge accuracy drops sharply near the ends (l₁ ≪ 50 cm or l₁ ≫ 50 cm) due to end resistances and high fractional error in l₁' }
  ],
  traps:[
    { t:'Although electron drift speed in a copper wire is tiny (~10⁻⁴ m s⁻¹), a bulb lights up almost instantaneously because the electric field (electromagnetic wave) propagates along the circuit at nearly the speed of light (~3 × 10⁸ m s⁻¹), setting all free electrons into drift simultaneously.', c:'Current onset is governed by the propagation speed of the electric field wave in the circuit, not by a single electron travelling physically from the switch to the bulb.', tag:'NCERT Exception' },
    { t:'In a non-uniform metallic wire of varying cross-section A(x) carrying steady current, electric current I is strictly the same everywhere, whereas current density J = I/A, electric field E = ρJ, and drift speed v_d = I/(neA) all vary inversely with A.', c:'Charge conservation in steady state (∂ρ/∂t = 0) forces I to be uniform along a series conductor; narrower sections must therefore have higher J, higher E, and higher v_d.', tag:'Concept Trap' },
    { t:'Current I is a SCALAR quantity even though we draw arrows on wires, whereas current density J is a true VECTOR quantity.', c:'Currents meeting at a junction add algebraically by Kirchhoff\'s junction rule independent of the angle between the wires, violating the parallelogram law of vector addition.', tag:'Concept Trap' },
    { t:'When a semiconductor (Si or Ge) is heated, its relaxation time τ decreases due to increased collisions, yet its resistivity ρ DECREASES sharply (α < 0).', c:'In ρ = m/(ne²τ), the exponential rise in free carrier concentration n(T) with temperature completely overwhelms the slight decrease in relaxation time τ.', tag:'NCERT Exception' },
    { t:'Standard resistance coils and metre bridge wires are made of manganin or constantan because they have BOTH high resistivity ρ AND a negligibly small temperature coefficient of resistance α.', c:'A near-zero α prevents resistance drift due to Joule heating during the experiment, while high ρ yields convenient resistance values in compact wire lengths.', tag:'Practical Trap' },
    { t:'For two bulbs rated (P₁, V₀) and (P₂, V₀) with P₁ < P₂ (say 40 W and 100 W at 220 V), the lower-wattage bulb (40 W) has HIGHER resistance (R = V₀²/P) and glows BRIGHTER when connected in SERIES, whereas the 100 W bulb glows brighter in PARALLEL.', c:'Rated resistance is R = V₀²/P_rated; in series I is same so P_actual = I²R favours larger R (40 W bulb), whereas in parallel V is same so P_actual = V²/R favours smaller R (100 W bulb).', tag:'Order Inversion' },
    { t:'At maximum power transfer (external load R = internal resistance r), the efficiency of the cell is only 50%, NOT 100%.', c:'Efficiency η = P_out / P_total = I²R / [I²(R + r)] = R / (R + r); setting R = r gives η = r/(2r) = 50%, while η → 100% only as R → ∞ (where power output → 0).', tag:'Boundary Failure' },
    { t:'Interchanging the positions of the cell and the galvanometer in a balanced Wheatstone bridge does NOT disturb the null balance condition (P/Q = R/S).', c:'P/Q = R/S is algebraically equivalent to P/R = Q/S; the conjugate diagonals of a balanced bridge remain independent of each other.', tag:'Concept Trap' }
  ],
  flows:[
    { t:'Temperature Increase ΔT > 0 → Effect on n, τ, and Resistivity ρ = m/(ne²τ)', root:'Identify material class when temperature T increases',
      br:[
        { l:'Metals (Cu, Ag, Al)', n:['n ≈ constant (already ~10²⁸ m⁻³)','τ decreases sharply (thermal agitation)','ρ increases linearly (α > 0)'] },
        { l:'Alloys (Manganin, Constantan)', n:['High disorder scattering even at 0 K','τ decreases very weakly with T','ρ is large and nearly constant (α ≈ 0)'] },
        { l:'Semiconductors (Si, Ge) & Carbon', n:['n increases exponentially (covalent bonds break)','Rise in n dominates over drop in τ','ρ decreases exponentially (α < 0)'] }
      ]
    },
    { t:'Optimal Cell Grouping Strategy for n Identical Cells (ε, r) across External Load R', root:'Compare external resistance R with single-cell internal resistance r',
      br:[
        { l:'R ≫ nr (high external load)', n:['Use SERIES grouping','I = nε / (R + nr) ≈ n(ε/R)','Current is n times single-cell current'] },
        { l:'R ≪ r/n (very low external load)', n:['Use PARALLEL grouping','I = ε / (R + r/n) ≈ n(ε/r)','Current is n times single-cell current'] },
        { l:'Mixed grouping (m rows × k cells = n)', n:['Max current when external R = r_net = kr/m','I_max = nε / (2√(nRr))','Matches load impedance to internal impedance'] }
      ]
    },
    { t:'Wire Reshaping vs Cutting: Shortcut Chain', chain:[
      'Check if total mass/volume V = A·l of the wire is conserved',
      'Stretched to length l\' = n·l → cross-section becomes A\' = A/n → new resistance R\' = n²R',
      'Radius compressed to r\' = r/k at constant volume → A\' = A/k² and l\' = k²l → new resistance R\' = k⁴R',
      'For small fractional stretch Δl/l ≪ 1 at constant volume → ΔR/R = 2(Δl/l) = −2(ΔA/A) = −4(Δr/r)'
    ] }
  ],
  lab:[
    { t:'Metre Bridge — End Error & Interchanging Gaps', d:'To minimize percentage error in R = S·l₁/(100 − l₁), choose standard resistance S so the null point l₁ lies near the middle (40–60 cm). Interchanging R and S and averaging eliminates asymmetry / end errors.' },
    { t:'Metre Bridge — Effect of Wire Radius or Galvanometer Shunt', d:'Changing the galvanometer resistance or cell EMF alters sensitivity (deflection away from null) but does NOT shift the null point l₁; however, non-uniform cross-section of the 1 m wire directly invalidates R/S = l₁/(100 − l₁).' },
    { t:'Ohm\'s Law V–I Graph — Rheostat & Ammeter/Voltmeter Hookup', d:'Ammeter (very low resistance) goes in SERIES; voltmeter (very high resistance) goes in PARALLEL across the unknown resistor. Take brief readings by closing the plug key only during observation to prevent Joule heating from curving the V–I line.' },
    { t:'Colour Code / Standard Resistors vs Non-Ohmic Devices', d:'Ohmic metal wire gives a straight line through origin; GaAs shows a negative-resistance region (dI/dV < 0) beyond peak voltage; p-n diode is strongly non-linear and asymmetric with polarity.' }
  ],
  pairs:[
    { g:'Material / device → V–I or ρ–T characteristic behaviour', a:'Copper wire at constant temperature', b:'Linear V–I graph passing through origin; positive α' },
    { g:'Material / device → V–I or ρ–T characteristic behaviour', a:'Gallium Arsenide (GaAs)', b:'Non-linear V–I graph exhibiting a negative resistance region (ΔV/ΔI < 0)' },
    { g:'Material / device → V–I or ρ–T characteristic behaviour', a:'Manganin / Constantan alloy wire', b:'Resistivity nearly independent of temperature (α ≈ 10⁻⁵ K⁻¹)' },
    { g:'Material / device → V–I or ρ–T characteristic behaviour', a:'Silicon / Germanium semiconductor', b:'Resistivity decreases rapidly with rise in temperature (α < 0)' },
    { g:'Electrical quantity → microscopic formula or conservation law', a:'Drift speed v_d of electrons', b:'e E τ / m  (or I / neA)' },
    { g:'Electrical quantity → microscopic formula or conservation law', a:'Electrical resistivity ρ of a metal', b:'m / (n e² τ)' },
    { g:'Electrical quantity → microscopic formula or conservation law', a:'Kirchhoff\'s First Law (Junction rule ΣI = 0)', b:'Conservation of electric charge (no charge accumulation at node)' },
    { g:'Electrical quantity → microscopic formula or conservation law', a:'Kirchhoff\'s Second Law (Loop rule ΣΔV = 0)', b:'Conservation of energy (electrostatic force is conservative)' }
  ],
  orders:[
    { q:'Electrical resistivity ρ at room temperature (from lowest to highest resistivity)', s:['Pure metals (Ag, Cu ~ 10⁻⁸ Ω m)','Resistance alloys (Nichrome ~ 10⁻⁶ Ω m)','Elemental semiconductors (Ge, Si ~ 1 to 10³ Ω m)','Insulators (Glass, Quartz ~ 10¹² to 10¹⁶ Ω m)'], sep:'<', why:'Resistivity spans over 24 orders of magnitude from silver (1.6 × 10⁻⁸ Ω m) to fused quartz (~10¹⁶ Ω m).' },
    { q:'Terminal potential difference V across a real cell (EMF ε, internal resistance r > 0) under different operating states (from highest V to lowest V)', s:['Cell being charged by external charger (V = ε + Ir)','Cell on open circuit with zero current (V = ε)','Cell discharging through finite external load R (V = ε − Ir)','Cell with terminals short-circuited (V = 0)'], sep:'>', why:'Current reversal flips the sign of Ir drop across the internal resistance.' }
  ],
  facts:{
    T:[
      'Resistivity ρ of a metallic wire depends on the nature of the material and temperature, and does NOT change when the length or cross-sectional area of the wire is altered.',
      'In a balanced Wheatstone bridge, the current through the central galvanometer is zero, so replacing the galvanometer with any resistor or an open switch leaves the currents in the four arms unchanged.',
      'For a cell of EMF ε and internal resistance r discharging into an external load R, the graph of terminal voltage V versus current I is a straight line with y-intercept ε and slope −r.',
      'When two bulbs of ratings 25 W–220 V and 100 W–220 V are connected in series across a 440 V supply, the 25 W bulb fuses because the voltage drop across it exceeds 220 V.',
      'Electron mobility μ = |v_d|/E has SI unit m² V⁻¹ s⁻¹ and is independent of the applied electric field in an Ohmic conductor.',
      'When a uniform wire of resistance R is bent into a closed circle, the effective resistance between two diametrically opposite points is R/4.',
      'During the charging of a secondary cell by an external DC source, the terminal potential difference across the cell is greater than its EMF (V = ε + Ir).',
      'Relaxation time τ in a metal decreases with increase in temperature because the thermal root-mean-square speed of electrons increases, causing more frequent collisions with lattice ions.'
    ],
    F:[
      'When a metallic wire is stretched to double its original length at constant volume, both its resistance and its resistivity become four times their initial values.',
      'Kirchhoff\'s loop rule (ΣΔV = 0) is based on the conservation of electric charge, whereas the junction rule (ΣI = 0) is based on conservation of energy.',
      'In a non-uniform metallic conductor of varying cross-section carrying a steady DC current, the drift speed of electrons is the same at every cross-section.',
      'A cell transfers maximum power to an external load R when R → ∞, because battery efficiency approaches 100% in that limit.',
      'The temperature coefficient of resistance α is positive for silicon and germanium and negative for copper and silver.',
      'If the galvanometer and the battery are interchanged in a balanced Wheatstone bridge, the bridge becomes unbalanced unless all four resistors are equal.',
      'In a metre bridge experiment, the null point shifts towards the left end if a high resistance is connected in series with the galvanometer.',
      'The terminal potential difference of a real cell (r > 0) can never exceed its electromotive force ε under any circuit condition.'
    ]
  },
  mcq:[
    { q:'A cylindrical metallic wire of initial resistance R is stretched uniformly so that its length becomes 3 times its original length (volume remaining constant). Its new resistance will be:',
      o:['9R','3R','R / 3','27R'], a:0, tag:'Calculation Trap',
      sol:['Volume V = A·l is constant ⇒ when l\' = 3l, new area A\' = A/3.','R\' = ρ l\' / A\' = ρ (3l) / (A/3) = 9 (ρl/A) = 9R (since R ∝ l² at constant volume).'] },
    { q:'Two electric bulbs rated 40 W–220 V and 100 W–220 V are connected in series across a 220 V mains supply. Which statement is correct regarding their brightness?',
      o:['The 40 W bulb glows brighter because its resistance is 2.5 times that of the 100 W bulb','The 100 W bulb glows brighter because its power rating is higher','Both bulbs glow with equal brightness since they carry the same current','Both bulbs consume 40 W each in series'], a:0, tag:'Order Inversion',
      sol:['Resistance of a bulb from rating: R = V_rated² / P_rated.','Thus R₄₀ / R₁₀₀ = 100 / 40 = 2.5 (40 W bulb has higher resistance).','In series, current I is identical through both, so actual power dissipated P = I²R is larger in the 40 W bulb.'] },
    { q:'A uniform wire of resistance 12 Ω is bent in the form of a closed circle. The effective resistance between the ends of any diameter of this circle is:',
      o:['3 Ω','6 Ω','12 Ω','2.4 Ω'], a:0, tag:'Calculation Trap',
      sol:['A diameter divides the 12 Ω circle into two equal semicircular halves of resistance 6 Ω each.','The two 6 Ω halves are connected in parallel across the diameter: R_eq = (6 × 6)/(6 + 6) = 3 Ω (or R/4).'] },
    { q:'In a metre bridge experiment, the balance point is obtained at a length of 40 cm from the left end when an unknown resistance R is in the left gap and a standard resistance of 6 Ω is in the right gap. The value of R is:',
      o:['4 Ω','9 Ω','3.6 Ω','6 Ω'], a:0, tag:'Calculation Trap',
      sol:['At balance, R / S = l₁ / (100 − l₁).','R / 6 = 40 / (100 − 40) = 40 / 60 = 2/3 ⇒ R = 6 × (2/3) = 4 Ω.'] },
    { q:'A battery of EMF 10 V and internal resistance 3 Ω is connected to an external resistor R. If the current in the circuit is 0.5 A, the terminal voltage of the battery is:',
      o:['8.5 V','11.5 V','10 V','7.0 V'], a:0, tag:'Sign Convention',
      sol:['For a discharging battery, terminal voltage V = ε − Ir.','V = 10 V − (0.5 A)(3 Ω) = 10 − 1.5 = 8.5 V (and external resistance R = V/I = 17 Ω).'] },
    { q:'Why is manganin (or constantan) preferred over copper for winding standard resistance coils?',
      o:['It has a very low temperature coefficient of resistance α and high resistivity ρ','It has a very high positive temperature coefficient of resistance α','It is a superconductor at room temperature','Its free electron density increases exponentially with temperature'], a:0, tag:'NCERT Exception',
      sol:['Alloys like manganin and constantan have α ≈ 10⁻⁵ K⁻¹ (nearly zero) so resistance does not change with Joule heating or ambient temperature changes, and high ρ keeps wire length compact.'] }
  ],
  gens:[
    function(R){
      var R0 = R.pick([4, 5, 6, 8, 10, 12, 15, 20]);
      var n = R.pick([2, 3, 4, 5]);
      var Rnew = n * n * R0;
      return {
        q:'A uniform metallic wire of resistance ' + R0 + ' Ω is drawn out so that its length is increased to ' + n + ' times its original length at constant volume. The resistance of the stretched wire is:',
        ans:Rnew, d:[n * R0, R0 / n, n * n * n * R0], u:'Ω',
        tag:'Calculation Trap',
        sol:['At constant volume V = A·l, stretching length by factor n reduces cross-sectional area by factor n', 'R\' = n² R₀ = ' + n + '² × ' + R0 + ' = ' + Rnew + ' Ω']
      };
    },
    function(R){
      var S = R.pick([6, 9, 12, 15, 18, 24, 30]);
      var l1 = R.pick([20, 25, 40, 50, 60, 75, 80]);
      var Rx = S * l1 / (100 - l1);
      var inv = S * (100 - l1) / l1;
      if (Math.abs(Rx - inv) < 0.01) l1 = 40, Rx = S * 40 / 60, inv = S * 60 / 40;
      return {
        q:'In a metre bridge, the null point is found at a distance of ' + l1 + ' cm from the left end A. If the known resistance in the right gap is ' + S + ' Ω, the unknown resistance in the left gap is:',
        ans:Rx, d:[inv, S * (l1 / 100), S + l1], u:'Ω',
        tag:'Calculation Trap',
        sol:['Metre bridge balance condition: R / S = l₁ / (100 − l₁)', 'R = ' + S + ' × (' + l1 + ' / ' + (100 - l1) + ') = ' + R.f(Rx) + ' Ω']
      };
    },
    function(R){
      var E = R.pick([6, 9, 12, 15, 18, 24]);
      var r = R.pick([1, 2, 3, 4]);
      var Rext = R.pick([2, 4, 5, 6, 8, 10, 11]);
      var I = E / (Rext + r);
      var V = I * Rext;
      return {
        q:'A cell of EMF ' + E + ' V and internal resistance ' + r + ' Ω is connected across an external resistor of resistance ' + Rext + ' Ω. The terminal potential difference across the cell is:',
        ans:V, d:[E + I * r, E - r, I * r], u:'V',
        tag:'Sign Convention',
        sol:['Circuit current I = ε / (R + r) = ' + E + ' / (' + Rext + ' + ' + r + ') = ' + R.f(I) + ' A', 'Terminal voltage V = ε − Ir = I R = ' + R.f(V) + ' V']
      };
    },
    function(R){
      var E = R.pick([6, 8, 10, 12, 16, 20, 24]);
      var r = R.pick([1, 2, 4, 5, 8]);
      var Pmax = (E * E) / (4 * r);
      return {
        q:'A battery has an EMF of ' + E + ' V and an internal resistance of ' + r + ' Ω. The maximum electric power that it can deliver to a variable external load resistor R is:',
        ans:Pmax, d:[(E * E) / r, (E * E) / (2 * r), E * r], u:'W',
        tag:'Boundary Failure',
        sol:['By maximum power transfer theorem, P_ext is maximum when R = r = ' + r + ' Ω', 'P_max = ε² / (4r) = ' + (E * E) + ' / (4 × ' + r + ') = ' + R.f(Pmax) + ' W']
      };
    },
    function(R){
      var I = R.pick([1.6, 3.2, 4.8, 6.4, 8.0]);
      var A_mm2 = R.pick([1, 2, 4, 5]);
      var n_e28 = R.pick([5, 8, 10]);
      var vd_mms = (I / (n_e28 * 1e28 * 1.6e-19 * A_mm2 * 1e-6)) * 1e3;
      return {
        q:'A metallic wire of cross-sectional area ' + A_mm2 + ' mm² carries a steady current of ' + I + ' A. If the free electron density is ' + n_e28 + ' × 10²⁸ m⁻³, the drift speed of electrons (in mm s⁻¹) is (take e = 1.6 × 10⁻¹⁹ C):',
        ans:vd_mms, d:[vd_mms * 10, vd_mms / 10, I / (A_mm2 * n_e28)], u:'mm s⁻¹',
        tag:'Unit Conversion Trap',
        sol:['v_d = I / (n e A) = ' + I + ' / (' + n_e28 + ' × 10²⁸ × 1.6 × 10⁻¹⁹ × ' + A_mm2 + ' × 10⁻⁶) m s⁻¹', 'Converting to mm s⁻¹ (× 10³): v_d = ' + R.f(vd_mms) + ' mm s⁻¹']
      };
    },
    function(R){
      var Rcircle = R.pick([12, 16, 20, 24, 32, 36, 40, 48]);
      var ang = R.pick([60, 90, 120, 180]);
      var f1 = ang / 360;
      var f2 = 1 - f1;
      var Req = Rcircle * f1 * f2;
      return {
        q:'A uniform wire of total resistance ' + Rcircle + ' Ω is bent into a closed circle. Two leads are connected at two points on the circumference that subtend a central angle of ' + ang + '° at the centre. The equivalent resistance between the two leads is:',
        ans:Req, d:[Rcircle * f1, Rcircle / 2, Rcircle * (f1 / f2)], u:'Ω',
        tag:'Calculation Trap',
        sol:['The two circular arcs have resistances R₁ = (' + ang + '/360)R = ' + R.f(Rcircle * f1) + ' Ω and R₂ = (' + (360 - ang) + '/360)R = ' + R.f(Rcircle * f2) + ' Ω in parallel', 'R_eq = R₁R₂ / (R₁ + R₂) = ' + R.f(Req) + ' Ω']
      };
    },
    function(R){
      var P1 = R.pick([25, 40, 50, 60]);
      var P2 = R.pick([100, 150, 200]);
      var Pser = (P1 * P2) / (P1 + P2);
      return {
        q:'Two heaters rated ' + P1 + ' W, 220 V and ' + P2 + ' W, 220 V are connected in SERIES across a 220 V supply. The total electric power consumed by the series combination is:',
        ans:Pser, d:[P1 + P2, (P1 + P2) / 2, P2 - P1], u:'W',
        tag:'Order Inversion',
        sol:['Since both are rated at the same voltage V₀ = 220 V and R = V₀²/P, series connection adds resistances: R_eq = R₁ + R₂', 'Therefore 1/P_series = 1/P₁ + 1/P₂ ⇒ P_series = P₁P₂ / (P₁ + P₂) = (' + P1 + ' × ' + P2 + ') / ' + (P1 + P2) + ' = ' + R.f(Pser) + ' W']
      };
    }
  ]
});

NEET.reg({
  id:'P13',
  subj:'Physics',
  type:'num',
  name:'Magnetic Effects of Current and Magnetism',
  syl:'Biot-Savart law and its application to current carrying circular loop. Ampere\'s law and its applications to infinitely long straight wire, straight and toroidal solenoids. Force on a moving charge in uniform magnetic and electric fields. Force on a current-carrying conductor in a uniform magnetic field. Force between two parallel current-carrying conductors—definition of ampere. Torque experienced by a current loop in a uniform magnetic field; Moving coil galvanometer—its sensitivity, and conversion to ammeter and voltmeter. Current loop as a magnetic dipole and its magnetic dipole moment. Bar magnet as an equivalent solenoid, magnetic field lines; Magnetic field due to a magnetic dipole (bar magnet) along its axis and perpendicular to its axis. Torque on a magnetic dipole in a uniform magnetic field. Para-, dia- and ferromagnetic substances with examples, effect of temperature on magnetic properties.',
  kw:['biot savart','ampere law','solenoid','toroid','lorentz force','cyclotron','galvanometer','shunt','diamagnetic','paramagnetic','ferromagnetic','curie law'],
  formulas:[
    { n:'Biot–Savart Law & Circular Arc / Loop Field', f:'dB = (μ₀ / 4π) I (dl × r̂) / r² ;  B_arc = (μ₀ I θ) / (4π R) ;  B_loop = μ₀ N I / (2R)', u:'T (or Wb m⁻²)', s:'θ in radians (θ = 2π gives single loop μ₀I/2R); on axis at distance x: B_axis = μ₀NIR² / [2(R² + x²)^(3/2)]', b:'Magnetostatic Biot–Savart holds for steady currents; at centre of a regular polygon of n sides it differs from a circle' },
    { n:'Ampere\'s Circuital Law, Straight Wire, Solenoid & Toroid', f:'∮ B · dl = μ₀ I_enc ;  B_wire = μ₀ I / (2πr) ;  B_sol = μ₀ n I ;  B_toroid = μ₀ N I / (2πr)', u:'T m ;  T', s:'n = N/L is turns per unit length; at one end of long solenoid B_end = ½ μ₀nI; outside ideal solenoid or inside hollow core of toroid B = 0', b:'B_sol = μ₀nI assumes solenoid length L ≫ radius R and point is deep inside away from ends' },
    { n:'Lorentz Force & Circular / Helical Orbit in B', f:'F = q (E + v × B) ;  r = m v⊥ / (|q| B) = √(2mK) / (|q| B) ;  f_c = |q| B / (2π m)', u:'N ;  m ;  Hz', s:'Magnetic force q(v × B) is always ⊥ v so magnetic work W_B = 0 and speed/KE remain constant; pitch p = v∥ T = 2πm v cosθ / (|q|B)', b:'Cyclotron frequency f_c is independent of v and r ONLY in the non-relativistic regime (m = m₀ constant); fails for fast electrons' },
    { n:'Force on Wire & Between Two Parallel Currents', f:'F = I (L × B) ;  F / L = (μ₀ I₁ I₂) / (2π d)', u:'N ;  N m⁻¹', s:'Parallel currents ATTRACT, antiparallel currents REPEL; 1 A is the current that produces 2 × 10⁻⁷ N m⁻¹ force at d = 1 m in vacuum', b:'Notice: TWO parallel current wires attract, whereas TWO parallel beams of like charges moving in vacuum attract magnetically by (v/c)² F_E < F_E so net force is still repulsive!' },
    { n:'Magnetic Dipole Moment & Torque on Current Loop', f:'M = N I A ;  τ = M × B (τ = N I A B sinθ) ;  U = −M · B = −M B cosθ', u:'A m² (or J T⁻¹) ;  N m ;  J', s:'θ is angle between normal n̂ to loop plane and B (if α is angle between plane of loop and B, τ = NIAB cosα!)', b:'In a uniform magnetic field net force F_net = 0 on any closed current loop regardless of shape; torque depends only on area A, not shape' },
    { n:'Moving Coil Galvanometer (MCG) & Sensitivities', f:'N I A B = k φ ;  I_s = φ / I = N A B / k ;  V_s = φ / V = I_s / R_g = N A B / (k R_g)', u:'rad A⁻¹ ;  rad V⁻¹', s:'Radial magnetic field (concave poles + soft iron cylinder) keeps sinθ = 1 everywhere so scale is linear (φ ∝ I)', b:'Doubling N doubles current sensitivity I_s, but also doubles coil resistance R_g, leaving voltage sensitivity V_s unchanged' },
    { n:'Galvanometer Conversion to Ammeter & Voltmeter', f:'Ammeter shunt (parallel): S = I_g G / (I − I_g) ;  Voltmeter multiplier (series): R = (V / I_g) − G', u:'Ω', s:'Ideal ammeter has R_A = 0; ideal voltmeter has R_V = ∞', b:'An ammeter connected accidentally in parallel across a source draws huge current (since R_A ≈ S is tiny) and risks burning out' },
    { n:'Bar Magnet Axial/Equatorial Field & Gyromagnetic Ratio', f:'B_ax = (μ₀ / 4π) (2M / r³) ;  B_eq = (μ₀ / 4π) (M / r³) ;  M / L = q / (2m)', u:'T ;  C kg⁻¹', s:'For orbital electron, M/L = e/(2m_e) = 8.8 × 10¹⁰ C kg⁻¹ and Bohr magneton μ_B = eh/(4πm_e) = 9.27 × 10⁻²⁴ A m²', b:'Short dipole 1/r³ formulas hold when r ≫ half-length l of bar magnet' },
    { n:'Magnetisation, Susceptibility & Curie\'s Law', f:'B = μ₀ (H + I_M) = μ₀ (1 + χ_m) H = μ₀ μ_r H ;  χ_para = C μ₀ / T', u:'χ_m, μ_r dimensionless', s:'Dia: −1 ≤ χ < 0 (independent of T); Para: χ > 0 small (χ ∝ 1/T); Ferro: χ ≫ 1 (becomes paramagnetic above Curie temperature T_C)', b:'Curie\'s law χ ∝ 1/T fails at very high B/T (where magnetisation saturates); above T_C ferromagnets obey Curie–Weiss law χ = C/(T − T_C)' }
  ],
  traps:[
    { t:'A static or steady magnetic field does ZERO work on a moving charged particle and can never change its speed or kinetic energy, though it continuously changes its velocity and momentum vectors.', c:'Magnetic Lorentz force F_B = q(v × B) is always perpendicular to velocity v, so instantaneous power P = F_B · v = 0.', tag:'Concept Trap' },
    { t:'Two parallel metallic wires carrying currents in the same direction ATTRACT each other, whereas two parallel beams of electrons moving in the same direction in vacuum REPEL each other.', c:'Current-carrying wires are electrically neutral overall so only the attractive magnetic force acts; for two bare electron beams, electrostatic repulsion F_E exceeds magnetic attraction F_B = (v²/c²)F_E since v < c.', tag:'Concept Trap' },
    { t:'In the torque formula τ = NIAB sinθ for a current loop, θ is the angle between the AREA NORMAL n̂ and B; if the question gives angle α between the PLANE of the coil and B, then τ = NIAB cosα.', c:'Because the normal n̂ is perpendicular to the plane of the coil, θ = 90° − α, making sinθ = cosα (a classic NTA wording trap).', tag:'Sign Convention' },
    { t:'Increasing the number of turns N of a moving coil galvanometer increases its current sensitivity I_s = NAB/k, but does NOT necessarily increase its voltage sensitivity V_s = NAB/(kR_g).', c:'If N is doubled using the same gauge wire, length and resistance R_g also double, cancelling the factor of 2 in the numerator of V_s = I_s / R_g.', tag:'Concept Trap' },
    { t:'Diamagnetism is UNIVERSAL (present in all materials) and is completely independent of temperature, whereas paramagnetism and ferromagnetism weaken as temperature rises.', c:'Diamagnetism arises from induced orbital current changes governed by Lenz\'s law inside every atom, which is unaffected by thermal agitation.', tag:'NCERT Exception' },
    { t:'A superconductor exhibits perfect diamagnetism with magnetic susceptibility χ_m = −1 and relative permeability μ_r = 0 (Meissner effect), completely expelling magnetic field lines.', c:'Persistent surface screening currents cancel the internal magnetic field B = 0 everywhere inside a superconductor below its critical temperature.', tag:'Zero-Case' },
    { t:'If a bar magnet of magnetic moment M is cut into two equal halves: (i) transverse to its length, each piece has pole strength m and moment M/2; (ii) along its length (axially), each piece has pole strength m/2 and moment M/2.', c:'In both cuts the product of pole strength and magnetic length gets halved: (m)(L/2) = M/2 for transverse cut, and (m/2)(L) = M/2 for longitudinal cut.', tag:'Calculation Trap' },
    { t:'Inside a current-carrying long straight solid cylindrical wire of radius R (uniform current density), B is zero on the axis, increases linearly as B ∝ r for r < R, is maximum at the surface r = R, and falls off as B ∝ 1/r for r > R.', c:'For r < R, enclosed current in Ampere\'s law is I_enc = I(r²/R²), so B(2πr) = μ₀I(r²/R²) ⇒ B = (μ₀Ir)/(2πR²).', tag:'Graph Trap' }
  ],
  flows:[
    { t:'Charged Particle q Entering Uniform Magnetic Field B with Velocity v at Angle θ', root:'Check angle θ between velocity vector v and magnetic field B',
      br:[
        { l:'θ = 0° or 180° (v ∥ B or antiparallel)', n:['F = qvB sin 0° = 0','Undeviated straight-line motion','Constant velocity v'] },
        { l:'θ = 90° (v ⊥ B)', n:['Uniform circular motion in plane ⊥ B','r = mv/(|q|B) ;  T = 2πm/(|q|B)','T and f are independent of speed v'] },
        { l:'0° < θ < 90° (oblique entry)', n:['Helical path with axis along B','Radius r = mv sinθ / (|q|B)','Pitch p = (v cosθ) T = 2πmv cosθ / (|q|B)'] }
      ]
    },
    { t:'Classification of Magnetic Materials by χ_m, μ_r, and Temperature Dependence', root:'Examine susceptibility χ_m and behaviour in non-uniform magnetic field',
      br:[
        { l:'Diamagnetic (Bi, Cu, H₂O, NaCl, N₂)', n:['−1 ≤ χ_m < 0 ;  0 ≤ μ_r < 1','Weakly repelled (moves from strong → weak B)','χ_m is independent of temperature T'] },
        { l:'Paramagnetic (Al, Na, Ca, O₂, CuCl₂)', n:['Small positive χ_m > 0 ;  μ_r > 1','Weakly attracted (moves from weak → strong B)','Obeys Curie\'s law: χ_m ∝ 1/T'] },
        { l:'Ferromagnetic (Fe, Co, Ni, Gd, Alnico)', n:['Very large χ_m ≫ 1 ;  μ_r ≫ 1','Strongly attracted; shows domains','Above Curie temp T_C → becomes paramagnetic'] }
      ]
    },
    { t:'Straight Wire of Length L Bent into N-Turn Circular Coil: Field Scaling Chain', chain:[
      'Fixed total wire length L = N · (2πR) ⇒ radius of N-turn coil is R = L / (2πN) = R₁ / N',
      'Field at centre of 1-turn loop (radius R₁): B₁ = μ₀I / (2R₁)',
      'Field at centre of N-turn loop (radius R = R₁/N): B_N = μ₀ N I / [2(R₁/N)] = N² B₁',
      'Magnetic dipole moment of N-turn loop: M_N = N I (πR²) = N I π(R₁/N)² = M₁ / N (decreases by factor N!)'
    ] }
  ],
  lab:[
    { t:'Galvanometer Resistance (G) by Half-Deflection Method', d:'First adjust high resistance box R alone for deflection θ; then close shunt key and adjust S until deflection is θ/2. Since R ≫ S, G = R·S / (R − S) ≈ S. Figure of merit k = E / [(R + G)θ] A/div.' },
    { t:'Conversion of Galvanometer to Ammeter / Voltmeter Verification', d:'For an ammeter of range I, low shunt wire S = I_g G/(I − I_g) is connected in parallel; effective length of shunt wire l = πr²S/ρ must be measured between binding terminal edges.' },
    { t:'Magnetic Field Lines of Bar Magnet & Neutral Points', d:'With North pole of bar magnet pointing North, two neutral points (where B_magnet = B_H of Earth) lie on the EQUATORIAL line; with North pole pointing South, the two neutral points lie on the AXIAL line.' },
    { t:'Soft Iron vs Hard Steel Hysteresis / Core Selection', d:'Soft iron (low retentivity/coercivity, high permeability, narrow hysteresis loop) is used for electromagnet cores and transformer cores; Alnico/steel (high retentivity & high coercivity) is used for permanent magnets.' }
  ],
  pairs:[
    { g:'Current configuration → magnetic field B at the specified point', a:'At the centre of a circular coil of N turns and radius R', b:'μ₀ N I / (2R)' },
    { g:'Current configuration → magnetic field B at the specified point', a:'At distance r from an infinitely long straight wire', b:'μ₀ I / (2π r)' },
    { g:'Current configuration → magnetic field B at the specified point', a:'Well inside a long straight solenoid of n turns per unit length', b:'μ₀ n I' },
    { g:'Current configuration → magnetic field B at the specified point', a:'At one end on the axis of a long straight solenoid', b:'½ μ₀ n I' },
    { g:'Current configuration → magnetic field B at the specified point', a:'At the centre of a semicircular wire arc of radius R', b:'μ₀ I / (4R)' },
    { g:'Magnetic substance / state → susceptibility χ_m & permeability μ_r', a:'Superconductor below critical temperature (Meissner state)', b:'χ_m = −1 and μ_r = 0' },
    { g:'Magnetic substance / state → susceptibility χ_m & permeability μ_r', a:'Bismuth, Copper, or Water (diamagnetic)', b:'Small negative χ_m (−10⁻⁵ to −10⁻⁹) and μ_r slightly less than 1' },
    { g:'Magnetic substance / state → susceptibility χ_m & permeability μ_r', a:'Aluminium, Liquid Oxygen, or Sodium (paramagnetic)', b:'Small positive χ_m (+10⁻⁵ to +10⁻³) and μ_r slightly greater than 1' },
    { g:'Magnetic substance / state → susceptibility χ_m & permeability μ_r', a:'Soft Iron or Cobalt below Curie temperature (ferromagnetic)', b:'Very large positive χ_m (~10³ to 10⁵) and μ_r ≫ 1' }
  ],
  orders:[
    { q:'Radius r = mv/(|q|B) of circular path in the same uniform magnetic field B when a triton (³H⁺), deuteron (²H⁺), proton (¹H⁺), and electron (e⁻) enter perpendicular to B with the SAME SPEED v (from largest to smallest radius)', s:['Triton ³H⁺ (m/q = 3m_p/e)','Deuteron ²H⁺ (m/q = 2m_p/e)','Proton ¹H⁺ (m/q = m_p/e)','Electron e⁻ (m/q = m_e/e)'], sep:'>', why:'For same speed v in same B, radius r = mv/(|q|B) ∝ m/|q|, so ³H⁺ (3) > ²H⁺ (2) > ¹H⁺ (1) > e⁻ (1/1836).' },
    { q:'Magnetic susceptibility χ_m of materials at room temperature (from lowest/most negative to highest)', s:['Superconductor (χ = −1)','Diamagnetic Bismuth (χ ≈ −1.7 × 10⁻⁴)','Vacuum (χ = 0)','Paramagnetic Aluminium (χ ≈ +2.3 × 10⁻⁵)','Ferromagnetic Soft Iron (χ ≫ 1000)'], sep:'<', why:'Susceptibility increases from −1 (Meissner limit) through negative diamagnets, zero in vacuum, small positive paramagnets, to huge positive ferromagnets.' }
  ],
  facts:{
    T:[
      'Magnetic field lines always form continuous closed loops (∮ B · dA = 0) because isolated magnetic monopoles do not exist.',
      'A proton and an alpha particle entering a uniform magnetic field perpendicular to B with the same kinetic energy describe circular paths of EQUAL radii (since √(m_α)/q_α = √(4m_p)/(2e) = √(m_p)/e).',
      'In a moving coil galvanometer, a cylindrical soft-iron core and concave pole pieces produce a radial magnetic field so that the plane of the coil remains parallel to B in all orientations.',
      'To convert a galvanometer into an ammeter of higher range, a smaller shunt resistance S must be connected in parallel with it.',
      'When a current-carrying wire of fixed length L is bent into a single circular turn, it produces the maximum magnetic dipole moment among all planar closed loops of perimeter L.',
      'Liquid oxygen (O₂) is paramagnetic because its molecules possess two unpaired electrons in antibonding π* orbitals, whereas nitrogen (N₂) and water (H₂O) are diamagnetic.',
      'Above its Curie temperature T_C (about 1043 K for iron), a ferromagnetic substance loses its spontaneous domain alignment and behaves as a paramagnetic substance.',
      'In a velocity selector with crossed electric and magnetic fields (E ⊥ B ⊥ v), only charged particles with speed v = E/B pass through undeviated, independent of their charge q or mass m.'
    ],
    F:[
      'The time period of revolution of a non-relativistic proton in a uniform magnetic field increases linearly as its speed increases.',
      'An ideal ammeter has infinite resistance and an ideal voltmeter has zero resistance.',
      'When a wire of fixed length L is rewound from 1 circular turn into N circular turns carrying the same current I, its magnetic dipole moment increases by a factor of N².',
      'Diamagnetic susceptibility is inversely proportional to absolute temperature (χ ∝ 1/T) according to Curie\'s law.',
      'The magnetic field outside an ideal infinitely long straight solenoid carrying current I is equal to μ₀nI/2.',
      'A stationary point charge placed in a strong uniform static magnetic field experiences a force proportional to the magnetic field strength.',
      'When a bar magnet is cut into two equal halves perpendicular to its magnetic axis, one piece becomes an isolated North pole and the other becomes an isolated South pole.',
      'Two parallel straight conductors carrying currents in opposite directions attract each other with a force per unit length μ₀I₁I₂/(2πd).'
    ]
  },
  mcq:[
    { q:'A wire of fixed length L carrying current I is first bent into a circular loop of 1 turn, producing magnetic field B₀ at its centre. If the same wire is now bent into a circular coil of N turns carrying the same current I, the magnetic field at its centre becomes:',
      o:['N² B₀','N B₀','B₀ / N','B₀ / N²'], a:0, tag:'Calculation Trap',
      sol:['For 1 turn: 2πR₁ = L and B₀ = μ₀I / (2R₁).','For N turns from the same wire length L: N(2πR_N) = L ⇒ R_N = R₁ / N.','New field at centre: B_N = μ₀ N I / (2R_N) = μ₀ N I / [2(R₁/N)] = N² (μ₀I / 2R₁) = N² B₀.'] },
    { q:'A proton (m, e), a deuteron (2m, e), and an alpha particle (4m, 2e) enter a region of uniform magnetic field B perpendicularly with the SAME kinetic energy K. The ratio of the radii of their circular paths (r_p : r_d : r_α) is:',
      o:['1 : √2 : 1','1 : 2 : 4','1 : √2 : 2','1 : 1 : 2'], a:0, tag:'Calculation Trap',
      sol:['Radius in terms of kinetic energy K: r = √(2mK) / (|q|B) ⇒ r ∝ √m / q for constant K and B.','r_p : r_d : r_α = (√1 / 1) : (√2 / 1) : (√4 / 2) = 1 : √2 : (2/2) = 1 : √2 : 1.'] },
    { q:'A moving coil galvanometer of resistance G = 99 Ω gives full-scale deflection for a current I_g = 10 mA. To convert it into an ammeter of range 0 to 1 A, the shunt resistance required is:',
      o:['1 Ω in parallel','1 Ω in series','9.9 Ω in parallel','990 Ω in series'], a:0, tag:'Calculation Trap',
      sol:['Shunt resistance in parallel: S = I_g G / (I − I_g).','With I_g = 0.01 A, I = 1.0 A, G = 99 Ω: S = (0.01 × 99) / (1.0 − 0.01) = 0.99 / 0.99 = 1 Ω in parallel.'] },
    { q:'A circular coil of 50 turns and area 0.02 m² carries a current of 2 A and is placed in a uniform magnetic field of 0.5 T such that the PLANE of the coil makes an angle of 60° with the magnetic field. The torque acting on the coil is:',
      o:['0.5 N m','0.866 N m','1.0 N m','Zero'], a:0, tag:'Sign Convention',
      sol:['Magnetic moment M = N I A = 50 × 2 × 0.02 = 2.0 A m².','Since the plane of the coil makes α = 60° with B, the normal to the plane makes θ = 90° − 60° = 30° with B.','Torque τ = M B sinθ = M B cosα = 2.0 × 0.5 × sin 30° = 1.0 × 0.5 = 0.5 N m.'] },
    { q:'Which of the following pairs of substances are BOTH diamagnetic at room temperature?',
      o:['Bismuth and Water','Aluminium and Copper','Liquid Oxygen and Sodium','Nickel and Bismuth'], a:0, tag:'NCERT Exception',
      sol:['Bismuth (Bi), copper (Cu), water (H₂O), nitrogen (N₂), and NaCl are diamagnetic (χ < 0).','Aluminium, sodium, calcium, and O₂ are paramagnetic; nickel, iron, and cobalt are ferromagnetic.'] },
    { q:'Two long parallel straight wires separated by 10 cm in air carry currents of 5 A and 10 A in OPPOSITE directions. The magnetic force between them per metre length is:',
      o:['1.0 × 10⁻⁴ N m⁻¹, repulsive','1.0 × 10⁻⁴ N m⁻¹, attractive','2.0 × 10⁻⁴ N m⁻¹, attractive','5.0 × 10⁻⁵ N m⁻¹, repulsive'], a:0, tag:'Sign Convention',
      sol:['Force per unit length: F/L = (μ₀ / 2π) (I₁ I₂ / d) = (2 × 10⁻⁷) × (5 × 10) / 0.10 = 1.0 × 10⁻⁴ N m⁻¹.','Since currents are antiparallel (opposite directions), the force is repulsive.'] }
  ],
  gens:[
    function(R){
      var G = R.pick([49, 99, 19, 29, 90]);
      var mult = (G === 90) ? 10 : (G + 1);
      var Ig_mA = R.pick([10, 20, 50]);
      var I_A = (Ig_mA * mult) / 1000;
      var S = (Ig_mA * G) / (I_A * 1000 - Ig_mA);
      return {
        q:'A galvanometer of coil resistance ' + G + ' Ω gives full-scale deflection for a current of ' + Ig_mA + ' mA. The value of the shunt resistance (connected in parallel) needed to convert it into an ammeter of range 0 to ' + I_A + ' A is:',
        ans:S, d:[G / mult, S * 10, (I_A * 1000 / Ig_mA) * G], u:'Ω',
        tag:'Calculation Trap',
        sol:['Shunt formula: S = I_g · G / (I − I_g)', 'S = (' + Ig_mA + ' mA × ' + G + ' Ω) / (' + (I_A * 1000) + ' mA − ' + Ig_mA + ' mA) = ' + R.f(S) + ' Ω']
      };
    },
    function(R){
      var G = R.pick([20, 50, 80, 100]);
      var Ig_mA = R.pick([2, 5, 10, 20]);
      var V = R.pick([5, 10, 15, 20, 25]);
      var Rser = (V / (Ig_mA * 1e-3)) - G;
      return {
        q:'A galvanometer has a resistance of ' + G + ' Ω and gives full-scale deflection for a current of ' + Ig_mA + ' mA. To convert it into a voltmeter of range 0 to ' + V + ' V, the high resistance R to be connected in series is:',
        ans:Rser, d:[(V / (Ig_mA * 1e-3)) + G, V / Ig_mA, Rser / 10], u:'Ω',
        tag:'Calculation Trap',
        sol:['Series multiplier resistance: R = (V / I_g) − G', 'R = (' + V + ' / ' + (Ig_mA * 1e-3) + ') − ' + G + ' = ' + (V / (Ig_mA * 1e-3)) + ' − ' + G + ' = ' + R.f(Rser) + ' Ω']
      };
    },
    function(R){
      var n_cm = R.pick([5, 8, 10, 15, 20]);
      var n_m = n_cm * 100;
      var I = R.pick([2, 2.5, 4, 5, 8]);
      var B_mT = 4 * Math.PI * 1e-7 * n_m * I * 1e3;
      return {
        q:'A long straight solenoid has ' + n_cm + ' turns per cm and carries a steady current of ' + I + ' A. The magnetic field B well inside the solenoid (in mT) is (take μ₀ = 4π × 10⁻⁷ T m A⁻¹):',
        ans:B_mT, d:[B_mT / 100, B_mT / 2, B_mT * 2], u:'mT',
        tag:'Unit Conversion Trap',
        sol:['Convert turns per cm to turns per m: n = ' + n_cm + ' × 100 = ' + n_m + ' m⁻¹', 'B = μ₀ n I = (4π × 10⁻⁷) × ' + n_m + ' × ' + I + ' = ' + R.f(B_mT * 1e-3) + ' T = ' + R.f(B_mT) + ' mT']
      };
    },
    function(R){
      var N = R.pick([2, 3, 4, 5, 6]);
      var B0 = R.pick([0.2, 0.4, 0.5, 0.8, 1.2]);
      var BN = N * N * B0;
      return {
        q:'A current-carrying wire of fixed length L bent into a single-turn circular loop produces a magnetic field of ' + B0 + ' mT at its centre. If the same wire is rewound into a tight circular coil of ' + N + ' turns carrying the same current, the magnetic field at the centre becomes:',
        ans:BN, d:[N * B0, B0 / N, B0 / (N * N)], u:'mT',
        tag:'Calculation Trap',
        sol:['Rewinding a fixed wire length L into N turns reduces radius to R_N = R₁ / N', 'B_N = μ₀ N I / (2R_N) = N² B₀ = ' + (N * N) + ' × ' + B0 + ' = ' + R.f(BN) + ' mT']
      };
    },
    function(R){
      var I1 = R.pick([4, 5, 6, 8, 10, 12]);
      var I2 = R.pick([5, 6, 8, 10, 15, 20]);
      var d_cm = R.pick([2, 4, 5, 10, 20]);
      var f_uN = (2e-7 * I1 * I2 / (d_cm * 1e-2)) * 1e6;
      return {
        q:'Two long parallel straight conductors separated by a distance of ' + d_cm + ' cm in air carry currents of ' + I1 + ' A and ' + I2 + ' A. The magnitude of the magnetic force per unit length between them (in μN m⁻¹) is:',
        ans:f_uN, d:[f_uN / 100, f_uN * 2, f_uN / 2], u:'μN m⁻¹',
        tag:'Unit Conversion Trap',
        sol:['F / L = (μ₀ / 2π) (I₁ I₂ / d) = (2 × 10⁻⁷ × ' + I1 + ' × ' + I2 + ') / (' + (d_cm / 100) + ' m)', 'F / L = ' + R.f(f_uN) + ' μN m⁻¹']
      };
    },
    function(R){
      var N = R.pick([20, 40, 50, 100]);
      var A_cm2 = R.pick([25, 50, 100, 200]);
      var I = R.pick([1.5, 2, 3, 4]);
      var B = R.pick([0.2, 0.4, 0.5, 0.8]);
      var planeDeg = R.pick([30, 60]);
      var cosPlane = planeDeg === 60 ? 0.5 : 0.866025;
      var sinPlane = planeDeg === 60 ? 0.866025 : 0.5;
      var M = N * I * (A_cm2 * 1e-4);
      var tau = M * B * cosPlane;
      return {
        q:'A rectangular coil of ' + N + ' turns and area ' + A_cm2 + ' cm² carries a current of ' + I + ' A in a uniform magnetic field of ' + B + ' T. If the PLANE of the coil makes an angle of ' + planeDeg + '° with the magnetic field B, the magnitude of torque on the coil is:',
        ans:tau, d:[M * B * sinPlane, M * B, tau * 100], u:'N m',
        tag:'Sign Convention',
        sol:['Magnetic moment M = N I A = ' + N + ' × ' + I + ' × (' + A_cm2 + ' × 10⁻⁴ m²) = ' + R.f(M) + ' A m²', 'Angle between normal n̂ and B is θ = 90° − ' + planeDeg + '° = ' + (90 - planeDeg) + '°', 'τ = M B sinθ = M B cos(' + planeDeg + '°) = ' + R.f(tau) + ' N m']
      };
    }
  ]
});

NEET.reg({
  id:'P14',
  subj:'Physics',
  type:'num',
  name:'Electromagnetic Induction and Alternating Currents',
  syl:'Electromagnetic induction; Faraday\'s laws, induced emf and current; Lenz\'s Law, Eddy currents. Self and mutual inductance. Alternating currents, peak and rms value of alternating current/voltage; reactance and impedance; LCR series circuit, resonance; power in AC circuits, wattless current. AC generator and transformer.',
  kw:['faraday law','lenz law','motional emf','eddy current','inductance','reactance','impedance','resonance','power factor','wattless current','transformer'],
  formulas:[
    { n:'Faraday\'s Law, Lenz\'s Law & Induced Charge', f:'ε = −N (dΦ_B / dt) ;  |I| = |ε| / R ;  Δq = N |ΔΦ_B| / R', u:'V ;  A ;  C', s:'Minus sign encodes Lenz\'s law (conservation of energy); notice induced charge Δq = NΔΦ/R depends ONLY on net flux change ΔΦ, NOT on time Δt!', b:'Δq = NΔΦ/R requires total loop resistance R to remain constant during the flux change' },
    { n:'Motional EMF (Translating & Rotating Rod)', f:'ε_trans = (v × B) · l = B l v ;  ε_rot = ½ B ω L² = B π f L²', u:'V', s:'For rod rotating about one end in ⊥ field B, centre vs rim (every spoke of a metallic wheel in parallel has the same EMF ½BωL²)', b:'ε = Blv requires B, l, and v to be mutually perpendicular; if ANY two are parallel, motional EMF is zero' },
    { n:'Self-Inductance, Solenoid L & Magnetic Energy', f:'Φ_total = N Φ = L I ;  ε = −L (dI / dt) ;  L_sol = μ₀ μ_r n² A l ;  U_B = ½ L I²', u:'H (V s A⁻¹) ;  J', s:'Energy density in magnetic field: u_B = B² / (2μ₀), exactly analogous to electrostatic u_E = ½ε₀E²', b:'L_sol = μ₀n²Al assumes a long solenoid (l ≫ R) with uniform field throughout the cross-section A' },
    { n:'Mutual Inductance of Coaxial Solenoids / Coils', f:'Φ₂ = M I₁ ;  ε₂ = −M (dI₁ / dt) ;  M_sol = μ₀ n₁ n₂ π r₁² l ;  M = k √(L₁ L₂)', u:'H', s:'r₁ is the radius of the INNER (smaller) solenoid; reciprocity theorem guarantees M₁₂ = M₂₁ = M; coupling coefficient 0 ≤ k ≤ 1', b:'Maximum coupling M = √(L₁L₂) holds only when 100% of flux from coil 1 links coil 2 with zero flux leakage (k = 1)' },
    { n:'AC Peak, RMS & Half-Cycle Average Values', f:'I_rms = I₀ / √2 ≈ 0.707 I₀ ;  I_avg(half) = 2 I₀ / π ≈ 0.637 I₀ ;  I_avg(full) = 0', u:'A (or V)', s:'AC ammeters and voltmeters (hot-wire instruments) read RMS values; domestic 220 V AC has peak V₀ = 220√2 ≈ 311 V', b:'I_rms = I₀/√2 and I_avg = 2I₀/π apply strictly to pure sinusoidal waveforms I = I₀ sin(ωt)' },
    { n:'Reactance, Impedance & Phase in Series LCR Circuit', f:'X_L = ωL ;  X_C = 1 / (ωC) ;  Z = √[R² + (X_L − X_C)²] ;  tanφ = (X_L − X_C) / R', u:'Ω ;  rad', s:'Net voltage V_rms = √[V_R² + (V_L − V_C)²] (phasor sum, NOT algebraic sum!); in pure L voltage leads current by 90°, in pure C current leads voltage by 90°', b:'At DC (ω = 0), an inductor is a short circuit (X_L = 0) and a capacitor is an open circuit (X_C = ∞)' },
    { n:'Series LCR Resonance & Quality Factor Q', f:'ω₀ = 1 / √(LC) ;  f₀ = 1 / (2π√(LC)) ;  Q = ω₀L / R = 1 / (ω₀CR) = (1 / R) √(L / C)', u:'rad s⁻¹ ;  Hz ;  dimensionless', s:'At resonance X_L = X_C, Z_min = R, φ = 0°, power factor cosφ = 1, I_max = V/R, and V_L = V_C = Q · V_rms (voltage magnification!)', b:'Q = ω₀ / Δω = f₀ / (f₂ − f₁) defines sharpness of resonance; high Q requires small resistance R and large L/C ratio' },
    { n:'AC Power, Power Factor & Wattless Current', f:'P_avg = V_rms I_rms cosφ ;  cosφ = R / Z ;  I_wattless = I_rms sinφ', u:'W ;  dimensionless ;  A', s:'Active (wattful) current = I_rms cosφ in phase with V; reactive (wattless) current = I_rms sinφ in quadrature (90°) with V, consuming zero average power', b:'A choke coil (large L, negligible R) has φ ≈ 90°, cosφ ≈ 0, controlling AC current with almost zero Joule heat loss' },
    { n:'AC Generator & Ideal Transformer Relations', f:'ε(t) = N B A ω sin(ωt) ;  V_s / V_p = N_s / N_p = I_p / I_s = k', u:'V ;  dimensionless', s:'Step-up: N_s > N_p (V ↑, I ↓, frequency f unchanged!); real transformer efficiency η = (V_s I_s) / (V_p I_p)', b:'I_p / I_s = N_s / N_p holds ONLY for an ideal 100% efficient transformer; a transformer NEVER works on steady DC (dΦ/dt = 0)' }
  ],
  traps:[
    { t:'Total induced charge Δq = N|ΔΦ_B|/R flowing through a closed circuit depends ONLY on the net change in magnetic flux ΔΦ_B and loop resistance R, and is completely independent of how fast or slow the flux changes.', c:'While a faster pull gives a larger induced EMF ε = −NdΦ/dt, it acts for a proportionally shorter time Δt, so ∫ I dt = (N/R) ∫ dΦ = NΔΦ/R stays invariant.', tag:'Concept Trap' },
    { t:'A metallic wheel with N spokes of length L rotating at angular speed ω perpendicular to a uniform magnetic field B has the SAME induced EMF (½BωL²) between its axle and rim as a single rotating spoke.', c:'All N spokes are connected in parallel between the common central axle and the outer metallic rim; parallel identical EMF sources give the EMF of a single branch.', tag:'Concept Trap' },
    { t:'In a series LCR circuit at resonance, the individual RMS voltages across the inductor (V_L) and capacitor (V_C) can each be much LARGER than the applied source voltage V_rms, yet they cancel each other out.', c:'V_L and V_C are 180° out of phase (V_L − V_C = 0 at resonance), so V_R = V_rms while V_L = V_C = Q · V_rms where Q = (1/R)√(L/C) can easily exceed 1.', tag:'Sign Convention' },
    { t:'Ordinary DC moving-coil ammeters and voltmeters read ZERO when connected to an AC circuit, whereas AC hot-wire instruments work on the Joule heating effect (∝ I²) and measure RMS values.', c:'A moving-coil galvanometer deflects proportionally to instantaneous current I(t), whose average over a full AC cycle is zero (at 50 Hz the pointer cannot follow and stays at zero).', tag:'Practical Trap' },
    { t:'Inserting a soft-iron core into a solenoid connected in series with a bulb across an AC source makes the bulb glow DIMMER, whereas it has no steady-state effect on a DC source.', c:'In AC, the iron core increases inductance L by factor μ_r ≫ 1, sharply increasing inductive reactance X_L = ωL and impedance Z = √(R² + X_L²), reducing I_rms.', tag:'Concept Trap' },
    { t:'For controlling AC current (e.g., in fluorescent tubes), an inductor (choke coil) is vastly superior to a rheostat because it consumes almost zero average power (cosφ = R/Z ≈ 0).', c:'In a pure inductance, voltage leads current by 90° (wattless current), so energy is merely exchanged twice per cycle between source and magnetic field without I²R dissipation.', tag:'Zero-Case' },
    { t:'A step-up transformer increases voltage V and decreases current I in the same ratio (N_s/N_p), does NOT violate conservation of energy, and keeps the AC frequency f strictly unchanged.', c:'Power output cannot exceed power input (V_s I_s ≤ V_p I_p), and secondary flux oscillates at the exact same driving frequency f as the primary current.', tag:'Concept Trap' },
    { t:'When a bar magnet falls vertically through a closed horizontal metallic ring, its acceleration is LESS than g both while approaching from above AND while receding below the ring (whereas if the ring has a cut/slit, acceleration is g).', c:'By Lenz\'s law, induced currents oppose approach above the ring (repulsive upward force) and oppose recession below the ring (attractive upward force); a cut ring has open circuit (I = 0) so no opposing magnetic force acts.', tag:'Sign Convention' }
  ],
  flows:[
    { t:'Series LCR Circuit Regime Diagnosis by Comparing ω with ω₀ = 1/√(LC)', root:'Compare driving angular frequency ω with resonant frequency ω₀ (or X_L with X_C)',
      br:[
        { l:'ω < ω₀  (X_C > X_L)', n:['Capacitive-dominant circuit','Current I LEADS source voltage V (φ < 0)','Decreasing C or ω increases Z'] },
        { l:'ω = ω₀  (X_L = X_C)', n:['RESONANCE: Z_min = R (purely resistive)','I and V in phase (φ = 0°, cosφ = 1)','I_rms = V_rms/R is maximum; V_L = V_C'] },
        { l:'ω > ω₀  (X_L > X_C)', n:['Inductive-dominant circuit','Source voltage V LEADS current I (φ > 0)','Increasing L or ω increases Z'] }
      ]
    },
    { t:'Transformer Energy Losses & Engineering Remedies', root:'Identify physical cause of power loss in a real transformer',
      br:[
        { l:'Eddy currents in iron core', n:['Circulating induced currents heat the core','Remedy: LAMINATED core with insulating varnish','Planes of laminations parallel to magnetic flux'] },
        { l:'Hysteresis loss in core', n:['Energy lost in repeated magnetisation cycles','Remedy: Use SOFT IRON / silicon steel core','Narrow hysteresis loop (low coercivity)'] },
        { l:'Copper loss (I²R) & Flux leakage', n:['Joule heating in primary/secondary windings','Remedy: Thick low-R copper wire for high-I coil','Wind primary & secondary one over the other (shell core)'] }
      ]
    },
    { t:'Lenz\'s Law Direction Finder (3-Step Chain)', chain:[
      'Step 1: Determine the direction of the existing external magnetic field B through the loop and whether the flux Φ_B is INCREASING or DECREASING',
      'Step 2: If Φ_B is INCREASING, the induced current creates B_ind OPPOSITE to B; if Φ_B is DECREASING, B_ind points in the SAME direction as B',
      'Step 3: Use the right-hand thumb rule (or North/South clock-face rule: anticlockwise = North pole, clockwise = South pole) to get induced current direction'
    ] }
  ],
  lab:[
    { t:'Faraday & Henry Coil–Magnet Experiment', d:'Galvanometer deflects ONLY while there is relative motion between magnet and coil (or when primary switch is just closed/opened); reversing magnet polarity or reversing motion direction reverses deflection.' },
    { t:'Eddy Current Damping (Electromagnetic Braking & Dead-Beat Galvanometer)', d:'A metallic plate swinging between magnetic poles stops rapidly due to eddy currents, whereas cutting slots in the plate lengthens current paths and reduces damping; winding a galvanometer coil on a metallic frame makes it dead-beat (non-oscillatory).' },
    { t:'Series LCR Resonance Curve (I_rms vs f)', d:'Plotting I_rms against frequency f gives a bell-shaped peak at f₀ = 1/(2π√(LC)). Adding series resistance R lowers the peak height I_max = V/R and broadens bandwidth Δf = R/(2πL), reducing Q-factor.' },
    { t:'Step-Down Transformer in Lab Eliminator / Welding', d:'A step-down transformer (N_s < N_p) uses thicker copper wire in the secondary winding because secondary current I_s = (N_p/N_s)I_p is much larger than primary current.' }
  ],
  pairs:[
    { g:'Pure AC circuit element / state → phase angle φ & power factor cosφ', a:'Pure resistor R only', b:'V and I in phase (φ = 0°); power factor cosφ = 1' },
    { g:'Pure AC circuit element / state → phase angle φ & power factor cosφ', a:'Pure inductor L only (ideal choke)', b:'V leads I by π/2 (90°); power factor cosφ = 0' },
    { g:'Pure AC circuit element / state → phase angle φ & power factor cosφ', a:'Pure capacitor C only', b:'I leads V by π/2 (90°); power factor cosφ = 0' },
    { g:'Pure AC circuit element / state → phase angle φ & power factor cosφ', a:'Series LR circuit with X_L = R', b:'V leads I by π/4 (45°); power factor cosφ = 1/√2' },
    { g:'Pure AC circuit element / state → phase angle φ & power factor cosφ', a:'Series RC circuit with X_C = √3 R', b:'I leads V by π/3 (60°); power factor cosφ = 1/2' },
    { g:'EMI / AC physical law or device → underlying principle or formula', a:'Lenz\'s law of direction of induced EMF', b:'Law of conservation of energy (mechanical work converts to electrical energy)' },
    { g:'EMI / AC physical law or device → underlying principle or formula', a:'Electric transformer (step-up / step-down)', b:'Mutual induction between primary and secondary coils on a soft-iron core' },
    { g:'EMI / AC physical law or device → underlying principle or formula', a:'Induction furnace / electromagnetic braking in trains', b:'Heating and damping action of eddy (Foucault) currents' },
    { g:'EMI / AC physical law or device → underlying principle or formula', a:'AC Dynamo / Generator', b:'Periodic change of magnetic flux Φ = NBA cos(ωt) through a rotating armature coil' }
  ],
  orders:[
    { q:'Values associated with a sinusoidal alternating current I = I₀ sin(ωt) of peak amplitude I₀ (from largest to smallest)', s:['Peak-to-peak value (2I₀)','Peak amplitude (I₀)','Root-mean-square value (I₀/√2 ≈ 0.707 I₀)','Half-cycle average value (2I₀/π ≈ 0.637 I₀)','Full-cycle average value (0)'], sep:'>', why:'2 > 1 > 0.707 > 0.637 > 0 for any sinusoidal AC.' },
    { q:'Quality factor Q = (1/R)√(L/C) of three series LCR circuits having the same L and C but resistances R₁ = 5 Ω, R₂ = 10 Ω, and R₃ = 25 Ω (from sharpest resonance to flattest resonance)', s:['Circuit with R₁ = 5 Ω (highest Q, sharpest peak)','Circuit with R₂ = 10 Ω (medium Q)','Circuit with R₃ = 25 Ω (lowest Q, broadest peak)'], sep:'>', why:'Q = ω₀L/R is inversely proportional to circuit resistance R.' }
  ],
  facts:{
    T:[
      'Lenz\'s law is a direct consequence of the law of conservation of energy.',
      'The root-mean-square (RMS) value of a sinusoidal alternating current is 1/√2 (≈ 70.7%) of its peak value, and its average value over a positive half-cycle is 2/π (≈ 63.7%) of its peak value.',
      'In a purely inductive or purely capacitive AC circuit, the current is 90° out of phase with the applied voltage and the average power consumed over a complete cycle is zero (wattless current).',
      'At resonance in a series LCR circuit, the inductive reactance X_L equals the capacitive reactance X_C, the impedance Z is minimum and equal to R, and the power factor cosφ is unity.',
      'When a conducting rod of length L rotates with angular velocity ω about one end in a perpendicular uniform magnetic field B, the induced EMF between its ends is ½BωL².',
      'The magnetic energy stored in an inductor of inductance L carrying steady current I is ½LI², and the magnetic energy density in space is B²/(2μ₀).',
      'An ideal transformer cannot be used to step up or step down a steady DC voltage because a steady primary current produces no change in magnetic flux (dΦ/dt = 0).',
      'In a series LCR circuit, if the driving frequency ω is increased from 0 to ∞, the circuit impedance Z first decreases to a minimum value R at ω = ω₀ and then increases indefinitely.'
    ],
    F:[
      'In a series LCR circuit, the RMS source voltage V is always equal to the algebraic sum V_R + V_L + V_C of the RMS voltages across the three components.',
      'A step-up transformer increases both the alternating voltage and the alternating current in the secondary coil simultaneously.',
      'The total electric charge Δq = NΔΦ/R induced in a closed conducting loop depends inversely on the time interval Δt taken for the flux change.',
      'In a purely capacitive AC circuit, the alternating voltage leads the alternating current by a phase angle of 90°.',
      'At resonance in a series LCR circuit, the potential difference across the inductor L and across the capacitor C are each individually zero.',
      'Increasing the resistance R of a series LCR circuit changes its resonant angular frequency ω₀ = 1/√(LC).',
      'Eddy currents in the iron core of a transformer are minimized by making the core out of a single thick solid block of hard steel.',
      'A horizontal metallic rod falling freely in the East–West orientation induces zero EMF because Earth\'s magnetic field has no horizontal component.'
    ]
  },
  mcq:[
    { q:'In a series LCR circuit connected to an AC source, the RMS voltages across the resistor, inductor, and capacitor are measured to be V_R = 80 V, V_L = 100 V, and V_C = 40 V respectively. The RMS voltage of the AC source is:',
      o:['100 V','220 V','140 V','60 V'], a:0, tag:'Calculation Trap',
      sol:['In a series LCR circuit, V_L and V_C are 180° out of phase with each other and 90° out of phase with V_R.','Net source RMS voltage: V = √[V_R² + (V_L − V_C)²] = √[80² + (100 − 40)²] = √[6400 + 3600] = √10000 = 100 V.'] },
    { q:'A wheel with 10 metallic spokes, each 0.5 m long, is rotated with an angular speed of 120 rad s⁻¹ in a plane perpendicular to a uniform magnetic field of 0.4 T. The induced EMF between the axle and the rim of the wheel is:',
      o:['6.0 V','60 V','12 V','0.6 V'], a:0, tag:'Concept Trap',
      sol:['All 10 spokes are connected in parallel between the central axle and the outer rim, so the number of spokes (10) does not multiply the EMF.','ε = ½ B ω L² = 0.5 × 0.4 × 120 × (0.5)² = 0.2 × 120 × 0.25 = 6.0 V.'] },
    { q:'For a series LCR circuit with L = 2.0 H, C = 32 μF, and R = 10 Ω, the resonant angular frequency ω₀ and the quality factor Q of the circuit are respectively:',
      o:['125 rad s⁻¹ and 25','125 rad s⁻¹ and 12.5','250 rad s⁻¹ and 25','62.5 rad s⁻¹ and 50'], a:0, tag:'Calculation Trap',
      sol:['ω₀ = 1 / √(LC) = 1 / √(2.0 × 32 × 10⁻⁶) = 1 / √(64 × 10⁻⁶) = 1 / (8 × 10⁻³) = 125 rad s⁻¹.','Quality factor Q = ω₀ L / R = (125 × 2.0) / 10 = 250 / 10 = 25.'] },
    { q:'An alternating voltage V = 200√2 sin(100t) V is connected across a 1 μF capacitor. The reading of an AC ammeter connected in series in the circuit is:',
      o:['20 mA','20√2 mA','10 mA','40 mA'], a:0, tag:'Unit Conversion Trap',
      sol:['An AC ammeter reads the RMS current I_rms.','Here V_rms = V₀ / √2 = 200√2 / √2 = 200 V, ω = 100 rad s⁻¹, and C = 10⁻⁶ F.','X_C = 1/(ωC) = 1/(100 × 10⁻⁶) = 10⁴ Ω ⇒ I_rms = V_rms / X_C = 200 / 10⁴ = 0.02 A = 20 mA.'] },
    { q:'In an AC circuit, the instantaneous voltage and current are given by V = 100 sin(100t) volts and I = 100 sin(100t + π/3) mA. The average power dissipated in the circuit is:',
      o:['2.5 W','5.0 W','10 W','2500 W'], a:0, tag:'Unit Conversion Trap',
      sol:['Average power P_avg = V_rms I_rms cosφ = ½ V₀ I₀ cosφ.','Note I₀ = 100 mA = 0.1 A and φ = π/3 (60°, cos 60° = 0.5).','P_avg = 0.5 × 100 V × 0.1 A × 0.5 = 2.5 W.'] },
    { q:'A circular coil of 100 turns, area 10⁻² m², and total resistance 5 Ω is placed perpendicular to a uniform magnetic field of 0.2 T. If the coil is quickly pulled completely out of the field, the total induced charge flowing through the coil is:',
      o:['0.04 C','0.20 C','0.02 C','Depends on the speed of pulling'], a:0, tag:'Concept Trap',
      sol:['Total induced charge Δq = N |ΔΦ_B| / R (independent of time taken).','|ΔΦ_B| = B A − 0 = 0.2 × 10⁻² = 2 × 10⁻³ Wb.','Δq = 100 × (2 × 10⁻³) / 5 = 0.2 / 5 = 0.04 C.'] }
  ],
  gens:[
    function(R){
      var pair = R.pick([[30, 40], [60, 80], [90, 120], [50, 120], [80, 60], [120, 50], [120, 160]]);
      var VR = pair[0], diff = pair[1];
      var VC = R.pick([20, 30, 40, 50]);
      var VL = VC + diff;
      var Vrms = Math.sqrt(VR * VR + diff * diff);
      return {
        q:'In a series LCR circuit, the RMS potential differences across R, L, and C are V_R = ' + VR + ' V, V_L = ' + VL + ' V, and V_C = ' + VC + ' V respectively. The RMS voltage of the AC source is:',
        ans:Vrms, d:[VR + VL + VC, VR + diff, Math.abs(VR - diff)], u:'V',
        tag:'Calculation Trap',
        sol:['In a series LCR circuit, V_rms = √[V_R² + (V_L − V_C)²]', 'V_L − V_C = ' + VL + ' − ' + VC + ' = ' + diff + ' V', 'V_rms = √(' + VR + '² + ' + diff + '²) = ' + R.f(Vrms) + ' V']
      };
    },
    function(R){
      var L = R.pick([1, 2, 4, 5, 8]);
      var k = R.pick([4, 5, 8, 10, 20]);
      var C_uF = 1e6 / (L * k * k * 100 * 100);
      var w0 = k * 100;
      var Rval = R.pick([5, 10, 20, 25]);
      var Q = (w0 * L) / Rval;
      var askQ = R.pick([true, false]);
      if (askQ) {
        return {
          q:'A series LCR circuit has inductance L = ' + L + ' H, capacitance C = ' + R.f(C_uF) + ' μF, and resistance R = ' + Rval + ' Ω. The quality factor (Q-factor) of the circuit at resonance is:',
          ans:Q, d:[w0, Q * 2, Rval / (w0 * L)], u:'',
          tag:'Calculation Trap',
          sol:['Resonant angular frequency ω₀ = 1 / √(LC) = ' + w0 + ' rad s⁻¹', 'Quality factor Q = ω₀ L / R = (' + w0 + ' × ' + L + ') / ' + Rval + ' = ' + R.f(Q)]
        };
      }
      return {
        q:'A series LCR circuit has inductance L = ' + L + ' H, capacitance C = ' + R.f(C_uF) + ' μF, and resistance R = ' + Rval + ' Ω. The resonant angular frequency ω₀ of the circuit is:',
        ans:w0, d:[w0 / (2 * Math.PI), w0 * w0, w0 / Rval], u:'rad s⁻¹',
        tag:'Calculation Trap',
        sol:['Resonant angular frequency ω₀ = 1 / √(LC) (independent of R)', 'ω₀ = 1 / √(' + L + ' × ' + R.f(C_uF) + ' × 10⁻⁶) = ' + w0 + ' rad s⁻¹']
      };
    },
    function(R){
      var B = R.pick([0.2, 0.4, 0.5, 0.8, 1.0]);
      var L = R.pick([0.5, 1.0, 1.5, 2.0]);
      var w = R.pick([20, 40, 50, 80, 100]);
      var spokes = R.pick([8, 10, 12, 20]);
      var emf = 0.5 * B * w * L * L;
      return {
        q:'A metallic wheel with ' + spokes + ' spokes, each of length ' + L + ' m, rotates at an angular speed of ' + w + ' rad s⁻¹ in a plane perpendicular to a uniform magnetic field of ' + B + ' T. The induced EMF between the axle and the rim of the wheel is:',
        ans:emf, d:[emf * spokes, B * w * L * L, 0.5 * B * w * L], u:'V',
        tag:'Concept Trap',
        sol:['All ' + spokes + ' spokes are in parallel between axle and rim, so EMF equals that of a single rotating rod', 'ε = ½ B ω L² = 0.5 × ' + B + ' × ' + w + ' × (' + L + ')² = ' + R.f(emf) + ' V']
      };
    },
    function(R){
      var V0 = R.pick([100, 120, 200, 220, 300]);
      var I0 = R.pick([2, 4, 5, 6, 10]);
      var deg = R.pick([30, 45, 60]);
      var radStr = deg === 30 ? 'π/6' : (deg === 45 ? 'π/4' : 'π/3');
      var cosPhi = deg === 30 ? 0.866025 : (deg === 45 ? 0.707107 : 0.5);
      var sinPhi = deg === 30 ? 0.5 : (deg === 45 ? 0.707107 : 0.866025);
      var Pavg = 0.5 * V0 * I0 * cosPhi;
      var dSin = (deg === 45) ? (0.25 * V0 * I0) : (0.5 * V0 * I0 * sinPhi);
      return {
        q:'In an AC circuit, the instantaneous voltage and current are V = ' + V0 + ' sin(ωt) V and I = ' + I0 + ' sin(ωt − ' + radStr + ') A. The average power consumed in the circuit over a complete cycle is:',
        ans:Pavg, d:[V0 * I0 * cosPhi, 0.5 * V0 * I0, dSin], u:'W',
        tag:'Calculation Trap',
        sol:['Average power P_avg = V_rms I_rms cosφ = ½ V₀ I₀ cos(' + deg + '°)', 'P_avg = 0.5 × ' + V0 + ' × ' + I0 + ' × ' + R.f(cosPhi) + ' = ' + R.f(Pavg) + ' W']
      };
    },
    function(R){
      var L = R.pick([0.5, 1.5, 2.0, 3.0, 4.0, 5.0]);
      var I = R.pick([2, 3, 4, 5, 6, 8]);
      var U = 0.5 * L * I * I;
      return {
        q:'An inductor of self-inductance ' + L + ' H carries a steady current of ' + I + ' A. The magnetic potential energy stored in the inductor is:',
        ans:U, d:[L * I * I, 0.5 * L * I, L * I], u:'J',
        tag:'Calculation Trap',
        sol:['Magnetic energy stored in an inductor: U = ½ L I²', 'U = 0.5 × ' + L + ' H × (' + I + ' A)² = ' + R.f(U) + ' J']
      };
    },
    function(R){
      var Vp = R.pick([110, 200, 220, 240]);
      var ratio = R.pick([2, 4, 5, 10]);
      var Vs = Vp / ratio;
      var Is = R.pick([2, 4, 5, 8, 10]);
      var eta = R.pick([80, 90, 100]);
      var Ip = (Vs * Is) / (Vp * (eta / 100));
      return {
        q:'A step-down transformer with efficiency ' + eta + '% steps down a ' + Vp + ' V AC mains supply to ' + Vs + ' V to operate a device drawing ' + Is + ' A in the secondary. The current drawn in the primary winding is:',
        ans:Ip, d:[Is * ratio, (Vs * Is / Vp) * (eta / 100), Ip * 2], u:'A',
        tag:'Calculation Trap',
        sol:['Efficiency η = P_out / P_in = (V_s I_s) / (V_p I_p)', 'I_p = (' + Vs + ' × ' + Is + ') / (' + Vp + ' × ' + (eta / 100) + ') = ' + R.f(Ip) + ' A']
      };
    }
  ]
});

NEET.reg({
  id:'P15',
  subj:'Physics',
  type:'num',
  name:'Electromagnetic Waves',
  syl:'Electromagnetic waves and their characteristics, their transverse nature. Electromagnetic spectrum (radio waves, microwaves, infrared, visible, ultraviolet, X-rays, gamma rays), including elementary facts about their uses.',
  kw:['displacement current','maxwell','electromagnetic spectrum','poynting','radiation pressure','transverse wave','microwave','ultraviolet','infrared','gamma ray'],
  formulas:[
    { n:'Maxwell\'s Displacement Current', f:'I_d = ε₀ (dΦ_E / dt) = C (dV / dt)', u:'A', s:'Arises in any region where electric field E (and electric flux Φ_E) changes with time; between capacitor plates I_d = I_c (conduction current in leads)', b:'I_d is zero in steady-state DC circuits where dΦ_E/dt = 0' },
    { n:'Ampere–Maxwell Law', f:'∮ B · dl = μ₀ (I_c + I_d) = μ₀ I_c + μ₀ ε₀ (dΦ_E / dt)', u:'T m', s:'Resolves the inconsistency of Ampere\'s law for a charging capacitor; magnetic field is produced by BOTH conduction current and time-varying electric flux', b:'Inside the gap between capacitor plates I_c = 0 so B is generated solely by I_d; outside along the wire I_d = 0 so B is generated solely by I_c' },
    { n:'Speed of EM Waves in Vacuum & Medium', f:'c = 1 / √(μ₀ ε₀) = E₀ / B₀ ≈ 3 × 10⁸ m s⁻¹ ;  v = 1 / √(μ ε) = c / √(μ_r ε_r) = c / n', u:'m s⁻¹', s:'Refractive index n = √(μ_r ε_r) = √(μ_r K); E(t) and B(t) oscillate in phase: E / B = E₀ / B₀ = E_rms / B_rms = c in vacuum', b:'In vacuum ALL electromagnetic waves (from radio to gamma rays) travel at the exact same speed c regardless of frequency or wavelength' },
    { n:'Transverse Wave Direction & Wave Vector', f:'E × B ∥ k̂ (direction of propagation) ;  k = 2π / λ ;  ω = 2π f ;  v = ω / k = f λ', u:'k in rad m⁻¹ ;  ω in rad s⁻¹', s:'E ⊥ B ⊥ k̂ form a right-handed orthogonal triad (Ê × B̂ = k̂); E and B reach maxima and zeros simultaneously at the same point in space and time', b:'Wait for sign in sin(kx − ωt): propagation along +x, whereas sin(kx + ωt) propagates along −x' },
    { n:'Energy Density in EM Wave (Equipartition)', f:'u_E = ½ ε₀ E² ;  u_B = B² / (2μ₀) ;  u_E = u_B ;  u_avg = ½ ε₀ E₀² = B₀² / (2μ₀)', u:'J m⁻³', s:'Instantaneous AND average energy densities are shared EQUALLY (50%–50%) between electric and magnetic fields: u_total = u_E + u_B = 2u_E', b:'Don\'t forget the factor of 2: total average energy density is u_avg = ½ε₀E₀² = ε₀E_rms² (since ½ε₀E₀² = ¼ε₀E₀² from E + ¼ε₀E₀² from B)' },
    { n:'Intensity of EM Wave', f:'I = P / A = u_avg · c = ½ c ε₀ E₀² = c ε₀ E_rms² = (c / 2μ₀) B₀²', u:'W m⁻²', s:'For an isotropic point source of power P in 3D space, intensity at distance r is I = P / (4π r²) and amplitude E₀ ∝ 1/r', b:'For a cylindrical line source I ∝ 1/r, and for a collimated plane wave beam I is independent of r' },
    { n:'Momentum & Radiation Pressure of EM Waves', f:'p = U / c (complete absorption) ;  p = 2U / c (perfect reflection) ;  P_rad = I / c  or  2I / c', u:'kg m s⁻¹ ;  Pa (N m⁻²)', s:'For normal incidence of intensity I on a surface: radiation force F = IA/c (completely absorbing black surface) and F = 2IA/c (perfectly reflecting mirror)', b:'Applies to normal incidence (θ = 0°); for oblique incidence at angle θ to normal, multiply pressure by cos²θ' },
    { n:'Dimension of (μ₀ ε₀) and √(μ₀ / ε₀)', f:'[μ₀ ε₀] = [L⁻² T²] = [c⁻²] ;  Z₀ = √(μ₀ / ε₀) ≈ 377 Ω', u:'s² m⁻² ;  Ω', s:'Z₀ = √(μ₀/ε₀) is the characteristic impedance of free space with dimensions of electrical resistance [M L² T⁻³ A⁻²]', b:'Frequent dimensional analysis question: 1/√(μ₀ε₀) has dimension of speed [L T⁻¹]' }
  ],
  traps:[
    { t:'In an electromagnetic wave, the electric field E and magnetic field B oscillate IN PHASE (phase difference = 0°), reaching their peaks and zeros at the exact same instant and position.', c:'Solutions of Maxwell\'s wave equations in free space are E = E₀ sin(kx − ωt) and B = B₀ sin(kx − ωt) with identical phase argument (kx − ωt).', tag:'Concept Trap' },
    { t:'Although E₀ = c B₀ looks like the electric field carries much more energy than the magnetic field, the energy density is shared EQUALLY between the electric and magnetic fields (u_E = u_B).', c:'Using E = cB and c² = 1/(μ₀ε₀), we get u_E = ½ε₀E² = ½ε₀(c²B²) = ½ε₀[B²/(μ₀ε₀)] = B²/(2μ₀) = u_B at every instant.', tag:'Calculation Trap' },
    { t:'Conduction current I_c (in the connecting wires) and displacement current I_d (in the space between the capacitor plates) are Individually discontinuous across the plates, but their sum (I_c + I_d) is strictly continuous everywhere.', c:'Inside the wire I_c = I and I_d = 0; inside the dielectric gap I_c = 0 and I_d = ε₀dΦ_E/dt = C dV/dt = I, making I_c + I_d continuous around the entire circuit.', tag:'Concept Trap' },
    { t:'Electromagnetic waves carry energy and momentum (p = U/c), are NOT deflected by electric or magnetic fields, and do NOT require any material medium for propagation.', c:'Photons / EM waves are electrically neutral (q = 0), so Lorentz force F = q(E + v × B) is identically zero.', tag:'Concept Trap' },
    { t:'When an electromagnetic wave passes from air into a medium (like glass or water), its FREQUENCY f remains unchanged, whereas its speed v = c/n and wavelength λ = λ₀/n both decrease by factor n.', c:'Frequency is an intrinsic property of the oscillating source (boundary continuity of fields at the interface requires identical oscillation frequency on both sides).', tag:'NCERT Exception' },
    { t:'Cathode rays, canal rays, alpha rays, beta rays, and sound waves are NOT electromagnetic waves, whereas gamma rays, X-rays, UV, visible light, IR, microwaves, and radio waves ARE electromagnetic waves.', c:'Cathode/beta rays are beams of electrons, alpha/canal rays are charged ions, and sound is a mechanical longitudinal wave; only oscillating E–B waves belong to the EM spectrum.', tag:'NCERT Exception' },
    { t:'The cross product E × B ALWAYS points in the direction of propagation k̂ of the electromagnetic wave; reversing propagation direction requires reversing EITHER E OR B (not both).', c:'Poynting vector S = (1/μ₀)(E × B) gives the instantaneous directional energy flux along the direction of wave travel.', tag:'Sign Convention' },
    { t:'For an EM wave sin(kx − ωt), the ratio ω/k gives the wave speed v, whereas the ratio E₀/B₀ ALSO gives the wave speed v = c/n.', c:'Both ω/k = 2πf / (2π/λ) = fλ = v and E₀/B₀ = v are fundamental wave relations in a medium.', tag:'Calculation Trap' }
  ],
  flows:[
    { t:'EM Wave Propagation Direction & Vector Triad Check (Ê × B̂ = k̂)', root:'Identify given directions of any two of (Ê, B̂, k̂) using right-hand rule (î × ĵ = k̂)',
      br:[
        { l:'Wave along +z (k̂) and E along +x (î)', n:['Require î × B̂ = k̂','Therefore B must be along +y (ĵ)','Wave form: sin(kz − ωt)'] },
        { l:'Wave along +x (î) and E along +y (ĵ)', n:['Require ĵ × B̂ = î','Since ĵ × k̂ = +î, B is along +z (k̂)','Wave form: sin(kx − ωt)'] },
        { l:'Wave along −y (−ĵ) and E along +x (î)', n:['Require î × B̂ = −ĵ','Since î × k̂ = −ĵ, B is along +z (k̂)','Wave form: sin(ky + ωt)'] }
      ]
    },
    { t:'Radiation Pressure & Momentum Transfer on a Surface', root:'Check optical nature of the surface struck normally by EM wave of energy U (intensity I)',
      br:[
        { l:'Completely absorbing (blackbody, r = 0)', n:['Momentum transferred Δp = U / c','Radiation pressure P_rad = I / c','Force on area A: F = I A / c'] },
        { l:'Perfectly reflecting (mirror, r = 1)', n:['Momentum reverses: Δp = p − (−p) = 2U / c','Radiation pressure P_rad = 2I / c','Force on area A: F = 2 I A / c'] },
        { l:'Partially reflecting (reflectance r)', n:['Fraction r reflected, (1 − r) absorbed','Δp = (1 + r) U / c','Radiation pressure P_rad = (1 + r) I / c'] }
      ]
    },
    { t:'EM Spectrum Production Mechanism Chain (Low Frequency → High Frequency)', chain:[
      'Radio waves (λ > 0.1 m): Rapid acceleration/deceleration of electrons in aerials / LC oscillator circuits',
      'Microwaves (0.1 m to 1 mm): Special vacuum tubes — klystrons, magnetrons, and Gunn diodes',
      'Infrared (1 mm to 700 nm) & Visible (700 nm to 400 nm) & UV (400 nm to 1 nm): Vibration of atoms/molecules (IR) and inner/valence shell electronic transitions (Visible/UV)',
      'X-rays (1 nm to 10⁻³ nm) & Gamma rays (< 10⁻³ nm): Bombardment of metal target by high-energy electrons (X-rays) and radioactive nuclear decay (γ-rays)'
    ] }
  ],
  lab:[
    { t:'Hertz Spark-Gap Experiment vs Jagadish Chandra Bose & Marconi', d:'Hertz (1887) first experimentally produced and detected radio EM waves (~5 m wavelength) using an induction-coil oscillator; J.C. Bose produced millimetre microwaves (25 mm to 5 mm) in Kolkata; Marconi transmitted radio waves over kilometres.' },
    { t:'Microwave Oven Water-Resonance Principle', d:'Microwaves (~2.45 GHz) match the resonant rotational frequency of polar water molecules, transferring energy directly to water in food without heating porcelain/glass vessels that lack water.' },
    { t:'Welder\'s Glass Goggles & Ozone Layer UV Absorption', d:'Welding arcs emit intense UV radiation (400 nm–1 nm); welders wear special glass goggles to protect corneas from photokeratitis. Stratospheric ozone (O₃) absorbs solar UV (~200–315 nm).' },
    { t:'Infrared Night Vision, Greenhouse Effect & Remote Controls', d:'IR waves are called heat waves because water, CO₂, and NH₃ molecules readily absorb IR into thermal vibration; IR LEDs power TV remotes, and IR detectors on satellites monitor crop growth and military night vision.' }
  ],
  pairs:[
    { g:'EM wave region → primary source or practical application', a:'Microwaves (λ ≈ 1 mm to 0.1 m)', b:'Produced by klystrons/magnetrons; used in RADAR aircraft navigation and microwave ovens' },
    { g:'EM wave region → primary source or practical application', a:'Infrared (IR) rays (λ ≈ 700 nm to 1 mm)', b:'Produced by hot bodies/vibrating molecules; used in TV remotes, physical therapy heat lamps, and fog photography' },
    { g:'EM wave region → primary source or practical application', a:'Ultraviolet (UV) rays (λ ≈ 1 nm to 400 nm)', b:'Absorbed by ozone layer; used in LASIK eye surgery and UV water purifiers to kill germs' },
    { g:'EM wave region → primary source or practical application', a:'X-rays (λ ≈ 10⁻³ nm to 1 nm)', b:'Produced by bombarding metal target with fast electrons; used in medical bone imaging and radiotherapy' },
    { g:'EM wave region → primary source or practical application', a:'Gamma (γ) rays (λ < 10⁻³ nm)', b:'Nuclear origin (radioactive decay); highest penetrating power, used to destroy cancer cells' },
    { g:'Fundamental combination of μ₀ and ε₀ → physical quantity & SI unit', a:'1 / √(μ₀ ε₀)', b:'Speed of light in vacuum c = 3 × 10⁸ m s⁻¹ [L T⁻¹]' },
    { g:'Fundamental combination of μ₀ and ε₀ → physical quantity & SI unit', a:'ε₀ (dΦ_E / dt)', b:'Maxwell\'s displacement current I_d in amperes [A]' },
    { g:'Fundamental combination of μ₀ and ε₀ → physical quantity & SI unit', a:'½ ε₀ E₀²  (or B₀² / 2μ₀)', b:'Average energy density u_avg of EM wave in J m⁻³ [M L⁻¹ T⁻²]' },
    { g:'Fundamental combination of μ₀ and ε₀ → physical quantity & SI unit', a:'√(μ₀ / ε₀)', b:'Impedance of free space Z₀ ≈ 377 Ω [M L² T⁻³ A⁻²]' }
  ],
  orders:[
    { q:'Electromagnetic spectrum arranged in order of INCREASING wavelength λ (i.e., decreasing frequency f and photon energy hν)', s:['Gamma rays','X-rays','Ultraviolet rays','Visible light','Infrared rays','Microwaves','Radio waves'], sep:'<', why:'Since c = fλ, wavelength increases from γ-rays (< 10⁻¹² m) up to radio waves (> 0.1 m).' },
    { q:'Visible light colours arranged in order of INCREASING frequency f (decreasing wavelength in vacuum)', s:['Red (~700 nm)','Yellow (~580 nm)','Green (~530 nm)','Blue (~470 nm)','Violet (~400 nm)'], sep:'<', why:'In VIBGYOR, Red has the longest wavelength (~700 nm, lowest frequency) and Violet has the shortest wavelength (~400 nm, highest frequency).' }
  ],
  facts:{
    T:[
      'During the charging of a parallel-plate capacitor, the displacement current I_d = ε₀(dΦ_E/dt) in the space between the plates is exactly equal to the conduction current I_c in the connecting wires.',
      'In a plane electromagnetic wave in free space, the electric field E, magnetic field B, and propagation vector k are mutually perpendicular, and E × B points in the direction of wave propagation.',
      'The total average energy density of a plane electromagnetic wave in vacuum is ½ε₀E₀² = ε₀E_rms², shared equally between the electric field and the magnetic field.',
      'All electromagnetic waves travel through vacuum with the same speed c = 1/√(μ₀ε₀) ≈ 3 × 10⁸ m s⁻¹, independent of their wavelength or frequency.',
      'Gamma rays have the shortest wavelength, highest frequency, and highest photon energy in the electromagnetic spectrum, and originate from nuclear transitions.',
      'Microwaves are preferred over long radio waves for RADAR and satellite communication because their shorter wavelengths allow tight directional beaming and can penetrate the ionosphere.',
      'Infrared radiation plays a vital role in maintaining Earth\'s warmth through the greenhouse effect by being trapped by atmospheric CO₂ and water vapour.',
      'A perfectly reflecting surface subject to normal incidence of electromagnetic radiation of intensity I experiences a radiation pressure 2I/c, which is twice that on a completely absorbing surface (I/c).'
    ],
    F:[
      'In a plane electromagnetic wave, the phase difference between the oscillating electric field E and magnetic field B is π/2 (90°).',
      'In an electromagnetic wave in vacuum, the electric field carries c times more energy density than the magnetic field because E₀ = cB₀.',
      'Electromagnetic waves are longitudinal waves that require an elastic medium for propagation.',
      'X-rays and gamma rays are strongly deflected when they pass through a region of strong uniform magnetic field.',
      'In vacuum, gamma rays travel much faster than radio waves because gamma rays have much higher photon energy.',
      'When a capacitor is connected across a steady DC battery and reaches full charge (steady state), the displacement current between its plates is maximum.',
      'Ultraviolet rays have a longer wavelength than infrared rays in free space.',
      'The dimensional formula of 1/√(μ₀ε₀) is [L² T⁻²].'
    ]
  },
  mcq:[
    { q:'The electric field of a plane electromagnetic wave in vacuum is given by E_y = 60 sin(500x − 1.5 × 10¹¹ t) V m⁻¹. What is the peak amplitude of the corresponding magnetic field B and along which axis does it oscillate?',
      o:['2 × 10⁻⁷ T along the z-axis','2 × 10⁻⁷ T along the x-axis','1.8 × 10¹⁰ T along the z-axis','60 T along the z-axis'], a:0, tag:'Sign Convention',
      sol:['From sin(kx − ωt), the wave propagates along the +x-axis (î) and E is along +y (ĵ).','Since Ê × B̂ = k̂ ⇒ ĵ × B̂ = î, the magnetic field B must oscillate along the +z-axis (k̂).','Peak magnetic field B₀ = E₀ / c = 60 / (3 × 10⁸) = 2 × 10⁻⁷ T.'] },
    { q:'A parallel-plate capacitor of capacitance 2 μF is being charged such that the potential difference between its plates increases at the rate of 5 × 10⁵ V s⁻¹. The displacement current between the plates is:',
      o:['1.0 A','0.5 A','2.5 A','Zero'], a:0, tag:'Calculation Trap',
      sol:['Displacement current I_d = ε₀ (dΦ_E / dt) = C (dV / dt).','I_d = (2 × 10⁻⁶ F) × (5 × 10⁵ V s⁻¹) = 1.0 A (equal to the conduction current in the connecting wires).'] },
    { q:'The dimensions of the quantity (1 / μ₀ε₀) in terms of fundamental dimensions L and T are:',
      o:['[L² T⁻²]','[L T⁻¹]','[L⁻¹ T]','[L⁻² T²]'], a:0, tag:'Unit Conversion Trap',
      sol:['Speed of light in vacuum is c = 1 / √(μ₀ε₀), which has dimensions [L T⁻¹].','Squaring both sides gives 1 / (μ₀ε₀) = c² with dimensions [L² T⁻²].'] },
    { q:'In an electromagnetic wave in free space, the root-mean-square value of the electric field is E_rms = 6 V m⁻¹. The peak value of the magnetic field B₀ is:',
      o:['2.83 × 10⁻⁸ T','2.0 × 10⁻⁸ T','1.41 × 10⁻⁸ T','4.0 × 10⁻⁸ T'], a:0, tag:'Calculation Trap',
      sol:['Peak electric field E₀ = √2 E_rms = 6√2 V m⁻¹.','Peak magnetic field B₀ = E₀ / c = (6√2) / (3 × 10⁸) = 2√2 × 10⁻⁸ T ≈ 2.83 × 10⁻⁸ T.'] },
    { q:'Which of the following electromagnetic radiations is produced by klystron or magnetron valves and is used in RADAR navigation systems?',
      o:['Microwaves','Infrared rays','Ultraviolet rays','X-rays'], a:0, tag:'NCERT Exception',
      sol:['Microwaves (wavelength 1 mm to 0.1 m) are generated by special vacuum tubes (klystrons, magnetrons, Gunn diodes) and are used in aircraft RADAR and microwave ovens.'] },
    { q:'A plane electromagnetic wave of intensity 600 W m⁻² falls normally on a completely absorbing black surface of area 20 cm². The radiation force exerted by the wave on the surface is:',
      o:['4.0 × 10⁻⁹ N','8.0 × 10⁻⁹ N','4.0 × 10⁻⁵ N','2.0 × 10⁻⁶ N'], a:0, tag:'Unit Conversion Trap',
      sol:['For complete absorption, radiation pressure P_rad = I / c and force F = I A / c.','Area A = 20 cm² = 20 × 10⁻⁴ m² = 2 × 10⁻³ m².','F = (600 × 2 × 10⁻³) / (3 × 10⁸) = 1.2 / (3 × 10⁸) = 4.0 × 10⁻⁹ N.'] }
  ],
  gens:[
    function(R){
      var E0 = R.pick([30, 60, 90, 120, 150, 180, 240, 300]);
      var B0_nT = (E0 / 3e8) * 1e9;
      return {
        q:'In a plane electromagnetic wave travelling in free space, the amplitude of the oscillating electric field is E₀ = ' + E0 + ' V m⁻¹. The amplitude of the oscillating magnetic field B₀ (in nT) is:',
        ans:B0_nT, d:[B0_nT / 1.414, B0_nT * 1.414, B0_nT * 10], u:'nT',
        tag:'Unit Conversion Trap',
        sol:['In free space, B₀ = E₀ / c = ' + E0 + ' / (3 × 10⁸) T', 'Converting to nanotesla (1 T = 10⁹ nT): B₀ = ' + R.f(B0_nT) + ' nT']
      };
    },
    function(R){
      var C_uF = R.pick([2, 4, 5, 8, 10, 20]);
      var dVdt_kV = R.pick([50, 100, 200, 250, 500]);
      var Id = (C_uF * 1e-6) * (dVdt_kV * 1e3);
      return {
        q:'A parallel-plate capacitor of capacitance ' + C_uF + ' μF has the potential difference across its plates changing at a uniform rate of ' + dVdt_kV + ' kV s⁻¹. The displacement current between the plates is:',
        ans:Id, d:[Id * 10, Id / 10, C_uF / dVdt_kV], u:'A',
        tag:'Calculation Trap',
        sol:['Displacement current I_d = ε₀ (dΦ_E / dt) = C (dV / dt)', 'I_d = (' + C_uF + ' × 10⁻⁶ F) × (' + dVdt_kV + ' × 10³ V s⁻¹) = ' + R.f(Id) + ' A']
      };
    },
    function(R){
      var k = R.pick([2, 4, 5, 10, 20, 50]);
      var n = R.pick([1.2, 1.5, 2.0, 2.5]);
      var v_e8 = 3.0 / n;
      var w_e8 = k * v_e8;
      return {
        q:'An electromagnetic wave propagating in a dielectric medium is represented by E = E₀ sin(' + k + 'x − ' + R.f(w_e8) + ' × 10⁸ t). The refractive index n of the medium is (take c = 3 × 10⁸ m s⁻¹):',
        ans:n, d:[1 / n, n * n, Math.sqrt(n)], u:'',
        tag:'Calculation Trap',
        sol:['Wave speed in the medium v = ω / k = (' + R.f(w_e8) + ' × 10⁸) / ' + k + ' = ' + R.f(v_e8) + ' × 10⁸ m s⁻¹', 'Refractive index n = c / v = 3 / ' + R.f(v_e8) + ' = ' + R.f(n)]
      };
    },
    function(R){
      var I = R.pick([300, 600, 900, 1200, 1500]);
      var refl = R.pick([true, false]);
      var Prad_uPa = ((refl ? 2 : 1) * I / 3e8) * 1e6;
      return {
        q:'A plane electromagnetic wave of intensity ' + I + ' W m⁻² strikes a ' + (refl ? 'perfectly reflecting mirror' : 'completely absorbing black') + ' surface at normal incidence. The radiation pressure exerted on the surface (in μPa) is:',
        ans:Prad_uPa, d:[refl ? Prad_uPa / 2 : Prad_uPa * 2, Prad_uPa * 10, Prad_uPa / 10], u:'μPa',
        tag:'Sign Convention',
        sol:['For a ' + (refl ? 'perfectly reflecting surface, P_rad = 2I / c' : 'completely absorbing surface, P_rad = I / c'), 'P_rad = ' + (refl ? '2 × ' : '') + I + ' / (3 × 10⁸) Pa = ' + R.f(Prad_uPa) + ' μPa']
      };
    },
    function(R){
      var P_kW = R.pick([1.2, 2.4, 3.6, 4.8, 6.0, 12.0]);
      var r_m = R.pick([5, 10, 20, 50]);
      var I = (P_kW * 1e3) / (4 * Math.PI * r_m * r_m);
      return {
        q:'A point source emits electromagnetic radiation isotropically in all directions with a total power output of ' + P_kW + ' kW. The intensity of the radiation at a distance of ' + r_m + ' m from the source is:',
        ans:I, d:[I * 4, I * 2, (P_kW * 1e3) / (r_m * r_m)], u:'W m⁻²',
        tag:'Calculation Trap',
        sol:['For an isotropic point source, intensity at distance r is I = P / (4π r²)', 'I = (' + P_kW + ' × 10³ W) / (4π × ' + r_m + '² m²) = ' + R.f(I) + ' W m⁻²']
      };
    },
    function(R){
      var U_J = R.pick([3, 6, 9, 12, 15, 24, 30]);
      var p_ns = (U_J / 3e8) * 1e9;
      return {
        q:'A pulse of electromagnetic radiation carrying total energy U = ' + U_J + ' J is completely absorbed by an object at rest. The linear momentum transferred to the object (in × 10⁻⁹ N s) is:',
        ans:p_ns, d:[p_ns * 2, p_ns / 2, p_ns * 10], u:'× 10⁻⁹ N s',
        tag:'Calculation Trap',
        sol:['Momentum carried by EM wave of energy U is p = U / c (for complete absorption)', 'p = ' + U_J + ' / (3 × 10⁸) = ' + R.f(p_ns) + ' × 10⁻⁹ N s']
      };
    }
  ]
});

NEET.reg({
  id:'P16',
  subj:'Physics',
  type:'num',
  name:'Optics',
  syl:'Ray optics: Reflection of light, spherical mirrors, mirror formula. Refraction of light, total internal reflection and its applications, optical fibres. Refraction at spherical surfaces, lenses, thin lens formula, lens-maker\'s formula. Magnification, power of a lens, combination of thin lenses in contact. Refraction and dispersion of light through a prism. Microscope and astronomical telescope (reflecting and refracting) and their magnifying powers. Wave optics: wave front and Huygens\' principle, laws of reflection and refraction using Huygens\' principle. Interference, Young\'s double-slit experiment and expression for fringe width, coherent sources, sustained interference of light. Diffraction due to a single slit, width of central maximum. Polarisation, plane-polarised light, Brewster\'s law, uses of plane-polarised light and Polaroids.',
  kw:['mirror formula','total internal reflection','critical angle','lens maker','prism','magnifying power','huygens','young double slit','fringe width','diffraction','brewster law','malus law'],
  formulas:[
    { n:'Spherical Mirror Formula & Magnification', f:'1/v + 1/u = 1/f = 2/R ;  m = −v / u = f / (f − u) = (f − v) / f', u:'m⁻¹ ;  dimensionless', s:'Cartesian sign convention: incident light direction = +ve; concave mirror f < 0, convex mirror f > 0; real image m < 0 (inverted), virtual m > 0 (erect)', b:'Paraxial approximation (aperture ≪ R); longitudinal magnification for tiny axial object du is m_L = dv/du = −(v/u)² = −m²' },
    { n:'Snell\'s Law, Apparent Depth & Total Internal Reflection', f:'n₁ sin i = n₂ sin r ;  d_app = d_real / μ ;  sin i_c = 1 / μ_dr = n_rarer / n_denser', u:'dimensionless ;  m', s:'Normal shift of slab of thickness t: Δx = t(1 − 1/μ) along incident ray; radius of bright circular horizon seen by fish at depth h: R = h / √(μ² − 1)', b:'TIR occurs ONLY when light travels from optically denser to optically rarer medium AND angle of incidence i > i_c' },
    { n:'Spherical Surface Refraction & Lens Maker\'s Formula', f:'n₂/v − n₁/u = (n₂ − n₁)/R ;  1/f = (n_lens/n_med − 1) (1/R₁ − 1/R₂)', u:'m⁻¹', s:'Thin lens formula: 1/v − 1/u = 1/f and m = +v/u = f/(f + u); equiconvex lens (R₁ = +R, R₂ = −R) in air has f = R / [2(n − 1)]', b:'When immersed in a liquid with n_med > n_lens, the factor (n_lens/n_med − 1) turns negative so a convex lens behaves as a diverging lens!' },
    { n:'Lens Power & Combination of Lenses', f:'P = 1 / f(m) = 100 / f(cm) ;  P_eq = P₁ + P₂ − d P₁ P₂ ;  1/f_eq = 1/f₁ + 1/f₂ − d/(f₁f₂)', u:'D (dioptre = m⁻¹)', s:'In contact (d = 0): P_eq = P₁ + P₂ and m_eq = m₁ · m₂; silvered thin lens has P_mirror = 2P_lens + P_m (where F_eq = −1/P_mirror)', b:'P = 1/f requires f in METRES; applies to thin coaxial lenses under paraxial rays' },
    { n:'Prism Relations, Minimum Deviation & Thin Prism', f:'A = r₁ + r₂ ;  δ = i + e − A ;  n = sin[(A + δ_m)/2] / sin(A/2) ;  δ_thin = (n − 1) A', u:'deg or rad', s:'At minimum deviation δ = δ_m: i = e, r₁ = r₂ = A/2, and ray inside prism is parallel to base (for equilateral prism); angular dispersion θ = (n_V − n_R)A and dispersive power ω = (n_V − n_R)/(n_Y − 1)', b:'δ = (n − 1)A is valid only for thin prisms (A ≤ 10°); for no emergence from second face for ANY angle of incidence, A > 2 i_c' },
    { n:'Microscope & Telescope Magnifying Powers', f:'Simple: M = 1 + D/f (at D) or D/f (at ∞) ;  Compound: M = m_o m_e ≈ (L/f_o)(1 + D/f_e) ;  Telescope: M = f_o / f_e , L = f_o + f_e (normal)', u:'dimensionless', s:'Least distance of distinct vision D = 25 cm; astronomical telescope with image at D: M = (f_o/f_e)(1 + f_e/D) and L = f_o + u_e', b:'Compound microscope needs short f_o and short f_e (with f_o < f_e); telescope needs LARGE f_o and large aperture D_o (for high resolving power & brightness) and small f_e' },
    { n:'Interference Intensity & YDSE Fringe Width', f:'I = I₁ + I₂ + 2√(I₁I₂) cosφ = 4I₀ cos²(φ/2) ;  β = λ D / d ;  Δx_slab = (μ − 1) t', u:'W m⁻² ;  m', s:'Phase diff φ = (2π/λ)Δx; bright fringes Δx = nλ, dark fringes Δx = (n − ½)λ; I_max / I_min = (√I₁ + √I₂)² / (√I₁ − √I₂)² = (a₁ + a₂)² / (a₁ − a₂)²', b:'β = λD/d requires D ≫ d and d ≫ λ; if YDSE is immersed in liquid of index μ, β\' = β/μ; slab of thickness t shifts pattern by Δy = (μ − 1)tD/d = (μ − 1)tβ/λ without changing β' },
    { n:'Single-Slit Diffraction Minima & Central Maximum Width', f:'Minima: a sinθ = nλ (n = 1, 2, 3…) ;  Linear width of central max: W_0 = 2 λ D / a = 2 β_sec', u:'m', s:'a = slit width; angular width of central maximum is 2θ₁ = 2λ/a (independent of screen distance D!); secondary maxima lie near a sinθ ≈ (n + ½)λ with rapidly falling intensity', b:'Notice the contrast: in YDSE all bright fringes have equal width β = λD/d and equal intensity 4I₀, whereas in single-slit diffraction central max has DOUBLE width 2λD/a and much higher intensity' },
    { n:'Polarisation: Malus\'s Law & Brewster\'s Law', f:'I = I₀ cos²θ (Malus) ;  tan i_B = n₂ / n₁ = μ (Brewster) ;  i_B + r = 90°', u:'W m⁻² ;  dimensionless', s:'Unpolarised light of intensity I_u passing through FIRST ideal polaroid always emerges with intensity I_u / 2 (since ⟨cos²θ⟩ = ½); at Brewster angle, reflected and refracted rays are perpendicular (90°)', b:'At Brewster angle i = i_B, the reflected ray is 100% plane-polarised (vibrations ⊥ plane of incidence), whereas the refracted ray is only partially polarised' }
  ],
  traps:[
    { t:'Covering half the aperture of a convex lens (or spherical mirror) with black paper does NOT cut the image in half; the COMPLETE full-size image is still formed at the exact same position, but its intensity (brightness) decreases to about half.', c:'Every point on the object sends rays through every part of the lens; blocking half the lens area simply halves the light energy reaching each image point.', tag:'Concept Trap' },
    { t:'When a glass convex lens (n_g = 1.5) is immersed in water (n_w = 4/3), its focal length increases by 4 times (f_w = 4 f_air); if immersed in carbon disulphide (n_m = 1.65 > 1.5), its focal length becomes negative and it acts as a DIVERGING lens.', c:'From lens maker\'s formula 1/f ∝ (n_g/n_m − 1): in air (1.5 − 1) = 0.5; in water (1.5/1.333 − 1) = 1/8 = 0.5/4 ⇒ f_w = 4f_a; for n_m > n_g the bracket changes sign.', tag:'Sign Convention' },
    { t:'Unlike a lens, the focal length f = R/2 of a spherical MIRROR is completely independent of the wavelength (colour) of light and the refractive index of the surrounding medium.', c:'Reflection obeys i = r purely by geometry regardless of refractive index or wavelength, so mirrors are completely free from chromatic aberration.', tag:'NCERT Exception' },
    { t:'Reflecting telescopes (Cassegrain / Newtonian using a parabolic concave mirror objective) are superior to refracting telescopes because they have ZERO chromatic aberration, no spherical aberration (with paraboloid mirror), and much lighter mechanical support.', c:'Mirrors do not disperse light by wavelength and can be supported across their entire back surface rather than only along the rim like a heavy glass lens.', tag:'NCERT Exception' },
    { t:'In Young\'s double-slit experiment, interference fringes strictly conserve total energy: average intensity on the screen is 2I₀, with energy merely redistributed from dark minima (I = 0) to bright maxima (I = 4I₀).', c:'No energy is destroyed at dark fringes or created at bright fringes; the spatial average of 4I₀ cos²(φ/2) over a fringe period is ½(4I₀) = 2I₀ = I₁ + I₂.', tag:'Concept Trap' },
    { t:'Two independent light sources (such as two separate sodium lamps or two LEDs) can NEVER produce a sustained interference pattern on a screen.', c:'Atomic emission occurs in random bursts (~10⁻⁸ s), causing the phase difference φ(t) between two independent sources to fluctuate billions of times per second, washing out the fringes to uniform intensity 2I₀.', tag:'Concept Trap' },
    { t:'When unpolarised light of intensity I₀ passes through a polariser P₁ and then an analyser P₂ whose pass axes are perpendicular (90°), zero light emerges; but inserting a third polaroid P₃ BETWEEN them at angle θ (e.g. 45°) restores transmitted light of intensity (I₀/8) sin²(2θ)!', c:'After P₁ intensity is I₀/2; P₃ projects the electric vector by cosθ giving (I₀/2)cos²θ; P₂ then projects that by cos(90° − θ) = sinθ, giving (I₀/2)cos²θ sin²θ = (I₀/8)sin²(2θ).', tag:'Calculation Trap' },
    { t:'In single-slit diffraction, NARROWING the slit width a makes the central diffraction maximum WIDER (W = 2λD/a ∝ 1/a).', c:'Diffraction spreading sinθ₁ = λ/a is inversely proportional to aperture size a.', tag:'Order Inversion' }
  ],
  flows:[
    { t:'Image Formation by Concave Mirror / Convex Lens as Object Moves from ∞ to Pole/Optical Centre', root:'Check object distance u relative to F and 2F (C)',
      br:[
        { l:'Object beyond 2F (u > 2f)', n:['Image between F and 2F','Real, inverted, and diminished (|m| < 1)','As u = 2f → v = 2f, |m| = 1 (min distance 4f between real object & real image)'] },
        { l:'Object between F and 2F (f < u < 2f)', n:['Image beyond 2F (v > 2f)','Real, inverted, and magnified (|m| > 1)','At u = f → rays emerge parallel (v → ∞)'] },
        { l:'Object inside focus (u < f)', n:['Image on same side (lens) / behind mirror','Virtual, erect, and magnified (m > +1)','Used in simple microscope / shaving mirror'] }
      ]
    },
    { t:'Modifications to Young\'s Double-Slit Experiment (YDSE)', root:'Identify experimental change applied to standard monochromatic YDSE (β = λD/d)',
      br:[
        { l:'Apparatus immersed in liquid of index μ', n:['Wavelength becomes λ\' = λ / μ','Fringe width shrinks: β\' = β / μ','Central maximum remains at geometric centre O'] },
        { l:'Thin mica/glass sheet (μ, t) placed over one slit', n:['Fringe width β = λD/d remains UNCHANGED','Entire pattern shifts towards the covered slit','Shift Δy = (μ − 1)tD/d = (μ − 1)t β/λ (or n = (μ − 1)t/λ fringes)'] },
        { l:'Monochromatic source replaced by white light', n:['Central fringe at Δx = 0 is WHITE (achromatic)','A few coloured fringes on either side (violet closest to centre, red farthest)','Far away: uniform white illumination due to overlapping'] }
      ]
    },
    { t:'Cutting a Symmetric Equiconvex Lens of Focal Length f (Power P): Quick Chain', chain:[
      'Equiconvex lens has two identical curved surfaces of radius R: 1/f = (n − 1)(1/R + 1/R) = 2(n − 1)/R',
      'Cut PERPENDICULAR to principal axis (into two plano-convex halves): each half has one flat face (R₂ = ∞) ⇒ focal length DOUBLES to 2f (power becomes P/2)',
      'Cut ALONG principal axis (horizontally into top and bottom semicircular lenses): radii of curvature R₁, R₂ are unchanged ⇒ focal length REMAINS f (intensity halves!)'
    ] }
  ],
  lab:[
    { t:'Focal Length of Concave Mirror / Convex Lens by No-Parallax (u–v) Method', d:'Remove parallax between tip of inverted real image and image pin by moving eye sideways; plot 1/v vs 1/u (straight line with intercepts 1/f) or v vs u (rectangular hyperbola intersecting u = v line at (2f, 2f)).' },
    { t:'Focal Length of Convex Mirror / Concave Lens Using Auxiliary Convex Lens', d:'Since a convex mirror or concave lens forms only a virtual image for a real object, use a converging convex lens first to form a real convergent beam (virtual object) and locate the centre of curvature R = 2f.' },
    { t:'Refractive Index of Prism by i–δ Curve & Travelling Microscope for Glass Slab', d:'Plot angle of deviation δ vs angle of incidence i (U-shaped curve); read minimum deviation δ_m at the bottom trough and compute n = sin[(A + δ_m)/2]/sin(A/2). For glass slab, μ = Real thickness (R₃ − R₁) / Apparent thickness (R₃ − R₂).' },
    { t:'Polaroid Rotation Verification of Malus\'s Law & Brewster Angle', d:'Rotate analyser polaroid through 360° in a plane-polarised beam: two complete extinctions (I = 0) and two maxima occur per 360° revolution. For unpolarised beam, rotating a single polaroid gives constant intensity I₀/2.' }
  ],
  pairs:[
    { g:'Optical phenomenon / device → governing physical principle', a:'Sparkling of diamond & optical fibre core–cladding transmission', b:'Total internal reflection (small critical angle i_c ≈ 24.4° for diamond; n_core > n_cladding)' },
    { g:'Optical phenomenon / device → governing physical principle', a:'Brilliant colours in thin soap films or oil slicks on wet roads', b:'Interference of light reflected from top and bottom surfaces of the thin film' },
    { g:'Optical phenomenon / device → governing physical principle', a:'3D movies, elimination of road/water glare in sunglasses, and LCD screens', b:'Polarisation of transverse light waves by selective absorption (Polaroids)' },
    { g:'Optical phenomenon / device → governing physical principle', a:'Cassegrain astronomical telescope objective', b:'Reflection by a large parabolic concave primary mirror and convex secondary mirror (zero chromatic aberration)' },
    { g:'Optical formula / relation → physical context', a:'tan i_B = μ  (with i_B + r = 90°)', b:'Brewster\'s law for 100% plane-polarised reflected light' },
    { g:'Optical formula / relation → physical context', a:'sin i_c = 1 / μ  (so tan i_B = 1 / sin i_c)', b:'Critical angle for total internal reflection at denser-to-rarer boundary' },
    { g:'Optical formula / relation → physical context', a:'β = λ D / d', b:'Fringe width of bright/dark interference fringes in Young\'s double-slit experiment' },
    { g:'Optical formula / relation → physical context', a:'W₀ = 2 λ D / a', b:'Linear width of the central bright maximum in single-slit Fraunhofer diffraction' }
  ],
  orders:[
    { q:'Critical angle i_c = sin⁻¹(1/n) for total internal reflection into air for different transparent media (from smallest i_c to largest i_c)', s:['Diamond (n = 2.42, i_c ≈ 24.4°)','Dense flint glass (n = 1.65, i_c ≈ 37.3°)','Crown glass (n = 1.50, i_c ≈ 41.8°)','Water (n = 1.33, i_c ≈ 48.8°)'], sep:'<', why:'Since sin i_c = 1/n, higher refractive index n gives a smaller critical angle i_c.' },
    { q:'Fringe width β = λD/d in Young\'s double-slit experiment when performed separately with monochromatic light of different colours (from widest fringes to narrowest fringes)', s:['Red light (λ ≈ 700 nm)','Yellow light (λ ≈ 580 nm)','Green light (λ ≈ 530 nm)','Violet light (λ ≈ 400 nm)'], sep:'>', why:'Fringe width β = λD/d is directly proportional to wavelength λ.' }
  ],
  facts:{
    T:[
      'According to Huygens\' wave theory, when a plane wavefront refracts from a rarer medium into a denser medium (v₂ < v₁), the refracted rays bend towards the normal and sin i / sin r = v₁ / v₂ = n₂ / n₁.',
      'The minimum distance between a real object and its real image formed by a thin convex lens of focal length f is 4f (occurring when u = −2f and v = +2f).',
      'At the angle of minimum deviation δ_m in an equilateral prism, the angle of incidence equals the angle of emergence (i = e) and the refracted ray inside the prism travels parallel to the prism base.',
      'The magnifying power of an astronomical telescope in normal adjustment (final image at infinity) is f_o/f_e and the tube length is f_o + f_e.',
      'If the ratio of intensities of two coherent interfering waves is I₁/I₂ = r, the ratio of maximum to minimum intensity in the interference pattern is (√r + 1)² / (√r − 1)².',
      'Only transverse waves can exhibit polarisation; longitudinal waves (such as sound waves in air) cannot be polarised.',
      'If θ_c is the critical angle for a medium–air interface and θ_B is the Brewster angle for air-to-medium incidence, they are related by tan θ_B = 1 / sin θ_c = μ.',
      'In a single-slit diffraction pattern, the angular width of the central bright maximum is 2λ/a, which is independent of the distance D between the slit and the screen.'
    ],
    F:[
      'According to Huygens\' principle, light travels faster in an optically denser medium than in an optically rarer medium.',
      'When an equiconvex lens of focal length f is cut into two identical plano-convex lenses perpendicular to its principal axis, each plano-convex lens has focal length f/2.',
      'In an astronomical telescope, the objective lens has a very small focal length and small aperture compared to the eyepiece.',
      'In Young\'s double-slit experiment, if the entire apparatus is immersed in water, the fringe width β increases by a factor of 4/3.',
      'At Brewster\'s angle of incidence, the refracted ray is 100% plane-polarised while the reflected ray is unpolarised.',
      'Total internal reflection can occur when a ray of light travels from air into glass at an angle of incidence greater than 42°.',
      'When unpolarised light of intensity I₀ passes through a single ideal polaroid, the transmitted intensity is I₀ cos²θ and varies as the polaroid is rotated.',
      'A concave mirror suffers from severe chromatic aberration when illuminated with white light.'
    ]
  },
  mcq:[
    { q:'A biconvex lens made of glass (refractive index n_g = 1.5) has a focal length of 20 cm in air. When it is completely immersed in water (refractive index n_w = 4/3), its new focal length in water is:',
      o:['80 cm','5 cm','26.7 cm','−80 cm'], a:0, tag:'Calculation Trap',
      sol:['By lens maker\'s formula, 1/f_air = (n_g − 1)(1/R₁ − 1/R₂) = (1.5 − 1)K = 0.5 K.','In water: 1/f_w = (n_g/n_w − 1)K = (1.5 / (4/3) − 1)K = (9/8 − 1)K = (1/8)K.','Dividing the two: f_w / f_air = 0.5 / (1/8) = 4 ⇒ f_w = 4 × 20 cm = 80 cm.'] },
    { q:'A thin convex lens of focal length +25 cm is placed in coaxial contact with a thin concave lens of focal length −20 cm. The power and nature of the combination are:',
      o:['−1.0 D, diverging','+1.0 D, converging','−9.0 D, diverging','+5.0 D, converging'], a:0, tag:'Sign Convention',
      sol:['P₁ = 100 / (+25 cm) = +4.0 D; P₂ = 100 / (−20 cm) = −5.0 D.','Equivalent power in contact: P = P₁ + P₂ = +4.0 − 5.0 = −1.0 D (negative power ⇒ diverging combination of focal length −100 cm).'] },
    { q:'For an equilateral prism (A = 60°), the angle of minimum deviation is found to be δ_m = 30°. The refractive index of the material of the prism is:',
      o:['√2  (≈ 1.414)','√3  (≈ 1.732)','1.5','2 / √3'], a:0, tag:'Calculation Trap',
      sol:['Prism formula: n = sin[(A + δ_m)/2] / sin(A/2).','With A = 60° and δ_m = 30°: n = sin[(60° + 30°)/2] / sin(60°/2) = sin 45° / sin 30° = (1/√2) / (1/2) = √2 ≈ 1.414.'] },
    { q:'In Young\'s double-slit experiment, the intensities of the two interfering waves at the screen are in the ratio 9 : 1. The ratio of maximum intensity to minimum intensity (I_max : I_min) in the interference pattern is:',
      o:['4 : 1','9 : 1','10 : 8','16 : 1'], a:0, tag:'Calculation Trap',
      sol:['Amplitude ratio a₁ / a₂ = √(I₁ / I₂) = √(9 / 1) = 3 / 1.','Intensity ratio I_max / I_min = (a₁ + a₂)² / (a₁ − a₂)² = (3 + 1)² / (3 − 1)² = 16 / 4 = 4 : 1.'] },
    { q:'In a single-slit diffraction experiment, a slit of width a = 0.2 mm is illuminated normally by monochromatic light of wavelength λ = 500 nm and the screen is placed at distance D = 2 m. The linear width of the CENTRAL bright maximum on the screen is:',
      o:['10 mm','5 mm','2.5 mm','20 mm'], a:0, tag:'Calculation Trap',
      sol:['Linear width of central diffraction maximum: W₀ = 2 λ D / a (don\'t forget the factor of 2!).','W₀ = 2 × (500 × 10⁻⁹ m) × 2 m / (0.2 × 10⁻³ m) = 2 × 10⁻⁶ / (2 × 10⁻⁴) = 10⁻² m = 10 mm.'] },
    { q:'Unpolarised light of intensity I₀ passes successively through two ideal polaroids P₁ and P₂ whose pass axes make an angle of 60° with each other. The intensity of light emerging from P₂ is:',
      o:['I₀ / 8','I₀ / 4','3I₀ / 8','I₀ / 2'], a:0, tag:'Calculation Trap',
      sol:['After the first polaroid P₁, unpolarised light intensity I₀ always becomes I₁ = I₀ / 2.','By Malus\'s law for the second polaroid P₂ at θ = 60°: I₂ = I₁ cos²(60°) = (I₀ / 2) × (1/2)² = I₀ / 8.'] },
    { q:'A refracting astronomical telescope has an objective of focal length 120 cm and an eyepiece of focal length 5 cm. In normal adjustment (final image at infinity), its magnifying power M and tube length L are:',
      o:['M = 24 and L = 125 cm','M = 24 and L = 115 cm','M = 600 and L = 125 cm','M = 25 and L = 120 cm'], a:0, tag:'Calculation Trap',
      sol:['In normal adjustment, magnifying power M = f_o / f_e = 120 / 5 = 24.','Tube length L = f_o + f_e = 120 + 5 = 125 cm.'] }
  ],
  gens:[
    function(R){
      var f1 = R.pick([10, 20, 25, 40, 50]);
      var f2 = R.pick([-10, -20, -25, -40, -50, 20, 25, 50]);
      if (f1 + f2 === 0) f2 = -20, f1 = 25;
      var P1 = 100 / f1, P2 = 100 / f2;
      var Peq = P1 + P2;
      if (Math.abs(Peq) < 0.01) { f1 = 20; f2 = -50; P1 = 5; P2 = -2; Peq = 3; }
      return {
        q:'Two thin lenses of focal lengths f₁ = ' + (f1 > 0 ? '+' : '') + f1 + ' cm and f₂ = ' + (f2 > 0 ? '+' : '') + f2 + ' cm are placed in coaxial contact. The equivalent power P of the lens combination (in dioptres) is:',
        ans:Peq, d:[P1 - P2, (f1 + f2) / 100, 100 / (f1 + f2)], u:'D',
        tag:'Sign Convention',
        sol:['P₁ = 100 / f₁ = ' + R.f(P1) + ' D; P₂ = 100 / f₂ = ' + R.f(P2) + ' D', 'In contact, P_eq = P₁ + P₂ = ' + R.f(Peq) + ' D']
      };
    },
    function(R){
      var lam_nm = R.pick([400, 450, 500, 550, 600, 650, 700]);
      var D_m = R.pick([1.0, 1.2, 1.5, 2.0, 2.5]);
      var d_mm = R.pick([0.5, 1.0, 1.5, 2.0]);
      var beta_mm = (lam_nm * 1e-9 * D_m / (d_mm * 1e-3)) * 1e3;
      return {
        q:'In Young\'s double-slit experiment, the slit separation is d = ' + d_mm + ' mm, the screen distance is D = ' + D_m + ' m, and monochromatic light of wavelength λ = ' + lam_nm + ' nm is used. The fringe width β on the screen (in mm) is:',
        ans:beta_mm, d:[beta_mm * 2, beta_mm / 2, (lam_nm * d_mm) / (D_m * 1e3)], u:'mm',
        tag:'Unit Conversion Trap',
        sol:['Fringe width β = λ D / d = (' + lam_nm + ' × 10⁻⁹ m × ' + D_m + ' m) / (' + d_mm + ' × 10⁻³ m)', 'β = ' + R.f(beta_mm) + ' mm']
      };
    },
    function(R){
      var aRatio = R.pick([2, 3, 4, 5, 6]);
      var iRatio = aRatio * aRatio;
      var maxMin = Math.pow(aRatio + 1, 2) / Math.pow(aRatio - 1, 2);
      return {
        q:'Two coherent light waves having intensity ratio I₁ / I₂ = ' + iRatio + ' : 1 produce an interference pattern. The ratio of maximum intensity to minimum intensity (I_max / I_min) in the fringe pattern is:',
        ans:maxMin, d:[iRatio, (iRatio + 1) / (iRatio - 1), aRatio], u:'',
        tag:'Calculation Trap',
        sol:['Amplitude ratio a₁ / a₂ = √(I₁ / I₂) = √' + iRatio + ' = ' + aRatio, 'I_max / I_min = (a₁ + a₂)² / (a₁ − a₂)² = (' + aRatio + ' + 1)² / (' + aRatio + ' − 1)² = ' + Math.pow(aRatio + 1, 2) + ' / ' + Math.pow(aRatio - 1, 2) + ' = ' + R.f(maxMin)]
      };
    },
    function(R){
      var lam_nm = R.pick([400, 500, 600, 650]);
      var D_m = R.pick([1.0, 1.5, 2.0, 3.0]);
      var a_mm = R.pick([0.1, 0.2, 0.4, 0.5]);
      var W_mm = (2 * lam_nm * 1e-9 * D_m / (a_mm * 1e-3)) * 1e3;
      return {
        q:'In a single-slit diffraction experiment, a slit of width a = ' + a_mm + ' mm is illuminated by light of wavelength λ = ' + lam_nm + ' nm and the screen is at a distance D = ' + D_m + ' m. The linear width of the central bright maximum (in mm) is:',
        ans:W_mm, d:[W_mm / 2, W_mm * 2, W_mm / 10], u:'mm',
        tag:'Calculation Trap',
        sol:['Linear width of central maximum W₀ = 2 λ D / a (twice the secondary fringe width)', 'W₀ = 2 × (' + lam_nm + ' × 10⁻⁹ × ' + D_m + ') / (' + a_mm + ' × 10⁻³) m = ' + R.f(W_mm) + ' mm']
      };
    },
    function(R){
      var I0 = R.pick([16, 24, 32, 40, 48, 64, 80, 100]);
      var deg = R.pick([30, 45, 60]);
      var cos2 = deg === 30 ? 0.75 : (deg === 45 ? 0.5 : 0.25);
      var Iout = (I0 / 2) * cos2;
      return {
        q:'An unpolarised beam of light of intensity ' + I0 + ' W m⁻² passes through a polariser P₁ and then through an analyser P₂ whose pass axis makes an angle of ' + deg + '° with that of P₁. The intensity of light emerging from P₂ is:',
        ans:Iout, d:[I0 * cos2, I0 / 2, Iout / 2], u:'W m⁻²',
        tag:'Calculation Trap',
        sol:['First polariser reduces unpolarised intensity I₀ to I₁ = I₀ / 2 = ' + (I0 / 2) + ' W m⁻²', 'Second polariser (Malus\'s law): I₂ = I₁ cos²(' + deg + '°) = ' + (I0 / 2) + ' × ' + cos2 + ' = ' + R.f(Iout) + ' W m⁻²']
      };
    },
    function(R){
      var A = R.pick([4, 5, 6, 8, 10]);
      var n = R.pick([1.4, 1.5, 1.6, 1.65, 1.75]);
      var delta = (n - 1) * A;
      return {
        q:'A thin prism of refracting angle A = ' + A + '° is made of glass of refractive index n = ' + n + '. The angle of deviation δ produced by the prism for small angles of incidence is:',
        ans:delta, d:[n * A, (n + 1) * A, A / (n - 1)], u:'°',
        tag:'Approximation Limit',
        sol:['For a thin prism, angle of deviation δ = (n − 1) A', 'δ = (' + n + ' − 1) × ' + A + '° = ' + R.f(delta) + '°']
      };
    },
    function(R){
      var fo = R.pick([80, 100, 120, 150, 200]);
      var fe = R.pick([2, 4, 5, 8, 10]);
      var M = fo / fe;
      var L = fo + fe;
      var askM = R.pick([true, false]);
      if (askM) {
        return {
          q:'An astronomical telescope has an objective of focal length ' + fo + ' cm and an eyepiece of focal length ' + fe + ' cm. When set for normal adjustment (final image at infinity), its magnifying power is:',
          ans:M, d:[L, fo - fe, M * (1 + fe / 25)], u:'',
          tag:'Calculation Trap',
          sol:['In normal adjustment (relaxed eye), magnifying power M = f_o / f_e', 'M = ' + fo + ' / ' + fe + ' = ' + R.f(M)]
        };
      }
      return {
        q:'An astronomical telescope has an objective of focal length ' + fo + ' cm and an eyepiece of focal length ' + fe + ' cm. In normal adjustment (final image at infinity), the distance between the objective and eyepiece (tube length) is:',
        ans:L, d:[fo - fe, M, (fo * fe) / (fo + fe)], u:'cm',
        tag:'Calculation Trap',
        sol:['In normal adjustment, the intermediate image lies at the common focus of objective and eyepiece', 'Tube length L = f_o + f_e = ' + fo + ' + ' + fe + ' = ' + L + ' cm']
      };
    }
  ]
});

NEET.reg({
  id:'P17',
  subj:'Physics',
  type:'num',
  name:'Dual Nature of Radiation and Matter',
  syl:'Dual nature of radiation. Photoelectric effect, Hertz and Lenard\'s observations; Einstein\'s photoelectric equation—particle nature of light. Matter waves—wave nature of particles, de-Broglie relation.',
  kw:['photoelectric','work function','stopping potential','threshold frequency','hertz','lenard','einstein equation','photon','de broglie','matter wave'],
  formulas:[
    { n:'Photon Energy & Momentum', f:'E = h ν = h c / λ ;  E(eV) ≈ 1240 / λ(nm) ≈ 12400 / λ(Å) ;  p = E / c = h / λ', u:'J (or eV) ;  kg m s⁻¹', s:'Rest mass of photon m₀ = 0; speed in vacuum = c; photon is electrically neutral (not deflected by E or B); 1 eV = 1.6 × 10⁻¹⁹ J', b:'E(eV) = 1240 / λ(nm) requires λ strictly in nanometres (or 1242 eV·nm for higher precision)' },
    { n:'Photon Flux & Number of Photons per Second', f:'n = P / E = P λ / (h c) ;  F_rad = P / c (absorbing)  or  2P / c (reflecting)', u:'s⁻¹ ;  N', s:'P = power of monochromatic light source in watts; if quantum efficiency is η, photoelectric saturation current is I_sat = η n e', b:'At fixed power P, increasing wavelength λ INCREASES the number of photons emitted per second (n ∝ λ)' },
    { n:'Work Function, Threshold Frequency & Threshold Wavelength', f:'φ₀ = h ν₀ = h c / λ₀', u:'eV (or J)', s:'Minimum energy needed by an electron to escape from the metal surface; depends ONLY on nature of metal and surface condition (Cs has lowest φ₀ ≈ 2.14 eV, Pt has highest φ₀ ≈ 5.65 eV)', b:'Photoelectric emission occurs ONLY if ν ≥ ν₀ (or λ ≤ λ₀), regardless of how high the incident intensity is' },
    { n:'Einstein\'s Photoelectric Equation', f:'K_max = ½ m v_max² = h ν − φ₀ = h (ν − ν₀) = h c (1/λ − 1/λ₀)', u:'J (or eV)', s:'Reflects energy conservation in a 1-to-1 photon–electron absorption event; most photoelectrons emerge with K < K_max due to internal collisions before escape', b:'Single-photon absorption breaks down only at extreme laser intensities where multiphoton absorption can occur' },
    { n:'Stopping (Cut-off) Potential V₀', f:'e V₀ = K_max = h ν − φ₀  ⇒  V₀ = (h / e) ν − (φ₀ / e)', u:'V', s:'Graph of V₀ vs ν is a straight line with universal slope (h/e) ≈ 4.14 × 10⁻¹⁵ V s (same for ALL metals!) and y-intercept −φ₀/e', b:'Valid only for ν ≥ ν₀; stopping potential V₀ is completely independent of incident light intensity I' },
    { n:'de Broglie Wavelength of Matter Waves', f:'λ = h / p = h / (m v) = h / √(2 m K) = h / √(2 m q V)', u:'m', s:' Applies to ALL material particles (charged or neutral); for a thermal neutron at temperature T, K = (3/2)k_B T so λ = h / √(3 m k_B T)', b:'Non-relativistic formula p = √(2mK) fails when kinetic energy K is comparable to rest-mass energy m₀c²' },
    { n:'de Broglie Wavelength of Electron Accelerated by V Volts', f:'λ_e = h / √(2 m_e e V) ≈ 1.227 / √V  nm = 12.27 / √V  Å', u:'nm (or Å)', s:'Valid specifically for an ELECTRON accelerated from rest through potential difference V (in volts)', b:'NEVER apply 1.227/√V nm to protons, deuterons, or alpha particles (their masses and charges are different!)' },
    { n:'de Broglie Ratios for Proton, Deuteron & Alpha Particle', f:'λ ∝ 1 / √(m K)  [same K] ;  λ ∝ 1 / (q √m) — wait: λ = h / √(2 m q V) ∝ 1 / √(m q)  [same V]', u:'dimensionless', s:'At same KE: λ_p : λ_d : λ_α = 1 : 1/√2 : 1/2; at same accelerating V: λ_p : λ_d : λ_α = 1 : 1/√2 : 1/(2√2)', b:'Check carefully whether the question holds speed v, momentum p, kinetic energy K, or accelerating potential V constant!' }
  ],
  traps:[
    { t:'Doubling the intensity I of incident monochromatic light (keeping frequency ν > ν₀ constant) DOUBLES the photoelectric saturation current I_sat, but causes ZERO change in K_max or stopping potential V₀.', c:'Higher intensity means twice as many photons per second (doubling the number of emitted photoelectrons), while the energy hν of each individual photon stays identical.', tag:'Graph Trap' },
    { t:'If incident frequency ν is doubled (from ν to 2ν), the maximum kinetic energy K_max of photoelectrons becomes MORE than double (K\' = 2K_max + φ₀).', c:'Initially K_max = hν − φ₀ ⇒ hν = K_max + φ₀; at frequency 2ν, K\' = 2hν − φ₀ = 2(K_max + φ₀) − φ₀ = 2K_max + φ₀ > 2K_max.', tag:'Calculation Trap' },
    { t:'The slope of the stopping potential (V₀) versus frequency (ν) graph is (h/e), which is a universal constant and is strictly PARALLEL for all photosensitive metals (Cs, K, Na, Zn, Pt).', c:'From V₀ = (h/e)ν − φ₀/e, the slope dV₀/dν = h/e depends only on fundamental constants h and e, not on the metal\'s work function φ₀.', tag:'Graph Trap' },
    { t:'If a point light source is moved from distance r to 2r from a photoelectric cell, the saturation photocurrent drops to 1/4th (I_sat ∝ 1/r²), whereas the stopping potential V₀ remains completely UNCHANGED.', c:'Intensity from a point source obeys the inverse-square law I ∝ 1/r² (reducing photon flux to 1/4), while individual photon energy hν is unaffected by distance.', tag:'Concept Trap' },
    { t:'For a photon and an electron having the SAME wavelength λ, they have the SAME momentum p = h/λ, but the photon has much greater total energy than the kinetic energy of the non-relativistic electron.', c:'Both obey p = h/λ; however E_photon = pc while K_electron = p²/(2m_e) = (v/2c) E_photon ≪ E_photon since v ≪ c.', tag:'Concept Trap' },
    { t:'de Broglie matter waves are associated with ALL moving particles (electrons, protons, neutrons, atoms, cricket balls) regardless of whether they carry electric charge or are neutral.', c:'λ = h/p depends only on momentum p = mv and Planck\'s constant h; charge q enters only if a particle is accelerated electrostatically via K = qV.', tag:'NCERT Exception' },
    { t:'Alkali metals (Caesium, Potassium, Sodium) respond even to visible light, whereas Zinc, Cadmium, and Magnesium respond only to ultraviolet light.', c:'Alkali metals have low work functions (Cs: 2.14 eV, K: 2.30 eV, Na: 2.75 eV < 3.1 eV violet light), while Zn (4.3 eV), Cd, and Mg have work functions in the UV range.', tag:'NCERT Exception' },
    { t:'Photoelectric emission is an instantaneous process (time lag < 10⁻⁹ s between photon incidence and electron ejection), which directly refutes the classical wave theory of light.', c:'In classical wave theory, energy is spread continuously over the wavefront so an electron would take hours to accumulate enough energy from a dim beam; in photon theory, one photon transfers all its energy hν in a single collision.', tag:'Concept Trap' }
  ],
  flows:[
    { t:'Photoelectric Effect Parameter Changes (ν > ν₀)', root:'Identify which parameter of the incident monochromatic beam is changed',
      br:[
        { l:'Intensity I increased (at constant ν)', n:['Photon flux n/t increases proportionally','Saturation current I_sat increases linearly with I','K_max and stopping potential V₀ remain UNCHANGED'] },
        { l:'Frequency ν increased (at constant I)', n:['Each photon has higher energy hν','K_max and V₀ increase linearly with ν','Photon count n = I/(hν) drops slightly so I_sat changes slightly'] },
        { l:'Frequency ν < ν₀ (below threshold)', n:['hν < φ₀ (single photon cannot liberate electron)','ZERO photoelectric current at ANY intensity','No time delay can compensate for ν < ν₀'] }
      ]
    },
    { t:'de Broglie Wavelength Comparison across Particles (e⁻, p, d, α)', root:'Check which physical quantity is held CONSTANT across the particles',
      br:[
        { l:'Same momentum p', n:['λ = h / p','All have the EXACT SAME de Broglie wavelength','λ_e = λ_p = λ_d = λ_α'] },
        { l:'Same kinetic energy K', n:['λ = h / √(2mK) ∝ 1 / √m','Lighter particle has LONGER wavelength','λ_e ≫ λ_p > λ_d > λ_α'] },
        { l:'Same accelerating potential V', n:['λ = h / √(2mqV) ∝ 1 / √(mq)','Compare product m·q: (m_p·e) < (2m_p·e) < (4m_p·2e)','λ_p : λ_d : λ_α = 1 : 1/√2 : 1/(2√2)'] }
      ]
    },
    { t:'Historical Milestones in Dual Nature (Chronological Chain)', chain:[
      'Hertz (1887): Discovered that UV light illuminating the emitter plate facilitates high-voltage spark discharge by liberating negatively charged particles',
      'Hallwachs & Lenard (1888–1902): Showed negatively charged Zn plate loses charge under UV; measured stopping potential V₀ and found K_max depends on frequency, NOT intensity',
      'Einstein (1905): Proposed light quanta (photons) of energy hν and derived K_max = hν − φ₀; verified experimentally by Millikan (1916) who measured h',
      'de Broglie (1924): Hypothesized wave-particle duality λ = h/p for matter; confirmed by electron diffraction experiments'
    ] }
  ],
  lab:[
    { t:'Lenard–Millikan Photoelectric Tube Setup (Quartz Window)', d:'The evacuated glass tube has a side window made of QUARTZ (not ordinary glass) because ordinary glass absorbs ultraviolet rays needed to cause photoemission from metals like Zn/Cd.' },
    { t:'Photocell I–V Characteristic Curves (Varying I vs Varying ν)', d:'For fixed ν and three intensities I₁ < I₂ < I₃: all three curves meet the negative voltage axis at the SAME stopping potential −V₀ but reach different saturation currents. For fixed I and ν₁ < ν₂ < ν₃: curves have different stopping potentials (−V₀₁, −V₀₂, −V₀₃) and merge to the same saturation current.' },
    { t:'Determination of Planck\'s Constant h from V₀ vs ν Graph', d:'Measure stopping potential V₀ for 3–4 spectral filters of known frequencies ν; plot V₀ on y-axis vs ν on x-axis. Slope m = ΔV₀/Δν gives h = e · m, and x-intercept gives threshold frequency ν₀.' },
    { t:'Caesium Coating on Photocell Cathodes', d:'Caesium (φ₀ = 2.14 eV) or alkali-oxide coated cathodes are used in practical photoelectric cells (burglar alarms, automatic street lights, sound reproduction in film projectors) so they operate under ordinary visible light.' }
  ],
  pairs:[
    { g:'Photoelectric graph → geometric slope & intercept meaning', a:'Stopping potential V₀ (y-axis) vs frequency ν (x-axis)', b:'Straight line with slope = h/e, x-intercept = ν₀, and y-intercept = −φ₀/e' },
    { g:'Photoelectric graph → geometric slope & intercept meaning', a:'Maximum kinetic energy K_max (y-axis) vs frequency ν (x-axis)', b:'Straight line with slope = Planck\'s constant h and y-intercept = −φ₀' },
    { g:'Photoelectric graph → geometric slope & intercept meaning', a:'Photoelectric saturation current I_sat (y-axis) vs intensity I (x-axis) at fixed ν > ν₀', b:'Straight line passing through the origin (I_sat ∝ I)' },
    { g:'Photoelectric graph → geometric slope & intercept meaning', a:'Stopping potential V₀ (y-axis) vs intensity I (x-axis) at fixed ν > ν₀', b:'Horizontal straight line parallel to Intensity axis (zero slope; V₀ independent of I)' },
    { g:'Particle / radiation expression → formula in standard units', a:'Photon energy E in eV for wavelength λ in nm', b:'1240 / λ(nm)  eV' },
    { g:'Particle / radiation expression → formula in standard units', a:'de Broglie wavelength λ_e of an electron accelerated through V volts', b:'1.227 / √V  nm  (or 12.27 / √V  Å)' },
    { g:'Particle / radiation expression → formula in standard units', a:'de Broglie wavelength λ of a neutral particle of mass m at temperature T', b:'h / √(3 m k_B T)' },
    { g:'Particle / radiation expression → formula in standard units', a:'Linear momentum p of a photon or matter wave of wavelength λ', b:'h / λ' }
  ],
  orders:[
    { q:'Work function φ₀ (in eV) of common photosensitive metals from NCERT Table (from lowest work function to highest work function)', s:['Caesium (2.14 eV)','Potassium (2.30 eV)','Sodium (2.75 eV)','Calcium (3.20 eV)','Copper (4.65 eV)','Platinum (5.65 eV)'], sep:'<', why:'Caesium has the lowest work function (2.14 eV) and Platinum has the highest (5.65 eV) in the standard NCERT table.' },
    { q:'de Broglie wavelength λ = h/√(2mK) of an electron (e⁻), proton (p), deuteron (d), and alpha particle (α) all moving with the SAME kinetic energy K (from longest wavelength to shortest wavelength)', s:['Electron (m_e)','Proton (m_p)','Deuteron (2m_p)','Alpha particle (4m_p)'], sep:'>', why:'At constant kinetic energy K, λ = h/√(2mK) ∝ 1/√m, so the lightest particle has the longest de Broglie wavelength.' }
  ],
  facts:{
    T:[
      'In the photoelectric effect, the maximum kinetic energy of emitted photoelectrons depends linearly on the frequency of incident radiation (for ν > ν₀) and is independent of its intensity.',
      'For a given photosensitive metal and incident frequency ν > ν₀, the photoelectric saturation current is directly proportional to the intensity of incident light.',
      'The rest mass of a photon is zero, its energy is hν, and its linear momentum is p = hν/c = h/λ.',
      'Caesium has the lowest work function (2.14 eV) among common metals and easily exhibits photoelectric emission with visible light.',
      'The de Broglie wavelength of an electron accelerated from rest through a potential difference of 100 V is approximately 0.1227 nm (1.227 Å), which lies in the X-ray region.',
      'When monochromatic light of wavelength λ is incident on a metal of threshold wavelength λ₀ (with λ < λ₀), the stopping potential is V₀ = (hc/e)(1/λ − 1/λ₀).',
      'Two monochromatic beams of the same intensity I — one red and one violet — carry different photon fluxes: the red beam contains MORE photons per second than the violet beam because λ_red > λ_violet.',
      'When an electron and a proton are accelerated through the same potential difference V, the ratio of their de Broglie wavelengths is λ_e / λ_p = √(m_p / m_e) ≈ 42.8.'
    ],
    F:[
      'Below the threshold frequency ν₀, photoelectric emission can still be produced if a sufficiently intense beam is shone on the metal for several minutes.',
      'Doubling the frequency of incident radiation on a metal surface exactly doubles the maximum kinetic energy of the emitted photoelectrons.',
      'The slope of the stopping potential V₀ versus frequency ν graph is different for different metals and is proportional to their work functions.',
      'Photons carry a small positive electric charge and are deflected by strong electrostatic fields.',
      'de Broglie waves are electromagnetic waves and therefore travel at the speed of light c in vacuum.',
      'For a proton and an alpha particle accelerated from rest through the same potential difference V, the alpha particle has a longer de Broglie wavelength than the proton.',
      'If the distance between a point light source and a photocell is doubled, both the saturation current and the stopping potential decrease to one-fourth of their initial values.',
      'The de Broglie wavelength of a neutral neutron is infinite because its electric charge q is zero.'
    ]
  },
  mcq:[
    { q:'Monochromatic light of wavelength 400 nm is incident on a photosensitive metal whose work function is 2.1 eV. The maximum kinetic energy of the emitted photoelectrons and the stopping potential are approximately (take hc = 1240 eV·nm):',
      o:['1.0 eV and 1.0 V','3.1 eV and 3.1 V','5.2 eV and 5.2 V','0.5 eV and 1.0 V'], a:0, tag:'Calculation Trap',
      sol:['Incident photon energy E = 1240 / 400 nm = 3.1 eV.','By Einstein\'s photoelectric equation: K_max = E − φ₀ = 3.1 eV − 2.1 eV = 1.0 eV.','Stopping potential V₀ = K_max / e = 1.0 V.'] },
    { q:'When a metal surface is illuminated with light of frequency ν, the maximum kinetic energy of emitted photoelectrons is K₀. If the frequency of incident light is doubled to 2ν, the maximum kinetic energy of the photoelectrons becomes:',
      o:['2K₀ + φ₀','2K₀','2K₀ − φ₀','K₀ + hν₀'], a:0, tag:'Calculation Trap',
      sol:['At frequency ν: K₀ = hν − φ₀ ⇒ hν = K₀ + φ₀.','At frequency 2ν: K\' = h(2ν) − φ₀ = 2(K₀ + φ₀) − φ₀ = 2K₀ + φ₀ (which is strictly greater than 2K₀).'] },
    { q:'A proton and an alpha particle are accelerated from rest through the SAME potential difference V. The ratio of their de Broglie wavelengths (λ_p : λ_α) is:',
      o:['2√2 : 1','2 : 1','√2 : 1','4 : 1'], a:0, tag:'Calculation Trap',
      sol:['For a particle of mass m and charge q accelerated through V: λ = h / √(2 m q V) ⇒ λ ∝ 1 / √(m q).','For proton: m_p = m, q_p = e; for alpha particle: m_α = 4m, q_α = 2e.','λ_p / λ_α = √[(m_α q_α) / (m_p q_p)] = √[(4 × 2) / (1 × 1)] = √8 = 2√2 : 1.'] },
    { q:'The de Broglie wavelength of an electron accelerated from rest through a potential difference of 100 V is approximately:',
      o:['1.227 Å  (0.1227 nm)','12.27 Å  (1.227 nm)','0.1227 Å','122.7 Å'], a:0, tag:'Unit Conversion Trap',
      sol:['For an electron accelerated through V volts: λ_e = 12.27 / √V Å = 1.227 / √V nm.','At V = 100 V, √V = 10, so λ_e = 12.27 / 10 = 1.227 Å = 0.1227 nm.'] },
    { q:'If the kinetic energy of a free non-relativistic particle is increased to 16 times its initial value, its de Broglie wavelength becomes:',
      o:['1/4 of its initial value','1/16 of its initial value','4 times its initial value','1/2 of its initial value'], a:0, tag:'Calculation Trap',
      sol:['de Broglie wavelength in terms of kinetic energy K: λ = h / √(2mK) ⇒ λ ∝ 1 / √K.','When K\' = 16 K, λ\' / λ = 1 / √16 = 1/4.'] },
    { q:'A point source of monochromatic light (ν > ν₀) is moved from a distance of 0.5 m to 1.0 m away from a photoelectric cell. How do the stopping potential V₀ and saturation photocurrent I_sat change?',
      o:['V₀ remains unchanged, while I_sat decreases to one-fourth','Both V₀ and I_sat decrease to one-fourth','V₀ becomes half, while I_sat decreases to one-fourth','V₀ remains unchanged, while I_sat becomes half'], a:0, tag:'Concept Trap',
      sol:['Doubling distance r from a point source reduces intensity I ∝ 1/r² to 1/4 of its initial value.','Since I_sat ∝ I, saturation current becomes 1/4; since stopping potential V₀ depends only on frequency ν and work function φ₀, V₀ remains unchanged.'] }
  ],
  gens:[
    function(R){
      var lam_nm = R.pick([200, 248, 300, 310, 400, 496]);
      var E_eV = 1240 / lam_nm;
      var phi = R.pick([1.5, 2.0, 2.1, 2.2]);
      if (phi >= E_eV - 0.2) phi = 1.2;
      var Kmax = E_eV - phi;
      return {
        q:'Light of wavelength ' + lam_nm + ' nm falls on a metal surface of work function ' + phi + ' eV. The stopping potential V₀ for the emitted photoelectrons is (take hc = 1240 eV·nm):',
        ans:Kmax, d:[E_eV + phi, E_eV, Kmax * 2], u:'V',
        tag:'Calculation Trap',
        sol:['Incident photon energy E = 1240 / ' + lam_nm + ' = ' + R.f(E_eV) + ' eV', 'K_max = E − φ₀ = ' + R.f(E_eV) + ' − ' + phi + ' = ' + R.f(Kmax) + ' eV ⇒ Stopping potential V₀ = ' + R.f(Kmax) + ' V']
      };
    },
    function(R){
      var V = R.pick([25, 36, 49, 64, 81, 100, 144, 169, 225, 400]);
      var rt = Math.sqrt(V);
      var lam_A = 12.27 / rt;
      return {
        q:'An electron is accelerated from rest through a potential difference of ' + V + ' V. Its de Broglie wavelength (in Å) is:',
        ans:lam_A, d:[12.27 / V, 1.227 / rt, 12.27 * rt], u:'Å',
        tag:'Unit Conversion Trap',
        sol:['For an electron accelerated through V volts, λ = 12.27 / √V Å', 'λ = 12.27 / √' + V + ' = 12.27 / ' + rt + ' = ' + R.f(lam_A) + ' Å']
      };
    },
    function(R){
      var K0 = R.pick([0.5, 0.8, 1.0, 1.2, 1.5, 2.0]);
      var phi = R.pick([1.5, 2.0, 2.2, 2.5, 3.0]);
      var mult = R.pick([2, 3]);
      var Knew = mult * K0 + (mult - 1) * phi;
      return {
        q:'When photons of frequency ν strike a photosensitive surface of work function ' + phi + ' eV, the maximum kinetic energy of emitted photoelectrons is ' + K0 + ' eV. If the incident photon frequency is increased to ' + mult + 'ν, the new maximum kinetic energy is:',
        ans:Knew, d:[mult * K0, mult * K0 - phi, K0 + phi], u:'eV',
        tag:'Calculation Trap',
        sol:['Initially hν = K₀ + φ₀ = ' + K0 + ' + ' + phi + ' = ' + R.f(K0 + phi) + ' eV', 'At frequency ' + mult + 'ν: K\' = ' + mult + '(hν) − φ₀ = ' + mult + ' × ' + R.f(K0 + phi) + ' − ' + phi + ' = ' + R.f(Knew) + ' eV']
      };
    },
    function(R){
      var P_mW = R.pick([2, 3.3, 4, 5, 6.6, 10, 20]);
      var lam_nm = R.pick([400, 500, 600, 660]);
      var E_J = (6.63e-34 * 3e8) / (lam_nm * 1e-9);
      var n_e15 = ((P_mW * 1e-3) / E_J) / 1e15;
      return {
        q:'A monochromatic laser source operating at wavelength ' + lam_nm + ' nm has an output power of ' + P_mW + ' mW. The number of photons emitted by the laser per second (in × 10¹⁵ s⁻¹) is (take h = 6.63 × 10⁻³⁴ J s, c = 3 × 10⁸ m s⁻¹):',
        ans:n_e15, d:[n_e15 * 10, n_e15 / 10, (P_mW * lam_nm) / 100], u:'× 10¹⁵ s⁻¹',
        tag:'Unit Conversion Trap',
        sol:['Energy of 1 photon: E = hc / λ = (6.63 × 10⁻³⁴ × 3 × 10⁸) / (' + lam_nm + ' × 10⁻⁹) = ' + R.f(E_J) + ' J', 'Photon emission rate n = P / E = (' + P_mW + ' × 10⁻³ W) / E = ' + R.f(n_e15) + ' × 10¹⁵ s⁻¹']
      };
    },
    function(R){
      var pct = R.pick([44, 69, 96, 125, 200, 300]);
      var kFactor = 1 + pct / 100;
      var pFactor = Math.sqrt(kFactor);
      var lamRatio = 1 / pFactor;
      var pctDec = (1 - lamRatio) * 100;
      return {
        q:'If the kinetic energy of a moving particle is increased by ' + pct + '%, the percentage decrease in its de Broglie wavelength is:',
        ans:pctDec, d:[pct / 2, 100 * (1 - 1 / kFactor), (pFactor - 1) * 100], u:'%',
        tag:'Calculation Trap',
        sol:['New kinetic energy K\' = (1 + ' + pct + '/100) K = ' + kFactor + ' K', 'Since λ ∝ 1 / √K, λ\' / λ = 1 / √(' + kFactor + ') = 1 / ' + R.f(pFactor) + ' = ' + R.f(lamRatio), 'Percentage decrease = (1 − λ\'/λ) × 100% = ' + R.f(pctDec) + '%']
      };
    },
    function(R){
      var lam0_nm = R.pick([500, 600, 620, 400]);
      var lam_nm = R.pick([200, 250, 300, 310]);
      var phi = 1240 / lam0_nm;
      var E = 1240 / lam_nm;
      var Kmax = E - phi;
      return {
        q:'The threshold wavelength for photoelectric emission from a metal surface is ' + lam0_nm + ' nm. When ultraviolet light of wavelength ' + lam_nm + ' nm is incident on it, the maximum kinetic energy of emitted photoelectrons is (take hc = 1240 eV·nm):',
        ans:Kmax, d:[E + phi, 1240 / (lam0_nm - lam_nm), E / 2], u:'eV',
        tag:'Calculation Trap',
        sol:['Work function φ₀ = hc / λ₀ = 1240 / ' + lam0_nm + ' = ' + R.f(phi) + ' eV; incident photon energy E = 1240 / ' + lam_nm + ' = ' + R.f(E) + ' eV', 'K_max = hc(1/λ − 1/λ₀) = ' + R.f(E) + ' − ' + R.f(phi) + ' = ' + R.f(Kmax) + ' eV']
      };
    }
  ]
});

NEET.reg({
  id:'P18',
  subj:'Physics',
  type:'num',
  name:'Atoms and Nuclei',
  syl:'Alpha-particle scattering experiment; Rutherford\'s model of atom; Bohr model, energy levels, hydrogen spectrum. Composition and size of nucleus, atomic masses, Mass-energy relation, mass defect; binding energy per nucleon and its variation with mass number, nuclear fission, and fusion.',
  kw:['rutherford','impact parameter','closest approach','bohr model','hydrogen spectrum','lyman','balmer','rydberg','nuclear radius','mass defect','binding energy','fission','fusion'],
  formulas:[
    { n:'Rutherford Scattering, Closest Approach & Impact Parameter', f:'N(θ) ∝ 1 / sin⁴(θ/2) ;  r₀ = (1 / 4πε₀) (2 Z e²) / K_α ;  b = (Z e² cot(θ/2)) / (4πε₀ K_α)', u:'m', s:'K_α = ½ m_α v² = 2e V_acc is initial KE of α-particle; head-on collision has impact parameter b = 0 and scattering angle θ = 180°', b:'r₀ ∝ Z / K_α holds only as long as K_α is small enough that r₀ > nuclear radius R (otherwise strong nuclear force acts)' },
    { n:'Bohr Quantisation & Standing Wave Condition', f:'L = m v r = n h / (2π) ;  2π r_n = n λ_dB  (n = 1, 2, 3…)', u:'J s ;  m', s:'de Broglie explained Bohr\'s postulate: the circumference 2πr_n of the nth stationary orbit contains an integral number n of de Broglie wavelengths', b:'Applies strictly to single-electron (hydrogenic) species: H (Z=1), He⁺ (Z=2), Li²⁺ (Z=3), Be³⁺ (Z=4)' },
    { n:'Bohr Orbit Radius, Speed & Time Period Scaling', f:'r_n = 0.529 (n² / Z) Å ;  v_n = (c / 137) (Z / n) ≈ 2.19 × 10⁶ (Z / n) m s⁻¹ ;  T_n ∝ n³ / Z²', u:'Å ;  m s⁻¹ ;  s', s:'a₀ = 0.529 Å is the first Bohr radius of H; orbital current I_n = e/T_n ∝ Z²/n³ and magnetic moment μ_n = (eh/4πm_e) n = n μ_B', b:'Wait: orbital angular momentum L ∝ n (independent of Z!), magnetic moment μ ∝ n, whereas v ∝ Z/n and r ∝ n²/Z' },
    { n:'Bohr Energy Levels (Total, Kinetic & Potential Energy)', f:'E_n = −13.6 (Z² / n²) eV ;  K_n = −E_n = +13.6 (Z² / n²) eV ;  U_n = 2 E_n = −27.2 (Z² / n²) eV', u:'eV', s:'Exact virial ratio: K : U : E = +1 : −2 : −1 (assuming U(∞) = 0); as n increases, K decreases while U and total E INCREASE (become less negative)', b:'If zero of potential energy is shifted by +C, U and E both shift by +C, while kinetic energy K_n remains unchanged' },
    { n:'Rydberg Formula & Hydrogen Spectral Series', f:'1 / λ = R_H Z² (1/n₁² − 1/n₂²) ;  N_lines = n(n − 1) / 2', u:'m⁻¹ (R_H = 1.097 × 10⁷ m⁻¹)', s:'1/R_H ≈ 912 Å; Lyman (n₁=1, UV), Balmer (n₁=2, Visible), Paschen (n₁=3, IR), Brackett (n₁=4, IR), Pfund (n₁=5, IR); series limit (shortest λ) is n₂ = ∞; longest λ (first line, α-line) is n₂ = n₁ + 1', b:'N = n(n − 1)/2 gives max distinct lines from a gas sample excited to state n; for a SINGLE isolated atom, at most (n − 1) photons can be emitted in one cascade' },
    { n:'Nuclear Radius & Constant Nuclear Density', f:'R = R₀ A^(1/3)  (R₀ ≈ 1.2 × 10⁻¹⁵ m = 1.2 fm) ;  ρ_nuc = 3 m_N / (4π R₀³) ≈ 2.3 × 10¹⁷ kg m⁻³', u:'m (fm) ;  kg m⁻³', s:'Nuclear volume V = (4/3)πR³ = (4/3)πR₀³ A ∝ A; nuclear density ρ = Mass/Volume ∝ A/A = A⁰ is INDEPENDENT of mass number A!', b:'Ratio of nuclear densities of any two nuclei (e.g., ⁴He and ²³⁸U, or ¹⁶O and ⁶⁴Cu) is always 1 : 1' },
    { n:'Mass Defect, Atomic Mass Unit & Binding Energy', f:'Δm = [Z m_p + (A − Z) m_n − M_nuc] ;  BE = Δm c² = Δm(u) × 931.5 MeV', u:'u ;  MeV', s:'1 u = (1/12) mass of ¹²C atom = 1.6605 × 10⁻²⁷ kg ≡ 931.5 MeV/c²; if atomic masses are given, Z electron masses cancel in Δm = [Z m(¹H) + (A−Z)m_n − M_atom]', b:'Stable nuclei in 30 < A < 170 have nearly constant BE/A ≈ 8.0–8.8 MeV, peaking at ⁵⁶Fe (≈ 8.75 MeV/nucleon)' },
    { n:'Q-Value of Nuclear Fission & Fusion', f:'Q = (M_initial − M_final) c² = Σ(BE)_products − Σ(BE)_reactants', u:'MeV', s:'Exothermic (spontaneous energy release) when Q > 0, i.e. products have LESS rest mass and HIGHER binding energy per nucleon than reactants', b:'Notice sign flip: Q = (Mass_reactants − Mass_products)c² = +(BE_products − BE_reactants)' }
  ],
  traps:[
    { t:'In any Bohr orbit, kinetic energy K, potential energy U, and total energy E always satisfy K = −E and U = 2E (so K : U : E = 1 : −2 : −1).', c:'Coulomb centripetal balance mv²/r = kZe²/r² gives K = ½mv² = ½(kZe²/r) = −½U, so E = K + U = ½U = −K.', tag:'Sign Convention' },
    { t:'When an electron jumps from a lower orbit (n = 1) to a higher orbit (n = 2, 3…), its kinetic energy DECREASES, whereas both its electrostatic potential energy U and total energy E INCREASE (become less negative).', c:'Wait — U = −27.2/n² eV and E = −13.6/n² eV carry negative signs! Moving from −13.6 eV to −3.4 eV is an algebraic INCREASE in energy.', tag:'Sign Convention' },
    { t:'Nuclear matter density ρ ≈ 2.3 × 10¹⁷ kg m⁻³ is completely INDEPENDENT of mass number A (so the ratio of nuclear densities of ¹²C, ⁵⁶Fe, and ²³⁸U is 1 : 1 : 1).', c:'Because nuclear radius scales as R = R₀A^(1/3), nuclear volume V = (4/3)πR³ = (4/3)πR₀³A is directly proportional to A, cancelling A in ρ = (A·u)/V.', tag:'Concept Trap' },
    { t:'In a spectral series of hydrogen (with fixed lower level n₁), the SHORTEST wavelength λ_min corresponds to the maximum energy transition (n₂ = ∞, series limit), whereas the LONGEST wavelength λ_max corresponds to the adjacent level (n₂ = n₁ + 1).', c:'Since ΔE = hc/λ, λ is inversely proportional to ΔE; students often confuse minimum λ with n₂ = n₁ + 1.', tag:'Order Inversion' },
    { t:'Both nuclear fission of heavy nuclei (A > 200 like ²³⁵U) AND nuclear fusion of light nuclei (A < 20 like ²H) release energy because in BOTH processes the product nuclei move towards the middle of the BE/A curve and therefore have HIGHER binding energy per nucleon.', c:'The BE/A curve rises steeply for light nuclei, peaks broadly near ⁵⁶Fe (~8.75 MeV), and droops for heavy nuclei due to Coulomb repulsion; moving from either end toward the middle increases BE/A.', tag:'Graph Trap' },
    { t:'Although a single fission event of ²³⁵U releases ~200 MeV compared to ~24–26 MeV in hydrogen fusion, fusion releases several times MORE energy per unit mass (per nucleon or per kg of fuel) than fission.', c:'Per nucleon, ²³⁵U fission gives 200/235 ≈ 0.85 MeV/u, whereas D–T fusion (17.6 MeV over 5 nucleons) gives ~3.5 MeV/u (over 4× more energy per gram!).', tag:'Calculation Trap' },
    { t:'The strong nuclear force is the strongest fundamental force in nature, is short-ranged (~1–3 fm), is charge-independent (F_pp ≈ F_nn ≈ F_np), is spin-dependent, and becomes REPULSIVE at distances less than 0.8 fm.', c:'Saturation of nuclear force (each nucleon interacts only with nearest neighbours) explains why BE/A is constant for medium nuclei, while repulsive hard core (< 0.8 fm) prevents nuclear collapse.', tag:'NCERT Exception' },
    { t:'For a head-on alpha particle collision with a nucleus, the impact parameter b is ZERO and the scattering angle is θ = 180°.', c:'From b = (Ze² cot(θ/2))/(4πε₀K), setting b = 0 gives cot(θ/2) = 0 ⇒ θ/2 = 90° ⇒ θ = 180° (rebound along the incident line).', tag:'Zero-Case' }
  ],
  flows:[
    { t:'Hydrogen Spectral Series Identification & Wavelength Bounds', root:'Identify lower quantum state n₁ of the downward transition n₂ → n₁',
      br:[
        { l:'Lyman Series (n₁ = 1, Ultraviolet)', n:['First line (longest λ, 2 → 1): ΔE = 10.2 eV, λ = 1216 Å','Series limit (shortest λ, ∞ → 1): ΔE = 13.6 eV, λ = 912 Å','Ratio λ_max / λ_min = 4 / 3'] },
        { l:'Balmer Series (n₁ = 2, Visible)', n:['H_α line (longest λ, 3 → 2): ΔE = 1.89 eV, λ = 6563 Å (Red)','Series limit (shortest λ, ∞ → 2): ΔE = 3.4 eV, λ = 3646 Å','Ratio λ_max / λ_min = 9 / 5'] },
        { l:'Paschen (n₁=3), Brackett (n₁=4), Pfund (n₁=5)', n:['All lie in the Infrared (IR) region','Paschen λ_max / λ_min = 16 / 7','Energy gap shrinks rapidly as 1/n₁²'] }
      ]
    },
    { t:'Binding Energy per Nucleon (BE/A) Curve Regions & Nuclear Stability', root:'Check mass number A on the BE/A vs A graph',
      br:[
        { l:'Very light nuclei (A < 20)', n:['BE/A is low (e.g., ²H is 1.1 MeV); sharp peaks at ⁴He, ¹²C, ¹⁶O','Surface nucleons lack neighbours','Undergo NUCLEAR FUSION to reach higher BE/A'] },
        { l:'Intermediate nuclei (30 < A < 170)', n:['Broad flat plateau with BE/A ≈ 8.0 to 8.8 MeV','Maximum stability at ⁵⁶Fe (8.75 MeV/nucleon)','Reflects short-range saturation of nuclear force'] },
        { l:'Heavy nuclei (A > 170, e.g. ²³⁸U)', n:['BE/A drops to ~7.6 MeV at A = 238','Long-range Coulomb repulsion between Z protons builds up','Undergo NUCLEAR FISSION into two medium fragments'] }
      ]
    },
    { t:'Bohr Hydrogen Orbit Scaling Chain (with Principal Quantum Number n for fixed Z)', chain:[
      'Radius of orbit: r_n ∝ n²  (ratio for n = 1, 2, 3 is 1 : 4 : 9)',
      'Speed of electron: v_n ∝ 1/n  (ratio for n = 1, 2, 3 is 1 : 1/2 : 1/3)',
      'Time period of revolution: T_n = 2πr_n/v_n ∝ n³  (and orbital frequency f_n ∝ 1/n³)',
      'Angular momentum L_n = nh/(2π) ∝ n¹  and Total energy E_n = −13.6/n² eV'
    ] }
  ],
  lab:[
    { t:'Geiger–Marsden Alpha-Particle Scattering Setup (Gold Foil)', d:'Uses a thin gold foil (~2.1 × 10⁻⁷ m thick, high Z = 79, malleable), collimated 5.5 MeV α-particles from ²¹⁴Bi, and a rotatable ZnS scintillation screen viewed through a microscope in vacuum.' },
    { t:'Hydrogen Discharge Tube & Line Emission Spectrum', d:'Low-pressure H₂ gas excited by high voltage emits discrete bright lines (Balmer H_α red 656.3 nm, H_β blue-green 486.1 nm, H_γ violet 434.1 nm) against a dark background — proving quantised atomic energy levels.' },
    { t:'Bohr Model Limitations (NCERT Checklist)', d:'Fails for multi-electron atoms (even He with 2 electrons) because it ignores electron–electron repulsion; cannot explain fine structure doublet splitting or relative intensities of spectral lines.' },
    { t:'Proton–Proton Cycle vs Controlled Fission Reactor', d:'Solar fusion runs at T ~ 1.5 × 10⁷ K combining 4 ¹H → ⁴He + 2e⁺ + 2ν + 26.7 MeV; nuclear fission of ²³⁵U + ¹n → ¹⁴¹Ba + ⁹²Kr + 3 ¹n + 200 MeV is triggered by thermal neutrons.' }
  ],
  pairs:[
    { g:'Hydrogen spectral series → lower level n₁ & electromagnetic region', a:'Lyman series (transitions n₂ ≥ 2 → n₁ = 1)', b:'Ultraviolet (UV) region (912 Å to 1216 Å)' },
    { g:'Hydrogen spectral series → lower level n₁ & electromagnetic region', a:'Balmer series (transitions n₂ ≥ 3 → n₁ = 2)', b:'Visible region (3646 Å to 6563 Å)' },
    { g:'Hydrogen spectral series → lower level n₁ & electromagnetic region', a:'Paschen series (transitions n₂ ≥ 4 → n₁ = 3)', b:'Near Infrared (IR) region (8204 Å to 18752 Å)' },
    { g:'Hydrogen spectral series → lower level n₁ & electromagnetic region', a:'Brackett & Pfund series (n₁ = 4 and n₁ = 5)', b:'Mid / Far Infrared (IR) region' },
    { g:'Bohr / Nuclear quantity → exact scaling dependence on n, Z, or A', a:'Radius r_n of nth Bohr orbit of hydrogenic ion', b:'Proportional to n² / Z  (r₁ = 0.529 Å for H)' },
    { g:'Bohr / Nuclear quantity → exact scaling dependence on n, Z, or A', a:'Orbital speed v_n of electron in nth Bohr orbit', b:'Proportional to Z / n  (v₁ = c/137 ≈ 2.19 × 10⁶ m s⁻¹ for H)' },
    { g:'Bohr / Nuclear quantity → exact scaling dependence on n, Z, or A', a:'Nuclear radius R of a nucleus of mass number A', b:'Proportional to A^(1/3)  (R = 1.2 × 10⁻¹⁵ A^(1/3) m)' },
    { g:'Bohr / Nuclear quantity → exact scaling dependence on n, Z, or A', a:'Nuclear mass density ρ of a nucleus of mass number A', b:'Proportional to A⁰ (constant ≈ 2.3 × 10¹⁷ kg m⁻³ for all nuclei)' }
  ],
  orders:[
    { q:'Total energy E_n = −13.6/n² eV of an electron in different stationary orbits of a hydrogen atom (from LOWEST algebraic energy to HIGHEST algebraic energy)', s:['Ground state n = 1 (−13.6 eV)','First excited state n = 2 (−3.40 eV)','Second excited state n = 3 (−1.51 eV)','Third excited state n = 4 (−0.85 eV)','Ionised state n = ∞ (0 eV)'], sep:'<', why:'Because of the minus sign, −13.6 eV < −3.4 eV < −1.51 eV < −0.85 eV < 0 eV.' },
    { q:'Binding energy per nucleon (BE/A) for standard nuclei from the NCERT binding-energy curve (from lowest BE/A to highest BE/A)', s:['Deuteron ²H (~1.1 MeV)','Helium ⁴He (~7.07 MeV)','Uranium ²³⁸U (~7.6 MeV)','Iron ⁵⁶Fe (~8.75 MeV)'], sep:'<', why:'²H has the lowest BE/A (~1.1 MeV), ⁴He is ~7.07 MeV, heavy ²³⁸U is ~7.6 MeV, and ⁵⁶Fe sits at the global peak (~8.75 MeV).' }
  ],
  facts:{
    T:[
      'In the ground state of a hydrogen atom (n = 1), the total energy is −13.6 eV, the kinetic energy is +13.6 eV, and the electrostatic potential energy is −27.2 eV.',
      'To excite a hydrogen atom from its ground state (n = 1) to its first excited state (n = 2), a photon of energy 10.2 eV is required.',
      'The ratio of the longest wavelength to the shortest wavelength in the Lyman series of hydrogen is 4 : 3, and in the Balmer series is 9 : 5.',
      'When an electron in a hydrogenic atom is in the nth quantum state, the maximum number of distinct spectral lines that can be emitted by a gas sample during de-excitation to the ground state is n(n − 1)/2.',
      'The nuclear radius R of a nucleus of mass number A is given by R = R₀A^(1/3), so the ratio of radii of ²⁷Al and ¹²⁵Te nuclei is 3 : 5.',
      'The mass of any stable nucleus is always strictly less than the sum of the masses of its constituent free protons and neutrons, the difference being the mass defect Δm.',
      'The strong nuclear force between two nucleons is virtually identical for proton–proton, neutron–neutron, and proton–neutron pairs (charge independence of nuclear force).',
      '1 atomic mass unit (1 u = 1.6605 × 10⁻²⁷ kg) is equivalent to 931.5 MeV of rest-mass energy.'
    ],
    F:[
      'When an electron in a hydrogen atom jumps from n = 1 to n = 3, its kinetic energy increases by a factor of 9.',
      'The nuclear density of a heavy ²³⁸U nucleus is nearly 60 times greater than the nuclear density of a light ⁴He nucleus.',
      'The Lyman series of the hydrogen spectrum lies in the visible region, whereas the Balmer series lies in the ultraviolet region.',
      'In Rutherford\'s alpha-particle scattering experiment, the majority of alpha particles are rebounding back at θ ≈ 180°.',
      'The orbital angular momentum of an electron in the nth Bohr orbit of He⁺ (Z = 2) is twice that of an electron in the nth Bohr orbit of H (Z = 1).',
      'In a nuclear fusion reaction, the combined rest mass of the product nuclei is greater than the combined rest mass of the reacting light nuclei.',
      'The shortest wavelength in the Balmer series corresponds to the transition from n = 3 to n = 2.',
      'Nuclear forces are long-range forces that obey the inverse-square law (1/r²) like electrostatic forces.'
    ]
  },
  mcq:[
    { q:'In a hydrogen atom, the total energy of the electron in the ground state (n = 1) is −13.6 eV. What are its kinetic energy (K) and electrostatic potential energy (U) in the first excited state (n = 2)?',
      o:['K = +3.4 eV and U = −6.8 eV','K = +3.4 eV and U = −3.4 eV','K = +6.8 eV and U = −13.6 eV','K = −3.4 eV and U = +6.8 eV'], a:0, tag:'Sign Convention',
      sol:['First excited state corresponds to n = 2 (NOT n = 1!).','Total energy E₂ = −13.6 / 2² = −3.4 eV.','By virial relations: K₂ = −E₂ = +3.4 eV, and U₂ = 2 E₂ = 2(−3.4 eV) = −6.8 eV.'] },
    { q:'The ratio of the longest wavelength to the shortest wavelength in the Balmer series of the hydrogen spectrum is:',
      o:['9 : 5','4 : 3','16 : 7','36 : 5'], a:0, tag:'Order Inversion',
      sol:['For Balmer series, n₁ = 2.','Longest wavelength (λ_max) is n₂ = 3 → n₁ = 2: 1/λ_max = R_H (1/2² − 1/3²) = (5/36) R_H.','Shortest wavelength (λ_min, series limit) is n₂ = ∞ → n₁ = 2: 1/λ_min = R_H (1/2² − 0) = (1/4) R_H = (9/36) R_H.','Therefore λ_max / λ_min = (1/4) / (5/36) = 9 / 5.'] },
    { q:'Two nuclei have mass numbers A₁ and A₂ in the ratio 27 : 125. What are the ratios of their nuclear radii (R₁ : R₂) and their nuclear mass densities (ρ₁ : ρ₂)?',
      o:['3 : 5 and 1 : 1','3 : 5 and 27 : 125','9 : 25 and 1 : 1','27 : 125 and 3 : 5'], a:0, tag:'Concept Trap',
      sol:['Nuclear radius R = R₀ A^(1/3) ⇒ R₁ / R₂ = (27 / 125)^(1/3) = 3 / 5.','Nuclear density ρ = Mass / Volume ∝ A / R³ ∝ A / A = 1, which is independent of A, so ρ₁ : ρ₂ = 1 : 1.'] },
    { q:'A gas of hydrogen atoms in the ground state (n = 1) absorbs monochromatic radiation that excites the atoms to the 4th quantum state (n = 4). How many distinct spectral lines are emitted when the atoms de-excite back to the ground state?',
      o:['6','4','3','10'], a:0, tag:'Calculation Trap',
      sol:['Number of distinct spectral lines from level n to ground state is N = n(n − 1) / 2.','For n = 4: N = 4 × (4 − 1) / 2 = 6 lines (3 in Lyman, 2 in Balmer, 1 in Paschen).'] },
    { q:'If the mass defect of a helium nucleus (⁴₂He) is Δm = 0.0303 u, its total binding energy and binding energy per nucleon are approximately (take 1 u = 931.5 MeV/c²):',
      o:['28.2 MeV and 7.05 MeV','28.2 MeV and 14.1 MeV','7.05 MeV and 28.2 MeV','56.4 MeV and 14.1 MeV'], a:0, tag:'Calculation Trap',
      sol:['Total binding energy BE = Δm × 931.5 MeV = 0.0303 × 931.5 ≈ 28.22 MeV.','Since ⁴₂He has A = 4 nucleons, binding energy per nucleon = BE / A = 28.22 / 4 ≈ 7.05 MeV.'] },
    { q:'According to Bohr\'s theory of the hydrogen atom, the ratio of the orbital speeds of the electron in the 1st, 2nd, and 3rd stationary orbits (v₁ : v₂ : v₃) is:',
      o:['6 : 3 : 2','1 : 2 : 3','1 : 4 : 9','9 : 4 : 1'], a:0, tag:'Calculation Trap',
      sol:['In Bohr\'s model, orbital speed v_n ∝ Z / n.','For n = 1, 2, 3: v₁ : v₂ : v₃ = (1/1) : (1/2) : (1/3) = 6 : 3 : 2.'] }
  ],
  gens:[
    function(R){
      var c1 = R.pick([1, 2, 3, 4]);
      var c2 = R.pick([2, 3, 4, 5, 6]);
      if (c1 === c2) c2 = c1 + 1;
      var A1 = c1 * c1 * c1, A2 = c2 * c2 * c2;
      var ratio = c1 / c2;
      return {
        q:'Two atomic nuclei have mass numbers in the ratio A₁ : A₂ = ' + A1 + ' : ' + A2 + '. The ratio of their nuclear radii (R₁ / R₂) is:',
        ans:ratio, d:[A1 / A2, (c1 * c1) / (c2 * c2), 1], u:'',
        tag:'Calculation Trap',
        sol:['Nuclear radius scales as R = R₀ A^(1/3)', 'R₁ / R₂ = (' + A1 + ' / ' + A2 + ')^(1/3) = ' + c1 + ' / ' + c2 + ' = ' + R.f(ratio)]
      };
    },
    function(R){
      var n = R.pick([3, 4, 5, 6, 7, 8]);
      var lines = (n * (n - 1)) / 2;
      return {
        q:'Electrons in a sample of hydrogen gas are excited to the n = ' + n + ' energy state. The maximum number of distinct spectral lines emitted as the atoms return to the ground state (n = 1) is:',
        ans:lines, d:[n - 1, n * (n + 1) / 2, n * n], u:'',
        tag:'Calculation Trap',
        sol:['Number of distinct emission lines from state n to n = 1 is N = n(n − 1) / 2', 'N = ' + n + ' × (' + (n - 1) + ') / 2 = ' + lines]
      };
    },
    function(R){
      var Z = R.pick([1, 2, 3]);
      var sym = Z === 1 ? 'H (Z = 1)' : (Z === 2 ? 'He⁺ (Z = 2)' : 'Li²⁺ (Z = 3)');
      var n = R.pick([1, 2, 3, 4]);
      var En = -13.6 * (Z * Z) / (n * n);
      var Kn = -En;
      var askK = R.pick([true, false]);
      if (askK) {
        return {
          q:'According to the Bohr model, the kinetic energy K of the electron in the n = ' + n + ' orbit of a ' + sym + ' species is:',
          ans:Kn, d:[En, 2 * En, 13.6 * Z / n], u:'eV',
          tag:'Sign Convention',
          sol:['Total energy E_n = −13.6 Z² / n² = −13.6 × ' + (Z * Z) + ' / ' + (n * n) + ' = ' + R.f(En) + ' eV', 'Kinetic energy K_n = −E_n = +' + R.f(Kn) + ' eV']
        };
      }
      var Un = 2 * En;
      return {
        q:'According to the Bohr model, the electrostatic potential energy U of the electron in the n = ' + n + ' orbit of a ' + sym + ' species (taking U = 0 at infinity) is:',
        ans:Un, d:[En, Kn, -Kn / 2], u:'eV',
        tag:'Sign Convention',
        sol:['Total energy E_n = −13.6 Z² / n² = ' + R.f(En) + ' eV', 'Potential energy U_n = 2 E_n = 2 × (' + R.f(En) + ') = ' + R.f(Un) + ' eV']
      };
    },
    function(R){
      var n = R.pick([2, 3, 4, 5]);
      var Z = R.pick([1, 2, 3]);
      var sym = Z === 1 ? 'hydrogen atom (Z = 1)' : (Z === 2 ? 'He⁺ ion (Z = 2)' : 'Li²⁺ ion (Z = 3)');
      var rn_a0 = (n * n) / Z;
      return {
        q:'If a₀ is the radius of the first Bohr orbit of hydrogen (0.529 Å), then the radius of the n = ' + n + ' Bohr orbit of a ' + sym + ' in units of a₀ is:',
        ans:rn_a0, d:[n / Z, (n * n) * Z, Z / (n * n)], u:'a₀',
        tag:'Calculation Trap',
        sol:['Bohr orbit radius r_n = (n² / Z) a₀', 'For n = ' + n + ' and Z = ' + Z + ': r = (' + (n * n) + ' / ' + Z + ') a₀ = ' + R.f(rn_a0) + ' a₀']
      };
    },
    function(R){
      var dm = R.pick([0.02, 0.03, 0.04, 0.05, 0.08, 0.10, 0.12, 0.15, 0.20]);
      var BE = dm * 931.5;
      return {
        q:'If the mass defect of a certain atomic nucleus is Δm = ' + dm + ' u, its total nuclear binding energy (in MeV) is (take 1 u = 931.5 MeV/c²):',
        ans:BE, d:[BE / 2, dm * 93.15, 931.5 / dm], u:'MeV',
        tag:'Calculation Trap',
        sol:['Binding energy BE = Δm × 931.5 MeV', 'BE = ' + dm + ' × 931.5 = ' + R.f(BE) + ' MeV']
      };
    },
    function(R){
      var n1 = R.pick([1, 2, 3]);
      var sName = n1 === 1 ? 'Lyman (n₁ = 1)' : (n1 === 2 ? 'Balmer (n₁ = 2)' : 'Paschen (n₁ = 3)');
      var n2 = n1 + 1;
      var ratio = (n2 * n2) / (n2 * n2 - n1 * n1);
      return {
        q:'For the ' + sName + ' series of the hydrogen spectrum, the ratio of the longest wavelength (λ_max) to the shortest wavelength (λ_min, series limit) is:',
        ans:ratio, d:[1 / ratio, (n2 * n2) / (n1 * n1), n2 / n1], u:'',
        tag:'Order Inversion',
        sol:['Shortest wavelength (n₂ = ∞): 1/λ_min = R_H / n₁² = R_H / ' + (n1 * n1), 'Longest wavelength (n₂ = ' + n2 + '): 1/λ_max = R_H (1/' + (n1 * n1) + ' − 1/' + (n2 * n2) + ')', 'λ_max / λ_min = ' + (n2 * n2) + ' / ' + (n2 * n2 - n1 * n1) + ' = ' + R.f(ratio)]
      };
    }
  ]
});

/* ==========================================================================
   UNIT P19: ELECTRONIC DEVICES
   ========================================================================== */
NEET.reg({
  id:'P19',
  subj:'Physics',
  type:'num',
  name:'Electronic Devices',
  syl:'Semiconductors; semiconductor diode: I-V characteristics in forward and reverse bias; diode as a rectifier; I-V characteristics of LED, photodiode, solar cell, and Zener diode; Zener diode as a voltage regulator. Logic gates (OR, AND, NOT, NAND, and NOR).',
  kw:['semiconductor', 'p-n junction', 'rectifier', 'zener diode', 'photodiode', 'led', 'solar cell', 'logic gates', 'nand nor', 'truth table'],

  formulas:[
    { n:'Mass Action Law for Semiconductors', f:'n_e · n_h = n_i²', u:'m⁻⁶', s:'n_e is electron concentration; n_h is hole concentration; n_i is intrinsic concentration', b:'Fails under heavy degenerate doping or strong optical non-equilibrium excitation.' },
    { n:'Electrical Conductivity of Semiconductor', f:'σ = e (n_e μ_e + n_h μ_h)', u:'S m⁻¹ (Ω⁻¹ m⁻¹)', s:'μ_e and μ_h are electron and hole mobilities; μ_e > μ_h in typical semiconductors', b:'Valid for non-degenerate regime where Ohm law holds; mobility saturates at high electric fields.' },
    { n:'Dynamic Resistance of p-n Diode', f:'r_d = ΔV / ΔI', u:'Ω', s:'Reciprocal of the slope of the forward I-V characteristic curve', b:'Cannot be computed using static V/I; dynamic resistance decreases rapidly once forward voltage exceeds knee.' },
    { n:'Half-Wave Rectifier Efficiency & Ripple', f:'η_max = 40.6%,  f_ripple = f_in,  V_dc = V_0 / π', u:'— / Hz / V', s:'V_0 is peak AC input voltage; diode conducts only during one half-cycle', b:'Assumes ideal diode with zero forward resistance; real efficiency is lower due to diode forward drop.' },
    { n:'Full-Wave Rectifier Efficiency & Ripple', f:'η_max = 81.2%,  f_ripple = 2 f_in,  V_dc = 2 V_0 / π', u:'— / Hz / V', s:'Both half-cycles converted to unidirectional DC; uses center-tapped transformer or bridge', b:'Requires peak inverse voltage (PIV) rating of 2V_0 for center-tapped and V_0 for bridge rectifier.' },
    { n:'Zener Diode Voltage Regulator Current Relation', f:'I_s = (V_in − V_Z) / R_s = I_Z + I_L', u:'A', s:'V_Z is fixed Zener breakdown voltage; I_s is series current; I_L is load current', b:'Regulation fails if V_in drops below V_Z or if load current I_L becomes so large that I_Z drops to zero.' },
    { n:'LED Emission Wavelength & Bandgap', f:'E_g = h ν = h c / λ  ⇒  λ (nm) ≈ 1240 / E_g (eV)', u:'eV / nm', s:'Direct bandgap semiconductor required (e.g. GaAs, GaP); E_g ≥ 1.8 eV for visible light', b:'Indirect bandgap semiconductors (e.g. Si, Ge) cannot be used because energy is lost as lattice heat.' },
    { n:'De Morgan Laws for Logic Gates', f:'(A + B)′ = A′ · B′   and   (A · B)′ = A′ + B′', u:'Boolean', s:'NOR gate equals bubbled AND gate; NAND gate equals bubbled OR gate', b:'Applies strictly to binary two-state Boolean algebra.' }
  ],

  traps:[
    { t:'A Zener diode is operated in REVERSE bias in the breakdown region; in forward bias, it acts just like a standard ordinary diode.', c:'In the reverse breakdown region, Zener voltage V_Z remains virtually constant over a wide range of reverse currents, providing voltage regulation.', tag:'NCERT Exception' },
    { t:'Photodiodes are operated in REVERSE bias rather than forward bias to detect optical radiation.', c:'Under reverse bias, fractional change in minority carrier concentration (Δn_minority / n_minority) caused by illumination is vastly larger and easier to measure than in majority carriers.', tag:'NCERT Exception' },
    { t:'A solar cell generates electrical power with ZERO external bias applied (its I-V curve lies in the fourth quadrant).', c:'Light generates electron-hole pairs which are separated by the internal junction built-in electric field, creating an open-circuit voltage V_oc and short-circuit current I_sc.', tag:'Zero-Case' },
    { t:'For a full-wave rectifier supplied with 50 Hz AC mains, the output ripple frequency is 100 Hz (2f), whereas for a half-wave rectifier it is 50 Hz.', c:'A full-wave rectifier produces two positive current pulses for every complete single input AC cycle.', tag:'Calculation Trap' },
    { t:'The electrical conductivity of semiconductors INCREASES with temperature (negative temperature coefficient of resistance α < 0), unlike metals.', c:'Thermal excitation rapidly breaks covalent bonds, increasing carrier concentration n_e and n_h exponentially according to exp(−E_g / 2 k_B T), overwhelming lattice scattering.', tag:'Concept Trap' },
    { t:'Silicon diodes have a higher knee (cut-in) voltage (~0.7 V) than Germanium diodes (~0.3 V).', c:'Silicon has a wider bandgap (E_g ≈ 1.1 eV) compared to Germanium (E_g ≈ 0.7 eV), creating a higher built-in potential barrier across the junction.', tag:'NCERT Exception' },
    { t:'NAND and NOR gates are termed "Universal Gates" because any Boolean logic function can be constructed using exclusively either of them.', c:'A single NAND gate with tied inputs acts as NOT; two NANDs form AND; three NANDs form OR.', tag:'Concept Trap' },
    { t:'In an n-type semiconductor, although free electrons outnumber holes (n_e ≫ n_h), the overall crystal remains strictly ELECTRICALLY NEUTRAL.', c:'Every mobile conduction electron donated by a pentavalent impurity atom is balanced by a stationary positive donor core (e.g. P⁺) fixed in the lattice.', tag:'Concept Trap' }
  ],

  flows:[
    { t:'Full-Wave Rectifier & Filter Stages', chain:['AC Mains Input (50 Hz Sine)','Center-Tapped Diode Bridge (Conducts alternate half-cycles)','Pulsating DC Output (100 Hz Ripple)','Shunt Capacitor Filter (Smooths voltage)','Regulated Pure DC Output'] },
    { t:'Optoelectronic Device Operating Regimes', root:'Check External Bias Mode & Light Coupling',
      br:[
        { l:'LED (Light Emitting Diode)', n:['Forward Bias applied','Majority carriers injected across junction','Recombination emits photons','E_g ≥ 1.8 eV for visible light'] },
        { l:'Photodiode (Light Sensor)', n:['Reverse Bias applied','Incident photon creates electron-hole pair','Fractional minority carrier change measured','Operated in dark until illuminated'] },
        { l:'Solar Cell (Energy Harvester)', n:['Zero External Bias','Built-in field sweeps photo-carriers','Generates photovoltage V_oc','Operates in 4th quadrant of I-V'] }
      ]
    },
    { t:'Universal NAND Gate Logic Synthesis', root:'NAND Gate Boolean Expression: Y = (A · B)′',
      br:[
        { l:'NOT Gate via NAND', n:['Inputs tied together: A = B','Y = (A · A)′ = A′','Requires 1 NAND gate'] },
        { l:'AND Gate via NAND', n:['NAND output inverted by a second NAND: Y = ((A · B)′)′','Y = A · B','Requires 2 NAND gates'] },
        { l:'OR Gate via NAND', n:['Inputs pre-inverted via NAND NOTs: A′ and B′','Fed into third NAND: Y = (A′ · B′)′ = A + B','Requires 3 NAND gates'] }
      ]
    }
  ],

  lab:[
    { t:'Forward & Reverse I-V Curves of p-n Junction Diode', d:'Forward bias: knee voltage ~0.7 V for Si, current in mA measured with milliammeter. Reverse bias: tiny reverse saturation current in μA measured with microammeter until breakdown.' },
    { t:'Zener Diode Characteristics & Voltage Regulation', d:'Reverse bias I-V shows sharp knee breakdown at V_Z. Connect in parallel with load: as input voltage or load changes, Zener current adjusts so that V_load remains clamped at V_Z.' },
    { t:'Identification of Electronic Components with Multimeter', d:'Diode: conducts in only one bias polarity. LED: conducts in one polarity while emitting faint glow. Resistor: shows same resistance in both probe polarities. Capacitor: shows momentary pulse deflection then open-circuit (infinite resistance).' },
    { t:'Logic Gate IC Verification (7400 NAND, 7408 AND, 7432 OR)', d:'Apply 0V (logic 0) or +5V (logic 1) to inputs via dip switches; observe LED on output (ON = 1, OFF = 0) to verify truth tables.' }
  ],

  pairs:[
    { g:'Semiconductor Device → Operating Bias Condition', a:'Light Emitting Diode (LED)', b:'Forward bias (emits photons upon electron-hole recombination)' },
    { g:'Semiconductor Device → Operating Bias Condition', a:'Photodiode (Light Detector)', b:'Reverse bias (measures large fractional minority carrier increase)' },
    { g:'Semiconductor Device → Operating Bias Condition', a:'Zener Diode (Voltage Regulator)', b:'Reverse bias operated in the breakdown region' },
    { g:'Semiconductor Device → Operating Bias Condition', a:'Solar Cell (Photovoltaic Generator)', b:'Zero external bias (operates in fourth quadrant of I-V plot)' },

    { g:'Logic Gate Type → Boolean Output for Inputs A = 1, B = 0', a:'AND Gate (Y = A · B)', b:'Output Y = 0' },
    { g:'Logic Gate Type → Boolean Output for Inputs A = 1, B = 0', a:'OR Gate (Y = A + B)', b:'Output Y = 1' },
    { g:'Logic Gate Type → Boolean Output for Inputs A = 1, B = 0', a:'NAND Gate (Y = (A · B)′)', b:'Output Y = 1 (inverted AND)' },
    { g:'Logic Gate Type → Boolean Output for Inputs A = 1, B = 0', a:'NOR Gate (Y = (A + B)′)', b:'Output Y = 0 (inverted OR)' }
  ],

  orders:[
    { q:'Arrange the knee (cut-in) forward voltages of the diodes in ascending order', s:['Germanium Diode (~0.3 V)', 'Silicon Diode (~0.7 V)', 'Gallium Arsenide Infrared LED (~1.4 V)', 'Red LED (~1.8 V)', 'Blue LED (~3.0 V)'], sep:'<' },
    { q:'Arrange the minimum number of NAND gates needed to build the basic logic gates in ascending order', s:['NOT Gate (1 NAND)', 'AND Gate (2 NANDs)', 'OR Gate (3 NANDs)', 'NOR Gate (4 NANDs)'], sep:'<' },
    { q:'Arrange materials in increasing order of electrical resistivity at room temperature', s:['Copper Conductor (~10⁻⁸ Ω m)', 'Pure Silicon Semiconductor (~10³ Ω m)', 'Glass Insulator (~10¹² Ω m)'], sep:'<' }
  ],

  facts:{
    T:[
      'In an intrinsic semiconductor, the concentrations of electrons and holes are equal: n_e = n_h = n_i.',
      'A Zener diode regulates voltage because its terminal voltage remains constant over a wide range of reverse currents once breakdown is reached.',
      'For a full-wave rectifier operated on 50 Hz AC mains, the ripple frequency in the output pulsating DC is 100 Hz.',
      'NAND and NOR gates are universal gates capable of synthesizing any arbitrary logic circuit.',
      'An LED requires a direct bandgap semiconductor so that electron-hole recombination releases energy primarily as photons rather than lattice phonons.',
      'The depletion region of an unbiased p-n junction diode consists of immobile positive donor and negative acceptor ions devoid of free charge carriers.',
      'In reverse bias, the tiny reverse current is due to the drift of minority charge carriers across the junction.',
      'The electrical conductivity of pure semiconductors increases exponentially with increasing temperature.'
    ],
    F:[
      'A Zener diode is operated in forward bias to regulate voltage across a load resistor.',
      'In an n-type semiconductor, the crystal possesses a net negative electric charge because electrons are majority carriers.',
      'A photodiode is typically operated under forward bias to maximize its sensitivity to incident light.',
      'A half-wave rectifier supplied with 50 Hz AC produces output pulsating DC with a ripple frequency of 100 Hz.',
      'Silicon diodes conduct significant forward current as soon as the applied forward voltage exceeds 0.1 V.',
      'An OR gate gives an output of 0 when both inputs are equal to 1.',
      'Germanium has a wider bandgap and higher knee voltage than Silicon.',
      'Solar cells require an external reverse DC bias power supply to produce electrical energy.'
    ]
  },

  mcq:[
    {
      q:'In a Zener diode voltage regulator circuit, the Zener breakdown voltage is V_Z = 10 V. The unregulated input DC voltage is V_in = 16 V and the series resistor is R_s = 200 Ω. If a load resistor R_L = 1000 Ω is connected across the Zener diode, the current through the Zener diode (I_Z) is:',
      o:['20 mA', '30 mA', '10 mA', '40 mA'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Regulated output voltage across load V_L = V_Z = 10 V.',
        'Load current I_L = V_L / R_L = 10 V / 1000 Ω = 0.010 A = 10 mA.',
        'Total series current I_s = (V_in − V_Z) / R_s = (16 − 10) / 200 = 6 / 200 = 0.030 A = 30 mA.',
        'Zener current I_Z = I_s − I_L = 30 mA − 10 mA = 20 mA.'
      ]
    },
    {
      q:'The ripple frequency of a full-wave rectifier fed by a 60 Hz AC power source is:',
      o:['120 Hz', '60 Hz', '30 Hz', '240 Hz'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'A full-wave rectifier conducts during both half-cycles of the AC input.',
        'Therefore, ripple frequency f_ripple = 2 × f_in = 2 × 60 Hz = 120 Hz.'
      ]
    },
    {
      q:'An LED is constructed from a semiconductor with a bandgap energy of E_g = 2.0 eV. The wavelength of the light emitted by this LED is approximately (take h c = 1240 eV nm):',
      o:['620 nm (Orange-Red)', '480 nm (Blue)', '720 nm (Infrared)', '540 nm (Green)'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Wavelength λ = h c / E_g = 1240 eV nm / 2.0 eV = 620 nm.',
        '620 nm falls in the orange-red region of the visible electromagnetic spectrum.'
      ]
    },
    {
      q:'Which of the following logic gate combinations correctly represents a NOR gate using only universal NAND gates?',
      o:['4 NAND gates', '2 NAND gates', '3 NAND gates', '5 NAND gates'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'To make OR from NAND: requires 3 NANDs ((A′ · B′)′ = A + B).',
        'To make NOR, invert the OR output using a 4th NAND gate: ((A + B)′).',
        'Total NAND gates required = 4.'
      ]
    },
    {
      q:'In an intrinsic semiconductor, the energy band gap is E_g = 1.1 eV. What is the maximum wavelength of electromagnetic radiation capable of creating an electron-hole pair in this semiconductor?',
      o:['1127 nm', '620 nm', '850 nm', '1450 nm'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Maximum wavelength corresponds to minimum bandgap photon energy: λ_max = h c / E_g.',
        'λ_max = 1240 / 1.1 ≈ 1127 nm (in the near-infrared region).'
      ]
    },
    {
      q:'A p-n junction diode has dynamic resistance r_d = 20 Ω. If the forward voltage across it increases by 0.1 V, the increase in forward current will be:',
      o:['5 mA', '2 mA', '20 mA', '10 mA'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Dynamic resistance r_d = ΔV / ΔI  ⇒  ΔI = ΔV / r_d.',
        'ΔI = 0.1 V / 20 Ω = 0.005 A = 5 mA.'
      ]
    }
  ],

  gens:[
    function(R){
      var vIn = R.pick([15, 18, 24]);
      var vZ = R.pick([6, 9, 12]);
      if (vZ >= vIn) vZ = 6;
      var rS = R.pick([100, 200, 300]);
      var rL = R.pick([600, 1000, 1200]);
      var iS = (vIn - vZ) / rS;
      var iL = vZ / rL;
      var iZ = iS - iL;
      var d1 = iS;
      var d2 = iL;
      var d3 = (vIn - vZ) / rL;
      return {
        q:'In a Zener regulator circuit, V_in = ' + vIn + ' V, V_Z = ' + vZ + ' V, series resistance R_s = ' + rS + ' Ω, and load resistance R_L = ' + rL + ' Ω. Calculate the current flowing through the Zener diode I_Z:',
        ans:iZ * 1000, d:[d1 * 1000, d2 * 1000, d3 * 1000], u:'mA',
        tag:'Calculation Trap',
        sol:[
          'Output voltage across load V_L = V_Z = ' + vZ + ' V.',
          'Load current I_L = V_L / R_L = ' + vZ + ' / ' + rL + ' = ' + R.f(iL * 1000) + ' mA.',
          'Total input current I_s = (V_in − V_Z) / R_s = (' + vIn + ' − ' + vZ + ') / ' + rS + ' = ' + R.f(iS * 1000) + ' mA.',
          'Zener current I_Z = I_s − I_L = ' + R.f(iZ * 1000) + ' mA.'
        ]
      };
    },
    function(R){
      var fIn = R.pick([50, 60, 100]);
      var fFull = 2 * fIn;
      var fHalf = fIn;
      var d1 = fIn / 2;
      var d2 = fIn * 4;
      var d3 = fIn;
      return {
        q:'An AC supply of frequency ' + fIn + ' Hz is applied to a bridge full-wave rectifier. What is the fundamental ripple frequency of the output voltage?',
        ans:fFull, d:[d1, d2, d3], u:'Hz',
        tag:'Concept Trap',
        sol:[
          'For a full-wave rectifier, both positive and negative half-cycles are converted to positive output pulses.',
          'Output ripple frequency f_ripple = 2 × f_in = 2 × ' + fIn + ' = ' + fFull + ' Hz.'
        ]
      };
    },
    function(R){
      var eg = R.pick([1.8, 2.0, 2.4, 2.8]);
      var lambda = 1240 / eg;
      var d1 = 1240 * eg;
      var d2 = lambda / 2;
      var d3 = lambda * 1.5;
      return {
        q:'An LED is fabricated from a semiconductor with band gap E_g = ' + eg + ' eV. What is the approximate wavelength of the emitted light (take h c = 1240 eV nm)?',
        ans:lambda, d:[d1, d2, d3], u:'nm',
        tag:'Calculation Trap',
        sol:[
          'λ = h c / E_g = 1240 / ' + eg + ' = ' + R.f(lambda) + ' nm.'
        ]
      };
    },
    function(R){
      var ni = 1.5e16;
      var nd = R.pick([1e22, 2e22, 5e22]);
      var p = (ni * ni) / nd;
      var d1 = ni;
      var d2 = (ni * ni) / (nd * 10);
      var d3 = nd;
      return {
        q:'Silicon at 300 K has intrinsic carrier concentration n_i = 1.5 × 10¹⁶ m⁻³. If it is doped with pentavalent donors such that electron density n_e ≈ N_D = ' + R.f(nd) + ' m⁻³, what is the resulting hole density n_h?',
        ans:p, d:[d1, d2, d3], u:'m⁻³',
        tag:'Calculation Trap',
        sol:[
          'According to mass-action law: n_e · n_h = n_i².',
          'n_h = n_i² / n_e = (1.5 × 10¹⁶)² / ' + R.f(nd) + ' = ' + R.f(p) + ' m⁻³.'
        ]
      };
    },
    function(R){
      var dv = R.pick([0.05, 0.1, 0.2]);
      var di_ma = R.pick([2, 5, 10]);
      var di_a = di_ma * 0.001;
      var rd = dv / di_a;
      var d1 = dv * di_ma;
      var d2 = rd * 1000;
      var d3 = rd / 10;
      return {
        q:'When the forward voltage across a semiconductor diode is increased by ' + dv + ' V, the forward current increases by ' + di_ma + ' mA. What is the dynamic resistance of the diode?',
        ans:rd, d:[d1, d2, d3], u:'Ω',
        tag:'Calculation Trap',
        sol:[
          'Dynamic resistance r_d = ΔV / ΔI.',
          'ΔV = ' + dv + ' V, ΔI = ' + di_ma + ' mA = ' + di_a + ' A.',
          'r_d = ' + dv + ' / ' + di_a + ' = ' + R.f(rd) + ' Ω.'
        ]
      };
    },
    function(R){
      var vRms = R.pick([10, 12, 15, 20]);
      var vPeak = vRms * Math.SQRT2;
      var vDcHalf = vPeak / Math.PI;
      var vDcFull = (2 * vPeak) / Math.PI;
      var d1 = vDcHalf;
      var d2 = vPeak;
      var d3 = vRms;
      return {
        q:'A transformer secondary delivers an AC voltage of RMS value ' + vRms + ' V to a full-wave rectifier circuit. Assuming ideal diodes with zero forward drop, what is the DC average output voltage V_dc?',
        ans:vDcFull, d:[d1, d2, d3], u:'V',
        tag:'Calculation Trap',
        sol:[
          'Peak voltage V_0 = √2 × V_rms = √2 × ' + vRms + ' = ' + R.f(vPeak) + ' V.',
          'For a full-wave rectifier, average DC output voltage is V_dc = 2 V_0 / π.',
          'V_dc = 2 × ' + R.f(vPeak) + ' / 3.1416 = ' + R.f(vDcFull) + ' V.'
        ]
      };
    }
  ]
});

/* ==========================================================================
   UNIT P20: EXPERIMENTAL SKILLS
   ========================================================================== */
NEET.reg({
  id:'P20',
  subj:'Physics',
  type:'num',
  name:'Experimental Skills',
  syl:'Familiarity with basic approach and observations of 18 official NMC experiments: Vernier calipers (internal/external diameter, depth); Screw gauge (thickness/diameter of wire); Simple pendulum dissipation of energy; Metre scale mass by principle of moments; Young modulus by metallic wire; Surface tension by capillary rise; Viscosity by terminal velocity; Speed of sound by resonance tube; Specific heat by mixtures; Metre bridge resistivity; Ohm law resistance; Half-deflection galvanometer resistance & figure of merit; Parallax method focal length of convex/concave mirror & convex lens; Prism angle of deviation curve; Refractive index by travelling microscope; Diode and Zener characteristic curves; Multimeter component identification.',
  kw:['experimental skills', 'vernier calipers', 'screw gauge', 'resonance tube', 'metre bridge', 'half deflection', 'parallax', 'travelling microscope', 'least count', 'zero error'],

  formulas:[
    { n:'Vernier Calipers Reading & Least Count', f:'LC = 1 MSD − 1 VSD;  Reading = MSR + (VSR × LC) − Zero Error', u:'mm', s:'If 10 VSD = 9 MSD and 1 MSD = 1 mm, LC = 0.1 mm = 0.01 cm', b:'Fails if positive/negative zero error sign is not subtracted algebraically.' },
    { n:'Screw Gauge Reading & Least Count', f:'LC = Pitch / (Total Circular Divisions);  Reading = PSR + (CSR × LC) − Zero Error', u:'mm', s:'Zero error positive if circular zero is below reference line; negative if above', b:'Backlash error occurs when direction of rotation is reversed during measurement.' },
    { n:'Principle of Moments for Mass of Metre Scale', f:'m_scale (d_c) = M_known (d_m)', u:'g or kg', s:'Scale pivoted away from 50 cm mark; balance achieved by adjusting known mass M', b:'Assumes uniform mass distribution where center of gravity lies exactly at 50.0 cm.' },
    { n:'Young Modulus by Metallic Wire (Searle Apparatus)', f:'Y = (M g L) / (π r² ΔL)', u:'N m⁻² (Pa)', s:'Reference wire compensates for thermal expansion; micrometer measures extension ΔL', b:'Valid only within proportional elastic limit where Hooke law applies.' },
    { n:'Surface Tension by Capillary Rise Method', f:'T = (r h ρ g) / (2 cos θ)', u:'N m⁻¹', s:'For pure water in clean glass, contact angle θ ≈ 0° so cos θ = 1; T = ½ r h ρ g', b:'Meniscus correction: add r/3 to capillary rise height h for hemispherical meniscus volume.' },
    { n:'Terminal Velocity & Viscosity (Stokes Law)', f:'η = 2 r² (ρ_sphere − σ_liquid) g / (9 v_t)', u:'Pa · s (N s m⁻²)', s:'v_t is steady terminal velocity; measured between two fiducial marks far below top', b:'Valid only for laminar low Reynolds number flow (Re < 1) in a wide cylindrical tube.' },
    { n:'Resonance Tube Speed of Sound & End Correction', f:'v = 2 f (l₂ − l₁);   e = (l₂ − 3 l₁) / 2 ≈ 0.3 d', u:'m s⁻¹ / cm', s:'l₁ is first resonance, l₂ is second resonance; λ = 2(l₂ − l₁); d is internal tube diameter', b:'Fails if air temperature inside tube is not measured and accounted for.' },
    { n:'Galvanometer Resistance & Figure of Merit (Half Deflection)', f:'G = (R · S) / (R − S);   k = E / ((R + G) θ)', u:'Ω / A div⁻¹', s:'S is shunt resistance that halves deflection from θ to θ/2; R is high series resistance', b:'Valid only when R ≫ G so that total circuit resistance is approximately R.' },
    { n:'Prism Angle of Minimum Deviation & Refractive Index', f:'μ = sin((A + δ_m) / 2) / sin(A / 2)', u:'Dimensionless', s:'At minimum deviation: angle of incidence i equals angle of emergence e (r₁ = r₂ = A/2)', b:'Fails for grazing incidence or angles where total internal reflection occurs inside prism.' },
    { n:'Refractive Index of Glass Slab by Travelling Microscope', f:'μ = (Real Depth) / (Apparent Depth) = (R₃ − R₁) / (R₃ − R₂)', u:'Dimensionless', s:'R₁ = bottom ink dot reading; R₂ = dot seen through slab; R₃ = lycopodium powder on top surface', b:'Microscope focus must always be moved in one direction only to prevent backlash error.' }
  ],

  traps:[
    { t:'In a screw gauge, if the circular zero mark lies ABOVE the reference line when jaws are closed, the zero error is NEGATIVE, and its magnitude must be ADDED to the observed reading.', c:'A negative zero error means the instrument reads less than actual; True Reading = Observed − (−Zero Error) = Observed + |Zero Error|.', tag:'Sign Convention' },
    { t:'In a resonance tube experiment, the speed of sound is determined from v = 2f(l₂ − l₁), which is completely INDEPENDENT of the end correction e.', c:'l₁ + e = λ/4 and l₂ + e = 3λ/4; subtracting yields l₂ − l₁ = λ/2, which cleanly eliminates the unknown end correction e.', tag:'Calculation Trap' },
    { t:'In the half-deflection method for galvanometer resistance G = RS/(R − S), if the high series resistance R is not much larger than G (R ≯ 100 G), the formula fails significantly.', c:'The derivation assumes the main circuit current remains constant when shunt S is connected, which requires R ≫ G.', tag:'Boundary Failure' },
    { t:'In a metre bridge, the resistance of the balancing wire is most accurately measured when the null balance point lies near the CENTER (between 40 cm and 60 cm).', c:'The sensitivity of the Wheatstone bridge is maximum when all four arms have comparable resistances (P/Q ≈ 1), minimizing percentage error from end resistance.', tag:'NCERT Exception' },
    { t:'Adding soap or detergent to water sharply DECREASES its surface tension, causing capillary rise h to drop drastically.', c:'Detergent molecules accumulate at the water-air interface, disrupting strong cohesive hydrogen bonds between water molecules.', tag:'NCERT Exception' },
    { t:'In the parallax method for locating images in optics, when the eye is moved from side to side, the object and image pins that move TOGETHER without relative separation are at the exact same location.', c:'Parallax is zero only when two pointers coincide in space; if the image pin lags behind, it is farther than the search pin.', tag:'Concept Trap' },
    { t:'When identifying components with a multimeter, an LED conducts and emits faint light in only one polarity, whereas a normal silicon diode conducts without light emission.', c:'Direct bandgap semiconductor in LED releases recombination energy as visible photons, whereas indirect bandgap Si releases heat.', tag:'Practical Trap' },
    { t:'For measuring the resistance of a wire using Ohm law (V = I R), connecting the voltmeter in series and ammeter in parallel is a catastrophic error that can burn the ammeter.', c:'An ammeter has near-zero resistance and draws massive short-circuit current if placed in parallel; a voltmeter has very high resistance and must be connected in parallel.', tag:'Boundary Failure' }
  ],

  flows:[
    { t:'Resonance Tube Experimental Sound Speed Pipeline', chain:['Measure First Resonance Length l₁ (λ/4 = l₁ + e)','Measure Second Resonance Length l₂ (3λ/4 = l₂ + e)','Compute Wavelength: λ = 2(l₂ − l₁)','Compute Speed: v = f λ = 2f (l₂ − l₁)','Compute End Correction: e = (l₂ − 3l₁) / 2 = 0.3 d'] },
    { t:'Screw Gauge Measurement with Zero Error Correction', root:'Check Circular Scale Zero against Datum Line',
      br:[
        { l:'Zero below datum line (Positive Error)', n:['Count divisions n below line','Zero Error = + (n × LC)','True Reading = Observed − (+n × LC)','Subtract error from reading'] },
        { l:'Zero above datum line (Negative Error)', n:['Count divisions (Total − n) above line','Zero Error = − (N − n) × LC','True Reading = Observed − (−Error)','Add correction to reading'] }
      ]
    },
    { t:'Multimeter Electronic Component Identification Tree', root:'Set Multimeter to Diode / Resistance Test Mode',
      br:[
        { l:'Conducts in ONE polarity only', n:['Check light emission','Glows faintly: LED','No glow: Standard p-n Diode'] },
        { l:'Conducts in BOTH polarities with constant value', n:['Reads fixed resistance Ω in both probe directions','Component is a Resistor'] },
        { l:'Momentary beep / reading then Open Circuit (1)', n:['Charges up from multimeter internal battery','Component is a Capacitor'] }
      ]
    }
  ],

  lab:[
    { t:'Vernier Calipers 10 VSD vs 9 MSD Calibration', d:'1 MSD = 1 mm. 10 VSD = 9 MSD = 9 mm. LC = 1 MSD − 1 VSD = 1 mm − 0.9 mm = 0.1 mm = 0.01 cm.' },
    { t:'Screw Gauge 50 Circular Divisions & 0.5 mm Pitch', d:'Pitch = distance advanced in 1 rotation = 0.5 mm. LC = Pitch / 50 = 0.5 mm / 50 = 0.01 mm = 10 μm.' },
    { t:'Travelling Microscope Index Reading for Refractive Index', d:'R₁: focused on lycopodium powder on bottom. R₂: focused on same powder through glass slab. R₃: focused on powder sprinkled on top surface. μ = (R₃ − R₁) / (R₃ − R₂).' },
    { t:'Metre Bridge End Resistance Calibration', d:'Copper strip resistance at terminals introduces end errors α and β. Minimized by swapping standard resistance and unknown resistance in the left and right gaps.' }
  ],

  pairs:[
    { g:'Experimental Instrument → Precision Least Count (Standard Lab Model)', a:'Standard Vernier Calipers (10 VSD = 9 MSD, 1 MSD = 1 mm)', b:'LC = 0.1 mm = 0.01 cm' },
    { g:'Experimental Instrument → Precision Least Count (Standard Lab Model)', a:'Standard Screw Gauge (Pitch = 1 mm, 100 Circular Divisions)', b:'LC = 0.01 mm = 0.001 cm = 10 μm' },
    { g:'Experimental Instrument → Precision Least Count (Standard Lab Model)', a:'Micro Screw Gauge (Pitch = 0.5 mm, 50 Circular Divisions)', b:'LC = 0.01 mm = 10 μm' },
    { g:'Experimental Instrument → Precision Least Count (Standard Lab Model)', a:'Spherometer (Pitch = 1 mm, 100 Circular Divisions)', b:'LC = 0.01 mm = 0.001 cm' },

    { g:'Multimeter Test Observation → Component Identification', a:'Shows fixed resistance value in both probe polarities', b:'Resistor' },
    { g:'Multimeter Test Observation → Component Identification', a:'Conducts in one polarity only with ~0.7 V drop; no light', b:'Silicon Diode' },
    { g:'Multimeter Test Observation → Component Identification', a:'Conducts in one polarity with ~2.0 V drop and emits light', b:'Light Emitting Diode (LED)' },
    { g:'Multimeter Test Observation → Component Identification', a:'Shows momentary low resistance pulse then infinite resistance (OL)', b:'Capacitor' }
  ],

  orders:[
    { q:'Arrange the precision measuring instruments in order of decreasing least count (increasing precision)', s:['Metre Scale (1 mm)', 'Vernier Calipers (0.1 mm)', 'Screw Gauge (0.01 mm)', 'Travelling Microscope Vernier (0.01 mm)'], sep:'>' },
    { q:'Arrange the resonance tube harmonics by tube length in ascending order', s:['First Resonance Length l₁ (≈ λ/4)', 'Second Resonance Length l₂ (≈ 3λ/4)', 'Third Resonance Length l₃ (≈ 5λ/4)'], sep:'<' },
    { q:'Arrange the refractive indices of optical materials measured by travelling microscope in ascending order', s:['Water (μ = 1.33)', 'Crown Glass (μ = 1.52)', 'Flint Glass (μ = 1.66)', 'Diamond (μ = 2.42)'], sep:'<' }
  ],

  facts:{
    T:[
      'In a resonance tube experiment, subtracting the first resonance length from the second resonance length cleanly eliminates the end correction: l₂ − l₁ = λ/2.',
      'The least count of a screw gauge equals pitch divided by the total number of circular scale divisions.',
      'A positive zero error in a measuring instrument must be subtracted from the observed reading to obtain the true reading.',
      'In a metre bridge experiment, maximum measurement accuracy is obtained when the balance point occurs near the center of the wire (around 50 cm).',
      'The half-deflection method gives galvanometer resistance G = R S / (R − S) provided the series resistance R is much greater than G.',
      'In travelling microscope experiments, focusing through a denser medium shifts the apparent position of an object closer to the surface.',
      'Detergent added to water lowers its surface tension and reduces its capillary rise height.',
      'Terminal velocity of a spherical body falling through a viscous fluid is directly proportional to the square of its radius: v_t ∝ r².'
    ],
    F:[
      'If a screw gauge has a negative zero error, the magnitude of the error should be subtracted from the observed reading.',
      'In a resonance tube, the speed of sound cannot be calculated without knowing the exact internal diameter of the tube.',
      'An ammeter should always be connected in parallel across the resistor whose current is to be measured.',
      'In a metre bridge, the resistance of the balancing wire is proportional to the square of its balancing length.',
      'A capacitor exhibits zero resistance when tested with direct current from a multimeter.',
      'At minimum deviation in a prism, the angle of incidence is strictly different from the angle of emergence.',
      'Vernier calipers can measure smaller thicknesses than a standard micrometer screw gauge.',
      'Increasing the length of a simple pendulum by four times quadruples its time period.'
    ]
  },

  mcq:[
    {
      q:'A screw gauge has a pitch of 0.5 mm and 50 divisions on its circular scale. When used to measure the diameter of a wire with no zero error, the main scale reads 2.0 mm and the 35th circular division coincides with the reference line. The diameter of the wire is:',
      o:['2.35 mm', '2.70 mm', '2.175 mm', '2.35 cm'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Least count LC = Pitch / Divisions = 0.5 mm / 50 = 0.01 mm.',
        'Diameter = MSR + (CSR × LC) = 2.0 mm + (35 × 0.01 mm) = 2.0 + 0.35 = 2.35 mm.'
      ]
    },
    {
      q:'In a resonance tube experiment, a tuning fork of frequency 512 Hz produces resonance at lengths l₁ = 15.5 cm and l₂ = 48.5 cm. The speed of sound in air calculated from this data is:',
      o:['337.9 m s⁻¹', '348.2 m s⁻¹', '325.5 m s⁻¹', '340.0 m s⁻¹'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'λ / 2 = l₂ − l₁ = 48.5 cm − 15.5 cm = 33.0 cm = 0.33 m.',
        'Wavelength λ = 2 × 0.33 = 0.66 m.',
        'Speed v = f λ = 512 Hz × 0.66 m = 337.92 m s⁻¹.'
      ]
    },
    {
      q:'In a metre bridge experiment, the balance point with an unknown resistance X in the left gap and a standard 10 Ω resistance in the right gap is obtained at 40.0 cm from the zero end. The value of unknown resistance X is:',
      o:['6.67 Ω', '15.0 Ω', '4.0 Ω', '25.0 Ω'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Metre bridge formula: X / R = l / (100 − l).',
        'X / 10 = 40.0 / (100 − 40.0) = 40 / 60 = 2/3.',
        'X = 10 × (2/3) ≈ 6.67 Ω.'
      ]
    },
    {
      q:'In a travelling microscope experiment to determine the refractive index of a glass slab, the readings are: R₁ = 2.100 cm (ink dot on paper), R₂ = 2.900 cm (dot through slab), and R₃ = 4.500 cm (lycopodium powder on top). The refractive index of the glass is:',
      o:['1.50', '1.38', '1.60', '1.45'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Real thickness = R₃ − R₁ = 4.500 − 2.100 = 2.400 cm.',
        'Apparent thickness = R₃ − R₂ = 4.500 − 2.900 = 1.600 cm.',
        'Refractive index μ = Real / Apparent = 2.400 / 1.600 = 1.50.'
      ]
    },
    {
      q:'In a half-deflection experiment, a galvanometer gives a deflection of 30 divisions with a series resistance R = 5000 Ω. When a shunt S = 100 Ω is connected across the galvanometer, the deflection drops to 15 divisions (half deflection). The resistance of the galvanometer G is approximately:',
      o:['102 Ω', '100 Ω', '50 Ω', '200 Ω'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'G = (R · S) / (R − S) = (5000 × 100) / (5000 − 100) = 500000 / 4900 ≈ 102.04 Ω.',
        '(Close to S since R ≫ S).'
      ]
    },
    {
      q:'When determining the focal length of a concave mirror by parallax method, if the object pin and inverted image pin move together without relative displacement when the observer moves their head sideways, the object pin is positioned at:',
      o:['Center of curvature of the mirror (at distance 2f)', 'Focus of the mirror (at distance f)', 'Pole of the mirror', 'Between focus and center of curvature'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'When an object is placed at the center of curvature (u = 2f) of a concave mirror, the real inverted image forms at the exact same position (v = 2f).',
        'Hence, the tips of object pin and image pin coincide with zero parallax.'
      ]
    }
  ],

  gens:[
    function(R){
      var msr = R.int(1, 5);
      var csr = R.int(10, 45);
      var lc = 0.01;
      var zeroErrDiv = R.pick([0, 2, -3, 4]);
      var zeroErr = zeroErrDiv * lc;
      var obs = msr + csr * lc;
      var ans = obs - zeroErr;
      var d1 = obs + zeroErr;
      var d2 = obs;
      var d3 = msr + (csr + 5) * lc;
      return {
        q:'A screw gauge with least count 0.01 mm has a zero error of ' + (zeroErr >= 0 ? '+' : '') + R.f(zeroErr) + ' mm. When measuring the thickness of a glass plate, the main scale reads ' + msr + ' mm and the circular scale reads ' + csr + ' divisions. What is the corrected thickness?',
        ans:ans, d:[d1, d2, d3], u:'mm',
        tag:'Calculation Trap',
        sol:[
          'Observed Reading = MSR + (CSR × LC) = ' + msr + ' + (' + csr + ' × 0.01) = ' + R.f(obs) + ' mm.',
          'Corrected Reading = Observed − (Zero Error) = ' + R.f(obs) + ' − (' + (zeroErr >= 0 ? '+' : '') + R.f(zeroErr) + ') = ' + R.f(ans) + ' mm.'
        ]
      };
    },
    function(R){
      var f = R.pick([256, 384, 512]);
      var l1_cm = R.pick([15, 16, 20]);
      var l2_cm = l1_cm + R.pick([32, 33, 34]);
      var diff_m = (l2_cm - l1_cm) * 0.01;
      var v = 2 * f * diff_m;
      var d1 = f * diff_m;
      var d2 = 4 * f * (l1_cm * 0.01);
      var d3 = 2 * f * (l2_cm * 0.01);
      return {
        q:'In a resonance tube experiment with a tuning fork of frequency ' + f + ' Hz, the first resonance occurs at length ' + l1_cm + ' cm and the second resonance occurs at ' + l2_cm + ' cm. What is the speed of sound in air?',
        ans:v, d:[d1, d2, d3], u:'m s⁻¹',
        tag:'Calculation Trap',
        sol:[
          'λ / 2 = l₂ − l₁ = ' + l2_cm + ' − ' + l1_cm + ' = ' + (l2_cm - l1_cm) + ' cm = ' + diff_m + ' m.',
          'Wavelength λ = 2 × ' + diff_m + ' = ' + (2 * diff_m) + ' m.',
          'Speed v = f λ = ' + f + ' × ' + (2 * diff_m) + ' = ' + R.f(v) + ' m s⁻¹.'
        ]
      };
    },
    function(R){
      var rKnown = R.pick([10, 20, 50]);
      var l = R.pick([30, 40, 60]);
      var x = rKnown * (l / (100 - l));
      var d1 = rKnown * ((100 - l) / l);
      var d2 = rKnown * (l / 100);
      var d3 = rKnown + l;
      return {
        q:'In a metre bridge experiment, null point is obtained at balancing length l = ' + l + ' cm from the left end when unknown resistance X is in the left gap and standard resistance R = ' + rKnown + ' Ω is in the right gap. What is the value of X?',
        ans:x, d:[d1, d2, d3], u:'Ω',
        tag:'Calculation Trap',
        sol:[
          'Wheatstone bridge condition: X / R = l / (100 − l).',
          'X = ' + rKnown + ' × (' + l + ' / ' + (100 - l) + ') = ' + R.f(x) + ' Ω.'
        ]
      };
    },
    function(R){
      var r1 = 2.0;
      var realDepth = R.pick([1.8, 2.4, 3.0]);
      var mu = 1.5;
      var appDepth = realDepth / mu;
      var r2 = r1 + (realDepth - appDepth);
      var r3 = r1 + realDepth;
      var d1 = realDepth;
      var d2 = appDepth;
      var d3 = 1.33;
      return {
        q:'A microscope is focused on a mark at the bottom of a beaker (reading ' + r1 + ' cm). When a transparent liquid of depth ' + realDepth + ' cm is poured into the beaker, the microscope has to be raised to ' + R.f(r2) + ' cm to refocus on the mark. What is the refractive index of the liquid?',
        ans:mu, d:[1.33, 1.66, 1.25], u:'',
        tag:'Calculation Trap',
        sol:[
          'Apparent depth = Real depth − Shift = ' + realDepth + ' − (' + R.f(r2) + ' − ' + r1 + ') = ' + R.f(appDepth) + ' cm.',
          'Refractive index μ = Real Depth / Apparent Depth = ' + realDepth + ' / ' + R.f(appDepth) + ' = ' + R.f(mu) + '.'
        ]
      };
    },
    function(R){
      var r = R.pick([3000, 4000, 5000]);
      var s = R.pick([50, 100, 200]);
      var g = (r * s) / (r - s);
      var d1 = s;
      var d2 = s / 2;
      var d3 = (r * s) / (r + s);
      return {
        q:'In a half-deflection experiment for measuring galvanometer resistance, high resistance R = ' + r + ' Ω gives full deflection θ, and shunt S = ' + s + ' Ω gives deflection θ / 2. Calculate the galvanometer resistance G:',
        ans:g, d:[d1, d2, d3], u:'Ω',
        tag:'Calculation Trap',
        sol:[
          'Galvanometer resistance G = (R · S) / (R − S).',
          'G = (' + r + ' × ' + s + ') / (' + r + ' − ' + s + ') = ' + (r * s) + ' / ' + (r - s) + ' = ' + R.f(g) + ' Ω.'
        ]
      };
    },
    function(R){
      var msd_div = 1; // 1 mm
      var vsd_count = R.pick([10, 20, 50]);
      var vsd_equal_msd = vsd_count - 1;
      var lc = msd_div / vsd_count;
      var d1 = msd_div / vsd_equal_msd;
      var d2 = msd_div * vsd_count;
      var d3 = 0.1;
      return {
        q:'A Vernier caliper has 1 main scale division equal to ' + msd_div + ' mm. If ' + vsd_count + ' Vernier scale divisions coincide with ' + vsd_equal_msd + ' main scale divisions, what is its least count?',
        ans:lc, d:[d1, d2, d3], u:'mm',
        tag:'Calculation Trap',
        sol:[
          'Least Count LC = 1 MSD − 1 VSD = 1 MSD − (' + vsd_equal_msd + ' / ' + vsd_count + ') MSD = 1 / ' + vsd_count + ' mm = ' + R.f(lc) + ' mm.'
        ]
      };
    }
  ]
});
