/**
 * Balisage JSON-LD de l'établissement, repris de la maquette Claude Design.
 *
 * Deux écarts assumés :
 *  - l'adresse e-mail passe à celle du dirigeant, la boîte contact@ du domaine
 *    n'existant pas encore ;
 *  - ajout des identifiants légaux relevés sur le Kbis (SIREN, SIRET, TVA) et
 *    de l'effectif, qui renforcent le balisage local.
 *
 * La note 5,0 sur 36 avis correspond bien à la fiche Google de l'établissement.
 */
export const ORGANISATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://www.maisons-dexcellence.fr/#entreprise",
  "name": "Maisons d'Excellence",
  "alternateName": "Maisons d'Excellence Constructeurs de Maisons Individuelles",
  "description": "Constructeur de maisons individuelles sur-mesure dans l'Ain : maison en brique, siporex, vide sanitaire, charpente traditionnelle, conformité RE2020. CCMI et garanties complètes.",
  "url": "https://www.maisons-dexcellence.fr/",
  // Le logo alimente le panneau de connaissances de Google ; la photo sert
  // d'illustration de l'établissement. Adresses absolues obligatoires : un
  // chemin relatif n'a pas de sens pour un moteur qui lit le balisage seul.
  "logo": "https://www.maisons-dexcellence.fr/logo-fond.svg",
  "image": [
    "https://www.maisons-dexcellence.fr/photos/bureau-meximieux-facade.webp",
    "https://www.maisons-dexcellence.fr/photos/devanture-rue.webp"
  ],
  "telephone": "+33474346643",
  "email": "aykut.atak@sfr.fr",
  "priceRange": "€€€",
  "founder": {
    "@type": "Person",
    "name": "Aykut Atak"
  },
  "foundingDate": "2019",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6 rue de Genève",
    "postalCode": "01800",
    "addressLocality": "Meximieux",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.903688,
    "longitude": 5.192938
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:30",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "description": "Sur rendez-vous"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Meximieux"
    },
    {
      "@type": "City",
      "name": "Bourg-en-Bresse"
    },
    {
      "@type": "City",
      "name": "Ambérieu-en-Bugey"
    },
    {
      "@type": "City",
      "name": "Villefranche-sur-Saône"
    },
    {
      "@type": "City",
      "name": "Montluel"
    },
    {
      "@type": "City",
      "name": "Lagnieu"
    },
    {
      "@type": "City",
      "name": "Pérouges"
    },
    {
      "@type": "City",
      "name": "Chalamont"
    },
    {
      "@type": "City",
      "name": "Villars-les-Dombes"
    },
    {
      "@type": "City",
      "name": "Miribel"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 45.903688,
      "longitude": 5.192938
    },
    "geoRadius": "30000"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "36",
    "bestRating": "5"
  },
  // `sameAs` relie l'entité décrite ici à ses profils publics. La fiche
  // Google est celle qui porte les 36 avis repris plus haut.
  "sameAs": [
    "https://www.instagram.com/maisonsdexcellence",
    "https://search.google.com/local/reviews?placeid=ChIJ93t0HkWz9EcRIXzMIN2ZCAE"
  ],
  "knowsAbout": [
    "construction de maison individuelle",
    "CCMI",
    "RE2020",
    "maison en brique",
    "béton cellulaire siporex",
    "charpente traditionnelle",
    "vide sanitaire",
    "extension de maison"
  ],
  "legalName": "MAISONS D'EXCELLENCE CONSTRUCTEURS DE MAISONS INDIVIDUELLES",
  "vatID": "FR04844477794",
  "taxID": "84447779400011",
  "identifier": [
    {
      "@type": "PropertyValue",
      "propertyID": "SIREN",
      "value": "844477794"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "SIRET",
      "value": "84447779400011"
    }
  ],
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 3,
    "maxValue": 5
  }
} as const;
