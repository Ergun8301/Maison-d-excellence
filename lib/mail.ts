import { COMPANY, EMAIL } from './site';
import { leadHtml, leadSubject, leadText, type Lead } from './leads';

/**
 * Envoi d'e-mail sans dépendance : tout passe par `fetch`.
 *
 * Deux fournisseurs sont reconnus, dans cet ordre de priorité :
 *
 *   1. Resend        — RESEND_API_KEY        (choix retenu, 3 000 mails/mois gratuits)
 *   2. Web3Forms     — WEB3FORMS_ACCESS_KEY  (repli sans création de compte)
 *
 * Si aucune clé n'est présente, `sendLead` renvoie `{ ok: false,
 * reason: 'unconfigured' }` et l'appelant bascule sur WhatsApp. Le site reste
 * donc pleinement fonctionnel avant même que la clé ne soit fournie.
 */

export type SendResult =
  | { ok: true; provider: 'resend' | 'web3forms' }
  | { ok: false; reason: 'unconfigured' }
  | { ok: false; reason: 'provider_error'; detail: string };

/** Destinataire des leads. Surchargeable sans toucher au code. */
const recipient = () => process.env.CONTACT_TO ?? EMAIL;

/**
 * Expéditeur. Tant que le domaine définitif n'est pas vérifié chez Resend,
 * `onboarding@resend.dev` fonctionne — à la seule condition d'écrire à
 * l'adresse propriétaire du compte Resend, ce qui est précisément notre cas.
 */
const sender = () =>
  process.env.MAIL_FROM ?? `${COMPANY.legalName} <onboarding@resend.dev>`;

export function mailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY || process.env.WEB3FORMS_ACCESS_KEY);
}

async function sendViaResend(lead: Lead, apiKey: string): Promise<SendResult> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: sender(),
      to: [recipient()],
      reply_to: lead.email,
      subject: leadSubject(lead),
      text: leadText(lead),
      html: leadHtml(lead),
    }),
  });

  if (res.ok) return { ok: true, provider: 'resend' };
  return { ok: false, reason: 'provider_error', detail: await res.text().catch(() => res.statusText) };
}

async function sendViaWeb3Forms(lead: Lead, accessKey: string): Promise<SendResult> {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: leadSubject(lead),
      from_name: COMPANY.name,
      replyto: lead.email,
      nom: lead.nom,
      telephone: lead.telephone,
      email: lead.email,
      ville: lead.ville ?? '',
      projet: lead.projet ?? '',
      budget: lead.budget ?? '',
      message: lead.message ?? '',
    }),
  });

  if (res.ok) return { ok: true, provider: 'web3forms' };
  return { ok: false, reason: 'provider_error', detail: await res.text().catch(() => res.statusText) };
}

export async function sendLead(lead: Lead): Promise<SendResult> {
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) return sendViaResend(lead, resendKey);

  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
  if (web3Key) return sendViaWeb3Forms(lead, web3Key);

  return { ok: false, reason: 'unconfigured' };
}
