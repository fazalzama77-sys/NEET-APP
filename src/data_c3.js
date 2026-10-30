/* ==========================================================================
   DATA C3: Organic Chemistry II & Practical Chemistry (Units C15 – C20)
   ========================================================================== */

NEET.reg({
  id:'C15',
  subj:'Organic Chemistry',
  type:'conc',
  name:'Hydrocarbons',
  syl:'Alkanes (conformations: Sawhorse and Newman projections of ethane, halogenation, Wurtz, Kolbe electrolysis, decarboxylation); Alkenes (geometrical isomerism, electrophilic addition, Markovnikov and peroxide effect, ozonolysis, oxidation, polymerisation); Alkynes (acidic character, addition of water/halogens/HX, polymerisation); Aromatic hydrocarbons (benzene structure, Hückel aromaticity, electrophilic substitution: halogenation, nitration, sulphonation, Friedel–Crafts alkylation/acylation, directive influence of functional groups, carcinogenicity).',
  kw:['hydrocarbon','alkane','alkene','alkyne','newman projection','sawhorse','wurtz reaction','kolbe electrolysis','markovnikov','kharasch peroxide effect','ozonolysis','baeyer reagent','kucherov','lindlar catalyst','birch reduction','huckel rule','friedel crafts'],
  formulas:[
    { n:'Degree of Unsaturation (DU / IHD)', f:'DU = C + 1 − (H + X − N)/2', u:'rings + π bonds', s:'C = carbons, H = hydrogens, X = halogens (F,Cl,Br,I), N = nitrogens; oxygen/divalent S ignored', b:'BOUNDARY: Fails when nitrogen or sulfur is in higher oxidation state (e.g., −NO₂, −SO₃H) unless valence is adjusted.' },
    { n:'Hückel Rule of Aromaticity', f:'π electrons = 4n + 2  (n = 0, 1, 2, 3…)', u:'dimensionless', s:'n is a non-negative integer (not number of rings); requires cyclic, planar, fully conjugated sp² ring', b:'BOUNDARY: Fails for non-planar rings (e.g., [10]annulene, cyclooctatetraene turns tub-shaped) or polycyclic non-peripherally conjugated systems.' },
    { n:'Markovnikov Addition Rule', f:'HX + R−CH=CH₂ → R−CH(X)−CH₃', u:'regioselectivity', s:'Electrophile (H⁺) adds to sp² carbon with more H atoms; proceeds via most stable carbocation intermediate', b:'BOUNDARY: Breaks down when carbocation rearrangement (1,2-hydride or 1,2-methyl shift) occurs, or with HBr + ROOR (anti-Markovnikov).' },
    { n:'Kharasch Peroxide Effect (Anti-Markovnikov)', f:'R−CH=CH₂ + HBr (ROOR) → R−CH₂−CH₂Br', u:'free-radical chain', s:'Proceeds via Br• radical adding to less hindered carbon to give more stable 2° carbon radical', b:'BOUNDARY: Strictly valid ONLY for HBr; fails for HCl (C−Cl bond too strong, step 2 endothermic) and HI (C−I formation endothermic, I• dimerises).' },
    { n:'Alkane Free-Radical Halogenation Selectivity', f:'3° : 2° : 1° H = 5.0 : 3.8 : 1.0 (Cl₂ at 298 K)', u:'relative rate ratio', s:'% isomer = (number of equivalent H × relative reactivity) / Σ(nᵢ × rᵢ) × 100', b:'BOUNDARY: Valid only for monochlorination near room temperature; at ~600 °C ratio approaches 1 : 1 : 1, while Br₂ at 127 °C is 1600 : 82 : 1.' },
    { n:'Wurtz Coupling Stoichiometry', f:'2 R−X + 2 Na (dry ether) → R−R + 2 NaX', u:'symmetrical alkane', s:'Proceeds via nucleophilic substitution / organosodium intermediate; doubles carbon chain of 1°/2° alkyl halides', b:'BOUNDARY: Fails to prepare methane (needs ≥2 C), fails for 3° alkyl halides (gives alkene via E2), and mixed R−X + R\'−X gives an inseparable 3-alkane mixture.' },
    { n:'Kolbe Electrolytic Decarboxylation', f:'2 R−COO⁻Na⁺ + 2 H₂O → R−R (anode) + 2 CO₂ (anode) + H₂ (cathode) + 2 NaOH', u:'free-radical dimerisation', s:'Anodic oxidation of carboxylate yields RCOO• → R• + CO₂; solution pH increases as NaOH forms at cathode', b:'BOUNDARY: Cannot prepare methane (sodium formate gives H₂ at anode); unsymmetrical carboxylates give mixed alkanes.' },
    { n:'Complete Combustion of Hydrocarbons', f:'CₓHᵧ + (x + y/4) O₂ → x CO₂ + (y/2) H₂O', u:'mol O₂ per mol CₓHᵧ', s:'For alkanes (CₙH₂ₙ₊₂), O₂ coefficient is (3n + 1)/2; for alkenes (CₙH₂ₙ) it is 3n/2; for alkynes (CₙH₂ₙ₋₂) it is (3n − 1)/2', b:'BOUNDARY: Invalid under limited O₂ supply where CO or carbon black (soot) forms via incomplete combustion.' }
  ],
  traps:[
    { t:'Peroxide (Kharasch) anti-Markovnikov effect is observed ONLY with HBr and never with HCl or HI.', c:'Both chain-propagation steps are exothermic only for HBr; for HCl, H−Cl homolysis by C• is endothermic, and for HI, addition of I• to C=C is endothermic so I• radicals recombine to I₂.', tag:'NCERT Exception' },
    { t:'Direct iodination of alkanes (R−H + I₂ ⇌ R−I + HI) is reversible and cannot proceed without an oxidising agent like HIO₃ or HNO₃.', c:'HI formed is a strong reducing agent that reduces R−I back to R−H; HIO₃ or HNO₃ oxidises HI to I₂ and shifts equilibrium forward.', tag:'Reagent Trap' },
    { t:'Friedel–Crafts alkylation and acylation fail completely on nitrobenzene, aniline, and benzoic acid.', c:'−NO₂ and −COOH strongly deactivate the ring, while −NH₂ (a Lewis base) complexes with Lewis acid AlCl₃ to form a strongly deactivating −NH₂⁺−AlCl₃⁻ salt.', tag:'Reagent Trap' },
    { t:'trans-But-2-ene has zero dipole moment (μ = 0) and a lower boiling point than cis-but-2-ene, yet trans-but-2-ene has a higher melting point.', c:'Opposing C(sp³)−C(sp²) bond dipoles cancel in symmetric trans isomer (lowering bp), whereas its higher symmetry allows tighter packing in the crystal lattice (raising mp).', tag:'Stereo Trap' },
    { t:'Halogens (−F, −Cl, −Br, −I) are ring-deactivating groups toward electrophilic aromatic substitution, yet they are ortho/para-directing.', c:'Strong −I inductive effect withdraws electron density overall (deactivating), but +M resonance donation from lone pairs selectively stabilises ortho and para arenium carbocations (σ-complexes).', tag:'NCERT Exception' },
    { t:'Reaction of 3-methylbut-1-ene with HCl yields 2-chloro-2-methylbutane as the major product instead of 2-chloro-3-methylbutane.', c:'Initial protonation forms a 2° carbocation which undergoes a rapid 1,2-hydride shift to form a more stable 3° carbocation before Cl⁻ attacks.', tag:'Concept Trap' },
    { t:'Terminal alkynes react with ammoniacal AgNO₃ (Tollens\' reagent) and ammoniacal Cu₂Cl₂ to give white/red precipitates, whereas alkenes and internal alkynes do not.', c:'sp-hybridised carbon of terminal alkynes (50% s-character, pKₐ ≈ 25) makes the ≡C−H proton weakly acidic, allowing formation of silver/copper acetylides.', tag:'Practical Trap' },
    { t:'Friedel–Crafts alkylation of benzene with 1-chloropropane and anhydrous AlCl₃ gives isopropylbenzene (cumene) as the major product rather than n-propylbenzene.', c:'The incipient primary propyl carbocation–AlCl₄⁻ complex rearranges via a 1,2-hydride shift to the more stable secondary isopropyl carbocation before attacking the benzene ring.', tag:'Reagent Trap' },
    { t:'Cyclooctatetraene (C₈H₈, 8 π electrons) is neither aromatic nor anti-aromatic; it behaves as a non-aromatic polyene that decolourises Br₂/CCl₄.', c:'To avoid the severe electronic instability of a planar 4n (8 π) anti-aromatic system, the 8-membered ring adopts a non-planar tub conformation, breaking cyclic p-orbital overlap.', tag:'Stereo Trap' }
  ],
  flows:[
    { t:'Alkyne Stereoselective Reduction & Hydration Map', root:'Internal / Terminal Alkyne (R−C≡C−R\')',
      br:[
        { l:'H₂ / Pd-CaCO₃ (Lindlar\'s catalyst, quinoline)', n:['Syn addition of H₂','cis-Alkene (Z-alkene)','Stops at alkene stage'] },
        { l:'Na / liquid NH₃ at 196 K (Birch reduction)', n:['Radical anion trans-protonation','trans-Alkene (E-alkene)','Not applicable to terminal alkynes'] },
        { l:'Hg²⁺ / dil. H₂SO₄ at 333 K (Kucherov)', n:['Markovnikov hydration → Enol','Tautomerisation','Ketone (Ethyne alone gives Ethanal)'] },
        { l:'Red hot Fe tube at 873 K (for HC≡CH)', n:['Cyclic trimerisation (3 C₂H₂)','Benzene (C₆H₆)','Aliphatic to aromatic bridge'] }
      ]
    },
    { t:'Alkene Ozonolysis & Oxidation Diagnostic Map', root:'Alkene (R₂C=CHR\')',
      br:[
        { l:'(i) O₃ / CH₂Cl₂  (ii) Zn + H₂O (Reductive)', n:['Molozonide → Ozonide','C=C cleaved to C=O without further oxidation','Ketone (R₂C=O) + Aldehyde (R\'CHO)'] },
        { l:'(i) O₃  (ii) H₂O₂ or hot KMnO₄/H⁺ (Oxidative)', n:['C=C completely cleaved','Aldehydic fragment oxidised further','Ketone (R₂C=O) + Carboxylic acid (R\'COOH) (or CO₂ if =CH₂)'] },
        { l:'Cold dilute alkaline KMnO₄ (Baeyer\'s reagent)', n:['Syn-hydroxylation across C=C','Vicinal cis-diol (1,2-glycol)','Purple colour of KMnO₄ discharged'] }
      ]
    },
    { t:'Benzene Electrophilic Substitution (EAS) Tree', root:'Benzene (C₆H₆)',
      br:[
        { l:'Conc. HNO₃ + Conc. H₂SO₄ (323–333 K)', n:['Electrophile: Nitronium ion (NO₂⁺)','H₂SO₄ protonates HNO₃','Nitrobenzene (meta-director)'] },
        { l:'R−Cl + Anhyd. AlCl₃ (Friedel–Crafts)', n:['Electrophile: R⁺ (rearranges if possible)','Alkylbenzene (ortho/para-director)','Polysubstitution risk (ring activated)'] },
        { l:'RCOCl + Anhyd. AlCl₃', n:['Electrophile: Acylium ion (R−C≡O⁺)','No rearrangement of acylium ion','Aryl ketone (deactivated, mono-acylation)'] },
        { l:'Cl₂ + UV light / 500 K (Free radical)', n:['Addition of 3 Cl₂ across ring','Hexachlorocyclohexane (C₆H₆Cl₆)','Gammaxene / Lindane (γ-isomer)'] }
      ]
    }
  ],
  lab:[
    { t:'Baeyer\'s Test for Unsaturation (Alkenes/Alkynes)', d:'Cold dilute aqueous 1% alkaline KMnO₄ is added: pink/purple colour is discharged and a brown precipitate of MnO₂ appears as alkene oxidises to cis-1,2-diol. Benzene does NOT give this test.' },
    { t:'Bromine Water / Br₂ in CCl₄ Test', d:'Reddish-brown colour of Br₂ in CCl₄ (or bromine water) is rapidly decolourised without evolution of HBr gas via anti-addition to form colourless vicinal dibromide.' },
    { t:'Tollens\' & Cuprous Chloride Test for Terminal Alkynes', d:'Terminal alkynes (R−C≡CH) give a white precipitate of silver alkynide (R−C≡CAg) with [Ag(NH₃)₂]⁺OH⁻ and a red precipitate of cuprous alkynide (R−C≡CCu) with ammoniacal Cu₂Cl₂; distinguishes but-1-yne from but-2-yne.' },
    { t:'Soda-Lime Decarboxylation Setup', d:'Sodium salt of carboxylic acid heated with soda-lime (NaOH + CaO in 3:1 ratio); CaO keeps NaOH dry and porous and prevents fusion of glass tube; alkane produced has one carbon less than parent carboxylate.' },
    { t:'Ozonolysis Retro-Synthesis Rule', d:'To find the parent alkene from reductive ozonolysis products, place the two carbonyl (=O) oxygens face-to-face, erase both oxygen atoms, and join the two carbonyl carbons by a double bond (C=C).' }
  ],
  pairs:[
    { g:'Hydrocarbon reagent → specific role or active species', a:'NaOH + CaO (3:1 mixture, Δ)', b:'Soda-lime decarboxylation of RCOONa to R−H' },
    { g:'Hydrocarbon reagent → specific role or active species', a:'H₂ / Pd supported on BaSO₄ or CaCO₃ poisoned with S/quinoline', b:'Lindlar\'s catalyst: cis-selective partial reduction of alkyne' },
    { g:'Hydrocarbon reagent → specific role or active species', a:'Na in liquid NH₃ at 196 K', b:'Birch reduction: trans-selective reduction of internal alkyne' },
    { g:'Hydrocarbon reagent → specific role or active species', a:'Cold dilute 1% alkaline KMnO₄', b:'Baeyer\'s reagent: syn-hydroxylation of alkene to cis-1,2-diol' },
    { g:'Hydrocarbon reagent → specific role or active species', a:'HgSO₄ + dil. H₂SO₄ at 333 K', b:'Kucherov\'s reagent: hydration of alkynes to carbonyl compounds' },
    { g:'Hydrocarbon reagent → specific role or active species', a:'Anhydrous Cr₂O₃ or V₂O₅ or Mo₂O₃ at 773 K, 10–20 atm', b:'Aromatisation (reforming) of n-hexane/n-heptane to benzene/toluene' },
    { g:'Reductive ozonolysis product → parent alkene', a:'2 moles of Methanal (HCHO) only', b:'Ethene (CH₂=CH₂)' },
    { g:'Reductive ozonolysis product → parent alkene', a:'Ethanal (CH₃CHO) + Methanal (HCHO)', b:'Propene (CH₃−CH=CH₂)' },
    { g:'Reductive ozonolysis product → parent alkene', a:'2 moles of Propanone (CH₃COCH₃) only', b:'2,3-Dimethylbut-2-ene ((CH₃)₂C=C(CH₃)₂)' },
    { g:'Reductive ozonolysis product → parent alkene', a:'Propanone (CH₃COCH₃) + Ethanal (CH₃CHO)', b:'2-Methylbut-2-ene ((CH₃)₂C=CHCH₃)' },
    { g:'Reductive ozonolysis product → parent alkene', a:'1 mole of Hexane-1,6-dial (OHC−(CH₂)₄−CHO)', b:'Cyclohexene (cyclic alkene)' },
    { g:'Electrophilic aromatic substitution → attacking electrophile', a:'Nitration of benzene (conc. HNO₃ + conc. H₂SO₄)', b:'Nitronium ion (NO₂⁺, linear sp)' },
    { g:'Electrophilic aromatic substitution → attacking electrophile', a:'Sulphonation of benzene (fuming H₂SO₄ / oleum)', b:'Sulphur trioxide (SO₃) or protonated HSO₃⁺' },
    { g:'Electrophilic aromatic substitution → attacking electrophile', a:'Friedel–Crafts acylation (CH₃COCl + anhyd. AlCl₃)', b:'Acetylium / acylium ion (CH₃−C≡O⁺)' },
    { g:'Electrophilic aromatic substitution → attacking electrophile', a:'Chlorination of benzene (Cl₂ + anhyd. FeCl₃)', b:'Chloronium ion complex (Cl⁺ / Cl−Cl⁺−FeCl₃⁻)' },
    { g:'Benzene substituent → directive & reactivity effect', a:'−OH, −NH₂, −OCH₃', b:'Strongly activating, ortho/para-directing (+M > −I)' },
    { g:'Benzene substituent → directive & reactivity effect', a:'−CH₃, −C₂H₅ (alkyl groups)', b:'Weakly activating, ortho/para-directing (+I and hyperconjugation)' },
    { g:'Benzene substituent → directive & reactivity effect', a:'−F, −Cl, −Br, −I (halogens)', b:'Deactivating, ortho/para-directing (−I > +M)' },
    { g:'Benzene substituent → directive & reactivity effect', a:'−NO₂, −CN, −CHO, −COOH, −SO₃H', b:'Deactivating, meta-directing (−M and −I)' }
  ],
  orders:[
    { q:'Stability of alkenes toward catalytic hydrogenation (lowest ΔH_hydrog = most stable)', s:['(CH₃)₂C=C(CH₃)₂','(CH₃)₂C=CHCH₃','trans-CH₃CH=CHCH₃','cis-CH₃CH=CHCH₃','CH₂=CH₂'], sep:'>', why:'More α-C−H bonds increase hyperconjugation (12 > 9 > 6 > 6 > 0), and trans > cis due to lower steric crowding.' },
    { q:'Conformational stability of n-butane across C₂−C₃ bond', s:['Anti (staggered, θ = 180°)','Gauche (staggered, θ = 60°)','Partially eclipsed (CH₃/H, θ = 120°)','Fully eclipsed (CH₃/CH₃, θ = 0°)'], sep:'>', why:'Anti avoids all torsional and van der Waals methyl-methyl steric strain; fully eclipsed has maximum torsional + steric strain (~19 kJ/mol).' },
    { q:'Reactivity of halogens toward free-radical halogenation of alkanes', s:['F₂','Cl₂','Br₂','I₂'], sep:'>', why:'Activation energy of H-abstraction increases and ΔH becomes less exothermic (endothermic for Br₂ and I₂) down the group.' },
    { q:'Acidic strength of C−H bond (ease of proton removal by strong base)', s:['HC≡CH (sp)','CH₂=CH₂ (sp²)','CH₃−CH₃ (sp³)'], sep:'>', why:'Greater % s-character (50% > 33.3% > 25%) holds the carbanion lone pair closer to the nucleus, stabilising the conjugate base.' },
    { q:'Rate of Electrophilic Aromatic Substitution (EAS) toward nitration', s:['Phenol (C₆H₅OH)','Toluene (C₆H₅CH₃)','Benzene (C₆H₆)','Chlorobenzene (C₆H₅Cl)','Nitrobenzene (C₆H₅NO₂)'], sep:'>', why:'+M of −OH strongly activates; +I/hyperconjugation of −CH₃ moderately activates; −I of −Cl deactivates; −M/−I of −NO₂ strongly deactivates.' },
    { q:'Boiling point of isomeric pentanes (C₅H₁₂)', s:['n-Pentane','Isopentane (2-methylbutane)','Neopentane (2,2-dimethylpropane)'], sep:'>', why:'Increased branching makes the molecule more spherical, decreasing surface area and weakening London dispersion forces.' }
  ],
  facts:{
    T:[
      'In ethane, the energy barrier to rotation (torsional strain) between staggered and eclipsed conformations is approximately 12.5 kJ mol⁻¹.',
      'Methane cannot be prepared by Wurtz reaction, Kolbe\'s electrolytic method, or reduction of an alkene.',
      'In Markovnikov addition of HBr to propene, the rate-determining step is protonation of the double bond to form the more stable 2° isopropyl carbocation.',
      'Reductive ozonolysis of but-2-ene yields two moles of ethanal (CH₃CHO), whereas but-1-ene yields propanal and methanal.',
      'Addition of Br₂ in CCl₄ to cis-but-2-ene proceeds via a cyclic bromonium ion intermediate (anti-addition) to yield a racemic mixture of (±)-2,3-dibromobutane.',
      'Addition of Br₂ in CCl₄ to trans-but-2-ene via anti-addition yields optically inactive meso-2,3-dibromobutane.',
      'Cyclopentadienyl anion (C₅H₅⁻) and tropylium cation (C₇H₇⁺) are both planar, cyclic, conjugated and aromatic with 6 π electrons (n = 1 in Hückel rule).',
      'In nitration of benzene using conc. HNO₃ and conc. H₂SO₄, nitric acid acts as a base by accepting a proton from the stronger sulphuric acid to generate NO₂⁺.',
      'Propyne reacts with aqueous HgSO₄ / dil. H₂SO₄ at 333 K to form propanone (acetone), whereas ethyne is the only alkyne that gives an aldehyde (ethanal).',
      'Calcium carbide (CaC₂) reacts with water to produce ethyne gas: CaC₂ + 2 H₂O → Ca(OH)₂ + C₂H₂.',
      'All six C−C bond lengths in benzene are equal (139 pm), intermediate between a C−C single bond (154 pm) and a C=C double bond (134 pm).',
      'Polynuclear aromatic hydrocarbons (PAHs) containing more than two fused benzene rings, such as 1,2-benzanthracene and 1,2-benzpyrene, are carcinogenic.'
    ],
    F:[
      'Addition of HCl to propene in the presence of benzoyl peroxide yields 1-chloropropane as the major product via the Kharasch peroxide effect.',
      'Eclipsed conformation of ethane is more stable than staggered conformation by 12.5 kJ mol⁻¹ because of hyperconjugation.',
      'Lindlar\'s catalyst (H₂ / Pd-CaCO₃) reduces but-2-yne selectively to trans-but-2-ene.',
      'But-2-yne reacts with ammoniacal silver nitrate (Tollens\' reagent) to give a white precipitate of silver butynide.',
      'Wurtz reaction is the best synthetic method to prepare unsymmetrical alkanes like propane in high yield without side products.',
      'Cyclopentadienyl cation (C₅H₅⁺) has 6 π electrons and is therefore aromatic according to Hückel\'s rule.',
      'Chlorobenzene undergoes electrophilic substitution faster than benzene because chlorine is an ortho/para-directing group.',
      'Kolbe\'s electrolysis of aqueous sodium acetate produces ethane at the cathode and hydrogen gas at the anode.',
      'Reaction of 1-bromopropane with alcoholic KOH is an electrophilic substitution reaction that yields propan-1-ol.',
      'cis-But-2-ene has a higher melting point and a zero dipole moment compared to trans-but-2-ene.',
      'Benzene readily decolourises cold dilute alkaline KMnO₄ (Baeyer\'s reagent) at room temperature because it has three π bonds.',
      'Hydration of propyne in the presence of Hg²⁺ and dil. H₂SO₄ yields propan-1-al as the final tautomerised product.'
    ]
  },
  mcq:[
    { q:'What is the major organic product when 3,3-dimethylbut-1-ene reacts with dilute HCl?', o:['2-Chloro-2,3-dimethylbutane','3-Chloro-2,2-dimethylbutane','1-Chloro-3,3-dimethylbutane','2-Chloro-3,3-dimethylbutane'], a:0, tag:'Concept Trap', sol:['Protonation of CH₂=CH−C(CH₃)₃ gives 2° carbocation CH₃−CH⁺−C(CH₃)₃.','A 1,2-methyl shift from the quaternary carbon generates the more stable 3° carbocation (CH₃)₂C⁺−CH(CH₃)₂.','Attack of Cl⁻ on the 3° carbocation gives 2-chloro-2,3-dimethylbutane.'] },
    { q:'An alkene C₆H₁₂ on reductive ozonolysis (O₃ followed by Zn/H₂O) yields ONLY propanone (acetone). The IUPAC name of the alkene is:', o:['2,3-Dimethylbut-2-ene','3-Methylpent-2-ene','Hex-3-ene','2-Methylpent-2-ene'], a:0, tag:'Reagent Trap', sol:['Two molecules of (CH₃)₂C=O joined by removing O atoms give (CH₃)₂C=C(CH₃)₂.','IUPAC name of (CH₃)₂C=C(CH₃)₂ is 2,3-dimethylbut-2-ene.','Symmetrical tetrasubstituted alkene gives a single ketone product.'] },
    { q:'Which of the following compounds can distinguish between but-1-yne and but-2-yne?', o:['Ammoniacal AgNO₃ solution','Br₂ in CCl₄','Cold dilute alkaline KMnO₄','H₂ / Pt'], a:0, tag:'Practical Trap', sol:['But-1-yne (CH₃CH₂C≡CH) is a terminal alkyne with an acidic sp C−H proton.','It reacts with ammoniacal AgNO₃ (Tollens\' reagent) to form a white precipitate of CH₃CH₂C≡CAg.','But-2-yne (CH₃C≡CCH₃) has no terminal ≡C−H proton and shows no reaction; both decolourise Br₂ and KMnO₄.'] },
    { q:'When propyne is treated with aqueous H₂SO₄ in the presence of HgSO₄ at 333 K, the major product formed is:', o:['Propanone','Propanal','Propan-1-ol','Propan-2-ol'], a:0, tag:'Reagent Trap', sol:['Kucherov hydration adds H₂O across C≡C following Markovnikov\'s rule.','CH₃−C≡CH + H₂O → [CH₃−C(OH)=CH₂] (unstable prop-1-en-2-ol).','Rapid keto–enol tautomerisation yields propanone (CH₃COCH₃).'] },
    { q:'Which among the following species is AROMATIC according to Hückel\'s rule?', o:['Cyclopentadienyl anion (C₅H₅⁻)','Cyclopentadienyl cation (C₅H₅⁺)','Cycloheptatrienyl anion (C₇H₇⁻)','Cyclooctatetraene (C₈H₈)'], a:0, tag:'Concept Trap', sol:['C₅H₅⁻ is cyclic, planar, fully conjugated (all 5 ring carbons sp²) and has 6 π electrons (4n + 2 for n = 1).','C₅H₅⁺ has 4 π electrons (anti-aromatic); C₇H₇⁻ has 8 π electrons; C₈H₈ is tub-shaped non-aromatic.','Hence only cyclopentadienyl anion is aromatic.'] },
    { q:'Consider the conversion of hex-3-yne to trans-hex-3-ene. The appropriate reagent is:', o:['Na in liquid NH₃','H₂ / Pd-BaSO₄ (Lindlar\'s catalyst)','B₂H₆ followed by CH₃COOH','NaBH₄ in ethanol'], a:0, tag:'Stereo Trap', sol:['Birch reduction (Na in liquid NH₃) reduces internal alkynes via a radical anion intermediate with anti-addition of hydrogen.','This stereospecifically yields trans-hex-3-ene.','Lindlar\'s catalyst and hydroboration-protonolysis give cis-hex-3-ene.'] },
    { q:'Which of the following alkanes gives ONLY ONE monochloro derivative upon photochemical chlorination?', o:['Neopentane (2,2-dimethylpropane)','Isopentane (2-methylbutane)','n-Pentane','Propane'], a:0, tag:'Concept Trap', sol:['In neopentane, C(CH₃)₄, all 12 hydrogen atoms are chemically equivalent (1° hydrogens).','Replacing any one H by Cl gives 1-chloro-2,2-dimethylpropane.','Propane gives 2, n-pentane gives 3, and isopentane gives 4 constitutional monochloro isomers.'] },
    { q:'Addition of HBr to 2-methylpropene in the presence of benzoyl peroxide yields mainly:', o:['1-Bromo-2-methylpropane','2-Bromo-2-methylpropane','1,2-Dibromo-2-methylpropane','2-Bromopropane'], a:0, tag:'Reagent Trap', sol:['In presence of peroxide (ROOR), HBr adds via Kharasch anti-Markovnikov free-radical mechanism.','Br• attacks the terminal =CH₂ carbon of (CH₃)₂C=CH₂ to form the more stable 3° free radical (CH₃)₂C•−CH₂Br.','Subsequent H-abstraction from HBr yields 1-bromo-2-methylpropane.'] },
    { q:'In the Friedel–Crafts alkylation of benzene with 1-chlorobutane and anhydrous AlCl₃, the major product is:', o:['sec-Butylbenzene (2-phenylbutane)','n-Butylbenzene (1-phenylbutane)','tert-Butylbenzene','Isobutylbenzene'], a:0, tag:'Reagent Trap', sol:['1-Chlorobutane + AlCl₃ forms an incipient 1° butyl carbocation complex.','A 1,2-hydride shift converts it into the more stable 2° sec-butyl carbocation (CH₃CH⁺CH₂CH₃).','Electrophilic attack on benzene gives sec-butylbenzene as the major product.'] },
    { q:'Anti-addition of Br₂/CCl₄ to trans-but-2-ene produces:', o:['meso-2,3-Dibromobutane','Racemic (±)-2,3-dibromobutane','Pure (+)-2,3-dibromobutane','1,2-Dibromobutane'], a:0, tag:'Stereo Trap', sol:['Use the CAR-TAR mnemonic: Cis + Anti = Racemic; Trans + Anti = Meso.','Br₂ adds anti via a cyclic bromonium ion across trans-but-2-ene.','The resulting 2,3-dibromobutane has an internal plane of symmetry (meso compound, optically inactive).'] },
    { q:'During Kolbe\'s electrolysis of aqueous potassium succinate (KOOC−CH₂−CH₂−COOK), the gases evolved at the anode are:', o:['Ethene and CO₂','Ethane and CO₂','Ethyne and CO₂','Methane and O₂'], a:0, tag:'Reagent Trap', sol:['Anodic oxidation of succinate dianion (−OOC−CH₂−CH₂−COO⁻) loses 2 e⁻ and 2 CO₂ molecules.','The resulting 1,2-diradical (•CH₂−CH₂•) immediately forms a π bond to yield ethene (CH₂=CH₂).','Hence ethene and CO₂ are evolved at the anode, while H₂ is evolved at the cathode.'] },
    { q:'Calcium carbide (CaC₂) → (H₂O) → A → (Red hot Fe tube, 873 K) → B → (CH₃Cl / anhyd. AlCl₃) → C. Compound C is:', o:['Toluene','Mesitylene','Chlorobenzene','Ethylbenzene'], a:0, tag:'Reagent Trap', sol:['CaC₂ + 2 H₂O → HC≡CH (A, ethyne).','3 HC≡CH in red hot Fe tube at 873 K → C₆H₆ (B, benzene).','Benzene + CH₃Cl / anhyd. AlCl₃ (Friedel–Crafts methylation) → C₆H₅CH₃ (C, toluene).'] },
    { q:'Which substituent on a benzene ring is BOTH ring-deactivating and ortho/para-directing in electrophilic aromatic substitution?', o:['−Cl','−OCH₃','−NO₂','−CH₃'], a:0, tag:'NCERT Exception', sol:['Halogens (−F, −Cl, −Br, −I) have a strong −I inductive effect that withdraws electrons and deactivates the ring.','However, their lone pairs donate via +M resonance to stabilise the ortho and para σ-complex intermediates.','Thus −Cl is deactivating yet ortho/para-directing.'] },
    { q:'Dehydrohalogenation of 2-bromopentane with alcoholic KOH predominantly gives pent-2-ene over pent-1-ene. This is governed by:', o:['Zaitsev\'s (Saytzeff\'s) rule','Markovnikov\'s rule','Hückel\'s rule','Hofmann\'s rule'], a:0, tag:'Concept Trap', sol:['In β-elimination with unhindered base (alc. KOH), the hydrogen is eliminated from the β-carbon having fewer H atoms.','This gives the more substituted, more hyperconjugated alkene (pent-2-ene, 5 α-H) as the major product (Saytzeff rule).','Pent-1-ene has only 2 α-H and is the minor product.'] },
    { q:'What is the dihedral angle (θ) between the two methyl groups in the gauche conformation of n-butane?', o:['60°','180°','120°','0°'], a:0, tag:'Stereo Trap', sol:['In Newman projection of n-butane across C₂−C₃, θ = 0° is fully eclipsed, θ = 60° is gauche (staggered), θ = 120° is partially eclipsed, and θ = 180° is anti (staggered).','Thus the gauche conformation has a dihedral angle of 60°.'] }
  ],
  gens:[
    function(R){
      var c = R.int(4,12);
      var du = R.int(1,4);
      var h = 2*c + 2 - 2*du;
      return {
        q:'Calculate the Degree of Unsaturation (Double Bond Equivalent / IHD) for a hydrocarbon with molecular formula C<sub>'+c+'</sub>H<sub>'+h+'</sub>.',
        ans:du, d:[du+1, Math.max(0, du-1), 2*du], u:'',
        tag:'Calculation Trap',
        sol:['For a saturated alkane with '+c+' carbons, H_max = 2n + 2 = '+(2*c+2)+'.','Actual H = '+h+'; hydrogen deficiency = '+(2*c+2)+' − '+h+' = '+(2*du)+' H atoms.','DU = (2C + 2 − H)/2 = '+du+' (sum of rings + π bonds).']
      };
    },
    function(R){
      var n = R.int(2,7);
      var h = 2*n + 2;
      var o2 = (3*n + 1) / 2;
      return {
        q:'How many moles of O<sub>2</sub> are required for the complete combustion of 1 mole of the alkane C<sub>'+n+'</sub>H<sub>'+h+'</sub>?',
        ans:o2, d:[n + (n+1)/4, 3*n/2, (3*n - 1)/2], u:'mol',
        tag:'Calculation Trap',
        sol:['Balanced alkane combustion: CₙH₂ₙ₊₂ + ((3n + 1)/2) O₂ → n CO₂ + (n + 1) H₂O.','For n = '+n+': moles of O₂ = (3×'+n+' + 1)/2 = '+(3*n+1)+'/2 = '+R.f(o2)+' mol.','Distractor 3n/2 is for alkenes; (3n−1)/2 is for alkynes.']
      };
    },
    function(R){
      var items = [
        {name:'2-methylbutane (isopentane)', n1:6, n2:2, n3:1, label:'3° (2-chloro-2-methylbutane)'},
        {name:'propane', n1:6, n2:2, n3:0, label:'2° (2-chloropropane)'},
        {name:'2-methylpropane (isobutane)', n1:9, n2:0, n3:1, label:'3° (2-chloro-2-methylpropane)'},
        {name:'butane', n1:6, n2:4, n3:0, label:'2° (2-chlorobutane)'}
      ];
      var it = R.pick(items);
      var r1 = 1.0, r2 = 3.8, r3 = 5.0;
      var num = it.n3 > 0 ? it.n3 * r3 : it.n2 * r2;
      var tot = it.n1 * r1 + it.n2 * r2 + it.n3 * r3;
      var pct = (num / tot) * 100;
      var naive = ((it.n3 > 0 ? it.n3 : it.n2) / (it.n1 + it.n2 + it.n3)) * 100;
      return {
        q:'In the monochlorination of '+it.name+' at 298 K (relative reactivity of H: 3° : 2° : 1° = 5.0 : 3.8 : 1.0), what is the percentage yield of the '+it.label+' isomer?',
        ans:pct, d:[naive, 100 - pct, pct * 0.5], u:'%',
        tag:'Calculation Trap',
        sol:['Counts of H in '+it.name+': 1° = '+it.n1+', 2° = '+it.n2+', 3° = '+it.n3+'.','Weighted reactivity sum = '+it.n1+'(1.0) + '+it.n2+'(3.8) + '+it.n3+'(5.0) = '+R.f(tot)+'.','% of '+it.label+' = ('+R.f(num)+' / '+R.f(tot)+') × 100 = '+R.f(pct)+'%.']
      };
    }
  ]
});

