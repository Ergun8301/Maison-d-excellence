import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Autorise Google (et les autres moteurs) à tout explorer, et leur indique
 * où trouver le plan du site. Sans ce fichier, rien n'est bloqué par
 * défaut — mais Google doit alors deviner l'existence du sitemap plutôt que
 * la lire ici noir sur blanc.
 */
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
