/* ==========================================================================
   DATA C2: Units C9–C14 (Inorganic C9–C12, Organic C13–C14)
   ========================================================================== */

NEET.reg({
  id:'C9',
  subj:'Inorganic Chemistry',
  type:'conc',
  name:'Classification of Elements and Periodicity in Properties',
  syl:'Modern periodic law and the present form of the periodic table, s, p, d and f block elements, periodic trends in properties of elements — atomic and ionic radii, ionization enthalpy, electron gain enthalpy, electronegativity, valence, oxidation states and chemical reactivity.',
  kw:['periodic law','isoelectronic','atomic radius','ionization enthalpy','electron gain enthalpy','electronegativity','pauling scale','amphoteric oxide','neutral oxide','diagonal relationship','shielding effect','effective nuclear charge'],
  formulas:[
    { n:'Modern Periodic Law (Moseley)', f:'√ν = a(Z − b)', u:'Hz¹/²', s:'ν = frequency of characteristic X-rays emitted; Z = atomic number; a, b = constants', b:'Fails if atomic mass (A) is used instead of atomic number (Z); isotopic mixtures show identical X-ray lines' },
    { n:'Effective Nuclear Charge (Slater)', f:'Z_eff = Z − σ', u:'elementary charge (e)', s:'Z = actual nuclear charge (protons); σ = shielding/screening constant from inner and same-shell electrons (s > p > d > f shielding)', b:'Single-value σ approximation breaks down for heavy elements where relativistic contraction of s-orbitals dominates' },
    { n:'Isoelectronic Ionic Radius Rule', f:'r_ion ∝ 1 / Z (for constant e⁻ count)', u:'pm', s:'Among species with identical total electrons (e.g. 10 e⁻: N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺), higher nuclear charge Z pulls the cloud closer', b:'Strictly invalid when comparing ions with different total electron counts or different principal quantum shells (n)' },
    { n:'Successive Ionization Enthalpies', f:'IE₁ < IE₂ < IE₃ (always Δ_i H > 0)', u:'kJ mol⁻¹', s:'Removing an electron from an increasingly positive ion requires progressively greater energy against stronger electrostatic attraction', b:'Cannot compare IE₁ of one element with IE₂ of another using simple across-period trends without checking electronic configuration after first removal' },
    { n:'Electron Gain Enthalpy vs Electron Affinity', f:'Δ_eg H = −E_a − (5/2)RT', u:'kJ mol⁻¹', s:'E_a is defined at 0 K; negative Δ_eg H means exothermic addition (Cl most negative = −349 kJ mol⁻¹), positive Δ_eg H means energy must be supplied (noble gases, Be, Mg, N)', b:'Second electron gain enthalpy (Δ_eg H₂) is ALWAYS positive (endothermic) even for oxygen and sulfur due to anion–electron electrostatic repulsion' },
    { n:'Pauling Electronegativity Scale', f:'|χ_A − χ_B| = 0.102 √(ΔE in kJ mol⁻¹)', u:'dimensionless (Pauling units)', s:'ΔE = E(A–B) − √[E(A–A)·E(B–B)] is bond resonance stabilization energy; F = 4.0, O = 3.5, N ≈ Cl = 3.0', b:'Electronegativity is NOT a fixed invariant atomic constant; it varies with hybridization (sp > sp² > sp³) and oxidation state of the element' },
    { n:'Mulliken Electronegativity Relation', f:'χ_P ≈ χ_M / 2.8 = (IE₁ + EA₁) / (2 × 2.8 in eV)', u:'eV (Mulliken)', s:'Average of first ionization energy and first electron affinity in eV divided by 2.8 converts Mulliken to Pauling scale', b:'Requires both IE and EA in gaseous isolated state; fails for noble gases where electron affinity is negative' },
    { n:'Group Valence & Maximum Oxidation State', f:'Valence = G (for s-block) or G − 10 / 18 − G (for p-block)', u:'dimensionless', s:'Group number G (1–18); group oxidation state equals number of valence electrons (ns + np)', b:'Breaks down for F (only −1, never +7), O (usually −2, +2 only in OF₂), and heavy p-block elements showing inert pair effect (G − 2 state)' }
  ],
  traps:[
    { t:'First ionization enthalpy of Beryllium is greater than that of Boron (IE₁: Be > B), and Magnesium > Aluminium.', c:'Be (1s² 2s²) has a fully-filled, more penetrating 2s subshell; B (1s² 2s² 2p¹) loses a less-penetrating 2p electron that is well-shielded by the 2s² core.', tag:'NCERT Exception' },
    { t:'First ionization enthalpy of Nitrogen is greater than that of Oxygen (IE₁: N > O), and Phosphorus > Sulfur.', c:'N (2s² 2p³) has a stable symmetrical half-filled 2p³ subshell with maximum exchange energy, whereas O (2s² 2p⁴) experiences inter-electronic spin-pair repulsion in the doubly occupied 2p orbital.', tag:'NCERT Exception' },
    { t:'Chlorine has a more negative electron gain enthalpy (−349 kJ mol⁻¹) than Fluorine (−328 kJ mol⁻¹), and Sulfur more negative than Oxygen.', c:'Fluorine and Oxygen have extremely compact n = 2 valence shells where strong inter-electronic repulsion among existing 2p electrons resists the incoming electron.', tag:'NCERT Exception' },
    { t:'Formation of oxide ion O²⁻(g) from O(g) is net endothermic despite Oxygen being the second most electronegative element.', c:'While O(g) + e⁻ → O⁻(g) is exothermic (Δ_eg H₁ = −141 kJ mol⁻¹), adding a second electron to negatively charged O⁻ faces intense electrostatic repulsion (Δ_eg H₂ = +780 kJ mol⁻¹).', tag:'Sign Convention' },
    { t:'Noble gases, Beryllium, Magnesium, and Nitrogen have positive (endothermic) first electron gain enthalpies.', c:'Adding an electron requires forcing it into a higher principal energy level (noble gases) or a higher subshell (Be/Mg 2p/3p) or disrupting a stable half-filled 2p³ subshell (N).', tag:'NCERT Exception' },
    { t:'Van der Waals radius of Neon is significantly larger than the covalent radius of Fluorine across Period 2.', c:'Noble gases do not form covalent molecules, so their non-bonded van der Waals radii (internuclear half-distance of touching atoms) are measured instead of overlapping covalent radii.', tag:'Boundary Failure' },
    { t:'Atomic radius of Gallium (135 pm) is slightly smaller than that of Aluminium (143 pm) despite being below it in Group 13.', c:'Gallium follows the 3d transition series; its ten 3d¹⁰ inner electrons provide very poor shielding of the +10 nuclear charge increase, pulling valence electrons inward (d-block contraction).', tag:'Order Inversion' },
    { t:'Al₂O₃, ZnO, BeO, Ga₂O₃, SnO, SnO₂, PbO, PbO₂, As₂O₃ and Sb₂O₃ are amphoteric oxides, whereas CO, NO and N₂O are neutral oxides.', c:'Amphoteric oxides have intermediate electronegativity and react with both acids and alkalis to form salts; CO, NO, and N₂O lack acidic or basic anhydride character with water/acids/bases.', tag:'Reagent Trap' },
    { t:'Zinc has a much higher first ionization enthalpy than Copper and Gallium at the end of the 3d series.', c:'Zinc has a completely filled pseudo-noble-gas configuration [Ar] 3d¹⁰ 4s² with no unpaired electrons and high nuclear charge.', tag:'NCERT Exception' }
  ],
  flows:[
    { t:'Chemical Nature of Element Oxides across the Periodic Table', root:'Identify position and oxidation state of element M in oxide M_xO_y',
      br:[
        { l:'Extreme left (s-block except Be) or low OS d-block (MnO, CrO)', n:['High electropositivity','Ionic oxide lattice','Basic oxide (reacts with H⁺; forms OH⁻ in water)'] },
        { l:'Borderline metalloid / diagonal / intermediate OS (BeO, Al₂O₃, ZnO, Ga₂O₃, SnO, PbO, Cr₂O₃)', n:['Polar covalent character','Amphoteric oxide','Dissolves in both HCl (as M^n+) and NaOH (as oxyanion)'] },
        { l:'Right p-block non-metals or high OS transition metals (Mn₂O₇, CrO₃, V₂O₅, Cl₂O₇, SO₃)', n:['High electronegativity / high polarizing power','Covalent oxide','Acidic oxide (reacts with OH⁻)'] },
        { l:'Low-valent C and N sub-oxides: CO, NO, N₂O only', n:['Non-salt-forming covalent molecules','Neutral oxide','No reaction with litmus, HCl, or NaOH'] }
      ] },
    { t:'Determining Period, Block & Group from Atomic Number Z', root:'Given Atomic Number Z (1 to 118)',
      br:[
        { l:'Z = 58–71 or Z = 90–103', n:['f-Block (Inner Transition)','Z = 58–71 → Period 6, Group 3 (Lanthanoids)','Z = 90–103 → Period 7, Group 3 (Actinoids)'] },
        { l:'Write [Noble Gas] configuration: He(2), Ne(10), Ar(18), Kr(36), Xe(54), Rn(86)', n:['Period = n of outermost s-shell (noble gas period + 1)','Last e⁻ in ns¹⁻² → s-block, Group = n_s electrons (He is Z=2 → Group 18)','Last e⁻ in (n−1)d¹⁻¹⁰ → d-block, Group = n_s + (n−1)d electrons','Last e⁻ in np¹⁻⁶ → p-block, Group = 12 + n_p electrons'] }
      ] },
    { t:'Second-Period Ionization & Electron Gain Enthalpy Anomaly Algorithm', root:'Period 2 Elements: Li, Be, B, C, N, O, F, Ne',
      br:[
        { l:'First Ionization Enthalpy (IE₁) order', n:['Base trend increases left → right due to Z_eff','Swap Be & B (2s² penetration) and swap N & O (2p³ half-filled)','Final IE₁: Li < B < Be < C < O < N < F < Ne'] },
        { l:'Second Ionization Enthalpy (IE₂) order', n:['Remove 1 e⁻ first: Li⁺(1s²), Be⁺(2s¹), B⁺(2s²), C⁺(2p¹), N⁺(2p²), O⁺(2p³), F⁺(2p⁴)','Now B⁺ has 2s² > C⁺(2p¹) and O⁺ has 2p³ > F⁺(2p⁴); Li⁺ is 1s² highest','Final IE₂: Be < C < B < N < F < O < Ne < Li'] },
        { l:'Electron Gain Enthalpy (−Δ_eg H exothermic magnitude)', n:['Ne (2p⁶) and Be (2s²) and N (2p³) have positive Δ_eg H','Exothermic magnitude: Li < B < C < O < F; across periods Cl > F > Br > I'] }
      ] }
  ],
  lab:[
    { t:'Litmus & Acid-Base Test for Period 3 Oxides', d:'Na₂O and MgO dissolve in water to turn red litmus blue (strongly basic); Al₂O₃ is insoluble in water but dissolves in both hot HCl and NaOH (amphoteric); SiO₂, P₄O₁₀, SO₃ and Cl₂O₇ are acidic (turn blue litmus red).' },
    { t:'Halogen Displacement Reactivity Series in Aqueous Solution', d:'Cl₂(aq) oxidizes Br⁻ to reddish-brown Br₂ and I⁻ to violet I₂ (in CCl₄ layer); Br₂ oxidizes I⁻ but not Cl⁻, confirming oxidizing power F₂ > Cl₂ > Br₂ > I₂.' },
    { t:'Alkali Metal Reactivity with Cold Water', d:'Reactivity increases down Group 1 as IE₁ decreases: Li reacts gently without melting, Na melts into a silvery globule and hisses, K catches lilac flame immediately.' },
    { t:'Amphoteric Dissolution of ZnO and Al₂O₃ in Excess NaOH', d:'Gelatinous white precipitates of Zn(OH)₂ and Al(OH)₃ redissolve in excess aqueous NaOH to give clear colourless solutions of sodium zincate Na₂[Zn(OH)₄] and sodium aluminate Na[Al(OH)₄].' }
  ],
  pairs:[
    { g:'IUPAC Systematic Nomenclature Digit → Root & Official Symbol (Z > 100)', a:'Z = 101 → Unnilunium (Unu)', b:'Mendelevium (Md)' },
    { g:'IUPAC Systematic Nomenclature Digit → Root & Official Symbol (Z > 100)', a:'Z = 103 → Unniltrium (Unt)', b:'Lawrencium (Lr)' },
    { g:'IUPAC Systematic Nomenclature Digit → Root & Official Symbol (Z > 100)', a:'Z = 104 → Unnilquadium (Unq)', b:'Rutherfordium (Rf)' },
    { g:'IUPAC Systematic Nomenclature Digit → Root & Official Symbol (Z > 100)', a:'Z = 106 → Unnilhexium (Unh)', b:'Seaborgium (Sg)' },
    { g:'IUPAC Systematic Nomenclature Digit → Root & Official Symbol (Z > 100)', a:'Z = 107 → Unnilseptium (Uns)', b:'Bohrium (Bh)' },
    { g:'IUPAC Systematic Nomenclature Digit → Root & Official Symbol (Z > 100)', a:'Z = 118 → Ununoctium (Uuo)', b:'Oganesson (Og)' },
    { g:'Mendeleev Predicted Element / Periodic Landmark → Modern Identity', a:'Eka-aluminium predicted by Mendeleev', b:'Gallium (Ga)' },
    { g:'Mendeleev Predicted Element / Periodic Landmark → Modern Identity', a:'Eka-silicon predicted by Mendeleev', b:'Germanium (Ge)' },
    { g:'Mendeleev Predicted Element / Periodic Landmark → Modern Identity', a:'Eka-boron predicted by Mendeleev', b:'Scandium (Sc)' },
    { g:'Mendeleev Predicted Element / Periodic Landmark → Modern Identity', a:'Eka-manganese predicted by Mendeleev', b:'Technetium (Tc)' },
    { g:'Oxide Example → Acid-Base Classification', a:'N₂O, NO, and CO', b:'Neutral oxides (neither acidic nor basic)' },
    { g:'Oxide Example → Acid-Base Classification', a:'Al₂O₃, BeO, ZnO, Ga₂O₃, and SnO₂', b:'Amphoteric oxides (react with both acids and bases)' },
    { g:'Oxide Example → Acid-Base Classification', a:'Na₂O, K₂O, Cs₂O, and BaO', b:'Strongly basic ionic oxides' },
    { g:'Oxide Example → Acid-Base Classification', a:'Cl₂O₇, Mn₂O₇, SO₃, and N₂O₅', b:'Strongly acidic covalent oxides' },
    { g:'Periodic Property Extremum → Element Identity', a:'Element with highest first ionization enthalpy (IE₁)', b:'Helium (He)' },
    { g:'Periodic Property Extremum → Element Identity', a:'Element with most negative electron gain enthalpy (Δ_eg H)', b:'Chlorine (Cl, −349 kJ mol⁻¹)' },
    { g:'Periodic Property Extremum → Element Identity', a:'Element with highest Pauling electronegativity (χ = 4.0)', b:'Fluorine (F)' },
    { g:'Periodic Property Extremum → Element Identity', a:'Main-group element with lowest ionization enthalpy & largest radius (non-radioactive)', b:'Caesium (Cs)' },
    { g:'Diagonal Relationship Pair → Shared Anomalous Property', a:'Lithium (Li) and Magnesium (Mg)', b:'Form normal oxides (Li₂O, MgO) and nitrides (Li₃N, Mg₃N₂) on heating in air; carbonates decompose on heating' },
    { g:'Diagonal Relationship Pair → Shared Anomalous Property', a:'Beryllium (Be) and Aluminium (Al)', b:'Form covalent bridged chlorides (BeCl₂, Al₂Cl₆), amphoteric oxides, and are rendered passive by conc. HNO₃' },
    { g:'Diagonal Relationship Pair → Shared Anomalous Property', a:'Boron (B) and Silicon (Si)', b:'Both form acidic oxides (B₂O₃, SiO₂) and volatile hydrolysable covalent hydrides' },
    { g:'Diagonal Relationship Pair → Shared Anomalous Property', a:'Carbon (C) and Phosphorus (P)', b:'Both show high electronegativity and form multiple bonds with non-metals' }
  ],
  orders:[
    { q:'Decreasing ionic radius of 10-electron isoelectronic species', s:['N³⁻','O²⁻','F⁻','Na⁺','Mg²⁺'], sep:'>', why:'All have 10 electrons; as nuclear charge Z increases from 7 (N) to 12 (Mg), Z_eff increases and radius shrinks continuously.' },
    { q:'Increasing first ionization enthalpy (IE₁) across Period 2', s:['Li','B','Be','C','O'], sep:'<', why:'Be (2s²) > B (2p¹) due to s-orbital penetration; later N (2p³) > O (2p⁴) due to half-filled subshell stability.' },
    { q:'Increasing first ionization enthalpy (IE₁) of N, O, F, and Ne', s:['O','N','F','Ne'], sep:'<', why:'N > O due to half-filled 2p³ stability, while F and Ne have much higher Z_eff.' },
    { q:'Decreasing negative magnitude of electron gain enthalpy (−Δ_eg H) among halogens', s:['Cl','F','Br','I'], sep:'>', why:'Cl (−349 kJ mol⁻¹) > F (−328 kJ mol⁻¹) > Br (−325 kJ mol⁻¹) > I (−295 kJ mol⁻¹) because small 2p shell of F causes e⁻–e⁻ repulsion.' },
    { q:'Decreasing negative magnitude of electron gain enthalpy (−Δ_eg H) in Group 16 chalcogens', s:['S','Se','Te','Po','O'], sep:'>', why:'Oxygen (−141 kJ mol⁻¹) has the LEAST exothermic electron gain enthalpy in Group 16 due to compact 2p inter-electronic repulsion; S (−200 kJ mol⁻¹) is highest.' },
    { q:'Increasing acidic strength of Period 3 oxides in their highest oxidation states', s:['Na₂O','MgO','Al₂O₃','SiO₂','P₄O₁₀'], sep:'<', why:'Across a period from left to right, electronegativity of central atom increases and oxide character shifts: strongly basic → basic → amphoteric → weakly acidic → acidic.' }
  ],
  facts:{
    T:[
      'In the modern periodic table, elements with atomic numbers Z = 58 to 71 (Lanthanoids) all belong to Period 6 and Group 3.',
      'Helium (1s²) has the highest first ionization enthalpy of any element in the periodic table, even though it is placed in Group 18 with p-block elements.',
      'The second electron gain enthalpy of oxygen (O⁻(g) + e⁻ → O²⁻(g)) is positive (+780 kJ mol⁻¹) because energy is required to overcome electrostatic repulsion.',
      'Among the chalcogens (Group 16), Oxygen has the least negative (least exothermic) first electron gain enthalpy (−141 kJ mol⁻¹), coming even after Polonium.',
      'Beryllium and Magnesium show positive (endothermic) electron gain enthalpies because the incoming electron must enter a higher-energy np subshell.',
      'Diagonal similarity between Li and Mg arises because their polarizing powers (charge / ionic radius²) are nearly identical.',
      'Across a period, maximum chemical reactivity is observed at the two extremes (Group 1 by electron loss and Group 17 by electron gain) and is lowest in the centre.',
      'For any given element, the radii of its species always follow the order: anionic radius > neutral covalent radius > cationic radius (e.g., I⁻ > I > I⁺).',
      'Shielding (screening) power of orbitals in a given principal shell follows the order s > p > d > f due to decreasing radial penetration toward the nucleus.',
      'Both Cl₂O₇ and Mn₂O₇ are strongly acidic oxides in which the central atom is in the +7 oxidation state.',
      'The element with Z = 114 has the IUPAC systematic name Ununquadium (Uuq) and official name Flerovium (Fl), belonging to Group 14 and Period 7.',
      'Second ionization enthalpy of Lithium is extraordinarily high because the second electron must be removed from a stable 1s² helium-like core.'
    ],
    F:[
      'Fluorine has the most negative electron gain enthalpy in the periodic table because it is the most electronegative element.',
      'First ionization enthalpy increases strictly monotonically across Period 2 from Li to Ne without any inversions.',
      'Addition of the second electron to an oxygen atom to complete its stable noble-gas octet (O²⁻) is strongly exothermic.',
      'NitrogenO₂ (NO₂) and Carbon dioxide (CO₂) are neutral oxides just like CO, NO, and N₂O.',
      'In the isoelectronic series N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, the Al³⁺ ion has the largest ionic radius.',
      'Gallium has a larger atomic radius than Aluminium because a new principal quantum shell (n = 4) is added.',
      'Electronegativity of carbon is a fixed constant equal to 2.5 regardless of whether carbon is sp³, sp², or sp hybridized.',
      'In Group 16, the negative magnitude of electron gain enthalpy decreases regularly down the group as O > S > Se > Te > Po.',
      'Beryllium oxide (BeO) is a strongly basic oxide like BaO and dissolves readily in water to form a strong alkali.',
      'Elements with atomic numbers Z = 58 to 71 belong to the d-block and are spread across Groups 3 to 16.',
      'First ionization enthalpy of Oxygen is higher than that of Nitrogen because Oxygen has a higher nuclear charge (Z = 8 vs Z = 7).',
      'The second ionization enthalpy of Boron is lower than the second ionization enthalpy of Carbon.'
    ]
  },
  mcq:[
    { q:'The correct order of ionic radii for the isoelectronic species F⁻, O²⁻, Na⁺ and Mg²⁺ is:', o:['O²⁻ > F⁻ > Na⁺ > Mg²⁺','Mg²⁺ > Na⁺ > F⁻ > O²⁻','O²⁻ > Na⁺ > F⁻ > Mg²⁺','F⁻ > O²⁻ > Na⁺ > Mg²⁺'], a:0, tag:'Concept Trap', sol:['All four ions contain 10 electrons (isoelectronic).','Nuclear charge Z: O(8) < F(9) < Na(11) < Mg(12).','Higher Z pulls the 10-electron cloud closer → O²⁻ > F⁻ > Na⁺ > Mg²⁺.'] },
    { q:'Which of the following represents the correct order of first ionization enthalpy (IE₁) for Period 2 elements?', o:['Li < B < Be < C < O < N < F < Ne','Li < Be < B < C < N < O < F < Ne','Li < B < Be < C < N < O < F < Ne','Li < Be < B < C < O < N < F < Ne'], a:0, tag:'NCERT Exception', sol:['General trend increases across Period 2 due to increasing Z_eff.','Anomaly 1: Be (1s²2s²) > B (1s²2s²2p¹) due to fully-filled penetrating 2s² orbital.','Anomaly 2: N (2p³) > O (2p⁴) due to stable half-filled 2p³ subshell.'] },
    { q:'What is the correct order of SECOND ionization enthalpy (IE₂) for C, N, O and F?', o:['C < N < F < O','C < N < O < F','C < O < N < F','N < C < F < O'], a:0, tag:'Order Inversion', sol:['For IE₂, remove one electron first to get unipositive ions: C⁺(2p¹), N⁺(2p²), O⁺(2p³), F⁺(2p⁴).','O⁺ now has a stable half-filled 2p³ configuration, so its ionization energy jumps above F⁺(2p⁴).','Hence IE₂ order is C < N < F < O.'] },
    { q:'Which pair of oxides contains ONE amphoteric oxide and ONE neutral oxide respectively?', o:['Al₂O₃ and N₂O','BeO and SO₂','CO and ZnO','NO and CO'], a:0, tag:'Reagent Trap', sol:['Amphoteric oxides: BeO, Al₂O₃, Ga₂O₃, ZnO, SnO, PbO.','Neutral oxides: CO, NO, N₂O (only these three common ones).','Thus Al₂O₃ (amphoteric) and N₂O (neutral) in that exact order is correct.'] },
    { q:'The correct order of negative electron gain enthalpy (exothermic magnitude) for F, Cl, O and S is:', o:['Cl > F > S > O','F > Cl > O > S','Cl > S > F > O','F > O > Cl > S'], a:0, tag:'NCERT Exception', sol:['Halogens (Group 17) have much more negative Δ_eg H than chalcogens (Group 16).','Within Group 17: Cl (−349 kJ/mol) > F (−328 kJ/mol); within Group 16: S (−200 kJ/mol) > O (−141 kJ/mol) due to 2p–2p repulsion in n=2.','Overall exothermic magnitude: Cl > F > S > O.'] },
    { q:'An element has atomic number Z = 117. Its IUPAC systematic name, block, and group number are respectively:', o:['Ununseptium, p-block, Group 17','Ununseptium, d-block, Group 7','Unnilseptium, p-block, Group 17','Ununhexium, p-block, Group 16'], a:0, tag:'Concept Trap', sol:['Digits 1-1-7 → un-un-sept + ium = Ununseptium (Uus, officially Tennessine Ts).','Z = 118 is the Group 18 noble gas (Oganesson), so Z = 117 is one column before it: Period 7, p-block, Group 17 (halogen family).'] },
    { q:'Identify the element with atomic number Z = 64 (Gadolinium, [Xe] 4f⁷ 5d¹ 6s²). Its correct period, group and block are:', o:['Period 6, Group 3, f-block','Period 6, Group 4, d-block','Period 7, Group 3, f-block','Period 6, Group 10, f-block'], a:0, tag:'Boundary Failure', sol:['Z = 58 to 71 are the 4f-inner transition elements (Lanthanoids).','All lanthanoids belong to Period 6, Group 3, and the f-block regardless of having one 5d¹ electron.'] },
    { q:'For an element X, the successive ionization enthalpies (in kJ mol⁻¹) are: IE₁ = 578, IE₂ = 1817, IE₃ = 2745, IE₄ = 11577, IE₅ = 14842. Which group and chloride formula correspond to X?', o:['Group 13, XCl₃','Group 2, XCl₂','Group 14, XCl₄','Group 1, XCl'], a:0, tag:'Calculation Trap', sol:['Notice the huge jump (≈ 8832 kJ mol⁻¹) between IE₃ and IE₄.','This indicates 3 valence electrons are removed relatively easily, and the 4th electron comes from a noble-gas core.','3 valence electrons → Group 13 (Aluminium) → forms XCl₃.'] },
    { q:'Why is the formation of O²⁻(g) from O(g) endothermic even though O²⁻ has a stable neon-like 1s² 2s² 2p⁶ octet?', o:['Addition of the second electron to negatively charged O⁻ faces strong electrostatic repulsion that outweighs Δ_eg H₁','The first electron gain enthalpy of oxygen is itself positive','Oxygen has a completely filled 2p subshell in its ground state','O²⁻ ion is larger than the parent oxygen atom'], a:0, tag:'Sign Convention', sol:['O(g) + e⁻ → O⁻(g) has Δ_eg H₁ = −141 kJ mol⁻¹ (exothermic).','O⁻(g) + e⁻ → O²⁻(g) has Δ_eg H₂ = +780 kJ mol⁻¹ (endothermic due to anion–electron repulsion).','Net ΔH = −141 + 780 = +639 kJ mol⁻¹ > 0.'] },
    { q:'Which of the following sets contains ONLY amphoteric oxides?', o:['ZnO, Al₂O₃, BeO, SnO','Al₂O₃, MgO, ZnO, PbO','BeO, BaO, Al₂O₃, Ga₂O₃','NO, CO, Al₂O₃, ZnO'], a:0, tag:'Reagent Trap', sol:['ZnO, Al₂O₃, BeO, Ga₂O₃, SnO, SnO₂, PbO, PbO₂ are amphoteric.','MgO and BaO are basic; NO and CO are neutral.'] },
    { q:'Among the Group 16 elements O, S, Se, Te and Po, which element has the LEAST negative (least exothermic) first electron gain enthalpy?', o:['Oxygen (O)','Polonium (Po)','Tellurium (Te)','Sulfur (S)'], a:0, tag:'NCERT Exception', sol:['NCERT Table: Δ_eg H (kJ mol⁻¹) for Group 16 is S (−200), Se (−195), Te (−190), Po (−174), and O (−141).','Because of extreme 2p–2p repulsion in the tiny n = 2 shell, Oxygen is at the very bottom (least exothermic) of the entire group.'] },
    { q:'In which of the following pairs of elements are their atomic radii almost equal, or the heavier element is slightly smaller?', o:['Al and Ga','Na and K','C and Si','N and P'], a:0, tag:'NCERT Exception', sol:['r(Al) = 143 pm while r(Ga) = 135 pm.','Gallium has 10 inner 3d electrons (3d¹⁰) that shield the nuclear charge (+31) poorly, causing d-block contraction.'] },
    { q:'Diagonal relationship in the periodic table is observed between:', o:['Li–Mg, Be–Al, and B–Si','Li–Na, Be–Mg, and B–Al','Na–Ca, Mg–Sc, and Al–Ti','Li–Be, Na–Mg, and K–Ca'], a:0, tag:'Concept Trap', sol:['Period 2 elements (Li, Be, B) resemble diagonally adjacent Period 3 elements (Mg, Al, Si) due to similar charge/size ratio (polarizing power) and electronegativity.'] },
    { q:'Which of the following species has a POSITIVE first electron gain enthalpy (Δ_eg H₁ > 0)?', o:['Nitrogen (N)','Carbon (C)','Boron (B)','Lithium (Li)'], a:0, tag:'NCERT Exception', sol:['Nitrogen (1s² 2s² 2p³) has a stable half-filled 2p³ configuration; adding an electron introduces pairing repulsion, making Δ_eg H₁ positive (≈ +31 kJ mol⁻¹), along with Be, Mg, and Noble gases.'] },
    { q:'The correct order of electronegativity on the Pauling scale for C, N, Si and P is:', o:['Si < P < C < N','Si < C < P < N','P < Si < C < N','C < N < Si < P'], a:0, tag:'Order Inversion', sol:['Pauling electronegativity values: Si (1.8) < P (2.1) < C (2.5) < N (3.0).','Electronegativity increases across a period and decreases down a group.'] }
  ],
  gens:[
    function(R){
      var zList = [
        { z:101, sys:'Unnilunium (Unu)', grp:3, blk:'f' },
        { z:104, sys:'Unnilquadium (Unq)', grp:4, blk:'d' },
        { z:106, sys:'Unnilhexium (Unh)', grp:6, blk:'d' },
        { z:109, sys:'Unnilennium (Une)', grp:9, blk:'d' },
        { z:112, sys:'Ununbium (Uub)', grp:12, blk:'d' },
        { z:114, sys:'Ununquadium (Uuq)', grp:14, blk:'p' },
        { z:115, sys:'Ununpentium (Uup)', grp:15, blk:'p' },
        { z:116, sys:'Ununhexium (Uuh)', grp:16, blk:'p' },
        { z:117, sys:'Ununseptium (Uus)', grp:17, blk:'p' },
        { z:118, sys:'Ununoctium (Uuo)', grp:18, blk:'p' }
      ];
      var item = R.pick(zList);
      var ans = item.grp;
      var d = [item.grp - 10 > 0 ? item.grp - 10 : item.grp + 10, item.grp === 18 ? 8 : item.grp + 1, item.grp === 3 ? 5 : item.grp - 1];
      return {
        q:'An element has atomic number Z = ' + item.z + ' (' + item.sys + '). Which IUPAC Group number (1–18) does it belong to in the modern periodic table?',
        ans:ans, d:d, u:'',
        tag:'Calculation Trap',
        sol:[
          'Period 7 ends at the noble gas Oganesson (Z = 118, Group 18).',
          item.z >= 104 ? 'For Z = 104–118, Group number = Z − 100 = ' + item.z + ' − 100 = ' + item.grp + '.' : 'Z = 89–103 are Actinoids, all placed in Group 3.',
          'Therefore, Z = ' + item.z + ' is in Group ' + ans + ' (' + item.blk + '-block).'
        ]
      };
    },
    function(R){
      var cases = [
        { v:1, i1:496, i2:4562, i3:6910, i4:9543, grp:1, ox:'M₂O' },
        { v:2, i1:738, i2:1451, i3:7733, i4:10540, grp:2, ox:'MO' },
        { v:3, i1:578, i2:1817, i3:2745, i4:11577, grp:13, ox:'M₂O₃' },
        { v:4, i1:786, i2:1577, i3:3232, i4:4356, i5:16091, grp:14, ox:'MO₂' }
      ];
      var c = R.pick(cases);
      var jit = R.int(-15, 15);
      var s1 = c.i1 + jit, s2 = c.i2 + jit, s3 = c.i3 + jit, s4 = c.i4 + jit;
      var jumpTxt = c.v === 4 ? (', IE₅ = ' + (c.i5 + jit)) : '';
      return {
        q:'Successive ionization enthalpies (in kJ mol⁻¹) of a Period 3 main-group element M are: IE₁ = ' + s1 + ', IE₂ = ' + s2 + ', IE₃ = ' + s3 + ', IE₄ = ' + s4 + jumpTxt + '. What is the number of valence electrons in M?',
        ans:c.v, d:[c.v === 1 ? 2 : 1, c.v === 3 ? 4 : 3, c.v === 2 ? 5 : 2], u:'valence e⁻',
        tag:'Calculation Trap',
        sol:[
          'Locate the largest sudden jump between IE_n and IE_(n+1) where the noble-gas core is broken.',
          'Here the massive jump occurs after removing ' + c.v + ' electron(s).',
          'Number of valence electrons = ' + c.v + ' (Group ' + c.grp + ', highest oxide ' + c.ox + ').'
        ]
      };
    },
    function(R){
      var ea = R.int(120, 340);
      var degh1 = -ea;
      var degh2 = R.int(650, 840);
      var net = degh1 + degh2;
      return {
        q:'For a gaseous divalent non-metal atom X(g), the first electron gain enthalpy Δ_eg H₁ is ' + degh1 + ' kJ mol⁻¹ and the second electron gain enthalpy Δ_eg H₂ is +' + degh2 + ' kJ mol⁻¹. What is the net enthalpy change ΔH (in kJ mol⁻¹) for X(g) + 2e⁻ → X²⁻(g)?',
        ans:net, d:[degh2 - degh1, -net, degh1 - degh2], u:'kJ mol⁻¹',
        tag:'Sign Convention',
        sol:[
          'Step 1: X(g) + e⁻ → X⁻(g), Δ_eg H₁ = ' + degh1 + ' kJ mol⁻¹',
          'Step 2: X⁻(g) + e⁻ → X²⁻(g), Δ_eg H₂ = +' + degh2 + ' kJ mol⁻¹',
          'By Hess\'s Law, ΔH_net = Δ_eg H₁ + Δ_eg H₂ = (' + degh1 + ') + (' + degh2 + ') = +' + net + ' kJ mol⁻¹.'
        ]
      };
    }
  ]
});

