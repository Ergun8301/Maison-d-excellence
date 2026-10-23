// Terrains à bâtir.
//
// La maquette Claude Design livrait huit fiches inventées — références,
// communes, surfaces, prix, statuts et photographies de banque d'images.
// Elles ont été retirées : un constructeur soumis au CCMI est engagé par ce
// qu'il affiche. Les trois lots d'Attignat ci-dessous, eux, sont réels :
// surfaces, numéros de lot et accès viennent du plan de division du
// géomètre-expert (limites bornées, procès-verbal du 18 décembre 2024) ;
// viabilisation, étude de sol G2, prix et description viennent de l'annonce
// du vendeur, transmise par le client. Le plan est publié sans les noms des
// voisins ; les numéros de parcelles cadastrales ne figurent pas dans les
// textes. Les mentions « libre de constructeur », « vente directe » et
// « aucun frais d'agence » de l'annonce ne sont pas reprises : les lots sont
// présentés comme vendus par un partenaire foncier, sans le nommer.
//
// `price: null` affiche « Sur demande » partout (liste, fiche, message
// pré-rempli) ; un nombre fait apparaître le prix. Un lot « Vendu » n'en
// affiche pas.
//
// Les fiches publiées alimentent d'elles-mêmes la liste, les filtres, le plan
// du site (app/sitemap.ts) et la route /terrains/[slug]. Les références TA-00x
// sont des repères internes au site, pas des numéros de dossier du vendeur.
// Les photos vivent dans public/terrains/.

/** Une rangée d'une fiche : un texte et une photo, côte à côte, en alternance. */
export type Rangee = {
  titre: string;
  texte?: string;
  points?: readonly string[];
  /** Numéro de la photo dans VUES. */
  vue: 1 | 2 | 3 | 4 | 5;
};

export type Terrain = {
  ref: string;
  slug: string;
  commune: string;
  secteur: string;
  surface: number;
  /** Prix en euros ; `null` tant qu'il n'est pas communiqué (« Sur demande »). */
  price: number | null;
  status: string;
  note: string;
  rangees: readonly Rangee[];
  photo: string;
  photoAlt: string;
  /** Cadrage de la photo panoramique dans les vignettes et le bandeau. */
  photoPos: string;
  /** Description du `<meta>` : propre à chaque fiche, 140 à 155 caractères. */
  meta: string;
  /** Début du titre de page (« … | Maisons d’Excellence »). */
  titre: string;
};

const VILLAGE =
  'Attignat compte 3 300 habitants : deux écoles, périscolaire, restaurant scolaire, micro-crèche, médiathèque et commerces de proximité. L’échangeur de l’A40 est à 5 minutes, Bourg-en-Bresse à 11 km.';

const ZONE = 'Zone d’implantation de la maison tracée au plan de division';

const DEJA_REALISE = [
  'Eau, électricité et télécom en limite de parcelle',
  'Voie d’accès commune en enrobé, travaux terminés',
  'Étude de sol G2 réalisée et remise à l’acquéreur',
] as const;

