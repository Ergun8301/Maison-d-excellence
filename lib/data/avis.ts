/**
 * Avis clients.
 *
 * ATTENTION — les trois avis ci-dessous viennent de la maquette et sont
 * FICTIFS. La fiche Google de l'entreprise affiche bien 5,0/5 sur 36 avis,
 * mais ces textes-là ne sont pas ceux des vrais clients.
 *
 * À remplacer par de vrais avis recopiés depuis la fiche Google avant toute
 * mise en avant publique : publier des témoignages inventés sur un site
 * commercial est une pratique commerciale trompeuse (art. L121-2 s. du code
 * de la consommation).
 *
 * Le bloc visuel qui les affiche n'a pas à changer : seuls `name`, `meta` et
 * `text` sont à reprendre.
 */
export const AVIS = [
  {
    name: 'Julien & Camille D.',
    initials: 'JD',
    meta: 'Maison à Meximieux · 2025',
    text: 'Un accompagnement du début à la fin, avec un seul interlocuteur qui connaissait notre dossier par cœur. Les plans ont été retravaillés trois fois sans que cela pose le moindre problème. Chantier livré dans les délais annoncés.',
  },
  {
    name: 'Sandrine M.',
    initials: 'SM',
    meta: 'Maison à Pérouges · 2025',
    text: 'Ce qui nous a décidés : la clarté du devis et l’explication de l’échéancier de paiement, que personne d’autre n’avait pris le temps de nous détailler. Zéro surprise sur la facture finale.',
  },
  {
    name: 'Franck B.',
    initials: 'FB',
    meta: 'Maison à Lagnieu · 2024',
    text: 'Des artisans locaux sérieux et un suivi de chantier réel, avec des photos et des points réguliers. Deux petites reprises signalées après la livraison ont été traitées en moins d’une semaine.',
  },
] as const;

/** Nombre d'avis affiché à côté de la note. Valeur relevée sur la fiche Google. */
export const AVIS_COUNT = 36;

/** Fiche Google de l'établissement, pour le lien « voir tous les avis ». */
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Maisons+D%27excellence+Meximieux';