NEET.reg({
  id:'C10',
  subj:'Inorganic Chemistry',
  type:'conc',
  name:'p-Block Elements (Groups 13 to 18)',
  syl:'General Introduction: Electronic configuration and general trends in physical and chemical properties of elements across the periods and down the groups; unique behaviour of the first element in each group (Group 13 to Group 18).',
  kw:['p-block','inert pair effect','catenation','anomalous behaviour','boron family','carbon family','pnictogens','chalcogens','halogens','noble gases','back bonding','hydride boiling point','lewis acidity'],
  formulas:[
    { n:'p-Block Valence Shell Configuration', f:'ns² np¹⁻⁶ (except He = 1s²)', u:'—', s:'Group number = 12 + number of np electrons; maximum group oxidation state = (number of ns + np electrons)', b:'He (1s²) has no p-orbitals; F (Group 17) never shows positive oxidation states in stable isolated compounds; O shows +2 only in OF₂' },
    { n:'Inert Pair Effect Oxidation State Rule', f:'Stable lower OS = (Group OS − 2) down Groups 13, 14, 15', u:'oxidation state units', s:'Relativistic contraction and poor shielding of inner (n−1)d¹⁰ and (n−2)f¹⁴ electrons tightly bind the ns² pair to the nucleus: Tl⁺ > Tl³⁺, Pb²⁺ > Pb⁴⁺, Bi³⁺ > Bi⁵⁺', b:'Consequently Tl³⁺, Pb⁴⁺ (PbO₂) and Bi⁵⁺ act as strong oxidizing agents, whereas Al³⁺, Ge⁴⁺, Sn⁴⁺ are stable in the group oxidation state' },
    { n:'Maximum Covalency of 2nd-Period vs Heavier p-Block', f:'Covalency_max(n=2) = 4; Covalency_max(n≥3) = 6 (or 7/8)', u:'bonds / electron pairs', s:'2nd-period elements (B, C, N, O, F) have only four valence orbitals (one 2s + three 2p) and NO 2d orbitals (so [BF₄]⁻ exists, [BF₆]³⁻ does not; NCl₅ does not exist)', b:'Nitrogen can have a maximum covalency of 4 (as in NH₄⁺ or N₂O₅), even when its formal oxidation state is +5' },
    { n:'Group 13 Irregular Ionization Enthalpy Trend', f:'IE₁ order: B > Tl > Ga > Al > In', u:'kJ mol⁻¹', s:'Instead of decreasing smoothly down Group 13, Ga > Al due to 3d¹⁰ poor shielding (d-contraction) and Tl > In (and Ga) due to 4f¹⁴ + 5d¹⁰ lanthanoid contraction', b:'Remember mnemonic "B-Tl-Ga-Al-In" (801 > 589 > 579 > 577 > 558 kJ mol⁻¹); standard monotonic decrease completely fails in Group 13' },
    { n:'Boron Trihalide Lewis Acidity & pπ–pπ Back-Bonding', f:'Lewis Acid Strength: BF₃ < BCl₃ < BBr₃ < BI₃', u:'—', s:'Filled 2p orbital of F overlaps effectively with empty 2p orbital of B (2pπ–2pπ back-bonding), reducing electron deficiency on B; 3p/4p/5p overlap with 2p(B) is poor due to size mismatch', b:'Directly opposite to the electronegativity trend (F > Cl > Br > I) which students wrongly apply to predict BF₃ as strongest acid' },
    { n:'Hydrogen Halide & Chalcogen Hydride Acid Strength', f:'Acid strength (K_a): HF ≪ HCl < HBr < HI and H₂O < H₂S < H₂Se < H₂Te', u:'pK_a', s:'Down the group, H–E bond length increases and bond dissociation enthalpy decreases drastically, dominating over electronegativity differences', b:'Applies in aqueous/protic dissociation; bond polarity follows the reverse order (HF > HCl > HBr > HI)' },
    { n:'Bond Dissociation Enthalpy of Halogens (X₂)', f:'Δ_bond H°: Cl₂ (242.6) > Br₂ (192.8) > F₂ (158.8) > I₂ (151.1)', u:'kJ mol⁻¹', s:'F–F bond is anomalously weak because the very short bond length causes strong lone-pair–lone-pair (2p–2p) repulsion between the six non-bonding electron pairs', b:'Despite having lower bond dissociation enthalpy than Cl₂ and Br₂, F₂ is still the strongest oxidizing agent due to very high hydration enthalpy of F⁻ and low F–F bond energy' },
    { n:'Group 15 Hydride Basicity & Bond Angle Trend', f:'Basicity & Bond Angle: NH₃ (107.8°) > PH₃ (93.6°) > AsH₃ (91.8°) > SbH₃ (91.3°) > BiH₃', u:'degrees / pK_b', s:'In NH₃ the lone pair resides in a directional sp³ orbital on a small N atom; in PH₃ to BiH₃ (Drago\'s rule) bonding uses almost pure p-orbitals (≈90°) and the lone pair stays in a spherical s-orbital', b:'Boiling point does NOT follow this monotonic order: PH₃ < AsH₃ < NH₃ < SbH₃ < BiH₃ (NH₃ is below SbH₃ due to high molar mass of SbH₃!)' }
  ],
  traps:[
    { t:'Boiling point order of Group 15 hydrides is PH₃ < AsH₃ < NH₃ < SbH₃ < BiH₃, whereas melting point has NH₃ highest.', c:'NH₃ forms intermolecular hydrogen bonds so its BP (239.7 K) exceeds PH₃ and AsH₃, but the large molecular mass and van der Waals forces of SbH₃ (254.6 K) and BiH₃ surpass NH₃\'s weak H-bonding.', tag:'NCERT Exception' },
    { t:'Boron trifluoride (BF₃) is the WEAKEST Lewis acid among boron trihalides (BF₃ < BCl₃ < BBr₃ < BI₃).', c:'Effective 2p(F) → 2p(B) pπ–pπ back-donation partially fills Boron\'s vacant 2p orbital; larger Cl(3p), Br(4p), and I(5p) orbitals cannot overlap effectively with 2p(B).', tag:'Order Inversion' },
    { t:'Carbon shows the highest catenation tendency in the periodic table (C ≫ Si > Ge ≈ Sn), while Lead (Pb) does not show catenation.', c:'C–C single bond enthalpy (348 kJ mol⁻¹) is exceptionally high compared to Si–Si (297 kJ mol⁻¹), Ge–Ge (260 kJ mol⁻¹), and Sn–Sn (240 kJ mol⁻¹).', tag:'Concept Trap' },
    { t:'Elemental Nitrogen exists as a diatomic gas (N≡N) whereas Phosphorus, Arsenic, and Antimony exist as discrete tetrahedral E₄ molecules.', c:'Small Nitrogen forms strong pπ–pπ multiple bonds (N≡N bond enthalpy = 941.4 kJ mol⁻¹), while single N–N bond (159 kJ mol⁻¹) is weak due to lone-pair repulsion; P (3p) cannot form stable pπ–pπ bonds, preferring four P–P single bonds (213 kJ mol⁻¹).', tag:'NCERT Exception' },
    { t:'Thallium(III) iodide (TlI₃) does NOT contain Tl³⁺ and I⁻ ions; it is actually an isomorphous thallium(I) triiodide salt, Tl⁺(I₃⁻).', c:'Due to the strong inert pair effect in Period 6, Tl³⁺ is a powerful oxidizing agent that oxidizes I⁻ to I₃⁻ and is reduced to the stable Tl⁺ (+1) state.', tag:'Reagent Trap' },
    { t:'SiCl₄ readily hydrolyses in water to give silicic acid Si(OH)₄, whereas CCl₄ is completely immiscible and inert toward hydrolysis.', c:'Silicon has vacant low-lying 3d orbitals that accept lone pairs from nucleophilic H₂O molecules; Carbon (n = 2) lacks 2d orbitals and cannot expand its octet beyond 4.', tag:'Boundary Failure' },
    { t:'Fluorine (F₂) is the strongest oxidizing halogen in aqueous solution even though Chlorine (Cl) has a more negative electron gain enthalpy.', c:'Standard electrode potential E°(X₂/X⁻) depends on the Born-Haber sum: ½Δ_diss H°(F₂) is very low (+79.4 kJ mol⁻¹) and Δ_hyd H°(F⁻) is extremely exothermic (−515 kJ mol⁻¹), making E°(F₂/F⁻) = +2.87 V.', tag:'Concept Trap' },
    { t:'AlCl₃ exists as a covalent bridged dimer Al₂Cl₆ in vapour phase and non-polar solvents, but forms [Al(H₂O)₆]³⁺ in water.', c:'Anhydrous AlCl₃ is electron-deficient (6 valence e⁻ on Al) and achieves an octet via 3-centre-4-electron Cl→Al coordinate bridges; in water, high hydration enthalpy of Al³⁺ cleaves the covalent bonds.', tag:'Boundary Failure' },
    { t:'Aluminium and Boron are rendered passive (unreactive) by concentrated nitric acid (conc. HNO₃).', c:'Concentrated HNO₃ is a strong oxidizing agent that immediately forms a thin, coherent, impervious protective layer of oxide (Al₂O₃) on the metal surface.', tag:'Practical Trap' }
  ],
  flows:[
    { t:'Unique Behaviour of 2nd-Period Elements (B, C, N, O, F) vs Heavier Congeners', root:'Why does the 1st member of Groups 13–17 behave anomalously? (Small size, high Z_eff/EN, high IE, ABSENCE of d-orbitals)',
      br:[
        { l:'Covalency Limit (No 2d orbitals)', n:['Max covalency = 4 for B, C, N, O, F','Forms [BF₄]⁻, CCl₄ (no hydrolysis), NF₃, OF₂','Heavier congeners expand octet to 5 or 6: [AlF₆]³⁻, [SiF₆]²⁻, PCl₅, SF₆, IF₇'] },
        { l:'π-Bonding Type (2pπ–2pπ vs dπ–pπ)', n:['2nd period forms strong pπ–pπ multiple bonds: C=C, C≡C, N≡N, C=O, O=O','CO₂ is a monomeric gas (O=C=O); N₂ is an inert gas','3rd period avoids pπ–pπ: SiO₂ is a 3D giant covalent network; P₄ and S₈ are catenated rings/cages; P/S form dπ–pπ bonds (POCl₃, SO₂)'] },
        { l:'Hydride H-Bonding Anomaly (NH₃, H₂O, HF)', n:['High electronegativity of N, O, F creates intermolecular H-bonds','Abnormally high melting & boiling points compared to PH₃, H₂S, HCl','HF forms H-bonded zig-zag chains and acid salt K⁺[HF₂]⁻ (HCl₂⁻ does not exist)'] }
      ] },
    { t:'Inert Pair Effect & Redox Stability down Groups 13, 14, and 15', root:'Compare Group Oxidation State (G) vs Lower Oxidation State (G − 2) down the group',
      br:[
        { l:'Group 13 (+3 vs +1): B, Al, Ga, In, Tl', n:['Stability of +3: Al³⁺ > Ga³⁺ > In³⁺ > Tl³⁺','Stability of +1: Al⁺ < Ga⁺ < In⁺ < Tl⁺','Tl⁺ is stable in aqueous solution; Tl³⁺ salts are strong oxidizing agents'] },
        { l:'Group 14 (+4 vs +2): C, Si, Ge, Sn, Pb', n:['Stability of +4: Ge⁴⁺ > Sn⁴⁺ > Pb⁴⁺','Stability of +2: Ge²⁺ < Sn²⁺ < Pb²⁺','Sn²⁺ is a strong reducing agent (prefers +4), whereas Pb⁴⁺ (PbO₂) is a strong oxidizing agent (prefers +2); PbI₄ does not exist'] },
        { l:'Group 15 (+5 vs +3): N, P, As, Sb, Bi', n:['Stability of +5 decreases down: P⁵⁺ > As⁵⁺ > Sb⁵⁺ > Bi⁵⁺','Bi³⁺ is the only stable cationic state of bismuth; BiF₅ is the only known pentahalide of Bi due to F\'s extreme oxidizing power'] }
      ] },
    { t:'Systematic Trends in Hydrides of Groups 15, 16, and 17 (EH_n)', root:'Evaluate Hydride Property down a p-Block Group (E = N→Bi, O→Te, F→I)',
      br:[
        { l:'E–H Bond Length increases → Bond Dissociation Enthalpy decreases', n:['Thermal stability DECREASES down the group (NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃; HF > HCl > HBr > HI)','Reducing character INCREASES down the group (BiH₃, H₂Te, HI are strong reducing agents)','Brønsted Acid Strength INCREASES down the group (HF < HCl < HBr < HI; H₂O < H₂S < H₂Se < H₂Te)'] },
        { l:'Lone-pair availability & s-character on central atom (Group 15)', n:['Lewis basicity DECREASES down the group: NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃','H–E–H bond angle DECREASES down the group: NH₃ (107.8°) > PH₃ (93.6°) > AsH₃ (91.8°) > SbH₃ (91.3°)'] }
      ] }
  ],
  lab:[
    { t:'Borax Bead & Borate Green-Edged Flame Test (Group 13)', d:'Borates heated with conc. H₂SO₄ and ethanol evolve volatile triethyl borate B(OC₂H₅)₃, which burns with a characteristic green-edged flame.' },
    { t:'Hydrolysis of White fumes from BCl₃ / SiCl₄ vs Inert CCl₄', d:'BCl₃ and SiCl₄ fume in moist air releasing white fumes of HCl due to rapid nucleophilic attack of H₂O on vacant 2p(B) or 3d(Si) orbitals; CCl₄ forms a separate lower immiscible layer with water without any HCl evolution.' },
    { t:'Amphoterism of Aluminium with Aqueous HCl and NaOH', d:'Al dissolves in both dil. HCl and aq. NaOH evolving colourless H₂ gas (2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂↑), whereas Boron does not react with non-oxidizing acids or cold alkalis.' },
    { t:'Oxidizing Action of PbO₂ and Reducing Action of SnCl₂ (Group 14)', d:'SnCl₂ reduces HgCl₂ first to white precipitate of Hg₂Cl₂ and then to grey metallic Hg (Sn²⁺ → Sn⁴⁺); PbO₂ oxidizes conc. HCl to Cl₂ gas (Pb⁴⁺ → Pb²⁺).' }
  ],
  pairs:[
    { g:'p-Block Family → General Valence Configuration & Chalcogen/Pnictogen Name', a:'Group 13 (Boron family / Icosagens)', b:'ns² np¹ (Group oxidation state +3, lower state +1)' },
    { g:'p-Block Family → General Valence Configuration & Chalcogen/Pnictogen Name', a:'Group 14 (Carbon family / Crystallogens)', b:'ns² np² (Group oxidation state +4, lower state +2)' },
    { g:'p-Block Family → General Valence Configuration & Chalcogen/Pnictogen Name', a:'Group 15 (Nitrogen family / Pnictogens)', b:'ns² np³ (Oxidation states −3 to +5)' },
    { g:'p-Block Family → General Valence Configuration & Chalcogen/Pnictogen Name', a:'Group 16 (Oxygen family / Chalcogens — ore-forming)', b:'ns² np⁴ (Oxidation states −2 to +6)' },
    { g:'p-Block Family → General Valence Configuration & Chalcogen/Pnictogen Name', a:'Group 17 (Halogens — salt-producing)', b:'ns² np⁵ (Oxidation states −1, and +1, +3, +5, +7 for Cl, Br, I)' },
    { g:'2nd-Period Element vs 3rd-Period Congener → Structural Contrast', a:'CO₂ vs SiO₂', b:'Monomeric linear gas (pπ–pπ double bonds) vs high-melting 3D covalent network solid of SiO₄ tetrahedra' },
    { g:'2nd-Period Element vs 3rd-Period Congener → Structural Contrast', a:'N₂ vs P₄ (white phosphorus)', b:'Diatomic gas with N≡N triple bond (941 kJ/mol) vs strained tetrahedral P₄ solid (60° bond angles)' },
    { g:'2nd-Period Element vs 3rd-Period Congener → Structural Contrast', a:'O₂ vs S₈ (rhombic sulfur)', b:'Paramagnetic diatomic gas with pπ–pπ bond vs crown-shaped puckered 8-membered ring solid' },
    { g:'2nd-Period Element vs 3rd-Period Congener → Structural Contrast', a:'CCl₄ vs SiCl₄ towards water', b:'Completely inert to hydrolysis (no 2d orbitals) vs rapidly hydrolysed to Si(OH)₄ and 4HCl (via 3d orbitals)' },
    { g:'Non-Existent / Unstable Species → Exact Chemical Reason', a:'[BF₆]³⁻ and [CF₆]²⁻ do not exist', b:'Boron and Carbon belong to Period 2 (n = 2) and lack 2d orbitals to expand covalency beyond 4' },
    { g:'Non-Existent / Unstable Species → Exact Chemical Reason', a:'NCl₅ and NF₅ do not exist', b:'Nitrogen has only four valence orbitals (one 2s + three 2p), limiting its maximum covalency to 4' },
    { g:'Non-Existent / Unstable Species → Exact Chemical Reason', a:'PbI₄ does not exist at room temperature', b:'Strong inert pair effect makes Pb⁴⁺ a powerful oxidant that spontaneously oxidizes I⁻ to I₂, giving PbI₂' },
    { g:'Non-Existent / Unstable Species → Exact Chemical Reason', a:'SCl₆ and SH₆ do not exist (though SF₆ is inert)', b:'Steric crowding around S and insufficient electronegativity of Cl/H to contract sulfur\'s 3d orbitals for sp³d² hybridization' },
    { g:'Xenon Fluoride / Oxide → VSEPR Hybridization & Molecular Geometry', a:'XeF₂ (2 bond pairs + 3 lone pairs)', b:'sp³d hybridization → Linear geometry' },
    { g:'Xenon Fluoride / Oxide → VSEPR Hybridization & Molecular Geometry', a:'XeF₄ (4 bond pairs + 2 lone pairs)', b:'sp³d² hybridization → Square planar geometry' },
    { g:'Xenon Fluoride / Oxide → VSEPR Hybridization & Molecular Geometry', a:'XeF₆ (6 bond pairs + 1 lone pair)', b:'sp³d³ hybridization → Distorted octahedral (capped octahedron)' },
    { g:'Xenon Fluoride / Oxide → VSEPR Hybridization & Molecular Geometry', a:'XeO₃ (3 σ-bonds + 1 lone pair + 3 dπ–pπ bonds)', b:'sp³ hybridization → Trigonal pyramidal geometry' },
    { g:'Xenon Fluoride / Oxide → VSEPR Hybridization & Molecular Geometry', a:'XeOF₄ (5 σ-bonds + 1 lone pair + 1 dπ–pπ bond)', b:'sp³d² hybridization → Square pyramidal geometry' }
  ],
  orders:[
    { q:'Decreasing first ionization enthalpy (IE₁) of Group 13 elements', s:['B','Tl','Ga','Al','In'], sep:'>', why:'B (801) > Tl (589, 4f¹⁴ lanthanoid contraction) > Ga (579, 3d¹⁰ d-block contraction) > Al (577) > In (558 kJ mol⁻¹).' },
    { q:'Increasing Lewis acid strength of boron trihalides (BX₃)', s:['BF₃','BCl₃','BBr₃','BI₃'], sep:'<', why:'2p(F) → 2p(B) pπ–pπ back-bonding is strongest in BF₃ and weakens from Cl(3p) to I(5p) due to orbital size mismatch.' },
    { q:'Increasing boiling point of Group 15 hydrides (EH₃)', s:['PH₃','AsH₃','NH₃','SbH₃','BiH₃'], sep:'<', why:'NH₃ (239.7 K) is higher than PH₃ (185.5 K) and AsH₃ (210.6 K) due to H-bonding, but lower than SbH₃ (254.6 K) and BiH₃ (290 K) due to strong van der Waals dispersion forces in heavy hydrides.' },
    { q:'Increasing boiling point of Group 16 hydrides (H₂E)', s:['H₂S','H₂Se','H₂Te','H₂O'], sep:'<', why:'Extensive 3D intermolecular hydrogen bonding places H₂O (373 K) at the very top, while H₂S < H₂Se < H₂Te increases with molar mass.' },
    { q:'Decreasing bond dissociation enthalpy of halogen molecules (X₂)', s:['Cl₂','Br₂','F₂','I₂'], sep:'>', why:'F₂ (158.8 kJ mol⁻¹) is weaker than Cl₂ (242.6) and Br₂ (192.8) due to severe inter-electronic lone-pair repulsion across the short F–F bond.' },
    { q:'Decreasing stability of +1 oxidation state in Group 13 ions', s:['Tl⁺','In⁺','Ga⁺','Al⁺'], sep:'>', why:'Due to the inert pair effect, reluctance of ns² electrons to participate in bonding increases down the group: Al⁺ < Ga⁺ < In⁺ < Tl⁺.' }
  ],
  facts:{
    T:[
      'In Group 13, atomic radius of Gallium (135 pm) is smaller than that of Aluminium (143 pm), so the overall atomic radius order is B < Ga < Al < In < Tl.',
      'Nitrogen has a maximum covalency of 4 (for example in NH₄⁺ and N₂O₅) because it lacks 2d orbitals, even though its oxidation state in HNO₃ is +5.',
      'Carbon tetrachloride (CCl₄) does not undergo hydrolysis with water because Carbon has no vacant d-orbitals to accept a lone pair from H₂O.',
      'Among Group 14 elements, catenation tendency follows the order C ≫ Si > Ge ≈ Sn, and Lead (Pb) does not show catenation.',
      'Sn²⁺ salts act as reducing agents while Pb⁴⁺ compounds (such as PbO₂) act as strong oxidizing agents due to the inert pair effect.',
      'The boiling point of NH₃ is higher than PH₃ and AsH₃, but lower than SbH₃ and BiH₃.',
      'The melting point of NH₃ (195.2 K) is the highest among all Group 15 hydrides because solid NH₃ packs with strong hydrogen bonds.',
      'Oxygen shows a positive oxidation state of +2 in OF₂ and +1 in O₂F₂ because Fluorine is more electronegative than Oxygen.',
      'SF₆ is kinetically inert toward hydrolysis at room temperature because six F atoms sterically shield the sulfur atom from nucleophilic attack by water.',
      'Hydrogen fluoride (HF) forms the stable hydrogen-bonded bifluoride anion [HF₂]⁻ in KHF₂, whereas HCl, HBr, and HI do not form analogous KHX₂ salts.',
      'For the same halogen X, acidic strength of oxoacids increases with oxidation state of the halogen: HOCl < HClO₂ < HClO₃ < HClO₄.',
      'Helium has the lowest boiling point (4.2 K) of any known substance and is used in MRI superconducting magnets and deep-sea diving gas mixtures (due to low solubility in blood).'
    ],
    F:[
      'BF₃ is the strongest Lewis acid among the boron trihalides because Fluorine is the most electronegative halogen.',
      'First ionization enthalpy in Group 13 decreases smoothly down the group in the order B > Al > Ga > In > Tl.',
      'Boiling point of Group 15 hydrides follows the exact same order as Group 16 hydrides, with NH₃ having the highest boiling point in its group.',
      'Bond dissociation enthalpy of halogens decreases regularly down Group 17 as F₂ > Cl₂ > Br₂ > I₂.',
      'Nitrogen forms stable pentahalides such as NCl₅ and NF₅ just like Phosphorus forms PCl₅ and PF₅.',
      'In Group 14, Pb⁴⁺ is more stable than Pb²⁺, so PbCl₂ is a strong oxidizing agent that readily converts to PbCl₄.',
      'Acidic strength of hydrogen halides in water decreases down the group in the order HF > HCl > HBr > HI.',
      'Basic strength of Group 15 hydrides increases down the group from NH₃ to BiH₃ as atomic size increases.',
      'In dinitrogen pentoxide (N₂O₅), the covalency of each nitrogen atom is 5.',
      'Boron forms stable hydrated trivalent cations [B(H₂O)₆]³⁺ in aqueous solution just like Aluminium forms [Al(H₂O)₆]³⁺.',
      'Catenation tendency of Silicon is greater than that of Carbon because Silicon has vacant 3d orbitals.',
      'Thallium is most stable in its +3 oxidation state in aqueous solution, making TlCl a strong oxidizing agent.'
    ]
  },
  mcq:[
    { q:'The correct order of atomic radii of Group 13 elements is:', o:['B < Ga < Al < In < Tl','B < Al < Ga < In < Tl','B < Al < In < Ga < Tl','B < Ga < Al < Tl < In'], a:0, tag:'NCERT Exception', sol:['Across Group 13, r(pm): B(88), Ga(135), Al(143), In(167), Tl(170).','Presence of ten 3d electrons in Ga (3d¹⁰) with poor shielding causes Ga to shrink below Al.'] },
    { q:'Which of the following correctly represents the decreasing order of first ionization enthalpy (IE₁) for Group 13 elements?', o:['B > Tl > Ga > Al > In','B > Al > Ga > In > Tl','B > Ga > Al > In > Tl','B > Tl > Al > Ga > In'], a:0, tag:'Order Inversion', sol:['IE₁ (kJ mol⁻¹): B (801) > Tl (589) > Ga (579) > Al (577) > In (558).','d-block contraction raises Ga above Al, and 4f¹⁴ lanthanoid contraction raises Tl above Ga, Al and In.'] },
    { q:'The Lewis acid strength of boron trihalides follows the order:', o:['BF₃ < BCl₃ < BBr₃ < BI₃','BF₃ > BCl₃ > BBr₃ > BI₃','BCl₃ > BF₃ > BBr₃ > BI₃','BI₃ < BBr₃ < BF₃ < BCl₃'], a:0, tag:'Order Inversion', sol:['In BX₃, pπ–pπ back-donation from filled halogen np orbital to empty boron 2p orbital is strongest for 2p(F)–2p(B) and weakest for 5p(I)–2p(B).','Stronger back-bonding reduces electron deficiency on Boron, making BF₃ the weakest Lewis acid.'] },
    { q:'What are the oxidation state and maximum covalency of Nitrogen in N₂O₅?', o:['Oxidation state = +5, Covalency = 4','Oxidation state = +5, Covalency = 5','Oxidation state = +4, Covalency = 4','Oxidation state = +3, Covalency = 4'], a:0, tag:'Boundary Failure', sol:['Let OS of N in N₂O₅ be x: 2x + 5(−2) = 0 → x = +5.','Because Nitrogen (Period 2) has only one 2s and three 2p orbitals (no 2d), it forms 4 covalent bonds per N atom (one coordinate N→O, one N=O double bond, one N–O–N bridge) → covalency = 4.'] },
    { q:'Which of the following is the CORRECT order of boiling points for Group 15 hydrides?', o:['PH₃ < AsH₃ < NH₃ < SbH₃ < BiH₃','PH₃ < AsH₃ < SbH₃ < BiH₃ < NH₃','NH₃ < PH₃ < AsH₃ < SbH₃ < BiH₃','BiH₃ < SbH₃ < AsH₃ < PH₃ < NH₃'], a:0, tag:'NCERT Exception', sol:['NCERT Table: PH₃ (185.5 K) < AsH₃ (210.6 K) < NH₃ (239.7 K) < SbH₃ (254.6 K) < BiH₃ (290 K).','Unlike H₂O and HF which top their groups, NH₃\'s weaker H-bonding puts it in the middle — above AsH₃ but below heavier SbH₃.'] },
    { q:'Why is Fluorine (F₂) a stronger oxidizing agent than Chlorine (Cl₂) in aqueous solution, despite Chlorine having a more negative electron gain enthalpy?', o:['F₂ has a low F–F bond dissociation enthalpy and F⁻ has a very high hydration enthalpy','Fluorine has a larger atomic radius than Chlorine','Fluorine has vacant 2d orbitals that stabilize the transition state','Chlorine does not dissolve in water'], a:0, tag:'Concept Trap', sol:['Oxidizing power in water is governed by E°(X₂/X⁻), which depends on ½Δ_diss H° + Δ_eg H° + Δ_hyd H°.','Low Δ_diss H°(F₂ = 158.8 kJ/mol) and huge exothermic Δ_hyd H°(F⁻ = −515 kJ/mol) far outweigh the 21 kJ/mol difference in Δ_eg H°.'] },
    { q:'The correct order of bond dissociation enthalpy for the halogens is:', o:['Cl₂ > Br₂ > F₂ > I₂','F₂ > Cl₂ > Br₂ > I₂','Cl₂ > F₂ > Br₂ > I₂','I₂ > Br₂ > Cl₂ > F₂'], a:0, tag:'NCERT Exception', sol:['Δ_bond H° (kJ mol⁻¹): Cl–Cl (242.6) > Br–Br (192.8) > F–F (158.8) > I–I (151.1).','Strong lone-pair–lone-pair repulsion between small F atoms weakens the F–F bond below Br–Br.'] },
    { q:'Which statement correctly compares the redox behaviour of Sn²⁺ and Pb⁴⁺?', o:['Sn²⁺ is a reducing agent while Pb⁴⁺ is an oxidizing agent','Both Sn²⁺ and Pb⁴⁺ are strong oxidizing agents','Sn²⁺ is an oxidizing agent while Pb⁴⁺ is a reducing agent','Both Sn²⁺ and Pb⁴⁺ are strong reducing agents'], a:0, tag:'Concept Trap', sol:['In Group 14, stability of +4 state decreases (Ge⁴⁺ > Sn⁴⁺ > Pb⁴⁺) and +2 state increases (Ge²⁺ < Sn²⁺ < Pb²⁺) due to the inert pair effect.','Thus Sn²⁺ readily oxidizes to more stable Sn⁴⁺ (reducing agent), whereas Pb⁴⁺ readily reduces to more stable Pb²⁺ (oxidizing agent).'] },
    { q:'Why does Nitrogen exist as a diatomic gas (N₂) while Phosphorus exists as tetrahedral P₄ at room temperature?', o:['Small N atom forms strong pπ–pπ multiple bonds, whereas larger P atom cannot form effective 3pπ–3pπ bonds and prefers P–P single bonds','Phosphorus has higher electronegativity than Nitrogen','N–N single bond is stronger than P–P single bond','Nitrogen utilizes dπ–pπ bonding in N₂'], a:0, tag:'Concept Trap', sol:['N≡N triple bond (941.4 kJ/mol) is very strong via 2pπ–2pπ overlap.','For P, 3p orbitals are too diffuse for pπ–pπ overlap, while P–P single bond (213 kJ/mol) is stronger than N–N single bond (159 kJ/mol, weakened by lone-pair repulsion).'] },
    { q:'Which of the following halides is NOT hydrolysed by water under ordinary conditions?', o:['CCl₄ and SF₆','SiCl₄ and BCl₃','PCl₃ and PCl₅','SiF₄ and AlCl₃'], a:0, tag:'Boundary Failure', sol:['CCl₄ cannot be hydrolysed because Carbon lacks vacant 2d orbitals.','SF₆ is kinetically inert to hydrolysis because the small S atom is sterically surrounded by 6 F atoms, blocking H₂O attack.'] },
    { q:'What is the correct order of thermal stability and reducing character of Group 15 hydrides?', o:['Thermal stability: NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃; Reducing character: NH₃ < PH₃ < AsH₃ < SbH₃ < BiH₃','Thermal stability: NH₃ < PH₃ < AsH₃ < SbH₃ < BiH₃; Reducing character: NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃','Both thermal stability and reducing character decrease from NH₃ to BiH₃','Both thermal stability and reducing character increase from NH₃ to BiH₃'], a:0, tag:'Concept Trap', sol:['Down Group 15, E–H bond length increases and bond dissociation enthalpy decreases from NH₃ (389 kJ/mol) to BiH₃.','Weaker E–H bond means lower thermal stability and easier release of hydrogen (stronger reducing agent).'] },
    { q:'The compound formulated empirically as TlI₃ is stable in the solid state. Which species does it actually contain?', o:['Tl⁺ and I₃⁻ (linear triiodide ion)','Tl³⁺ and three I⁻ ions','Tl²⁺, I⁻ and I₂','Covently bonded trigonal planar TlI₃ molecules'], a:0, tag:'Reagent Trap', sol:['Due to the inert pair effect, Tl⁺ is far more stable than Tl³⁺, and Tl³⁺ oxidizes I⁻ to I₂ (which combines with I⁻ to form I₃⁻).','Hence TlI₃ is actually thallium(I) triiodide: Tl⁺[I₃]⁻.'] },
    { q:'In which of the following pairs do both species have the SAME hybridization and molecular geometry?', o:['ICl₄⁻ and XeF₄','BF₃ and NF₃','SF₄ and CH₄','XeO₃ and BCl₃'], a:0, tag:'Stereo Trap', sol:['Both ICl₄⁻ and XeF₄ have 36 valence electrons (AB₄E₂ system: 4 bond pairs + 2 lone pairs on central atom).','Both are sp³d² hybridized with square planar geometry.'] },
    { q:'Which of the following orders for hydrogen halides (HX) is INCORRECT?', o:['Bond dissociation enthalpy: HF < HCl < HBr < HI','Acidic strength in water: HF < HCl < HBr < HI','Thermal stability: HF > HCl > HBr > HI','Reducing power: HF < HCl < HBr < HI'], a:0, tag:'Statement Trap', sol:['Bond dissociation enthalpy decreases as bond length increases: HF (574 kJ/mol) > HCl (431) > HBr (363) > HI (295).','Therefore HF < HCl < HBr < HI for bond enthalpy is INCORRECT.'] },
    { q:'Which element shows a diagonal relationship with Boron (B)?', o:['Silicon (Si)','Aluminium (Al)','Carbon (C)','Magnesium (Mg)'], a:0, tag:'Concept Trap', sol:['Boron (Period 2, Group 13) is diagonally related to Silicon (Period 3, Group 14).','Both are non-metallic semiconductors forming covalent hydrides (boranes/silanes) that catch fire in air and weakly acidic oxides (B₂O₃, SiO₂).'] }
  ],
  gens:[
    function(R){
      var specs = [
        { sp:'XeF₂', ve:8, m:2, ch:0, lp:3, hyb:'sp³d' },
        { sp:'XeF₄', ve:8, m:4, ch:0, lp:2, hyb:'sp³d²' },
        { sp:'XeF₆', ve:8, m:6, ch:0, lp:1, hyb:'sp³d³' },
        { sp:'SF₄', ve:6, m:4, ch:0, lp:1, hyb:'sp³d' },
        { sp:'ClF₃', ve:7, m:3, ch:0, lp:2, hyb:'sp³d' },
        { sp:'IF₇', ve:7, m:7, ch:0, lp:0, hyb:'sp³d³' }
      ];
      var s = R.pick(specs);
      var st = (s.ve + s.m - s.ch) / 2;
      var d = [0, 1, 2, 3].filter(function(x){ return x !== s.lp; });
      return {
        q:'Using VSEPR theory, how many lone pairs of electrons are present on the central atom in a molecule of ' + s.sp + '?',
        ans:s.lp, d:d, u:'lone pair(s)',
        tag:'Calculation Trap',
        sol:[
          'Steric number = ½ (V + M − C + A) = ½ (' + s.ve + ' + ' + s.m + ') = ' + st + ' (' + s.hyb + ').',
          'Number of bond pairs = ' + s.m + '.',
          'Lone pairs on central atom = ' + st + ' − ' + s.m + ' = ' + s.lp + '.'
        ]
      };
    },
    function(R){
      var grpList = [
        { g:13, el:'Thallium (Tl)', hi:3, lo:1 },
        { g:14, el:'Lead (Pb)', hi:4, lo:2 },
        { g:15, el:'Bismuth (Bi)', hi:5, lo:3 }
      ];
      var item = R.pick(grpList);
      return {
        q:'For the heavy Period-6 p-block element ' + item.el + ' belonging to Group ' + item.g + ', what is the most stable positive oxidation state in aqueous solution due to the inert pair effect?',
        ans:'+' + item.lo, d:['+' + item.hi, '+' + (item.hi + 2), '+0'], u:'',
        tag:'Concept Trap',
        sol:[
          item.el + ' is in Group ' + item.g + ', so its group oxidation state is +' + item.hi + '.',
          'Due to the inert pair effect (reluctance of 6s² electrons to unpair), the most stable oxidation state is (Group OS − 2) = +' + item.lo + '.'
        ]
      };
    }
  ]
});

