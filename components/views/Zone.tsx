'use client';

import type { Vals } from '@/components/site-vals';

/**
 * Zone — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function Zone(v: Vals) {
  const { communes, goContact } = v;
  return (
    <>
      <main data-screen-label="Zone d'intervention">
          <section style={{ background: "#111412", color: "#F7F7F4", padding: "clamp(106px,11vw,130px) 0 clamp(30px,3.6vw,44px)" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}><span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span><span style={{ color: "#9CC4B2", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Zone d'intervention</span></div>
              <h1 data-reveal="" data-delay="120" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(31px,3.9vw,52px)", lineHeight: "1.03", letterSpacing: "-0.02em", maxWidth: "20ch" }}>30 km autour de Meximieux, Bourg-en-Bresse et Ambérieu.</h1>
              <p data-reveal="" data-delay="200" style={{ margin: "24px 0 0", color: "rgba(247,247,244,0.7)", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.7", maxWidth: "60ch" }}>Nous limitons volontairement notre rayon d'action : c'est ce qui nous permet de passer sur chaque chantier, de travailler avec les mêmes artisans et de répondre vite après la livraison.</p>
            </div>
          </section>

          <section style={{ background: "#F7F7F4", padding: "clamp(48px,6vw,80px) 0 clamp(72px,9vw,130px)" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div data-reveal="" style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(17,20,18,0.12)", boxShadow: "0 50px 90px -60px rgba(17,20,18,0.6)" }}>
                <div id="me-map" style={{ width: "100%", height: "clamp(420px,58vh,620px)" }}></div>
              </div>
              <p data-reveal="" style={{ margin: "14px 0 0", fontSize: "12.5px", color: "#8D948E" }}>Les cercles représentent un rayon de 30 km autour de nos trois pôles d'intervention. Fond de carte OpenStreetMap / CARTO.</p>

              <div className="me-split" style={{ gap: "clamp(36px,5vw,80px)", alignItems: "start", marginTop: "clamp(56px,7vw,96px)" }}>
                <div>
                  <h2 data-reveal="" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(28px,3.8vw,50px)", lineHeight: "1.05", color: "#111412" }}>Les communes où nous construisons</h2>
                  <p data-reveal="" data-delay="80" style={{ margin: "18px 0 0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.8", maxWidth: "52ch" }}>Cette liste n'est pas limitative : si votre terrain se trouve à la limite de notre zone, appelez-nous — nous préférons le dire franchement plutôt que d'accepter un chantier que nous suivrions mal.</p>
                  <a href="#contact" onClick={goContact} className="me-btn" data-reveal="" data-delay="140" style={{ marginTop: "28px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "17px 32px", borderRadius: "100px", background: "#111412", color: "#F7F7F4", fontSize: "14px", fontWeight: "600" }} style-hover="background:#1C201D;transform:translateY(-3px);">Vérifier pour mon terrain →</a>
                </div>
                <div data-reveal="" data-delay="120" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {(communes ?? []).map((c, i) => (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "12px 20px", borderRadius: "100px", background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.1)", fontSize: "14px", fontWeight: "600", color: "#111412" }} key={i}>
                      <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2E5A49" }}></span>{c.n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
