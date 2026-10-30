/* ==========================================================================
   DATA: Physical Chemistry Units C1 – C8
   ========================================================================== */

NEET.reg({
  id:'C1',
  subj:'Physical Chemistry',
  type:'num',
  name:'Some Basic Concepts of Chemistry',
  syl:'Matter and its nature, Dalton\'s atomic theory: concept of atom, molecule, element, and compound; Laws of chemical combination; Atomic and molecular masses, mole concept, molar mass, percentage composition, empirical and molecular formulae: Avogadro\'s number, chemical equations and stoichiometry, limiting reagent, percentage yield, and concentration terms (molarity, molality, mole fraction, ppm, %w/w, %w/v).',
  kw:['mole concept','avogadro','limiting reagent','empirical formula','molecular formula','molarity','molality','mole fraction','stoichiometry','dalton','law of multiple proportions','percentage yield'],

  formulas:[
    { n:'Mole from Mass, Particles & Gas Volume', f:'n = w / M = N / N<sub>A</sub> = V<sub>STP</sub> / 22.7 L', u:'mol', s:'w = given mass (g), M = molar mass (g mol⁻¹), N<sub>A</sub> = 6.022 × 10²³ mol⁻¹; 1 bar, 273.15 K gives 22.7 L (1 atm gives 22.4 L)', b:'V / 22.7 L fails for solids, liquids, non-ideal gases, or any T, P other than STP (273.15 K, 1 bar)' },
    { n:'Average Atomic Mass', f:'M<sub>avg</sub> = (Σ f<sub>i</sub> M<sub>i</sub>) / (Σ f<sub>i</sub>)', u:'u (or g mol⁻¹)', s:'f<sub>i</sub> = fractional or % natural abundance of isotope with atomic mass M<sub>i</sub>', b:'Fails if isotopic mass number A is used instead of exact isotopic mass when high precision is required' },
    { n:'Empirical to Molecular Formula Factor', f:'n = Molar Mass / Empirical Formula Mass;  MF = (EF)<sub>n</sub>', u:'dimensionless', s:'n is a positive integer (1, 2, 3...); Vapour Density VD = Molar Mass / 2 (for gases relative to H₂)', b:'M = 2 × VD holds only for volatile gases obeying ideal gas behaviour relative to H₂' },
    { n:'Molarity (M) and Dilution Law', f:'M = n<sub>solute</sub> / V<sub>sol (L)</sub>;  M₁V₁ = M₂V₂', u:'mol L⁻¹', s:'V<sub>sol</sub> is total solution volume in litres; for mixing non-reacting same-solute solutions, M<sub>f</sub> = (M₁V₁ + M₂V₂)/(V₁ + V₂)', b:'Temperature-dependent because volume expands with T; M₁V₁ = M₂V₂ fails when volumes are non-additive or a reaction occurs without stoichiometric factor' },
    { n:'Molality (m)', f:'m = n<sub>solute</sub> / w<sub>solvent (kg)</sub> = (1000 × w<sub>B</sub>) / (M<sub>B</sub> × w<sub>A (g)</sub>)', u:'mol kg⁻¹', s:'w<sub>A</sub> is mass of solvent ONLY (not total solution mass); w<sub>B</sub>, M<sub>B</sub> are mass and molar mass of solute', b:'Fails if total mass of solution is substituted in the denominator instead of mass of pure solvent' },
    { n:'Molarity from % (w/w) and Density', f:'M = (% w/w × d × 10) / M<sub>B</sub>', u:'mol L⁻¹', s:'d = density of solution in g mL⁻¹ (or g cm⁻³), M<sub>B</sub> = molar mass of solute in g mol⁻¹', b:'Fails if density is entered in kg m⁻³ without adjusting the factor of 10, or if % w/v is confused with % w/w' },
    { n:'Molarity (M) to Molality (m) Conversion', f:'m = (1000 × M) / (1000 d − M × M<sub>B</sub>)', u:'mol kg⁻¹', s:'d = density of solution in g mL⁻¹, M = molarity (mol L⁻¹), M<sub>B</sub> = solute molar mass (g mol⁻¹)', b:'Fails if d is omitted (assuming d = 1 g mL⁻¹ works only for very dilute aqueous solutions)' },
    { n:'Molality and Mole Fraction Relation', f:'m = (x<sub>B</sub> × 1000) / (x<sub>A</sub> × M<sub>A</sub>) = (x<sub>B</sub> × 1000) / [(1 − x<sub>B</sub>) M<sub>A</sub>]', u:'mol kg⁻¹', s:'x<sub>B</sub> = mole fraction of solute, x<sub>A</sub> = mole fraction of solvent, M<sub>A</sub> = molar mass of solvent (18 g mol⁻¹ for H₂O)', b:'Fails if solute molar mass M<sub>B</sub> is used in the denominator instead of solvent molar mass M<sub>A</sub>' },
    { n:'Parts Per Million (ppm) & Percentage Yield', f:'ppm = (w<sub>solute</sub> / w<sub>solution</sub>) × 10⁶;  % Yield = (Actual / Theoretical) × 100', u:'ppm / %', s:'Theoretical yield is always calculated strictly from the limiting reagent (smallest n<sub>i</sub> / ν<sub>i</sub> ratio)', b:'Theoretical yield calculation fails if calculated from the reagent present in smaller mass or moles without dividing by stoichiometric coefficient ν<sub>i</sub>' }
  ],

  traps:[
    { t:'At modern IUPAC STP (273.15 K and 1 bar), the molar volume of an ideal gas is 22.7 L mol⁻¹, whereas at old STP (273.15 K and 1 atm) it is 22.4 L mol⁻¹.', c:'1 atm = 1.01325 bar; lower standard pressure (1 bar vs 1.01325 bar) gives a slightly larger molar volume V = RT/P = 22.71 L.', tag:'Unit Conversion Trap' },
    { t:'Molality (m), mole fraction (x), and mass percentage (% w/w) are completely independent of temperature, whereas Molarity (M), Normality (N), and % (w/v) decrease as temperature rises.', c:'Mass does not change with temperature, but liquid solution volume expands thermally (V ∝ T), decreasing concentration terms that have volume in the denominator.', tag:'Concept Trap' },
    { t:'The Law of Conservation of Mass is not strictly valid for nuclear reactions where mass defect Δm is converted into energy.', c:'In nuclear fission/fusion, macroscopic mass is converted into binding energy according to Einstein\'s relation ΔE = (Δm)c², so only total mass-energy is conserved.', tag:'Boundary Failure' },
    { t:'The Law of Definite Proportions fails when different isotopes of an element form the same compound (e.g., ¹²CO₂ has C:O = 12:32 while ¹⁴CO₂ has C:O = 14:32).', c:'Proust\'s law assumes constant average atomic mass; isotopic enrichment changes the mass ratio of elements despite identical stoichiometry.', tag:'NCERT Exception' },
    { t:'The limiting reagent is NOT necessarily the reactant present in the smallest mass or smallest number of moles; it is the reactant with the minimum ratio of (initial moles / stoichiometric coefficient).', c:'Reaction consumption is governed by mole ratios (Δn₁/ν₁ = Δn₂/ν₂); a reactant with higher moles can still run out first if its stoichiometric coefficient ν is large.', tag:'Calculation Trap' },
    { t:'1 amu (unified atomic mass unit, 1 u) equals 1.66056 × 10⁻²⁴ g, which is numerically the exact reciprocal of Avogadro\'s number (1 / N<sub>A</sub>) in grams.', c:'By definition, 1 u = (1/12) × mass of one ¹²C atom = (12 g mol⁻¹ / N<sub>A</sub>) / 12 = (1 / N<sub>A</sub>) g.', tag:'Unit Conversion Trap' },
    { t:'For an aqueous solution with x<sub>solute</sub> = 0.1, the molality is NOT 0.1 m; it is 1000 × 0.1 / (0.9 × 18) ≈ 6.17 m.', c:'Molality for water is m = 55.55 × [x<sub>B</sub> / (1 − x<sub>B</sub>)] because 1 kg of water contains 1000 / 18 = 55.55 moles of H₂O.', tag:'Calculation Trap' },
    { t:'Trailing zeros in a number with a decimal point are significant (0.0200 has 3 sig figs), whereas trailing zeros in a whole number without a decimal point are not significant (200 has 1 sig fig).', c:'Leading zeros only locate the decimal point, while trailing zeros after a decimal point indicate the precision of the measuring instrument.', tag:'Concept Trap' }
  ],

  flows:[
    { t:'Combustion & Elemental % → Empirical & Molecular Formula',
      chain:['Divide each element\'s % by its atomic mass (Aᵢ) → relative moles nᵢ','Divide all nᵢ by the smallest nᵢ → simplest ratio','If fractional (e.g. ×.5, ×.33), multiply all by small integer (2 or 3) → Empirical Formula (EF)','Compute n = Molar Mass / EF Mass (where Molar Mass = 2 × VD) → Molecular Formula = (EF)ₙ'] },
    { t:'Limiting Reagent & Stoichiometric Yield Algorithm',
      chain:['Write balanced chemical equation with stoichiometric coefficients νᵢ','Convert given masses/volumes/particles of all reactants into moles nᵢ','Compute ratio Rᵢ = nᵢ / νᵢ for every reactant','Reactant with MINIMUM Rᵢ is the Limiting Reagent (LR)','Moles of any product P formed = R_min × ν_P; multiply byActual % yield if < 100%'] },
    { t:'Concentration Interconversion Map (Solute M_B, Solvent M_A, Density d g/mL)',
      root:'Given concentration of binary solution',
      br:[
        { l:'% (w/w) = x given', n:['100 g solution has x g solute & (100−x) g solvent','Molality m = 1000 x / [M_B (100−x)]','Molarity M = 10 x d / M_B'] },
        { l:'Molarity M & density d given', n:['1 L solution has M moles solute (mass = M·M_B g)','Total mass = 1000 d g → solvent mass = (1000 d − M·M_B) g','Molality m = 1000 M / (1000 d − M·M_B)'] },
        { l:'Mole fraction x_B given', n:['Take x_B mol solute and (1−x_B) mol solvent','Mass of solvent = (1−x_B) M_A g','Molality m = 1000 x_B / [(1−x_B) M_A]'] }
      ] }
  ],

  lab:[
    { t:'Volumetric (Standard) Flask vs Pipette vs Burette', d:'Standard flask prepares a fixed volume of standard solution (single calibration mark); pipette delivers a fixed aliquot; burette delivers variable measured volumes in titration.' },
    { t:'Parallax Error & Meniscus Reading', d:'Read the LOWER meniscus for colourless/transparent liquids (water, dilute acids, NaOH) and the UPPER meniscus for intensely coloured/opaque solutions (aqueous KMnO₄, I₂) at eye level.' },
    { t:'Primary vs Secondary Standard Substances', d:'Oxalic acid (H₂C₂O₄·2H₂O), Mohr\'s salt, and anhydrous Na₂CO₃ are primary standards (stable, non-hygroscopic, weighed directly); NaOH and KMnO₄ are secondary standards (NaOH is deliquescent & absorbs CO₂; KMnO₄ decomposes in light) and must be standardised.' },
    { t:'Analytical Balance & Significant Figures in Volumetric Analysis', d:'An analytical balance reads to ±0.0001 g (4 decimal places), a burette reads to ±0.05 mL; in multiplication/division, round the final result to the fewest significant figures among inputs.' }
  ],

  pairs:[
    { g:'Law of Chemical Combination → Scientist & Core Principle', a:'Law of Conservation of Mass (1789)', b:'Antoine Lavoisier — total mass of reactants equals total mass of products in a chemical change' },
    { g:'Law of Chemical Combination → Scientist & Core Principle', a:'Law of Definite Proportions (Constant Composition)', b:'Joseph Proust — a pure compound always contains the same elements in a fixed ratio by mass' },
    { g:'Law of Chemical Combination → Scientist & Core Principle', a:'Law of Multiple Proportions (1803)', b:'John Dalton — masses of one element combining with a fixed mass of another bear a simple whole-number ratio' },
    { g:'Law of Chemical Combination → Scientist & Core Principle', a:'Law of Gaseous Volumes (1808)', b:'Gay-Lussac — gases react and are produced in volumes bearing a simple whole-number ratio at same T and P' },
    { g:'Law of Chemical Combination → Scientist & Core Principle', a:'Equal volumes of all gases at same T and P contain equal molecules', b:'Avogadro\'s Law (distinguished diatomic elementary gases like H₂, O₂ from atoms)' },
    { g:'Concentration Term → Definition & Temperature Dependence', a:'Molarity (M)', b:'Moles of solute per litre of solution (mol L⁻¹); decreases on heating' },
    { g:'Concentration Term → Definition & Temperature Dependence', a:'Molality (m)', b:'Moles of solute per kilogram of pure solvent (mol kg⁻¹); independent of temperature' },
    { g:'Concentration Term → Definition & Temperature Dependence', a:'Mole fraction (x)', b:'Ratio of moles of one component to total moles (dimensionless, Σxᵢ = 1); independent of temperature' },
    { g:'Concentration Term → Definition & Temperature Dependence', a:'Parts per million (ppm)', b:'Mass of solute per 10⁶ g of solution (equivalent to mg L⁻¹ in dilute aqueous solution); independent of temperature' },
    { g:'Concentration Term → Definition & Temperature Dependence', a:'Mass by volume percentage (% w/v)', b:'Grams of solute dissolved per 100 mL of solution; temperature-dependent (used in pharmacy)' }
  ],

  orders:[
    { q:'Arrange the following 1 g samples in decreasing order of number of atoms present', s:['1 g Li (M = 7)','1 g C (M = 12)','1 g Mg (M = 24)','1 g Ag (M = 108)'], sep:'>', why:'For equal mass (1 g) of monoatomic elements, number of atoms N = (1 / M) × N_A is inversely proportional to atomic mass M.' },
    { q:'Arrange the following in increasing order of total mass in grams', s:['1 mole of H₂ (2.0 g)','0.1 mole of O₂ (3.2 g)','1.5 × 10²³ molecules of NH₃ (4.25 g)','0.5 mole of CO₂ (22.0 g)'], sep:'<', why:'Masses: 1 mol H₂ = 2.0 g < 0.1 mol O₂ = 3.2 g < 0.25 mol NH₃ = 4.25 g < 0.5 mol CO₂ = 22.0 g.' },
    { q:'Arrange the following gaseous samples at STP in decreasing order of total number of molecules', s:['22.7 L of He','11.35 L of N₂','5.675 L of CH₄','2.27 L of CO₂'], sep:'>', why:'By Avogadro\'s law, at STP the number of molecules is directly proportional to volume regardless of gas identity.' }
  ],

  facts:{
    T:[
      '1 unified atomic mass unit (1 u or 1 Da) is defined as exactly 1/12th of the mass of one carbon-12 (¹²C) atom, equal to 1.66056 × 10⁻²⁴ g.',
      'Pairs of compounds such as CO and CO₂, or SO₂ and SO₃, or NO, NO₂ and N₂O₅ illustrate Dalton\'s Law of Multiple Proportions.',
      'Pure water has a molarity of approximately 55.55 M (and molality 55.55 m) at 298 K because 1000 g of water contains 1000/18 = 55.55 moles.',
      'The sum of mole fractions of all components in any homogeneous mixture is always equal to unity (Σxᵢ = 1).',
      'In addition and subtraction, the result cannot have more digits to the right of the decimal point than any of the original numbers.',
      'Empirical formula of glucose (C₆H₁₂O₆), acetic acid (CH₃COOH), and formaldehyde (HCHO) is identical, namely CH₂O.',
      'One gram-atom of an element means 1 mole of atoms of that element, whereas one gram-molecule means 1 mole of molecules.',
      'Gay-Lussac\'s Law of Gaseous Volumes is essentially the law of definite proportions stated in terms of volume for gaseous reactants and products.'
    ],
    F:[
      '1 molar (1 M) aqueous solution of any solute is always more dilute than a 1 molal (1 m) aqueous solution of the same solute when solution density is roughly 1 g mL⁻¹.',
      'Dalton\'s atomic theory successfully explained why atoms of different elements combine to form chemical bonds and also explained Gay-Lussac\'s law of gaseous volumes.',
      'In the reaction N₂ + 3H₂ → 2NH₃, if 10 g of N₂ is mixed with 10 g of H₂, H₂ is the limiting reagent because its stoichiometric coefficient (3) is larger.',
      'The number of significant figures in Avogadro\'s number (6.022 × 10²³) is 27 because the exponent 10²³ adds 23 zeros.',
      'Compounds having the same empirical formula must always have the same molecular weight and identical chemical properties.',
      'Molality of a solution changes significantly when the solution is heated from 298 K to 350 K without evaporation.',
      '1 mole of CH₄ gas at STP contains 4 × 6.022 × 10²³ total electrons.',
      'The pair of compounds H₂O and D₂O (heavy water) is a classic example of the Law of Multiple Proportions.'
    ]
  },

  mcq:[
    { q:'Which of the following concentration terms is dependent on temperature?',
      o:['Molarity (M)','Molality (m)','Mole fraction (x)','Mass percentage (% w/w)'], a:0, tag:'Concept Trap',
      sol:['Molarity = moles of solute / volume of solution in L.','Volume of a liquid changes with temperature (V ∝ T), whereas mass is invariant.','Hence Molarity (M) is temperature-dependent, while m, x, and % w/w are temperature-independent.'] },
    { q:'Which sample among the following contains the MAXIMUM number of atoms?',
      o:['18 g of H₂O','16 g of O₂','4.4 g of CO₂','16 g of CH₄'], a:3, tag:'Calculation Trap',
      sol:['18 g H₂O = 1 mol molecules × 3 atoms = 3 N<sub>A</sub> atoms.','16 g O₂ = 0.5 mol × 2 = 1 N<sub>A</sub> atoms; 4.4 g CO₂ = 0.1 mol × 3 = 0.3 N<sub>A</sub> atoms.','16 g CH₄ = 1 mol molecules × 5 atoms/molecule = 5 N<sub>A</sub> atoms (maximum).'] },
    { q:'An organic compound contains 40% carbon, 6.67% hydrogen and 53.33% oxygen by mass. If its vapour density is 30, its molecular formula is:',
      o:['CH₂O','C₂H₄O₂','C₃H₆O₃','C₂H₆O'], a:1, tag:'Calculation Trap',
      sol:['Mole ratio C : H : O = (40/12) : (6.67/1) : (53.33/16) = 3.33 : 6.67 : 3.33 = 1 : 2 : 1 → Empirical formula = CH₂O (EF mass = 30).','Molar mass M = 2 × VD = 2 × 30 = 60 g mol⁻¹.','n = 60 / 30 = 2 → Molecular formula = (CH₂O)₂ = C₂H₄O₂.'] },
    { q:'How many moles of methane (CH₄) are required to produce 22 g of CO₂(g) after complete combustion?',
      o:['1.0 mol','0.5 mol','0.25 mol','2.0 mol'], a:1, tag:'Calculation Trap',
      sol:['Balanced combustion equation: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g).','1 mole of CH₄ produces 1 mole (44 g) of CO₂.','To produce 22 g (0.5 mol) of CO₂, required CH₄ = 0.5 mol.'] },
    { q:'The total number of valence electrons present in 4.2 g of nitride ion (N³⁻) is (N<sub>A</sub> = Avogadro\'s constant):',
      o:['2.4 N<sub>A</sub>','4.2 N<sub>A</sub>','1.6 N<sub>A</sub>','3.2 N<sub>A</sub>'], a:0, tag:'Concept Trap',
      sol:['Molar mass of N³⁻ = 14 g mol⁻¹; moles of N³⁻ = 4.2 / 14 = 0.3 mol.','Nitrogen atom (Z = 7, 1s² 2s² 2p³) has 5 valence electrons; N³⁻ ion has 5 + 3 = 8 valence electrons (NOT 10 total electrons).','Valence electrons = 0.3 × 8 N<sub>A</sub> = 2.4 N<sub>A</sub>.'] },
    { q:'If the density of a 3 M aqueous solution of NaCl (M = 58.5 g mol⁻¹) is 1.25 g mL⁻¹, the molality of the solution is:',
      o:['2.79 m','3.00 m','2.40 m','3.65 m'], a:0, tag:'Unit Conversion Trap',
      sol:['Use m = (1000 × M) / (1000 d − M × M<sub>B</sub>).','1000 d = 1250 g; mass of NaCl in 1 L = 3 × 58.5 = 175.5 g; mass of H₂O = 1250 − 175.5 = 1074.5 g.','m = 3000 / 1074.5 = 2.79 mol kg⁻¹.'] },
    { q:'Naturally occurring boron consists of two isotopes ¹⁰B (atomic mass = 10.0 u) and ¹¹B (atomic mass = 11.0 u). If the average atomic mass of boron is 10.8 u, the percentage abundance of ¹⁰B is:',
      o:['20%','80%','50%','10.8%'], a:0, tag:'Calculation Trap',
      sol:['Let % of ¹⁰B be x; then % of ¹¹B = (100 − x).','10.8 = [10x + 11(100 − x)] / 100 ⇒ 1080 = 1100 − x ⇒ x = 20%.'] }
  ],

  gens:[
    function(R){
      var pct = R.pick([10, 16, 20, 25, 32, 40]);
      var d = R.pick([1.1, 1.2, 1.25, 1.4, 1.5]);
      var MB = R.pick([40, 50, 80, 98, 100]);
      var M = (pct * d * 10) / MB;
      return {
        q:'An aqueous solution of a solute (molar mass = '+MB+' g mol⁻¹) is '+pct+'% (w/w) and has a density of '+d+' g mL⁻¹. Its molarity (M) is:',
        ans:M,
        d:[pct*10/MB, (pct*1000)/((100-pct)*MB), M/10],
        u:'M',
        tag:'Unit Conversion Trap',
        sol:['M = (% w/w × d × 10) / M<sub>B</sub>','M = ('+pct+' × '+d+' × 10) / '+MB,'= '+R.f(M)+' M']
      };
    },
    function(R){
      var M = R.pick([1, 2, 3, 4]);
      var MB = R.pick([40, 58.5, 60, 98, 100]);
      var d = R.pick([1.2, 1.25, 1.3, 1.4]);
      var m = (1000 * M) / (1000 * d - M * MB);
      return {
        q:'Calculate the molality (m) of a '+M+' M aqueous solution of a solute (M = '+MB+' g mol⁻¹) whose density is '+d+' g mL⁻¹:',
        ans:m,
        d:[M/d, (1000*M)/(1000*d + M*MB), (1000*M)/(1000 - M*MB)],
        u:'mol kg⁻¹',
        tag:'Calculation Trap',
        sol:['Mass of 1 L solution = 1000 × '+d+' = '+(1000*d)+' g; mass of solute = '+M+' × '+MB+' = '+(M*MB)+' g','Mass of solvent = '+(1000*d)+' − '+(M*MB)+' = '+(1000*d - M*MB)+' g','m = ('+M+' × 1000) / '+(1000*d - M*MB)+' = '+R.f(m)+' mol kg⁻¹']
      };
    },
    function(R){
      var nN2 = R.int(2, 6);
      var nH2 = R.int(3, 10);
      if (nH2 === 3 * nN2) nH2 += 1;
      var rN2 = nN2 / 1, rH2 = nH2 / 3;
      var rMin = Math.min(rN2, rH2);
      var nNH3 = 2 * rMin;
      var wNH3 = nNH3 * 17;
      var wrongLR = 2 * Math.max(rN2, rH2) * 17;
      var sumMoles = (nN2 + nH2) * 17;
      return {
        q:'In Haber\'s process N₂(g) + 3H₂(g) → 2NH₃(g), if '+nN2+' moles of N₂ and '+nH2+' moles of H₂ are allowed to react completely, the maximum mass of NH₃ (M = 17 g mol⁻¹) formed is:',
        ans:wNH3,
        d:[wrongLR, rMin*17, sumMoles],
        u:'g',
        tag:'Calculation Trap',
        sol:['Compare mole/stoichiometry ratios: R(N₂) = '+nN2+'/1 = '+R.f(rN2)+'; R(H₂) = '+nH2+'/3 = '+R.f(rH2),'Limiting reagent gives R<sub>min</sub> = '+R.f(rMin),'Moles of NH₃ = 2 × R<sub>min</sub> = '+R.f(nNH3)+' mol → Mass = '+R.f(nNH3)+' × 17 = '+R.f(wNH3)+' g']
      };
    },
    function(R){
      var xB = R.pick([0.05, 0.1, 0.2, 0.25]);
      var m = (xB * 1000) / ((1 - xB) * 18);
      return {
        q:'The mole fraction of a non-volatile solute in an aqueous solution is '+xB+'. What is the molality of the solution? (Molar mass of H₂O = 18 g mol⁻¹)',
        ans:m,
        d:[xB * 55.55, (1 - xB)*1000/(xB*18), xB * 1000 / 18],
        u:'mol kg⁻¹',
        tag:'Calculation Trap',
        sol:['m = (x<sub>B</sub> × 1000) / [(1 − x<sub>B</sub>) × 18]','m = ('+xB+' × 1000) / ('+R.f(1-xB)+' × 18)','= '+R.f(m)+' mol kg⁻¹']
      };
    },
    function(R){
      var M1 = R.pick([0.2, 0.5, 1.0, 1.5]);
      var V1 = R.pick([100, 200, 250, 300]);
      var M2 = R.pick([0.4, 0.8, 1.2, 2.0]);
      var V2 = R.pick([150, 250, 300, 500]);
      var Mf = (M1 * V1 + M2 * V2) / (V1 + V2);
      return {
        q:'When '+V1+' mL of '+M1+' M HCl is mixed with '+V2+' mL of '+M2+' M HCl, the molarity of the resulting solution is:',
        ans:Mf,
        d:[(M1 + M2)/2, (M1*V1 + M2*V2)/1000, Math.abs(M1*V1 - M2*V2)/(V1 + V2)],
        u:'M',
        tag:'Calculation Trap',
        sol:['M<sub>f</sub> = (M₁V₁ + M₂V₂) / (V₁ + V₂)','M<sub>f</sub> = ('+M1+'×'+V1+' + '+M2+'×'+V2+') / ('+V1+' + '+V2+')','= '+R.f(Mf)+' M']
      };
    },
    function(R){
      var w = R.pick([2.2, 4.4, 8.8, 11, 22]);
      var nMol = w / 44;
      var nElec = nMol * 22;
      return {
        q:'The total number of moles of electrons present in '+w+' g of CO₂ (M = 44 g mol⁻¹) is:',
        ans:nElec,
        d:[nMol * 3, nMol * 16, nMol * 44],
        u:'mol',
        tag:'Concept Trap',
        sol:['Moles of CO₂ = '+w+' / 44 = '+R.f(nMol)+' mol','1 molecule of CO₂ has 6 + 2(8) = 22 electrons','Total moles of electrons = '+R.f(nMol)+' × 22 = '+R.f(nElec)+' mol']
      };
    },
    function(R){
      var p = R.pick([50, 60, 75, 80, 90]);
      var wCaCO3 = R.pick([10, 20, 25, 50]);
      var pureMass = wCaCO3 * (p / 100);
      var nCO2 = pureMass / 100;
      var vSTP = nCO2 * 22.7;
      return {
        q:'A '+wCaCO3+' g sample of limestone is '+p+'% pure CaCO₃ (M = 100 g mol⁻¹). On complete thermal decomposition, the volume of CO₂ evolved at modern STP (1 bar, 273.15 K) is:',
        ans:vSTP,
        d:[(wCaCO3/100)*22.7, nCO2*11.2, pureMass*22.7],
        u:'L',
        tag:'Unit Conversion Trap',
        sol:['Mass of pure CaCO₃ = '+wCaCO3+' × ('+p+'/100) = '+R.f(pureMass)+' g → Moles = '+R.f(nCO2)+' mol','CaCO₃(s) → CaO(s) + CO₂(g); moles of CO₂ = '+R.f(nCO2)+' mol','Volume at STP (1 bar, 273.15 K) = '+R.f(nCO2)+' × 22.7 = '+R.f(vSTP)+' L']
      };
    }
  ]
});