NEET.reg({
  id:'C16',
  subj:'Organic Chemistry',
  type:'conc',
  name:'Haloalkanes and Haloarenes',
  syl:'Haloalkanes: nature of C–X bond, nomenclature, preparation, physical and chemical properties, mechanism of nucleophilic substitution reactions (SN1 and SN2), optical rotation and stereochemistry, β-elimination; Haloarenes: nature of C–X bond, directive influence of halogen, substitution reactions (Dow process, electrophilic substitution); Uses and environmental effects of dichloromethane, trichloromethane (chloroform), tetrachloromethane, iodoform, freons, and DDT.',
  kw:['haloalkane','haloarene','sn1','sn2','walden inversion','racemisation','darzen','finkelstein','swarts','sandmeyer','gattermann','dow process','saytzeff','ambident nucleophile','grignard reagent','wurtz fittig','phosgene','freon','ddt'],
  formulas:[
    { n:'SN2 Bimolecular Nucleophilic Substitution Rate Law', f:'Rate = k [R−X] [Nu⁻]', u:'2nd order (mol⁻¹ L s⁻¹)', s:'Concerted 1-step mechanism via pentacoordinate sp² transition state; 100% Walden inversion of configuration', b:'BOUNDARY: Fails completely for 3° alkyl halides, neopentyl halides, bridgehead halides, and vinyl/aryl halides due to steric hindrance or sp² C−X bond.' },
    { n:'SN1 Unimolecular Nucleophilic Substitution Rate Law', f:'Rate = k [R−X]  (independent of [Nu⁻])', u:'1st order (s⁻¹)', s:'2-step mechanism via planar sp² carbocation intermediate; proceeds with partial racemisation (inversion + retention)', b:'BOUNDARY: Fails for 1° methyl/ethyl halides, bridgehead halides (Bredt\'s rule prevents planar carbocation), and vinyl/aryl halides.' },
    { n:'Enantiomeric Excess (ee) / Optical Purity', f:'% ee = (|d − l| / (d + l)) × 100 = (α_obs / α_max) × 100', u:'%', s:'d and l are mole fractions/percentages of the two enantiomers; a 50:50 racemic mixture has 0% ee', b:'BOUNDARY: Valid only for a single chiral centre or a single pair of enantiomers; does not apply directly when diastereomers are present.' },
    { n:'Darzen\'s Thionyl Chloride Preparation', f:'R−OH + SOCl₂ (pyridine) → R−Cl + SO₂↑ + HCl↑', u:'best R−Cl method', s:'Both byproducts (SO₂ and HCl) are escapable gases, leaving pure alkyl chloride without tedious separation', b:'BOUNDARY: Fails for phenols (aryl C−O bond is partial double bond due to resonance and is not cleaved by SOCl₂).' },
    { n:'Finkelstein & Swarts Halogen Exchange', f:'R−X + NaI (dry acetone) → R−I + NaX↓  |  R−Cl + AgF → R−F + AgCl↓', u:'SN2 halide swap', s:'Finkelstein uses NaI in dry acetone (NaCl/NaBr precipitate shifts equilibrium); Swarts uses metallic fluorides (AgF, Hg₂F₂, CoF₂, SbF₃)', b:'BOUNDARY: Fails for aryl and vinyl halides because SN2 displacement cannot occur on an sp² carbon.' },
    { n:'Saytzeff (Zaitsev) vs Hofmann β-Elimination (E2)', f:'R−CH₂−CH(X)−CH₃ + Base → CH₃−CH=CH−CH₃ (Saytzeff) + CH₃−CH₂−CH=CH₂ (Hofmann)', u:'alkene regioselectivity', s:'Unhindered base (alc. KOH / EtO⁻) gives more substituted Saytzeff alkene; bulky base (Me₃CO⁻K⁺) or −F leaving group gives less substituted Hofmann alkene', b:'BOUNDARY: Requires an anti-periplanar (180° trans-diaxial in cyclohexanes) β-hydrogen; fails when β-carbon has no H atoms.' },
    { n:'Dow\'s Process for Phenol from Chlorobenzene', f:'C₆H₅Cl + NaOH (6–8% aq, 623 K, 300 atm) → C₆H₅O⁻Na⁺ → (H⁺) → C₆H₅OH', u:'drastic ArSN', s:'Requires extreme T and P for unactivated chlorobenzene; electron-withdrawing −NO₂ groups at ortho/para positions drastically lower T required', b:'BOUNDARY: Meta-nitro group does NOT stabilise the Meisenheimer carbanion intermediate by resonance, unlike ortho/para −NO₂.' }
  ],
  traps:[
    { t:'Although fluorine is more electronegative than chlorine, the dipole moment of chloromethane (CH₃Cl, 1.86 D) is greater than that of fluoromethane (CH₃F, 1.847 D).', c:'Dipole moment μ = q × d; the much longer C−Cl bond length (178 pm vs 139 pm for C−F) outweighs the slightly smaller partial charge q on Cl.', tag:'NCERT Exception' },
    { t:'Treatment of alkyl halides with KCN gives alkyl cyanides (nitriles, R−CN) as major product, whereas AgCN gives alkyl isocyanides (isonitriles, R−NC).', c:'KCN is predominantly ionic so free CN⁻ attacks via the more nucleophilic carbon atom, whereas AgCN is covalent so only the nitrogen lone pair is available for attack.', tag:'Reagent Trap' },
    { t:'Treatment of alkyl halides with KNO₂ gives alkyl nitrites (R−O−N=O), whereas AgNO₂ gives nitroalkanes (R−NO₂).', c:'KNO₂ is ionic and attacks through the negatively charged oxygen atom with higher charge density; AgNO₂ has a covalent Ag−O bond so attack occurs via the nitrogen lone pair.', tag:'Reagent Trap' },
    { t:'Haloarenes (like chlorobenzene) are extremely unreactive toward SN1 and SN2 nucleophilic substitution compared to haloalkanes.', c:'Four reasons: (1) +M resonance gives C−X partial double-bond character, (2) sp² carbon is more electronegative (shorter, stronger C−X bond of 169 pm vs 177 pm), (3) phenyl cation is unstable, and (4) π-cloud repels nucleophiles.', tag:'Concept Trap' },
    { t:'Grignard reagents (R−MgX) must be prepared and used under strictly anhydrous conditions (dry ether); even traces of moisture, alcohols, or amines destroy them.', c:'The R−Mg bond is highly polar (Rδ⁻ − Mgδ⁺X); carbanionic R⁻ acts as a strong Brønsted base and abstracts any acidic proton (H₂O, ROH, RNH₂) to form the hydrocarbon R−H.', tag:'Practical Trap' },
    { t:'Chloroform (CHCl₃) is stored in dark-coloured bottles completely filled to the brim along with ~1% ethanol.', c:'Light and air oxidise CHCl₃ to highly poisonous phosgene gas (COCl₂); 1% ethanol acts as a negative catalyst (inhibitor) and converts any trace phosgene into harmless diethyl carbonate.', tag:'Practical Trap' },
    { t:'para-Dichlorobenzene has a much higher melting point (326 K) and lower solubility than its ortho (256 K) and meta (249 K) isomers, although its boiling point is nearly the same.', c:'The symmetrical para-isomer packs much more closely and efficiently in the solid crystal lattice, requiring more thermal energy to melt.', tag:'NCERT Exception' },
    { t:'Chloromethyl methyl ether (CH₃OCH₂Cl) and allyl chloride (CH₂=CH−CH₂Cl) undergo SN1 hydrolysis very rapidly despite being primary (1°) halides.', c:'In CH₃OCH₂⁺, the carbocation is strongly stabilised by +M lone-pair donation from adjacent oxygen (CH₃−O⁺=CH₂), and in allyl cation by π-resonance.', tag:'Concept Trap' },
    { t:'1-Chlorobicyclo[2.2.1]heptane (a bridgehead tertiary halide) is completely inert toward both SN1 and SN2 reactions.', c:'Backside attack for SN2 is blocked by the rigid bicyclic cage, and SN1 fails because the bridgehead carbon cannot flatten into a planar sp² carbocation (Bredt\'s rule).', tag:'Stereo Trap' }
  ],
  flows:[
    { t:'Ambident Nucleophile & Organometallic Divergence Map', root:'Bromoethane (CH₃CH₂Br)',
      br:[
        { l:'KCN (aq. ethanol) vs AgCN (alc.)', n:['With KCN (ionic): Propanenitrile (CH₃CH₂CN)','With AgCN (covalent): Ethyl isocyanide (CH₃CH₂NC)','Ambident CN⁻: C-attack vs N-attack'] },
        { l:'KNO₂ vs AgNO₂', n:['With KNO₂ (ionic): Ethyl nitrite (CH₃CH₂−O−N=O)','With AgNO₂ (covalent): Nitroethane (CH₃CH₂−NO₂)','Ambident NO₂⁻: O-attack vs N-attack'] },
        { l:'Mg / Dry Ether → then H₂O or D₂O', n:['Forms Ethylmagnesium bromide (CH₃CH₂MgBr)','With H₂O: Ethane (CH₃CH₃)','With D₂O: Monodeuterated ethane (CH₃CH₂D)'] },
        { l:'Aq. KOH (Δ) vs Alc. KOH (Δ)', n:['Aq. KOH (nucleophile OH⁻): Ethanol (SN2)','Alc. KOH (strong base EtO⁻): Ethene (E2 β-elimination)','Solvent switches substitution vs elimination'] }
      ]
    },
    { t:'SN1 vs SN2 Stereochemical & Kinetic Decision Tree', root:'Chiral Secondary / Tertiary Alkyl Halide (R−X)',
      br:[
        { l:'Strong Nu⁻ (CN⁻, I⁻, OH⁻) + Polar Aprotic Solvent (DMSO, Acetone)', n:['Favours concerted SN2 pathway','Rate = k[R−X][Nu⁻]; 1° > 2° > 3°','100% Walden inversion of configuration'] },
        { l:'Weak Nu (H₂O, ROH) + Polar Protic Solvent (H₂O, EtOH) on 3° / Benzylic / Allylic R−X', n:['Favours 2-step SN1 via planar sp² carbocation','Rate = k[R−X]; 3° > 2° > 1°','Racemisation (inversion slightly > retention due to ion-pair shielding)'] },
        { l:'AgNO₃ (aq/alc) diagnostic test', n:['Ag⁺ acts as Lewis acid pulling X⁻ to form R⁺','Instant AgX↓ precipitate with 3°, allylic, benzylic halides','No precipitate with chlorobenzene or vinyl chloride'] }
      ]
    },
    { t:'Benzene Diazonium & Chlorobenzene Reaction Web', root:'Chlorobenzene (C₆H₅Cl) / Diazonium Salt (C₆H₅N₂⁺Cl⁻)',
      br:[
        { l:'Sandmeyer vs Gattermann (on C₆H₅N₂⁺Cl⁻)', n:['Cu₂Cl₂/HCl or Cu₂Br₂/HBr → C₆H₅Cl or C₆H₅Br (Sandmeyer)','Cu powder + HCl/HBr → C₆H₅Cl or C₆H₅Br (Gattermann)','KI (aq, warm) directly gives Iodobenzene (no Cu catalyst needed)'] },
        { l:'NaOH (623 K, 300 atm) → H⁺ on C₆H₅Cl (Dow\'s)', n:['Forms Sodium phenoxide','Acidification yields Phenol','With 2,4,6-(NO₂)₃C₆H₂Cl, warm H₂O alone suffices'] },
        { l:'2 Na + Dry Ether (Fittig / Wurtz–Fittig)', n:['2 C₆H₅Cl + 2 Na → Diphenyl / Biphenyl (Fittig)','C₆H₅Cl + CH₃Cl + 2 Na → Toluene (Wurtz–Fittig)','C−C coupling of aryl halides'] }
      ]
    }
  ],
  lab:[
    { t:'AgNO₃ Ethanolic Test for Halide Reactivity', d:'Warming an organic halide with alcoholic AgNO₃ precipitates AgCl (white), AgBr (pale yellow), or AgI (yellow) via SN1: allylic, benzylic, and 3° halides react instantly at room temperature; 1°/2° require heating; vinyl and aryl halides give NO precipitate.' },
    { t:'Beilstein Test for Halogens', d:'Heating an organic halogen compound on a clean copper wire in a non-luminous Bunsen flame imparts a bluish-green flame due to volatile cupric halides (Note: urea and pyridine also give a positive test despite lacking halogens).' },
    { t:'Phosgene Purity Check on Chloroform', d:'Pure CHCl₃ does NOT give a white precipitate with aq. AgNO₃ because C−Cl is covalent; oxidised CHCl₃ containing phosgene (COCl₂) and HCl gives an immediate white curdy precipitate of AgCl.' },
    { t:'Iodoform Antiseptic Property', d:'Triiodomethane (CHI₃) is a yellow crystalline solid (mp 392 K) with a distinct smell; its antiseptic action is due to the liberation of free iodine (I₂) on contact with skin, not due to iodoform itself.' }
  ],
  pairs:[
    { g:'Named reaction in haloalkanes/haloarenes → reagent & transformation', a:'Darzen\'s process', b:'ROH + SOCl₂ (pyridine) → RCl + SO₂↑ + HCl↑' },
    { g:'Named reaction in haloalkanes/haloarenes → reagent & transformation', a:'Finkelstein reaction', b:'R−Cl/Br + NaI in dry acetone → R−I + NaCl/NaBr↓' },
    { g:'Named reaction in haloalkanes/haloarenes → reagent & transformation', a:'Swarts reaction', b:'R−Cl/Br + AgF (or Hg₂F₂, CoF₂, SbF₃) → R−F' },
    { g:'Named reaction in haloalkanes/haloarenes → reagent & transformation', a:'Sandmeyer reaction', b:'ArN₂⁺X⁻ + Cu₂Cl₂/HCl (or Cu₂Br₂/HBr) → ArCl (or ArBr) + N₂' },
    { g:'Named reaction in haloalkanes/haloarenes → reagent & transformation', a:'Wurtz–Fittig reaction', b:'Ar−X + R−X + 2 Na (dry ether) → Ar−R + 2 NaX' },
    { g:'Named reaction in haloalkanes/haloarenes → reagent & transformation', a:'Fittig reaction', b:'2 Ar−X + 2 Na (dry ether) → Ar−Ar (biphenyl) + 2 NaX' },
    { g:'Named reaction in haloalkanes/haloarenes → reagent & transformation', a:'Hunsdiecker (Borodine) reaction', b:'RCOOAg + Br₂ (in CCl₄, Δ) → R−Br + CO₂↑ + AgBr↓' },
    { g:'Polyhalogen compound → formula, use or hazard', a:'Chloroform + O₂ (air) + hν (sunlight)', b:'Forms poisonous phosgene gas (COCl₂, carbonyl chloride)' },
    { g:'Polyhalogen compound → formula, use or hazard', a:'Freon-12 (Dichlorodifluoromethane, CCl₂F₂)', b:'Prepared from CCl₄ + SbF₃ (Swarts); causes stratospheric ozone depletion' },
    { g:'Polyhalogen compound → formula, use or hazard', a:'DDT (p,p\'-Dichlorodiphenyltrichloroethane)', b:'Prepared from chloral + 2 chlorobenzene (conc. H₂SO₄); non-biodegradable insecticide' },
    { g:'Polyhalogen compound → formula, use or hazard', a:'Iodoform (CHI₃)', b:'Yellow solid; antiseptic action due to slow liberation of free I₂' },
    { g:'Polyhalogen compound → formula, use or hazard', a:'Carbon tetrachloride (CCl₄, Pyrene)', b:'Used as fire extinguisher for oil fires; causes liver cancer & ozone depletion' },
    { g:'Polyhalogen compound → formula, use or hazard', a:'Chloroform + Ethanol (1% stabilizer)', b:'Converts toxic COCl₂ into harmless diethyl carbonate ((C₂H₅O)₂CO)' },
    { g:'Substrate/reagent pair → stereochemical or mechanistic outcome', a:'(R)-2-Bromobutane + OH⁻ in DMSO (SN2)', b:'Pure (S)-butan-2-ol (100% Walden inversion)' },
    { g:'Substrate/reagent pair → stereochemical or mechanistic outcome', a:'Optically active 3-bromo-3-methylhexane + H₂O (SN1)', b:'Racemic (±)-3-methylhexan-3-ol (enantiomeric pair)' },
    { g:'Substrate/reagent pair → stereochemical or mechanistic outcome', a:'Chlorobenzene + Cl₂ / anhyd. FeCl₃', b:'1,4-Dichlorobenzene (major) + 1,2-dichlorobenzene (minor)' },
    { g:'Substrate/reagent pair → stereochemical or mechanistic outcome', a:'2-Bromobutane + alcoholic KOH (Δ)', b:'trans-But-2-ene (major, 80%, Saytzeff) + but-1-ene (minor, 20%)' },
    { g:'Substrate/reagent pair → stereochemical or mechanistic outcome', a:'2-Bromo-2-methylpropane + C₂H₅O⁻Na⁺ / C₂H₅OH', b:'2-Methylpropene via E2 elimination (NOT Williamson ether)' }
  ],
  orders:[
    { q:'Rate of SN2 nucleophilic substitution with KI in acetone', s:['CH₃−Br','CH₃CH₂−Br','(CH₃)₂CH−Br','(CH₃)₃C−Br'], sep:'>', why:'SN2 proceeds via backside attack; steric crowding at the α-carbon increases from methyl < 1° < 2° < 3°, slowing the reaction.' },
    { q:'Rate of SN1 solvolysis in aqueous ethanol', s:['(C₆H₅)₃C−Cl','(C₆H₅)₂CH−Cl','C₆H₅CH₂−Cl','CH₃−Cl'], sep:'>', why:'SN1 rate depends on stability of the carbocation formed in RDS; extensive phenyl resonance stabilises Ph₃C⁺ > Ph₂CH⁺ > PhCH₂⁺ >> CH₃⁺.' },
    { q:'Leaving group ability and reactivity of alkyl halides (R−X) in both SN1 and SN2', s:['R−I','R−Br','R−Cl','R−F'], sep:'>', why:'C−I bond has the lowest bond dissociation enthalpy (234 kJ/mol) and I⁻ is the weakest, most polarisable conjugate base.' },
    { q:'Dipole moment (μ) of halomethanes (CH₃−X) in the gas phase', s:['CH₃Cl','CH₃F','CH₃Br','CH₃I'], sep:'>', why:'NCERT exception: CH₃Cl (1.860 D) > CH₃F (1.847 D) > CH₃Br (1.830 D) > CH₃I (1.636 D) because the longer C−Cl bond distance outweighs F\'s electronegativity.' },
    { q:'Ease of nucleophilic aromatic substitution (ArSN) with aqueous NaOH', s:['2,4,6-Trinitrochlorobenzene (Picryl chloride)','2,4-Dinitrochlorobenzene','4-Nitrochlorobenzene','Chlorobenzene'], sep:'>', why:'Each ortho/para −NO₂ group delocalises the negative charge of the Meisenheimer complex via −M and −I effects, lowering activation energy.' },
    { q:'Boiling point of isomeric bromobutanes (C₄H₉Br)', s:['1-Bromobutane','2-Bromobutane','2-Bromo-2-methylpropane'], sep:'>', why:'Branching reduces molecular surface area and decreases van der Waals dispersion forces (375 K > 364 K > 346 K).' }
  ],
  facts:{
    T:[
      'Darzen\'s method (ROH + SOCl₂ in pyridine) is the best method to prepare alkyl chlorides because both byproducts, SO₂ and HCl, are gases that escape easily.',
      'SN2 reactions are favoured by strong, high-concentration nucleophiles and polar aprotic solvents such as DMSO, DMF, and acetone.',
      'SN1 reactions are favoured by bulky 3°/allylic/benzylic substrates and polar protic solvents (water, alcohols) which solvate both the carbocation and halide ion.',
      'In the Lucas test, 3° alcohols react immediately with conc. HCl + anhydrous ZnCl₂ at room temperature to give white turbidity via an SN1 mechanism.',
      'Free-radical chlorination or bromination of toluene in the presence of sunlight/heat (without FeCl₃) occurs at the benzylic methyl group to yield benzyl halide.',
      'Reaction of phenylmagnesium bromide (C₆H₅MgBr) with D₂O produces monodeuterobenzene (C₆H₅D).',
      'Freon-12 (CCl₂F₂) diffuses into the stratosphere where UV radiation cleaves C−Cl bonds to generate Cl• radicals that catalytically destroy ozone.',
      'When 2-chlorobutane reacts with alcoholic KOH, trans-but-2-ene is formed in ~60% yield, cis-but-2-ene in ~20% yield, and but-1-ene in ~20% yield.',
      'Meso-tartaric acid and meso-2,3-dibromobutane are optically inactive due to internal compensation (presence of a plane of symmetry), not external compensation.',
      'Resolution is the process of separating a racemic (±) mixture into its constituent dextrorotatory (d) and laevorotatory (l) enantiomers.',
      'Phosphorus tribromide (PBr₃) and phosphorus triiodide (PI₃) are generated in situ by reacting red phosphorus with Br₂ or I₂ during haloalkane synthesis from alcohols.',
      'Benzyl chloride (C₆H₅CH₂Cl) readily gives a white precipitate with alcoholic AgNO₃, whereas chlorobenzene (C₆H₅Cl) does not.'
    ],
    F:[
      'Fluoromethane (CH₃F) has the highest dipole moment among all methyl halides because fluorine is the most electronegative element.',
      'In an SN1 reaction of an optically active alkyl halide, the product shows 100% inversion of configuration (Walden inversion).',
      'Phenols react readily with thionyl chloride (SOCl₂) or PCl₃ in high yield to give aryl chlorides.',
      'Reaction of bromoethane with alcoholic AgCN gives propanenitrile (CH₃CH₂CN) as the major product.',
      'Presence of a nitro (−NO₂) group at the meta position of chlorobenzene strongly activates the C−Cl bond toward nucleophilic substitution by NaOH.',
      'Grignard reagents are best prepared in aqueous ethanol as solvent to dissolve the magnesium turnings.',
      'Vinyl chloride (CH₂=CH−Cl) undergoes SN2 substitution much faster than ethyl chloride (CH₃CH₂−Cl).',
      'meta-Dichlorobenzene has a zero dipole moment (μ = 0), whereas para-dichlorobenzene has a large dipole moment.',
      'Wurtz reaction of 2-bromo-2-methylpropane (tert-butyl bromide) with sodium in dry ether gives 2,2,3,3-tetramethylbutane in almost 100% yield.',
      'Neopentyl bromide ((CH₃)₃C−CH₂Br) is a primary halide and therefore undergoes SN2 reactions faster than ethyl bromide.',
      'In the Sandmeyer reaction, iodobenzene requires cuprous iodide (Cu₂I₂) catalyst to form from benzenediazonium chloride.',
      'Retention of configuration means that the optical rotation sign (+ or −) of the product is necessarily the same as that of the reactant.'
    ]
  },
  mcq:[
    { q:'Which of the following compounds will undergo SN1 reaction most rapidly with aqueous AgNO₃?', o:['(C₆H₅)₂CH−Cl','C₆H₅CH₂−Cl','CH₂=CH−Cl','C₆H₅−Cl'], a:0, tag:'Concept Trap', sol:['SN1 reactivity depends on the stability of the carbocation formed by C−Cl heterolysis.','(C₆H₅)₂CH⁺ (diphenylmethyl cation) is stabilised by resonance across TWO benzene rings, making it more stable than benzyl cation C₆H₅CH₂⁺.','Vinyl chloride and chlorobenzene do not undergo SN1 due to sp² C−Cl partial double bond character.'] },
    { q:'Which of the following alkyl halides is extraordinarily unreactive in an SN2 reaction despite being a primary (1°) halide?', o:['1-Bromo-2,2-dimethylpropane (Neopentyl bromide)','1-Bromobutane','1-Bromopropane','Bromoethane'], a:0, tag:'Stereo Trap', sol:['In neopentyl bromide, (CH₃)₃C−CH₂Br, the bulky tert-butyl group at the β-carbon severely blocks backside trajectory (180°) of the incoming nucleophile.','Hence its SN2 rate is ~10⁵ times slower than bromoethane.'] },
    { q:'When (R)-2-bromooctane is treated with aqueous NaOH under purely SN2 conditions, the product formed is:', o:['(S)-Octan-2-ol with inverted configuration','Racemic (±)-octan-2-ol','(R)-Octan-2-ol with retained configuration','Oct-2-ene as the sole product'], a:0, tag:'Stereo Trap', sol:['SN2 occurs via concerted backside attack opposite to the leaving Br⁻ group.','This causes 100% Walden inversion of configuration, converting (R)-2-bromooctane into (S)-octan-2-ol.'] },
    { q:'Bromoethane reacts with KCN in aqueous ethanol to give X, and with AgCN to give Y. X and Y are respectively:', o:['CH₃CH₂CN and CH₃CH₂NC','CH₃CH₂NC and CH₃CH₂CN','CH₃CN and CH₃NC','CH₃CH₂CN in both cases'], a:0, tag:'Reagent Trap', sol:['CN⁻ is an ambident nucleophile.','KCN is ionic, so attack occurs through the carbon atom (stronger C−C bond formed) giving propanenitrile (CH₃CH₂CN).','AgCN is predominantly covalent, so attack occurs through the nitrogen lone pair giving ethyl isocyanide (CH₃CH₂NC).'] },
    { q:'Identify the final product B in the sequence: Chlorobenzene + Mg (in dry THF) → A → (reacts with H₂O) → B:', o:['Benzene','Phenol','Diphenyl','Cyclohexanol'], a:0, tag:'Reagent Trap', sol:['Chlorobenzene reacts with Mg in dry THF to form phenylmagnesium chloride, C₆H₅MgCl (A).','Grignard reagent A acts as a strong base with H₂O, abstracting H⁺ to yield benzene (C₆H₆, B) + Mg(OH)Cl.'] },
    { q:'Arrange the following halomethanes in decreasing order of dipole moment (μ): CH₃F, CH₃Cl, CH₃Br, CH₃I:', o:['CH₃Cl > CH₃F > CH₃Br > CH₃I','CH₃F > CH₃Cl > CH₃Br > CH₃I','CH₃I > CH₃Br > CH₃Cl > CH₃F','CH₃Cl > CH₃Br > CH₃F > CH₃I'], a:0, tag:'NCERT Exception', sol:['Because dipole moment μ = q × d, the significantly longer C−Cl bond distance (178 pm vs 139 pm in C−F) more than compensates for the higher electronegativity of F.','Measured gas-phase values: CH₃Cl (1.860 D) > CH₃F (1.847 D) > CH₃Br (1.830 D) > CH₃I (1.636 D).'] },
    { q:'Why is 1% ethanol added to bottles of chloroform (CHCl₃)?', o:['To retard oxidation to phosgene and convert any phosgene into harmless diethyl carbonate','To act as a positive catalyst for anaesthetic action','To dehydrate moisture present in chloroform','To increase its boiling point and volatility'], a:0, tag:'Practical Trap', sol:['CHCl₃ oxidises in air and light to toxic phosgene: 2 CHCl₃ + O₂ → 2 COCl₂ + 2 HCl.','Ethanol acts as a negative catalyst (inhibitor) and reacts with COCl₂ to form non-toxic diethyl carbonate: COCl₂ + 2 C₂H₅OH → (C₂H₅O)₂CO + 2 HCl.'] },
    { q:'The conversion of ethyl bromide to ethyl fluoride is best accomplished by heating ethyl bromide with:', o:['AgF or Hg₂F₂ (Swarts reaction)','NaF in dry acetone','HF in water','F₂ gas in sunlight'], a:0, tag:'Reagent Trap', sol:['Synthesis of alkyl fluorides is carried out by heating an alkyl chloride/bromide with a heavy metal fluoride such as AgF, Hg₂F₂, CoF₂, or SbF₃ (Swarts reaction).','Direct fluorination with F₂ is violently exothermic, and F⁻ in protic solvents is poorly nucleophilic.'] },
    { q:'Which of the following compounds is optically active (chiral)?', o:['Butan-2-ol','Propan-2-ol','2-Bromo-2-methylpropane','meso-2,3-Dibromobutane'], a:0, tag:'Stereo Trap', sol:['In butan-2-ol, CH₃−C*H(OH)−CH₂CH₃, C-2 is attached to four different groups (−H, −OH, −CH₃, −C₂H₅) and has no symmetry elements.','Propan-2-ol and 2-bromo-2-methylpropane have two/three identical methyl groups; meso-2,3-dibromobutane has a plane of symmetry.'] },
    { q:'Which of the following aryl halides reacts with warm water alone (323 K, without NaOH) to yield the corresponding phenol?', o:['2,4,6-Trinitrochlorobenzene','4-Nitrochlorobenzene','2,4-Dinitrochlorobenzene','3-Nitrochlorobenzene'], a:0, tag:'Reagent Trap', sol:['Three −NO₂ groups at the 2, 4, and 6 (ortho/para) positions strongly stabilise the Meisenheimer intermediate by −M and −I effects.','Therefore 2,4,6-trinitrochlorobenzene (picryl chloride) hydrolyses to picric acid simply on warming with water at 323 K.'] },
    { q:'Reaction of 1-methylcyclohexene with HBr in the absence of peroxide gives A; subsequent treatment of A with alcoholic KOH gives B as major product. A and B are:', o:['1-Bromo-1-methylcyclohexane and 1-methylcyclohexene','1-Bromo-2-methylcyclohexane and 3-methylcyclohexene','1-Bromo-1-methylcyclohexane and methylenecyclohexane','Bromomethylcyclohexane and 1-methylcyclohexene'], a:0, tag:'Concept Trap', sol:['Markovnikov addition of HBr to 1-methylcyclohexene forms the 3° carbocation, yielding 1-bromo-1-methylcyclohexane (A).','E2 elimination of A with unhindered alc. KOH follows Saytzeff\'s rule to give the trisubstituted alkene 1-methylcyclohexene (B) as major product.'] },
    { q:'When chlorobenzene is heated with chloral (CCl₃CHO) in the presence of concentrated H₂SO₄, the product formed is:', o:['DDT','Gammaxene (Lindane)','Freon-12','Hexachlorobenzene'], a:0, tag:'Reagent Trap', sol:['Two molecules of chlorobenzene condense with the carbonyl group of chloral (trichloroacetaldehyde, CCl₃CHO) with elimination of H₂O in presence of conc. H₂SO₄.','This yields p,p\'-dichlorodiphenyltrichloroethane (DDT).'] },
    { q:'Which isomer of dichlorobenzene has the highest melting point and lowest solubility in common organic solvents?', o:['para-Dichlorobenzene','ortho-Dichlorobenzene','meta-Dichlorobenzene','All three have identical melting points'], a:0, tag:'NCERT Exception', sol:['para-Dichlorobenzene is symmetrical and fits into its crystal lattice much more compactly than the ortho or meta isomers.','Stronger intermolecular lattice packing gives para-dichlorobenzene a melting point of 326 K (vs 256 K for ortho and 249 K for meta).'] },
    { q:'Preparation of iodobenzene from benzenediazonium chloride requires:', o:['Simply warming with aqueous KI (no Cu₂I₂ catalyst needed)','Cu₂I₂ / HI (Sandmeyer condition)','NaI in dry acetone (Finkelstein condition)','I₂ in CCl₄ with Ag salt'], a:0, tag:'Reagent Trap', sol:['According to NCERT, replacement of the diazonium group by iodide does not require cuprous halide catalyst.','Simply shaking/warming benzenediazonium chloride with aqueous potassium iodide (KI) yields iodobenzene + N₂ + KCl.'] }
  ],
  gens:[
    function(R){
      var d = R.int(65,95);
      var l = 100 - d;
      var ee = d - l;
      return {
        q:'An optically active sample of 2-bromobutane contains '+d+'% of the (+)-enantiomer and '+l+'% of the (−)-enantiomer. What is the enantiomeric excess (optical purity) of the sample?',
        ans:ee, d:[d, 2*l, (d - l)/2], u:'%',
        tag:'Calculation Trap',
        sol:['Enantiomeric excess (% ee) = |%d − %l| / (%d + %l) × 100.','Here % ee = '+d+'% − '+l+'% = '+ee+'% (+)-enantiomer in excess, while '+(2*l)+'% forms a racemic (±) mixture.']
      };
    },
    function(R){
      var c1 = R.int(2,4);
      var c2 = R.int(2,4);
      var f1 = R.pick([2,3]);
      var f2 = R.pick([2,3]);
      var mult = f1 * f2;
      return {
        q:'In an SN2 reaction (Rate = k[R−X][OH⁻]), if the concentration of R−X is increased '+f1+' times and the concentration of OH⁻ is increased '+f2+' times, the rate of reaction increases by a factor of:',
        ans:mult, d:[f1, f1 + f2, f1 * f1 * f2], u:'times',
        tag:'Calculation Trap',
        sol:['SN2 is 1st order in [R−X] and 1st order in [OH⁻] (overall 2nd order).','New Rate / Old Rate = ('+f1+' × [R−X]) × ('+f2+' × [OH⁻]) / ([R−X][OH⁻]) = '+f1+' × '+f2+' = '+mult+' times.','Note: Had this been an SN1 reaction, the rate would have increased by only '+f1+' times.']
      };
    }
  ]
});