/* ==========================================================================
   UNIT C11: d- AND f-BLOCK ELEMENTS
   ========================================================================== */
NEET.reg({
  id:'C11',
  subj:'Inorganic Chemistry',
  type:'conc',
  name:'d- and f-Block Elements',
  syl:'Transition Elements: General introduction, electronic configuration, occurrence and characteristics, general trends in properties of the first-row transition elements - physical properties, ionization enthalpy, oxidation states, atomic radii, colour, catalytic behaviour, magnetic properties, complex formation, interstitial compounds, alloy formation; Preparation, properties, and uses of K2Cr2O7 and KMnO4. Inner Transition Elements: Lanthanoids - Electronic configuration, oxidation states, and lanthanoid contraction. Actinoids - Electronic configuration and oxidation states.',
  kw:['d block', 'transition elements', 'lanthanoid contraction', 'potassium dichromate', 'potassium permanganate', 'magnetic moment', 'actinoids', 'interstitial compounds', 'disproportionation', 'spectrochemical'],

  formulas:[
    { n:'Spin-Only Magnetic Moment', f:'μ_s = √(n (n + 2))  B.M.', u:'B.M. (Bohr Magneton)', s:'n is the number of unpaired d-electrons; 1 B.M. = e h / (4 π m_e)', b:'Ignores orbital angular momentum contribution; valid strictly when orbital quenching is complete (as in first-row 3d ions).' },
    { n:'KMnO4 Oxidizing Half-Reaction (Acidic Medium)', f:'MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O  (E° = +1.51 V)', u:'V', s:'n-factor = 5; Equivalent mass = Molar mass / 5 (158 / 5 = 31.6 g equiv⁻¹)', b:'Acidified with dilute H₂SO₄ only; HCl cannot be used because MnO₄⁻ oxidizes Cl⁻ to toxic Cl₂ gas; HNO₃ cannot be used because it is an oxidant.' },
    { n:'KMnO4 Oxidizing Half-Reaction (Neutral / Weakly Alkaline)', f:'MnO₄⁻ + 2 H₂O + 3 e⁻ → MnO₂ + 4 OH⁻  (E° = +1.23 V)', u:'V', s:'n-factor = 3; Equivalent mass = M / 3; oxidizes iodide I⁻ to iodate IO₃⁻ and thiosulphate S₂O₃²⁻ to sulphate SO₄²⁻', b:'Strongly alkaline medium produces manganate MnO₄²⁻ with n-factor = 1.' },
    { n:'K2Cr2O7 Oxidizing Half-Reaction (Acidic Medium)', f:'Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O  (E° = +1.33 V)', u:'V', s:'n-factor = 6; Equivalent mass = M / 6 (294.18 / 6 = 49.03 g equiv⁻¹)', b:'Acts as primary analytical standard because it is non-hygroscopic (unlike Na₂Cr₂O₇).' },
    { n:'Chromate-Dichromate pH Equilibrium', f:'2 CrO₄²⁻ (yellow) + 2 H⁺ ⇌ Cr₂O₇²⁻ (orange) + H₂O', u:'—', s:'Yellow in alkaline solution (pH > 7); Orange in acidic solution (pH < 7)', b:'Oxidation state of chromium remains strictly +6 in both species; this is an acid-base condensation, NOT a redox reaction.' },
    { n:'Manganate to Permanganate Disproportionation', f:'3 MnO₄²⁻ (green) + 4 H⁺ → 2 MnO₄⁻ (purple) + MnO₂ (brown) + 2 H₂O', u:'—', s:'Mn(+6) disproportionates simultaneously to Mn(+7) and Mn(+4) in acidic or neutral solution', b:'Manganate ion MnO₄²⁻ is stable only in strongly alkaline solution (pH > 11).' },
    { n:'Effective Nuclear Charge in Lanthanoids', f:'Z_eff = Z − σ  (where σ_4f is imperfect shielding)', u:'—', s:'Each additional 4f electron shields the outer 5d and 6s electrons poorly (σ_4f < σ_d < σ_p < σ_s)', b:'Causes gradual shrinkage in atomic and ionic radii known as Lanthanoid Contraction.' }
  ],

  traps:[
    { t:'In the chromate-dichromate equilibrium (2 CrO₄²⁻ + 2 H⁺ ⇌ Cr₂O₇²⁻ + H₂O), the oxidation state of chromium DOES NOT change; it is +6 in both ions.', c:'The interconversion is solely an acid-base condensation reaction driven by proton concentration, not a redox process.', tag:'NCERT Exception' },
    { t:'HCl CANNOT be used to acidify KMnO₄ solutions in titrations, whereas dilute H₂SO₄ is the standard choice.', c:'Permanganate (E° = +1.51 V) is powerful enough to oxidize chloride ions (2 Cl⁻ → Cl₂ + 2e⁻, E° = −1.36 V) into chlorine gas, consuming titrant and giving falsely high titre values.', tag:'Boundary Failure' },
    { t:'Zirconium (Zr, Period 5) and Hafnium (Hf, Period 6) have almost IDENTICAL covalent radii (~160 pm and ~159 pm) and nearly indistinguishable chemical properties.', c:'The 14 lanthanoid elements (Ce to Lu) fill the 4f subshell between Zr and Hf, and the lanthanoid contraction perfectly cancels the expected radius expansion from n=5 to n=6.', tag:'NCERT Exception' },
    { t:'Copper has a POSITIVE standard reduction potential (E°(Cu²⁺/Cu) = +0.34 V), making it unable to liberate H₂ gas from dilute non-oxidizing acids.', c:'The high enthalpy of atomization and sum of the first two ionization enthalpies of copper are not compensated by the hydration enthalpy of Cu²⁺.', tag:'NCERT Exception' },
    { t:'Scandium (Sc³⁺) and Titanium (Ti⁴⁺) compounds are completely COLOURLESS, as are Zinc (Zn²⁺) and Copper(I) (Cu⁺) compounds.', c:'Sc³⁺ and Ti⁴⁺ have 3d⁰ configurations (no d-electrons), while Zn²⁺ and Cu⁺ have 3d¹⁰ configurations (completely filled d-subshell); d-d electronic transitions are impossible in both.', tag:'Zero-Case' },
    { t:'Actinoids exhibit a much WIDER range of oxidation states (from +3 up to +7) than lanthanoids (predominantly +3).', c:'The 5f, 6d, and 7s energy levels in actinoids have very small energy separations, allowing electrons from all three subshells to participate in bond formation.', tag:'NCERT Exception' },
    { t:'Interstitial compounds of transition metals (e.g. TiC, Fe₃H, VH₀.₅₆) are non-stoichiometric, extremely hard, and retain metallic electrical conductivity.', c:'Small non-metal atoms (H, B, C, N) occupy the interstitial voids in the metal lattice without disrupting metal-metal metallic bonding.', tag:'Concept Trap' },
    { t:'K₂Cr₂O₇ is preferred as a primary standard in volumetric titrations over Na₂Cr₂O₇.', c:'Na₂Cr₂O₇ is hygroscopic (deliquescent) and absorbs atmospheric moisture, preventing accurate direct weighing, whereas K₂Cr₂O₇ is non-hygroscopic and chemically stable.', tag:'NCERT Exception' }
  ],

  flows:[
    { t:'Industrial Manufacture of Potassium Dichromate (K₂Cr₂O₇)', chain:['Chromite Ore (FeCr₂O₄) fused with Na₂CO₃ + O₂ at 1400 K','Yellow Sodium Chromate (Na₂CrO₄) solution filtered','Acidify with conc. H₂SO₄ to form Orange Na₂Cr₂O₇','Add KCl to precipitate less soluble orange K₂Cr₂O₇ crystals'] },
    { t:'Potassium Permanganate Medium-Dependent Redox Tree', root:'MnO₄⁻ as Strong Oxidizing Agent',
      br:[
        { l:'Acidic Medium (dil. H₂SO₄)', n:['MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ (colourless)','n-factor = 5','Oxidizes Fe²⁺ → Fe³⁺, C₂O₄²⁻ → CO₂','Oxidizes I⁻ → I₂ (purple vapours)'] },
        { l:'Neutral / Faintly Alkaline (Bayer-type)', n:['MnO₄⁻ + 2 H₂O + 3 e⁻ → MnO₂ (brown ppt)','n-factor = 3','Oxidizes I⁻ → IO₃⁻ (iodate, NO I₂!)','Oxidizes S₂O₃²⁻ → SO₄²⁻'] },
        { l:'Strongly Alkaline Medium (pH > 12)', n:['MnO₄⁻ + e⁻ → MnO₄²⁻ (green manganate)','n-factor = 1','Rapid single-electron transfer'] }
      ]
    },
    { t:'Lanthanoid Contraction Consequences Hierarchy', chain:['Filling of 4f subshell across 58Ce to 71Lu','Poor nuclear shielding by diffuse 4f orbitals','Steady shrinkage of Ln³⁺ ionic radii (La³⁺ 103 pm → Lu³⁺ 86 pm)','Consequence: Zr ≈ Hf twin pair properties','Consequence: Basicity decreases from La(OH)₃ (most basic) to Lu(OH)₃ (least basic)'] }
  ],

  lab:[
    { t:'Chromyl Chloride Test for Chloride Ions (Cl⁻)', d:'Heat solid chloride salt with solid K₂Cr₂O₇ and conc. H₂SO₄ → deep red/orange vapours of chromyl chloride (CrO₂Cl₂). Pass vapours into NaOH → yellow solution of Na₂CrO₄. Acidify with acetic acid and add lead acetate → canary yellow ppt of PbCrO₄.' },
    { t:'KMnO₄ Autocatalysis in Oxalic Acid Titration', d:'Slow initial decolorization because reaction between MnO₄⁻ and C₂O₄²⁻ has high activation energy. Heated to 60–70 °C; once first drops of Mn²⁺ form, they act as autocatalyst, making subsequent titration rapid.' },
    { t:'Alloy Identification Test (Brass vs Bronze)', d:'Brass is Cu + Zn (dissolves in HNO₃; add excess NH₄OH → deep blue [Cu(NH₃)₄]²⁺; Zn confirmed with K₄[Fe(CN)₆] white ppt). Bronze is Cu + Sn (HNO₃ produces white insoluble metastannic acid H₂SnO₃).' },
    { t:'Magnetic Susceptibility by Gouy Balance', d:'Paramagnetic substance is pulled into the magnetic field and registers apparent weight gain; diamagnetic substance is weakly repelled and registers apparent weight loss.' }
  ],

  pairs:[
    { g:'Transition Metal Ion (3d Series) → Spin-Only Magnetic Moment (μ_s)', a:'Ti³⁺ or Cu²⁺ (3d¹, 1 unpaired electron)', b:'μ_s = √3 ≈ 1.73 B.M.' },
    { g:'Transition Metal Ion (3d Series) → Spin-Only Magnetic Moment (μ_s)', a:'V³⁺ or Ni²⁺ (3d² or 3d⁸, 2 unpaired electrons)', b:'μ_s = √8 ≈ 2.83 B.M.' },
    { g:'Transition Metal Ion (3d Series) → Spin-Only Magnetic Moment (μ_s)', a:'Cr³⁺ or Co²⁺ (3d³ or 3d⁷, 3 unpaired electrons)', b:'μ_s = √15 ≈ 3.87 B.M.' },
    { g:'Transition Metal Ion (3d Series) → Spin-Only Magnetic Moment (μ_s)', a:'Fe²⁺ or Cr²⁺ (3d⁶ or 3d⁴, 4 unpaired electrons)', b:'μ_s = √24 ≈ 4.90 B.M.' },
    { g:'Transition Metal Ion (3d Series) → Spin-Only Magnetic Moment (μ_s)', a:'Mn²⁺ or Fe³⁺ (3d⁵, 5 unpaired electrons)', b:'μ_s = √35 ≈ 5.92 B.M.' },

    { g:'KMnO₄ Oxidation Reaction → Product Formed in Specified Medium', a:'Oxidation of Iodide (I⁻) in ACIDIC medium', b:'Iodine molecule (I₂)' },
    { g:'KMnO₄ Oxidation Reaction → Product Formed in Specified Medium', a:'Oxidation of Iodide (I⁻) in NEUTRAL / ALKALINE medium', b:'Iodate ion (IO₃⁻)' },
    { g:'KMnO₄ Oxidation Reaction → Product Formed in Specified Medium', a:'Oxidation of Oxalate ion (C₂O₄²⁻) in acidic medium', b:'Carbon dioxide gas (CO₂)' },
    { g:'KMnO₄ Oxidation Reaction → Product Formed in Specified Medium', a:'Oxidation of Ferrous ion (Fe²⁺) in acidic medium', b:'Ferric ion (Fe³⁺)' },

    { g:'3d Transition Metal → Characteristic Maximum Oxidation State', a:'Scandium (Sc, 3d¹ 4s²)', b:'+3 only (no variable oxidation states)' },
    { g:'3d Transition Metal → Characteristic Maximum Oxidation State', a:'Manganese (Mn, 3d⁵ 4s²)', b:'+7 (highest in 3d series, in MnO₄⁻)' },
    { g:'3d Transition Metal → Characteristic Maximum Oxidation State', a:'Zinc (Zn, 3d¹⁰ 4s²)', b:'+2 only (completely filled d-subshell)' },
    { g:'3d Transition Metal → Characteristic Maximum Oxidation State', a:'Chromium (Cr, 3d⁵ 4s¹)', b:'+6 (in CrO₄²⁻ and Cr₂O₇²⁻)' },

    { g:'Transition Metal Catalyst → Industrial Process', a:'Finely divided Iron (Fe) promoted by Mo / K₂O-Al₂O₃', b:'Haber process for Ammonia (NH₃) synthesis' },
    { g:'Transition Metal Catalyst → Industrial Process', a:'Vanadium Pentoxide (V₂O₅)', b:'Contact process for Sulphuric acid (H₂SO₄)' },
    { g:'Transition Metal Catalyst → Industrial Process', a:'Finely divided Nickel (Ni) / Raney Nickel', b:'Hydrogenation of unsaturated vegetable oils to fats' },
    { g:'Transition Metal Catalyst → Industrial Process', a:'Cobalt naphthenate / Rhodium complex', b:'Oxo process for aldehydes from alkenes' },

    { g:'3d Transition Metal Cation → Aqueous Solution Colour', a:'Titanium(III) [Ti(H₂O)₆]³⁺', b:'Purple / Violet' },
    { g:'3d Transition Metal Cation → Aqueous Solution Colour', a:'Copper(II) [Cu(H₂O)₆]²⁺', b:'Sky Blue' },
    { g:'3d Transition Metal Cation → Aqueous Solution Colour', a:'Nickel(II) [Ni(H₂O)₆]²⁺', b:'Green' },
    { g:'3d Transition Metal Cation → Aqueous Solution Colour', a:'Iron(III) [Fe(H₂O)₆]³⁺', b:'Yellow / Brown' }
  ],

  orders:[
    { q:'Arrange the following 3d metal ions in increasing order of their spin-only magnetic moment (μ_s)', s:['Sc³⁺ (0 B.M.)', 'Ti³⁺ (1.73 B.M.)', 'V³⁺ (2.83 B.M.)', 'Cr³⁺ (3.87 B.M.)', 'Mn²⁺ (5.92 B.M.)'], sep:'<' },
    { q:'Arrange the basic strength of the lanthanoid hydroxides in descending order', s:['La(OH)₃ (Most Basic)', 'Ce(OH)₃', 'Gd(OH)₃', 'Lu(OH)₃ (Least Basic)'], sep:'>' },
    { q:'Arrange the following first-row transition elements in increasing order of their melting points', s:['Zn (420 K)', 'Cu (1358 K)', 'Fe (1811 K)', 'Cr (2180 K)'], sep:'<' },
    { q:'Arrange the following ions in order of decreasing ionic radius', s:['La³⁺ (103 pm)', 'Ce³⁺ (102 pm)', 'Eu³⁺ (94.7 pm)', 'Lu³⁺ (86.1 pm)'], sep:'>' },
    { q:'Arrange the oxidation states of manganese in increasing order of stability in acidic aqueous solution', s:['Mn³⁺ (Unstable oxidant)', 'MnO₄²⁻ (Disproportionates)', 'MnO₄⁻ (Strong oxidant)', 'Mn²⁺ (Most stable d⁵)'], sep:'<' }
  ],

  facts:{
    T:[
      'Potassium dichromate (K₂Cr₂O₇) acts as a primary analytical standard because it is non-hygroscopic and can be weighed out directly.',
      'The orange colour of dichromate and purple colour of permanganate are due to ligand-to-metal charge transfer (LMCT) transitions, not d-d transitions.',
      'Lanthanoid contraction causes the atomic radii of second and third transition series elements (like Zr and Hf, Nb and Ta) to be nearly identical.',
      'Copper(I) compounds (Cu⁺, 3d¹⁰) disproportionate in aqueous solution into Cu²⁺ and metallic Cu due to the much higher hydration enthalpy of Cu²⁺.',
      'Interstitial compounds of transition metals are non-stoichiometric and exhibit higher hardness than the parent metals while retaining metallic conductivity.',
      'The highest oxidation state of transition metals is exhibited in their oxides and fluorides due to the small size and high electronegativity of oxygen and fluorine.',
      'Europium(II) (Eu²⁺, 4f⁷) is a strong reducing agent that oxidizes to the stable +3 lanthanoid state.',
      'In acidified potassium dichromate solution, six electrons are transferred per dichromate ion, making its equivalent weight equal to M/6.',
      'Ce⁴⁺ is a powerful analytical oxidizing agent in aqueous solution because it readily converts to the common +3 lanthanoid oxidation state.',
      'Zinc, cadmium, and mercury are not regarded as typical transition elements because they have completely filled d-orbitals in both elemental and common ionic states.',
      'The paramagnetic character of 3d transition metal ions increases from Sc³⁺ to Mn²⁺ and then decreases towards Zn²⁺.',
      'Manganese has a anomalously low melting point compared to its neighbours Cr and Fe due to the stable half-filled 3d⁵ configuration providing fewer delocalized bonding electrons.'
    ],
    F:[
      'Hydrochloric acid (HCl) is routinely used to acidify KMnO₄ in redox titrations of ferrous salts.',
      'In the chromate-to-dichromate conversion upon acidification, chromium undergoes oxidation from +3 to +6.',
      'Titanium(IV) and Scandium(III) salts exhibit intense blue colours in aqueous solution due to d-d electronic transitions.',
      'Lanthanoid elements show a much wider variety of stable oxidation states than actinoid elements.',
      'All 3d transition metal elements have negative standard reduction potentials E°(M²⁺/M) including copper.',
      'Interstitial compounds are chemically highly reactive and dissolve rapidly in dilute mineral acids.',
      'Sodium dichromate (Na₂Cr₂O₇) is preferred over potassium dichromate as a primary analytical standard in volumetric labs.',
      'The magnetic moment of Ni²⁺ (3d⁸) in an octahedral complex is 3.87 Bohr Magnetons.',
      'Actinoid contraction is smaller in magnitude than lanthanoid contraction because 5f electrons shield the nucleus better than 4f electrons.',
      'Potassium permanganate oxidizes iodide ions into elemental iodine in alkaline aqueous solution.',
      'Scandium exhibits stable oxidation states of +1, +2, and +3 in its aqueous compounds.',
      'The basic strength of lanthanoid hydroxides increases from La(OH)₃ to Lu(OH)₃.'
    ]
  },

  mcq:[
    {
      q:'Which of the following pairs of transition elements have almost identical atomic radii due to the lanthanoid contraction?',
      o:['Zirconium (Zr) and Hafnium (Hf)', 'Titanium (Ti) and Zirconium (Zr)', 'Molybdenum (Mo) and Tungsten (W)', 'Both Zr-Hf and Mo-W'],
      a:3,
      tag:'NCERT Exception',
      sol:[
        'Lanthanoid contraction intervenes between 4d and 5d series.',
        'Zr (4d, 160 pm) and Hf (5d, 159 pm) as well as Mo (140 pm) and W (141 pm) are classic lanthanoid pairs with nearly identical radii.'
      ]
    },
    {
      q:'When acidified KMnO₄ is titrated against oxalic acid (H₂C₂O₄), the number of moles of KMnO₄ required to completely oxidize 1 mole of oxalic acid is:',
      o:['2 / 5 (0.4 mol)', '5 / 2 (2.5 mol)', '1 / 5 (0.2 mol)', '3 / 5 (0.6 mol)'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Balanced redox reaction: 2 MnO₄⁻ + 5 C₂O₄²⁻ + 16 H⁺ → 2 Mn²⁺ + 10 CO₂ + 8 H₂O.',
        '5 moles of oxalate require 2 moles of KMnO₄.',
        'Therefore, 1 mole of oxalate requires 2/5 = 0.4 moles of KMnO₄.'
      ]
    },
    {
      q:'The spin-only magnetic moment of a divalent 3d metal ion M²⁺ with atomic number Z = 26 is:',
      o:['4.90 B.M.', '5.92 B.M.', '3.87 B.M.', '2.83 B.M.'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Z = 26 is Iron (Fe). Electronic configuration of Fe = [Ar] 3d⁶ 4s².',
        'Fe²⁺ = [Ar] 3d⁶. Number of unpaired electrons n = 4.',
        'μ_s = √(n(n+2)) = √(4 × 6) = √24 ≈ 4.90 B.M.'
      ]
    },
    {
      q:'Why is HCl not used in place of H₂SO₄ to acidify potassium permanganate solution in quantitative redox titrations?',
      o:['KMnO₄ oxidizes HCl into chlorine gas', 'HCl reduces Fe²⁺ ions prematurely', 'KMnO₄ precipitates with HCl', 'HCl acts as an autocatalyst'],
      a:0,
      tag:'Boundary Failure',
      sol:[
        'E°(MnO₄⁻/Mn²⁺) = +1.51 V is higher than E°(Cl₂/2Cl⁻) = +1.36 V.',
        'KMnO₄ oxidizes Cl⁻ to toxic Cl₂ gas, which consumes extra KMnO₄ and introduces massive positive error.'
      ]
    },
    {
      q:'When KI solution is treated with alkaline KMnO₄, the oxidation product of iodine is:',
      o:['IO₃⁻ (Iodate ion)', 'I₂ (Iodine molecule)', 'IO₄⁻ (Periodate ion)', 'I₃⁻ (Triiodide ion)'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'In acidic medium: 2 MnO₄⁻ + 10 I⁻ + 16 H⁺ → 2 Mn²⁺ + 5 I₂ + 8 H₂O (gives I₂).',
        'In neutral or faintly alkaline medium: 2 MnO₄⁻ + H₂O + I⁻ → 2 MnO₂ + 2 OH⁻ + IO₃⁻ (gives iodate IO₃⁻, not I₂!).'
      ]
    },
    {
      q:'Which of the following 3d transition metal ions is colourless in aqueous solution?',
      o:['Ti⁴⁺ (3d⁰)', 'V³⁺ (3d²)', 'Fe³⁺ (3d⁵)', 'Cr³⁺ (3d³)'],
      a:0,
      tag:'Zero-Case',
      sol:[
        'Ti⁴⁺ has electronic configuration [Ar] 3d⁰.',
        'With zero d-electrons, d-d electronic transitions are impossible; hence Ti⁴⁺ salts are completely colourless.'
      ]
    },
    {
      q:'Which property of transition metals accounts for their ability to form numerous interstitial compounds?',
      o:['Presence of vacant interstitial voids in their crystal lattices', 'High electropositivity', 'Variable oxidation states', 'Low ionization enthalpy'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Transition metals form closed-packed lattices with vacant octahedral and tetrahedral interstitial voids.',
        'Small non-metal atoms like H, B, C, N can occupy these spaces without significant lattice distortion.'
      ]
    },
    {
      q:'Which of the following lanthanoid ions is diamagnetic in its ground state?',
      o:['Lu³⁺ (4f¹⁴)', 'La³⁺ (4f⁰)', 'Yb²⁺ (4f¹⁴)', 'All of these'],
      a:3,
      tag:'Zero-Case',
      sol:[
        'La³⁺ has [Xe] 4f⁰ (no f-electrons, diamagnetic).',
        'Lu³⁺ and Yb²⁺ have [Xe] 4f¹⁴ (completely filled f-subshell, zero unpaired electrons, diamagnetic).',
        'All three possess zero unpaired electrons.'
      ]
    },
    {
      q:'In acidic medium, orange dichromate ion (Cr₂O₇²⁻) is converted into yellow chromate ion (CrO₄²⁻) by adding:',
      o:['An aqueous alkali (e.g. NaOH)', 'A mineral acid (e.g. H₂SO₄)', 'An oxidizing agent', 'A reducing agent'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Cr₂O₇²⁻ (orange) + 2 OH⁻ ⇌ 2 CrO₄²⁻ (yellow) + H₂O.',
        'Adding alkali consumes H⁺ / adds OH⁻, shifting the equilibrium to the yellow chromate form.'
      ]
    },
    {
      q:'The correct electronic configuration of Chromium (Z = 24) in ground state is:',
      o:['[Ar] 3d⁵ 4s¹', '[Ar] 3d⁴ 4s²', '[Ar] 3d⁶ 4s⁰', '[Ar] 3d³ 4s² 4p¹'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'The half-filled 3d⁵ subshell possesses extra exchange energy and spherical symmetry.',
        'Hence one 4s electron shifts into the 3d subshell giving [Ar] 3d⁵ 4s¹.'
      ]
    },
    {
      q:'Which of the following transition metal oxides is amphoteric in nature?',
      o:['V₂O₅', 'CrO (Basic)', 'Mn₂O₇ (Acidic)', 'TiO (Basic)'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Low oxidation state oxides (e.g. CrO, VO) are basic; high oxidation state oxides (e.g. CrO₃, Mn₂O₇) are acidic.',
        'Intermediate oxidation state oxides like V₂O₅ and Cr₂O₃ are amphoteric.'
      ]
    },
    {
      q:'The catalyst used in the contact process for the manufacture of sulphuric acid is:',
      o:['V₂O₅', 'Fe powder', 'Ni powder', 'Pt-Rh gauze'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Vanadium pentoxide (V₂O₅) catalyses the oxidation of SO₂ to SO₃ in the Contact Process.',
        'It functions through reversible changes between V(+5) and V(+4) oxidation states.'
      ]
    },
    {
      q:'The most common and stable oxidation state among all the lanthanoid elements is:',
      o:['+3', '+2', '+4', '+1'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'The sum of the first three ionization enthalpies is relatively low for all lanthanoids.',
        'Therefore, +3 is the universal, predominant oxidation state for all 14 lanthanoids in aqueous solution.'
      ]
    },
    {
      q:'Copper(I) ion (Cu⁺) is unstable in aqueous solution and undergoes disproportionation according to the reaction:',
      o:['2 Cu⁺(aq) → Cu²⁺(aq) + Cu(s)', 'Cu⁺(aq) + e⁻ → Cu(s)', 'Cu⁺(aq) → Cu²⁺(aq) + e⁻', 'Cu⁺(aq) + H₂O → CuO + 2 H⁺'],
      a:0,
      tag:'Concept Trap',
      sol:[
        '2 Cu⁺(aq) → Cu²⁺(aq) + Cu(s).',
        'Although the second ionization enthalpy of Cu is high, the hydration enthalpy of Cu²⁺ is vastly more negative (−2121 kJ/mol vs −593 kJ/mol for Cu⁺), driving disproportionation.'
      ]
    }
  ],

  gens:[
    function(R){
      var n = R.int(1, 5);
      var mu = Math.sqrt(n * (n + 2));
      var ions = {
        1:'Ti³⁺ (3d¹) or Cu²⁺ (3d⁹)',
        2:'V³⁺ (3d²) or Ni²⁺ (3d⁸)',
        3:'Cr³⁺ (3d³) or Co²⁺ (3d⁷)',
        4:'Fe²⁺ (3d⁶) or Cr²⁺ (3d⁴)',
        5:'Mn²⁺ (3d⁵) or Fe³⁺ (3d⁵)'
      };
      var d = [1, 2, 3, 4, 5].filter(function(x){ return x !== n; }).map(function(x){ return R.f(Math.sqrt(x * (x + 2))); });
      return {
        q:'Calculate the spin-only magnetic moment (μ_s) of the transition metal ion ' + ions[n] + ' possessing ' + n + ' unpaired d-electron(s):',
        ans:mu, d:d.slice(0, 3).map(Number), u:'B.M.',
        tag:'Calculation Trap',
        sol:[
          'Spin-only magnetic moment formula: μ_s = √(n (n + 2)) Bohr Magnetons (B.M.).',
          'Here n = ' + n + ' unpaired electrons.',
          'μ_s = √(' + n + ' × ' + (n + 2) + ') = √' + (n * (n + 2)) + ' = ' + R.f(mu) + ' B.M.'
        ]
      };
    },
    function(R){
      var mol_oxalate = R.pick([1, 2, 5, 10]);
      var mol_permanganate = (2 / 5) * mol_oxalate;
      var d1 = (5 / 2) * mol_oxalate;
      var d2 = (1 / 5) * mol_oxalate;
      var d3 = mol_oxalate;
      return {
        q:'How many moles of KMnO₄ are required in acidic medium to completely oxidize ' + mol_oxalate + ' mole(s) of oxalic acid (H₂C₂O₄)?',
        ans:mol_permanganate, d:[d1, d2, d3], u:'mol',
        tag:'Calculation Trap',
        sol:[
          'Balanced redox equation in acid: 2 MnO₄⁻ + 5 C₂O₄²⁻ + 16 H⁺ → 2 Mn²⁺ + 10 CO₂ + 8 H₂O.',
          'Mole ratio: n(KMnO₄) / n(oxalic) = 2 / 5.',
          'n(KMnO₄) = (2/5) × ' + mol_oxalate + ' = ' + R.f(mol_permanganate) + ' mol.'
        ]
      };
    }
  ]
});

