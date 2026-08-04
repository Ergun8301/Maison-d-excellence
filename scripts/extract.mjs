import fs from 'node:fs';
import path from 'node:path';

const SRC = "/workspace/maison-d-excellence/design/Maisons d'Excellence.dc.html";
const OUT = '/workspace/maison-d-excellence/lib/data';

const html = fs.readFileSync(SRC, 'utf8');
const scripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
const js = scripts[1];

/** Corps d'une méthode de la classe, accolades équilibrées. */
function methodBody(name) {
  const re = new RegExp('^\\s{2}' + name + '\\s*\\([^)]*\\)\\s*\\{', 'm');
  const m = re.exec(js);
  if (!m) throw new Error('méthode introuvable : ' + name);
  let i = m.index + m[0].length;
  let depth = 1;
  while (i < js.length && depth > 0) {
    const c = js[i];
    if (c === '{') depth++;
    else if (c === '}') depth--;
    i++;
  }
  return js.slice(m.index + m[0].length, i - 1);
}

/** `return <expr>;` -> `<expr>` */
function returnedExpr(name) {
  const body = methodBody(name).trim();
  const m = /^return\s*([\s\S]*?);?\s*$/.exec(body);
  if (!m) throw new Error('pas de return simple dans : ' + name);
  return m[1].trim();
}

/**
 * Certaines méthodes construisent leurs URLs d'images avant de retourner.
 * On exécute le corps pour obtenir les valeurs réellement rendues.
 */
function evaluated(name) {
  return new Function(methodBody(name))();
}

fs.mkdirSync(OUT, { recursive: true });

const banner = (what) =>
  `// Repris tel quel de la maquette Claude Design (${what}).\n` +
  `// Ne pas reformuler : le rendu des vues en dépend mot pour mot.\n\n`;

function emit(file, header, code) {
  fs.writeFileSync(path.join(OUT, file), header + code + '\n', 'utf8');
  console.log('écrit', file, fs.statSync(path.join(OUT, file)).size, 'o');
}

// ── Grille tarifaire du simulateur ─────────────────────────────────────────
const iPrix = js.indexOf('const ME_PRIX');
const prix = js.slice(iPrix, js.indexOf('};', iPrix) + 2).replace(/^const /, 'export const ');
emit(
  'prix.ts',
  '// Grille de calcul du simulateur, reprise telle quelle de la maquette.\n' +
    "// Valeurs provisoires (marché de l'Ain, 2026) — signalées comme à valider\n" +
    '// avec le client. Tout le calcul dépend uniquement de ce bloc.\n\n',
  prix
);

// ── Jeux de données ────────────────────────────────────────────────────────
const sets = [
  ['communes.ts', 'communes', 'communes de la zone d’intervention', 'COMMUNES'],
  ['modeles.ts', 'rawModeles', 'modèles de maisons', 'MODELES'],
  ['terrains.ts', 'rawTerrains', 'terrains à bâtir', 'TERRAINS'],
  ['articles.ts', 'articles', 'articles de blog', 'ARTICLES'],
  ['echeancier.ts', 'echeancier', 'échéancier de paiement CCMI', 'ECHEANCIER'],
];

for (const [file, method, what, name] of sets) {
  emit(file, banner(what), `export const ${name} = ${JSON.stringify(evaluated(method), null, 2)} as const;`);
}

// ── Titres et descriptions SEO ─────────────────────────────────────────────
emit(
  'meta.ts',
  '// Les 13 couples title/description et les slugs canoniques, repris mot pour\n' +
    '// mot de la maquette. Le troisième élément est le slug de la route Next.js\n' +
    "// (chaîne vide pour l'accueil).\n\n" +
    'export type MetaEntry = readonly [title: string, description: string, slug: string];\n\n',
  `export const META = ${returnedExpr('meta')} as const satisfies Record<string, MetaEntry>;`
);

console.log('\n--- avisList (à remplacer par les vrais avis Google) ---');
console.log(returnedExpr('avisList').slice(0, 200) + '…');
