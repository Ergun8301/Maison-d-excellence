/**
 * Questions fréquentes.
 *
 * Source unique de la section visible (components/Faq.tsx) et du balisage
 * FAQPage qui l'accompagne : les deux lisent ce fichier, ils ne peuvent donc
 * pas diverger. C'est la condition posée par Google — le balisage doit
 * refléter un contenu réellement affiché — et c'est aussi ce qui rend la
 * page citable : un moteur de réponse reprend le texte lu à l'écran, pas une
 * donnée cachée dans le code.
 *
 * Aucune de ces réponses n'avance un chiffre nouveau. Le délai de douze mois,
 * la réponse sous 48 h, le rayon de 30 km et l'échéancier légal figurent déjà
 * ailleurs sur le site ; la FAQ les rassemble sous la forme d'une question,
 * qui est celle que les gens posent réellement.
 */
import { ECHEANCIER } from '@/lib/data/echeancier';

export type Question = { q: string; r: string };

/** L'échéancier, rendu en une phrase pour la réponse et pour le balisage. */
const echeancierEnLigne = ECHEANCIER.map((e) => `${e.pct} ${e.t.toLowerCase()}`).join(', ');

export const FAQ: readonly Question[] = [
  {
    q: 'Dans quel secteur construisez-vous ?',
    r: "Dans un rayon d'environ 30 km autour de Meximieux, dans l'Ain : Bourg-en-Bresse, Ambérieu-en-Bugey, Montluel, Lagnieu, Pérouges, Miribel, Villars-les-Dombes, Chalamont et les communes voisines, ainsi que Villefranche-sur-Saône. Au-delà, nous préférons le dire franchement plutôt que de suivre un chantier de trop loin.",
  },
  {
    q: 'Construisez-vous sur un terrain que je possède déjà ?',
    r: "Oui, c'est même le cas le plus fréquent. Vous venez avec votre parcelle, nous vérifions ce que le PLU y autorise, puis nous dessinons les plans autour d'elle — exposition, pente, accès, voisinage. Si vous n'avez pas encore de terrain, nous étudions avec vous ceux que nous suivons dans le secteur.",
  },
  {
    q: 'Qu’est-ce qu’un CCMI, et qu’est-ce qu’il couvre ?',
    r: "Le contrat de construction de maison individuelle est le contrat le plus protecteur du droit français pour un particulier qui fait construire. Il fixe un prix ferme et définitif, un délai de livraison avec pénalités de retard, et impose au constructeur une garantie de livraison à prix et délais convenus : si l'entreprise défaille, un garant termine la maison. Tous nos chantiers sont conclus sous ce régime.",
  },
  {
    q: 'Quelles garanties accompagnent la construction ?',
    r: "La garantie de parfait achèvement couvre pendant un an toute réserve signalée à la réception ou apparue dans l'année. La garantie biennale couvre deux ans les équipements dissociables du bâti. La garantie décennale couvre dix ans les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à son usage. S'y ajoutent la garantie de livraison propre au CCMI et l'assurance dommages-ouvrage.",
  },
  {
    q: 'Quel est le délai de construction ?',
    r: "Douze mois de chantier pour une maison standard, à compter de l'ouverture du chantier. Ce délai est inscrit au contrat et assorti de pénalités de retard : ce n'est pas une estimation commerciale. Il faut y ajouter en amont le temps de la conception et de l'instruction du permis de construire, qui dépend de la commune.",
  },
  {
    q: 'Comment se déroulent les paiements ?',
    r: `Selon l'échéancier légal du CCMI, qui interdit d'exiger davantage à chaque étape : ${echeancierEnLigne}. Le premier versement de 5 % n'est dû à la signature que si une garantie de remboursement vous est remise ; sans elle, rien n'est exigible. Le solde de 5 % se règle à la réception, et peut être consigné jusqu'à la levée des réserves.`,
  },
  {
    q: 'Le prix annoncé comprend-il tout ?',
    r: "Le prix du CCMI couvre la construction elle-même. Restent à votre charge le terrain et les frais de notaire, la viabilisation, la taxe d'aménagement, la cuisine équipée, les terrasses, clôtures et aménagements extérieurs. Nous les chiffrons avec vous dès le premier rendez-vous, pour que le budget total soit connu avant l'engagement.",
  },
  {
    q: 'En brique ou en béton cellulaire ?',
    r: "Les deux, selon le projet. La brique de terre cuite offre une bonne inertie et une mise en œuvre éprouvée ; le béton cellulaire (siporex) apporte une isolation répartie dans le mur porteur, sans doublage rapporté. Le choix se discute au moment des plans, en fonction de l'exposition, du budget et du niveau de performance visé pour la RE2020.",
  },
];
