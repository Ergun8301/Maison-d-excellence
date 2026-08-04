import { COMPANY, PHONE_DISPLAY, PHONE_HREF, WA_URL } from '@/lib/site';

/**
 * Page d'attente — remplacée par l'accueil de la maquette Claude Design
 * (ordre des sections défini par le handoff) dès son intégration.
 */
export default function Page() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        textAlign: 'center',
      }}
    >
      <div>
        <p style={{ letterSpacing: '.14em', fontSize: 12, textTransform: 'uppercase' }}>
          {COMPANY.city} · {COMPANY.department}
        </p>
        <h1 style={{ fontSize: 32, margin: '.4rem 0 1rem' }}>{COMPANY.name}</h1>
        <p style={{ opacity: 0.7, marginBottom: '1.5rem' }}>
          Site en cours de mise en ligne.
        </p>
        <p>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          {' · '}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </p>
      </div>
    </main>
  );
}