NEET.reg({
  id:'C2',
  subj:'Physical Chemistry',
  type:'num',
  name:'Atomic Structure',
  syl:'Nature of electromagnetic radiation, photoelectric effect; Spectrum of the hydrogen atom, Bohr model of a hydrogen atom — its postulates, derivation of the relations for the energy of the electron and radii of the different orbits, limitations of Bohr\'s model; Dual nature of matter, de Broglie\'s relationship, Heisenberg uncertainty principle; Elementary ideas of quantum mechanics, quantum mechanical model of the atom, ψ and |ψ|² vs r plots for 1s and 2s, quantum numbers (n, l, m, s), (n+l) rule, Aufbau, Pauli exclusion, Hund\'s rule, electronic configuration of atoms, stability of half-filled and completely filled orbitals (Cr, Cu), shapes of s, p, and d orbitals.',
  kw:['bohr model','rydberg','photoelectric effect','de broglie','heisenberg uncertainty','quantum numbers','radial nodes','angular nodes','aufbau','pauli exclusion','hund rule','electronic configuration','orbital shapes'],

  formulas:[
    { n:'Planck\'s Quantum & Photoelectric Equation', f:'E = hν = hc / λ;  KE<sub>max</sub> = h(ν − ν₀) = eV₀', u:'J or eV', s:'h = 6.626 × 10⁻³⁴ J s, hc ≈ 1240 eV nm; ν₀ = threshold frequency, V₀ = stopping potential', b:'No photoemission occurs if ν < ν₀ (or λ > λ₀), regardless of how high the light intensity is' },
    { n:'Bohr Orbit Radius & Velocity', f:'r<sub>n</sub> = 0.529 × (n² / Z) Å;  v<sub>n</sub> = 2.18 × 10⁶ × (Z / n) m s⁻¹', u:'Å and m s⁻¹', s:'n = principal quantum number (1, 2, 3...), Z = atomic number (1 for H, 2 for He⁺, 3 for Li²⁺)', b:'Strictly valid ONLY for single-electron (hydrogenic) species (H, He⁺, Li²⁺, Be³⁺); fails for He, Li, etc.' },
    { n:'Bohr Orbit Energy & PE/KE Relation', f:'E<sub>n</sub> = −13.6 × (Z² / n²) eV;  E<sub>n</sub> = −KE<sub>n</sub> = PE<sub>n</sub> / 2', u:'eV atom⁻¹', s:'Total energy E<sub>n</sub> is negative for bound electron; PE = −27.2 (Z²/n²) eV, KE = +13.6 (Z²/n²) eV', b:'Fails for multi-electron atoms where subshell energy depends on both n and l due to shielding/penetration' },
    { n:'Rydberg Wave Number & Spectral Lines', f:'ν̄ = 1/λ = R<sub>H</sub> Z² (1/n₁² − 1/n₂²);  N<sub>max</sub> = Δn(Δn + 1)/2', u:'cm⁻¹ or m⁻¹', s:'R<sub>H</sub> = 109677 cm⁻¹ ≈ 1.097 × 10⁷ m⁻¹; n₂ > n₁; for a single isolated atom, max lines emitted from n is at most (n − 1)', b:'N = Δn(Δn + 1)/2 applies ONLY to an ensemble (sample) of many atoms, NOT a single isolated atom' },
    { n:'de Broglie Wavelength', f:'λ = h / mv = h / √(2m·KE) = h / √(2mqV)', u:'m', s:'For an electron accelerated through V volts: λ (in Å) ≈ 12.27 / √V (or √(150/V) Å)', b:'λ = 12.27 / √V Å is valid ONLY for non-relativistic electrons; fails for protons, α-particles, or neutral particles' },
    { n:'Heisenberg Uncertainty Principle', f:'Δx · Δp ≥ h / (4π)  ⇒  Δx · Δv ≥ h / (4πm)', u:'J s (or m² s⁻¹)', s:'Δx = uncertainty in position, Δp = mΔv = uncertainty in momentum along the same axis; h/(4π) = 0.527 × 10⁻³⁴ J s', b:'Insignificant for macroscopic objects because large mass m makes Δx·Δv ≈ 10⁻³⁴/m vanishingly small' },
    { n:'Nodes & Subshell/Orbital Capacities', f:'Radial nodes = n − l − 1;  Angular nodes = l;  Total nodes = n − 1', u:'dimensionless', s:'Orbitals in shell n = n²; orbitals in subshell l = (2l + 1); max electrons in shell = 2n², in subshell = 2(2l + 1)', b:'Does not count the node at r = ∞ or r = 0 (nucleus) as a radial node' },
    { n:'Orbital & Spin Angular Momentum', f:'L<sub>orbital</sub> = √[l(l + 1)] · (h / 2π);  μ<sub>s</sub> = √[n(n + 2)] BM', u:'J s and BM', s:'L<sub>orbital</sub> depends ONLY on azimuthal quantum number l (independent of n); n in μ<sub>s</sub> is number of unpaired electrons', b:'Bohr\'s mvr = nh/2π gives non-zero angular momentum for n=1, whereas actual 1s orbital (l=0) has L = 0' }
  ],

  traps:[
    { t:'In the hydrogen atom, the energy of an orbital depends ONLY on the principal quantum number n (1s < 2s = 2p < 3s = 3p = 3d), whereas in multi-electron atoms it depends on (n + l).', c:'A single-electron species has no inter-electronic repulsion or shielding, so all subshells of the same shell n are degenerate.', tag:'NCERT Exception' },
    { t:'Chromium (Z = 24) has configuration [Ar] 3d⁵ 4s¹ (not 3d⁴ 4s²) and Copper (Z = 29) has [Ar] 3d¹⁰ 4s¹ (not 3d⁹ 4s²).', c:'Symmetrical distribution of electrons and high exchange stabilization energy make half-filled (d⁵) and completely filled (d¹⁰) subshells extra stable.', tag:'NCERT Exception' },
    { t:'When a 3d transition metal atom ionizes to form a cation (e.g., Fe → Fe²⁺ or Cr → Cr⁺), electrons are ALWAYS removed from the 4s orbital first before 3d.', c:'Once 3d orbitals are occupied in a neutral atom, they contract and drop lower in energy than 4s (n=4 is the outermost shell), so 4s electrons are lost first.', tag:'Concept Trap' },
    { t:'As an electron moves to a higher Bohr orbit (n increases), its Kinetic Energy DECREASES, whereas its Potential Energy and Total Energy both INCREASE (become less negative).', c:'KE = +13.6 Z²/n² eV decreases with n; PE = −27.2 Z²/n² eV and E = −13.6 Z²/n² eV carry a negative sign, so smaller magnitude means higher energy.', tag:'Sign Convention' },
    { t:'The orbital angular momentum of an electron in any s-orbital (1s, 2s, 3s) is strictly ZERO, contradicting Bohr\'s postulate mvr = nh/2π.', c:'Quantum mechanically L = √[l(l+1)] ℏ; since l = 0 for all s-orbitals, L = 0 regardless of principal quantum number n.', tag:'Concept Trap' },
    { t:'In the photoelectric effect, increasing the intensity of incident light (with ν > ν₀) increases the photocurrent (number of photoelectrons) but has ZERO effect on KE_max or stopping potential V₀.', c:'Each photon interacts one-to-one with one electron; higher intensity means more photons per second, not higher energy per photon (E = hν depends only on frequency).', tag:'Graph Trap' },
    { t:'For a 1s orbital, the probability density |ψ|² is maximum at the nucleus (r = 0), whereas the radial probability distribution function 4πr²|ψ|² is zero at r = 0 and maximum at r = a₀ (0.529 Å).', c:'The volume element 4πr²dr vanishes at r = 0 because r² = 0, and peaks at the Bohr radius a₀ = 0.529 Å for hydrogen 1s.', tag:'Graph Trap' },
    { t:'The d_{z²} orbital is the only d-orbital with two lobes along the z-axis and a doughnut-shaped ring (torus) in the xy-plane, and it has two conical nodal surfaces rather than nodal planes.', c:'Linear combination of d_{z²-x²} and d_{z²-y²} produces axial lobes along z and a toroidal electron density belt in the xy-plane with conical nodes at θ ≈ 54.7°.', tag:'NCERT Exception' }
  ],

  flows:[
    { t:'Hydrogen Spectral Series & EM Region Map',
      chain:['Lyman (n₁ = 1, n₂ = 2,3...) → Ultraviolet (UV) region','Balmer (n₁ = 2, n₂ = 3,4...) → Visible region (Hα, Hβ, Hγ, Hδ)','Paschen (n₁ = 3) & Brackett (n₁ = 4) & Pfund (n₁ = 5) → Infrared (IR) region','Shortest λ (Series Limit, max E) → n₂ = ∞; Longest λ (First Line, min E) → n₂ = n₁ + 1'] },
    { t:'Quantum Numbers & Node Counting Algorithm',
      chain:['Identify n (shell) and l (subshell: s=0, p=1, d=2, f=3)','Angular nodes (nodal planes/cones) = l','Radial (spherical) nodes = n − l − 1','Total nodes (excluding r=0 and r=∞) = n − 1','Subshell energy in multi-electron atom ordered by (n + l); if tied, smaller n has lower energy'] },
    { t:'De-excitation Line Count Decision Tree (Upper state n₂ → Ground state n₁ = 1)',
      root:'How many spectral lines are emitted when electrons jump from n to ground state?',
      br:[
        { l:'Sample of many H atoms (gas tube)', n:['All possible cascades occur','Total distinct lines = n(n − 1) / 2','Lines in a specific series (to n₁) = (n − n₁)'] },
        { l:'Single isolated H atom', n:['Can take at most one step per level','Maximum lines in a single cascade = (n − 1)','Minimum lines (direct jump n → 1) = 1'] },
        { l:'From state n₂ to intermediate state n₁', n:['Let Δn = n₂ − n₁','Maximum distinct lines in sample = Δn(Δn + 1) / 2'] }
      ] }
  ],

  lab:[
    { t:'Hydrogen Discharge Tube & Line Emission Spectrum', d:'Low-pressure H₂ gas subjected to high voltage emits pinkish glow; prism/grating resolves four visible Balmer lines: Hα (656 nm, red), Hβ (486 nm, blue-green), Hγ (434 nm), Hδ (410 nm, violet).' },
    { t:'Photoelectric Cell & Alkali Metal Cathodes', d:'Cs (caesium) and K are used as photosensitive cathodes because of their very low work functions (φ₀ = 2.14 eV for Cs), allowing visible light to eject photoelectrons.' },
    { t:'Davisson–Germer Electron Diffraction Experiment', d:'Scattered electron beam off a nickel crystal produced diffraction rings, experimentally verifying de Broglie\'s wave nature of electrons (λ = 12.27 / √V Å).' },
    { t:'Stern–Gerlach & Zeeman / Stark Splitting Observations', d:'Splitting of spectral lines in a magnetic field (Zeeman effect) and electric field (Stark effect) revealed spatial quantization (m_l), while Stern–Gerlach silver-beam splitting proved electron spin (m_s = ±½).' }
  ],

  pairs:[
    { g:'Hydrogen Spectral Series → Lower Level (n₁) & EM Region', a:'Lyman series', b:'n₁ = 1; Ultraviolet (UV) region' },
    { g:'Hydrogen Spectral Series → Lower Level (n₁) & EM Region', a:'Balmer series', b:'n₁ = 2; Visible region' },
    { g:'Hydrogen Spectral Series → Lower Level (n₁) & EM Region', a:'Paschen series', b:'n₁ = 3; Near-Infrared (IR) region' },
    { g:'Hydrogen Spectral Series → Lower Level (n₁) & EM Region', a:'Brackett series', b:'n₁ = 4; Mid-Infrared (IR) region' },
    { g:'Hydrogen Spectral Series → Lower Level (n₁) & EM Region', a:'Pfund series', b:'n₁ = 5; Far-Infrared (IR) region' },
    { g:'Atomic Orbital → Radial & Angular Node Count', a:'1s orbital (n = 1, l = 0)', b:'0 radial nodes, 0 angular nodes (total = 0)' },
    { g:'Atomic Orbital → Radial & Angular Node Count', a:'2p orbital (n = 2, l = 1)', b:'0 radial nodes, 1 angular node (total = 1)' },
    { g:'Atomic Orbital → Radial & Angular Node Count', a:'3s orbital (n = 3, l = 0)', b:'2 radial nodes, 0 angular nodes (total = 2)' },
    { g:'Atomic Orbital → Radial & Angular Node Count', a:'3d orbital (n = 3, l = 2)', b:'0 radial nodes, 2 angular nodes (total = 2)' },
    { g:'Atomic Orbital → Radial & Angular Node Count', a:'4d orbital (n = 4, l = 2)', b:'1 radial node, 2 angular nodes (total = 3)' }
  ],

  orders:[
    { q:'Arrange the following subshells in increasing order of energy for a multi-electron atom according to the (n + l) rule', s:['3d (n+l = 5, n=3)','4p (n+l = 5, n=4)','5s (n+l = 5, n=5)','4f (n+l = 7, n=4)'], sep:'<', why:'All of 3d, 4p, 5s have (n + l) = 5, so energy increases with principal quantum number n: 3d < 4p < 5s < 4f (n+l = 7).' },
    { q:'Arrange the following particles moving at the SAME velocity in decreasing order of their de Broglie wavelength (λ = h/mv)', s:['Electron (m_e)','Proton (m_p ≈ 1836 m_e)','Deuteron (m_d ≈ 2 m_p)','α-particle (m_α ≈ 4 m_p)'], sep:'>', why:'At constant velocity v, de Broglie wavelength λ = h/(mv) is inversely proportional to mass: m_e < m_p < m_d < m_α.' },
    { q:'Arrange the following electromagnetic radiations in increasing order of wavelength (λ)', s:['γ-rays','X-rays','Ultraviolet (UV)','Visible light','Infrared (IR)'], sep:'<', why:'Wavelength increases from γ-rays (< 10⁻¹² m) < X-rays < UV < Visible (400–750 nm) < IR (< microwaves < radio waves).' }
  ],

  facts:{
    T:[
      'According to Pauli\'s Exclusion Principle, no two electrons in an atom can have the same set of all four quantum numbers.',
      'The axial d-orbitals (e<sub>g</sub> set) are d<sub>x²−y²</sub> and d<sub>z²</sub>, whereas the non-axial orbitals (t<sub>2g</sub> set) with lobes between axes are d<sub>xy</sub>, d<sub>yz</sub>, and d<sub>xz</sub>.',
      'The maximum number of electrons in a subshell with azimuthal quantum number l is given by 2(2l + 1).',
      'For the hydrogen atom, the energy of the 2s orbital is exactly equal to the energy of the 2p orbital.',
      'Cathode rays (electrons) have the same charge-to-mass ratio (e/m = 1.7588 × 10¹¹ C kg⁻¹) regardless of the nature of the gas or electrode material in the discharge tube.',
      'In the ψ vs r plot for a 2s orbital, the wave function ψ crosses the zero axis once (at r = 2a₀), changing sign from positive to negative.',
      'Isoelectronic species (such as O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺) have the same number of electrons (10) and identical ground-state electronic configurations.',
      'The ratio of the radii of the first three Bohr orbits (n = 1, 2, 3) of the hydrogen atom is 1 : 4 : 9.'
    ],
    F:[
      'The charge-to-mass (e/m) ratio of anode rays (canal rays) is constant and independent of the nature of the residual gas in the discharge tube.',
      'In a multi-electron atom, the 3d orbital is filled before the 4s orbital because 3d has a smaller principal quantum number n.',
      'The orbital angular momentum of an electron in a 3s orbital is three times that of an electron in a 1s orbital.',
      'For a given metal in the photoelectric effect, doubling the frequency of incident light (above ν₀) exactly doubles the maximum kinetic energy of the ejected photoelectrons.',
      'Bohr\'s model successfully explains the fine structure doublet splitting of hydrogen spectral lines and the Zeeman effect.',
      'A 2p<sub>z</sub> orbital has one spherical (radial) node and zero nodal planes.',
      'The ground state electronic configuration of Cu²⁺ (Z = 29) is [Ar] 3d⁸ 4s¹.',
      'Heisenberg\'s uncertainty principle states that Δx · Δp<sub>y</sub> ≥ h/(4π) for position along x and momentum along the perpendicular y-axis.'
    ]
  },

  mcq:[
    { q:'Which of the following sets of quantum numbers (n, l, m<sub>l</sub>, m<sub>s</sub>) is NOT permissible for an electron in an atom?',
      o:['n = 3, l = 2, m<sub>l</sub> = −2, m<sub>s</sub> = +½','n = 4, l = 0, m<sub>l</sub> = 0, m<sub>s</sub> = −½','n = 3, l = 2, m<sub>l</sub> = −3, m<sub>s</sub> = +½','n = 5, l = 3, m<sub>l</sub> = +2, m<sub>s</sub> = −½'], a:2, tag:'Boundary Failure',
      sol:['For a given azimuthal quantum number l, the magnetic quantum number m<sub>l</sub> can take integer values only from −l to +l.','When l = 2, allowed m<sub>l</sub> values are −2, −1, 0, +1, +2.','Therefore m<sub>l</sub> = −3 is impossible for l = 2.'] },
    { q:'The number of radial (spherical) nodes and angular nodes (nodal planes) for a 4p orbital are, respectively:',
      o:['2 and 1','1 and 2','3 and 1','2 and 2'], a:0, tag:'Calculation Trap',
      sol:['For a 4p orbital, n = 4 and l = 1.','Radial nodes = n − l − 1 = 4 − 1 − 1 = 2.','Angular nodes = l = 1; hence 2 and 1.'] },
    { q:'If the kinetic energy of a free electron is quadrupled (increased 4 times), its de Broglie wavelength becomes:',
      o:['Half (1/2) of its initial value','One-fourth (1/4) of its initial value','Twice (2×) its initial value','Four times (4×) its initial value'], a:0, tag:'Calculation Trap',
      sol:['de Broglie wavelength in terms of kinetic energy is λ = h / √(2m·KE).','Since λ ∝ 1 / √(KE), when KE becomes 4·KE, λ\' = λ / √4 = λ / 2.'] },
    { q:'What is the shortest wavelength (series limit) in the Balmer series of the hydrogen spectrum in terms of the Rydberg constant R<sub>H</sub>?',
      o:['4 / R<sub>H</sub>','1 / R<sub>H</sub>','9 / R<sub>H</sub>','36 / (5 R<sub>H</sub>)'], a:0, tag:'Concept Trap',
      sol:['For the Balmer series, n₁ = 2; shortest wavelength (highest energy, series limit) corresponds to n₂ = ∞.','1/λ = R<sub>H</sub> (1/2² − 1/∞²) = R<sub>H</sub> / 4 ⇒ λ = 4 / R<sub>H</sub>.','(Note: 36/(5R<sub>H</sub>) is the longest wavelength, n₂ = 3 → n₁ = 2).'] },
    { q:'The total number of unpaired electrons in a gaseous Cr³⁺ ion (Z for Cr = 24) and its spin-only magnetic moment are:',
      o:['3 unpaired electrons, √15 ≈ 3.87 BM','4 unpaired electrons, √24 ≈ 4.90 BM','5 unpaired electrons, √35 ≈ 5.92 BM','2 unpaired electrons, √8 ≈ 2.83 BM'], a:0, tag:'NCERT Exception',
      sol:['Ground state of Cr (Z = 24) is [Ar] 3d⁵ 4s¹.','To form Cr³⁺, 1 electron is removed from 4s and 2 electrons from 3d → [Ar] 3d³.','Number of unpaired electrons n = 3; μ<sub>s</sub> = √[3(3+2)] = √15 ≈ 3.87 BM.'] },
    { q:'In the hydrogen atom, the energy of the first Bohr orbit is −13.6 eV. What is the energy required to excite an electron in a He⁺ ion (Z = 2) from its first Bohr orbit (n = 1) to the second Bohr orbit (n = 2)?',
      o:['40.8 eV','10.2 eV','20.4 eV','54.4 eV'], a:0, tag:'Calculation Trap',
      sol:['ΔE = 13.6 × Z² × (1/n₁² − 1/n₂²) eV.','For n₁ = 1 → n₂ = 2 in H (Z=1), ΔE = 10.2 eV; for He⁺ (Z = 2), Z² = 4.','ΔE = 10.2 × 4 = 40.8 eV (54.4 eV is the ionization energy of He⁺ from n = 1 to ∞).'] }
  ],

  gens:[
    function(R){
      var n = R.pick([2, 3, 4, 5]);
      var sp = R.pick([{name:'H', Z:1}, {name:'He⁺', Z:2}, {name:'Li²⁺', Z:3}]);
      var r = 0.529 * (n * n) / sp.Z;
      return {
        q:'Calculate the radius (in Å) of the n = '+n+' Bohr orbit for '+sp.name+' (Z = '+sp.Z+'):',
        ans:r,
        d:[0.529 * n / sp.Z, 0.529 * sp.Z / (n * n), 0.529 * (n * n) * sp.Z],
        u:'Å',
        tag:'Calculation Trap',
        sol:['r<sub>n</sub> = 0.529 × (n² / Z) Å','r<sub>'+n+'</sub> = 0.529 × ('+n+'² / '+sp.Z+')','= '+R.f(r)+' Å']
      };
    },
    function(R){
      var n = R.pick([1, 2, 3, 4]);
      var sp = R.pick([{name:'He⁺', Z:2}, {name:'Li²⁺', Z:3}]);
      var IE = 13.6 * (sp.Z * sp.Z) / (n * n);
      return {
        q:'The ionization energy (in eV) required to completely remove an electron from the n = '+n+' orbit of a '+sp.name+' ion (Z = '+sp.Z+') is:',
        ans:IE,
        d:[13.6 * sp.Z / n, 13.6 * (n * n) / (sp.Z * sp.Z), 27.2 * (sp.Z * sp.Z) / (n * n)],
        u:'eV',
        tag:'Calculation Trap',
        sol:['E<sub>n</sub> = −13.6 × (Z² / n²) eV; Ionization energy from state n is ΔE = E<sub>∞</sub> − E<sub>n</sub> = +13.6 Z²/n²','IE = 13.6 × ('+sp.Z+'² / '+n+'²)','= '+R.f(IE)+' eV']
      };
    },
    function(R){
      var n2 = R.int(3, 7);
      var n1 = R.int(1, 2);
      var dn = n2 - n1;
      var lines = dn * (dn + 1) / 2;
      return {
        q:'What is the maximum number of distinct spectral lines emitted when a gas sample of hydrogen atoms in the n = '+n2+' state de-excites to the n = '+n1+' state?',
        ans:lines,
        d:[dn, n2 * (n2 + 1) / 2, dn * dn],
        u:'lines',
        tag:'Calculation Trap',
        sol:['Let Δn = n₂ − n₁ = '+n2+' − '+n1+' = '+dn,'Max distinct spectral lines in a multi-atom sample = Δn(Δn + 1) / 2','= '+dn+' × '+(dn+1)+' / 2 = '+lines+' lines']
      };
    },
    function(R){
      var V = R.pick([25, 36, 49, 64, 100, 144, 225, 400]);
      var lam = 12.27 / Math.sqrt(V);
      return {
        q:'An electron initially at rest is accelerated through a potential difference of '+V+' V. Its de Broglie wavelength is approximately:',
        ans:lam,
        d:[12.27 / V, 12.27 * Math.sqrt(V), Math.sqrt(V) / 12.27],
        u:'Å',
        tag:'Calculation Trap',
        sol:['For an electron accelerated by V volts, λ = 12.27 / √V Å','λ = 12.27 / √'+V+' = 12.27 / '+Math.sqrt(V),'= '+R.f(lam)+' Å']
      };
    },
    function(R){
      var lam = R.pick([200, 248, 310, 400]);
      var phi = R.pick([1.5, 2.0, 2.2, 2.5]);
      var Eph = 1240 / lam;
      var KE = Eph - phi;
      return {
        q:'Monochromatic radiation of wavelength '+lam+' nm falls on a metal surface of work function '+phi+' eV. The maximum kinetic energy of the emitted photoelectrons is (take hc = 1240 eV nm):',
        ans:KE,
        d:[Eph + phi, Eph, (Eph - phi)/2],
        u:'eV',
        tag:'Calculation Trap',
        sol:['Photon energy E = hc / λ = 1240 / '+lam+' = '+R.f(Eph)+' eV','KE<sub>max</sub> = E − φ₀ = '+R.f(Eph)+' − '+phi,'= '+R.f(KE)+' eV']
      };
    },
    function(R){
      var dx_nm = R.pick([0.05, 0.1, 0.2, 0.5, 1.0]);
      var dx = dx_nm * 1e-9;
      var dv = 5.79e-5 / dx;
      return {
        q:'If the uncertainty in the position of a moving electron (m = 9.1 × 10⁻³¹ kg) is '+dx_nm+' nm, the minimum uncertainty in its velocity (Δv) is (take h / 4πm = 5.79 × 10⁻⁵ m² s⁻¹):',
        ans:dv,
        d:[dv * 1e-9, dv * 4 * Math.PI, 5.79e-5 * dx],
        u:'m s⁻¹',
        tag:'Unit Conversion Trap',
        sol:['Δx = '+dx_nm+' nm = '+dx_nm+' × 10⁻⁹ m','Δv ≥ h / (4πm · Δx) = 5.79 × 10⁻⁵ / ('+dx_nm+' × 10⁻⁹)','= '+R.f(dv)+' m s⁻¹']
      };
    }
  ]
});

