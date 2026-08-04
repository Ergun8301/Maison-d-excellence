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
  return {
    ...base,
    title: `Terrain à bâtir à ${t.commune} — ${t.ref} | Maisons d’Excellence`,
    description: `Terrain constructible de ${t.surface} m² à ${t.commune} (${t.secteur}), ${t.price} €. ${t.note}`,
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
