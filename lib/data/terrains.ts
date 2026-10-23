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
    status: 'Disponible',
    note: 'Lot 1 sur 3 : le plus vaste, 997 m² sur limites bornées.',
    desc: 'Lot à bâtir de 997 m², à l’ouest d’une division en trois lots à Attignat. C’est le plus vaste des trois. Il se dessert par l’espace commun, au sud, selon le plan de division du géomètre-expert.',
    points: [
      `997 m² ${BORNES}`,
      'Accès imposé par l’espace commun, au sud du lot',
      ZONE,
      'Le plus vaste des trois lots',
    ],
    photo: '/terrains/attignat-lot-1.webp',
    photoAlt: 'Terrain herbeux à bâtir à Attignat, dans l’Ain',
    photoPos: '50% 55%',
    meta: 'Terrain à bâtir de 997 m² à Attignat (Ain), lot 1 sur 3, limites bornées. Accès par l’espace commun. Prix sur demande, faisabilité étudiée avec vous.',
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
    photo: '/terrains/attignat-lot-2.webp',
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
    photo: '/terrains/attignat-lot-3.webp',
    photoAlt: 'Terrain à bâtir à Attignat, dans l’Ain',
    photoPos: '50% 55%',
    meta: 'Terrain à bâtir de 910 m² à Attignat (Ain), lot 3 sur 3, en bordure de la RD 29, limites bornées. Prix sur demande, faisabilité étudiée avec vous.',
  },
];