/* ==========================================================================
   UNIT C17: ORGANIC COMPOUNDS CONTAINING OXYGEN
   ========================================================================== */
NEET.reg({
  id:'C17',
  subj:'Organic Chemistry',
  type:'conc',
  name:'Organic Compounds Containing Oxygen',
  syl:'Alcohols, Phenols, and Ethers: Alcohols: Identification of 1°, 2°, 3° alcohols; mechanism of dehydration. Phenols: Acidic nature, electrophilic substitution reactions: halogenation, nitration, and sulphonation. Reimer-Tiemann reaction. Ethers: Structure and cleavage. Aldehydes and Ketones: Nature of carbonyl group; Nucleophilic addition reactions (HCN, NH3 derivatives), Grignard; oxidation; reduction (Wolff-Kishner and Clemmensen); acidity of α-hydrogen, aldol condensation, Cannizzaro, Haloform reaction. Distinguishing tests. Carboxylic Acids: Acidic strength and factors affecting it, HVZ reaction, decarboxylation.',
  kw:['alcohols', 'phenols', 'ethers', 'aldehydes', 'ketones', 'carboxylic acids', 'lucas test', 'reimer tiemann', 'aldol', 'cannizzaro', 'haloform', 'clemmensen', 'hvz'],

  formulas:[
    { n:'Lucas Reagent Alcohol Turbidity Rule', f:'ROH + HCl (conc.)  →[anhyd. ZnCl₂]  RCl (turbidity) + H₂O', u:'Time Rate', s:'3° alcohol: Immediate turbidity (<30 s); 2° alcohol: Turbidity in ~5 min; 1° alcohol: No turbidity at room temperature', b:'Fails if reaction mixture is heated; 1° alcohols will produce turbidity upon prolonged heating.' },
    { n:'Ethanol Temperature-Dependent Dehydration', f:'C₂H₅OH  →[conc. H₂SO₄, 443 K (170 °C)]  CH₂=CH₂  vs  2 C₂H₅OH  →[conc. H₂SO₄, 413 K (140 °C)]  C₂H₅OC₂H₅', u:'Temperature Control', s:'443 K favors E1 elimination to alkene; 413 K with excess alcohol favors S_N2 ether synthesis', b:'If temperature rises above 413 K during ether synthesis, alkene formation takes over.' },
    { n:'Phenol Acidity Equilibrium Constant (pKa)', f:'ArOH + H₂O ⇌ ArO⁻ (phenoxide) + H₃O⁺;   pKa(Phenol) ≈ 10', u:'pKa', s:'Phenoxide is resonance stabilized across ortho/para positions; EWG (−NO₂) decreases pKa (increases acidity)', b:'Alcohols (pKa 16–18) do NOT react with aqueous NaOH; phenols dissolve readily in aqueous NaOH.' },
    { n:'Reimer-Tiemann Formylation of Phenol', f:'C₆H₅OH + CHCl₃ + 3 NaOH  →[340 K]  o-HOC₆H₄CHO (Salicylaldehyde)', u:'Organic Reaction', s:'Electrophile is neutral dichlorocarbene (:CCl₂); ortho isomer is major due to chelation', b:'Using CCl₄ instead of CHCl₃ yields Salicylic acid (o-HOC₆H₄COOH) as the major product.' },
    { n:'Williamson Ether Synthesis Steric Limitation', f:'R–X + R′–O⁻ Na⁺  →  R–O–R′ + NaX  (S_N2 Mechanism)', u:'Synthesis Rule', s:'R–X MUST be primary (1°) or methyl halide for high yield of ether', b:'If R–X is tertiary (3°), elimination occurs exclusively: (CH₃)₃C–Br + C₂H₅O⁻ → 2-methylpropene + C₂H₅OH.' },
    { n:'Cleavage of Asymmetric Ethers with Concentrated HI', f:'R–O–R′ + HI  →  (a) S_N2 at smaller alkyl (if 1°/2°)  or  (b) S_N1 at 3° alkyl to give 3° iodide', u:'Reaction Cleavage', s:'(CH₃)₃C–O–CH₃ + HI → (CH₃)₃C–I + CH₃OH;  Anisole (C₆H₅OCH₃) + HI → C₆H₅OH + CH₃I', b:'Phenyl-Oxygen bond never cleaves because sp² C–O has partial double-bond character from resonance.' },
    { n:'Haloform Reaction Condition for Methyl Carbonyls', f:'R–CO–CH₃ + 3 I₂ + 4 NaOH  →  R–COO⁻ Na⁺ + CHI₃ (yellow ppt) + 3 NaI + 3 H₂O', u:'Test / Yield', s:'Positive for all methyl ketones, acetaldehyde CH₃CHO, ethanol, and secondary methyl alcohols CH₃CH(OH)R', b:'Fails for tertiary alcohols or carboxylic acids/esters where –COCH₃ is attached to –OH or –OR.' }
  ],

  traps:[
    { t:'In Williamson ether synthesis, treating a tertiary alkyl halide with sodium alkoxide yields 100% ALKENE, NOT an ether.', c:'Tertiary alkyl halides undergo rapid E2 elimination with strongly basic alkoxide ions rather than S_N2 substitution.', tag:'Boundary Failure' },
    { t:'Reaction of anisole (methoxybenzene, C₆H₅OCH₃) with concentrated HI yields Phenol and Methyl Iodide, NEVER iodobenzene.', c:'The phenyl C–O bond has partial double-bond character due to resonance and the phenyl sp² carbon cannot undergo S_N2 attack.', tag:'NCERT Exception' },
    { t:'Benzenecarbaldehyde (benzaldehyde) gives a POSITIVE silver mirror test with Tollens reagent, but a NEGATIVE test with Fehling solution.', c:'Fehling solution is a weaker oxidizing agent than Tollens reagent and cannot oxidize aromatic aldehydes.', tag:'NCERT Exception' },
    { t:'Aldol condensation requires at least one α-hydrogen, whereas Cannizzaro reaction requires aldehydes with ZERO α-hydrogens.', c:'Cannizzaro occurs when nucleophilic OH⁻ attacks carbonyl carbon directly because there is no acidic α-proton to remove.', tag:'NCERT Exception' },
    { t:'Ethanol gives a POSITIVE iodoform test, whereas methanol gives a negative test.', c:'Ethanol possesses the CH₃–CH(OH)– group which is oxidized in situ by I₂/NaOH to acetaldehyde (CH₃CHO), a methyl carbonyl.', tag:'NCERT Exception' },
    { t:'Formic acid (HCOOH) is the only carboxylic acid that REDUCES Tollens reagent and Fehling solution.', c:'The structure of formic acid contains both a carboxylic acid group (−COOH) and an aldehyde group (−CHO).', tag:'NCERT Exception' },
    { t:'Clemmensen reduction (Zn-Hg / conc. HCl) CANNOT be used on molecules containing acid-sensitive functional groups (e.g. acetals, –OH), while Wolff-Kishner reduction CANNOT be used on base-sensitive groups (e.g. halides, esters).', c:'Clemmensen operates under strongly acidic conditions; Wolff-Kishner operates under strongly alkaline conditions (KOH in ethylene glycol).', tag:'Boundary Failure' },
    { t:'In the Reimer-Tiemann reaction, the active electrophile attacking the phenoxide ring is NEUTRAL dichlorocarbene (:CCl₂), NOT a carbocation.', c:'Base removes proton from CHCl₃ followed by loss of Cl⁻ to yield neutral :CCl₂ possessing an empty p-orbital.', tag:'Concept Trap' }
  ],

  flows:[
    { t:'Carbonyl Distinction: Aldehyde vs Ketone vs Methyl Carbonyl', root:'Test Unknown Carbonyl Compound (>C=O)',
      br:[
        { l:'Tollens Reagent (Ammoniacal AgNO₃)', n:['Silver mirror formed: ALDEHYDE (Aliphatic or Aromatic)','No mirror: KETONE'] },
        { l:'Fehling Solution (Alkaline Cu²⁺ tartrate)', n:['Red Cu₂O ppt: ALIPHATIC ALDEHYDE','No ppt: Aromatic Aldehyde or Ketone'] },
        { l:'Iodoform Test (I₂ + aq. NaOH)', n:['Yellow crystalline CHI₃ ppt (mp 119 °C): CH₃–CO– or CH₃–CH(OH)– group','No yellow ppt: Lacks terminal methyl carbonyl'] }
      ]
    },
    { t:'Phenol Electrophilic Synthesis Pathways', root:'Phenol (C₆H₅OH) as Versatile Substrate',
      br:[
        { l:'Reimer-Tiemann Formylation', n:['CHCl₃ + aq. NaOH at 340 K','Intermediate: Dichlorocarbene (:CCl₂)','Product: Salicylaldehyde (o-hydroxybenzaldehyde)'] },
        { l:'Kolbe Carboxylation', n:['NaOH + CO₂ (4–7 atm, 400 K)','Acidify with dilute HCl','Product: Salicylic Acid (o-hydroxybenzoic acid)'] },
        { l:'Bromine Water Halogenation', n:['Br₂ in polar H₂O at room temperature','Triple substitution','Product: 2,4,6-Tribromophenol (white ppt)'] }
      ]
    },
    { t:'Carboxylic Acid Acidity Variation Hierarchy', chain:['Trifluoroacetic acid (CF₃COOH, pKa = 0.23)','Trichloroacetic acid (CCl₃COOH, pKa = 0.65)','Formic acid (HCOOH, pKa = 3.75)','Benzoic acid (C₆H₅COOH, pKa = 4.20)','Acetic acid (CH₃COOH, pKa = 4.76)'] }
  ],

  lab:[
    { t:'Lucas Test for Alcohol Classification (1°, 2°, 3°)', d:'Add Lucas reagent (conc. HCl + anhydrous ZnCl₂) to alcohol at room temp: 3° alcohol produces immediate oily cloudiness / turbidity (insoluble alkyl chloride); 2° alcohol produces turbidity in 5 minutes; 1° alcohol remains clear at room temp.' },
    { t:'Neutral Ferric Chloride Test for Phenols', d:'Add neutral FeCl₃ solution to aqueous phenol solution → formation of characteristic intense violet/purple colouration due to [Fe(OC₆H₅)₆]³⁻ complex. Alcohols give negative test.' },
    { t:'2,4-Dinitrophenylhydrazine (2,4-DNP / Brady Test)', d:'Add 2,4-DNP reagent to carbonyl compound in ethanol/acid medium → instantaneous yellow, orange, or scarlet crystalline precipitate of 2,4-dinitrophenylhydrazone confirms aldehyde or ketone.' },
    { t:'Sodium Bicarbonate Effervescence Test for Acids', d:'Add saturated NaHCO₃ solution to carboxylic acid → vigorous brisk effervescence of colourless, odourless CO₂ gas that turns lime water milky. Phenols (except picric acid) do NOT decompose NaHCO₃.' }
  ],

  pairs:[
    { g:'Oxygen Functional Group Test → Positive Characteristic Observation', a:'Lucas Test on Tertiary (3°) Alcohol', b:'Immediate cloudiness / turbidity within 30 seconds' },
    { g:'Oxygen Functional Group Test → Positive Characteristic Observation', a:'Neutral FeCl₃ on Phenol', b:'Intense violet / purple colouration' },
    { g:'Oxygen Functional Group Test → Positive Characteristic Observation', a:'Tollens Reagent on Acetaldehyde or Benzaldehyde', b:'Bright metallic silver mirror on inner test tube walls' },
    { g:'Oxygen Functional Group Test → Positive Characteristic Observation', a:'Iodoform Test (I₂/NaOH) on Acetone or Ethanol', b:'Yellow crystalline precipitate of CHI₃ with characteristic antiseptic odor' },

    { g:'Named Carbonyl Reaction → Characteristic Reagent & Condition', a:'Clemmensen Reduction', b:'Zinc amalgam and concentrated Hydrochloric acid (Zn-Hg / conc. HCl)' },
    { g:'Named Carbonyl Reaction → Characteristic Reagent & Condition', a:'Wolff-Kishner Reduction', b:'Hydrazine followed by heating with KOH in ethylene glycol' },
    { g:'Named Carbonyl Reaction → Characteristic Reagent & Condition', a:'Cannizzaro Reaction', b:'50% concentrated aqueous or alcoholic NaOH (no α-hydrogen substrate)' },
    { g:'Named Carbonyl Reaction → Characteristic Reagent & Condition', a:'Hell-Volhard-Zelinsky (HVZ) Reaction', b:'Halogen (Br₂ or Cl₂) in the presence of red phosphorus' },

    { g:'Ether Cleavage Substrate with Excess Concentrated HI → Product(s)', a:'Methoxybenzene (Anisole, C₆H₅OCH₃)', b:'Phenol (C₆H₅OH) and Methyl Iodide (CH₃I)' },
    { g:'Ether Cleavage Substrate with Excess Concentrated HI → Product(s)', a:'tert-Butyl Methyl Ether ((CH₃)₃C–O–CH₃)', b:'tert-Butyl Iodide ((CH₃)₃C–I) and Methanol (CH₃OH)' },
    { g:'Ether Cleavage Substrate with Excess Concentrated HI → Product(s)', a:'Diethyl Ether (C₂H₅–O–C₂H₅)', b:'Ethyl Iodide (C₂H₅I) and Ethanol (or 2 moles C₂H₅I if excess HI)' },
    { g:'Ether Cleavage Substrate with Excess Concentrated HI → Product(s)', a:'Diphenyl Ether (C₆H₅–O–C₆H₅)', b:'No cleavage under mild conditions (both phenyl-O bonds resist cleavage)' },

    { g:'Alcohol Oxidation Substrate & Reagent → Characteristic Reaction Product', a:'Primary (1°) Alcohol + PCC in anhydrous CH₂Cl₂', b:'Aldehyde (stops cleanly without further oxidation)' },
    { g:'Alcohol Oxidation Substrate & Reagent → Characteristic Reaction Product', a:'Primary (1°) Alcohol + acidified KMnO₄ / heat', b:'Carboxylic acid with same number of carbon atoms' },
    { g:'Alcohol Oxidation Substrate & Reagent → Characteristic Reaction Product', a:'Secondary (2°) Alcohol + heated Cu tube at 573 K', b:'Ketone (dehydrogenation product)' },
    { g:'Alcohol Oxidation Substrate & Reagent → Characteristic Reaction Product', a:'Tertiary (3°) Alcohol + heated Cu tube at 573 K', b:'Alkene (dehydration product e.g. 2-methylpropene)' },

    { g:'Alcohol Dehydration Substrate → Major Alkene Product', a:'Ethanol (at 443 K with conc. H₂SO₄)', b:'Ethene (CH₂=CH₂)' },
    { g:'Alcohol Dehydration Substrate → Major Alkene Product', a:'Butan-2-ol (acid dehydration)', b:'But-2-ene (Saytzeff major product)' },
    { g:'Alcohol Dehydration Substrate → Major Alkene Product', a:'2-Methylpropan-2-ol (3° alcohol)', b:'2-Methylpropene (Isobutylene)' },
    { g:'Alcohol Dehydration Substrate → Major Alkene Product', a:'Ethanol (at 413 K with excess alcohol)', b:'Diethyl ether (etherification, not alkene)' }
  ],

  orders:[
    { q:'Arrange the following alcohols in increasing order of their reactivity towards Lucas reagent (conc. HCl + anhyd. ZnCl₂)', s:['Methanol (Primary)', 'Ethanol (Primary)', 'Propan-2-ol (Secondary)', '2-Methylpropan-2-ol (Tertiary)'], sep:'<' },
    { q:'Arrange the following compounds in increasing order of their boiling points', s:['n-Butane (Aliphatic alkane, 272.5 K)', 'Ethoxyethane (Diethyl ether, 307.6 K)', 'Pentanal (Aldehyde, 376 K)', 'Pentan-1-ol (Alcohol with H-bonding, 411 K)'], sep:'<' },
    { q:'Arrange the following carbonyl compounds in decreasing order of reactivity towards nucleophilic addition (e.g. with HCN)', s:['Formaldehyde (HCHO)', 'Acetaldehyde (CH₃CHO)', 'Acetone (CH₃COCH₃)', 'Acetophenone (C₆H₅COCH₃)', 'Benzophenone ((C₆H₅)₂CO)'], sep:'>' },
    { q:'Arrange the following carboxylic acids in decreasing order of acidic strength (pKa order)', s:['Trifluoroacetic acid (pKa = 0.23)', 'Trichloroacetic acid (pKa = 0.65)', 'Formic acid (pKa = 3.75)', 'Benzoic acid (pKa = 4.20)', 'Acetic acid (pKa = 4.76)'], sep:'>' },
    { q:'Arrange the following substituted phenols in increasing order of acidity', s:['p-Cresol (p-Methylphenol)', 'Phenol', 'o-Nitrophenol', 'p-Nitrophenol', '2,4,6-Trinitrophenol (Picric acid)'], sep:'<' }
  ],

  facts:{
    T:[
      'Phenol is more acidic than ethanol because the negative charge on the phenoxide ion is resonance-delocalized over the aromatic ring.',
      'Benzaldehyde gives a positive silver mirror test with Tollens reagent but does not reduce Fehling solution.',
      'In the Williamson synthesis of ethers, treating a tertiary alkyl halide with sodium alkoxide yields an alkene via E2 elimination rather than an ether.',
      'Formic acid reduces Tollens reagent and Fehling solution because its structure contains an oxidizable aldehyde group.',
      'Tertiary alcohols undergo dehydration readily with dilute acid, whereas primary alcohols require heating with concentrated H₂SO₄ at 443 K.',
      'Iodoform test gives a positive yellow precipitate of CHI₃ with all compounds containing the CH₃–CO– or CH₃–CH(OH)– unit.',
      'Picric acid (2,4,6-trinitrophenol) is a stronger acid than acetic acid and readily decomposes sodium bicarbonate with brisk effervescence of CO₂.',
      'Clemmensen reduction converts carbonyl groups into methylene (–CH₂–) units using zinc amalgam and concentrated hydrochloric acid.',
      'Cannizzaro reaction is a redox disproportionation reaction exhibited by aldehydes that lack α-hydrogen atoms.',
      'Hydroboration-oxidation of propene yields propan-1-ol, giving an anti-Markovnikov hydration product with syn-stereochemistry.',
      'Anisole reacts with concentrated HI to yield phenol and methyl iodide.',
      'PCC (Pyridinium chlorochromate) oxidizes primary alcohols to aldehydes and stops without further oxidation to carboxylic acids.'
    ],
    F:[
      'Methanol gives a positive yellow precipitate in the iodoform test.',
      'Tertiary alcohols react with Lucas reagent to produce turbidity only upon heating for 10 minutes.',
      'Treating sodium phenoxide with methyl iodide gives iodobenzene and methanol.',
      'Acetone reduces Tollens reagent to form a shiny silver mirror.',
      'Ethanol is more acidic than water and phenol.',
      'Phenol dissolves in aqueous sodium bicarbonate with vigorous evolution of carbon dioxide gas.',
      'In the Reimer-Tiemann reaction, the active electrophile attacking the benzene ring is the trichloromethyl carbocation (+CCl₃).',
      'The reaction of tert-butyl bromide with sodium ethoxide produces tert-butyl ethyl ether as the major product.',
      'Formaldehyde undergoes aldol condensation in the presence of dilute aqueous NaOH.',
      'Clemmensen reduction is ideal for converting carbonyl compounds containing acid-labile alcohol groups into alkanes.',
      'Benzoic acid is a weaker acid than acetic acid in aqueous solution.',
      'Fehling solution is reduced by both aliphatic and aromatic aldehydes to form red Cu₂O.'
    ]
  },

  mcq:[
    {
      q:'When tert-butyl methyl ether is heated with excess concentrated hydriodic acid (HI), the major products formed are:',
      o:['tert-Butyl iodide and Methanol', 'tert-Butyl alcohol and Methyl iodide', '2-Methylpropene and Methyl iodide', 'tert-Butyl iodide and Methyl iodide'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Protonation of the ether yields (CH₃)₃C–O⁺(H)–CH₃.',
        'Because the tert-butyl group forms an exceptionally stable 3° carbocation, cleavage proceeds via S_N1 mechanism.',
        'The tert-butyl carbocation captures I⁻ to form tert-butyl iodide ((CH₃)₃C–I) while leaving behind methanol (CH₃OH).'
      ]
    },
    {
      q:'Which of the following compounds will give a positive iodoform test upon treatment with I₂ and aqueous NaOH?',
      o:['Pentan-2-one', 'Pentan-3-one', 'Benzophenone', '3-Methylbutan-1-ol'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'The iodoform test is specific for compounds containing a methyl carbonyl group (CH₃–CO–) or a methyl carbinol group (CH₃–CH(OH)–).',
        'Pentan-2-one has the CH₃–CO–CH₂CH₂CH₃ structure (methyl ketone) and gives a positive test.',
        'Pentan-3-one is a symmetrical ketone (CH₃CH₂COCH₂CH₃) without a methyl carbonyl.'
      ]
    },
    {
      q:'The major product obtained when phenol is treated with chloroform and aqueous sodium hydroxide at 340 K followed by acidification is:',
      o:['Salicylaldehyde (o-hydroxybenzaldehyde)', 'Salicylic acid', 'p-Chlorophenol', 'Benzoic acid'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'This is the Reimer-Tiemann reaction.',
        'Phenol reacts with CHCl₃ and NaOH to generate dichlorocarbene (:CCl₂), which attacks the ortho position to yield salicylaldehyde after hydrolysis.'
      ]
    },
    {
      q:'Which of the following aldehydes undergoes Cannizzaro reaction when heated with concentrated 50% aqueous sodium hydroxide?',
      o:['Trimethylacetaldehyde ((CH₃)₃C–CHO)', 'Acetaldehyde (CH₃CHO)', 'Propionaldehyde (CH₃CH₂CHO)', '2-Methylbutanal'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Cannizzaro reaction requires aldehydes that possess ZERO α-hydrogen atoms.',
        'Trimethylacetaldehyde (pivaldehyde) has a quaternary α-carbon with no hydrogens attached, so it cleanly undergoes Cannizzaro disproportionation.'
      ]
    },
    {
      q:'The correct order of increasing acid strength of the following carboxylic acids is:',
      o:['CH₃COOH < HCOOH < C₆H₅COOH < CF₃COOH', 'CH₃COOH < C₆H₅COOH < HCOOH < CF₃COOH', 'HCOOH < CH₃COOH < C₆H₅COOH < CF₃COOH', 'CF₃COOH < HCOOH < C₆H₅COOH < CH₃COOH'],
      a:1,
      tag:'Concept Trap',
      sol:[
        'Acetic acid (pKa 4.76) < Benzoic acid (pKa 4.20) < Formic acid (pKa 3.75) < Trifluoroacetic acid (pKa 0.23).',
        'Formic acid is stronger than benzoic acid due to lack of electron-donating alkyl groups and absence of resonance donation from phenyl.'
      ]
    },
    {
      q:'What is the active electrophile involved in the Reimer-Tiemann reaction of phenol?',
      o:[':CCl₂ (Dichlorocarbene)', '⁺CCl₃ (Trichloromethyl cation)', '⁻CCl₃ (Trichloromethyl carbanion)', 'Cl⁺ (Chloronium ion)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'OH⁻ abstracts a proton from CHCl₃ to form :CCl₃⁻, which rapidly loses Cl⁻ to generate neutral dichlorocarbene (:CCl₂).',
        'It has an electron sextet and an empty p-orbital, acting as the attacking electrophile.'
      ]
    },
    {
      q:'An organic compound (A) with molecular formula C₃H₈O gives a turbid solution within 5 minutes when treated with Lucas reagent. When vaporized over heated Cu at 573 K, it forms an organic product (B) that gives a positive 2,4-DNP test but negative Tollens test. Compound (A) is:',
      o:['Propan-2-ol', 'Propan-1-ol', '2-Methylpropan-2-ol', 'Methoxyethane'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Turbidity in 5 minutes with Lucas reagent characterizes a secondary (2°) alcohol.',
        'Propan-2-ol is a 2° alcohol. Dehydrogenation over heated Cu gives acetone (CH₃COCH₃).',
        'Acetone gives a positive 2,4-DNP test (ketone) but does not reduce Tollens reagent.'
      ]
    },
    {
      q:'In the preparation of diethyl ether by Williamson synthesis, which set of reactants should be chosen to maximize yield?',
      o:['Sodium ethoxide + Ethyl bromide', 'Sodium tert-butoxide + Ethyl bromide', 'Sodium methoxide + 2-Bromopropane', 'Sodium phenoxide + Bromobenzene'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Williamson synthesis requires S_N2 attack by an alkoxide on a primary unhindered alkyl halide.',
        'Sodium ethoxide (C₂H₅O⁻Na⁺) + Ethyl bromide (C₂H₅Br) gives pure diethyl ether without competitive elimination.'
      ]
    },
    {
      q:'Which of the following reagents is the most suitable for converting butan-1-ol into butanal without over-oxidation to butanoic acid?',
      o:['PCC (Pyridinium chlorochromate) in CH₂Cl₂', 'Acidified KMnO₄', 'Alkaline K₂Cr₂O₇', 'Fuming HNO₃'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'PCC (Corey reagent) is a mild, selective oxidant in anhydrous dichloromethane that oxidizes primary alcohols cleanly to aldehydes without water to form the hydrate required for further oxidation.'
      ]
    },
    {
      q:'When salicylic acid is heated with zinc dust, the product formed is:',
      o:['Benzoic acid', 'Phenol', 'Benzene', 'Salicylaldehyde'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Distillation of phenols with zinc dust reduces the phenolic –OH group to a C–H bond: C₆H₄(OH)COOH + Zn → C₆H₅COOH + ZnO.',
        'The carboxylic acid group remains unaffected, yielding benzoic acid.'
      ]
    },
    {
      q:'The Hell-Volhard-Zelinsky (HVZ) reaction is used to prepare:',
      o:['α-Halocarboxylic acids', 'β-Halocarboxylic acids', 'Acid halides', 'Aliphatic amides'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Carboxylic acids containing α-hydrogen atoms react with Cl₂ or Br₂ in the presence of a catalytic amount of red phosphorus to give exclusively α-halocarboxylic acids.'
      ]
    },
    {
      q:'Which of the following compounds will NOT undergo aldol condensation?',
      o:['Benzaldehyde (C₆H₅CHO)', 'Ethanal (CH₃CHO)', 'Propanal (CH₃CH₂CHO)', 'Propan-2-one (Acetone)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Aldol condensation requires at least one α-hydrogen atom.',
        'In benzaldehyde, the –CHO carbon is attached directly to the aromatic ring carbon with no hydrogens (zero α-hydrogens), so it cannot undergo self-aldol condensation.'
      ]
    },
    {
      q:'A ketone (A) on Clemmensen reduction yields n-butane. Compound (A) is:',
      o:['Butan-2-one', 'Butanal', 'Propanone', 'Cyclobutanone'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Clemmensen reduction converts >C=O directly into –CH₂– without altering the carbon chain.',
        'For a ketone that yields n-butane (CH₃CH₂CH₂CH₃), the carbonyl must be at C2: CH₃–CO–CH₂CH₃ (butan-2-one).'
      ]
    },
    {
      q:'When phenol is treated with excess bromine water, a white precipitate is formed immediately. The precipitate is:',
      o:['2,4,6-Tribromophenol', 'o-Bromophenol', 'p-Bromophenol', '2,4-Dibromophenol'],
      a:0,
      tag:'Practical Trap',
      sol:[
        'In polar aqueous medium, phenol ionizes into phenoxide ion, which activates the ring immensely.',
        'Electrophilic bromination occurs instantaneously at all activated ortho and para positions, precipitating 2,4,6-tribromophenol as a white solid.'
      ]
    }
  ],

  gens:[
    function(R){
      var vAlcohol = R.pick([23, 46, 92]); // grams of ethanol
      var m = vAlcohol / 46;
      var etherMass = m * 0.5 * 74;
      var d1 = m * 74;
      var d2 = m * 28;
      var d3 = etherMass * 0.5;
      return {
        q:'If ' + vAlcohol + ' g of pure ethanol (molar mass 46 g mol⁻¹) is heated at 413 K with concentrated H₂SO₄ to produce diethyl ether (molar mass 74 g mol⁻¹) with 100% yield, what is the theoretical mass of diethyl ether obtained?',
        ans:etherMass, d:[d1, d2, d3], u:'g',
        tag:'Calculation Trap',
        sol:[
          'Stoichiometry: 2 C₂H₅OH → C₂H₅–O–C₂H₅ + H₂O.',
          'Moles of ethanol = ' + vAlcohol + ' / 46 = ' + m + ' mol.',
          'Theoretical moles of diethyl ether = ' + m + ' / 2 = ' + (m / 2) + ' mol.',
          'Mass of diethyl ether = ' + (m / 2) + ' mol × 74 g mol⁻¹ = ' + R.f(etherMass) + ' g.'
        ]
      };
    },
    function(R){
      var nAlphaH = R.pick([1, 2, 3]);
      var names = {
        1:'2-Methylpropanal ((CH₃)₂CH–CHO)',
        2:'Propanal (CH₃CH₂–CHO)',
        3:'Acetaldehyde (CH₃CHO)'
      };
      var d = [0, 1, 2, 3].filter(function(x){ return x !== nAlphaH; });
      return {
        q:'How many α-hydrogen atoms are present in a molecule of ' + names[nAlphaH] + ' available to participate in aldol condensation?',
        ans:nAlphaH, d:d, u:'α-hydrogen(s)',
        tag:'Concept Trap',
        sol:[
          'α-Hydrogens are the hydrogen atoms attached to the carbon directly adjacent to the –CHO carbonyl group.',
          'In ' + names[nAlphaH] + ', there are exactly ' + nAlphaH + ' α-hydrogen(s).'
        ]
      };
    }
  ]
});

