import { chromium } from 'playwright';

const url = process.argv[2] ?? 'http://localhost:3000/';
const name = process.argv[3] ?? 'accueil';

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errs = [];
page.on('console', (m) => {
  if (m.type() === 'error') errs.push(m.text().slice(0, 200));
});
page.on('pageerror', (e) => errs.push('PAGEERROR ' + String(e).slice(0, 200)));

await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2000);
await page.screenshot({ path: `/tmp/${name}-haut.png` });
await page.screenshot({ path: `/tmp/${name}-complet.png`, fullPage: true });

const h = await page.evaluate(() => document.body.scrollHeight);
console.log(`${name} — hauteur ${h}px`);
console.log('erreurs console :', errs.length ? '\n  ' + errs.join('\n  ') : 'aucune');

await browser.close();
