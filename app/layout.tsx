import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_URL } from '@/lib/site';
import { ORGANISATION_JSONLD } from '@/lib/jsonld';
import './design.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Logo fourni par le client : remplace le « M » provisoire de la maquette.
  // Sert d'icône d'onglet et d'icône d'écran d'accueil sur mobile.
  icons: {
    icon: '/logo-onglet.png',
    apple: '/logo-onglet.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Polices et feuille Leaflet : reprises telles quelles de la maquette. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
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
