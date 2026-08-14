// Coordonnées & constantes centralisées — MAISONS D'EXCELLENCE
// Source : audit du 31/07/2026 + coordonnées fournies par le client.
//
// Note de marque : la raison sociale (SIRET) utilise « MAISONS d'Excellence »
// au pluriel. L'ancien site Wix utilisait le singulier. On uniformise sur le
// pluriel partout.

export const COMPANY = {
  name: "MAISONS D'EXCELLENCE",
  legalName: "Maisons d'Excellence",
  manager: 'Aykut ATAK',
  form: 'SARL',
  since: 2019,
  city: 'Meximieux',
  postalCode: '01800',
  department: 'Ain',
  region: 'Auvergne-Rhône-Alpes',
  country: 'FR',
} as const;

export const EMAIL = 'aykut.atak@sfr.fr';
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const PHONE_DISPLAY = '06 15 19 16 47';
export const PHONE_E164 = '+33615191647';
export const PHONE_HREF = 'tel:+33615191647';

/** Numéro WhatsApp au format wa.me (E.164 sans « + » ni séparateurs). */
export const WHATSAPP_NUMBER = '33615191647';

/**
 * Lien WhatsApp « click-to-chat ».
 * Aucun compte ni API WhatsApp Business n'est nécessaire : le lien ouvre
 * simplement une conversation vers le numéro de l'entreprise.
 */
export function waLink(
  message = "Bonjour, je souhaite échanger sur mon projet de construction."
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_URL = waLink();

/** Secteur de Meximieux — centre de la zone d'intervention (30 km). */
export const GEO = {
  lat: 45.9081,
  lng: 5.1953,
  label: 'Meximieux · Ain · 01',
} as const;

/**
 * URL canonique du site. Renseignée par NEXT_PUBLIC_SITE_URL en production
 * (Vercel l'injecte automatiquement via VERCEL_URL sur les préproductions).
 * Le nom de domaine définitif reste à arbitrer avec le client.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
).replace(/\/$/, '');
