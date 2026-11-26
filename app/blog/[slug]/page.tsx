import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Site from '@/components/Site';
import View from '@/components/hosts/ArticleHost';
import { pageMetadata } from '@/lib/seo';
import { ARTICLES } from '@/lib/data/articles';
import { PARTAGE_ARTICLES, PARTAGE_DEFAUT } from '@/lib/data/partage';
import { ORGANISATION_JSONLD } from '@/lib/jsonld';
import { SITE_URL } from '@/lib/site';

const MOIS = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];

/** « 26 novembre 2026 » → « 2026-11-26 », pour le balisage Article. */
function dateIso(d: string): string | undefined {
  const m = d.match(/^(\d{1,2}) (\S+) (\d{4})$/);
  const i = m ? MOIS.indexOf(m[2]) : -1;
  return m && i >= 0 ? `${m[3]}-${String(i + 1).padStart(2, '0')}-${m[1].padStart(2, '0')}` : undefined;
}

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
  const base = pageMetadata('article', `/blog/${slug}`, PARTAGE_ARTICLES[slug] ?? PARTAGE_DEFAUT);
  if (!a) return base;
  // Titre court, sans suffixe de marque : le nom de l'entreprise coûterait ici
  // les caractères qui servent au sujet de l'article. Pas de valeur de repli —
  // un article ajouté sans `seoTitle` doit être signalé à la compilation, pas
  // repartir en silence sur un titre de 90 caractères.
  //
  // Le titre et le résumé sont repris aussi dans le bloc Open Graph : sans
  // cela, une carte de partage annonçait le titre générique du blog quel que
  // soit l'article ouvert.
  const description = 'seoDescription' in a ? a.seoDescription : a.excerpt;
  return {
    ...base,
    title: a.seoTitle,
    description,
    openGraph: { ...base.openGraph, title: a.seoTitle, description },
    twitter: { ...base.twitter, title: a.seoTitle, description },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = ARTICLES.find((x) => x.slug === slug);
  if (!a) notFound();
  // Balisage BlogPosting : titre, date, image et auteur, lisibles par les
  // moteurs de recherche et les assistants IA. L'auteur est l'entreprise.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.title,
    description: 'seoDescription' in a ? a.seoDescription : a.excerpt,
    image: `${SITE_URL}${a.img}`,
    datePublished: dateIso(a.date),
    inLanguage: 'fr-FR',
    articleSection: a.cat,
    mainEntityOfPage: `${SITE_URL}/blog/${a.slug}`,
    author: { '@id': ORGANISATION_JSONLD['@id'] },
    publisher: { '@id': ORGANISATION_JSONLD['@id'] },
  };
  return (
    <Site page="article" articleSlug={slug}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <View />
    </Site>
  );
}
