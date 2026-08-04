import type { Metadata } from 'next';
import { COMPANY, SITE_URL } from '@/lib/site';
import './globals.css';

/**
 * Les 13 couples title/description définitifs et le JSON-LD complet sont
 * fournis mot pour mot par la section SEO du handoff et seront repris tels
 * quels, page par page.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} — Constructeur de maisons individuelles dans l'Ain`,
    template: `%s | ${COMPANY.legalName}`,
  },
  description:
    "Constructeur de maisons individuelles à Meximieux (01). Construction neuve, rénovation et extension dans un rayon de 30 km : Bourg-en-Bresse, Ambérieu-en-Bugey, Villefranche-sur-Saône.",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: COMPANY.legalName,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
