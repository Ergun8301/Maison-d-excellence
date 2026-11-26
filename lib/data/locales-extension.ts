import type { PageLocale } from '@/lib/data/locales';

/**
 * Trois pages « Extension de maison » : Bourg-en-Bresse, Meximieux,
 * Ambérieu-en-Bugey.
 *
 * Elles reprennent le gabarit des pages locales (components/views/Locale.tsx)
 * mais vivent à part de LOCALES : elles ne s'ajoutent ni au décompte des
 * « pages locales », ni aux listes de communes de l'accueil et de la zone
 * d'intervention.
 *
 * Même règle d'écriture que lib/data/locales.ts :
 *  - chaque page a son sujet propre, et non le même texte avec une autre
 *    commune ;
 *  - aucun chantier attribué à une commune, aucun avis, aucun chiffre nouveau
 *    propre à l'entreprise ;
 *  - ce qui vient du terrain est dit comme tel (« en général », « à confirmer ») ;
 *  - les seuils d'autorisation et les délais d'instruction sont ceux déjà
 *    publiés sur la page /renovation-extension (lib/data/extension.ts).
 */

const PHOTO_MACONNEE = {
  src: '/extension/extension-maconnee-enduit-blanc-garage.webp',
  w: 1168,
  h: 784,
  alt: 'Extension maçonnée enduite en blanc, avec porte de garage, accolée à une maison à étage',
} as const;

