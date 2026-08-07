/**
 * Fabrique les versions vectorielles du logo Maisons d'Excellence.
 *
 * Le seul fichier fourni par le client est un PNG de 428 × 421 destiné à
 * l'onglet du navigateur : fond incrusté, contours crénelés, inutilisable
 * dans un en-tête. Le tracé ci-dessous a été ajusté sur ce bitmap par
 * descente de coordonnées, en maximisant le recouvrement pixel à pixel —
 * 96,6 % au terme de l'ajustement, le reliquat tenant à l'ombre portée et au
 * lissage du fichier d'origine, pas à la forme.
 *
 * Le logo est un chevron à bouts ronds — mur vertical, puis les deux pans du
 * toit — surmontant un rectangle à coins arrondis posé sous l'auvent, sans
 * recouvrement entre les deux.
 *
 *   node scripts/logo.mjs
 */
import { writeFileSync } from 'node:fs';

/** Cotes relevées sur le bitmap, dans son propre repère de 428 × 421. */
const AJUSTE = {
  lx: 72, ay: 346, by: 217.5, sx: 231.75, sy: 63.5, ex: 339.25, ey: 160.5, w: 62.75,
  rx: 182, ry: 253.5, rw: 97.25, rh: 122, rr: 11.5,
};

/** Couleurs relevées sur le bitmap, teinte dominante de chaque aplat. */
export const COULEURS = { toit: '#55A845', porte: '#FEFEFE', fond: '#202123' };

/** Palette du site, pour les déclinaisons. */
const OR = '#D3B27A';
const CREME = '#F7F7F4';

// Cadre du dessin dans le bitmap : le vert déborde du chevron de la moitié de
// son épaisseur, le rectangle est pris tel quel.
const demi = AJUSTE.w / 2;
const boite = {
  x0: Math.min(AJUSTE.lx - demi, AJUSTE.sx - demi, AJUSTE.ex - demi, AJUSTE.rx),
  x1: Math.max(AJUSTE.lx + demi, AJUSTE.sx + demi, AJUSTE.ex + demi, AJUSTE.rx + AJUSTE.rw),
  y0: Math.min(AJUSTE.sy - demi, AJUSTE.ry),
  y1: Math.max(AJUSTE.ay + demi, AJUSTE.ry + AJUSTE.rh),
};

// On ramène le dessin dans un carré de 100 en gardant 6 de marge, pour que le
// logo puisse être posé sans calcul dans n'importe quel gabarit carré.
const MARGE = 6;
const large = boite.x1 - boite.x0;
const haut = boite.y1 - boite.y0;
const k = (100 - 2 * MARGE) / Math.max(large, haut);
const dx = MARGE + (100 - 2 * MARGE - large * k) / 2 - boite.x0 * k;
const dy = MARGE + (100 - 2 * MARGE - haut * k) / 2 - boite.y0 * k;

const n = (v) => Number(v.toFixed(2));
const X = (v) => n(v * k + dx);
const Y = (v) => n(v * k + dy);
const L = (v) => n(v * k);

const CHEMIN = `M ${X(AJUSTE.lx)} ${Y(AJUSTE.ay)} L ${X(AJUSTE.lx)} ${Y(AJUSTE.by)} ` +
  `L ${X(AJUSTE.sx)} ${Y(AJUSTE.sy)} L ${X(AJUSTE.ex)} ${Y(AJUSTE.ey)}`;
const EPAISSEUR = L(AJUSTE.w);
const PORTE = { x: X(AJUSTE.rx), y: Y(AJUSTE.ry), w: L(AJUSTE.rw), h: L(AJUSTE.rh), r: L(AJUSTE.rr) };

/**
 * @param {object} o
 * @param {string} o.toit    couleur du chevron
 * @param {string} o.porte   couleur du rectangle
 * @param {string} [o.fond]  couleur du carré de fond ; omis = fond transparent
 * @param {string} o.titre   titre accessible
 */
function dessine({ toit, porte, fond, titre }) {
  const carre = fond
    ? `\n  <rect width="100" height="100" rx="22" fill="${fond}"/>`
    : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="${titre}">
  <title>${titre}</title>${carre}
  <path d="${CHEMIN}" fill="none" stroke="${toit}" stroke-width="${EPAISSEUR}"
        stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="${PORTE.x}" y="${PORTE.y}" width="${PORTE.w}" height="${PORTE.h}" rx="${PORTE.r}" fill="${porte}"/>
</svg>
`;
}

const TITRE = "Maisons d'Excellence";
const VERSIONS = {
  // Couleurs d'origine, fond transparent : la version passe-partout.
  'logo.svg': { toit: COULEURS.toit, porte: COULEURS.porte, titre: TITRE },
  // Couleurs d'origine sur le carré sombre, comme l'icône d'application.
  'logo-fond.svg': { toit: COULEURS.toit, porte: COULEURS.porte, fond: COULEURS.fond, titre: TITRE },
  // Une seule teinte, héritée du texte : l'en-tête choisit la couleur en CSS.
  'logo-mono.svg': { toit: 'currentColor', porte: 'currentColor', titre: TITRE },
  // Palette du site, pour poser le logo à côté du nom sans jurer.
  'logo-or.svg': { toit: OR, porte: CREME, titre: TITRE },
  'logo-or-fond.svg': { toit: OR, porte: CREME, fond: COULEURS.fond, titre: TITRE },
};

for (const [nom, o] of Object.entries(VERSIONS)) {
  writeFileSync(new URL(`../public/${nom}`, import.meta.url), dessine(o));
  console.log('écrit public/' + nom);
}
