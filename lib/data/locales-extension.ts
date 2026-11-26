import type { QuestionLocale } from '@/lib/data/locales';
import type { PHOTOS_EXTENSION } from '@/lib/data/extension';

/**
 * Trois pages « Extension de maison » par ville : Bourg-en-Bresse, Meximieux,
 * Ambérieu-en-Bugey. Affichées par components/PageExtensionVille.tsx, qui
 * reprend le vocabulaire visuel de la page /renovation-extension (grande photo
 * en tête, cartes, rangées photo et texte, accordéon).
 *
 * Le DESIGN est partagé avec la page Extension ; le TEXTE ne l'est pas. Chaque
 * page a son sujet propre (l'argile de la Bresse, les abords de Pérouges, la
 * pente du Bugey), pour ne pas offrir à Google trois copies d'une même page.
 *
 * Règles d'écriture, les mêmes que lib/data/locales.ts :
 *  - aucun chantier attribué à une commune, aucun avis, aucun chiffre nouveau
 *    propre à l'entreprise ; les photos sont celles déjà publiées sur la page
 *    Extension (Google Drive de l'entreprise), jamais présentées comme prises
 *    dans la commune ;
 *  - ce qui dépend du terrain est dit comme tel (« en général », « à confirmer ») ;
 *  - seuils d'autorisation et délais : ceux de lib/data/extension.ts.
 */

type CleePhoto = keyof typeof PHOTOS_EXTENSION;

export type Rangee = { readonly titre: string; readonly paragraphes: readonly string[]; readonly photo: CleePhoto };

export type PageExtensionVille = {
  readonly slug: string;
  readonly commune: string;
  readonly surtitre: string;
  readonly h1: string;
  readonly accroche: string;
  readonly entete: CleePhoto;
  readonly typesTitre: string;
  readonly typesIntro: string;
  readonly types: readonly [string, string, string, string];
  readonly localSurtitre: string;
  readonly localTitre: string;
  readonly rangees: readonly Rangee[];
  readonly urbanismeIntro: string;
  readonly urbanismeLocal: string;
  readonly faqTitre: string;
  readonly faq: readonly QuestionLocale[];
  readonly appelMilieu: string;
  readonly appelFin: string;
};

