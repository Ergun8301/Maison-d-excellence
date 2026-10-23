// Terrains à bâtir.
//
// La maquette Claude Design livrait huit fiches inventées — références,
// communes, surfaces, prix, statuts et photographies de banque d'images.
// Elles ont été retirées : un constructeur soumis au CCMI est engagé par ce
// qu'il affiche. Les trois lots d'Attignat ci-dessous, eux, sont réels : surfaces,
// numéros de lot et conditions d'accès sont repris du plan de division établi
// par un géomètre-expert (limites bornées, procès-verbal du 18 décembre 2024).
// Rien d'autre n'y figure : ni le plan lui-même (il porte des noms de
// voisins), ni les numéros de parcelles cadastrales.
//
// `price: null` affiche « Sur demande » partout (liste, fiche, message
// pré-rempli). Renseigner un nombre suffit à faire apparaître le prix.
//
// Les fiches publiées alimentent d'elles-mêmes la liste, les filtres, le plan
// du site (app/sitemap.ts) et la route /terrains/[slug]. Les références TA-00x
// sont des repères internes au site, pas des numéros de dossier du vendeur.
// Les photos vivent dans public/terrains/.

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
  desc: string;
  /** Une ligne chacune, affichées en coches sur la fiche. */
  points: readonly string[];
  photo: string;
  photoAlt: string;
  /** Cadrage de la photo panoramique dans les vignettes et le bandeau. */
  photoPos: string;
  /** Description du `<meta>` : propre à chaque fiche, 140 à 155 caractères. */
  meta: string;
};

const ZONE = 'Zone d’implantation de la maison tracée au plan de division';
const BORNES = 'sur limites bornées (procès-verbal du 18 décembre 2024)';

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
    desc: 'Lot à bâtir de 997 m², à l’ouest d’une division en trois lots à Attignat. C’est le plus vaste des trois. Il se dessert par l’espace commun, au sud, selon le plan de division du géomètre-expert. Ce lot est aujourd’hui vendu.',
    points: [
      `997 m² ${BORNES}`,
      'Accès imposé par l’espace commun, au sud du lot',
      ZONE,
      'Le plus vaste des trois lots',
    ],
    photo: '/terrains/attignat-vue-1.webp',
    photoAlt: 'Terrain herbeux à bâtir à Attignat, dans l’Ain',
    photoPos: '50% 55%',
    meta: 'Terrain de 997 m² à Attignat (Ain), lot 1 sur 3 : vendu. Les lots 2 et 3, de 891 et 910 m² sur limites bornées, restent à découvrir près de Bourg.',
  },
  {
    ref: 'TA-002',
    slug: 'attignat-lot-2',
    commune: 'Attignat',
    secteur: 'Bresse',
    surface: 891,
    price: null,
    status: 'Disponible',
    note: 'Lot 2 sur 3 : au centre de la division, 891 m² sur limites bornées.',
    desc: 'Lot à bâtir de 891 m², au centre d’une division en trois lots à Attignat, entre les lots 1 et 3. Il se dessert par l’espace commun, au sud, selon le plan de division du géomètre-expert.',
    points: [
      `891 m² ${BORNES}`,
      'Accès imposé par l’espace commun, au sud du lot',
      ZONE,
      'Lot central, entre les lots 1 et 3',
    ],
    photo: '/terrains/attignat-vue-2.webp',
    photoAlt: 'Prairie à bâtir entourée de haies à Attignat, dans l’Ain',
    photoPos: '50% 85%',
    meta: 'Terrain à bâtir de 891 m² à Attignat (Ain), lot 2 sur 3, limites bornées. Accès par l’espace commun. Prix sur demande, faisabilité étudiée avec vous.',
  },
  {
    ref: 'TA-003',
    slug: 'attignat-lot-3',
    commune: 'Attignat',
    secteur: 'Bresse',
    surface: 910,
    price: null,
    status: 'Disponible',
    note: 'Lot 3 sur 3 : en bordure de la RD 29, 910 m² sur limites bornées.',
    desc: 'Lot à bâtir de 910 m², en bordure de la route départementale 29 (route de Viriat), à l’est d’une division en trois lots à Attignat. L’entrée du lot est à placer par l’acquéreur, selon le plan de division du géomètre-expert.',
    points: [
      `910 m² ${BORNES}`,
      'En bordure de la route départementale 29',
      'Entrée du lot à placer par l’acquéreur',
      ZONE,
    ],
    photo: '/terrains/attignat-vue-3.webp',
    photoAlt: 'Terrain à bâtir à Attignat, avec vue dégagée sur la campagne',
    photoPos: '50% 78%',
    meta: 'Terrain à bâtir de 910 m² à Attignat (Ain), lot 3 sur 3, en bordure de la RD 29, limites bornées. Prix sur demande, faisabilité étudiée avec vous.',
  },
];

/**
 * Photos communes aux trois fiches : le terrain a été photographié dans son
 * ensemble, sans reprendre un lot après l'autre. Elles s'affichent entières
 * (jamais recadrées) sous chaque fiche, dans cet ordre. `pleine` : la photo
 * occupe toute la largeur de la grille.
 */
export const GALERIE: readonly { src: string; w: number; h: number; alt: string; pleine?: boolean }[] = [
  { src: '/terrains/attignat-vue-1.webp', w: 1700, h: 767, alt: 'Prairie du terrain à Attignat, vue vers les arbres et une maison voisine' },
  { src: '/terrains/attignat-vue-2.webp', w: 1700, h: 767, alt: 'Prairie bordée de haies sur le terrain d’Attignat' },
  { src: '/terrains/attignat-vue-4.webp', w: 1400, h: 1050, alt: 'Zone gravillonnée de l’espace commun à Attignat, avec une gaine bleue et un coffret' },
  { src: '/terrains/attignat-vue-5.webp', w: 1400, h: 1050, alt: 'Route en bordure du terrain d’Attignat, avec un coffret en limite' },
  { src: '/terrains/attignat-vue-3.webp', w: 1700, h: 767, alt: 'Vue dégagée sur la campagne depuis le terrain d’Attignat', pleine: true },
];

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
