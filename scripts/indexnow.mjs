#!/usr/bin/env node
/**
 * IndexNow : prévenir Bing (et Yandex, Seznam, Naver) qu'une page a changé,
 * sans attendre leur prochain passage.
 *
 * Google ne gère PAS IndexNow : pour lui, le plan du site et la Search Console
 * restent la voie. Ce script ne sert qu'aux autres moteurs.
 *
 * PAR DÉFAUT, RIEN N'EST ENVOYÉ. Le script affiche ce qu'il enverrait et
 * s'arrête. L'envoi exige --envoyer, et seulement après la mise en ligne :
 * le protocole fait relire le fichier clé sur le site, qui doit donc déjà être
 * publié (https://<site>/2224c4aae5a4897e4fff7dfd9bf947fe.txt).
 *
 * Utilisation (après « npm run build », qui produit out/sitemap.xml) :
 *
 *   npm run indexnow                         montre l'envoi, sans l'effectuer
 *   npm run indexnow:envoyer                 envoie toutes les adresses du plan
 *   node scripts/indexnow.mjs --envoyer --urls=/blog,/zone-intervention
 *                                            n'envoie que ces chemins
 *
 * L'adresse du site vient de NEXT_PUBLIC_SITE_URL, comme partout dans le
 * projet ; à défaut, de --site=https://…, sinon de l'adresse de production.
 * Les adresses du plan sont reprises avec ce domaine, quel que soit celui sous
 * lequel le site a été construit : un build local écrit « localhost » dans le
 * plan, et ce n'est jamais ce qu'il faut envoyer.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const CLE = '2224c4aae5a4897e4fff7dfd9bf947fe';
const SITE_PAR_DEFAUT = 'https://maisons-dexcellence.fr';
const POINT_D_ENTREE = 'https://api.indexnow.org/IndexNow';
const MAX_PAR_ENVOI = 10000; // plafond du protocole

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const option = (nom) => args.find((a) => a.startsWith(`--${nom}=`))?.split('=').slice(1).join('=');
const envoyer = args.includes('--envoyer');

const site = (option('site') ?? process.env.NEXT_PUBLIC_SITE_URL ?? SITE_PAR_DEFAUT).replace(/\/$/, '');
if (!/^https:\/\//.test(site)) {
  console.error(`Adresse du site refusée : « ${site} ». IndexNow exige une adresse https publique, pas un build local.`);
  process.exit(1);
}
const hote = new URL(site).host;

// 1) les adresses à notifier
let chemins;
if (option('urls')) {
  chemins = option('urls').split(',').map((c) => c.trim()).filter(Boolean).map((c) => (c.startsWith('/') ? c : `/${c}`));
} else {
  const plan = path.join(racine, 'out', 'sitemap.xml');
  if (!fs.existsSync(plan)) {
    console.error('out/sitemap.xml est introuvable : lancez d’abord « npm run build », ou passez --urls=/page1,/page2.');
    process.exit(1);
  }
  chemins = [...fs.readFileSync(plan, 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}
chemins = [...new Set(chemins)];
if (!chemins.length) { console.error('Aucune adresse à notifier.'); process.exit(1); }
if (chemins.length > MAX_PAR_ENVOI) { console.error(`${chemins.length} adresses : le protocole en accepte ${MAX_PAR_ENVOI} par envoi.`); process.exit(1); }

const corps = {
  host: hote,
  key: CLE,
  keyLocation: `${site}/${CLE}.txt`,
  urlList: chemins.map((c) => `${site}${c}`),
};

console.log(`IndexNow · ${corps.urlList.length} adresse(s) pour ${hote}`);
console.log(`fichier clé : ${corps.keyLocation}`);
corps.urlList.slice(0, 8).forEach((u) => console.log(`  ${u}`));
if (corps.urlList.length > 8) console.log(`  … et ${corps.urlList.length - 8} autre(s)`);

if (!envoyer) {
  console.log('\nRien n’a été envoyé (simulation). Ajoutez --envoyer, ou lancez « npm run indexnow:envoyer », une fois le site en ligne.');
  process.exit(0);
}

// 2) le fichier clé doit être servi, avec exactement la clé : sinon Bing refuse tout l'envoi
const lu = await fetch(corps.keyLocation).then((r) => (r.ok ? r.text() : null)).catch(() => null);
if (lu === null || lu.trim() !== CLE) {
  console.error(`Le fichier clé n’est pas servi à ${corps.keyLocation} (ou son contenu diffère). Publiez le site avant d’envoyer.`);
  process.exit(1);
}

// 3) l'envoi
const rep = await fetch(POINT_D_ENTREE, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(corps),
});
console.log(`Réponse : ${rep.status} ${rep.statusText}`);
// 200 : reçu · 202 : reçu, clé en cours de vérification · 400/422/429 : à lire, rien n'est perdu
if (rep.status !== 200 && rep.status !== 202) {
  console.error((await rep.text().catch(() => '')) || 'Envoi refusé.');
  process.exit(1);
}
