// Les 13 couples title/description et les slugs canoniques.
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
      'zone': ['Zone d’intervention : 30 km autour de Meximieux', 'Nous construisons autour de Meximieux, Bourg-en-Bresse et Ambérieu-en-Bugey : Montluel, Lagnieu, Pérouges, Miribel, Villars-les-Dombes, Chalamont.', 'zone-intervention'],
      'renovation': ['Rénovation et extension de maison dans l’Ain', 'Extension, surélévation, agrandissement et mise aux normes dans l’Ain : une activité secondaire menée avec la même exigence technique qu’un neuf.', 'renovation-extension'],
      'mentions': ['Mentions légales | Maisons d’Excellence', 'Mentions légales, hébergeur et informations RGPD de Maisons d’Excellence, SARL de construction de maisons individuelles basée à Meximieux (01).', 'mentions-legales']
    } as const satisfies Record<string, MetaEntry>;
