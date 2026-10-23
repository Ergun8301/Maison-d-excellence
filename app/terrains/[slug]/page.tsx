import type { Metadata } from 'next';
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
  const base = pageMetadata('terrain-detail', `/terrains/${slug}`);
  if (!t) return base;
  // Titre et description propres à chaque lot, repris aussi dans les blocs de
  // partage : sinon chaque fiche annoncerait le titre générique.
  const title = `${t.titre} | Maisons d’Excellence`;
  return {
    ...base,
    title,
    description: t.meta,
    openGraph: { ...base.openGraph, title, description: t.meta },
    twitter: { ...base.twitter, title, description: t.meta },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!TERRAINS.some((t) => t.slug === slug)) notFound();
  return (
    <Site page="terrain-detail" terrainSlug={slug}>
      <View slug={slug} />
    </Site>
  );
}
