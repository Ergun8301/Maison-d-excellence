/**
 * Avis clients — VRAIS avis relevés sur la fiche Google de l'établissement.
 *
 * Ils remplacent les trois témoignages fictifs de la maquette. Les textes sont
 * repris mot pour mot, sans correction d'orthographe ni de ponctuation : ce
 * sont les mots des clients.
 *
 * Réserve : Google tronque les avis longs derrière un lien « …Plus ». Les
 * trois retenus ci-dessous sont ceux dont la partie visible forme des phrases
 * complètes — on n'affiche donc pas de citation coupée au milieu. Les autres
 * avis sont conservés plus bas et pourront être repris quand leur texte
 * intégral sera disponible.
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
    name: 'Christelle Da Costa Guillet',
    initials: 'CD',
    meta: 'Avis Google · mars 2026',
    text: "Constructeur sérieux, toutes les entreprises qui sont intervenues, de bons professionnels. Délai de construction parfait. Je recommande à 100 %.",
  },
  {
    name: 'Shédusahn Colin',
    initials: 'SC',
    meta: 'Avis Google · mars 2022',
    text: "Constructeur très réactif et très professionnel. La société Maisons d'excellence propose de très belles prestations en terme de rapport qualité/prix.",
  },
] as const;

/**
 * Avis supplémentaires relevés sur la fiche, tous en 5 étoiles. Leur texte est
 * tronqué par Google (« …Plus ») : à compléter avant affichage.
 */
export const AVIS_RESERVE = [
  {
    name: 'Lucie Dalphin',
    initials: 'LD',
    meta: 'Avis Google · novembre 2023',
    text: "Nous venons de réceptionner notre maison construite par maison d'excellence. Un rêve s'est accompli ! Un constructeur honnête, une équipe dynamique, présente et patiente",
    tronque: true,
  },
  {
    name: 'Jordan Broyer',
    initials: 'JB',
    meta: 'Avis Google · janvier 2024',
    text: "Constructeur en qui nous pouvons avoir confiance. L'équipe est à notre écoute et n'hésite pas à nous conseiller dans notre projet avec leur vision professionnelle. Equipe commerciale au top.",
    tronque: true,
  },
  {
    name: 'Fati Ben',
    initials: 'FB',
    meta: 'Avis Google · novembre 2021',
    text: "Construction de ma maison par maison d'excellence. J'ai été accompagné du début à la fin. Une équipe de choc Graziela et Aykut. Transparence sur les frais annexes à la construction afin d'anticiper les dépenses",
    tronque: true,
  },
  {
    name: 'Valentin Pousseur',
    initials: 'VP',
    meta: 'Avis Google · août 2023',
    text: "Nous avons fait appel à Maison d'excellence pour la réalisation du projet de notre vie. Aykut a su, dès le premier rendez-vous, comprendre notre projet avec toutes les spécifications que nous voulions.",
    tronque: true,
  },
  {
    name: 'Sun',
    initials: 'SU',
    meta: 'Avis Google · février 2024',
    text: "Un constructeur exceptionnel ! Après avoir rencontré 3 constructeurs, Maisons D'excellence a très vite su gagner notre confiance de par son écoute, son professionnalisme et son côté humain.",
    tronque: true,
  },
] as const;

/** Nombre d'avis affiché à côté de la note. Relevé sur la fiche Google. */
export const AVIS_COUNT = 36;

/** Fiche Google de l'établissement, pour renvoyer vers les avis d'origine. */
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Maisons+D%27excellence+Meximieux';
