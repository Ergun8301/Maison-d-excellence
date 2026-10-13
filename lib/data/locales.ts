/**
 * Pages locales.
 *
 * Trois pages de pôle — Meximieux, Bourg-en-Bresse, Ambérieu-en-Bugey — et
 * sept pages de commune rattachées à leur pôle. Les pôles sont les trois
 * points autour desquels la zone est dessinée : chacun porte un cercle de
 * 30 km sur la carte de la page zone d'intervention (lib/data/communes.ts).
 * Aucune des trois n'est « au bord » de quoi que ce soit, et aucune page ne
 * doit le laisser croire.
 *
 * Chaque page a son propre sujet, et non le même texte avec le nom de la
 * commune changé :
 *
 *   Meximieux              le bureau est dans la rue ; les abords de Pérouges
 *   Bourg-en-Bresse        le sol argileux de la Bresse, l'étude géotechnique
 *   Ambérieu-en-Bugey      la pente, le sous-sol, les demi-niveaux
 *   Viriat                 des hameaux dispersés, l'assainissement non collectif
 *   Péronnas               le terrain issu d'une division, les vues, l'accès
 *   Saint-Denis-lès-Bourg  les eaux de pluie à garder sur la parcelle
 *   Attignat               le PLU d'un village qui s'agrandit, les raccordements
 *   Ceyzériat              la roche du Revermont, l'aspect extérieur imposé
 *   Montluel               des parcelles petites, l'emprise au sol
 *   Lagnieu               les graviers de la plaine, le niveau de l'eau
 *
 * Une page locale qui n'est qu'un gabarit rempli d'un nom de ville est une
 * page vide, Google la traite comme telle, et elle ne rend service à personne.
 * Les sept pages de commune sont volontairement plus courtes (400 à 500 mots)
 * que les trois pages de pôle : elles n'ont pas de section « communes
 * voisines », et renvoient à leur pôle.
 *
 * Rien ici n'est inventé. Deux règles ont tenu l'écriture :
 *
 *  - Aucun avis, aucune réalisation nommée, aucun chantier attribué à une
 *    commune. L'entreprise n'a pas de relevé de ses livraisons commune par
 *    commune, et une référence inventée est un mensonge qui se vérifie en un
 *    appel. Chaque page invite donc à appeler pour voir un chantier en cours.
 *
 *  - Aucun chiffre nouveau. Les douze mois de chantier, la réponse sous 48 h,
 *    le rayon de 30 km, l'échéancier, les horaires du bureau figurent déjà
 *    ailleurs sur le site. Les obligations citées — étude géotechnique,
 *    périmètre d'un monument protégé, règlement de lotissement, assainissement
 *    non collectif, orientation d'aménagement, taxe d'aménagement — sont des
 *    règles générales, données comme des points à vérifier auprès de la
 *    mairie, jamais comme un relevé du PLU de la commune.
 *
 * À COMPLÉTER PAR LE CLIENT, quand l'information existera :
 *  - des réalisations situées, commune par commune ;
 *  - le nombre de maisons livrées dans chacun des trois secteurs ;
 *  - les éventuelles contraintes de PLU qu'Aykut connaît et qui méritent
 *    d'être écrites noir sur blanc pour chaque commune.
 */

export type QuestionLocale = { readonly q: string; readonly r: string };
export type BlocLocal = { readonly titre: string; readonly paragraphes: readonly string[] };

/** Commune voisine. `slug` quand elle a sa propre page : le nom devient un lien. */
export type Voisine = { readonly nom: string; readonly note: string; readonly slug?: string };

export type Voisines = {
  readonly titre: string;
  readonly intro: string;
  readonly liste: readonly Voisine[];
};

/** Renvoi d'une commune vers sa page de pôle. */
export type Pole = { readonly slug: string; readonly commune: string; readonly texte: string };

export type PageLocale = {
  readonly slug: string;
  readonly commune: string;
  readonly surtitre: string;
  /**
   * Titre en deux morceaux. Le second est le nom de la commune, que le gabarit
   * empêche de se couper : « Bourg-en-Bresse » rompu après un tiret se lit mal
   * et donnait trois lignes de titre sur un téléphone.
   */
  readonly h1: readonly [debut: string, commune: string];
  readonly intro: readonly string[];
  readonly blocs: readonly BlocLocal[];
  /** Les communes alentour. Absent sur les sept pages de commune. */
  readonly voisines?: Voisines;
  /** Le pôle dont la commune dépend. Absent sur les trois pages de pôle. */
  readonly pole?: Pole;
  readonly faqTitre: string;
  readonly faq: readonly QuestionLocale[];
  /** Texte de l'appel à l'estimation. Propre à chaque commune : dix pages qui
   *  se terminent sur la même phrase sont dix pages qui se recopient. */
  readonly ctaTexte: string;
  /** Invitation à appeler pour voir un chantier proche. Le gabarit ajoute le
   *  numéro de téléphone derrière, en lien cliquable. */
  readonly invitation: string;
};

