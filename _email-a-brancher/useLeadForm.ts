'use client';

import { useCallback, useState } from 'react';

/**
 * Logique commune aux deux formulaires (contact et simulateur), volontairement
 * sans aucun rendu : le balisage et les classes viennent de la maquette.
 *
 * Comportement de repli : si aucun fournisseur d'e-mail n'est configuré côté
 * serveur, l'API renvoie un lien WhatsApp pré-rempli et on y redirige. La
 * demande aboutit donc dans tous les cas.
 */

export type LeadStatus = 'idle' | 'sending' | 'sent' | 'whatsapp' | 'error';

export type LeadValues = {
  nom: string;
  email: string;
  telephone: string;
  ville?: string;
  projet?: string;
  budget?: string;
  message?: string;
  /** Pot de miel anti-robot : à rendre invisible et à laisser vide. */
  website?: string;
};

export function useLeadForm(source: 'contact' | 'simulateur' = 'contact') {
  const [status, setStatus] = useState<LeadStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = useCallback(
    async (values: LeadValues) => {
      setStatus('sending');
      setErrors({});

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...values, source }),
        });

        const data = await res.json().catch(() => ({}) as Record<string, unknown>);

        if (res.ok) {
          setStatus('sent');
          return true;
        }

        if (res.status === 422 && data.errors) {
          setErrors(data.errors as Record<string, string>);
          setStatus('error');
          return false;
        }

        // Envoi e-mail indisponible : on bascule sur WhatsApp pré-rempli.
        if (typeof data.whatsappUrl === 'string') {
          window.open(data.whatsappUrl, '_blank', 'noopener,noreferrer');
          setStatus('whatsapp');
          return true;
        }

        setStatus('error');
        return false;
      } catch {
        setStatus('error');
        return false;
      }
    },
    [source]
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setErrors({});
  }, []);

  return { status, errors, submit, reset };
}
