'use client';

import { useEffect, useRef, useState } from 'react';
import { activer, enregistrerChoix, EVT_GERER, lireChoix, type Choix } from '@/lib/mesure';

/**
 * Bandeau de consentement à la mesure d'audience (GA4).
 *
 * - « Accepter » et « Refuser » ont exactement le même style : aucun bouton
 *   n'est mis en avant (recommandation CNIL, pas de dark pattern).
 * - Non bloquant : rôle dialog sans modale, la page reste utilisable.
 * - En bas à gauche sur ordinateur, à côté du bouton WhatsApp ; sur
 *   téléphone, pleine largeur, et les boutons flottants (WhatsApp, retour en
 *   haut) remontent au-dessus de lui tant qu'il est affiché.
 * - Rendu seulement après montage : pas de différence avec le HTML statique,
 *   et rien dans le chemin critique de l'affichage.
 * - Rouvert par l'événement EVT_GERER (lien « Gérer les cookies »).
 */
export default function BandeauCookies() {
  const [ouvert, setOuvert] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const choix = lireChoix();
    if (choix === 'accepte') activer();
    if (!choix) setOuvert(true);
    const rouvrir = () => setOuvert(true);
    window.addEventListener(EVT_GERER, rouvrir);
    return () => window.removeEventListener(EVT_GERER, rouvrir);
  }, []);

  // Apparition au rythme des animations du site, et hauteur publiée pour
  // remonter les boutons flottants au-dessus du bandeau.
  useEffect(() => {
    const html = document.documentElement;
    if (!ouvert) {
      html.classList.remove('me-consent-ouvert');
      html.style.removeProperty('--me-consent-h');
      setVisible(false);
      return;
    }
    const id = requestAnimationFrame(() => setVisible(true));
    const majHauteur = () => {
      if (ref.current) html.style.setProperty('--me-consent-h', `${ref.current.offsetHeight}px`);
    };
    majHauteur();
    html.classList.add('me-consent-ouvert');
    window.addEventListener('resize', majHauteur);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', majHauteur);
    };
  }, [ouvert]);

  if (!ouvert) return null;

  const choisir = (choix: Choix) => {
    enregistrerChoix(choix);
    setOuvert(false);
  };

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="false"
      aria-labelledby="me-consent-titre"
      aria-describedby="me-consent-texte"
      className={`me-consent${visible ? ' me-consent-visible' : ''}`}
    >
      <div id="me-consent-titre" className="me-consent-titre">
        <span aria-hidden="true" />
        Mesure d’audience
      </div>
      <p id="me-consent-texte" className="me-consent-texte">
        Avec votre accord, nous utilisons Google Analytics pour savoir quelles pages sont lues et
        améliorer le site. Vous pouvez changer d’avis à tout moment.{' '}
        <a href="/politique-confidentialite">En savoir plus</a>
      </p>
      <div className="me-consent-boutons">
        <button type="button" className="me-consent-bouton" onClick={() => choisir('refuse')}>
          Refuser
        </button>
        <button type="button" className="me-consent-bouton" onClick={() => choisir('accepte')}>
          Accepter
        </button>
      </div>
    </div>
  );
}

/** Lien « Gérer les cookies » : rouvre le bandeau. */
export function gererCookies(): void {
  window.dispatchEvent(new Event(EVT_GERER));
}

/** Le même lien, en ligne dans un texte (politique de confidentialité). */
export function LienGererCookies() {
  return (
    <button type="button" onClick={gererCookies} className="me-consent-lien">
      gérer les cookies
    </button>
  );
}
