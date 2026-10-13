import type { PageLocale } from '@/lib/data/locales';

/**
 * Page locale — Meximieux, Bourg-en-Bresse, Ambérieu-en-Bugey.
 *
 * Ces pages ne figurent pas dans la maquette : elles sont écrites à la main,
 * mais reprennent exactement le vocabulaire visuel du site — bandeau sombre,
 * titres en Cormorant, corps crème, surtitre vert à filet, questions
 * fréquentes dans la grille de components/Faq.tsx. Rien de neuf à l'écran.
 *
 * Le gabarit est commun, le contenu ne l'est pas : il vient entièrement de
 * lib/data/locales.ts, où chaque commune a ses propres sections, son propre
 * nombre de sections et ses propres questions. Voir ce fichier pour les règles
 * d'écriture et pour ce qui reste à compléter.
 */
const SURTITRE_TRAIT = { width: '42px', height: '1px', background: '#9CC4B2' } as const;

const H2 = {
  margin: '0',
  fontFamily: "'Cormorant Garamond',serif",
  fontWeight: '400',
  fontSize: 'clamp(24px,2.9vw,36px)',
  lineHeight: 1.12,
  color: '#111412',
} as const;

const P = { margin: '14px 0 0', color: '#4a443c', fontSize: '16px', lineHeight: '1.85' } as const;

export default function Locale({ page }: { page: PageLocale }) {
  return (
    <main data-screen-label={page.commune}>
      {/* Bandeau */}
      <section style={{ background: "#111412", color: "#F7F7F4", padding: "clamp(106px,11vw,130px) 0 clamp(34px,4vw,50px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={SURTITRE_TRAIT}></span>
            <span style={{ color: "#9CC4B2", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>{page.surtitre}</span>
          </div>
          <h1 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(34px,5vw,62px)", lineHeight: "1.04", letterSpacing: "-0.02em" }}>{page.h1}</h1>
          {page.intro.map((t, i) => (
            <p key={i} style={{ margin: i === 0 ? "26px 0 0" : "14px 0 0", maxWidth: "62ch", color: "rgba(247,247,244,0.76)", fontSize: "16.5px", lineHeight: "1.8" }}>{t}</p>
          ))}
        </div>
      </section>

      {/* Les sections propres à la commune */}
      <section style={{ background: "#F7F7F4", padding: "clamp(48px,6vw,80px) 0 clamp(40px,5vw,64px)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", display: "flex", flexDirection: "column", gap: "clamp(30px,3.6vw,46px)" }}>
          {page.blocs.map((b) => (
            <div key={b.titre}>
              <h2 style={H2}>{b.titre}</h2>
              {b.paragraphes.map((t, i) => (
                <p key={i} style={P}>{t}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Les communes voisines */}
      <section style={{ background: "#EDEDE7", padding: "clamp(48px,6vw,80px) 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span>
            <span style={{ color: "#2E5A49", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase" }}>Communes voisines</span>
          </div>
          <h2 style={{ ...H2, maxWidth: "24ch" }}>{page.villagesTitre}</h2>
          <p style={{ ...P, maxWidth: "70ch" }}>{page.villagesIntro}</p>
          <ul className="me-g3" style={{ listStyle: "none", margin: "clamp(26px,3vw,40px) 0 0", padding: "0", gap: "clamp(14px,1.6vw,22px) clamp(24px,3vw,48px)" }}>
            {page.villages.map((v) => (
              <li key={v.nom} style={{ paddingTop: "16px", borderTop: "1px solid rgba(17,20,18,0.12)" }}>
                <span style={{ display: "block", fontFamily: "'Cormorant Garamond',serif", fontWeight: "500", fontSize: "20px", color: "#111412" }}>{v.nom}</span>
                <span style={{ display: "block", margin: "6px 0 0", fontSize: "14px", lineHeight: "1.65", color: "#565B56" }}>{v.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Questions fréquentes locales — même grille que la FAQ de l'entreprise */}
      <section id="faq" style={{ background: "#F7F7F4", padding: "clamp(56px,7vw,96px) 0", scrollMarginTop: "80px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
            <span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span>
            <span style={{ color: "#2E5A49", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase" }}>Questions fréquentes</span>
          </div>
          <h2 style={{ ...H2, margin: "0 0 clamp(30px,3.6vw,46px)", fontWeight: "300", fontSize: "clamp(26px,3.4vw,44px)", maxWidth: "24ch" }}>{page.faqTitre}</h2>
          <div className="me-g2" style={{ gap: "clamp(20px,2.4vw,38px) clamp(28px,4vw,72px)" }}>
            {page.faq.map((item) => (
              <div key={item.q} style={{ paddingTop: "22px", borderTop: "1px solid rgba(17,20,18,0.12)" }}>
                <h3 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", fontWeight: "500", fontSize: "clamp(20px,1.9vw,25px)", lineHeight: "1.25", color: "#111412" }}>{item.q}</h3>
                <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.75" }}>{item.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l'estimation */}
      <section style={{ background: "#111412", color: "#F7F7F4", padding: "clamp(56px,7vw,96px) 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", textAlign: "center" }}>
          <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(26px,3.6vw,46px)", lineHeight: "1.1" }}>
            Votre projet à {page.commune}, chiffré en une minute.
          </h2>
          <p style={{ margin: "18px auto 0", maxWidth: "58ch", color: "rgba(247,247,244,0.72)", fontSize: "16px", lineHeight: "1.8" }}>
            {page.ctaTexte}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginTop: "clamp(26px,3vw,38px)" }}>
            <a href="/#estimation" className="me-btn" style={{ display: "inline-flex", alignItems: "center", gap: "9px", textDecoration: "none", padding: "15px 30px", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontSize: "13.5px", fontWeight: "600" }} style-hover="background:#3B7059;transform:translateY(-3px);">Estimer mon projet →</a>
            <a href="/contact" className="me-btn" style={{ display: "inline-flex", alignItems: "center", gap: "9px", textDecoration: "none", padding: "15px 30px", borderRadius: "100px", background: "transparent", border: "1px solid rgba(247,247,244,0.28)", color: "rgba(247,247,244,0.85)", fontSize: "13.5px", fontWeight: "600" }} style-hover="border-color:#9CC4B2;color:#9CC4B2;transform:translateY(-3px);">Nous écrire</a>
          </div>
          <p style={{ margin: "clamp(26px,3vw,38px) 0 0", fontSize: "14px", lineHeight: "1.7", color: "rgba(247,247,244,0.6)" }}>
            {page.noteReferences}
          </p>
        </div>
      </section>
    </main>
  );
}
