'use client';

import type { Vals } from '@/components/site-vals';

/**
 * Blog — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function Blog(v: Vals) {
  const { featured, others } = v;
  return (
    <>
      <main data-screen-label="Blog">
          <section style={{ background: "#111412", color: "#F7F7F4", padding: "clamp(106px,11vw,130px) 0 clamp(30px,3.6vw,44px)" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}><span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span><span style={{ color: "#9CC4B2", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Blog · Guides construction</span></div>
              <h1 data-reveal="" data-delay="120" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(31px,3.9vw,52px)", lineHeight: "1.03", letterSpacing: "-0.02em", maxWidth: "18ch" }}>Comprendre avant de signer.</h1>
              <p data-reveal="" data-delay="200" style={{ margin: "24px 0 0", color: "rgba(247,247,244,0.7)", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.7", maxWidth: "58ch" }}>Prix au m², RE2020, échéancier CCMI, étapes d'un chantier : les repères que nous donnons à nos clients au premier rendez-vous, écrits noir sur blanc.</p>
            </div>
          </section>

          <section style={{ background: "#F7F7F4", padding: "clamp(56px,7vw,90px) 0 clamp(72px,9vw,130px)" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <a href={featured.href} onClick={featured.onOpen} data-reveal="" className="me-card me-projbig" style={{ display: "block", textDecoration: "none", position: "relative", borderRadius: "12px", overflow: "hidden", minHeight: "clamp(340px,42vw,480px)", color: "#F7F7F4" }}>
                <img className="me-zoom" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E" alt={featured.alt} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#111412", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `${featured.bg}` }} />
                <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0.1) 30%,rgba(11,13,12,0.92) 100%)" }}></div>
                <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "clamp(28px,3.4vw,52px)" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center", fontSize: "11.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9CC4B2" }}>
                    <span>{featured.cat}</span><span style={{ color: "rgba(247,247,244,0.5)" }}>{featured.date}</span><span style={{ color: "rgba(247,247,244,0.5)" }}>{featured.read}</span>
                  </div>
                  <h2 style={{ margin: "14px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(28px,3.8vw,52px)", lineHeight: "1.05", maxWidth: "24ch" }}>{featured.title}</h2>
                  <p style={{ margin: "14px 0 0", color: "rgba(247,247,244,0.78)", fontSize: "15px", lineHeight: "1.7", maxWidth: "62ch" }}>{featured.excerpt}</p>
                  <span style={{ display: "inline-block", marginTop: "20px", fontSize: "14px", fontWeight: "600", color: "#CFE0D6" }}>Lire l'article →</span>
                </div>
              </a>

              <div className="me-g2" style={{ gap: "clamp(16px,2vw,26px)", marginTop: "clamp(16px,2vw,26px)" }}>
                {(others ?? []).map((a, i) => (
                  <a href={a.href} onClick={a.onOpen} data-reveal="" data-delay={a.delay} className="me-card" style={{ display: "flex", flexDirection: "column", textDecoration: "none", background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "12px", overflow: "hidden", color: "#111412" }} key={i}>
                    <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}><img loading="lazy" className="me-zoom" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E" alt={a.alt} style={{ width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#EDEDE7", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `${a.bg}` }} /></div>
                    <div style={{ padding: "clamp(24px,2.8vw,36px)", display: "flex", flexDirection: "column", flex: "1" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#2E5A49" }}>
                        <span>{a.cat}</span><span style={{ color: "#8D948E" }}>{a.date}</span><span style={{ color: "#8D948E" }}>{a.read}</span>
                      </div>
                      <h2 style={{ margin: "12px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: "1.12", color: "#111412" }}>{a.title}</h2>
                      <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7", flex: "1" }}>{a.excerpt}</p>
                      <span style={{ display: "inline-block", marginTop: "20px", fontSize: "13.5px", fontWeight: "600", color: "#111412", borderBottom: "1px solid #2E5A49", paddingBottom: "4px", alignSelf: "flex-start" }}>Lire l'article →</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
