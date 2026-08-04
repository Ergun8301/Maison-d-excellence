import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

/**
 * Convertit les photos du client en WebP.
 *
 * Elles arrivent en PNG — un format sans perte, conçu pour les aplats et les
 * logos, très coûteux pour une photographie — et certaines dépassent 5000 px
 * de large alors que le site n'en affiche jamais plus de 2400. Le poids qui en
 * résulte pénaliserait directement le référencement, qui est l'objectif du
 * projet.
 *
 * La qualité 82 en WebP est visuellement indiscernable de l'original sur ce
 * type de visuel ; c'est le poids, pas le rendu, qui change.
 */
const DIR = 'public/photos';
const MAX_WIDTH = 2400;
const QUALITY = 82;

let avant = 0;
let apres = 0;

for (const file of fs.readdirSync(DIR)) {
  const src = path.join(DIR, file);
  const ext = path.extname(file).toLowerCase();
  if (ext === '.webp') {
    const size = fs.statSync(src).size;
    avant += size;
    apres += size;
    console.log(`${file.padEnd(42)} déjà en WebP, inchangé`);
    continue;
  }

  const dest = path.join(DIR, path.basename(file, ext) + '.webp');
  const tailleAvant = fs.statSync(src).size;

  const image = sharp(src);
  const { width } = await image.metadata();

  await image
    .resize({ width: Math.min(width ?? MAX_WIDTH, MAX_WIDTH), withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(dest);

  const tailleApres = fs.statSync(dest).size;
  fs.unlinkSync(src);

  avant += tailleAvant;
  apres += tailleApres;
  const gain = Math.round((1 - tailleApres / tailleAvant) * 100);
  console.log(
    `${file.padEnd(42)} ${String(Math.round(tailleAvant / 1024)).padStart(5)} Ko → ` +
      `${String(Math.round(tailleApres / 1024)).padStart(4)} Ko  (−${gain} %)`
  );
}

console.log(
  `\nTotal : ${Math.round(avant / 1024 / 1024)} Mo → ${(apres / 1024 / 1024).toFixed(1)} Mo ` +
    `(−${Math.round((1 - apres / avant) * 100)} %)`
);
