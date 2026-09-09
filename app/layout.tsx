import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_URL } from '@/lib/site';
import { ORGANISATION_JSONLD } from '@/lib/jsonld';
import './fonts.css';
import './design.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Logo fourni par le client : remplace le « M » provisoire de la maquette.
  // L'icône d'écran d'accueil Android vient du manifeste (app/manifest.ts) ;
  // iOS, lui, ne lit que apple-touch-icon, d'où la déclaration séparée.
  icons: {
    icon: [
      { url: '/logo-onglet.png', type: 'image/png' },
      { url: '/icone-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icone-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icone-180.png', sizes: '180x180', type: 'image/png' }],
  },
  appleWebApp: { capable: true, title: "Maisons d'Excellence", statusBarStyle: 'black-translucent' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Les polices sont servies depuis le site : voir app/fonts.css, importé
            plus haut. La maquette les chargeait chez Google, ce qui envoyait
            l'adresse IP du visiteur à un tiers dès l'ouverture d'une page. */}
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANISATION_JSONLD) }}
        />
      </head>
      <body>
        {children}
        <Script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
