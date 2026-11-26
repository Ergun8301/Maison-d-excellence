import { ARTICLES } from '@/lib/data/articles';
import { CARTE, CONTENEUR, H2, H3, Surtitre, VERT } from '@/components/PageExtension';

/**
 * Les guides du blog consacrés à l'extension, en cartes photo. Affiché sur la
 * page Extension et sur les pages Extension par ville : le lien inverse
 * existe dans chaque article.
 */
export default function GuidesExtension({ fond = '#FFFFFF' }: { fond?: string }) {
  const guides = ARTICLES.filter((a) => a.cat === 'Extension');
  if (guides.length === 0) return null;
  return (
    <section style={{ background: fond, padding: 'clamp(64px,8vw,112px) 0' }}>
      <div style={CONTENEUR}>
        <div data-reveal="">
          <Surtitre>Nos guides</Surtitre>
          <h2 style={{ ...H2, maxWidth: '26ch' }}>Les questions qu’on se pose avant d’agrandir.</h2>
        </div>
        <div className="me-g3" style={{ gap: 'clamp(14px,1.6vw,22px)', marginTop: 'clamp(30px,3.6vw,46px)' }}>
          {guides.map((g, i) => (
            <a key={g.slug} href={`/blog/${g.slug}`} data-reveal="" data-delay={String((i % 3) * 90)} className="me-link" style={{ ...CARTE, padding: 0, overflow: 'hidden', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
              <img src={g.img} alt={g.alt} loading="lazy" decoding="async" width={640} height={400} style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '16 / 10', objectFit: 'cover', background: '#EDEDE7' }} />
              <span style={{ padding: 'clamp(18px,2vw,26px)', display: 'block' }}>
                <span style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: VERT, fontWeight: 700 }}>{g.read} de lecture</span>
                <span style={{ ...H3, display: 'block', marginTop: '8px', fontSize: '22px' }}>{g.title}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
