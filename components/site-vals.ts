import type { MouseEvent, ChangeEvent, FormEvent } from 'react';

/** Bouton d'option du simulateur (niveau, chambres, garage, vide sanitaire…). */
export type Opt = {
  label: string;
  onClick: () => void;
  style: string;
};

export type Avis = {
  name: string;
  initials: string;
  meta: string;
  text: string;
  delay: number;
};

export type TerrainCard = {
  slug: string;
  ref: string;
  commune: string;
  secteur: string;
  note: string;
  photo: string;
  status: string;
  bg: string;
  surfaceLabel: string;
  priceLabel: string;
  badgeStyle: string;
  cardOpacity: string;
  delay: number;
  href: string;
  onOpen: () => void;
};

export type ArticleCard = {
  slug: string;
  title: string;
  cat: string;
  date: string;
  read: string;
  excerpt: string;
  img: string;
  alt: string;
  bg: string;
  href: string;
  delay: number;
  onOpen: () => void;
};

export type ModeleCard = {
  name: string;
  fam: string;
  niveau: string;
  desc: string;
  photo: string;
  bg: string;
  delay: number;
  onAsk: () => void;
};

/**
 * Surface de données consommée par les gabarits, reprise de `renderVals()`
 * dans la maquette. Les noms sont ceux du balisage : ne pas les renommer.
 */
export type Vals = {
  // navigation
  goAccueil: () => void;
  goRealisations: () => void;
  goModeles: () => void;
  goEntreprise: () => void;
  goEstimation: (e?: MouseEvent) => void;
  goContact: () => void;
  goContactForm: (e?: MouseEvent) => void;
  goTrouver: (e?: MouseEvent) => void;
  goTerrains: () => void;
  goInvestisseurs: () => void;
  goBlog: () => void;
  goZone: () => void;
  goRenovation: () => void;
  goMentions: () => void;
  goArticlePrix: () => void;
  goArticleEch: () => void;
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  year: number;
  terrainsInNav: boolean;
  scrollTop: () => void;

  // preuve sociale
  avisCount: number;
  avis: Avis[];
  /** Fiche Google de l'établissement, cible de la pastille d'avis. */
  avisUrl: string;
  echeancier: readonly { pct: string; t: string; d: string }[];

  // modèles
  modelesPP: ModeleCard[];
  modelesEtage: ModeleCard[];
  modelesEco: ModeleCard[];

  // simulateur
  estSurface: number;
  estNiveau: string;
  estChambres: number;
  estGarage: string;
  estVs: string;
  estFinition: string;
  estLow: string;
  estHigh: string;
  estM2: string;
  teaserRange: string;
  setSurface: (e: ChangeEvent<HTMLInputElement>) => void;
  nivOptions: Opt[];
  chOptions: Opt[];
  garOptions: Opt[];
  vsOptions: Opt[];
  finOptions: Opt[];
  estSent: boolean;
  estNotSent: boolean;
  onEstSubmit: (e: FormEvent) => void;

  // contact
  submitted: boolean;
  notSubmitted: boolean;
  onSubmit: (e: FormEvent) => void;
  resetForm: () => void;
  formNature: string;
  formMessage: string;
  setNature: (e: ChangeEvent<HTMLSelectElement>) => void;
  setMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void;

  // terrains
  terrains: TerrainCard[];
  terrainCount: number;
  terrainChips: { label: string; onClick: () => void; style: string }[];
  t: Record<string, string>;
  hasTerrain: boolean;
  askTerrain: () => void;

  // blog
  articles: ArticleCard[];
  featured: Partial<ArticleCard>;
  hasFeatured: boolean;
  others: ArticleCard[];
  art: Record<string, string>;
  hasArt: boolean;
  artBody: readonly { h: string; p: string }[];

  // zone
  communes: { n: string; hub: string }[];
};
