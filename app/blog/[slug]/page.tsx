import type { Metadata } from 'next';
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
  const base = pageMetadata('article', `/blog/${slug}`);
  if (!a) return base;
  // Titre court, sans suffixe de marque : le nom de l'entreprise coûterait ici
  // les caractères qui servent au sujet de l'article. Pas de valeur de repli —
  // un article ajouté sans `seoTitle` doit être signalé à la compilation, pas
  // repartir en silence sur un titre de 90 caractères.
  return { ...base, title: a.seoTitle, description: a.excerpt };
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
