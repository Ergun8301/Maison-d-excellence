'use client';

import type { Vals } from '@/components/site-vals';
import { cssToStyle } from '@/lib/css';

/**
 * Terrains — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function Terrains(v: Vals) {
  const { terrainChips, terrainCount, terrains } = v;
  return (
    <>
      <main data-screen-label="Terrains">
          <section style={{ position: "relative", minHeight: "clamp(420px,48vh,580px)", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
            <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}><img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80" alt="Terrain à bâtir constructible dans la Plaine de l'Ain" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 54%", animation: "meKb 18s ease-out forwards" }} /></div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0.62) 0%,rgba(11,13,12,0.42) 34%,rgba(11,13,12,0.74) 68%,rgba(11,13,12,0.94) 100%)" }}></div>
            <div style={{ position: "relative", width: "100%", maxWidth: "1440px", margin: "0 auto", padding: "clamp(104px,11vw,128px) clamp(20px,5vw,64px) clamp(44px,5.4vw,76px)" }}>
              <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}><span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span><span style={{ color: "#CFE0D6", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Terrains à bâtir · Ain</span></div>
              <h1 data-reveal="" data-delay="120" style={{ margin: "0", color: "#FFFFFF", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(38px,6vw,80px)", lineHeight: "0.99", letterSpacing: "-0.02em", maxWidth: "18ch", textShadow: "0 4px 40px rgba(11,13,12,0.7)" }}>Des terrains que nous connaissons.</h1>
              <p data-reveal="" data-delay="220" style={{ margin: "clamp(20px,2.2vw,28px) 0 0", color: "rgba(247,247,244,0.86)", fontSize: "clamp(15px,1.35vw,17.5px)", lineHeight: "1.7", maxWidth: "60ch", textShadow: "0 2px 20px rgba(11,13,12,0.85)" }}>Nous ne vendons pas de terrains : nous construisons dessus. Voici les parcelles que nous suivons actuellement dans le secteur, dont nous avons vérifié la faisabilité pour un projet de maison.</p>
            </div>
          </section>

          <section style={{ background: "#F7F7F4", padding: "clamp(64px,8vw,110px) 0 clamp(72px,9vw,130px)" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "clamp(28px,3.4vw,40px)" }}>
                <div>
                  <h2 data-reveal="" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(28px,3.8vw,50px)", lineHeight: "1.04", color: "#111412" }}>Parcelles suivies en ce moment.</h2>
                  <p data-reveal="" data-delay="80" style={{ margin: "14px 0 0", color: "#77807A", fontSize: "14.5px", lineHeight: "1.65", maxWidth: "60ch" }}>Fiches tenues à jour manuellement. Une parcelle qui vous intéresse ? Nous étudions gratuitement si votre projet de maison y entre.</p>
                </div>
                <div data-reveal="" data-delay="160" style={{ fontSize: "14px", color: "#77807A" }}><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "30px", color: "#111412", verticalAlign: "-3px" }}>{terrainCount}</span> terrain(s) affiché(s)</div>
              </div>

              <div data-reveal="" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "clamp(28px,3.4vw,40px)" }}>
                {(terrainChips ?? []).map((chip, i) => (
                  <button onClick={chip.onClick} className="me-btn" style={{ cursor: "pointer", padding: "10px 20px", borderRadius: "100px", border: "1px solid", fontFamily: "inherit", fontSize: "13px", fontWeight: "600", letterSpacing: "0.01em", ...cssToStyle(chip.style) }} key={i}>{chip.label}</button>
                ))}
              </div>

              <div className="me-g3" style={{ gap: "clamp(16px,1.8vw,26px)" }}>
                {(terrains ?? []).map((t, i) => (
                  <a href={t.href} onClick={t.onOpen} data-reveal="" data-delay={t.delay} className="me-card" style={{ display: "block", textDecoration: "none", borderRadius: "9px", overflow: "hidden", background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.07)", opacity: `${t.cardOpacity}`, color: "#111412" }} key={i}>
                    <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/11" }}>
                      <img className="me-zoom" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E" alt={`Terrain à bâtir à ${t.commune} dans l'Ain`} style={{ width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#EDEDE7", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `${t.bg}` }} />
                      <span style={{ position: "absolute", top: "13px", left: "13px", padding: "6px 13px", borderRadius: "100px", fontSize: "10.5px", fontWeight: "700", letterSpacing: "0.05em", textTransform: "uppercase", ...cssToStyle(t.badgeStyle) }}>{t.status}</span>
                      <span style={{ position: "absolute", top: "13px", right: "13px", padding: "6px 12px", borderRadius: "100px", background: "rgba(11,13,12,0.6)", color: "#F7F7F4", fontSize: "12px", fontWeight: "600", backdropFilter: "blur(4px)" }}>{t.surfaceLabel}</span>
                    </div>
                    <div style={{ padding: "22px 24px 24px" }}>
                      <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "500", fontSize: "26px", color: "#111412", lineHeight: "1" }}>{t.commune}</h3>
                      <div style={{ marginTop: "6px", fontSize: "11.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#2E5A49" }}>{t.secteur} · Réf. {t.ref}</div>
                      <p style={{ margin: "14px 0 0", color: "#77807A", fontSize: "13.5px", lineHeight: "1.55" }}>{t.note}</p>
                      <div style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid rgba(17,20,18,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                        <span><span style={{ display: "block", fontSize: "11px", color: "#8D948E" }}>Terrain à partir de</span><span style={{ display: "block", fontFamily: "'Cormorant Garamond',serif", fontSize: "25px", color: "#111412", lineHeight: "1.1" }}>{t.priceLabel}</span></span>
                        <span style={{ padding: "11px 18px", borderRadius: "100px", background: "#111412", color: "#F7F7F4", fontSize: "12.5px", fontWeight: "600", whiteSpace: "nowrap" }}>Voir la fiche →</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <p data-reveal="" style={{ margin: "clamp(34px,4vw,48px) 0 0", fontSize: "13px", color: "#8D948E", lineHeight: "1.6", maxWidth: "78ch" }}>Informations communiquées à titre indicatif, hors frais de notaire et sous réserve de disponibilité. Les terrains sont commercialisés par leurs propriétaires ou par notre partenaire foncier : vous restez libre de votre constructeur.</p>
            </div>
          </section>
        </main>
    </>
  );
}