NEET.reg({
  id:'C3',
  subj:'Physical Chemistry',
  type:'num',
  name:'Chemical Bonding and Molecular Structure',
  syl:'Kossel-Lewis approach to chemical bonding, octet rule, ionic bond formation and factors influencing it, Born-Haber cycle and lattice enthalpy; Covalent bond, Fajans\' rules, bond parameters (bond length, bond angle, bond enthalpy, bond order), dipole moment; VSEPR theory and shapes of molecules (including SF₄, ClF₃, XeF₂, XeF₄, BrF₅); Valence Bond Theory, concept of hybridization (sp, sp², sp³, sp³d, sp³d², sp³d³), resonance; Molecular Orbital Theory (MOT) for homonuclear diatomic species (B₂, C₂, N₂, O₂, F₂ and their ions), s-p mixing, bond order and magnetic properties; Metallic bonding and Hydrogen bonding (intermolecular vs intramolecular).',
  kw:['chemical bonding','born-haber','lattice enthalpy','fajans rule','dipole moment','vsepr','hybridisation','resonance','molecular orbital theory','bond order','paramagnetic','hydrogen bonding','metallic bond'],

  formulas:[
    { n:'Formal Charge on an Atom in a Lewis Structure', f:'FC = V − L − ½ B', u:'elementary charge', s:'V = valence electrons in free atom, L = non-bonding (lone pair) electrons, B = bonding (shared) electrons around that atom', b:'Formal charges do NOT represent real ionic charges or actual electron transfer; they are a bookkeeping device' },
    { n:'Electric Dipole Moment & % Ionic Character', f:'μ = q × d;  % Ionic Character = (μ<sub>obs</sub> / μ<sub>calc</sub>) × 100', u:'Debye (D) or C m', s:'1 Debye (D) = 3.33564 × 10⁻³⁰ C m; μ<sub>calc</sub> = e × d (where e = 1.602 × 10⁻¹⁹ C and d = bond length in m)', b:'Vector sum μ = 0 for symmetrical regular geometries (CO₂, BF₃, CH₄, PCl₅, SF₆, XeF₄, trans-isomers) even when individual bonds are polar' },
    { n:'Resultant Dipole Moment of Two Bond Vectors', f:'μ<sub>res</sub> = √(μ₁² + μ₂² + 2μ₁μ₂ cos θ)', u:'Debye (D)', s:'θ = angle between the two bond dipole vectors; as θ increases from 0° to 180°, μ<sub>res</sub> decreases (provided directions are away from vertex)', b:'Fails if lone-pair dipole vector contribution (as in NH₃ vs NF₃ or H₂O) is ignored' },
    { n:'Steric Number & Hybridisation (Half-Sum Formula)', f:'H = ½ (V + M − C + A) = BP (σ) + LP', u:'dimensionless', s:'V = valence e⁻ of central atom, M = number of monovalent atoms (H, F, Cl, Br, I), C = cationic charge, A = anionic charge; H=2(sp), 3(sp²), 4(sp³), 5(sp³d), 6(sp³d²), 7(sp³d³)', b:'Divalent oxygen/sulphur atoms are NOT counted in M (set M=0 for O, S); fails for transition metal coordination complexes and odd-electron species like NO, ClO₂' },
    { n:'MOT Bond Order & Stability', f:'Bond Order (BO) = ½ (N<sub>b</sub> − N<sub>a</sub>)', u:'dimensionless', s:'N<sub>b</sub> = electrons in bonding MOs, N<sub>a</sub> = electrons in antibonding MOs (*); Bond energy ∝ BO; Bond length ∝ 1 / BO', b:'If BO ≤ 0 (e.g., He₂, Be₂, Ne₂), the molecule does not exist as a stable covalent species' },
    { n:'Resonance Average Bond Order', f:'BO<sub>avg</sub> = (Total number of bonds between all peripheral atoms) / (Number of canonical positions)', u:'dimensionless', s:'Examples: CO₃²⁻ = 4/3 = 1.33; SO₄²⁻ = 6/4 = 1.50; PO₄³⁻ = 5/4 = 1.25; O₃ = 3/2 = 1.50; NO₂⁻ = 3/2 = 1.50; ClO₄⁻ = 7/4 = 1.75', b:'Applies only to equivalent canonical resonance contributors with identical skeletal connectivity' },
    { n:'Born–Haber Cycle for Lattice Enthalpy (MX)', f:'Δ<sub>f</sub>H° = Δ<sub>sub</sub>H° + IE₁ + ½ Δ<sub>diss</sub>H° + Δ<sub>eg</sub>H° + Δ<sub>lattice</sub>H°(form)', u:'kJ mol⁻¹', s:'By NCERT convention, Lattice Enthalpy (Δ<sub>lattice</sub>H°) is defined as +ve for MX(s) → M⁺(g) + X⁻(g) (dissociation)', b:'Watch sign carefully: lattice formation enthalpy is negative, whereas NCERT lattice dissociation enthalpy is positive' },
    { n:'Fajans\' Covalent Character & Polarising Power', f:'Polarising Power φ ∝ (Charge on cation z⁺) / (Radius of cation r⁺)²', u:'C m⁻²', s:'Covalent character in ionic salt increases with: small cation, high cationic charge, pseudo-noble gas (18 e⁻) cation (Cu⁺, Ag⁺), and large, highly charged anion (I⁻ > Br⁻ > Cl⁻ > F⁻)', b:'Higher covalent character DECREASES melting point and aqueous solubility, reversing the purely ionic lattice trend' }
  ],

  traps:[
    { t:'NH₃ (μ = 1.47 D) has a much larger dipole moment than NF₃ (μ = 0.24 D), even though fluorine is far more electronegative than hydrogen.', c:'In NH₃, the three N–H bond dipoles and the lone-pair orbital dipole point in the SAME direction (additive); in NF₃, the three N–F bond dipoles oppose the lone-pair dipole.', tag:'NCERT Exception' },
    { t:'In the MOT energy diagram, for diatomic molecules with ≤ 14 electrons (Li₂, Be₂, B₂, C₂, N₂), the π(2p_x) = π(2p_y) orbitals lie LOWER in energy than σ(2p_z); for > 14 electrons (O₂, F₂, Ne₂), σ(2p_z) is lower than π(2p).', c:'When Z ≤ 7, 2s and 2p orbitals are close in energy and undergo s–p mixing, which pushes σ(2p_z) above π(2p_x, 2p_y).', tag:'NCERT Exception' },
    { t:'According to MOT, B₂ (10 e⁻) and O₂ (16 e⁻) are PARAMAGNETIC with 2 unpaired electrons each, whereas C₂ (12 e⁻) is DIAMAGNETIC with its two double bonds consisting solely of two π bonds (no σ bond in valence 2p).', c:'B₂ has configuration …π(2p_x)¹ π(2p_y)¹ (2 unpaired e⁻); C₂ has …π(2p_x)² π(2p_y)² (all paired); O₂ has …π*(2p_x)¹ π*(2p_y)¹ (2 unpaired e⁻).', tag:'NCERT Exception' },
    { t:'When N₂ (BO = 3) ionizes to N₂⁺ (BO = 2.5), the bond weakens, whereas when O₂ (BO = 2) ionizes to O₂⁺ (BO = 2.5), the bond STRENGTHENS and shortens.', c:'In N₂, the electron is removed from a bonding σ(2p_z) MO; in O₂, the electron is removed from an antibonding π*(2p) MO.', tag:'Concept Trap' },
    { t:'o-Nitrophenol is steam-volatile and has a lower boiling point and lower water solubility than p-nitrophenol.', c:'o-Nitrophenol forms an INTRAMOLECULAR hydrogen bond (6-membered chelate ring), preventing association between molecules, whereas p-nitrophenol forms extensive INTERMOLECULAR H-bonds.', tag:'NCERT Exception' },
    { t:'In trigonal bipyramidal (sp³d) geometry, lone pairs ALWAYS occupy equatorial positions (e.g., SF₄ see-saw, ClF₃ T-shaped, XeF₂ linear), while more electronegative atoms (like F in PCl₃F₂) occupy axial positions.', c:'An equatorial position has only two 90° repulsions (vs three 90° repulsions at axial positions), minimising severe LP–LP and LP–BP repulsions at 90°.', tag:'Stereo Trap' },
    { t:'In CHCl₃ vs CH₂Cl₂ vs CCl₄, the decreasing order of dipole moment is CH₃Cl (1.87 D) > CH₂Cl₂ (1.60 D) > CHCl₃ (1.03 D) > CCl₄ (0 D).', c:'In CHCl₃, the three C–Cl bond vectors partially cancel one another at ~109.5°, leaving a smaller resultant than two C–Cl vectors in CH₂Cl₂.', tag:'Order Inversion' },
    { t:'All five P–Cl bonds in PCl₅(g) are NOT equivalent: the two axial P–Cl bonds (240 pm) are longer and weaker than the three equatorial P–Cl bonds (202 pm).', c:'Axial bond pairs suffer three 90° repulsions from equatorial bonds, causing elongation and making PCl₅ thermally unstable (PCl₅ ⇌ PCl₃ + Cl₂).', tag:'NCERT Exception' }
  ],

  flows:[
    { t:'VSEPR Geometry Decision Map from Steric Number (BP + LP)',
      root:'Calculate H = ½(V + M − C + A); LP = H − (number of bonded atoms)',
      br:[
        { l:'H = 4 (sp³)', n:['4 BP + 0 LP → Tetrahedral, 109.5° (CH₄, NH₄⁺)','3 BP + 1 LP → Trigonal Pyramidal (NH₃ 107°, PH₃)','2 BP + 2 LP → Bent / V-shape (H₂O 104.5°, H₂S, OF₂)'] },
        { l:'H = 5 (sp³d)', n:['5 BP + 0 LP → Trigonal Bipyramidal (PCl₅)','4 BP + 1 LP → See-saw (SF₄)','3 BP + 2 LP → Bent T-shape (ClF₃, BrF₃)','2 BP + 3 LP → Linear (XeF₂, I₃⁻)'] },
        { l:'H = 6 (sp³d²)', n:['6 BP + 0 LP → Octahedral (SF₆)','5 BP + 1 LP → Square Pyramidal (BrF₅, IF₅, XeOF₄)','4 BP + 2 LP → Square Planar (XeF₄, ICl₄⁻)'] }
      ] },
    { t:'Diatomic Bond Order & Magnetism Quick Shortcuts (8 to 20 Electrons)',
      chain:['14 electrons (N₂, CO, CN⁻, NO⁺, C₂²⁻) → Peak Bond Order = 3.0 (all diamagnetic)','Each ±1 electron away from 14 reduces BO by 0.5: 13 or 15 e⁻ → BO 2.5; 12 or 16 e⁻ → BO 2.0; 11 or 17 e⁻ → BO 1.5; 10 or 18 e⁻ → BO 1.0','All odd-electron species (11, 13, 15, 17, 19 e⁻) are ALWAYS paramagnetic (1 unpaired e⁻)','Among even-electron species, ONLY 10 e⁻ (B₂) and 16 e⁻ (O₂, S₂, B₂²⁻? No, O₂, N₂²⁻) are paramagnetic (2 unpaired e⁻ in degenerate π or π* orbitals)'] },
    { t:'Thermal Stability & Solubility of Alkaline Earth Salts (Fajans vs Hydration)',
      chain:['Polyatomic oxyanion salts (CO₃²⁻, SO₄²⁻, NO₃⁻): Thermal stability INCREASES down the group (BeCO₃ < MgCO₃ < CaCO₃ < SrCO₃ < BaCO₃) as cation polarising power falls','Sulphates solubility in water DECREASES down the group (BeSO₄ > MgSO₄ > CaSO₄ > SrSO₄ > BaSO₄) because hydration enthalpy drops faster than lattice enthalpy','Hydroxides solubility INCREASES down the group (Be(OH)₂ < Mg(OH)₂ < Ca(OH)₂ < Ba(OH)₂) because with small OH⁻, lattice enthalpy drops faster than hydration enthalpy'] }
  ],

  lab:[
    { t:'Steam Distillation of o-Nitrophenol and p-Nitrophenol Mixture', d:'o-Nitrophenol (intramolecular H-bonded, monomer) distils over with steam as the volatile fraction; p-nitrophenol (intermolecular H-bonded, associated) remains in the distillation flask.' },
    { t:'Liquid Oxygen Caught Between Magnetic Poles', d:'Pale blue liquid O₂ poured between poles of a strong electromagnet stays suspended in the gap, visually demonstrating paramagnetism (2 unpaired π* electrons predicted by MOT, where Lewis theory failed).' },
    { t:'Electrical Conductivity of Molten vs Solid Ionic Salts ( vs Covalent AlCl₃)', d:'Solid NaCl is an insulator (ions locked in lattice) but conducts in molten/aqueous state; anhydrous AlCl₃ is covalent (dimer Al₂Cl₆, poor conductor in melt) but conducts in water because high hydration enthalpy of Al³⁺ ionizes it to [Al(H₂O)₆]³⁺.' },
    { t:'Starch–Iodide Test & Polyhalide (I₃⁻) Formation', d:'Insoluble I₂ dissolves in aqueous KI by forming linear triiodide ion I₃⁻ (sp³d hybridised central I with 2 BP + 3 equatorial LP), which slips inside the amylose helix to give a deep blue-black complex.' }
  ],

  pairs:[
    { g:'Molecule / Ion → VSEPR Molecular Shape & Hybridisation', a:'SF₄ (4 BP + 1 LP)', b:'See-saw (distorted tetrahedral); sp³d' },
    { g:'Molecule / Ion → VSEPR Molecular Shape & Hybridisation', a:'ClF₃ (3 BP + 2 LP)', b:'Bent T-shaped; sp³d' },
    { g:'Molecule / Ion → VSEPR Molecular Shape & Hybridisation', a:'XeF₂ or I₃⁻ (2 BP + 3 LP)', b:'Linear; sp³d' },
    { g:'Molecule / Ion → VSEPR Molecular Shape & Hybridisation', a:'BrF₅ or XeOF₄ (5 BP + 1 LP)', b:'Square pyramidal; sp³d²' },
    { g:'Molecule / Ion → VSEPR Molecular Shape & Hybridisation', a:'XeF₄ or ICl₄⁻ (4 BP + 2 LP)', b:'Square planar; sp³d²' },
    { g:'Diatomic Species → MOT Bond Order & Magnetic Nature', a:'O₂ (16 electrons)', b:'Bond order = 2.0; Paramagnetic (2 unpaired e⁻ in π*2p)' },
    { g:'Diatomic Species → MOT Bond Order & Magnetic Nature', a:'O₂⁺ (15 electrons, dioxygenyl)', b:'Bond order = 2.5; Paramagnetic (1 unpaired e⁻ in π*2p)' },
    { g:'Diatomic Species → MOT Bond Order & Magnetic Nature', a:'O₂⁻ (17 electrons, superoxide)', b:'Bond order = 1.5; Paramagnetic (1 unpaired e⁻ in π*2p)' },
    { g:'Diatomic Species → MOT Bond Order & Magnetic Nature', a:'O₂²⁻ (18 electrons, peroxide)', b:'Bond order = 1.0; Diamagnetic (0 unpaired e⁻)' },
    { g:'Diatomic Species → MOT Bond Order & Magnetic Nature', a:'C₂ (12 electrons)', b:'Bond order = 2.0; Diamagnetic (both bonds are π bonds)' }
  ],

  orders:[
    { q:'Arrange the following dioxygen species in decreasing order of O–O bond order (and bond dissociation energy)', s:['O₂⁺ (BO = 2.5)','O₂ (BO = 2.0)','O₂⁻ (BO = 1.5)','O₂²⁻ (BO = 1.0)'], sep:'>', why:'Removing antibonding π* electrons increases bond order, while adding electrons into π* decreases bond order.' },
    { q:'Arrange the following molecules in decreasing order of their bond angle', s:['CO₂ (180°)','BF₃ (120°)','CH₄ (109.5°)','NH₃ (107°)','H₂O (104.5°)'], sep:'>', why:'Hybridisation changes from sp (180°) → sp² (120°) → sp³ (109.5°), and increasing lone pairs (0 → 1 → 2) compress the sp³ angle further.' },
    { q:'Arrange the following lithium halides in increasing order of covalent character according to Fajans\' rule', s:['LiF','LiCl','LiBr','LiI'], sep:'<', why:'As anion size and polarisability increase from F⁻ < Cl⁻ < Br⁻ < I⁻, distortion of the electron cloud by small Li⁺ increases covalent character.' }
  ],

  facts:{
    T:[
      'Isoelectronic molecules and ions having the same number of valence electrons and bonded atoms (such as CO₂, N₂O, NO₂⁺, and N₃⁻) generally have identical linear geometry.',
      'In solid state, PCl₅ exists as an ionic solid composed of tetrahedral [PCl₄]⁺ cations (sp³) and octahedral [PCl₆]⁻ anions (sp³d²).',
      'Ice has a lower density than liquid water because extensive intermolecular hydrogen bonding creates an open cage-like tetrahedral structure with vacant spaces.',
      'Resonance hybrids always have lower total energy (higher stability) than any of the individual hypothetical canonical structures.',
      'In HF, NH₃, and H₂O, the boiling point of H₂O (373 K) is the highest even though HF forms stronger individual H-bonds, because each H₂O molecule forms 4 H-bonds vs only 2 per HF.',
      'The bond dissociation enthalpy of F₂ (158.8 kJ mol⁻¹) is lower than that of Cl₂ (242.6 kJ mol⁻¹) and Br₂ (192.8 kJ mol⁻¹) due to severe lone pair–lone pair repulsion in the small F₂ molecule.',
      'Ethylene (C₂H₄) contains 5 σ bonds and 1 π bond, whereas acetylene (C₂H₂) contains 3 σ bonds and 2 π bonds.',
      'Both NO⁺ and CO have 14 electrons, a bond order of 3.0, and are diamagnetic.'
    ],
    F:[
      'According to VSEPR theory, the lone pair–lone pair repulsion is weaker than bond pair–bond pair repulsion.',
      'XeF₄ has a tetrahedral geometry with a net non-zero dipole moment.',
      'In the conversion of N₂ to N₂⁺, an electron is removed from an antibonding molecular orbital, so the N–N bond distance decreases.',
      'All carbon–oxygen bond lengths in the carbonate ion (CO₃²⁻) are unequal: one short C=O double bond and two long C–O single bonds.',
      'The bond angle in PH₃ (~93.6°) is larger than the bond angle in NH₃ (107°).',
      'According to Fajans\' rules, NaCl has higher covalent character and lower melting point than anhydrous AlCl₃.',
      'A π-bond is formed by head-on axial overlap of atomic orbitals and is stronger than a σ-bond.',
      'p-Dichlorobenzene has a higher dipole moment than o-dichlorobenzene.'
    ]
  },

  mcq:[
    { q:'Which of the following pairs of ions is BOTH isoelectronic and isostructural?',
      o:['CO₃²⁻ and NO₃⁻','ClO₃⁻ and CO₃²⁻','SO₃²⁻ and NO₃⁻','ClO₃⁻ and NO₃⁻'], a:0, tag:'Stereo Trap',
      sol:['CO₃²⁻ (6 + 24 + 2 = 32 e⁻, sp², trigonal planar) and NO₃⁻ (7 + 24 + 1 = 32 e⁻, sp², trigonal planar) are both 32-electron trigonal planar species.','SO₃²⁻ and ClO₃⁻ have 42 electrons each with 1 lone pair on the central atom (sp³, trigonal pyramidal), so they are not isostructural with planar CO₃²⁻ or NO₃⁻.'] },
    { q:'Among the following species, which pair has the SAME bond order?',
      o:['CN⁻ and NO⁺','O₂⁻ and CN⁻','NO and CO','N₂ and O₂⁻'], a:0, tag:'Calculation Trap',
      sol:['Count total electrons: CN⁻ has 6 + 7 + 1 = 14 e⁻ → Bond order = 3.0.','NO⁺ has 7 + 8 − 1 = 14 e⁻ → Bond order = 3.0.','O₂⁻ has 17 e⁻ (BO = 1.5); NO has 15 e⁻ (BO = 2.5); CO and N₂ have 14 e⁻ (BO = 3.0).'] },
    { q:'Which of the following molecules has a non-zero net dipole moment (μ ≠ 0)?',
      o:['SF₄','XeF₄','BF₃','CCl₄'], a:0, tag:'Stereo Trap',
      sol:['SF₄ has 4 bond pairs and 1 equatorial lone pair (sp³d, see-saw geometry); the bond dipoles do not cancel, so μ = 0.63 D ≠ 0.','XeF₄ (square planar, 4 BP + 2 trans LP), BF₃ (trigonal planar), and CCl₄ (regular tetrahedral) are symmetrical with μ = 0.'] },
    { q:'According to Molecular Orbital Theory, which of the following statements about the C₂ molecule (12 electrons) is CORRECT?',
      o:['It is diamagnetic and its double bond consists of two π bonds','It is paramagnetic with two unpaired electrons in π(2p) orbitals','It has a bond order of 2 with one σ and one π bond in the 2p shell','It does not exist because its bond order is zero'], a:0, tag:'NCERT Exception',
      sol:['Because of s–p mixing, the MO configuration of C₂ (12 e⁻) is σ1s² σ*1s² σ2s² σ*2s² π(2p<sub>x</sub>)² π(2p<sub>y</sub>)².','Bond order = ½(8 − 4) = 2.0; all electrons are paired (diamagnetic).','Since σ2s² and σ*2s² cancel out, both bonds in C₂ are π bonds formed by π(2p<sub>x</sub>)² and π(2p<sub>y</sub>)².'] },
    { q:'The correct order of O–O bond length in O₂, H₂O₂ (peroxide) and O₃ (ozone) is:',
      o:['H₂O₂ > O₃ > O₂','O₂ > O₃ > H₂O₂','O₃ > H₂O₂ > O₂','H₂O₂ > O₂ > O₃'], a:0, tag:'Order Inversion',
      sol:['O–O bond order: in O₂, BO = 2.0; in O₃ (resonance hybrid), BO = 1.5; in H₂O₂ (single peroxide bond), BO = 1.0.','Bond length is inversely proportional to bond order (L ∝ 1 / BO).','Therefore bond length order is H₂O₂ (148 pm, BO 1) > O₃ (128 pm, BO 1.5) > O₂ (121 pm, BO 2).'] },
    { q:'The hybridisation of the central xenon atom in XeF₂, XeF₄ and XeO₃ is respectively:',
      o:['sp³d, sp³d², sp³','sp³d², sp³d, sp³','sp³, sp³d, sp³d²','sp³d, sp³, sp³d²'], a:0, tag:'Calculation Trap',
      sol:['Xe (8 valence e⁻): in XeF₂, H = ½(8 + 2) = 5 → sp³d (2 BP + 3 LP, linear).','In XeF₄, H = ½(8 + 4) = 6 → sp³d² (4 BP + 2 LP, square planar).','In XeO₃ (O is divalent, M = 0), H = ½(8 + 0) = 4 → sp³ (3 σ BP + 1 LP, trigonal pyramidal).'] }
  ],

  gens:[
    function(R){
      var sp = R.pick([
        {name:'N₂', e:14, nb:10, na:4, bo:3.0},
        {name:'N₂⁺', e:13, nb:9, na:4, bo:2.5},
        {name:'O₂', e:16, nb:10, na:6, bo:2.0},
        {name:'O₂⁺', e:15, nb:10, na:5, bo:2.5},
        {name:'O₂⁻', e:17, nb:10, na:7, bo:1.5},
        {name:'O₂²⁻', e:18, nb:10, na:8, bo:1.0},
        {name:'B₂', e:10, nb:6, na:4, bo:1.0},
        {name:'Li₂', e:6, nb:4, na:2, bo:1.0},
        {name:'He₂⁺', e:3, nb:2, na:1, bo:0.5}
      ]);
      return {
        q:'According to Molecular Orbital Theory, the bond order of '+sp.name+' ('+sp.e+' electrons) is:',
        ans:sp.bo,
        d:[sp.bo + 0.5, Math.max(0, sp.bo - 0.5), sp.bo + 1.0],
        u:'',
        tag:'Calculation Trap',
        sol:['For '+sp.name+' ('+sp.e+' e⁻): N<sub>b</sub> = '+sp.nb+', N<sub>a</sub> = '+sp.na,'Bond Order = ½(N<sub>b</sub> − N<sub>a</sub>) = ½('+sp.nb+' − '+sp.na+')','= '+sp.bo]
      };
    },
    function(R){
      var ion = R.pick([
        {name:'CO₃²⁻ (carbonate)', bonds:4, pos:3, bo:1.33},
        {name:'SO₄²⁻ (sulphate)', bonds:6, pos:4, bo:1.50},
        {name:'PO₄³⁻ (phosphate)', bonds:5, pos:4, bo:1.25},
        {name:'ClO₄⁻ (perchlorate)', bonds:7, pos:4, bo:1.75},
        {name:'NO₂⁻ (nitrite)', bonds:3, pos:2, bo:1.50}
      ]);
      return {
        q:'What is the resonance-averaged X–O bond order in the '+ion.name+' ion?',
        ans:ion.bo,
        d:[1.0, 2.0, Number((ion.pos / ion.bonds).toFixed(2))],
        u:'',
        tag:'Calculation Trap',
        sol:['Average Bond Order = (Total X–O bonds in Lewis structure) / (Number of equivalent O atoms)','For '+ion.name+', BO = '+ion.bonds+' / '+ion.pos,'= '+ion.bo]
      };
    },
    function(R){
      var mu_obs = R.pick([1.03, 1.20, 1.44, 1.82]);
      var d_A = R.pick([1.27, 1.41, 1.60, 1.75]);
      var mu_calc = 4.8 * d_A;
      var pct = (mu_obs / mu_calc) * 100;
      return {
        q:'A diatomic molecule HX has an observed dipole moment of '+mu_obs+' D and a bond length of '+d_A+' Å. Taking electronic charge e = 4.8 × 10⁻¹⁰ esu (1 D = 10⁻¹⁸ esu cm), the percentage ionic character of HX is:',
        ans:pct,
        d:[(mu_calc / mu_obs) * 10, (mu_obs / d_A) * 100, pct / 2],
        u:'%',
        tag:'Unit Conversion Trap',
        sol:['μ<sub>calc</sub> (for 100% ionic) = 4.8 × d(Å) D = 4.8 × '+d_A+' = '+R.f(mu_calc)+' D','% Ionic character = (μ<sub>obs</sub> / μ<sub>calc</sub>) × 100 = ('+mu_obs+' / '+R.f(mu_calc)+') × 100','= '+R.f(pct)+'%']
      };
    },
    function(R){
      var sub = R.int(80, 120);
      var ie = R.int(400, 520);
      var diss = R.pick([150, 200, 240]);
      var eg = R.int(-360, -300);
      var dfH = R.int(-450, -380);
      var U_form = dfH - (sub + ie + 0.5 * diss + eg);
      var U_diss = -U_form;
      return {
        q:'For an alkali halide MX(s), given: Δ<sub>sub</sub>H°(M) = +'+sub+' kJ mol⁻¹, IE₁(M) = +'+ie+' kJ mol⁻¹, Δ<sub>diss</sub>H°(X₂) = +'+diss+' kJ mol⁻¹, Δ<sub>eg</sub>H°(X) = '+eg+' kJ mol⁻¹, and Δ<sub>f</sub>H°(MX) = '+dfH+' kJ mol⁻¹. The lattice dissociation enthalpy (MX(s) → M⁺(g) + X⁻(g)) is:',
        ans:U_diss,
        d:[U_form, U_diss - 0.5 * diss, Math.abs(dfH - (sub + ie + diss + eg))],
        u:'kJ mol⁻¹',
        tag:'Sign Convention',
        sol:['By Born–Haber cycle: Δ<sub>f</sub>H° = Δ<sub>sub</sub>H° + IE₁ + ½Δ<sub>diss</sub>H° + Δ<sub>eg</sub>H° − Δ<sub>lattice</sub>H°(diss)','Δ<sub>lattice</sub>H°(diss) = '+sub+' + '+ie+' + '+(0.5*diss)+' + ('+eg+') − ('+dfH+')','= +'+U_diss+' kJ mol⁻¹']
      };
    },
    function(R){
      var mol = R.pick([
        {name:'XeF₄', V:8, M:4, bp:4, lp:2, totalLP:14},
        {name:'XeF₂', V:8, M:2, bp:2, lp:3, totalLP:9},
        {name:'ClF₃', V:7, M:3, bp:3, lp:2, totalLP:11},
        {name:'SF₄', V:6, M:4, bp:4, lp:1, totalLP:13},
        {name:'BrF₅', V:7, M:5, bp:5, lp:1, totalLP:16}
      ]);
      return {
        q:'In a single molecule of '+mol.name+', what is the number of lone pairs of electrons on the CENTRAL atom ONLY?',
        ans:mol.lp,
        d:[mol.totalLP, mol.bp, mol.lp + 1],
        u:'lone pairs',
        tag:'Concept Trap',
        sol:['Steric number H = ½(V + M) = ½('+mol.V+' + '+mol.M+') = '+(mol.bp + mol.lp),'Number of bond pairs (F atoms) = '+mol.bp,'Lone pairs on central atom = H − BP = '+(mol.bp + mol.lp)+' − '+mol.bp+' = '+mol.lp+' (whereas total lone pairs including F atoms = '+mol.totalLP+')']
      };
    },
    function(R){
      var sp = R.pick([
        {name:'Central O in O₃ (O=O⁺–O⁻)', V:6, L:2, B:6, fc:1},
        {name:'Single-bonded O in O₃ (O=O⁺–O⁻)', V:6, L:6, B:2, fc:-1},
        {name:'Double-bonded O in CO₃²⁻', V:6, L:4, B:4, fc:0},
        {name:'N atom in NH₄⁺', V:5, L:0, B:8, fc:1},
        {name:'B atom in BH₄⁻', V:3, L:0, B:8, fc:-1}
      ]);
      return {
        q:'Using FC = V − L − ½B, what is the formal charge on the '+sp.name+'?',
        ans:sp.fc,
        d:[sp.fc + 1, sp.fc - 1, sp.V - sp.B],
        u:'',
        tag:'Calculation Trap',
        sol:['V = '+sp.V+' valence e⁻, L = '+sp.L+' non-bonding e⁻, B = '+sp.B+' bonding e⁻','FC = '+sp.V+' − '+sp.L+' − ½('+sp.B+')','= '+sp.fc]
      };
    }
  ]
});

