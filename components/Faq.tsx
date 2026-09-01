import { FAQ } from '@/lib/data/faq';

/**
 * Section « Questions fréquentes », posée en pied de la page Entreprise.
 *
 * Écrite à la main plutôt que reprise de la maquette : elle n'y figurait pas.
 * Les styles sont ceux du reste du site — fond crème, titres en Cormorant,
 * filets discrets — pour qu'elle ne se voie pas comme une pièce rapportée.
 *
 * Les réponses sont dépliées, sans accordéon : un contenu masqué derrière un
 * clic reste lisible par un moteur, mais il exige de l'interactivité pour
 * être lu par un humain, et rien ici n'est assez long pour le justifier.
 */
export default function Faq() {
  return (
    <section
      id="faq"
      style={{
        background: '#F7F7F4',
        padding: 'clamp(64px,8vw,110px) 0 clamp(72px,9vw,130px)',
        scrollMarginTop: '80px',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
          <span style={{ width: '42px', height: '1px', background: '#2E5A49' }} />
          <span
            style={{
              fontSize: '11.5px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#2E5A49',
              fontWeight: 600,
            }}
          >
            Questions fréquentes
          </span>
        </div>

        <h2
          style={{
            margin: '0 0 clamp(34px,4vw,52px)',
            fontFamily: "'Cormorant Garamond',serif",
            fontWeight: 300,
            fontSize: 'clamp(28px,3.8vw,50px)',
            lineHeight: 1.04,
            color: '#111412',
            maxWidth: '20ch',
          }}
        >
          Ce qu’on nous demande le plus souvent.
        </h2>

        <div className="me-g2" style={{ gap: 'clamp(20px,2.4vw,38px) clamp(28px,4vw,72px)' }}>
          {FAQ.map((item) => (
            <div
              key={item.q}
              style={{ paddingTop: '22px', borderTop: '1px solid rgba(17,20,18,0.12)' }}
            >
              <h3
                style={{
                  margin: 0,
                  fontFamily: "'Cormorant Garamond',serif",
                  fontWeight: 500,
                  fontSize: 'clamp(20px,1.9vw,25px)',
                  lineHeight: 1.25,
                  color: '#111412',
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                  margin: '12px 0 0',
                  color: '#565B56',
                  fontSize: '14.5px',
                  lineHeight: 1.75,
                }}
              >
                {item.r}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