/* ==========================================================================
   UNIT C12: COORDINATION COMPOUNDS
   ========================================================================== */
NEET.reg({
  id:'C12',
  subj:'Inorganic Chemistry',
  type:'conc',
  name:'Co-ordination Compounds',
  syl:'Introduction to coordination compounds. Werner theory; ligands, coordination number, denticity, chelation; IUPAC nomenclature of mononuclear coordination compounds, isomerism; Bonding - Valence bond approach and basic ideas of Crystal field theory, colour and magnetic properties; Importance of coordination compounds (in qualitative analysis, extraction of metals, and biological systems).',
  kw:['coordination compounds', 'werner theory', 'cft', 'vbt', 'crystal field splitting', 'chelate effect', 'isomerism', 'spectrochemical series', 'synergic bonding', 'iupac nomenclature'],

  formulas:[
    { n:'Crystal Field Splitting Relation (Octahedral vs Tetrahedral)', f:'Δ_t = (4 / 9) Δ_o', u:'cm⁻¹ or kJ mol⁻¹', s:'Δ_t is always smaller than mean pairing energy P, so tetrahedral complexes are ALWAYS high-spin', b:'Fails if ligands in tetrahedral complex exert unusually strong field or if metal is in exceptionally high oxidation state.' },
    { n:'Octahedral Crystal Field Stabilization Energy (CFSE)', f:'CFSE_oct = [−0.4 · n(t₂g) + 0.6 · n(e_g)] Δ_o + m P', u:'Δ_o / kJ mol⁻¹', s:'n(t₂g) = electrons in lower t₂g set; n(e_g) = electrons in upper e_g set; m = extra pairing events', b:'Pairing energy P is only counted for pairs exceeding the free-ion ground state electron pairs.' },
    { n:'Effective Atomic Number (EAN / Sidgwick Rule)', f:'EAN = Z − (Oxidation State) + 2 × (Coordination Number)', u:'—', s:'Predicts noble gas stability when EAN equals 36 (Kr), 54 (Xe), or 86 (Rn)', b:'Fails for numerous stable paramagnetic complexes (e.g. [Fe(H₂O)₆]²⁺ has EAN = 36−2+12 = 36, but [NiCl₄]²⁻ has EAN = 34).' },
    { n:'Werner Precipitation of Ionizable Halides', f:'[Co(NH₃)₆]Cl₃ + 3 AgNO₃ → 3 AgCl(s)  (3 moles precipitate)', u:'mol AgCl / mol complex', s:'Only ligands in the outer ionization sphere precipitate with aqueous AgNO₃', b:'Ligands inside the square brackets (coordination sphere) are bonded covalently and do not ionize.' },
    { n:'Metal-Carbonyl Synergic Bond Strength', f:'ν(CO) frequency decreases as metal back-bonding (M → C π*) increases', u:'cm⁻¹ (Wavenumber)', s:'M–C σ-bond + M–C π-bond (back donation into CO π* antibonding orbital)', b:'Greater negative charge on metal ion increases back-donation, weakening the C–O bond further.' },
    { n:'Denticity & Chelate Stability Constant', f:'log β_chelate ≫ log β_unidentate  (due to ΔS > 0)', u:'Dimensionless', s:'Chelate effect: multidentate ligands form stable 5- or 6-membered chelate rings', b:'Fails if steric crowding in chelate ring produces excessive angular strain.' }
  ],

  traps:[
    { t:'Tetrahedral complexes NEVER form low-spin complexes; they are ALWAYS high-spin complexes.', c:'The crystal field splitting in tetrahedral geometry Δ_t = (4/9) Δ_o is fundamentally too small to overcome electron pairing energy P (Δ_t < P always).', tag:'Zero-Case' },
    { t:'Square planar complexes of the type [M(a)(b)(c)(d)] (all 4 monodentate ligands different) exhibit THREE geometrical isomers, but ZERO optical isomers.', c:'All square planar complexes possess a plane of symmetry (the molecular plane itself), which precludes optical activity.', tag:'NCERT Exception' },
    { t:'[Co(NH₃)₆]³⁺ is diamagnetic (inner orbital d²sp³), despite NH₃ lying near the middle of the spectrochemical series.', c:'With Co³⁺ (high positive charge +3), the crystal field splitting Δ_o becomes very large (Δ_o > P), forcing pairing of the six 3d electrons into t₂g⁶ e_g⁰.', tag:'NCERT Exception' },
    { t:'In the complex [Co(en)₂Cl₂]⁺, the CIS isomer is optically active (resolvable into d and l enantiomers), while the TRANS isomer is optically INACTIVE.', c:'The trans isomer possesses both a center of inversion and planes of symmetry, making it superimposable on its mirror image.', tag:'NCERT Exception' },
    { t:'Synergic bonding in metal carbonyls STRENGTHENS the Metal–Carbon (M–C) bond while simultaneously WEAKENING the Carbon–Oxygen (C–O) bond.', c:'Metal d-electrons are back-donated into the empty π* antibonding molecular orbital of CO, which increases M–C bond order while lowering C–O bond order.', tag:'Concept Trap' },
    { t:'Anhydrous copper sulphate (CuSO₄) is a colourless white powder, but hydrated copper sulphate (CuSO₄ · 5H₂O) is bright blue.', c:'In the absence of water ligands, there is no crystal field splitting of the 3d orbitals, so d-d electronic transitions cannot occur.', tag:'Zero-Case' },
    { t:'In qualitative analysis, DMG (dimethylglyoxime) forms a brilliant scarlet-red precipitate specifically with Ni²⁺ ions in ammoniacal medium, stabilized by hydrogen bonding.', c:'Two DMG monoanions form a neutral planar bis(dimethylglyoximato)nickel(II) chelate complex stabilized by two internal O–H···O hydrogen bonds.', tag:'Practical Trap' },
    { t:'Tetrahedral complexes of type [M A₂ B₂] do NOT exhibit geometrical (cis-trans) isomerism.', c:'In a regular tetrahedron, all four vertices are adjacent and equidistant to one another (bond angle ~109.5°); no "trans" (180°) position exists.', tag:'Zero-Case' }
  ],

  flows:[
    { t:'Octahedral vs Tetrahedral Crystal Field Splitting Maps', chain:['Free Metal Ion (5 degenerate d-orbitals: dxy, dyz, dxz, dx2-y2, dz2)','Average spherical ligand field (Energy raised)','Octahedral splitting: eg (+0.6 Δo) pointing at ligands; t2g (-0.4 Δo) between axes','Tetrahedral splitting: t2 (+0.4 Δt) pointing closer to ligands; e (-0.6 Δt) lower'] },
    { t:'Isomerism in Coordination Compounds Decision Tree', root:'Determine Type of Coordination Isomerism',
      br:[
        { l:'Different ions inside vs outside brackets', n:['Exchange ionizable counter-ion','Example: [Co(NH₃)₅SO₄]Br vs [Co(NH₃)₅Br]SO₄','Ionization Isomerism (gives different ppt)'] },
        { l:'Ambidentate ligand present (NO₂⁻, SCN⁻, CN⁻)', n:['Different coordinating donor atom','Example: [Co(NH₃)₅(NO₂)]²⁺ (yellow) vs [Co(NH₃)₅(ONO)]²⁺ (red)','Linkage Isomerism'] },
        { l:'Stereo: Spatial ligand arrangement', n:['Cis/Trans in [Pt(NH₃)₂Cl₂] (Geometrical)','Facial/Meridional in [Co(NH₃)₃(NO₂)₃]','Chiral non-superimposable mirror: [Co(en)₃]³⁺ (Optical)'] }
      ]
    },
    { t:'Metal Carbonyl Synergic Bonding Architecture', chain:['CO acts as Lewis base: lone pair on Carbon donated into empty metal d-orbital (σ-bond)','Electron density builds on transition metal','Metal acts as Lewis base: filled metal d-orbital back-donates into empty π* orbital of CO','Result: M-C bond order increases, C-O bond order decreases (ν_CO drops)'] }
  ],

  lab:[
    { t:'Precipitation Titration with AgNO₃ for Werner Ion Counting', d:'1 mole [Co(NH₃)₆]Cl₃ gives 3 moles AgCl ppt (3 Cl⁻ outside). 1 mole [Co(NH₃)₅Cl]Cl₂ gives 2 moles AgCl ppt. 1 mole [Co(NH₃)₄Cl₂]Cl gives 1 mole AgCl ppt. 1 mole [Co(NH₃)₃Cl₃] gives 0 moles AgCl ppt.' },
    { t:'Nickel Detection with Dimethylglyoxime (DMG)', d:'Add DMG and NH₄OH to Ni²⁺ solution → brilliant scarlet red precipitate of [Ni(dmg)₂]. Complex is square planar, diamagnetic, and stabilized by two intramolecular O–H···O hydrogen bonds.' },
    { t:'Copper Tetrammine Deep Blue Complex Formation', d:'Add dilute NH₄OH dropwise to Cu²⁺ solution → pale blue Cu(OH)₂ precipitate. Add excess NH₄OH → precipitate dissolves into intense inky-blue solution of [Cu(NH₃)₄]²⁺ (tetraamminecopper(II) ion).' },
    { t:'EDTA Titration for Water Hardness Determination', d:'Disodium salt of EDTA (Na₂H₂Y) acts as hexadentate chelating agent, binding Ca²⁺ and Mg²⁺ in 1:1 molar ratio at pH 10 (ammoniacal buffer) using Eriochrome Black T indicator (wine red → steel blue end point).' }
  ],

  pairs:[
    { g:'Werner Complex Formula → Moles of AgCl Precipitated per Mole Complex', a:'[Co(NH₃)₆]Cl₃ (Luteo salt)', b:'3 moles of AgCl precipitated' },
    { g:'Werner Complex Formula → Moles of AgCl Precipitated per Mole Complex', a:'[Co(NH₃)₅Cl]Cl₂ (Purpureo salt)', b:'2 moles of AgCl precipitated' },
    { g:'Werner Complex Formula → Moles of AgCl Precipitated per Mole Complex', a:'[Co(NH₃)₄Cl₂]Cl (Praseo salt)', b:'1 mole of AgCl precipitated' },
    { g:'Werner Complex Formula → Moles of AgCl Precipitated per Mole Complex', a:'[Co(NH₃)₃Cl₃] (Neutral complex)', b:'0 moles of AgCl precipitated (No ionizable chloride)' },

    { g:'Coordination Complex → Hybridization and Magnetic Behaviour', a:'[Ni(CN)₄]²⁻ (Tetracyanidonickelate(II))', b:'dsp² (Square planar, Diamagnetic, 0 unpaired e⁻)' },
    { g:'Coordination Complex → Hybridization and Magnetic Behaviour', a:'[NiCl₄]²⁻ (Tetrachloridonickelate(II))', b:'sp³ (Tetrahedral, Paramagnetic, 2 unpaired e⁻)' },
    { g:'Coordination Complex → Hybridization and Magnetic Behaviour', a:'[Fe(CN)₆]³⁻ (Hexacyanidoferrate(III))', b:'d²sp³ (Octahedral, Paramagnetic, 1 unpaired e⁻)' },
    { g:'Coordination Complex → Hybridization and Magnetic Behaviour', a:'[CoF₆]³⁻ (Hexafluoridocobaltate(III))', b:'sp³d² (Outer orbital, Paramagnetic, 4 unpaired e⁻)' },

    { g:'Biomolecule / Medicine → Central Transition / Alkaline Earth Metal Ion', a:'Chlorophyll (Photosynthetic pigment)', b:'Magnesium (Mg²⁺)' },
    { g:'Biomolecule / Medicine → Central Transition / Alkaline Earth Metal Ion', a:'Haemoglobin (Oxygen carrier)', b:'Iron(II) (Fe²⁺)' },
    { g:'Biomolecule / Medicine → Central Transition / Alkaline Earth Metal Ion', a:'Vitamin B₁₂ (Cyanocobalamin)', b:'Cobalt (Co³⁺)' },
    { g:'Biomolecule / Medicine → Central Transition / Alkaline Earth Metal Ion', a:'Cisplatin (Anticancer chemotherapy agent)', b:'Platinum(II) (Pt²⁺)' },

    { g:'Coordination Ligand Name → Donor Atoms & Denticity', a:'Ethylenediamine (en)', b:'Bidentate (2 Nitrogen donor atoms)' },
    { g:'Coordination Ligand Name → Donor Atoms & Denticity', a:'Oxalate ion (C₂O₄²⁻)', b:'Bidentate (2 Oxygen donor atoms)' },
    { g:'Coordination Ligand Name → Donor Atoms & Denticity', a:'Diethylenetriamine (dien)', b:'Tridentate (3 Nitrogen donor atoms)' },
    { g:'Coordination Ligand Name → Donor Atoms & Denticity', a:'Ethylenediaminetetraacetate (EDTA⁴⁻)', b:'Hexadentate (2 Nitrogen + 4 Oxygen donor atoms)' },

    { g:'Coordination Complex → Characteristic Central Metal Oxidation State', a:'[Co(NH₃)₆]Cl₃', b:'Cobalt in +3 oxidation state' },
    { g:'Coordination Complex → Characteristic Central Metal Oxidation State', a:'K₄[Fe(CN)₆]', b:'Iron in +2 oxidation state' },
    { g:'Coordination Complex → Characteristic Central Metal Oxidation State', a:'K₃[Fe(CN)₆]', b:'Iron in +3 oxidation state' },
    { g:'Coordination Complex → Characteristic Central Metal Oxidation State', a:'[Ni(CO)₄]', b:'Nickel in 0 oxidation state' }
  ],

  orders:[
    { q:'Arrange the following ligands in increasing order of crystal field splitting strength (Spectrochemical Series)', s:['I⁻', 'Cl⁻', 'F⁻', 'H₂O', 'NH₃', 'CN⁻', 'CO'], sep:'<' },
    { q:'Arrange the following complexes in increasing order of their molar electrical conductivity in aqueous solution', s:['[Co(NH₃)₃Cl₃] (0 ions)', '[Co(NH₃)₄Cl₂]Cl (2 ions)', '[Co(NH₃)₅Cl]Cl₂ (3 ions)', '[Co(NH₃)₆]Cl₃ (4 ions)'], sep:'<' },
    { q:'Arrange the following metal carbonyls in increasing order of their Carbon-Oxygen (C–O) bond length', s:['Free CO (1.128 Å)', '[Ni(CO)₄]', '[Fe(CO)₅]', '[Cr(CO)₆]'], sep:'<' },
    { q:'Arrange the following complexes in order of increasing wavelength of light absorbed (λ_max)', s:['[Co(CN)₆]³⁻ (Strongest field, highest Δ_o)', '[Co(NH₃)₆]³⁺', '[Co(H₂O)₆]³⁺', '[CoF₆]³⁻ (Weakest field, lowest Δ_o)'], sep:'<' },
    { q:'Arrange the following denticities in increasing order', s:['Ammine NH₃ (Monodentate, 1)', 'Oxalate C₂O₄²⁻ (Bidentate, 2)', 'Diethylenetriamine dien (Tridentate, 3)', 'EDTA⁴⁻ (Hexadentate, 6)'], sep:'<' }
  ],

  facts:{
    T:[
      'In Werner theory, primary valencies are ionizable and correspond to oxidation state, while secondary valencies are non-ionizable and equal coordination number.',
      'According to Crystal Field Theory, tetrahedral complexes are always high-spin because crystal field splitting Δ_t is fundamentally smaller than pairing energy P.',
      'The chelate effect enhances the thermodynamic stability of a complex due to a favourable positive increase in entropy (ΔS > 0) upon displacement of monodentate ligands.',
      'Cisplatin, cis-[Pt(NH₃)₂Cl₂], is an effective anticancer drug, whereas the trans isomer is biologically inactive.',
      'Carbon monoxide (CO) is the strongest field ligand in the spectrochemical series due to synergic π-backbonding with transition metal d-orbitals.',
      'Tetrahedral complexes of type [M A₂ B₂] cannot exhibit geometrical (cis-trans) isomerism because all four positions are mutually adjacent.',
      'The optical isomers of [Co(en)₃]³⁺ are non-superimposable mirror images called enantiomers and rotate the plane of polarized light in opposite directions.',
      'Ambidentate ligands like NO₂⁻ and SCN⁻ can coordinate through either of two different donor atoms, giving rise to linkage isomerism.',
      'In [Ni(CO)₄], the oxidation state of nickel is zero and the complex adopts a tetrahedral geometry with sp³ hybridization.',
      'EDTA is a hexadentate chelating ligand containing two nitrogen donor atoms and four oxygen donor atoms.',
      'Colour in coordination compounds requires both partially filled d-orbitals (d¹ to d⁹) and an asymmetric ligand field to permit d-d transitions.',
      'In metal carbonyls, back-donation of electron density from metal d-orbitals into the π* antibonding orbital of CO lowers the C–O vibrational stretching frequency.'
    ],
    F:[
      'Tetrahedral complexes frequently form low-spin complexes with strong field ligands like CN⁻.',
      'The trans isomer of [Co(en)₂Cl₂]⁺ is optically active and can be resolved into dextro and laevo enantiomers.',
      '[Ni(CN)₄]²⁻ is a paramagnetic tetrahedral complex with two unpaired electrons.',
      'Hydrated copper sulphate is colourless, while anhydrous copper sulphate is deep blue.',
      'Square planar complexes of the type [M A₂ B₂] cannot exhibit geometrical isomerism.',
      'The primary valency of cobalt in [Co(NH₃)₅Cl]Cl₂ is 2, and its secondary valency is 5.',
      'The crystal field splitting in a tetrahedral complex is larger than that in an octahedral complex with identical ligands: Δ_t = (9/4) Δ_o.',
      'Synergic back-bonding in metal carbonyls strengthens the C–O bond and shortens its length compared to free CO gas.',
      'All coordination complexes with coordination number 4 adopt square planar geometry.',
      '[Fe(H₂O)₆]³⁺ is a diamagnetic inner-orbital complex.',
      'In qualitative salt analysis, DMG reacts with Cu²⁺ to produce a scarlet red precipitate.',
      'Primary valencies of coordination compounds are directional in space and determine the stereochemistry of the complex.'
    ]
  },

  mcq:[
    {
      q:'A coordination compound with empirical formula CoCl₃ · 4 NH₃ precipitates 1 mole of AgCl when treated with excess AgNO₃ solution per mole of the compound. The correct IUPAC formulation and secondary valency of cobalt are:',
      o:['[Co(NH₃)₄Cl₂]Cl and Secondary Valency = 6', '[Co(NH₃)₄Cl]Cl₂ and Secondary Valency = 5', '[Co(NH₃)₄]Cl₃ and Secondary Valency = 4', '[Co(NH₃)₃Cl₃] and Secondary Valency = 6'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Precipitation of 1 mole AgCl indicates exactly 1 ionizable Cl⁻ outside the coordination sphere.',
        'Total species: 1 Co, 3 Cl, 4 NH₃. Formula = [Co(NH₃)₄Cl₂]Cl.',
        'Secondary valency = number of ligands inside square brackets = 4 NH₃ + 2 Cl = 6.'
      ]
    },
    {
      q:'Which of the following complex ions is diamagnetic (zero unpaired electrons)?',
      o:['[Ni(CN)₄]²⁻', '[NiCl₄]²⁻', '[CoF₆]³⁻', '[Fe(H₂O)₆]²⁺'],
      a:0,
      tag:'Concept Trap',
      sol:[
        '[Ni(CN)₄]²⁻ contains Ni²⁺ (3d⁸). CN⁻ is a strong field ligand that forces pairing of the two unpaired 3d electrons.',
        'Hybridization is dsp² (square planar), leaving 0 unpaired electrons (diamagnetic).',
        '[NiCl₄]²⁻ has weak field Cl⁻ (sp³ tetrahedral, 2 unpaired e⁻).'
      ]
    },
    {
      q:'The correct IUPAC name of the complex [Pt(NH₃)₂Cl(NO₂)] is:',
      o:['Diamminechloridonitrito-N-platinum(II)', 'Diamminechloronitroplatinum(II)', 'Diamminechloridonitrito-O-platinum(II)', 'Diamminechloridonitroplatinum(IV)'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Ligands listed alphabetically: ammine (NH₃) before chlorido (Cl⁻) before nitrito-N (NO₂⁻ attached through nitrogen).',
        'Oxidation state: Pt + 2(0) + (−1) + (−1) = 0  ⇒  Pt = +2.',
        'Name: Diamminechloridonitrito-N-platinum(II).'
      ]
    },
    {
      q:'Which of the following complexes can exhibit optical isomerism (exist as a pair of enantiomers)?',
      o:['cis-[Co(en)₂Cl₂]⁺', 'trans-[Co(en)₂Cl₂]⁺', 'trans-[Pt(NH₃)₂Cl₂]', '[Ni(CN)₄]²⁻'],
      a:0,
      tag:'Stereo Trap',
      sol:[
        'cis-[Co(en)₂Cl₂]⁺ lacks a plane of symmetry or center of inversion; it is chiral and optically active.',
        'The trans isomer possesses a plane of symmetry and a center of inversion, rendering it optically inactive.'
      ]
    },
    {
      q:'What is the relationship between crystal field splitting in tetrahedral (Δ_t) and octahedral (Δ_o) complexes for identical metal ions and ligands?',
      o:['Δ_t = (4 / 9) Δ_o', 'Δ_t = (9 / 4) Δ_o', 'Δ_t = (2 / 3) Δ_o', 'Δ_t = (1 / 2) Δ_o'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Because there are only 4 ligands instead of 6 (factor 4/6 = 2/3) and none of the d-orbitals point directly at the ligands (further geometric factor 2/3):',
        'Δ_t = (2/3) × (2/3) Δ_o = (4/9) Δ_o.'
      ]
    },
    {
      q:'In which of the following metal carbonyls is the Carbon-Oxygen (C–O) bond order lowest and bond length longest?',
      o:['[V(CO)₆]⁻', '[Cr(CO)₆]', '[Mn(CO)₆]⁺', '[Fe(CO)₅]'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'A higher negative charge on the metal increases electron density for π-back-donation into the antibonding π* orbital of CO.',
        'Greater π* occupancy weakens the C–O bond, lowering bond order and increasing bond length.',
        '[V(CO)₆]⁻ has a net −1 charge, maximizing M → C π* back-bonding.'
      ]
    },
    {
      q:'The number of geometrical isomers possible for square planar [Pt(NH₃)(Br)(Cl)(py)] is:',
      o:['3', '2', '4', '1'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'For a square planar complex of type [M a b c d] with four different monodentate ligands, fixing ligand "a" allows the remaining three ligands (b, c, d) to each be placed in the trans position.',
        'This produces exactly 3 geometrical isomers (and 0 optical isomers).'
      ]
    },
    {
      q:'Which of the following ligands is an ambidentate ligand capable of producing linkage isomerism?',
      o:['Thiocyanate ion (SCN⁻)', 'Oxalate ion (C₂O₄²⁻)', 'Ethylenediamine (en)', 'Carbon monoxide (CO)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'SCN⁻ has two different donor atoms: it can coordinate through Sulphur (thiocyanato, M–SCN) or through Nitrogen (isothiocyanato, M–NCS).',
        'Hence it forms linkage isomers.'
      ]
    },
    {
      q:'The crystal field stabilization energy (CFSE) for a high-spin d⁴ octahedral complex in terms of Δ_o is:',
      o:['−0.6 Δ_o', '−1.6 Δ_o', '−1.2 Δ_o', '−0.8 Δ_o'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'For high-spin d⁴: configuration is t₂g³ e_g¹.',
        'CFSE = [3 × (−0.4) + 1 × (+0.6)] Δ_o = [−1.2 + 0.6] Δ_o = −0.6 Δ_o.'
      ]
    },
    {
      q:'How many chelate rings are present in the complex [Ca(EDTA)]²⁻?',
      o:['5 chelate rings', '6 chelate rings', '4 chelate rings', '2 chelate rings'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'EDTA⁴⁻ is a hexadentate ligand with 6 donor atoms.',
        'When it wraps around a central metal ion, it forms exactly 5 stable 5-membered chelate rings.'
      ]
    },
    {
      q:'Which of the following metal ions forms a brilliant scarlet-red chelate complex with dimethylglyoxime (DMG) in ammoniacal medium?',
      o:['Ni²⁺', 'Fe²⁺', 'Co²⁺', 'Cu²⁺'],
      a:0,
      tag:'Practical Trap',
      sol:[
        'DMG reacts specifically with Ni²⁺ in ammoniacal solution to form a scarlet-red precipitate of bis(dimethylglyoximato)nickel(II), [Ni(dmg)₂].',
        'It is a standard confirmatory test for nickel in Group IV salt analysis.'
      ]
    },
    {
      q:'The hybridization and shape of the complex [Fe(CO)₅] are:',
      o:['dsp³ and Trigonal bipyramidal', 'sp³d² and Octahedral', 'sp³ and Tetrahedral', 'd²sp³ and Square pyramidal'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'In [Fe(CO)₅], Fe is in zero oxidation state: [Ar] 3d⁶ 4s².',
        'Strong field CO forces pairing of 4s and 3d electrons into 3d⁸, freeing one 3d orbital.',
        'Hybridization is dsp³ giving a trigonal bipyramidal geometry.'
      ]
    },
    {
      q:'The pair of coordination compounds [Co(NH₃)₅(SO₄)]Br and [Co(NH₃)₅Br]SO₄ represents an example of:',
      o:['Ionization Isomerism', 'Hydrate Isomerism', 'Linkage Isomerism', 'Coordination Isomerism'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'The two complexes exchange the counter-ion between the coordination sphere and the ionization sphere.',
        'The first produces yellow AgBr ppt with AgNO₃; the second produces white BaSO₄ ppt with BaCl₂.',
        'This is Ionization Isomerism.'
      ]
    },
    {
      q:'Which of the following transition metal complexes is expected to absorb light of the shortest wavelength (highest energy)?',
      o:['[Co(CN)₆]³⁻', '[Co(NH₃)₆]³⁺', '[Co(H₂O)₆]³⁺', '[CoF₆]³⁻'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'CN⁻ is the strongest field ligand in this list, producing the largest crystal field splitting Δ_o.',
        'Since Δ_o = h c / λ, the complex with the largest Δ_o absorbs light of the shortest wavelength λ.'
      ]
    }
  ],

  gens:[
    function(R){
      var nAgCl = R.pick([1, 2, 3]);
      var complexes = {
        1:'[Co(NH₃)₄Cl₂]Cl',
        2:'[Co(NH₃)₅Cl]Cl₂',
        3:'[Co(NH₃)₆]Cl₃'
      };
      var d = [0, 1, 2, 3].filter(function(x){ return x !== nAgCl; });
      return {
        q:'When 1 mole of the coordination complex ' + complexes[nAgCl] + ' is treated with excess aqueous silver nitrate (AgNO₃), how many moles of AgCl precipitate will be formed?',
        ans:nAgCl, d:d, u:'mol AgCl',
        tag:'Calculation Trap',
        sol:[
          'Only chloride ions present outside the square brackets (in the ionization sphere) are ionizable.',
          'In ' + complexes[nAgCl] + ', there are ' + nAgCl + ' chloride ion(s) outside the coordination sphere.',
          'Hence, ' + nAgCl + ' mole(s) of AgCl precipitate.'
        ]
      };
    },
    function(R){
      var t2g = R.int(1, 4);
      var eg = R.int(0, 2);
      var cfse = (-0.4 * t2g + 0.6 * eg);
      var d1 = cfse + 0.4;
      var d2 = cfse - 0.4;
      var d3 = -0.4 * (t2g + eg);
      return {
        q:'Calculate the crystal field stabilization energy (CFSE) for an octahedral complex with electronic configuration t₂g' + t2g + ' e_g' + eg + ' (ignoring pairing energy):',
        ans:cfse, d:[d1, d2, d3], u:'Δ_o',
        tag:'Calculation Trap',
        sol:[
          'CFSE = [−0.4 × n(t₂g) + 0.6 × n(e_g)] Δ_o.',
          'CFSE = [−0.4 × ' + t2g + ' + 0.6 × ' + eg + '] Δ_o = [' + (-0.4 * t2g) + ' + ' + (0.6 * eg) + '] Δ_o = ' + R.f(cfse) + ' Δ_o.'
        ]
      };
    }
  ]
});