NEET.reg({
  id:'C4',
  subj:'Physical Chemistry',
  type:'num',
  name:'Chemical Thermodynamics',
  syl:'Fundamentals of thermodynamics: System and surroundings, extensive and intensive properties, state functions, types of processes; First law of thermodynamics — concept of work, heat, internal energy and enthalpy, heat capacity, molar heat capacity; Hess\'s law of constant heat summation; Enthalpies of bond dissociation, combustion, formation, atomization, sublimation, phase transition, hydration, ionization, and solution; Second law of thermodynamics; Spontaneity of processes; ΔS of the universe and ΔG of the system as criteria for spontaneity, ΔG° (standard Gibbs energy change) and equilibrium constant.',
  kw:['thermodynamics','internal energy','enthalpy','hess law','heat capacity','entropy','gibbs energy','spontaneity','isothermal','adiabatic','free expansion','bond enthalpy','enthalpy of formation'],

  formulas:[
    { n:'First Law of Thermodynamics (IUPAC Sign Convention)', f:'ΔU = q + w;  w = −P<sub>ext</sub> ΔV', u:'J or kJ', s:'q > 0: heat absorbed BY system; q < 0: heat released; w > 0: work done ON system (compression, ΔV < 0); w < 0: work done BY system (expansion, ΔV > 0)', b:'Watch Physics vs Chemistry sign convention: in Chemistry w = −P ΔV and ΔU = q + w; in free expansion into vacuum (P<sub>ext</sub> = 0), w = 0 always' },
    { n:'Isothermal Reversible Work of Ideal Gas', f:'w<sub>rev</sub> = −2.303 nRT log₁₀(V₂ / V₁) = −2.303 nRT log₁₀(P₁ / P₂)', u:'J or kJ', s:'For an ideal gas in an isothermal process (ΔT = 0), ΔU = 0 and ΔH = 0, so q<sub>rev</sub> = −w<sub>rev</sub> = +2.303 nRT log₁₀(V₂/V₁)', b:'Valid ONLY for reversible isothermal ideal gas processes; for irreversible step against constant P<sub>ext</sub>, use w<sub>irrev</sub> = −P<sub>ext</sub>(V₂ − V₁)' },
    { n:'Enthalpy–Internal Energy Relation for Reactions', f:'ΔH = ΔU + Δn<sub>g</sub> RT', u:'J or kJ mol⁻¹', s:'Δn<sub>g</sub> = (Σ moles of gaseous products) − (Σ moles of gaseous reactants); R = 8.314 J K⁻¹ mol⁻¹ = 2 cal K⁻¹ mol⁻¹', b:'Count ONLY gaseous species in Δn<sub>g</sub> (ignore solids, liquids, and aqueous ions); ensure R and ΔU/ΔH are in the same energy unit (J vs kJ)!' },
    { n:'Heat Capacities & Mayer\'s Relation', f:'q<sub>V</sub> = n C<sub>V</sub> ΔT = ΔU;  q<sub>P</sub> = n C<sub>P</sub> ΔT = ΔH;  C<sub>P,m</sub> − C<sub>V,m</sub> = R', u:'J K⁻¹ mol⁻¹', s:'γ = C<sub>P</sub> / C<sub>V</sub> = 5/3 (1.67, monoatomic), 7/5 (1.40, diatomic), 4/3 (1.33, non-linear polyatomic); Adiabatic work w = n C<sub>V</sub>(T₂ − T₁) = (P₂V₂ − P₁V₁)/(γ − 1)', b:'ΔU = n C<sub>V</sub> ΔT holds for an ideal gas in ANY process, not just isochoric!' },
    { n:'Reaction Enthalpy from Formation vs Bond Enthalpies', f:'Δ<sub>r</sub>H° = Σ Δ<sub>f</sub>H°(products) − Σ Δ<sub>f</sub>H°(reactants) = Σ BE(reactants) − Σ BE(products)', u:'kJ mol⁻¹', s:'Standard enthalpy of formation Δ<sub>f</sub>H° of an element in its reference state (O₂(g), H₂(g), C(graphite), S(rhombic), Br₂(l)) is ZERO', b:'Bond enthalpy formula is Reactants MINUS Products (opposite to Δ<sub>f</sub>H°!) and is strictly valid ONLY when all reactants and products are in the GASEOUS state' },
    { n:'Enthalpy of Solution & Hydration', f:'Δ<sub>sol</sub>H° = Δ<sub>lattice</sub>H° + Δ<sub>hyd</sub>H°', u:'kJ mol⁻¹', s:'Δ<sub>lattice</sub>H° is positive (endothermic dissociation of crystal) and Δ<sub>hyd</sub>H° is negative (exothermic hydration of gaseous ions)', b:'If |Δ<sub>lattice</sub>H°| >> |Δ<sub>hyd</sub>H°| (e.g., AgCl, BaSO₄), the salt is insoluble in water' },
    { n:'Entropy Change for Reversible Process & Phase Transition', f:'ΔS = q<sub>rev</sub> / T;  Δ<sub>trs</sub>S = Δ<sub>trs</sub>H / T<sub>trs</sub>', u:'J K⁻¹ mol⁻¹', s:'At equilibrium phase transition (fusion at T<sub>f</sub> or vaporisation at T<sub>b</sub>), ΔG = 0 so ΔS = ΔH / T; for isothermal ideal gas expansion, ΔS<sub>sys</sub> = 2.303 nR log₁₀(V₂/V₁)', b:'ΔS = q / T requires q<sub>rev</sub> (reversible heat); for adiabatic free expansion into vacuum, q = 0 but ΔS<sub>sys</sub> = nR ln(V₂/V₁) > 0 because the process is irreversible!' },
    { n:'Gibbs Energy, Spontaneity & Crossover Temperature', f:'ΔG = ΔH − TΔS = −T ΔS<sub>total</sub>;  T<sub>eq</sub> = ΔH / ΔS', u:'kJ mol⁻¹ and K', s:'ΔG < 0: spontaneous; ΔG = 0: equilibrium; ΔG > 0: non-spontaneous; watch unit mismatch: ΔH is in kJ mol⁻¹ while ΔS is in J K⁻¹ mol⁻¹ (divide ΔS by 1000!)', b:'ΔG = ΔH − TΔS applies to a process at constant T and P' },
    { n:'Standard Gibbs Energy & Equilibrium Constant', f:'ΔG° = −RT ln K = −2.303 RT log₁₀ K;  ΔG = ΔG° + RT ln Q', u:'J mol⁻¹', s:'At chemical equilibrium, Q = K and ΔG = 0, but ΔG° ≠ 0 (unless K = 1); if K > 1, ΔG° < 0; if K < 1, ΔG° > 0', b:'Do not confuse instantaneous ΔG (which is zero at equilibrium) with standard ΔG° (which is fixed at a given T)' }
  ],

  traps:[
    { t:'Internal energy (U), enthalpy (H), entropy (S), and Gibbs energy (G) are STATE functions, whereas heat (q) and work (w) are PATH functions (yet q + w = ΔU and q_P = ΔH are state functions!).', c:'The work done and heat exchanged depend on how the process is carried out (reversible vs irreversible), but their sum is fixed by the endpoints.', tag:'Concept Trap' },
    { t:'Ratio of two extensive properties is ALWAYS an intensive property (e.g., V and m are extensive, but density d = m/V, molar heat capacity C_m = C/n, and molarity M = n/V are intensive); pH and E°cell are also intensive.', c:'Scaling the system size by factor λ scales both numerator and denominator by λ, which cancels out in the ratio.', tag:'Concept Trap' },
    { t:'For an isothermal free expansion of an ideal gas into a vacuum (P_ext = 0), w = 0, ΔU = 0, q = 0, and ΔH = 0, YET ΔS_sys = +nR ln(V₂/V₁) > 0 while ΔS_surr = 0.', c:'Entropy is a state function, so ΔS_sys depends only on initial and final states (same as reversible isothermal expansion), whereas ΔS_surr = −q_actual/T = 0 because q = 0.', tag:'Zero-Case' },
    { t:'Standard enthalpy of formation Δ_f H° is zero for C(graphite), S(rhombic/α), P(white), and Br₂(liquid), NOT for C(diamond), S(monoclinic), P(red) or Br₂(gas).', c:'The reference state of an element is its most thermodynamically stable allotrope/physical state at 298.15 K and 1 bar (white P is an historical IUPAC convention exception).', tag:'NCERT Exception' },
    { t:'Magnitude of work done in a reversible expansion is ALWAYS GREATER than in an irreversible expansion between the same volume limits, whereas in compression, irreversible work required is GREATER than reversible work.', c:'Under a P–V curve, P_gas > P_ext during expansion (area under reversible curve is larger), while during compression P_ext > P_gas.', tag:'Graph Trap' },
    { t:'Enthalpy of neutralization of any strong acid with any strong base is constant at −57.1 kJ eq⁻¹ (−13.7 kcal eq⁻¹), EXCEPT for HF + NaOH which releases MORE heat (≈ −68.6 kJ mol⁻¹).', c:'Weak acids normally absorb heat to ionize (giving |ΔH| < 57.1 kJ), but for HF the extraordinarily high hydration enthalpy of the tiny F⁻ ion outweighs its ionization enthalpy.', tag:'NCERT Exception' },
    { t:'When ΔH > 0 and ΔS > 0 (endothermic with entropy increase, e.g., melting of ice or CaCO₃ decomposition), the reaction is non-spontaneous at low T and becomes spontaneous only ABOVE T_crossover = ΔH / ΔS.', c:'In ΔG = ΔH − TΔS, when both ΔH and ΔS are positive, the −TΔS term overcomes +ΔH only when T > ΔH/ΔS.', tag:'Sign Convention' },
    { t:'Adsorption of a gas on a solid surface (or freezing of water / condensation of steam) is accompanied by ΔS < 0, so for it to be spontaneous (ΔG < 0), it MUST be exothermic (ΔH < 0) and favoured at low temperature.', c:'Gas molecules lose translational degrees of freedom upon adsorption (ΔS < 0); since −TΔS is positive, ΔG = ΔH − TΔS can be negative only if ΔH < 0 and |ΔH| > |TΔS|.', tag:'Sign Convention' }
  ],

  flows:[
    { t:'Gibbs Energy Spontaneity Matrix (ΔG = ΔH − TΔS)',
      root:'Check signs of ΔH and ΔS for the process',
      br:[
        { l:'ΔH < 0, ΔS > 0 (−, +)', n:['ΔG is ALWAYS negative','Spontaneous at ALL temperatures (e.g., combustion of fuel giving more gas moles)'] },
        { l:'ΔH > 0, ΔS < 0 (+, −)', n:['ΔG is ALWAYS positive','Non-spontaneous at ALL temperatures (e.g., 3O₂ → 2O₃)'] },
        { l:'ΔH < 0, ΔS < 0 (−, −)', n:['Spontaneous only at LOW T (T < |ΔH/ΔS|)','Examples: freezing of water, condensation, gas adsorption'] },
        { l:'ΔH > 0, ΔS > 0 (+, +)', n:['Spontaneous only at HIGH T (T > ΔH/ΔS)','Examples: melting of ice above 273 K, thermal decomposition of CaCO₃'] }
      ] },
    { t:'Thermodynamic Process Comparison for Ideal Gas',
      chain:['Isothermal (ΔT = 0): ΔU = 0, ΔH = 0, q = −w; w_rev = −2.303 nRT log(V₂/V₁)','Isochoric (ΔV = 0, rigid vessel): w = 0, ΔU = q_V = n C_V ΔT','Isobaric (ΔP = 0, open piston): w = −PΔV = −nRΔT, q_P = ΔH = n C_P ΔT','Adiabatic (q = 0, insulated): ΔU = w = n C_V (T₂ − T₁); expansion causes cooling (ΔT < 0)'] },
    { t:'Hess\'s Law & Enthalpy Calculation Decision Tree',
      root:'Which data table is provided in the numerical?',
      br:[
        { l:'Standard Enthalpies of Formation (Δ_f H°) given', n:['Use Products MINUS Reactants','Δ_r H° = Σ ν_P Δ_f H°(P) − Σ ν_R Δ_f H°(R)','Remember Δ_f H° = 0 for elements in reference state'] },
        { l:'Enthalpies of Combustion (Δ_c H°) given', n:['Use Reactants MINUS Products','Δ_r H° = Σ ν_R Δ_c H°(R) − Σ ν_P Δ_c H°(P)'] },
        { l:'Bond Dissociation Enthalpies (BE) given', n:['Use Reactants (broken) MINUS Products (formed)','Δ_r H° = Σ BE(reactants) − Σ BE(products)','Include Δ_sub H° if any solid like C(s) is present'] }
      ] }
  ],

  lab:[
    { t:'Bomb Calorimeter (Constant Volume, ΔV = 0)', d:'Sealed steel bomb immersed in water bath measures heat of combustion at constant volume: q_V = −C_cal × ΔT = ΔU (since ΔV = 0, w = 0); convert to ΔH using ΔH = ΔU + Δn_g RT.' },
    { t:'Coffee-Cup / Polystyrene Calorimeter (Constant Atmospheric Pressure)', d:'Open to atmosphere (P = constant); directly measures enthalpy change q_P = ΔH for neutralization, dissolution, and dilution reactions in aqueous solution.' },
    { t:'Enthalpy of Neutralization: HCl + NaOH vs CH₃COOH + NaOH', d:'Strong acid + strong base (H⁺ + OH⁻ → H₂O) always yields Δ_neut H° = −57.1 kJ eq⁻¹; with weak acid CH₃COOH, |ΔH| is smaller (~ −55.2 kJ mol⁻¹) because ~1.9 kJ mol⁻¹ is absorbed in ionizing CH₃COOH.' },
    { t:'Dissolution of CuSO₄(s) vs CuSO₄·5H₂O(s) in Calorimeter', d:'Anhydrous CuSO₄(s) dissolves exothermically (Δ_sol H ≈ −66.5 kJ mol⁻¹, white → blue), whereas hydrated CuSO₄·5H₂O(s) dissolves endothermically (Δ_sol H ≈ +11.7 kJ mol⁻¹); difference gives enthalpy of hydration (−78.2 kJ mol⁻¹).' }
  ],

  pairs:[
    { g:'Thermodynamic Property → Intensive vs Extensive Classification', a:'Internal Energy (U), Enthalpy (H), Entropy (S), Gibbs Energy (G), Volume (V), Heat Capacity (C)', b:'Extensive properties (depend on amount of matter; additive)' },
    { g:'Thermodynamic Property → Intensive vs Extensive Classification', a:'Temperature (T), Pressure (P), Density (d), Refractive index, Viscosity, Surface tension', b:'Intensive properties (independent of system size; non-additive)' },
    { g:'Thermodynamic Property → Intensive vs Extensive Classification', a:'Molar heat capacity (C_m), Specific heat capacity (c), Molarity (M), Mole fraction (x)', b:'Intensive properties (ratio of two extensive quantities)' },
    { g:'Thermodynamic Property → Intensive vs Extensive Classification', a:'Standard electrode potential (E°cell) and pH', b:'Intensive properties (do NOT multiply E° when multiplying a half-reaction)' },
    { g:'Reaction Example → Relation Between ΔH and ΔU (ΔH = ΔU + Δn_g RT)', a:'H₂(g) + I₂(g) → 2HI(g)  or  C(s) + O₂(g) → CO₂(g)', b:'Δn_g = 0  ⇒  ΔH = ΔU' },
    { g:'Reaction Example → Relation Between ΔH and ΔU (ΔH = ΔU + Δn_g RT)', a:'PCl₅(g) → PCl₃(g) + Cl₂(g)  or  CaCO₃(s) → CaO(s) + CO₂(g)', b:'Δn_g = +1 > 0  ⇒  ΔH > ΔU (ΔH = ΔU + RT)' },
    { g:'Reaction Example → Relation Between ΔH and ΔU (ΔH = ΔU + Δn_g RT)', a:'N₂(g) + 3H₂(g) → 2NH₃(g)', b:'Δn_g = −2 < 0  ⇒  ΔH < ΔU (ΔH = ΔU − 2RT)' },
    { g:'Reaction Example → Relation Between ΔH and ΔU (ΔH = ΔU + Δn_g RT)', a:'CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l) at 298 K', b:'Δn_g = 1 − 3 = −2 (H₂O is liquid!)  ⇒  ΔH = ΔU − 2RT' }
  ],

  orders:[
    { q:'Arrange 1 mole of H₂O in different phases at 1 bar in increasing order of standard molar entropy (S°)', s:['H₂O(s, ice)','H₂O(l, liquid water)','H₂O(g, water vapour)'], sep:'<', why:'Disorder (randomness of molecular motion) increases dramatically from crystalline solid < liquid < gas.' },
    { q:'For an ideal gas expanding from initial volume V₁ to final volume 2V₁, arrange the following processes in decreasing order of magnitude of work done BY the gas (|w|)', s:['Isobaric expansion','Isothermal reversible expansion','Adiabatic reversible expansion','Free expansion into vacuum'], sep:'>', why:'On a P–V diagram, the area under the curve from V₁ to 2V₁ is highest for horizontal isobar > isothermal (PV = const) > steeper adiabatic (PV^γ = const) > free expansion (w = 0).' },
    { q:'Arrange the following gases in decreasing order of their adiabatic heat capacity ratio (γ = C_P / C_V)', s:['He (monoatomic, γ = 1.67)','N₂ (diatomic, γ = 1.40)','SO₂ (non-linear triatomic, γ = 1.33)'], sep:'>', why:'As atomicity increases, rotational and vibrational degrees of freedom increase C_V, reducing γ = 1 + 2/f.' }
  ],

  facts:{
    T:[
      'According to the Third Law of Thermodynamics, the entropy of any pure, perfectly crystalline substance approaches zero as the temperature approaches absolute zero (0 K).',
      'For a cyclic process, the system returns to its initial state, so ΔU = 0, ΔH = 0, ΔS<sub>sys</sub> = 0, and ΔG = 0, while q = −w.',
      'The enthalpy of atomization of H₂(g) → 2H(g) is equal to its H–H bond dissociation enthalpy, whereas for CH₄(g) → C(g) + 4H(g) the C–H bond enthalpy is the mean (1/4th) of Δ<sub>a</sub>H°.',
      'In an adiabatic reversible process (q<sub>rev</sub> = 0), the entropy of the system remains constant (ΔS = 0, isentropic process).',
      'During the stretching of a rubber band, polymer chains align and entropy decreases (ΔS < 0).',
      'Boiling of an egg (denaturation of coiled globular protein into random polypeptide chains) is accompanied by an increase in entropy (ΔS > 0).',
      'For the combustion of 1 mole of benzene C₆H₆(l) + 15/2 O₂(g) → 6CO₂(g) + 3H₂O(l), Δn<sub>g</sub> = 6 − 7.5 = −1.5.',
      'Standard Gibbs energy of formation Δ<sub>f</sub>G° of all elements in their most stable reference state at 1 bar and 298 K is zero.'
    ],
    F:[
      'In every spontaneous endothermic process, the entropy of the system must decrease (ΔS<sub>sys</sub> < 0).',
      'For the reaction CO(g) + ½O₂(g) → CO₂(g), ΔH° is numerically greater (less negative) than ΔU°.',
      'Work done by a gas during isothermal reversible expansion is less in magnitude than work done during isothermal irreversible expansion against the final pressure P₂.',
      'At chemical equilibrium, both ΔG and ΔG° must always be equal to zero.',
      'Heat capacity (C) is an intensive property, whereas molar heat capacity (C<sub>m</sub>) is an extensive property.',
      'In the reaction 2Cl(g) → Cl₂(g), the signs of ΔH and ΔS are both positive (+, +).',
      'The standard enthalpy of formation of CO₂(g) is equal to the enthalpy of combustion of CO(g).',
      'In an adiabatic expansion of an ideal gas against an external pressure, the temperature of the gas increases.'
    ]
  },

  mcq:[
    { q:'For the formation of two moles of ammonia, N₂(g) + 3H₂(g) → 2NH₃(g), the relationship between ΔH and ΔU is:',
      o:['ΔH = ΔU − 2RT','ΔH = ΔU + 2RT','ΔH = ΔU − RT','ΔH = ΔU'], a:0, tag:'Calculation Trap',
      sol:['Δn<sub>g</sub> = (moles of gaseous products) − (moles of gaseous reactants) = 2 − (1 + 3) = −2.','From ΔH = ΔU + Δn<sub>g</sub>RT, we get ΔH = ΔU − 2RT.'] },
    { q:'For the homolytic recombination reaction 2Cl(g) → Cl₂(g), the correct signs of ΔH and ΔS are:',
      o:['ΔH < 0 and ΔS < 0','ΔH > 0 and ΔS > 0','ΔH < 0 and ΔS > 0','ΔH > 0 and ΔS < 0'], a:0, tag:'Sign Convention',
      sol:['Bond formation between two gaseous chlorine atoms always releases energy (exothermic) → ΔH < 0.','Two moles of gaseous atoms combine to form 1 mole of diatomic gas (Δn<sub>g</sub> = −1, randomness decreases) → ΔS < 0.'] },
    { q:'Under which of the following conditions is a reaction spontaneous at ALL temperatures?',
      o:['ΔH < 0 and ΔS > 0','ΔH < 0 and ΔS < 0','ΔH > 0 and ΔS > 0','ΔH > 0 and ΔS < 0'], a:0, tag:'Sign Convention',
      sol:['Spontaneity requires ΔG = ΔH − TΔS < 0.','When ΔH is negative (< 0) and ΔS is positive (> 0), both terms are negative for any T > 0 K, so ΔG < 0 at all temperatures.'] },
    { q:'An ideal gas expands isothermally from 1 L to 10 L against zero external pressure (into a vacuum). The heat absorbed (q) and change in internal energy (ΔU) are:',
      o:['q = 0, ΔU = 0','q > 0, ΔU = 0','q = 0, ΔU < 0','q < 0, ΔU > 0'], a:0, tag:'Zero-Case',
      sol:['For an ideal gas in an isothermal process (ΔT = 0), ΔU = 0.','Expansion into vacuum (free expansion) has P<sub>ext</sub> = 0 ⇒ w = −P<sub>ext</sub>ΔV = 0.','By First Law, q = ΔU − w = 0 − 0 = 0.'] },
    { q:'Which of the following is an intensive property?',
      o:['Molar heat capacity','Heat capacity','Enthalpy','Entropy'], a:0, tag:'Concept Trap',
      sol:['Heat capacity (C), enthalpy (H), and entropy (S) depend on the amount of substance and are extensive.','Molar heat capacity (C<sub>m</sub> = C / n) is heat capacity per mole (ratio of two extensive properties) and is intensive.'] },
    { q:'For a reaction A + B ⇌ C + D, ΔH = +30 kJ mol⁻¹ and ΔS = +100 J K⁻¹ mol⁻¹. The temperature above which the reaction becomes spontaneous is:',
      o:['300 K','0.3 K','3000 K','30 K'], a:0, tag:'Unit Conversion Trap',
      sol:['Convert ΔH to J mol⁻¹: ΔH = +30,000 J mol⁻¹; ΔS = +100 J K⁻¹ mol⁻¹.','Crossover temperature T<sub>eq</sub> = ΔH / ΔS = 30,000 / 100 = 300 K.','Since ΔH > 0 and ΔS > 0, the reaction is spontaneous above 300 K.'] }
  ],

  gens:[
    function(R){
      var dU = R.int(-50, -10);
      var dn = R.pick([-2, -1, 1, 2]);
      var T = R.pick([298, 300, 400, 500]);
      var dH = dU + (dn * 8.314 * T) / 1000;
      return {
        q:'For a chemical reaction at '+T+' K, the internal energy change ΔU = '+dU+' kJ mol⁻¹ and Δn<sub>g</sub> = '+(dn > 0 ? '+'+dn : dn)+'. Taking R = 8.314 J K⁻¹ mol⁻¹, the enthalpy change ΔH (in kJ mol⁻¹) is:',
        ans:dH,
        d:[dU + dn * 8.314 * T, dU - (dn * 8.314 * T) / 1000, dU],
        u:'kJ mol⁻¹',
        tag:'Unit Conversion Trap',
        sol:['ΔH = ΔU + (Δn<sub>g</sub> R T) / 1000 kJ mol⁻¹','ΔH = '+dU+' + ('+dn+' × 8.314 × '+T+') / 1000','= '+R.f(dH)+' kJ mol⁻¹']
      };
    },
    function(R){
      var dH_kJ = R.pick([24, 30, 36, 40, 45, 60]);
      var dS_J = R.pick([60, 80, 100, 120, 150]);
      var T = (dH_kJ * 1000) / dS_J;
      return {
        q:'For an endothermic reaction, ΔH = +'+dH_kJ+' kJ mol⁻¹ and ΔS = +'+dS_J+' J K⁻¹ mol⁻¹. Above what threshold temperature (in K) will the reaction become spontaneous?',
        ans:T,
        d:[dH_kJ / dS_J, dS_J / dH_kJ, T / 10],
        u:'K',
        tag:'Unit Conversion Trap',
        sol:['Convert ΔH to J mol⁻¹: ΔH = '+(dH_kJ*1000)+' J mol⁻¹','T<sub>eq</sub> = ΔH / ΔS = '+(dH_kJ*1000)+' / '+dS_J,'= '+R.f(T)+' K']
      };
    },
    function(R){
      var n = R.pick([1, 2, 3, 5]);
      var T = R.pick([300, 400]);
      var ratio = R.pick([2, 10]);
      var logR = ratio === 10 ? 1 : 0.301;
      var w_kJ = (-2.303 * n * 8.314 * T * logR) / 1000;
      return {
        q:'Calculate the work done (w, in kJ) when '+n+' mol of an ideal gas expands isothermally and reversibly at '+T+' K from volume V₁ to '+(ratio)+'V₁ (take R = 8.314 J K⁻¹ mol⁻¹, log₁₀ '+ratio+' = '+logR+'):',
        ans:w_kJ,
        d:[-w_kJ, w_kJ / 2.303, w_kJ * 1000],
        u:'kJ',
        tag:'Sign Convention',
        sol:['w<sub>rev</sub> = −2.303 n R T log₁₀(V₂ / V₁)','w<sub>rev</sub> = −2.303 × '+n+' × 8.314 × '+T+' × '+logR+' J','= '+R.f(w_kJ)+' kJ (negative sign indicates work done BY the system)']
      };
    },
    function(R){
      var exp = R.pick([2, 3, 4, 5, 10]);
      var T = 300;
      var dG0_kJ = (-2.303 * 8.314 * T * exp) / 1000;
      return {
        q:'The equilibrium constant K for a reaction at 300 K is 10<sup>'+exp+'</sup>. What is the standard Gibbs energy change ΔG° (in kJ mol⁻¹) for the reaction? (R = 8.314 J K⁻¹ mol⁻¹)',
        ans:dG0_kJ,
        d:[-dG0_kJ, dG0_kJ / 2.303, (-8.314 * T * Math.log10(exp))/1000],
        u:'kJ mol⁻¹',
        tag:'Calculation Trap',
        sol:['ΔG° = −2.303 R T log₁₀ K','Since K = 10<sup>'+exp+'</sup>, log₁₀ K = '+exp,'ΔG° = −(2.303 × 8.314 × 300 × '+exp+') / 1000 = '+R.f(dG0_kJ)+' kJ mol⁻¹']
      };
    },
    function(R){
      var P_bar = R.pick([2, 3, 4, 5]);
      var V1 = R.int(2, 6);
      var V2 = V1 + R.int(3, 8);
      var w_J = -P_bar * (V2 - V1) * 100;
      return {
        q:'A gas expands isothermally against a constant external pressure of '+P_bar+' bar from '+V1+' L to '+V2+' L. Given 1 L bar = 100 J, the work done w (in J) is:',
        ans:w_J,
        d:[-w_J, -P_bar * (V2 - V1), w_J * 1.013],
        u:'J',
        tag:'Unit Conversion Trap',
        sol:['w = −P<sub>ext</sub> (V₂ − V₁) = −'+P_bar+' × ('+V2+' − '+V1+') = −'+(P_bar*(V2-V1))+' L bar','Convert L bar to Joules (1 L bar = 100 J):','w = '+w_J+' J']
      };
    },
    function(R){
      var dH_vap = R.pick([30.8, 35.2, 40.7, 44.0]);
      var Tb = R.pick([350, 373, 400]);
      var dS_vap = (dH_vap * 1000) / Tb;
      return {
        q:'The molar enthalpy of vaporisation of a liquid is '+dH_vap+' kJ mol⁻¹ at its normal boiling point of '+Tb+' K. Its molar entropy of vaporisation Δ<sub>vap</sub>S (in J K⁻¹ mol⁻¹) is:',
        ans:dS_vap,
        d:[dH_vap / Tb, -dS_vap, dH_vap * Tb],
        u:'J K⁻¹ mol⁻¹',
        tag:'Unit Conversion Trap',
        sol:['At the boiling point (equilibrium), ΔG = 0 ⇒ Δ<sub>vap</sub>S = Δ<sub>vap</sub>H / T<sub>b</sub>','Δ<sub>vap</sub>S = ('+dH_vap+' × 1000 J mol⁻¹) / '+Tb+' K','= '+R.f(dS_vap)+' J K⁻¹ mol⁻¹']
      };
    }
  ]
});

