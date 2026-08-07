/**
 * Avis clients — VRAIS avis relevés sur la fiche Google de l'établissement.
 *
 * Les textes sont des extraits d'un seul tenant, repris mot pour mot, sans
 * correction d'orthographe ni recomposition : ce sont les mots des clients.
 * On ne recolle jamais deux morceaux éloignés d'un même avis.
 *
 * Les réponses du gérant ne sont pas reprises : le bloc de la maquette
 * n'affiche que la parole du client.
 */
export const AVIS = [
  {
    name: 'Magalie Palleschi',
    initials: 'MP',
    meta: 'Avis Google · juin 2026',
    text: "Rapport qualité prix sont imbattables ! Suite à de nombreux devis d'autres constructeurs, je recommande les yeux fermés Maison d'Excellence !",
  },
  {
    name: 'Sun',
    initials: 'SU',
    meta: 'Avis Google · février 2024',
    text: "Un constructeur exceptionnel ! Après avoir rencontré 3 constructeurs, Maisons D\u2019excellence a très vite su gagner notre confiance de par son écoute, son professionnalisme et son côté humain.",
  },
  {
    name: 'Lucie Dalphin',
    initials: 'LD',
    meta: 'Avis Google · novembre 2023',
    text: "Un constructeur honnête, une équipe dynamique, présente et patiente avec des clients plutôt exigeants et pointilleux. Cerise sur le gâteau, livrée en moins de 11 mois !",
  },
] as const;

/**
 * Avis supplémentaires, tous en 5 étoiles, disponibles pour une rotation ou
 * une page dédiée. Mêmes règles : extraits d'un seul tenant, mot pour mot.
 */
export const AVIS_RESERVE = [
  {
    name: 'Steven Dubost',
    initials: 'SD',
    meta: 'Avis Google · mai 2023',
    text: "Nous avons fait 2 constructeurs, le seul qui répondait à nos attentes, qui a su nous mettre en confiance et nous proposer un projet majestueux, c\u2019est bel et bien Maisons d\u2019excellence.",
  },
  {
    name: 'Florent Picard',
    initials: 'FP',
    meta: 'Avis Google · octobre 2023',
    text: "Une anecdote parmi tant d\u2019autres : votre constructeur qui vient avec vous chez le notaire pour vous expliquer et vous épauler lors de votre premier achat.",
  },
  {
    name: 'Valentin Pousseur',
    initials: 'VP',
    meta: 'Avis Google · août 2023',
    text: "Nous avons beaucoup apprécié pouvoir faire évoluer les plans en direct avec lui à chaque rendez-vous, car il offre un travail 100 % personnalisé.",
  },
  {
    name: 'Shédusahn Colin',
    initials: 'SC',
    meta: 'Avis Google · mars 2022',
    text: "Constructeur très réactif et très professionnel. La société Maisons d\u2019excellence propose de très belles prestations en terme de rapport qualité/prix.",
  },
  {
    name: 'Christelle Da Costa Guillet',
    initials: 'CD',
    meta: 'Avis Google · mars 2026',
    text: "Constructeur sérieux, toutes les entreprises qui sont intervenues, de bons professionnels. Délai de construction parfait. Je recommande à 100 %.",
  },
  {
    name: 'Mathieu Damevin',
    initials: 'MD',
    meta: 'Avis Google · janvier 2024',
    text: "Vous avez su répondre à toutes mes attentes, mais vous avez également dépassé mes espérances en proposant des solutions innovantes et en assurant un service clients d\u2019une rare qualité.",
  },
] as const;

/** Nombre d'avis affiché à côté de la note. Relevé sur la fiche Google. */
export const AVIS_COUNT = 36;

/** Identifiant Google de l'établissement. */
export const GOOGLE_PLACE_ID = 'ChIJ93t0HkWz9EcRIXzMIN2ZCAE';

/**
 * Page des avis Google de l'établissement, cible de la pastille.
 *
 * L'adresse `maps/place/?q=place_id:…` fonctionne dans un navigateur, mais
 * l'application Google Maps l'intercepte sur Android et traite `place_id:…`
 * comme du texte à chercher : elle répond « Aucun résultat ». Celle-ci ouvre
 * directement la liste des avis, sur mobile comme sur ordinateur.
 */
export const GOOGLE_REVIEWS_URL =
  `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`;
