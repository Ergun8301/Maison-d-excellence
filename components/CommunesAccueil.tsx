import { LOCALES, POLES, communesDuPole } from '@/lib/data/locales';

/**
 * « Nous construisons dans ces communes » : un lien vers chacune des pages
 * locales, rangées par secteur, posé en pied de la page d'accueil.
 *
 * Ajouté dans l'hôte plutôt que dans la vue : celle-ci est régénérée depuis la
 * maquette, où ces pages n'existent pas (même procédé que SecteursLocaux, sur
 * la page Zone d'intervention).
 *
 * Les trois secteurs sont ceux des trois villes de référence : Bresse autour
 * de Bourg-en-Bresse, plaine de l'Ain et Côtière autour de Meximieux, Bugey
 * autour d'Ambérieu-en-Bugey. La liste vient des données : une commune ajoutée
 * dans lib/data/locales.ts avec un `pole` apparaît ici toute seule.
 *
 * Styles repris de la page d'accueil : fond #EDEDE7 des sections alternées,
 * surtitre vert à filet, titre en Cormorant léger, liens vert d'eau.
 */
const SECTEURS = {
  'construction-maison-bourg-en-bresse': 'Bresse',
  'construction-maison-meximieux': 'Plaine de l’Ain et Côtière',
  'construction-maison-amberieu-en-bugey': 'Bugey',
} as const;

/** Bresse, puis plaine de l'Ain et Côtière, puis Bugey. */
const ORDRE = Object.keys(SECTEURS);
const SECTEURS_RANGES = [...POLES].sort((a, b) => ORDRE.indexOf(a.slug) - ORDRE.indexOf(b.slug));

export default function CommunesAccueil() {
  return (
    <section style={{ background: '#EDEDE7', padding: 'clamp(84px,11vw,140px) 0' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' }}>
        <div data-reveal="" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span style={{ width: '42px', height: '1px', background: '#2E5A49' }} />
          <span style={{ color: '#2E5A49', fontSize: '12px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Zone d’intervention
          </span>
        </div>
        <h2 data-reveal="" data-delay="80" style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 'clamp(32px,4.4vw,60px)', lineHeight: 1.04, color: '#111412', maxWidth: '22ch', textWrap: 'balance' }}>
          Nous construisons dans ces communes
        </h2>
        <p data-reveal="" data-delay="140" style={{ margin: '20px 0 0', maxWidth: '62ch', color: '#4E534E', fontSize: 'clamp(15px,1.4vw,18px)', lineHeight: 1.75 }}>
          Dans un rayon d’environ 30&nbsp;km autour de Bourg-en-Bresse, de Meximieux et d’Ambérieu-en-Bugey. Chaque page dit ce que le terrain de la commune demande avant de construire.
        </p>

        <div className="me-g3" style={{ gap: 'clamp(28px,3.4vw,56px)', marginTop: 'clamp(36px,4.6vw,64px)', alignItems: 'start' }}>
          {SECTEURS_RANGES.map((pole, i) => {
            const communes = [pole, ...communesDuPole(pole.slug)];
            return (
              <div key={pole.slug} data-reveal="" data-delay={String(i * 100)}>
                <h3 style={{ margin: 0, paddingBottom: '14px', borderBottom: '1px solid rgba(17,20,18,0.28)', fontFamily: "'Cormorant Garamond',serif", fontWeight: 400, fontSize: 'clamp(24px,2.4vw,32px)', color: '#111412' }}>
                  {SECTEURS[pole.slug as keyof typeof SECTEURS] ?? pole.commune}
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {communes.map((c) => (
                    <li key={c.slug} style={{ borderBottom: '1px solid rgba(17,20,18,0.12)' }}>
                      <a
                        href={`/${c.slug}`}
                        className="me-link"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', minHeight: '44px', textDecoration: 'none', color: '#2E5A49', fontSize: '15.5px', fontWeight: c.slug === pole.slug ? 600 : 500 }}
                        style-hover="color:#111412;"
                      >
                        <span>Construire à {c.commune}</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p data-reveal="" style={{ margin: 'clamp(28px,3.4vw,44px) 0 0', color: '#565B56', fontSize: '14px', lineHeight: 1.7 }}>
          {LOCALES.length} pages locales. Votre commune n’y figure pas&nbsp;? <a href="/contact" className="me-link" style={{ color: '#2E5A49', fontWeight: 600, textDecoration: 'none' }} style-hover="color:#111412;">Écrivez-nous</a>&nbsp;: nous construisons dans tout le rayon de 30&nbsp;km.
        </p>
      </div>
    </section>
  );
}
