// Les 13 couples title/description et les slugs canoniques, repris mot pour
// mot de la maquette. Le troisième élément est le slug de la route Next.js
// (chaîne vide pour l'accueil).

export type MetaEntry = readonly [title: string, description: string, slug: string];

export const META = {
      'accueil': ['Constructeur de maison individuelle dans l\u2019Ain | Maisons d\u2019Excellence', 'Constructeur de maisons individuelles sur-mesure à Meximieux (01) : Bourg-en-Bresse, Ambérieu-en-Bugey, Villefranche-sur-Saône. Estimez le prix de votre maison en une minute. Plans sur-mesure, CCMI, RE2020. 5,0/5 sur Google.', ''],
      'modeles': ['Nos modèles de maisons individuelles dans l\u2019Ain | Maisons d\u2019Excellence', 'Modèles de maisons neuves dans l\u2019Ain : plain-pied, maison à étage, construction éco-conçue RE2020. Chaque plan se redessine sur-mesure autour de votre terrain, permis de construire compris.', 'nos-modeles'],
      'realisations': ['Nos réalisations de maisons neuves dans l\u2019Ain | Maisons d\u2019Excellence', 'Maisons individuelles traditionnelles et contemporaines construites à Meximieux, Pérouges, Montluel et dans tout l\u2019Ain. Brique, béton cellulaire, charpente traditionnelle.', 'realisations'],
      'entreprise': ['L\u2019entreprise : savoir-faire technique et garanties CCMI | Maisons d\u2019Excellence', 'Constructeur à taille humaine dans l\u2019Ain : plans sur-mesure, maison en brique ou siporex, vide sanitaire, charpente traditionnelle, RE2020, CCMI, garantie décennale et échéancier de paiement légal expliqué.', 'entreprise'],
      'contact': ['Contact — constructeur de maison individuelle à Meximieux (01) | Maisons d\u2019Excellence', 'Parlons de votre projet de maison neuve dans l\u2019Ain : 6 rue de Genève, 01800 Meximieux, 04 74 34 66 43, WhatsApp. Premier rendez-vous gratuit et sans engagement, réponse sous 48 h ouvrées.', 'contact'],
      'terrains': ['Terrains à bâtir disponibles dans l\u2019Ain | Maisons d\u2019Excellence', 'Terrains constructibles sélectionnés dans la Plaine de l\u2019Ain, la Côtière et le Bugey : commune, surface, prix, disponibilité.', 'terrains'],
      'terrain-detail': ['Terrain à bâtir dans l\u2019Ain | Maisons d\u2019Excellence', 'Fiche détaillée d\u2019un terrain constructible dans l\u2019Ain : surface, prix, secteur, faisabilité de votre projet de maison.', 'terrains'],
      'investisseurs': ['Maison jumelée et projets investisseurs dans l\u2019Ain | Maisons d\u2019Excellence', 'Maisons jumelées, mitoyennes et groupées pour investisseurs dans l\u2019Ain : coût de construction, loyers de marché, rendement brut, montage du projet.', 'investisseurs'],
      'blog': ['Blog construction : RE2020, prix au m², CCMI | Maisons d\u2019Excellence', 'Nos guides sur la construction de maison individuelle dans l\u2019Ain : RE2020 en 2026, prix de construction au m², budget d\u2019une maison de 100 m², échéancier CCMI.', 'blog'],
      'article': ['Guide construction de maison | Maisons d\u2019Excellence', 'Guides et repères de prix pour construire sa maison individuelle dans l\u2019Ain.', 'blog'],
      'zone': ['Zone d\u2019intervention : 30 km autour de Meximieux | Maisons d\u2019Excellence', 'Nous construisons dans un rayon de 30 km autour de Meximieux, Bourg-en-Bresse et Ambérieu-en-Bugey : Montluel, Lagnieu, Pérouges, Miribel, Villars-les-Dombes, Chalamont.', 'zone-intervention'],
      'renovation': ['Rénovation et extension de maison dans l\u2019Ain | Maisons d\u2019Excellence', 'Extension de maison et rénovation dans l\u2019Ain : surélévation, agrandissement, mise aux normes. Une activité secondaire menée avec la même exigence technique.', 'renovation-extension'],
      'mentions': ['Mentions légales | Maisons d\u2019Excellence', 'Mentions légales et informations RGPD de Maisons d\u2019Excellence Constructeurs de Maisons Individuelles, SARL basée à Meximieux (01).', 'mentions-legales']
    } as const satisfies Record<string, MetaEntry>;
