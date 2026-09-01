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

              <h2 data-reveal="" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,4vw,52px)", lineHeight: "1.05", color: "#111412" }}>Chiffré sur votre parcelle, pas sur un exemple.</h2>
              <p data-reveal="" data-delay="80" style={{ margin: "14px 0 0", color: "#77807A", fontSize: "14.5px", lineHeight: "1.65", maxWidth: "70ch" }}>Le coût au mètre carré, le loyer de marché et le rendement dépendent de la parcelle, du PLU applicable et de la commune : un ordre de grandeur affiché ici n'aurait de valeur pour personne. Nous chiffrons l'opération sur votre terrain, avec les règles d'urbanisme qui s'y appliquent réellement.</p>
              <a href="#contact" onClick={goContact} data-reveal="" data-delay="140" className="me-btn" style={{ marginTop: "clamp(24px,3vw,36px)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 30px", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontSize: "14px", fontWeight: "600" }} style-hover="background:#3B7059;transform:translateY(-3px);">Faire chiffrer mon opération →</a>

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
