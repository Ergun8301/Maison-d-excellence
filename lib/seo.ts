import type { Metadata } from 'next';
import { META } from '@/lib/data/meta';
import { SITE_URL } from '@/lib/site';

/**
 * Métadonnées d'une page à partir des couples title/description définis par la
 * maquette. Repris mot pour mot : ce sont eux qui portent le référencement.
 */
export function pageMetadata(key: keyof typeof META, pathOverride?: string): Metadata {
  const [title, description, slug] = META[key];
  const path = pathOverride ?? (slug ? `/${slug}` : '/');

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      type: 'website',
      locale: 'fr_FR',
      siteName: "Maisons d'Excellence",
    },
  };
}
