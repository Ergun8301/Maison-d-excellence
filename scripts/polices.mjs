/**
 * Régénère app/fonts.css et public/fonts à partir de Google Fonts.
 *
 * Le site n'appelle plus Google au chargement : les fichiers de police sont
 * hébergés avec lui. Ce script est ce qui rend ce choix tenable dans le temps
 * — sans lui, personne ne saurait plus d'où viennent ces seize fichiers ni
 * comment les remettre à jour.
 *
 *   node scripts/polices.mjs
 *
 * Il redemande à Google la feuille correspondant à REQUETE, recopie chaque
 * déclaration sans y toucher — familles, graisses, styles, `unicode-range`,
 * `font-display` — et ne réécrit que l'adresse de `src`. Le dessin des textes
 * ne peut donc pas bouger. Il refuse d'écrire si Google répond autre chose que
 * ce qui est attendu, plutôt que de produire une feuille à moitié juste.
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RACINE = join(dirname(fileURLToPath(import.meta.url)), '..');

/** La requête exacte que portait app/layout.tsx avant l'hébergement local. */
const REQUETE =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Manrope:wght@300;400;500;600;700;800&display=swap';

/** Google ne sert du woff2 qu'aux navigateurs qu'il reconnaît. */
const NAVIGATEUR =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36';

const reponse = await fetch(REQUETE, { headers: { 'User-Agent': NAVIGATEUR } });
if (!reponse.ok) throw new Error(`Google a répondu ${reponse.status}`);
const css = await reponse.text();

/* Chaque bloc est précédé d'un commentaire nommant le sous-ensemble. */
const blocs = [...css.matchAll(/\/\*\s*([a-z-]+)\s*\*\/\s*@font-face\s*\{(.*?)\}/gs)];
if (blocs.length === 0) throw new Error('aucune déclaration @font-face reçue');

/* Une police variable tient en un fichier par style et par sous-ensemble : on
 * nomme donc les fichiers ainsi, et on vérifie que la correspondance est bien
 * univoque avant d'écrire quoi que ce soit. */
const nomParUrl = new Map();
for (const [, sousEnsemble, corps] of blocs) {
  const famille = corps.match(/font-family:\s*'([^']+)'/)[1];
  const style = corps.match(/font-style:\s*(\w+)/)[1];
  const url = corps.match(/url\((https:\/\/[^)]+)\)/)[1];
  const nom = `${famille.toLowerCase().replaceAll(' ', '-')}-${style}-${sousEnsemble}.woff2`;
  const connu = nomParUrl.get(url);
  if (connu && connu !== nom) throw new Error(`un même fichier pour ${connu} et ${nom}`);
  nomParUrl.set(url, nom);
}
if (new Set(nomParUrl.values()).size !== nomParUrl.size) {
  throw new Error('deux fichiers différents porteraient le même nom');
}

await mkdir(join(RACINE, 'public/fonts'), { recursive: true });
for (const [url, nom] of nomParUrl) {
  const f = await fetch(url, { headers: { 'User-Agent': NAVIGATEUR } });
  if (!f.ok) throw new Error(`${nom} : Google a répondu ${f.status}`);
  const octets = Buffer.from(await f.arrayBuffer());
  /* woff2 commence par « wOF2 ». Une page d'erreur enregistrée sous .woff2
   * casserait les textes sans rien signaler. */
  if (octets.subarray(0, 4).toString('latin1') !== 'wOF2') {
    throw new Error(`${nom} : ce n'est pas un fichier woff2`);
  }
  await writeFile(join(RACINE, 'public/fonts', nom), octets);
  console.log(`  ${nom.padEnd(44)} ${String(octets.length).padStart(7)} o`);
}

const locale = css.replace(
  /url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/g,
  (_, url) => `url('/fonts/${nomParUrl.get(url)}')`
);
if (/https?:\/\//.test(locale)) throw new Error('une adresse externe subsiste');

const entete = `/*
 * Polices servies depuis le site, et non depuis Google.
 *
 * Fichier produit par scripts/polices.mjs — ne pas modifier à la main.
 * Voir ce script pour la requête d'origine et la raison de ce choix.
 */

`;
await writeFile(join(RACINE, 'app/fonts.css'), entete + locale, 'utf8');
console.log(`\n${blocs.length} déclarations, ${nomParUrl.size} fichiers. app/fonts.css réécrit.`);
