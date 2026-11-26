// Repris tel quel de la maquette Claude Design (articles de blog).
//
// `seoTitle` s'ajoute au titre d'origine : celui-ci reste affiché en tête
// d'article, entier, tandis que la balise <title> reçoit une version courte
// qui tient dans ce que Google affiche. Les cinq titres complets faisaient
// 71 à 94 caractères une fois le nom de l'entreprise ajouté, et étaient tous
// tronqués dans les résultats de recherche.
// `seoDescription`, facultative, remplace le chapô comme méta-description quand
// celui-ci dépasse les 155 caractères que Google affiche.
// Ne pas reformuler : le rendu des vues en dépend mot pour mot.

export const ARTICLES = [
  {
    "slug": "re2020-2026",
    "cat": "Réglementation",
    "date": "12 janvier 2026",
    "read": "6 min",
    "title": "RE2020 en 2026 : ce qui change vraiment pour votre maison individuelle",
    "seoTitle": "RE2020 en 2026 : ce qui change pour votre maison",
    "seoDescription": "RE2020 en 2026 : seuils carbone, confort d’été, choix des matériaux. Ce qu’elle impose à une maison neuve dans l’Ain, et ce que cela change sur le devis.",
    "excerpt": "Nouveaux seuils carbone, confort d’été, choix des matériaux : ce que la RE2020 impose en 2026 à une maison neuve dans l’Ain, et ce que cela change sur le devis.",
    "img": "/photos/blog-re2020-2026.webp",
    "alt": "Salon lumineux d’une maison neuve, grandes baies vitrées et pièce de vie ouverte",
    "body": [
      {
        "h": "Des seuils carbone qui se resserrent par palier",
        "p": "La RE2020 ne s’applique pas d’un bloc : ses seuils d’impact carbone se durcissent par étapes successives. Concrètement, une maison déposée en 2026 doit justifier une empreinte inférieure à celle qui était admise en 2022, à surface et confort équivalents. Cela se joue sur la structure, l’isolant et le mode de chauffage — pas sur la décoration."
      },
      {
        "h": "Le confort d’été devient un critère de conception",
        "p": "L’indicateur de degrés-heures d’inconfort impose de penser les surchauffes dès le plan : orientation des pièces de vie, dimension des débords de toit, casquettes et volets, inertie des murs. Dans la Plaine de l’Ain, où les épisodes de chaleur sont désormais courants, c’est ce qui distingue une maison agréable en août d’une maison à climatiser. Les plans de [nos modèles de maisons](/nos-modeles) prévoient ces protections dès le dessin, pour un plain-pied comme pour une maison à étage."
      },
      {
        "h": "Brique, béton cellulaire : quel impact sur le calcul",
        "p": "La brique de terre cuite à alvéoles et le béton cellulaire (siporex), [les deux modes constructifs que nous employons](/entreprise), affichent tous deux de bonnes performances thermiques intrinsèques, ce qui limite l’épaisseur d’isolant rapporté. Le choix se fait surtout sur l’étanchéité à l’air, la mise en œuvre et le confort d’été — chaque projet est calculé, jamais décidé par habitude. Près d’une autoroute, comme à [Dagneux, au bord de l’A42](/construction-maison-dagneux), les vitrages et la ventilation comptent autant que le mur."
      },
      {
        "h": "Le chauffage au gaz est de fait écarté",
        "p": "Le plafond d’émissions du poste chauffage exclut en pratique la chaudière gaz en maison neuve. Les solutions retenues sont la pompe à chaleur air/eau, parfois complétée d’un poêle bois. Le surcoût d’équipement se compense sur les consommations, et la maison reste valorisable à la revente. La question se pose très concrètement dans les communes où le gaz de ville ne dessert pas toutes les rues : voyez [le chauffage à Marboz, au nord de Bourg-en-Bresse](/construction-maison-marboz), où elle se règle rue par rue."
      },
      {
        "h": "Ce que cela représente sur le budget",
        "p": "Sur nos chantiers, l’écart entre une maison RE2020 correctement conçue et une maison RT2012 équivalente se situe autour de 5 à 8 % du coût de construction. Un plan étudié dès le départ pour la réglementation coûte toujours moins cher qu’un plan rattrapé par des équipements en fin de projet."
      }
    ]
  },
  {
    "slug": "prix-construction-m2",
    "cat": "Budget",
    "date": "4 février 2026",
    "read": "7 min",
    "title": "Prix de construction au m² dans l’Ain : les repères 2026",
    "seoTitle": "Prix de construction au m² dans l’Ain — repères 2026",
    "excerpt": "Ce que couvre réellement un prix au m², pourquoi il varie de 1 400 à 2 100 € dans l’Ain, et comment lire une annonce de constructeur sans se tromper.",
    "img": "/photos/blog-prix-construction-m2.webp",
    "alt": "Constructeur étudiant un plan de maison, rouleau de plans et crayon sur la table",
    "body": [
      {
        "h": "Un prix au m² n’a de sens qu’avec son périmètre",
        "p": "Le même chiffre peut désigner la maison hors d’eau hors d’air, la maison prête à décorer, ou la maison livrée avec cuisine et terrasse. Avant de comparer deux offres, alignez les périmètres : c’est là que se cachent la majorité des écarts apparents, bien plus que dans la qualité de construction."
      },
      {
        "h": "La fourchette observée dans l’Ain en 2026",
        "p": "Pour une maison sur-mesure conforme à la RE2020, on se situe généralement entre 1 450 et 2 100 € le mètre carré habitable, hors terrain — [notre simulateur](/#estimation) applique ces repères à votre projet. En dessous, il s’agit le plus souvent d’un modèle catalogue à finitions minimales ; au-dessus, d’une architecture ambitieuse ou de prestations haut de gamme. Pour comparer un plain-pied et une maison à étage, parcourez [nos modèles](/nos-modeles)."
      },
      {
        "h": "Pourquoi un plain-pied coûte plus cher au m²",
        "p": "À surface habitable égale, un plain-pied demande davantage de fondations, de dalle et de toiture qu’une maison à étage. Comptez 5 à 10 % de plus au mètre carré. En contrepartie, il consomme plus de terrain — l’arbitrage se fait donc terrain et construction ensemble, jamais séparément. Sur un terrain en pente, comme autour d’[Ambérieu-en-Bugey](/construction-maison-amberieu-en-bugey), la comparaison change encore : plateforme, demi-niveaux ou sous-sol modifient le devis."
      },
      {
        "h": "Les postes qui font vraiment bouger le devis",
        "p": "La forme du bâtiment (chaque décrochement coûte), la surface de menuiseries, le type de charpente, la présence d’un vide sanitaire ou d’un sous-sol, et le niveau de finition des pièces d’eau. Un plan compact bien dessiné permet souvent de financer de meilleures prestations sans changer le budget total. La nature du sol en fait partie : [les études de sol G1 et G2 à Bourg-en-Bresse](/construction-maison-bourg-en-bresse) montrent leur poids sur les fondations."
      },
      {
        "h": "Ce que le prix au m² ne dit jamais",
        "p": "Le terrain, les frais de notaire, la viabilisation, la taxe d’aménagement, l’étude de sol, les raccordements, les extérieurs. Sur un projet à 250 000 € de construction, ces postes représentent fréquemment 60 000 à 110 000 € supplémentaires : ils doivent figurer dans votre plan de financement dès le premier rendez-vous."
      }
    ]
  },
  {
    "slug": "budget-maison-100m2",
    "cat": "Budget",
    "date": "26 février 2026",
    "read": "6 min",
    "title": "Le budget réel d’une maison de 100 m² dans l’Ain",
    "seoTitle": "Le budget réel d’une maison de 100 m² dans l’Ain",
    "excerpt": "Décomposition complète d’un projet de 100 m² : construction, terrain, frais annexes, et le montant à prévoir avant le premier coup de pelle.",
    "img": "/photos/blog-budget-maison-100m2.webp",
    "alt": "Maison à étage avec balcon, terrasse et piscine",
    "body": [
      {
        "h": "La construction : le poste que vous maîtrisez le mieux",
        "p": "Pour 100 m² habitables à étage, trois chambres, garage simple et vide sanitaire, la construction se situe le plus souvent entre 175 000 et 205 000 € dans notre secteur. C’est le poste le plus prévisible : il est chiffré au CCMI, à prix ferme, avant le démarrage."
      },
      {
        "h": "Le terrain : de 90 000 à 170 000 € selon la commune",
        "p": "Un terrain de 500 à 700 m² s’échange autour de 100 000 € du côté de [Lagnieu](/construction-maison-lagnieu) ou Chazey-sur-Ain, [dans notre secteur d’intervention](/zone-intervention), et dépasse 150 000 € sur la Côtière et [à Montluel](/construction-maison-montluel). L’écart de prix au mètre carré entre deux communes voisines dépasse souvent le coût d’une chambre supplémentaire."
      },
      {
        "h": "Les frais annexes, trop souvent oubliés",
        "p": "Frais de notaire sur le terrain, étude de sol, raccordements, taxe d’aménagement, assurance dommages-ouvrage, frais de dossier bancaire et garantie : prévoyez 25 000 à 45 000 €. Ce sont ces postes qui font dérailler un plan de financement pourtant calé sur la construction. L’étude de sol (G1, puis G2 selon le terrain) en fait partie, tout comme le prêt à taux zéro (PTZ) quand vous y avez droit, à voir avec votre banque. Pour préparer l’achat du terrain, [la page de Montrevel-en-Bresse](/construction-maison-montrevel-en-bresse) détaille le certificat d’urbanisme et la promesse de vente."
      },
      {
        "h": "Ce qui vient après la remise des clés",
        "p": "Cuisine équipée, terrasse, allée, clôture, portail, aménagement du jardin : entre 15 000 et 40 000 € selon les choix. Certains clients les étalent sur deux ou trois ans — à condition de l’avoir décidé, pas de le découvrir."
      },
      {
        "h": "Un ordre de grandeur global",
        "p": "Pour un projet complet de 100 m² dans la Plaine de l’Ain, l’enveloppe réaliste s’établit entre 320 000 et 400 000 € tout compris. Notre simulateur donne la part construction en une minute ; le reste, nous le chiffrons ensemble au premier rendez-vous."
      }
    ]
  },
  {
    "slug": "etapes-projet-construction",
    "cat": "Méthode",
    "date": "18 mars 2026",
    "read": "8 min",
    "title": "Les étapes d’un projet de construction, du premier rendez-vous aux clés",
    "seoTitle": "Les étapes d’un projet de construction de maison",
    "excerpt": "Ce qui se passe réellement entre le jour où vous poussez la porte du bureau et celui où vous récupérez vos clés — avec les délais moyens de chaque étape.",
    "img": "/photos/blog-etapes-projet-construction.webp",
    "alt": "Plans de conception d’une maison individuelle sur-mesure",
    "body": [
      {
        "h": "1. Le premier rendez-vous : on écoute",
        "p": "Une heure trente au bureau, sans plan et sans devis. Vous racontez votre terrain, votre budget, votre façon de vivre, le nombre de chambres, la place de la cuisine. Nous écoutons et nous disons franchement ce qui est réaliste. Aucun engagement à ce stade. Il se tient au bureau de [Meximieux](/construction-maison-meximieux) ou sur votre terrain, autour de [Bourg-en-Bresse](/construction-maison-bourg-en-bresse) comme d’Ambérieu-en-Bugey."
      },
      {
        "h": "2. Les plans sur-mesure : deux à quatre semaines",
        "p": "Nous dessinons votre maison sur la base de cet échange — [nos modèles](/nos-modeles) servent de point de départ, jamais de catalogue figé — avec deux à trois allers-retours pour ajuster les volumes, les ouvertures et l’implantation sur la parcelle. C’est le moment le plus créatif du projet, et celui où l’on gagne le plus d’argent : chaque mètre carré inutile supprimé au plan est un mètre carré non payé."
      },
      {
        "h": "3. Le CCMI et le permis : deux à quatre mois",
        "p": "Signature du Contrat de Construction de Maison Individuelle, à prix ferme et délai contractuel, puis dépôt du permis de construire. L’instruction dure deux mois en général, trois en secteur protégé. Le prêt se met en place en parallèle. Avant de signer, le [certificat d’urbanisme et la promesse de vente](/construction-maison-montrevel-en-bresse) se préparent avec soin ; l’étude de sol (G1, puis G2 selon le terrain) intervient avant ou pendant cette étape."
      },
      {
        "h": "4. Le chantier : dix à quatorze mois",
        "p": "Terrassement, fondations, élévation des murs, charpente et couverture, menuiseries, isolation, cloisons, plomberie et électricité, chauffage, finitions. Vous suivez l’avancement avec un interlocuteur unique et des points réguliers sur place."
      },
      {
        "h": "5. La réception et l’année de parfait achèvement",
        "p": "Visite de réception, liste de réserves éventuelles, remise des clés. Pendant douze mois, la garantie de parfait achèvement couvre toute reprise signalée ; la décennale et la dommages-ouvrage prennent le relais sur la durée. Notre SAV répond sous 48 h ouvrées."
      }
    ]
  },
  {
    "slug": "echeancier-ccmi",
    "cat": "Contrat",
    "date": "9 avril 2026",
    "read": "7 min",
    "title": "Comment fonctionne l’échéancier de paiement d’un CCMI",
    "seoTitle": "Échéancier CCMI : les % à payer à chaque étape",
    "seoDescription": "Barème légal d’un CCMI : 15 % à l’ouverture du chantier jusqu’à 95 % à l’achèvement des équipements. Vous ne payez jamais en avance.",
    "excerpt": "Vous ne payez jamais en avance : les appels de fonds d’un CCMI sont plafonnés par la loi et suivent l’avancement réel du chantier. Explication étape par étape.",
    "img": "/photos/blog-echeancier-ccmi.webp",
    "alt": "Personne devant un écran d’ordinateur affichant des lignes de code",
    "body": [
      {
        "h": "Un calendrier fixé par le Code de la construction",
        "p": "Dans un CCMI avec fourniture de plan, le constructeur ne fixe pas librement ses appels de fonds : le Code de la construction et de l’habitation en plafonne chaque étape. Un constructeur qui demande davantage, ou plus tôt, est hors la loi — c’est une vérification simple à faire avant de signer."
      },
      {
        "h": "Le paiement suit l’avancement, jamais l’inverse",
        "p": "Chaque appel de fonds correspond à un stade de chantier constaté, [comme le détaille notre page entreprise](/entreprise) : fondations achevées, murs élevés, mise hors d’eau, mise hors d’air, équipements terminés. Si l’étape n’est pas atteinte, la somme n’est pas due. Votre banque débloque les fonds sur cette base."
      },
      {
        "h": "Les plafonds légaux, dans l’ordre",
        "p": "Au maximum 5 % à la signature du contrat (et uniquement si une garantie de remboursement est fournie), 15 % à l’ouverture du chantier, 25 % à l’achèvement des fondations, 40 % à l’achèvement des murs, 60 % à la mise hors d’eau, 75 % à la mise hors d’air et cloisons, 95 % à l’achèvement des équipements. Ces pourcentages sont cumulés."
      },
      {
        "h": "Les 5 % de la réception",
        "p": "Le solde de 5 % est versé à la remise des clés. Si vous émettez des réserves à la réception, il peut être consigné chez un tiers jusqu’à leur levée. C’est votre principal levier pour obtenir une finition impeccable — et c’est parfaitement légal."
      },
      {
        "h": "La garantie de livraison, filet de sécurité",
        "p": "Un établissement financier garantit l’achèvement de votre maison au prix et dans les délais convenus, même en cas de défaillance du constructeur. Demandez systématiquement l’attestation : sur un projet à 250 000 €, c’est le document qui vous protège vraiment. Ces règles valent pour tous [nos modèles de maisons](/nos-modeles), de plain-pied ou à étage, et pour toute notre zone, de [Meximieux](/construction-maison-meximieux) à [Bourg-en-Bresse](/construction-maison-bourg-en-bresse)."
      }
    ]
  },
  {
    "slug": "vivre-chez-soi-pendant-extension",
    "cat": "Extension",
    "date": "26 novembre 2026",
    "read": "5 min",
    "title": "Vivre chez soi pendant une extension de maison : ce qui se passe vraiment",
    "seoTitle": "Habiter chez soi pendant une extension de maison",
    "seoDescription": "Peut-on rester chez soi pendant une extension ? Poussière, bruit, coupures, ouverture du mur : comment le chantier s’organise pour que la maison reste habitable.",
    "excerpt": "Dans la plupart des cas, oui, on reste chez soi. L’extension se construit à côté de la maison ; elle ne la traverse qu’à la fin, au moment d’ouvrir le mur.",
    "img": "/extension/extension-cube-blanc-jardin.webp",
    "alt": "Extension cubique blanche accolée à une maison au bardage sombre, côté jardin",
    "body": [
      {
        "h": "Dehors d’abord, dedans à la fin",
        "p": "Une extension se construit le long de la maison, pas dedans. Fondations, murs, toiture et menuiseries se font à l’extérieur, pendant que vous vivez normalement. La maison n’est touchée qu’à la fin, quand la nouvelle pièce est fermée et couverte."
      },
      {
        "h": "Le moment délicat : ouvrir le mur",
        "p": "Relier l’extension à la maison demande d’ouvrir un mur existant. C’est l’étape qui fait de la poussière et du bruit, et elle ne dure en général que quelques jours. On protège les pièces voisines par des bâches et des cloisons provisoires, et l’ouverture se fait quand l’extension est déjà hors d’eau : la maison n’est jamais ouverte à la pluie. Pour un mur porteur, voyez [ce que demande l’ouverture d’un mur porteur](/blog/ouvrir-mur-porteur-extension)."
      },
      {
        "h": "Bruit, accès, coupures : à prévoir",
        "p": "Les engins de terrassement et la maçonnerie font du bruit aux heures de chantier. L’accès au jardin est occupé pendant le gros œuvre. Le raccordement électrique ou de plomberie peut demander de courtes coupures, annoncées à l’avance. Avec de jeunes enfants ou du télétravail, mieux vaut connaître le calendrier pour organiser ces journées."
      },
      {
        "h": "Quand vaut-il mieux partir ?",
        "p": "Si l’extension transforme aussi l’intérieur (cuisine déplacée, salle de bains refaite, plusieurs murs ouverts), la maison peut devenir difficile à habiter quelques semaines. Cela se décide au moment du plan, pas en cours de chantier."
      },
      {
        "h": "Ce que nous faisons pour vous",
        "p": "Nous étudions la jonction avec la maison en premier et vous donnons un calendrier qui dit quand la maison sera touchée. Pour le panorama complet, voyez [notre page extension de maison](/renovation-extension), ou nos pages [extension à Bourg-en-Bresse](/extension-maison-bourg-en-bresse), [à Meximieux](/extension-maison-meximieux) et [à Ambérieu-en-Bugey](/extension-maison-amberieu-en-bugey)."
      }
    ]
  },
  {
    "slug": "ouvrir-mur-porteur-extension",
    "cat": "Extension",
    "date": "26 novembre 2026",
    "read": "5 min",
    "title": "Ouvrir un mur porteur pour relier une extension à la maison",
    "seoTitle": "Ouvrir un mur porteur pour une extension",
    "seoDescription": "Relier une extension demande souvent d’ouvrir un mur porteur : calcul de la poutre, étaiement, mur mitoyen. Les étapes et les précautions, sans jargon.",
    "excerpt": "Pour que l’extension prolonge vraiment la pièce de vie, il faut souvent ouvrir un mur porteur. C’est courant, à condition de le calculer avant de le casser.",
    "img": "/extension/extension-baies-vitrees-salon-jardin.webp",
    "alt": "Illustration : extension enduite à toit plat ouverte sur une terrasse, et son séjour lumineux vu de l’intérieur",
    "body": [
      {
        "h": "Porteur ou pas : la première question",
        "p": "Un mur porteur soutient un plancher, une charpente ou un étage. Le mur de façade sur lequel on accole une extension l’est presque toujours. On ne l’ouvre pas « au jugé » : la largeur de l’ouverture et ce qu’elle supporte se vérifient avant le chantier."
      },
      {
        "h": "Une poutre calculée, pas devinée",
        "p": "Pour remplacer le mur ouvert, on pose une poutre (béton, acier ou bois) qui reprend les charges et les reporte sur des appuis solides. Sa taille se calcule selon la portée et le poids à porter ; pour une grande ouverture ou un étage au-dessus, ce calcul relève d’un bureau d’études structure."
      },
      {
        "h": "L’étaiement pendant les travaux",
        "p": "Pendant l’ouverture, des étais soutiennent provisoirement le plancher ou la toiture. Ils restent en place jusqu’à ce que la poutre soit posée et prise. C’est une étape courte, mais c’est celle qui ne s’improvise pas."
      },
      {
        "h": "Mur mitoyen : l’accord du voisin",
        "p": "Si le mur est mitoyen, il appartient aux deux propriétaires. L’ouvrir ou le modifier demande l’accord du voisin, idéalement par écrit, avant de déposer le dossier."
      },
      {
        "h": "Faut-il une autorisation pour l’ouverture ?",
        "p": "Ouvrir un mur intérieur ne demande pas d’autorisation d’urbanisme en soi. C’est l’extension qui en demande une : déclaration préalable ou permis selon la surface, comme l’explique [notre page extension de maison](/renovation-extension). Si la façade change, l’ouverture est décrite dans le même dossier."
      }
    ]
  },
  {
    "slug": "duree-extension-maison",
    "cat": "Extension",
    "date": "26 novembre 2026",
    "read": "5 min",
    "title": "Combien de temps pour une extension de maison, du projet aux clés ?",
    "seoTitle": "Durée d’une extension de maison : délais réels",
    "seoDescription": "Instruction de la déclaration ou du permis, recours des tiers, chantier : combien de temps dure une extension de maison, étape par étape, dans l’Ain.",
    "excerpt": "Le chantier n’est qu’une partie du délai. Entre le premier plan et l’entrée dans la nouvelle pièce, il faut compter les études, l’instruction et le délai de recours.",
    "img": "/extension/extension-bois-gris-terrasse.webp",
    "alt": "Extension à bardage bois et gris prolongée par une terrasse",
    "body": [
      {
        "h": "1. Étude et plans",
        "p": "Visite de la maison, relevé, lecture du PLU, plans. Selon le projet et vos allers-retours sur le dessin, cette phase prend quelques semaines."
      },
      {
        "h": "2. L’instruction du dossier",
        "p": "Une déclaration préalable s’instruit en 1 mois, un permis de construire de maison individuelle en 2 mois, à partir d’un dossier complet. Si l’avis de l’Architecte des Bâtiments de France est requis (près d’un monument protégé, comme à [Meximieux, près de Pérouges](/extension-maison-meximieux)), comptez 2 mois pour une déclaration et 3 pour un permis."
      },
      {
        "h": "3. Le délai de recours des tiers",
        "p": "Une fois l’autorisation obtenue et affichée sur le terrain, les tiers disposent de 2 mois pour la contester. Beaucoup de banques et de propriétaires attendent la fin de ce délai pour commencer les travaux."
      },
      {
        "h": "4. Le chantier",
        "p": "Sa durée dépend de la surface, de la structure et du terrain. Une ossature bois, préparée en atelier, se monte plus vite qu’une maçonnerie ; un terrain en pente, comme souvent [à Ambérieu-en-Bugey](/extension-maison-amberieu-en-bugey), ajoute du terrassement. Nous donnons le délai après la visite, pas avant."
      },
      {
        "h": "Comment gagner du temps",
        "p": "Un dossier complet dès le dépôt évite les demandes de pièces qui relancent le délai. Lire le PLU et le règlement de lotissement avant de dessiner évite un refus. Voyez les étapes détaillées sur [notre page extension de maison](/renovation-extension)."
      }
    ]
  },
  {
    "slug": "assurances-garanties-extension",
    "cat": "Extension",
    "date": "26 novembre 2026",
    "read": "5 min",
    "title": "Extension de maison : quelles assurances et quelles garanties ?",
    "seoTitle": "Extension : garantie décennale, dommages-ouvrage",
    "seoDescription": "Décennale, dommages-ouvrage, parfait achèvement, biennale : les garanties qui protègent une extension de maison, et l’assurance habitation à prévenir.",
    "excerpt": "Une extension est une construction comme une autre : elle bénéficie des mêmes garanties légales qu’une maison neuve. Voici lesquelles, et ce qu’elles couvrent.",
    "img": "/extension/extension-maconnee-enduit-blanc-garage.webp",
    "alt": "Extension maçonnée enduite en blanc, avec porte de garage, accolée à une maison à étage",
    "body": [
      {
        "h": "La garantie décennale du constructeur",
        "p": "Tout constructeur doit être assuré en responsabilité décennale. Pendant 10 ans après la réception, elle couvre les dommages qui compromettent la solidité de l’ouvrage ou le rendent impropre à sa destination : fissure structurelle, infiltration par la toiture, affaissement. Demandez l’attestation avant de signer."
      },
      {
        "h": "L’assurance dommages-ouvrage",
        "p": "La loi impose au propriétaire qui fait construire de souscrire une assurance dommages-ouvrage avant l’ouverture du chantier. Elle préfinance la réparation des désordres de nature décennale, sans attendre de savoir qui est responsable."
      },
      {
        "h": "Parfait achèvement et bon fonctionnement",
        "p": "Pendant 1 an après la réception, la garantie de parfait achèvement oblige l’entreprise à reprendre tous les défauts signalés. Pendant 2 ans, la garantie de bon fonctionnement couvre les équipements dissociables : volets, menuiseries intérieures, robinetterie."
      },
      {
        "h": "La jonction avec la maison existante",
        "p": "L’endroit le plus sensible est la liaison entre l’extension et la maison. Elle doit être décrite dans le devis : c’est ce qui permet de savoir clairement quelle entreprise en répond. Nous l’étudions en premier, voyez [notre page extension de maison](/renovation-extension)."
      },
      {
        "h": "Prévenir son assureur habitation",
        "p": "La surface de la maison change : votre contrat multirisque habitation doit être mis à jour à la fin des travaux, faute de quoi la nouvelle pièce pourrait être mal couverte."
      }
    ]
  },
  {
    "slug": "extension-voisins-limite-propriete",
    "cat": "Extension",
    "date": "26 novembre 2026",
    "read": "6 min",
    "title": "Extension et voisins : limite de propriété, distances et vues",
    "seoTitle": "Extension en limite de propriété : les règles",
    "seoDescription": "Construire une extension près du voisin : PLU, distance de la limite, vues droites de 1,90 m, mur mitoyen, recours. Les règles à vérifier avant de dessiner.",
    "excerpt": "Une extension se pose souvent près de la clôture. Trois séries de règles décident de ce qui est permis : le PLU, le Code civil pour les vues, et la mitoyenneté.",
    "img": "/extension/extension-grise-maison-blanche-jardin.webp",
    "alt": "Extension grise à toit plat accolée à une maison blanche, vue depuis le jardin",
    "body": [
      {
        "h": "Le PLU fixe la distance à la limite",
        "p": "Le règlement du PLU dit si l’on peut construire en limite de propriété ou s’il faut garder un recul, et lequel. Il se lit sur le Géoportail de l’urbanisme ou en mairie. Dans une commune sans PLU, une règle nationale s’applique : hors limite, la distance doit être au moins égale à la moitié de la hauteur de la construction, sans descendre sous 3 mètres."
      },
      {
        "h": "Les vues sur le voisin : le Code civil",
        "p": "Une fenêtre qui regarde directement chez le voisin (vue droite) doit être à au moins 1,90 mètre de la limite ; une vue de biais (vue oblique), à 0,60 mètre. Près de la limite, on choisit donc un mur aveugle, des châssis fixes à verre opaque, ou des ouvertures orientées vers son propre jardin."
      },
      {
        "h": "Mur mitoyen et clôture",
        "p": "S’appuyer sur un mur mitoyen ou le surélever demande l’accord du voisin. Construire en limite sur son propre terrain se fait sans son accord, à condition de respecter le PLU, mais les travaux peuvent nécessiter de passer chez lui : mieux vaut en parler tôt."
      },
      {
        "h": "Le droit de recours du voisin",
        "p": "Après affichage de la déclaration ou du permis sur le terrain, un voisin dispose de 2 mois pour la contester. Un projet expliqué en amont limite ce risque ; un projet conforme au PLU le rend rarement fondé."
      },
      {
        "h": "Lotissement : un règlement de plus",
        "p": "En lotissement, comme souvent [autour de Bourg-en-Bresse](/extension-maison-bourg-en-bresse), un règlement propre peut ajouter des reculs ou des règles d’aspect. Nous lisons PLU et règlement avant de dessiner : voyez [notre page extension de maison](/renovation-extension)."
      }
    ]
  }
] as const;
