// Les 25 couples title/description et les slugs canoniques.
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
      'accueil': ['Constructeur de maison individuelle dans l’Ain | MdE', 'Maisons individuelles sur-mesure à Meximieux (01). Estimez votre projet en une minute : plans sur-mesure, CCMI, RE2020. 5,0/5 sur 36 avis Google.', ''],
      'modeles': ['Nos modèles de maisons dans l’Ain | MdE', 'Plain-pied, maison à étage, construction éco-conçue RE2020. Chaque plan se redessine sur-mesure autour de votre terrain, permis de construire compris.', 'nos-modeles'],
      'realisations': ['Nos réalisations de maisons neuves dans l’Ain', 'Maisons traditionnelles et contemporaines construites à Meximieux, Pérouges et Montluel : brique, béton cellulaire, charpente traditionnelle.', 'realisations'],
      'entreprise': ['L’entreprise : savoir-faire et garanties CCMI', 'Constructeur à taille humaine dans l’Ain : plans sur-mesure, brique ou siporex, charpente traditionnelle, RE2020, CCMI et garantie décennale.', 'entreprise'],
      'contact': ['Contact — constructeur à Meximieux (01) | MdE', 'Parlons de votre projet : 6 rue de Genève, 01800 Meximieux, 04 74 34 66 43, WhatsApp. Premier rendez-vous gratuit, réponse sous 48 h ouvrées.', 'contact'],
      'terrains': ['Terrains à bâtir dans l’Ain | Maisons d’Excellence', 'Nos opportunités foncières dans la Plaine de l’Ain, la Côtière et le Bugey. Contactez-nous pour connaître les parcelles suivies en ce moment.', 'terrains'],
      'terrain-detail': ['Terrain à bâtir dans l’Ain | Maisons d’Excellence', 'Surface, secteur et faisabilité : nous étudions gratuitement si votre projet de maison individuelle entre sur la parcelle qui vous intéresse.', 'terrains'],
      'investisseurs': ['Maison jumelée et projets investisseurs dans l’Ain', 'Maisons jumelées, mitoyennes et groupées : coût de construction, loyer de marché et rendement chiffrés sur votre parcelle et le PLU applicable.', 'investisseurs'],
      'blog': ['Blog construction : RE2020, prix au m², CCMI', 'Nos guides pour construire dans l’Ain : RE2020 en 2026, prix de construction au mètre carré, budget d’une maison de 100 m², échéancier CCMI.', 'blog'],
      'article': ['Guide construction de maison | Maisons d’Excellence', 'Repères de prix, de délais et de garanties pour construire sa maison individuelle dans l’Ain, expliqués par un constructeur CCMI de Meximieux.', 'blog'],
      'zone': ['Zone d’intervention : 3 pôles, 30 km autour de chacun', 'Nous construisons dans un rayon de 30 km autour de Meximieux, Bourg-en-Bresse et Ambérieu-en-Bugey : Montluel, Lagnieu, Pérouges, Péronnas, Viriat, Attignat.', 'zone-intervention'],
      'renovation': ['Rénovation et extension de maison dans l’Ain', 'Extension, surélévation, agrandissement et mise aux normes dans l’Ain : une activité secondaire menée avec la même exigence technique qu’un neuf.', 'renovation-extension'],
      'mentions': ['Mentions légales | Maisons d’Excellence', 'Mentions légales, hébergeur et informations RGPD de Maisons d’Excellence, SARL de construction de maisons individuelles basée à Meximieux (01).', 'mentions-legales'],
      'confidentialite': ['Politique de confidentialité | Maisons d’Excellence', 'Quelles données le formulaire recueille, quels services techniques votre navigateur appelle, et combien de temps vos messages sont conservés.', 'politique-confidentialite'],
      'meximieux': ['Constructeur de maison à Meximieux (01) | MdE', 'Notre bureau est au 6 rue de Genève, à Meximieux : plans dessinés sur-mesure, CCMI, RE2020. Pérouges, Charnoz, Chazey, Villieu et la plaine de l’Ain.', 'construction-maison-meximieux'],
      'bourg': ['Constructeur de maison à Bourg-en-Bresse | MdE', 'Construire à Bourg-en-Bresse et dans sa couronne : étude de sol en terre bressane, plans dessinés sur-mesure, CCMI à prix ferme et garanties légales.', 'construction-maison-bourg-en-bresse'],
      'amberieu': ['Constructeur de maison à Ambérieu-en-Bugey | MdE', 'Maison neuve à Ambérieu-en-Bugey : terrains en pente, sous-sol ou demi-niveaux, étude de sol au pied du Bugey. Plans sur-mesure, CCMI et garanties.', 'construction-maison-amberieu-en-bugey'],
      'viriat': ['Constructeur de maison à Viriat (01) | MdE', 'Construire à Viriat, au nord de Bourg-en-Bresse : hameaux dispersés, assainissement non collectif, étude de sol. Plans sur-mesure et CCMI à prix ferme.', 'construction-maison-viriat'],
      'peronnas': ['Constructeur de maison à Péronnas (01) | MdE', 'Construire à Péronnas, au sud de Bourg-en-Bresse : terrain issu d’une division, accès, règles de vues et de recul. Plans sur-mesure, CCMI et garanties.', 'construction-maison-peronnas'],
      'saintdenis': ['Constructeur de maison à Saint-Denis-lès-Bourg (01)', 'Construire à Saint-Denis-lès-Bourg : eaux de pluie à garder sur la parcelle, argile bressane, étude de sol. Plans dessinés sur-mesure et CCMI à prix ferme.', 'construction-maison-saint-denis-les-bourg'],
      'attignat': ['Constructeur de maison à Attignat (01) | MdE', 'Construire à Attignat, au nord de Bourg-en-Bresse : secteurs d’extension du PLU, raccordements, taxe d’aménagement. Plans sur-mesure et CCMI à prix ferme.', 'construction-maison-attignat'],
      'ceyzeriat': ['Constructeur de maison à Ceyzériat (01) | MdE', 'Construire à Ceyzériat, au pied du Revermont : terrain rocheux, terrassement, aspect extérieur encadré par le PLU. Plans sur-mesure et CCMI à prix ferme.', 'construction-maison-ceyzeriat'],
      'montluel': ['Constructeur de maison à Montluel (01) | MdE', 'Construire à Montluel, sur la Côtière : petites parcelles, emprise au sol, maison à étage. Étude de faisabilité gratuite, plans sur-mesure et CCMI.', 'construction-maison-montluel'],
      'lagnieu': ['Constructeur de maison à Lagnieu (01) | MdE', 'Construire à Lagnieu, en plaine de l’Ain : sol de graviers, niveau de la nappe, terrain plat. Plans dessinés sur-mesure, CCMI à prix ferme et garanties.', 'construction-maison-lagnieu'],
      'montagnat': ['Constructeur de maison à Montagnat (01) | MdE', 'Construire à Montagnat, près de Bourg-en-Bresse : voisinage agricole, distances à respecter, haies et accès. Plans dessinés sur-mesure, CCMI à prix ferme.', 'construction-maison-montagnat'],
      'marboz': ['Constructeur de maison à Marboz (01) | MdE', 'Construire à Marboz, au nord de Bourg-en-Bresse : chauffage hors gaz de ville, orientation, RE2020. Plans dessinés sur-mesure, CCMI à prix ferme et garanties.', 'construction-maison-marboz'],
      'montrevel': ['Constructeur de maison à Montrevel-en-Bresse | MdE', 'Construire à Montrevel-en-Bresse : certificat d’urbanisme, promesse de vente et conditions suspensives avant d’acheter. Plans sur-mesure, CCMI à prix ferme.', 'construction-maison-montrevel-en-bresse'],
      'pontdain': ['Constructeur de maison à Pont-d’Ain (01) | MdE', 'Construire à Pont-d’Ain, sur la rivière d’Ain : plan de prévention des inondations, plancher surélevé, abords du château. Plans sur-mesure, CCMI et garanties.', 'construction-maison-pont-d-ain'],
      'dagneux': ['Constructeur de maison à Dagneux (01) | MdE', 'Construire à Dagneux, sur la Côtière : bruit de l’A42, isolement des façades, plan tourné vers le côté calme. Plans dessinés sur-mesure, CCMI à prix ferme.', 'construction-maison-dagneux'],
    } as const satisfies Record<string, MetaEntry>;