NEET.reg({
  id:'C5',
  subj:'Physical Chemistry',
  type:'num',
  name:'Solutions',
  syl:'Different methods for expressing the concentration of solution — molality, molarity, mole fraction, percentage (by volume and mass), ppm; Vapour pressure of solutions and Raoult\'s Law — Ideal and non-ideal solutions (positive and negative deviations, minimum and maximum boiling azeotropes), vapour pressure–composition plots; Colligative properties of dilute solutions — relative lowering of vapour pressure, depression of freezing point, elevation of boiling point and osmotic pressure; Determination of molecular mass using colligative properties; Abnormal value of molar mass, van\'t Hoff factor and its significance (degree of dissociation and association).',
  kw:['raoult law','ideal solution','azeotrope','colligative properties','osmotic pressure','elevation of boiling point','depression of freezing point','vant hoff factor','ebullioscopic','cryoscopic','abnormal molar mass'],

  formulas:[
    { n:'Raoult\'s Law for Volatile Binary Liquid Mixture', f:'P<sub>total</sub> = p₁ + p₂ = p₁° x₁ + p₂° x₂ = p₁° + (p₂° − p₁°) x₂', u:'bar or mmHg', s:'x₁, x₂ = mole fractions in LIQUID phase; mole fraction in VAPOUR phase is y₁ = p₁ / P<sub>total</sub> = (p₁° x₁) / P<sub>total</sub>', b:'Holds strictly only for ideal solutions (Δ<sub>mix</sub>H = 0, Δ<sub>mix</sub>V = 0); do not confuse liquid mole fraction x₁ with vapour mole fraction y₁!' },
    { n:'Relative Lowering of Vapour Pressure (RLVP)', f:'(p₁° − p₁) / p₁° = i · n₂ / (n₁ + i · n₂) ≈ i · (w₂ / M₂) / (w₁ / M₁)', u:'dimensionless', s:'p₁° = VP of pure solvent, p₁ = VP of solution; exact form (p₁° − p₁)/p₁ = i·n₂/n₁ holds at all concentrations for ideal behaviour', b:'Approximation n₁ + n₂ ≈ n₁ fails for concentrated solutions (> 5%); note that (p₁° − p₁) is Lowering of VP (not a colligative property by itself), while (p₁° − p₁)/p₁° IS colligative' },
    { n:'Elevation of Boiling Point', f:'ΔT<sub>b</sub> = T<sub>b</sub> − T<sub>b</sub>° = i · K<sub>b</sub> · m = i · K<sub>b</sub> · (1000 w₂) / (M₂ w₁)', u:'K (or °C)', s:'K<sub>b</sub> = molal elevation (ebullioscopic) constant; for water, K<sub>b</sub> = 0.52 K kg mol⁻¹ and T<sub>b</sub>° = 373.15 K (100 °C)', b:'Valid only for dilute solutions of NON-VOLATILE solutes; K<sub>b</sub> depends ONLY on the nature of the solvent, never on the solute' },
    { n:'Depression of Freezing Point', f:'ΔT<sub>f</sub> = T<sub>f</sub>° − T<sub>f</sub> = i · K<sub>f</sub> · m = i · K<sub>f</sub> · (1000 w₂) / (M₂ w₁)', u:'K (or °C)', s:'K<sub>f</sub> = molal depression (cryoscopic) constant; for water, K<sub>f</sub> = 1.86 K kg mol⁻¹ and T<sub>f</sub>° = 273.15 K (0 °C)', b:'Assumes pure solid solvent crystallises out on freezing without solid-solution formation' },
    { n:'Thermodynamic Expression for K_b and K_f', f:'K<sub>b</sub> = (R · M₁ · T<sub>b</sub>°²) / (1000 · Δ<sub>vap</sub>H);  K<sub>f</sub> = (R · M₁ · T<sub>f</sub>°²) / (1000 · Δ<sub>fus</sub>H)', u:'K kg mol⁻¹', s:'M₁ = molar mass of solvent in g mol⁻¹, Δ<sub>vap</sub>H and Δ<sub>fus</sub>H are molar enthalpies of vaporisation and fusion in J mol⁻¹', b:'If latent heat per gram (l<sub>v</sub> or l<sub>f</sub> in J g⁻¹) is given, use K = (R · T°²) / (1000 · l) without multiplying by M₁' },
    { n:'Osmotic Pressure (van\'t Hoff Equation)', f:'π = i · C · R · T = i · (n₂ / V) · R · T = i · (w₂ R T) / (M₂ V)', u:'bar or atm', s:'C = molarity (mol L⁻¹), V = volume in L, R = 0.0821 L atm K⁻¹ mol⁻¹ or 0.08314 L bar K⁻¹ mol⁻¹; isotonic solutions have π₁ = π₂ at same T', b:'Uses Molarity C (not molality m); preferred for molar mass of proteins/polymers because π is measurable in mmHg even at 10⁻⁴ M at room T' },
    { n:'van\'t Hoff Factor (i) & Abnormal Molar Mass', f:'i = (Observed Colligative Property) / (Calculated Normal Property) = M<sub>normal</sub> / M<sub>observed</sub>', u:'dimensionless', s:'For non-electrolyte (glucose, urea, sucrose): i = 1; for dissociation: i > 1 (M<sub>obs</sub> < M<sub>normal</sub>); for association: i < 1 (M<sub>obs</sub> > M<sub>normal</sub>)', b:'Fails if ion pairing occurs at high concentration without using experimental degree of dissociation α' },
    { n:'Degree of Dissociation (α) & Association (α) from i', f:'Dissociation: i = 1 + (n − 1)α;  Association: i = 1 − (1 − 1/n)α', u:'dimensionless', s:'n = number of ions produced per formula unit (n=2 for NaCl, 3 for CaCl₂/K₂SO₄, 4 for AlCl₃, 5 for K₄[Fe(CN)₆]) or molecules associating (n=2 for dimerisation)', b:'For dimerisation of benzoic acid / acetic acid in benzene, n = 2 ⇒ i = 1 − α/2 (so 100% dimerisation gives i = 0.5 and M<sub>obs</sub> = 2 M<sub>normal</sub>)' }
  ],

  traps:[
    { t:'Carboxylic acids (acetic acid, benzoic acid) dissolved in BENZENE undergo dimerisation (i ≈ 0.5, M_obs = 2 × M_normal), whereas in WATER they undergo partial dissociation (i > 1).', c:'In non-polar aprotic benzene (low dielectric constant), carboxylic acids form cyclic dimers via two intermolecular H-bonds; in polar water, they ionize slightly to RCOO⁻ + H⁺.', tag:'NCERT Exception' },
    { t:'Solutions showing POSITIVE deviation from Raoult\'s law (e.g., ethanol + water, acetone + CS₂) form MINIMUM-boiling azeotropes, whereas NEGATIVE deviation mixtures (CHCl₃ + acetone, HNO₃ + water) form MAXIMUM-boiling azeotropes.', c:'Positive deviation means A–B attractions are weaker than A–A/B–B, raising total vapour pressure (P > P_ideal); higher vapour pressure reaches atmospheric pressure at a LOWER boiling point.', tag:'Order Inversion' },
    { t:'When two solutions have the same weight-by-volume percentage (% w/v) at the same temperature, they are NOT necessarily isotonic unless i / M₂ is also identical.', c:'Osmotic pressure is π = i (w/V) RT / M₂; equal % (w/v) means equal (w/V), so isotonicity (π₁ = π₂) requires i₁ / M₁ = i₂ / M₂.', tag:'Calculation Trap' },
    { t:'As the concentration of an aqueous electrolyte decreases (upon dilution), its degree of dissociation α increases and van\'t Hoff factor i increases toward the theoretical integer n, while its ΔT_f decreases.', c:'At infinite dilution, inter-ionic attraction vanishes so α → 1 and i → n, though overall molality m drops.', tag:'Concept Trap' },
    { t:'For an ideal solution of two volatile liquids, Δ_mix H = 0 and Δ_mix V = 0, YET Δ_mix S > 0 and Δ_mix G < 0!', c:'Mixing of two liquids is always a spontaneous irreversible process accompanied by an increase in positional randomness (Δ_mix S > 0), making Δ_mix G = Δ_mix H − T Δ_mix S < 0.', tag:'Sign Convention' },
    { t:'When an equimolar solution of 0.1 m NaCl and 0.1 m BaCl₂ are compared, BaCl₂ has the LARGER freezing point depression ΔT_f, therefore it has the LOWER freezing point T_f!', c:'Students confuse ΔT_f (depression) with T_f = 0°C − ΔT_f; higher i·m gives larger ΔT_f, which means a more negative (LOWER) freezing temperature T_f.', tag:'Order Inversion' },
    { t:'Osmotic pressure is the ONLY colligative property used to determine the molar mass of macromolecules (proteins, nucleic acids, polymers), not ΔT_b or ΔT_f.', c:'Macromolecules have huge molar masses (10⁴–10⁶ g mol⁻¹), giving tiny molarities where ΔT_b and ΔT_f are ~10⁻⁵ K (unmeasurable), and heating for ΔT_b denatures biomolecules.', tag:'Practical Trap' },
    { t:'0.9% (w/v) aqueous NaCl solution is isotonic with human red blood cells (RBCs); placing RBCs in > 0.9% NaCl (hypertonic) causes shrinkage (crenation/plasmolysis), while < 0.9% NaCl (hypotonic) causes swelling/bursting (haemolysis).', c:'In osmosis, net solvent (water) ALWAYS flows from the dilute (hypotonic, lower π, higher solvent chemical potential) side to the concentrated (hypertonic, higher π) side across a semipermeable membrane.', tag:'Practical Trap' }
  ],

  flows:[
    { t:'Ideal vs Non-Ideal Solutions & Azeotrope Classification',
      root:'Compare A–B intermolecular forces with A–A and B–B forces',
      br:[
        { l:'A–B = A–A & B–B (Ideal)', n:['Δ_mix H = 0, Δ_mix V = 0; obeys Raoult\'s law','Examples: n-hexane + n-heptane; bromoethane + chloroethane; benzene + toluene','No azeotrope formed; separable by fractional distillation'] },
        { l:'A–B < A–A & B–B (Positive Deviation)', n:['Δ_mix H > 0 (endothermic), Δ_mix V > 0 (expansion), P > P_ideal','Examples: ethanol + water; ethanol + acetone; acetone + CS₂; CCl₄ + CHCl₃','Forms MINIMUM-boiling azeotrope (e.g., 95.4% ethanol + 4.6% water, BP 351.15 K)'] },
        { l:'A–B > A–A & B–B (Negative Deviation)', n:['Δ_mix H < 0 (exothermic), Δ_mix V < 0 (contraction), P < P_ideal','Examples: CHCl₃ + acetone (new H-bond); HNO₃ + H₂O; HCl + H₂O; phenol + aniline','Forms MAXIMUM-boiling azeotrope (e.g., 68% HNO₃ + 32% water, BP 393.5 K)'] }
      ] },
    { t:'Effective Particle Concentration (i × m) Ranking for Colligative Properties',
      chain:['Calculate effective molality m_eff = i × m (or i × C) for each solution','Higher (i × m) → Higher RLVP, Higher ΔT_b, Higher ΔT_f, Higher Osmotic Pressure π','Higher (i × m) → Higher Boiling Point T_b (= T_b° + ΔT_b)','Higher (i × m) → LOWER Vapour Pressure p₁ and LOWER Freezing Point T_f (= T_f° − ΔT_f)!'] },
    { t:'Reverse Osmosis & Desalination Flow',
      chain:['Sea water (high π) separated from pure water by cellulose acetate semipermeable membrane','If P_ext < π: Normal osmosis (pure water flows into sea water)','If P_ext = π: Osmotic equilibrium (no net flow)','If P_ext > π: Reverse Osmosis (RO) — pure water is squeezed out of sea water into freshwater side'] }
  ],

  lab:[
    { t:'Beckmann Thermometer in Cryoscopic / Ebullioscopic Setup', d:'Differential mercury thermometer with a large bulb and reservoir that measures only small temperature differences (ΔT_f or ΔT_b) to ±0.01 K precision, not absolute temperatures.' },
    { t:'Copper Ferrocyanide Cu₂[Fe(CN)₆] Semipermeable Membrane', d:'Chemically deposited inside the walls of a porous pot (Berkeley–Hartley method) by reacting CuSO₄ with K₄[Fe(CN)₆]; withstands high osmotic pressures without rupturing.' },
    { t:'Ethylene Glycol as Automobile Radiator Antifreeze', d:'Adding ethylene glycol (HOCH₂CH₂OH) to radiator water depresses the freezing point well below 0 °C (preventing winter ice burst) and simultaneously elevates the boiling point above 100 °C.' },
    { t:'CaCl₂ vs NaCl for De-icing Snow-Covered Roads', d:'CaCl₂ (i ≈ 3, eutectic down to −55 °C) is more effective per mole and works at much lower sub-zero temperatures than NaCl (i ≈ 2, eutectic −21 °C) because it yields 3 ions per formula unit.' }
  ],

  pairs:[
    { g:'Binary Liquid Mixture → Raoult\'s Law Behaviour & Molecular Reason', a:'Benzene + Toluene  (or n-Hexane + n-Heptane)', b:'Ideal solution (Δ_mix H = 0, Δ_mix V = 0; similar dispersion forces)' },
    { g:'Binary Liquid Mixture → Raoult\'s Law Behaviour & Molecular Reason', a:'Ethanol + Acetone  (or Ethanol + Cyclohexane)', b:'Positive deviation (acetone/cyclohexane breaks ethanol intermolecular H-bonds)' },
    { g:'Binary Liquid Mixture → Raoult\'s Law Behaviour & Molecular Reason', a:'Carbon disulphide (CS₂) + Acetone', b:'Positive deviation (dipolar interactions weakened; minimum-boiling azeotrope)' },
    { g:'Binary Liquid Mixture → Raoult\'s Law Behaviour & Molecular Reason', a:'Chloroform (CHCl₃) + Acetone', b:'Negative deviation (new Cl₃C–H···O=C(CH₃)₂ intermolecular H-bond formed)' },
    { g:'Binary Liquid Mixture → Raoult\'s Law Behaviour & Molecular Reason', a:'Nitric acid (68% HNO₃) + Water (32% H₂O)', b:'Negative deviation (strong ion-dipole hydration; maximum-boiling azeotrope at 393.5 K)' },
    { g:'Solute (100% Ionized / Associated) → Theoretical van\'t Hoff Factor (i)', a:'Glucose, Urea, or Sucrose in water', b:'i = 1.0 (non-electrolyte; neither dissociates nor associates)' },
    { g:'Solute (100% Ionized / Associated) → Theoretical van\'t Hoff Factor (i)', a:'Benzoic acid or Acetic acid completely dimerised in benzene', b:'i = 0.5 (association with n = 2; observed molar mass is doubled)' },
    { g:'Solute (100% Ionized / Associated) → Theoretical van\'t Hoff Factor (i)', a:'NaCl, KCl, or MgSO₄ in dilute water', b:'i = 2.0 (binary 1:1 or 2:2 electrolyte yielding 2 ions)' },
    { g:'Solute (100% Ionized / Associated) → Theoretical van\'t Hoff Factor (i)', a:'BaCl₂, CaCl₂, or K₂SO₄ in dilute water', b:'i = 3.0 (ternary electrolyte yielding 3 ions)' },
    { g:'Solute (100% Ionized / Associated) → Theoretical van\'t Hoff Factor (i)', a:'K₄[Fe(CN)₆] (potassium ferrocyanide) in dilute water', b:'i = 5.0 (yields 4 K⁺ + 1 [Fe(CN)₆]⁴⁻ = 5 ions)' }
  ],

  orders:[
    { q:'Arrange 0.1 M aqueous solutions of the following solutes in increasing order of osmotic pressure (and boiling point)', s:['Glucose (i = 1)','NaCl (i = 2)','BaCl₂ (i = 3)','AlCl₃ (i = 4)'], sep:'<', why:'At identical molarity C = 0.1 M, osmotic pressure π = iCRT and ΔT_b = i K_b m increase directly with van\'t Hoff factor i.' },
    { q:'Arrange 0.1 m aqueous solutions of the following solutes in DECREASING order of their actual freezing point (T_f)', s:['Urea (i = 1, highest T_f)','KCl (i = 2)','Na₂SO₄ (i = 3)','K₃[Fe(CN)₆] (i = 4, lowest T_f)'], sep:'>', why:'Actual freezing point T_f = 0 °C − i K_f m; the smallest i gives the smallest depression ΔT_f and therefore the HIGHEST freezing point T_f!' },
    { q:'Arrange the following aqueous solutions in decreasing order of their vapour pressure at 298 K', s:['Pure water','0.1 m Sucrose (i = 1)','0.1 m KCl (i = 2)','0.1 m K₂SO₄ (i = 3)'], sep:'>', why:'Higher effective solute concentration (i × m) causes greater lowering of vapour pressure, so vapour pressure drops as i increases.' }
  ],

  facts:{
    T:[
      'An azeotrope (constant-boiling mixture) has the exact same composition in the liquid phase and the vapour phase (x₁ = y₁) and cannot be separated by simple fractional distillation.',
      'The molal elevation constant K<sub>b</sub> and cryoscopic constant K<sub>f</sub> depend ONLY on the identity of the solvent and are completely independent of the solute.',
      'For a volatile binary ideal solution where liquid A is more volatile than B (p<sub>A</sub>° > p<sub>B</sub>°), the vapour phase is always richer in the more volatile component A than the liquid phase (y<sub>A</sub> > x<sub>A</sub>).',
      'Equimolar solutions of K₄[Fe(CN)₆] and Al₂(SO₄)₃ (assuming 100% dissociation) have the same van\'t Hoff factor i = 5 and are isotonic at the same temperature.',
      'Adding a non-volatile solute to a pure volatile solvent decreases the chemical potential (and vapour pressure) of the solvent, simultaneously raising the boiling point and lowering the freezing point.',
      'If 6 g of urea (M = 60 g mol⁻¹) and 18 g of glucose (M = 180 g mol⁻¹) are each dissolved in 1 L of water at 300 K, both solutions are 0.1 M and are isotonic.',
      'When chloroform and acetone are mixed, heat is evolved (Δ<sub>mix</sub>H < 0) and the total volume slightly decreases (Δ<sub>mix</sub>V < 0) due to hydrogen bond formation.',
      'Relative lowering of vapour pressure (p₁° − p₁)/p₁° is independent of temperature, whereas lowering of vapour pressure (p₁° − p₁) increases with temperature.'
    ],
    F:[
      'Lowering of vapour pressure (p₁° − p₁) is a colligative property that depends only on the mole fraction of the solute and not on the nature of the solvent.',
      'For any ideal solution of two volatile liquids, Δ<sub>mix</sub>H = 0, Δ<sub>mix</sub>V = 0, Δ<sub>mix</sub>S = 0, and Δ<sub>mix</sub>G = 0.',
      'The observed molar mass of benzoic acid in benzene determined by depression of freezing point is roughly 61 g mol⁻¹ (half of 122 g mol⁻¹).',
      'Mixtures showing positive deviation from Raoult\'s law always form maximum-boiling azeotropes.',
      'Among 0.1 m glucose, 0.1 m NaCl, and 0.1 m BaCl₂, the 0.1 m BaCl₂ solution has the highest freezing point.',
      'During osmosis across a semipermeable membrane, solute molecules move from the concentrated solution to the dilute solution until concentrations equalize.',
      'For a weak electrolyte AB₂ with degree of dissociation α, the van\'t Hoff factor is given by i = 1 + α.',
      'The value of K<sub>f</sub> for water is 0.52 K kg mol⁻¹ and K<sub>b</sub> for water is 1.86 K kg mol⁻¹.'
    ]
  },

  mcq:[
    { q:'Which of the following 0.10 m aqueous solutions will exhibit the LARGEST freezing point depression (ΔT<sub>f</sub>)?',
      o:['Al₂(SO₄)₃','K₂SO₄','KCl','C₆H₁₂O₆ (glucose)'], a:0, tag:'Calculation Trap',
      sol:['ΔT<sub>f</sub> = i · K<sub>f</sub> · m; since m and K<sub>f</sub> are identical for all four, ΔT<sub>f</sub> ∝ i.','Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻ gives i = 5 (vs i = 3 for K₂SO₄, i = 2 for KCl, and i = 1 for glucose).','Therefore Al₂(SO₄)₃ gives the largest ΔT<sub>f</sub> (and the lowest actual freezing point T<sub>f</sub>).'] },
    { q:'A mixture of chloroform (CHCl₃) and acetone (CH₃COCH₃) shows:',
      o:['Negative deviation from Raoult\'s law and forms a maximum-boiling azeotrope','Positive deviation from Raoult\'s law and forms a minimum-boiling azeotrope','Negative deviation from Raoult\'s law and forms a minimum-boiling azeotrope','Ideal behaviour obeying Raoult\'s law over all compositions'], a:0, tag:'NCERT Exception',
      sol:['Chloroform forms an intermolecular hydrogen bond with acetone: Cl₃C–H···O=C(CH₃)₂.','Since A–B attraction > A–A and B–B attractions, vapour pressure is lower than expected (negative deviation, Δ<sub>mix</sub>H < 0, Δ<sub>mix</sub>V < 0).','Lower vapour pressure requires a higher temperature to boil → forms a maximum-boiling azeotrope.'] },
    { q:'The van\'t Hoff factor (i) for a dilute aqueous solution of strong electrolyte Ba(OH)₂ is:',
      o:['3','2','1','4'], a:0, tag:'Calculation Trap',
      sol:['Ba(OH)₂ is a strong electrolyte that dissociates completely in dilute solution: Ba(OH)₂ → Ba²⁺ + 2OH⁻.','Since 1 formula unit produces n = 3 ions and α = 1, i = 1 + (3 − 1)(1) = 3.'] },
    { q:'A 5% (w/v) solution of cane sugar (molar mass = 342 g mol⁻¹) is isotonic with a 1% (w/v) solution of an unknown non-electrolyte X at the same temperature. The molar mass of X is:',
      o:['68.4 g mol⁻¹','34.2 g mol⁻¹','1710 g mol⁻¹','136.8 g mol⁻¹'], a:0, tag:'Calculation Trap',
      sol:['For isotonic non-electrolyte solutions (i = 1) at the same T: C₁ = C₂ ⇒ (% w/v)₁ / M₁ = (% w/v)₂ / M₂.','5 / 342 = 1 / M<sub>X</sub> ⇒ M<sub>X</sub> = 342 / 5 = 68.4 g mol⁻¹.'] },
    { q:'Ethanoic acid (CH₃COOH, normal molar mass = 60 g mol⁻¹) undergoes 80% dimerisation when dissolved in benzene. Its van\'t Hoff factor (i) and observed molar mass are:',
      o:['i = 0.6 and M<sub>obs</sub> = 100 g mol⁻¹','i = 1.8 and M<sub>obs</sub> = 33.3 g mol⁻¹','i = 0.5 and M<sub>obs</sub> = 120 g mol⁻¹','i = 0.8 and M<sub>obs</sub> = 75 g mol⁻¹'], a:0, tag:'Calculation Trap',
      sol:['For dimerisation (n = 2) with α = 0.80: i = 1 − (1 − 1/n)α = 1 − (1 − 1/2)(0.80) = 1 − 0.40 = 0.60.','Since i = M<sub>normal</sub> / M<sub>obs</sub>, we have M<sub>obs</sub> = 60 / 0.60 = 100 g mol⁻¹.'] },
    { q:'At a given temperature, the vapour pressures of pure benzene and pure toluene are 200 mmHg and 80 mmHg, respectively. If 1 mole of benzene is mixed with 3 moles of toluene to form an ideal solution, the mole fraction of benzene in the VAPOUR phase (y<sub>B</sub>) is:',
      o:['5 / 11 (≈ 0.455)','1 / 4 (0.250)','11 / 20 (0.550)','3 / 4 (0.750)'], a:0, tag:'Concept Trap',
      sol:['In liquid phase: x<sub>B</sub> = 1/(1+3) = 0.25; x<sub>T</sub> = 3/4 = 0.75.','Partial pressures: p<sub>B</sub> = 200 × 0.25 = 50 mmHg; p<sub>T</sub> = 80 × 0.75 = 60 mmHg; P<sub>total</sub> = 50 + 60 = 110 mmHg.','Mole fraction of benzene in vapour phase y<sub>B</sub> = p<sub>B</sub> / P<sub>total</sub> = 50 / 110 = 5 / 11 ≈ 0.455.'] }
  ],

  gens:[
    function(R){
      var pA0 = R.pick([200, 300, 400, 500]);
      var pB0 = R.pick([100, 150, 200, 250]);
      if (pA0 === pB0) pA0 += 100;
      var nA = R.int(1, 4);
      var nB = R.int(1, 4);
      var xA = nA / (nA + nB), xB = nB / (nA + nB);
      var Ptot = pA0 * xA + pB0 * xB;
      return {
        q:'Two liquids A and B form an ideal solution. At 300 K, p<sub>A</sub>° = '+pA0+' mmHg and p<sub>B</sub>° = '+pB0+' mmHg. What is the total vapour pressure of a mixture containing '+nA+' mol of A and '+nB+' mol of B?',
        ans:Ptot,
        d:[pA0 * xB + pB0 * xA, (pA0 + pB0)/2, pA0 * nA + pB0 * nB],
        u:'mmHg',
        tag:'Calculation Trap',
        sol:['x<sub>A</sub> = '+nA+'/('+(nA+nB)+') = '+R.f(xA)+'; x<sub>B</sub> = '+nB+'/('+(nA+nB)+') = '+R.f(xB),'P<sub>total</sub> = p<sub>A</sub>° x<sub>A</sub> + p<sub>B</sub>° x<sub>B</sub> = '+pA0+'('+R.f(xA)+') + '+pB0+'('+R.f(xB)+')','= '+R.f(Ptot)+' mmHg']
      };
    },
    function(R){
      var w2 = R.pick([6, 9, 12, 18, 30]);
      var M2 = R.pick([60, 180]);
      var w1 = R.pick([100, 200, 250, 500]);
      var m = (w2 * 1000) / (M2 * w1);
      var dTf = 1.86 * m;
      return {
        q:'When '+w2+' g of a non-electrolyte (M = '+M2+' g mol⁻¹) is dissolved in '+w1+' g of water (K<sub>f</sub> = 1.86 K kg mol⁻¹), the depression in freezing point (ΔT<sub>f</sub>) of the solution is:',
        ans:dTf,
        d:[0.52 * m, dTf / 2, (1.86 * w2) / (M2 * w1)],
        u:'K',
        tag:'Calculation Trap',
        sol:['Molality m = (1000 × '+w2+') / ('+M2+' × '+w1+') = '+R.f(m)+' mol kg⁻¹','ΔT<sub>f</sub> = K<sub>f</sub> × m = 1.86 × '+R.f(m),'= '+R.f(dTf)+' K']
      };
    },
    function(R){
      var n = R.pick([2, 3, 4]);
      var pct = R.pick([40, 50, 60, 75, 80, 90]);
      var alpha = pct / 100;
      var i = 1 + (n - 1) * alpha;
      var salt = n === 2 ? 'KCl (AB type)' : (n === 3 ? 'BaCl₂ (AB₂ type)' : 'AlCl₃ (AB₃ type)');
      return {
        q:'An electrolyte '+salt+' undergoes '+pct+'% dissociation in an aqueous solution. Its van\'t Hoff factor (i) is:',
        ans:i,
        d:[1 + alpha, 1 - (1 - 1/n)*alpha, n * alpha],
        u:'',
        tag:'Calculation Trap',
        sol:['For '+salt+', number of ions per formula unit n = '+n+' and degree of dissociation α = '+alpha,'i = 1 + (n − 1)α = 1 + ('+n+' − 1) × '+alpha,'= '+R.f(i)]
      };
    },
    function(R){
      var pct = R.pick([40, 50, 60, 70, 80, 90]);
      var alpha = pct / 100;
      var i = 1 - 0.5 * alpha;
      return {
        q:'Benzoic acid undergoes '+pct+'% dimerisation (n = 2) in benzene solution. What is its van\'t Hoff factor (i)?',
        ans:i,
        d:[1 + alpha, 1 - alpha, 0.5 * alpha],
        u:'',
        tag:'Calculation Trap',
        sol:['For dimerisation (n = 2), i = 1 − (1 − 1/n)α = 1 − α/2','With α = '+alpha+', i = 1 − ('+alpha+' / 2)','= '+R.f(i)]
      };
    },
    function(R){
      var w2 = R.pick([1.2, 2.4, 3.6, 5.0]);
      var V_mL = R.pick([200, 250, 500]);
      var V_L = V_mL / 1000;
      var M2 = R.pick([12000, 20000, 30000, 60000]);
      var T = 300;
      var pi_bar = (w2 * 0.083 * T) / (M2 * V_L);
      return {
        q:'A '+V_mL+' mL aqueous solution contains '+w2+' g of a protein of molar mass '+M2+' g mol⁻¹ at 300 K. Taking R = 0.083 L bar K⁻¹ mol⁻¹, the osmotic pressure (π) of the solution is:',
        ans:pi_bar,
        d:[pi_bar / 1000, (w2 * 0.083 * T) / (M2 * V_mL), pi_bar * 2],
        u:'bar',
        tag:'Unit Conversion Trap',
        sol:['Volume V = '+V_mL+' mL = '+V_L+' L','π = (w₂ R T) / (M₂ V) = ('+w2+' × 0.083 × 300) / ('+M2+' × '+V_L+')','= '+R.f(pi_bar)+' bar']
      };
    },
    function(R){
      var p0 = R.pick([100, 200, 250, 400]);
      var x2 = R.pick([0.02, 0.04, 0.05, 0.10]);
      var ps = p0 * (1 - x2);
      var dp = p0 - ps;
      return {
        q:'The vapour pressure of pure liquid A at 298 K is '+p0+' torr. When a non-volatile non-electrolyte solute B is added so that its mole fraction x<sub>B</sub> = '+x2+', the vapour pressure of the solution is:',
        ans:ps,
        d:[dp, p0 / (1 - x2), p0 * (1 + x2)],
        u:'torr',
        tag:'Concept Trap',
        sol:['By Raoult\'s law for a non-volatile solute, p<sub>solution</sub> = p<sub>A</sub>° × x<sub>A</sub> = p<sub>A</sub>° (1 − x<sub>B</sub>)','p<sub>solution</sub> = '+p0+' × (1 − '+x2+') = '+p0+' × '+R.f(1-x2),'= '+R.f(ps)+' torr (whereas '+R.f(dp)+' torr is the lowering Δp)']
      };
    }
  ]
});

