import fs from 'node:fs';
import path from 'node:path';

const ROOT = '/workspace/maison-d-excellence';

/** [dossier de route, clé META, composant de vue, nom de la page] */
const ROUTES = [
  ['', 'accueil', 'Accueil', 'accueil'],
  ['nos-modeles', 'modeles', 'NosModeles', 'modeles'],
  ['realisations', 'realisations', 'Realisations', 'realisations'],
  ['entreprise', 'entreprise', 'Entreprise', 'entreprise'],
  ['contact', 'contact', 'Contact', 'contact'],
  ['terrains', 'terrains', 'Terrains', 'terrains'],
  ['investisseurs', 'investisseurs', 'Investisseurs', 'investisseurs'],
  ['blog', 'blog', 'Blog', 'blog'],
  ['zone-intervention', 'zone', 'Zone', 'zone'],
  ['renovation-extension', 'renovation', 'Renovation', 'renovation'],
  ['mentions-legales', 'mentions', 'Mentions', 'mentions'],
];

for (const [dir, metaKey, view, page] of ROUTES) {
  const target = path.join(ROOT, 'app', dir);
  fs.mkdirSync(target, { recursive: true });
  const src = `import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/${view}Host';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('${metaKey}');

export default function Page() {
  return (
    <Site page="${page}">
      <View />
    </Site>
  );
}
`;
  fs.writeFileSync(path.join(target, 'page.tsx'), src, 'utf8');
  console.log('route', '/' + dir);
}

// Fiche terrain et article de blog : routes dynamiques, pré-générées.
fs.mkdirSync(path.join(ROOT, 'app/terrains/[slug]'), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, 'app/terrains/[slug]/page.tsx'),
  `import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Site from '@/components/Site';
import View from '@/components/hosts/FicheTerrainHost';
import { pageMetadata } from '@/lib/seo';
import { TERRAINS } from '@/lib/data/terrains';

export function generateStaticParams() {
  return TERRAINS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = TERRAINS.find((x) => x.slug === slug);
  const base = pageMetadata('terrain-detail', \`/terrains/\${slug}\`);
  if (!t) return base;
  return {
    ...base,
    title: \`Terrain à bâtir à \${t.commune} — \${t.ref} | Maisons d’Excellence\`,
    description: \`Terrain constructible de \${t.surface} m² à \${t.commune} (\${t.secteur}), \${t.price} €. \${t.note}\`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!TERRAINS.some((t) => t.slug === slug)) notFound();
  return (
    <Site page="terrain-detail" terrainSlug={slug}>
      <View />
    </Site>
  );
}
`,
  'utf8'
);

fs.mkdirSync(path.join(ROOT, 'app/blog/[slug]'), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, 'app/blog/[slug]/page.tsx'),
  `import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Site from '@/components/Site';
import View from '@/components/hosts/ArticleHost';
import { pageMetadata } from '@/lib/seo';
import { ARTICLES } from '@/lib/data/articles';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = ARTICLES.find((x) => x.slug === slug);
  const base = pageMetadata('article', \`/blog/\${slug}\`);
  if (!a) return base;
  return { ...base, title: \`\${a.title} | Maisons d’Excellence\`, description: a.excerpt };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!ARTICLES.some((a) => a.slug === slug)) notFound();
  return (
    <Site page="article" articleSlug={slug}>
      <View />
    </Site>
  );
}
`,
  'utf8'
);

console.log('routes dynamiques : /terrains/[slug], /blog/[slug]');


// Hôtes clients : relient chaque vue à la surface de données de <Site>.
const HOSTS = [...ROUTES.map((r) => r[2]), 'FicheTerrain', 'Article'];
fs.mkdirSync(path.join(ROOT, 'components/hosts'), { recursive: true });
for (const view of HOSTS) {
  fs.writeFileSync(
    path.join(ROOT, 'components/hosts', view + 'Host.tsx'),
    `'use client';

import { useVals } from '@/components/Site';
import ${view} from '@/components/views/${view}';

/** Relie la vue à la surface de données tenue par <Site>. */
export default function ${view}Host() {
  return <${view} {...useVals()} />;
}
`,
    'utf8'
  );
}
console.log('hôtes clients :', HOSTS.length);
