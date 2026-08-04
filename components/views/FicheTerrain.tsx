'use client';

import type { Vals } from '@/components/site-vals';

/**
 * FicheTerrain — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function FicheTerrain(v: Vals) {
  const { askTerrain, goEstimation, goTerrains, t } = v;
  return (
    <>
      <main data-screen-label="Fiche terrain">
          <section style={{ position: "relative", minHeight: "clamp(400px,46vh,548px)", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
            <div style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#111412" }}>
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E" alt={`Terrain à bâtir de ${t.surfaceLabel} à ${t.commune}`} style={{ width: "100%", height: "100%", objectFit: "cover", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `${t.bg}`, animation: "meKb 18s ease-out forwards" }} />
            </div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0.5) 0%,rgba(11,13,12,0.15) 36%,rgba(11,13,12,0.88) 100%)" }}></div>
            <div style={{ position: "relative", width: "100%", maxWidth: "1440px", margin: "0 auto", padding: "clamp(100px,10.5vw,124px) clamp(20px,5vw,64px) clamp(40px,5vw,70px)" }}>
              <a href="#terrains" onClick={goTerrains} className="me-link" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "rgba(247,247,244,0.8)", fontSize: "13px", fontWeight: "600", marginBottom: "18px" }} style-hover="color:#9CC4B2;">← Tous les terrains</a>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "16px" }}>
                <span style={{ padding: "6px 13px", borderRadius: "100px", fontSize: "10.5px", fontWeight: "700", letterSpacing: "0.05em", textTransform: "uppercase" }}>{t.status}</span>
                <span style={{ color: "#CFE0D6", fontSize: "12px", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase" }}>{t.secteur} · Réf. {t.ref}</span>
              </div>
              <h1 style={{ margin: "0", color: "#FFFFFF", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(33px,4.3vw,60px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>Terrain à bâtir à {t.commune}</h1>
            </div>
          </section>

          <section style={{ background: "#F7F7F4", padding: "clamp(56px,7vw,96px) 0 clamp(72px,9vw,130px)" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div className="me-split" style={{ gap: "clamp(36px,5vw,80px)", alignItems: "start" }}>
                <div>
                  <div className="me-g3" data-reveal="" style={{ gap: "1px", background: "rgba(17,20,18,0.12)", borderRadius: "8px", overflow: "hidden" }}>
                    <div style={{ background: "#FFFFFF", padding: "26px 24px" }}><div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8D948E" }}>Surface</div><div style={{ marginTop: "8px", fontFamily: "'Cormorant Garamond',serif", fontSize: "32px", color: "#111412", lineHeight: "1" }}>{t.surfaceLabel}</div></div>
                    <div style={{ background: "#FFFFFF", padding: "26px 24px" }}><div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8D948E" }}>Prix</div><div style={{ marginTop: "8px", fontFamily: "'Cormorant Garamond',serif", fontSize: "32px", color: "#111412", lineHeight: "1" }}>{t.priceLabel}</div></div>
                    <div style={{ background: "#FFFFFF", padding: "26px 24px" }}><div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8D948E" }}>Statut</div><div style={{ marginTop: "8px", fontFamily: "'Cormorant Garamond',serif", fontSize: "32px", color: "#111412", lineHeight: "1" }}>{t.status}</div></div>
                  </div>
                  <h2 data-reveal="" data-delay="80" style={{ margin: "clamp(34px,4vw,52px) 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(28px,3.6vw,46px)", lineHeight: "1.06", color: "#111412" }}>La parcelle</h2>
                  <p data-reveal="" data-delay="120" style={{ margin: "18px 0 0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.8", maxWidth: "60ch" }}>{t.desc}</p>
                  <div className="me-g2" data-reveal="" data-delay="180" style={{ gap: "14px", marginTop: "30px", maxWidth: "60ch" }}>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><span style={{ color: "#2E5A49", fontSize: "18px", lineHeight: "1.3" }}>✓</span><span style={{ fontSize: "14.5px", color: "#333834" }}>{t.note}</span></div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><span style={{ color: "#2E5A49", fontSize: "18px", lineHeight: "1.3" }}>✓</span><span style={{ fontSize: "14.5px", color: "#333834" }}>Faisabilité vérifiée par nos équipes</span></div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><span style={{ color: "#2E5A49", fontSize: "18px", lineHeight: "1.3" }}>✓</span><span style={{ fontSize: "14.5px", color: "#333834" }}>Compatible avec une maison RE2020</span></div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><span style={{ color: "#2E5A49", fontSize: "18px", lineHeight: "1.3" }}>✓</span><span style={{ fontSize: "14.5px", color: "#333834" }}>Étude d'implantation offerte</span></div>
                  </div>
                  <p data-reveal="" data-delay="240" style={{ margin: "30px 0 0", fontSize: "13px", color: "#8D948E", lineHeight: "1.6", maxWidth: "70ch" }}>Prix hors frais de notaire, hors viabilisation restant éventuellement à réaliser. Surface cadastrale communiquée par le propriétaire, à confirmer au bornage.</p>
                </div>

                <div data-reveal="" data-delay="120" style={{ position: "sticky", top: "104px", background: "#111412", color: "#F7F7F4", borderRadius: "12px", padding: "clamp(28px,3.4vw,44px)", boxShadow: "0 50px 90px -60px rgba(17,20,18,0.9)" }}>
                  <div style={{ fontSize: "11.5px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CC4B2" }}>Réf. {t.ref}</div>
                  <h2 style={{ margin: "16px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(26px,3vw,38px)", lineHeight: "1.08" }}>Ce terrain m'intéresse</h2>
                  <p style={{ margin: "14px 0 0", color: "rgba(247,247,244,0.7)", fontSize: "14.5px", lineHeight: "1.7" }}>Nous vérifions avec vous si votre projet de maison entre sur cette parcelle : emprise, orientation, règles d'urbanisme, budget global terrain + construction.</p>
                  <button onClick={askTerrain} className="me-btn" style={{ cursor: "pointer", marginTop: "26px", width: "100%", padding: "17px", border: "none", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", boxShadow: "0 22px 44px -22px rgba(46,90,73,1)" }} style-hover="background:#3B7059;transform:translateY(-2px);">Ce terrain m'intéresse →</button>
                  <p style={{ margin: "12px 0 0", fontSize: "12px", color: "rgba(247,247,244,0.5)", lineHeight: "1.6" }}>Le formulaire de contact est pré-rempli avec la référence de la parcelle.</p>
                  <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(247,247,244,0.14)", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <a href="tel:+33474346643" className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.82)", fontSize: "14px", fontWeight: "600" }} style-hover="color:#9CC4B2;">✆ 04 74 34 66 43</a>
                    <a href="https://wa.me/33615191647" target="_blank" rel="noopener" className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.82)", fontSize: "14px", fontWeight: "600" }} style-hover="color:#25D366;">WhatsApp · 06 15 19 16 47</a>
                    <a href="#estimation" onClick={goEstimation} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.82)", fontSize: "14px", fontWeight: "600" }} style-hover="color:#9CC4B2;">Estimer la maison →</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
