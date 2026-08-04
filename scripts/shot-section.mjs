import { chromium } from 'playwright';

/** Capture la section contenant un texte donné. */
const [url, needle, name] = process.argv.slice(2);

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(1200);

const section = page.locator('section', { hasText: needle }).last();
await section.scrollIntoViewIfNeeded();
await page.waitForTimeout(1400); // laisse jouer les révélations
await section.screenshot({ path: `/tmp/${name}.png` });

console.log(name, '→ capturé');
await browser.close();