export const LOCALES_EXTENSION: readonly PageExtensionVille[] = [
  /* ── Bourg-en-Bresse : l'argile et la jonction ─────────────────────────── */
  {
    slug: 'extension-maison-bourg-en-bresse',
    commune: 'Bourg-en-Bresse',
    surtitre: 'Extension de maison · Bourg-en-Bresse',
    h1: 'Extension de maison à Bourg-en-Bresse',
    accroche:
      'À Bourg et dans sa couronne, nous agrandissons votre maison en brique, en béton cellulaire ou en ossature bois, en tenant compte d’un sol bressan qui bouge.',
    entete: 'bandeUrbanisme',
    typesTitre: 'Quelle extension pour une maison bressane ?',
    typesIntro:
      'Autour de Bourg, beaucoup de maisons sont en lotissement, sur des parcelles régulières. Le côté à agrandir se choisit avec le règlement du lotissement autant qu’avec le jardin.',
    types: [
      'Sur un pignon de maison de lotissement, les reculs du règlement et du PLU fixent la largeur possible. Nous les mesurons avant de dessiner.',
      'Côté jardin, à l’abri de la rue : c’est souvent l’extension la plus simple à faire accepter en lotissement.',
      'Ouvrir le séjour sur une pièce neuve demande de soigner la jonction : sur sol argileux, ancien et neuf ne doivent pas travailler séparément.',
      'Le garage d’une maison bressane est souvent accolé : le transformer en pièce de vie impose de garder une place de stationnement si le PLU l’exige.',
    ],
    localSurtitre: 'Ce qui change à Bourg-en-Bresse',
    localTitre: 'Un sol qui bouge, une maison qui a déjà vécu.',
    rangees: [
      {
        titre: 'L’argile bressane et la jonction',
        paragraphes: [
          'Les terres de Bresse comportent beaucoup d’argile : elle gonfle quand il pleut et se rétracte quand il sèche. Une maison ancienne s’est en général stabilisée sur ce mouvement ; une extension arrive avec des fondations neuves. C’est à la jonction entre les deux qu’une fissure apparaît si elles ne travaillent pas de la même façon.',
          'Nous étudions donc la jonction avant la façade : fondation de la partie neuve, liaison avec le mur existant, toiture sans infiltration, isolation continue. Selon le terrain, une étude de sol aide à dimensionner les fondations ; nous vous disons si elle s’impose dans votre cas.',
        ],
        photo: 'maconnerie',
      },
      {
        titre: 'Lotissement : un règlement en plus du PLU',
        paragraphes: [
          'Un règlement de lotissement s’ajoute au PLU et peut se montrer plus exigeant : implantation, pente de toit, teintes d’enduit, clôtures. Nous le lisons avant de tracer l’extension, pas après un refus.',
          'Le même sol se lit différemment d’une commune à l’autre : voyez [l’infiltration des eaux de pluie à Saint-Denis-lès-Bourg](/construction-maison-saint-denis-les-bourg) ou [le terrain issu d’une division à Péronnas](/construction-maison-peronnas).',
        ],
        photo: 'contemporaine',
      },
      {
        titre: 'Garder les proportions de la maison',
        paragraphes: [
          'La maison bressanne est longue, basse, largement débordante de toiture. Une extension n’a pas à l’imiter, mais elle gagne à reprendre ses proportions : prolonger le faîtage, reprendre la pente, accorder l’enduit. À l’inverse, un volume contemporain à toit plat fonctionne quand il est franchement différent.',
        ],
        photo: 'bois',
      },
    ],
    urbanismeIntro: 'À Bourg comme ailleurs, le seuil se calcule sur la surface créée.',
    urbanismeLocal:
      'Beaucoup de terrains de la couronne de Bourg sont en zone urbaine d’un PLU : entre 20 et 40 m², une déclaration préalable y suffit alors. Le Géoportail de l’urbanisme le dit pour votre adresse, la mairie le confirme par un certificat d’urbanisme.',
    faqTitre: 'Extension à Bourg-en-Bresse : vos questions.',
    faq: [
      {
        q: 'Une extension de 25 m² demande-t-elle un permis à Bourg-en-Bresse ?',
        r: 'Entre 20 et 40 m², c’est une déclaration préalable si votre terrain est en zone urbaine d’un PLU, un permis de construire sinon. Le zonage se lit sur le Géoportail de l’urbanisme ; la mairie le confirme par un certificat d’urbanisme.',
      },
      {
        q: 'L’argile bressane rend-elle une extension plus risquée ?',
        r: 'Elle demande de l’attention à la jonction avec la maison existante et aux fondations de la partie neuve. Selon le terrain, une étude de sol aide à trancher ; nous vous disons si elle est utile.',
      },
      {
        q: 'Ma maison est en lotissement : que change-t-il ?',
        r: 'Le règlement du lotissement s’ajoute au PLU : implantation, toiture, teintes, clôtures. Nous le lisons avant de dessiner l’extension.',
      },
      {
        q: 'Vous occupez-vous du dossier d’urbanisme ?',
        r: 'Oui : plans, déclaration préalable ou permis, puis construction, jonction avec l’existant comprise.',
      },
    ],
    appelMilieu:
      'L’estimation en ligne donne une première fourchette ; pour une extension, le chiffrage se fait ensuite après visite de votre maison.',
    appelFin: 'Un premier rendez-vous pour regarder la maison, le lotissement et le PLU avant tout chiffrage.',
  },

  /* ── Meximieux : Pérouges et la Côtière ─────────────────────────────────── */
  {
    slug: 'extension-maison-meximieux',
    commune: 'Meximieux',
    surtitre: 'Extension de maison · Meximieux',
    h1: 'Extension de maison à Meximieux',
    accroche:
      'Notre bureau est au 6 rue de Genève. Venez avec le plan de votre maison : nous regardons ensemble où et comment l’agrandir.',
    entete: 'bandeFin',
    typesTitre: 'Agrandir près de Pérouges et de la Côtière',
    typesIntro:
      'Autour de Meximieux, deux sujets reviennent : l’aspect extérieur près de Pérouges, et la place disponible sur des parcelles parfois petites.',
    types: [
      'Elle se voit depuis la rue : près d’un monument protégé, son enduit, sa toiture et ses menuiseries peuvent être examinés par l’architecte des Bâtiments de France.',
      'Côté jardin, elle se fait plus discrète. Au pied de la Côtière, le niveau du sol fini se règle avec l’eau de ruissellement.',
      'Quand le jardin manque, gagner en profondeur sur la pièce existante est souvent la façon la plus simple de trouver des mètres carrés.',
      'Sur une petite parcelle, le garage est une surface déjà construite. Le PLU peut exiger de garder une place de stationnement.',
    ],
    localSurtitre: 'Ce qui change à Meximieux',
    localTitre: 'Pérouges à côté, la Côtière derrière.',
    rangees: [
      {
        titre: 'Près de Pérouges : l’avis de l’architecte des Bâtiments de France',
        paragraphes: [
          'Si votre parcelle se situe dans le périmètre de protection d’un monument classé, l’instruction peut comporter l’avis de l’Architecte des Bâtiments de France. Il porte sur l’aspect extérieur : matériau, couleur d’enduit, forme de toiture, menuiseries.',
          'Ce passage allonge l’instruction : deux mois pour une déclaration préalable au lieu d’un, trois pour un permis au lieu de deux. Mieux vaut le savoir avant de fixer une date de chantier.',
        ],
        photo: 'maconnerie',
      },
      {
        titre: 'Le pied de la Côtière : l’eau se lit sur place',
        paragraphes: [
          'Au pied du coteau, le ruissellement varie d’une rue à l’autre. Drainage, gestion des eaux de pluie et niveau du sol fini se décident sur le relevé du terrain.',
          'Voyez aussi [le pied de la Côtière à Bourg-Saint-Christophe](/construction-maison-bourg-saint-christophe), à trois kilomètres.',
        ],
        photo: 'vertical',
      },
      {
        titre: 'Petite parcelle : élargir, prolonger ou transformer',
        paragraphes: [
          'L’emprise au sol maximale du PLU limite ce qu’on peut ajouter côté jardin. Il reste à étudier le prolongement de la pièce de vie ou la transformation d’un garage, chacun avec ses règles de hauteur, de recul et de stationnement. Voyez [les petites parcelles de Montluel](/construction-maison-montluel), où la question se pose souvent.',
        ],
        photo: 'contemporaine',
      },
    ],
    urbanismeIntro: 'Le seuil se calcule sur la surface créée ; près de Pérouges, le délai peut s’allonger.',
    urbanismeLocal:
      'Avec l’avis de l’Architecte des Bâtiments de France : 2 mois pour une déclaration préalable, 3 pour un permis. La mairie ou le Géoportail de l’urbanisme disent si votre adresse est concernée.',
    faqTitre: 'Extension à Meximieux : vos questions.',
    faq: [
      {
        q: 'Mon terrain est près de Pérouges : l’autorisation sera-t-elle plus longue ?',
        r: 'Si votre parcelle est dans le périmètre de protection d’un monument classé, l’avis de l’Architecte des Bâtiments de France s’ajoute : 2 mois pour une déclaration préalable, 3 pour un permis.',
      },
      {
        q: 'Peut-on venir au bureau avant de se décider ?',
        r: 'Oui, au 6 rue de Genève, 01800 Meximieux, du lundi au vendredi de 9h à 19h. Le premier rendez-vous est gratuit ; venez avec le plan de votre maison.',
      },
      {
        q: 'Quelle extension sur une petite parcelle ?',
        r: 'Cela dépend de l’emprise au sol permise par le PLU. Quand le jardin ne suffit pas, le prolongement de la pièce de vie ou la transformation du garage sont à étudier.',
      },
      {
        q: 'Faites-vous les plans et le dossier d’urbanisme ?',
        r: 'Oui : plans, déclaration préalable ou permis, puis construction.',
      },
    ],
    appelMilieu:
      'L’estimation en ligne donne une première fourchette ; à Meximieux, le plus rapide reste de passer au bureau avec le plan de votre maison.',
    appelFin: 'Le bureau est à Meximieux : un premier rendez-vous gratuit pour regarder votre maison et le PLU.',
  },

  /* ── Ambérieu-en-Bugey : la pente ───────────────────────────────────────── */
  {
    slug: 'extension-maison-amberieu-en-bugey',
    commune: 'Ambérieu-en-Bugey',
    surtitre: 'Extension de maison · Ambérieu-en-Bugey',
    h1: 'Extension de maison à Ambérieu-en-Bugey',
    accroche:
      'Entre la plaine de l’Ain et le relief du Bugey, nous agrandissons votre maison, terrain plat ou en pente, avec les matériaux de nos maisons neuves.',
    entete: 'bandeTypes',
    typesTitre: 'Une extension, même sur un terrain en pente',
    typesIntro:
      'À Ambérieu, la pente n’empêche pas d’agrandir : elle décide du niveau où la pièce neuve se pose, et offre parfois un volume en plus en dessous.',
    types: [
      'Sur un terrain en pente, le pignon est souvent le côté où le sol est le plus proche du niveau de la maison.',
      'Côté aval, l’extension peut se poser sur un sous-sol semi-enterré : un garage ou un cellier en plus, sous la pièce de vie.',
      'Prolonger la pièce de vie demande de garder un sol de plain-pied : sur une pente, cela se règle par une plateforme ou un mur de soutènement.',
      'Un garage en demi-niveau se transforme en pièce, mais sa différence de hauteur avec la maison se dessine dès le plan.',
    ],
    localSurtitre: 'Ce qui change à Ambérieu-en-Bugey',
    localTitre: 'La plaine d’un côté, le relief de l’autre.',
    rangees: [
      {
        titre: 'Sous-sol, demi-niveau ou plateforme',
        paragraphes: [
          'Un terrain en pente change trois choses : la façon de poser l’extension, le volume de terre à déplacer et l’accès des engins. Selon le dénivelé, la pièce neuve se pose sur un sous-sol semi-enterré, se décale en demi-niveau ou s’installe sur une plateforme retenue par un mur.',
          'Chaque solution a un coût et une conséquence sur le plan. Nous ne donnons pas de prix au mètre carré sans avoir vu la parcelle : le chiffrage se fait sur le relevé et l’étude de sol.',
        ],
        photo: 'bandeBudget',
      },
      {
        titre: 'Plaine ou pied de relief : le sol tranche',
        paragraphes: [
          'À l’ouest d’Ambérieu, on est en général sur les alluvions de la plaine de l’Ain. À l’est, au pied du Bugey, la roche peut remonter et certains terrains comportent des éboulis. Deux jardins proches peuvent demander des fondations très différentes ; c’est à confirmer lors de l’étude de sol.',
          'Les mêmes questions se posent [à Ceyzériat, au pied du Revermont](/construction-maison-ceyzeriat), et [à Saint-Denis-en-Bugey, près de la gare d’Ambérieu](/construction-maison-saint-denis-en-bugey).',
        ],
        photo: 'maconnerie',
      },
      {
        titre: 'Une jonction dessinée, pas improvisée',
        paragraphes: [
          'Le point délicat reste la jonction : fondation, toiture sans infiltration, isolation continue, sol de plain-pied avec le reste de la maison. Sur un terrain en pente, la différence de niveau s’ajoute à ce travail : elle se dessine dès le plan, jamais en cours de chantier.',
        ],
        photo: 'bois',
      },
    ],
    urbanismeIntro: 'Le seuil se calcule sur la surface créée.',
    urbanismeLocal:
      'Un sous-sol transformé en pièce peut compter dans la surface de plancher et faire franchir un seuil. Nous faisons le calcul avec vous avant de déposer le dossier.',
    faqTitre: 'Extension à Ambérieu-en-Bugey : vos questions.',
    faq: [
      {
        q: 'Peut-on agrandir une maison sur un terrain en pente ?',
        r: 'Oui. Selon le dénivelé, l’extension se pose sur un sous-sol semi-enterré, se décale en demi-niveau ou s’installe sur une plateforme avec mur de soutènement.',
      },
      {
        q: 'Pourquoi pas de prix au mètre carré par téléphone ?',
        r: 'Parce qu’une pente change les fondations, la terre à déplacer et l’accès des engins. Le chiffrage se fait sur votre parcelle, après relevé.',
      },
      {
        q: 'Faut-il une étude de sol pour une extension ?',
        r: 'Selon le terrain. Au pied du Bugey, deux parcelles proches peuvent demander des fondations très différentes ; nous vous disons si l’étude est utile.',
      },
      {
        q: 'Quelle autorisation pour 30 m² de plus ?',
        r: 'De 20 à 40 m², une déclaration préalable en zone urbaine d’un PLU, un permis de construire ailleurs. La mairie confirme par un certificat d’urbanisme.',
      },
    ],
    appelMilieu:
      'L’estimation en ligne donne une première fourchette ; sur un terrain en pente, le chiffrage se fait ensuite après visite, avec le relevé de la parcelle.',
    appelFin: 'Un premier rendez-vous pour regarder la maison, la pente et le PLU avant tout chiffrage.',
  },
];

export const EXTENSION_PAR_SLUG: Readonly<Record<string, PageExtensionVille>> = Object.fromEntries(
  LOCALES_EXTENSION.map((l) => [l.slug, l])
);