NEET.reg({
  id:'C6',
  subj:'Physical Chemistry',
  type:'num',
  name:'Equilibrium',
  syl:'Equilibria involving physical processes: solid-liquid, liquid-gas, gas-solution (Henry\'s law) and solid-gas, general characteristics; Equilibrium involving chemical processes: law of chemical equilibrium, equilibrium constants (K_p and K_c) and their significance, relation between K_p and K_c, reaction quotient Q, ΔG and ΔG° in equilibrium, factors affecting equilibrium concentration, pressure, temperature (Le Chatelier\'s principle), effect of catalyst and inert gas; Ionic equilibrium: weak and strong electrolytes, Ostwald\'s dilution law, multistage ionization, acids and bases (Arrhenius, Brønsted-Lowry and Lewis) and their ionization, acid-base equilibria, ionization of water (K_w), pH scale, common ion effect, hydrolysis of salts and pH of their solutions, solubility of sparingly soluble salts and solubility products (K_sp), buffer solutions (Henderson equation).',
  kw:['chemical equilibrium','henry law','le chatelier','ionic equilibrium','bronsted-lowry','lewis acid','ph scale','ostwald dilution','common ion effect','buffer solution','henderson','salt hydrolysis','solubility product'],

  formulas:[
    { n:'Henry\'s Law for Gas Solubility in Liquid', f:'p = K<sub>H</sub> · x<sub>gas</sub>', u:'bar or atm (for K_H)', s:'p = partial pressure of gas above liquid, x<sub>gas</sub> = mole fraction of dissolved gas, K<sub>H</sub> = Henry\'s law constant', b:'Higher K<sub>H</sub> at a given P means LOWER solubility x<sub>gas</sub>; K<sub>H</sub> increases as temperature rises (so gases are less soluble in warm water); fails if gas reacts chemically with solvent (e.g., NH₃ or HCl in H₂O)' },
    { n:'Relation Between K_p and K_c', f:'K<sub>p</sub> = K<sub>c</sub> (RT)<sup>Δn<sub>g</sub></sup>', u:'(bar)<sup>Δn</sup> vs (mol L⁻¹)<sup>Δn</sup>', s:'Δn<sub>g</sub> = (Σ moles of GASEOUS products) − (Σ moles of GASEOUS reactants); R = 0.08314 L bar K⁻¹ mol⁻¹ (or 0.0821 L atm K⁻¹ mol⁻¹)', b:'Pure solids (s) and pure liquids (l) have unit activity (a = 1) and are NEVER included in K<sub>c</sub>, K<sub>p</sub>, or Δn<sub>g</sub>' },
    { n:'Effect of Stoichiometry & Temperature on K (van\'t Hoff)', f:'K\' = K<sup>n</sup> (when multiplied by n);  K<sub>rev</sub> = 1/K;  log₁₀(K₂/K₁) = (ΔH° / 2.303 R)(1/T₁ − 1/T₂)', u:'dimensionless', s:'Adding two reactions multiplies their K values (K₃ = K₁ × K₂); for endothermic (ΔH° > 0), K increases with T; for exothermic (ΔH° < 0), K decreases with T', b:'K depends ONLY on temperature (and stoichiometry written); K never changes with concentration, pressure, volume, inert gas, or catalyst' },
    { n:'Ostwald\'s Dilution Law & Weak Acid/Base pH', f:'K<sub>a</sub> = Cα² / (1 − α) ≈ Cα²  ⇒  α = √(K<sub>a</sub> / C);  [H⁺] = Cα = √(K<sub>a</sub> · C)', u:'mol L⁻¹', s:'pH of weak monoprotic acid: pH = ½ (pK<sub>a</sub> − log₁₀ C); for conjugate acid–base pair at 298 K: K<sub>a</sub> × K<sub>b</sub> = K<sub>w</sub> = 10⁻¹⁴ (pK<sub>a</sub> + pK<sub>b</sub> = 14)', b:'Approximation (1 − α) ≈ 1 fails when α > 0.05 (5%); in that case solve the full quadratic Cα² + K<sub>a</sub>α − K<sub>a</sub> = 0' },
    { n:'Ionic Product of Water & Very Dilute Strong Acid', f:'K<sub>w</sub> = [H⁺][OH⁻] = 10⁻¹⁴ M² at 298 K;  For 10⁻⁸ M HCl: [H⁺]<sub>total</sub> = 10⁻⁸ + x ≈ 1.05 × 10⁻⁷ M (pH ≈ 6.98)', u:'mol² L⁻²', s:'Auto-ionization of water is endothermic (ΔH > 0), so K<sub>w</sub> increases with T (at 373 K, K<sub>w</sub> ≈ 10⁻¹² and neutral pH = 6.0!)', b:'Direct pH = −log C gives pH = 8 (basic!) for 10⁻⁸ M HCl — fails when C<sub>acid</sub> ≤ 10⁻⁶ M because [H⁺] from H₂O (≈ 10⁻⁷ M) cannot be neglected' },
    { n:'Henderson–Hasselbalch Buffer Equations', f:'Acidic buffer: pH = pK<sub>a</sub> + log₁₀([Salt] / [Acid]);  Basic buffer: pOH = pK<sub>b</sub> + log₁₀([Salt] / [Base])', u:'pH units', s:'[Salt] means concentration of conjugate ion ([A⁻] or [BH⁺]); maximum buffer capacity occurs when [Salt] = [Acid], where pH = pK<sub>a</sub> (effective range: pK<sub>a</sub> ± 1)', b:'Fails for strong acid + salt (e.g., HCl + NaCl is NOT a buffer) or when acid/salt concentrations are extremely dilute (< 10⁻³ M)' },
    { n:'Salt Hydrolysis pH Formulas (at 298 K)', f:'WA+SB: pH = 7 + ½(pK<sub>a</sub> + log C);  SA+WB: pH = 7 − ½(pK<sub>b</sub> + log C);  WA+WB: pH = 7 + ½(pK<sub>a</sub> − pK<sub>b</sub>)', u:'pH units', s:'K<sub>h</sub> = K<sub>w</sub>/K<sub>a</sub> (WA+SB), K<sub>w</sub>/K<sub>b</sub> (SA+WB), or K<sub>w</sub>/(K<sub>a</sub>K<sub>b</sub>) (WA+WB); degree of hydrolysis h = √(K<sub>h</sub>/C) for WA+SB and SA+WB', b:'For a salt of Weak Acid + Weak Base (e.g., CH₃COONH₄), both h and pH are INDEPENDENT of concentration C!' },
    { n:'Solubility Product (K_sp) & Molar Solubility (s)', f:'A<sub>x</sub>B<sub>y</sub>(s) ⇌ x A<sup>y+</sup> + y B<sup>x−</sup>;  K<sub>sp</sub> = x<sup>x</sup> · y<sup>y</sup> · s<sup>(x+y)</sup>', u:'(mol L⁻¹)<sup>(x+y)</sup>', s:'AB (AgCl, BaSO₄): K<sub>sp</sub> = s²; AB₂/A₂B (CaF₂, Ag₂CrO₄): K<sub>sp</sub> = 4s³; AB₃ (Fe(OH)₃, Al(OH)₃): K<sub>sp</sub> = 27s⁴; A₂B₃/A₃B₂ (Ca₃(PO₄)₂, Bi₂S₃): K<sub>sp</sub> = 108s⁵', b:'In presence of a common ion of concentration C (e.g., AgCl in C M NaCl), solubility drops sharply to s\' = K<sub>sp</sub> / C (neglecting s\' << C)' }
  ],

  traps:[
    { t:'Adding an inert gas (like He or Ar) at CONSTANT VOLUME has ZERO effect on chemical equilibrium, whereas adding an inert gas at CONSTANT PRESSURE shifts the equilibrium toward the side with MORE gaseous moles (larger Σν_g).', c:'At constant V, partial pressures and molar concentrations [A] = n/V of all reacting gases remain unchanged (Q = K); at constant P, total volume V expands, decreasing all concentrations and favouring the side with more moles.', tag:'Concept Trap' },
    { t:'At 90 °C, pure water has [H⁺] = [OH⁻] = 10⁻⁶ M and pH = 6.0, yet it is completely NEUTRAL (not acidic!).', c:'Neutrality is defined by [H⁺] = [OH⁻], not by pH = 7.0; pH = 7.0 corresponds to neutrality ONLY at 298 K where K_w = 10⁻¹⁴.', tag:'Concept Trap' },
    { t:'The pH of 10⁻⁸ M HCl at 298 K is 6.98 (slightly < 7), NOT 8.0!', c:'An aqueous acid solution at 298 K can never have pH > 7; at 10⁻⁸ M, water\'s own dissociation (10⁻⁷ M, suppressed slightly by common ion to 0.95 × 10⁻⁷ M) contributes [H⁺]_total = 1.05 × 10⁻⁷ M.', tag:'Zero-Case' },
    { t:'Boric acid H₃BO₃ (or B(OH)₃) is a weak monobasic LEWIS acid, NOT a Brønsted proton donor: B(OH)₃ + 2H₂O ⇌ [B(OH)₄]⁻ + H₃O⁺.', c:'Boron in B(OH)₃ is electron-deficient (6 valence e⁻, vacant 2p orbital) and accepts a lone pair (OH⁻) from a water molecule, releasing H⁺.', tag:'NCERT Exception' },
    { t:'For polyprotic acids (like H₂SO₄, H₂CO₃, H₃PO₄), the successive ionization constants ALWAYS follow K_{a1} >> K_{a2} >> K_{a3}.', c:'It is electrostatically much harder to remove a positively charged H⁺ ion from an already negatively charged anion (HCO₃⁻ or HPO₄²⁻) than from a neutral molecule.', tag:'Order Inversion' },
    { t:'In qualitative analysis, Group II sulphides (CuS, PbS, CdS; very low K_sp) are precipitated in acidic medium (HCl + H₂S), whereas Group IV sulphides (ZnS, NiS, CoS, MnS; higher K_sp) require basic medium (NH₄Cl + NH₄OH + H₂S).', c:'In Group II, H⁺ from HCl suppresses H₂S ⇌ 2H⁺ + S²⁻ via common-ion effect so only ultra-low K_sp sulphides precipitate; in Group IV, OH⁻ consumes H⁺ and shifts equilibrium right to give high [S²⁻].', tag:'Practical Trap' },
    { t:'Precipitation of a sparingly soluble salt occurs ONLY when the ionic product Q_ip (or K_ip) EXCEEDS the solubility product K_sp (Q_ip > K_sp).', c:'When Q_ip < K_sp the solution is unsaturated; when Q_ip = K_sp it is saturated at equilibrium; when Q_ip > K_sp it is supersaturated and precipitates until Q_ip = K_sp.', tag:'Boundary Failure' },
    { t:'A catalyst speeds up both forward and backward reactions equally by lowering the activation energy E_a of both by the same amount, so K_eq and equilibrium composition remain completely unchanged.', c:'K_eq = exp(−ΔG°/RT) is a thermodynamic state property depending only on the energy difference between reactants and products, not the transition state barrier.', tag:'Concept Trap' }
  ],

  flows:[
    { t:'Reaction Quotient (Q_c) vs Equilibrium Constant (K_c) Decision Map',
      root:'Calculate Q_c using current concentrations in the mass-action expression',
      br:[
        { l:'Q_c < K_c', n:['ΔG = RT ln(Q/K) < 0','Net reaction proceeds FORWARD (Left → Right) to form more products'] },
        { l:'Q_c = K_c', n:['ΔG = 0','System is at dynamic equilibrium (r_f = r_b)'] },
        { l:'Q_c > K_c', n:['ΔG = RT ln(Q/K) > 0','Net reaction proceeds BACKWARD (Right → Left) to form more reactants'] }
      ] },
    { t:'Le Chatelier\'s Principle Master Response Table',
      chain:['Increase Pressure (Decrease Volume): shifts toward side with FEWER gaseous moles (if Δn_g = 0, no shift)','Increase Temperature: shifts in ENDOTHERMIC direction (right if ΔH > 0, left if ΔH < 0) and changes K','Add Reactant (or remove Product): Q < K → shifts FORWARD without changing K','Add Inert Gas at constant V → NO SHIFT; at constant P → shifts toward MORE gaseous moles'] },
    { t:'Salt Classification & Aqueous pH at 298 K',
      root:'Identify parent acid and parent base of the salt',
      br:[
        { l:'Strong Acid + Strong Base (NaCl, KNO₃, Na₂SO₄)', n:['No hydrolysis of cation or anion','pH = 7.0 (Neutral)'] },
        { l:'Weak Acid + Strong Base (CH₃COONa, NaCN, Na₂CO₃)', n:['Anionic hydrolysis: A⁻ + H₂O ⇌ HA + OH⁻','pH > 7.0 (Alkaline); pH = 7 + ½(pK_a + log C)'] },
        { l:'Strong Acid + Weak Base (NH₄Cl, FeCl₃, AlCl₃, CuSO₄)', n:['Cationic hydrolysis: BH⁺ + H₂O ⇌ B + H₃O⁺','pH < 7.0 (Acidic); pH = 7 − ½(pK_b + log C)'] },
        { l:'Weak Acid + Weak Base (CH₃COONH₄, NH₄CN)', n:['Both cation and anion hydrolyse; pH = 7 + ½(pK_a − pK_b)','Independent of C! (pH ≈ 7 for CH₃COONH₄ since K_a ≈ K_b)'] }
      ] }
  ],

  lab:[
    { t:'Acid–Base Titration Indicator Selection (Phenolphthalein vs Methyl Orange)', d:'Phenolphthalein (pH range 8.3–10.0, colourless → pink) is required for Weak Acid vs Strong Base (equivalence pH ~ 8.7); Methyl Orange (pH range 3.1–4.4, red → yellow) is required for Strong Acid vs Weak Base (equivalence pH ~ 5.3).' },
    { t:'Fe³⁺ + SCN⁻ ⇌ [Fe(SCN)]²⁺ (Blood-Red) Equilibrium Demonstration', d:'Adding KSCN or FeCl₃ deepens the blood-red colour (forward shift); adding oxalic acid or HgCl₂ removes Fe³⁺/SCN⁻ as stable complexes ([Fe(C₂O₄)₃]³⁻ / [Hg(SCN)₄]²⁻) and discharges the red colour (backward shift).' },
    { t:'Salting Out of Soap & Purification of NaCl by Common Ion Effect', d:'Passing HCl(g) through saturated impure brine increases [Cl⁻], making [Na⁺][Cl⁻] > K_sp(NaCl) so pure NaCl precipitates out while soluble impurities (MgCl₂, CaCl₂) stay in solution.' },
    { t:'Human Blood pH Buffer System (H₂CO₃ / HCO₃⁻)', d:'Human blood is maintained strictly at pH ≈ 7.4 by the carbonic acid / bicarbonate buffer (CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻); a change of ±0.4 pH units can be fatal.' }
  ],

  pairs:[
    { g:'Salt Formula Type → K_sp and Molar Solubility (s) Relation', a:'AB type (AgCl, AgBr, BaSO₄, PbSO₄)', b:'K_sp = s²   ⇒   s = (K_sp)^(1/2)' },
    { g:'Salt Formula Type → K_sp and Molar Solubility (s) Relation', a:'AB₂ or A₂B type (PbCl₂, CaF₂, Mg(OH)₂, Ag₂CrO₄)', b:'K_sp = 4 s³   ⇒   s = (K_sp / 4)^(1/3)' },
    { g:'Salt Formula Type → K_sp and Molar Solubility (s) Relation', a:'AB₃ or A₃B type (Al(OH)₃, Fe(OH)₃, Cr(OH)₃, Ag₃PO₄)', b:'K_sp = 27 s⁴   ⇒   s = (K_sp / 27)^(1/4)' },
    { g:'Salt Formula Type → K_sp and Molar Solubility (s) Relation', a:'A₂B₃ or A₃B₂ type (Bi₂S₃, Sb₂S₃, Ca₃(PO₄)₂, Zr₃(PO₄)₄ is 6912s⁷)', b:'K_sp = 108 s⁵   ⇒   s = (K_sp / 108)^(1/5)' },
    { g:'Acid–Base Concept / Species → Classification & Conjugate / Role', a:'BF₃, AlCl₃, FeBr₃, Ag⁺, Cu²⁺, SO₃', b:'Lewis acids (electron-pair acceptors with vacant orbitals)' },
    { g:'Acid–Base Concept / Species → Classification & Conjugate / Role', a:'NH₃, H₂O, R–OH, CN⁻, OH⁻, Halide ions (X⁻)', b:'Lewis bases (electron-pair donors possessing lone pairs)' },
    { g:'Acid–Base Concept / Species → Classification & Conjugate / Role', a:'HCO₃⁻, HSO₄⁻, H₂PO₄⁻, HS⁻, H₂O, NH₃', b:'Amphiprotic Brønsted species (can both donate and accept H⁺)' },
    { g:'Acid–Base Concept / Species → Classification & Conjugate / Role', a:'Equimolar mixture of CH₃COOH and CH₃COONa (or NH₄OH + NH₄Cl)', b:'Buffer solution resisting pH change upon addition of small acid/base or dilution' }
  ],

  orders:[
    { q:'Arrange 0.1 M aqueous solutions of the following in increasing order of pH at 298 K', s:['HCl (pH = 1)','CH₃COOH (pH ≈ 2.9)','NH₄Cl (pH ≈ 5.1)','NaCl (pH = 7.0)','CH₃COONa (pH ≈ 8.9)'], sep:'<', why:'Strong acid < weak acid < acidic salt (SA+WB) < neutral salt (SA+SB) < basic salt (WA+SB).' },
    { q:'Arrange the following gases in decreasing order of solubility in water at 298 K and 1 bar given their Henry\'s constants K_H (kbar): CO₂ (1.67), O₂ (34.86), N₂ (76.48), He (144.97)', s:['CO₂ (K_H = 1.67 kbar)','O₂ (K_H = 34.86 kbar)','N₂ (K_H = 76.48 kbar)','He (K_H = 144.97 kbar)'], sep:'>', why:'From p = K_H · x, at constant partial pressure p, mole fraction solubility x = p / K_H is inversely proportional to K_H.' },
    { q:'Arrange the following Brønsted bases in decreasing order of basic strength (given acid strength: HClO₄ > HCl > CH₃COOH > HCN)', s:['CN⁻','CH₃COO⁻','Cl⁻','ClO₄⁻'], sep:'>', why:'The weaker the Brønsted acid, the stronger is its conjugate base (K_b = K_w / K_a).' }
  ],

  facts:{
    T:[
      'For the dissociation of solid ammonium carbamate NH₂COONH₄(s) ⇌ 2NH₃(g) + CO₂(g), if equilibrium total pressure is P, then K<sub>p</sub> = (2P/3)² × (P/3) = 4P³ / 27.',
      'The conjugate acid of NH₃ is NH₄⁺ and the conjugate base of NH₃ is NH₂⁻; similarly, the conjugate acid of H₂PO₄⁻ is H₃PO₄ and its conjugate base is HPO₄²⁻.',
      'In the melting of ice H₂O(s) ⇌ H₂O(l), since liquid water has smaller molar volume than ice, increasing external pressure shifts the equilibrium forward (favours melting at a lower temperature).',
      'When 50 mL of 0.1 M CH₃COOH is titrated with 25 mL of 0.1 M NaOH (half-equivalence point), [CH₃COO⁻] = [CH₃COOH] and pH = pK<sub>a</sub>.',
      'For any reaction with Δn<sub>g</sub> = 0 (such as H₂(g) + I₂(g) ⇌ 2HI(g) or N₂(g) + O₂(g) ⇌ 2NO(g)), K<sub>p</sub> is numerically equal to K<sub>c</sub> at all temperatures.',
      'Scuba divers use helium-diluted air (11.7% He, 56.2% N₂, 32.1% O₂) because He has a very high Henry\'s law constant K<sub>H</sub> and very low solubility in blood, preventing "bends".',
      'The degree of hydrolysis (h) of a salt of weak acid and weak base (like CH₃COONH₄) is independent of the dilution/concentration of the solution.',
      'For Zr₃(PO₄)₄(s) ⇌ 3Zr⁴⁺ + 4PO₄³⁻, the solubility product is K<sub>sp</sub> = (3s)³ (4s)⁴ = 27 × 256 s⁷ = 6912 s⁷.'
    ],
    F:[
      'For a gas dissolved in water, a higher value of Henry\'s law constant (K<sub>H</sub>) indicates higher solubility of the gas at a given pressure.',
      'In the reaction CaCO₃(s) ⇌ CaO(s) + CO₂(g), doubling the mass of solid CaCO₃ at constant temperature doubles the equilibrium pressure of CO₂.',
      'A solution containing 0.1 M HCl and 0.1 M NaCl acts as an effective acidic buffer solution.',
      'The conjugate base of H₂PO₄⁻ is H₃PO₄.',
      'For an exothermic reversible reaction (ΔH° < 0), increasing the temperature increases the value of the equilibrium constant K.',
      'At 298 K, if the pH of a solution decreases from 5 to 2, the hydrogen ion concentration [H⁺] increases by 3 times.',
      'The solubility of AgCl in 0.1 M NaCl solution is greater than its solubility in pure water.',
      'According to Lewis concept, NH₃ is a Lewis acid and BF₃ is a Lewis base.'
    ]
  },

  mcq:[
    { q:'Which of the following mixtures in aqueous solution constitutes a buffer solution?',
      o:['100 mL of 0.1 M CH₃COOH + 50 mL of 0.1 M NaOH','100 mL of 0.1 M CH₃COOH + 100 mL of 0.1 M NaOH','100 mL of 0.1 M HCl + 100 mL of 0.1 M NaCl','50 mL of 0.1 M CH₃COOH + 100 mL of 0.1 M NaOH'], a:0, tag:'Reagent Trap',
      sol:['10 mmol of CH₃COOH + 5 mmol of NaOH reacts to give 5 mmol of CH₃COONa and leaves 5 mmol of unreacted CH₃COOH.','A mixture of a weak acid (CH₃COOH) and its conjugate base salt (CH₃COONa) forms an acidic buffer.','Option B gives pure salt CH₃COONa (salt hydrolysis); Option C has a strong acid; Option D has excess strong base NaOH.'] },
    { q:'The solubility of BaSO₄ in pure water is 2.42 × 10⁻³ g L⁻¹ at 298 K. Given its molar mass is 233 g mol⁻¹, the value of its solubility product (K<sub>sp</sub>) is:',
      o:['1.08 × 10⁻¹⁰ mol² L⁻²','1.04 × 10⁻⁵ mol² L⁻²','5.86 × 10⁻⁶ mol² L⁻²','2.16 × 10⁻¹⁰ mol² L⁻²'], a:0, tag:'Unit Conversion Trap',
      sol:['First convert solubility from g L⁻¹ to mol L⁻¹: s = (2.42 × 10⁻³ g L⁻¹) / (233 g mol⁻¹) = 1.0386 × 10⁻⁵ mol L⁻¹.','For AB-type salt BaSO₄, K<sub>sp</sub> = s² = (1.0386 × 10⁻⁵)² = 1.08 × 10⁻¹⁰ mol² L⁻².'] },
    { q:'If the equilibrium constants for A ⇌ B and B ⇌ C are K₁ and K₂ respectively, then the equilibrium constant for the reverse overall reaction C ⇌ A is:',
      o:['1 / (K₁ K₂)','K₁ K₂','K₁ / K₂','K₂ / K₁'], a:0, tag:'Calculation Trap',
      sol:['Adding A ⇌ B (K₁) and B ⇌ C (K₂) gives A ⇌ C with K<sub>forward</sub> = K₁ × K₂.','Reversing the equation to C ⇌ A inverts the equilibrium constant: K = 1 / (K₁ K₂).'] },
    { q:'What is the pH of a 0.005 M aqueous solution of Ba(OH)₂ at 298 K (assuming complete dissociation)?',
      o:['12.0','2.0','11.7','2.3'], a:0, tag:'Calculation Trap',
      sol:['Ba(OH)₂ → Ba²⁺ + 2OH⁻; therefore [OH⁻] = 2 × 0.005 M = 0.01 M = 10⁻² M.','pOH = −log₁₀(10⁻²) = 2.0.','At 298 K, pH = 14 − pOH = 14 − 2.0 = 12.0 (pOH = 2.0 is a classic NTA trap option!).'] },
    { q:'For which of the following reactions is K<sub>p</sub> less than K<sub>c</sub> (at T > 12.2 K)?',
      o:['N₂(g) + 3H₂(g) ⇌ 2NH₃(g)','PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)','H₂(g) + I₂(g) ⇌ 2HI(g)','CaCO₃(s) ⇌ CaO(s) + CO₂(g)'], a:0, tag:'Calculation Trap',
      sol:['K<sub>p</sub> = K<sub>c</sub> (RT)<sup>Δn<sub>g</sub></sup>; for RT > 1, K<sub>p</sub> < K<sub>c</sub> when Δn<sub>g</sub> < 0.','For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), Δn<sub>g</sub> = 2 − 4 = −2 < 0, so K<sub>p</sub> = K<sub>c</sub> (RT)⁻² < K<sub>c</sub>.'] },
    { q:'Which of the following salts will give the HIGHEST pH in water (equimolar solutions)?',
      o:['Na₂CO₃','NH₄Cl','NaCl','CuSO₄'], a:0, tag:'Concept Trap',
      sol:['Na₂CO₃ is a salt of a weak acid (H₂CO₃) and strong base (NaOH); carbonate ion hydrolyses (CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻) to make the solution strongly alkaline (pH > 10).','NaCl is neutral (pH = 7); NH₄Cl and CuSO₄ are salts of strong acids and weak bases (pH < 7).'] }
  ],

  gens:[
    function(R){
      var pKa = R.pick([3.8, 4.2, 4.74, 5.0]);
      var ratio = R.pick([0.1, 0.5, 2, 10]);
      var logR = ratio === 10 ? 1 : (ratio === 0.1 ? -1 : (ratio === 2 ? 0.30 : -0.30));
      var pH = pKa + logR;
      var cSalt = R.pick([0.1, 0.2]);
      var cAcid = Number((cSalt / ratio).toPrecision(3));
      return {
        q:'An acidic buffer solution contains '+cSalt+' M of a salt (NaA) and '+cAcid+' M of a weak acid (HA) having pK<sub>a</sub> = '+pKa+'. What is the pH of the buffer? (Take log₁₀ 2 = 0.30)',
        ans:pH,
        d:[pKa - logR, 14 - pH, pKa * ratio],
        u:'',
        tag:'Calculation Trap',
        sol:['By Henderson equation: pH = pK<sub>a</sub> + log₁₀([Salt] / [Acid])','[Salt] / [Acid] = '+cSalt+' / '+cAcid+' = '+ratio+' ⇒ log₁₀('+ratio+') = '+logR,'pH = '+pKa+' + ('+logR+') = '+R.f(pH)]
      };
    },
    function(R){
      var exp = R.pick([9, 10, 11, 12]);
      var cNaCl = R.pick([0.01, 0.05, 0.1, 0.2]);
      var Ksp = Math.pow(10, -exp);
      var s = Ksp / cNaCl;
      return {
        q:'The solubility product K<sub>sp</sub> of AgCl at 298 K is 1.0 × 10⁻<sup>'+exp+'</sup>. What is its molar solubility in a '+cNaCl+' M NaCl aqueous solution?',
        ans:s,
        d:[Math.sqrt(Ksp), Ksp * cNaCl, Math.sqrt(Ksp / cNaCl)],
        u:'mol L⁻¹',
        tag:'Concept Trap',
        sol:['In presence of '+cNaCl+' M Cl⁻ (common ion), [Cl⁻] ≈ '+cNaCl+' M','K<sub>sp</sub> = [Ag⁺][Cl⁻] = s × '+cNaCl+' ⇒ s = 10⁻<sup>'+exp+'</sup> / '+cNaCl,'= '+R.f(s)+' mol L⁻¹']
      };
    },
    function(R){
      var s_coeff = R.pick([1, 2, 3, 4]);
      var s = s_coeff * 1e-4;
      var Ksp = 4 * Math.pow(s, 3);
      return {
        q:'If the molar solubility of a sparingly soluble salt MX₂ in pure water is '+s_coeff+' × 10⁻⁴ mol L⁻¹, its solubility product K<sub>sp</sub> is:',
        ans:Ksp,
        d:[s * s, Math.pow(s, 3), 27 * Math.pow(s, 4)],
        u:'mol³ L⁻³',
        tag:'Calculation Trap',
        sol:['For MX₂(s) ⇌ M²⁺ + 2X⁻, [M²⁺] = s and [X⁻] = 2s','K<sub>sp</sub> = (s)(2s)² = 4s³ = 4 × ('+s_coeff+' × 10⁻⁴)³','= '+R.f(Ksp)+' mol³ L⁻³']
      };
    },
    function(R){
      var pH1 = R.pick([2, 3]);
      var pH2 = R.pick([4, 5, 6]);
      var H1 = Math.pow(10, -pH1);
      var H2 = Math.pow(10, -pH2);
      var Hmix = (H1 + H2) / 2;
      var pHmix = -Math.log10(Hmix);
      return {
        q:'Equal volumes of two strong acid (HCl) solutions having pH = '+pH1+' and pH = '+pH2+' are mixed together at 298 K. The pH of the resulting solution is approximately (take log₁₀ 2 = 0.30):',
        ans:pHmix,
        d:[(pH1 + pH2) / 2, pH1 - 0.30, pH2 - 0.30],
        u:'',
        tag:'Calculation Trap',
        sol:['Do NOT average pH directly! Average [H⁺]: [H⁺]₁ = 10⁻<sup>'+pH1+'</sup> M, [H⁺]₂ = 10⁻<sup>'+pH2+'</sup> M','[H⁺]<sub>mix</sub> = (10⁻<sup>'+pH1+'</sup> + 10⁻<sup>'+pH2+'</sup>) / 2 ≈ ½ × 10⁻<sup>'+pH1+'</sup> M','pH = −log₁₀[H⁺]<sub>mix</sub> ≈ '+pH1+' + log₁₀ 2 = '+R.f(pHmix)]
      };
    },
    function(R){
      var expKa = R.pick([4, 5, 6]);
      var expC = R.pick([1, 2]);
      var Ka = Math.pow(10, -expKa);
      var C = Math.pow(10, -expC);
      var H = Math.sqrt(Ka * C);
      var pH = -Math.log10(H);
      return {
        q:'What is the pH of a '+C+' M aqueous solution of a weak monoprotic acid HA having ionization constant K<sub>a</sub> = 1.0 × 10⁻<sup>'+expKa+'</sup> at 298 K?',
        ans:pH,
        d:[expKa, expC, expKa + expC],
        u:'',
        tag:'Calculation Trap',
        sol:['[H⁺] = √(K<sub>a</sub> × C) = √(10⁻<sup>'+expKa+'</sup> × 10⁻<sup>'+expC+'</sup>) = 10⁻<sup>'+((expKa+expC)/2)+'</sup> M','pH = ½(pK<sub>a</sub> − log₁₀ C) = ½('+expKa+' + '+expC+')','= '+R.f(pH)]
      };
    },
    function(R){
      var Kc = R.pick([0.5, 2.0, 4.0, 10.0]);
      var dn = R.pick([1, 2]);
      var T = R.pick([300, 400, 500]);
      var RT = 0.08314 * T;
      var Kp = Kc * Math.pow(RT, dn);
      return {
        q:'For a gaseous reaction with Δn<sub>g</sub> = +'+dn+' at '+T+' K, the equilibrium constant K<sub>c</sub> = '+Kc+'. Taking R = 0.08314 L bar K⁻¹ mol⁻¹, the value of K<sub>p</sub> is:',
        ans:Kp,
        d:[Kc / Math.pow(RT, dn), Kc * RT * dn, Kc],
        u:'bar'+(dn === 2 ? '²' : ''),
        tag:'Calculation Trap',
        sol:['K<sub>p</sub> = K<sub>c</sub> (RT)<sup>Δn<sub>g</sub></sup>','RT = 0.08314 × '+T+' = '+R.f(RT)+' L bar mol⁻¹','K<sub>p</sub> = '+Kc+' × ('+R.f(RT)+')<sup>'+dn+'</sup> = '+R.f(Kp)]
      };
    }
  ]
});

