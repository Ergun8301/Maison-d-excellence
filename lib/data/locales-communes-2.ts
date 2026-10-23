import type { PageLocale } from '@/lib/data/locales';

/**
 * Huit communes de plus : Saint-Denis-en-Bugey et Château-Gaillard (zone
 * d'Ambérieu-en-Bugey), Bourg-Saint-Christophe et Villieu-Loyes-Mollon (zone de
 * Meximieux), Polliat, Servas, Jasseron et Buellas (zone de Bourg-en-Bresse).
 * Elles s'ajoutent aux douze de lib/data/locales.ts, dont elles reprennent le
 * gabarit et les règles d'écriture (voir l'en-tête de ce fichier).
 *
 * Ce qui est écrit ici vient de deux sources, et d'elles seules :
 *
 *  - la fiche de chaque commune sur Wikipédia (situation, distances données
 *    par la fiche, communes limitrophes, routes, hameaux, classement Insee) ;
 *  - des règles générales, présentées comme des points à vérifier auprès de la
 *    mairie : classement sonore des voies, zonage du PLU, ruissellement au pied
 *    d'un coteau, étude de sol.
 *
 * Rien n'est inventé : ni habitants, ni PLU, ni prix, ni délai, ni chantier
 * attribué à une commune. Là où la fiche d'une commune ne dit rien, la page
 * non plus. Les directions par rapport à Bourg-en-Bresse (Buellas à l'ouest,
 * Servas au sud) se déduisent des coordonnées publiées dans ces fiches.
 *
 * Chaque page a son propre sujet :
 *
 *   Saint-Denis-en-Bugey   la banlieue d'Ambérieu : la gare, la route et le rail
 *   Château-Gaillard       un bourg rural en quatre ensembles, dont une zone d'activités
 *   Bourg-Saint-Christophe le pied de la Côtière : l'eau qui descend du coteau
 *   Villieu-Loyes-Mollon   trois villages réunis en 1994, deux hameaux à l'écart
 *   Polliat                la gare TER, la D 1079 et l'A40 à dix kilomètres de Bourg
 *   Servas                 un village traversé par la route de Lyon, entre deux usines
 *   Jasseron               entre forêt, autoroute et aérodrome
 *   Buellas                soixante mètres de relief entre Bresse et Dombes
 *
 * Les photos sont celles des réalisations déjà publiées sur le site. Le texte
 * alternatif décrit l'image, sans la rattacher à la commune.
 */
