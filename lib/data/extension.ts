import type { QuestionLocale } from '@/lib/data/locales';

/**
 * Page « Extension de maison » (/renovation-extension).
 *
 * Écrite à la main : elle remplace la page de la maquette, qui présentait
 * l'extension comme une activité secondaire en moins de 300 mots. Le gabarit
 * est components/PageExtension.tsx ; tout le texte est ici.
 *
 * Règles d'écriture, les mêmes que pour les pages locales :
 *  - aucun chiffre propre à l'entreprise, aucune réalisation, aucun délai ou
 *    prix promis ;
 *  - les règles d'urbanisme et de fiscalité citées ont été relues sur les
 *    sources officielles (service-public.gouv.fr, impots.gouv.fr) en octobre
 *    2026, et sont présentées comme des informations générales à confirmer ;
 *  - les aides dont les règles changent souvent (MaPrimeRénov', éco-PTZ) sont
 *    citées sans montant ni barème.
 *
 * Photos : fournies par l'entreprise (son Google Drive). Elles illustrent des
 * extensions en général : aucune légende ne les présente comme des
 * réalisations. L'image « carteGarage » est une illustration générée,
 * signalée comme telle dans son texte alternatif.
 *
 * Les paragraphes admettent des liens internes notés `[texte](/chemin)`.
 */

export type PhotoExtension = {
  readonly src: string;
  readonly w: number;
  readonly h: number;
  readonly alt: string;
  readonly legende: string;
  /** Auteur et page d'origine, pour mémoire (non affichés). */
  readonly auteur: string;
  readonly source: string;
};