/* ==========================================================================
   UNIT C18: ORGANIC COMPOUNDS CONTAINING NITROGEN
   ========================================================================== */
NEET.reg({
  id:'C18',
  subj:'Organic Chemistry',
  type:'conc',
  name:'Organic Compounds Containing Nitrogen',
  syl:'General methods of preparation, properties, reactions, and uses. Amines: Nomenclature, classification structure, basic character, and identification of primary, secondary, and tertiary amines. Diazonium Salts: Importance in synthetic organic chemistry.',
  kw:['amines', 'diazonium salts', 'hinsberg reagent', 'carbylamine test', 'gabriel phthalimide', 'hoffmann bromamide', 'basicity of amines', 'azo coupling', 'sandmeyer reaction', 'aniline'],

  formulas:[
    { n:'Aliphatic Amine Aqueous Basicity Order (Methyl Series)', f:'(CH₃)₂NH (2°)  >  CH₃NH₂ (1°)  >  (CH₃)₃N (3°)  >  NH₃   [Order: 213]', u:'Basicity Order', s:'Governed by combined effect of +I inductive effect, steric crowding, and hydration enthalpy of ammonium cations', b:'In the gas phase where hydration is absent, basicity follows strictly inductive order: 3° > 2° > 1° > NH₃.' },
    { n:'Aliphatic Amine Aqueous Basicity Order (Ethyl Series)', f:'(C₂H₅)₂NH (2°)  >  (C₂H₅)₃N (3°)  >  C₂H₅NH₂ (1°)  >  NH₃   [Order: 231]', u:'Basicity Order', s:'Larger ethyl groups provide greater inductive stabilization to 3° cation before steric crowding dominates', b:'In non-polar solvents (e.g. benzene, chlorobenzene), the basicity order resembles the gas-phase order.' },
    { n:'Gabriel Phthalimide 1° Amine Synthesis', f:'C₆H₄(CO)₂NH  →[KOH]  Phthalimide-K⁺  →[R–X]  N-Alkylphthalimide  →[aq. NaOH]  R–NH₂ (1° pure)', u:'Synthesis Reaction', s:'Yields pure primary aliphatic amines completely free from 2° and 3° amine impurities', b:'FAILS completely for preparing aromatic primary amines (e.g. aniline) because aryl halides do not undergo nucleophilic substitution.' },
    { n:'Hoffmann Bromamide Degradation Degradation Rule', f:'R–CONH₂ + Br₂ + 4 NaOH  →  R–NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O', u:'Degradation Reaction', s:'Yields a 1° amine containing exactly ONE LESS carbon atom than the starting primary amide', b:'Fails for secondary and tertiary amides; intermediate is alkyl isocyanate (R–N=C=O).' },
    { n:'Hinsberg Distinction for Amines (C₆H₅SO₂Cl)', f:'1°: Soluble in aq. NaOH;  2°: Insoluble in aq. NaOH;  3°: Does not react', u:'Chemical Test', s:'1° sulphonamide has an acidic N–H proton; 2° sulphonamide lacks acidic proton; 3° lacks N–H', b:'Tertiary amines with trace moisture may slowly form soluble quaternary ammonium salts.' },
    { n:'Carbylamine Test for Primary Amines', f:'R–NH₂ + CHCl₃ + 3 KOH (alc.)  →[heat]  R–NC (Isocyanide) + 3 KCl + 3 H₂O', u:'Diagnostic Test', s:'Extremely foul-smelling isocyanide produced by all primary (1°) aliphatic and aromatic amines', b:'Negative for secondary and tertiary amines; isocyanide smell must be destroyed with concentrated HCl.' },
    { n:'Diazotization of Primary Aromatic Amines', f:'Ar–NH₂ + NaNO₂ + 2 HCl  →[273–278 K (0–5 °C)]  Ar–N₂⁺ Cl⁻ + NaCl + 2 H₂O', u:'Diazotization', s:'Must be performed strictly between 0 °C and 5 °C; forms resonance-stabilized arenediazonium salt', b:'Above 5 °C (278 K), benzenediazonium chloride hydrolyses rapidly into phenol with evolution of N₂ gas.' }
  ],

  traps:[
    { t:'Aniline is a MUCH WEAKER base than ammonia (pKb ≈ 9.4 for aniline vs pKb ≈ 4.75 for NH₃).', c:'The lone pair of electrons on nitrogen in aniline is delocalized into the benzene ring by resonance (+M), making it less available for protonation.', tag:'NCERT Exception' },
    { t:'Direct nitration of aniline with concentrated HNO₃ and H₂SO₄ yields a massive 47% of the META-nitroaniline isomer alongside 51% para.', c:'In strongly acidic nitrating medium, aniline is protonated into the anilinium ion (−NH₃⁺), which is strongly deactivating and meta-directing.', tag:'NCERT Exception' },
    { t:'Aniline DOES NOT undergo Friedel-Crafts alkylation or acylation reactions.', c:'The Lewis acid catalyst (anhydrous AlCl₃) acts as an electron acceptor and coordinates with the basic –NH₂ lone pair, creating a strongly deactivating positive complex on the ring.', tag:'NCERT Exception' },
    { t:'Gabriel phthalimide synthesis CANNOT be used to prepare aromatic primary amines like aniline.', c:'Aryl halides do not undergo nucleophilic substitution (S_N2) with the nucleophilic phthalimide anion due to partial double-bond character of C–X.', tag:'Boundary Failure' },
    { t:'In the aqueous phase, basicity of methyl-substituted amines follows the order 2° > 1° > 3° > NH₃ (213), NOT the gas-phase order 3° > 2° > 1° > NH₃.', c:'Hydration of the conjugate ammonium cation by water hydrogen bonds strongly stabilizes 1° and 2° cations, compensating for lower inductive effect.', tag:'NCERT Exception' },
    { t:'Reaction of primary aliphatic amines with nitrous acid (HNO₂) evolves Nitrogen gas quantitatively, but does NOT yield stable diazonium salts.', c:'Aliphatic diazonium salts (R–N₂⁺) are extremely unstable and decompose spontaneously into carbocations, yielding alcohols, alkenes, and alkyl halides.', tag:'NCERT Exception' },
    { t:'Azo coupling of benzenediazonium chloride with phenol requires a FAINTLY ALKALINE medium (pH 9–10), whereas coupling with aniline requires a FAINTLY ACIDIC medium (pH 4–5).', c:'Alkaline medium converts phenol into the more nucleophilic phenoxide ion (C₆H₅O⁻); acidic medium prevents diazonium decomposition while leaving aniline predominantly in unprotonated reactive form.', tag:'NCERT Exception' },
    { t:'In Hoffmann bromamide degradation, the resulting 1° amine contains ONE FEWER carbon atom than the precursor amide.', c:'The carbonyl carbon is eliminated as carbonate ion (CO₃²⁻) during the intramolecular rearrangement of the isocyanate intermediate.', tag:'Calculation Trap' }
  ],

  flows:[
    { t:'Hinsberg Amine Separation and Identification Scheme', root:'Treat Unknown Amine with Benzenesulphonyl Chloride (C₆H₅SO₂Cl) + KOH',
      br:[
        { l:'Primary (1°) Amine', n:['Forms N-alkylbenzenesulphonamide','Contains acidic H on Nitrogen','Completely DISSOLVES in aqueous NaOH','Reprecipitates on acidification'] },
        { l:'Secondary (2°) Amine', n:['Forms N,N-dialkylbenzenesulphonamide','Lacks acidic H on Nitrogen','Remains completely INSOLUBLE in aqueous NaOH','Filtered off as insoluble solid'] },
        { l:'Tertiary (3°) Amine', n:['Has no replaceable H on Nitrogen','Does not react with Hinsberg reagent','Remains insoluble unreacted liquid'] }
      ]
    },
    { t:'Aniline Ring Protection for Mono-Halogenation', chain:['Aniline treated with Acetic Anhydride in Pyridine','Acetylation forms Acetanilide (Amide group NHCOCH₃)','Delocalization of N lone pair into carbonyl reduces ring activation','Brominate with Br₂ in acetic acid → yields mono-p-bromoacetanilide exclusively','Acid/base hydrolysis removes acetyl group → yields pure p-bromoaniline'] },
    { t:'Synthetic Versatility of Benzenediazonium Chloride (C₆H₅N₂⁺Cl⁻)', root:'C₆H₅N₂⁺Cl⁻ as Synthetic Pivot (from Aniline at 0–5 °C)',
      br:[
        { l:'Sandmeyer Reactions (CuX / HX)', n:['CuCl/HCl → Chlorobenzene (C₆H₅Cl)','CuBr/HBr → Bromobenzene (C₆H₅Br)','CuCN/KCN → Benzonitrile (C₆H₅CN)'] },
        { l:'Direct Halide Replacements', n:['KI / heat → Iodobenzene (C₆H₅I)','HBF₄ / heat (Balz-Schiemann) → Fluorobenzene (C₆H₅F)'] },
        { l:'Deamination / Hydrolysis', n:['H₃PO₂ or C₂H₅OH → Benzene (C₆H₆)','Warm H₂O (283 K) → Phenol (C₆H₅OH)'] }
      ]
    }
  ],

  lab:[
    { t:'Carbylamine Test for Primary Amines (Foul Odour)', d:'Heat suspected 1° amine with chloroform (CHCl₃) and alcoholic KOH in a fume hood → intensely nauseating, foul odor of carbylamine (isocyanide) confirms primary aliphatic or aromatic amine. 2° and 3° amines give negative test.' },
    { t:'Azo Dye Test for Primary Aromatic Amines', d:'Dissolve aromatic amine in dilute HCl, cool to 0–5 °C in an ice bath, add cold aqueous NaNO₂. Pour this diazonium solution into ice-cold alkaline solution of β-naphthol (2-naphthol in NaOH) → instantaneous formation of brilliant scarlet-red precipitate of 1-(phenylazo)-2-naphthol confirms primary aromatic amine.' },
    { t:'Nitrous Acid Test (Effervescence of N₂)', d:'Add cold NaNO₂ and dilute HCl to an aliphatic 1° amine solution at room temperature → brisk effervescence of colourless, odourless Nitrogen gas (N₂) confirms primary aliphatic amine (used in Van Slyke amino acid estimation).' },
    { t:'Aniline Reaction with Bromine Water (White Precipitate)', d:'Add bromine water dropwise to aqueous aniline solution → instantaneous decolorization of bromine and separation of a dense white precipitate of 2,4,6-tribromoaniline (mp 119 °C).' }
  ],

  pairs:[
    { g:'Amine Diagnostic Test → Characteristic Observation', a:'Carbylamine Test (CHCl₃ + alc. KOH / heat)', b:'Extremely foul-smelling, nauseating isocyanide (R–NC) vapour' },
    { g:'Amine Diagnostic Test → Characteristic Observation', a:'Azo Dye Test (Diazotization at 0–5 °C + alkaline β-naphthol)', b:'Brilliant scarlet-red precipitate of azo dye' },
    { g:'Amine Diagnostic Test → Characteristic Observation', a:'Bromine Water test on Aniline', b:'Instantaneous dense white precipitate of 2,4,6-tribromoaniline' },
    { g:'Amine Diagnostic Test → Characteristic Observation', a:'Aliphatic 1° Amine with Nitrous acid (HNO₂)', b:'Brisk effervescence of Nitrogen gas (N₂) and alcohol formation' },

    { g:'Hinsberg Test Behaviour → Amine Classification', a:'Sulphonamide product dissolves completely in aqueous NaOH', b:'Primary (1°) Amine' },
    { g:'Hinsberg Test Behaviour → Amine Classification', a:'Sulphonamide product is insoluble in aqueous NaOH', b:'Secondary (2°) Amine' },
    { g:'Hinsberg Test Behaviour → Amine Classification', a:'Does not react with Hinsberg reagent (remains unreacted)', b:'Tertiary (3°) Amine' },
    { g:'Hinsberg Test Behaviour → Amine Classification', a:'Forms water-soluble quaternary salt without base cleavage', b:'Quaternary Ammonium Salt' },

    { g:'Named Nitrogen Synthesis / Degradation Reaction → Transformation Feature', a:'Gabriel Phthalimide Synthesis', b:'Prepares primary (1°) aliphatic amines exclusively; fails for aromatic amines' },
    { g:'Named Nitrogen Synthesis / Degradation Reaction → Transformation Feature', a:'Hoffmann Bromamide Degradation', b:'Converts 1° amide to 1° amine containing ONE FEWER carbon atom' },
    { g:'Named Nitrogen Synthesis / Degradation Reaction → Transformation Feature', a:'Reduction of Alkyl Nitriles with LiAlH₄', b:'Yields primary amine with SAME number of carbon atoms' },
    { g:'Named Nitrogen Synthesis / Degradation Reaction → Transformation Feature', a:'Mendius Reaction (reduction of cyanides by Na / ethanol)', b:'Yields primary amine with retention of carbon skeleton' },

    { g:'Benzenediazonium Chloride (C₆H₅N₂⁺Cl⁻) Reagent → Product', a:'CuCl / HCl (Sandmeyer reaction)', b:'Chlorobenzene' },
    { g:'Benzenediazonium Chloride (C₆H₅N₂⁺Cl⁻) Reagent → Product', a:'CuBr / HBr (Sandmeyer reaction)', b:'Bromobenzene' },
    { g:'Benzenediazonium Chloride (C₆H₅N₂⁺Cl⁻) Reagent → Product', a:'KI solution / warm', b:'Iodobenzene' },
    { g:'Benzenediazonium Chloride (C₆H₅N₂⁺Cl⁻) Reagent → Product', a:'Fluoroboric acid (HBF₄) followed by heat (Balz-Schiemann)', b:'Fluorobenzene' },

    { g:'Azo Coupling Substrate → Colour of Azo Dye Formed', a:'Phenol in mildly alkaline medium (pH 9–10)', b:'p-Hydroxyazobenzene (Orange dye)' },
    { g:'Azo Coupling Substrate → Colour of Azo Dye Formed', a:'Aniline in mildly acidic medium (pH 4–5)', b:'p-Aminoazobenzene (Yellow dye / Aniline yellow)' },
    { g:'Azo Coupling Substrate → Colour of Azo Dye Formed', a:'β-Naphthol in alkaline NaOH solution', b:'1-(Phenylazo)-2-naphthol (Scarlet-red dye)' },
    { g:'Azo Coupling Substrate → Colour of Azo Dye Formed', a:'N,N-Dimethylaniline in weak acid', b:'Butter yellow (4-dimethylaminoazobenzene)' }
  ],

  orders:[
    { q:'Arrange the following amines in increasing order of their basic strength in aqueous solution', s:['Ammonia (NH₃)', 'Methylamine (CH₃NH₂, 1°)', 'Trimethylamine ((CH₃)₃N, 3°)', 'Dimethylamine ((CH₃)₂NH, 2°)'], sep:'<' },
    { q:'Arrange the following aromatic amines in increasing order of basicity', s:['p-Nitroaniline (Strongly deactivating EWG)', 'Aniline', 'p-Toluidine (Electron-donating EDG)', 'N,N-Dimethylaniline'], sep:'<' },
    { q:'Arrange the following compounds in increasing order of their boiling points', s:['Trimethylamine (Tertiary amine, 276 K)', 'Ethyl methyl amine (Secondary amine, 309 K)', 'n-Propylamine (Primary amine with H-bonding, 321 K)', 'Propan-1-ol (Alcohol with strong H-bonding, 370 K)'], sep:'<' },
    { q:'Arrange the following reagents in chronological sequence for converting nitrobenzene to p-bromoaniline', s:['Reduction with Fe/HCl to give Aniline', 'Acetylation with (CH₃CO)₂O to give Acetanilide', 'Bromination with Br₂/CH₃COOH to give p-Bromoacetanilide', 'Acid hydrolysis with dilute HCl to give p-Bromoaniline'], sep:'<' },
    { q:'Arrange the substituted anilines in decreasing order of pKb value (increasing basicity)', s:['p-Nitroaniline (Highest pKb ≈ 13.0)', 'm-Nitroaniline', 'Aniline (pKb ≈ 9.4)', 'p-Methoxyaniline (Lowest pKb ≈ 8.7)'], sep:'>' }
  ],

  facts:{
    T:[
      'Aniline is a weaker base than ammonia because the nitrogen lone pair is delocalized into the benzene ring by resonance.',
      'In aqueous solution, secondary amines are more basic than both primary and tertiary amines for both methyl and ethyl substituted series.',
      'The carbylamine test is specific for primary amines and gives an intensely foul-smelling isocyanide.',
      'In Hoffmann bromamide degradation, the resulting primary amine contains exactly one less carbon atom than the reactant amide.',
      'Gabriel phthalimide synthesis is exclusively used for preparing pure primary aliphatic amines and cannot prepare aniline.',
      'Direct nitration of aniline produces a significant yield (47%) of meta-nitroaniline due to formation of the meta-directing anilinium ion.',
      'Azo coupling of benzenediazonium chloride with phenol in alkaline medium produces an orange dye called p-hydroxyazobenzene.',
      'Primary aliphatic amines react with nitrous acid to evolve nitrogen gas quantitatively and yield a mixture of alcohols and alkenes.',
      'Hinsberg reagent (benzenesulphonyl chloride) distinguishes between 1°, 2°, and 3° amines based on the solubility of their sulphonamides in alkali.',
      'Aniline does not undergo Friedel-Crafts reaction because it forms a Lewis acid-base adduct with the anhydrous AlCl₃ catalyst.',
      'Acetanilide is less reactive towards electrophilic aromatic substitution than aniline because the acetyl carbonyl group draws electron density away from nitrogen.',
      'Reduction of nitrobenzene with iron scrap and hydrochloric acid is preferred industrially because FeCl₂ hydrolyses to regenerate HCl.'
    ],
    F:[
      'Aniline undergoes Friedel-Crafts alkylation smoothly in the presence of anhydrous AlCl₃.',
      'Gabriel phthalimide synthesis can be used to synthesize aniline from bromobenzene.',
      'Tertiary amines react with Hinsberg reagent to form sulphonamides that dissolve in aqueous NaOH.',
      'In the gas phase, primary amines are more basic than tertiary amines.',
      'The carbylamine test is positive for secondary amines such as dimethylamine.',
      'Direct bromination of aniline with bromine water yields mono-para-bromoaniline as the major product.',
      'Hoffmann bromamide degradation yields an amine with one more carbon atom than the starting amide.',
      'Benzenediazonium chloride is stable at room temperature (25 °C) and does not decompose in water.',
      'Aliphatic diazonium salts are more stable than aromatic diazonium salts.',
      'Secondary amines react with chloroform and alcoholic KOH to produce foul-smelling carbylamines.',
      'Aniline is more basic than aliphatic amines like methylamine.',
      'Azo coupling with phenol is carried out in strongly acidic medium at pH 2.'
    ]
  },

  mcq:[
    {
      q:'What is the correct order of basic strength of the following amines in aqueous solution: (CH₃)₂NH, CH₃NH₂, (CH₃)₃N, NH₃?',
      o:['(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃', '(CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃', 'CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N > NH₃', '(CH₃)₂NH > (CH₃)₃N > CH₃NH₂ > NH₃'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'In aqueous solution for methyl series, the combined effect of inductive (+I), hydration, and steric hindrance gives the stability order 2° > 1° > 3° > NH₃ (213 order).',
        'Hence (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃.'
      ]
    },
    {
      q:'When acetamide (CH₃CONH₂) is treated with bromine and aqueous sodium hydroxide, the product formed is:',
      o:['Methylamine (CH₃NH₂)', 'Ethylamine (C₂H₅NH₂)', 'Bromomethane (CH₃Br)', 'Formamide (HCONH₂)'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'This is the Hoffmann bromamide degradation reaction.',
        'CH₃CONH₂ + Br₂ + 4 NaOH → CH₃NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O.',
        'The resulting amine contains ONE FEWER carbon atom: acetamide (2 carbons) degrades to methylamine (1 carbon).'
      ]
    },
    {
      q:'Which of the following amines cannot be prepared by Gabriel phthalimide synthesis?',
      o:['Aniline', 'Benzylamine', 'Methylamine', 'Isobutylamine'],
      a:0,
      tag:'Boundary Failure',
      sol:[
        'Gabriel phthalimide synthesis involves S_N2 attack of phthalimide anion on an alkyl halide.',
        'Aryl halides (like bromobenzene) do not undergo nucleophilic substitution under these conditions due to partial double-bond character of C–X.',
        'Therefore, aromatic primary amines like aniline cannot be prepared by this method.'
      ]
    },
    {
      q:'Why does direct nitration of aniline with concentrated nitric acid and sulphuric acid yield a substantial amount (47%) of meta-nitroaniline?',
      o:['In strongly acidic medium, aniline is protonated into anilinium ion (−NH₃⁺), which is meta-directing', 'The temperature of the nitration is too high', 'HNO₃ acts as a reducing agent', 'Meta isomer is thermodynamically more stable than para'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Under strongly acidic nitration conditions, aniline is protonated to form anilinium ion: C₆H₅NH₂ + H⁺ ⇌ C₆H₅NH₃⁺.',
        'The −NH₃⁺ group has a strong −I effect and lacks a resonance lone pair, acting as a strongly deactivating meta-directing group.'
      ]
    },
    {
      q:'An organic compound (A) with molecular formula C₃H₇NO on heating with Br₂ and KOH gives compound (B). Compound (B) on heating with CHCl₃ and alcoholic KOH produces a foul-smelling substance (C). Compound (A) is:',
      o:['Propanamide (CH₃CH₂CONH₂)', 'Ethanamide (CH₃CONH₂)', 'N-Methylacetamide (CH₃CONHCH₃)', 'Propanenitrile (CH₃CH₂CN)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Compound (A) C₃H₇NO reacts with Br₂/KOH (Hoffmann bromamide), indicating it is a primary amide with 3 carbons: CH₃CH₂CONH₂ (propanamide).',
        'Degradation gives ethylamine (B, C₂H₅NH₂).',
        'Ethylamine (1° amine) gives the carbylamine test to form ethyl isocyanide (C, C₂H₅NC, foul smell).'
      ]
    },
    {
      q:'Benzenediazonium chloride on reaction with hypophosphorous acid (H₃PO₂) in the presence of cuprous ions produces:',
      o:['Benzene', 'Phenol', 'Chlorobenzene', 'Aniline'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Hypophosphorous acid acts as a mild reducing agent: C₆H₅N₂⁺Cl⁻ + H₃PO₂ + H₂O → C₆H₆ + N₂ + H₃PO₃ + HCl.',
        'The diazonium group is replaced by hydrogen, yielding benzene.'
      ]
    },
    {
      q:'Which of the following amines reacts with Hinsberg reagent to form a product that is INSOLUBLE in aqueous potassium hydroxide?',
      o:['Diethylamine ((C₂H₅)₂NH, 2° amine)', 'Ethylamine (C₂H₅NH₂, 1° amine)', 'Triethylamine ((C₂H₅)₃N, 3° amine)', 'Aniline (C₆H₅NH₂, 1° aromatic amine)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Diethylamine is a secondary (2°) amine: (C₂H₅)₂NH + C₆H₅SO₂Cl → C₆H₅SO₂N(C₂H₅)₂ + HCl.',
        'The resulting sulphonamide lacks any acidic hydrogen atom on nitrogen, so it remains insoluble in aqueous alkali (KOH/NaOH).'
      ]
    },
    {
      q:'The reaction of benzenediazonium chloride with phenol in a mildly alkaline solution (pH 9–10) produces an orange dye known as:',
      o:['p-Hydroxyazobenzene', 'p-Aminoazobenzene', 'o-Hydroxyazobenzene', 'Azobenzene'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'C₆H₅N₂⁺Cl⁻ + C₆H₅OH + OH⁻ → p-HOC₆H₄–N=N–C₆H₅ (p-hydroxyazobenzene) + Cl⁻ + H₂O.',
        'The coupling occurs selectively at the para position of the phenoxide ion, yielding an orange azo dye.'
      ]
    },
    {
      q:'Which of the following compounds gives a positive carbylamine test?',
      o:['Aniline (C₆H₅NH₂)', 'N-Methylaniline (C₆H₅NHCH₃)', 'N,N-Dimethylaniline (C₆H₅N(CH₃)₂)', 'Benzyl alcohol (C₆H₅CH₂OH)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'The carbylamine test is specific for primary (1°) amines (both aliphatic and aromatic).',
        'Aniline is a primary aromatic amine and gives a positive test.',
        'N-Methylaniline is secondary and N,N-dimethylaniline is tertiary.'
      ]
    },
    {
      q:'In the Balz-Schiemann reaction, fluorobenzene is synthesized by heating benzenediazonium fluoroborate. The reaction is:',
      o:['C₆H₅N₂⁺BF₄⁻  →[heat]  C₆H₅F + BF₃ + N₂', 'C₆H₅N₂⁺Cl⁻ + NaF → C₆H₅F + NaCl + N₂', 'C₆H₅Cl + HF → C₆H₅F + HCl', 'C₆H₆ + F₂ → C₆H₅F + HF'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Diazotization followed by treatment with fluoroboric acid precipitates benzenediazonium fluoroborate (C₆H₅N₂⁺BF₄⁻).',
        'Thermal decomposition of the dry fluoroborate salt yields pure fluorobenzene, boron trifluoride, and nitrogen gas.'
      ]
    },
    {
      q:'Primary aliphatic amines react with cold nitrous acid (HNO₂) to liberate which gas quantitatively?',
      o:['Nitrogen gas (N₂)', 'Nitrous oxide (N₂O)', 'Nitric oxide (NO)', 'Ammonia (NH₃)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'R–NH₂ + HNO₂ → R–N₂⁺Cl⁻ (unstable) → R⁺ + N₂↑.',
        'Nitrogen gas is evolved quantitatively and can be measured in a gas burette to estimate amino groups.'
      ]
    },
    {
      q:'When aniline is treated with acetic anhydride in the presence of pyridine, the product formed is:',
      o:['Acetanilide', 'p-Aminoacetophenone', 'Benzanilide', 'Phenylacetamide'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'C₆H₅NH₂ + (CH₃CO)₂O  →[pyridine]  C₆H₅NHCOCH₃ (Acetanilide) + CH₃COOH.',
        'This nucleophilic acyl substitution protects the amino group from oxidation and moderates ring activation.'
      ]
    },
    {
      q:'What is the major organic product obtained when nitrobenzene is reduced with Fe scrap and concentrated hydrochloric acid?',
      o:['Aniline', 'Nitrosobenzene', 'Phenylhydroxylamine', 'Azobenzene'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Fe scrap and HCl reduce the nitro group cleanly and completely to an amino group: C₆H₅NO₂ + 6 [H] → C₆H₅NH₂ + 2 H₂O.',
        'It is the preferred industrial method because FeCl₂ formed is hydrolysed by water to regenerate HCl.'
      ]
    },
    {
      q:'A secondary amine can be distinguished from a primary amine using:',
      o:['Carbylamine test (positive only for 1° amine)', 'Fehling solution', 'Tollens reagent', 'Sodium metal'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'The carbylamine test produces a foul-smelling isocyanide with primary amines, while secondary amines do not react.'
      ]
    }
  ],

  gens:[
    function(R){
      var nC_amide = R.pick([2, 3, 4, 5]);
      var nC_amine = nC_amide - 1;
      var amideNames = { 2:'ethanamide (acetamide)', 3:'propanamide', 4:'butanamide', 5:'pentanamide' };
      var d = [nC_amide, nC_amide + 1, nC_amide - 2 > 0 ? nC_amide - 2 : 1];
      return {
        q:'When ' + amideNames[nC_amide] + ' (containing ' + nC_amide + ' carbons) undergoes Hoffmann bromamide degradation with Br₂ and NaOH, how many carbon atoms are present in the resulting primary amine product?',
        ans:nC_amine, d:d, u:'carbon atom(s)',
        tag:'Calculation Trap',
        sol:[
          'In Hoffmann bromamide degradation, the carbonyl carbon of the primary amide is lost as carbonate (CO₃²⁻).',
          'The resulting primary amine contains (n − 1) carbon atoms: ' + nC_amide + ' − 1 = ' + nC_amine + ' carbon(s).'
        ]
      };
    },
    function(R){
      var vAmine = R.pick([0.5, 1.0, 2.0]);
      var volN2 = vAmine * 22.4;
      var d1 = vAmine * 11.2;
      var d2 = vAmine * 44.8;
      var d3 = vAmine * 22400;
      return {
        q:'How many litres of Nitrogen gas (N₂) at STP will be liberated when ' + vAmine + ' mole(s) of an aliphatic primary amine (R–NH₂) reacts completely with excess nitrous acid (HNO₂)?',
        ans:volN2, d:[d1, d2, d3], u:'L',
        tag:'Calculation Trap',
        sol:[
          'Reaction: R–NH₂ + HNO₂ → ROH + N₂↑ + H₂O.',
          '1 mole of 1° amine yields 1 mole of N₂ gas = 22.4 L at STP.',
          'Volume of N₂ = ' + vAmine + ' × 22.4 L = ' + R.f(volN2) + ' L.'
        ]
      };
    }
  ]
});

