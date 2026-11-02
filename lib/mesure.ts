/**
 * Mesure d'audience Google Analytics 4, soumise au consentement.
 *
 * Règles, dans l'ordre où elles s'appliquent :
 *  - rien ne part chez Google tant que le visiteur n'a pas cliqué sur
 *    « Accepter » : ni script, ni requête, ni cookie ;
 *  - GA4 ne se charge que sur le domaine de production : jamais en local ni
 *    sur les préproductions Netlify (deploy-preview-*, *.netlify.app) ;
 *  - Consent Mode v2 : les quatre signaux partent à « denied », seul
 *    analytics_storage passe à « granted » après acceptation ; les signaux
 *    publicitaires restent refusés ;
 *  - IP anonymisée, signaux Google et personnalisation publicitaire coupés,
 *    cookies limités à 13 mois (recommandation CNIL) ;
 *  - aucun contenu de formulaire n'est envoyé : seulement le nom de
 *    l'événement, le chemin de la page et le libellé du bouton.
 *
 * Le choix est gardé six mois dans le navigateur (localStorage), puis
 * redemandé. La balise Cloudflare Web Analytics, injectée par Netlify et sans
 * cookie, est indépendante de ce module.
 */

export const GA4_ID = 'G-ZQ5VQK9FM5';

const CLE = 'me-consentement';
const SIX_MOIS = 183 * 24 * 60 * 60 * 1000;
const TREIZE_MOIS_S = 395 * 24 * 60 * 60;

/** Événement envoyé par le pied de page pour rouvrir le bandeau. */
export const EVT_GERER = 'me:gerer-cookies';
/** Événement envoyé quand un formulaire a été reçu par Netlify. */
export const EVT_FORMULAIRE = 'me:formulaire-envoye';

export type Choix = 'accepte' | 'refuse';

type Gtag = (...args: unknown[]) => void;
type FenetreGA = Window & { dataLayer?: unknown[]; gtag?: Gtag };

export function estProduction(hote = window.location.hostname): boolean {
  return /^(www\.)?maisons-dexcellence\.fr$/.test(hote);
}

/** Le choix enregistré, ou null s'il n'y en a pas ou qu'il a plus de six mois. */
export function lireChoix(): Choix | null {
  try {
    const brut = window.localStorage.getItem(CLE);
    if (!brut) return null;
    const { choix, date } = JSON.parse(brut) as { choix: Choix; date: number };
    if ((choix !== 'accepte' && choix !== 'refuse') || Date.now() - date > SIX_MOIS) return null;
    return choix;
  } catch {
    return null;
  }
}

export function enregistrerChoix(choix: Choix): void {
  try {
    window.localStorage.setItem(CLE, JSON.stringify({ choix, date: Date.now() }));
  } catch {
    /* navigation privée stricte : le bandeau reviendra à la prochaine visite */
  }
  if (choix === 'accepte') activer();
  else desactiver();
}

let charge = false;
let ecoute = false;

function gtag(..._args: unknown[]): void {
  const w = window as FenetreGA;
  w.dataLayer = w.dataLayer || [];
  // gtag.js attend l'objet `arguments`, pas un tableau.
  // eslint-disable-next-line prefer-rest-params
  w.dataLayer.push(arguments);
}

/** Charge GA4 (production uniquement) et branche le suivi des clics. */
export function activer(): void {
  if (!estProduction()) return;
  if (!charge) {
    charge = true;
    (window as FenetreGA).gtag = gtag;
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    });
    gtag('consent', 'update', { analytics_storage: 'granted' });
    gtag('js', new Date());
    gtag('config', GA4_ID, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: TREIZE_MOIS_S,
    });
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(s);
  } else {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
  brancherEvenements();
}

/** Retire le consentement : plus d'envoi, cookies GA effacés. */
export function desactiver(): void {
  if (charge) gtag('consent', 'update', { analytics_storage: 'denied' });
  const domaine = window.location.hostname.replace(/^www\./, '');
  document.cookie.split(';').forEach((c) => {
    const nom = c.split('=')[0].trim();
    if (nom === '_ga' || nom.startsWith('_ga_')) {
      for (const d of ['', `; domain=.${domaine}`, `; domain=${domaine}`]) {
        document.cookie = `${nom}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`;
      }
    }
  });
}

function envoyer(nom: string, libelle: string): void {
  if (!charge || lireChoix() !== 'accepte') return;
  gtag('event', nom, {
    page_path: window.location.pathname,
    // Une adresse électronique n'est jamais transmise, même dans un libellé.
    button_label: libelle.replace(/[^\s@]+@[^\s@]+/g, 'e-mail').replace(/\s+/g, ' ').trim().slice(0, 100),
  });
}

const CTA = /^(estimation en ligne|estimer mon projet|parler de mon projet|nous contacter|demander une estimation)/i;

/** Un seul écouteur par type, posé sur le document (délégation). */
function brancherEvenements(): void {
  if (ecoute) return;
  ecoute = true;

  document.addEventListener(
    'click',
    (ev) => {
      const el = (ev.target as Element | null)?.closest?.('a, button');
      if (!el) return;
      const libelle = (el.getAttribute('aria-label') || (el as HTMLElement).innerText || '').trim();
      const href = el.getAttribute('href') || '';
      if (href.startsWith('tel:')) return envoyer('click_tel', libelle);
      if (href.startsWith('mailto:')) return envoyer('click_email', libelle);
      if (/(^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\/)|^whatsapp:/i.test(href)) {
        return envoyer('click_whatsapp', libelle);
      }
      if (href.endsWith('#estimation') || CTA.test(libelle)) envoyer('cta_estimation', libelle);
    },
    { capture: true, passive: true }
  );

  const commences = new Set<string>();
  document.addEventListener(
    'focusin',
    (ev) => {
      const form = (ev.target as Element | null)?.closest?.('form');
      if (!form) return;
      const nom = form.getAttribute('name') || 'formulaire';
      const cle = `${window.location.pathname}|${nom}`;
      if (commences.has(cle)) return;
      commences.add(cle);
      envoyer('form_start', nom);
    },
    { passive: true }
  );

  window.addEventListener(EVT_FORMULAIRE, (ev) => {
    envoyer('form_success', (ev as CustomEvent<string>).detail || 'formulaire');
  });
}
