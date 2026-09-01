import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { ARTICLES } from '@/lib/data/articles';
import { TERRAINS } from '@/lib/data/terrains';

/**
 * Plan du site, pour Google.
 *
 * Sans ce fichier, Google doit découvrir chaque page en suivant les liens un
 * par un — ça marche, mais lentement, et rien ne garantit qu'il les visite
 * toutes. Le plan lui donne la liste complète d'un coup : les onze pages
 * fixes, plus chaque article de blog et chaque fiche terrain, générées à
 * partir des mêmes données que le reste du site pour qu'une fiche ajoutée
 * quelque part n'ait pas besoin d'être répétée ici.
 *
 * `changeFrequency` et `priority` sont des indications, pas des ordres :
 * Google explore à son rythme quoi qu'il arrive. Elles restent posées parce
 * qu'elles ne coûtent rien et qu'elles peuvent influencer l'ordre de passage.
 */
export const dynamic = 'force-static';

const PAGES_FIXES: { chemin: string; priorite: number; frequence: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { chemin: '/', priorite: 1, frequence: 'weekly' },
  { chemin: '/nos-modeles', priorite: 0.9, frequence: 'weekly' },
  { chemin: '/realisations', priorite: 0.8, frequence: 'monthly' },
  { chemin: '/entreprise', priorite: 0.8, frequence: 'monthly' },
  { chemin: '/terrains', priorite: 0.8, frequence: 'weekly' },
  { chemin: '/contact', priorite: 0.7, frequence: 'yearly' },
  { chemin: '/zone-intervention', priorite: 0.6, frequence: 'monthly' },
  { chemin: '/investisseurs', priorite: 0.6, frequence: 'monthly' },
  { chemin: '/renovation-extension', priorite: 0.6, frequence: 'monthly' },
  { chemin: '/blog', priorite: 0.6, frequence: 'weekly' },
  { chemin: '/mentions-legales', priorite: 0.2, frequence: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const maintenant = new Date();

  const fixes = PAGES_FIXES.map(({ chemin, priorite, frequence }) => ({
    url: `${SITE_URL}${chemin}`,
    lastModified: maintenant,
    changeFrequency: frequence,
    priority: priorite,
  }));

  const articles = ARTICLES.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: maintenant,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const terrains = TERRAINS.map((t) => ({
    url: `${SITE_URL}/terrains/${t.slug}`,
    lastModified: maintenant,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  return [...fixes, ...articles, ...terrains];
}
