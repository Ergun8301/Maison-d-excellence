/**
 * Pages locales.
 *
 * Trois pages de ville — Meximieux, Bourg-en-Bresse, Ambérieu-en-Bugey — et
 * vingt pages de commune rattachées à l'une d'elles : douze ici, huit dans
 * lib/data/locales-communes-2.ts, ajoutées à la suite du tableau. Les trois villes sont
 * celles autour desquelles la zone d'intervention est dessinée : chacune porte
 * un cercle de 30 km sur la carte de la page zone d'intervention
 * (lib/data/communes.ts). Ce ne sont pas des agences : le bureau est à
 * Meximieux, et aucune page ne doit laisser croire à d'autres implantations.
 * Dans le code, ces trois villes restent « les pôles » ; à l'écran, on dit
 * « zone d'intervention autour de… ».
 *
 * Chaque page a son propre sujet, et non le même texte avec le nom de la
 * commune changé :
 *
 *   Meximieux              le bureau est dans la rue ; les abords de Pérouges
 *   Bourg-en-Bresse        le sol argileux de la Bresse, les études de sol G1/G2
 *   Ambérieu-en-Bugey      la pente, le sous-sol, les demi-niveaux
 *   Viriat                 des hameaux dispersés, l'assainissement non collectif
 *   Péronnas               le terrain issu d'une division, les vues, l'accès
 *   Saint-Denis-lès-Bourg  les eaux de pluie à garder sur la parcelle
 *   Attignat               le PLU d'un village qui s'agrandit, les raccordements
 *   Ceyzériat              le relief du Revermont, l'aspect extérieur imposé
 *   Montagnat              le voisinage agricole, la réciprocité des distances
 *   Marboz                 le chauffage et l'orientation, la RE2020
 *   Montrevel-en-Bresse    acheter le terrain : certificat d'urbanisme, promesse
 *   Montluel               des parcelles petites, l'emprise au sol
 *   Lagnieu                les graviers de la plaine, le niveau de l'eau
 *   Pont-d'Ain             le risque d'inondation, la cote de référence
 *   Dagneux                le bruit de l'A42, l'isolement des façades
 *
 * Les pages de commune sont volontairement plus courtes que les trois
 * pages de ville : elles n'ont pas de liste de communes voisines, et renvoient
 * à leur ville de référence.
 *
 * LIENS DANS LE TEXTE. Un paragraphe peut porter des liens internes, notés
 * `[texte affiché](/chemin)` (voir lib/texte.tsx). Règle d'écriture : un lien
 * se place dans une phrase qui dit pourquoi on clique, avec une ancre
 * descriptive et différente d'un lien à l'autre. Jamais « cliquez ici », jamais
 * une rangée de liens. Les introductions des bandeaux sombres n'en portent pas.
 *
 * Rien ici n'est inventé. Trois règles ont tenu l'écriture :
 *
 *  - Aucun avis, aucune réalisation nommée, aucun chantier attribué à une
 *    commune. L'entreprise n'a pas de relevé de ses livraisons commune par
 *    commune, et une référence inventée est un mensonge qui se vérifie en un
 *    appel. On ne dit donc jamais « nos constructions à X » : on dit ce que le
 *    terrain de X demande, et chaque page invite à appeler pour voir des
 *    chantiers proches.
 *
 *  - Aucun chiffre nouveau propre à l'entreprise. Les douze mois de chantier,
 *    la réponse sous 48 h, le rayon de 30 km, l'échéancier, les horaires du
 *    bureau figurent déjà ailleurs sur le site. Les distances à Bourg viennent
 *    de sources publiques (PLU, Wikipédia) et restent des ordres de grandeur.
 *
 *  - Ce qui dépend du terrain est dit comme tel : « en général », « selon le
 *    terrain », « à confirmer lors de l'étude de sol ». Les obligations citées
 *    — étude de sol, périmètre d'un monument protégé, règlement de lotissement,
 *    assainissement non collectif, orientation d'aménagement, certificat
 *    d'urbanisme, plan de prévention — sont des règles générales, données comme
 *    des points à vérifier auprès de la mairie, jamais comme un relevé du PLU
 *    de la commune. Le prêt à taux zéro est cité sans condition chiffrée : ses
 *    règles changent, c'est la banque qui dit si l'on y a droit.
 *
 * À COMPLÉTER PAR LE CLIENT, quand l'information existera :
 *  - des réalisations situées, commune par commune ;
 *  - le nombre de maisons livrées dans chacun des trois secteurs ;
 *  - les éventuelles contraintes de PLU qu'Aykut connaît et qui méritent
 *    d'être écrites noir sur blanc pour chaque commune ;
 *  - si une agence ouvre à Bourg-en-Bresse : l'adresse, les horaires, et la
 *    page Bourg-en-Bresse à reprendre en conséquence.
 */

import { LOCALES_COMMUNES_2 } from '@/lib/data/locales-communes-2';

export type QuestionLocale = { readonly q: string; readonly r: string };
export type BlocLocal = { readonly titre: string; readonly paragraphes: readonly string[] };

/** Commune voisine. `slug` quand elle a sa propre page : le nom devient un lien. */
export type Voisine = { readonly nom: string; readonly note: string; readonly slug?: string };

export type Voisines = {
  readonly titre: string;
  readonly intro: string;
  readonly liste: readonly Voisine[];
};

/** Renvoi d'une commune vers la ville de référence de sa zone. */
export type Pole = { readonly slug: string; readonly commune: string; readonly texte: string };

export type PageLocale = {
  readonly slug: string;
  readonly commune: string;
  readonly surtitre: string;
  /**
   * Titre en morceaux. Le deuxième est le nom de la commune, que le gabarit
   * empêche de se couper : « Bourg-en-Bresse » rompu après un tiret se lit mal
   * et donnait trois lignes de titre sur un téléphone. Le troisième, facultatif,
   * est la ville de référence ajoutée derrière une virgule (« , près de
   * Bourg-en-Bresse »), insécable elle aussi.
   */
  readonly h1: readonly [debut: string, commune: string, repere?: string];
  readonly intro: readonly string[];
  readonly blocs: readonly BlocLocal[];
  /** Les communes alentour. Absent sur les douze pages de commune. */
  readonly voisines?: Voisines;
  /** La ville de référence. Absent sur les trois pages de ville. */
  readonly pole?: Pole;
  readonly faqTitre: string;
  readonly faq: readonly QuestionLocale[];
  /**
   * Photo d'une réalisation déjà publiée sur le site, posée après la première
   * section. Facultative : les douze premières pages n'en portent pas. Le texte
   * alternatif décrit l'image, sans la rattacher à la commune.
   */
  readonly photo?: { readonly src: string; readonly w: number; readonly h: number; readonly alt: string };
  /** Texte de l'appel à l'estimation. Propre à chaque commune : quinze pages
   *  qui se terminent sur la même phrase sont quinze pages qui se recopient. */
  readonly ctaTexte: string;
  /** Invitation à appeler pour voir un chantier proche. Le gabarit ajoute le
   *  numéro de téléphone derrière, en lien cliquable. */
  readonly invitation: string;
};