export const LOCALES: readonly PageLocale[] = [
  /* ══ PÔLES ══════════════════════════════════════════════════════════════ */

  /* ── Meximieux ─────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-meximieux',
    commune: 'Meximieux',
    surtitre: 'Meximieux · Ain (01)',
    h1: ['Construire une maison à', 'Meximieux'],
    intro: [
      'Notre bureau est au 6 rue de Genève, à Meximieux. C’est d’ici que partent les plans, les rendez-vous et les visites de chantier : la commune n’est pas un secteur de plus sur une carte, c’est l’adresse de l’entreprise.',
      'Meximieux tient le milieu de la plaine de l’Ain, entre Lyon et Ambérieu, avec sa gare sur la ligne Lyon–Ambérieu et l’accès autoroutier par Pérouges. Les terrains y sont pour l’essentiel plats, livrés viabilisés en lotissement ou en division de parcelle, ce qui simplifie les fondations et l’accès des engins.',
    ],
    blocs: [
      {
        titre: 'Un constructeur dont le bureau est dans la rue',
        paragraphes: [
          'Pour un projet à Meximieux, le premier rendez-vous se fait au bureau ou sur votre terrain, sans déplacement à organiser. C’est le cas le plus simple de toute notre zone : la commune est à quelques minutes, et une visite de chantier se cale dans une matinée.',
          'Le bureau est ouvert du lundi au vendredi de 8h30 à 18h00, et le samedi sur rendez-vous. Vous pouvez passer sans prévenir, mais un appel évite de trouver la porte close un jour de chantier.',
        ],
      },
      {
        titre: 'Les abords de Pérouges demandent de l’attention',
        paragraphes: [
          'La cité médiévale de Pérouges jouxte Meximieux, et le périmètre de protection d’un monument classé peut soumettre un projet à l’avis de l’Architecte des Bâtiments de France. Cela ne change pas la nature du permis de construire, mais cela peut peser sur les teintes d’enduit, les tuiles, les menuiseries.',
          'Le périmètre exact et les prescriptions se lisent au service urbanisme de la mairie, parcelle par parcelle. Nous faisons cette vérification avant de dessiner, et non après : reprendre une façade sur demande de l’administration coûte plus cher que de l’avoir dessinée juste.',
        ],
      },
      {
        titre: 'Ce que nous construisons ici',
        paragraphes: [
          'Des maisons en brique ou en béton cellulaire, charpente traditionnelle, vide sanitaire, conformes à la RE2020. Les plans sont dessinés autour de votre terrain et de ce que le PLU y autorise — nous ne posons pas un modèle de catalogue sur une parcelle.',
          'Tout passe par un contrat de construction de maison individuelle : prix ferme et définitif, délai contractuel avec pénalités de retard, garantie de livraison. Les garanties légales suivent, du parfait achèvement à la décennale.',
        ],
      },
    ],
    voisines: {
      titre: 'Autour de Meximieux',
      intro:
        'Les communes voisines relèvent du même secteur, à quelques minutes du bureau. Pour chacune, le PLU est à lire avant de dessiner — c’est lui qui fixe l’emprise, la hauteur et parfois l’aspect.',
      liste: [
        { nom: 'Pérouges', note: 'Cité médiévale voisine ; les abords peuvent relever d’un périmètre de protection.' },
        { nom: 'Montluel', note: 'Sur la Côtière, côté Lyon : des parcelles plus petites et plus chères.', slug: 'construction-maison-montluel' },
        { nom: 'Lagnieu', note: 'Au sud-est, en pleine plaine : sol de graviers, terrains plats.', slug: 'construction-maison-lagnieu' },
        { nom: 'Villieu-Loyes-Mollon', note: 'Commune de plaine au nord, le long de la vallée de l’Ain.' },
        { nom: 'Charnoz-sur-Ain', note: 'En bord d’Ain, juste à l’est de Meximieux.' },
        { nom: 'Chazey-sur-Ain', note: 'Rive droite de l’Ain, parcelles souvent généreuses.' },
        { nom: 'Bourg-Saint-Christophe', note: 'Sur le plateau, côté Montluel.' },
        { nom: 'Le Montellier', note: 'Entrée de la Dombes, habitat dispersé.' },
        { nom: 'Rignieux-le-Franc', note: 'Dombes des étangs, au nord-ouest.' },
        { nom: 'Joyeux', note: 'Dombes, petites communes et terrains de lotissement.' },
      ],
    },
    faqTitre: 'Questions qu’on nous pose à Meximieux',
    faq: [
      {
        q: 'Votre bureau est-il vraiment à Meximieux ?',
        r: 'Oui, au 6 rue de Genève, 01800 Meximieux. Ouvert du lundi au vendredi de 8h30 à 18h00, et le samedi sur rendez-vous. C’est le siège de l’entreprise, pas une adresse de domiciliation.',
      },
      {
        q: 'Faut-il un permis différent près de Pérouges ?',
        r: 'Non, le permis de construire est le même. En revanche, si votre parcelle se situe dans le périmètre de protection d’un monument classé, l’instruction peut comporter l’avis de l’Architecte des Bâtiments de France, qui porte surtout sur l’aspect extérieur. Le service urbanisme de la mairie vous dira si votre terrain est concerné.',
      },
      {
        q: 'Combien de temps dure le chantier ?',
        r: 'Le contrat de construction fixe un délai de douze mois de chantier, assorti de pénalités de retard. Ce délai court à partir de l’ouverture du chantier, après l’obtention du permis et le déblocage du financement.',
      },
      {
        q: 'Je possède déjà un terrain à Meximieux, pouvez-vous construire dessus ?',
        r: 'Oui. Nous partons du terrain : relevé, orientation, accès, règles du PLU, puis le plan se dessine autour de ces contraintes. Si vous n’avez pas encore de terrain, dites-le nous, nous suivons les opportunités du secteur.',
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
      'Bourg-en-Bresse est la préfecture de l’Ain et l’un de nos trois pôles d’intervention : nous construisons dans la ville et dans un rayon d’environ 30 km autour d’elle, de la première couronne jusqu’aux villages bressans.',
      'Construire en Bresse n’est pas construire dans la plaine de l’Ain. Le sol n’est pas le même, l’habitat traditionnel n’est pas le même, et les terrains disponibles se trouvent rarement dans la ville-centre : ils sont dans la première couronne.',
    ],
    blocs: [
      {
        titre: 'La Bresse est un sol qu’il faut faire parler',
        paragraphes: [
          'Les terres bressanes comportent beaucoup d’argile, et l’argile gonfle quand il pleut, se rétracte quand il sèche. Une fondation mal dimensionnée sur ce mouvement fissure des années plus tard, quand tout le monde a oublié qui avait coulé le béton.',
          'C’est pour cette raison que l’étude géotechnique est devenue obligatoire à la vente d’un terrain constructible situé en zone d’exposition moyenne ou forte au retrait-gonflement des argiles. Si l’étude existe, nous la lisons ; si elle manque, nous la faisons faire. C’est elle qui décide des fondations, de la profondeur et de la nécessité d’un vide sanitaire — pas une habitude de chantier.',
        ],
      },
      {
        titre: 'Les terrains sont dans la couronne',
        paragraphes: [
          'La ville-centre laisse peu de parcelles libres. Les projets de construction neuve se concentrent sur les communes qui la bordent, où l’on trouve encore du lotissement viabilisé et de la division de parcelle.',
          'Un terrain en lotissement s’accompagne d’un règlement propre, qui s’ajoute au PLU et se montre parfois plus exigeant que lui : implantation, pente de toit, teintes, clôtures. Nous le lisons avant de dessiner, pour que le plan n’ait pas à être repris.',
        ],
      },
      {
        titre: 'Le style bressan, sans pastiche',
        paragraphes: [
          'La maison bressanne traditionnelle est longue, basse, largement débordante de toiture. Une construction neuve n’a pas à l’imiter pour s’intégrer, mais elle gagne à en retenir les proportions : un volume allongé et une toiture franche tiennent mieux dans ce paysage qu’un cube à toit plat posé au milieu d’un pré.',
          'Nous dessinons les plans, nous ne vendons pas de modèle. Si vous voulez du contemporain à Bourg, c’est possible ; si vous voulez une volumétrie plus traditionnelle, c’est possible aussi. Ce qui ne se discute pas, c’est le respect de ce que le PLU autorise.',
        ],
      },
      {
        titre: 'Un pôle, pas un déplacement exceptionnel',
        paragraphes: [
          'La carte de la page zone d’intervention montre trois cercles de 30 km, et celui de Bourg est aussi large que celui de Meximieux. Le secteur bressan se mène comme les autres : le même interlocuteur du premier rendez-vous à la remise des clés, les mêmes artisans, les mêmes rendez-vous de chantier.',
          'La préfecture est à une trentaine de minutes du bureau de Meximieux par l’A42 puis l’A40. Cinq communes de la couronne ont ici leur propre page : Péronnas, Viriat, Saint-Denis-lès-Bourg, Attignat et Ceyzériat.',
        ],
      },
    ],
    voisines: {
      titre: 'La première couronne de Bourg',
      intro:
        'Les communes de la périphérie concentrent l’essentiel des terrains constructibles du secteur. Nous y intervenons dans les mêmes conditions qu’à Bourg même.',
      liste: [
        { nom: 'Péronnas', note: 'Au sud immédiat : tissu déjà bâti, terrains issus d’une division.', slug: 'construction-maison-peronnas' },
        { nom: 'Viriat', note: 'Au nord, commune étendue faite de hameaux dispersés.', slug: 'construction-maison-viriat' },
        { nom: 'Saint-Denis-lès-Bourg', note: 'À l’ouest, en Bresse plate : les eaux de pluie restent sur la parcelle.', slug: 'construction-maison-saint-denis-les-bourg' },
        { nom: 'Attignat', note: 'Au nord, village bressan qui s’agrandit par secteurs encadrés.', slug: 'construction-maison-attignat' },
        { nom: 'Ceyzériat', note: 'À l’est, au pied du Revermont : la roche n’est jamais loin.', slug: 'construction-maison-ceyzeriat' },
        { nom: 'Montagnat', note: 'Au sud-est, en direction du Revermont.' },
        { nom: 'Certines', note: 'Sur l’axe Bourg–Meximieux, à mi-chemin du bureau.' },
        { nom: 'Servas', note: 'Entre Bourg et la Dombes.' },
        { nom: 'Jasseron', note: 'Au pied du Revermont, terrains parfois en léger dévers.' },
        { nom: 'Buellas', note: 'À l’ouest, en pleine Bresse.' },
      ],
    },
    faqTitre: 'Questions qu’on nous pose à Bourg-en-Bresse',
    faq: [
      {
        q: 'Intervenez-vous à Bourg-en-Bresse et dans sa couronne ?',
        r: 'Oui. Bourg-en-Bresse est l’un de nos trois pôles d’intervention, avec son propre rayon d’environ 30 km : la ville, la première couronne et les villages bressans alentour relèvent du même secteur.',
      },
      {
        q: 'L’étude de sol est-elle vraiment obligatoire ici ?',
        r: 'Elle l’est pour la vente d’un terrain constructible situé en zone d’exposition moyenne ou forte au retrait-gonflement des argiles, ce qui concerne une grande partie de la Bresse. Son résultat est annexé au contrat de construction et il conditionne le dimensionnement des fondations.',
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
      'Ambérieu-en-Bugey est à un quart d’heure de notre bureau de Meximieux, à l’endroit exact où la plaine de l’Ain s’arrête et où le Bugey commence. Cette frontière se lit dans les terrains : une parcelle de plaine et une parcelle de pied de falaise ne se construisent pas de la même façon.',
      'C’est la commune de notre zone où la pente se rencontre le plus souvent. Elle n’est pas un problème — elle est une donnée, qui se traite au moment du plan et non au moment du chantier.',
    ],
    blocs: [
      {
        titre: 'Des terrains qui penchent',
        paragraphes: [
          'Un terrain en pente change trois choses : la façon de poser la maison, le volume de terre à déplacer, et l’accès des engins. Les trois se décident sur le relevé du terrain, avant le premier trait de plan.',
          'Selon le dénivelé, la maison se pose sur un sous-sol semi-enterré, se décale en demi-niveaux, ou s’installe sur une plateforme avec un mur de soutènement. Chacune de ces solutions a un coût et une conséquence sur le plan : un sous-sol donne du volume, un décalage de niveaux donne des hauteurs sous plafond inhabituelles, une plateforme donne du terrain plat autour de la maison.',
          'Nous ne donnons pas de fourchette au mètre carré pour un terrain en pente sans l’avoir vu. Le chiffrage se fait sur votre parcelle, à partir du relevé et de l’étude de sol.',
        ],
      },
      {
        titre: 'Deux géologies qui se touchent',
        paragraphes: [
          'À l’ouest d’Ambérieu, on est encore dans les alluvions de la plaine de l’Ain. À l’est, on arrive au pied du relief du Bugey, où la roche remonte et où les terrains comportent des éboulis.',
          'Deux parcelles éloignées de quelques centaines de mètres peuvent donc demander des fondations très différentes. C’est l’étude géotechnique qui tranche, et c’est elle qu’il faut avoir en main avant de parler de prix.',
        ],
      },
      {
        titre: 'Ce que la pente change au plan',
        paragraphes: [
          'Une pente bien exploitée offre ce qu’un terrain plat ne donne pas : un garage en rez-de-jardin qui n’entame pas la surface habitable, une pièce de vie ouverte sur le vide, une terrasse de plain-pied à l’étage.',
          'Le plain-pied reste possible sur un terrain en pente, à condition de créer une plateforme — ce qui suppose d’avoir la place et le droit de terrasser. Le PLU et le règlement de lotissement fixent souvent des limites sur les mouvements de terre et la hauteur des murs de soutènement.',
        ],
      },
    ],
    voisines: {
      titre: 'Le pied du Bugey',
      intro:
        'Les communes qui entourent Ambérieu partagent la même particularité : on passe de la plaine au relief en quelques kilomètres, et le terrain décide du projet.',
      liste: [
        { nom: 'Saint-Denis-en-Bugey', note: 'Mitoyenne d’Ambérieu, dans la vallée.' },
        { nom: 'Château-Gaillard', note: 'En plaine, à l’ouest, sur la route de Meximieux.' },
        { nom: 'Vaux-en-Bugey', note: 'Sur le coteau, parcelles fréquemment en pente.' },
        { nom: 'Bettant', note: 'Adossée au relief, au nord-est d’Ambérieu.' },
        { nom: 'Douvres', note: 'Au pied de la falaise, le long de la vallée.' },
        { nom: 'Ambutrix', note: 'Sur le plateau, au sud.' },
        { nom: 'Saint-Sorlin-en-Bugey', note: 'En bord de Rhône, terrains étroits et pentus.' },
        { nom: 'Lagnieu', note: 'Au sud-ouest, retour en plaine et en terrain plat.', slug: 'construction-maison-lagnieu' },
      ],
    },
    faqTitre: 'Questions qu’on nous pose à Ambérieu',
    faq: [
      {
        q: 'Construisez-vous sur un terrain en pente ?',
        r: 'Oui, c’est courant autour d’Ambérieu. Selon le dénivelé, la maison se pose sur un sous-sol semi-enterré, se décale en demi-niveaux ou s’installe sur une plateforme avec soutènement. La solution se choisit sur le relevé du terrain, avant le plan.',
      },
      {
        q: 'Un sous-sol coûte-t-il plus cher ?',
        r: 'Cela dépend entièrement de la parcelle : nature du sol, dénivelé, volume de terre à sortir, accès des engins. Nous ne donnons pas de prix au mètre carré pour un sous-sol sans avoir vu le terrain et lu l’étude de sol. Le chiffrage se fait sur votre parcelle.',
      },
      {
        q: 'Ambérieu-en-Bugey est-elle dans votre zone d’intervention ?',
        r: 'C’est l’un de nos trois pôles, avec son propre rayon d’environ 30 km : tout le pied du Bugey et la plaine alentour en relèvent. Notre bureau est au 6 rue de Genève à Meximieux, à un quart d’heure environ par la route.',
      },
      {
        q: 'Peut-on faire un plain-pied malgré la pente ?',
        r: 'Oui, en créant une plateforme. Encore faut-il en avoir la place et le droit : le PLU et, en lotissement, le règlement du lotissement encadrent souvent les mouvements de terre et la hauteur des murs de soutènement. Cela se vérifie parcelle par parcelle avant de dessiner.',
      },
    ],
    ctaTexte:
      'Le simulateur suppose un terrain plat. Sur une parcelle en pente, il donne un ordre de grandeur et rien de plus : le terrassement et les fondations se chiffrent sur le relevé de votre terrain.',
    invitation: 'Pour voir une maison construite sur un terrain en pente, appelez-nous au',
  },

  /* ══ COMMUNES RATTACHÉES ════════════════════════════════════════════════

     Sept pages volontairement plus courtes que les pages de pôle : 400 à
     500 mots, deux sections, pas de liste de communes voisines, un renvoi
     vers le pôle. Chacune traite un sujet que les autres ne traitent pas. */

  /* ── Viriat ────────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-viriat',
    commune: 'Viriat',
    surtitre: 'Viriat · Ain (01)',
    h1: ['Construire une maison à', 'Viriat'],
    intro: [
      'Viriat borde Bourg-en-Bresse au nord et s’étend sur un très grand territoire : un village entouré de hameaux dispersés en pleine campagne bressane.',
      'Cette dispersion est la première chose à regarder. Elle décide de ce qui arrive jusqu’à la parcelle, et surtout de la façon dont la maison traitera ses eaux usées.',
    ],
    blocs: [
      {
        titre: 'Le hameau change tout',
        paragraphes: [
          'Un terrain à Viriat peut se trouver à deux minutes des écoles ou à plusieurs kilomètres, au bout d’un chemin. L’adresse ne le dit pas : il faut situer la parcelle sur le plan de zonage du PLU, puis demander en mairie ce qui la dessert.',
          'Trois questions cadrent le budget : la parcelle est-elle raccordable au réseau collectif d’assainissement, à quelle distance passe le branchement d’eau, et l’accès supporte-t-il un camion de chantier.',
        ],
      },
      {
        titre: 'Quand le tout-à-l’égout n’arrive pas',
        paragraphes: [
          'Hors des secteurs raccordés, la maison traite ses eaux usées sur place. La filière se dimensionne sur une étude de sol à la parcelle, et son projet passe devant le service public d’assainissement non collectif avant les travaux.',
          'Cela demande de la place, un sol qui accepte l’infiltration, et une ligne de budget dès le premier chiffrage. L’emplacement du dispositif se décide avec l’implantation de la maison, pas après le permis.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Viriat relève de notre pôle de Bourg-en-Bresse. Le sol argileux de la Bresse et l’étude géotechnique qu’il impose valent ici comme en ville.',
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
        q: 'Peut-on construire dans un hameau ?',
        r: 'Cela dépend du zonage. Les hameaux n’autorisent souvent que le comblement des espaces déjà bâtis, et une zone agricole n’accueille pas de maison neuve. Le plan de zonage tranche.',
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
    h1: ['Construire une maison à', 'Péronnas'],
    intro: [
      'Péronnas touche Bourg-en-Bresse au sud, sur la route de Meximieux : on passe d’une commune à l’autre sans voir la limite.',
      'Le tissu y est déjà construit, et cela change tout pour qui cherche à bâtir : les terrains qui se libèrent sont presque toujours des divisions de parcelles déjà habitées.',
    ],
    blocs: [
      {
        titre: 'Un terrain qui sort d’un jardin',
        paragraphes: [
          'Le fond du jardin d’une maison des années soixante-dix, une dent creuse entre deux pavillons : voilà ce qui se vend ici. La surface annoncée n’est pas la surface constructible — il faut d’abord retirer les reculs imposés par le PLU.',
          'L’accès se fait souvent par une bande étroite ou une servitude de passage chez le voisin. Le droit de passage doit figurer dans l’acte, et sa largeur suffire aux engins puis aux secours. Un terrain enclavé sans servitude écrite n’est pas un terrain à bâtir.',
        ],
      },
      {
        titre: 'Construire entre deux voisins',
        paragraphes: [
          'Sur une parcelle entourée, le plan part des reculs et des vues. Le code civil fixe les distances d’ouverture vers le voisin : 1,90 m en vue droite, 0,60 m en vue oblique, mesurés depuis la limite séparative. Le PLU ajoute ses propres reculs et sa hauteur maximale.',
          'Bon côté : les réseaux sont au pied de la parcelle et le chantier accède facilement. Moins bon : l’implantation est contrainte au mètre près, donc le plan se dessine après le relevé.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Péronnas relève de notre pôle de Bourg-en-Bresse. L’étude de sol en terre bressane et le style local y valent autant qu’en ville.',
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
          'En terre bressane, l’infiltration est lente : l’argile retient l’eau au lieu de la boire. Un puits perdu posé au hasard n’y sert à rien. Le dispositif se dimensionne sur une perméabilité mesurée à la parcelle.',
        ],
      },
      {
        titre: 'Ce que cela change au plan',
        paragraphes: [
          'Noue, massif drainant ou cuve enterrée avec trop-plein : chaque solution occupe du terrain et se place avec la maison, pas à la fin. Sur une parcelle plate, le sens d’écoulement ne saute pas aux yeux ; il se relève au niveau optique.',
          'Le niveau fini de la maison se décide dans le même mouvement : posée trop bas par rapport à la route ou aux voisins, elle reçoit leur ruissellement. Cela se règle au centimètre, sur le plan.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Saint-Denis-lès-Bourg relève de notre pôle de Bourg-en-Bresse. L’argile qui freine l’infiltration est celle qui impose l’étude géotechnique.',
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
    h1: ['Construire une maison à', 'Attignat'],
    intro: [
      'Attignat est un village bressan au nord de Bourg-en-Bresse, et il gagne des habitants. C’est une bonne nouvelle pour qui veut y construire.',
      'Dans une commune qui s’agrandit, les parcelles à bâtir ne se trouvent pas n’importe où : le PLU délimite les secteurs d’extension et fixe par avance la façon dont ils s’ouvriront.',
    ],
    blocs: [
      {
        titre: 'Un village qui s’agrandit par secteurs',
        paragraphes: [
          'Ces secteurs sont encadrés par une orientation d’aménagement et de programmation, l’OAP du PLU. C’est un schéma opposable au permis : il fixe les accès, les cheminements, parfois une densité minimale de logements à l’hectare et l’ordre dans lequel les zones s’ouvrent.',
          'Trois conséquences : un lot peut être plus petit qu’espéré, son accès mutualisé avec le voisin, et un terrain classé en zone à urbaniser pas encore constructible. La mairie répond avant la promesse de vente.',
        ],
      },
      {
        titre: 'Viabilisé ne veut pas dire raccordé',
        paragraphes: [
          'Un lot vendu viabilisé a les réseaux amenés en limite de propriété. Le branchement jusqu’à la maison, les compteurs et les frais de mise en service restent à votre charge, et ils ne sont pas symboliques.',
          'S’y ajoute la taxe d’aménagement, due pour une construction neuve et calculée sur la surface taxable avec les taux votés localement. Nous listons ces postes au chiffrage : terrain, maison, raccordements, taxes.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Attignat relève de notre pôle de Bourg-en-Bresse, dont le rayon de 30 km couvre tout le nord de la Bresse.',
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
    h1: ['Construire une maison à', 'Ceyzériat'],
    intro: [
      'Ceyzériat s’adosse au Revermont, à l’est de Bourg-en-Bresse. On quitte la Bresse et son argile pour le premier relief calcaire : sous la terre végétale, la roche n’est jamais loin.',
      'Deux conséquences, opposées : la portance est excellente, l’excavation est chère. Tout l’équilibre d’un projet se joue là.',
    ],
    blocs: [
      {
        titre: 'Un sol dur, pour le meilleur et pour le pire',
        paragraphes: [
          'Un sous-sol creusé dans le rocher se paie au mètre cube de roche sortie, parfois au brise-roche hydraulique. Sur ce genre de parcelle, une maison posée sur une plateforme revient souvent moins cher qu’un niveau enterré complet.',
          'C’est l’étude de sol qui tranche : elle donne la profondeur à laquelle la roche arrive et la façon d’y asseoir les fondations. Nous ne chiffrons pas un terrassement de coteau sans ce document et sans un relevé du terrain.',
        ],
      },
      {
        titre: 'S’intégrer dans un village de pierre',
        paragraphes: [
          'Les villages du Revermont sont bâtis en calcaire, toitures en tuiles et débords mesurés. Le PLU y encadre souvent l’aspect extérieur : teintes d’enduit, couverture, clôtures. Un permis peut être refusé sur ce seul motif.',
          'Nous lisons cet article avant de dessiner. Une maison contemporaine reste possible si ses matériaux et ses teintes entrent dans ce qui est autorisé : une contrainte de dessin, pas une interdiction de style.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Ceyzériat relève de notre pôle de Bourg-en-Bresse, à quelques minutes de la préfecture, là où le sol bressan s’arrête.',
    },
    faqTitre: 'Questions qu’on nous pose à Ceyzériat',
    faq: [
      {
        q: 'Peut-on faire un sous-sol à Ceyzériat ?',
        r: 'Techniquement oui, mais tout dépend de la profondeur à laquelle la roche arrive. Si elle est haute, une plateforme ou un vide sanitaire rend le même service pour bien moins cher.',
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
      'Le simulateur suppose un terrain plat et un sol ordinaire. Ici, le terrassement fait la différence : envoyez-nous la parcelle, nous chiffrons sur le relevé.',
    invitation: 'Pour voir une maison construite sur un terrain de coteau, appelez-nous au',
  },

  /* ── Montluel ──────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-montluel',
    commune: 'Montluel',
    surtitre: 'Montluel · Ain (01)',
    h1: ['Construire une maison à', 'Montluel'],
    intro: [
      'Montluel est sur la Côtière, à une vingtaine de minutes du bureau de Meximieux et aux portes de l’est lyonnais : la ville ancienne en bas, le plateau de la Dombes au-dessus.',
      'Cette position se paie sur le foncier : les terrains y sont rares et plus petits que dans la plaine de l’Ain, et cela décide de la forme de la maison.',
    ],
    blocs: [
      {
        titre: 'Petite parcelle, maison à étage',
        paragraphes: [
          'Sur une parcelle réduite, chaque mètre est pris avant qu’on ait dessiné : le recul imposé par le PLU, l’emprise au sol maximale, la place de la voiture, celle du dispositif d’eaux pluviales.',
          'La réponse est presque toujours la même : construire sur deux niveaux plutôt qu’en plain-pied. Une maison à étage occupe deux fois moins de sol pour la même surface habitable, et laisse un jardin utilisable.',
        ],
      },
      {
        titre: 'L’emprise au sol, le chiffre à connaître avant d’acheter',
        paragraphes: [
          'L’emprise au sol est la surface que la construction couvre au sol, garage compris. Le PLU la plafonne, souvent en pourcentage : sur 500 m² avec une emprise de 30 %, la maison ne couvre pas plus de 150 m².',
          'C’est le premier chiffre que nous cherchons quand vous nous envoyez une annonce : il décide de la forme du projet, et dit parfois tout de suite que le programme ne rentre pas.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-meximieux',
      commune: 'Meximieux',
      texte:
        'Montluel relève de notre pôle de Meximieux, où se trouve le bureau — la commune voisine de Pérouges et de la plaine de l’Ain.',
    },
    faqTitre: 'Questions qu’on nous pose à Montluel',
    faq: [
      {
        q: 'Qu’est-ce que l’emprise au sol ?',
        r: 'La projection de la construction sur le terrain, garage et parties couvertes comprises. Le PLU en fixe le maximum, souvent en pourcentage de la parcelle.',
      },
      {
        q: 'Un plain-pied est-il possible sur un petit terrain ?',
        r: 'Possible, mais il consomme toute l’emprise disponible et le jardin avec. Sur les parcelles de la Côtière, une maison à étage donne plus de surface habitable et plus de terrain.',
      },
      {
        q: 'Pouvez-vous dire si mon projet rentre sur la parcelle ?',
        r: 'Oui, c’est l’étude de faisabilité, et elle est gratuite. Nous partons du plan cadastral et du PLU applicable, et nous répondons avant que vous n’engagiez quoi que ce soit.',
      },
      {
        q: 'Montluel est-elle dans votre zone d’intervention ?',
        r: 'Oui, pleinement : la commune est dans le rayon de 30 km du pôle de Meximieux, à une vingtaine de minutes du bureau par l’A42. Toute la Côtière en relève.',
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
      'C’est un bon sol à bâtir : il porte bien et il boit la pluie. Deux questions restent ouvertes, et l’étude de sol est là pour y répondre.',
    ],
    blocs: [
      {
        titre: 'Des graviers, et le niveau de l’eau',
        paragraphes: [
          'La première question est la profondeur de l’eau. Entre Ain et Rhône, la nappe peut se trouver haut, et c’est elle qui dit si un sous-sol est raisonnable ou s’il vaut mieux un vide sanitaire.',
          'La seconde est l’hétérogénéité du terrain : des poches plus fines peuvent voisiner avec des bancs de galets sur une même parcelle. Les fondations se dimensionnent donc sur l’étude géotechnique, pas sur l’habitude du secteur.',
        ],
      },
      {
        titre: 'Un terrain plat, un chantier droit',
        paragraphes: [
          'Sur une parcelle de plaine, il n’y a ni mur de soutènement, ni plateforme à créer, ni accès acrobatique pour la toupie à béton. Le budget comporte donc moins d’inconnues qu’au pied du Bugey.',
          'Restent deux réglages : le niveau fini de la maison par rapport à la route et aux voisins, et l’infiltration des eaux de pluie — facile dans les graviers, mais à dimensionner sur une perméabilité mesurée.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-meximieux',
      commune: 'Meximieux',
      texte:
        'Lagnieu relève de notre pôle de Meximieux, à un quart d’heure par la route, et touche aussi le secteur d’Ambérieu-en-Bugey.',
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
        r: 'Un quart d’heure de route. La commune entre dans le rayon de 30 km du pôle de Meximieux, comme tout le sud de la plaine de l’Ain.',
      },
    ],
    ctaTexte:
      'Le simulateur suppose justement un terrain plat : sa fourchette est ici proche de la réalité. Le chiffrage définitif vient après l’étude de sol.',
    invitation: 'Pour voir un chantier en cours dans la plaine de l’Ain, appelez-nous au',
  },
];

/** Accès par slug, pour les pages. */
export const LOCALE_PAR_SLUG: Readonly<Record<string, PageLocale>> = Object.fromEntries(
  LOCALES.map((l) => [l.slug, l])
);

/** Les trois pôles, dans l'ordre d'écriture. */
export const POLES: readonly PageLocale[] = LOCALES.filter((l) => !l.pole);

/** Les communes rattachées à un pôle donné. */
export function communesDuPole(slugPole: string): readonly PageLocale[] {
  return LOCALES.filter((l) => l.pole?.slug === slugPole);
}
