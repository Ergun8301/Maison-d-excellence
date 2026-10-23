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
      'accueil': ['Constructeur de maison individuelle dans l’Ain | Maisons d’Excellence', 'Maisons neuves sur-mesure à Meximieux, Bourg-en-Bresse et Ambérieu : plans personnalisés, CCMI à prix ferme, RE2020. 5,0/5 sur 36 avis Google.', ''],
      'modeles': ['Nos modèles de maisons dans l’Ain | Maisons d’Excellence', 'Maison plain-pied ou à étage, en briques ou béton cellulaire : chaque plan de maison individuelle est redessiné sur-mesure autour de votre terrain.', 'nos-modeles'],
      'realisations': ['Nos réalisations de maisons neuves dans l’Ain', 'Maisons traditionnelles et contemporaines construites à Meximieux, Pérouges et Montluel : brique, béton cellulaire, charpente traditionnelle.', 'realisations'],
      'entreprise': ['L’entreprise : savoir-faire et garanties CCMI', 'Constructeur à taille humaine dans l’Ain : plans sur-mesure, brique ou siporex, charpente traditionnelle, RE2020, CCMI et garantie décennale.', 'entreprise'],
      'contact': ['Contacter un constructeur à Meximieux | Maisons d’Excellence', 'Parlons de votre projet : 6 rue de Genève, 01800 Meximieux, 04 74 34 66 43, WhatsApp. Premier rendez-vous gratuit, réponse sous 48 h ouvrées.', 'contact'],
      'terrains': ['Terrains à bâtir dans l’Ain | Maisons d’Excellence', 'Terrains viabilisés à Attignat, près de Bourg-en-Bresse : deux lots de 891 et 910 m², étude de sol G2 réalisée, à 70 900 et 69 900 €. Plan et photos.', 'terrains'],
      'terrain-detail': ['Terrain à bâtir dans l’Ain | Maisons d’Excellence', 'Surface, accès et zone d’implantation : nous vérifions avec vous si votre projet de maison individuelle entre sur la parcelle qui vous intéresse.', 'terrains'],
      'investisseurs': ['Maison jumelée et projets investisseurs dans l’Ain', 'Maisons jumelées, mitoyennes et groupées : coût de construction, loyer de marché et rendement chiffrés sur votre parcelle et le PLU applicable.', 'investisseurs'],
      'blog': ['Blog construction : RE2020, prix au m², CCMI', 'Nos guides pour construire dans l’Ain : RE2020 en 2026, prix de construction au mètre carré, budget d’une maison de 100 m², échéancier CCMI.', 'blog'],
      'article': ['Guide construction de maison | Maisons d’Excellence', 'Repères de prix, de délais et de garanties pour construire sa maison individuelle dans l’Ain, expliqués par un constructeur CCMI de Meximieux.', 'blog'],
      'zone': ['Zone d’intervention : Bourg-en-Bresse, Meximieux | Maisons d’Excellence', 'Nous construisons autour de Meximieux, Bourg-en-Bresse et Ambérieu-en-Bugey, sur 30 km autour de chaque ville : Montluel, Lagnieu, Péronnas, Viriat.', 'zone-intervention'],
      'renovation': ['Rénovation et extension de maison dans l’Ain', 'Extension, surélévation, agrandissement et mise aux normes dans l’Ain : une activité secondaire menée avec la même exigence technique qu’un neuf.', 'renovation-extension'],
      'mentions': ['Mentions légales | Maisons d’Excellence', 'Mentions légales, hébergeur et informations RGPD de Maisons d’Excellence, SARL de construction de maisons individuelles basée à Meximieux (01).', 'mentions-legales'],
      'confidentialite': ['Politique de confidentialité | Maisons d’Excellence', 'Quelles données le formulaire recueille, quels services techniques votre navigateur appelle, et combien de temps vos messages sont conservés.', 'politique-confidentialite'],
      'meximieux': ['Construction maison individuelle à Meximieux | Maisons d’Excellence', 'Construire à Meximieux : bureau au 6 rue de Genève, plans sur-mesure, CCMI à prix ferme, RE2020. Premier rendez-vous gratuit, réponse sous 48 h ouvrées.', 'construction-maison-meximieux'],
      'bourg': ['Construction maison neuve à Bourg-en-Bresse | Maisons d’Excellence', 'Maison neuve à Bourg-en-Bresse et à 30 km autour : études de sol G1 et G2 en terre bressane, plans sur-mesure, CCMI à prix ferme et garanties légales.', 'construction-maison-bourg-en-bresse'],
      'amberieu': ['Constructeur maison à Ambérieu-en-Bugey | Maisons d’Excellence', 'Maison neuve à Ambérieu-en-Bugey : terrain en pente, sous-sol ou demi-niveaux, étude de sol G2. Plans sur-mesure, CCMI à prix ferme et garanties légales.', 'construction-maison-amberieu-en-bugey'],
      'viriat': ['Maison neuve à Viriat, près de Bourg-en-Bresse | Maisons d’Excellence', 'Construire à Viriat, à 7 km de Bourg-en-Bresse : hameaux, assainissement non collectif, permis de construire. Plans sur-mesure, CCMI à prix ferme.', 'construction-maison-viriat'],
      'peronnas': ['Construire à Péronnas, près de Bourg-en-Bresse | Maisons d’Excellence', 'Maison neuve à Péronnas, au sud de Bourg-en-Bresse : terrain issu d’une division, accès, vues et reculs. Plans sur-mesure, CCMI à prix ferme et garanties.', 'construction-maison-peronnas'],
      'saintdenis': ['Maison neuve à Saint-Denis-lès-Bourg | Maisons d’Excellence', 'Construire à Saint-Denis-lès-Bourg, aux portes de Bourg-en-Bresse : eaux de pluie, étude de sol G2, vide sanitaire. Plans sur-mesure, CCMI à prix ferme.', 'construction-maison-saint-denis-les-bourg'],
      'attignat': ['Construction maison à Attignat, près de Bourg | Maisons d’Excellence', 'Maison neuve à Attignat, au nord-ouest de Bourg-en-Bresse : OAP du PLU, raccordements, taxe d’aménagement. Plans sur-mesure, CCMI à prix ferme.', 'construction-maison-attignat'],
      'ceyzeriat': ['Maison à Ceyzériat, près de Bourg-en-Bresse | Maisons d’Excellence', 'Construire à Ceyzériat, au pied du Revermont, près de Bourg-en-Bresse : sol, plateforme ou sous-sol, aspect imposé. Plans sur-mesure, CCMI à prix ferme.', 'construction-maison-ceyzeriat'],
      'montluel': ['Constructeur de maison à Montluel | Maisons d’Excellence', 'Construire à Montluel, sur la Côtière : petite parcelle, emprise au sol, maison à étage ou plain-pied. Plans sur-mesure, CCMI à prix ferme, étude gratuite.', 'construction-maison-montluel'],
      'lagnieu': ['Construction maison plain-pied à Lagnieu | Maisons d’Excellence', 'Construire à Lagnieu, en plaine de l’Ain : sol de graviers, nappe, études G1 et G2, maison de plain-pied. Plans sur-mesure, CCMI à prix ferme et garanties.', 'construction-maison-lagnieu'],
      'montagnat': ['Construire à Montagnat, près de Bourg-en-Bresse | Maisons d’Excellence', 'Maison neuve à Montagnat, près de Bourg-en-Bresse : voisinage agricole, distances à respecter, haies et accès. Plans sur-mesure, CCMI à prix ferme.', 'construction-maison-montagnat'],
      'marboz': ['Maison à Marboz, au nord de Bourg-en-Bresse | Maisons d’Excellence', 'Construire à Marboz, au nord de Bourg-en-Bresse : maison RE2020, chauffage et orientation, maison en briques. Plans sur-mesure, CCMI à prix ferme.', 'construction-maison-marboz'],
      'montrevel': ['Maison neuve à Montrevel-en-Bresse | Maisons d’Excellence', 'Construire à Montrevel-en-Bresse, au nord de Bourg-en-Bresse : certificat d’urbanisme, promesse de vente, PTZ. Plans sur-mesure, CCMI à prix ferme.', 'construction-maison-montrevel-en-bresse'],
      'pontdain': ['Construire une maison à Pont-d’Ain | Maisons d’Excellence', 'Construire à Pont-d’Ain, sur la rivière d’Ain : plan de prévention des inondations, vide sanitaire haut, abords du château. CCMI à prix ferme, garanties.', 'construction-maison-pont-d-ain'],
      'dagneux': ['Construction maison neuve à Dagneux | Maisons d’Excellence', 'Construire à Dagneux, sur la Côtière : bruit de l’A42, isolement des façades, maison à étage. Plans sur-mesure, CCMI à prix ferme et RE2020.', 'construction-maison-dagneux'],
    } as const satisfies Record<string, MetaEntry>;