export const LOCALES: readonly PageLocale[] = [
  /* ══ LES TROIS VILLES ═══════════════════════════════════════════════════ */

  /* ── Meximieux ─────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-meximieux',
    commune: 'Meximieux',
    surtitre: 'Meximieux · Ain (01)',
    h1: ['Construire une maison à', 'Meximieux'],
    intro: [
      'Notre bureau est au 6 rue de Genève, à Meximieux. C’est d’ici que partent les plans, les rendez-vous et les visites de chantier : la commune n’est pas un secteur de plus sur une carte, c’est l’adresse de l’entreprise.',
      'Meximieux tient le milieu de la plaine de l’Ain, entre Lyon et Ambérieu, avec sa gare sur la ligne Lyon–Ambérieu et l’accès autoroutier par Pérouges. Les terrains y sont pour l’essentiel plats, livrés viabilisés en lotissement ou en division de parcelle, ce qui simplifie les fondations et l’accès des engins pour la construction d’une maison individuelle neuve.',
    ],
    blocs: [
      {
        titre: 'Un constructeur dont le bureau est dans la rue',
        paragraphes: [
          'Pour un projet à Meximieux, le premier rendez-vous se fait au bureau ou sur votre terrain, sans déplacement à organiser. C’est le cas le plus simple de toute notre zone : la commune est à quelques minutes, et une visite de chantier se cale dans une matinée.',
          'Le bureau est ouvert du lundi au vendredi de 9h à 19h, et le samedi sur rendez-vous. Vous pouvez passer sans prévenir, mais un appel évite de trouver la porte close un jour de chantier.',
        ],
      },
      {
        titre: 'Les abords de Pérouges demandent de l’attention',
        paragraphes: [
          'La cité médiévale de Pérouges jouxte Meximieux, et le périmètre de protection d’un monument classé peut soumettre un projet à l’avis de l’Architecte des Bâtiments de France. Cela ne change pas la nature du permis de construire, mais cela peut peser sur les teintes d’enduit, les tuiles, les menuiseries.',
          'Le périmètre exact et les prescriptions se lisent au service urbanisme de la mairie, parcelle par parcelle. Nous faisons cette vérification avant de dessiner, et non après : reprendre une façade sur demande de l’administration coûte plus cher que de l’avoir dessinée juste. La même question se pose [aux abords du château de Pont-d’Ain](/construction-maison-pont-d-ain), classé monument historique.',
        ],
      },
      {
        titre: 'Maison neuve en briques, plan de maison personnalisé',
        paragraphes: [
          'Des maisons en briques ou en béton cellulaire, charpente traditionnelle, vide sanitaire, conformes à la RE2020. Le plan de maison individuelle se dessine autour de votre terrain et de ce que le PLU y autorise : une maison personnalisée, de plain-pied ou à étage, pas un modèle de catalogue posé sur une parcelle. [Nos modèles de maisons](/nos-modeles) servent de point de départ.',
          'Tout passe par un contrat de construction de maison individuelle : prix ferme et définitif, délai contractuel avec pénalités de retard, garantie de livraison. Les garanties légales suivent, du parfait achèvement à la décennale. Selon votre projet, la maison est livrée clé en main ou hors d’eau hors d’air : ce choix de finition se discute dès le premier rendez-vous.',
        ],
      },
      {
        titre: 'Du permis de construire au financement',
        paragraphes: [
          'Le permis de construire se dépose une fois le plan arrêté, et l’instruction prend des mois, pas des semaines. [Les étapes d’un projet, du premier rendez-vous aux clés](/blog/etapes-projet-construction) donnent le délai de chacune.',
          'Le financement se prépare en parallèle. Le prêt à taux zéro (PTZ) peut, sous conditions, compléter le prêt principal pour une maison neuve : votre banque dit si vous y avez droit à la date de votre projet.',
        ],
      },
    ],
    voisines: {
      titre: 'Autour de Meximieux',
      intro:
        'Les communes voisines relèvent de la même zone d’intervention, à quelques minutes du bureau. Pour chacune, le PLU est à lire avant de dessiner. Six ont leur propre page : [les petites parcelles de Montluel](/construction-maison-montluel) sur la Côtière, [le sol de graviers de Lagnieu](/construction-maison-lagnieu) en pleine plaine, [Pont-d’Ain et son plan de prévention](/construction-maison-pont-d-ain) au bord de la rivière, [l’isolement des façades à Dagneux](/construction-maison-dagneux) le long de l’A42, [Villieu-Loyes-Mollon](/construction-maison-villieu-loyes-mollon), commune de trois villages, et [Bourg-Saint-Christophe](/construction-maison-bourg-saint-christophe), au pied de la Côtière.',
      liste: [
        { nom: 'Pérouges', note: 'Cité médiévale voisine ; les abords peuvent relever d’un périmètre de protection.' },
        { nom: 'Montluel', note: 'Sur la Côtière, côté Lyon : des parcelles plus petites et plus chères.', slug: 'construction-maison-montluel' },
        { nom: 'Lagnieu', note: 'À l’est, en pleine plaine : sol de graviers, terrains plats.', slug: 'construction-maison-lagnieu' },
        { nom: 'Pont-d’Ain', note: 'Sur la rivière d’Ain, au nord : le risque d’inondation se lit avant d’acheter.', slug: 'construction-maison-pont-d-ain' },
        { nom: 'Dagneux', note: 'Sur la Côtière, au bord de l’A42 : le bruit se lit sur une carte.', slug: 'construction-maison-dagneux' },
        { nom: 'Villieu-Loyes-Mollon', note: 'Au pied de la Côtière, entre Meximieux et Pont-d’Ain : trois anciens villages, à trois kilomètres du bureau.', slug: 'construction-maison-villieu-loyes-mollon' },
        { nom: 'Charnoz-sur-Ain', note: 'En bord d’Ain, juste à l’est de Meximieux.' },
        { nom: 'Chazey-sur-Ain', note: 'Rive droite de l’Ain, parcelles souvent généreuses.' },
        { nom: 'Bourg-Saint-Christophe', note: 'Au pied de la Côtière, à trois kilomètres de Meximieux et de Pérouges : l’eau du coteau se lit sur place.', slug: 'construction-maison-bourg-saint-christophe' },
        { nom: 'Le Montellier', note: 'Entrée de la Dombes, habitat dispersé.' },
        { nom: 'Rignieux-le-Franc', note: 'Dombes des étangs, au nord-ouest.' },
        { nom: 'Joyeux', note: 'Dombes, petites communes et terrains de lotissement.' },
      ],
    },
    faqTitre: 'Questions qu’on nous pose à Meximieux',
    faq: [
      {
        q: 'Votre bureau est-il vraiment à Meximieux ?',
        r: 'Oui, au 6 rue de Genève, 01800 Meximieux. Ouvert du lundi au vendredi de 9h à 19h, et le samedi sur rendez-vous. C’est le siège de l’entreprise, pas une adresse de domiciliation.',
      },
      {
        q: 'Faut-il un permis de construire différent près de Pérouges ?',
        r: 'Non, le permis de construire est le même. En revanche, si votre parcelle se situe dans le périmètre de protection d’un monument classé, l’instruction peut comporter l’avis de l’Architecte des Bâtiments de France, qui porte surtout sur l’aspect extérieur. Le service urbanisme de la mairie vous dira si votre terrain est concerné.',
      },
      {
        q: 'Combien de temps dure le chantier ?',
        r: 'Le contrat de construction fixe un délai de douze mois de chantier, assorti de pénalités de retard. Ce délai court à partir de l’ouverture du chantier, après l’obtention du permis et le déblocage du financement.',
      },
      {
        q: 'Je possède déjà un terrain à Meximieux, pouvez-vous construire dessus ?',
        r: 'Oui. Nous partons du terrain : relevé, orientation, accès, règles du PLU, puis le plan se dessine autour de ces contraintes. Si vous n’avez pas encore de terrain, dites-le nous : nous suivons les opportunités du secteur, à voir sur [nos terrains à bâtir dans l’Ain](/terrains).',
      },
    ],
    ctaTexte:
      'Le simulateur part de la surface, des niveaux et des équipements. Pour un terrain à Meximieux, vous pouvez aussi passer au bureau avec votre plan de parcelle : c’est plus rapide qu’un formulaire.',
    invitation: 'Pour voir une maison en cours de chantier à quelques minutes du bureau, appelez-nous au',
  },

  /* ── Bourg-en-Bresse ───────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-bourg-en-bresse',
    commune: 'Bourg-en-Bresse',
    surtitre: 'Bourg-en-Bresse · Ain (01)',
    h1: ['Construire une maison à', 'Bourg-en-Bresse'],
    intro: [
      'Bourg-en-Bresse, préfecture de l’Ain, est au cœur de notre zone d’intervention : nous y construisons des maisons individuelles neuves, en ville comme dans un rayon d’environ 30 km autour d’elle, de la première couronne jusqu’aux villages bressans.',
      'Construire en Bresse n’est pas construire dans la plaine de l’Ain. Le sol n’est pas le même, l’habitat traditionnel n’est pas le même, et les terrains disponibles se trouvent rarement dans la ville-centre : ils sont dans la première couronne.',
    ],
    blocs: [
      {
        titre: 'Étude de sol G1 et G2 : la Bresse se lit avant de construire',
        paragraphes: [
          'Les terres bressanes comportent beaucoup d’argile, et l’argile gonfle quand il pleut, se rétracte quand il sèche. Une fondation mal dimensionnée sur ce mouvement fissure des années plus tard, quand tout le monde a oublié qui avait coulé le béton.',
          'C’est pour cette raison que l’étude géotechnique est devenue obligatoire à la vente d’un terrain constructible situé en zone d’exposition moyenne ou forte au retrait-gonflement des argiles. L’étude préalable (G1) existe-t-elle ? Nous la lisons. L’étude de conception (G2) précise ensuite les fondations, leur profondeur et la nécessité d’un vide sanitaire : elle décide, pas une habitude de chantier.',
          'Le même sol se lit différemment d’une commune à l’autre : voyez [l’infiltration des eaux de pluie à Saint-Denis-lès-Bourg](/construction-maison-saint-denis-les-bourg) ou [les conditions suspensives d’une promesse de vente à Montrevel-en-Bresse](/construction-maison-montrevel-en-bresse).',
        ],
      },
      {
        titre: 'Les terrains sont dans la couronne',
        paragraphes: [
          'La ville-centre laisse peu de parcelles libres. Les projets de maison neuve se concentrent sur les communes qui la bordent : [construire à Péronnas](/construction-maison-peronnas), au sud, sur un terrain issu d’une division ; [les hameaux et l’assainissement de Viriat](/construction-maison-viriat), au nord ; [les lotissements de Saint-Denis-lès-Bourg](/construction-maison-saint-denis-les-bourg), à l’ouest.',
          'Un terrain en lotissement s’accompagne d’un règlement propre, qui s’ajoute au PLU et se montre parfois plus exigeant que lui : implantation, pente de toit, teintes, clôtures. Nous le lisons avant de dessiner, pour que le plan n’ait pas à être repris.',
          'Plus loin de la ville, chaque commune a son sujet : [les secteurs d’extension d’Attignat](/construction-maison-attignat), [le relief de Ceyzériat](/construction-maison-ceyzeriat), [les champs voisins de Montagnat](/construction-maison-montagnat) ou [le chauffage d’une maison de campagne à Marboz](/construction-maison-marboz).',
        ],
      },
      {
        titre: 'Le style bressan, sans pastiche',
        paragraphes: [
          'La maison bressanne traditionnelle est longue, basse, largement débordante de toiture. Une construction neuve n’a pas à l’imiter pour s’intégrer, mais elle gagne à en retenir les proportions : un volume allongé et une toiture franche — en plain-pied comme en maison à étage — tiennent mieux dans ce paysage qu’un cube à toit plat posé au milieu d’un pré.',
          'Nous dessinons les plans, nous ne vendons pas de modèle : une maison personnalisée, en briques ou en béton cellulaire, contemporaine ou de volumétrie plus traditionnelle. Ce qui ne se discute pas, c’est le respect de ce que le PLU autorise, que le permis de construire vérifie. Voyez [nos modèles de maisons](/nos-modeles) pour les deux écritures.',
        ],
      },
      {
        titre: 'Permis de construire, PTZ et finitions d’une maison neuve',
        paragraphes: [
          'Le dossier de permis de construire s’appuie sur le plan arrêté, l’étude de sol et le règlement du PLU de la commune : [le déroulé complet d’un projet, du premier rendez-vous aux clés](/blog/etapes-projet-construction) en donne les délais. La finition se choisit dès le premier rendez-vous ; livrée clé en main ou hors d’eau hors d’air, la maison ne mobilise pas les mêmes postes de budget.',
          'Côté financement, le prêt à taux zéro (PTZ) est une aide à examiner pour l’achat d’une maison neuve : ses conditions de ressources et de zone changent, et seule votre banque peut confirmer vos droits. Pour le reste du plan de financement, [l’échéancier de paiement d’un CCMI](/blog/echeancier-ccmi) détaille les appels de fonds, étape par étape.',
        ],
      },
      {
        titre: 'Trente kilomètres autour de Bourg-en-Bresse',
        paragraphes: [
          'Notre zone d’intervention compte trente kilomètres autour de Bourg-en-Bresse, comme autour de Meximieux et d’Ambérieu-en-Bugey : [la carte de la zone d’intervention](/zone-intervention) en dessine les trois cercles. Le secteur bressan se mène comme les autres : le même interlocuteur du premier rendez-vous à la remise des clés, les mêmes artisans, les mêmes rendez-vous de chantier.',
          'Bourg-en-Bresse est à environ 40 km du bureau de Meximieux par l’A42 puis l’A40 ; pour savoir [comment se passe un premier rendez-vous au bureau](/construction-maison-meximieux), voyez la page de Meximieux. Douze communes du secteur ont ici leur propre page : Péronnas, Viriat, Saint-Denis-lès-Bourg, Attignat, Ceyzériat, Montagnat, Marboz, Montrevel-en-Bresse, Polliat, Servas, Jasseron et Buellas.',
        ],
      },
    ],
    voisines: {
      titre: 'Autour de Bourg-en-Bresse',
      intro:
        'Les communes de la périphérie concentrent l’essentiel des terrains constructibles du secteur. Nous y intervenons dans les mêmes conditions qu’à Bourg même, et chacune des douze premières a sa page.',
      liste: [
        { nom: 'Péronnas', note: 'Au sud immédiat : tissu déjà bâti, terrains issus d’une division.', slug: 'construction-maison-peronnas' },
        { nom: 'Viriat', note: 'Au nord, à environ 7 km du centre : commune étendue faite de hameaux dispersés.', slug: 'construction-maison-viriat' },
        { nom: 'Saint-Denis-lès-Bourg', note: 'À l’ouest, en Bresse plate : les eaux de pluie restent sur la parcelle.', slug: 'construction-maison-saint-denis-les-bourg' },
        { nom: 'Attignat', note: 'Au nord-ouest, village bressan qui s’agrandit par secteurs encadrés.', slug: 'construction-maison-attignat' },
        { nom: 'Ceyzériat', note: 'À l’est, au pied du Revermont : le relief change avec la parcelle.', slug: 'construction-maison-ceyzeriat' },
        { nom: 'Montagnat', note: 'Au sud-est, dans l’agglomération : les champs touchent les lotissements.', slug: 'construction-maison-montagnat' },
        { nom: 'Marboz', note: 'Au nord, près de l’A39 : une grande commune de campagne, où le chauffage se choisit tôt.', slug: 'construction-maison-marboz' },
        { nom: 'Montrevel-en-Bresse', note: 'Au nord, dans la Bresse : l’achat du terrain se prépare avant le plan.', slug: 'construction-maison-montrevel-en-bresse' },
        { nom: 'Certines', note: 'Sur l’axe Bourg–Meximieux, à mi-chemin du bureau.' },
        { nom: 'Polliat', note: 'À dix kilomètres à l’ouest, dans le sud de la Bresse : une gare TER, la D 1079 et l’A40.', slug: 'construction-maison-polliat' },
        { nom: 'Servas', note: 'Au sud, dans la Bresse de l’Ain : un village traversé par la route de Lyon, entre deux usines.', slug: 'construction-maison-servas' },
        { nom: 'Jasseron', note: 'À huit kilomètres à l’est, dans le Revermont : des bois, l’A40 et un aérodrome.', slug: 'construction-maison-jasseron' },
        { nom: 'Buellas', note: 'À l’ouest, entre plaine bressane et plateau dombiste : soixante mètres de relief.', slug: 'construction-maison-buellas' },
      ],
    },
    faqTitre: 'Questions qu’on nous pose à Bourg-en-Bresse',
    faq: [
      {
        q: 'Intervenez-vous à Bourg-en-Bresse et dans sa couronne ?',
        r: 'Oui. Bourg-en-Bresse fait partie de notre zone d’intervention, avec un rayon d’environ 30 km autour de la ville : la ville, la première couronne et les villages bressans alentour relèvent du même secteur.',
      },
      {
        q: 'Les études de sol G1 et G2 sont-elles obligatoires ici ?',
        r: 'La G1 l’est à la vente d’un terrain constructible situé en zone d’exposition moyenne ou forte au retrait-gonflement des argiles, ce qui concerne une grande partie de la Bresse. L’étude de conception G2 dimensionne ensuite les fondations ; son résultat est pris en compte dans le contrat de construction.',
      },
      {
        q: 'Pouvez-vous construire dans un lotissement ?',
        r: 'Oui, c’est même le cas le plus fréquent autour de Bourg. Le lotissement ajoute son règlement au PLU : implantation, hauteurs, pentes de toit, parfois les teintes et les clôtures. Nous le lisons avant de dessiner le plan.',
      },
      {
        q: 'Qui suit le chantier au quotidien ?',
        r: 'Un seul interlocuteur, du premier rendez-vous à la remise des clés. C’est le principe de la maison : vous n’avez pas à relancer cinq personnes différentes. Les rendez-vous de chantier sont planifiés et vous y êtes invité.',
      },
    ],
    ctaTexte:
      'Le simulateur donne une fourchette à partir de la surface, des niveaux et des équipements. Elle ne tient pas compte de l’étude de sol, qui pèse réellement sur les fondations en terre bressane : le chiffrage définitif vient après.',
    invitation: 'Pour voir un chantier ouvert dans le secteur bressan, appelez-nous au',
  },

  /* ── Ambérieu-en-Bugey ─────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-amberieu-en-bugey',
    commune: 'Ambérieu-en-Bugey',
    surtitre: 'Ambérieu-en-Bugey · Ain (01)',
    h1: ['Construire une maison à', 'Ambérieu-en-Bugey'],
    intro: [
      'Ambérieu-en-Bugey est à un quart d’heure de notre bureau de Meximieux, à l’endroit où la plaine de l’Ain s’arrête et où le Bugey commence. Cette frontière se lit dans les terrains : une parcelle de plaine et une parcelle de pied de falaise ne se construisent pas de la même façon.',
      'C’est l’une des communes de notre zone où la pente se rencontre souvent. Elle n’est pas un problème — elle est une donnée, qui se traite au moment du plan et non au moment du chantier.',
    ],
    blocs: [
      {
        titre: 'Maison neuve sur terrain en pente : sous-sol, demi-niveaux ou plateforme',
        paragraphes: [
          'Un terrain en pente change trois choses : la façon de poser la maison, le volume de terre à déplacer, et l’accès des engins. Les trois se décident sur le relevé du terrain, avant le premier trait de plan.',
          'Selon le dénivelé, la maison se pose sur un sous-sol semi-enterré, se décale en demi-niveaux, ou s’installe sur une plateforme avec un mur de soutènement. Chacune de ces solutions a un coût et une conséquence sur le plan : un sous-sol donne du volume, un décalage de niveaux donne des hauteurs sous plafond inhabituelles, une plateforme donne du terrain plat autour de la maison.',
          'Nous ne donnons pas de fourchette au mètre carré pour un terrain en pente sans l’avoir vu. Le chiffrage se fait sur votre parcelle, à partir du relevé et de l’étude de sol.',
        ],
      },
      {
        titre: 'Plaine ou relief : l’étude de sol G1 et G2 tranche',
        paragraphes: [
          'À l’ouest d’Ambérieu, on est en général sur les alluvions de la plaine de l’Ain. À l’est, on arrive au pied du relief du Bugey, où la roche peut remonter et où certains terrains comportent des éboulis. Le même contraste se retrouve [à Ceyzériat, au pied du Revermont](/construction-maison-ceyzeriat).',
          'Deux parcelles éloignées de quelques centaines de mètres peuvent demander des fondations très différentes. C’est à confirmer lors de l’étude de sol, G1 puis G2 selon le terrain, qu’il faut avoir en main avant de parler de prix.',
        ],
      },
      {
        titre: 'Plain-pied ou maison à étage : ce que la pente change au plan',
        paragraphes: [
          'Une pente bien exploitée offre ce qu’un terrain plat ne donne pas : un garage en rez-de-jardin qui n’entame pas la surface habitable, une pièce de vie ouverte sur le vide, une terrasse de plain-pied à l’étage.',
          'Le plain-pied reste possible sur un terrain en pente, à condition de créer une plateforme — ce qui suppose d’avoir la place et le droit de terrasser. Le PLU et le règlement de lotissement fixent souvent des limites sur les mouvements de terre et la hauteur des murs de soutènement. Une maison sur vide sanitaire ou sur plateforme n’appelle pas les mêmes terrassements qu’un sous-sol. Sur une parcelle plus plate, le plain-pied reste en revanche le plus simple : [la maison de plain-pied à Lagnieu](/construction-maison-lagnieu) en donne l’exemple.',
        ],
      },
    ],
    voisines: {
      titre: 'Le pied du Bugey',
      intro:
        'Les communes qui entourent Ambérieu partagent la même particularité : on passe de la plaine au relief en quelques kilomètres, et le terrain décide du projet. [Lagnieu, en retour de plaine](/construction-maison-lagnieu), [Pont-d’Ain, sur la rivière](/construction-maison-pont-d-ain), [Saint-Denis-en-Bugey, dans la banlieue de la ville](/construction-maison-saint-denis-en-bugey) et [Château-Gaillard, bourg rural en plaine](/construction-maison-chateau-gaillard) ont chacune leur page.',
      liste: [
        { nom: 'Saint-Denis-en-Bugey', note: 'Mitoyenne d’Ambérieu, dans le Bugey : la gare à deux kilomètres, la route et le rail dans le décor.', slug: 'construction-maison-saint-denis-en-bugey' },
        { nom: 'Château-Gaillard', note: 'Dans la plaine de l’Ain, à trois kilomètres d’Ambérieu : un bourg rural en quatre ensembles.', slug: 'construction-maison-chateau-gaillard' },
        { nom: 'Vaux-en-Bugey', note: 'Sur le coteau, parcelles fréquemment en pente.' },
        { nom: 'Bettant', note: 'Adossée au relief, au nord-est d’Ambérieu.' },
        { nom: 'Douvres', note: 'Au pied de la falaise, le long de la vallée.' },
        { nom: 'Ambutrix', note: 'Sur le plateau, au sud.' },
        { nom: 'Saint-Sorlin-en-Bugey', note: 'En bord de Rhône, terrains étroits et pentus.' },
        { nom: 'Lagnieu', note: 'Au sud, retour en plaine et en terrain plat.', slug: 'construction-maison-lagnieu' },
        { nom: 'Pont-d’Ain', note: 'Au nord, sur la rivière d’Ain : le risque d’inondation se lit avant d’acheter.', slug: 'construction-maison-pont-d-ain' },
      ],
    },
    faqTitre: 'Questions qu’on nous pose à Ambérieu',
    faq: [
      {
        q: 'Construisez-vous une maison sur un terrain en pente ?',
        r: 'Oui, c’est courant autour d’Ambérieu. Selon le dénivelé, la maison se pose sur un sous-sol semi-enterré, se décale en demi-niveaux ou s’installe sur une plateforme avec soutènement. La solution se choisit sur le relevé du terrain, avant le plan.',
      },
      {
        q: 'Un sous-sol coûte-t-il plus cher qu’un vide sanitaire ?',
        r: 'Cela dépend entièrement de la parcelle : nature du sol, dénivelé, volume de terre à sortir, accès des engins. Nous ne donnons pas de prix au mètre carré pour un sous-sol sans avoir vu le terrain et lu l’étude de sol. Le chiffrage se fait sur votre parcelle.',
      },
      {
        q: 'Ambérieu-en-Bugey est-elle dans votre zone d’intervention ?',
        r: 'Oui : c’est l’une des trois villes autour desquelles nous intervenons, avec Meximieux et Bourg-en-Bresse, dans un rayon d’environ 30 km. Tout le pied du Bugey et la plaine alentour en relèvent. Notre bureau est au 6 rue de Genève à Meximieux, à un quart d’heure environ par la route.',
      },
      {
        q: 'Peut-on faire une maison de plain-pied malgré la pente ?',
        r: 'En général oui, en créant une plateforme. Encore faut-il en avoir la place et le droit : le PLU et, en lotissement, le règlement du lotissement encadrent souvent les mouvements de terre et la hauteur des murs de soutènement. Cela se vérifie parcelle par parcelle avant de dessiner.',
      },
    ],
    ctaTexte:
      'Le simulateur suppose un terrain plat. Sur une parcelle en pente, il donne un ordre de grandeur et rien de plus : le terrassement et les fondations se chiffrent sur le relevé de votre terrain.',
    invitation: 'Pour voir une maison construite sur un terrain en pente, appelez-nous au',
  },

  /* ══ COMMUNES DE LA ZONE DE BOURG-EN-BRESSE ═════════════════════════════ */

  /* ── Viriat ────────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-viriat',
    commune: 'Viriat',
    surtitre: 'Viriat · Ain (01)',
    h1: ['Construire une maison à', 'Viriat', 'Bourg-en-Bresse'],
    intro: [
      'Viriat borde Bourg-en-Bresse au nord, à environ 7 km de l’hypercentre, et s’étend sur un très grand territoire : un village entouré de nombreux hameaux dispersés en pleine campagne bressane.',
      'Cette dispersion est la première chose à regarder pour une maison neuve. Elle décide de ce qui arrive jusqu’à la parcelle, et surtout de la façon dont la maison traitera ses eaux usées.',
    ],
    blocs: [
      {
        titre: 'Le hameau change tout',
        paragraphes: [
          'Un terrain à Viriat peut se trouver à deux minutes des écoles ou à plusieurs kilomètres, au bout d’un chemin. L’adresse ne le dit pas : il faut situer la parcelle sur le plan de zonage du PLU, puis demander en mairie ce qui la dessert.',
          'Trois questions cadrent le budget : la parcelle est-elle raccordable au réseau collectif d’assainissement, à quelle distance passe le branchement d’eau, et l’accès supporte-t-il un camion de chantier. Plus au nord, [le chauffage d’une maison à Marboz](/construction-maison-marboz) pose la même question sous un autre angle : selon la rue, le gaz de ville n’est pas toujours là.',
        ],
      },
      {
        titre: 'Assainissement non collectif et permis de construire',
        paragraphes: [
          'Hors des secteurs raccordés, la maison traite ses eaux usées sur place. La filière se dimensionne sur une étude de sol à la parcelle, et son projet passe devant le service public d’assainissement non collectif avant les travaux. Il se prépare avant le dépôt du permis de construire, parce que l’avis du SPANC peut être demandé avec le dossier.',
          'Cela demande de la place, un sol qui accepte l’infiltration, et une ligne de budget dès le premier chiffrage. L’emplacement du dispositif se décide avec l’implantation de la maison. L’autre moitié du sujet tient en un mot, [« viabilisé » à Attignat](/construction-maison-attignat), et dans ce que le raccordement coûte en plus.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Viriat est dans notre zone d’intervention autour de Bourg-en-Bresse. Le sol argileux de la Bresse et les études de sol G1 et G2 qu’il impose valent ici comme en ville ; chez la voisine, [les eaux de pluie de Saint-Denis-lès-Bourg](/construction-maison-saint-denis-les-bourg) en sont une autre conséquence.',
    },
    faqTitre: 'Questions qu’on nous pose à Viriat',
    faq: [
      {
        q: 'Comment savoir si ma parcelle est raccordée au tout-à-l’égout ?',
        r: 'La mairie le dit, plan de zonage d’assainissement en main. C’est une question à poser avant la promesse de vente : la réponse pèse plusieurs milliers d’euros.',
      },
      {
        q: 'Qu’est-ce que le SPANC ?',
        r: 'Le service public d’assainissement non collectif. Il examine le projet de filière avant les travaux et contrôle l’installation réalisée. Sans son avis, rien ne se pose.',
      },
      {
        q: 'Peut-on construire une maison neuve dans un hameau ?',
        r: 'Cela dépend du zonage. Les hameaux n’autorisent souvent que le comblement des espaces déjà bâtis, et une zone agricole n’accueille pas de maison neuve. Le plan de zonage tranche ; vous pouvez aussi voir [les terrains à bâtir que nous suivons](/terrains).',
      },
      {
        q: 'Le terrassement et l’assainissement sont-ils dans votre prix ?',
        r: 'Ce qui est compris et ce qui reste à votre charge figure dans la notice descriptive annexée au contrat. Nous en parlons avant la signature, poste par poste.',
      },
    ],
    ctaTexte:
      'Le simulateur chiffre la maison, pas le terrain. Donnez-nous la référence cadastrale : l’assainissement et les raccordements se regardent avant d’annoncer un budget.',
    invitation: 'Pour voir une maison en cours de chantier au nord de Bourg, appelez-nous au',
  },

  /* ── Péronnas ──────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-peronnas',
    commune: 'Péronnas',
    surtitre: 'Péronnas · Ain (01)',
    h1: ['Construire une maison à', 'Péronnas', 'Bourg-en-Bresse'],
    intro: [
      'Péronnas touche Bourg-en-Bresse au sud, sur la route de Meximieux : on passe d’une commune à l’autre sans voir la limite.',
      'Le tissu y est déjà construit, et cela change tout pour qui cherche à bâtir : les terrains qui se libèrent sont presque toujours des divisions de parcelles déjà habitées.',
    ],
    blocs: [
      {
        titre: 'Un terrain à bâtir qui sort d’un jardin',
        paragraphes: [
          'Le fond du jardin d’une maison des années soixante-dix, une dent creuse entre deux pavillons : voilà ce qui se vend ici. La surface annoncée n’est pas la surface constructible — il faut d’abord retirer les reculs imposés par le PLU.',
          'L’accès se fait souvent par une bande étroite ou une servitude de passage chez le voisin. Le droit de passage doit figurer dans l’acte, et sa largeur suffire aux engins puis aux secours. Un terrain enclavé sans servitude écrite n’est pas un terrain à bâtir. À l’ouest de la ville, [l’eau de pluie à Saint-Denis-lès-Bourg](/construction-maison-saint-denis-les-bourg) est un autre point à vérifier avant d’acheter.',
        ],
      },
      {
        titre: 'Maison à étage ou plain-pied entre deux voisins',
        paragraphes: [
          'Sur une parcelle entourée, le plan part des reculs et des vues. Le code civil fixe les distances d’ouverture vers le voisin : 1,90 m en vue droite, 0,60 m en vue oblique, mesurés depuis la limite séparative. Le PLU ajoute ses propres reculs et sa hauteur maximale.',
          'Sur une parcelle étroite, une maison à étage préserve le jardin là où un plain-pied occuperait presque toute l’emprise au sol ; [L’emprise au sol à Montluel](/construction-maison-montluel) pose cette question avec encore plus d’acuité. Bon côté : les réseaux sont au pied de la parcelle. Moins bon : l’implantation est contrainte au mètre près, donc le plan se dessine après le relevé.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Péronnas est dans notre zone d’intervention autour de Bourg-en-Bresse. L’étude de sol en terre bressane et le style local y valent autant qu’en ville : la page de Bourg les détaille.',
    },
    faqTitre: 'Questions qu’on nous pose à Péronnas',
    faq: [
      {
        q: 'Peut-on construire sur un terrain issu d’une division ?',
        r: 'Oui, c’est le cas courant à Péronnas. Ce qui compte : la surface constructible après reculs, l’accès, et la position des réseaux. Nous vérifions les trois avant de dessiner.',
      },
      {
        q: 'Quelle largeur faut-il pour l’accès ?',
        r: 'Le PLU fixe une largeur minimale dans son article sur les accès. Il faut aussi que les engins et les secours passent. La servitude, elle, se lit dans l’acte notarié.',
      },
      {
        q: 'À quelle distance des limites peut-on bâtir ?',
        r: 'Le PLU le dit, zone par zone : soit l’implantation en limite est autorisée, soit un recul est imposé. C’est l’article de la zone concernée qu’il faut lire.',
      },
      {
        q: 'Mes fenêtres peuvent-elles donner sur le voisin ?',
        r: 'Dans les limites du code civil : 1,90 m depuis la limite en vue droite, 0,60 m en vue oblique. Cela se règle au plan, en orientant les pièces de vie.',
      },
    ],
    ctaTexte:
      'Le simulateur part de la surface et des équipements. L’étape utile ici est la faisabilité : envoyez-nous l’annonce, nous regardons ce qui entre sur la parcelle.',
    invitation: 'Pour voir ce que donne une maison sur un terrain de division, appelez-nous au',
  },

  /* ── Saint-Denis-lès-Bourg ─────────────────────────────────────────────── */
  {
    slug: 'construction-maison-saint-denis-les-bourg',
    commune: 'Saint-Denis-lès-Bourg',
    surtitre: 'Saint-Denis-lès-Bourg · Ain (01)',
    h1: ['Construire une maison à', 'Saint-Denis-lès-Bourg'],
    intro: [
      'Saint-Denis-lès-Bourg prolonge Bourg-en-Bresse vers l’ouest, en pleine Bresse. Le relief y est quasi nul et les terrains se libèrent en lotissement comme en division.',
      'Un terrain plat simplifie le terrassement, l’accès et l’implantation. Il complique une seule chose, que personne ne regarde avant d’acheter : l’eau de pluie.',
    ],
    blocs: [
      {
        titre: 'La pluie doit rester chez vous',
        paragraphes: [
          'Les règlements d’urbanisme demandent de plus en plus de garder les eaux pluviales sur la parcelle plutôt que de les renvoyer au réseau. Toiture, terrasse et allée produisent chacune leur volume, à infiltrer ou à retenir sur place.',
          'En terre bressane, l’infiltration est lente : l’argile retient l’eau au lieu de la boire. Un puits perdu posé au hasard n’y sert à rien. Le dispositif se dimensionne sur une perméabilité mesurée à la parcelle, lors de l’étude de sol G2. En pleine plaine de l’Ain, [les galets de Lagnieu](/construction-maison-lagnieu) boivent la pluie bien plus vite.',
        ],
      },
      {
        titre: 'Vide sanitaire et niveau fini : ce que cela change au plan',
        paragraphes: [
          'Noue, massif drainant ou cuve enterrée avec trop-plein : chaque solution occupe du terrain et se place avec la maison, pas à la fin. Sur une parcelle plate, le sens d’écoulement ne saute pas aux yeux ; il se relève au niveau optique.',
          'Le niveau fini de la maison se décide dans le même mouvement : posée trop bas par rapport à la route ou aux voisins, elle reçoit leur ruissellement. Un vide sanitaire un peu plus haut règle souvent la question. Cela se joue au centimètre, sur le plan, comme sur [les terrains presque plats de Montrevel-en-Bresse](/construction-maison-montrevel-en-bresse).',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Saint-Denis-lès-Bourg est dans notre zone d’intervention autour de Bourg-en-Bresse. L’argile qui freine l’infiltration est celle qui impose l’étude géotechnique : [Les divisions de parcelles à Péronnas](/construction-maison-peronnas), au sud de la ville, relèvent d’un autre sujet.',
    },
    faqTitre: 'Questions qu’on nous pose à Saint-Denis-lès-Bourg',
    faq: [
      {
        q: 'Mon terrain est plat, pourquoi parler d’eau ?',
        r: 'Parce qu’un terrain plat n’évacue rien tout seul. L’eau de toiture et de terrasse doit aller quelque part, et le règlement demande en général qu’elle reste chez vous.',
      },
      {
        q: 'Qu’est-ce qu’un essai de perméabilité ?',
        r: 'Une mesure faite pendant l’étude de sol : on verse de l’eau dans une fouille et on observe à quelle vitesse elle descend. Le résultat donne le volume du dispositif.',
      },
      {
        q: 'Peut-on se brancher sur le réseau d’eaux pluviales ?',
        r: 'Parfois, et souvent pour le trop-plein seulement, avec un débit limité. Cela se demande en mairie et se lit dans le règlement de la zone. Ce n’est jamais acquis.',
      },
      {
        q: 'Une cuve de récupération suffit-elle ?',
        r: 'Non, ce sont deux fonctions. Une cuve d’arrosage reste pleine ; un ouvrage de rétention doit se vider entre deux pluies. On peut avoir les deux, pas l’une pour l’autre.',
      },
    ],
    ctaTexte:
      'Le simulateur chiffre la maison. Ici, le poste à ne pas oublier est la gestion des eaux pluviales : nous le chiffrons une fois la perméabilité connue.',
    invitation: 'Pour visiter un chantier à l’ouest de Bourg, appelez-nous au',
  },

  /* ── Attignat ──────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-attignat',
    commune: 'Attignat',
    surtitre: 'Attignat · Ain (01)',
    h1: ['Construire une maison à', 'Attignat', 'Bourg-en-Bresse'],
    intro: [
      'Attignat est un village bressan au nord-ouest de Bourg-en-Bresse, à une douzaine de kilomètres, et il gagne des habitants. C’est une bonne nouvelle pour qui veut y construire.',
      'Dans une commune qui s’agrandit, les parcelles à bâtir ne se trouvent pas n’importe où : le PLU délimite les secteurs d’extension et fixe par avance la façon dont ils s’ouvriront.',
    ],
    blocs: [
      {
        titre: 'Un village qui s’agrandit par secteurs',
        paragraphes: [
          'Ces secteurs sont encadrés par une orientation d’aménagement et de programmation, l’OAP du PLU. C’est un schéma opposable au permis de construire : il fixe les accès, les cheminements, parfois une densité minimale de logements à l’hectare et l’ordre dans lequel les zones s’ouvrent.',
          'Trois conséquences possibles : un lot plus petit qu’espéré, un accès mutualisé avec le voisin, et un terrain classé en zone à urbaniser pas encore constructible. La mairie répond avant la promesse de vente.',
          'Nous suivons en ce moment [deux lots à bâtir à Attignat](/terrains), de 891 et 910 m², issus d’une division en trois lots sur limites bornées : viabilisation, étude de sol, prix, plan et photos sont détaillés sur chaque fiche.',
        ],
      },
      {
        titre: 'Viabilisé ne veut pas dire raccordé',
        paragraphes: [
          'Un lot vendu viabilisé a les réseaux amenés en limite de propriété. Le branchement jusqu’à la maison, les compteurs et les frais de mise en service restent à votre charge, que la maison soit livrée clé en main ou hors d’eau hors d’air.',
          'S’y ajoute la taxe d’aménagement, due pour une construction neuve et calculée sur la surface taxable avec les taux votés localement. Nous listons ces postes au chiffrage : terrain, maison, raccordements, taxes. Ceux qui achètent le terrain avant de choisir la maison trouveront [la marche à suivre pour la promesse de vente à Montrevel-en-Bresse](/construction-maison-montrevel-en-bresse).',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Attignat est dans notre zone d’intervention autour de Bourg-en-Bresse. Quand le réseau n’arrive pas, [l’assainissement non collectif à Viriat](/construction-maison-viriat), commune toute proche, répond à la question voisine.',
    },
    faqTitre: 'Questions qu’on nous pose à Attignat',
    faq: [
      {
        q: 'Qu’est-ce qu’une OAP ?',
        r: 'Une orientation d’aménagement et de programmation : la pièce du PLU qui organise un secteur d’extension. Elle s’impose au permis. On la consulte en mairie avant d’acheter.',
      },
      {
        q: 'Une zone à urbaniser est-elle constructible ?',
        r: 'Pas toujours. Certaines s’ouvrent sous conditions, d’autres attendent la réalisation des réseaux ou une modification du PLU. Seule la mairie dit où en est le secteur.',
      },
      {
        q: 'Un terrain viabilisé est-il prêt à construire ?',
        r: 'Il a les réseaux en limite. Restent les branchements jusqu’à la maison, les compteurs et leur mise en service : un poste de budget à part entière.',
      },
      {
        q: 'Y a-t-il une taxe à payer pour construire ?',
        r: 'Oui, la taxe d’aménagement, calculée sur la surface taxable avec les taux votés localement. Le service urbanisme donne les taux ; l’avis arrive après le permis.',
      },
    ],
    ctaTexte:
      'Le simulateur donne la fourchette de la maison seule. Dites-nous quel lot vous visez : nous ajoutons les raccordements et la taxe d’aménagement.',
    invitation: 'Pour voir une maison en cours dans un lotissement du secteur, appelez-nous au',
  },

  /* ── Ceyzériat ─────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-ceyzeriat',
    commune: 'Ceyzériat',
    surtitre: 'Ceyzériat · Ain (01)',
    h1: ['Construire une maison à', 'Ceyzériat', 'Bourg-en-Bresse'],
    intro: [
      'Ceyzériat s’adosse au Revermont, à l’est de Bourg-en-Bresse. On quitte la Bresse et son argile pour les premiers reliefs : selon la parcelle, la roche peut n’être pas loin sous la terre végétale.',
      'Le sol y est en général plus porteur qu’en Bresse, mais un terrassement dans le rocher coûte plus cher. Tout l’équilibre d’un projet se joue là.',
    ],
    blocs: [
      {
        titre: 'Maison de plain-pied sur plateforme ou sous-sol : le sol décide',
        paragraphes: [
          'Là où la roche affleure, un sous-sol creusé dans le rocher se paie au mètre cube sorti, parfois au brise-roche hydraulique. Sur ce genre de parcelle, une maison posée sur une plateforme revient souvent moins cher qu’un niveau enterré complet, à confirmer lors de l’étude de sol.',
          'C’est cette étude, G1 puis G2 selon le terrain, qui donne la profondeur à laquelle la roche arrive et la façon d’y asseoir les fondations. Nous ne chiffrons pas un terrassement de coteau sans ce document et sans un relevé du terrain. Même démarche pour [les terrains en pente d’Ambérieu-en-Bugey](/construction-maison-amberieu-en-bugey).',
        ],
      },
      {
        titre: 'S’intégrer dans un village de pierre',
        paragraphes: [
          'Les villages du Revermont sont souvent bâtis en pierre calcaire, avec des toitures en tuiles et des débords mesurés. Le PLU y encadre fréquemment l’aspect extérieur : teintes d’enduit, couverture, clôtures. Un permis de construire peut être refusé sur ce seul motif.',
          'Nous lisons cet article avant de dessiner. Une maison contemporaine reste possible si ses matériaux et ses teintes entrent dans ce qui est autorisé : une contrainte de dessin, pas une interdiction de style. Voisine de Ceyzériat, [Montagnat et ses exploitations agricoles](/construction-maison-montagnat) ajoute une autre question.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Ceyzériat est dans notre zone d’intervention autour de Bourg-en-Bresse, à quelques minutes de la préfecture, là où le sol bressan s’arrête.',
    },
    faqTitre: 'Questions qu’on nous pose à Ceyzériat',
    faq: [
      {
        q: 'Peut-on faire un sous-sol à Ceyzériat ?',
        r: 'Techniquement oui, mais tout dépend de la profondeur à laquelle la roche arrive. Si elle est haute, une plateforme ou un vide sanitaire rend en général le même service pour moins cher. L’étude de sol le confirme.',
      },
      {
        q: 'Qu’est-ce qui coûte cher dans un terrain rocheux ?',
        r: 'Sortir la roche et l’évacuer. Le volume se mesure sur le relevé et l’étude de sol ; il ne s’estime pas au mètre carré de maison.',
      },
      {
        q: 'Le PLU impose-t-il la couleur de l’enduit ?',
        r: 'Dans beaucoup de communes du Revermont, l’article sur l’aspect extérieur encadre teintes, couverture et clôtures. Certaines mairies tiennent une palette : il faut la demander au service urbanisme.',
      },
      {
        q: 'Construisez-vous du contemporain ici ?',
        r: 'Oui, dans les limites du règlement. La toiture et les teintes sont le plus souvent encadrées ; le volume et les ouvertures laissent de la marge.',
      },
    ],
    ctaTexte:
      'Le simulateur suppose un terrain plat et un sol ordinaire. Ici, le terrassement peut faire la différence : envoyez-nous la parcelle, nous chiffrons sur le relevé.',
    invitation: 'Pour voir une maison construite sur un terrain de coteau, appelez-nous au',
  },

  /* ── Montagnat ─────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-montagnat',
    commune: 'Montagnat',
    surtitre: 'Montagnat · Ain (01)',
    h1: ['Construire une maison à', 'Montagnat', 'Bourg-en-Bresse'],
    intro: [
      'Montagnat est à environ six kilomètres de Bourg-en-Bresse à vol d’oiseau, au sud-est, et fait partie de son agglomération. La ville est toute proche ; pourtant la commune a gardé ses champs jusqu’au bord des lotissements.',
      'Pour construire une maison neuve ici, c’est ce voisinage qu’il faut regarder en premier : elle n’obéit pas aux mêmes règles à côté d’une exploitation qu’entre deux pavillons.',
    ],
    blocs: [
      {
        titre: 'Une ferme en face, une règle à connaître',
        paragraphes: [
          'Le code rural impose une distance entre un bâtiment d’élevage et une habitation, et cette distance joue dans les deux sens : l’exploitant ne peut pas s’installer trop près de votre maison, et votre maison ne peut pas se construire trop près de son bâtiment. On parle de réciprocité.',
          'La distance dépend de l’élevage et de la réglementation qui le couvre. Elle se vérifie en mairie, avant la promesse de vente et avant le permis de construire : elle peut rendre une partie du terrain inconstructible. Même vigilance pour [une maison de campagne à Marboz](/construction-maison-marboz), grande commune au nord de Bourg.',
        ],
      },
      {
        titre: 'Construire au bord d’un champ',
        paragraphes: [
          'Un terrain voisin d’une culture reçoit le passage des engins, la poussière de la moisson, parfois des traitements, et il est ouvert au vent. Cela se règle au plan : pièces de vie et terrasse du côté abrité, haie plantée dès le chantier, clôture sur la limite.',
          'Au pied du Revermont, la commune voisine pose une autre question avant le plan : [le relief et l’aspect extérieur imposé à Ceyzériat](/construction-maison-ceyzeriat).',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Montagnat est dans notre zone d’intervention autour de Bourg-en-Bresse. Aux portes du Revermont, le sol change d’une parcelle à l’autre : l’étude géotechnique tranche, comme sur la page de Bourg.',
    },
    faqTitre: 'Questions qu’on nous pose à Montagnat',
    faq: [
      {
        q: 'Qu’est-ce que la règle de réciprocité agricole ?',
        r: 'Une règle du code rural qui fixe une distance minimale entre un bâtiment d’élevage et une habitation, dans les deux sens. Elle protège l’exploitant comme le voisin. La mairie dit si une exploitation proche concerne votre parcelle.',
      },
      {
        q: 'Comment savoir s’il y a un élevage près de mon terrain ?',
        r: 'Le plan cadastral montre les bâtiments, pas leur usage. Il faut demander en mairie si une exploitation est classée et à quelle distance elle doit rester.',
      },
      {
        q: 'Peut-on planter une haie en limite ?',
        r: 'Oui, avec des distances à respecter : le code civil fixe 0,50 m de la limite pour une plantation de moins de deux mètres, et 2 m au-delà. Le PLU ou le règlement de lotissement peut ajouter ses règles sur les essences et les hauteurs.',
      },
      {
        q: 'Montagnat est-elle dans votre zone d’intervention ?',
        r: 'Oui : la commune est dans le rayon de 30 km autour de Bourg-en-Bresse, dont elle fait partie de l’agglomération. Nous y construisons comme en ville.',
      },
    ],
    ctaTexte:
      'Le simulateur chiffre la maison seule. À Montagnat, regardez d’abord ce qu’il y a autour du terrain : envoyez-nous l’annonce, nous cherchons les exploitations proches avant d’annoncer un budget.',
    invitation: 'Pour voir des chantiers proches de Montagnat, appelez-nous au',
  },

  /* ── Marboz ────────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-marboz',
    commune: 'Marboz',
    surtitre: 'Marboz · Ain (01)',
    h1: ['Construire une maison à', 'Marboz', 'Bourg-en-Bresse'],
    intro: [
      'Marboz est une grande commune du nord de l’Ain, à une vingtaine de kilomètres de Bourg-en-Bresse. L’autoroute A39 longe son côté est, et la route départementale 996 descend vers Viriat.',
      'À cette distance du centre, on construit à la campagne, avec ce que cela suppose : des services à quelques kilomètres et, selon la rue, pas toujours de gaz de ville. Le chauffage devient alors un premier choix pour la maison.',
    ],
    blocs: [
      {
        titre: 'Maison RE2020 : se chauffer sans réseau de gaz',
        paragraphes: [
          'Là où le gaz de ville n’arrive pas, la maison neuve se chauffe à l’électricité, au bois ou avec une pompe à chaleur. La RE2020, qui plafonne l’impact carbone de l’énergie consommée, laisse de toute façon peu de place à la chaudière à gaz dans une maison individuelle ; [l’article sur la RE2020 en 2026](/blog/re2020-2026) détaille ses seuils.',
          'Le choix se fait sur le calcul des besoins de votre maison, pas sur une habitude : pompe à chaleur air-eau, poêle à granulés en appoint, ventilation double flux. L’autre grande question des terrains de campagne, [les eaux usées à Viriat](/construction-maison-viriat), commune voisine, se traite autrement.',
        ],
      },
      {
        titre: 'Maison en briques et orientation : moins de chauffage à produire',
        paragraphes: [
          'Le meilleur chauffage est celui dont on a moins besoin. Sur une parcelle de campagne, rien ne masque le soleil : les grandes ouvertures se placent au sud, les pièces de service au nord, et l’on garde l’été en tête. Une maison en briques apporte de l’inertie, utile au confort d’été.',
          'La RE2020 mesure ce confort d’été : une grande baie plein sud sans protection y est pénalisée. Débord de toiture, brise-soleil, volets — le plan les prévoit dès le dessin. Pour une parcelle voisine d’une exploitation agricole, voyez [la règle de réciprocité des distances à Montagnat](/construction-maison-montagnat).',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Marboz est dans notre zone d’intervention autour de Bourg-en-Bresse, qui la couvre dans son rayon de 30 km. Le sol et les études de sol G1 et G2 se lisent sur la page de Bourg.',
    },
    faqTitre: 'Questions qu’on nous pose à Marboz',
    faq: [
      {
        q: 'Comment savoir si le gaz de ville dessert ma rue ?',
        r: 'La mairie ou le gestionnaire du réseau le disent. Si la rue n’est pas desservie, la maison se pense autrement dès le départ : pompe à chaleur, poêle à granulés, électricité. La question se pose avant l’achat du terrain.',
      },
      {
        q: 'La RE2020 interdit-elle le gaz ?',
        r: 'Pas en toutes lettres, mais elle plafonne l’impact carbone du chauffage et de l’eau chaude, ce qui écarte en pratique la chaudière à gaz dans une maison individuelle neuve.',
      },
      {
        q: 'Une pompe à chaleur suffit-elle en campagne ?',
        r: 'En général oui, si la maison est bien isolée et bien orientée : c’est même ce qui permet de la dimensionner petit. On la choisit après le calcul des besoins, pas avant.',
      },
      {
        q: 'Pourquoi parler d’orientation à propos de chauffage ?',
        r: 'Parce que chaque degré gagné par le soleil d’hiver est un degré que le chauffage n’a pas à produire. Sur une parcelle dégagée, l’orientation est le levier le moins cher.',
      },
    ],
    ctaTexte:
      'Le simulateur donne la fourchette de la maison avec ses équipements courants. À Marboz, dites-nous si le gaz dessert la rue : le mode de chauffage change le chiffrage.',
    invitation: 'Pour visiter un chantier en cours entre Bourg et le nord de l’Ain, appelez-nous au',
  },

  /* ── Montrevel-en-Bresse ───────────────────────────────────────────────── */
  {
    slug: 'construction-maison-montrevel-en-bresse',
    commune: 'Montrevel-en-Bresse',
    surtitre: 'Montrevel-en-Bresse · Ain (01)',
    h1: ['Construire une maison à', 'Montrevel-en-Bresse'],
    intro: [
      'Montrevel-en-Bresse est un bourg de la Bresse, à une quinzaine de kilomètres au nord de Bourg-en-Bresse. Le terrain y est presque plat, et les parcelles à bâtir y changent encore de mains.',
      'Acheter un terrain, c’est la première décision d’un projet, et celle qui se rattrape le moins bien. Avant le plan et avant le prix de la maison, le plus utile est de savoir comment acheter.',
    ],
    blocs: [
      {
        titre: 'Le certificat d’urbanisme, avant de signer',
        paragraphes: [
          'Un certificat d’urbanisme opérationnel répond à une question précise : ce terrain peut-il, en principe, accueillir ce projet ? La mairie répond par écrit, règles du PLU et participations à l’appui. En général, la réponse reste valable dix-huit mois et fige les règles pendant ce délai ; la mairie le confirme dans sa réponse.',
          'Il se demande avant la promesse de vente, et il ne coûte en principe qu’un dossier. À Attignat, [le PLU et son orientation d’aménagement](/construction-maison-attignat) montrent pourquoi ce document compte quand un village s’agrandit.',
        ],
      },
      {
        titre: 'Promesse de vente, conditions suspensives et PTZ',
        paragraphes: [
          'La promesse de vente comporte en général des conditions suspensives : obtention du permis de construire, obtention du prêt, parfois résultat de l’étude de sol. Si l’une d’elles échoue, la vente est en principe annulée et le dépôt de garantie restitué ; le notaire confirme les termes de votre acte.',
          'Le délai doit laisser le temps d’instruire un permis, ce qui se compte en mois. Le prêt à taux zéro (PTZ) peut, sous conditions, entrer dans le plan de financement d’une maison neuve : votre banque dit si vous y avez droit. Un terrain à bâtir qui ne sort pas d’un lotissement est en principe borné, ce qui évite de découvrir une limite contestée. Sur un terrain plat comme celui-ci, voyez [la gestion des eaux de pluie à Saint-Denis-lès-Bourg](/construction-maison-saint-denis-les-bourg).',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Montrevel-en-Bresse est dans notre zone d’intervention autour de Bourg-en-Bresse. La page de Bourg décrit le sol argileux de la Bresse et l’étude de sol G1 que l’achat d’un terrain peut déclencher.',
    },
    faqTitre: 'Questions qu’on nous pose à Montrevel-en-Bresse',
    faq: [
      {
        q: 'Un certificat d’urbanisme est-il payant ?',
        r: 'En principe non : la demande se dépose en mairie et la réponse est écrite. Le certificat opérationnel dit si votre projet est réalisable ; celui d’information donne seulement les règles applicables.',
      },
      {
        q: 'Combien de temps est-il valable ?',
        r: 'En général dix-huit mois, avec une prolongation possible. Pendant ce délai, les règles qu’il mentionne sont en principe figées pour votre projet ; à confirmer en mairie.',
      },
      {
        q: 'Quelles conditions suspensives prévoir dans la promesse de vente ?',
        r: 'Au minimum le permis de construire et le prêt, avec des délais réalistes. L’étude de sol peut s’y ajouter en zone d’argile. Une promesse sans condition vous engage même si le permis est refusé : le notaire est là pour le vérifier.',
      },
      {
        q: 'Le bornage est-il obligatoire ?',
        r: 'En principe oui pour un terrain à bâtir qui n’est pas issu d’un lotissement : le vendeur fournit un plan de bornage. Le notaire le confirme pour votre terrain.',
      },
    ],
    ctaTexte:
      'Le simulateur chiffre la maison, pas le terrain. À Montrevel-en-Bresse, parlez-nous du terrain avant de signer la promesse : le calendrier du permis de construire et celui de la vente doivent s’accorder.',
    invitation: 'Pour voir des chantiers proches de chez vous, dans la Bresse, appelez-nous au',
  },

  /* ══ COMMUNES DE LA ZONE DE MEXIMIEUX ═══════════════════════════════════ */

  /* ── Montluel ──────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-montluel',
    commune: 'Montluel',
    surtitre: 'Montluel · Ain (01)',
    h1: ['Construire une maison à', 'Montluel'],
    intro: [
      'Montluel est sur la Côtière, à quelques kilomètres du bureau de Meximieux et aux portes de l’est lyonnais : la ville ancienne en bas, le plateau de la Dombes au-dessus.',
      'Cette position se paie sur le foncier : les terrains y sont rares et plus petits que dans la plaine de l’Ain, et cela décide de la forme de la maison.',
    ],
    blocs: [
      {
        titre: 'Petite parcelle : maison à étage ou plain-pied ?',
        paragraphes: [
          'Sur une parcelle réduite, chaque mètre est pris avant qu’on ait dessiné : le recul imposé par le PLU, l’emprise au sol maximale, la place de la voiture, celle du dispositif d’eaux pluviales.',
          'La réponse est en général la même : construire sur deux niveaux plutôt qu’en plain-pied. Une maison à étage occupe sensiblement moins de sol pour la même surface habitable, selon le terrain, et laisse un jardin utilisable. Côté Bourg, [un terrain issu d’une division à Péronnas](/construction-maison-peronnas) pose le même arbitrage.',
        ],
      },
      {
        titre: 'L’emprise au sol, le chiffre à connaître avant d’acheter',
        paragraphes: [
          'L’emprise au sol est la surface que la construction couvre au sol, garage compris. Le PLU la plafonne, souvent en pourcentage : sur 500 m² avec une emprise de 30 %, la maison ne couvre pas plus de 150 m².',
          'C’est le premier chiffre que nous cherchons quand vous nous envoyez une annonce : il décide de la forme du projet, et dit parfois tout de suite que le programme ne rentre pas. Le voisin immédiat ajoute une autre donnée à lire avant d’acheter : [le bruit de l’autoroute à Dagneux](/construction-maison-dagneux).',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-meximieux',
      commune: 'Meximieux',
      texte:
        'Montluel est dans notre zone d’intervention autour de Meximieux, où se trouve le bureau — la commune voisine de Pérouges et de la plaine de l’Ain.',
    },
    faqTitre: 'Questions qu’on nous pose à Montluel',
    faq: [
      {
        q: 'Qu’est-ce que l’emprise au sol ?',
        r: 'La projection de la construction sur le terrain, garage et parties couvertes comprises. Le PLU en fixe le maximum, souvent en pourcentage de la parcelle.',
      },
      {
        q: 'Un plain-pied est-il possible sur un petit terrain ?',
        r: 'Possible selon le terrain, mais il consomme toute l’emprise disponible et le jardin avec. Sur les parcelles de la Côtière, une maison à étage donne en général plus de surface habitable et plus de terrain.',
      },
      {
        q: 'Pouvez-vous dire si mon projet rentre sur la parcelle ?',
        r: 'Oui, c’est l’étude de faisabilité, et elle est gratuite. Nous partons du plan cadastral et du PLU applicable, et nous répondons avant que vous n’engagiez quoi que ce soit.',
      },
      {
        q: 'Montluel est-elle dans votre zone d’intervention ?',
        r: 'Oui : la commune est dans le rayon de 30 km autour de Meximieux, à quelques kilomètres du bureau par l’A42. Toute la Côtière en relève.',
      },
    ],
    ctaTexte:
      'Le simulateur part de la surface habitable. Ici, c’est le terrain qui commande : envoyez-nous l’annonce, nous regardons l’emprise avant de chiffrer.',
    invitation: 'Pour voir un chantier en cours sur la Côtière, appelez-nous au',
  },

  /* ── Lagnieu ───────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-lagnieu',
    commune: 'Lagnieu',
    surtitre: 'Lagnieu · Ain (01)',
    h1: ['Construire une maison à', 'Lagnieu'],
    intro: [
      'Lagnieu est à un quart d’heure de notre bureau, en pleine plaine de l’Ain. Les terrains y sont plats et le sous-sol est fait d’alluvions : des galets et des graviers sous une couche de terre.',
      'C’est souvent un bon sol à bâtir : il porte bien et il boit la pluie. Deux questions restent ouvertes, et l’étude de sol est là pour y répondre.',
    ],
    blocs: [
      {
        titre: 'Études de sol G1 et G2 : graviers et niveau de l’eau',
        paragraphes: [
          'La première question est la profondeur de l’eau. Entre Ain et Rhône, la nappe peut se trouver haut, et c’est elle qui dit si un sous-sol est raisonnable ou s’il vaut mieux un vide sanitaire. Sur la rivière, [le risque d’inondation à Pont-d’Ain](/construction-maison-pont-d-ain) pose la même question sous un autre angle.',
          'La seconde est l’hétérogénéité du terrain : des poches plus fines peuvent voisiner avec des bancs de galets sur une même parcelle. Les fondations se dimensionnent donc sur l’étude géotechnique, G1 puis G2, et pas sur l’habitude du secteur.',
        ],
      },
      {
        titre: 'Maison de plain-pied sur terrain plat',
        paragraphes: [
          'Sur une parcelle de plaine, il n’y a en général ni mur de soutènement, ni plateforme à créer, ni accès acrobatique pour la toupie à béton : le plain-pied y est souvent le plus simple. Le budget comporte alors moins d’inconnues qu’[à Ambérieu-en-Bugey, au pied du Bugey](/construction-maison-amberieu-en-bugey).',
          'Restent deux réglages : le niveau fini de la maison par rapport à la route et aux voisins, et l’infiltration des eaux de pluie — facile dans les graviers, mais à dimensionner sur une perméabilité mesurée.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-meximieux',
      commune: 'Meximieux',
      texte:
        'Lagnieu est dans notre zone d’intervention autour de Meximieux, à un quart d’heure par la route, et touche aussi le secteur d’Ambérieu-en-Bugey.',
    },
    faqTitre: 'Questions qu’on nous pose à Lagnieu',
    faq: [
      {
        q: 'Peut-on construire un sous-sol à Lagnieu ?',
        r: 'Cela dépend du niveau de la nappe, que l’étude de sol mesure. Quand l’eau est haute, un vide sanitaire ou un garage accolé rend le même service sans les contraintes d’étanchéité.',
      },
      {
        q: 'Le sol de la plaine est-il un bon sol ?',
        r: 'En général oui, les graviers portent bien. Cela ne dispense pas de l’étude géotechnique, qui donne la profondeur des fondations et la nature exacte des couches sous votre terrain.',
      },
      {
        q: 'Les eaux de pluie peuvent-elles s’infiltrer sur place ?',
        r: 'C’est souvent le cas dans les graviers, et cela simplifie le dispositif. Il se dimensionne malgré tout sur une perméabilité mesurée, et le PLU fixe ce qui est admis.',
      },
      {
        q: 'À quelle distance êtes-vous de Lagnieu ?',
        r: 'Un quart d’heure de route. La commune entre dans le rayon de 30 km autour de Meximieux, comme tout le sud de la plaine de l’Ain.',
      },
    ],
    ctaTexte:
      'Le simulateur suppose un terrain plat, ce qui est souvent le cas ici : il donne un ordre de grandeur de la maison, à confirmer après l’étude de sol et le relevé de la parcelle.',
    invitation: 'Pour voir un chantier en cours dans la plaine de l’Ain, appelez-nous au',
  },

  /* ── Pont-d'Ain ────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-pont-d-ain',
    commune: 'Pont-d’Ain',
    surtitre: 'Pont-d’Ain · Ain (01)',
    h1: ['Construire une maison à', 'Pont-d’Ain'],
    intro: [
      'Pont-d’Ain doit son nom à la rivière : le bourg s’est construit là où l’on franchit l’Ain, entre Bourg-en-Bresse au nord et Ambérieu-en-Bugey au sud. Son château du XIVe siècle, sur la rive droite, est classé monument historique.',
      'Une commune au bord d’une rivière demande deux lectures avant toute construction : celle du risque d’inondation, et celle des abords du château. La première peut décider de la hauteur de la maison, la seconde de son aspect.',
    ],
    blocs: [
      {
        titre: 'L’Ain, et ce que dit le plan de prévention',
        paragraphes: [
          'Dans les communes riveraines, un plan de prévention des risques d’inondation peut être annexé au PLU. Il découpe le territoire en zones — certaines inconstructibles, d’autres constructibles sous conditions — et fixe une cote de référence : le niveau d’eau que la maison doit pouvoir supporter.',
          'Selon le terrain, le plancher se pose en général au-dessus de la cote, le sous-sol est souvent exclu, et certains équipements montent à l’étage. À confirmer dans le règlement du plan, parcelle par parcelle, avant le permis de construire. Plus en plaine, [le niveau de la nappe à Lagnieu](/construction-maison-lagnieu) pose plutôt la question de l’eau du sol.',
        ],
      },
      {
        titre: 'Vide sanitaire haut : un choix de plan',
        paragraphes: [
          'Une maison surélevée n’est pas une maison bancale : un vide sanitaire haut ou un terre-plein remblayé règle en général l’essentiel, selon le terrain. Le coût du remblai ou de la hauteur se chiffre sur le relevé du terrain.',
        ],
      },
      {
        titre: 'Aux abords du château',
        paragraphes: [
          'Un monument historique crée autour de lui un périmètre de protection. Si votre parcelle s’y trouve, l’avis de l’Architecte des Bâtiments de France s’ajoute à l’instruction. La mairie dit si c’est le cas. Autre donnée à lire avant d’acheter, plus au sud : [le bruit de l’A42 à Dagneux](/construction-maison-dagneux).',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-meximieux',
      commune: 'Meximieux',
      texte:
        'Pont-d’Ain est dans notre zone d’intervention autour de Meximieux, qui la couvre dans son rayon de 30 km. La page de Meximieux explique comment se passe un premier rendez-vous au bureau ; pour le relief au sud de Pont-d’Ain, voyez [Ambérieu-en-Bugey et le pied du Bugey](/construction-maison-amberieu-en-bugey).',
    },
    faqTitre: 'Questions qu’on nous pose à Pont-d’Ain',
    faq: [
      {
        q: 'Comment savoir si mon terrain est inondable ?',
        r: 'Le plan de zonage du PLU et le plan de prévention des risques, consultables en mairie, le disent. Mieux vaut le demander avant la promesse de vente que découvrir la zone au dépôt du permis.',
      },
      {
        q: 'Qu’est-ce que la cote de référence ?',
        r: 'Le niveau que l’eau peut atteindre lors d’une crue de référence, fixé par le plan de prévention. Le plancher habitable doit en général se situer au-dessus.',
      },
      {
        q: 'Peut-on faire un sous-sol en zone inondable ?',
        r: 'En général non : les règlements l’excluent dans la plupart des zones à risque. Un vide sanitaire surélevé règle la hauteur de plancher.',
      },
      {
        q: 'Le château change-t-il quelque chose à mon permis de construire ?',
        r: 'Seulement si votre parcelle est dans son périmètre de protection : l’avis de l’Architecte des Bâtiments de France s’ajoute alors à l’instruction. Il porte surtout sur l’aspect extérieur.',
      },
    ],
    ctaTexte:
      'Le simulateur suppose un terrain hors d’eau. À Pont-d’Ain, selon le terrain, la cote de référence peut ajouter une hauteur de plancher et un remblai : ils se chiffrent sur votre parcelle.',
    invitation: 'Pour voir des chantiers proches de Pont-d’Ain, appelez-nous au',
  },

  /* ── Dagneux ───────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-dagneux',
    commune: 'Dagneux',
    surtitre: 'Dagneux · Ain (01)',
    h1: ['Construire une maison à', 'Dagneux'],
    intro: [
      'Dagneux est une petite commune de la Côtière, à une vingtaine de kilomètres au nord-est de Lyon. L’autoroute A42, qui relie Lyon à Genève, la traverse.',
      'Cette position a son revers : le bruit. Avant de choisir un plan, il faut savoir de quel côté se trouve la route et ce que le règlement impose à la façade qui lui fait face.',
    ],
    blocs: [
      {
        titre: 'Le bruit se lit sur une carte',
        paragraphes: [
          'Les routes, voies ferrées et autoroutes sont classées par catégorie, de 1 (la plus bruyante) à 5. Chaque classement trace de part et d’autre de la voie un secteur affecté par le bruit : dix mètres pour la catégorie 5, jusqu’à trois cents pour la catégorie 1.',
          'Dans ce secteur, les façades d’une maison neuve doivent respecter un isolement acoustique minimal. Le classement est annexé au PLU et consultable en mairie : il se lit avant l’achat, comme le zonage. À Pont-d’Ain, [le plan de prévention des inondations](/construction-maison-pont-d-ain) se lit de la même façon.',
        ],
      },
      {
        titre: 'Maison à étage : tourner le dos à la route',
        paragraphes: [
          'Le bruit se traite d’abord au plan : pièces de vie et chambres du côté calme, façade exposée presque pleine, pièces de service — garage, cellier, escalier — du côté de la route, où elles servent d’écran. Une maison à étage permet de monter les chambres hors de portée du bruit.',
          'Viennent ensuite les vitrages renforcés et la ventilation, qui doit renouveler l’air fenêtres fermées, ce que la RE2020 demande de toute façon. Une maison isolée du bruit est une maison qu’on n’ouvre plus pour l’aérer : la ventilation fait partie du dossier. La voisine traite, elle, [la taille des parcelles à Montluel](/construction-maison-montluel).',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-meximieux',
      commune: 'Meximieux',
      texte:
        'Dagneux est dans notre zone d’intervention autour de Meximieux, où se trouve le bureau.',
    },
    faqTitre: 'Questions qu’on nous pose à Dagneux',
    faq: [
      {
        q: 'Comment savoir si mon terrain est dans un secteur bruyant ?',
        r: 'Le classement sonore des infrastructures est annexé au PLU et se consulte en mairie. Il indique pour chaque voie un secteur de part et d’autre : si la parcelle s’y trouve, l’isolement des façades est imposé.',
      },
      {
        q: 'Qu’impose le classement sonore à ma maison ?',
        r: 'Un isolement acoustique minimal des façades exposées, qui se traduit par le choix des vitrages, des menuiseries et de la ventilation. Il dépend de la catégorie de la voie et de la distance.',
      },
      {
        q: 'Peut-on construire près d’une autoroute ?',
        r: 'Oui, dès lors que le PLU l’autorise et que l’isolement est respecté. La parcelle peut aussi être soumise à un recul par rapport à la voie, qui se lit dans le règlement.',
      },
      {
        q: 'Faut-il renoncer aux grandes baies du côté de la route ?',
        r: 'Pas forcément, mais elles se choisissent avec un vitrage adapté. Le plus simple reste de les placer du côté calme.',
      },
    ],
    ctaTexte:
      'Le simulateur suppose un terrain sans contrainte de bruit. À Dagneux, le plan et les vitrages s’adaptent à la route : cela se chiffre une fois la parcelle située sur le classement sonore.',
    invitation: 'Pour voir des chantiers proches de Dagneux, appelez-nous au',
  },

  /* ══ HUIT COMMUNES DE PLUS ══════════════════════════════════════════════ */
  ...LOCALES_COMMUNES_2,
];

/** Accès par slug, pour les pages. */
export const LOCALE_PAR_SLUG: Readonly<Record<string, PageLocale>> = Object.fromEntries(
  LOCALES.map((l) => [l.slug, l])
);

/** Les trois villes de référence, dans l'ordre d'écriture. */
export const POLES: readonly PageLocale[] = LOCALES.filter((l) => !l.pole);

/** Les communes rattachées à une ville de référence donnée. */
export function communesDuPole(slugPole: string): readonly PageLocale[] {
  return LOCALES.filter((l) => l.pole?.slug === slugPole);
}