/* ==========================================================================
   UNIT C19: BIOMOLECULES
   ========================================================================== */
NEET.reg({
  id:'C19',
  subj:'Organic Chemistry',
  type:'conc',
  name:'Biomolecules',
  syl:'Carbohydrates: Classification; aldoses and ketoses; monosaccharides (glucose and fructose) and constituent monosaccharides of oligosaccharides (sucrose, lactose, and maltose). Proteins: Elementary Idea of α-amino acids, peptide bond, polypeptides. Proteins: primary, secondary, tertiary, and quaternary structure (qualitative idea only), denaturation of proteins, enzymes. Vitamins: Classification and functions. Nucleic Acids: Chemical constitution of DNA and RNA. Biological functions of nucleic acids. Hormones (General introduction).',
  kw:['biomolecules', 'glucose', 'fructose', 'sucrose', 'invert sugar', 'amino acids', 'peptide bond', 'denaturation', 'dna rna', 'chargaff', 'vitamins', 'hormones'],

  formulas:[
    { n:'Sucrose Inversion Optical Rotation Shift', f:'Sucrose (+66.5°, dextro)  →[H₂O / H⁺]  D-Glucose (+52.7°) + D-Fructose (−92.4°)  ⇒  Net Mixture = −39.7° (Laevo)', u:'Optical Rotation (°)', s:'Hydrolysis changes optical sign from dextro (+) to laevo (−); product is called Invert Sugar', b:'Fails if hydrolysis is incomplete or if polarimeter measurement temperature deviates significantly from 20 °C.' },
    { n:'Chargaff Equivalency Rule in Double-Stranded DNA', f:'%Adenine = %Thymine  (A = T)   and   %Guanine = %Cytosine  (G ≡ C);   Purines = Pyrimidines', u:'Mole %', s:'A pairs with T via 2 hydrogen bonds; G pairs with C via 3 hydrogen bonds', b:'Applies strictly to double-stranded DNA; invalid for single-stranded DNA (e.g. bacteriophage φX174) or RNA.' },
    { n:'Isoelectric Point of Neutral Amino Acids', f:'pI = (pK_a1 + pK_a2) / 2', u:'pH', s:'pH at which zwitterion carries net zero charge and does not migrate in an electric field', b:'For acidic (e.g. aspartic acid) or basic (e.g. lysine) amino acids, pI is the average of the two lowest or two highest pKa values.' },
    { n:'Number of Peptide Bonds in a Polypeptide', f:'Number of Peptide Bonds = n − 1  (where n is the number of amino acid residues)', u:'Count', s:'A dipeptide contains 1 peptide bond; a tripeptide contains 2; a decapeptide contains 9', b:'Cyclic peptides (e.g. gramicidin S) contain n peptide bonds for n residues.' },
    { n:'Open-Chain D-Glucose Structure Verification', f:'C₆H₁₂O₆: CHO–(CHOH)₄–CH₂OH  (1 aldehyde + 4 secondary OH + 1 primary OH)', u:'Formula', s:'Prolonged HI → n-hexane; Br₂ water → gluconic acid; conc. HNO₃ → saccharic acid; Ac₂O → pentaacetate', b:'Fails to explain absence of Schiff test and mutarotation (which require cyclic hemiacetal pyranose structure).' },
    { n:'Specific Rotation of Glucose Anomers', f:'α-D-glucopyranose (+112°)  ⇌  Equilibrium Mixture (+52.7°)  ⇌  β-D-glucopyranose (+19°)', u:'Degrees (°)', s:'Mutarotation: spontaneous change of specific rotation in aqueous solution until equilibrium is established', b:'Occurs via trace open-chain aldehyde intermediate in aqueous solution; blocked in dry crystalline state.' }
  ],

  traps:[
    { t:'Sucrose is a NON-REDUCING sugar and does not reduce Tollens reagent or Fehling solution, whereas Maltose and Lactose are reducing sugars.', c:'In sucrose, the glycosidic bond links C1 of α-D-glucose directly to C2 of β-D-fructose, tying up both anomeric hemiacetal/hemiketal groups.', tag:'NCERT Exception' },
    { t:'Although glucose contains an aldehyde group (−CHO) in its open-chain formulation, it DOES NOT restore the pink colour of Schiff reagent and does not form an addition product with NaHSO₃.', c:'In aqueous solution, over 99% of glucose exists in the cyclic hemiacetal pyranose ring form where the free aldehyde group is masked.', tag:'NCERT Exception' },
    { t:'During the denaturation of proteins (e.g. boiling an egg), the primary structure remains completely INTACT while secondary and tertiary structures unfold.', c:'Denaturation disrupts weak non-covalent interactions (hydrogen bonds, ionic bonds, hydrophobic contacts), but cannot hydrolyse strong covalent peptide bonds.', tag:'NCERT Exception' },
    { t:'GLYCINE is the only standard α-amino acid that is OPTICALLY INACTIVE.', c:'Its α-carbon carries two identical hydrogen atoms (H₂N–CH₂–COOH), meaning it lacks a chiral (asymmetric) carbon center.', tag:'NCERT Exception' },
    { t:'Vitamin B₁₂ (cyanocobalamin) is a water-soluble vitamin, yet unlike other water-soluble vitamins, it is STORED in the human liver for several months to years.', c:'It binds to specific intrinsic factor transport proteins and hepatic storage receptors, preventing rapid urinary excretion.', tag:'NCERT Exception' },
    { t:'In double-stranded DNA, the ratio (A + G) / (T + C) is ALWAYS equal to 1.0 (Chargaff rule), but the ratio (A + T) / (G + C) is variable and species-specific.', c:'Every purine (A, G) pairs with a pyrimidine (T, C), ensuring total purines equal total pyrimidines.', tag:'NCERT Exception' },
    { t:'Amylose (in starch) is WATER-SOLUBLE and forms an unbranched helical chain linked by α-1,4 glycosidic bonds, while Amylopectin is WATER-INSOLUBLE and highly branched.', c:'Amylopectin contains α-1,6 glycosidic branch points every 24–30 glucose residues, preventing tight helical hydration.', tag:'NCERT Exception' },
    { t:'Humans CANNOT digest cellulose (dietary fiber), despite it consisting entirely of D-glucose units identical to starch.', c:'Cellulose contains β-1,4 glycosidic linkages; human digestive enzymes (like α-amylase) specifically cleave α-linkages and cannot hydrolyse β-linkages.', tag:'Concept Trap' }
  ],

  flows:[
    { t:'D-Glucose Chemical Structure Proofs', root:'D-Glucose (C₆H₁₂O₆) Chemical Reactions',
      br:[
        { l:'Straight 6-Carbon Chain', n:['Prolonged heating with excess HI / red P','Yields n-Hexane (CH₃(CH₂)₄CH₃)','Proves unbranched linear carbon backbone'] },
        { l:'Carbonyl & Aldehyde Group', n:['Reacts with NH₂OH → Oxime; HCN → Cyanohydrin (Carbonyl)','Mild oxidation with Br₂ water → Gluconic acid (Aldehyde)'] },
        { l:'Hydroxyl Groups Structure', n:['Acetic anhydride (Ac₂O) → Glucose Pentaacetate (5 –OH groups)','Conc. HNO₃ oxidation → Saccharic acid (Primary 1° –OH at C6)'] }
      ]
    },
    { t:'Carbohydrate Disaccharide Architecture', root:'Disaccharide Glycosidic Bond Typology',
      br:[
        { l:'Sucrose (C₁₂H₂₂O₁₁)', n:['α-D-Glucose (C1) + β-D-Fructose (C2)','Non-Reducing sugar (Both anomeric carbons involved)','Invert sugar on hydrolysis'] },
        { l:'Maltose (C₁₂H₂₂O₁₁)', n:['α-D-Glucose (C1) + α-D-Glucose (C4)','Reducing sugar (Free hemiacetal at second glucose C1)'] },
        { l:'Lactose (C₁₂H₂₂O₁₁)', n:['β-D-Galactose (C1) + β-D-Glucose (C4)','Reducing sugar (Milk sugar)'] }
      ]
    },
    { t:'Protein Structural Hierarchy', chain:['Primary (1°): Linear sequence of amino acids (peptide bonds)','Secondary (2°): α-Helix & β-Pleated Sheets (Intra/intermolecular H-bonds)','Tertiary (3°): 3D Globular/Fibrous folding (Disulphide −S−S−, hydrophobic bonds)','Quaternary (4°): Multi-subunit assembly (e.g. 4 chains in Haemoglobin)'] }
  ],

  lab:[
    { t:'Biuret Test for Peptide Linkage in Proteins', d:'Add 10% NaOH and few drops of 1% CuSO₄ solution to protein solution → formation of characteristic intense violet/purple colouration due to coordination complex between Cu²⁺ and peptide –CO–NH– nitrogen atoms (requires ≥2 peptide bonds).' },
    { t:'Ninhydrin Test for Amino Acids', d:'Heat amino acid solution with 0.1% ninhydrin reagent in ethanol → formation of intense Ruhemann purple / bluish-violet colouration confirms α-amino acid. (Proline gives yellow colour due to secondary amine ring).' },
    { t:'Molisch Test for General Carbohydrate Detection', d:'Add alcoholic α-naphthol solution to carbohydrate; carefully pour concentrated H₂SO₄ along test tube wall → formation of deep reddish-violet / purple ring at the junction of two liquids confirms carbohydrate.' },
    { t:'Iodine Test for Starch Amylose Helical Coils', d:'Add dilute Lugol iodine solution (I₂ in KI) to starch solution → instantaneous appearance of deep intense blue-black colouration. Blue colour disappears on heating (helices unravel) and reappears on cooling.' }
  ],

  pairs:[
    { g:'Glucose Chemical Reaction → Structural Deduction', a:'Heating with concentrated HI and Red Phosphorus', b:'Proves all 6 carbons are linked in an unbranched linear chain (forms n-hexane)' },
    { g:'Glucose Chemical Reaction → Structural Deduction', a:'Reaction with Hydroxylamine (NH₂OH)', b:'Proves presence of a carbonyl (>C=O) group (forms glucose oxime)' },
    { g:'Glucose Chemical Reaction → Structural Deduction', a:'Mild oxidation with Bromine water (Br₂ / H₂O)', b:'Proves presence of an aldehyde (–CHO) group (forms gluconic acid)' },
    { g:'Glucose Chemical Reaction → Structural Deduction', a:'Acetylation with Acetic anhydride (Ac₂O)', b:'Proves presence of 5 hydroxyl (–OH) groups on different carbons (forms pentaacetate)' },

    { g:'Disaccharide Sugar → Constituent Monosaccharides & Glycosidic Linkage', a:'Sucrose (Cane sugar, non-reducing)', b:'α-D-Glucose and β-D-Fructose linked by α-1, β-2 glycosidic bond' },
    { g:'Disaccharide Sugar → Constituent Monosaccharides & Glycosidic Linkage', a:'Maltose (Malt sugar, reducing)', b:'Two α-D-Glucose units linked by α-1,4 glycosidic bond' },
    { g:'Disaccharide Sugar → Constituent Monosaccharides & Glycosidic Linkage', a:'Lactose (Milk sugar, reducing)', b:'β-D-Galactose and β-D-Glucose linked by β-1,4 glycosidic bond' },
    { g:'Disaccharide Sugar → Constituent Monosaccharides & Glycosidic Linkage', a:'Cellulose (Plant cell wall polysaccharide)', b:'Linear chain of β-D-Glucose units linked by β-1,4 glycosidic bonds' },

    { g:'Vitamin Name → Characteristic Deficiency Disease', a:'Vitamin A (Retinol)', b:'Xerophthalmia (corneal hardening) and Night blindness' },
    { g:'Vitamin Name → Characteristic Deficiency Disease', a:'Vitamin B₁ (Thiamine)', b:'Beriberi (neuromuscular weakness and heart failure)' },
    { g:'Vitamin Name → Characteristic Deficiency Disease', a:'Vitamin C (Ascorbic acid)', b:'Scurvy (bleeding gums and capillary fragility)' },
    { g:'Vitamin Name → Characteristic Deficiency Disease', a:'Vitamin D (Calciferol)', b:'Rickets in children and Osteomalacia in adults' },

    { g:'Nucleic Acid Base Pair → Complementary Partner & H-Bond Count in DNA', a:'Adenine (Purine base A)', b:'Thymine (T) via 2 Hydrogen bonds' },
    { g:'Nucleic Acid Base Pair → Complementary Partner & H-Bond Count in DNA', a:'Guanine (Purine base G)', b:'Cytosine (C) via 3 Hydrogen bonds' },
    { g:'Nucleic Acid Base Pair → Complementary Partner & H-Bond Count in DNA', a:'Cytosine (Pyrimidine base C)', b:'Guanine (G) via 3 Hydrogen bonds' },
    { g:'Nucleic Acid Base Pair → Complementary Partner & H-Bond Count in DNA', a:'Thymine (Pyrimidine base T in DNA)', b:'Adenine (A) via 2 Hydrogen bonds' },

    { g:'Hormone Chemical Nature → Representative Example & Site of Origin', a:'Peptide / Polypeptide Hormone', b:'Insulin and Glucagon (secreted by Pancreas islets)' },
    { g:'Hormone Chemical Nature → Representative Example & Site of Origin', a:'Steroid Hormone', b:'Testosterone and Estrogen (secreted by Gonads / Adrenal cortex)' },
    { g:'Hormone Chemical Nature → Representative Example & Site of Origin', a:'Amino Acid Derivative Hormone', b:'Epinephrine (Adrenaline) and Thyroxine (secreted by Adrenal medulla / Thyroid)' },
    { g:'Hormone Chemical Nature → Representative Example & Site of Origin', a:'Pituitary Peptide Hormone', b:'Oxytocin and Vasopressin (ADH, posterior pituitary)' }
  ],

  orders:[
    { q:'Arrange the following sugars in increasing order of their sweetness index', s:['Galactose (32)', 'Glucose (74)', 'Sucrose (100, Standard)', 'Fructose (173, Sweetest natural sugar)'], sep:'<' },
    { q:'Arrange the structural levels of proteins in increasing order of spatial complexity', s:['Primary (1° Sequence)', 'Secondary (2° α-Helix/β-Sheet)', 'Tertiary (3° 3D Domain)', 'Quaternary (4° Multi-subunit Assembly)'], sep:'<' },
    { q:'Arrange the following nitrogenous bases in order of decreasing molecular weight (Purines > Pyrimidines)', s:['Guanine (Purine, 151 g/mol)', 'Adenine (Purine, 135 g/mol)', 'Thymine (Pyrimidine, 126 g/mol)', 'Uracil (Pyrimidine, 112 g/mol)'], sep:'>' },
    { q:'Arrange the carbohydrate polymers in order of increasing degree of branching', s:['Cellulose (Zero branching, strictly linear)', 'Amylose (Zero branching, helical)', 'Amylopectin (Branches every 24–30 units)', 'Glycogen (Branches every 8–12 units, most branched)'], sep:'<' },
    { q:'Arrange the following amino acids in increasing order of isoelectric point (pI)', s:['Aspartic acid (Acidic, pI ≈ 2.8)', 'Glycine (Neutral, pI ≈ 6.0)', 'Histidine (Basic, pI ≈ 7.6)', 'Lysine (Basic, pI ≈ 9.7)'], sep:'<' }
  ],

  facts:{
    T:[
      'Sucrose is a non-reducing disaccharide because its glycosidic linkage involves the anomeric carbons of both α-glucose and β-fructose.',
      'Glycine is the only standard α-amino acid that lacks a chiral carbon and is optically inactive.',
      'Denaturation of a protein disrupts secondary and tertiary structures while leaving the primary covalent amino acid sequence unaltered.',
      'In double-stranded DNA, the percentage of Adenine equals Thymine, and Guanine equals Cytosine according to Chargaff rules.',
      'Vitamin B₁₂ is a water-soluble vitamin that is stored in the human liver for several years.',
      'Hydrolysis of dextrorotatory sucrose produces a laevorotatory mixture called invert sugar.',
      'Amylose is an unbranched linear polymer of α-D-glucose that forms a blue complex with iodine.',
      'D-Glucose does not restore the colour of Schiff reagent and does not react with sodium bisulphite due to cyclic hemiacetal ring formation.',
      'At its isoelectric point (pI), an amino acid exists as a neutral dipolar zwitterion with zero net electric charge.',
      'Insulin is a polypeptide hormone produced by beta cells of the pancreas that regulates blood glucose levels.',
      'Cellulose consists of β-D-glucose units connected by β-1,4 glycosidic linkages and cannot be digested by human enzymes.',
      'Thyroxine is an iodinated amino acid derivative hormone produced by the thyroid gland.'
    ],
    F:[
      'Sucrose is a reducing sugar that reduces Fehling solution to red cuprous oxide.',
      'All 20 standard amino acids found in proteins are optically active and possess chiral carbons.',
      'Denaturation of a protein breaks covalent peptide bonds and fragments the protein into free amino acids.',
      'In double-stranded DNA, Adenine pairs with Guanine through three hydrogen bonds.',
      'Vitamin C is a fat-soluble vitamin stored in large amounts in human adipose tissue.',
      'Maltose is a non-reducing sugar containing a β-1,4 glycosidic linkage.',
      'Starch and cellulose have identical glycosidic linkages and are equally digestible by human enzymes.',
      'Glucose pentaacetate reacts readily with hydroxylamine to form an oxime.',
      'At physiological pH 7.4, standard amino acids exist primarily as uncharged neutral molecules NH₂–CHR–COOH.',
      'DNA contains uracil in place of thymine.',
      'Fructose is an aldohexose with an aldehyde functional group at C1.',
      'Quaternary structure is present in all proteins including monomeric single-chain proteins.'
    ]
  },

  mcq:[
    {
      q:'A sample of double-stranded DNA is analysed and found to contain 30% Adenine. What is the percentage of Cytosine in this DNA sample?',
      o:['20%', '30%', '40%', '70%'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'According to Chargaff rules for double-stranded DNA: %A = %T and %G = %C.',
        'If %A = 30%, then %T = 30%. Together, A + T = 60%.',
        'Remaining G + C = 100% − 60% = 40%.',
        'Since %G = %C, %Cytosine = 40% / 2 = 20%.'
      ]
    },
    {
      q:'Which of the following carbohydrates is a non-reducing sugar?',
      o:['Sucrose', 'Maltose', 'Lactose', 'Glucose'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'In sucrose, the glycosidic bond joins C1 of α-D-glucose to C2 of β-D-fructose.',
        'Both anomeric carbons are tied up in the glycosidic bond, leaving no free hemiacetal or hemiketal group.',
        'Hence sucrose cannot open into a free carbonyl form and is non-reducing.'
      ]
    },
    {
      q:'Which of the following α-amino acids is optically inactive?',
      o:['Glycine', 'Alanine', 'Valine', 'Serine'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Glycine has the chemical formula H₂N–CH₂–COOH.',
        'The α-carbon is bonded to two identical hydrogen atoms, so it is achiral and optically inactive.',
        'All other 19 standard amino acids have 4 different groups on the α-carbon and are optically active.'
      ]
    },
    {
      q:'During denaturation of a globular protein by boiling, which level of protein structure remains intact and unaffected?',
      o:['Primary structure', 'Secondary structure', 'Tertiary structure', 'Quaternary structure'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Denaturation breaks weak non-covalent bonds (hydrogen bonds, ionic interactions, hydrophobic forces) that maintain 2°, 3°, and 4° folding.',
        'The covalent peptide bonds holding the primary amino acid sequence together are not cleaved, leaving primary structure intact.'
      ]
    },
    {
      q:'Deficiency of which of the following vitamins causes Pernicious Anaemia?',
      o:['Vitamin B₁₂ (Cyanocobalamin)', 'Vitamin B₁ (Thiamine)', 'Vitamin C (Ascorbic acid)', 'Vitamin B₆ (Pyridoxine)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Vitamin B₁₂ is essential for normal red blood cell maturation and myelin synthesis.',
        'Its deficiency leads to impaired DNA synthesis in erythroblasts, causing pernicious (megaloblastic) anaemia.'
      ]
    },
    {
      q:'D-Glucose on prolonged heating with concentrated hydriodic acid (HI) in the presence of red phosphorus yields:',
      o:['n-Hexane', 'Gluconic acid', 'Saccharic acid', 'Sorbitol'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Prolonged heating with HI and red P completely reduces all hydroxyl and carbonyl groups to hydrocarbons, yielding n-hexane (CH₃(CH₂)₄CH₃).',
        'This historical reaction proved that all 6 carbons in glucose form an unbranched linear chain.'
      ]
    },
    {
      q:'The linkage that joins adjacent nucleotides in a strand of DNA or RNA is a:',
      o:['3′, 5′-Phosphodiester linkage', '1′, 4′-Glycosidic linkage', 'Peptide linkage', 'Disulphide linkage'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Nucleotides are polymerized by linking the phosphate group at the 5′-carbon of one pentose sugar to the 3′-hydroxyl group of the next pentose sugar via a 3′,5′-phosphodiester bond.'
      ]
    },
    {
      q:'Why is sucrose called "invert sugar" after acid hydrolysis?',
      o:['The optical rotation changes from dextrorotatory to laevorotatory', 'D-glucose inverts into L-glucose', 'The ring size of fructose inverts from pyranose to furanose', 'The solution turns from acidic to basic'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'Sucrose is dextrorotatory (+66.5°). On hydrolysis, it produces equimolar D-(+)-glucose (+52.7°) and D-(−)-fructose (−92.4°).',
        'Because the laevorotation of fructose exceeds the dextrorotation of glucose, the net mixture is laevorotatory (−39.7°).',
        'This inversion of the sign of optical rotation gives it the name invert sugar.'
      ]
    },
    {
      q:'Which of the following is an example of an essential amino acid that cannot be synthesized by the human body?',
      o:['Valine', 'Glycine', 'Alanine', 'Glutamic acid'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Essential amino acids must be supplied in diet: Valine, Leucine, Isoleucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Histidine, Arginine.',
        'Glycine, alanine, and glutamic acid are non-essential and can be synthesized in vivo.'
      ]
    },
    {
      q:'Which of the following nitrogenous bases is found in RNA but NOT in DNA?',
      o:['Uracil', 'Thymine', 'Cytosine', 'Adenine'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'RNA contains the pyrimidine base Uracil (U) instead of Thymine (T).',
        'DNA contains Thymine (5-methyluracil).'
      ]
    },
    {
      q:'The helical structure of the α-helix in proteins is stabilized predominantly by:',
      o:['Intramolecular hydrogen bonding between peptide C=O and N–H groups', 'Disulphide covalent bonds', 'Peptide bonds', 'Ionic salt bridges'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'The α-helix is stabilized by intramolecular hydrogen bonds formed between the >C=O group of one amino acid residue and the –NH group of the fourth residue along the turn.'
      ]
    },
    {
      q:'Which of the following pairs of monosaccharides is obtained upon the hydrolysis of Lactose (milk sugar)?',
      o:['β-D-Galactose and β-D-Glucose', 'Two α-D-Glucose molecules', 'α-D-Glucose and β-D-Fructose', 'α-D-Galactose and α-D-Glucose'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Lactose is composed of one molecule of β-D-galactose and one molecule of β-D-glucose joined by a β-1,4 glycosidic bond.'
      ]
    },
    {
      q:'A nucleotide consists of:',
      o:['Nitrogenous base + Pentose sugar + Phosphate group', 'Nitrogenous base + Pentose sugar only', 'Pentose sugar + Phosphate group only', 'Nitrogenous base + Phosphate group only'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Base + Sugar = Nucleoside.',
        'Nucleoside + Phosphate group (at 5′-position) = Nucleotide.'
      ]
    },
    {
      q:'Which of the following vitamins is fat-soluble and plays a critical role in blood clotting?',
      o:['Vitamin K', 'Vitamin C', 'Vitamin B₁', 'Vitamin B₁₂'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Vitamin K (phylloquinone) is a fat-soluble vitamin essential for the hepatic synthesis of prothrombin and other blood-clotting factors.',
        'Its deficiency causes delayed blood coagulation and haemorrhage.'
      ]
    }
  ],

  gens:[
    function(R){
      var pctA = R.int(18, 32);
      var pctT = pctA;
      var pctGC = 100 - (pctA + pctT);
      var pctC = pctGC / 2;
      var d1 = pctA;
      var d2 = pctGC;
      var d3 = 50 - pctA;
      return {
        q:'A double-stranded DNA molecule contains ' + pctA + '% Adenine. What is the percentage of Cytosine present in this DNA molecule according to Chargaff rules?',
        ans:pctC, d:[d1, d2, d3], u:'%',
        tag:'Calculation Trap',
        sol:[
          'Chargaff rule: %A = %T = ' + pctA + '%.',
          'Total A + T = ' + (pctA * 2) + '%.',
          'Total G + C = 100% − ' + (pctA * 2) + '% = ' + pctGC + '%.',
          'Since %G = %C, %Cytosine = ' + pctGC + '% / 2 = ' + R.f(pctC) + '%.'
        ]
      };
    },
    function(R){
      var nResidues = R.int(4, 12);
      var nBonds = nResidues - 1;
      var d = [nResidues, nResidues + 1, nResidues - 2 > 0 ? nResidues - 2 : 2];
      return {
        q:'How many peptide bonds are present in a linear polypeptide chain consisting of ' + nResidues + ' amino acid residues?',
        ans:nBonds, d:d, u:'peptide bond(s)',
        tag:'Calculation Trap',
        sol:[
          'For a linear polypeptide: Number of peptide bonds = (Number of amino acid residues) − 1.',
          'Peptide bonds = ' + nResidues + ' − 1 = ' + nBonds + ' bond(s).'
        ]
      };
    }
  ]
});

