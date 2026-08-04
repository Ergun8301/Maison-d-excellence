import fs from 'node:fs';

const j = JSON.parse(fs.readFileSync('/tmp/design/jsonld.json', 'utf8'));

// Coordonnées réelles fournies par le client + identifiants légaux (Kbis).
j.email = 'aykut.atak@sfr.fr';
j.legalName = "MAISONS D'EXCELLENCE CONSTRUCTEURS DE MAISONS INDIVIDUELLES";
j.vatID = 'FR04844477794';
j.taxID = '84447779400011';
j.identifier = [
  { '@type': 'PropertyValue', propertyID: 'SIREN', value: '844477794' },
  { '@type': 'PropertyValue', propertyID: 'SIRET', value: '84447779400011' },
];
j.numberOfEmployees = { '@type': 'QuantitativeValue', minValue: 3, maxValue: 5 };

const doc = `/**
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
export const ORGANISATION_JSONLD = ${JSON.stringify(j, null, 2)} as const;
`;

fs.writeFileSync('/workspace/maison-d-excellence/lib/jsonld.ts', doc, 'utf8');
console.log('écrit lib/jsonld.ts', fs.statSync('/workspace/maison-d-excellence/lib/jsonld.ts').size, 'octets');
