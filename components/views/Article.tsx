'use client';

import type { Vals } from '@/components/site-vals';

/**
 * Article — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function Article(v: Vals) {
  const { art, artBody, goBlog, goContact, goEstimation } = v;
  return (
    <>
      <main data-screen-label="Article de blog">
          <section style={{ background: "#111412", color: "#F7F7F4", padding: "clamp(102px,10vw,124px) 0 clamp(26px,3vw,38px)" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <a href="#blog" onClick={goBlog} className="me-link" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "rgba(247,247,244,0.72)", fontSize: "13px", fontWeight: "600", marginBottom: "22px" }} style-hover="color:#9CC4B2;">← Tous les articles</a>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center", fontSize: "11.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9CC4B2" }}>
                <span>{art.cat}</span><span style={{ color: "rgba(247,247,244,0.5)" }}>{art.date}</span><span style={{ color: "rgba(247,247,244,0.5)" }}>{art.read} de lecture</span>
              </div>
              <h1 style={{ margin: "18px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(34px,5.4vw,68px)", lineHeight: "1.03", letterSpacing: "-0.02em", textWrap: "balance" }}>{art.title}</h1>
              <p style={{ margin: "22px 0 0", color: "rgba(247,247,244,0.72)", fontSize: "clamp(16px,1.5vw,19px)", lineHeight: "1.7", fontWeight: "300" }}>{art.excerpt}</p>
            </div>
          </section>

          <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
            <div style={{ borderRadius: "12px", overflow: "hidden", marginTop: "clamp(-40px,-4vw,-24px)", boxShadow: "0 50px 90px -55px rgba(17,20,18,0.7)", aspectRatio: "16/8", background: "#EDEDE7" }}>
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E" alt={art.alt} style={{ width: "100%", height: "100%", objectFit: "cover", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `${art.bg}` }} />
            </div>
          </div>

          <section style={{ background: "#F7F7F4", padding: "clamp(48px,6vw,80px) 0 clamp(72px,9vw,130px)" }}>
            <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              {(artBody ?? []).map((b, i) => (
                <div data-reveal="" style={{ marginBottom: "clamp(30px,3.4vw,44px)" }} key={i}>
                  <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(24px,2.8vw,36px)", lineHeight: "1.14", color: "#111412" }}>{b.h}</h2>
                  <p style={{ margin: "14px 0 0", color: "#4a443c", fontSize: "clamp(16px,1.5vw,18px)", lineHeight: "1.85", textWrap: "pretty" }}>{b.p}</p>
                </div>
              ))}

              <div data-reveal="" style={{ marginTop: "clamp(40px,5vw,64px)", background: "#111412", color: "#F7F7F4", borderRadius: "12px", padding: "clamp(30px,3.6vw,48px)" }}>
                <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(26px,3vw,38px)", lineHeight: "1.08" }}>Votre projet, chiffré en une minute.</h2>
                <p style={{ margin: "14px 0 0", color: "rgba(247,247,244,0.7)", fontSize: "15px", lineHeight: "1.7" }}>Surface, plain-pied ou étage, chambres, garage, vide sanitaire : notre simulateur vous donne une fourchette immédiate, sans formulaire préalable.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "26px" }}>
                  <a href="#estimation" onClick={goEstimation} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 30px", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontSize: "14px", fontWeight: "600" }} style-hover="background:#3B7059;transform:translateY(-3px);">Estimer mon projet →</a>
                  <a href="#contact" onClick={goContact} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 30px", borderRadius: "100px", background: "transparent", color: "#F7F7F4", fontSize: "14px", fontWeight: "600", border: "1px solid rgba(247,247,244,0.4)" }} style-hover="background:rgba(247,247,244,0.14);transform:translateY(-3px);">Prendre rendez-vous</a>
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
