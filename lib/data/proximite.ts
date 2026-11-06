/**
 * Communes les plus proches de chaque page locale, pour le bloc « Communes
 * voisines » posé en bas de chacune (components/views/Locale.tsx).
 *
 * Chaque entrée : les six pages locales les plus proches, de la plus proche à
 * la plus éloignée, avec la distance à vol d'oiseau en kilomètres, arrondie.
 * Calcul fait entre les centres de communes publiés par l'API officielle
 * geo.api.gouv.fr (état du 2 novembre 2026), formule de haversine. Les
 * distances par la route sont plus longues : le bloc le dit.
 *
 * Fichier calculé, à refaire si une page locale est ajoutée : le tableau doit
 * toujours désigner des pages qui existent (components/views/Locale.tsx ne
 * rend que celles qu'il trouve dans lib/data/locales.ts).
 */
export const COMMUNES_PROCHES: Readonly<Record<string, readonly (readonly [slug: string, km: number])[]>> = {
  'construction-maison-meximieux': [['construction-maison-villieu-loyes-mollon', 3], ['construction-maison-bourg-saint-christophe', 6], ['construction-maison-lagnieu', 10], ['construction-maison-saint-denis-en-bugey', 10], ['construction-maison-chateau-gaillard', 11], ['construction-maison-dagneux', 12]],
  'construction-maison-bourg-en-bresse': [['construction-maison-montagnat', 4], ['construction-maison-peronnas', 4], ['construction-maison-saint-denis-les-bourg', 5], ['construction-maison-jasseron', 6], ['construction-maison-viriat', 6], ['construction-maison-ceyzeriat', 6]],
  'construction-maison-amberieu-en-bugey': [['construction-maison-saint-denis-en-bugey', 4], ['construction-maison-chateau-gaillard', 5], ['construction-maison-lagnieu', 8], ['construction-maison-pont-d-ain', 11], ['construction-maison-villieu-loyes-mollon', 12], ['construction-maison-meximieux', 14]],
  'construction-maison-viriat': [['construction-maison-attignat', 5], ['construction-maison-bourg-en-bresse', 6], ['construction-maison-saint-denis-les-bourg', 6], ['construction-maison-polliat', 7], ['construction-maison-buellas', 8], ['construction-maison-jasseron', 8]],
  'construction-maison-peronnas': [['construction-maison-bourg-en-bresse', 4], ['construction-maison-montagnat', 4], ['construction-maison-servas', 5], ['construction-maison-saint-denis-les-bourg', 5], ['construction-maison-buellas', 7], ['construction-maison-ceyzeriat', 8]],
  'construction-maison-saint-denis-les-bourg': [['construction-maison-buellas', 3], ['construction-maison-bourg-en-bresse', 5], ['construction-maison-peronnas', 5], ['construction-maison-viriat', 6], ['construction-maison-polliat', 6], ['construction-maison-servas', 8]],
  'construction-maison-attignat': [['construction-maison-viriat', 5], ['construction-maison-polliat', 5], ['construction-maison-montrevel-en-bresse', 7], ['construction-maison-marboz', 8], ['construction-maison-saint-denis-les-bourg', 8], ['construction-maison-buellas', 9]],
  'construction-maison-ceyzeriat': [['construction-maison-montagnat', 3], ['construction-maison-jasseron', 4], ['construction-maison-bourg-en-bresse', 6], ['construction-maison-peronnas', 8], ['construction-maison-viriat', 11], ['construction-maison-saint-denis-les-bourg', 11]],
  'construction-maison-montagnat': [['construction-maison-ceyzeriat', 3], ['construction-maison-bourg-en-bresse', 4], ['construction-maison-peronnas', 4], ['construction-maison-jasseron', 6], ['construction-maison-servas', 8], ['construction-maison-saint-denis-les-bourg', 8]],
  'construction-maison-marboz': [['construction-maison-attignat', 8], ['construction-maison-viriat', 10], ['construction-maison-montrevel-en-bresse', 10], ['construction-maison-polliat', 14], ['construction-maison-jasseron', 15], ['construction-maison-saint-denis-les-bourg', 16]],
  'construction-maison-montrevel-en-bresse': [['construction-maison-attignat', 7], ['construction-maison-polliat', 9], ['construction-maison-marboz', 10], ['construction-maison-viriat', 12], ['construction-maison-buellas', 13], ['construction-maison-saint-denis-les-bourg', 14]],
  'construction-maison-montluel': [['construction-maison-dagneux', 6], ['construction-maison-bourg-saint-christophe', 9], ['construction-maison-meximieux', 15], ['construction-maison-villieu-loyes-mollon', 17], ['construction-maison-chateau-gaillard', 24], ['construction-maison-saint-denis-en-bugey', 25]],
  'construction-maison-lagnieu': [['construction-maison-saint-denis-en-bugey', 7], ['construction-maison-amberieu-en-bugey', 8], ['construction-maison-chateau-gaillard', 10], ['construction-maison-villieu-loyes-mollon', 10], ['construction-maison-meximieux', 10], ['construction-maison-bourg-saint-christophe', 16]],
  'construction-maison-pont-d-ain': [['construction-maison-chateau-gaillard', 10], ['construction-maison-amberieu-en-bugey', 11], ['construction-maison-saint-denis-en-bugey', 12], ['construction-maison-montagnat', 14], ['construction-maison-ceyzeriat', 14], ['construction-maison-servas', 16]],
  'construction-maison-dagneux': [['construction-maison-montluel', 6], ['construction-maison-bourg-saint-christophe', 6], ['construction-maison-meximieux', 12], ['construction-maison-villieu-loyes-mollon', 14], ['construction-maison-lagnieu', 21], ['construction-maison-saint-denis-en-bugey', 22]],
  'construction-maison-saint-denis-en-bugey': [['construction-maison-chateau-gaillard', 3], ['construction-maison-amberieu-en-bugey', 4], ['construction-maison-lagnieu', 7], ['construction-maison-villieu-loyes-mollon', 8], ['construction-maison-meximieux', 10], ['construction-maison-pont-d-ain', 12]],
  'construction-maison-chateau-gaillard': [['construction-maison-saint-denis-en-bugey', 3], ['construction-maison-amberieu-en-bugey', 5], ['construction-maison-villieu-loyes-mollon', 8], ['construction-maison-pont-d-ain', 10], ['construction-maison-lagnieu', 10], ['construction-maison-meximieux', 11]],
  'construction-maison-bourg-saint-christophe': [['construction-maison-dagneux', 6], ['construction-maison-meximieux', 6], ['construction-maison-villieu-loyes-mollon', 8], ['construction-maison-montluel', 9], ['construction-maison-lagnieu', 16], ['construction-maison-saint-denis-en-bugey', 16]],
  'construction-maison-villieu-loyes-mollon': [['construction-maison-meximieux', 3], ['construction-maison-chateau-gaillard', 8], ['construction-maison-saint-denis-en-bugey', 8], ['construction-maison-bourg-saint-christophe', 8], ['construction-maison-lagnieu', 10], ['construction-maison-amberieu-en-bugey', 12]],
  'construction-maison-polliat': [['construction-maison-buellas', 4], ['construction-maison-attignat', 5], ['construction-maison-saint-denis-les-bourg', 6], ['construction-maison-viriat', 7], ['construction-maison-montrevel-en-bresse', 9], ['construction-maison-bourg-en-bresse', 10]],
  'construction-maison-servas': [['construction-maison-peronnas', 5], ['construction-maison-saint-denis-les-bourg', 8], ['construction-maison-montagnat', 8], ['construction-maison-bourg-en-bresse', 9], ['construction-maison-buellas', 9], ['construction-maison-ceyzeriat', 12]],
  'construction-maison-jasseron': [['construction-maison-ceyzeriat', 4], ['construction-maison-bourg-en-bresse', 6], ['construction-maison-montagnat', 6], ['construction-maison-viriat', 8], ['construction-maison-peronnas', 9], ['construction-maison-saint-denis-les-bourg', 10]],
  'construction-maison-buellas': [['construction-maison-saint-denis-les-bourg', 3], ['construction-maison-polliat', 4], ['construction-maison-peronnas', 7], ['construction-maison-viriat', 8], ['construction-maison-bourg-en-bresse', 8], ['construction-maison-attignat', 9]],
};
