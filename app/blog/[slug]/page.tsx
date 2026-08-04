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
  return { ...base, title: `${a.title} | Maisons d’Excellence`, description: a.excerpt };
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
