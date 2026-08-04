'use client';

import type { Vals } from '@/components/site-vals';

/**
 * Investisseurs — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function Investisseurs(v: Vals) {
  const { goContact } = v;
  return (
    <>
      <main data-screen-label="Investisseurs">
          <section style={{ background: "#111412", color: "#F7F7F4", padding: "clamp(106px,11vw,130px) 0 clamp(30px,3.6vw,44px)" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}><span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span><span style={{ color: "#9CC4B2", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Projets investisseurs</span></div>
              <h1 data-reveal="" data-delay="120" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(31px,3.9vw,52px)", lineHeight: "1.03", letterSpacing: "-0.02em", maxWidth: "20ch" }}>Maisons jumelées et mitoyennes pour investisseurs.</h1>
              <p data-reveal="" data-delay="200" style={{ margin: "24px 0 0", color: "rgba(247,247,244,0.7)", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.7", maxWidth: "62ch" }}>Construire deux à quatre logements sur une même parcelle coûte moins cher au mètre carré qu'une maison isolée, et se loue sans difficulté dans la Plaine de l'Ain et sur la Côtière. Nous chiffrons ces opérations comme des opérations : coût au m², loyer de marché, rendement brut.</p>
            </div>
          </section>

          <section style={{ background: "#F7F7F4", padding: "clamp(56px,7vw,90px) 0 clamp(72px,9vw,120px)" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div className="me-g3" style={{ gap: "clamp(16px,1.8vw,26px)" }}>
                <div data-reveal="" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", padding: "clamp(26px,3vw,38px)" }}>
                  <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "27px", color: "#111412" }}>Maison jumelée</h2>
                  <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Deux logements accolés par le garage ou un mur mitoyen, avec entrées et jardins indépendants. Le montage le plus simple : un permis, un chantier, deux lots revendables ou louables séparément.</p>
                </div>
                <div data-reveal="" data-delay="110" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", padding: "clamp(26px,3vw,38px)" }}>
                  <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "27px", color: "#111412" }}>Maisons mitoyennes</h2>
                  <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Trois à quatre logements en bande, format très efficient : moins de façades déperditives, moins de toiture par logement, emprise foncière optimisée. Le coût au mètre carré baisse de 8 à 12 %.</p>
                </div>
                <div data-reveal="" data-delay="220" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", padding: "clamp(26px,3vw,38px)" }}>
                  <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "27px", color: "#111412" }}>Petit collectif horizontal</h2>
                  <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Maisons groupées avec stationnement mutualisé, sur une parcelle de 900 m² et plus. Nous étudions la faisabilité au regard du PLU de la commune avant tout engagement.</p>
                </div>
              </div>

              <h2 data-reveal="" style={{ margin: "clamp(56px,7vw,96px) 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,4vw,52px)", lineHeight: "1.05", color: "#111412" }}>Deux exemples chiffrés.</h2>
              <p data-reveal="" data-delay="80" style={{ margin: "14px 0 0", color: "#77807A", fontSize: "14.5px", lineHeight: "1.65", maxWidth: "70ch" }}>Ordres de grandeur constatés dans notre secteur en 2026, hors frais de notaire et hors fiscalité. Chaque opération est rechiffrée sur la parcelle réelle et le PLU applicable.</p>
              <div className="me-g2" style={{ gap: "clamp(16px,2vw,26px)", marginTop: "clamp(28px,3.4vw,44px)" }}>
                <div data-reveal="" className="me-card" style={{ background: "#111412", color: "#F7F7F4", borderRadius: "12px", padding: "clamp(28px,3.4vw,44px)" }}>
                  <div style={{ fontSize: "11.5px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CC4B2" }}>Exemple A · Plaine de l'Ain</div>
                  <h3 style={{ margin: "14px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(26px,3vw,38px)", lineHeight: "1.08" }}>Jumelé, 2 × 85 m², 3 chambres</h3>
                  <div style={{ marginTop: "26px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "14.5px" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(247,247,244,0.12)" }}><span style={{ color: "rgba(247,247,244,0.66)" }}>Terrain (700 m²)</span><span style={{ fontWeight: "600" }}>128 000 €</span></span>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(247,247,244,0.12)" }}><span style={{ color: "rgba(247,247,244,0.66)" }}>Construction (170 m² au total)</span><span style={{ fontWeight: "600" }}>248 000 €</span></span>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(247,247,244,0.12)" }}><span style={{ color: "rgba(247,247,244,0.66)" }}>Frais annexes estimés</span><span style={{ fontWeight: "600" }}>34 000 €</span></span>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(247,247,244,0.12)" }}><span style={{ color: "rgba(247,247,244,0.66)" }}>Coût total de l'opération</span><span style={{ fontWeight: "700", color: "#CFE0D6" }}>410 000 €</span></span>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(247,247,244,0.12)" }}><span style={{ color: "rgba(247,247,244,0.66)" }}>Loyers mensuels (2 × 990 €)</span><span style={{ fontWeight: "600" }}>1 980 €</span></span>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}><span style={{ color: "rgba(247,247,244,0.66)" }}>Rendement brut</span><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "30px", lineHeight: "1", color: "#9CC4B2" }}>5,8 %</span></span>
                  </div>
                </div>
                <div data-reveal="" data-delay="120" className="me-card" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "12px", padding: "clamp(28px,3.4vw,44px)" }}>
                  <div style={{ fontSize: "11.5px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#2E5A49" }}>Exemple B · Côtière</div>
                  <h3 style={{ margin: "14px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(26px,3vw,38px)", lineHeight: "1.08", color: "#111412" }}>3 mitoyennes, 3 × 78 m², 2 chambres</h3>
                  <div style={{ marginTop: "26px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "14.5px", color: "#333834" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(17,20,18,0.1)" }}><span style={{ color: "#77807A" }}>Terrain (980 m²)</span><span style={{ fontWeight: "600" }}>196 000 €</span></span>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(17,20,18,0.1)" }}><span style={{ color: "#77807A" }}>Construction (234 m² au total)</span><span style={{ fontWeight: "600" }}>316 000 €</span></span>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(17,20,18,0.1)" }}><span style={{ color: "#77807A" }}>Frais annexes estimés</span><span style={{ fontWeight: "600" }}>48 000 €</span></span>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(17,20,18,0.1)" }}><span style={{ color: "#77807A" }}>Coût total de l'opération</span><span style={{ fontWeight: "700", color: "#111412" }}>560 000 €</span></span>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(17,20,18,0.1)" }}><span style={{ color: "#77807A" }}>Loyers mensuels (3 × 880 €)</span><span style={{ fontWeight: "600" }}>2 640 €</span></span>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}><span style={{ color: "#77807A" }}>Rendement brut</span><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "30px", lineHeight: "1", color: "#2E5A49" }}>5,7 %</span></span>
                  </div>
                </div>
              </div>

              <div data-reveal="" style={{ marginTop: "clamp(48px,6vw,80px)", background: "#EDEDE7", borderRadius: "12px", padding: "clamp(30px,4vw,52px)" }}>
                <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(26px,3.4vw,42px)", lineHeight: "1.06", color: "#111412" }}>Comment nous travaillons avec un investisseur</h2>
                <div className="me-g4" style={{ gap: "clamp(18px,2.4vw,34px)", marginTop: "clamp(26px,3vw,40px)" }}>
                  <div><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "30px", color: "#2E5A49", lineHeight: "1" }}>01</div><h3 style={{ margin: "12px 0 0", fontSize: "15px", fontWeight: "700", color: "#111412" }}>Faisabilité PLU</h3><p style={{ margin: "8px 0 0", color: "#565B56", fontSize: "13.5px", lineHeight: "1.6" }}>Emprise, hauteur, stationnement, division parcellaire : nous vérifions ce que la commune autorise réellement.</p></div>
                  <div><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "30px", color: "#2E5A49", lineHeight: "1" }}>02</div><h3 style={{ margin: "12px 0 0", fontSize: "15px", fontWeight: "700", color: "#111412" }}>Chiffrage d'opération</h3><p style={{ margin: "8px 0 0", color: "#565B56", fontSize: "13.5px", lineHeight: "1.6" }}>Coût de construction ferme au CCMI, frais annexes détaillés, calendrier de décaissement.</p></div>
                  <div><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "30px", color: "#2E5A49", lineHeight: "1" }}>03</div><h3 style={{ margin: "12px 0 0", fontSize: "15px", fontWeight: "700", color: "#111412" }}>Plans optimisés à la location</h3><p style={{ margin: "8px 0 0", color: "#565B56", fontSize: "13.5px", lineHeight: "1.6" }}>Surfaces utiles maximisées, charges d'entretien réduites, prestations robustes plutôt que décoratives.</p></div>
                  <div><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "30px", color: "#2E5A49", lineHeight: "1" }}>04</div><h3 style={{ margin: "12px 0 0", fontSize: "15px", fontWeight: "700", color: "#111412" }}>Livraison lot par lot</h3><p style={{ margin: "8px 0 0", color: "#565B56", fontSize: "13.5px", lineHeight: "1.6" }}>Réceptions échelonnées quand c'est possible, pour démarrer la location sans attendre la fin du chantier.</p></div>
                </div>
                <a href="#contact" onClick={goContact} className="me-btn" style={{ marginTop: "34px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "17px 32px", borderRadius: "100px", background: "#111412", color: "#F7F7F4", fontSize: "14px", fontWeight: "600" }} style-hover="background:#1C201D;transform:translateY(-3px);">Étudier une opération →</a>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