export const LOCALES_EXTENSION: readonly PageLocale[] = [
  /* ── Bourg-en-Bresse : l'argile et la jonction avec la maison existante ── */
  {
    slug: 'extension-maison-bourg-en-bresse',
    commune: 'Bourg-en-Bresse',
    surtitre: 'Extension de maison · Bourg-en-Bresse · Ain (01)',
    h1: ['Agrandir sa maison à', 'Bourg-en-Bresse'],
    intro: [
      'Agrandir une maison autour de Bourg-en-Bresse, c’est ajouter un volume neuf à un bâtiment qui a déjà bougé, séché et vécu sur son terrain. En Bresse, ce détail pèse plus qu’ailleurs : le sol est argileux, et c’est lui qui décide de la façon dont l’extension doit être accrochée à la maison.',
      'Nous dessinons et construisons des extensions maçonnées, en brique ou en béton cellulaire, ou à ossature bois, dans un rayon d’environ 30 km autour de la ville. Cette page dit ce qui change à Bourg et dans sa couronne.',
    ],
    blocs: [
      {
        titre: 'L’argile bressane et la jonction avec la maison existante',
        paragraphes: [
          'Les terres de Bresse comportent beaucoup d’argile : elle gonfle quand il pleut et se rétracte quand il sèche. Une maison ancienne s’est en général stabilisée sur ce mouvement. Une extension, elle, arrive avec des fondations neuves, et la jonction entre le neuf et l’ancien est l’endroit où une fissure apparaît si les deux ne travaillent pas de la même façon.',
          'C’est pourquoi nous étudions la jonction avant de dessiner la façade : fondation de l’extension, liaison avec le mur existant, toiture sans infiltration, isolation continue. Selon le terrain, une étude de sol peut être utile pour dimensionner les fondations de la partie neuve ; c’est à confirmer sur votre parcelle, et nous vous disons si elle s’impose dans votre cas.',
          'Le même sol se lit différemment d’une commune à l’autre : voyez [l’infiltration des eaux de pluie à Saint-Denis-lès-Bourg](/construction-maison-saint-denis-les-bourg) ou [le terrain issu d’une division à Péronnas](/construction-maison-peronnas). Pour le panorama complet des types d’extension, du budget et des étapes, voyez [notre page extension de maison](/renovation-extension).',
        ],
      },
      {
        titre: 'Déclaration préalable ou permis : la surface décide',
        paragraphes: [
          'Pour une extension, la procédure dépend de la surface ajoutée : de 5 à 20 m², une déclaration préalable ; de 20 à 40 m², une déclaration préalable en zone urbaine d’un PLU, un permis de construire ailleurs ; au-delà de 40 m², un permis de construire. Au-delà de 150 m² de surface de plancher après travaux, l’architecte est obligatoire.',
          'Le zonage de votre parcelle se consulte sur le Géoportail de l’urbanisme. Pour une réponse écrite de la mairie, demandez un certificat d’urbanisme. Une déclaration préalable s’instruit en un mois, un permis de maison individuelle en deux mois, dossier complet.',
        ],
      },
      {
        titre: 'Lotissement : un règlement de plus que le PLU',
        paragraphes: [
          'Beaucoup de maisons de la couronne de Bourg sont en lotissement. Un règlement de lotissement s’ajoute au PLU et peut se montrer plus exigeant : implantation, pente de toit, teintes d’enduit, clôtures. Nous le lisons avant de tracer l’extension, pas après le refus.',
        ],
      },
      {
        titre: 'Une extension qui garde les proportions de la maison',
        paragraphes: [
          'La maison bressanne est longue, basse, largement débordante de toiture. Une extension n’a pas à l’imiter, mais elle gagne à reprendre ses proportions : prolonger le faîtage plutôt que d’y accoler un cube, reprendre la pente de toit, accorder l’enduit. À l’inverse, un volume contemporain assumé, à toit plat, fonctionne quand il est franchement différent plutôt que vaguement semblable.',
        ],
      },
    ],
    photo: PHOTO_MACONNEE,
    faqTitre: 'Questions qu’on nous pose pour une extension à Bourg-en-Bresse',
    faq: [
      {
        q: 'Une extension de 25 m² demande-t-elle un permis de construire à Bourg-en-Bresse ?',
        r: 'Entre 20 et 40 m², c’est une déclaration préalable si votre terrain est en zone urbaine d’un PLU, et un permis de construire sinon. Le zonage exact se lit sur le Géoportail de l’urbanisme, et la mairie le confirme par écrit avec un certificat d’urbanisme.',
      },
      {
        q: 'L’argile bressane rend-elle une extension plus risquée ?',
        r: 'Elle demande de l’attention à la jonction avec la maison existante et au dimensionnement des fondations de la partie neuve. Selon le terrain, une étude de sol aide à trancher ; nous vous disons si elle est utile dans votre cas.',
      },
      {
        q: 'Mon terrain est en lotissement : que change-t-il ?',
        r: 'Le règlement du lotissement s’ajoute au PLU. Il peut encadrer l’implantation, la toiture, les teintes et les clôtures. Nous le lisons avant de dessiner l’extension.',
      },
      {
        q: 'Pouvez-vous construire l’extension et la relier à la maison ?',
        r: 'Oui. Nous dessinons l’extension, déposons le dossier d’urbanisme et construisons, jonction avec l’existant comprise, sur un terrain situé dans notre zone d’intervention autour de Bourg-en-Bresse.',
      },
    ],
    ctaTexte:
      'L’estimation en ligne donne une première fourchette ; pour une extension, le chiffrage se fait ensuite après visite de votre maison. Vous pouvez aussi venir au bureau de Meximieux avec son plan : c’est plus rapide qu’un formulaire.',
    invitation: 'Pour parler de votre extension autour de Bourg-en-Bresse, appelez-nous au',
  },

  /* ── Meximieux : les abords de Pérouges et l'avis de l'architecte ─────── */
  {
    slug: 'extension-maison-meximieux',
    commune: 'Meximieux',
    surtitre: 'Extension de maison · Meximieux · Ain (01)',
    h1: ['Agrandir sa maison à', 'Meximieux'],
    intro: [
      'Notre bureau est au 6 rue de Genève, à Meximieux. Quand vous agrandissez une maison ici, vous parlez à une entreprise installée dans la commune : vous pouvez venir au bureau avec le plan de votre maison pour en discuter.',
      'Autour de Meximieux, deux choses reviennent : la proximité de Pérouges, qui peut ajouter l’avis de l’Architecte des Bâtiments de France, et la Côtière, dont l’eau de coteau se lit sur place.',
    ],
    blocs: [
      {
        titre: 'Près de Pérouges : quand l’architecte des Bâtiments de France donne son avis',
        paragraphes: [
          'Si votre parcelle se situe dans le périmètre de protection d’un monument classé, l’instruction du dossier peut comporter l’avis de l’Architecte des Bâtiments de France. Il porte sur l’aspect extérieur de l’extension : matériau, couleur d’enduit, forme de toiture, menuiseries.',
          'Ce passage allonge le délai d’instruction : deux mois pour une déclaration préalable au lieu d’un, trois mois pour un permis au lieu de deux. Mieux vaut le savoir avant de fixer une date de chantier. La mairie ou le Géoportail de l’urbanisme disent si votre adresse est concernée.',
        ],
      },
      {
        titre: 'Le pied de la Côtière : l’eau se lit avant de bâtir',
        paragraphes: [
          'Au pied du coteau, l’eau de ruissellement et l’état du sol varient d’une rue à l’autre. Une extension de plain-pied posée sur la pente naturelle ne se traite pas comme une extension en plaine : drainage, gestion des eaux de pluie, niveau du sol fini par rapport au jardin se décident sur le relevé de terrain.',
          'Voyez aussi ce que demande [le pied de la Côtière à Bourg-Saint-Christophe](/construction-maison-bourg-saint-christophe), à trois kilomètres, ou [les petites parcelles de Montluel](/construction-maison-montluel) quand la place manque. Pour le panorama complet des types d’extension, du budget et des étapes, voyez [notre page extension de maison](/renovation-extension).',
        ],
      },
      {
        titre: 'Surélever, élargir ou prolonger : ce que le terrain permet',
        paragraphes: [
          'Sur une petite parcelle, l’emprise au sol maximale du PLU limite ce qu’on peut ajouter côté jardin. Il reste alors à étudier la surélévation ou la transformation d’un garage. Chaque option a ses règles de hauteur, de recul par rapport aux limites et de stationnement à conserver, que nous lisons dans le PLU avant le premier trait.',
        ],
      },
    ],
    photo: PHOTO_MACONNEE,
    faqTitre: 'Questions qu’on nous pose pour une extension à Meximieux',
    faq: [
      {
        q: 'Mon terrain est près de Pérouges : l’extension sera-t-elle plus longue à autoriser ?',
        r: 'Si votre parcelle se situe dans le périmètre de protection d’un monument classé, l’avis de l’Architecte des Bâtiments de France s’ajoute et allonge l’instruction : deux mois pour une déclaration préalable, trois pour un permis. Le Géoportail de l’urbanisme ou la mairie confirment si vous êtes concerné.',
      },
      {
        q: 'Peut-on voir le bureau avant de se décider ?',
        r: 'Oui, au 6 rue de Genève, 01800 Meximieux, du lundi au vendredi de 9h à 19h. Le premier rendez-vous est gratuit, et vous pouvez venir avec le plan de votre maison.',
      },
      {
        q: 'Quelle extension choisir sur une petite parcelle ?',
        r: 'Cela dépend de l’emprise au sol permise par le PLU. Quand le jardin ne suffit pas, la surélévation ou la transformation d’un garage sont à étudier. Nous le lisons avec vous, règle par règle.',
      },
      {
        q: 'Faites-vous aussi les plans et le dossier d’urbanisme ?',
        r: 'Oui : nous dessinons l’extension, déposons la déclaration préalable ou le permis, puis construisons.',
      },
    ],
    ctaTexte:
      'L’estimation en ligne donne une première fourchette ; pour une extension, le chiffrage se fait ensuite après visite de votre maison. Passez au bureau avec son plan et une photo du jardin : le rendez-vous affine le reste.',
    invitation: 'Pour parler de votre extension à Meximieux, appelez le bureau au',
  },

  /* ── Ambérieu-en-Bugey : la pente et le sous-sol ───────────────────────── */
  {
    slug: 'extension-maison-amberieu-en-bugey',
    commune: 'Ambérieu-en-Bugey',
    surtitre: 'Extension de maison · Ambérieu-en-Bugey · Ain (01)',
    h1: ['Agrandir sa maison à', 'Ambérieu-en-Bugey'],
    intro: [
      'Ambérieu-en-Bugey est à un quart d’heure de notre bureau de Meximieux, là où la plaine de l’Ain s’arrête et où le Bugey commence. Cette frontière se lit dans les jardins : agrandir une maison de plaine et agrandir une maison de pied de falaise ne se fait pas de la même façon.',
      'La pente n’est pas un obstacle pour une extension : elle donne parfois un volume en plus, un sous-sol ou un garage en demi-niveau, à condition d’être prise en compte dès le plan.',
    ],
    blocs: [
      {
        titre: 'Terrain en pente : sous-sol, demi-niveau ou plateforme',
        paragraphes: [
          'Un terrain en pente change trois choses : la façon de poser l’extension, le volume de terre à déplacer, et l’accès des engins. Selon le dénivelé, l’extension peut se poser sur un sous-sol semi-enterré, se décaler en demi-niveau par rapport à la maison, ou s’installer sur une plateforme retenue par un mur de soutènement.',
          'Chacune de ces solutions a un coût et une conséquence sur le plan : un sous-sol donne du volume, un décalage de niveaux donne des hauteurs sous plafond inhabituelles, une plateforme donne du terrain plat autour de la construction. Nous ne donnons pas de fourchette au mètre carré sans avoir vu la parcelle : le chiffrage se fait sur le relevé et sur l’étude de sol.',
        ],
      },
      {
        titre: 'Plaine ou pied de relief : le sol tranche',
        paragraphes: [
          'À l’ouest d’Ambérieu, on est en général sur les alluvions de la plaine de l’Ain. À l’est, on arrive au pied du relief du Bugey, où la roche peut remonter et où certains terrains comportent des éboulis. Deux jardins éloignés de quelques centaines de mètres peuvent demander des fondations très différentes ; c’est à confirmer lors de l’étude de sol.',
          'Le même contraste se retrouve [à Ceyzériat, au pied du Revermont](/construction-maison-ceyzeriat), et [à Saint-Denis-en-Bugey, près de la gare d’Ambérieu](/construction-maison-saint-denis-en-bugey), les mêmes questions se posent.',
        ],
      },
      {
        titre: 'Une extension reliée proprement à la maison',
        paragraphes: [
          'Quel que soit le terrain, le point délicat reste la jonction entre l’ancien et le neuf : fondation, toiture sans infiltration, isolation continue, sol de plain-pied avec le reste de la maison. Sur un terrain en pente, la différence de niveau entre la maison et l’extension s’ajoute à ce travail, ce qui se dessine dès le plan et jamais en cours de chantier. Pour le panorama complet des types d’extension, du budget et des étapes, voyez [notre page extension de maison](/renovation-extension).',
        ],
      },
    ],
    photo: PHOTO_MACONNEE,
    faqTitre: 'Questions qu’on nous pose pour une extension à Ambérieu-en-Bugey',
    faq: [
      {
        q: 'Peut-on agrandir une maison sur un terrain en pente ?',
        r: 'Oui. Selon le dénivelé, l’extension se pose sur un sous-sol semi-enterré, se décale en demi-niveau ou s’installe sur une plateforme avec mur de soutènement. Le choix se fait sur le relevé du terrain et l’étude de sol.',
      },
      {
        q: 'Pourquoi ne pas donner un prix au mètre carré par téléphone ?',
        r: 'Parce qu’un terrain en pente change les fondations, la terre à déplacer et l’accès des engins. Le chiffrage se fait sur votre parcelle, après relevé.',
      },
      {
        q: 'Faut-il une étude de sol pour une extension ?',
        r: 'Selon le terrain. Dans le relief du Bugey, deux parcelles proches peuvent demander des fondations très différentes ; nous vous disons si l’étude est utile dans votre cas.',
      },
      {
        q: 'Quelle autorisation pour 30 m² en plus ?',
        r: 'De 20 à 40 m², une déclaration préalable en zone urbaine d’un PLU, un permis de construire ailleurs. La mairie confirme par un certificat d’urbanisme.',
      },
    ],
    ctaTexte:
      'L’estimation en ligne donne une première fourchette ; pour une extension sur terrain en pente, le chiffrage se fait ensuite après visite de votre maison, avec le relevé de la parcelle.',
    invitation: 'Pour parler de votre extension à Ambérieu-en-Bugey, appelez-nous au',
  },
];

export const EXTENSION_PAR_SLUG: Readonly<Record<string, PageLocale>> = Object.fromEntries(
  LOCALES_EXTENSION.map((l) => [l.slug, l])
);
