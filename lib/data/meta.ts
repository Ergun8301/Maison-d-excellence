// Les couples title/description et les slugs canoniques.
// Le troisième élément est le slug de la route Next.js (chaîne vide pour
// l'accueil).
//
// Réécrits depuis la maquette pour tenir dans ce que Google affiche
// réellement : les titres d'origine faisaient 72 à 90 caractères et étaient
// tous tronqués, cinq descriptions dépassaient 176 caractères et se
// coupaient en pleine phrase. Cible retenue : 55 à 60 caractères pour le
// titre, 150 à 158 pour la description. Le suffixe de marque est raccourci en
// « MdE » sur les pages où le titre porte déjà le nom en toutes lettres, et
// omis là où chaque caractère compte.

export type MetaEntry = readonly [title: string, description: string, slug: string];

export const META = {
      'accueil': ['Constructeur de maison individuelle dans l’Ain | Maisons d’Excellence', 'Maisons neuves sur-mesure à Meximieux, Bourg-en-Bresse et Ambérieu : plans personnalisés, CCMI à prix ferme, RE2020. 5,0/5 sur 36 avis Google.', ''],
      'modeles': ['Maison sur mesure dans l’Ain : 8 modèles | MdE', 'Maison sur mesure dans l’Ain : 8 modèles plain-pied, à étage ou éco-conçus, redessinés autour de votre terrain. Permis déposé pour vous, CCMI à prix ferme.', 'nos-modeles'],
      'realisations': ['Nos réalisations de maisons neuves dans l’Ain', 'Maisons traditionnelles et contemporaines construites à Meximieux, Pérouges et Montluel : brique, béton cellulaire, charpente traditionnelle.', 'realisations'],
      'entreprise': ['L’entreprise : savoir-faire et garanties CCMI', 'Constructeur à taille humaine dans l’Ain : plans sur-mesure, brique ou siporex, charpente traditionnelle, RE2020, CCMI et garantie décennale.', 'entreprise'],
      'contact': ['Contacter un constructeur à Meximieux | Maisons d’Excellence', 'Parlons de votre projet : 6 rue de Genève, 01800 Meximieux, 04 74 34 66 43, WhatsApp. Premier rendez-vous gratuit, réponse sous 48 h ouvrées.', 'contact'],
      'terrains': ['Terrains à bâtir dans l’Ain | Maisons d’Excellence', 'Terrains viabilisés à Attignat, près de Bourg-en-Bresse : deux lots de 891 et 910 m², étude de sol G2 réalisée, à 70 900 et 69 900 €. Plan et photos.', 'terrains'],
      'terrain-detail': ['Terrain à bâtir dans l’Ain | Maisons d’Excellence', 'Surface, accès et zone d’implantation : nous vérifions avec vous si votre projet de maison individuelle entre sur la parcelle qui vous intéresse.', 'terrains'],
      'investisseurs': ['Maison jumelée et projets investisseurs dans l’Ain', 'Maisons jumelées, mitoyennes et groupées : coût de construction, loyer de marché et rendement chiffrés sur votre parcelle et le PLU applicable.', 'investisseurs'],
      'blog': ['Blog construction : RE2020, prix au m², CCMI', 'Nos guides pour construire dans l’Ain : RE2020 en 2026, prix de construction au mètre carré, budget d’une maison de 100 m², échéancier CCMI.', 'blog'],
      'article': ['Guide construction de maison | Maisons d’Excellence', 'Repères de prix, de délais et de garanties pour construire sa maison individuelle dans l’Ain, expliqués par un constructeur CCMI de Meximieux.', 'blog'],
      'zone': ['Zone d’intervention : Bourg-en-Bresse, Meximieux | Maisons d’Excellence', 'Nous construisons autour de Meximieux, Bourg-en-Bresse et Ambérieu-en-Bugey, sur 30 km autour de chaque ville : Montluel, Lagnieu, Péronnas, Viriat.', 'zone-intervention'],
      'renovation': ['Extension de maison dans l’Ain : agrandissement, brique, béton cellulaire, bois | Maisons d’Excellence', 'Agrandir sa maison autour de Bourg-en-Bresse, Meximieux et Ambérieu : types d’extension, brique, béton cellulaire ou ossature bois, PLU, permis et budget.', 'renovation-extension'],
      'mentions': ['Mentions légales | Maisons d’Excellence', 'Mentions légales, hébergeur et informations RGPD de Maisons d’Excellence, SARL de construction de maisons individuelles basée à Meximieux (01).', 'mentions-legales'],
      'confidentialite': ['Politique de confidentialité | Maisons d’Excellence', 'Quelles données le formulaire recueille, quels services techniques votre navigateur appelle, et combien de temps vos messages sont conservés.', 'politique-confidentialite'],
      'meximieux': ['Constructeur maison Meximieux (01) – Devis gratuit | MdE', 'Maison neuve à Meximieux, bureau au 6 rue de Genève : prix maîtrisés, CCMI à prix ferme, garanties légales. Estimation gratuite en 2 min.', 'construction-maison-meximieux'],
      'bourg': ['Constructeur maison Bourg-en-Bresse (01) – Devis gratuit', 'Maison neuve à Bourg-en-Bresse : terre bressane, études de sol G1 et G2, prix maîtrisés grâce au CCMI. Estimation gratuite en 2 min.', 'construction-maison-bourg-en-bresse'],
      'amberieu': ['Constructeur maison Ambérieu-en-Bugey (01) – Devis gratuit', 'Maison neuve à Ambérieu-en-Bugey : terrain en pente ou sous-sol, CCMI à prix ferme, garanties légales. Estimation gratuite en 2 min.', 'construction-maison-amberieu-en-bugey'],
      'viriat': ['Constructeur maison Viriat (01) – Devis gratuit | MdE', 'Construire à Viriat, à 7 km de Bourg : hameaux, assainissement, prix maîtrisés et contrat CCMI protecteur. Estimation gratuite en 2 min.', 'construction-maison-viriat'],
      'peronnas': ['Constructeur maison Péronnas (01) – Devis gratuit | MdE', 'Maison neuve à Péronnas, au sud de Bourg : prix maîtrisés, plans sur-mesure, CCMI et garanties légales. Estimation gratuite en 2 min.', 'construction-maison-peronnas'],
      'saintdenis': ['Maison Saint-Denis-lès-Bourg (01) – Devis gratuit | MdE', 'Construire aux portes de Bourg : eaux de pluie gérées sur la parcelle, prix ferme CCMI, garanties. Estimation gratuite en 2 min.', 'construction-maison-saint-denis-les-bourg'],
      'attignat': ['Constructeur maison Attignat (01) – Devis gratuit | MdE', 'Maison neuve à Attignat, village qui s’agrandit : PLU et raccordements vérifiés, prix maîtrisés, CCMI. Estimation gratuite en 2 min.', 'construction-maison-attignat'],
      'ceyzeriat': ['Constructeur maison Ceyzériat (01) – Devis gratuit | MdE', 'Construire à Ceyzériat, au pied du Revermont : terrain en pente, prix maîtrisés, CCMI et garanties. Estimation gratuite en 2 min.', 'construction-maison-ceyzeriat'],
      'montluel': ['Constructeur maison Montluel (01) – Devis gratuit | MdE', 'Maison à Montluel, sur la Côtière : plans adaptés aux petites parcelles, prix maîtrisés, CCMI, garanties. Estimation gratuite en 2 min.', 'construction-maison-montluel'],
      'lagnieu': ['Constructeur maison Lagnieu (01) – Devis gratuit | MdE', 'Maison de plain-pied à Lagnieu : sol de graviers étudié, prix maîtrisés, CCMI à prix ferme et garanties. Estimation gratuite en 2 min.', 'construction-maison-lagnieu'],
      'montagnat': ['Constructeur maison Montagnat (01) – Devis gratuit | MdE', 'Maison neuve à Montagnat : voisinage agricole et distances vérifiés, prix ferme CCMI, garanties légales. Estimation gratuite en 2 min.', 'construction-maison-montagnat'],
      'marboz': ['Constructeur maison Marboz (01) – Devis gratuit | MdE', 'Construire à Marboz : maison RE2020 bien orientée, prix maîtrisés, CCMI à prix ferme et garanties. Estimation gratuite en 2 min.', 'construction-maison-marboz'],
      'montrevel': ['Constructeur maison Montrevel-en-Bresse (01) – Devis gratuit', 'Terrain à Montrevel-en-Bresse ? Certificat d’urbanisme, prix maîtrisés, CCMI à prix ferme et garanties. Estimation gratuite en 2 min.', 'construction-maison-montrevel-en-bresse'],
      'pontdain': ['Constructeur maison Pont-d’Ain (01) – Devis gratuit | MdE', 'Construire à Pont-d’Ain en zone inondable : cote de référence respectée, CCMI à prix ferme, garanties. Estimation gratuite en 2 min.', 'construction-maison-pont-d-ain'],
      'dagneux': ['Constructeur maison Dagneux (01) – Devis gratuit | MdE', 'Maison neuve à Dagneux, près de l’A42 : façades bien isolées du bruit, prix maîtrisés, CCMI, garanties. Estimation gratuite en 2 min.', 'construction-maison-dagneux'],
      'saintdenisenbugey': ['Maison Saint-Denis-en-Bugey (01) – Devis gratuit | MdE', 'Maison à Saint-Denis-en-Bugey, près de la gare d’Ambérieu : prix maîtrisés, CCMI à prix ferme, garanties. Estimation gratuite en 2 min.', 'construction-maison-saint-denis-en-bugey'],
      'chateaugaillard': ['Constructeur maison Château-Gaillard (01) – Devis gratuit', 'Construire à Château-Gaillard, à 3 km d’Ambérieu : plans sur-mesure, prix maîtrisés, CCMI et garanties. Estimation gratuite en 2 min.', 'construction-maison-chateau-gaillard'],
      'bourgsaintchristophe': ['Maison Bourg-Saint-Christophe (01) – Devis gratuit | MdE', 'Maison à Bourg-Saint-Christophe, au pied de la Côtière : ruissellement étudié, CCMI à prix ferme, garanties. Estimation gratuite en 2 min.', 'construction-maison-bourg-saint-christophe'],
      'villieuloyesmollon': ['Maison Villieu-Loyes-Mollon (01) – Devis gratuit | MdE', 'Maison neuve à Villieu-Loyes-Mollon, à 3 km de Meximieux : PLU lu pour vous, prix ferme CCMI, garanties. Estimation gratuite en 2 min.', 'construction-maison-villieu-loyes-mollon'],
      'polliat': ['Constructeur maison Polliat (01) – Devis gratuit | MdE', 'Construire à Polliat, à 10 km de Bourg, près de la gare TER : prix maîtrisés, CCMI à prix ferme, garanties. Estimation gratuite en 2 min.', 'construction-maison-polliat'],
      'servas': ['Constructeur maison Servas (01) – Devis gratuit | MdE', 'Maison neuve à Servas, village bressan : bon côté de la route choisi, prix ferme CCMI et garanties légales. Estimation gratuite en 2 min.', 'construction-maison-servas'],
      'jasseron': ['Constructeur maison Jasseron (01) – Devis gratuit | MdE', 'Construire à Jasseron, dans le Revermont à 8 km de Bourg : lisière de bois vérifiée, CCMI, garanties légales. Estimation gratuite en 2 min.', 'construction-maison-jasseron'],
      'buellas': ['Constructeur maison Buellas (01) – Devis gratuit | MdE', 'Maison neuve à Buellas, entre plaine bressane et plateau : relief étudié, prix maîtrisés, CCMI, garanties. Estimation gratuite en 2 min.', 'construction-maison-buellas'],
      'mezeriat': ['Maison neuve Mézériat (01) – Devis gratuit | MdE', 'Maison à Mézériat, à 20 km de Bourg, près de la gare TER : rivière et ruisseaux vérifiés, CCMI à prix ferme, garanties. Estimation gratuite.', 'construction-maison-mezeriat'],
      'chatillonsurchalaronne': ['Maison Châtillon-sur-Chalaronne (01) – Devis gratuit', 'Construire à Châtillon-sur-Chalaronne, près des monuments protégés : aspect étudié, CCMI à prix ferme, garanties. Estimation gratuite en 2 min.', 'construction-maison-chatillon-sur-chalaronne'],
      'villarslesdombes': ['Maison Villars-les-Dombes (01) – Devis gratuit | MdE', 'Maison neuve à Villars-les-Dombes, au pays des étangs : sol étudié, CCMI à prix ferme et garanties légales. Estimation gratuite en 2 min.', 'construction-maison-villars-les-dombes'],
      'chalamont': ['Maison neuve Chalamont (01) – Devis gratuit | MdE', 'Construire à Chalamont, à 10 km de notre bureau de Meximieux : sol des étangs étudié, CCMI à prix ferme, garanties. Estimation gratuite.', 'construction-maison-chalamont'],
      'miribel': ['Maison neuve Miribel (01) – Devis gratuit | MdE', 'Maison à Miribel, à 13 km de Lyon : plan de prévention des risques lu avant le plan de maison, CCMI, garanties. Estimation gratuite en 2 min.', 'construction-maison-miribel'],
      'extBourg': ['Extension de maison à Bourg-en-Bresse (01) | MdE', 'Agrandir sa maison à Bourg-en-Bresse : argile bressane, jonction avec l’existant, déclaration ou permis selon la surface. Estimation en ligne.', 'extension-maison-bourg-en-bresse'],
      'extMeximieux': ['Extension de maison à Meximieux (01) | MdE', 'Agrandir sa maison à Meximieux, près de Pérouges : avis de l’architecte des Bâtiments de France, Côtière, petites parcelles. Bureau sur place.', 'extension-maison-meximieux'],
      'extAmberieu': ['Extension de maison à Ambérieu-en-Bugey (01) | MdE', 'Agrandir sa maison à Ambérieu-en-Bugey : terrain en pente, sous-sol ou demi-niveau, étude de sol, déclaration ou permis. Estimation en ligne.', 'extension-maison-amberieu-en-bugey'],
    } as const satisfies Record<string, MetaEntry>;
