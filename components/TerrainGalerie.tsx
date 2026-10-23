import Link from 'next/link';
import { GALERIE, PLAN, TERRAINS } from '@/lib/data/terrains';

const SURTITRE = { color: '#2E5A49', fontSize: '11.5px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' } as const;
const TITRE = { margin: 0, fontFamily: "'Cormorant Garamond',serif", fontWeight: 400, fontSize: 'clamp(26px,3.2vw,40px)', lineHeight: 1.1, color: '#111412' } as const;
const IMG = { display: 'block', width: '100%', height: 'auto', borderRadius: '8px', background: '#EDEDE7' } as const;

function Surtitre({ children }: { children: string }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <span style={{ width: '42px', height: '1px', background: '#2E5A49' }} />
      <span style={SURTITRE}>{children}</span>
    </div>
  );
}

/**
 * Photos et plan de division sous une fiche terrain, posés dans l'hôte
 * plutôt que dans la vue, que la maquette régénère.
 *
 * Les photos s'affichent entières, à leur proportion d'origine : un cadre à
 * hauteur fixe rogne les vues panoramiques. Les formats identiques sont
 * appariés sur une même rangée, pour que les hauteurs restent égales.
 */
export default function TerrainGalerie({ slug }: { slug: string }) {
  const autres = TERRAINS.filter((t) => t.slug !== slug);
  return (
    <>
      <section style={{ background: '#F7F7F4', padding: '0 0 clamp(56px,7vw,96px)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' }}>
          <Surtitre>Le terrain en photos</Surtitre>
          <h2 style={TITRE}>Le terrain et ses abords</h2>
          <p style={{ margin: '14px 0 0', maxWidth: '62ch', color: '#4E534E', fontSize: '15px', lineHeight: 1.75 }}>
            Photographies de l’ensemble de la division : elles ne se rapportent pas à un lot en particulier.
          </p>
          <div className="me-g2" style={{ gap: 'clamp(12px,1.6vw,22px)', marginTop: 'clamp(24px,3vw,36px)' }}>
            {GALERIE.map((g) => (
              <a key={g.src} href={g.src} target="_blank" rel="noopener" aria-label={`${g.alt} (ouvrir en grand)`} style={{ display: 'block', ...(g.pleine ? { gridColumn: '1 / -1' } : {}) }}>
                <img src={g.src} width={g.w} height={g.h} alt={g.alt} loading="lazy" decoding="async" style={IMG} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#EDEDE7', padding: 'clamp(48px,6vw,84px) 0' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' }}>
          <Surtitre>Plan de division</Surtitre>
          <h2 style={TITRE}>Les lots, les accès et les zones d’implantation</h2>
          <p style={{ margin: '14px 0 0', maxWidth: '70ch', color: '#4E534E', fontSize: '15px', lineHeight: 1.75 }}>
            Plan établi par un géomètre-expert sur limites bornées (procès-verbal du 18 décembre 2024). Les noms des propriétaires voisins sont masqués ; le reste du plan n’est pas retouché.
          </p>
          <a href={PLAN.src} target="_blank" rel="noopener" aria-label={`${PLAN.alt} (ouvrir en grand)`} style={{ display: 'block', marginTop: 'clamp(24px,3vw,36px)' }}>
            <img src={PLAN.src} width={PLAN.w} height={PLAN.h} alt={PLAN.alt} loading="lazy" decoding="async" style={{ ...IMG, background: '#fff', border: '1px solid rgba(17,20,18,0.1)' }} />
          </a>
          <a href={PLAN.src} target="_blank" rel="noopener" className="me-btn" style={{ marginTop: '18px', display: 'inline-flex', alignItems: 'center', padding: '12px 22px', borderRadius: '100px', background: '#111412', color: '#F7F7F4', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
            Ouvrir le plan en grand ↗
          </a>
          <p style={{ margin: '18px 0 0', maxWidth: '78ch', color: '#8D948E', fontSize: '12.5px', lineHeight: 1.65 }}>
            Le document ne peut servir que pour l’usage pour lequel il a été réalisé. Le tracé des réseaux est donné à titre indicatif, d’après les indications du client.
          </p>
          {autres.length > 0 ? (
            <div style={{ marginTop: 'clamp(32px,4vw,48px)', paddingTop: '24px', borderTop: '1px solid rgba(17,20,18,0.12)' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8D948E' }}>Les autres lots</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '14px' }}>
                {autres.map((t) => (
                  <Link key={t.slug} href={`/terrains/${t.slug}`} className="me-btn" style={{ padding: '11px 20px', borderRadius: '100px', border: '1px solid rgba(17,20,18,0.2)', color: '#111412', fontSize: '13.5px', fontWeight: 600, textDecoration: 'none' }}>
                    Lot {t.ref.slice(-1)} · {t.surface} m² · {t.status}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
