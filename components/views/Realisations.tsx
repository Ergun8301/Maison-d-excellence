'use client';

import type { Vals } from '@/components/site-vals';

/**
 * Realisations — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function Realisations(v: Vals) {
  const { goContact, goEstimation } = v;
  return (
    <>
      <main data-screen-label="Réalisations">
          <section style={{ position: "relative", minHeight: "clamp(420px,48vh,580px)", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
            {/* PHOTO D'EN-TÊTE À REMPLACER : maison livrée, prise de vue large en fin de journée. */}
            <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}><img src="/photos/maison-familiale-etage.webp" alt="Maison individuelle livrée par Maisons d'Excellence dans l'Ain" style={{ width: "100%", height: "100%", objectFit: "cover", animation: "meKb 18s ease-out forwards" }} /></div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0.62) 0%,rgba(11,13,12,0.42) 34%,rgba(11,13,12,0.74) 68%,rgba(11,13,12,0.94) 100%)" }}></div>
            <div style={{ position: "relative", width: "100%", maxWidth: "1440px", margin: "0 auto", padding: "clamp(104px,11vw,128px) clamp(20px,5vw,64px) clamp(44px,5.4vw,76px)" }}>
              <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}><span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span><span style={{ color: "#CFE0D6", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Réalisations</span></div>
              <h1 data-reveal="" data-delay="120" style={{ margin: "0", color: "#FFFFFF", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(38px,6vw,80px)", lineHeight: "0.99", letterSpacing: "-0.02em", maxWidth: "17ch", textShadow: "0 4px 40px rgba(11,13,12,0.7)" }}>Quelques maisons que nous avons bâties.</h1>
              <p data-reveal="" data-delay="220" style={{ margin: "clamp(20px,2.2vw,28px) 0 0", color: "rgba(247,247,244,0.86)", fontSize: "clamp(15px,1.35vw,17.5px)", lineHeight: "1.7", maxWidth: "56ch", textShadow: "0 2px 20px rgba(11,13,12,0.85)" }}>Traditionnelles ou contemporaines, toutes dessinées sur-mesure et construites dans l'Ain : Meximieux, Pérouges, Montluel, Lagnieu, Ambérieu-en-Bugey.</p>
            </div>
          </section>

          <section style={{ background: "#F7F7F4", padding: "clamp(56px,7vw,96px) 0 clamp(80px,11vw,150px)" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div className="me-g2" style={{ gap: "clamp(16px,2vw,28px)" }}>
                <div data-reveal="" className="me-card me-projbig" style={{ position: "relative", borderRadius: "8px", overflow: "hidden", minHeight: "clamp(320px,40vw,460px)" }}>
                  <img className="me-zoom" src="/photos/maison-contemporaine-etage-porche.webp" alt="Maison contemporaine à étage avec porche d'entrée et garage double" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0) 40%,rgba(11,13,12,0.86) 100%)" }}></div>
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "clamp(26px,3vw,40px)", color: "#F7F7F4" }}><div style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CC4B2" }}>Contemporain · Garage double</div><h2 style={{ margin: "7px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(26px,3vw,38px)" }}>Maison à étage, porche d'entrée</h2></div>
                </div>
                <div data-reveal="" data-delay="120" className="me-card me-projbig" style={{ position: "relative", borderRadius: "8px", overflow: "hidden", minHeight: "clamp(320px,40vw,460px)" }}>
                  <img className="me-zoom" src="/photos/maison-traditionnelle-etage.webp" alt="Maison traditionnelle à étage, enduit ton pierre, construite dans l'Ain" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0) 40%,rgba(11,13,12,0.86) 100%)" }}></div>
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "clamp(26px,3vw,40px)", color: "#F7F7F4" }}><div style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CC4B2" }}>Traditionnel · Enduit ton pierre</div><h2 style={{ margin: "7px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(26px,3vw,38px)" }}>Maison familiale à étage</h2></div>
                </div>
              </div>

              <div className="me-g3" style={{ gap: "clamp(16px,2vw,28px)", marginTop: "clamp(16px,2vw,28px)" }}>
                <div data-reveal="" className="me-card me-projbig" style={{ position: "relative", borderRadius: "8px", overflow: "hidden", aspectRatio: "4/5" }}>
                  <img className="me-zoom" src="/photos/maison-etage-terrain-en-pente.webp" alt="Maison à étage bâtie sur terrain en pente avec terrasses en béton" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0) 45%,rgba(11,13,12,0.85) 100%)" }}></div>
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "clamp(22px,2.4vw,32px)", color: "#F7F7F4" }}><div style={{ fontSize: "10.5px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CC4B2" }}>Terrain en pente</div><h2 style={{ margin: "6px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.4vw,30px)" }}>Étage &amp; terrasses béton</h2></div>
                </div>
                <div data-reveal="" data-delay="100" className="me-card me-projbig" style={{ position: "relative", borderRadius: "8px", overflow: "hidden", aspectRatio: "4/5" }}>
                  <img className="me-zoom" src="/photos/maison-monopente-garage-independant.webp" alt="Maison contemporaine à toit monopente avec garage indépendant" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0) 45%,rgba(11,13,12,0.85) 100%)" }}></div>
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "clamp(22px,2.4vw,32px)", color: "#F7F7F4" }}><div style={{ fontSize: "10.5px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CC4B2" }}>Contemporain</div><h2 style={{ margin: "6px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.4vw,30px)" }}>Façade bi-ton</h2></div>
                </div>
                <div data-reveal="" data-delay="200" className="me-card me-projbig" style={{ position: "relative", borderRadius: "8px", overflow: "hidden", aspectRatio: "4/5" }}>
                  <img className="me-zoom" src="/photos/maison-plain-pied-angle-livraison.webp" alt="Maison de plain-pied en L, enduit ton pierre et toiture tuile, avant aménagement du terrain" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0) 45%,rgba(11,13,12,0.85) 100%)" }}></div>
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "clamp(22px,2.4vw,32px)", color: "#F7F7F4" }}><div style={{ fontSize: "10.5px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CC4B2" }}>Traditionnel</div><h2 style={{ margin: "6px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.4vw,30px)" }}>Plain-pied, angle ouvert</h2></div>
                </div>
              </div>

              <div className="me-split" style={{ gap: "clamp(16px,2vw,28px)", marginTop: "clamp(16px,2vw,28px)" }}>
                <div data-reveal="" className="me-card me-projbig" style={{ position: "relative", borderRadius: "8px", overflow: "hidden", minHeight: "clamp(300px,34vw,420px)" }}>
                  <img className="me-zoom" src="/photos/maison-plain-pied-en-l.webp" alt="Maison de plain-pied en L, toiture tuile, construite dans l'Ain" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0) 45%,rgba(11,13,12,0.85) 100%)" }}></div>
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "clamp(24px,2.6vw,36px)", color: "#F7F7F4" }}><div style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CC4B2" }}>Plain-pied · Toiture tuile</div><h2 style={{ margin: "7px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(24px,2.8vw,34px)" }}>Plain-pied contemporaine</h2></div>
                </div>
                <div data-reveal="" data-delay="120" className="me-card me-projbig" style={{ position: "relative", borderRadius: "8px", overflow: "hidden", minHeight: "clamp(300px,34vw,420px)" }}>
                  <img className="me-zoom" src="/photos/maison-plain-pied-contemporaine.webp" alt="Maison de plain-pied contemporaine, toiture ardoisée, garage intégré" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0) 45%,rgba(11,13,12,0.85) 100%)" }}></div>
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "clamp(24px,2.6vw,36px)", color: "#F7F7F4" }}><div style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CC4B2" }}>Plain-pied · Toiture ardoisée</div><h2 style={{ margin: "7px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(24px,2.8vw,34px)" }}>Plain-pied en L</h2></div>
                </div>
              </div>

              <div data-reveal="" style={{ textAlign: "center", marginTop: "clamp(56px,7vw,90px)" }}>
                <p style={{ margin: "0 0 26px", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(26px,3.4vw,42px)", color: "#111412" }}>Votre projet sera le prochain.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                  <a href="#estimation" onClick={goEstimation} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "18px 36px", borderRadius: "100px", background: "#111412", color: "#F7F7F4", fontSize: "14px", fontWeight: "600", boxShadow: "0 24px 48px -26px rgba(17,20,18,0.9)" }} style-hover="background:#1C201D;transform:translateY(-3px);">Estimer mon projet →</a>
                  <a href="#contact" onClick={goContact} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "18px 36px", borderRadius: "100px", background: "transparent", color: "#111412", fontSize: "14px", fontWeight: "600", border: "1px solid rgba(17,20,18,0.28)" }} style-hover="border-color:#2E5A49;color:#2E5A49;transform:translateY(-3px);">Prendre rendez-vous</a>
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