NEET.reg({
  id:'C7',
  subj:'Physical Chemistry',
  type:'num',
  name:'Redox Reactions and Electrochemistry',
  syl:'Electronic concepts of oxidation and reduction, redox reactions, oxidation number, rules for assigning oxidation number, balancing of redox reactions, disproportionation; Electrolytic and metallic conduction, conductance in electrolytic solutions, molar conductivities and their variation with concentration (Debye-Hückel-Onsager), Kohlrausch\'s law and its applications; Electrochemical cells — Electrolytic and Galvanic cells, different types of electrodes, standard hydrogen electrode (SHE), electrode potentials including standard electrode potential, half-cell and cell reactions, electrochemical series, Nernst equation and its application to chemical cells, relation between Gibbs energy change and EMF of a cell (ΔG° = −nFE°); Faraday\'s laws of electrolysis, products of electrolysis; Dry cell, mercury cell, lead-acid accumulator, and H₂–O₂ fuel cell.',
  kw:['redox reaction','oxidation number','disproportionation','molar conductivity','kohlrausch law','galvanic cell','nernst equation','electrochemical series','faraday law','electrolysis','fuel cell','lead storage battery'],

  formulas:[
    { n:'Equivalent Weight in Redox & Disproportionation', f:'E = M / n<sub>f</sub>;  For disproportionation: 1/n<sub>f</sub> = 1/n₁ + 1/n₂  ⇒  n<sub>f</sub> = (n₁ n₂)/(n₁ + n₂)', u:'g eq⁻¹', s:'n<sub>f</sub> = total change in oxidation number per formula unit; for KMnO₄: n<sub>f</sub> = 5 (acidic, → Mn²⁺), 3 (neutral/faintly alkaline, → MnO₂), 1 (strongly alkaline, → MnO₄²⁻); for K₂Cr₂O₇ in acid: n<sub>f</sub> = 6 (2 Cr⁶⁺ → 2 Cr³⁺)', b:'Do not use n_f = 3 for KMnO₄ in strongly basic medium (OH⁻ conc > 1 M gives green manganate MnO₄²⁻ with n_f = 1)' },
    { n:'Conductance (G), Conductivity (κ) & Cell Constant (G*)', f:'G = 1/R = κ · (A/l);  κ = G × G*  (where G* = l / A)', u:'S cm⁻¹ (or S m⁻¹)', s:'R = resistance (Ω), G = conductance (S or Ω⁻¹), κ = specific conductance (conductivity), G* = l/A = cell constant (cm⁻¹)', b:'Cell constant G* depends ONLY on electrode geometry (distance l and area A), not on the electrolyte inside the cell' },
    { n:'Molar Conductivity (Λ_m) & Debye–Hückel–Onsager Equation', f:'Λ<sub>m</sub> = (κ × 1000) / M;  Λ<sub>m</sub> = Λ<sub>m</sub>° − A √C', u:'S cm² mol⁻¹', s:'κ MUST be in S cm⁻¹ and M in mol L⁻¹ when using the factor 1000; if κ is in S m⁻¹ and M in mol L⁻¹, use Λ<sub>m</sub> (S m² mol⁻¹) = κ / (1000 × M)', b:'Linear extrapolation of Λ<sub>m</sub> vs √C to C → 0 works ONLY for strong electrolytes; fails completely for weak electrolytes (steep curve near C → 0)' },
    { n:'Kohlrausch\'s Law of Independent Migration of Ions', f:'Λ<sub>m</sub>°(A<sub>x</sub>B<sub>y</sub>) = x λ°(A<sup>y+</sup>) + y λ°(B<sup>x−</sup>);  α = Λ<sub>m</sub> / Λ<sub>m</sub>°;  K<sub>a</sub> = Cα² / (1 − α)', u:'S cm² mol⁻¹', s:'At infinite dilution, each ion makes a definite contribution to Λ<sub>m</sub>° independent of the counter-ion; allows finding Λ<sub>m</sub>° of weak electrolytes (e.g., Λ<sub>m</sub>°(CH₃COOH) = Λ<sub>m</sub>°(CH₃COONa) + Λ<sub>m</sub>°(HCl) − Λ<sub>m</sub>°(NaCl))', b:'Do not confuse molar ionic conductivity λ° with equivalent ionic conductivity (Λ<sub>eq</sub>° = Λ<sub>m</sub>° / z<sub>total</sub>)' },
    { n:'Standard Cell EMF & Gibbs Energy / Equilibrium Constant', f:'E°<sub>cell</sub> = E°<sub>cathode (red)</sub> − E°<sub>anode (red)</sub>;  ΔG° = −n F E°<sub>cell</sub> = −2.303 RT log₁₀ K<sub>c</sub>', u:'V and J mol⁻¹', s:'F = 96487 C mol⁻¹ ≈ 96500 C mol⁻¹; n = moles of electrons transferred in balanced cell reaction; at 298 K, E°<sub>cell</sub> = (0.0591 / n) log₁₀ K<sub>c</sub>', b:'E° is an INTENSIVE property (never multiply E° when multiplying a half-reaction!), whereas ΔG° = −nFE° is EXTENSIVE! When combining two half-reactions into a third half-reaction, add their ΔG° values: n₃E₃° = n₁E₁° + n₂E₂°' },
    { n:'Nernst Equation at 298 K', f:'E<sub>cell</sub> = E°<sub>cell</sub> − (0.0591 / n) log₁₀ Q', u:'V', s:'Q = [Products]<sup>ν</sup> / [Reactants]<sup>ν</sup>; pure solids and pure liquids have activity = 1; at chemical equilibrium, E<sub>cell</sub> = 0 and Q = K<sub>c</sub>', b:'2.303 RT / F = 0.0591 V holds ONLY at T = 298 K; check the exact value of n (e.g., n = 2 for Zn + 2Ag⁺ → Zn²⁺ + 2Ag, and [Ag⁺] is SQUARED in Q)' },
    { n:'Faraday\'s First & Second Laws of Electrolysis', f:'w = Z · I · t = (E × I × t) / 96500 = (M × Q) / (n<sub>f</sub> × 96500);  w₁ / w₂ = E₁ / E₂', u:'g', s:'Q = I × t (in Coulombs, I in A, t in seconds!); 1 Faraday (1 F) = charge on 1 mole of electrons ≈ 96500 C mol⁻¹ deposits 1 gram-equivalent (M / n<sub>f</sub>)', b:'Remember to convert time t from minutes/hours into SECONDS before multiplying by current I in Amperes' },
    { n:'Thermodynamic Efficiency of a Fuel Cell', f:'η = (ΔG / ΔH) × 100 = (−n F E<sub>cell</sub> / ΔH) × 100', u:'%', s:'Fuel cells convert Gibbs energy of combustion directly into electrical work without Carnot heat-engine limitation (η ≈ 70% vs ~40% for thermal plants)', b:'Fails if E° is not in Volts or ΔH is left in kJ while nFE is in Joules' }
  ],

  traps:[
    { t:'On dilution (decreasing C), specific conductivity (κ) ALWAYS DECREASES for both strong and weak electrolytes, whereas molar conductivity (Λ_m) ALWAYS INCREASES!', c:'κ is conductance of 1 cm³ of solution, and dilution reduces the number of ions per cm³; Λ_m = κ × V_m increases because total volume V_m containing 1 mole of electrolyte increases much faster than κ drops.', tag:'Order Inversion' },
    { t:'In CrO₅ (chromium pentoxide, butterfly structure), the oxidation state of Cr is +6, NOT +10! Similarly, in H₂SO₅ (Caro\'s acid) and H₂S₂O₈ (Marshall\'s acid), the oxidation state of S is +6, NOT +8 or +7.', c:'CrO₅ has two peroxide (–O–O–) rings (4 peroxide O atoms at −1 each, 1 oxo =O at −2); H₂SO₅ and H₂S₂O₈ each contain peroxide linkages because maximum oxidation state cannot exceed group valence (+6).', tag:'NCERT Exception' },
    { t:'Fluorine (F₂) NEVER exhibits a positive oxidation state in any compound and never undergoes disproportionation; in OF₂, oxygen has a +2 oxidation state (and +1 in O₂F₂).', c:'Fluorine is the most electronegative element in the periodic table (χ = 4.0) and lacks d-orbitals, so its oxidation state in all compounds is strictly −1.', tag:'NCERT Exception' },
    { t:'When combining two half-cell reactions to find the standard potential E₃° of a third half-cell (e.g., Fe³⁺ → Fe²⁺ and Fe²⁺ → Fe to get Fe³⁺ → Fe), you CANNOT add E₁° + E₂° directly; you must use E₃° = (n₁E₁° + n₂E₂°) / n₃!', c:'Electrode potential E° is an intensive property (non-additive), whereas Gibbs energy ΔG° = −nFE° is extensive (additive: ΔG₃° = ΔG₁° + ΔG₂°).', tag:'Calculation Trap' },
    { t:'During electrolysis of aqueous NaCl using inert Pt electrodes, H₂ gas (not Na metal!) is evolved at the cathode, and Cl₂ gas (not O₂!) is evolved at the anode.', c:'At cathode, H₂O (E° = −0.83 V at pH 7) has a much higher reduction potential than Na⁺ (E° = −2.71 V); at anode, although thermodynamically H₂O oxidation (E° = +1.23 V) is easier than Cl⁻ (+1.36 V), O₂ evolution suffers from high kinetic OVERPOTENTIAL on Pt.', tag:'NCERT Exception' },
    { t:'When electrolysis of aqueous NaCl is carried out using a MERCURY (Hg) cathode (Castner–Kellner cell), Na⁺ is discharged in preference to H₂O to form sodium amalgam (Na–Hg).', c:'Hydrogen has a very high overvoltage on a mercury surface, and formation of metallic sodium amalgam lowers the reduction potential required for Na⁺ discharge.', tag:'Reagent Trap' },
    { t:'The cell potential of a Mercury Cell (Zn–Hg / HgO, KOH) remains completely CONSTANT (1.35 V) throughout its entire operational life.', c:'The overall cell reaction Zn(Hg) + HgO(s) → ZnO(s) + Hg(l) involves only pure solids and liquids with NO dissolved ions whose concentration could change during discharge.', tag:'Concept Trap' },
    { t:'In S₄O₆²⁻ (tetrathionate ion), the average oxidation state of sulphur is +2.5, but the actual oxidation states of the four S atoms are +5, 0, 0, +5.', c:'The two central S atoms are bonded only to other S atoms (–S–S– bridge, oxidation state 0), while the two terminal –SO₃⁻ sulphur atoms are in +5 state.', tag:'NCERT Exception' }
  ],

  flows:[
    { t:'Products of Electrolysis Decision Map (Inert Pt Electrodes)',
      root:'Identify electrolyte state and competing species at Cathode (−, reduction) and Anode (+, oxidation)',
      br:[
        { l:'Molten NaCl(l)', n:['Only Na⁺ and Cl⁻ present','Cathode: Na(l) deposited; Anode: Cl₂(g) evolved'] },
        { l:'Aqueous NaCl (Brine)', n:['Cathode: H₂O reduced → H₂(g) + OH⁻ (solution becomes basic, NaOH forms)','Anode: Cl⁻ oxidized → Cl₂(g) (due to O₂ overpotential)'] },
        { l:'Aqueous CuSO₄ (Pt vs Cu electrodes)', n:['With Pt electrodes → Cathode: Cu(s) deposited; Anode: H₂O oxidized → O₂(g) + 4H⁺ (SO₄²⁻ not oxidized)','With active Cu electrodes → Cathode: Cu deposited; Anode: Cu dissolves (Cu → Cu²⁺ + 2e⁻)'] },
        { l:'Dilute vs Conc. H₂SO₄(aq)', n:['Dilute H₂SO₄ → Cathode: H₂(g); Anode: O₂(g) from H₂O (2H₂O → O₂ + 4H⁺ + 4e⁻, E° = 1.23 V)','High current density conc. H₂SO₄ → Anode: S₂O₈²⁻ (peroxodisulphate, E° = 1.96 V) formed'] }
      ] },
    { t:'Galvanic Cell (Daniell Cell: Zn | Zn²⁺ || Cu²⁺ | Cu, E° = 1.10 V) External Voltage Behaviour',
      chain:['E_ext < 1.10 V: Acts as Galvanic cell — e⁻ flow Zn (anode, −) → Cu (cathode, +); current flows Cu → Zn','E_ext = 1.10 V: Cell stops completely — no electron or current flow, no chemical reaction','E_ext > 1.10 V: Reverses into Electrolytic cell — e⁻ flow Cu → Zn; Zn is deposited at Zn electrode and Cu dissolves!'] },
    { t:'Disproportionation Reaction Criteria & Classic Examples',
      chain:['Element MUST be in an INTERMEDIATE oxidation state (capable of both increasing and decreasing its OS)','Cl₂ / Br₂ / I₂ in cold dil. NaOH → X⁻ (−1) + XO⁻ (+1); in hot conc. NaOH → X⁻ (−1) + XO₃⁻ (+5)','White phosphorus P₄ (0) + OH⁻ + H₂O → PH₃ (−3) + H₂PO₂⁻ (+1)','Cu⁺ (+1) in water → Cu²⁺ (+2) + Cu(s) (0);  MnO₄²⁻ (+6) in acidic medium → MnO₄⁻ (+7) + MnO₂ (+4)'] }
  ],

  lab:[
    { t:'Salt Bridge (KCl or NH₄NO₃ in Agar-Agar Gel) Function & Precaution', d:'Maintains electrical neutrality in both half-cells and minimises liquid-junction potential; KCl is chosen because transport numbers (ionic mobilities) of K⁺ and Cl⁻ are nearly equal, but KCl CANNOT be used when Ag⁺, Pb²⁺, or Hg₂²⁺ is present (use KNO₃ or NH₄NO₃ instead to avoid AgCl/PbCl₂ precipitation).' },
    { t:'Wheatstone Bridge Conductivity Measurement (AC Source + Earphone/Null Detector)', d:'Uses high-frequency alternating current (AC, ~1000 Hz) instead of DC to prevent electrolysis and polarization of electrodes, and platinized Pt electrodes (coated with Pt black) to increase surface area and reduce capacitance.' },
    { t:'Rusting of Iron (Electrochemical Corrosion Theory) & Sacrificial Protection', d:'Anode spot: Fe → Fe²⁺ + 2e⁻ (E° = −0.44 V); Cathode spot: O₂ + 4H⁺ + 4e⁻ → 2H₂O (E° = +1.23 V, E°_cell = 1.67 V); prevented by galvanization (coating with Zn, E° = −0.76 V, which oxidizes sacrificially even if scratched) or alkaline/chromate anti-rust solutions.' },
    { t:'Lead Storage Battery Discharge vs Recharge Chemistry', d:'Anode: spongy Pb; Cathode: PbO₂ grid; Electrolyte: 38% H₂SO₄ (density 1.30 g mL⁻¹); during DISCHARGE both electrodes form PbSO₄(s) and H₂SO₄ is consumed (density drops below 1.20 g mL⁻¹); on RECHARGING, reactions reverse and H₂SO₄ density is restored.' }
  ],

  pairs:[
    { g:'Compound / Ion → Oxidation State of Underlined Central Atom & Structural Feature', a:'CrO₅ (Chromium pentoxide)', b:'+6 (butterfly structure with two peroxide –O–O– rings)' },
    { g:'Compound / Ion → Oxidation State of Underlined Central Atom & Structural Feature', a:'H₂SO₅ (Caro\'s acid) or H₂S₂O₈ (Marshall\'s acid)', b:'+6 (contains one peroxide –O–O– linkage)' },
    { g:'Compound / Ion → Oxidation State of Underlined Central Atom & Structural Feature', a:'OF₂ (Oxygen difluoride)', b:'O is in +2 state (F is more electronegative than O)' },
    { g:'Compound / Ion → Oxidation State of Underlined Central Atom & Structural Feature', a:'Fe₃O₄ (Magnetite) or Pb₃O₄ (Red lead)', b:'Average +8/3 (mixed oxide: FeO·Fe₂O₃ with one +2 and two +3 atoms)' },
    { g:'Compound / Ion → Oxidation State of Underlined Central Atom & Structural Feature', a:'CaOCl₂ (Bleaching powder)', b:'Cl atoms are in −1 (Cl⁻) and +1 (OCl⁻) states (average = 0)' },
    { g:'Commercial Cell → Anode, Cathode & Key Characteristic', a:'Dry Cell (Leclanché cell, 1.5 V)', b:'Anode: Zn container; Cathode: Graphite rod surrounded by MnO₂ + C; NH₄Cl + ZnCl₂ paste' },
    { g:'Commercial Cell → Anode, Cathode & Key Characteristic', a:'Mercury Cell (Ruben–Mallory button cell, 1.35 V)', b:'Anode: Zn–Hg amalgam; Cathode: HgO + C paste; constant voltage over lifetime' },
    { g:'Commercial Cell → Anode, Cathode & Key Characteristic', a:'Lead Storage Battery (Secondary cell, 2.0 V per cell)', b:'Anode: Pb; Cathode: PbO₂; 38% H₂SO₄; PbSO₄ forms at both electrodes on discharge' },
    { g:'Commercial Cell → Anode, Cathode & Key Characteristic', a:'H₂–O₂ Fuel Cell (Apollo spacecraft)', b:'Porous C electrodes with Pt/Pd catalyst in hot aq. KOH; pollution-free water product' },
    { g:'Commercial Cell → Anode, Cathode & Key Characteristic', a:'Nickel–Cadmium (Ni–Cd) Rechargeable Cell (1.4 V)', b:'Anode: Cd; Cathode: NiO(OH) / NiO₂; longer life than lead storage battery' }
  ],

  orders:[
    { q:'Arrange the following aqueous alkali metal cations in INCREASING order of their ionic mobility and limiting molar conductivity (λ°) in water', s:['Li⁺(aq) (most heavily hydrated, largest hydrated radius)','Na⁺(aq)','K⁺(aq)','Rb⁺(aq)','Cs⁺(aq) (least hydrated, fastest moving)'], sep:'<', why:'Smallest gaseous ion Li⁺ has the highest charge density, so it binds the largest hydration shell in water and moves the slowest!' },
    { q:'Given standard reduction potentials E°: K⁺/K (−2.93 V), Mg²⁺/Mg (−2.36 V), Zn²⁺/Zn (−0.76 V), Cu²⁺/Cu (+0.34 V), Ag⁺/Ag (+0.80 V), arrange the METALS in decreasing order of reducing power', s:['K','Mg','Zn','Cu','Ag'], sep:'>', why:'More negative standard reduction potential E° means stronger tendency to lose electrons (stronger reducing agent).' },
    { q:'Arrange the halogens in decreasing order of their oxidizing power in aqueous solution', s:['F₂ (E° = +2.87 V)','Cl₂ (E° = +1.36 V)','Br₂ (E° = +1.09 V)','I₂ (E° = +0.54 V)'], sep:'>', why:'Higher positive standard reduction potential E°(X₂/2X⁻) corresponds to stronger oxidizing power.' }
  ],

  facts:{
    T:[
      'By IUPAC convention, the Standard Hydrogen Electrode (SHE: Pt(s) | H₂(g, 1 bar) | H⁺(aq, a = 1)) is assigned a potential of exactly 0.00 V at all temperatures.',
      'In a Galvanic cell, the anode is the negative (−) terminal where oxidation occurs, whereas in an Electrolytic cell, the anode is the positive (+) terminal where oxidation occurs.',
      'Permanganate ion (MnO₄⁻, Mn = +7) and perchlorate ion (ClO₄⁻, Cl = +7) cannot undergo disproportionation because the central atom is already in its highest possible oxidation state.',
      'In aqueous solution, H⁺ (H₃O⁺) has an abnormally high limiting ionic molar conductivity (349.6 S cm² mol⁻¹) due to the Grotthuss proton-hopping mechanism across hydrogen-bonded water molecules.',
      'Metallic conductance decreases with increase in temperature due to increased thermal vibration of lattice kernels, whereas electrolytic conductance increases with temperature due to higher ionic mobility and lower viscosity.',
      'To reduce 1 mole of MnO₄⁻ to Mn²⁺ in acidic medium, 5 moles of electrons (5 Faradays = 5 × 96500 C) are required.',
      'In a concentration cell made of identical electrodes (e.g., Cu | Cu²⁺(C₁) || Cu²⁺(C₂) | Cu), E°<sub>cell</sub> = 0 V, and the cell is spontaneous when C₂ (cathode) > C₁ (anode).',
      'During the electrolysis of molten Al₂O₃ (Hall–Héroult process), reducing 1 mole of Al³⁺ to 1 mole (27 g) of Al requires 3 Faradays of electricity.'
    ],
    F:[
      'When a half-reaction is multiplied by 2, its standard electrode potential E° is also doubled.',
      'In an aqueous solution at 298 K, Li⁺(aq) has a higher ionic mobility and higher molar conductivity than Cs⁺(aq) because Li⁺ has a smaller atomic radius.',
      'Specific conductivity (κ) of an electrolytic solution increases upon dilution.',
      'For a spontaneous galvanic cell reaction, ΔG° is positive and E°<sub>cell</sub> is negative.',
      'A plot of Λ<sub>m</sub> versus √C for a weak electrolyte like CH₃COOH is a straight line that can be extrapolated to √C = 0 to obtain Λ<sub>m</sub>°.',
      'In the reaction 2Cu⁺(aq) → Cu²⁺(aq) + Cu(s), copper undergoes comproportionation.',
      'During the charging of a lead storage battery, H₂SO₄ is consumed and PbSO₄ is precipitated at both electrodes.',
      '1 Faraday of electricity deposits 1 mole of any metal at the cathode during electrolysis.'
    ]
  },

  mcq:[
    { q:'Which of the following species DOES NOT show disproportionation reaction?',
      o:['ClO₄⁻','ClO⁻','ClO₂⁻','ClO₃⁻'], a:0, tag:'Boundary Failure',
      sol:['Oxidation states of chlorine in ClO⁻, ClO₂⁻, ClO₃⁻, and ClO₄⁻ are +1, +3, +5, and +7 respectively.','In ClO₄⁻ (perchlorate), chlorine is in its maximum possible oxidation state (+7) and cannot be oxidized further.','Therefore, ClO₄⁻ cannot disproportionate, whereas ClO⁻, ClO₂⁻, and ClO₃⁻ have intermediate oxidation states and can disproportionate.'] },
    { q:'Limiting molar conductivities (Λ<sub>m</sub>°) for NaCl, HCl and CH₃COONa are 126.4, 425.9 and 91.0 S cm² mol⁻¹ respectively. The limiting molar conductivity Λ<sub>m</sub>° for CH₃COOH is:',
      o:['390.5 S cm² mol⁻¹','516.9 S cm² mol⁻¹','299.5 S cm² mol⁻¹','643.3 S cm² mol⁻¹'], a:0, tag:'Calculation Trap',
      sol:['By Kohlrausch\'s law: Λ<sub>m</sub>°(CH₃COOH) = Λ<sub>m</sub>°(CH₃COONa) + Λ<sub>m</sub>°(HCl) − Λ<sub>m</sub>°(NaCl).','Λ<sub>m</sub>°(CH₃COOH) = 91.0 + 425.9 − 126.4 = 390.5 S cm² mol⁻¹.'] },
    { q:'Given E°(Fe²⁺/Fe) = −0.44 V and E°(Fe³⁺/Fe²⁺) = +0.77 V, what is the standard electrode potential E°(Fe³⁺/Fe)?',
      o:['−0.037 V','+0.330 V','+0.165 V','−0.110 V'], a:0, tag:'Calculation Trap',
      sol:['Do NOT add E° directly; use ΔG° = −nFE° ⇒ n₃ E₃° = n₁ E₁° + n₂ E₂°.','(1) Fe²⁺ + 2e⁻ → Fe (n₁ = 2, E₁° = −0.44 V); (2) Fe³⁺ + e⁻ → Fe²⁺ (n₂ = 1, E₂° = +0.77 V).','For Fe³⁺ + 3e⁻ → Fe (n₃ = 3): E₃° = [2(−0.44) + 1(+0.77)] / 3 = (−0.88 + 0.77) / 3 = −0.11 / 3 = −0.037 V.'] },
    { q:'For the cell Zn(s) | Zn²⁺(0.1 M) || Ag⁺(0.01 M) | Ag(s) at 298 K, if E°<sub>cell</sub> = 1.56 V, the EMF (E<sub>cell</sub>) is (take 2.303 RT/F = 0.059 V):',
      o:['1.47 V','1.53 V','1.65 V','1.50 V'], a:0, tag:'Calculation Trap',
      sol:['Balanced reaction: Zn(s) + 2Ag⁺(aq) → Zn²⁺(aq) + 2Ag(s), so n = 2.','Reaction quotient Q = [Zn²⁺] / [Ag⁺]² = 0.1 / (0.01)² = 0.1 / 10⁻⁴ = 10³ ⇒ log₁₀ Q = 3.','E<sub>cell</sub> = E°<sub>cell</sub> − (0.059 / 2) log₁₀ Q = 1.56 − 0.0295 × 3 = 1.56 − 0.0885 ≈ 1.47 V (forgetting to square [Ag⁺] gives 1.53 V!).'] },
    { q:'How many Faradays of electricity are required to liberate 2 moles of O₂ gas by the electrolysis of acidulated water (2H₂O → O₂ + 4H⁺ + 4e⁻)?',
      o:['8 F','4 F','2 F','1 F'], a:0, tag:'Calculation Trap',
      sol:['From the anodic half-reaction 2H₂O(l) → O₂(g) + 4H⁺(aq) + 4e⁻, liberating 1 mole of O₂ requires 4 moles of electrons (4 F).','Therefore, liberating 2 moles of O₂ requires 2 × 4 = 8 F of electricity.'] },
    { q:'In balancing the half-reaction Cr₂O₇²⁻ + 14H⁺ + x e⁻ → 2Cr³⁺ + 7H₂O in acidic medium, the value of x is:',
      o:['6','3','12','7'], a:0, tag:'Calculation Trap',
      sol:['In Cr₂O₇²⁻, each Cr atom is in +6 oxidation state; in 2Cr³⁺, each Cr is in +3 state.','Total decrease in oxidation number for 2 Cr atoms = 2 × (6 − 3) = 6; charge check: −2 + 14 − 6 = +6 = 2(+3) → x = 6.'] }
  ],

  gens:[
    function(R){
      var k = R.pick([0.002, 0.005, 0.012, 0.024]);
      var M = R.pick([0.01, 0.02, 0.05, 0.1, 0.2]);
      var Lm = (k * 1000) / M;
      return {
        q:'The specific conductivity (κ) of a '+M+' M electrolytic solution at 298 K is '+k+' S cm⁻¹. Its molar conductivity (Λ<sub>m</sub>) is:',
        ans:Lm,
        d:[k / M, k * 1000 * M, Lm / 10],
        u:'S cm² mol⁻¹',
        tag:'Unit Conversion Trap',
        sol:['Λ<sub>m</sub> = (κ × 1000) / M','Λ<sub>m</sub> = ('+k+' × 1000) / '+M,'= '+R.f(Lm)+' S cm² mol⁻¹']
      };
    },
    function(R){
      var L1 = R.int(80, 110);
      var L2 = R.int(400, 430);
      var L3 = R.int(120, 140);
      var Lw = L1 + L2 - L3;
      return {
        q:'At 298 K, the limiting molar conductivities Λ<sub>m</sub>° of NaA, HCl, and NaCl are '+L1+', '+L2+', and '+L3+' S cm² mol⁻¹, respectively. By Kohlrausch\'s law, Λ<sub>m</sub>° for the weak acid HA is:',
        ans:Lw,
        d:[L1 + L2 + L3, L2 + L3 - L1, L1 + L3 - L2],
        u:'S cm² mol⁻¹',
        tag:'Calculation Trap',
        sol:['Λ<sub>m</sub>°(HA) = Λ<sub>m</sub>°(NaA) + Λ<sub>m</sub>°(HCl) − Λ<sub>m</sub>°(NaCl)','Λ<sub>m</sub>°(HA) = '+L1+' + '+L2+' − '+L3,'= '+Lw+' S cm² mol⁻¹']
      };
    },
    function(R){
      var I = R.pick([1.93, 3.86, 9.65]);
      var t_min = R.pick([10, 20, 50, 100]);
      var t_sec = t_min * 60;
      var Q = I * t_sec;
      var nF = Q / 96500;
      var metal = R.pick([
        {name:'Cu (from CuSO₄, M = 63.5 g mol⁻¹, n = 2)', M:63.5, n:2},
        {name:'Ag (from AgNO₃, M = 108 g mol⁻¹, n = 1)', M:108, n:1},
        {name:'Al (from AlCl₃, M = 27 g mol⁻¹, n = 3)', M:27, n:3}
      ]);
      var w = (metal.M * Q) / (metal.n * 96500);
      return {
        q:'A current of '+I+' A is passed through a molten/aqueous salt solution for '+t_min+' minutes. What mass of '+metal.name+' is deposited at the cathode? (1 F = 96500 C mol⁻¹)',
        ans:w,
        d:[w / 60, w * metal.n, w / metal.n],
        u:'g',
        tag:'Unit Conversion Trap',
        sol:['Time t = '+t_min+' × 60 = '+t_sec+' s → Charge Q = I × t = '+I+' × '+t_sec+' = '+R.f(Q)+' C ('+R.f(nF)+' F)','w = (M × Q) / (n × 96500) = ('+metal.M+' × '+R.f(Q)+') / ('+metal.n+' × 96500)','= '+R.f(w)+' g']
      };
    },
    function(R){
      var E0 = R.pick([1.10, 1.50, 2.00]);
      var expAnode = R.pick([1, 2, 3]);
      var expCathode = R.pick([3, 4]);
      if (expAnode === expCathode) expCathode += 1;
      var logQ = expCathode - expAnode;
      var Ecell = E0 - (0.0591 / 2) * logQ;
      return {
        q:'For the cell M(s) | M²⁺(10⁻<sup>'+expAnode+'</sup> M) || N²⁺(10⁻<sup>'+expCathode+'</sup> M) | N(s) at 298 K, given E°<sub>cell</sub> = '+E0.toFixed(2)+' V, the cell EMF (E<sub>cell</sub>) is:',
        ans:Ecell,
        d:[E0 + (0.0591 / 2) * logQ, E0 - 0.0591 * logQ, E0],
        u:'V',
        tag:'Calculation Trap',
        sol:['Reaction: M + N²⁺ → M²⁺ + N (n = 2); Q = [M²⁺] / [N²⁺] = 10⁻<sup>'+expAnode+'</sup> / 10⁻<sup>'+expCathode+'</sup> = 10<sup>'+logQ+'</sup>','log₁₀ Q = '+logQ,'E<sub>cell</sub> = '+E0.toFixed(2)+' − (0.0591 / 2) × '+logQ+' = '+R.f(Ecell)+' V']
      };
    },
    function(R){
      var n = R.pick([2, 3]);
      var E0 = R.pick([0.50, 1.00, 1.10, 1.50]);
      var dG0_kJ = (-n * 96.5 * E0);
      return {
        q:'For a galvanic cell reaction involving the transfer of n = '+n+' electrons, the standard EMF is E°<sub>cell</sub> = +'+E0.toFixed(2)+' V. Taking F = 96500 C mol⁻¹, the standard Gibbs energy change ΔG° (in kJ mol⁻¹) is:',
        ans:dG0_kJ,
        d:[-dG0_kJ, dG0_kJ / n, dG0_kJ * 1000],
        u:'kJ mol⁻¹',
        tag:'Sign Convention',
        sol:['ΔG° = −n F E°<sub>cell</sub>','ΔG° = −('+n+' × 96500 × '+E0.toFixed(2)+') J mol⁻¹','= '+R.f(dG0_kJ)+' kJ mol⁻¹']
      };
    },
    function(R){
      var Lm = R.pick([20, 39, 40, 50]);
      var Lm0 = R.pick([200, 390, 400, 500]);
      var alpha = Lm / Lm0;
      var pct = alpha * 100;
      return {
        q:'At a given concentration, the molar conductivity (Λ<sub>m</sub>) of a weak electrolyte is '+Lm+' S cm² mol⁻¹ and its limiting molar conductivity (Λ<sub>m</sub>°) is '+Lm0+' S cm² mol⁻¹. Its percentage degree of dissociation (α × 100) is:',
        ans:pct,
        d:[alpha, (Lm0 / Lm), 100 - pct],
        u:'%',
        tag:'Calculation Trap',
        sol:['Degree of dissociation α = Λ<sub>m</sub> / Λ<sub>m</sub>° = '+Lm+' / '+Lm0+' = '+R.f(alpha),'Percentage dissociation = '+R.f(alpha)+' × 100 = '+R.f(pct)+'%']
      };
    }
  ]
});

