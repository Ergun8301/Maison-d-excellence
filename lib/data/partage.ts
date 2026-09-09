/**
 * Images de partage (Open Graph), et leur texte alternatif.
 *
 * Partagé sur WhatsApp, le site n'affichait aucune miniature : `og:image`
 * manquait sur les dix-sept pages. Les fichiers sont produits par
 * scripts/partage.mjs — toute modification de cette liste doit y être
 * répercutée, et inversement.
 *
 * Format imposé par les réseaux : 1200 × 630, et surtout du JPEG. Les photos
 * du site sont toutes en WebP, que WhatsApp ne sait pas afficher en aperçu ;
 * ces images sont donc des dérivés JPEG dédiés, et non les photos elles-mêmes.
 */
export type Partage = { readonly chemin: string; readonly alt: string };

export const PARTAGE_DEFAUT: Partage = {
  chemin: '/partage/maisons-dexcellence.jpg',
  alt: "Maison individuelle à étage livrée par Maisons d'Excellence, avec le nom de l'entreprise",
};

/**
 * Les articles reçoivent une photo en rapport avec leur sujet plutôt que
 * l'image générique. Ce sont des photos de chantiers et de maisons réellement
 * livrés par l'entreprise, et non les illustrations d'agence qui ouvrent les
 * articles à l'écran : ce qui part dans une conversation doit montrer le
 * travail de l'entreprise.
 */
export const PARTAGE_ARTICLES: Readonly<Record<string, Partage>> = {
  're2020-2026': {
    chemin: '/partage/blog-re2020-2026.jpg',
    alt: "Murs en brique montés sur un chantier de gros œuvre dans l'Ain",
  },
  'prix-construction-m2': {
    chemin: '/partage/blog-prix-construction-m2.jpg',
    alt: "Maison de plain-pied contemporaine livrée dans l'Ain",
  },
  'budget-maison-100m2': {
    chemin: '/partage/blog-budget-maison-100m2.jpg',
    alt: "Maison de plain-pied en L livrée dans l'Ain",
  },
  'etapes-projet-construction': {
    chemin: '/partage/blog-etapes-projet-construction.jpg',
    alt: 'Charpente en fermettes de bois posée sur un chantier',
  },
  'echeancier-ccmi': {
    chemin: '/partage/blog-echeancier-ccmi.jpg',
    alt: 'Maison de plain-pied le jour de la livraison, terrain encore nu',
  },
};