export const TERRAINS: readonly Terrain[] = [
  {
    ref: 'TA-001',
    slug: 'attignat-lot-1',
    commune: 'Attignat',
    secteur: 'Bresse',
    surface: 997,
    price: null,
    status: 'Vendu',
    note: 'Lot 1 sur 3 : le plus vaste, 997 m² sur limites bornées. Ce lot est vendu.',
    rangees: [
      {
        titre: 'La parcelle',
        texte: 'Lot à bâtir de 997 m², à l’ouest d’une division en trois lots route de Viriat, à Attignat. C’est le plus vaste des trois. Ce lot est aujourd’hui vendu.',
        points: ['997 m² sur limites bornées (procès-verbal du 18 décembre 2024)', 'Le plus vaste des trois lots'],
        vue: 2,
      },
      {
        titre: 'Accès et implantation',
        points: ['Accès imposé par l’espace commun, au sud du lot', ZONE],
        vue: 5,
      },
      { titre: 'Le village', texte: VILLAGE, vue: 3 },
    ],
    photo: '/terrains/attignat-vue-1.webp',
    photoAlt: 'Terrain herbeux à bâtir à Attignat, dans l’Ain',
    photoPos: '50% 55%',
    meta: 'Terrain de 997 m² à Attignat (Ain), lot 1 sur 3 : vendu. Les lots 2 et 3, viabilisés, de 891 et 910 m², restent à découvrir près de Bourg-en-Bresse.',
    titre: 'Lot vendu de 997 m² à Attignat',
  },
  {
    ref: 'TA-002',
    slug: 'attignat-lot-2',
    commune: 'Attignat',
    secteur: 'Bresse',
    surface: 891,
    price: 70900,
    status: 'Disponible',
    note: '891 m² viabilisés, plats, étude de sol G2 réalisée.',
    rangees: [
      {
        titre: 'La parcelle',
        texte: 'L’un des deux derniers terrains disponibles route de Viriat, à Attignat, dans un ensemble de trois lots dont un déjà vendu. Parcelle plate et de forme régulière, au centre de la division, prête à recevoir votre projet de maison.',
        points: ['891 m², bornés par un géomètre-expert', 'Jusqu’à 300 m² de surface de plancher'],
        vue: 1,
      },
      { titre: 'Déjà réalisé', points: DEJA_REALISE, vue: 4 },
      {
        titre: 'Accès et implantation',
        points: ['Accès imposé par l’espace commun, au sud du lot', ZONE],
        vue: 5,
      },
      { titre: 'Le village', texte: VILLAGE, vue: 3 },
    ],
    photo: '/terrains/attignat-vue-2.webp',
    photoAlt: 'Prairie à bâtir entourée de haies à Attignat, dans l’Ain',
    photoPos: '50% 85%',
    meta: 'Terrain viabilisé de 891 m² à Attignat (Ain), lot 2 : eau, électricité, télécom en limite, étude de sol G2 réalisée, voie en enrobé. 70 900 €.',
    titre: 'Terrain viabilisé 891 m² à Attignat',
  },
  {
    ref: 'TA-003',
    slug: 'attignat-lot-3',
    commune: 'Attignat',
    secteur: 'Bresse',
    surface: 910,
    price: 69900,
    status: 'Disponible',
    note: '910 m² viabilisés, en bordure de la voie d’accès, étude de sol G2 réalisée.',
    rangees: [
      {
        titre: 'La parcelle',
        texte: 'L’un des deux derniers terrains disponibles route de Viriat, à Attignat, dans un ensemble de trois lots dont un déjà vendu. Il est situé en bordure de la voie d’accès, peu passante et sans vis-à-vis, avec une très légère pente naturelle.',
        points: ['910 m² de forme régulière, bornés par un géomètre-expert', 'Jusqu’à 300 m² de surface de plancher'],
        vue: 1,
      },
      { titre: 'Déjà réalisé', points: DEJA_REALISE, vue: 4 },
      {
        titre: 'Accès et implantation',
        points: ['Entrée du lot à placer par l’acquéreur', ZONE],
        vue: 5,
      },
      { titre: 'Le village', texte: VILLAGE, vue: 2 },
    ],
    photo: '/terrains/attignat-vue-3.webp',
    photoAlt: 'Terrain à bâtir à Attignat, avec vue dégagée sur la campagne',
    photoPos: '50% 78%',
    meta: 'Terrain viabilisé de 910 m² à Attignat (Ain), lot 3 : eau, électricité, télécom en limite, étude de sol G2 réalisée, voie en enrobé. 69 900 €.',
    titre: 'Terrain viabilisé 910 m² à Attignat',
  },
];

/**
 * Photos communes aux trois fiches : le terrain a été photographié dans son
 * ensemble, sans reprendre un lot après l'autre. Elles s'affichent entières,
 * jamais recadrées, à côté des textes (voir `rangees`).
 */
export const VUES = {
  1: { src: '/terrains/attignat-vue-1.webp', w: 1700, h: 767, alt: 'Prairie du terrain à Attignat, vue vers les arbres et une maison voisine' },
  2: { src: '/terrains/attignat-vue-2.webp', w: 1700, h: 767, alt: 'Prairie bordée de haies sur le terrain d’Attignat' },
  3: { src: '/terrains/attignat-vue-3.webp', w: 1700, h: 767, alt: 'Vue dégagée sur la campagne depuis le terrain d’Attignat' },
  4: { src: '/terrains/attignat-vue-4.webp', w: 1400, h: 1050, alt: 'Zone gravillonnée de l’espace commun à Attignat, avec une gaine bleue et un coffret' },
  5: { src: '/terrains/attignat-vue-5.webp', w: 1400, h: 1050, alt: 'Route en bordure du terrain d’Attignat, avec un coffret en limite' },
} as const;

/**
 * Plan de division du géomètre-expert (limites bornées, 18 décembre 2024).
 * Les noms des propriétaires voisins et leurs numéros de parcelle y sont
 * masqués ; le reste du plan est celui du géomètre, sans retouche.
 */
export const PLAN = {
  src: '/terrains/attignat-plan-division.webp',
  w: 2400,
  h: 1697,
  alt: 'Plan de division des trois lots d’Attignat et de l’espace commun, avec les surfaces, les accès et les zones d’implantation',
} as const;
