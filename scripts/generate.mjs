import fs from 'node:fs';
import path from 'node:path';
import { toJsx } from './tojsx.mjs';

const SRC = "/workspace/maison-d-excellence/design/Maisons d'Excellence.dc.html";
const ROOT = '/workspace/maison-d-excellence';

const html = fs.readFileSync(SRC, 'utf8');

const iHeader = html.indexOf('<header data-header');
const iFooter = html.lastIndexOf('<footer');
const iFooterEnd = html.indexOf('</footer>', iFooter) + '</footer>'.length;
const mains = [...html.matchAll(/<main data-screen-label="([^"]*)"/g)];

/** Vues -> nom de composant + route Next.js (slugs du sitemap). */
const VIEWS = [
  ['Accueil', 'Accueil', 'accueil'],
  ['Nos modèles', 'NosModeles', 'modeles'],
  ['Contact', 'Contact', 'contact'],
  ['Réalisations', 'Realisations', 'realisations'],
  ["L'entreprise", 'Entreprise', 'entreprise'],
  ['Terrains', 'Terrains', 'terrains'],
  ['Fiche terrain', 'FicheTerrain', 'terrain-detail'],
  ['Investisseurs', 'Investisseurs', 'investisseurs'],
  ['Blog', 'Blog', 'blog'],
  ['Article de blog', 'Article', 'article'],
  ["Zone d'intervention", 'Zone', 'zone'],
  ['Rénovation &amp; extension', 'Renovation', 'renovation'],
  ['Mentions légales', 'Mentions', 'mentions'],
];

/** Identifiants de premier niveau consommés par un bloc de gabarit. */
function bindings(block) {
  const loopVars = new Set([...block.matchAll(/<sc-for[^>]*\bas="([^"]+)"/g)].map((m) => m[1]));
  const used = new Set();
  for (const m of block.matchAll(/\{\{\s*([A-Za-z_$][\w$]*)/g)) {
    const id = m[1];
    if (!loopVars.has(id) && id !== 'true' && id !== 'false' && id !== 'null') used.add(id);
  }
  return [...used].sort();
}

/**
 * La maquette référence ses photos en relatif (`photos/…`), ce qui se résout
 * mal depuis une route imbriquée comme /blog/mon-article. On les ancre à la
 * racine : les fichiers vivent dans public/photos/.
 */
const absolutePhotos = (s) => s.replaceAll('src="photos/', 'src="/photos/');

function componentFile(name, block, { tag = 'div' } = {}) {
  const vars = bindings(block);
  const jsx = toJsx(absolutePhotos(block));
  const destructure = vars.length ? `  const { ${vars.join(', ')} } = v;\n` : '';
  return (
    "'use client';\n\n" +
    "import type { Vals } from '@/components/site-vals';\n\n" +
    '/**\n' +
    ` * ${name} — balisage repris tel quel de la maquette Claude Design.\n` +
    ' * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds\n' +
    ' * sont identiques au fichier de référence dans design/.\n' +
    ' */\n' +
    `export default function ${name}(v: Vals) {\n` +
    destructure +
    // Fragment systématique : certains blocs ont plusieurs nœuds racine
    // (l'en-tête et son menu mobile, par exemple).
    '  return (\n    <>\n' +
    indent(jsx.trim(), 6) +
    '\n    </>\n  );\n}\n'
  );
}

const indent = (s, n) =>
  s
    .split('\n')
    .map((l) => (l.trim() ? ' '.repeat(n) + l : l))
    .join('\n');

const outViews = path.join(ROOT, 'components/views');
fs.mkdirSync(outViews, { recursive: true });

const report = [];

// En-tête : la barre fixe et le menu mobile, jusqu'à la première vue.
// Les vues sont enveloppées dans un `sc-if` de routage devenu inutile ici :
// chaque vue a désormais sa propre URL, la condition est portée par la route.
const iFirstView = html.indexOf('<sc-if value="{{ isAccueil }}"');
const headerBlock = html.slice(iHeader, iFirstView);
const footerBlock = html.slice(iFooter, iFooterEnd);
fs.writeFileSync(
  path.join(ROOT, 'components/SiteHeader.tsx'),
  componentFile('SiteHeader', headerBlock),
  'utf8'
);
fs.writeFileSync(
  path.join(ROOT, 'components/SiteFooter.tsx'),
  componentFile('SiteFooter', footerBlock),
  'utf8'
);
report.push(['SiteHeader', headerBlock.length, bindings(headerBlock).length]);
report.push(['SiteFooter', footerBlock.length, bindings(footerBlock).length]);

// Les 13 vues
mains.forEach((m, idx) => {
  const label = m[1];
  const entry = VIEWS.find((v) => v[0] === label);
  if (!entry) throw new Error('vue inconnue : ' + label);
  const end = html.indexOf('</main>', m.index) + '</main>'.length;
  const block = html.slice(m.index, end);
  fs.writeFileSync(path.join(outViews, entry[1] + '.tsx'), componentFile(entry[1], block), 'utf8');
  report.push([entry[1], block.length, bindings(block).length]);
});

console.log('composant'.padEnd(16), 'source'.padStart(8), 'liaisons'.padStart(9));
for (const [n, size, b] of report) {
  console.log(n.padEnd(16), String(size).padStart(8), String(b).padStart(9));
}

// Union de toutes les liaisons, pour typer Vals
const all = new Set();
[headerBlock, footerBlock, ...mains.map((m, i) => html.slice(m.index, html.indexOf("</main>", m.index) + 7))].forEach(
  (b) => bindings(b).forEach((x) => all.add(x))
);
fs.writeFileSync('/tmp/design/bindings.json', JSON.stringify([...all].sort(), null, 2));
console.log('\nliaisons distinctes :', all.size);
