/**
 * Pages locales : Meximieux, Bourg-en-Bresse, Ambérieu-en-Bugey.
 *
 * Ce sont les trois pôles de la zone d'intervention — les mêmes que ceux qui
 * portent un cercle de 30 km sur la carte (lib/data/communes.ts).
 *
 * Chaque page a son propre sujet, et non le même texte avec le nom de la
 * commune changé : le bureau et les abords de Pérouges à Meximieux, le sol
 * argileux de la Bresse et la limite du rayon à Bourg, la pente du pied de
 * Bugey à Ambérieu. Le nombre de sections, leurs titres et les questions
 * diffèrent d'une page à l'autre. Une page locale qui n'est qu'un gabarit
 * rempli d'un nom de ville est une page vide, Google la traite comme telle, et
 * elle ne rend service à personne.
 *
 * Rien ici n'est inventé. Deux règles ont tenu l'écriture :
 *
 *  - Aucun avis, aucune réalisation nommée, aucun chantier attribué à une
 *    commune. L'entreprise n'a pas de relevé de ses livraisons commune par
 *    commune, et une référence inventée est un mensonge qui se vérifie en un
 *    appel. Ce qui manque est listé plus bas.
 *
 *  - Aucun chiffre nouveau. Les douze mois de chantier, la réponse sous 48 h,
 *    le rayon de 30 km, l'échéancier, les horaires du bureau figurent déjà
 *    ailleurs sur le site. Les obligations citées — étude géotechnique,
 *    périmètre d'un monument protégé, règlement de lotissement — sont des
 *    règles générales, données comme des points à vérifier auprès de la
 *    mairie, jamais comme un relevé du PLU de la commune.
 *
 * À COMPLÉTER PAR LE CLIENT, quand l'information existera :
 *  - des réalisations situées, commune par commune, pour remplacer l'invitation
 *    à demander les références les plus proches ;
 *  - le nombre de maisons livrées dans chacun des trois secteurs ;
 *  - les éventuelles contraintes de PLU qu'Aykut connaît et qui méritent
 *    d'être écrites noir sur blanc pour chaque commune.
 */

export type QuestionLocale = { readonly q: string; readonly r: string };
export type BlocLocal = { readonly titre: string; readonly paragraphes: readonly string[] };
export type Village = { readonly nom: string; readonly note: string };

export type PageLocale = {
  readonly slug: string;
  readonly commune: string;
  readonly surtitre: string;
  readonly h1: string;
  readonly intro: readonly string[];
  readonly blocs: readonly BlocLocal[];
  readonly villagesTitre: string;
  readonly villagesIntro: string;
  readonly villages: readonly Village[];
  readonly faqTitre: string;
  readonly faq: readonly QuestionLocale[];
  /** Texte de l'appel à l'estimation. Propre à chaque commune : trois pages
   *  qui se terminent sur la même phrase sont trois pages qui se recopient. */
  readonly ctaTexte: string;
  /** Ce que nous ne pouvons pas affirmer, dit page par page. */
  readonly noteReferences: string;
};

