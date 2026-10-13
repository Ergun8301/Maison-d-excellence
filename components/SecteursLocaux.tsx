import { LOCALES, POLES, communesDuPole } from '@/lib/data/locales';

/**
 * Renvoi vers les pages locales, posé en pied de la page Zone.
 *
 * Ajouté ici plutôt que dans le gabarit de la vue : celui-ci est régénéré
 * depuis la maquette, où ces pages n'existent pas. Même procédé que la FAQ de
 * la page Entreprise.
 *
 * Trois cartes pour les trois pôles — ceux qui portent un cercle de 30 km sur
 * la carte juste au-dessus — puis, sous chaque pôle, les communes qui ont leur
 * propre page. Le lien depuis cette page compte : sans lui, les pages locales
 * ne seraient atteignables que par le plan du site et par le pied de page, qui
 * ne porte que les trois pôles.
 *
 * La liste vient des données : une commune ajoutée dans lib/data/locales.ts
 * avec un `pole` apparaît ici toute seule.
 */
const SEPARATEUR = { color: 'rgba(247,247,244,0.3)', padding: '0 4px' } as const;

export default function SecteursLocaux() {
  const avecCommunes = POLES.filter((p) => communesDuPole(p.slug).length > 0);

  return (
    <section style={{ background: '#111412', color: '#F7F7F4', padding: 'clamp(56px,7vw,96px) 0' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
          <span style={{ width: '42px', height: '1px', background: '#9CC4B2' }} />
          <span style={{ color: '#9CC4B2', fontSize: '11.5px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            Nos trois pôles
          </span>
        </div>
        <h2 style={{ margin: '0 0 clamp(28px,3.4vw,44px)', fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 'clamp(26px,3.4vw,44px)', lineHeight: 1.08, maxWidth: '26ch' }}>
          Ce que construire change d’une commune à l’autre.
        </h2>
        <div className="me-g3" style={{ gap: 'clamp(18px,2.2vw,34px)' }}>
          {POLES.map((l) => (
            <a
              key={l.slug}
              href={`/${l.slug}`}
              className="me-link"
              style={{ display: 'block', textDecoration: 'none', color: 'inherit', paddingTop: '20px', borderTop: '1px solid rgba(247,247,244,0.16)' }}
              style-hover="color:#9CC4B2;"
            >
              <span style={{ display: 'block', fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 'clamp(22px,2.2vw,28px)' }}>
                {l.commune}
              </span>
              <span style={{ display: 'block', margin: '10px 0 0', fontSize: '14.5px', lineHeight: 1.7, color: 'rgba(247,247,244,0.66)' }}>
                {l.blocs[0].titre}
              </span>
              <span style={{ display: 'inline-block', margin: '14px 0 0', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9CC4B2' }}>
                Lire la page →
              </span>
            </a>
          ))}
        </div>

        {/* Les communes qui ont leur page, rangées sous leur pôle. */}
        <div style={{ margin: 'clamp(34px,4vw,54px) 0 0', display: 'flex', flexDirection: 'column', gap: 'clamp(18px,2vw,26px)' }}>
          {avecCommunes.map((p) => (
            <div key={p.slug} style={{ paddingTop: '18px', borderTop: '1px solid rgba(247,247,244,0.16)' }}>
              <span style={{ display: 'block', marginBottom: '10px', color: '#9CC4B2', fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                Autour de {p.commune}
              </span>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 2 }}>
                {communesDuPole(p.slug).map((c, i) => (
                  <span key={c.slug}>
                    {i > 0 && <span style={SEPARATEUR}>·</span>}
                    <a
                      href={`/${c.slug}`}
                      className="me-link"
                      style={{ textDecoration: 'none', color: 'rgba(247,247,244,0.82)', whiteSpace: 'nowrap' }}
                      style-hover="color:#9CC4B2;"
                    >
                      {c.commune}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <p style={{ margin: 'clamp(26px,3vw,38px) 0 0', fontSize: '13px', lineHeight: 1.7, color: 'rgba(247,247,244,0.5)' }}>
          {LOCALES.length} communes détaillées, et nous construisons dans tout le rayon de 30 km autour de chacun des trois pôles.
        </p>
      </div>
    </section>
  );
}
