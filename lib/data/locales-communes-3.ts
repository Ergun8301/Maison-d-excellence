import type { PageLocale } from '@/lib/data/locales';

/**
 * Cinq communes de plus : Mézériat et Châtillon-sur-Chalaronne (zone de
 * Bourg-en-Bresse), Villars-les-Dombes, Chalamont et Miribel (zone de
 * Meximieux). Elles s'ajoutent aux vingt de lib/data/locales.ts et
 * lib/data/locales-communes-2.ts, dont elles reprennent le gabarit et les
 * règles d'écriture (voir l'en-tête de lib/data/locales.ts).
 *
 * Ce qui est écrit ici vient de deux sources, et d'elles seules :
 *
 *  - la fiche de chaque commune sur Wikipédia, lue le 19 novembre 2026
 *    (situation, distances données par la fiche, routes, cours d'eau,
 *    monuments protégés, population Insee 2022) ;
 *  - des règles générales, présentées comme des points à vérifier auprès de la
 *    mairie : périmètre d'un monument protégé, plan de prévention des risques,
 *    classement sonore des voies, étude de sol.
 *
 * Rien n'est inventé : ni PLU, ni prix, ni délai, ni chantier attribué à une
 * commune. Là où la fiche d'une commune ne dit rien (communes limitrophes de
 * Chalamont et de Villars-les-Dombes, intercommunalité de Mézériat, risques de
 * Mézériat, Châtillon, Villars et Chalamont), la page non plus.
 *
 * Chaque page a son propre sujet :
 *
 *   Mézériat               une rivière, un bras, un ruisseau : l'eau avant le plan
 *   Châtillon-sur-Chalaronne  construire près de monuments protégés
 *   Villars-les-Dombes     les étangs de la Dombes et ce qu'ils demandent au terrain
 *   Chalamont              le carrefour de la Dombes, à dix kilomètres du bureau
 *   Miribel                la porte de Lyon : le plan de prévention et les transports
 *
 * Les photos sont celles des réalisations déjà publiées sur le site. Le texte
 * alternatif décrit l'image, sans la rattacher à la commune.
 */