/* ==========================================================================
   UNIT C13: PURIFICATION AND CHARACTERISATION OF ORGANIC COMPOUNDS
   ========================================================================== */
NEET.reg({
  id:'C13',
  subj:'Organic Chemistry',
  type:'conc',
  name:'Purification and Characterisation of Organic Compounds',
  syl:'Purification: Crystallization, sublimation, distillation, differential extraction, and chromatography - principles and their applications. Qualitative analysis - Detection of nitrogen, sulphur, phosphorus, and halogens. Quantitative analysis (basic principles only) - Estimation of carbon, hydrogen, nitrogen, halogens, sulphur, phosphorus. Calculations of empirical formulae and molecular formulae: Numerical problems in organic quantitative analysis.',
  kw:['purification', 'crystallization', 'sublimation', 'steam distillation', 'vacuum distillation', 'lassaigne test', 'kjeldahl', 'dumas', 'carius method', 'retention factor', 'empirical formula'],

  formulas:[
    { n:'Liebig Combustion Estimation of Carbon and Hydrogen', f:'%C = (12 / 44) · (m_CO2 / m) · 100;   %H = (2 / 18) · (m_H2O / m) · 100', u:'%', s:'m = mass of organic compound; m_CO2 absorbed in KOH; m_H2O absorbed in anhydrous CaCl₂', b:'U-tubes must be weighed in exact order: CaCl₂ tube first (absorbs water), then KOH tube (absorbs CO₂).' },
    { n:'Dumas Method for Nitrogen Estimation', f:'%N = (28 / 22400) · (V_0 / m) · 100', u:'%', s:'V_0 is volume of dry N₂ gas at STP (P_0 = P_barometric − aqueous tension at T)', b:'Failure to subtract aqueous tension leads to falsely high nitrogen percentage.' },
    { n:'Kjeldahl Method for Nitrogen Estimation', f:'%N = [1.4 · N_acid · (V_blank − V_titre)] / m', u:'%', s:'N_acid is normality of standardized acid; V is volume consumed by liberated NH₃', b:'FAILS completely for nitro (-NO₂), azo (-N=N-), and heterocyclic nitrogen (pyridine, quinoline) compounds.' },
    { n:'Carius Method for Halogen Estimation', f:'%X = [M_X / M_AgX] · (m_AgX / m) · 100', u:'%', s:'AgCl: M_X/M_AgX = 35.5 / 143.5;  AgBr: 80 / 188;  AgI: 127 / 235', b:'Organic compound heated with fuming HNO₃ and excess solid AgNO₃ inside a sealed heavy-walled Carius glass tube.' },
    { n:'Carius Method for Sulphur Estimation', f:'%S = (32 / 233) · (m_BaSO4 / m) · 100', u:'%', s:'Sulphur oxidized to H₂SO₄ by fuming HNO₃; precipitated as barium sulphate BaSO₄ by adding BaCl₂', b:'Requires thorough washing of BaSO₄ precipitate to remove occluded barium chloride.' },
    { n:'Retention Factor in Thin Layer / Paper Chromatography', f:'R_f = (Distance travelled by compound) / (Distance travelled by solvent front)', u:'Dimensionless (< 1)', s:'Rf value depends on stationary phase, mobile phase, and temperature', b:'Rf values cannot exceed 1.0; Rf has no units and is sensitive to solvent chamber saturation.' }
  ],

  traps:[
    { t:'The Kjeldahl method FAILS completely for compounds containing nitrogen in nitro (-NO₂), azo (-N=N-), or ring structures (e.g. pyridine, quinoline).', c:'Under boiling concentrated H₂SO₄ digestion, these nitrogen atoms do NOT convert quantitatively into ammonium sulphate (NH₄)₂SO₄.', tag:'NCERT Exception' },
    { t:'In the Lassaigne test for halogens, the sodium fusion extract MUST be boiled with concentrated HNO₃ before adding AgNO₃.', c:'Boiling decomposes any NaCN and Na₂S present into HCN and H₂S gases; if not expelled, they form white AgCN and black Ag₂S precipitates that interfere with AgX identification.', tag:'NCERT Exception' },
    { t:'Steam distillation purifies substances that are steam-volatile and completely immiscible with water (e.g. aniline, o-nitrophenol), boiling them at a temperature BELOW 100 °C.', c:'The mixture boils when the sum of the partial vapour pressures equals atmospheric pressure: P_total = P_water + P_organic = 1 atm, which occurs below 373 K.', tag:'NCERT Exception' },
    { t:'Glycerol decomposes at its normal boiling point (563 K) and therefore MUST be purified by distillation under reduced pressure (vacuum distillation).', c:'Lowering external pressure to 12 mm Hg drops its boiling point to 453 K, allowing it to distill safely without thermal decomposition.', tag:'NCERT Exception' },
    { t:'When an organic compound contains BOTH Nitrogen and Sulphur, the Lassaigne extract gives a BLOOD-RED colouration with FeCl₃, NOT Prussian blue.', c:'Sodium reacts with C, N, and S together to form sodium thiocyanate (NaSCN), which reacts with Fe³⁺ to form the blood-red complex [Fe(SCN)]²⁺.', tag:'NCERT Exception' },
    { t:'In the Carius method for phosphorus estimation, phosphorus is weighed either as magnesium pyrophosphate (Mg₂P₂O₇) or ammonium phosphomolybdate.', c:'Heating magnesium ammonium phosphate (MgNH₄PO₄) ignites it cleanly to Mg₂P₂O₇ (%P = (62/222) · (m_ppt / m) · 100).', tag:'Calculation Trap' },
    { t:'In Dumas method calculations, the volume of moist nitrogen collected over water in the nitrometer MUST be corrected for aqueous tension (vapour pressure of water).', c:'P_dry = P_observed − Aqueous Tension; neglecting this makes the calculated %N falsely high.', tag:'Unit Conversion Trap' },
    { t:'Separation of a mixture of ortho-nitrophenol and para-nitrophenol is achieved by STEAM DISTILLATION because ortho-nitrophenol is steam-volatile.', c:'Intramolecular hydrogen bonding in ortho-nitrophenol prevents intermolecular association, giving it higher vapour pressure and volatility than intermolecularly H-bonded para-nitrophenol.', tag:'NCERT Exception' }
  ],

  flows:[
    { t:'Lassaigne Sodium Fusion Extract Systematic Testing', root:'Fuse Organic Compound with Metallic Sodium in Ignition Tube',
      br:[
        { l:'Test for Nitrogen (N)', n:['Boil extract with FeSO₄ and dil. H₂SO₄','Add few drops FeCl₃','Formation of Prussian Blue Fe₄[Fe(CN)₆]₃ confirms N'] },
        { l:'Test for Sulphur (S)', n:['(a) Sodium nitroprusside → deep violet colour [Fe(CN)₅NOS]⁴⁻','(b) Lead acetate + acetic acid → black PbS precipitate'] },
        { l:'Test for Halogens (Cl, Br, I)', n:['Boil with conc. HNO₃ to expel HCN and H₂S','Add AgNO₃ solution:','White ppt soluble in NH₄OH: Cl⁻','Pale yellow ppt sparingly soluble: Br⁻','Yellow ppt insoluble in NH₄OH: I⁻'] }
      ]
    },
    { t:'Organic Purification Technique Selection Tree', root:'Check Physical Properties & Thermal Stability',
      br:[
        { l:'Solid sublimes directly without melting', n:['Camphor, Naphthalene, Benzoic acid, Anthracene','Sublimation'] },
        { l:'Liquid decomposes at normal boiling point', n:['Glycerol, crude soap lye','Distillation under Reduced Pressure (Vacuum)'] },
        { l:'Immiscible with water and steam-volatile', n:['Aniline, o-Nitrophenol, Turpentine oil','Steam Distillation (boils at T < 100 °C)'] },
        { l:'Liquids with boiling point difference < 25 K', n:['Crude petroleum fractions, Acetone + Methanol','Fractional Distillation with fractionating column'] }
      ]
    },
    { t:'Quantitative Combustion Analysis Pipeline (Liebig Method)', chain:['Dry organic compound sample (m g) heated with excess CuO in combustion tube','Carbon burns to CO₂; Hydrogen burns to H₂O','H₂O absorbed by pre-weighed U-tube containing anhydrous CaCl₂ (Δm₁ = m_H₂O)','CO₂ absorbed by second pre-weighed U-tube containing conc. KOH (Δm₂ = m_CO₂)','Compute: %C = (12/44)(m_CO₂/m)·100 and %H = (2/18)(m_H₂O/m)·100'] }
  ],

  lab:[
    { t:'Lassaigne Test for Phosphorus (Canary Yellow Ppt)', d:'Fuse organic compound with sodium peroxide (Na₂O₂); phosphorus oxidizes to sodium phosphate (Na₃PO₄). Extract with water, boil with concentrated HNO₃, and add excess ammonium molybdate solution → formation of canary yellow precipitate of ammonium phosphomolybdate ((NH₄)₃PO₄ · 12 MoO₃).' },
    { t:'Thin Layer Chromatography (TLC) Plate Development', d:'Silica gel G coated on glass plate. Spot sample 2 cm above bottom. Place plate in closed jar saturated with developing solvent. Detect colorless spots using UV light (254 nm) or iodine chamber (yellow-brown spots).' },
    { t:'Kjeldahl Digestion and Distillation Rig', d:'Digestion in long-necked Kjeldahl flask with conc. H₂SO₄ + K₂SO₄ (raises bp) + CuSO₄ (catalytic oxidant). Dilute, make alkaline with excess NaOH, steam-distill NH₃ into measured excess standard H₂SO₄. Back-titrate with standard NaOH.' },
    { t:'Differential Extraction in Separatory Funnel', d:'Extracts compound from aqueous solution into organic solvent (e.g. ether, CHCl₃). Multiple extractions using smaller solvent volumes (e.g. three 20 mL portions) extract significantly more mass than a single extraction with 60 mL.' }
  ],

  pairs:[
    { g:'Lassaigne Test Observation → Element Detected', a:'Prussian blue colouration with FeSO₄ / FeCl₃ / H₂SO₄', b:'Nitrogen (as NaCN forming Fe₄[Fe(CN)₆]₃)' },
    { g:'Lassaigne Test Observation → Element Detected', a:'Violet / purple colouration with sodium nitroprusside', b:'Sulphur (as Na₂S forming [Fe(CN)₅NOS]⁴⁻)' },
    { g:'Lassaigne Test Observation → Element Detected', a:'Blood-red colouration with neutral FeCl₃ solution', b:'Nitrogen and Sulphur present together (forming NaSCN)' },
    { g:'Lassaigne Test Observation → Element Detected', a:'Canary-yellow precipitate with ammonium molybdate and HNO₃', b:'Phosphorus (forming (NH₄)₃PO₄ · 12 MoO₃)' },

    { g:'Organic Compound Mixture → Appropriate Separation Technique', a:'Aniline and Water (Aniline is steam-volatile and insoluble)', b:'Steam Distillation' },
    { g:'Organic Compound Mixture → Appropriate Separation Technique', a:'Glycerol and Spent Lye (Glycerol decomposes at normal bp 563 K)', b:'Vacuum Distillation (Distillation under Reduced Pressure)' },
    { g:'Organic Compound Mixture → Appropriate Separation Technique', a:'Acetone (bp 329 K) and Methyl Alcohol (bp 338 K)', b:'Fractional Distillation (bp difference < 25 K)' },
    { g:'Organic Compound Mixture → Appropriate Separation Technique', a:'Benzoic acid and Sodium Chloride (Salt does not sublime)', b:'Sublimation' },

    { g:'Quantitative Estimation Method → Target Element', a:'Liebig Combustion Tube Method', b:'Carbon and Hydrogen (as CO₂ and H₂O)' },
    { g:'Quantitative Estimation Method → Target Element', a:'Kjeldahl Acid Digestion Method', b:'Nitrogen (as liberated NH₃ absorbed in standard acid)' },
    { g:'Quantitative Estimation Method → Target Element', a:'Dumas Sealed Combustion Method', b:'Nitrogen (collected as dry N₂ gas in nitrometer)' },
    { g:'Quantitative Estimation Method → Target Element', a:'Carius Sealed Tube Method', b:'Halogens (as AgX) and Sulphur (as BaSO₄)' },

    { g:'Lassaigne Test Precipitate / Complex → Chemical Formula', a:'Prussian blue colouration for Nitrogen', b:'Fe₄[Fe(CN)₆]₃' },
    { g:'Lassaigne Test Precipitate / Complex → Chemical Formula', a:'Violet / purple complex for Sulphur', b:'[Fe(CN)₅NOS]⁴⁻' },
    { g:'Lassaigne Test Precipitate / Complex → Chemical Formula', a:'Blood-red complex for Nitrogen and Sulphur together', b:'[Fe(SCN)]²⁺' },
    { g:'Lassaigne Test Precipitate / Complex → Chemical Formula', a:'Canary yellow precipitate for Phosphorus', b:'(NH₄)₃PO₄ · 12 MoO₃' },

    { g:'Organic Compound → Characteristic Purification Technique', a:'Camphor contaminated with common salt', b:'Sublimation' },
    { g:'Organic Compound → Characteristic Purification Technique', a:'Aniline from an aqueous mixture', b:'Steam Distillation' },
    { g:'Organic Compound → Characteristic Purification Technique', a:'Glycerol from spent soap lye', b:'Vacuum Distillation (Reduced Pressure)' },
    { g:'Organic Compound → Characteristic Purification Technique', a:'Separation of amino acids in a plant extract', b:'Paper / Column Chromatography' }
  ],

  orders:[
    { q:'Arrange the halogens in increasing order of molar mass of silver halide (AgX) precipitate in Carius method', s:['AgCl (143.5 g/mol)', 'AgBr (188.0 g/mol)', 'AgI (235.0 g/mol)'], sep:'<' },
    { q:'Arrange the steps of the Kjeldahl nitrogen estimation method in chronological sequence', s:['Digestion of sample with conc. H₂SO₄ and CuSO₄', 'Distillation of digest with excess NaOH', 'Absorption of evolved NH₃ in standard acid', 'Back-titration of unreacted acid with standard alkali'], sep:'<' },
    { q:'Arrange the following purification techniques in increasing order of maximum operating temperature for purifying thermally sensitive substances', s:['Vacuum Distillation (Lowest thermal stress)', 'Steam Distillation (Boils < 100 °C)', 'Fractional Distillation (Operates near normal bp)', 'Simple Distillation (High heat)'], sep:'<' },
    { q:'Arrange the following nitrogenous compounds in order of suitability for Kjeldahl estimation (from totally unsuitable to suitable)', s:['Nitrobenzene (Kjeldahl fails)', 'Pyridine (Kjeldahl fails)', 'Azobenzene (Kjeldahl fails)', 'Aniline (Kjeldahl succeeds)'], sep:'<' },
    { q:'Arrange the fractions obtained from crude petroleum distillation in increasing order of boiling point range', s:['Petroleum Gas (< 303 K)', 'Petrol / Gasoline (303–393 K)', 'Kerosene (448–523 K)', 'Diesel Oil (523–623 K)'], sep:'<' }
  ],

  facts:{
    T:[
      'In steam distillation, the mixture of water and steam-volatile organic liquid boils when the total vapour pressure reaches 1 atmosphere, always below 373 K.',
      'The Kjeldahl method cannot be used to estimate nitrogen in nitrobenzene, azobenzene, or pyridine.',
      'Before testing for halogens in a Lassaigne extract, the extract must be boiled with concentrated HNO₃ to expel cyanide and sulphide ions.',
      'Prussian blue formed in the Lassaigne nitrogen test has the chemical formula Fe₄[Fe(CN)₆]₃.',
      'In paper chromatography, the stationary phase is water molecules trapped in the cellulose network of the filter paper.',
      'Retention factor (R_f) in chromatography is a dimensionless ratio that is always less than 1.0.',
      'In Carius estimation of sulphur, sulphur is oxidized to sulphate and weighed as insoluble barium sulphate (BaSO₄).',
      'The Dumas method estimates nitrogen in all organic compounds, including those for which the Kjeldahl method fails.',
      'Separation of ortho-nitrophenol from para-nitrophenol is possible via steam distillation due to intramolecular hydrogen bonding in the ortho isomer.',
      'In the Liebig combustion method, anhydrous calcium chloride absorbs water and concentrated potassium hydroxide absorbs carbon dioxide.',
      'Sublimation can separate benzoic acid or camphor from non-volatile mineral impurities in one step.',
      'Multiple extractions with smaller portions of solvent in a separatory funnel are more efficient than a single extraction with the same total volume.'
    ],
    F:[
      'The Kjeldahl method gives accurate nitrogen percentages for pyridine and nitrobenzene.',
      'In the Lassaigne test for halogens, sodium extract is boiled with concentrated HCl before adding silver nitrate.',
      'Glycerol is purified commercially by simple distillation at atmospheric pressure.',
      'The retention factor (R_f) of a compound on a TLC plate can exceed 1.0 if the compound moves faster than the solvent front.',
      'In the Liebig combustion method, CO₂ is absorbed by anhydrous calcium chloride and water is absorbed by KOH.',
      'A blood-red colouration in the Lassaigne test indicates the presence of halogen and nitrogen together.',
      'Steam distillation can only be used for compounds that are completely miscible with water in all proportions.',
      'In the Dumas method, nitrogen gas is collected over concentrated sulphuric acid in the nitrometer.',
      'Para-nitrophenol is more steam-volatile than ortho-nitrophenol.',
      'Carius estimation of halogens involves heating the organic compound with dilute hydrochloric acid.',
      'Sublimation is a chemical reaction used to convert liquids into solids directly.',
      'In paper chromatography, the mobile phase is always a solid adsorbent like silica gel.'
    ]
  },

  mcq:[
    {
      q:'In Dumas method for estimation of nitrogen, 0.30 g of an organic compound gave 50 mL of nitrogen gas collected at 300 K and 715 mm Hg pressure. If the aqueous tension at 300 K is 15 mm Hg, the percentage of nitrogen in the compound is approximately:',
      o:['17.46%', '18.25%', '15.60%', '21.30%'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Dry nitrogen pressure P_1 = P_obs − Aqueous Tension = 715 − 15 = 700 mm Hg.',
        'Convert to volume at STP: V_0 = (P_1 V_1 / T_1) × (T_0 / P_0) = (700 × 50 / 300) × (273 / 760) ≈ 41.9 mL.',
        '%N = (28 / 22400) × (V_0 / m) × 100 = (28 / 22400) × (41.9 / 0.30) × 100 ≈ 17.46%.'
      ]
    },
    {
      q:'For which of the following compounds is the Kjeldahl method of nitrogen estimation NOT applicable?',
      o:['Nitrobenzene', 'Pyridine', 'Azobenzene', 'All of these'],
      a:3,
      tag:'NCERT Exception',
      sol:[
        'Kjeldahl method fails for nitro (-NO₂), azo (-N=N-), and ring-nitrogen compounds (pyridine, quinoline) because their nitrogen cannot be quantitatively converted to (NH₄)₂SO₄ on acid digestion.',
        'All three listed compounds fail.'
      ]
    },
    {
      q:'In the Lassaigne test for halogens, why is the sodium fusion extract boiled with concentrated nitric acid (HNO₃) before adding silver nitrate?',
      o:['To decompose NaCN and Na₂S into volatile HCN and H₂S gases', 'To oxidize halide ions into elemental halogens', 'To precipitate silver chloride prematurely', 'To make the solution alkaline for precipitation'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'If NaCN or Na₂S are present, they react with AgNO₃ to give white AgCN and black Ag₂S precipitates, which interfere with halide detection.',
        'Boiling with conc. HNO₃ decomposes them: NaCN + HNO₃ → NaNO₃ + HCN↑ and Na₂S + 2 HNO₃ → 2 NaNO₃ + H₂S↑.'
      ]
    },
    {
      q:'In Carius method of halogen estimation, 0.15 g of an organic compound gave 0.12 g of AgBr. What is the percentage of bromine in the compound (Atomic masses: Ag = 108, Br = 80)?',
      o:['34.04%', '28.15%', '42.50%', '51.06%'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Molar mass of AgBr = 108 + 80 = 188 g mol⁻¹.',
        '%Br = (80 / 188) × (m_AgBr / m_compound) × 100.',
        '%Br = (80 / 188) × (0.12 / 0.15) × 100 = (80 / 188) × 0.8 × 100 ≈ 34.04%.'
      ]
    },
    {
      q:'A mixture of ortho-nitrophenol and para-nitrophenol can be separated cleanly by steam distillation because:',
      o:['ortho-Nitrophenol is steam-volatile due to intramolecular hydrogen bonding', 'para-Nitrophenol is steam-volatile due to intermolecular hydrogen bonding', 'ortho-Nitrophenol has a higher boiling point than para-nitrophenol', 'ortho-Nitrophenol is insoluble in steam while para-nitrophenol is soluble'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'ortho-Nitrophenol exhibits chelation via intramolecular hydrogen bonding between -OH and -NO₂, which prevents association with neighbouring molecules and makes it steam-volatile.',
        'para-Nitrophenol forms intermolecular hydrogen bonds, leading to high association, higher boiling point, and non-volatility with steam.'
      ]
    },
    {
      q:'In the Lassaigne test, the formation of a blood-red colouration on addition of FeCl₃ indicates the simultaneous presence of:',
      o:['Nitrogen and Sulphur', 'Nitrogen and Chlorine', 'Sulphur and Phosphorus', 'Carbon and Nitrogen only'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'When both N and S are present, sodium fusion forms sodium thiocyanate: Na + C + N + S → NaSCN.',
        'With Fe³⁺, it produces the blood-red complex: Fe³⁺ + SCN⁻ → [Fe(SCN)]²⁺ (iron(III) thiocyanate).'
      ]
    },
    {
      q:'In a paper chromatography experiment, if the solvent front moves 10.0 cm and the compound spot moves 6.2 cm from the baseline, the retention factor (R_f) of the compound is:',
      o:['0.62', '1.61', '0.38', '6.20'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'R_f = (Distance travelled by compound) / (Distance travelled by solvent front).',
        'R_f = 6.2 cm / 10.0 cm = 0.62 (dimensionless, < 1.0).'
      ]
    },
    {
      q:'In the Liebig method, an organic compound containing C and H is burned in excess oxygen in the presence of CuO. The functions of anhydrous CaCl₂ and concentrated KOH are respectively to absorb:',
      o:['H₂O and CO₂', 'CO₂ and H₂O', 'H₂ and CO', 'O₂ and N₂'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Water vapour produced is absorbed by anhydrous calcium chloride in the first U-tube (CaCl₂ + n H₂O → hydrated salt).',
        'Carbon dioxide is absorbed by concentrated KOH in the second bulb (2 KOH + CO₂ → K₂CO₃ + H₂O).'
      ]
    },
    {
      q:'Glycerol boils at 563 K with decomposition at atmospheric pressure. Which purification technique should be used to distill it without decomposition?',
      o:['Vacuum distillation (Distillation under reduced pressure)', 'Steam distillation', 'Fractional distillation', 'Sublimation'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Glycerol decomposes before reaching its atmospheric boiling point (563 K).',
        'Under reduced pressure (vacuum of ~12 mm Hg), its boiling point drops to 453 K, allowing it to distill cleanly without decomposing.'
      ]
    },
    {
      q:'0.25 g of an organic compound on Kjeldahl analysis liberated ammonia that neutralized 30 mL of 0.1 N H₂SO₄. The percentage of nitrogen in the compound is:',
      o:['16.8%', '14.0%', '21.0%', '12.5%'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        '%N = [1.4 × Normality × Volume(mL)] / mass(g).',
        '%N = [1.4 × 0.1 × 30] / 0.25 = 4.2 / 0.25 = 16.8%.'
      ]
    },
    {
      q:'The chemical formula of the yellow precipitate formed in the test for phosphorus using ammonium molybdate is:',
      o:['(NH₄)₃PO₄ · 12 MoO₃', '(NH₄)₂MoO₄', '(NH₄)₃PMo₁₂O₄₀ · H₂O', 'Both (NH₄)₃PO₄ · 12 MoO₃ and (NH₄)₃[PMo₁₂O₄₀]'],
      a:3,
      tag:'NCERT Exception',
      sol:[
        'The canary-yellow precipitate of ammonium phosphomolybdate can be formulated either as (NH₄)₃PO₄ · 12 MoO₃ or (NH₄)₃[PMo₁₂O₄₀].',
        'Both representations are NCERT-standard.'
      ]
    },
    {
      q:'In Carius method, 0.32 g of an organic compound gave 0.466 g of BaSO₄. The percentage of sulphur in the compound is (Atomic masses: Ba = 137, S = 32, O = 16):',
      o:['20.0%', '25.0%', '15.0%', '18.5%'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Molar mass of BaSO₄ = 137 + 32 + 64 = 233 g mol⁻¹.',
        '%S = (32 / 233) × (0.466 / 0.32) × 100 = (32 / 233) × 1.45625 × 100 = 0.13734 × 145.625 ≈ 20.0%.'
      ]
    },
    {
      q:'Which of the following organic substances sublimes directly upon heating and can be purified by sublimation?',
      o:['Camphor', 'Naphthalene', 'Benzoic acid', 'All of these'],
      a:3,
      tag:'Concept Trap',
      sol:[
        'Camphor, naphthalene, anthracene, and benzoic acid all possess high vapour pressures as solids below their melting points and sublime cleanly.',
        'All three listed are classic examples.'
      ]
    },
    {
      q:'In qualitative sodium fusion test, nitrogen is detected as Prussian blue. The oxidation states of the two iron atoms in Fe₄[Fe(CN)₆]₃ are:',
      o:['Outer iron +3 and Inner iron +2', 'Outer iron +2 and Inner iron +3', 'Both iron atoms are +2', 'Both iron atoms are +3'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Prussian blue is ferric ferrocyanide: Fe₄[Fe(CN)₆]₃.',
        'The 4 outer iron cations are Fe³⁺ (+3), and the 3 complexed iron anions are [Fe(CN)₆]⁴⁻ containing Fe²⁺ (+2).'
      ]
    }
  ],

  gens:[
    function(R){
      var m = 0.2;
      var n_acid = 0.1;
      var v_acid = R.pick([15, 20, 25, 30]);
      var pctN = (1.4 * n_acid * v_acid) / m;
      var d1 = pctN * 1.5;
      var d2 = pctN / 2;
      var d3 = (1.4 * 0.2 * v_acid) / m;
      return {
        q:'In a Kjeldahl estimation of nitrogen, 0.20 g of an organic compound liberated ammonia gas which completely neutralized ' + v_acid + ' mL of 0.10 N H₂SO₄. What is the percentage of nitrogen in the compound?',
        ans:pctN, d:[d1, d2, d3], u:'%',
        tag:'Calculation Trap',
        sol:[
          '%N = [1.4 × Normality of Acid × Volume in mL] / mass of compound.',
          '%N = [1.4 × 0.10 × ' + v_acid + '] / 0.20 = ' + (0.14 * v_acid) + ' / 0.20 = ' + R.f(pctN) + '%.'
        ]
      };
    },
    function(R){
      var distSolv = 10.0;
      var distComp = R.pick([4.5, 6.0, 7.5, 8.2]);
      var rf = distComp / distSolv;
      var d1 = distSolv / distComp;
      var d2 = rf * 0.5;
      var d3 = 1 - rf;
      return {
        q:'In a thin-layer chromatography (TLC) run, the solvent front advances ' + distSolv + ' cm while a purplish compound spot travels ' + distComp + ' cm from the original pencil baseline. What is the retention factor (R_f)?',
        ans:rf, d:[d1, d2, d3], u:'',
        tag:'Calculation Trap',
        sol:[
          'R_f = (Distance travelled by compound) / (Distance travelled by solvent front).',
          'R_f = ' + distComp + ' / ' + distSolv + ' = ' + R.f(rf) + ' (dimensionless).'
        ]
      };
    }
  ]
});

