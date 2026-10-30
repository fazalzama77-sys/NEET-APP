/* ==========================================================================
   NOTES ENGINE: Comprehensive Subtopics, Graphical Masterclass,
   Proportionality Speed-Hacks, Reagent Codex & Topic-by-Topic Guide
   ========================================================================== */
'use strict';

(function () {
  if (typeof NEET === 'undefined') return;

  var SPEED_HACKS = {
    P1: [
      { r: 'LC = 1 MSD / n', u: 'Vernier callipers when n VSD = (n−1) MSD', s: 'Directly divide 1 MSD (e.g. 1 mm) by total vernier divisions n' },
      { r: '% error in Z = a(%A) + b(%B) + c(%C)', u: 'Power law Z = A^a B^b / C^c', s: 'Sum products of absolute powers and individual % errors' },
      { r: 'Δp/p ≈ ½ (ΔKE/KE)', u: 'Momentum vs Kinetic Energy for small changes (< 5%)', s: '% change in momentum is half the % change in KE' },
      { r: 'ΔR/R ≈ 2 (ΔL/L) ≈ 4 (Δr/r)', u: 'Wire stretched uniformly with constant volume', s: '% change in resistance is double the % change in length or 4× % decrease in radius' },
      { r: '[L/R] = [RC] = [√(LC)] = [T]', u: 'Circuit time constants', s: 'All these dimensional combinations strictly have dimensions of time [T]' },
      { r: 'True = Observed − ZeroError', u: 'Screw gauge & vernier correction', s: 'Algebraically subtract zero error: Positive error is subtracted; negative error is added' }
    ],
    P2: [
      { r: 's ∝ t²', u: 'Uniform acceleration from rest', s: 'Distance covered in 1st, 2nd, 3rd, 4th total seconds follows 1 : 4 : 9 : 16' },
      { r: 's_n ∝ (2n − 1)', u: 'Distance in successive equal seconds from rest', s: 'Galileo\'s odd-number law: 1 : 3 : 5 : 7 : 9' },
      { r: 'v ∝ √h', u: 'Free fall under uniform gravity', s: 'Striking speed is proportional to square root of height fallen' },
      { r: 'd_stop ∝ u² ; t_stop ∝ u', u: 'Braking vehicle with constant retarding force', s: 'Doubling initial speed quadruples stopping distance but only doubles stopping time' },
      { r: 'R tan θ = 4H', u: 'Any oblique projectile on flat ground', s: 'Links horizontal range, max height, and launch angle without needing g' },
      { r: 'R₁ = R₂ ; H₁/H₂ = tan²θ', u: 'Complementary launch angles θ and (90° − θ)', s: 'Identical horizontal range, ratio of maximum heights is tan²θ' },
      { r: 'T₁ T₂ = 2R / g', u: 'Product of flight times for complementary angles', s: 'Directly calculates range R = ½ g T₁ T₂' },
      { r: 'KE_top = KE₀ cos²θ', u: 'Kinetic energy at highest point of projectile', s: 'Multiply initial launch kinetic energy by cos²θ (e.g. at 60°, KE_top = KE₀/4)' },
      { r: 't_min = d / v_b ; drift = v_r (d/v_b)', u: 'River crossing in minimum time', s: 'Steer strictly perpendicular to flow (θ = 0° from normal); t_min is independent of river speed!' },
      { r: 'sin θ = v_r / v_b', u: 'River crossing along shortest path (zero drift)', s: 'Steer upstream at sin θ = v_r / v_b; possible ONLY when boat speed exceeds river speed (v_b > v_r)' }
    ],
    P3: [
      { r: 'a = (m₂ − m₁)g / (m₁ + m₂)', u: 'Atwood machine acceleration', s: 'Net pulling force divided by total mass' },
      { r: 'T = 2 m₁ m₂ g / (m₁ + m₂)', u: 'Atwood machine string tension', s: 'Harmonic mean mass times g' },
      { r: 'N = m(g ± a)', u: 'Apparent weight in accelerating elevator', s: 'Accelerating upward (+a): N = m(g+a); Accelerating downward (−a): N = m(g−a); Free fall: N = 0' },
      { r: 'tan θ = μ_s', u: 'Angle of repose & angle of friction', s: 'Block on incline is on the verge of sliding when incline angle θ equals tan⁻¹(μ_s)' },
      { r: 'a = g(sin θ − μ_k cos θ)', u: 'Acceleration down a rough inclined plane', s: 'Component of gravity down incline minus kinetic friction deceleration' },
      { r: 'v_opt = √(rg tan θ)', u: 'Optimum banking speed without friction', s: 'Vehicle negotiates curve with zero lateral friction on road' },
      { r: 'v_max = √[rg (tan θ + μ) / (1 − μ tan θ)]', u: 'Maximum safe speed on banked road with friction', s: 'Upper speed limit before skidding outward up the banked incline' }
    ],
    P4: [
      { r: 'W_net = ΔKE = ½ m(v² − u²)', u: 'Work-Energy Theorem', s: 'Universal relation valid for all forces (conservative, non-conservative, internal, external)' },
      { r: 'v_bottom = √(5gR) ; v_top = √(gR)', u: 'Vertical circular motion critical speeds', s: 'Minimum speeds to complete full vertical circle without string slacking' },
      { r: 'T_bottom − T_top = 6mg', u: 'Tension difference in vertical circle', s: 'Tension difference between lowest and highest points is ALWAYS exactly 6mg, independent of speed' },
      { r: 'v₁ = [(m₁−m₂)/(m₁+m₂)]u₁ + [2m₂/(m₁+m₂)]u₂', u: '1D Elastic Collision', s: 'If m₁ = m₂, velocities simply exchange completely; if m₁ ≪ m₂ (light ball hits wall), v₁ ≈ −u₁' },
      { r: 'Loss in KE = ½ [m₁m₂/(m₁+m₂)] (u₁ − u₂)² (1 − e²)', u: 'Partially or completely inelastic collision', s: 'Maximum kinetic energy loss occurs when e = 0 (perfectly inelastic, bodies stick together)' }
    ],
    P5: [
      { r: 'I = I_cm + M d²', u: 'Parallel axis theorem', s: 'Valid for ANY rigid body; axis MUST be parallel to an axis passing through the Centre of Mass' },
      { r: 'I_z = I_x + I_y', u: 'Perpendicular axis theorem', s: 'Valid ONLY for planar (2D) laminar objects lying in the xy-plane' },
      { r: 'a = g sin θ / (1 + k²/R²)', u: 'Pure rolling acceleration down inclined plane', s: 'Smaller inertia ratio k²/R² gives greater linear acceleration' },
      { r: 'v = √[2gh / (1 + k²/R²)]', u: 'Pure rolling speed at bottom of incline', s: 'Solid sphere (k²/R²=0.4) reaches bottom first, followed by Disc (0.5), Hollow Sphere (0.67), Ring (1.0)' },
      { r: 'KE_tot = ½ mv² (1 + k²/R²)', u: 'Total kinetic energy of rolling body', s: 'Sum of translational KE (½mv²) and rotational KE (½Iω²)' }
    ],
    P6: [
      { r: 'g_h ≈ g(1 − 2h/R)', u: 'Variation of g with height (h ≪ R)', s: 'g decreases twice as fast with height as it does with depth (for small h = d)' },
      { r: 'g_d = g(1 − d/R)', u: 'Variation of g with depth d below surface', s: 'EXACT formula valid for all depths; at earth\'s centre (d = R), g = 0' },
      { r: 'g\' = g − ω² R cos²λ', u: 'Variation of g with Earth rotation at latitude λ', s: 'At equator (λ=0), g is minimum: g_eq = g − ω²R; At poles (λ=90°), g is unaffected: g_pole = g' },
      { r: 'v_e = √(2gR) = √2 v_o ≈ 11.2 km/s', u: 'Escape velocity from Earth\'s surface', s: 'Escape velocity is √2 times the orbital velocity of a surface satellite; independent of launch angle' },
      { r: 'T² ∝ r³ ; v_o = √(GM/r)', u: 'Kepler\'s Third Law & Orbital speed', s: 'Satellite orbital speed decreases as orbital radius increases' },
      { r: 'E_tot = −KE = ½ PE = −GMm / (2r)', u: 'Satellite mechanical energy partition', s: 'Total energy is negative, exactly equal in magnitude to kinetic energy, and half the potential energy' }
    ],
    P7: [
      { r: 'ΔP = 2T / R (drop) ; ΔP = 4T / R (bubble)', u: 'Excess pressure across curved surface', s: 'Soap bubble has two free surfaces (inside and outside) ⟹ double the excess pressure of liquid drop' },
      { r: 'h = 2T cos θ / (ρ g r)', u: 'Capillary rise (Jurin\'s law)', s: 'Height is inversely proportional to tube radius r (h × r = constant)' },
      { r: 'v_t = 2r² (ρ − σ)g / (9η)', u: 'Stokes\' Terminal Velocity', s: 'Terminal speed is proportional to square of sphere radius r² (doubling radius quadruples terminal speed!)' },
      { r: 'v = √(2gh)', u: 'Torricelli\'s efflux speed', s: 'Speed of liquid emerging from orifice at depth h equals free-fall speed from same height' },
      { r: 'P + ½ρv² + ρgh = constant', u: 'Bernoulli\'s Equation', s: 'High velocity region corresponds to low pressure region (Bernoulli suction/lift)' }
    ],
    P8: [
      { r: '(dP/dV)_adi = γ (dP/dV)_iso', u: 'Slopes of adiabatic vs isothermal P–V curves', s: 'Adiabatic curve is always γ times steeper than isothermal curve through the same state' },
      { r: 'W_iso = −2.303 nRT log(V₂/V₁)', u: 'Isothermal reversible work done', s: 'For ideal gas at constant temperature, ΔU = 0 ⟹ Q = −W' },
      { r: 'W_adi = nR(T₁ − T₂) / (γ − 1)', u: 'Adiabatic reversible work done', s: 'For adiabatic expansion (T₁ > T₂), gas does work at the expense of its own internal energy (ΔU < 0)' },
      { r: 'η = 1 − T_L / T_H = W / Q_H', u: 'Carnot Heat Engine Efficiency', s: 'Efficiency depends strictly on absolute temperatures of source and sink, independent of working substance' },
      { r: 'β = T_L / (T_H − T_L) = Q_L / W', u: 'Refrigerator Coefficient of Performance', s: 'Relation with engine efficiency: β = (1 − η) / η' }
    ],
    P9: [
      { r: 'v_rms : v_avg : v_mp = √3 : √(8/π) : √2 = 1.224 : 1.128 : 1', u: 'Molecular speed comparisons', s: 'RMS speed is always highest, followed by average speed, and most probable speed is lowest' },
      { r: 'γ = 1 + 2/f', u: 'Adiabatic exponent for f degrees of freedom', s: 'Monoatomic (f=3) γ = 5/3 = 1.67; Diatomic (f=5) γ = 7/5 = 1.40; Non-linear triatomic (f=6) γ = 4/3 = 1.33' },
      { r: 'λ = 1 / (√2 π n d²)', u: 'Mean free path of gas molecule', s: 'Inversely proportional to square of molecular diameter d² and number density n' },
      { r: 'E_total = ½ f nRT = ½ f N k_B T', u: 'Total internal energy of ideal gas', s: 'Depends strictly on temperature and degrees of freedom; independent of pressure and volume' }
    ],
    P10: [
      { r: 'v = ω√(A² − x²) ; a = −ω² x', u: 'SHM Kinematics', s: 'Speed is maximum (v_max = ωA) at mean position (x=0); acceleration is maximum (a_max = ω²A) at extremes' },
      { r: 'T = 2π√(m/k) ; T = 2π√(l/g)', u: 'Spring block & simple pendulum period', s: 'Spring period is independent of gravity; simple pendulum period is independent of bob mass' },
      { r: 'k_series = k₁k₂/(k₁+k₂) ; k_parallel = k₁ + k₂', u: 'Spring combinations', s: 'Series springs have smaller equivalent spring constant (longer period); parallel springs are stiffer' },
      { r: 'v = 2ν(l₂ − l₁) ; e = 0.3d = (l₂ − 3l₁)/2', u: 'Resonance tube speed of sound', s: 'Difference between consecutive resonance lengths (l₂ − l₁) equals half-wavelength λ/2' },
      { r: 'f_beat = |f₁ − f₂|', u: 'Beats frequency', s: 'Number of intensity maxima heard per second equals frequency difference of interfering sound waves' }
    ],
    P11: [
      { r: 'F_med = F_vacuum / K', u: 'Coulomb force in dielectric medium', s: 'Force between two charges decreases by factor K (dielectric constant) in medium' },
      { r: 'E_axial = 2kp/r³ ; E_equatorial = kp/r³', u: 'Short electric dipole field', s: 'Field on axial line is twice the field on equatorial line at same distance r (E_axial = 2 E_eq)' },
      { r: 'E = 0 ; V = kQ/R (inside shell)', u: 'Conducting sphere / thin spherical shell', s: 'Electric field inside is strictly zero; electric potential inside is uniform, equal to surface potential' },
      { r: 'C = ε₀ A / d ; C_med = K C₀', u: 'Parallel plate capacitor', s: 'Capacitance increases K times upon filling dielectric medium between plates' },
      { r: 'U = ½ CV² = Q² / (2C) = ½ QV', u: 'Energy stored in capacitor', s: 'Battery disconnected: Q constant ⟹ U ∝ 1/C; Battery connected: V constant ⟹ U ∝ C' }
    ],
    P12: [
      { r: 'I = n e A v_d', u: 'Current and drift velocity relation', s: 'Current is directly proportional to free electron density n, cross-sectional area A, and drift speed v_d' },
      { r: 'V = E − I r (discharging) ; V = E + I r (charging)', u: 'Cell terminal potential difference', s: 'When cell supplies current to circuit, terminal voltage V is less than EMF E by internal drop Ir' },
      { r: 'I_sc = E / r', u: 'Maximum current from cell (short-circuit)', s: 'Achieved when external resistance R = 0' },
      { r: 'P_max = E² / (4r)', u: 'Maximum Power Transfer Theorem', s: 'External load receives maximum power when load resistance equals internal resistance (R = r)' },
      { r: 'R / S = l / (100 − l)', u: 'Metre bridge balance condition', s: 'Ratio of known and unknown resistances equals ratio of balance lengths on bridge wire' }
    ],
    P13: [
      { r: 'B_center = μ₀ I / (2R)', u: 'Circular current loop centre magnetic field', s: 'Field at centre of N turns is N times larger: B = μ₀ N I / (2R)' },
      { r: 'B_axis = μ₀ I R² / [2(R² + x²)^(3/2)]', u: 'Axial magnetic field of circular coil', s: 'At large distance (x ≫ R): B_axis ≈ μ₀ (2 M) / (4π x³), identical to magnetic dipole field' },
      { r: 'B = μ₀ n I', u: 'Long ideal solenoid magnetic field', s: 'Field inside is uniform; field at the ends is half of field at centre (B_end = ½ μ₀ n I)' },
      { r: 'r = m v / (q B) = p / (q B) = √(2mE) / (q B)', u: 'Cyclotron radius of charged particle', s: 'Radius is proportional to momentum p; time period T = 2πm / (qB) is independent of speed and radius' },
      { r: 'S = I_g R_g / (I − I_g)', u: 'Galvanometer to Ammeter conversion', s: 'Connect low resistance shunt S in parallel with galvanometer coil' },
      { r: 'R = V / I_g − R_g', u: 'Galvanometer to Voltmeter conversion', s: 'Connect high resistance R in series with galvanometer coil' }
    ],
    P14: [
      { r: 'E = B v l', u: 'Motional EMF in moving conductor', s: 'Rod of length l moving with velocity v perpendicular to magnetic field B' },
      { r: 'E = ½ B ω l²', u: 'Rotating rod motional EMF', s: 'Rod rotating with angular frequency ω about one end in perpendicular magnetic field' },
      { r: 'I_rms = I₀ / √2 ≈ 0.707 I₀', u: 'Root Mean Square AC current', s: 'Household 220 V AC is the RMS voltage; peak voltage is V₀ = 220√2 ≈ 311 V' },
      { r: 'ω₀ = 1 / √(L C) ; f₀ = 1 / [2π √(L C)]', u: 'Series LCR resonant frequency', s: 'At resonance, impedance is minimum (Z = R), current is maximum and in phase with voltage' },
      { r: 'Q = (ω₀ L) / R = (1/R) √(L/C)', u: 'Quality factor (Q-factor) of LCR circuit', s: 'Higher Q-factor gives sharper resonance curve and higher voltage magnification' },
      { r: 'P_avg = V_rms I_rms cos φ', u: 'Average power in AC circuit', s: 'cos φ = R/Z is power factor; for pure inductor or capacitor, cos φ = 0 ⟹ Wattless current (P_avg = 0)' }
    ],
    P15: [
      { r: 'c = 1 / √(μ₀ ε₀) = E₀ / B₀ ≈ 3 × 10⁸ m/s', u: 'Speed of EM waves in free space', s: 'Ratio of peak electric field to peak magnetic field strictly equals speed of light c' },
      { r: 'I = ½ ε₀ c E₀² = B₀² c / (2μ₀)', u: 'Intensity of Electromagnetic Wave', s: 'Average energy density is divided equally between electric and magnetic fields (u_E = u_B)' },
      { r: 'P = I / c (absorbing) ; P = 2I / c (reflecting)', u: 'Radiation pressure on surface', s: 'Perfectly reflecting surface experiences double the radiation pressure of absorbing surface' },
      { r: 'Radio > Micro > IR > Visible > UV > X-ray > Gamma', u: 'EM Spectrum wavelength order', s: 'Radio has longest wavelength (lowest frequency); Gamma has shortest wavelength (highest frequency)' }
    ],
    P16: [
      { r: '1/f = 1/v + 1/u ; m = −v/u', u: 'Mirror formula & magnification', s: 'Use Cartesian sign convention: Real inverted images have negative m; virtual erect have positive m' },
      { r: '1/f = 1/v − 1/u ; m = +v/u', u: 'Thin lens formula & magnification', s: 'Convex lens has positive f; concave lens has negative f' },
      { r: '1/f = (n − 1) (1/R₁ − 1/R₂)', u: 'Lens Maker\'s Formula', s: 'Equiconvex lens in air with R₁ = R, R₂ = −R has focal length f = R / [2(n−1)]. For glass (n=1.5), f = R' },
      { r: 'P = P₁ + P₂ ; 1/f = 1/f₁ + 1/f₂', u: 'Combination of thin lenses in contact', s: 'Powers add algebraically (e.g. +3 D and −1 D lens in contact has net power +2 D)' },
      { r: 'sin θ_c = 1 / n', u: 'Critical angle for Total Internal Reflection', s: 'Light must travel from optically denser to rarer medium with angle of incidence i > θ_c' },
      { r: 'δ = i + e − A ; n = sin[(A+δ_m)/2] / sin(A/2)', u: 'Prism deviation & refractive index', s: 'At minimum deviation δ = δ_m, light passes symmetrically through prism: i = e and r₁ = r₂ = A/2' },
      { r: 'β = λ D / d', u: 'YDSE fringe width', s: 'Bright and dark fringes have identical width; immersion in liquid with refractive index n reduces fringe width to β/n' },
      { r: 'Δx = (n − 1) t D / d', u: 'YDSE fringe shift due to mica sheet', s: 'Fringe pattern shifts toward the side containing the transparent sheet without changing fringe width' },
      { r: 'tan i_p = n', u: 'Brewster\'s Law of Polarization', s: 'Reflected and refracted rays are mutually perpendicular (90°) when incidence angle equals Brewster angle i_p' }
    ],
    P17: [
      { r: 'E = h ν = hc / λ ≈ 12400 / λ(Å) eV', u: 'Photon energy shortcut', s: 'Directly compute photon energy in electron-volts from wavelength in Angstroms' },
      { r: 'K_max = e V₀ = h ν − Φ', u: 'Einstein\'s Photoelectric Equation', s: 'Maximum kinetic energy and stopping potential V₀ depend ONLY on frequency ν, independent of intensity' },
      { r: 'V₀ = (h/e) ν − Φ/e', u: 'Stopping potential vs frequency straight line', s: 'Slope is h/e (universal constant for all metals!); X-intercept is threshold frequency ν₀' },
      { r: 'λ = h / p = 12.27 / √V Å', u: 'de Broglie wavelength of electron', s: 'Accelerated through potential difference V in volts; for proton λ = 0.286/√V Å; for α-particle λ = 0.101/√V Å' },
      { r: 'λ = h / √(3 m k_B T)', u: 'Thermal de Broglie wavelength of gas molecule', s: 'Wavelength is inversely proportional to square root of absolute temperature T' }
    ],
    P18: [
      { r: 'r_n = 0.529 n² / Z Å', u: 'Bohr atomic radius scaling', s: 'Radius is directly proportional to n² and inversely proportional to atomic number Z (r ∝ n²/Z)' },
      { r: 'v_n = 2.18 × 10⁶ (Z / n) m/s', u: 'Bohr orbital electron speed', s: 'Electron speed is directly proportional to Z and inversely proportional to n (v ∝ Z/n)' },
      { r: 'E_n = −13.6 Z² / n² eV', u: 'Bohr total energy scaling', s: 'Total energy is negative; KE = −E_n = +13.6 Z²/n² eV; PE = 2E_n = −27.2 Z²/n² eV' },
      { r: '1/λ = R Z² (1/n₁² − 1/n₂²)', u: 'Rydberg formula for spectral transitions', s: 'Lyman (n₁=1, UV); Balmer (n₁=2, Visible); Paschen (n₁=3, IR); Brackett (n₁=4, IR); Pfund (n₁=5, IR)' },
      { r: 'R = R₀ A^(1/3) (R₀ ≈ 1.2 fm)', u: 'Nuclear radius scaling with mass number A', s: 'Nuclear volume is proportional to A ⟹ Nuclear matter density is CONSTANT (~2.3 × 10¹⁷ kg/m³) for all nuclei!' }
    ],
    P19: [
      { r: 'n_e n_h = n_i²', u: 'Mass Action Law in Semiconductors', s: 'Product of electron and hole concentrations is constant at given temperature' },
      { r: 'η_max = 40.6% (half-wave) ; η_max = 81.2% (full-wave)', u: 'Rectifier maximum theoretical efficiency', s: 'Full-wave rectifier has double the efficiency and ripple frequency of half-wave rectifier (2f vs f)' },
      { r: 'r_ripple = 1.21 (half-wave) ; r_ripple = 0.482 (full-wave)', u: 'Rectifier ripple factor', s: 'Lower ripple factor indicates smoother DC output' },
      { r: 'I_s = (V_in − V_Z) / R', u: 'Zener diode voltage regulator series resistance', s: 'Unregulated DC fluctuation is absorbed across series resistance R, keeping V_Z across load constant' },
      { r: 'NAND & NOR are Universal Logic Gates', u: 'Digital electronics logic design', s: 'Any basic gate (AND, OR, NOT) can be constructed exclusively using only NAND or only NOR gates' }
    ],
    P20: [
      { r: 'LC = 1 MSD / N', u: 'Vernier callipers least count', s: 'Divide main scale division by total vernier scale divisions' },
      { r: 'LC = Pitch / Total Circular Divisions', u: 'Screw gauge least count', s: 'Divide pitch (linear advance per turn) by circular scale division count' },
      { r: 'True = Observed − ZeroError', u: 'Instrument zero correction rule', s: 'Positive zero error is subtracted; negative zero error is added' },
      { r: 'v = 2ν(l₂ − l₁)', u: 'Resonance tube speed of sound', s: 'End correction eliminates when subtracting first from second resonance length' },
      { r: 'X = R (100 − l) / l', u: 'Metre bridge unknown resistance', s: 'Balance length l from left end' },
      { r: 'G = R S / (R − S)', u: 'Galvanometer resistance by half-deflection method', s: 'R is high series resistance, S is shunt resistance producing half deflection' }
    ],

    /* Physical Chemistry C1 - C8 */
    C1: [
      { r: 'Moles = Mass / MolarMass = N / N_A = V_STP(L) / 22.4', u: 'Mole Concept Triangle', s: 'Master conversion between mass, particle count, and gas volume at standard conditions' },
      { r: 'M₁ V₁ = M₂ V₂', u: 'Solution Dilution Equation', s: 'Moles of solute remain strictly conserved upon adding pure solvent' },
      { r: 'M_mix = (M₁V₁ + M₂V₂) / (V₁ + V₂)', u: 'Molarity of mixed solutions', s: 'Total moles of solute divided by total final volume' },
      { r: 'Limiting Reagent determines theoretical yield', u: 'Stoichiometric calculations', s: 'Divide moles of each reactant by its stoichiometric coefficient; smallest value is the limiting reagent' },
      { r: 'Molality m = 1000 M / (1000 d − M × M_solute)', u: 'Interconversion of Molarity and Molality', s: 'Allows converting volume-dependent molarity M to temperature-independent molality m' },
      { r: '% Yield = (Actual Yield / Theoretical Yield) × 100%', u: 'Reaction efficiency', s: 'Compares practical yield with stoichiometry-predicted maximum' }
    ],
    C2: [
      { r: 'r_n = 0.529 n² / Z Å', u: 'Bohr atomic radius', s: 'Radius scales as n²/Z; for H-atom ground state r₁ = 0.529 Å' },
      { r: 'v_n = 2.18 × 10⁶ (Z / n) m/s', u: 'Bohr orbital electron velocity', s: 'Speed scales as Z/n; for H ground state v₁ ≈ c / 137' },
      { r: 'E_n = −13.6 Z² / n² eV', u: 'Bohr energy levels', s: 'Binding energy is positive +13.6 Z²/n² eV; KE = −E_n; PE = 2E_n' },
      { r: 'λ = h / (m v) = h / √(2 m E)', u: 'de Broglie wavelength', s: 'Matter wave associated with moving particle' },
      { r: 'Δx · Δp ≥ h / (4π)', u: 'Heisenberg Uncertainty Principle', s: 'Cannot determine position and linear momentum simultaneously with arbitrary precision' },
      { r: 'Radial Nodes = n − l − 1 ; Angular Nodes = l', u: 'Orbital nodal count formulas', s: 'Total nodes = Radial + Angular = n − 1 (spherical nodes + nodal planes)' },
      { r: 'μ_s = √[n(n+2)] BM', u: 'Spin-only magnetic moment', s: 'n is number of unpaired electrons (e.g. n=1 ⟹ 1.73 BM; n=2 ⟹ 2.83 BM; n=3 ⟹ 3.87 BM; n=4 ⟹ 4.90 BM; n=5 ⟹ 5.92 BM)' }
    ],
    C3: [
      { r: 'Steric Number SN = ½ (V + M − C + A)', u: 'VSEPR Hybridization shortcut', s: 'V=valence electrons on central atom, M=monovalent surrounding atoms, C=cation charge, A=anion charge. SN=2 (sp), 3 (sp²), 4 (sp³), 5 (sp³d), 6 (sp³d²)' },
      { r: 'Bond Order BO = ½ (N_b − N_a)', u: 'Molecular Orbital Theory (MOT)', s: 'N_b = bonding electrons, N_a = antibonding electrons. BO > 0 means stable species; unpaired electrons mean paramagnetic' },
      { r: 'MOT 14-Electron Rule', u: 's-p mixing cutoff', s: 'Species with ≤ 14 electrons (B₂, C₂, N₂): π 2p_x = π 2p_y are lower in energy than σ 2p_z. Species with > 14 electrons (O₂, F₂): σ 2p_z is lower' },
      { r: 'Smaller cation + Larger anion + Higher charge = Covalent', u: 'Fajans\' Rules', s: 'High polarizing power of small high-charge cation distorts large polarizable anion cloud, increasing covalent character' },
      { r: 'μ = q × d', u: 'Dipole moment', s: 'Symmetrical molecules (CO₂, BF₃, CH₄, CCl₄, SF₆) have zero net dipole moment (μ = 0)' },
      { r: 'Intramolecular H-bond decreases boiling point & increases steam volatility', u: 'Hydrogen bonding distinction', s: 'ortho-nitrophenol has intramolecular H-bonding (steam volatile); para-nitrophenol has intermolecular H-bonding (high bp)' }
    ],
    C4: [
      { r: 'ΔU = q + w = q − P_ext ΔV', u: 'First Law of Thermodynamics', s: 'IUPAC convention: work done on system is positive (+w), work done by system is negative (−w)' },
      { r: 'ΔH = ΔU + Δn_g RT', u: 'Enthalpy & Internal Energy relation', s: 'Δn_g = moles of gaseous products − moles of gaseous reactants' },
      { r: 'W_iso,rev = −2.303 nRT log(V₂/V₁)', u: 'Isothermal reversible work done', s: 'Maximum expansion work done by ideal gas at constant temperature' },
      { r: 'ΔS = q_rev / T', u: 'Entropy change definition', s: 'Entropy is measure of randomness; for isolated system ΔS_total > 0 for spontaneous process' },
      { r: 'ΔG = ΔH − T ΔS', u: 'Gibbs Free Energy & Spontaneity', s: 'Spontaneous when ΔG < 0; at equilibrium ΔG = 0; non-spontaneous when ΔG > 0' },
      { r: 'ΔG° = −2.303 RT log K_eq', u: 'Standard Gibbs energy and equilibrium constant', s: 'K > 1 ⟹ ΔG° < 0 (products favoured at equilibrium)' }
    ],
    C5: [
      { r: 'P_total = P_A° X_A + P_B° X_B', u: 'Raoult\'s Law for volatile liquid mixtures', s: 'Ideal solutions follow Raoult\'s law at all concentrations with ΔH_mix = 0 and ΔV_mix = 0' },
      { r: '(P° − P_s) / P° = X_solute = n / (n + N) ≈ n / N', u: 'Relative Lowering of Vapour Pressure (RLVP)', s: 'Colligative property depending strictly on number of solute particles, not their nature' },
      { r: 'ΔT_b = i K_b m ; ΔT_f = i K_f m', u: 'Elevation in Boiling Point & Depression in Freezing Point', s: 'K_b is ebullioscopic constant; K_f is cryoscopic constant; both depend strictly on solvent' },
      { r: 'Π = i C R T', u: 'Osmotic Pressure equation', s: 'Best colligative property for determining molar masses of polymers and biomolecules (measurable at room temperature)' },
      { r: 'i = 1 + (n − 1)α (dissociation) ; i = 1 − (1 − 1/n)α (association)', u: 'van \'t Hoff factor i', s: 'n is number of ions/particles per formula unit; α is degree of dissociation/association' }
    ],
    C6: [
      { r: 'K_p = K_c (RT)^(Δn_g)', u: 'Relation between K_p and K_c', s: 'If Δn_g = 0 (e.g. H₂ + I₂ ⇌ 2HI), then K_p = K_c and equilibrium is pressure-independent' },
      { r: 'Le Chatelier: T↑ favours endothermic ; P↑ favours fewer gas moles', u: 'Equilibrium shift rules', s: 'Adding inert gas at constant volume has NO EFFECT; at constant pressure, shifts toward more gas moles' },
      { r: 'pH = pK_a + log([Salt] / [Acid])', u: 'Henderson-Hasselbalch equation (Acidic Buffer)', s: 'Buffer solution resists pH change on adding small amounts of acid or base; buffer capacity is max when [Salt] = [Acid] (pH = pK_a)' },
      { r: 'pOH = pK_b + log([Salt] / [Base])', u: 'Henderson-Hasselbalch equation (Basic Buffer)', s: 'pH = 14 − pOH at 298 K' },
      { r: 'pH = 7 + ½ pK_a − ½ pK_b', u: 'Hydrolysis of salt of Weak Acid + Weak Base', s: 'pH is COMPLETELY INDEPENDENT of salt concentration C!' },
      { r: 'K_sp = x^x y^y s^(x+y)', u: 'Solubility Product for A_x B_y', s: 'Precipitation occurs when ionic product Q_sp exceeds solubility product K_sp (Q_sp > K_sp)' }
    ],
    C7: [
      { r: 'E_cell = E_cell° − (0.0591 / n) log Q (at 298 K)', u: 'Nernst Equation', s: 'Relates cell potential to reaction quotient Q; at equilibrium E_cell = 0 ⟹ E_cell° = (0.0591/n) log K' },
      { r: 'ΔG° = −n F E_cell°', u: 'Cell potential and Gibbs free energy', s: 'Galvanic cell produces spontaneous current when E_cell° > 0 ⟹ ΔG° < 0' },
      { r: 'Λ_m° = ν₊ λ₊° + ν₋ λ₋°', u: 'Kohlrausch\'s Law of Independent Migration', s: 'Molar conductivity at infinite dilution is sum of individual ionic molar conductivities' },
      { r: 'α = Λ_m / Λ_m° ; K_a = C α² / (1 − α)', u: 'Degree of dissociation of weak electrolyte', s: 'Determined directly from ratio of molar conductivity to limiting molar conductivity' },
      { r: 'm = Z I t = (E / 96500) I t', u: 'Faraday\'s First Law of Electrolysis', s: 'Mass of substance liberated is proportional to total charge passed (Q = It)' }
    ],
    C8: [
      { r: 'Rate = k [A]^x [B]^y', u: 'Differential Rate Law', s: 'Overall order of reaction = x + y; order is an experimental quantity that can be zero, fractional, or negative' },
      { r: '[A] = [A]₀ − kt ; t_1/2 = [A]₀ / (2k)', u: 'Zero Order Kinetics', s: 'Half-life is directly proportional to initial concentration [A]₀; units of k are mol L⁻¹ s⁻¹' },
      { r: 'k = (2.303 / t) log([A]₀ / [A]) ; t_1/2 = 0.693 / k', u: 'First Order Kinetics', s: 'Half-life is COMPLETELY INDEPENDENT of initial concentration; units of k are s⁻¹' },
      { r: 't_75% = 2 t_1/2 ; t_87.5% = 3 t_1/2 ; t_99.9% ≈ 10 t_1/2', u: 'First order time milestone ratios', s: 'Instant calculation shortcuts for first order percentage completion' },
      { r: 'log(k₂/k₁) = [E_a / (2.303 R)] [(T₂ − T₁) / (T₁ T₂)]', u: 'Arrhenius Equation temperature dependence', s: 'Higher activation energy E_a means rate constant is more sensitive to temperature changes' }
    ]
  };



  /* Inorganic & Organic Chemistry C9 - C20 Speed Hacks */
  Object.assign(SPEED_HACKS, {
    C9: [
      { r: 'IE₁: Be > B and N > O', u: 'First Ionisation Enthalpy Anomalies', s: 'Be (2s²) has stable full subshell vs B (2p¹); N (2p³) has stable half-filled subshell vs O (2p⁴)' },
      { r: 'Electron Gain Enthalpy: Cl > F and S > O', u: 'Electron Affinity Inversions', s: 'F and O have very small 2p compact subshells with intense interelectronic repulsion that lowers incoming electron stabilization' },
      { r: 'Isoelectronic radius: C⁴⁻ > N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺', u: 'Ionic radius of isoelectronic species', s: 'Higher nuclear charge Z pulls same number of electrons (10 e⁻) closer, reducing ionic radius' },
      { r: 'Electronegativity: F (4.0) > O (3.5) > N (3.0) ≈ Cl (3.0) > Br (2.8)', u: 'Pauling Electronegativity scale', s: 'FONClBrISCH shortcut for decreasing electronegativity order' }
    ],
    C10: [
      { r: 'Stability: Tl⁺ > Tl³⁺ ; Pb²⁺ > Pb⁴⁺ ; Bi³⁺ > Bi⁵⁺', u: 'Inert Pair Effect down heavier p-block', s: 'Poor shielding by intervening 4f and 5d electrons causes outer ns² electrons to remain unshared ("inert")' },
      { r: 'Lewis Acidity: BI₃ > BBr₃ > BCl₃ > BF₃', u: 'Boron trihalides back-bonding', s: 'Strong 2pπ–2pπ back-bonding in BF₃ satisfies octet, reducing Lewis acidity; poor 2pπ–4pπ back-bonding in BI₃ makes it strongest Lewis acid' },
      { r: 'Dipole: NH₃ (1.47 D) ≫ NF₃ (0.24 D)', u: 'Molecular dipole moment comparison', s: 'In NH₃, lone pair and N–H bond dipoles reinforce each other; in NF₃, highly electronegative F atoms pull dipole opposite to lone pair' },
      { r: 'Oxidizing power: F₂ > Cl₂ > Br₂ > I₂', u: 'Halogen standard reduction potentials', s: 'Fluorine is the strongest chemical oxidizing agent known due to low F–F bond dissociation energy and high hydration enthalpy of F⁻' },
      { r: 'Catenation: C ≫ Si > Ge ≈ Sn > Pb', u: 'Group 14 self-linking tendency', s: 'Directly proportional to element-element single bond strength (C–C = 348 kJ/mol)' }
    ],
    C11: [
      { r: 'Radii: Zr (160 pm) ≈ Hf (159 pm) ; Nb ≈ Ta ; Mo ≈ W', u: 'Lanthanide Contraction effect on 4d/5d series', s: 'Imperfect shielding of nuclear charge by 14 4f electrons cancels out the expected normal increase in size from 4d to 5d' },
      { r: 'μ_s = √[n(n+2)] BM', u: 'Spin-only magnetic moment for 3d ions', s: 'n = unpaired electrons; Cr³⁺ (3d³) ⟹ 3.87 BM; Fe²⁺ (3d⁶) ⟹ 4.90 BM; Fe³⁺/Mn²⁺ (3d⁵) ⟹ 5.92 BM' },
      { r: 'E°(Cu²⁺/Cu) = +0.34 V (Positive!)', u: 'Copper standard reduction potential', s: 'High enthalpy of atomization + high 1st & 2nd ionization enthalpies are NOT balanced by hydration enthalpy of Cu²⁺' },
      { r: 'KMnO₄ n-factor: 5 (acidic) ; 3 (neutral/faintly alkaline) ; 1 (strongly alkaline)', u: 'Potassium permanganate redox stoichiometry', s: 'Acidic medium: MnO₄⁻ + 5e⁻ → Mn²⁺; Neutral: MnO₄⁻ + 3e⁻ → MnO₂; Strongly alkaline: MnO₄⁻ + 1e⁻ → MnO₄²⁻' },
      { r: 'K₂Cr₂O₇ n-factor: 6 (acidic medium)', u: 'Potassium dichromate redox stoichiometry', s: 'Cr₂O₇²⁻ + 14 H⁺ + 6e⁻ → 2 Cr³⁺ + 7 H₂O (Equivalent weight = Molar Mass / 6 = 294 / 6 = 49 g/eq)' }
    ],
    C12: [
      { r: 'Primary Valence = Oxidation State ; Secondary Valence = Coordination Number', u: 'Werner\'s Coordination Theory', s: 'Primary valence is ionizable and satisfied by negative ions; Secondary valence is non-ionizable and directional (determines geometry)' },
      { r: 'Spectrochemical: I⁻ < Br⁻ < S²⁻ < Cl⁻ < F⁻ < OH⁻ < ox < H₂O < NCS⁻ < py ≈ NH₃ < en < NO₂⁻ < CN⁻ < CO', u: 'Ligand crystal field splitting power', s: 'Halides are weak-field (high spin, small Δ); Carbonyl and cyanide are strong-field (low spin, large Δ, electron pairing)' },
      { r: 'Δ_t = (4/9) Δ_o', u: 'Tetrahedral vs Octahedral crystal field splitting', s: 'Tetrahedral splitting is always smaller than octahedral; pairing energy P > Δ_t always ⟹ Tetrahedral complexes are ALMOST ALWAYS high-spin' },
      { r: 'Chelate effect increases complex stability by 10³ to 10⁵ times', u: 'Polydentate ligand thermodynamics', s: 'Ring formation by chelating ligands (en, ox²⁻, EDTA⁴⁻) increases entropy (ΔS > 0), conferring huge thermodynamic stability' }
    ],
    C13: [
      { r: 'Lassaigne\'s: N (Prussian Blue) ; S (Violet with nitroprusside) ; Halogens (AgX ppt)', u: 'Organic Extra Element Detection', s: 'Fusion with sodium metal converts covalent N, S, X into ionic NaCN, Na₂S, NaX' },
      { r: '% N (Kjeldahl) = 1.4 × M × V / w', u: 'Kjeldahl nitrogen estimation formula', s: 'M = molarity of acid, V = volume of acid neutralized by NH₃, w = mass of organic compound. FAILS for nitro, azo, and pyridine nitrogen!' },
      { r: '% N (Dumas) = (28 × V_STP) / (22400 × w) × 100%', u: 'Dumas nitrogen estimation formula', s: 'Universal method converting all nitrogen into N₂ gas measured over KOH nitrometer' },
      { r: 'R_f = (Distance travelled by substance) / (Distance travelled by solvent front)', u: 'Chromatography Retardation Factor', s: 'R_f is always a dimensionless fraction < 1' }
    ],
    C14: [
      { r: 'Stability: 3° > 2° > 1° > CH₃⁺ (Carbocations & Free Radicals)', u: 'Carbocation and Carbon Radical stability rank', s: 'Stabilized by combined +I inductive effect and hyperconjugation (proportional to total number of α-hydrogens)' },
      { r: 'Stability: CH₃⁻ > 1° > 2° > 3° (Carbanions)', u: 'Carbanion stability inversion', s: '+I alkyl groups push electron density into already negative carbon, destabilizing 3° carbanions' },
      { r: 'Electronegativity: sp (50% s) > sp² (33% s) > sp³ (25% s)', u: 'Carbon hybridization and acidity', s: 'Higher s-character holds electrons closer to nucleus ⟹ Terminal alkynes (sp C–H) are acidic' },
      { r: 'Acidity: −M > −I > +I > +M', u: 'Substituent effects on acid strength', s: 'Electron withdrawing groups stabilize conjugate base by dispersing negative charge; electron donating groups destabilize' }
    ],
    C15: [
      { r: 'Markovnikov: Electrophile (H⁺) adds to C with MORE hydrogens', u: 'Electrophilic addition to asymmetric alkenes', s: 'Proceeds via the MORE STABLE carbocation intermediate' },
      { r: 'Peroxide Effect (Anti-Markovnikov): ONLY works with HBr', u: 'Kharasch free-radical addition', s: 'Fails with HCl (H–Cl bond too strong for radical cleavage) and HI (I· radicals dimerize into I₂ instead of adding to alkene)' },
      { r: 'Ozonolysis: Cleave C=C double bond and attach =O to both carbons', u: 'Alkene oxidative/reductive cleavage', s: 'Reductive (Zn/H₂O) gives aldehydes/ketones; Oxidative (H₂O₂ or KMnO₄) oxidizes aldehydes to carboxylic acids' },
      { r: 'Terminal Alkynes: R–C≡C–H + NaNH₂ → R–C≡C⁻ Na⁺ + NH₃', u: 'Terminal alkyne acidic character', s: 'Gives red precipitate with ammoniacal cuprous chloride and white precipitate with Tollen\'s reagent' }
    ],
    C16: [
      { r: 'S_N1: 3° > 2° > 1° ; 2 Steps ; Carbocation ; Racemization', u: 'Unimolecular Nucleophilic Substitution', s: 'Favoured by polar protic solvents (H₂O, EtOH) and weak nucleophiles; rate depends only on alkyl halide [R–X]' },
      { r: 'S_N2: CH₃X > 1° > 2° > 3° ; 1 Step ; Transition State ; 100% Inversion', u: 'Bimolecular Nucleophilic Substitution', s: 'Favoured by polar aprotic solvents (acetone, DMF, DMSO) and strong nucleophiles; Walden inversion of stereocenter' },
      { r: 'Saytzeff: Major alkene is the MORE SUBSTITUTED (more stable) alkene', u: 'Dehydrohalogenation elimination rule', s: 'Elimination with small bases (alc. KOH). Bulky bases (t-BuO⁻K⁺) yield less substituted Hoffmann alkene' },
      { r: 'Chlorobenzene is 10⁴ times LESS reactive than haloalkanes to nucleophilic attack', u: 'Aryl halide inertness', s: 'Due to resonance (partial double bond C–Cl character), sp² carbon electronegativity, and repulsion by aromatic π-cloud' }
    ],
    C17: [
      { r: 'Lucas Test: 3° (immediate turbidity) ; 2° (5 min) ; 1° (only on heating)', u: 'Distinction of 1°, 2°, 3° Alcohols', s: 'Reagent: Anhydrous ZnCl₂ + Conc. HCl. Turbidity is due to insoluble alkyl chloride formation via carbocation' },
      { r: 'Steam Volatility: ortho-nitrophenol > para-nitrophenol', u: 'Phenol isomer physical properties', s: 'ortho-isomer has intramolecular H-bonding (chelation, compact, steam volatile); para-isomer has intermolecular H-bonding (associated, high bp)' },
      { r: 'Aldol requires α-H ; Cannizzaro requires NO α-H', u: 'Carbonyl condensation vs disproportionation', s: 'Aldol (dilute NaOH) forms β-hydroxyaldehyde; Cannizzaro (conc. 50% NaOH) disproportionates into alcohol + carboxylate salt' },
      { r: 'Haloform Test: Positive for CH₃–C=O and CH₃–CH(OH)– groups', u: 'Methyl carbonyl / methyl carbinol identification', s: 'Reagent: I₂ + NaOH. Gives yellow crystalline precipitate of iodoform (CHI₃, mp 119 °C)' },
      { r: 'Wolff-Kishner (NH₂NH₂ / KOH, basic) ; Clemmensen (Zn-Hg / conc. HCl, acidic)', u: 'Carbonyl >C=O reduction to methylene >CH₂', s: 'Use Wolff-Kishner for acid-sensitive substrates; use Clemmensen for base-sensitive substrates' }
    ],
    C18: [
      { r: 'Aqueous Basicity: 2° > 1° > 3° > NH₃ (Methyl series: 213)', u: 'Aliphatic amine aqueous basicity order', s: 'Governed by combined interplay of +I inductive effect, steric hindrance, and hydration enthalpy of conjugate ammonium cation' },
      { r: 'Aqueous Basicity: 2° > 3° > 1° > NH₃ (Ethyl series: 231)', u: 'Ethyl substituted amine basicity', s: 'Larger ethyl groups provide stronger inductive stabilization to 3° before steric crowding dominates' },
      { r: 'Gas Phase Basicity: 3° > 2° > 1° > NH₃', u: 'Amine gas phase basicity', s: 'In absence of water hydration, basicity strictly follows +I inductive order' },
      { r: 'Carbylamine Test: R–NH₂ + CHCl₃ + 3 KOH(alc) → R–NC + 3 KCl + 3 H₂O', u: 'Diagnostic test for Primary Amines', s: 'Extremely foul-smelling isocyanide produced ONLY by 1° aliphatic and 1° aromatic amines. Negative for 2° and 3°' },
      { r: 'Diazotization strictly at 0–5 °C (273–278 K)', u: 'Benzenediazonium chloride synthesis', s: 'Above 5 °C (278 K), benzenediazonium chloride hydrolyses rapidly into phenol with vigorous evolution of N₂ gas' }
    ],
    C19: [
      { r: 'Glucose fails Schiff\'s test & 2,4-DNP despite having −CHO', u: 'Open chain vs cyclic hemiacetal structure', s: 'The aldehyde group is engaged as an intramolecular cyclic hemiacetal (pyranose ring with C1–C5 ether bridge)' },
      { r: 'All essential α-amino acids are optically active EXCEPT Glycine', u: 'Amino acid stereochemistry', s: 'Glycine (H₂N–CH₂–COOH) has two hydrogen atoms on the α-carbon, making it achiral (no asymmetric center)' },
      { r: 'Isoelectric Point (pI): Zwitterion net charge is exactly ZERO', u: 'Amino acid electrophoresis', s: 'At pI, amino acid does not migrate in an electric field; solubility in water is minimum' },
      { r: 'Denaturation destroys 2°, 3°, 4° structures but NEVER 1° structure', u: 'Protein thermal/chemical denaturation', s: 'Covalent peptide bonds (−CONH−) remain intact; only fragile non-covalent hydrogen and ionic bonds unfold' },
      { r: 'DNA: A = T (2 H-bonds) ; G ≡ C (3 H-bonds)', u: 'Chargaff\'s base pairing rules', s: 'High G–C content confers higher thermal stability and higher melting temperature (T_m) to double-stranded DNA' }
    ],
    C20: [
      { r: 'Group I: Pb²⁺ (dil. HCl → white PbCl₂ ppt soluble in hot water)', u: 'Inorganic Cation Group I', s: 'Separation based on low solubility product of chlorides in cold water' },
      { r: 'Group II: Cu²⁺, Pb²⁺ (H₂S gas in dil. HCl acidic medium)', u: 'Inorganic Cation Group II', s: 'Dilute HCl common-ion effect suppresses S²⁻ ionization so only very sparingly soluble Gr II sulphides precipitate' },
      { r: 'Group III: Fe³⁺, Al³⁺ (NH₄OH in presence of NH₄Cl)', u: 'Inorganic Cation Group III', s: 'NH₄Cl common-ion effect suppresses OH⁻ concentration so only Gr III hydroxides precipitate, preventing Gr IV/V precipitation' },
      { r: 'Group IV: Zn²⁺, Ni²⁺, Mn²⁺ (H₂S gas in basic NH₄OH medium)', u: 'Inorganic Cation Group IV', s: 'Basic medium ionizes H₂S completely, producing high [S²⁻] required to precipitate Gr IV sulphides' },
      { r: 'KMnO₄ titration uses dil. H₂SO₄ ONLY (Never HCl or HNO₃)', u: 'Permanganate volumetric analysis', s: 'HCl is oxidized by KMnO₄ to poisonous Cl₂ gas (consuming excess titrant); HNO₃ is an oxidizing agent itself (interferes)' }
    ]
  });

  /* ==========================================================================
     GRAPHICAL CODEX (Slope, Area, Inflection, and Impossible Shapes)
     ========================================================================== */
  var GRAPHICAL_CODEX = {
    P1: [
      { name: 'T² vs L for Simple Pendulum', x: 'Length L (m)', y: 'T² (s²)', slope: '4π² / g  ⟹  g = 4π² / slope', area: 'No direct meaning', crit: 'Straight line passing through origin (0, 0)', trap: 'Graph of T vs L is a parabola opening toward L axis; ONLY T² vs L is linear' }
    ],
    P2: [
      { name: 'Position vs Time (x–t)', x: 'Time t (s)', y: 'Position x (m)', slope: 'Instantaneous Velocity v = dx/dt', area: 'No physical significance', crit: 'Extrema (dx/dt = 0) represent turnaround points where v = 0', trap: 'Vertical slope implies infinite velocity; loop back in time is impossible' },
      { name: 'Velocity vs Time (v–t)', x: 'Time t (s)', y: 'Velocity v (m/s)', slope: 'Instantaneous Acceleration a = dv/dt', area: 'Signed Area = Displacement; Unsigned Area = Total Distance', crit: 'Crosses horizontal axis where direction of motion reverses', trap: 'Area below t-axis is negative for displacement but MUST be added positive for distance' },
      { name: 'Acceleration vs Time (a–t)', x: 'Time t (s)', y: 'Acceleration a (m/s²)', slope: 'Jerk (da/dt)', area: 'Change in Velocity (Δv = v − u)', crit: 'Horizontal line for uniform acceleration', trap: 'Area under a-t graph gives change in velocity, NOT final velocity v' },
      { name: 'Velocity vs Position (v–x)', x: 'Position x (m)', y: 'Velocity v (m/s)', slope: 'dv/dx', area: 'No direct physical meaning', crit: 'Acceleration a = v (dv/dx), product of ordinate and slope', trap: 'Slope dv/dx is NOT acceleration; must multiply by velocity v' }
    ],
    P3: [
      { name: 'Static vs Kinetic Friction (f vs Applied Force F)', x: 'Applied Force F (N)', y: 'Frictional Force f (N)', slope: 'Slope = 1 (45° line) in static region', area: 'No direct meaning', crit: 'Peak at limiting friction f_s,max = μ_s N, then drops slightly to constant kinetic friction f_k = μ_k N', trap: 'Static friction is self-adjusting (f_s = F_applied) up to f_s,max; it is NOT always equal to μ_s N' }
    ],
    P4: [
      { name: 'Force vs Displacement (F–x)', x: 'Position x (m)', y: 'Force F (N)', slope: 'Force gradient dF/dx (spring constant k)', area: 'Work done W = ∫ F dx', crit: 'Area above x-axis is positive work; area below is negative work', trap: 'Area under F-x curve gives Work Done (or change in Kinetic Energy by Work-Energy theorem)' },
      { name: 'Potential Energy Curve (U–x)', x: 'Position x (m)', y: 'Potential Energy U (J)', slope: 'Negative of force: F = −dU/dx', area: 'No direct meaning', crit: 'Equilibrium where dU/dx = 0; Minima (d²U/dx² > 0) = Stable equilibrium; Maxima (d²U/dx² < 0) = Unstable', trap: 'Particle cannot exist in regions where Total Energy E < U(x) because Kinetic Energy cannot be negative' }
    ],
    P5: [
      { name: 'Angular Velocity vs Time (ω–t)', x: 'Time t (s)', y: 'Angular Velocity ω (rad/s)', slope: 'Angular acceleration α = dω/dt', area: 'Angular displacement θ = ∫ ω dt', crit: 'Direct rotational analogue of linear v-t graph', trap: 'Area gives angular displacement in radians, not degrees' }
    ],
    P6: [
      { name: 'Gravitational Field vs Distance (g vs r)', x: 'Distance from centre r (m)', y: 'Field g (m/s²)', slope: 'Field gradient', area: 'Gravitational Potential difference ΔV', crit: 'Inside Earth (r < R): g ∝ r (linear straight line); Outside (r ≥ R): g ∝ 1/r² (inverse square curve)', trap: 'Field is maximum at the surface (r = R); field at the centre (r = 0) is zero' }
    ],
    P7: [
      { name: 'Stress vs Strain Curve for Metal Wire', x: 'Strain (ΔL / L)', y: 'Stress (F / A)', slope: 'Young\'s Modulus Y in linear elastic region', area: 'Elastic strain energy stored per unit volume', crit: 'P = Proportional limit; E = Elastic limit (yield point); U = Ultimate tensile strength; B = Fracture point', trap: 'Area under entire curve up to fracture measures toughness; area up to elastic limit measures resilience' }
    ],
    P8: [
      { name: 'P–V Indicator Diagram (Isothermal vs Adiabatic)', x: 'Volume V (m³)', y: 'Pressure P (Pa)', slope: 'Isothermal slope = −P/V ; Adiabatic slope = −γ P/V', area: 'Work done W = ∫ P dV (Clockwise cycle = Net +W ; Anticlockwise = Net −W)', crit: 'Adiabatic curve is always γ times steeper than isothermal curve through same point', trap: 'In cyclic process, net work equals enclosed area; internal energy change ΔU_cycle = 0 strictly' }
    ],
    P11: [
      { name: 'Electric Field & Potential of Spherical Shell (E, V vs r)', x: 'Distance r from centre (m)', y: 'Field E (N/C) & Potential V (V)', slope: 'E = −dV/dr', area: 'No direct meaning', crit: 'Inside shell (r < R): E = 0 (horizontal axis), V = kQ/R (flat horizontal line); Outside (r ≥ R): E ∝ 1/r², V ∝ 1/r', trap: 'Inside conducting sphere, field is zero but potential is NON-ZERO and constant, equal to surface potential' }
    ],
    P16: [
      { name: 'Angle of Deviation vs Angle of Incidence (δ vs i for Prism)', x: 'Angle of incidence i (°)', y: 'Angle of deviation δ (°)', slope: 'dδ/di = 0 at minimum deviation', area: 'No direct meaning', crit: 'U-shaped curve with unique minimum δ_m where i = e and r₁ = r₂', trap: 'For any deviation δ > δ_m, there exist TWO distinct angles of incidence corresponding to ray reversibility' }
    ],
    P17: [
      { name: 'Stopping Potential vs Frequency (V₀ vs ν)', x: 'Frequency ν (Hz)', y: 'Stopping Potential V₀ (V)', slope: 'h / e (Universal slope for ALL metals!)', area: 'No direct meaning', crit: 'X-intercept = Threshold frequency ν₀ ; Y-intercept = −Φ / e', trap: 'Changing the metal shifts the line parallel to the right (higher work function), but the slope h/e NEVER changes' },
      { name: 'Photoelectric Current vs Collector Potential', x: 'Potential V (V)', y: 'Current I (μA)', slope: 'Dynamic conductance', area: 'No direct meaning', crit: 'Curves for different intensities at same frequency converge to the EXACT SAME stopping potential −V₀', trap: 'Doubling intensity doubles saturation current, but stopping potential remains strictly unchanged' }
    ],
    C2: [
      { name: 'Radial Probability Distribution 4πr²R² vs r', x: 'Radial distance r (pm)', y: 'Probability Density 4πr² R(r)²', slope: 'Probability gradient', area: 'Total probability ∫ 4πr² R² dr = 1', crit: 'Number of radial nodes = number of zero touches between origin and infinity (n − l − 1)', trap: 'For 1s orbital, R(r)² is maximum at nucleus (r=0), but radial probability 4πr²R² is ZERO at r=0 due to 4πr² factor' }
    ],
    C8: [
      { name: 'Concentration vs Time for Zero Order ([A] vs t)', x: 'Time t (s)', y: 'Concentration [A] (M)', slope: 'Slope = −k (negative constant)', area: 'No direct meaning', crit: 'Straight downward line reaching [A] = 0 at completion time t_comp = [A]₀ / k', trap: 'Only zero order gives a straight line on [A] vs t graph' },
      { name: 'ln[A] vs Time for First Order (ln[A] vs t)', x: 'Time t (s)', y: 'ln[A]', slope: 'Slope = −k ; If log₁₀[A] vs t, slope = −k / 2.303', area: 'No direct meaning', crit: 'Straight line with Y-intercept = ln[A]₀', trap: 'Graph of [A] vs t for 1st order is an exponential decay curve, NOT a straight line' },
      { name: 'Arrhenius Plot (ln k vs 1/T)', x: '1 / T (K⁻¹)', y: 'ln k', slope: 'Slope = −E_a / R ; If log₁₀ k vs 1/T, slope = −E_a / (2.303 R)', area: 'No direct meaning', crit: 'Steeper negative slope indicates larger activation energy E_a', trap: 'Catalyst lowers E_a, making the slope less steep without changing intercept ln A' }
    ]
  };

  NEET.GRAPHICAL_CODEX = GRAPHICAL_CODEX;

  /* ==========================================================================
     INTELLIGENT SUBTOPIC ENGINE (Extracts & Expands 4-6 Modules per Unit)
     ========================================================================== */
  NEET.SPEED_HACKS = SPEED_HACKS;
  NEET.getSubtopicModules = function (u) {
    if (!u) return [];
    var rawSyl = u.syl || '';
    /* Split syllabus on semicolons, periods, or major clauses */
    var parts = rawSyl.split(/[;.]/).map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 15; });
    if (parts.length < 3) {
      parts = rawSyl.split(/,\s*(?=[A-Z])/).map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 12; });
    }
    if (parts.length < 3) {
      parts = [rawSyl.slice(0, Math.floor(rawSyl.length/2)), rawSyl.slice(Math.floor(rawSyl.length/2))];
    }
    /* Bound to 4-5 modules */
    var modulesCount = Math.min(Math.max(parts.length, 3), 5);
    var modules = [];

    var formulas = u.formulas || [];
    var traps = u.traps || [];
    var factsT = (u.facts && u.facts.T) || [];
    var pairs = u.pairs || [];

    for (var i = 0; i < modulesCount; i++) {
      var heading = parts[i] || ('Core Module ' + (i + 1));
      if (heading.length > 60) heading = heading.slice(0, 58) + '...';

      var fSlice = formulas.filter(function (_, idx) { return idx % modulesCount === i; });
      var tSlice = traps.filter(function (_, idx) { return idx % modulesCount === i; });
      var pSlice = pairs.filter(function (_, idx) { return idx % modulesCount === i; });
      var factSlice = factsT.filter(function (_, idx) { return idx % modulesCount === i; });

      modules.push({
        idx: i + 1,
        title: (i + 1) + '. ' + heading,
        rawSyllabus: parts[i] || '',
        formulas: fSlice,
        traps: tSlice,
        pairs: pSlice,
        facts: factSlice
      });
    }

    return modules;
  };


  /* ==========================================================================
     HTML RENDERERS FOR SPEED HACKS, GRAPHS & TOPIC GUIDE
     ========================================================================== */

  NEET.renderSpeedHacksHtml = function (u) {
    var hacks = (NEET.SPEED_HACKS && NEET.SPEED_HACKS[u.id]) || [];
    if (!hacks.length) return '';

    var rows = hacks.map(function (h, i) {
      return '' +
        '<div class="speed-hack-card">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">' +
            '<span class="badge badge-lock" style="font-size:10px;">HACK #' + (i + 1) + '</span>' +
            '<span style="font-size:11px;color:var(--text-muted);font-weight:600;">' + h.u + '</span>' +
          '</div>' +
          '<div class="speed-rel recall-target">' + h.r + '</div>' +
          '<div class="speed-sc"><b>⚡ 10-Second Solving Shortcut:</b> <span class="recall-target">' + h.s + '</span></div>' +
        '</div>';
    }).join('');

    return '' +
      '<div class="speed-hacks-container" style="margin-top:14px;">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">' +
          '<div style="font-weight:800;font-size:12.5px;color:var(--blue-tx);text-transform:uppercase;font-family:var(--font-mono);">' +
            '⚡ High-Speed Proportionality & Ratio Shortcuts (NEET Speed-Hacks)' +
          '</div>' +
          '<span style="font-size:11px;color:var(--text-muted)">' + hacks.length + ' High-Yield Proportionality Rules</span>' +
        '</div>' +
        '<div class="speed-grid">' + rows + '</div>' +
      '</div>';
  };

  NEET.renderGraphsHtml = function (u) {
    var graphs = (NEET.GRAPHICAL_CODEX && NEET.GRAPHICAL_CODEX[u.id]) || [];
    if (!graphs.length) {
      /* Fallback graph cards for units without explicit graphs */
      if (u.subj.indexOf('Physics') !== -1 || u.subj.indexOf('Physical') !== -1) {
        graphs = [
          { name: u.name + ' Core Proportionality Curve', x: 'Primary Variable', y: 'Dependent Quantity', slope: 'Rate of change (dy/dx)', area: 'Accumulated product integral ∫ y dx', crit: 'Inflection points & asymptotes', trap: 'Non-linear variation cannot be approximated by straight-line interpolation' }
        ];
      }
    }
    if (!graphs.length) return '';

    var cards = graphs.map(function (g, i) {
      return '' +
        '<div class="graph-card">' +
          '<div class="graph-title">📈 Graph ' + (i + 1) + ': ' + g.name + '</div>' +
          '<div style="display:flex;gap:12px;margin:6px 0;font-size:12px;color:var(--text-muted);font-family:var(--font-mono);">' +
            '<span><b>X-Axis:</b> ' + g.x + '</span>' +
            '<span><b>Y-Axis:</b> ' + g.y + '</span>' +
          '</div>' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px;font-size:12px;">' +
            '<div style="background:var(--bg-card);padding:6px 8px;border-radius:4px;border-left:3px solid var(--accent);">' +
              '<b>Slope (dy/dx):</b> <span class="recall-target">' + g.slope + '</span>' +
            '</div>' +
            '<div style="background:var(--bg-card);padding:6px 8px;border-radius:4px;border-left:3px solid var(--blue-bd);">' +
              '<b>Area (∫ y dx):</b> <span class="recall-target">' + g.area + '</span>' +
            '</div>' +
          '</div>' +
          '<div style="margin-top:6px;font-size:11.5px;color:var(--text-muted);">' +
            '<b>Critical Points:</b> ' + g.crit +
          '</div>' +
          '<div class="f-bound" style="margin-top:6px;font-size:11.5px;padding:5px 8px;">' +
            '<b>⚠️ Common NTA Graph Trap:</b> <span class="recall-target">' + g.trap + '</span>' +
          '</div>' +
        '</div>';
    }).join('');

    return '' +
      '<div class="graph-section" style="margin-top:14px;">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">' +
          '<div style="font-weight:800;font-size:12.5px;color:var(--red-tx);text-transform:uppercase;font-family:var(--font-mono);">' +
            '📈 Graphical Analysis Masterclass (Slopes, Areas, Inflections & Impossible Shapes)' +
          '</div>' +
          '<span style="font-size:11px;color:var(--text-muted)">' + graphs.length + ' Critical Exam Curves</span>' +
        '</div>' +
        '<div class="graph-grid">' + cards + '</div>' +
      '</div>';
  };

  NEET.renderTopicGuideHtml = function (u) {
    var modules = NEET.getSubtopicModules(u);
    if (!modules.length) return '<div style="padding:20px;text-align:center;">No topic modules available.</div>';

    var html = modules.map(function (m) {
      /* Formulas in this module */
      var fHtml = (m.formulas || []).map(function (f) {
        return '' +
          '<div class="f-card" style="margin-bottom:8px;">' +
            '<div class="f-top"><span class="f-name">' + f.n + '</span><span class="f-unit">' + (f.u || 'Rule') + '</span></div>' +
            '<div class="f-eq recall-target">' + f.f + '</div>' +
            (f.s ? '<div class="f-sign"><b>Physical Meaning:</b> ' + f.s + '</div>' : '') +
            '<div class="f-bound"><b>Boundary Limit:</b> ' + f.b + '</div>' +
          '</div>';
      }).join('');

      /* Traps in this module */
      var tHtml = (m.traps || []).map(function (t) {
        return '' +
          '<div class="t-card" style="margin-bottom:8px;">' +
            '<div style="display:flex;justify-content:space-between;"><span class="badge badge-crit">' + (t.tag || 'NCERT Exception') + '</span></div>' +
            '<div class="t-stmt recall-target"><b>NCERT Line:</b> ' + t.t + '</div>' +
            '<div class="t-cause"><b>Why Students Lose Marks:</b> ' + t.c + '</div>' +
          '</div>';
      }).join('');

      /* Facts in this module */
      var factsHtml = (m.facts || []).map(function (fact) {
        return '<li style="margin-bottom:5px;line-height:1.45;"><span class="recall-target">' + fact + '</span></li>';
      }).join('');

      return '' +
        '<div class="topic-module-card" style="margin-bottom:20px;">' +
          '<div class="topic-module-header">' +
            '<div class="topic-module-title">' + m.title + '</div>' +
            '<span class="badge badge-mock">Subtopic #' + m.idx + '</span>' +
          '</div>' +
          '<div class="topic-syl-strip"><b>NCERT Syllabus Scope:</b> ' + m.rawSyllabus + '</div>' +

          (factsHtml ? '' +
            '<div style="margin:12px 0 10px;">' +
              '<div style="font-weight:700;font-size:12.5px;color:var(--accent);margin-bottom:6px;text-transform:uppercase;font-family:var(--font-mono);">' +
                '📖 Core Concepts & NCERT Must-Know Principles' +
              '</div>' +
              '<ul style="padding-left:18px;font-size:13px;color:var(--text-main);">' + factsHtml + '</ul>' +
            '</div>' : '') +

          (fHtml ? '' +
            '<div style="margin:12px 0 10px;">' +
              '<div style="font-weight:700;font-size:12.5px;color:var(--blue-tx);margin-bottom:6px;text-transform:uppercase;font-family:var(--font-mono);">' +
                '📐 Mathematical Relations, Equations & Sign Rules' +
              '</div>' +
              '<div class="formula-grid">' + fHtml + '</div>' +
            '</div>' : '') +

          (tHtml ? '' +
            '<div style="margin:12px 0 10px;">' +
              '<div style="font-weight:700;font-size:12.5px;color:var(--red-tx);margin-bottom:6px;text-transform:uppercase;font-family:var(--font-mono);">' +
                '🚨 Dangerous NTA Traps & Mistakes to Avoid in this Topic' +
              '</div>' +
              '<div class="trap-grid">' + tHtml + '</div>' +
            '</div>' : '') +
        '</div>';
    }).join('');

    return '' +
      '<div class="topic-guide-container">' +
        '<div class="sheet-unit-banner" style="margin-bottom:16px;">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">' +
            '<span class="badge badge-lock">EXHAUSTIVE TOPIC-BY-TOPIC CHAPTER MASTERCLASS</span>' +
            '<span style="font-size:12px;color:var(--text-muted)">' + modules.length + ' Core Subtopic Modules</span>' +
          '</div>' +
          '<div class="sheet-unit-title">' + u.id + ': ' + u.name + ' — Complete Study & Revision Guide</div>' +
          '<div class="sheet-unit-syl">This guide covers the entire official syllabus sequentially, integrating core theory, derivations, equations, NCERT exceptions, and NTA traps into one continuous textbook-grade short-notes manual.</div>' +
        '</div>' +
        html +
      '</div>';
  };

})();
