import { COMPANY, waLink } from './site';

/** Charge utile commune aux deux formulaires du site (contact + simulateur). */
export type Lead = {
  nom: string;
  email: string;
  telephone: string;
  ville?: string;
  projet?: string;
  budget?: string;
  message?: string;
  /** Formulaire d'origine, pour distinguer les leads en boîte de réception. */
  source?: 'contact' | 'simulateur';
};

export type LeadField = { label: string; value: string };

/** Champs non vides du lead, dans un ordre stable et lisible. */
export function leadFields(lead: Lead): LeadField[] {
  const rows: LeadField[] = [
    { label: 'Nom', value: lead.nom },
    { label: 'Téléphone', value: lead.telephone },
    { label: 'Email', value: lead.email },
    { label: 'Ville', value: lead.ville ?? '' },
    { label: 'Projet', value: lead.projet ?? '' },
    { label: 'Budget estimé', value: lead.budget ?? '' },
    { label: 'Message', value: lead.message ?? '' },
  ];
  return rows.filter((r) => r.value.trim() !== '');
}

export function leadSubject(lead: Lead): string {
  const kind = lead.source === 'simulateur' ? 'Estimation' : 'Demande de contact';
  const where = lead.ville ? ` — ${lead.ville}` : '';
  return `[${COMPANY.name}] ${kind} — ${lead.nom}${where}`;
}

export function leadText(lead: Lead): string {
  const body = leadFields(lead)
    .map((f) => `${f.label} : ${f.value}`)
    .join('\n');
  return `${leadSubject(lead)}\n\n${body}\n`;
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export function leadHtml(lead: Lead): string {
  const rows = leadFields(lead)
    .map(
      (f) =>
        `<tr>` +
        `<td style="padding:10px 16px 10px 0;color:#8a8578;font-size:12px;letter-spacing:.08em;text-transform:uppercase;vertical-align:top;white-space:nowrap">${escapeHtml(
          f.label
        )}</td>` +
        `<td style="padding:10px 0;color:#1c1c1a;font-size:15px;line-height:1.55">${escapeHtml(
          f.value
        ).replace(/\n/g, '<br>')}</td>` +
        `</tr>`
    )
    .join('');

  return `<!doctype html><html lang="fr"><body style="margin:0;background:#f6f4ef;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif">
<table role="presentation" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden">
<tr><td style="padding:28px 32px 8px">
<div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#8a8578">${escapeHtml(
    COMPANY.name
  )}</div>
<h1 style="margin:6px 0 0;font-size:21px;font-weight:700;color:#1c1c1a">${escapeHtml(
    lead.source === 'simulateur' ? 'Nouvelle estimation' : 'Nouvelle demande de contact'
  )}</h1>
</td></tr>
<tr><td style="padding:12px 32px 4px">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">${rows}</table>
</td></tr>
<tr><td style="padding:20px 32px 30px">
<a href="tel:${escapeHtml(lead.telephone.replace(/\s/g, ''))}" style="display:inline-block;background:#1c1c1a;color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 20px;border-radius:9px;margin-right:8px">Rappeler</a>
<a href="mailto:${escapeHtml(lead.email)}" style="display:inline-block;background:#f6f4ef;color:#1c1c1a;text-decoration:none;font-weight:600;font-size:14px;padding:12px 20px;border-radius:9px">Répondre par mail</a>
</td></tr>
</table>
<p style="max-width:560px;margin:16px auto 0;color:#8a8578;font-size:12px;text-align:center">Message envoyé depuis le formulaire du site ${escapeHtml(
    COMPANY.legalName
  )}.</p>
</body></html>`;
}

/**
 * Lien WhatsApp pré-rempli avec le contenu du formulaire.
 * Sert de solution de repli : tant qu'aucun fournisseur d'e-mail n'est
 * configuré, le visiteur peut transmettre sa demande en un clic.
 */
export function leadWaLink(lead: Lead): string {
  return waLink(leadText(lead));
}