export const PHOTOS_EXTENSION = {
  entete: {
    src: '/extension/extension-baies-vitrees-salon-jardin.webp',
    w: 1920,
    h: 1280,
    alt: 'Illustration : extension enduite à toit plat ouverte sur une terrasse, et son séjour lumineux vu de l’intérieur',
    legende: 'Illustration : l’extension côté jardin et son séjour.',
    auteur: 'Image générée (fournie par Maisons d’Excellence)',
    source: 'Google Drive de l’entreprise (1u160mfFjhu2Y-GqYDDIoJ1m8kyOv8qQC)',
  },
  maconnerie: {
    src: '/extension/extension-maconnee-enduit-blanc-garage.webp',
    w: 1168,
    h: 784,
    alt: 'Extension maçonnée enduite en blanc, avec porte de garage, accolée à une maison à étage',
    legende: 'Extension maçonnée, finie en enduit.',
    auteur: 'Maisons d’Excellence',
    source: 'Google Drive de l’entreprise (1KGnrnhvfGK-_oJ6QwLVFWCOJzfg7djwU)',
  },
  contemporaine: {
    src: '/extension/extension-laterale-bardage-bois-maison.webp',
    w: 1168,
    h: 784,
    alt: 'Maison enduite prolongée par une extension latérale à toit plat bardée de bois sombre',
    legende: 'Extension latérale à toit plat, bardée de bois.',
    auteur: 'Maisons d’Excellence',
    source: 'Google Drive de l’entreprise (1qEIxthSEaEI4CAQtbk27izi1ya2jq-Di)',
  },
  bois: {
    src: '/extension/extension-ossature-bois-bardage-maison.webp',
    w: 1024,
    h: 683,
    alt: 'Extension à bardage bois clair et grandes ouvertures, accolée à une maison au toit d’ardoise',
    legende: 'Extension bardée de bois, ouverte sur le jardin.',
    auteur: 'Maisons d’Excellence',
    source: 'Google Drive de l’entreprise (18png5AuYNtt8aEESal9jZwz522ulIrKM)',
  },
  vertical: {
    src: '/extension/extension-blanche-toit-plat-jardin.webp',
    w: 784,
    h: 1168,
    alt: 'Extension blanche à toit plat avec grande baie vitrée, accolée à une maison ancienne, côté jardin',
    legende: 'Une grande baie vitrée ouvre l’extension sur le jardin.',
    auteur: 'Maisons d’Excellence',
    source: 'Google Drive de l’entreprise (1CgpXMRynISRBYO6RcGeBANrX-zOVeZ-u)',
  },
  interieur: {
    src: '/extension/extension-bardage-panneaux-gris.webp',
    w: 564,
    h: 423,
    alt: 'Extension habillée de panneaux gris, ouverte sur une terrasse en bois',
    legende: 'Extension habillée de panneaux, sur terrasse.',
    auteur: 'Maisons d’Excellence',
    source: 'Google Drive de l’entreprise (16IIZACOKfV2nRE6nrqILAr5XkmQdzIlo)',
  },
  carteLaterale: {
    src: '/extension/carte-extension-laterale.webp',
    w: 900,
    h: 604,
    alt: 'Extension latérale à toit plat au bardage sombre, posée contre le pignon d’une maison blanche',
    legende: '',
    auteur: 'Maisons d’Excellence',
    source: 'Google Drive de l’entreprise (1fShdViwdjbZooWrvLpVo-KzuGtmefQPT)',
  },
  carteArriere: {
    src: '/extension/carte-extension-arriere.webp',
    w: 900,
    h: 636,
    alt: 'Extension à l’arrière d’une maison, toit à deux pans, bardage et grandes baies sur terrasse',
    legende: '',
    auteur: 'Maisons d’Excellence',
    source: 'Google Drive de l’entreprise (1MT8R6AojBzilns8m4z2xQUGrYxTmIrAU)',
  },
  cartePieceDeVie: {
    src: '/extension/carte-prolongement-piece-de-vie.webp',
    w: 900,
    h: 604,
    alt: 'Maison blanche prolongée au rez-de-chaussée par un volume sombre à toit plat',
    legende: '',
    auteur: 'Maisons d’Excellence',
    source: 'Google Drive de l’entreprise (1QfGSC_7F-kz6Ci_ddbyUPtgUs-WQZpD9)',
  },
  carteGarage: {
    src: '/extension/carte-garage-transforme.webp',
    w: 784,
    h: 478,
    alt: 'Illustration : ancien garage aménagé en séjour avec cuisine ouverte',
    legende: '',
    auteur: 'Image générée (fournie par Maisons d’Excellence)',
    source: 'Google Drive de l’entreprise (1FNpyX3SXIKN-tE2AT9pwgkeDNF52sjl5), partie « après »',
  },
  bandeTypes: {
    src: '/extension/extension-bois-gris-terrasse.webp',
    w: 1280,
    h: 720,
    alt: 'Maison blanche à étage prolongée par une extension à toit plat, bois et gris, sur terrasse',
    legende: '',
    auteur: 'Maisons d’Excellence',
    source: 'Google Drive de l’entreprise (1PDWKiqYCjyEa0-9y6jBe-mPjKAKFxJmE)',
  },
  bandeUrbanisme: {
    src: '/extension/extension-grise-maison-blanche-jardin.webp',
    w: 1168,
    h: 784,
    alt: 'Maison blanche à étage avec extension grise à toit plat donnant sur le jardin',
    legende: '',
    auteur: 'Maisons d’Excellence',
    source: 'Google Drive de l’entreprise (17G1KjSpG5GPFnftcgWGahTdB7fRQ3xCL)',
  },
  bandeBudget: {
    src: '/extension/extension-deux-niveaux-bardage-sombre.webp',
    w: 1168,
    h: 784,
    alt: 'Maison enduite claire agrandie par un volume sur deux niveaux en bardage sombre',
    legende: '',
    auteur: 'Maisons d’Excellence',
    source: 'Google Drive de l’entreprise (1aIeDqGc6yOGYppQgo8bApPj3Bj6fZ0Ch)',
  },
  bandeFin: {
    src: '/extension/extension-cube-blanc-jardin.webp',
    w: 1280,
    h: 720,
    alt: 'Extension cubique blanche accolée à une maison au bardage sombre, côté jardin',
    legende: '',
    auteur: 'Maisons d’Excellence',
    source: 'Google Drive de l’entreprise (1qecL6TOOtbadCRgd-DE3kQCAKHHcqNsK)',
  },
} as const satisfies Record<string, PhotoExtension>;