/* ==========================================================================
   UNIT C14: SOME BASIC PRINCIPLES OF ORGANIC CHEMISTRY (GOC)
   ========================================================================== */
NEET.reg({
  id:'C14',
  subj:'Organic Chemistry',
  type:'conc',
  name:'Some Basic Principles of Organic Chemistry',
  syl:'Tetravalency of carbon: Shapes of simple molecules - hybridization (s and p); Classification of organic compounds based on functional groups: and those containing halogens, oxygen, nitrogen, and sulphur; Homologous series: Isomerism - structural and stereoisomerism. Nomenclature (Trivial and IUPAC). Covalent bond fission - Homolytic and heterolytic: free radicals, carbocations, and carbanions; stability of carbocations and free radicals, electrophiles, and nucleophiles. Electronic displacement in a covalent bond - Inductive effect, electromeric effect, resonance, and hyperconjugation. Common types of organic reactions - Substitution, addition, elimination, and rearrangement.',
  kw:['goc', 'general organic chemistry', 'hybridization', 'carbocation', 'carbanion', 'inductive effect', 'hyperconjugation', 'resonance', 'iupac priority', 'tautomerism', 'electrophile'],

  formulas:[
    { n:'Carbon Hybridization & s-Character Acidity', f:'sp (50% s, linear)  >  sp² (33% s, planar)  >  sp³ (25% s, tetrahedral)', u:'—', s:'Higher s-character brings electrons closer to positive nucleus, increasing electronegativity (C_sp = 3.29, C_sp² = 2.75, C_sp³ = 2.48)', b:'Ethynide anion HC≡C⁻ is more stable than CH₂=CH⁻ and CH₃CH₂⁻; terminal alkynes are weakly acidic (pKa ~ 25).' },
    { n:'Hyperconjugation Stability of Carbocations & Radicals', f:'Stability ∝ Number of α-Hydrogen atoms (forming no-bond resonance)', u:'—', s:'Overlap between σ(C–H) bonding orbital and adjacent empty 2p-orbital of carbocation', b:'Fails if the α-C–H bond cannot align parallel to the empty p-orbital (e.g. at bridgehead positions where Bredt rule applies).' },
    { n:'Inductive Effect Magnitude & Distance Decay', f:'Magnitude: −I or +I decreases rapidly as (1 / d³), effectively zero beyond 3 carbons', u:'—', s:'−I order: −NO₂ > −CN > −COOH > −F > −Cl > −Br > −I > −OH > −C₆H₅;  +I order: −C(CH₃)₃ > −CH(CH₃)₂ > −CH₂CH₃ > −CH₃', b:'Inductive effect operates solely through σ-bonds; does not involve π-electrons.' },
    { n:'Degree of Unsaturation (Double Bond Equivalent)', f:'DBE = C + 1 − (H / 2) − (X / 2) + (N / 2)', u:'Dimensionless', s:'Count of rings plus π-bonds in molecular formula (X = halogen, O and S ignored)', b:'Does not distinguish between a ring and a double bond without chemical test.' },
    { n:'IUPAC Principal Functional Group Priority Hierarchy', f:'−COOH > −SO₃H > Anhydride > Ester > −COCl > −CONH₂ > −CN > −CHO > >C=O > −OH > −SH > −NH₂ > C=C > C≡C', u:'Priority Order', s:'Principal group gets lowest locant and suffix; all lower groups become prefixes', b:'−NO₂, −OR (alkoxy), and halogens (−F, −Cl, −Br, −I) NEVER take suffix priority; always named as prefixes.' },
    { n:'Stereoisomer Count Formula', f:'Total Stereoisomers = 2ⁿ  (for unsymmetrical molecules with n stereocenters)', u:'Count', s:'Includes both enantiomer pairs and diastereomers', b:'If molecule possesses internal symmetry elements (meso forms possible), total stereoisomers < 2ⁿ.' }
  ],

  traps:[
    { t:'The tropylium carbocation (cycloheptatrienyl cation, C₇H₇⁺) is exceptionally stable, exceeding even tertiary and triphenylmethyl carbocations.', c:'It possesses 6 π-electrons fully delocalized across a planar 7-membered ring, fulfilling Hückel rule (4n + 2 = 6, n = 1) for aromatic stability.', tag:'NCERT Exception' },
    { t:'Carbanions have a stability order that is the EXACT REVERSE of carbocations: Methyl > 1° > 2° > 3°.', c:'Alkyl groups exert electron-donating +I inductive effects; adding electron density to an already negatively charged carbon destabilizes the carbanion.', tag:'Concept Trap' },
    { t:'Bridgehead carbocations (e.g. 1-bromobicyclo[2.2.1]heptane) CANNOT attain planar sp² geometry and are therefore extraordinarily unstable (Bredt rule).', c:'The rigid bicyclic cage prevents the bridgehead carbon from flattening to the required 120° trigonal planar geometry, precluding SN1 reactions.', tag:'Boundary Failure' },
    { t:'The electromeric effect (E) is a purely TEMPORARY effect that operates only in the presence of an attacking reagent and vanishes when the reagent is removed.', c:'It involves complete displacement of a shared pair of π-electrons to one of the atoms at the requirement of the attacking reagent.', tag:'NCERT Exception' },
    { t:'In IUPAC nomenclature, halogen (−Cl, −Br), nitro (−NO₂), and alkoxy (−OR) groups are NEVER treated as principal functional groups; they are ALWAYS treated as substituent prefixes.', c:'IUPAC rules reserve primary suffixes exclusively for characteristic groups like acids, carbonyls, alcohols, and amines.', tag:'NCERT Exception' },
    { t:'A molecule containing two or more chiral centers can be completely OPTICALLY INACTIVE if it contains an internal plane of symmetry (a meso compound).', c:'The optical rotation caused by one half of the molecule is internally compensated by the equal and opposite rotation of the other half.', tag:'Stereo Trap' },
    { t:'Carbocations readily undergo skeletal rearrangement via 1,2-hydride or 1,2-methyl shifts if the shift yields a more stable carbocation.', c:'Conversion of a secondary carbocation into a tertiary carbocation (e.g. from neopentyl or 3-methyl-2-butyl systems) has a low activation barrier and is driven by enthalpy gain.', tag:'Concept Trap' },
    { t:'Tautomerism is a chemical equilibrium involving migration of a proton between two polyvalent atoms, NOT resonance.', c:'Resonance involves only delocalization of electrons while nuclei remain fixed; tautomerism involves actual movement of atomic nuclei (protons).', tag:'Concept Trap' }
  ],

  flows:[
    { t:'Reaction Intermediate Stability Hierarchy', chain:['Carbocations: Tropylium > Benzyl ≈ Allyl ≈ 3° (9 α-H) > 2° (6 α-H) > 1° (3 α-H) > CH₃⁺ (0 α-H)','Free Radicals: Benzyl > Allyl > 3° > 2° > 1° > CH₃•','Carbanions (Reverse!): CH₃⁻ > 1° > 2° > 3° (Destabilized by +I alkyl groups)'] },
    { t:'IUPAC Nomenclature Decision Tree', root:'Identify Principal Functional Group (Table of Priority)',
      br:[
        { l:'Principal Group has suffix priority', n:['Identify Longest Carbon Chain containing principal group and max unsaturation','Number chain from end giving principal group lowest locant','Assign alphabetical order to substituent prefixes (ethyl before methyl)'] },
        { l:'Only Prefix Groups present (−NO₂, −X, −OR)', n:['Number chain from end giving lowest locant set to substituents','Apply lowest sum / first point of difference rule'] }
      ]
    },
    { t:'Carbocation Rearrangement Pipeline', chain:['Initial heterolytic cleavage forms carbocation (e.g. 1° or 2°)','Check adjacent carbons for higher substitution or resonance stabilization','Perform 1,2-Hydride shift (if H present) or 1,2-Methyl shift','Yields more stable 3° or allylic/benzylic carbocation','Nucleophile attacks rearranged carbocation'] }
  ],

  lab:[
    { t:'Detection of Unsaturation (Baeyer Test vs Bromine Water)', d:'(1) 1% cold alkaline KMnO₄ (Baeyer reagent) decolorizes from purple to brown MnO₂ ppt with alkenes/alkynes. (2) Bromine in CCl₄ decolorizes from reddish-brown to colourless without evolution of HBr gas (addition, not substitution).' },
    { t:'Sodium Metal Test for Active Hydrogen', d:'Add small dry pellet of sodium metal to organic liquid → brisk effervescence of flammable H₂ gas indicates presence of active acidic hydrogen (alcohols, phenols, terminal alkynes, carboxylic acids).' },
    { t:'Polarimeter Measurement of Optical Rotation', d:'Monochromatic sodium D-line light (589 nm) passed through Nicol polarizer, through sample tube of length l (dm). Specific rotation [α] = α_observed / (l × c) where c is concentration in g/mL.' },
    { t:'Ferric Chloride Test for Phenolic Hydroxyl / Enol', d:'Neutral FeCl₃ solution added to sample → formation of characteristic intense violet, blue, or green complex confirms presence of phenolic -OH group or enolic tautomer.' }
  ],

  pairs:[
    { g:'Carbocation Species → Predominant Stabilizing Factor', a:'Tropylium cation (C₇H₇⁺)', b:'Aromaticity (6 π-electrons in planar cyclic conjugated ring)' },
    { g:'Carbocation Species → Predominant Stabilizing Factor', a:'tert-Butyl carbocation ((CH₃)₃C⁺)', b:'Hyperconjugation (9 α-hydrogen atoms) and +I inductive effect' },
    { g:'Carbocation Species → Predominant Stabilizing Factor', a:'Benzyl carbocation (C₆H₅CH₂⁺)', b:'Resonance delocalization into benzene ring' },
    { g:'Carbocation Species → Predominant Stabilizing Factor', a:'Allyl carbocation (CH₂=CH–CH₂⁺)', b:'Resonance delocalization between two equivalent canonical forms' },

    { g:'Functional Group Prefix → IUPAC Suffix (when Principal)', a:'Carboxylic acid (−COOH)', b:'-oic acid (or -carboxylic acid if carbon not numbered)' },
    { g:'Functional Group Prefix → IUPAC Suffix (when Principal)', a:'Aldehyde (−CHO)', b:'-al (or -carbaldehyde)' },
    { g:'Functional Group Prefix → IUPAC Suffix (when Principal)', a:'Ketone (>C=O)', b:'-one' },
    { g:'Functional Group Prefix → IUPAC Suffix (when Principal)', a:'Nitrile (−C≡N)', b:'-nitrile (or -carbonitrile)' },

    { g:'Organic Effect Type → Electronic Mechanism', a:'Inductive Effect (I)', b:'Permanent polarization of σ-electrons transmitted along carbon chain' },
    { g:'Organic Effect Type → Electronic Mechanism', a:'Electromeric Effect (E)', b:'Temporary complete transfer of π-electrons at demand of attacking reagent' },
    { g:'Organic Effect Type → Electronic Mechanism', a:'Resonance / Mesomeric Effect (M)', b:'Permanent delocalization of π-electrons or lone pairs across conjugated system' },
    { g:'Organic Effect Type → Electronic Mechanism', a:'Hyperconjugation (Baker-Nathan)', b:'Delocalization of σ(C–H) electrons into adjacent empty or partially filled p-orbital' },

    { g:'Organic Reactive Intermediate → Geometry and Hybridization', a:'Methyl Carbocation (CH₃⁺)', b:'sp² hybridized and Trigonal Planar (120° bond angles)' },
    { g:'Organic Reactive Intermediate → Geometry and Hybridization', a:'Methyl Free Radical (•CH₃)', b:'sp² hybridized and Planar with odd electron in 2p orbital' },
    { g:'Organic Reactive Intermediate → Geometry and Hybridization', a:'Methyl Carbanion (CH₃⁻)', b:'sp³ hybridized and Pyramidal with 1 lone pair (like NH₃)' },
    { g:'Organic Reactive Intermediate → Geometry and Hybridization', a:'Singlet Carbene (:CH₂)', b:'sp² hybridized with empty 2p orbital and bent geometry' },

    { g:'Organic Reaction → Primary Mechanistic Classification', a:'CH₃CH₂Br + aq. KOH → CH₃CH₂OH + KBr', b:'Nucleophilic Substitution (S_N)' },
    { g:'Organic Reaction → Primary Mechanistic Classification', a:'CH₃CH₂Br + alc. KOH / heat → CH₂=CH₂ + KBr + H₂O', b:'Elimination reaction (β-Elimination)' },
    { g:'Organic Reaction → Primary Mechanistic Classification', a:'CH₂=CH₂ + Br₂ / CCl₄ → CH₂Br–CH₂Br', b:'Electrophilic Addition (A_E)' },
    { g:'Organic Reaction → Primary Mechanistic Classification', a:'CH₄ + Cl₂ / hν → CH₃Cl + HCl', b:'Free Radical Substitution' }
  ],

  orders:[
    { q:'Arrange the following carbocations in increasing order of thermodynamic stability', s:['Methyl carbocation (CH₃⁺)', 'Ethyl carbocation (CH₃CH₂⁺)', 'Isopropyl carbocation ((CH₃)₂CH⁺)', 'tert-Butyl carbocation ((CH₃)₃C⁺)'], sep:'<' },
    { q:'Arrange the hybridization states of carbon in increasing order of electronegativity and s-character', s:['sp³ (25% s, EN ≈ 2.48)', 'sp² (33.3% s, EN ≈ 2.75)', 'sp (50% s, EN ≈ 3.29)'], sep:'<' },
    { q:'Arrange the following functional groups in descending order of IUPAC nomenclature priority', s:['−COOH (Carboxylic acid)', '−CHO (Aldehyde)', '>C=O (Ketone)', '−OH (Alcohol)', '−NH₂ (Amine)'], sep:'>' },
    { q:'Arrange the following free radicals in increasing order of stability', s:['•CH₃', 'CH₃CH₂•', '(CH₃)₂CH•', '(CH₃)₃C•', 'C₆H₅CH₂• (Benzyl)'], sep:'<' },
    { q:'Arrange the following substituents in decreasing order of their −I (electron-withdrawing) inductive strength', s:['−NO₂', '−CN', '−COOH', '−F', '−Cl', '−Br', '−I'], sep:'>' }
  ],

  facts:{
    T:[
      'The tropylium carbocation is aromatic and possesses greater thermodynamic stability than the triphenylmethyl carbocation.',
      'Hyperconjugation involves the delocalization of σ-electrons of C–H bonds with an adjacent empty or unhybridized p-orbital.',
      'In IUPAC nomenclature, nitro (−NO₂), halo (−X), and alkoxy (−OR) groups are always cited as prefixes and never as suffixes.',
      'Terminal alkynes are acidic because the sp-hybridized carbon possesses 50% s-character, making it highly electronegative.',
      'A meso compound possesses chiral centers but is optically inactive due to internal compensation across a symmetry element.',
      'Homolytic fission of a covalent bond produces neutral free radicals with single unpaired electrons.',
      'Tautomerism involves an actual chemical equilibrium with migration of a mobile proton between two functional groups.',
      'The stability order of carbanions is methyl > 1° > 2° > 3°, which is the reverse of the carbocation stability order.',
      'Electrophiles are Lewis acids (electron acceptors) and can be either positively charged cations or neutral molecules with electron sextets (e.g. BF₃, AlCl₃, :CCl₂).',
      'The inductive effect decreases rapidly with distance and becomes negligible after three carbon atoms along a chain.',
      'Optical isomers that are non-superimposable mirror images of each other are called enantiomers.',
      'Bredt rule states that a double bond or planar carbocation cannot exist at the bridgehead position of a small bridged bicyclic system.'
    ],
    F:[
      'Carbanions are stabilized by alkyl groups through the electron-donating +I inductive effect.',
      'Tautomerism and resonance are identical phenomena involving only the movement of electrons without displacement of nuclei.',
      'The tertiary carbocation ((CH₃)₃C⁺) is less stable than the primary ethyl carbocation (CH₃CH₂⁺).',
      'In IUPAC nomenclature, the −Cl group has higher suffix priority than the alcohol (−OH) group.',
      'Electromeric effect is a permanent electronic displacement that occurs in isolated ground-state molecules without reagents.',
      'A racemic mixture consists of equal amounts of two diastereomers.',
      'All molecules containing one or more chiral carbon atoms must be optically active.',
      'Ethane is more acidic than ethyne because sp³ carbon holds electrons more tightly than sp carbon.',
      'Free radicals carry a formal negative electric charge.',
      'The inductive effect involves complete transfer of π-electrons across double bonds.',
      'Bridgehead carbocations in bicyclic systems are exceptionally stable and readily undergo SN1 reactions.',
      'Carbocations never rearrange to form isomers of different skeletal branching.'
    ]
  },

  mcq:[
    {
      q:'Which of the following carbocations is the most stable?',
      o:['Tropylium cation (C₇H₇⁺)', 'tert-Butyl cation ((CH₃)₃C⁺)', 'Benzyl cation (C₆H₅CH₂⁺)', 'Triphenylmethyl cation ((C₆H₅)₃C⁺)'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'The tropylium cation (cycloheptatrienyl cation) is a planar 7-membered cyclic ring with 6 π-electrons.',
        'It fulfills Hückel rule (4n + 2 = 6 with n = 1) and is aromatic, granting it extraordinary thermodynamic stability.'
      ]
    },
    {
      q:'What is the correct IUPAC name of the compound CH₃–CH(OH)–CH₂–CO–CH₃?',
      o:['4-Hydroxypentan-2-one', '2-Hydroxypentan-4-one', '4-Oxopentan-2-ol', '2-Oxopentan-4-ol'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Ketone (>C=O) has higher priority than alcohol (−OH) in the IUPAC hierarchy.',
        'The chain is numbered from the right end to give the principal ketone group the lowest locant (C2): C1(H₃)–C2(=O)–C3(H₂)–C4(H,OH)–C5(H₃).',
        'Name: 4-Hydroxypentan-2-one.'
      ]
    },
    {
      q:'How many α-hydrogen atoms are present in the tert-butyl carbocation ((CH₃)₃C⁺) to participate in hyperconjugation?',
      o:['9 α-hydrogens', '6 α-hydrogens', '3 α-hydrogens', '0 α-hydrogens'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'The tert-butyl carbocation has three methyl groups attached to the central C⁺: (CH₃)₃C⁺.',
        'Each methyl group contributes three α-hydrogens.',
        'Total α-hydrogens = 3 × 3 = 9 (forming 9 hyperconjugative structures).'
      ]
    },
    {
      q:'Which of the following compounds exhibits keto-enol tautomerism?',
      o:['Acetone (CH₃COCH₃)', 'Benzophenone (C₆H₅COC₆H₅)', 'Formaldehyde (HCHO)', 'Benzaldehyde (C₆H₅CHO)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Keto-enol tautomerism requires at least one α-hydrogen attached to an sp³ carbon adjacent to the carbonyl group.',
        'Acetone has 6 α-hydrogens (forms prop-1-en-2-ol).',
        'Benzophenone, formaldehyde, and benzaldehyde have zero α-hydrogens on sp³ carbons.'
      ]
    },
    {
      q:'What is the total number of optical stereoisomers for tartaric acid, HOOC–CH(OH)–CH(OH)–COOH?',
      o:['3 (one pair of enantiomers and one meso compound)', '4', '2', '1'],
      a:0,
      tag:'Stereo Trap',
      sol:[
        'Tartaric acid has 2 identical chiral centers.',
        'Because the molecule has internal symmetry, the (2R, 3S) configuration is an optically inactive meso form.',
        'Total isomers = 2 enantiomers (d and l) + 1 meso compound = 3.'
      ]
    },
    {
      q:'The correct order of increasing stability of the following carbanions is:',
      o:['(CH₃)₃C⁻ < (CH₃)₂CH⁻ < CH₃CH₂⁻ < CH₃⁻', 'CH₃⁻ < CH₃CH₂⁻ < (CH₃)₂CH⁻ < (CH₃)₃C⁻', '(CH₃)₃C⁻ < CH₃⁻ < CH₃CH₂⁻ < (CH₃)₂CH⁻', 'CH₃CH₂⁻ < CH₃⁻ < (CH₃)₃C⁻ < (CH₃)₂CH⁻'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Alkyl groups are electron-donating (+I). Supplying electrons to a negatively charged carbon destabilizes the carbanion.',
        'More alkyl groups = less stable. Stability: 3° < 2° < 1° < Methyl.'
      ]
    },
    {
      q:'Which of the following molecules has a zero dipole moment due to symmetric cancellation of polar bonds?',
      o:['trans-1,2-Dichloroethene', 'cis-1,2-Dichloroethene', 'Chloroform (CHCl₃)', 'Dichloromethane (CH₂Cl₂)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'In trans-1,2-dichloroethene, the two C–Cl bond dipole vectors point in exactly opposite directions (180°), completely cancelling each other out (μ = 0 D).',
        'The cis isomer has a permanent non-zero dipole moment.'
      ]
    },
    {
      q:'What type of reaction intermediate is formed during the homolytic cleavage of a carbon-carbon bond?',
      o:['Free radicals', 'Carbocations', 'Carbanions', 'Carbenes'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Homolytic fission involves symmetric cleavage where each bonded atom retains one electron of the shared pair.',
        'This produces neutral species with unpaired electrons: free radicals (R•).'
      ]
    },
    {
      q:'In which of the following species is the carbon atom sp-hybridized?',
      o:['Ethyne (HC≡CH)', 'Ethene (H₂C=CH₂)', 'Ethane (H₃C–CH₃)', 'Benzene (C₆H₆)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'In ethyne (acetylene), each carbon forms one C–H σ-bond and one C–C σ-bond (steric number = 2).',
        'Hybridization is sp (50% s-character, linear 180°).'
      ]
    },
    {
      q:'The degree of unsaturation (double bond equivalent, DBE) for a compound with molecular formula C₆H₆ (benzene) is:',
      o:['4', '3', '5', '6'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'DBE = C + 1 − (H / 2) = 6 + 1 − (6 / 2) = 7 − 3 = 4.',
        'Corresponds to 1 ring + 3 double bonds in benzene.'
      ]
    },
    {
      q:'Which of the following is a neutral electrophile?',
      o:['Boron trifluoride (BF₃)', 'Hydronium ion (H₃O⁺)', 'Ammonia (NH₃)', 'Hydroxide ion (OH⁻)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'BF₃ has a central boron atom surrounded by only 6 valence electrons (incomplete octet / electron sextet).',
        'It readily accepts an electron pair as a neutral Lewis acid electrophile.'
      ]
    },
    {
      q:'When 3,3-dimethylbut-1-ene is treated with dilute acid (H⁺/H₂O), the major product formed is 2,3-dimethylbutan-2-ol. This occurs due to:',
      o:['A 1,2-methyl shift in the secondary carbocation to form a more stable tertiary carbocation', 'Anti-Markovnikov addition', 'Electrophilic substitution', 'Elimination followed by oxidation'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Protonation gives secondary carbocation (CH₃)₃C–C⁺H–CH₃.',
        'A 1,2-methyl shift rapidly occurs, relocating a methyl group to yield the tertiary carbocation (CH₃)₂C⁺–CH(CH₃)₂.',
        'Water attacks the tertiary carbocation, giving 2,3-dimethylbutan-2-ol as the major product.'
      ]
    },
    {
      q:'Which of the following functional groups has the HIGHEST priority according to IUPAC nomenclature rules?',
      o:['−COOH (Carboxylic acid)', '−COOCH₃ (Ester)', '−CHO (Aldehyde)', '−CN (Nitrile)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'According to IUPAC priority rules, carboxylic acid (−COOH) stands at the top of the priority hierarchy among all common functional groups.'
      ]
    },
    {
      q:'The number of σ and π bonds in a molecule of vinylacetylene (CH₂=CH–C≡CH) are respectively:',
      o:['7 σ and 3 π', '6 σ and 2 π', '8 σ and 2 π', '7 σ and 2 π'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'Structure: H₂C=CH–C≡C–H.',
        'σ-bonds: 2 (C–H in =CH₂) + 1 (C=C) + 1 (C–H in –CH=) + 1 (C–C) + 1 (C≡C) + 1 (≡C–H) = 7 σ bonds.',
        'π-bonds: 1 in C=C double bond + 2 in C≡C triple bond = 3 π bonds.'
      ]
    }
  ],

  gens:[
    function(R){
      var n_c = R.int(4, 8);
      var n_pi = R.int(1, 3);
      var n_ring = R.pick([0, 1]);
      var dbe = n_pi + n_ring;
      var n_h = 2 * n_c + 2 - 2 * dbe;
      var d = [dbe + 1, dbe - 1 > 0 ? dbe - 1 : dbe + 2, dbe * 2];
      return {
        q:'Calculate the degree of unsaturation (Double Bond Equivalent, DBE) for a hydrocarbon with molecular formula C' + n_c + 'H' + n_h + ':',
        ans:dbe, d:d, u:'',
        tag:'Calculation Trap',
        sol:[
          'DBE formula for hydrocarbons: DBE = C + 1 − (H / 2).',
          'DBE = ' + n_c + ' + 1 − (' + n_h + ' / 2) = ' + (n_c + 1) + ' − ' + (n_h / 2) + ' = ' + dbe + '.'
        ]
      };
    },
    function(R){
      var n_chiral = R.pick([2, 3, 4]);
      var total = Math.pow(2, n_chiral);
      var d1 = total / 2;
      var d2 = total * 2;
      var d3 = n_chiral * 2;
      return {
        q:'An unsymmetrical organic compound has ' + n_chiral + ' distinct chiral carbon stereocenters and lacks any internal symmetry elements. What is the maximum number of stereoisomers possible?',
        ans:total, d:[d1, d2, d3], u:'stereoisomers',
        tag:'Calculation Trap',
        sol:[
          'For an unsymmetrical molecule with n distinct chiral centers: Total stereoisomers = 2ⁿ.',
          'Total = 2^' + n_chiral + ' = ' + total + ' stereoisomers.'
        ]
      };
    }
  ]
});
