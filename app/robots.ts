import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Autorise l'exploration complète et indique où trouver le plan du site.
 *
 * La règle générique suffirait : rien n'est interdit, donc tout robot qui
 * retombe sur `*` — c'est la norme — est déjà autorisé, robots d'IA compris.
 * Les lignes nommées ne changent donc rien à ce qui est permis aujourd'hui.
 * Elles sont posées pour trois raisons : elles inscrivent le choix noir sur
 * blanc plutôt que de le laisser à un oubli ; elles lèvent l'ambiguïté pour
 * un robot qui appliquerait mal l'héritage vers la règle générique ; et si
 * une interdiction générale était ajoutée un jour, il faudrait de toute façon
 * les rétablir une par une.
 *
 * Google-Extended n'est pas un robot d'indexation : c'est le jeton par lequel
 * Google autorise ou non l'usage du contenu pour ses réponses génératives,
 * séparément de Googlebot.
 */
export const dynamic = 'force-static';

/** Robots des moteurs de réponse, nommés explicitement. */
const ROBOTS_IA = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...ROBOTS_IA.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