export const SOMMAIRE_EXTENSION = [
  { id: 'types', titre: 'Les types d’extension' },
  { id: 'structure', titre: 'Choisir la structure' },
  { id: 'urbanisme', titre: 'Règles d’urbanisme' },
  { id: 'budget', titre: 'Budget et financement' },
  { id: 'accompagnement', titre: 'Notre accompagnement' },
  { id: 'secteurs', titre: 'Bourg, Meximieux, Ambérieu' },
  { id: 'faq', titre: 'Questions fréquentes' },
] as const;

export const INTRO_EXTENSION = [
  'Autour de Bourg-en-Bresse, Meximieux et Ambérieu-en-Bugey, nous agrandissons votre maison avec les matériaux de nos maisons neuves.',
  'Une extension ajoute une pièce sans changer d’adresse : un séjour agrandi, une chambre au rez-de-chaussée, une cuisine ouverte sur le jardin. Le bon choix dépend de la parcelle, de l’orientation et du PLU.',
] as const;

/** Texte de la rangée photo de la section « Types ». */
export const LUMIERE =
  'Une extension se juge à la lumière qu’elle apporte autant qu’à sa surface : orientation, baies et toiture se décident au plan. [Nos modèles de maisons](/nos-modeles) montrent les volumes que nous dessinons en neuf.';

/** Texte de la rangée photo de la section « Accompagnement ». */
export const JONCTION =
  'Le point délicat est la jonction : fondation, toiture sans infiltration, isolation continue, sol de plain-pied. Nous l’étudions en premier. Pour en parler, [écrivez-nous](/contact).';

/** Photo de chaque carte « type d'extension », dans l'ordre des cartes. */
export const PHOTOS_TYPES = ['carteLaterale', 'carteArriere', 'cartePieceDeVie', 'carteGarage'] as const;

export const TYPES_EXTENSION = [
  {
    titre: 'Extension latérale',
    texte: 'Posée sur un pignon, elle prolonge la façade. Les reculs fixés par le PLU décident souvent de sa largeur.',
  },
  {
    titre: 'Extension à l’arrière',
    texte: 'Côté jardin, discrète depuis la rue, elle s’ouvre largement sur l’extérieur.',
  },
  {
    titre: 'Prolongement de la pièce de vie',
    texte: 'Le mur existant s’ouvre et la pièce gagne en profondeur. Ouvrir un mur porteur demande une poutre dimensionnée dès l’étude.',
  },
  {
    titre: 'Garage transformé',
    texte: 'Le volume existe : il faut l’isoler, le ventiler, l’ouvrir. Supprimer une place de stationnement peut heurter le PLU.',
  },
] as const;


export const STRUCTURES = [
  {
    id: 'maconnerie',
    titre: 'Extension brique ou parpaing',
    paragraphes: [
      'La maçonnerie en brique ou en parpaing est la plus proche d’une maison elle-même maçonnée : même enduit, même comportement. Le revers est le poids : une étude de sol est recommandée sur les sols argileux de la Bresse.',
    ],
  },
  {
    id: 'cellulaire',
    titre: 'Extension béton cellulaire (Siporex, Ytong)',
    paragraphes: [
      'Le béton cellulaire, connu sous les marques Siporex ou Ytong, se pose en grands blocs collés. Plus léger que le parpaing, il isole par lui-même. Nous l’employons aussi en construction neuve.',
    ],
  },
  {
    id: 'bois',
    titre: 'Extension ossature bois',
    paragraphes: [
      'L’ossature bois, souvent préparée en atelier, donne un chantier sec et rapide. Légère, elle soulage le terrain. Sa jonction avec une maison maçonnée demande du soin, et son bardage doit respecter le PLU.',
    ],
  },
] as const;

