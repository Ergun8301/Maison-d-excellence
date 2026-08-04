'use client';

import type { Vals } from '@/components/site-vals';

/**
 * Renovation — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function Renovation(v: Vals) {
  const { goContact } = v;
  return (
    <>
      <main data-screen-label="Rénovation & extension">
          <section style={{ position: "relative", minHeight: "clamp(420px,48vh,580px)", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
            <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}><img src="/photos/maison-traditionnelle-etage.png" alt="Maison traditionnelle à étage dans l'Ain, avant travaux d'extension" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 54%", animation: "meKb 18s ease-out forwards" }} /></div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0.62) 0%,rgba(11,13,12,0.42) 34%,rgba(11,13,12,0.74) 68%,rgba(11,13,12,0.94) 100%)" }}></div>
            <div style={{ position: "relative", width: "100%", maxWidth: "1440px", margin: "0 auto", padding: "clamp(104px,11vw,128px) clamp(20px,5vw,64px) clamp(44px,5.4vw,76px)" }}>
              <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}><span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span><span style={{ color: "#CFE0D6", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Rénovation &amp; extension</span></div>
              <h1 data-reveal="" data-delay="120" style={{ margin: "0", color: "#FFFFFF", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(38px,6vw,80px)", lineHeight: "0.99", letterSpacing: "-0.02em", maxWidth: "20ch", textShadow: "0 4px 40px rgba(11,13,12,0.7)" }}>Agrandir ou rénover une maison existante.</h1>
              <p data-reveal="" data-delay="220" style={{ margin: "clamp(20px,2.2vw,28px) 0 0", color: "rgba(247,247,244,0.86)", fontSize: "clamp(15px,1.35vw,17.5px)", lineHeight: "1.7", maxWidth: "60ch", textShadow: "0 2px 20px rgba(11,13,12,0.85)" }}>Une activité secondaire, menée avec la même exigence technique que la construction neuve : surélévation, agrandissement, mise aux normes.</p>
            </div>
          </section>

          <section style={{ background: "#F7F7F4", padding: "clamp(64px,8vw,120px) 0 clamp(72px,9vw,130px)" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div className="me-split" style={{ gap: "clamp(36px,5vw,80px)", alignItems: "start" }}>
                <div>
                  <h2 data-reveal="" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(28px,3.8vw,50px)", lineHeight: "1.05", color: "#111412", maxWidth: "20ch" }}>Une activité secondaire, menée avec la même exigence.</h2>
                </div>
                <div>
                  <p data-reveal="" style={{ margin: "0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.8" }}>Notre métier principal reste la maison neuve. Nous prenons néanmoins des chantiers d'extension et de rénovation lorsque nous pouvons les mener correctement — parce qu'un agrandissement mal étudié coûte souvent plus cher qu'une construction bien pensée.</p>
                  <p data-reveal="" data-delay="100" style={{ margin: "20px 0 0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.8" }}>Comme en neuf, vous obtenez un descriptif détaillé, un prix ferme et un délai écrit. Les mêmes artisans, les mêmes assurances, le même interlocuteur.</p>
                </div>
              </div>

              <div className="me-g3" style={{ gap: "clamp(16px,1.8vw,26px)", marginTop: "clamp(44px,6vw,80px)" }}>
                <div data-reveal="" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", padding: "clamp(26px,3vw,38px)" }}>
                  <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "27px", color: "#111412" }}>Extension maçonnée</h3>
                  <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Agrandissement de plain-pied en brique ou béton cellulaire, raccordé à l'existant : séjour agrandi, suite parentale, bureau. Étude de la jonction de toiture et de l'isolation au point de raccord.</p>
                </div>
                <div data-reveal="" data-delay="110" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", padding: "clamp(26px,3vw,38px)" }}>
                  <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "27px", color: "#111412" }}>Surélévation et combles</h3>
                  <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Aménagement de combles sous charpente traditionnelle, ou surélévation partielle après étude de la structure porteuse et vérification du PLU communal.</p>
                </div>
                <div data-reveal="" data-delay="220" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", padding: "clamp(26px,3vw,38px)" }}>
                  <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "27px", color: "#111412" }}>Rénovation lourde</h3>
                  <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Reprise complète d'un bien ancien : isolation, menuiseries, chauffage, électricité, pièces d'eau. Nous chiffrons après visite, jamais sur photos.</p>
                </div>
              </div>

              <div data-reveal="" style={{ marginTop: "clamp(44px,6vw,80px)", display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <a href="#contact" onClick={goContact} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "17px 32px", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontSize: "14px", fontWeight: "600", boxShadow: "0 22px 44px -22px rgba(46,90,73,1)" }} style-hover="background:#3B7059;transform:translateY(-3px);">Décrire mon projet d'extension →</a>
                <span style={{ fontSize: "13.5px", color: "#77807A" }}>Visite sur place avant tout chiffrage.</span>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
