/**
 * Copie Leaflet depuis node_modules vers public/vendor/leaflet.
 *
 *   node scripts/vendor.mjs
 *
 * Les cartes vivent dans une page autonome (public/carte.html) chargée en
 * cadre. Cette page a besoin de Leaflet, et le prendre sur un CDN ferait
 * repartir l'adresse IP du visiteur chez un tiers — exactement ce qu'on a
 * retiré pour les polices et les photos. Les fichiers sont donc versionnés
 * avec le site.
 *
 * Ils sont versionnés plutôt que recopiés à chaque construction : une étape de
 * préconstruction qui échoue en silence laisserait une carte blanche en
 * production, sans que rien ne le signale. Relancer ce script après une mise à
 * jour de Leaflet, puis valider le résultat sur un aperçu.
 */
import { mkdir, copyFile, readdir, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RACINE = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(RACINE, 'node_modules/leaflet/dist');
const CIBLE = join(RACINE, 'public/vendor/leaflet');

const version = JSON.parse(
  await readFile(join(RACINE, 'node_modules/leaflet/package.json'), 'utf8')
).version;

await mkdir(join(CIBLE, 'images'), { recursive: true });
for (const f of ['leaflet.js', 'leaflet.css']) {
  await copyFile(join(SOURCE, f), join(CIBLE, f));
  console.log(`  ${f}`);
}
/* Les images sont indispensables : sans elles, les commandes de zoom et le
 * marqueur par défaut s'affichent en cadres vides. */
for (const f of await readdir(join(SOURCE, 'images'))) {
  await copyFile(join(SOURCE, 'images', f), join(CIBLE, 'images', f));
}
console.log(`  images/ (${(await readdir(join(SOURCE, 'images'))).length} fichiers)`);
console.log(`\nLeaflet ${version} copié dans public/vendor/leaflet.`);
