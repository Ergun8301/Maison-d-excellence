/**
 * Produit les images de partage (Open Graph) dans public/partage.
 *
 *   node scripts/partage.mjs
 *
 * Pourquoi elles existent : partagé sur WhatsApp, le site n'affichait aucune
 * miniature. `og:image` manquait sur les dix-sept pages — les autres balises
 * étaient là, mais sans image un réseau n'a rien à montrer.
 *
 * Pourquoi du JPEG, et non le WebP déjà présent dans public/photos : WhatsApp
 * ne sait pas afficher un WebP en aperçu. Toutes les photos du site sont en
 * WebP, il fallait donc des dérivés JPEG dédiés.
 *
 * Pourquoi 1200 × 630 : c'est le format que Facebook, LinkedIn, WhatsApp et
 * iMessage attendent pour une grande carte. Une image plus petite est affichée
 * en vignette carrée, une image d'un autre rapport est recadrée à l'aveugle.
 *
 * L'image générique reprend la composition du bandeau d'accueil : mêmes
 * polices, servies depuis public/fonts, mêmes teintes, même voile d'encre.
 * Elle est composée dans un vrai navigateur plutôt que dessinée en SVG, pour
 * que la typographie soit exactement celle du site — c'est la seule étape qui
 * demande Playwright ; tout le reste tient avec sharp.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const RACINE = join(dirname(fileURLToPath(import.meta.url)), '..');
const SORTIE = join(RACINE, 'public/partage');
const require_ = createRequire(import.meta.url);
const sharp = require_('sharp');

const LARGEUR = 1200, HAUTEUR = 630, QUALITE = 86, PLAFOND_KO = 300;

/** Recadre au format d'une carte sociale, en gardant le haut du sujet. */
async function cadrer(source, decalageHaut = 0) {
  const m = await sharp(source).metadata();
  const h = Math.round(m.width / (LARGEUR / HAUTEUR));
  const top = Math.min(Math.max(0, decalageHaut), Math.max(0, m.height - h));
  return sharp(source)
    .extract({ left: 0, top, width: m.width, height: Math.min(h, m.height) })
    .resize(LARGEUR, HAUTEUR);
}

async function ecrire(pipeline, nom) {
  const buf = await pipeline.jpeg({ quality: QUALITE, mozjpeg: true }).toBuffer();
  const ko = Math.round(buf.length / 1024);
  if (ko > PLAFOND_KO) throw new Error(`${nom} pèse ${ko} Ko, au-dessus du plafond de ${PLAFOND_KO} Ko`);
  const m = await sharp(buf).metadata();
  if (m.width !== LARGEUR || m.height !== HAUTEUR) throw new Error(`${nom} fait ${m.width}×${m.height}`);
  if (m.format !== 'jpeg') throw new Error(`${nom} n'est pas un JPEG`);
  await writeFile(join(SORTIE, nom), buf);
  console.log(`  ${nom.padEnd(38)} ${String(ko).padStart(3)} Ko  ${m.width}×${m.height}`);
}

/* Photo de fond de l'image générique : une maison réellement livrée, et non
 * une image de synthèse — c'est la première chose que voit quelqu'un à qui on
 * partage le lien. */
const FOND = 'public/photos/maison-etage-enduit-pierre-double-garage.webp';

/* Chaque article reçoit une photo du site en rapport avec son sujet. */
const ARTICLES = [
  ['re2020-2026',                'chantier-gros-oeuvre-brique',           140],
  ['prix-construction-m2',       'maison-plain-pied-contemporaine',       120],
  ['budget-maison-100m2',        'maison-plain-pied-en-l',                140],
  ['etapes-projet-construction', 'charpente-fermette-bois',               180],
  ['echeancier-ccmi',            'maison-plain-pied-livraison-terrain-nu', 90],
];

await mkdir(SORTIE, { recursive: true });

console.log('Images de partage :');
for (const [slug, photo, top] of ARTICLES) {
  await ecrire(await cadrer(join(RACINE, `public/photos/${photo}.webp`), top), `blog-${slug}.jpg`);
}

/* ── Image générique, composée dans le navigateur ────────────────────────── */
let chromium;
try {
  ({ chromium } = require_('/opt/node22/lib/node_modules/playwright/index.js'));
} catch {
  console.log('\n  Playwright absent : image générique non régénérée.');
  console.log('  Les images d\'articles ci-dessus sont à jour ; public/partage/maisons-dexcellence.jpg');
  console.log('  reste celle déjà versionnée.');
  process.exit(0);
}

const fondCadre = await (await cadrer(join(RACINE, FOND), 120)).jpeg({ quality: 92 }).toBuffer();
const dataFond = `data:image/jpeg;base64,${fondCadre.toString('base64')}`;
const police = async (f) =>
  `data:font/woff2;base64,${(await sharp === null ? '' : (await import('node:fs/promises')).readFile(join(RACINE, 'public/fonts', f)).then((b) => b.toString('base64')))}`;
const cormorant = await police('cormorant-garamond-normal-latin.woff2');
const manrope = await police('manrope-normal-latin.woff2');

const html = `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:'Cormorant Garamond';src:url('${cormorant}') format('woff2');font-weight:300 700;font-display:block}
@font-face{font-family:'Manrope';src:url('${manrope}') format('woff2');font-weight:200 800;font-display:block}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${LARGEUR}px;height:${HAUTEUR}px;overflow:hidden}
.carte{position:relative;width:${LARGEUR}px;height:${HAUTEUR}px;background:#0B0D0C url('${dataFond}') center/cover no-repeat}
.voile{position:absolute;inset:0;background:radial-gradient(118% 92% at 50% 50%,rgba(11,13,12,0.30) 0%,rgba(11,13,12,0.56) 56%,rgba(11,13,12,0.80) 100%)}
.voile2{position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,13,12,0.42) 0%,rgba(11,13,12,0.12) 32%,rgba(11,13,12,0.16) 62%,rgba(11,13,12,0.52) 100%)}
.bloc{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 72px}
.nom{font-family:'Cormorant Garamond',serif;font-weight:400;font-size:68px;line-height:1.14;letter-spacing:0.30em;text-indent:0.30em;color:#F7F7F4;text-shadow:0 4px 40px rgba(11,13,12,0.72),0 2px 18px rgba(11,13,12,0.7)}
.filet{width:2px;height:58px;margin:30px 0 26px;border-radius:2px;background:linear-gradient(180deg,rgba(211,178,122,0) 0%,rgba(211,178,122,0.55) 20%,rgba(211,178,122,0.55) 80%,rgba(211,178,122,0) 100%)}
.ligne{display:flex;align-items:center;justify-content:center;gap:18px}
.regle{width:46px;height:1px;background:rgba(199,166,110,0.8)}
.sous{font-family:'Manrope',system-ui,sans-serif;font-weight:600;font-size:18px;letter-spacing:0.20em;text-transform:uppercase;color:rgba(247,247,244,0.92);text-shadow:0 1px 14px rgba(11,13,12,0.75)}
</style>
<div class="carte"><div class="voile"></div><div class="voile2"></div><div class="bloc">
<div class="nom">MAISONS D'EXCELLENCE</div><span class="filet"></span>
<div class="ligne"><span class="regle"></span><span class="sous">Constructeur de maisons individuelles à Meximieux</span><span class="regle"></span></div>
</div></div>`;

const nav = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await nav.newPage({ viewport: { width: LARGEUR, height: HAUTEUR }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(500);
const brut = await page.screenshot({ type: 'png' });
await nav.close();
await ecrire(sharp(brut), 'maisons-dexcellence.jpg');
console.log('\nTerminé.');