export const LOCALES_COMMUNES_3: readonly PageLocale[] = [
  /* ── Mézériat ──────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-mezeriat',
    commune: 'Mézériat',
    surtitre: 'Mézériat · Ain (01)',
    h1: ['Construire une maison à', 'Mézériat', 'Bourg-en-Bresse'],
    intro: [
      'Mézériat se trouve à environ vingt kilomètres de Bourg-en-Bresse. L’Insee y comptait 2 179 habitants en 2022. La ligne de Mâcon à Ambérieu traverse la commune, et sa gare est desservie par les TER.',
      'Ce qui frappe sur la carte, c’est l’eau : une rivière, l’un de ses bras et deux ruisseaux se partagent le territoire. Pour qui veut construire, c’est le premier sujet à regarder, avant même le plan de la maison.',
    ],
    photo: {
      src: '/photos/maison-familiale-etage.webp',
      w: 1448,
      h: 1086,
      alt: 'Maison à étage en enduit beige, toiture en tuiles rouges et garage à porte blanche, sur un terrain nu',
    },
    blocs: [
      {
        titre: 'La Veyle, son bras et deux ruisseaux',
        paragraphes: [
          'La Veyle traverse la commune d’est en ouest, et la Morte en est un bras. L’Irance forme la frontière sud avec Vandeins, et le Bief de Cheval Queue, ou de Montlessard, un ruisseau du nord, longe la limite avec Confrançon et Saint-Genis-sur-Menthon. Une partie de la Veyle sert aussi de frontière avec Vonnas.',
          'La fiche de la commune ne mentionne aucun risque naturel. Cela ne dispense pas de poser la question : pour une parcelle proche d’un cours d’eau, la mairie dit si elle se trouve dans un secteur couvert par un plan de prévention, et ce que cela impose au niveau du plancher. Nous le demandons avant de chiffrer, et [les étapes d’un projet](/blog/etapes-projet-construction) placent cette vérification avant le dépôt du permis.',
        ],
      },
      {
        titre: 'Un bourg et des lieux-dits',
        paragraphes: [
          'Le territoire compte un bourg et plusieurs lieux-dits : Vaudrenand, Fay, Montfalcon, Chandé et d’autres, cités dans la fiche de la commune. Entre le bourg et un lieu-dit, l’accès, la distance aux réseaux et le voisinage ne sont pas les mêmes, et ce sont eux qui décident de ce qu’on peut dessiner.',
          'Un terrain isolé demande aussi de savoir comment il sera raccordé à l’eau, à l’électricité et à l’assainissement ; cela se vérifie à la mairie avant l’achat. [Nos modèles de maisons](/nos-modeles) donnent un point de départ, mais le plan se redessine autour de la parcelle.',
        ],
      },
      {
        titre: 'Les routes et la gare',
        paragraphes: [
          'La D 26, nommée Grande Rue dans le bourg, traverse la commune du nord au sud. La D 1079 passe sur une petite partie au nord-est, au lieu-dit les Pigots. Aucune autoroute ne traverse Mézériat.',
          'La gare est sur la ligne de Mâcon à Ambérieu. Pour un actif qui prend le train, c’est un argument ; pour une parcelle voisine de la voie, c’est une donnée de plan : où placer les chambres, quelles menuiseries choisir. [Polliat](/construction-maison-polliat), sur la même ligne, a elle aussi sa gare TER.',
        ],
      },
      {
        titre: 'Aucun monument protégé, un cadre simple',
        paragraphes: [
          'D’après la fiche de la commune, aucun monument de Mézériat ne figure parmi les monuments historiques de France. L’église Saint-Christophe-et-Saint-André et la chapelle Notre-Dame de Montfalcon y sont décrites comme des lieux d’intérêt, sans protection indiquée. Une parcelle n’a donc pas, a priori, à respecter l’avis d’un architecte des bâtiments de France du fait d’un monument de la commune : la mairie le confirme pour chaque terrain.',
          'Si vous cherchez encore une parcelle, [nos terrains à bâtir](/terrains) montrent ce que nous suivons dans l’Ain ; si vous en avez une, [écrivez-nous](/contact) avec le plan cadastral.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Mézériat est dans notre zone d’intervention autour de Bourg-en-Bresse, à environ vingt kilomètres de la ville. Notre bureau est à Meximieux : [la page de Meximieux](/construction-maison-meximieux) donne l’adresse et les horaires pour un premier rendez-vous.',
    },
    faqTitre: 'Questions qu’on nous pose à Mézériat',
    faq: [
      {
        q: 'À quelle distance de Bourg-en-Bresse se trouve Mézériat ?',
        r: 'À environ vingt kilomètres, d’après la fiche de la commune.',
      },
      {
        q: 'Quelles rivières traversent la commune ?',
        r: 'La Veyle, qui la traverse d’est en ouest, et la Morte, l’un de ses bras ; l’Irance forme la frontière sud avec Vandeins.',
      },
      {
        q: 'Mézériat a-t-elle une gare ?',
        r: 'Oui : la ligne de Mâcon à Ambérieu traverse la commune et la gare est desservie par les TER.',
      },
      {
        q: 'Y a-t-il une autoroute sur la commune ?',
        r: 'Non, aucune autoroute ne traverse Mézériat. La D 26 la traverse du nord au sud, la D 1079 touche son extrémité nord-est.',
      },
      {
        q: 'Combien d’habitants compte Mézériat ?',
        r: '2 179 habitants en 2022, d’après la population municipale de référence.',
      },
    ],
    ctaTexte:
      'Le simulateur donne la maison seule. Dites-nous quelle parcelle vous visez à Mézériat et si un cours d’eau la borde : cela change ce qu’on vérifie avant de dessiner.',
    invitation: 'Pour voir une maison en cours de chantier près de Bourg-en-Bresse, appelez-nous au',
  },

  /* ── Châtillon-sur-Chalaronne ──────────────────────────────────────────── */
  {
    slug: 'construction-maison-chatillon-sur-chalaronne',
    commune: 'Châtillon-sur-Chalaronne',
    surtitre: 'Châtillon-sur-Chalaronne · Ain (01)',
    h1: ['Construire une maison à', 'Châtillon-sur-Chalaronne', 'Bourg-en-Bresse'],
    intro: [
      'Châtillon-sur-Chalaronne est le siège de la communauté de communes de la Dombes. Elle est à vingt-trois kilomètres à l’ouest de Bourg-en-Bresse et à quarante et un kilomètres au nord de Lyon. L’Insee y comptait 5 154 habitants en 2022, en hausse de 5,49 % par rapport à 2016.',
      'C’est une petite ville ancienne : cinq éléments de son patrimoine sont protégés au titre des monuments historiques. Pour construire, c’est la première chose à savoir.',
    ],
    photo: {
      src: '/photos/maison-traditionnelle-etage.webp',
      w: 1490,
      h: 1056,
      alt: 'Maison traditionnelle à étage, enduit ton pierre, construite dans l’Ain',
    },
    blocs: [
      {
        titre: 'Cinq monuments protégés dans une petite ville',
        paragraphes: [
          'D’après la fiche de la commune : l’ancien château est inscrit, les halles du XVIIe siècle sont classées, l’église Saint-André-et-Saint-Vincent-de-Paul est classée, la porte de Villars est inscrite et l’hospice est classé.',
          'Autour d’un monument protégé, un périmètre s’applique en général : un projet situé dans le champ de vue du monument demande l’avis de l’architecte des bâtiments de France, qui peut imposer des matériaux, des couleurs ou une toiture. La mairie dit si une parcelle y est incluse. Nous posons la question avant de dessiner, parce que cet avis se prévoit dès le plan, et non après le dépôt du permis.',
        ],
      },
      {
        titre: 'Ce que cela change au plan',
        paragraphes: [
          'Dans un périmètre protégé, l’enduit, la pente de toit et le type de menuiserie ne sont pas toujours libres. Une maison contemporaine peut y être acceptée, mais le dossier doit expliquer comment elle s’insère. Plus l’on connaît l’avis attendu tôt, moins le plan se redessine tard.',
          'Hors périmètre, le plan est libre dans les limites du PLU, que la mairie communique. [Nos modèles de maisons](/nos-modeles) donnent un point de départ, mais le plan se redessine autour de la parcelle et de ce que le règlement autorise.',
        ],
      },
      {
        titre: 'La Chalaronne, le Relevant et les étangs',
        paragraphes: [
          'La commune est traversée par la Chalaronne et se trouve au confluent de la Chalaronne et du Relevant. L’étang Charbonnière est à cheval sur Châtillon et Romans.',
          'Pour une parcelle proche d’une rivière ou d’un étang, la mairie dit si elle se situe dans un secteur à risque ; l’étude de sol, G1 puis G2 selon le terrain, confirme ensuite la nature du sol avant les fondations. [Les étapes d’un projet](/blog/etapes-projet-construction) placent ces études au bon endroit.',
        ],
      },
      {
        titre: 'La route, la gare et la Dombes',
        paragraphes: [
          'L’axe routier le plus important est la route départementale 936. Aucune ligne ne traverse plus la commune, mais la ligne de Lyon à Bourg-en-Bresse reste en service, et la gare la plus proche est celle de Marlieux – Châtillon.',
          'Châtillon est dans la Dombes, comme [Villars-les-Dombes](/construction-maison-villars-les-dombes) et [Chalamont](/construction-maison-chalamont), qui ont chacune leur page. Si vous cherchez un terrain, [nos terrains à bâtir](/terrains) rassemblent ceux que nous suivons.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Châtillon-sur-Chalaronne est dans notre zone d’intervention autour de Bourg-en-Bresse, à vingt-trois kilomètres de la ville. Notre bureau est à Meximieux : [la page de Meximieux](/construction-maison-meximieux) donne l’adresse et les horaires.',
    },
    faqTitre: 'Questions qu’on nous pose à Châtillon-sur-Chalaronne',
    faq: [
      {
        q: 'Quels monuments sont protégés à Châtillon-sur-Chalaronne ?',
        r: 'D’après la fiche de la commune : l’ancien château, les halles du XVIIe siècle, l’église Saint-André-et-Saint-Vincent-de-Paul, la porte de Villars et l’hospice.',
      },
      {
        q: 'Une maison neuve proche d’un monument protégé demande-t-elle un accord particulier ?',
        r: 'Elle peut demander l’avis de l’architecte des bâtiments de France si la parcelle est dans le périmètre du monument. La mairie renseigne parcelle par parcelle.',
      },
      {
        q: 'À quelle distance de Bourg-en-Bresse et de Lyon se trouve Châtillon-sur-Chalaronne ?',
        r: 'À vingt-trois kilomètres à l’ouest de Bourg-en-Bresse et à quarante et un kilomètres au nord de Lyon, d’après la fiche de la commune.',
      },
      {
        q: 'De quelle intercommunalité dépend la commune ?',
        r: 'De la communauté de communes de la Dombes, dont elle est le siège.',
      },
      {
        q: 'Y a-t-il une gare ?',
        r: 'Aucune ligne ne traverse plus la commune ; la gare la plus proche est celle de Marlieux – Châtillon, sur la ligne de Lyon à Bourg-en-Bresse.',
      },
    ],
    ctaTexte:
      'Le simulateur donne la maison seule. Dites-nous quelle parcelle vous visez à Châtillon-sur-Chalaronne et si elle se trouve près du centre ancien : cela décide de l’aspect de la maison.',
    invitation: 'Pour voir une maison en cours de chantier dans l’Ain, appelez-nous au',
  },

  /* ── Villars-les-Dombes ────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-villars-les-dombes',
    commune: 'Villars-les-Dombes',
    surtitre: 'Villars-les-Dombes · Ain (01)',
    h1: ['Construire une maison à', 'Villars-les-Dombes', 'Meximieux'],
    intro: [
      'Villars-les-Dombes se trouve au cœur de la Dombes, à mi-chemin entre Lyon, à 33 kilomètres, et Bourg-en-Bresse, à 29 kilomètres. L’Insee y comptait 5 059 habitants en 2022, en hausse de 9,31 % par rapport à 2016.',
      'La Dombes est la région des étangs. Pour qui veut construire, cela veut dire une chose : regarder le terrain avec la distance à l’eau en tête.',
    ],
    photo: {
      src: '/photos/maison-contemporaine-etage-porche.webp',
      w: 1484,
      h: 1060,
      alt: 'Maison contemporaine à étage avec porche d’entrée et garage double',
    },
    blocs: [
      {
        titre: 'Une région d’étangs',
        paragraphes: [
          'La fiche de la commune parle de nombreux étangs propices à la pisciculture, et d’une motte, la poype de la Juire, aujourd’hui au milieu d’un étang. La Chalaronne traverse la commune.',
          'Un terrain proche d’un étang n’est pas un terrain comme un autre : humidité du sol, niveau de l’eau selon les saisons, distance minimale à respecter. Nous ne présumons de rien : l’étude de sol, G1 puis G2 selon le terrain, la confirme avant le permis, et [les étapes d’un projet](/blog/etapes-projet-construction) l’inscrivent avant les fondations.',
        ],
      },
      {
        titre: 'Ce que l’eau change au plan',
        paragraphes: [
          'Selon le sol, la maison de plain-pied peut demander un radier plus soigné, un drainage, ou un niveau de plancher légèrement rehaussé. Ce sont des choix qui se décident sur le relevé de la parcelle et l’étude de sol, pas sur un plan type.',
          'Un étang, ou un fossé qui y mène, peut aussi relever de règles propres à l’eau et aux zones humides : la mairie dit ce qui s’applique à la parcelle. [Nos modèles de maisons](/nos-modeles) donnent un point de départ ; la parcelle décide de celui qui s’y pose le mieux.',
        ],
      },
      {
        titre: 'Le Parc des oiseaux et un patrimoine protégé',
        paragraphes: [
          'Le Parc des oiseaux, un parc ludo-pédagogique de 23 hectares, est l’équipement le plus connu de la commune. L’église de la Nativité-de-la-Sainte-Vierge est inscrite aux monuments historiques depuis 1927, et la motte castrale de Villars est classée.',
          'Un monument protégé peut imposer un périmètre où l’aspect d’un projet est examiné ; la mairie dit si une parcelle y est incluse. Nous posons la question avant de dessiner.',
        ],
      },
      {
        titre: 'Entre Lyon et Bourg, dans la Dombes',
        paragraphes: [
          'Villars-les-Dombes est membre de la communauté de communes de la Dombes, dont le siège est à [Châtillon-sur-Chalaronne](/construction-maison-chatillon-sur-chalaronne). [Chalamont](/construction-maison-chalamont), voisine de la Dombes elle aussi, a sa propre page.',
          'Si vous cherchez un terrain, [nos terrains à bâtir](/terrains) rassemblent ceux que nous suivons ; si vous en avez un, [écrivez-nous](/contact) avec le plan cadastral.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-meximieux',
      commune: 'Meximieux',
      texte:
        'Villars-les-Dombes est dans notre zone d’intervention autour de Meximieux. Notre bureau est à Meximieux : [la page de Meximieux](/construction-maison-meximieux) donne l’adresse et les horaires pour un premier rendez-vous.',
    },
    faqTitre: 'Questions qu’on nous pose à Villars-les-Dombes',
    faq: [
      {
        q: 'À quelle distance de Lyon et de Bourg-en-Bresse se trouve Villars-les-Dombes ?',
        r: 'À 33 kilomètres de Lyon et à 29 kilomètres de Bourg-en-Bresse, d’après la fiche de la commune.',
      },
      {
        q: 'Peut-on construire près d’un étang ?',
        r: 'Cela dépend de la parcelle : la mairie dit ce qui s’applique, et l’étude de sol confirme la nature du terrain avant les fondations.',
      },
      {
        q: 'De quelle intercommunalité dépend la commune ?',
        r: 'De la communauté de communes de la Dombes, dont le siège est à Châtillon-sur-Chalaronne.',
      },
      {
        q: 'Quels monuments sont protégés ?',
        r: 'L’église de la Nativité-de-la-Sainte-Vierge, inscrite depuis 1927, et la motte castrale de Villars, classée.',
      },
      {
        q: 'Combien d’habitants compte Villars-les-Dombes ?',
        r: '5 059 habitants en 2022, d’après l’Insee.',
      },
    ],
    ctaTexte:
      'Le simulateur donne la maison seule. Dites-nous quelle parcelle vous visez à Villars-les-Dombes et à quelle distance d’un étang elle se trouve : cela décide de l’étude de sol.',
    invitation: 'Pour voir une maison en cours de chantier dans la Dombes, appelez-nous au',
  },

  /* ── Chalamont ─────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-chalamont',
    commune: 'Chalamont',
    surtitre: 'Chalamont · Ain (01)',
    h1: ['Construire une maison à', 'Chalamont', 'Meximieux'],
    intro: [
      'Chalamont est en plein cœur de la Dombes, à dix kilomètres au nord de Meximieux, où se trouve notre bureau. Elle est plus proche de Bourg-en-Bresse, à 26 kilomètres, que de Lyon, à une quarantaine. L’Insee y comptait 2 544 habitants en 2022, en hausse de 5,74 % par rapport à 2016.',
      'Pour qui veut construire, cela veut dire un bureau à portée de route, et un terrain à regarder avec les étangs en tête.',
    ],
    photo: {
      src: '/photos/maison-monopente-garage-independant.webp',
      w: 1448,
      h: 1086,
      alt: 'Maison contemporaine à toit monopente avec garage indépendant',
    },
    blocs: [
      {
        titre: 'Un carrefour, à dix kilomètres du bureau',
        paragraphes: [
          'Chalamont se situe au croisement des routes de Villefranche-sur-Saône à Ambérieu-en-Bugey et de Meximieux à Bourg-en-Bresse. C’est un carrefour : on y arrive de partout, et la maison s’y construit avec des voisins et des routes à comprendre.',
          'À dix kilomètres de Meximieux, le premier rendez-vous au bureau reste simple : [la page de Meximieux](/construction-maison-meximieux) donne l’adresse et les horaires, et vous pouvez venir avec le plan cadastral de la parcelle.',
        ],
      },
      {
        titre: 'Les étangs et la source de la Veyle',
        paragraphes: [
          'Sur la commune se trouve l’étang Magnenet, dans lequel la Veyle prend sa source, et la commune est traversée par le Toison, affluent de l’Ain. La fiche parle aussi de nombreux étangs.',
          'Pour une parcelle proche de l’eau, nous ne présumons pas du sol : l’étude de sol, G1 puis G2 selon le terrain, le confirme avant le permis. [Les étapes d’un projet](/blog/etapes-projet-construction) placent ces études avant les fondations. [Villars-les-Dombes](/construction-maison-villars-les-dombes) pose le même sujet, plus en détail.',
        ],
      },
      {
        titre: 'Trois maisons du XVe siècle inscrites',
        paragraphes: [
          'Un ensemble de trois maisons du XVe siècle, la maison Maron, la maison Bolli et la maison Mingat, est inscrit au titre des monuments historiques. Autour d’un monument protégé, un périmètre peut s’appliquer : la mairie dit si une parcelle y est incluse, et ce que cela implique pour l’aspect du projet.',
          'Dans les rues proches du centre, l’enduit, la toiture et les menuiseries se regardent donc avec le règlement avant de dessiner. [Nos modèles de maisons](/nos-modeles) donnent un point de départ.',
        ],
      },
      {
        titre: 'Dans la communauté de communes de la Dombes',
        paragraphes: [
          'La commune est membre de la communauté de communes de la Dombes, dont le siège est à [Châtillon-sur-Chalaronne](/construction-maison-chatillon-sur-chalaronne). Pour un terrain, [nos terrains à bâtir](/terrains) rassemblent ceux que nous suivons, et [le formulaire de contact](/contact) est le plus court chemin pour en parler.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-meximieux',
      commune: 'Meximieux',
      texte:
        'Chalamont est dans notre zone d’intervention autour de Meximieux, à dix kilomètres au nord de la ville, où se trouve notre bureau au 6 rue de Genève.',
    },
    faqTitre: 'Questions qu’on nous pose à Chalamont',
    faq: [
      {
        q: 'À quelle distance de Meximieux se trouve Chalamont ?',
        r: 'À dix kilomètres au nord, d’après la fiche de la commune.',
      },
      {
        q: 'Chalamont est-elle plus proche de Lyon ou de Bourg-en-Bresse ?',
        r: 'De Bourg-en-Bresse, à 26 kilomètres ; Lyon est à une quarantaine de kilomètres.',
      },
      {
        q: 'Quels cours d’eau et étangs trouve-t-on sur la commune ?',
        r: 'L’étang Magnenet, dans lequel la Veyle prend sa source, et le Toison, affluent de l’Ain, qui la traverse.',
      },
      {
        q: 'Quels monuments sont protégés ?',
        r: 'Un ensemble de trois maisons du XVe siècle : la maison Maron, la maison Bolli et la maison Mingat.',
      },
      {
        q: 'Combien d’habitants compte Chalamont ?',
        r: '2 544 habitants en 2022, d’après l’Insee.',
      },
    ],
    ctaTexte:
      'Le simulateur donne la maison seule. Dites-nous quelle parcelle vous visez à Chalamont : à dix kilomètres du bureau, nous pouvons la regarder ensemble sur place.',
    invitation: 'Pour voir une maison en cours de chantier près de Meximieux, appelez-nous au',
  },

  /* ── Miribel ───────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-miribel',
    commune: 'Miribel',
    surtitre: 'Miribel · Ain (01)',
    h1: ['Construire une maison à', 'Miribel', 'Lyon'],
    intro: [
      'Miribel est à treize kilomètres du centre-ville de Lyon. L’Insee y comptait 10 450 habitants en 2022, en hausse de 7,27 % par rapport à 2016. C’est le chef-lieu d’un canton de huit communes de l’arrondissement de Bourg-en-Bresse.',
      'Pour qui veut construire, c’est la commune de notre zone la plus proche de Lyon, et celle où il y a le plus à vérifier avant d’acheter.',
    ],
    photo: {
      src: '/photos/maison-etage-enduit-pierre-double-garage.webp',
      w: 1400,
      h: 963,
      alt: 'Maison à étage en enduit clair avec un pan de parement en pierre, toiture ardoise et double garage anthracite',
    },
    blocs: [
      {
        titre: 'Le plan de prévention avant le plan de maison',
        paragraphes: [
          'D’après la fiche de la commune, Miribel est particulièrement exposée au risque d’inondation, en raison des ruissellements sur le coteau : elle a connu plus de dix inondations ayant fait l’objet d’un arrêté de catastrophe naturelle entre 1982 et 2006, et dispose d’un plan de protection des risques naturels.',
          'Pour une parcelle, cela se traduit par une question précise : se trouve-t-elle dans une zone du plan, et qu’impose-t-il ? Cela peut toucher le niveau du plancher, l’implantation, un sous-sol. La mairie renseigne parcelle par parcelle, et nous demandons avant de chiffrer. [Pont-d’Ain](/construction-maison-pont-d-ain) et [Bourg-Saint-Christophe](/construction-maison-bourg-saint-christophe) décrivent la même démarche, pour une rivière et pour un coteau.',
        ],
      },
      {
        titre: 'Le Rhône, le canal et le Grand Parc',
        paragraphes: [
          'Le canal de Miribel est une dérivation artificielle du Rhône, qui commence à Jons et à Niévroz, et le Grand Parc de Miribel-Jonage se trouve en partie sur la commune. Cela rappelle que l’eau y est proche.',
          'Pour une parcelle voisine du canal ou du parc, la mairie dit ce que les règles de protection imposent à une construction.',
        ],
      },
      {
        titre: 'Les routes, l’autoroute et la gare',
        paragraphes: [
          'Le centre-ville est traversé par la RD 1084, ancienne route nationale 84 entre Lyon et Genève. L’A46 dessert la commune par la sortie 3, « Les Échets », et l’A42 par la sortie 4, « Neyron, Miribel, Parc de Miribel-Jonage ». La gare est sur la ligne de Lyon à Ambérieu-en-Bugey, et les lignes de cars 132 et 171 relient la commune à Bourg-en-Bresse et à Montluel.',
          'Une parcelle voisine d’une route ou d’une autoroute peut se trouver dans un secteur classé par arrêté préfectoral, où un isolement acoustique renforcé des façades est exigé. [Le bruit de l’A42 à Dagneux](/construction-maison-dagneux) décrit cette démarche ; elle s’applique ici de la même façon.',
        ],
      },
      {
        titre: 'Un monument protégé, trois éléments',
        paragraphes: [
          'Le calvaire-fontaine de la place Henri-Grobon est inscrit, l’église Saint-Martin est classée, et le carillon du Mas Rillier et son campanile sont inscrits. Autour d’un monument protégé, un périmètre peut s’appliquer : la mairie dit si une parcelle y est incluse.',
          'La commune appartient à la communauté de communes de Miribel et du Plateau. [Montluel](/construction-maison-montluel), voisine du même secteur, a sa propre page. Pour chercher un terrain, [nos terrains à bâtir](/terrains) rassemblent ceux que nous suivons.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-meximieux',
      commune: 'Meximieux',
      texte:
        'Miribel est dans notre zone d’intervention autour de Meximieux, où se trouve notre bureau. [La page de Meximieux](/construction-maison-meximieux) donne l’adresse et les horaires pour un premier rendez-vous.',
    },
    faqTitre: 'Questions qu’on nous pose à Miribel',
    faq: [
      {
        q: 'À quelle distance de Lyon se trouve Miribel ?',
        r: 'À treize kilomètres du centre-ville de Lyon, d’après la fiche de la commune.',
      },
      {
        q: 'Miribel est-elle exposée aux inondations ?',
        r: 'D’après la fiche de la commune, oui : en raison des ruissellements sur le coteau, avec plus de dix arrêtés de catastrophe naturelle entre 1982 et 2006. Un plan de protection des risques naturels existe.',
      },
      {
        q: 'Quelles routes et quels transports desservent la commune ?',
        r: 'La RD 1084, l’A46 (sortie 3) et l’A42 (sortie 4), la gare sur la ligne de Lyon à Ambérieu-en-Bugey et les lignes de cars 132 et 171.',
      },
      {
        q: 'De quelle intercommunalité dépend la commune ?',
        r: 'De la communauté de communes de Miribel et du Plateau.',
      },
      {
        q: 'Combien d’habitants compte Miribel ?',
        r: '10 450 habitants en 2022, d’après l’Insee.',
      },
    ],
    ctaTexte:
      'Le simulateur donne la maison seule. Dites-nous quelle parcelle vous visez à Miribel : nous commençons par vérifier ce que le plan de prévention des risques en dit.',
    invitation: 'Pour voir une maison en cours de chantier près de Meximieux, appelez-nous au',
  },
];
