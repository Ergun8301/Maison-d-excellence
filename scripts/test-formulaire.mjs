import { chromium } from 'playwright';

/** Remplit le formulaire de contact et vérifie ce qui part vers WhatsApp. */
const base = process.argv[2] ?? 'http://localhost:3002';

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

// On intercepte l'ouverture de WhatsApp pour lire l'URL sans quitter la page.
await page.addInitScript(() => {
  window.__wa = null;
  window.open = (url) => {
    window.__wa = url;
    return null;
  };
});

await page.goto(base + '/contact', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(1200);

const form = page.locator('form').first();
await form.locator('input[type="text"]').first().fill('Jean Dupont');
await form.locator('input[type="tel"]').first().fill('06 12 34 56 78');
await form.locator('input[type="email"]').first().fill('jean.dupont@example.fr');
await form.locator('textarea').first().fill('Terrain à Pérouges, maison de 120 m².');
const checkbox = form.locator('input[type="checkbox"]');
if (await checkbox.count()) await checkbox.first().check();

await form.locator('button[type="submit"], button').last().click();
await page.waitForTimeout(900);

const url = await page.evaluate(() => window.__wa);
if (!url) {
  console.log('ÉCHEC : rien n’a été envoyé vers WhatsApp');
  process.exitCode = 1;
} else {
  const u = new URL(url);
  console.log('Destinataire :', u.pathname.replace('/', ''));
  console.log('Message :\n---');
  console.log(decodeURIComponent(u.searchParams.get('text') ?? ''));
  console.log('---');
}

const confirmation = await page.locator('text=/merci/i').count();
console.log('Écran de confirmation affiché :', confirmation > 0 ? 'oui' : 'non');

await browser.close();
