/**
 * Paragraphes éditoriaux posés sous les pages Modèles, Réalisations, Terrains
 * et Blog. Ils portent le maillage interne vers les pages locales.
 *
 * Ces quatre pages sortent de la maquette : on ne peut pas y glisser un lien au
 * fil d'un texte sans toucher au gabarit, qu'une régénération écraserait. On
 * pose donc, après la vue, un court paragraphe écrit à la main — même procédé
 * que le renvoi de la page Zone et que la FAQ de la page Entreprise.
 *
 * Mêmes règles d'écriture que lib/data/locales.ts : chaque lien se place dans
 * une phrase qui dit pourquoi on clique, l'ancre est descriptive et varie d'un
 * lien à l'autre, et rien n'est inventé. En particulier, on ne dit jamais
 * « nos constructions à X » : l'entreprise n'a pas de relevé de ses livraisons
 * commune par commune. On dit ce que le terrain de X demande.
 *
 * La notation des liens est `[texte](/chemin)` (voir lib/texte.tsx).
 */
export type BlocMaillage = {
  readonly surtitre: string;
  readonly titre: string;
  readonly paragraphes: readonly string[];
};

export const MAILLAGE = {
  modeles: {
    surtitre: 'Un plan pour chaque terrain',
    titre: 'Plain-pied ou à étage : le terrain décide',
    paragraphes: [
      'Chaque modèle se redessine autour de votre parcelle : une maison personnalisée, en briques ou en béton cellulaire, livrée clé en main ou hors d’eau hors d’air selon votre projet. Sur un terrain en pente, voyez [sous-sol, demi-niveaux ou plateforme à Ambérieu-en-Bugey](/construction-maison-amberieu-en-bugey) ; sur un terrain de coteau, [plateforme ou sous-sol à Ceyzériat](/construction-maison-ceyzeriat) ; sur une petite parcelle de la Côtière, [pourquoi la maison à étage s’impose souvent à Montluel](/construction-maison-montluel).',
      'En Bresse, c’est le sol qui commande : [les études de sol G1 et G2 à Bourg-en-Bresse](/construction-maison-bourg-en-bresse) pèsent sur les fondations et sur le vide sanitaire. En pleine plaine, [la maison de plain-pied à Lagnieu](/construction-maison-lagnieu) est souvent la solution la plus simple. Pour le prix de chaque configuration, voyez [le budget réel d’une maison de 100 m²](/blog/budget-maison-100m2).',
    ],
  },
  realisations: {
    surtitre: 'Du plan au terrain',
    titre: 'Ce qui change d’un terrain à l’autre',
    paragraphes: [
      'Chaque maison de cette page est née d’un terrain, et chaque terrain pose ses propres questions. Nos pages locales les passent en revue avant le plan : [la plaine de Meximieux](/construction-maison-meximieux) et les abords de Pérouges, [la Bresse de Bourg-en-Bresse](/construction-maison-bourg-en-bresse) et son sol argileux, [le pied du Bugey à Ambérieu-en-Bugey](/construction-maison-amberieu-en-bugey) et sa pente.',
      'D’autres points se vérifient avant d’acheter : [l’isolement acoustique à Dagneux](/construction-maison-dagneux), [les terrains inondables de Pont-d’Ain](/construction-maison-pont-d-ain), [l’assainissement des hameaux à Viriat](/construction-maison-viriat). Pour voir des chantiers proches de chez vous, [appelez-nous ou écrivez-nous](/contact).',
    ],
  },
  terrains: {
    surtitre: 'Avant d’acheter',
    titre: 'Un terrain à bâtir ne se juge pas à sa surface',
    paragraphes: [
      'Certificat d’urbanisme, promesse de vente, conditions suspensives : tout se prépare avant la signature, comme l’explique la page de [Montrevel-en-Bresse](/construction-maison-montrevel-en-bresse). Les raccordements et l’assainissement pèsent sur le budget — voyez [l’assainissement non collectif à Viriat](/construction-maison-viriat) et [les raccordements d’Attignat](/construction-maison-attignat) —, tout comme [le voisinage agricole à Montagnat](/construction-maison-montagnat), [la nature du sol à Lagnieu](/construction-maison-lagnieu) ou [les reculs d’un terrain issu d’une division à Péronnas](/construction-maison-peronnas).',
      'Notre étude de faisabilité est gratuite : [envoyez-nous la référence cadastrale](/contact), nous regardons ce qui entre sur la parcelle avant que vous n’engagiez quoi que ce soit.',
    ],
  },
  blog: {
    surtitre: 'Du guide à votre commune',
    titre: 'Les guides donnent les repères, les pages locales les appliquent',
    paragraphes: [
      'Chaque guide de ce blog se vérifie sur un terrain réel. Le budget d’une maison de 100 m² varie d’une commune à l’autre : [le terrain à Lagnieu](/construction-maison-lagnieu) n’est pas celui de [la Côtière à Montluel](/construction-maison-montluel) ; la RE2020 et le choix du chauffage prennent un sens concret dans [une maison de campagne à Marboz](/construction-maison-marboz) ; l’étude de sol se lit dans [le sol argileux de Bourg-en-Bresse](/construction-maison-bourg-en-bresse).',
      'Pour passer du guide au projet, [parcourez nos modèles de maisons](/nos-modeles) ou [chiffrez votre projet en une minute](/#estimation).',
    ],
  },
} as const satisfies Record<string, BlocMaillage>;

export type CleMaillage = keyof typeof MAILLAGE;