/** Tableau comparatif : appréciations générales, sans chiffre. */
export const COMPARATIF = {
  criteres: ['Rapidité de chantier', 'Isolation', 'Poids et fondations', 'Raccordement à l’existant'],
  lignes: [
    {
      solution: 'Brique ou parpaing',
      valeurs: [
        'Plus long : maçonnerie, puis séchage',
        'Isolant à ajouter, sauf brique isolante',
        'Lourd : étude de sol conseillée',
        'Le plus simple sur une maison maçonnée',
      ],
    },
    {
      solution: 'Béton cellulaire',
      valeurs: [
        'Pose rapide en grands blocs',
        'Isolant, souvent complété',
        'Plus léger que le parpaing',
        'Simple : enduit compatible',
      ],
    },
    {
      solution: 'Ossature bois',
      valeurs: [
        'Le plus rapide après les fondations',
        'Très bonne, isolant dans l’ossature',
        'Léger : utile sur un sol médiocre',
        'Jonction bois-maçonnerie à soigner',
      ],
    },
  ],
} as const;

export const SEUILS = [
  {
    surface: 'Moins de 5 m²',
    regle: 'Pas d’autorisation au titre de la surface, mais une déclaration préalable si l’aspect extérieur change, ce qui est presque toujours le cas.',
  },
  { surface: 'De 5 à 20 m²', regle: 'Déclaration préalable de travaux.' },
  {
    surface: 'De 20 à 40 m²',
    regle: 'Déclaration préalable en zone urbaine (U) d’un PLU ; ailleurs, permis de construire. Permis aussi si la maison dépasse 150 m² après travaux.',
  },
  { surface: 'Plus de 40 m²', regle: 'Permis de construire.' },
] as const;

export const URBANISME = [
  'Au-delà de 150 m² de surface de plancher après travaux, l’architecte est obligatoire. Le projet s’apprécie dans son ensemble : le découper pour rester sous un seuil n’est pas admis.',
  'Une déclaration préalable s’instruit en 1 mois, un permis de maison individuelle en 2 mois, dossier complet. Avec l’avis de l’Architecte des Bâtiments de France : 2 mois pour une déclaration, 3 pour un permis.',
] as const;

export const REGLES_PLU = [
  'l’emprise au sol maximale ;',
  'la hauteur autorisée ;',
  'les reculs par rapport aux limites et à la voie ;',
  'l’aspect extérieur : enduit, toiture, menuiseries, bardage ;',
  'le stationnement à conserver.',
] as const;

export const URBANISME_OUTILS =
  'Le zonage de votre parcelle se consulte sur le Géoportail de l’urbanisme (geoportail-urbanisme.gouv.fr). Pour une réponse écrite de la mairie, demandez un certificat d’urbanisme.';

export const BUDGET_FACTEURS = [
  'la surface et le nombre d’ouvertures ;',
  'la structure et les fondations, selon le sol ;',
  'le raccordement à la toiture existante ;',
  'l’ouverture éventuelle d’un mur porteur ;',
  'le niveau de finition ;',
  'les réseaux à prolonger : électricité, chauffage, plomberie.',
] as const;

export const BUDGET = [
  {
    titre: 'TVA',
    texte: 'Une extension est une addition de construction : elle relève en principe du taux normal de 20 %. Les taux réduits visent les travaux d’amélioration sans création de surface, dans un logement de plus de deux ans.',
  },
  {
    titre: 'Taxe d’aménagement',
    texte: 'Elle est due dès qu’une extension crée plus de 5 m² clos et couverts. Son montant dépend de taux votés localement ; service-public.gouv.fr propose un simulateur.',
  },
  {
    titre: 'Financement',
    texte: 'Prêt travaux ou crédit immobilier. MaPrimeRénov’ et l’éco-PTZ visent la rénovation énergétique, pas la surface créée. France Rénov’ et l’ANIL (anil.org) renseignent sur les aides, y compris locales.',
  },
] as const;

export const ETAPES_EXTENSION = [
  { titre: 'Étude du projet', texte: 'Visite, relevé de la maison, lecture du PLU et de vos besoins.' },
  { titre: 'Plans et démarches', texte: 'Plans, puis déclaration préalable ou permis de construire.' },
  { titre: 'Devis', texte: 'Un descriptif poste par poste, établi après la visite.' },
  { titre: 'Chantier', texte: 'Fondations, gros œuvre, raccordement, finitions.' },
  { titre: 'Réception', texte: 'Visite de fin de chantier et réception des travaux.' },
] as const;