export const LOCALES_COMMUNES_2: readonly PageLocale[] = [
  /* ── Saint-Denis-en-Bugey ──────────────────────────────────────────────── */
  {
    slug: 'construction-maison-saint-denis-en-bugey',
    commune: 'Saint-Denis-en-Bugey',
    surtitre: 'Saint-Denis-en-Bugey · Ain (01)',
    h1: ['Construire une maison à', 'Saint-Denis-en-Bugey', 'Ambérieu-en-Bugey'],
    intro: [
      'Saint-Denis-en-Bugey touche Ambérieu-en-Bugey : l’Insee la range dans l’unité urbaine de la ville, comme commune de banlieue. Elle se trouve dans le Bugey, et la gare d’Ambérieu est à deux kilomètres de son centre.',
      'Pour qui veut construire, cette proximité est le premier argument et la première question : un terrain proche de tout est aussi un terrain proche des voies qui mènent à tout.',
    ],
    photo: {
      src: '/photos/maison-plain-pied-en-l.webp',
      w: 1478,
      h: 1064,
      alt: 'Maison de plain-pied en L, toiture tuile, construite dans l’Ain',
    },
    blocs: [
      {
        titre: 'Une commune de banlieue, faite de maisons individuelles',
        paragraphes: [
          'D’après l’Insee, près de trois quarts des logements de la commune sont des maisons individuelles : 74,7 % en 2022, contre un quart d’appartements. Construire une maison neuve à Saint-Denis-en-Bugey, c’est donc rejoindre le paysage dominant du quartier plutôt que d’y poser un gabarit étranger.',
          'Une partie des quartiers récents s’est bâtie sur d’anciens prés, devenus un quartier résidentiel au XXIe siècle. Sur ce genre de terrain, la parcelle peut venir d’un lotissement ou d’une division : le règlement du lotissement s’ajoute alors au PLU, et il se lit avant de dessiner, pour l’implantation, les hauteurs et les clôtures. [Nos modèles de maisons](/nos-modeles) donnent un point de départ, mais le plan se redessine autour de la parcelle.',
        ],
      },
      {
        titre: 'La gare à deux kilomètres, la route et le rail dans le décor',
        paragraphes: [
          'La ligne ferroviaire d’Ambérieu à Lyon traverse le territoire communal, et la RD 1075, ancienne route nationale 75 de Bourg-en-Bresse à Sisteron, traverse la commune. Pour un actif qui prend le train, c’est un atout. Pour une parcelle qui borde la voie ou la route, c’est une donnée de plan : où placer les chambres, où poser le jardin, quelles menuiseries choisir.',
          'Un arrêté préfectoral peut classer certaines voies bruyantes et exiger un isolement acoustique renforcé des façades les plus proches. La mairie dit si une parcelle se trouve dans un tel secteur ; nous posons la question avant de chiffrer, parce que cet isolement se prévoit dès le plan et non après. [Le bruit de l’A42 à Dagneux](/construction-maison-dagneux) pose le même sujet, sur une autre infrastructure.',
        ],
      },
      {
        titre: 'Un voisinage de communes différentes',
        paragraphes: [
          'Saint-Denis-en-Bugey est limitrophe de Château-Gaillard, d’Ambérieu-en-Bugey, de Bettant, de Leyment et d’Ambutrix, et appartient à la communauté de communes de la Plaine de l’Ain. [Château-Gaillard](/construction-maison-chateau-gaillard), voisine immédiate, est un bourg rural : on y construit dans des conditions qui ne sont pas celles d’une commune de banlieue.',
          'Autour d’Ambérieu, on passe de la plaine au relief en quelques kilomètres, et [la page de la ville](/construction-maison-amberieu-en-bugey) détaille ce que la pente change au plan. Seul le relevé de votre parcelle dit ce qu’il en est ici. Dans la même zone d’intervention, [Lagnieu](/construction-maison-lagnieu) pose de son côté la question du sol.',
        ],
      },
      {
        titre: 'Avant d’acheter',
        paragraphes: [
          'Saint-Denis-en-Bugey appartient à l’aire d’attraction d’Ambérieu-en-Bugey, dont elle fait partie du pôle principal, avec la gare d’Ambérieu à deux kilomètres de son centre. Cette proximité fait la valeur d’une parcelle, et en fait aussi le prix : un budget se compare parcelle par parcelle, terrain et maison ensemble.',
          'Un certificat d’urbanisme dit si une parcelle est constructible avant que vous n’engagiez quoi que ce soit. Si vous cherchez encore, [nos terrains à bâtir](/terrains) montrent ce que nous suivons dans l’Ain ; si vous avez déjà trouvé, [écrivez-nous](/contact) avec le plan de votre parcelle.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-amberieu-en-bugey',
      commune: 'Ambérieu-en-Bugey',
      texte:
        'Saint-Denis-en-Bugey est dans notre zone d’intervention autour d’Ambérieu-en-Bugey. Notre bureau est à Meximieux : [la page de Meximieux](/construction-maison-meximieux) donne l’adresse et les horaires pour un premier rendez-vous.',
    },
    faqTitre: 'Questions qu’on nous pose à Saint-Denis-en-Bugey',
    faq: [
      {
        q: 'Saint-Denis-en-Bugey est-elle proche d’Ambérieu-en-Bugey ?',
        r: 'Oui : les deux communes sont limitrophes, Saint-Denis-en-Bugey fait partie de l’unité urbaine d’Ambérieu et la gare d’Ambérieu est à 2 km de son centre.',
      },
      {
        q: 'Quelle route traverse la commune ?',
        r: 'La RD 1075, ancienne route nationale 75, qui relie Bourg-en-Bresse à Sisteron. La ligne de chemin de fer d’Ambérieu à Lyon traverse aussi le territoire.',
      },
      {
        q: 'Une maison proche de la route ou du rail demande-t-elle un isolement particulier ?',
        r: 'Elle peut y être soumise si la parcelle se trouve dans un secteur affecté par le bruit, classé par arrêté préfectoral. La mairie renseigne parcelle par parcelle.',
      },
      {
        q: 'Quelle part des logements sont des maisons individuelles ?',
        r: 'D’après l’Insee, 74,7 % des logements de la commune en 2022, contre 25,1 % d’appartements.',
      },
      {
        q: 'De quelle intercommunalité dépend la commune ?',
        r: 'De la communauté de communes de la Plaine de l’Ain.',
      },
    ],
    ctaTexte:
      'Le simulateur donne la maison seule. Dites-nous quelle parcelle vous visez à Saint-Denis-en-Bugey et ce qui la borde : route, voie ferrée ou rue calme.',
    invitation: 'Pour voir une maison en cours de chantier près d’Ambérieu, appelez-nous au',
  },

  /* ── Château-Gaillard ──────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-chateau-gaillard',
    commune: 'Château-Gaillard',
    surtitre: 'Château-Gaillard · Ain (01)',
    h1: ['Construire une maison à', 'Château-Gaillard', 'Ambérieu-en-Bugey'],
    intro: [
      'Château-Gaillard se trouve dans la plaine de l’Ain, à trois kilomètres d’Ambérieu-en-Bugey. Elle garde les ruines d’un château savoyard bâti dans les années 1340 par les comtes de Savoie : il n’en reste qu’un pan de mur.',
      'À la différence de sa voisine Saint-Denis-en-Bugey, l’Insee la classe parmi les bourgs ruraux, hors unité urbaine : c’est un village, fait de quartiers distincts, et le choix du quartier compte autant que celui de la parcelle.',
    ],
    photo: {
      src: '/photos/maison-plain-pied-contemporaine.webp',
      w: 1536,
      h: 1024,
      alt: 'Maison de plain-pied contemporaine, toiture ardoisée, garage intégré',
    },
    blocs: [
      {
        titre: 'Quatre ensembles, quatre façons de construire',
        paragraphes: [
          'Le territoire se lit en quatre ensembles : le bourg, groupé autour de l’église et de la mairie sur une trentaine d’hectares ; la zone d’activités En Beauvoir, d’une quarantaine d’hectares, séparée du bourg ; le hameau de Cormoz, d’environ vingt-cinq hectares ; et un quartier de pavillons de la seconde moitié du XXe siècle, d’une quarantaine d’hectares, en bordure de la déviation d’Ambérieu.',
          'Pour une maison neuve, ces ensembles ne se valent pas. Dans le bourg, la parcelle peut s’insérer entre des maisons existantes dont il faut lire les hauteurs et les vues. Dans un hameau comme Cormoz, la distance aux réseaux et l’accès pèsent davantage. Près du quartier de pavillons, c’est l’alignement des maisons voisines qui guide le plan.',
          'Les règles d’implantation peuvent ne pas être les mêmes d’un ensemble à l’autre : le PLU de la commune reste la seule référence, et c’est à la mairie qu’on le consulte. Nous lisons le règlement de la zone avant de dessiner, jamais après, et nous le rapprochons de ce que le relevé de la parcelle montre.',
        ],
      },
      {
        titre: 'Le voisinage d’une zone d’activités',
        paragraphes: [
          'La zone d’activités En Beauvoir est séparée du bourg. Pour une parcelle qui s’en approche, la question est très concrète : ce qui s’y trouve, le passage des camions, les horaires. Un passage sur place un jour de semaine, à l’heure de pointe, renseigne mieux qu’un plan.',
          'Le plan de la maison en tient compte : les pièces de nuit du côté calme, l’entrée et le garage du côté de la rue. C’est le genre de choix qui se fait dès le premier rendez-vous, [terrain en main](/contact).',
        ],
      },
      {
        titre: 'Une plaine, un sol à vérifier',
        paragraphes: [
          'Nous ne présumons pas de la nature du sol d’une parcelle de la plaine de l’Ain : l’étude de sol, G1 puis G2 selon le terrain, la confirme avant le permis de construire. [Les étapes d’un projet](/blog/etapes-projet-construction) placent ces études au bon endroit, avant que les fondations ne soient arrêtées.',
          'Sur un terrain plat, la maison de plain-pied est souvent la plus simple à dessiner. [Nos modèles de maisons](/nos-modeles) en proposent de plusieurs formes ; la parcelle décide de celle qui s’y pose le mieux.',
        ],
      },
      {
        titre: 'Des communes voisines proches',
        paragraphes: [
          'Château-Gaillard est limitrophe de Priay, d’Ambronay, de Villette-sur-Ain, de Saint-Maurice-de-Rémens, d’Ambérieu-en-Bugey, de Leyment et de Saint-Denis-en-Bugey, et appartient à la communauté de communes de la Plaine de l’Ain. [Saint-Denis-en-Bugey](/construction-maison-saint-denis-en-bugey), qui touche la commune, relève davantage de la banlieue d’Ambérieu ; [Lagnieu](/construction-maison-lagnieu), dans la même zone d’intervention, est elle aussi en plaine.',
          'Si vous cherchez un terrain, [nos terrains à bâtir](/terrains) rassemblent ceux que nous suivons.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-amberieu-en-bugey',
      commune: 'Ambérieu-en-Bugey',
      texte:
        'Château-Gaillard est dans notre zone d’intervention autour d’Ambérieu-en-Bugey, à trois kilomètres de la ville. Notre bureau est à Meximieux : [la page de Meximieux](/construction-maison-meximieux) donne l’adresse et les horaires.',
    },
    faqTitre: 'Questions qu’on nous pose à Château-Gaillard',
    faq: [
      {
        q: 'À quelle distance d’Ambérieu-en-Bugey se trouve Château-Gaillard ?',
        r: 'À trois kilomètres, dans la plaine de l’Ain.',
      },
      {
        q: 'Quelles communes entourent Château-Gaillard ?',
        r: 'Priay, Ambronay, Villette-sur-Ain, Saint-Maurice-de-Rémens, Ambérieu-en-Bugey, Leyment et Saint-Denis-en-Bugey.',
      },
      {
        q: 'Qu’est-ce que Cormoz ?',
        r: 'Un hameau de la commune, d’environ vingt-cinq hectares, distinct du bourg.',
      },
      {
        q: 'La commune a-t-elle une zone d’activités ?',
        r: 'Oui : En Beauvoir, d’une quarantaine d’hectares, séparée du bourg.',
      },
      {
        q: 'De quelle intercommunalité dépend la commune ?',
        r: 'De la communauté de communes de la Plaine de l’Ain.',
      },
    ],
    ctaTexte:
      'Le simulateur donne la maison seule. À Château-Gaillard, dites-nous dans quel quartier se trouve votre parcelle, bourg, Cormoz ou pavillons : le plan n’en tient pas le même compte.',
    invitation: 'Pour voir une maison de plain-pied en cours de chantier, appelez-nous au',
  },

  /* ── Bourg-Saint-Christophe ────────────────────────────────────────────── */
  {
    slug: 'construction-maison-bourg-saint-christophe',
    commune: 'Bourg-Saint-Christophe',
    surtitre: 'Bourg-Saint-Christophe · Ain (01)',
    h1: ['Construire une maison à', 'Bourg-Saint-Christophe', 'Meximieux'],
    intro: [
      'Bourg-Saint-Christophe se trouve au pied de la Côtière, entre Meximieux, Pérouges et Béligneux. Meximieux et Pérouges sont à trois kilomètres, et le centre de Lyon à trente-quatre.',
      'L’Insee en fait un bourg rural, rattaché à l’unité urbaine de Meximieux et à l’aire d’attraction de Lyon : un village qui dépend des deux villes.',
    ],
    photo: {
      src: '/photos/maison-traditionnelle-etage.webp',
      w: 1490,
      h: 1056,
      alt: 'Maison traditionnelle à étage, enduit ton pierre, construite dans l’Ain',
    },
    blocs: [
      {
        titre: 'Au pied du coteau, l’eau descend',
        paragraphes: [
          'Une parcelle au pied d’un coteau reçoit ce que le versant lui envoie : eaux de ruissellement après un orage, parfois humidité du sol. La Côtière est un coteau, et Bourg-Saint-Christophe est à son pied. Cela ne rend pas un terrain impropre à la construction, mais cela se lit sur place : la pente de la parcelle voisine, le fossé, la façon dont l’eau s’écoule.',
          'Selon la parcelle, on remonte le niveau fini de la maison, on prévoit un drainage ou on garde un vide sanitaire. Rien de cela ne se décide à l’aveugle : le relevé du terrain et l’étude de sol, G1 puis G2, disent ce qui convient. [Les étapes d’un projet](/blog/etapes-projet-construction) placent ces études avant le permis de construire.',
        ],
      },
      {
        titre: 'Un bourg, quelques lieux-dits, des champs autour',
        paragraphes: [
          'La commune compte, outre le bourg, plusieurs lieux-dits habités : la Ruette, les Brosses, Marphoz, Mas Choquet. Selon qu’on construit dans le bourg ou dans l’un d’eux, le raccordement aux réseaux et l’assainissement ne sont pas les mêmes ; le service urbanisme de la mairie renseigne parcelle par parcelle.',
          'Autour du bourg, la parcelle voisine peut être cultivée. [Le voisinage agricole à Montagnat](/construction-maison-montagnat) décrit les distances à vérifier, un sujet qui revient ici.',
        ],
      },
      {
        titre: 'Plus de champs que de maisons',
        paragraphes: [
          'Selon l’occupation des sols de 2018, les zones urbanisées couvraient 12 % du territoire, contre 65 % de terres arables, 16,6 % de zones agricoles hétérogènes et 6,1 % de forêts. Le bâti est donc l’exception dans le paysage, et chaque parcelle constructible tient à un zonage précis du PLU, que la mairie confirme. Un certificat d’urbanisme se demande avant toute promesse de vente.',
          'Bourg-Saint-Christophe est limitrophe de Faramans, de Bressolles, de Pérouges et de Béligneux, et appartient à la communauté de communes de la Plaine de l’Ain. À trois kilomètres, Meximieux a sa gare sur la ligne Lyon–Ambérieu : pour un projet dont l’un des membres prend le train, la distance entre la parcelle et la gare est un critère à mesurer sur place.',
        ],
      },
      {
        titre: 'À trois kilomètres du bureau',
        paragraphes: [
          'Notre bureau est au 6 rue de Genève, à Meximieux, à trois kilomètres du bourg : un premier rendez-vous ou une visite de parcelle ne demande pas de long trajet. [La page de Meximieux](/construction-maison-meximieux) détaille le bureau et les abords de Pérouges.',
          'La Côtière se prolonge vers [Montluel](/construction-maison-montluel), où les parcelles sont plus petites, et [Villieu-Loyes-Mollon](/construction-maison-villieu-loyes-mollon) est elle aussi au pied du coteau : chacune a sa page.',
        ],
      },
      {
        titre: 'Avant d’acheter',
        paragraphes: [
          'Un certificat d’urbanisme dit si la parcelle est constructible. Pour partir d’un plan et d’un budget, [nos modèles de maisons](/nos-modeles) servent de base ; pour chercher un terrain, voyez [ceux que nous suivons](/terrains) ; pour en parler, [le formulaire de contact](/contact) est le plus court chemin.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-meximieux',
      commune: 'Meximieux',
      texte:
        'Bourg-Saint-Christophe est dans notre zone d’intervention autour de Meximieux, ville où se trouve notre bureau, à trois kilomètres du bourg.',
    },
    faqTitre: 'Questions qu’on nous pose à Bourg-Saint-Christophe',
    faq: [
      {
        q: 'À quelle distance de Meximieux se trouve Bourg-Saint-Christophe ?',
        r: 'À trois kilomètres, comme de Pérouges. Le centre de Lyon est à trente-quatre kilomètres.',
      },
      {
        q: 'Dans quelle région naturelle se trouve la commune ?',
        r: 'Au pied de la Côtière de l’Ain, entre Meximieux, Pérouges et Béligneux.',
      },
      {
        q: 'Quelles communes la bordent ?',
        r: 'Faramans, Bressolles, Pérouges et Béligneux.',
      },
      {
        q: 'Quels lieux-dits compte la commune en dehors du bourg ?',
        r: 'La Ruette, les Brosses, Marphoz et Mas Choquet.',
      },
      {
        q: 'Un terrain au pied de la Côtière demande-t-il une précaution ?',
        r: 'Il faut regarder le ruissellement et le niveau de la parcelle par rapport à la pente voisine. Le relevé du terrain et l’étude de sol disent si un drainage ou un niveau fini plus haut est utile.',
      },
    ],
    ctaTexte:
      'Le simulateur suppose un terrain sans contrainte d’eau. Au pied de la Côtière, dites-nous ce que vous voyez autour de la parcelle : nous ajoutons le terrassement et les fondations au chiffrage.',
    invitation: 'Pour voir une maison en cours de chantier près de Meximieux, appelez-nous au',
  },

  /* ── Villieu-Loyes-Mollon ──────────────────────────────────────────────── */
  {
    slug: 'construction-maison-villieu-loyes-mollon',
    commune: 'Villieu-Loyes-Mollon',
    surtitre: 'Villieu-Loyes-Mollon · Ain (01)',
    h1: ['Construire une maison à', 'Villieu-Loyes-Mollon', 'Meximieux'],
    intro: [
      'Villieu-Loyes-Mollon s’étend au pied du coteau de la Côtière, entre Meximieux et Pont-d’Ain. Meximieux est à trois kilomètres, et Lyon à trente-huit.',
      'Le nom dit l’essentiel : trois anciens villages, Villieu, Loyes et Mollon, ont été réunis en une seule commune par arrêté préfectoral du 21 décembre 1994. Choisir où construire, c’est d’abord choisir lequel.',
    ],
    photo: {
      src: '/photos/maison-contemporaine-etage-porche.webp',
      w: 1484,
      h: 1060,
      alt: 'Maison contemporaine à étage avec porche d’entrée et garage double',
    },
    blocs: [
      {
        titre: 'Trois villages réunis, trois centres',
        paragraphes: [
          'Une commune née d’une fusion garde souvent les traces de ses origines, même si le PLU est unique. Pour une parcelle, la question n’est donc pas seulement « Villieu-Loyes-Mollon », mais « dans quel village, et à quelle distance du centre où l’on fait ses courses et où l’on dépose les enfants ».',
          'La fusion de 1994 a réuni les trois villages sous un même conseil municipal, mais elle n’a pas rapproché leurs distances : entre le cœur de Villieu et son hameau de Buchin, il y a trois kilomètres. Pour une famille, cela se traduit en trajets : école, commerces, médecin. Cela se mesure sur la carte, parcelle par parcelle, avant de choisir.',
          'Nous commençons par là : situer la parcelle, lire le plan de zonage, repérer les réseaux et l’accès. Le reste suit. [Nos modèles de maisons](/nos-modeles) donnent des plans de départ, que nous adaptons au terrain.',
        ],
      },
      {
        titre: 'Deux hameaux à l’écart',
        paragraphes: [
          'La commune compte des hameaux. Buchin appartient à Villieu et se trouve à trois kilomètres du cœur du village ; Monthoz appartient à Loyes, à un kilomètre trois du centre. Ces distances comptent : pour le raccordement, pour l’accès, pour les trajets quotidiens.',
          'Dans un hameau, ce qui est constructible tient au zonage du PLU : un certificat d’urbanisme répond pour une parcelle précise, avant la promesse de vente. Si vous cherchez encore un terrain, [nos terrains à bâtir](/terrains) rassemblent ceux que nous suivons.',
        ],
      },
      {
        titre: 'Entre Meximieux et Pont-d’Ain, au pied du coteau',
        paragraphes: [
          'Villieu-Loyes-Mollon est limitrophe de Crans, de Châtillon-la-Palud, de Saint-Maurice-de-Rémens, de Rignieux-le-Franc, de Chazey-sur-Ain et de Meximieux. Notre bureau est à Meximieux, à trois kilomètres : [la page de Meximieux](/construction-maison-meximieux) donne l’adresse et les horaires pour un premier rendez-vous.',
          'À l’autre bout de cet axe, [Pont-d’Ain](/construction-maison-pont-d-ain) pose la question de l’eau sous un autre angle, celle du risque d’inondation ; [Bourg-Saint-Christophe](/construction-maison-bourg-saint-christophe), elle aussi au pied de la Côtière, celle du ruissellement. Au pied d’un coteau comme au bord d’une rivière, la parcelle se lit avant de se payer.',
        ],
      },
      {
        titre: 'Une petite ville isolée selon l’Insee',
        paragraphes: [
          'L’Insee range Villieu-Loyes-Mollon parmi les petites villes isolées, c’est-à-dire une unité urbaine formée d’une seule commune. Elle est à trente-huit kilomètres de Lyon et appartient à la communauté de communes de la Plaine de l’Ain. Meximieux, à trois kilomètres, a sa gare sur la ligne Lyon–Ambérieu : pour un projet dont l’un des deux membres travaille à Lyon, la distance entre la parcelle et cette gare est le critère à mesurer.',
        ],
      },
      {
        titre: 'Un territoire d’abord agricole',
        paragraphes: [
          'Les zones urbanisées ne couvraient que 12,3 % de la commune en 2018 : le reste est surtout agricole. Une zone agricole n’accueille pas de maison neuve, hors exceptions : c’est le plan de zonage du PLU qui dit où la construction est permise, et la mairie qui le confirme. [Un message](/contact) avec le numéro de parcelle suffit à lancer la vérification.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-meximieux',
      commune: 'Meximieux',
      texte:
        'Villieu-Loyes-Mollon est dans notre zone d’intervention autour de Meximieux, ville où se trouve notre bureau, à trois kilomètres.',
    },
    faqTitre: 'Questions qu’on nous pose à Villieu-Loyes-Mollon',
    faq: [
      {
        q: 'Pourquoi le nom compte-t-il trois villages ?',
        r: 'Villieu, Loyes et Mollon ont été réunis en une seule commune par arrêté préfectoral du 21 décembre 1994.',
      },
      {
        q: 'Quels hameaux compte la commune ?',
        r: 'Buchin, hameau de Villieu à trois kilomètres du cœur du village, et Monthoz, hameau de Loyes à un kilomètre trois du centre.',
      },
      {
        q: 'À quelle distance de Meximieux ?',
        r: 'À trois kilomètres. Lyon est à trente-huit kilomètres.',
      },
      {
        q: 'Quelles communes la bordent ?',
        r: 'Crans, Châtillon-la-Palud, Saint-Maurice-de-Rémens, Rignieux-le-Franc, Chazey-sur-Ain et Meximieux.',
      },
      {
        q: 'Comment savoir si une parcelle de hameau est constructible ?',
        r: 'Par le plan de zonage du PLU et, pour une parcelle précise, par un certificat d’urbanisme demandé à la mairie.',
      },
    ],
    ctaTexte:
      'Le simulateur donne la maison seule. À Villieu-Loyes-Mollon, dites-nous dans quel village ou hameau se trouve la parcelle : l’accès et les réseaux n’y sont pas les mêmes.',
    invitation: 'Pour voir une maison en cours de chantier à quelques minutes du bureau, appelez-nous au',
  },

  /* ── Polliat ───────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-polliat',
    commune: 'Polliat',
    surtitre: 'Polliat · Ain (01)',
    h1: ['Construire une maison à', 'Polliat', 'Bourg-en-Bresse'],
    intro: [
      'Polliat se situe dans le sud de la Bresse, près de la Dombes, à dix kilomètres à l’ouest de Bourg-en-Bresse. Mâcon est à vingt-cinq kilomètres à l’ouest, Lyon à soixante-neuf kilomètres au sud.',
      'C’est une commune de la couronne de Bourg-en-Bresse qui a sa propre gare, ce qui compte pour une famille dont l’un des deux membres travaille loin.',
    ],
    photo: {
      src: '/photos/maison-monopente-garage-independant.webp',
      w: 1448,
      h: 1086,
      alt: 'Maison contemporaine à toit monopente avec garage indépendant',
    },
    blocs: [
      {
        titre: 'Une gare sur la ligne Mâcon–Bourg–Ambérieu',
        paragraphes: [
          'La gare de Polliat est desservie par des TER de la ligne de Mâcon à Ambérieu, qui passe par Bourg-en-Bresse. Pour un foyer dont l’un des deux membres prend le train, la distance à la gare entre dans le choix de la parcelle : à pied, à vélo ou en voiture.',
          'Nous le disons simplement : une maison se compare au budget total d’un projet, pas seulement à son prix. Entre le terrain, la maison et les trajets de tous les jours, le bon équilibre se cherche au premier rendez-vous. [Les étapes d’un projet](/blog/etapes-projet-construction) donnent le déroulé, du premier rendez-vous aux clés.',
        ],
      },
      {
        titre: 'La D 1079, la D 67 et l’A40',
        paragraphes: [
          'La D 1079, route de Mâcon à Bourg-en-Bresse, traverse la commune d’ouest en est ; la D 67 la traverse du nord au sud ; la D 92 passe à l’extrême nord, et la D 26b part du bourg vers Mézériat. L’autoroute A40 passe au sud du hameau de Dompierre.',
          'Ces axes rendent la commune facile d’accès, et posent la même question que partout : une parcelle proche d’une grande voie peut exiger un isolement acoustique renforcé si elle se trouve dans un secteur classé. La mairie dit si c’est le cas, et nous posons la question avant de chiffrer.',
        ],
      },
      {
        titre: 'Un bourg, un hameau, beaucoup de terres',
        paragraphes: [
          'Les zones urbanisées couvraient 10,9 % du territoire en 2018 : la majeure partie de la commune n’est donc pas urbanisée. Dompierre est un hameau de la commune. Un terrain constructible se repère au plan de zonage du PLU, et un certificat d’urbanisme le confirme avant la promesse de vente.',
          'L’Insee classe Polliat parmi les bourgs ruraux et la tient pour une ville isolée, c’est-à-dire une unité urbaine formée d’une seule commune ; elle fait partie de la couronne de l’aire d’attraction de Bourg-en-Bresse. En clair : un village qui garde son autonomie tout en dépendant de la ville pour l’emploi et les services. Le règlement du PLU, comme celui de tout lotissement, se lit avant de dessiner : implantation, hauteurs, clôtures.',
          'Le sol d’une parcelle se confirme par l’étude de sol, G1 puis G2 selon le terrain : [la page de Bourg-en-Bresse](/construction-maison-bourg-en-bresse) explique pourquoi elle compte en Bresse.',
        ],
      },
      {
        titre: 'Des communes voisines très différentes',
        paragraphes: [
          'Polliat est limitrophe de Confrançon, de Curtafond, de Saint-Martin-le-Châtel, de Viriat, de Mézériat, de Vandeins, de Montcet, de Buellas et de Saint-Denis-lès-Bourg. [Viriat](/construction-maison-viriat) est une commune de hameaux dispersés ; [Saint-Denis-lès-Bourg](/construction-maison-saint-denis-les-bourg), tout près de Bourg, une commune où l’on garde l’eau de pluie sur la parcelle. [Nos modèles de maisons](/nos-modeles) et [nos terrains à bâtir](/terrains) servent de repères ; pour parler de votre projet, [le formulaire de contact](/contact) est le plus court chemin.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Polliat est dans notre zone d’intervention autour de Bourg-en-Bresse, à dix kilomètres de la ville : la commune relève de la communauté d’agglomération du Bassin de Bourg-en-Bresse.',
    },
    faqTitre: 'Questions qu’on nous pose à Polliat',
    faq: [
      {
        q: 'À quelle distance de Bourg-en-Bresse se trouve Polliat ?',
        r: 'À dix kilomètres à l’ouest, dans le sud de la Bresse.',
      },
      {
        q: 'Polliat a-t-elle une gare ?',
        r: 'Oui : la gare de Polliat est desservie par des TER de la ligne de Mâcon à Ambérieu, via Bourg-en-Bresse.',
      },
      {
        q: 'Quelles routes traversent la commune ?',
        r: 'La D 1079 d’ouest en est et la D 67 du nord au sud. L’A40 passe au sud du hameau de Dompierre.',
      },
      {
        q: 'Quelles communes la bordent ?',
        r: 'Confrançon, Curtafond, Saint-Martin-le-Châtel, Viriat, Mézériat, Vandeins, Montcet, Buellas et Saint-Denis-lès-Bourg.',
      },
      {
        q: 'De quelle intercommunalité dépend la commune ?',
        r: 'De la communauté d’agglomération du Bassin de Bourg-en-Bresse.',
      },
    ],
    ctaTexte:
      'Le simulateur donne la maison seule. À Polliat, dites-nous à quelle distance de la gare et de la D 1079 se trouve votre parcelle : cela compte au plan, et dans le budget.',
    invitation: 'Pour voir une maison en cours de chantier près de Bourg-en-Bresse, appelez-nous au',
  },

  /* ── Servas ────────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-servas',
    commune: 'Servas',
    surtitre: 'Servas · Ain (01)',
    h1: ['Construire une maison à', 'Servas', 'Bourg-en-Bresse'],
    intro: [
      'Servas appartient à la Bresse de l’Ain, au sud de Bourg-en-Bresse, dans la couronne de la ville. L’Insee la classe parmi les bourgs ruraux, hors unité urbaine : un village, pas une banlieue.',
      'Le village est traversé par la route de Bourg-en-Bresse à Lyon, et ce n’est pas un détail pour qui cherche une parcelle.',
    ],
    photo: {
      src: '/photos/maison-familiale-etage.webp',
      w: 1448,
      h: 1086,
      alt: 'Maison à étage en enduit beige, toiture en tuiles rouges et garage à porte blanche, sur un terrain nu',
    },
    blocs: [
      {
        titre: 'Une grande route et deux usines',
        paragraphes: [
          'Servas compte, au nord du village, une usine fromagère, Bresse Bleu, du groupe Savencia, et, au sud, un centre et une usine Saint-Gobain Weber. La route de Bourg-en-Bresse à Lyon traverse le village, et plusieurs restaurants y accueillent une clientèle de passage.',
          'Pour une maison, tout cela se traduit en questions simples. Quel est le trafic devant la parcelle, à quelles heures ? Quelle activité se trouve à proximité, et que voit-on depuis le jardin ? Nous conseillons de venir sur place un jour de semaine, aux heures de pointe, avant de signer quoi que ce soit.',
        ],
      },
      {
        titre: 'Le côté de la route compte',
        paragraphes: [
          'Dans un village traversé par un axe, le plan de la maison se dessine en partant de la rue : entrée et garage du côté de la route, pièces de nuit et terrasse du côté opposé. Une parcelle en retrait, desservie par une voie secondaire, ne demande pas le même plan qu’une parcelle qui donne sur la grande route.',
          'Si la parcelle borde une voie classée bruyante, un isolement acoustique renforcé des façades peut être exigé ; la mairie dit si c’est le cas. Cela se prévoit au plan et au chiffrage, pas après. [Le bruit d’une autoroute à Dagneux](/construction-maison-dagneux) en donne un autre exemple.',
        ],
      },
      {
        titre: 'Un village agricole',
        paragraphes: [
          'Les terres agricoles couvraient 70,9 % du territoire en 2018. Les zones urbanisées n’en couvraient que 6,5 % : la place à bâtir est comptée, et un certificat d’urbanisme se demande avant toute promesse de vente. Beaucoup de parcelles ont donc des champs pour voisins ; [le voisinage agricole à Montagnat](/construction-maison-montagnat) décrit les distances à vérifier quand une exploitation est proche.',
          'La commune compte une gare, la gare de Servas – Lent ; sa desserte se vérifie auprès de la SNCF avant de s’appuyer dessus pour un choix de parcelle.',
        ],
      },
      {
        titre: 'Un bourg rural dans l’orbite de la ville',
        paragraphes: [
          'Au centre, l’église Saint-Georges ; dans la commune, une communauté Emmaüs, présente depuis 1991, tient un dépôt-vente. Ces repères comptent peu pour le plan d’une maison, mais ils situent la parcelle : en général, plus elle est proche du cœur du village, plus elle est proche de ce qui existe déjà, réseaux et voirie compris.',
          'Servas relève de la communauté d’agglomération du Bassin de Bourg-en-Bresse, créée le 1er janvier 2017, comme [Polliat](/construction-maison-polliat), Jasseron et Buellas, que nous décrivons aussi.',
        ],
      },
      {
        titre: 'Péronnas, Lent et les autres',
        paragraphes: [
          'Servas est limitrophe de Péronnas, de Saint-André-sur-Vieux-Jonc, de Lent et de Saint-Paul-de-Varax. [Péronnas](/construction-maison-peronnas), tout près de Bourg, est un tissu déjà bâti, où les terrains viennent souvent d’une division ; [Viriat](/construction-maison-viriat), une commune de hameaux dispersés. Pour chercher un terrain, [nos terrains à bâtir](/terrains) montrent ce que nous suivons ; pour partir d’un plan, [nos modèles](/nos-modeles) ; pour échanger, [le formulaire de contact](/contact).',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Servas est dans notre zone d’intervention autour de Bourg-en-Bresse : la commune relève de la communauté d’agglomération du Bassin de Bourg-en-Bresse.',
    },
    faqTitre: 'Questions qu’on nous pose à Servas',
    faq: [
      {
        q: 'Dans quelle région naturelle se trouve Servas ?',
        r: 'Dans la Bresse de l’Ain, au sud de Bourg-en-Bresse.',
      },
      {
        q: 'Quelle route traverse le village ?',
        r: 'La route de Bourg-en-Bresse à Lyon.',
      },
      {
        q: 'Quelles activités se trouvent dans la commune ?',
        r: 'Une usine fromagère Bresse Bleu, du groupe Savencia, au nord du village ; un centre et une usine Saint-Gobain Weber au sud ; plusieurs restaurants.',
      },
      {
        q: 'Quelles communes la bordent ?',
        r: 'Péronnas, Saint-André-sur-Vieux-Jonc, Lent et Saint-Paul-de-Varax.',
      },
      {
        q: 'Servas a-t-elle une gare ?',
        r: 'La commune compte la gare de Servas – Lent ; la desserte actuelle se vérifie auprès de la SNCF.',
      },
    ],
    ctaTexte:
      'Le simulateur donne la maison seule. À Servas, dites-nous si votre parcelle donne sur la grande route ou sur une voie secondaire : le plan n’est pas le même.',
    invitation: 'Pour voir une maison en cours de chantier près de Bourg-en-Bresse, appelez-nous au',
  },

  /* ── Jasseron ──────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-jasseron',
    commune: 'Jasseron',
    surtitre: 'Jasseron · Ain (01)',
    h1: ['Construire une maison à', 'Jasseron', 'Bourg-en-Bresse'],
    intro: [
      'Jasseron est une commune du Revermont, à huit kilomètres à l’est de Bourg-en-Bresse. Elle touche la ville, ainsi que Viriat, Ceyzériat, Saint-Just, Ramasse, Drom, Meillonnas et Saint-Étienne-du-Bois.',
      'Plus de la moitié de son territoire est couvert de forêts et de milieux naturels : on y construit, d’abord, au bord des bois.',
    ],
    photo: {
      src: '/photos/maison-etage-enduit-pierre-double-garage.webp',
      w: 1400,
      h: 963,
      alt: 'Maison à étage en enduit clair avec un pan de parement en pierre, toiture ardoise et double garage anthracite',
    },
    blocs: [
      {
        titre: 'Au bord des bois',
        paragraphes: [
          'Les forêts et les milieux semi-naturels occupaient 54,8 % de la commune en 2018. Une parcelle qui touche un bois pose des questions qu’un terrain de plaine ne pose pas : l’ombre que portent les grands arbres en hiver, l’humidité du sol, la distance aux troncs, l’entretien de la lisière.',
          'Le plan de la maison part de l’orientation réelle de la parcelle : où le soleil se lève, où il se couche, ce que cachent les arbres. Un bois au sud ou à l’est peut priver la maison de soleil en hiver, quand il est bas. Mieux vaut le savoir avant de dessiner. [Nos modèles de maisons](/nos-modeles) donnent un point de départ, que nous orientons selon le terrain.',
          'Un plan local d’urbanisme peut aussi classer des boisements en espaces boisés classés, où le défrichement est interdit. Si votre parcelle touche un bois, le plan de zonage et un certificat d’urbanisme disent ce qui s’y applique.',
        ],
      },
      {
        titre: 'L’A40 traverse la commune',
        paragraphes: [
          'L’autoroute A40 traverse Jasseron, avec les aires de Bourg-Jasseron et de Bourg-Teyssonge. Une parcelle voisine de l’autoroute peut se trouver dans un secteur classé par arrêté préfectoral, où un isolement acoustique renforcé des façades est exigé ; la mairie dit ce qu’il en est. [Le bruit de l’A42 à Dagneux](/construction-maison-dagneux) décrit la même démarche pour une autre autoroute.',
          'Le GR 59, sentier de randonnée, passe aussi dans la commune.',
        ],
      },
      {
        titre: 'Un aérodrome dans la commune',
        paragraphes: [
          'L’aérodrome de Bourg – Ceyzériat se trouve dans la commune. Avant d’acheter une parcelle proche, renseignez-vous auprès de la mairie sur les couloirs de vol et sur d’éventuelles servitudes : la mairie dispose de ces informations. Nous posons la question au moment du chiffrage, avant que le plan ne soit arrêté.',
        ],
      },
      {
        titre: 'Un bourg rural à huit kilomètres de la ville',
        paragraphes: [
          'L’Insee classe Jasseron parmi les bourgs ruraux, hors unité urbaine, et dans la couronne de l’aire d’attraction de Bourg-en-Bresse. La commune est membre de la communauté d’agglomération du Bassin de Bourg-en-Bresse, créée le 1er janvier 2017. Dit autrement : une commune de campagne, qui vit dans l’orbite de la ville.',
        ],
      },
      {
        titre: 'Le Revermont, d’une commune à l’autre',
        paragraphes: [
          'Jasseron est limitrophe de Viriat, de Saint-Étienne-du-Bois, de Meillonnas, de Drom, de Bourg-en-Bresse, de Saint-Just, de Ceyzériat et de Ramasse. Une commune qui en touche huit autres, dont la ville-centre de l’agglomération, voit ses parcelles se comparer à celles d’à côté : un voisin qui construit en limite, un chemin qui dessert deux maisons. Cela se vérifie sur le plan cadastral avant l’achat.',
          'Jasseron appartient au Revermont, comme [Ceyzériat](/construction-maison-ceyzeriat), qui la borde, où la roche peut n’être pas loin sous la terre végétale. Cela se confirme à l’étude de sol, G1 puis G2, avant de parler de fondations. [Viriat](/construction-maison-viriat), qui la borde aussi, est une commune de hameaux dispersés.',
          'Pour chercher un terrain, [nos terrains à bâtir](/terrains) rassemblent ceux que nous suivons ; pour en parler, [le formulaire de contact](/contact) est le plus court chemin.',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Jasseron est dans notre zone d’intervention autour de Bourg-en-Bresse, à huit kilomètres de la ville : la commune relève de la communauté d’agglomération du Bassin de Bourg-en-Bresse.',
    },
    faqTitre: 'Questions qu’on nous pose à Jasseron',
    faq: [
      {
        q: 'À quelle distance de Bourg-en-Bresse se trouve Jasseron ?',
        r: 'À huit kilomètres à l’est, dans le Revermont.',
      },
      {
        q: 'Quelles communes la bordent ?',
        r: 'Viriat, Saint-Étienne-du-Bois, Meillonnas, Drom, Bourg-en-Bresse, Saint-Just, Ceyzériat et Ramasse.',
      },
      {
        q: 'Quelle autoroute traverse la commune ?',
        r: 'L’A40, avec les aires de repos de Bourg-Jasseron et de Bourg-Teyssonge.',
      },
      {
        q: 'Quelle part du territoire est boisée ?',
        r: 'Les forêts et milieux semi-naturels couvraient 54,8 % de la commune en 2018.',
      },
      {
        q: 'Y a-t-il un aérodrome dans la commune ?',
        r: 'Oui : l’aérodrome de Bourg – Ceyzériat se trouve sur le territoire de Jasseron.',
      },
    ],
    ctaTexte:
      'Le simulateur donne la maison seule. À Jasseron, dites-nous si la parcelle borde un bois, l’autoroute ou un chemin : l’orientation et l’isolement s’en ressentent.',
    invitation: 'Pour voir une maison en cours de chantier près de Bourg-en-Bresse, appelez-nous au',
  },

  /* ── Buellas ───────────────────────────────────────────────────────────── */
  {
    slug: 'construction-maison-buellas',
    commune: 'Buellas',
    surtitre: 'Buellas · Ain (01)',
    h1: ['Construire une maison à', 'Buellas', 'Bourg-en-Bresse'],
    intro: [
      'Buellas est une commune de l’Ain située entre la plaine bressane et le plateau dombiste, à l’ouest de Bourg-en-Bresse. Elle touche Polliat, Montcet, Saint-Denis-lès-Bourg, Montracol et Saint-Rémy.',
      'Elle est la ville-centre d’une petite unité urbaine qui porte son nom, et l’Insee la classe parmi les bourgs ruraux : une commune de campagne, avec ses services.',
    ],
    photo: {
      src: '/photos/maison-contemporaine-bardage-bois.webp',
      w: 1800,
      h: 1350,
      alt: 'Maison contemporaine à étage, béton et bardage bois ajouré, volets coulissants',
    },
    blocs: [
      {
        titre: 'Soixante mètres de relief',
        paragraphes: [
          'L’altitude de la commune varie de 205 mètres au point le plus bas à 266 mètres au plus haut : soixante et un mètres d’écart. Ce n’est pas un relief de montagne, mais ce n’est pas non plus la plaine : selon l’endroit, une parcelle peut être en légère pente, avec ce que cela change au plan.',
          'Une pente modeste suffit à poser des choix : maison de plain-pied sur plateforme, ou maison décalée, garage en contrebas. Le niveau fini de la maison se décide sur un relevé de la parcelle, non sur une photo. [Les étapes d’un projet](/blog/etapes-projet-construction) placent ce relevé et les études de sol avant le permis de construire.',
        ],
      },
      {
        titre: 'Entre Bresse et Dombes',
        paragraphes: [
          'La commune se situe entre la plaine bressane et le plateau dombiste. Les deux régions n’ont pas le même sol, et nous ne présumons pas de celui d’une parcelle : l’étude de sol, G1 puis G2 selon le terrain, le confirme, comme l’explique [la page de Bourg-en-Bresse](/construction-maison-bourg-en-bresse).',
          'Les terres arables couvraient 46,4 % du territoire en 2018, les zones agricoles hétérogènes 23,5 % et les zones urbanisées 15,8 %. Beaucoup de parcelles ont donc des champs pour voisins. Un champ voisin se cultive : bruit d’engins, poussières ou épandages en saison peuvent s’y ajouter, et mieux vaut passer sur place à plusieurs moments de l’année. Une parcelle proche d’une limite de commune se repère sur le plan cadastral avant l’achat : le plan de zonage et le certificat d’urbanisme disent ce qui s’y applique.',
        ],
      },
      {
        titre: 'Le hameau de Corgenon et la route de Trévoux',
        paragraphes: [
          'Corgenon est un hameau de la commune, traversé par la route de Trévoux. Il a longtemps eu sa propre école, tandis que la commune inaugurait, dans les années 1980, un nouveau groupe scolaire.',
          'Construire à Corgenon ou dans le bourg ne se joue pas de la même façon : accès, réseaux, distance aux commerces. Le service urbanisme de la mairie renseigne parcelle par parcelle, et [le formulaire de contact](/contact) nous permet de commencer par la vôtre.',
        ],
      },
      {
        titre: 'Dans l’orbite de Bourg-en-Bresse',
        paragraphes: [
          'Buellas fait partie de la couronne de l’aire d’attraction de Bourg-en-Bresse et de la communauté d’agglomération du Bassin de Bourg-en-Bresse, créée le 1er janvier 2017, dont le siège est à Bourg. Pour une parcelle en légère pente, le relevé du terrain donne les altitudes au centimètre : c’est à partir de lui que le niveau de la maison, l’accès du garage et les terrassements se décident. Un plan dessiné sans relevé reste un plan provisoire.',
        ],
      },
      {
        titre: 'Des communes voisines différentes',
        paragraphes: [
          '[Saint-Denis-lès-Bourg](/construction-maison-saint-denis-les-bourg), tout près de Bourg, est en Bresse plate ; [Polliat](/construction-maison-polliat), avec sa gare, est à dix kilomètres de la ville. Pour partir d’un plan, [nos modèles de maisons](/nos-modeles) servent de base ; pour chercher un terrain, voyez [ceux que nous suivons](/terrains).',
        ],
      },
    ],
    pole: {
      slug: 'construction-maison-bourg-en-bresse',
      commune: 'Bourg-en-Bresse',
      texte:
        'Buellas est dans notre zone d’intervention autour de Bourg-en-Bresse : la commune relève de la communauté d’agglomération du Bassin de Bourg-en-Bresse.',
    },
    faqTitre: 'Questions qu’on nous pose à Buellas',
    faq: [
      {
        q: 'Où se trouve Buellas ?',
        r: 'À l’ouest de Bourg-en-Bresse, entre la plaine bressane et le plateau dombiste.',
      },
      {
        q: 'Quelles communes la bordent ?',
        r: 'Polliat, Montcet, Saint-Denis-lès-Bourg, Montracol et Saint-Rémy.',
      },
      {
        q: 'Quelle est l’altitude de la commune ?',
        r: 'De 205 mètres au point le plus bas à 266 mètres au plus haut.',
      },
      {
        q: 'Quel est le hameau de la commune ?',
        r: 'Corgenon, traversé par la route de Trévoux.',
      },
      {
        q: 'De quelle intercommunalité dépend la commune ?',
        r: 'De la communauté d’agglomération du Bassin de Bourg-en-Bresse.',
      },
    ],
    ctaTexte:
      'Le simulateur suppose un terrain plat. À Buellas, dites-nous si la parcelle est en pente : le niveau de la maison et les fondations se chiffrent sur le relevé.',
    invitation: 'Pour voir une maison en cours de chantier près de Bourg-en-Bresse, appelez-nous au',
  },
];