/* ==========================================================================
   UNIT C20: PRINCIPLES RELATED TO PRACTICAL CHEMISTRY
   ========================================================================== */
NEET.reg({
  id:'C20',
  subj:'Practical Chemistry',
  type:'conc',
  name:'Principles Related to Practical Chemistry',
  syl:'Detection of extra elements (N, S, halogens) in organic compounds; Detection of functional groups: hydroxyl, carbonyl, carboxyl, amino. Preparations: Mohr salt, potash alum, acetanilide, p-nitroacetanilide, aniline yellow, iodoform. Titrimetric exercises: acid-base indicators, oxalic acid vs KMnO4, Mohr salt vs KMnO4. Qualitative salt analysis: Cations (Pb2+, Cu2+, Al3+, Fe3+, Zn2+, Ni2+, Ca2+, Ba2+, Mg2+, NH4+); Anions (CO3^2-, S^2-, SO4^2-, NO3^-, NO2^-, Cl^-, Br^-, I^-). Experiments: Enthalpy of solution of CuSO4, Enthalpy of neutralization, Preparation of lyophilic and lyophobic sols, Kinetic study of iodide + H2O2 clock reaction.',
  kw:['practical chemistry', 'salt analysis', 'titration', 'kmnoh4', 'mohr salt', 'nessler reagent', 'brown ring test', 'chromyl chloride', 'enthalpy of neutralization', 'colloids', 'clock reaction'],

  formulas:[
    { n:'Enthalpy of Neutralization of Strong Acid & Strong Base', f:'H⁺(aq) + OH⁻(aq) → H₂O(l);   ΔH_neut ≈ −57.1 kJ mol⁻¹ (−13.7 kcal mol⁻¹)', u:'kJ mol⁻¹', s:'Constant for all strong acid-strong base pairs because both dissociate completely', b:'Less negative for weak acids (e.g. CH₃COOH + NaOH ≈ −55.8 kJ/mol) because part of the heat is consumed in ionizing the weak acid.' },
    { n:'KMnO4 Titration Normality & Equivalence Rule', f:'N₁ V₁ (KMnO₄) = N₂ V₂ (Reducing Agent);   Normality N = Molarity M × n-factor', u:'Equivalents', s:'In acidic medium: KMnO₄ n-factor = 5; Oxalic acid (H₂C₂O₄) n-factor = 2; Mohr salt (Fe²⁺) n-factor = 1', b:'Acidified with dilute H₂SO₄ only; HCl cannot be used because MnO₄⁻ oxidizes Cl⁻ to Cl₂.' },
    { n:'Brown Ring Nitrate Complex Formula & Fe Oxidation State', f:'[Fe(H₂O)₅(NO)]SO₄   (Iron is in +1 oxidation state!)', u:'Complex Formula', s:'NO acts as a neutral or NO⁺ ligand; brown colour formed at liquid junction', b:'Shaking or heating the test tube decomposes the brown ring due to thermal instability of the nitrosyl complex.' },
    { n:'Chromyl Chloride Test Reaction for Chloride Ion', f:'4 Cl⁻ + K₂Cr₂O₇ + 3 H₂SO₄ (conc.)  →[heat]  2 CrO₂Cl₂ (red gas) + K₂SO₄ + 2 H₂O', u:'Test Equation', s:'Vapours absorbed in NaOH give yellow Na₂CrO₄; acidified with acetic acid + Pb(CH₃COO)₂ → yellow PbCrO₄', b:'FAILS for covalent and insoluble chlorides (e.g. Hg₂Cl₂, HgCl₂, AgCl, PbCl₂, SnCl₂).' },
    { n:'Hardy-Schulze Rule for Colloidal Coagulation', f:'Coagulating Power ∝ (Valency of Flocculating Ion)⁴', u:'Ratio', s:'For negatively charged sol (e.g. As₂S₃): Al³⁺ > Ba²⁺ > Na⁺; For positively charged sol (e.g. Fe(OH)₃): [Fe(CN)₆]⁴⁻ > PO₄³⁻ > SO₄²⁻ > Cl⁻', b:'Valid only when electrolyte concentration exceeds critical coagulation concentration (CCC).' },
    { n:'Iodine Clock Reaction Kinetics Rate Law', f:'Rate = k [H₂O₂] [I⁻] [H⁺]⁰ = −Δ[H₂O₂] / Δt', u:'mol L⁻¹ s⁻¹', s:'Time t to blue colour appearance: Rate ∝ 1 / t_blue (using fixed amount of Na₂S₂O₃ and starch)', b:'If temperature varies during runs, the rate constant k changes, disrupting kinetic order determination.' }
  ],

  traps:[
    { t:'In the brown ring test for nitrate (NO₃⁻), the oxidation state of Iron in the brown ring complex [Fe(H₂O)₅(NO)]²⁺ is +1, NOT +2 or +3.', c:'Electron transfer occurs between Fe²⁺ and NO, forming Fe⁺ (d⁷, high-spin) coordinated to NO⁺.', tag:'NCERT Exception' },
    { t:'In the titration of oxalic acid against KMnO₄, the solution MUST be heated to 60–70 °C, whereas the titration of Mohr salt is done at ROOM TEMPERATURE.', c:'Oxalic acid reaction is very slow at room temp (Mn²⁺ acts as autocatalyst once started); Mohr salt heating causes aerial oxidation of Fe²⁺ to Fe³⁺ by atmospheric oxygen.', tag:'NCERT Exception' },
    { t:'The Chromyl Chloride test FAILS completely for covalent or insoluble chlorides like Hg₂Cl₂, HgCl₂, AgCl, and PbCl₂.', c:'These chlorides have high lattice energy or high covalent character and do not liberate free chloride ions upon reaction with concentrated H₂SO₄.', tag:'NCERT Exception' },
    { t:'Enthalpy of neutralization of a weak acid (e.g. acetic acid) with a strong base is NUMERICALLY LESS than −57.1 kJ/mol (e.g. −55.8 kJ/mol).', c:'Part of the heat evolved during neutralization is consumed in the complete dissociation / ionization of the weak acid.', tag:'NCERT Exception' },
    { t:'Dissolution of anhydrous copper sulphate (CuSO₄) in water is EXOTHERMIC, whereas dissolution of blue vitriol (CuSO₄ · 5H₂O) is ENDOTHERMIC.', c:'Anhydrous CuSO₄ has a huge hydration enthalpy when coordinating with 5 water molecules, releasing substantial heat.', tag:'NCERT Exception' },
    { t:'In Group III cation analysis, NH₄Cl MUST be added BEFORE NH₄OH.', c:'NH₄Cl provides common ion NH₄⁺ which suppresses the ionization of NH₄OH, ensuring [OH⁻] is just enough to precipitate Group III (Al³⁺, Fe³⁺) without exceeding Ksp of Group IV and V hydroxides.', tag:'NCERT Exception' },
    { t:'In the preparation of Mohr salt (FeSO₄ · (NH₄)₂SO₄ · 6H₂O), a small amount of dilute H₂SO₄ MUST be added to water before dissolving ferrous sulphate.', c:'Dilute sulphuric acid prevents hydrolysis of Fe²⁺ ions to ferric hydroxide Fe(OH)₃.', tag:'NCERT Exception' },
    { t:'KMnO₄ acts as its OWN indicator (self-indicator) in redox titrations, signaling the endpoint with the appearance of a permanent FAINT PINK colour.', c:'A single extra drop of deep purple MnO₄⁻ imparts a distinct pink tinge to the previously colourless reaction mixture at equivalence.', tag:'NCERT Exception' }
  ],

  flows:[
    { t:'Systematic Cation Group Separation Flowchart', root:'Original Salt Solution Analysis',
      br:[
        { l:'Group I: Add dil. HCl', n:['White precipitate of PbCl₂','Soluble in hot water; Yellow PbI₂ with KI'] },
        { l:'Group II: Add H₂S gas in dil. HCl', n:['Black precipitate of CuS','Dissolves in 50% HNO₃; Deep blue [Cu(NH₃)₄]²⁺ with NH₄OH'] },
        { l:'Group III: Add NH₄Cl + excess NH₄OH', n:['White gelatinous ppt: Al(OH)₃ (Blue lake test)','Reddish-brown ppt: Fe(OH)₃ (Prussian blue with ferrocyanide)'] },
        { l:'Group IV: Add H₂S in NH₄Cl + NH₄OH', n:['Dirty white ppt: ZnS (white reprecipitation)','Black ppt: NiS (Scarlet-red ppt with DMG)'] },
        { l:'Group V: Add (NH₄)₂CO₃', n:['White ppt: Ba²⁺ (Yellow BaCrO₄, apple green flame)','White ppt: Ca²⁺ (White CaC₂O₄, brick red flame)'] }
      ]
    },
    { t:'Anion Systematic Screening Scheme', root:'Dry Salt / Water Extract of Unknown Anion',
      br:[
        { l:'Dilute H₂SO₄ Treatment', n:['Brisk effervescence (Lime water milky): CO₃²⁻','Rotten-egg smell H₂S (Pb(OAc)₂ black): S²⁻','Brown fumes on warming (Starch-KI blue): NO₂⁻'] },
        { l:'Concentrated H₂SO₄ Treatment', n:['Pungent fumes + Red CrO₂Cl₂ gas: Cl⁻','Reddish-brown fumes (Orange CCl₄ layer): Br⁻','Violet fumes (Purple CCl₄ layer): I⁻','Brown ring with FeSO₄: NO₃⁻'] },
        { l:'Special Independent Test', n:['White BaSO₄ ppt with BaCl₂ in dil. HCl: SO₄²⁻'] }
      ]
    },
    { t:'Colloidal Sol Synthesis Pathways', root:'Colloid Preparation Modes',
      br:[
        { l:'Lyophilic Sol (Hydrophilic)', n:['Starch or Gum warmed directly with distilled water at 80 °C','Reversible sol; High intrinsic stability'] },
        { l:'Lyophobic Sol (Hydrophobic)', n:['Hydrolysis: Boil FeCl₃ with water → Red-brown Fe(OH)₃ sol','Double Decomposition: As₂O₃ + H₂S → Yellow As₂S₃ sol','Irreversible; Sensitive to electrolyte coagulation'] }
      ]
    }
  ],

  lab:[
    { t:'Brown Ring Test for Nitrate (NO₃⁻)', d:'Add freshly prepared FeSO₄ solution to nitrate salt solution. Incline test tube and pour concentrated H₂SO₄ carefully down the inner wall without shaking → dark brown ring of [Fe(H₂O)₅(NO)]SO₄ forms at the interface between the two liquid layers.' },
    { t:'Flame Test for Alkaline Earth Cations', d:'Clean platinum / nichrome wire with conc. HCl in non-luminous Bunsen flame until no colour is imparted. Moisten salt with conc. HCl to form volatile metal chlorides: Ba²⁺ gives persistent apple-green flame; Ca²⁺ gives brick-red flame; Sr²⁺ gives crimson flame.' },
    { t:'Preparation of Potash Alum and Mohr Salt Crystals', d:'Mohr salt: Equimolar FeSO₄ · 7H₂O and (NH₄)₂SO₄ dissolved in minimum hot water containing dilute H₂SO₄; cool slowly to obtain light-green monoclinic crystals. Potash alum: Equimolar K₂SO₄ and Al₂(SO₄)₃ · 18H₂O crystallized to give colourless octahedral crystals.' },
    { t:'Iodine Clock Kinetic Run (H₂O₂ + I⁻)', d:'Mix standardized volumes of KI, starch solution, and sodium thiosulphate (Na₂S₂O₃). Add H₂O₂ and start stopwatch immediately. Record time t taken for sudden appearance of intense dark blue starch-iodine complex.' }
  ],

  pairs:[
    { g:'Salt Analysis Cation Group → Group Reagent', a:'Group I Cations (Pb²⁺)', b:'Dilute Hydrochloric acid (dil. HCl)' },
    { g:'Salt Analysis Cation Group → Group Reagent', a:'Group II Cations (Cu²⁺)', b:'Hydrogen sulphide gas (H₂S) in the presence of dilute HCl' },
    { g:'Salt Analysis Cation Group → Group Reagent', a:'Group III Cations (Al³⁺, Fe³⁺)', b:'Ammonium chloride (NH₄Cl) followed by excess Ammonium hydroxide (NH₄OH)' },
    { g:'Salt Analysis Cation Group → Group Reagent', a:'Group IV Cations (Zn²⁺, Ni²⁺)', b:'Hydrogen sulphide gas (H₂S) in the presence of NH₄Cl and NH₄OH' },
    { g:'Salt Analysis Cation Group → Group Reagent', a:'Group V Cations (Ba²⁺, Ca²⁺)', b:'Ammonium carbonate ((NH₄)₂CO₃) in the presence of NH₄Cl and NH₄OH' },

    { g:'Qualitative Confirmatory Test → Characteristic Observation', a:'Nessler reagent test on Ammonium (NH₄⁺) salts', b:'Brown precipitate or colouration (iodide of Millon base)' },
    { g:'Qualitative Confirmatory Test → Characteristic Observation', a:'Potassium chromate test on Lead (Pb²⁺) ion', b:'Bright yellow precipitate of PbCrO₄ insoluble in acetic acid' },
    { g:'Qualitative Confirmatory Test → Characteristic Observation', a:'Potassium ferrocyanide test on Copper (Cu²⁺) ion', b:'Chocolate-brown precipitate of Cu₂[Fe(CN)₆]' },
    { g:'Qualitative Confirmatory Test → Characteristic Observation', a:'Dimethylglyoxime (DMG) test on Nickel (Ni²⁺) ion', b:'Brilliant scarlet-red precipitate of [Ni(dmg)₂]' },

    { g:'Acid Anion Radicals → Diagnostic Observation with Reagents', a:'Carbonate (CO₃²⁻) with dilute H₂SO₄', b:'Brisk effervescence of colourless, odourless CO₂ turning lime water milky' },
    { g:'Acid Anion Radicals → Diagnostic Observation with Reagents', a:'Sulphide (S²⁻) with dilute H₂SO₄', b:'Rotten-egg smell H₂S gas turning lead acetate paper black' },
    { g:'Acid Anion Radicals → Diagnostic Observation with Reagents', a:'Sulphate (SO₄²⁻) with BaCl₂ in dilute HCl', b:'Heavy white precipitate of BaSO₄ insoluble in concentrated acids' },
    { g:'Acid Anion Radicals → Diagnostic Observation with Reagents', a:'Nitrate (NO₃⁻) with freshly prepared FeSO₄ and conc. H₂SO₄', b:'Dark brown ring of [Fe(H₂O)₅(NO)]SO₄ at the junction of two liquids' },

    { g:'Functional Group Qualitative Test → Characteristic Observation', a:'Ceric ammonium nitrate test on alcohols', b:'Red colouration due to cerate complex formation' },
    { g:'Functional Group Qualitative Test → Characteristic Observation', a:'Neutral FeCl₃ test on phenols', b:'Intense violet colouration due to iron-phenoxide complex' },
    { g:'Functional Group Qualitative Test → Characteristic Observation', a:'Schiff reagent test on aldehydes', b:'Magenta / pink colour restored within minutes' },
    { g:'Functional Group Qualitative Test → Characteristic Observation', a:'Sodium bicarbonate (NaHCO₃) test on carboxylic acids', b:'Brisk effervescence of carbon dioxide gas' },

    { g:'Colloid Type → Physical Preparation & Stability', a:'Starch sol (Lyophilic sol)', b:'Prepared by simple warming with water; reversible and highly stable' },
    { g:'Colloid Type → Physical Preparation & Stability', a:'Ferric hydroxide Fe(OH)₃ sol (Lyophobic sol)', b:'Prepared by boiling hydrolysis of FeCl₃; irreversible and coagulated by electrolytes' },
    { g:'Colloid Type → Physical Preparation & Stability', a:'Arsenious sulphide As₂S₃ sol (Lyophobic sol)', b:'Prepared by double decomposition with H₂S; negatively charged colloidal particles' },
    { g:'Colloid Type → Physical Preparation & Stability', a:'Gelatin sol (Lyophilic sol)', b:'Self-stabilized by strong hydration sheath around hydrophilic protein molecules' }
  ],

  orders:[
    { q:'Arrange the cations in order of their qualitative salt analysis group numbers (from Group 0 to Group V)', s:['NH₄⁺ (Group 0)', 'Pb²⁺ (Group I)', 'Cu²⁺ (Group II)', 'Fe³⁺ (Group III)', 'Zn²⁺ (Group IV)', 'Ba²⁺ (Group V)'], sep:'<' },
    { q:'Arrange the following coagulating ions in increasing order of their flocculating power for a negatively charged As₂S₃ sol (Hardy-Schulze rule)', s:['Na⁺ (Monovalent)', 'Ba²⁺ (Divalent)', 'Al³⁺ (Trivalent)'], sep:'<' },
    { q:'Arrange the enthalpy of neutralization (magnitude in kJ/mol) in increasing order', s:['HCN + NaOH (~12.1 kJ/mol, very weak acid)', 'CH₃COOH + NH₄OH (~50.4 kJ/mol, weak acid + weak base)', 'CH₃COOH + NaOH (~55.8 kJ/mol, weak acid + strong base)', 'HCl + NaOH (57.1 kJ/mol, strong acid + strong base)'], sep:'<' },
    { q:'Arrange the following acid-base indicators in increasing order of their pH transition range', s:['Methyl orange (pH 3.1–4.4)', 'Methyl red (pH 4.4–6.2)', 'Phenol red (pH 6.8–8.4)', 'Phenolphthalein (pH 8.3–10.0)'], sep:'<' },
    { q:'Arrange the following silver halides in increasing order of solubility in aqueous ammonia (NH₄OH)', s:['AgI (Completely insoluble in NH₄OH)', 'AgBr (Sparingly soluble in NH₄OH)', 'AgCl (Readily soluble forming [Ag(NH₃)₂]⁺)'], sep:'<' }
  ],

  facts:{
    T:[
      'The oxidation state of iron in the brown ring complex [Fe(H₂O)₅(NO)]SO₄ is +1.',
      'In Group III qualitative analysis, NH₄Cl is added before NH₄OH to suppress the hydroxide ion concentration via the common ion effect.',
      'The chromyl chloride test is not given by covalent and insoluble chlorides like HgCl₂ and AgCl.',
      'The enthalpy of neutralization of any strong acid with any strong base is virtually constant at approximately −57.1 kJ/mol.',
      'Titration of oxalic acid against KMnO₄ requires heating the solution to 60–70 °C because the reaction is slow initially until autocatalytic Mn²⁺ forms.',
      'KMnO₄ acts as its own self-indicator, giving a faint permanent pink endpoint in acidic medium.',
      'Nessler reagent consists of an alkaline solution of potassium tetraiodomercurate(II), K₂[HgI₄].',
      'Lyophilic sols are reversible, highly solvated, and much more stable towards electrolyte coagulation than lyophobic sols.',
      'Mohr salt titration with KMnO₄ is performed at room temperature to avoid aerial oxidation of Fe²⁺ by atmospheric oxygen.',
      'Dissolution of anhydrous CuSO₄ in water is exothermic, whereas dissolution of hydrated CuSO₄ · 5H₂O is endothermic.',
      'According to the Hardy-Schulze rule, the coagulating power of an ion increases with the fourth power of its ionic charge.',
      'In the blue lake test for aluminium, gelatinous Al(OH)₃ adsorbs blue litmus dye from alkaline solution to form a floating blue precipitate.'
    ],
    F:[
      'In the brown ring test for nitrate, iron is present in the +3 oxidation state.',
      'The titration of Mohr salt against KMnO₄ must be heated to boiling before titrating.',
      'Hydrochloric acid is the preferred acid for acidifying KMnO₄ solutions in titrimetric analysis.',
      'All chloride salts produce red vapours of chromyl chloride when heated with K₂Cr₂O₇ and conc. H₂SO₄.',
      'The enthalpy of neutralization of acetic acid by sodium hydroxide is greater than −57.1 kJ/mol.',
      'Lyophobic sols can be prepared simply by stirring the substance directly in hot water.',
      'Group IV cations (Zn²⁺, Ni²⁺) precipitate as chlorides in dilute HCl.',
      'Phenolphthalein is a suitable indicator for titrating a strong acid against a weak base.',
      'Adding soap or detergent increases the surface tension of water.',
      'In qualitative analysis, Group II cations precipitate in ammoniacal alkaline medium.',
      'Barium salts impart a persistent brick-red colour to the Bunsen flame.',
      'Anhydrous CuSO₄ dissolves in water with absorption of heat from the surroundings.'
    ]
  },

  mcq:[
    {
      q:'What is the oxidation state of iron in the brown ring complex [Fe(H₂O)₅(NO)]SO₄ formed during the nitrate confirmatory test?',
      o:['+1', '+2', '+3', '0'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'In the brown ring complex [Fe(H₂O)₅(NO)]²⁺, NO exists as a nitrosonium ion (NO⁺).',
        'Fe + 5(0) + (+1) = +2  ⇒  Fe = +1.',
        'Iron has a 3d⁷ electronic configuration with three unpaired electrons.'
      ]
    },
    {
      q:'Why is Mohr salt titrated against potassium permanganate at room temperature without heating, unlike oxalic acid?',
      o:['Heating Mohr salt causes aerial oxidation of Fe²⁺ to Fe³⁺ by atmospheric oxygen', 'Mohr salt decomposes into toxic gases at 60 °C', 'The reaction between Mohr salt and KMnO₄ is endothermic', 'Heating precipitates iron as rust'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'At elevated temperatures (60–70 °C), Fe²⁺ ions in acidic solution are oxidized by atmospheric oxygen to Fe³⁺, resulting in falsely low titrant consumption.',
        'Hence Mohr salt titration is strictly carried out at room temperature.'
      ]
    },
    {
      q:'In qualitative salt analysis of Group III cations (Al³⁺, Fe³⁺), what is the function of adding solid NH₄Cl before adding NH₄OH?',
      o:['To suppress the ionization of NH₄OH via the common ion effect so only Group III hydroxides precipitate', 'To oxidize Fe²⁺ to Fe³⁺', 'To increase the pH of the solution above 12', 'To dissolve group II sulphides'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'NH₄Cl dissociates completely, providing excess NH₄⁺ ions.',
        'This suppresses the weak dissociation of NH₄OH: NH₄OH ⇌ NH₄⁺ + OH⁻.',
        'The reduced [OH⁻] is sufficient to exceed the low Ksp of Al(OH)₃ and Fe(OH)₃, but does not precipitate the more soluble hydroxides of Group IV (Zn²⁺, Ni²⁺) or Group V (Mg²⁺).'
      ]
    },
    {
      q:'Which of the following chloride salts will NOT give the chromyl chloride test when heated with solid K₂Cr₂O₇ and concentrated H₂SO₄?',
      o:['Mercuric chloride (HgCl₂)', 'Sodium chloride (NaCl)', 'Potassium chloride (KCl)', 'Zinc chloride (ZnCl₂)'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'The chromyl chloride test fails for covalent chlorides (like HgCl₂, Hg₂Cl₂) and insoluble chlorides (AgCl, PbCl₂) because they do not furnish significant free chloride ions.',
        'Ionic chlorides like NaCl, KCl, and ZnCl₂ give positive tests.'
      ]
    },
    {
      q:'The enthalpy of neutralization of a strong acid (HCl) by a strong base (NaOH) is −57.1 kJ/mol. When 1 mole of acetic acid (CH₃COOH) is neutralized by 1 mole of NaOH, the enthalpy change is −55.8 kJ/mol. What is the enthalpy of ionization of acetic acid?',
      o:['+1.3 kJ mol⁻¹', '−1.3 kJ mol⁻¹', '+112.9 kJ mol⁻¹', '−112.9 kJ mol⁻¹'],
      a:0,
      tag:'Calculation Trap',
      sol:[
        'ΔH_neut(weak acid) = ΔH_ion + ΔH_neut(strong acid).',
        '−55.8 kJ/mol = ΔH_ion + (−57.1 kJ/mol).',
        'ΔH_ion = −55.8 + 57.1 = +1.3 kJ mol⁻¹.'
      ]
    },
    {
      q:'According to the Hardy-Schulze rule, which of the following electrolytes has the maximum coagulating power for a negatively charged arsenious sulphide (As₂S₃) sol?',
      o:['AlCl₃ (Al³⁺)', 'BaCl₂ (Ba²⁺)', 'NaCl (Na⁺)', 'K₂SO₄ (K⁺)'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'For a negatively charged sol, coagulation is effected by positive cations.',
        'Coagulating power increases with cation valency: Al³⁺ (trivalent) > Ba²⁺ (divalent) > Na⁺ (monovalent).'
      ]
    },
    {
      q:'What is the chemical composition of Nessler reagent used to test for ammonium ions (NH₄⁺)?',
      o:['K₂[HgI₄] in alkaline KOH solution', 'K₂[HgCl₄] in neutral water', 'Hg(NH₂)Cl in HCl', '[Cu(NH₃)₄]SO₄ in water'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Nessler reagent is an alkaline solution of potassium tetraiodomercurate(II), K₂[HgI₄], prepared from HgCl₂, KI, and KOH.',
        'It reacts with NH₄⁺ to precipitate brown iodide of Millon base (H₂N–Hg–O–Hg–I).'
      ]
    },
    {
      q:'When dimethylglyoxime (DMG) is added to an ammoniacal solution of nickel chloride, a scarlet-red precipitate is formed. What is the coordination number and geometry of Nickel in this complex?',
      o:['Coordination number 4 and Square planar', 'Coordination number 6 and Octahedral', 'Coordination number 4 and Tetrahedral', 'Coordination number 2 and Linear'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'The bis(dimethylglyoximato)nickel(II) complex, [Ni(dmg)₂], has coordination number 4.',
        'Nickel(II) is dsp² hybridized, forming a planar square complex stabilized by two intramolecular O–H···O hydrogen bonds.'
      ]
    },
    {
      q:'In qualitative analysis of Group V cations, the flame test colour for Barium (Ba²⁺) and Calcium (Ca²⁺) are respectively:',
      o:['Apple green and Brick red', 'Brick red and Apple green', 'Crimson and Golden yellow', 'Lilac and Grass green'],
      a:0,
      tag:'Practical Trap',
      sol:[
        'When volatilized as chlorides in a Bunsen flame, Barium gives a persistent apple-green flame, while Calcium gives a transient brick-red flame.'
      ]
    },
    {
      q:'Which indicator is most suitable for the titration of a weak acid (e.g. oxalic acid) against a strong base (e.g. NaOH)?',
      o:['Phenolphthalein (pH range 8.3–10.0)', 'Methyl orange (pH range 3.1–4.4)', 'Methyl red (pH range 4.4–6.2)', 'Bromocresol green'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'At the equivalence point of a weak acid and strong base titration, the salt formed undergoes anionic hydrolysis, making the solution basic (pH ~ 8.5–9.0).',
        'Phenolphthalein changes colour in this exact basic pH range (8.3–10.0).'
      ]
    },
    {
      q:'When hydrogen sulphide (H₂S) gas is passed through an acidified solution containing Cu²⁺ and Zn²⁺ ions, only Cu²⁺ precipitates as black CuS because:',
      o:['The solubility product (Ksp) of CuS is vastly lower than that of ZnS', 'ZnS is soluble in water', 'H₂S does not react with zinc', 'HCl oxidizes Zn²⁺'],
      a:0,
      tag:'NCERT Exception',
      sol:[
        'In acidic medium (dil. HCl), the common ion H⁺ suppresses H₂S ionization, yielding a very low [S²⁻].',
        'The Ksp of CuS (~10⁻³⁶) is so small that its ionic product exceeds Ksp, while the Ksp of ZnS (~10⁻²⁴) is much larger and is not exceeded in acid medium.'
      ]
    },
    {
      q:'In the preparation of acetanilide from aniline, zinc dust is often added during acetylation to:',
      o:['Prevent aerial oxidation of aniline to coloured dark impurities', 'Act as a catalyst for acetylation', 'Neutralize acetic acid', 'Reduce acetanilide to an alkane'],
      a:0,
      tag:'Practical Trap',
      sol:[
        'Aniline is readily oxidized by air to dark brown/black oxidation products.',
        'Zinc dust acts as a mild reducing agent that keeps aniline in its reduced, colourless form during heating.'
      ]
    },
    {
      q:'A white crystalline precipitate obtained by reacting a magnesium salt solution with disodium hydrogen phosphate in the presence of NH₄Cl and NH₄OH has the formula:',
      o:['MgNH₄PO₄', 'Mg₃(PO₄)₂', 'MgHPO₄', 'Mg(H₂PO₄)₂'],
      a:0,
      tag:'Practical Trap',
      sol:[
        'Magnesium ion (Group VI) is confirmed by adding Na₂HPO₄ in the presence of NH₄Cl and NH₄OH to form a white crystalline precipitate of magnesium ammonium phosphate, MgNH₄PO₄.'
      ]
    },
    {
      q:'Which of the following represents an irreversible lyophobic colloidal sol?',
      o:['Fe(OH)₃ sol', 'Gelatin sol', 'Starch sol', 'Gum arabic sol'],
      a:0,
      tag:'Concept Trap',
      sol:[
        'Ferric hydroxide Fe(OH)₃ sol is an inorganic lyophobic (solvent-hating) sol prepared by chemical hydrolysis.',
        'It is irreversible; once coagulated by electrolytes, it cannot be reconstituted by simple addition of solvent.'
      ]
    }
  ],

  gens:[
    function(R){
      var vKMnO4 = R.pick([15, 20, 25, 30]);
      var mKMnO4 = 0.02; // Molarity
      var nFactorKMnO4 = 5;
      var nFactorOxalate = 2;
      var vOxalate = 20.0;
      var mOxalate = (mKMnO4 * nFactorKMnO4 * vKMnO4) / (nFactorOxalate * vOxalate);
      var d1 = mOxalate * 2.5;
      var d2 = mOxalate * 0.4;
      var d3 = (mKMnO4 * vKMnO4) / vOxalate;
      return {
        q:'In a redox titration, ' + vKMnO4 + ' mL of 0.02 M KMnO₄ solution in acidic medium completely oxidizes ' + vOxalate + ' mL of an oxalic acid solution. What is the molarity of the oxalic acid solution?',
        ans:mOxalate, d:[d1, d2, d3], u:'M',
        tag:'Calculation Trap',
        sol:[
          'Equivalence relation: N₁ V₁ = N₂ V₂  ⇒  (M₁ × n₁) V₁ = (M₂ × n₂) V₂.',
          'For KMnO₄ in acid: n₁ = 5. For oxalic acid: n₂ = 2.',
          '(0.02 × 5) × ' + vKMnO4 + ' = (M₂ × 2) × ' + vOxalate + '.',
          'M₂ = (' + (0.10 * vKMnO4) + ') / ' + (2 * vOxalate) + ' = ' + R.f(mOxalate) + ' M.'
        ]
      };
    },
    function(R){
      var deltaH = -57.1;
      var moles = R.pick([0.1, 0.2, 0.5]);
      var heatEvolved = Math.abs(deltaH * moles);
      var d1 = heatEvolved * 2;
      var d2 = heatEvolved / 2;
      var d3 = 57.1;
      return {
        q:'When ' + moles + ' mole of strong acid HCl is completely neutralized by ' + moles + ' mole of strong base NaOH in dilute aqueous solution, what is the amount of heat energy released in kJ (take standard enthalpy of neutralization = −57.1 kJ mol⁻¹)?',
        ans:heatEvolved, d:[d1, d2, d3], u:'kJ',
        tag:'Calculation Trap',
        sol:[
          'Enthalpy of neutralization of strong acid and strong base is 57.1 kJ per mole of water formed.',
          'Heat released = ' + moles + ' mol × 57.1 kJ mol⁻¹ = ' + R.f(heatEvolved) + ' kJ.'
        ]
      };
    }
  ]
});
