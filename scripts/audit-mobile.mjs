import { chromium } from 'playwright';

/**
 * Audit mobile : parcourt toutes les pages en 390 px de large et signale
 * ce qui déborde horizontalement, en nommant les éléments fautifs.
 */
const BASE = process.argv[2] ?? 'http://localhost:3007';
const LARGEUR = 390;

const PAGES = [
  '/',
  '/nos-modeles',
  '/realisations',
  '/entreprise',
  '/contact',
  '/terrains',
  '/investisseurs',
  '/blog',
  '/zone-intervention',
  '/renovation-extension',
  '/mentions-legales',
  '/terrains/ta-014',
  '/blog/re2020-2026',
];

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
});
const page = await browser.newPage({
  viewport: { width: LARGEUR, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});

let problemes = 0;

for (const chemin of PAGES) {
  await page.goto(BASE + chemin, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(900);

  const rapport = await page.evaluate((largeur) => {
    const docLargeur = document.documentElement.scrollWidth;
    const fautifs = [];

    if (docLargeur > largeur + 1) {
      for (const el of document.querySelectorAll('body *')) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        if (r.right <= largeur + 1 && r.left >= -1) continue;
        // On ne garde que le nœud le plus profond qui déborde.
        if ([...el.children].some((c) => {
          const cr = c.getBoundingClientRect();
          return cr.right > largeur + 1 || cr.left < -1;
        })) continue;
        fautifs.push({
          tag: el.tagName.toLowerCase(),
          cls: el.className?.toString?.().slice(0, 40) ?? '',
          texte: (el.textContent ?? '').trim().slice(0, 45),
          gauche: Math.round(r.left),
          droite: Math.round(r.right),
        });
        if (fautifs.length >= 5) break;
      }
    }

    // Cibles tactiles trop petites (recommandation : 44 px).
    const petits = [...document.querySelectorAll('a, button')].filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && (r.height < 32 || r.width < 32);
    }).length;

    return { docLargeur, fautifs, petits };
  }, LARGEUR);

  const deborde = rapport.docLargeur > LARGEUR + 1;
  if (deborde) problemes++;

  console.log(
    `${deborde ? '❌' : '✅'} ${chemin.padEnd(26)} largeur ${rapport.docLargeur}px` +
      (rapport.petits ? `  · ${rapport.petits} cible(s) tactile(s) < 32px` : '')
  );
  for (const f of rapport.fautifs) {
    console.log(`      → <${f.tag}${f.cls ? ' class="' + f.cls + '"' : ''}> ` +
      `de ${f.gauche} à ${f.droite}px — « ${f.texte} »`);
  }
}

console.log(`\n${problemes === 0 ? 'Aucun débordement horizontal.' : problemes + ' page(s) en débordement.'}`);
await browser.close();
