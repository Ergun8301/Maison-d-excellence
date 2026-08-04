import { NextResponse } from 'next/server';
import { mailConfigured, sendLead } from '@/lib/mail';
import { leadWaLink, type Lead } from '@/lib/leads';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Fenêtre glissante en mémoire : simple ralentisseur anti-spam, pas un quota strict. */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) hits.clear(); // garde-fou mémoire
  return recent.length > MAX_PER_WINDOW;
}

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'inconnu';

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Trop de demandes. Réessayez dans une minute.' },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Requête invalide.' }, { status: 400 });
  }

  // Pot de miel : rempli uniquement par les robots. On feint le succès.
  if (str(body.website)) return NextResponse.json({ ok: true });

  const lead: Lead = {
    nom: str(body.nom),
    email: str(body.email),
    telephone: str(body.telephone),
    ville: str(body.ville) || undefined,
    projet: str(body.projet) || undefined,
    budget: str(body.budget) || undefined,
    message: str(body.message) || undefined,
    source: body.source === 'simulateur' ? 'simulateur' : 'contact',
  };

  const errors: Record<string, string> = {};
  if (lead.nom.length < 2) errors.nom = 'Merci d’indiquer votre nom.';
  if (!EMAIL_RE.test(lead.email)) errors.email = 'Adresse e-mail invalide.';
  if (lead.telephone.replace(/\D/g, '').length < 9)
    errors.telephone = 'Merci d’indiquer un numéro de téléphone valide.';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const result = await sendLead(lead);

  if (result.ok) return NextResponse.json({ ok: true });

  // Aucun fournisseur configuré : on renvoie un lien WhatsApp pré-rempli
  // pour que la demande aboutisse quand même.
  if (result.reason === 'unconfigured') {
    return NextResponse.json(
      { ok: false, fallback: 'whatsapp', whatsappUrl: leadWaLink(lead) },
      { status: 503 }
    );
  }

  console.error('[contact] échec du fournisseur :', result.detail);
  return NextResponse.json(
    { ok: false, fallback: 'whatsapp', whatsappUrl: leadWaLink(lead), error: 'envoi_impossible' },
    { status: 502 }
  );
}

/** Permet au client de savoir si l'envoi par e-mail est opérationnel. */
export async function GET() {
  return NextResponse.json({ mail: mailConfigured() });
}