export const SECTEURS = [
  {
    titre: 'Autour de Bourg-en-Bresse',
    texte: 'Autour de [Bourg-en-Bresse](/construction-maison-bourg-en-bresse), le règlement d’un lotissement s’ajoute souvent au PLU, et le sol argileux de la Bresse appelle une étude de sol. À [Viriat](/construction-maison-viriat), une chambre de plus se vérifie côté assainissement ; à [Péronnas](/construction-maison-peronnas), ce sont souvent les reculs.',
  },
  {
    titre: 'Autour de Meximieux',
    texte: 'Notre bureau est à [Meximieux](/construction-maison-meximieux). Dans la plaine de l’Ain, les terrains plats simplifient les fondations ; près de Pérouges, un monument protégé peut imposer l’avis de l’Architecte des Bâtiments de France. À [Montluel](/construction-maison-montluel), les petites parcelles font de l’emprise au sol la première limite.',
  },
  {
    titre: 'Autour d’Ambérieu-en-Bugey',
    texte: 'À [Ambérieu-en-Bugey](/construction-maison-amberieu-en-bugey), les terrains en pente obligent l’extension à raccorder des niveaux différents. À [Lagnieu](/construction-maison-lagnieu), ce sont le sol de graviers et la nappe qui comptent ; à [Pont-d’Ain](/construction-maison-pont-d-ain), une zone inondable peut limiter l’agrandissement.',
  },
] as const;

export const SECTEURS_SUITE =
  'Nous intervenons aussi à [Saint-Denis-lès-Bourg](/construction-maison-saint-denis-les-bourg), [Ceyzériat](/construction-maison-ceyzeriat), [Attignat](/construction-maison-attignat) et [Montrevel-en-Bresse](/construction-maison-montrevel-en-bresse). Vous cherchez plutôt un terrain ? Voyez [nos terrains à bâtir](/terrains).';

export const FAQ_EXTENSION: readonly QuestionLocale[] = [
  {
    q: 'Faut-il un permis de construire ou une déclaration préalable pour une extension ?',
    r: 'Jusqu’à 20 m², une déclaration préalable suffit. De 20 à 40 m², elle suffit encore en zone urbaine d’un PLU, sauf si la maison dépasse 150 m² après travaux. Au-delà de 40 m², il faut un permis.',
  },
  {
    q: 'Un architecte est-il obligatoire pour une extension ?',
    r: 'Oui, dès que la surface de plancher de la maison dépasse 150 m² après l’extension. En dessous, non.',
  },
  {
    q: 'Combien de temps faut-il pour une extension ?',
    r: 'Étude et plans, puis 1 mois d’instruction pour une déclaration, 2 pour un permis. La durée du chantier se précise au devis.',
  },
  {
    q: 'Quelle TVA s’applique à une extension de maison ?',
    r: 'En principe 20 %, car une extension est une addition de construction. Les taux réduits concernent les travaux sans création de surface.',
  },
  {
    q: 'Faut-il un permis pour une extension de 20 m² ?',
    r: 'En règle générale non : une déclaration préalable suffit. Le PLU s’applique malgré tout.',
  },
  {
    q: 'Extension en bois ou en brique : que choisir ?',
    r: 'La brique et le béton cellulaire se raccordent simplement à une maison maçonnée ; l’ossature bois est plus légère et plus rapide. Le sol et la maison orientent le choix.',
  },
  {
    q: 'Peut-on habiter la maison pendant les travaux ?',
    r: 'En général oui : l’extension se construit à côté. Le moment gênant est l’ouverture du mur existant.',
  },
  {
    q: 'Quel budget prévoir pour une extension ?',
    r: 'Il dépend de la surface, de la structure, du sol et des finitions. Nous chiffrons après visite. Ajoutez la taxe d’aménagement au-delà de 5 m².',
  },
  {
    q: 'Faut-il un permis pour une extension à Bourg-en-Bresse ?',
    r: 'Les seuils sont les mêmes partout. Le service urbanisme de la mairie de Bourg-en-Bresse précise les règles du PLU.',
  },
  {
    q: 'Qui contacter pour une extension à Meximieux ?',
    r: 'Notre bureau, 6 rue de Genève à Meximieux, ouvert du lundi au vendredi de 9h à 19h, au 04 74 34 66 43.',
  },
];
