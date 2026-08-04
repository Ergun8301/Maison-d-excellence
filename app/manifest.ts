import type { MetadataRoute } from 'next';

/**
 * Manifeste d'application web.
 *
 * Sans ce fichier, « Ajouter à l'écran d'accueil » sur Android ne trouve pas
 * d'icône déclarée : le navigateur fabrique une vignette avec la première
 * lettre du site, d'où le « N » gris sur fond neutre. Le manifeste fournit
 * l'icône aux deux tailles attendues, et c'est aussi lui qui donne son nom et
 * ses couleurs à l'écran de lancement.
 */
/** Le site est exporté en fichiers statiques : le manifeste en est un aussi. */
export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maisons d'Excellence — Constructeur de maisons individuelles",
    short_name: "Maisons d'Excellence",
    description:
      "Constructeur de maisons individuelles sur-mesure à Meximieux (01). Plans sur-mesure, CCMI, RE2020.",
    start_url: '/',
    display: 'standalone',
    background_color: '#111412',
    theme_color: '#111412',
    lang: 'fr',
    icons: [
      { src: '/icone-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icone-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icone-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
