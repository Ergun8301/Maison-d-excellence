import type { Metadata } from 'next';
import { META } from '@/lib/data/meta';
import { SITE_URL } from '@/lib/site';
import { PARTAGE_DEFAUT, type Partage } from '@/lib/data/partage';

/**
 * Métadonnées d'une page à partir des couples title/description définis par la
 * maquette. Repris mot pour mot : ce sont eux qui portent le référencement.
 *
 * L'image de partage est déclarée en adresse absolue, et non en chemin
 * relatif : les robots des réseaux sociaux ne résolvent pas les chemins
 * relatifs, ils lisent la balise telle quelle et abandonnent si elle ne forme
 * pas une adresse complète.
 */
export function pageMetadata(
  key: keyof typeof META,
  pathOverride?: string,
  partage: Partage = PARTAGE_DEFAUT
): Metadata {
  const [title, description, slug] = META[key];
  const path = pathOverride ?? (slug ? `/${slug}` : '/');
  const image = `${SITE_URL}${partage.chemin}`;

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
      images: [{ url: image, width: 1200, height: 630, alt: partage.alt, type: 'image/jpeg' }],
    },
    // `summary_large_image` affiche la grande carte ; `summary` se contenterait
    // d'une vignette carrée, qui recadrerait le nom hors de l'image.
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