NEET.reg({
  id:'C8',
  subj:'Physical Chemistry',
  type:'num',
  name:'Chemical Kinetics',
  syl:'Rate of a chemical reaction (average and instantaneous), factors affecting rate of reactions: concentration, temperature, pressure, and catalyst; Elementary and complex reactions, order and molecularity of a reaction, rate law, rate constant and its units; Differential and integrated rate equations for zero and first order reactions, their characteristics and half-lives (t_1/2), pseudo-first-order reactions; Effect of temperature on the rate of reactions — Arrhenius theory, activation energy (E_a) and its calculation, collision theory of bimolecular gaseous reactions (collision frequency Z_AB and steric/probability factor P, no mathematical derivation).',
  kw:['chemical kinetics','rate of reaction','order of reaction','molecularity','rate constant','zero order','first order','half life','pseudo first order','arrhenius equation','activation energy','collision theory','steric factor'],

  formulas:[
    { n:'Stoichiometric Rate Expression (aA + bB → cC + dD)', f:'Rate = −(1/a) d[A]/dt = −(1/b) d[B]/dt = +(1/c) d[C]/dt = +(1/d) d[D]/dt', u:'mol L⁻¹ s⁻¹ (or atm s⁻¹)', s:'Individual rate of disappearance of A is −d[A]/dt (WITHOUT dividing by a); overall reaction rate divides by stoichiometric coefficient', b:'Do not divide by the stoichiometric coefficient when asked for the "rate of disappearance/appearance of a specific species"!' },
    { n:'Rate Law, Overall Order & Units of Rate Constant (k)', f:'Rate = k [A]<sup>x</sup> [B]<sup>y</sup>;  n = x + y;  Unit of k = (mol L⁻¹)<sup>(1−n)</sup> s⁻¹', u:'mol<sup>(1−n)</sup> L<sup>(n−1)</sup> s⁻¹', s:'Zero order (n = 0): mol L⁻¹ s⁻¹; First order (n = 1): s⁻¹; Second order (n = 2): L mol⁻¹ s⁻¹; for gaseous pressures: (atm)<sup>(1−n)</sup> s⁻¹', b:'Exponents x and y are determined purely by EXPERIMENT and equal stoichiometric coefficients a and b ONLY for a single-step ELEMENTARY reaction' },
    { n:'Zero-Order Integrated Rate Law & Half-Life', f:'[A]<sub>t</sub> = [A]₀ − k t;  t<sub>½</sub> = [A]₀ / (2k);  t<sub>100%</sub> = [A]₀ / k', u:'s (for t)', s:'Plot of [A] vs t is a straight line with slope = −k and intercept = [A]₀; Plot of Rate vs [A] is horizontal (slope = 0)', b:'Zero-order reaction goes to 100% completion in finite time t = [A]₀ / k = 2 t<sub>½</sub>; always requires a surface catalyst or photochemical condition' },
    { n:'First-Order Integrated Rate Law & Half-Life', f:'k = (2.303 / t) log₁₀([A]₀ / [A]<sub>t</sub>);  [A]<sub>t</sub> = [A]₀ e<sup>−kt</sup> = [A]₀ (½)<sup>(t / t<sub>½</sub>)</sup>;  t<sub>½</sub> = 0.693 / k', u:'s⁻¹ (for k)', s:'t<sub>½</sub> = ln 2 / k = 0.693 / k is completely INDEPENDENT of initial concentration [A]₀; Plot of log₁₀[A] vs t has slope = −k / 2.303', b:'Remember the key time ratios for 1st order: t<sub>75%</sub> = 2 × t<sub>50%</sub>; t<sub>87.5%</sub> = 3 × t<sub>50%</sub>; t<sub>90%</sub> = (10/3) t<sub>50%</sub>; t<sub>99%</sub> = 2 × t<sub>90%</sub>; t<sub>99.9%</sub> ≈ 10 × t<sub>50%</sub>' },
    { n:'First-Order Gas-Phase Pressure Rate Law (A(g) → B(g) + C(g))', f:'k = (2.303 / t) log₁₀[ P₀ / (2P₀ − P<sub>t</sub>) ]', u:'s⁻¹', s:'P₀ = initial pressure of pure A; P<sub>t</sub> = total pressure at time t = (P₀ − p) + p + p = P₀ + p ⇒ p = P<sub>t</sub> − P₀ and P<sub>A</sub> = P₀ − p = 2P₀ − P<sub>t</sub>', b:'Formula (2P₀ − P<sub>t</sub>) holds ONLY for 1 mol gas → 2 mol gas (Δn = +1); for A(g) → nB(g), use P<sub>A</sub> = P₀ − (P<sub>t</sub> − P₀)/(n − 1)' },
    { n:'General n-th Order Half-Life Scaling', f:'t<sub>½</sub> ∝ [A]₀<sup>(1 − n)</sup>   ⇒   (t<sub>½</sub>)₁ / (t<sub>½</sub>)₂ = ([A]₀,₁ / [A]₀,₂)<sup>(1 − n)</sup>', u:'s', s:'n = 0: t<sub>½</sub> ∝ [A]₀¹;  n = 1: t<sub>½</sub> ∝ [A]₀⁰ (constant);  n = 2: t<sub>½</sub> ∝ 1/[A]₀;  n = 3: t<sub>½</sub> ∝ 1/[A]₀²', b:'Valid only when a single reactant is present or all reactants are taken in stoichiometric ratio' },
    { n:'Arrhenius Equation & Two-Temperature Form', f:'k = A · e<sup>−E<sub>a</sub> / RT</sup>;  ln k = ln A − E<sub>a</sub>/(RT);  log₁₀(k₂ / k₁) = (E<sub>a</sub> / 2.303 R) · [ (T₂ − T₁) / (T₁ T₂) ]', u:'same as k', s:'A = pre-exponential (Arrhenius/frequency) factor; E<sub>a</sub> = activation energy (J mol⁻¹); e<sup>−E_a/RT</sup> = fraction of molecules having energy ≥ E<sub>a</sub>', b:'Plot of ln k vs 1/T has slope = −E<sub>a</sub> / R, whereas plot of log₁₀ k vs 1/T has slope = −E<sub>a</sub> / (2.303 R)!' },
    { n:'Enthalpy of Reaction & Collision Theory Rate', f:'ΔH = E<sub>a (forward)</sub> − E<sub>a (backward)</sub>;  Rate = P · Z<sub>AB</sub> · e<sup>−E<sub>a</sub> / RT</sup>', u:'kJ mol⁻¹', s:'Z<sub>AB</sub> = collision frequency; P = steric (probability/orientation) factor; for endothermic reactions (ΔH > 0), E<sub>a(f)</sub> ≥ ΔH', b:'Activation energy E<sub>a</sub> of an elementary reaction can never be negative, and for an endothermic reaction E<sub>a(f)</sub> can never be less than ΔH' }
  ],

  traps:[
    { t:'Order of a reaction is an EXPERIMENTAL quantity that can be zero, positive, negative, or fractional, whereas Molecularity is a THEORETICAL concept defined ONLY for an elementary step and must be a positive integer (1, 2, or at most 3).', c:'Simultaneous collision of more than 3 molecules at the exact same point and instant has a vanishingly small probability, so molecularity > 3 is never observed, and molecularity has no meaning for a complex multi-step reaction as a whole.', tag:'Concept Trap' },
    { t:'For a complex (multi-step) reaction, the overall rate law is governed by the SLOWEST step (Rate-Determining Step, RDS), but any REACTION INTERMEDIATE appearing in the RDS rate law must be eliminated using pre-equilibrium constants!', c:'Intermediates do not appear in the overall balanced equation; substituting [Intermediate] from a fast reversible prior step can produce fractional or negative orders.', tag:'Concept Trap' },
    { t:'Acid-catalysed hydrolysis of ethyl acetate (CH₃COOC₂H₅ + H₂O / H⁺) and inversion of cane sugar (sucrose) are bimolecular (molecularity = 2) yet follow FIRST-ORDER kinetics (pseudo-first-order)!', c:'Water is present as the solvent in huge excess (~55.5 M), so its concentration remains practically constant during the reaction and merges into k\' = k[H₂O].', tag:'NCERT Exception' },
    { t:'For a first-order reaction, the time required for 99.9% completion is 10 times the half-life (t_99.9% ≈ 10 t_1/2), and the time for 99% completion is exactly TWICE the time for 90% completion (t_99% = 2 × t_90%)!', c:'t_99.9% / t_50% = log(100 / 0.1) / log(2) = log(10³) / 0.3010 = 3 / 0.3010 ≈ 10; and t_99% / t_90% = log(100/1) / log(100/10) = 2 / 1 = 2.', tag:'Calculation Trap' },
    { t:'A 10 K rise in temperature near room temperature approximately DOUBLES (or triples) the rate constant k, NOT because collision frequency Z doubles (Z increases by only ~2–3%), but because the fraction of molecules with E ≥ E_a (e^{−E_a/RT}) roughly doubles!', c:'In the Maxwell–Boltzmann energy distribution, a small rise in T shifts the curve slightly to higher energy, which exponentially increases the tail area beyond the threshold energy E_a.', tag:'Graph Trap' },
    { t:'When a catalyst lowers the activation energy from E_a to E_a\' at temperature T, the ratio of catalysed to uncatalysed rate constants is k_cat / k_uncat = exp[(E_a − E_a\') / RT].', c:'Taking the ratio k_cat / k = [A exp(−E_a\'/RT)] / [A exp(−E_a/RT)] = exp(ΔE_a / RT).', tag:'Calculation Trap' },
    { t:'As Temperature T → ∞ (or when E_a → 0, such as free-radical recombination), e^{−E_a/RT} → e⁰ = 1, so the rate constant k approaches the pre-exponential Arrhenius factor A (k → A).', c:'When thermal energy RT is infinitely larger than the barrier E_a, every properly oriented collision is energetically successful.', tag:'Zero-Case' },
    { t:'All radioactive nuclear decays strictly follow FIRST-ORDER kinetics (t_1/2 = 0.693 / λ), and unlike chemical reactions, their decay constant λ is completely independent of temperature, pressure, and chemical bonding.', c:'Radioactive decay is a nuclear process involving transitions of nucleons (MeV scale), unaffected by thermal agitation (meV scale) or valence electron environment.', tag:'NCERT Exception' }
  ],

  flows:[
    { t:'Order Identification from Experimental Clues',
      root:'How to deduce the order n of a reaction immediately?',
      br:[
        { l:'From unit of k: (mol L⁻¹)^(1−n) s⁻¹', n:['mol L⁻¹ s⁻¹ → Zero order (n = 0)','s⁻¹ (or min⁻¹) → First order (n = 1)','L mol⁻¹ s⁻¹ → Second order (n = 2)'] },
        { l:'From Half-Life t_½ vs [A]₀', n:['t_½ ∝ [A]₀ (doubles when [A]₀ doubles) → Zero order','t_½ is CONSTANT (independent of [A]₀) → First order','t_½ ∝ 1/[A]₀ (halves when [A]₀ doubles) → Second order'] },
        { l:'From Linear Graph Plots', n:['[A] vs t is linear (slope = −k) → Zero order','ln[A] or log[A] vs t is linear → First order','1/[A] vs t is linear (slope = +k) → Second order'] }
      ] },
    { t:'Standard Examples of Zero, First & Pseudo-First Order Reactions (NCERT)',
      chain:['Zero Order (n = 0): Photochemical H₂(g) + Cl₂(g) [hν, over water] → 2HCl; Thermal decomposition of NH₃ on hot Pt surface at high P; Decomposition of HI on gold (Au) surface; Enzyme-catalysed reaction at high substrate saturation','First Order (n = 1): Hydrogenation of ethene (C₂H₄ + H₂ → C₂H₆); Thermal decomposition of N₂O₅, N₂O, H₂O₂, SO₂Cl₂, and azoisopropane; All natural and artificial radioactive decays','Pseudo-First Order (molecularity = 2, order = 1): Acid-catalysed hydrolysis of ester (CH₃COOC₂H₅ + H₂O/H⁺); Acid-catalysed inversion of cane sugar (sucrose → glucose + fructose)'] },
    { t:'Initial-Rate Method Algorithm to Find Rate Law Exponents (x, y)',
      chain:['Select two experiments where [B] is held constant and [A] changes by factor m','If Rate changes by factor mˣ, then order with respect to A is x = log(Rate₂/Rate₁) / log([A]₂/[A]₁)','Repeat for two experiments where [A] is held constant and [B] changes → find y','Substitute x, y and data from any one experiment into Rate = k[A]ˣ[B]ʸ to calculate k'] }
  ],

  lab:[
    { t:'Clock Reaction: Iodide–Persulphate (S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂) Kinetics', d:'A fixed small amount of Na₂S₂O₃ + starch is added; liberated I₂ is instantly consumed by S₂O₃²⁻ until S₂O₃²⁻ runs out, when sudden appearance of blue-black starch–I₂ colour marks time Δt for a fixed Δ[S₂O₈²⁻].' },
    { t:'Kinetics of Ester Hydrolysis by Titration with Standard NaOH', d:'Aliquots of reaction mixture (CH₃COOC₂H₅ + H₂O + HCl catalyst) are pipetted into ice-cold water (to quench the reaction) at intervals and titrated against NaOH: k = (2.303/t) log[(V_∞ − V₀) / (V_∞ − V_t)].' },
    { t:'Decomposition of H₂O₂ Monitored by KMnO₄ Titration', d:'Catalysed by I⁻ or Fe³⁺ (2H₂O₂ → 2H₂O + O₂); aliquots are titrated at times t against standard KMnO₄ in dilute H₂SO₄: since V_KMnO₄ ∝ [H₂O₂]_t, k = (2.303/t) log(V₀ / V_t).' },
    { t:'Inversion of Cane Sugar Monitored by Polarimeter (Optical Rotation)', d:'Dextrorotatory sucrose (+66.5°) hydrolyses to an equimolar laevorotatory mixture (−19.9°) of D-glucose (+52.5°) and D-fructose (−92.4°): k = (2.303/t) log[(r₀ − r_∞) / (r_t − r_∞)].' }
  ],

  pairs:[
    { g:'Reaction Order (n) → SI / Molar Unit of Rate Constant (k)', a:'Zero-order reaction (n = 0)', b:'mol L⁻¹ s⁻¹' },
    { g:'Reaction Order (n) → SI / Molar Unit of Rate Constant (k)', a:'First-order reaction (n = 1)', b:'s⁻¹' },
    { g:'Reaction Order (n) → SI / Molar Unit of Rate Constant (k)', a:'Second-order reaction (n = 2)', b:'L mol⁻¹ s⁻¹ (or mol⁻¹ L s⁻¹)' },
    { g:'Reaction Order (n) → SI / Molar Unit of Rate Constant (k)', a:'Half-order reaction (n = 1/2)', b:'mol^(1/2) L^(−1/2) s⁻¹' },
    { g:'Reaction Order (n) → SI / Molar Unit of Rate Constant (k)', a:'Third-order reaction (n = 3)', b:'L² mol⁻² s⁻¹ (or mol⁻² L² s⁻¹)' },
    { g:'Linear Kinetic Graph (y vs x) → Slope & Intercept Expression', a:'[A] vs t for a Zero-order reaction', b:'Slope = −k;  y-intercept = [A]₀' },
    { g:'Linear Kinetic Graph (y vs x) → Slope & Intercept Expression', a:'ln [A] vs t for a First-order reaction', b:'Slope = −k;  y-intercept = ln [A]₀' },
    { g:'Linear Kinetic Graph (y vs x) → Slope & Intercept Expression', a:'log₁₀ [A] vs t for a First-order reaction', b:'Slope = −k / 2.303;  y-intercept = log₁₀ [A]₀' },
    { g:'Linear Kinetic Graph (y vs x) → Slope & Intercept Expression', a:'log₁₀([A]₀ / [A]) vs t for a First-order reaction', b:'Slope = +k / 2.303;  passes through origin (intercept = 0)' },
    { g:'Linear Kinetic Graph (y vs x) → Slope & Intercept Expression', a:'log₁₀ k vs (1 / T) (Arrhenius plot)', b:'Slope = −E_a / (2.303 R);  y-intercept = log₁₀ A' }
  ],

  orders:[
    { q:'For a reaction with initial concentration [A]₀ = 2.0 M and identical numerical value of rate constant k, arrange the following reaction orders in decreasing order of their half-life (t_½)', s:['Zero order (t_½ = [A]₀ / 2k = 1.0/k)','First order (t_½ = 0.693 / k)','Second order (t_½ = 1 / (k[A]₀) = 0.5/k)'], sep:'>', why:'For [A]₀ = 2.0 M: t_½(n=0) = 2/(2k) = 1.0/k > t_½(n=1) = 0.693/k > t_½(n=2) = 1/(2k) = 0.5/k.' },
    { q:'For a first-order reaction with half-life t_½, arrange the following fractional completions in increasing order of time required', s:['t_50% (1.0 t_½)','t_75% (2.0 t_½)','t_87.5% (3.0 t_½)','t_99% (6.64 t_½)','t_99.9% (10.0 t_½)'], sep:'<', why:'Each successive half-life reduces the remaining reactant by half: 50% (1 t_½) < 75% (2 t_½) < 87.5% (3 t_½) < 99% (6.64 t_½) < 99.9% (10 t_½).' }
  ],

  facts:{
    T:[
      'For the reaction N₂(g) + 3H₂(g) → 2NH₃(g), the rate of disappearance of H₂ (−d[H₂]/dt) is 3/2 times the rate of appearance of NH₃ (+d[NH₃]/dt).',
      'Decomposition of gaseous NH₃ on a hot platinum surface at high pressure is a zero-order reaction because the catalytic Pt surface is completely saturated with NH₃ molecules.',
      'For any first-order reaction, the time required for 99% completion is twice the time required for 90% completion (t<sub>99%</sub> = 2 × t<sub>90%</sub>).',
      'A catalyst provides an alternative reaction pathway with a lower activation energy (E<sub>a</sub>), increasing both the forward and reverse rate constants by the same factor.',
      'In the rate law for CHCl₃ + Cl₂ → CCl₄ + HCl, the experimental rate is Rate = k[CHCl₃][Cl₂]<sup>½</sup>, giving an overall fractional order of 1.5.',
      'According to collision theory, an effective collision requires BOTH sufficient kinetic energy (≥ threshold energy E<sub>th</sub>) AND proper spatial orientation (steric factor P) of the colliding molecules.',
      'For an exothermic elementary reaction (ΔH < 0), the activation energy of the backward reaction E<sub>a(b)</sub> is always greater than the activation energy of the forward reaction E<sub>a(f)</sub>.',
      'A first-order reaction theoretically never reaches 100% completion because [A]<sub>t</sub> = [A]₀ e<sup>−kt</sup> approaches zero only as t → ∞.'
    ],
    F:[
      'The molecularity of a reaction can be zero or fractional if the reaction proceeds through a free-radical chain mechanism.',
      'For a zero-order reaction, the half-life (t<sub>½</sub>) is independent of the initial concentration of the reactant.',
      'A catalyst shifts the position of chemical equilibrium toward the products by making ΔG° more negative.',
      'For a first-order reaction, if the initial concentration of reactant is doubled, the half-life is also doubled.',
      'In the Arrhenius equation k = A e<sup>−E_a/RT</sup>, the slope of a plot of ln k versus 1/T is equal to −E<sub>a</sub> / (2.303 R).',
      'Acid-catalysed hydrolysis of methyl acetate is a zero-order reaction.',
      'For a first-order reaction, if 50% of the reaction is completed in 10 minutes, then 100% of the reaction is completed in 20 minutes.',
      'In the reaction 2NO₂ → 2NO + O₂, the rate of disappearance of NO₂ is equal to the rate of appearance of O₂.'
    ]
  },

  mcq:[
    { q:'For the reaction 2N₂O₅(g) → 4NO₂(g) + O₂(g), if the rate of appearance of NO₂ is +d[NO₂]/dt = 2.4 × 10⁻³ mol L⁻¹ s⁻¹, then the rate of disappearance of N₂O₅ (−d[N₂O₅]/dt) is:',
      o:['1.2 × 10⁻³ mol L⁻¹ s⁻¹','4.8 × 10⁻³ mol L⁻¹ s⁻¹','6.0 × 10⁻⁴ mol L⁻¹ s⁻¹','2.4 × 10⁻³ mol L⁻¹ s⁻¹'], a:0, tag:'Calculation Trap',
      sol:['By stoichiometry: −(1/2) d[N₂O₅]/dt = +(1/4) d[NO₂]/dt.','Therefore, −d[N₂O₅]/dt = (2/4) × (+d[NO₂]/dt) = ½ × (2.4 × 10⁻³) = 1.2 × 10⁻³ mol L⁻¹ s⁻¹.','(Note: 6.0 × 10⁻⁴ mol L⁻¹ s⁻¹ is the overall reaction rate = +d[O₂]/dt).'] },
    { q:'The unit of the rate constant (k) for a reaction is the same as the unit of the rate of reaction (mol L⁻¹ s⁻¹). The order of the reaction is:',
      o:['Zero order (0)','First order (1)','Second order (2)','Half order (0.5)'], a:0, tag:'Unit Conversion Trap',
      sol:['From Rate = k [A]<sup>n</sup>, when n = 0, Rate = k [A]⁰ = k.','Hence for a zero-order reaction, the rate constant k has the exact same units as the rate of reaction (mol L⁻¹ s⁻¹).'] },
    { q:'For a first-order reaction, the ratio of the time required for 99% completion (t<sub>99%</sub>) to the time required for 90% completion (t<sub>90%</sub>) is:',
      o:['2 : 1','10 : 9','1.1 : 1','9 : 1'], a:0, tag:'Calculation Trap',
      sol:['For 99% completion, [A]<sub>t</sub> = 1% of [A]₀ ⇒ log₁₀([A]₀/[A]<sub>t</sub>) = log₁₀(100/1) = 2.','For 90% completion, [A]<sub>t</sub> = 10% of [A]₀ ⇒ log₁₀([A]₀/[A]<sub>t</sub>) = log₁₀(100/10) = 1.','Therefore, t<sub>99%</sub> / t<sub>90%</sub> = 2 / 1 = 2.'] },
    { q:'When the initial concentration of a reactant is doubled, the half-life (t<sub>½</sub>) of the reaction becomes half of its original value. The order of the reaction is:',
      o:['Second order (n = 2)','Zero order (n = 0)','First order (n = 1)','Third order (n = 3)'], a:0, tag:'Concept Trap',
      sol:['For an n-th order reaction, t<sub>½</sub> ∝ 1 / [A]₀<sup>(n−1)</sup>.','Since doubling [A]₀ halves t<sub>½</sub>, we have t<sub>½</sub> ∝ 1 / [A]₀¹, which means n − 1 = 1 ⇒ n = 2 (second order).'] },
    { q:'In the Arrhenius equation k = A e<sup>−E_a/RT</sup>, the slope of the straight line obtained by plotting log₁₀ k against (1 / T) is:',
      o:['−E<sub>a</sub> / (2.303 R)','−E<sub>a</sub> / R','+E<sub>a</sub> / (2.303 R)','−2.303 E<sub>a</sub> / R'], a:0, tag:'Graph Trap',
      sol:['Taking natural log: ln k = ln A − E<sub>a</sub> / (RT).','Converting to base-10 log (ln x = 2.303 log₁₀ x): log₁₀ k = log₁₀ A − [E<sub>a</sub> / (2.303 R)] (1/T).','Therefore, the slope of log₁₀ k vs (1/T) is −E<sub>a</sub> / (2.303 R).'] },
    { q:'For an endothermic reaction X → Y with enthalpy change ΔH = +40 kJ mol⁻¹ and activation energy of the backward reaction E<sub>a(b)</sub> = 60 kJ mol⁻¹, the activation energy of the forward reaction E<sub>a(f)</sub> is:',
      o:['100 kJ mol⁻¹','20 kJ mol⁻¹','50 kJ mol⁻¹','40 kJ mol⁻¹'], a:0, tag:'Sign Convention',
      sol:['For any elementary reaction, ΔH = E<sub>a(forward)</sub> − E<sub>a(backward)</sub>.','Therefore, E<sub>a(f)</sub> = ΔH + E<sub>a(b)</sub> = +40 + 60 = 100 kJ mol⁻¹.'] }
  ],

  gens:[
    function(R){
      var thalf = R.pick([10, 15, 20, 30, 50]);
      var nHalves = R.pick([2, 3, 4]);
      var pct = (1 - Math.pow(0.5, nHalves)) * 100;
      var t = nHalves * thalf;
      return {
        q:'A first-order reaction has a half-life (t<sub>½</sub>) of '+thalf+' minutes. How much time (in minutes) will it take for '+pct+'% of the reactant to decompose?',
        ans:t,
        d:[thalf * (pct / 50), thalf * Math.pow(2, nHalves), (nHalves - 1) * thalf],
        u:'min',
        tag:'Calculation Trap',
        sol:['Fraction remaining = 100% − '+pct+'% = '+(100 - pct)+'% = (1/2)<sup>'+nHalves+'</sup>','For a 1st-order reaction, '+pct+'% completion requires exactly '+nHalves+' half-lives','t = '+nHalves+' × '+thalf+' = '+t+' min']
      };
    },
    function(R){
      var A0 = R.pick([1.0, 2.0, 4.0]);
      var k = R.pick([0.02, 0.04, 0.05, 0.10]);
      var t = R.pick([5, 10, 15]);
      var At = A0 - k * t;
      var thalf = A0 / (2 * k);
      return {
        q:'For a zero-order reaction with initial concentration [A]₀ = '+A0.toFixed(1)+' mol L⁻¹ and rate constant k = '+k+' mol L⁻¹ s⁻¹, what is the half-life (t<sub>½</sub>) of the reaction?',
        ans:thalf,
        d:[0.693 / k, A0 / k, 1 / (k * A0)],
        u:'s',
        tag:'Boundary Failure',
        sol:['For a zero-order reaction, t<sub>½</sub> = [A]₀ / (2k) (NOT 0.693/k!)','t<sub>½</sub> = '+A0.toFixed(1)+' / (2 × '+k+')','= '+R.f(thalf)+' s']
      };
    },
    function(R){
      var x = R.pick([1, 2]);
      var y = R.pick([1, 2]);
      var fA = R.pick([2, 3]);
      var fB = R.pick([2, 3]);
      var mult = Math.pow(fA, x) * Math.pow(fB, y);
      return {
        q:'A reaction has the rate law Rate = k [A]<sup>'+x+'</sup> [B]<sup>'+y+'</sup>. If the concentration of A is increased '+fA+' times and the concentration of B is increased '+fB+' times, by what factor does the rate of reaction increase?',
        ans:mult,
        d:[fA * x + fB * y, fA * fB, Math.pow(fA, y) * Math.pow(fB, x)],
        u:'times',
        tag:'Calculation Trap',
        sol:['Rate\' / Rate = ([A]\'/[A])<sup>'+x+'</sup> × ([B]\'/[B])<sup>'+y+'</sup>','Factor = ('+fA+')<sup>'+x+'</sup> × ('+fB+')<sup>'+y+'</sup>','= '+mult+' times']
      };
    },
    function(R){
      var a = R.pick([2, 3]);
      var b = R.pick([1, 4, 5]);
      if (a === b) b += 1;
      var rA = R.pick([0.06, 0.12, 0.18, 0.24]);
      var rB = (b / a) * rA;
      return {
        q:'In the reaction '+a+'A → '+b+'B, if the rate of disappearance of A (−d[A]/dt) is '+rA+' mol L⁻¹ s⁻¹, what is the rate of formation of B (+d[B]/dt)?',
        ans:rB,
        d:[rA / a, (a / b) * rA, rA * b],
        u:'mol L⁻¹ s⁻¹',
        tag:'Calculation Trap',
        sol:['Stoichiometric relation: −(1/'+a+') d[A]/dt = +(1/'+b+') d[B]/dt','Therefore, +d[B]/dt = ('+b+'/'+a+') × (−d[A]/dt) = ('+b+'/'+a+') × '+rA,'= '+R.f(rB)+' mol L⁻¹ s⁻¹']
      };
    },
    function(R){
      var t = R.pick([10, 20, 23.03, 46.06, 50]);
      var ratio = R.pick([2, 10]);
      var logR = ratio === 10 ? 1.0 : 0.301;
      var k = (2.303 / t) * logR;
      var pctLeft = 100 / ratio;
      var pctDone = 100 - pctLeft;
      return {
        q:'A first-order reaction is '+pctDone+'% complete in '+t+' s (so [A]₀ / [A]<sub>t</sub> = '+ratio+'). What is the rate constant k of the reaction? (Take log₁₀ 2 = 0.301)',
        ans:k,
        d:[0.693 / t, logR / t, (2.303 * t) / logR],
        u:'s⁻¹',
        tag:'Calculation Trap',
        sol:['k = (2.303 / t) log₁₀([A]₀ / [A]<sub>t</sub>)','With [A]₀ / [A]<sub>t</sub> = '+ratio+', log₁₀('+ratio+') = '+logR,'k = (2.303 / '+t+') × '+logR+' = '+R.f(k)+' s⁻¹']
      };
    },
    function(R){
      var Ea_f = R.int(70, 120);
      var Ea_b = R.int(30, 110);
      if (Ea_f === Ea_b) Ea_b += 15;
      var dH = Ea_f - Ea_b;
      var catDrop = R.pick([10, 15, 20, 25]);
      var new_Eab = Ea_b - catDrop;
      return {
        q:'For a reversible elementary reaction, the activation energies of the forward and backward uncatalysed reactions are '+Ea_f+' kJ mol⁻¹ and '+Ea_b+' kJ mol⁻¹ respectively. If a catalyst lowers the forward activation energy by '+catDrop+' kJ mol⁻¹, what is the activation energy of the catalysed BACKWARD reaction?',
        ans:new_Eab,
        d:[Ea_b + catDrop, Ea_f - catDrop, Math.abs(dH)],
        u:'kJ mol⁻¹',
        tag:'Concept Trap',
        sol:['A catalyst lowers the transition state barrier equally from both sides (ΔH remains unchanged)','Therefore E<sub>a(b), cat</sub> = E<sub>a(b)</sub> − '+catDrop+' = '+Ea_b+' − '+catDrop,'= '+new_Eab+' kJ mol⁻¹']
      };
    }
  ]
});
