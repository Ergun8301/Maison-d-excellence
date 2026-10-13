import { COMMUNES } from '@/lib/data/communes';
import { ORGANISATION_JSONLD } from '@/lib/jsonld';

/**
 * Données des deux cartes, pour la page autonome public/carte.html.
 *
 * Les cartes vivent dans un cadre, donc dans un document séparé qui ne peut
 * pas importer de TypeScript. Plutôt que recopier les communes et les
 * coordonnées du bureau dans ce fichier statique — deux listes à maintenir en
 * parallèle, dont l'une finirait par mentir — on les sert ici, depuis les
 * mêmes données que le reste du site.
 *
 * Route statique : l'export en pages statiques la rend une fois à la
 * construction, elle ne coûte rien à l'exécution. Même procédé que llms.txt.
 */
export const dynamic = 'force-static';

export function GET() {
  const geo = ORGANISATION_JSONLD.geo;

  return Response.json({
    /* Le bureau, pour la carte de la page Contact. */
    bureau: {
      nom: ORGANISATION_JSONLD.name,
      lat: geo.latitude,
      lng: geo.longitude,
      adresse: `${ORGANISATION_JSONLD.address.streetAddress}, ${ORGANISATION_JSONLD.address.postalCode} ${ORGANISATION_JSONLD.address.addressLocality}`,
      tel: ORGANISATION_JSONLD.telephone,
    },
    /* Les communes desservies, pour la carte de la page Zone. `pole` marque
     * les trois villes qui portent un cercle de 30 km et leur nom. */
    communes: COMMUNES.map((c) => ({ nom: c.n, lat: c.lat, lng: c.lng, pole: 'hub' in c && c.hub === true })),
    /** Rayon des cercles, en mètres. */
    rayon: 30000,
  });
}