export const LOCALES: readonly PageLocale[] = [
  /* ── Meximieux ─────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-meximieux',
    commune: 'Meximieux',
    surtitre: 'Meximieux · Ain (01)',
    h1: 'Construire une maison à Meximieux',
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
    villagesTitre: 'Autour de Meximieux',
    villagesIntro:
      'Les communes voisines relèvent du même secteur, à quelques minutes du bureau. Pour chacune, le PLU est à lire avant de dessiner — c’est lui qui fixe l’emprise, la hauteur et parfois l’aspect.',
    villages: [
      { nom: 'Pérouges', note: 'Cité médiévale voisine ; les abords peuvent relever d’un périmètre de protection.' },
      { nom: 'Villieu-Loyes-Mollon', note: 'Commune de plaine au nord, le long de la vallée de l’Ain.' },
      { nom: 'Charnoz-sur-Ain', note: 'En bord d’Ain, juste à l’est de Meximieux.' },
      { nom: 'Chazey-sur-Ain', note: 'Rive droite de l’Ain, parcelles souvent généreuses.' },
      { nom: 'Bourg-Saint-Christophe', note: 'Sur le plateau, côté Montluel.' },
      { nom: 'Le Montellier', note: 'Entrée de la Dombes, habitat dispersé.' },
      { nom: 'Rignieux-le-Franc', note: 'Dombes des étangs, au nord-ouest.' },
      { nom: 'Joyeux', note: 'Dombes, petites communes et terrains de lotissement.' },
    ],
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
    noteReferences:
      'Nous ne rattachons pas de réalisation à une commune sur le site. À Meximieux, le plus simple est de demander : plusieurs chantiers sont visibles depuis la route, et nous vous dirons lesquels.',
  },

  /* ── Bourg-en-Bresse ───────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-bourg-en-bresse',
    commune: 'Bourg-en-Bresse',
    surtitre: 'Bourg-en-Bresse · Ain (01)',
    h1: 'Construire une maison à Bourg-en-Bresse',
    intro: [
      'Bourg-en-Bresse est la préfecture de l’Ain, à une trentaine de minutes de notre bureau de Meximieux par l’A42 puis l’A40. Elle marque la limite nord de notre rayon d’intervention, et nous y allons.',
      'Construire en Bresse n’est pas construire dans la plaine de l’Ain. Le sol n’est pas le même, l’habitat traditionnel n’est pas le même, et les terrains disponibles se trouvent rarement dans la ville-centre : ils sont dans la première couronne.',
    ],
    blocs: [
      {
        titre: 'La Bresse est un sol qu’il faut faire parler',
        paragraphes: [
          'Les terres bressanes comportent beaucoup d’argile, et l’argile gonfle quand il pleut, se retracte quand il sèche. Une fondation mal dimensionnée sur ce mouvement fissure des années plus tard, quand tout le monde a oublié qui avait coulé le béton.',
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
        titre: 'Au bord du rayon, et nous le disons',
        paragraphes: [
          'Nous intervenons dans un rayon d’environ 30 km autour de Meximieux. Bourg-en-Bresse se trouve à son extrémité nord. Cela ne nous empêche pas de construire, mais autant être francs : les visites s’y organisent, elles ne s’improvisent pas en fin de journée.',
          'Si votre terrain est au nord de Bourg, dites-le nous d’emblée. Nous préférons vous dire non tout de suite plutôt que de suivre mal un chantier trop loin.',
        ],
      },
    ],
    villagesTitre: 'La première couronne de Bourg',
    villagesIntro:
      'Les communes de la périphérie concentrent l’essentiel des terrains constructibles du secteur. Nous y intervenons dans les mêmes conditions qu’à Bourg même.',
    villages: [
      { nom: 'Péronnas', note: 'Au sud immédiat, sur la route de Meximieux.' },
      { nom: 'Viriat', note: 'Au nord, commune étendue avec beaucoup d’habitat individuel.' },
      { nom: 'Saint-Denis-lès-Bourg', note: 'À l’ouest, lotissements et divisions de parcelles.' },
      { nom: 'Montagnat', note: 'Au sud-est, en direction du Revermont.' },
      { nom: 'Certines', note: 'Sur l’axe Bourg–Meximieux, à mi-chemin du bureau.' },
      { nom: 'Servas', note: 'Entre Bourg et la Dombes.' },
      { nom: 'Jasseron', note: 'Au pied du Revermont, terrains parfois en léger dévers.' },
      { nom: 'Buellas', note: 'À l’ouest, en pleine Bresse.' },
    ],
    faqTitre: 'Questions qu’on nous pose à Bourg-en-Bresse',
    faq: [
      {
        q: 'Bourg-en-Bresse est-elle bien dans votre zone d’intervention ?',
        r: 'Oui, à sa limite nord. Notre rayon est d’environ 30 km autour de Meximieux, et Bourg-en-Bresse s’y trouve. Pour un terrain situé plus au nord, parlons-en avant d’engager quoi que ce soit.',
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
        q: 'Qui suit le chantier, à cette distance ?',
        r: 'Un seul interlocuteur, du premier rendez-vous à la remise des clés. C’est le principe de la maison : vous n’avez pas à relancer cinq personnes différentes. À Bourg comme ailleurs, les visites sont planifiées et vous y êtes invité.',
      },
    ],
    ctaTexte:
      'Le simulateur donne une fourchette à partir de la surface, des niveaux et des équipements. Elle ne tient pas compte de l’étude de sol, qui pèse réellement sur les fondations en terre bressane : le chiffrage définitif vient après.',
    noteReferences:
      'Nous ne publions pas de réalisation nommée par commune. Pour Bourg et sa couronne, demandez-nous les chantiers les plus proches de votre terrain — c’est une réponse que nous donnons au téléphone, pas une page de références.',
  },

  /* ── Ambérieu-en-Bugey ─────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-amberieu-en-bugey',
    commune: 'Ambérieu-en-Bugey',
    surtitre: 'Ambérieu-en-Bugey · Ain (01)',
    h1: 'Construire une maison à Ambérieu-en-Bugey',
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
    villagesTitre: 'Le pied du Bugey',
    villagesIntro:
      'Les communes qui entourent Ambérieu partagent la même particularité : on passe de la plaine au relief en quelques kilomètres, et le terrain décide du projet.',
    villages: [
      { nom: 'Saint-Denis-en-Bugey', note: 'Mitoyenne d’Ambérieu, dans la vallée.' },
      { nom: 'Château-Gaillard', note: 'En plaine, à l’ouest, sur la route de Meximieux.' },
      { nom: 'Vaux-en-Bugey', note: 'Sur le coteau, parcelles fréquemment en pente.' },
      { nom: 'Bettant', note: 'Adossée au relief, au nord-est d’Ambérieu.' },
      { nom: 'Douvres', note: 'Au pied de la falaise, le long de la vallée.' },
      { nom: 'Ambutrix', note: 'Sur le plateau, au sud.' },
      { nom: 'Saint-Sorlin-en-Bugey', note: 'En bord de Rhône, terrains étroits et pentus.' },
      { nom: 'Lagnieu', note: 'Au sud-ouest, retour en plaine.' },
    ],
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
        q: 'À quelle distance êtes-vous d’Ambérieu-en-Bugey ?',
        r: 'Notre bureau est au 6 rue de Genève à Meximieux, à un quart d’heure environ par la route. C’est la commune la plus proche de nos trois pôles d’intervention après Meximieux elle-même.',
      },
      {
        q: 'Peut-on faire un plain-pied malgré la pente ?',
        r: 'Oui, en créant une plateforme. Encore faut-il en avoir la place et le droit : le PLU et, en lotissement, le règlement du lotissement encadrent souvent les mouvements de terre et la hauteur des murs de soutènement. Cela se vérifie parcelle par parcelle avant de dessiner.',
      },
    ],
    ctaTexte:
      'Le simulateur suppose un terrain plat. Sur une parcelle en pente, il donne un ordre de grandeur et rien de plus : le terrassement et les fondations se chiffrent sur le relevé de votre terrain.',
    noteReferences:
      'Aucune réalisation n’est rattachée à une commune sur ce site. Si votre terrain est en pente, demandez-nous ce que nous avons déjà construit dans cette configuration : c’est plus utile qu’une adresse.',
  },
];

/** Accès par slug, pour generateStaticParams et les pages. */
export const LOCALE_PAR_SLUG: Readonly<Record<string, PageLocale>> = Object.fromEntries(
  LOCALES.map((l) => [l.slug, l])
);
