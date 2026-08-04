import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_URL } from '@/lib/site';
import { ORGANISATION_JSONLD } from '@/lib/jsonld';
import './design.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23111412'/%3E%3Ctext x='16' y='23' font-family='Georgia,serif' font-size='20' fill='%232E5A49' text-anchor='middle'%3EM%3C/text%3E%3C/svg%3E",
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
