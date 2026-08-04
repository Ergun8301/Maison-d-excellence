'use client';

import type { Vals } from '@/components/site-vals';

/**
 * NosModeles — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function NosModeles(v: Vals) {
  const { goContact, goEstimation, goRealisations, modelesEco, modelesEtage, modelesPP } = v;
  return (
    <>
      <main data-screen-label="Nos modèles">
          <section style={{ position: "relative", minHeight: "clamp(480px,66vh,600px)", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
            <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}><img src="/photos/maison-contemporaine-bardage-bois.webp" alt="Maison contemporaine à étage, béton et bardage bois ajouré, volets coulissants" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 42%", animation: "meKb 18s ease-out forwards" }} /></div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0.62) 0%,rgba(11,13,12,0.42) 34%,rgba(11,13,12,0.74) 68%,rgba(11,13,12,0.94) 100%)" }}></div>
            <div style={{ position: "relative", width: "100%", maxWidth: "1440px", margin: "0 auto", padding: "clamp(104px,11vw,128px) clamp(20px,5vw,64px) clamp(44px,5.4vw,76px)" }}>
              <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}><span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span><span style={{ color: "#CFE0D6", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Nos modèles de maisons · Ain</span></div>
              <h1 data-reveal="" data-delay="120" style={{ margin: "0", color: "#FFFFFF", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(38px,6vw,80px)", lineHeight: "0.99", letterSpacing: "-0.02em", maxWidth: "20ch", textShadow: "0 4px 40px rgba(11,13,12,0.7)" }}>Huit points de départ, jamais un catalogue figé.</h1>
              <p data-reveal="" data-delay="220" style={{ margin: "clamp(20px,2.2vw,28px) 0 0", color: "rgba(247,247,244,0.86)", fontSize: "clamp(15px,1.35vw,17.5px)", lineHeight: "1.7", maxWidth: "60ch", textShadow: "0 2px 20px rgba(11,13,12,0.85)" }}>Plain-pied, maison à étage, construction éco-conçue : voici les configurations que nous construisons le plus souvent dans l'Ain. Chacune se redessine autour de votre terrain et de votre façon de vivre. Nous dessinons les plans et déposons le permis de construire pour vous.</p>
            </div>
          </section>

          <section style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(17,20,18,0.08)", padding: "20px 0" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", display: "flex", flexWrap: "wrap", gap: "10px 26px", alignItems: "center" }}>
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8D948E" }}>Familles</span>
              <a href="#plain-pied" className="me-link" style={{ textDecoration: "none", color: "#111412", fontSize: "14px", fontWeight: "600" }} style-hover="color:#2E5A49;">Plain-pied</a>
              <a href="#etage" className="me-link" style={{ textDecoration: "none", color: "#111412", fontSize: "14px", fontWeight: "600" }} style-hover="color:#2E5A49;">À étage</a>
              <a href="#eco" className="me-link" style={{ textDecoration: "none", color: "#111412", fontSize: "14px", fontWeight: "600" }} style-hover="color:#2E5A49;">Éco-conçues</a>
              <a href="#estimation" onClick={goEstimation} className="me-link" style={{ marginLeft: "auto", textDecoration: "none", color: "#2E5A49", fontSize: "14px", fontWeight: "600" }} style-hover="gap:12px;">Chiffrer un projet →</a>
            </div>
          </section>

          <section id="plain-pied" style={{ background: "#F7F7F4", padding: "clamp(64px,8vw,110px) 0", scrollMarginTop: "96px" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "clamp(30px,3.6vw,44px)" }}>
                <div>
                  <div data-reveal="left" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase" }}>Famille 01 · Plain-pied</span></div>
                  <h2 data-reveal="left" data-delay="80" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,4vw,52px)", lineHeight: "1.04", color: "#111412", maxWidth: "20ch", textWrap: "balance" }}>Tout de plain-pied, sans compromis sur la lumière.</h2>
                </div>
                <p data-reveal="right" data-delay="140" style={{ margin: "0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7", maxWidth: "46ch" }}>Pas d’escalier, une circulation courte et un séjour largement ouvert au sud. Le plain-pied demande plus de terrain et coûte un peu plus cher au mètre carré : nous le disons dès le premier rendez-vous.</p>
              </div>
              <div className="me-g3" style={{ gap: "clamp(16px,1.8vw,26px)" }}>
                {(modelesPP ?? []).map((m, i) => (
                  <div data-reveal="" data-delay={m.delay} className="me-card" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.07)", borderRadius: "9px", overflow: "hidden", display: "flex", flexDirection: "column" }} key={i}>
                    <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/11" }}>
                      <img className="me-zoom" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E" alt={`Modèle de maison ${m.name} — maison neuve construite sur-mesure dans l'Ain`} style={{ width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#EDEDE7", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `${m.bg}` }} />
                    </div>
                    <div style={{ padding: "26px 24px 24px", display: "flex", flexDirection: "column", flex: "1" }}>
                      <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "28px", lineHeight: "1.08", color: "#111412" }}>{m.name}</h3>
                      <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14px", lineHeight: "1.65", flex: "1" }}>{m.desc}</p>
                      <button onClick={m.onAsk} className="me-btn" style={{ cursor: "pointer", alignSelf: "flex-start", marginTop: "22px", padding: "0 0 3px", border: "none", borderBottom: "1px solid rgba(46,90,73,0.32)", background: "transparent", color: "#2E5A49", fontFamily: "inherit", fontSize: "13.5px", fontWeight: "600" }} style-hover="color:#111412;border-bottom-color:#111412;">Ce modèle m'intéresse →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="etage" style={{ background: "#EDEDE7", padding: "clamp(64px,8vw,110px) 0", scrollMarginTop: "96px" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "clamp(30px,3.6vw,44px)" }}>
                <div>
                  <div data-reveal="left" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase" }}>Famille 02 · Maison à étage</span></div>
                  <h2 data-reveal="left" data-delay="80" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,4vw,52px)", lineHeight: "1.04", color: "#111412", maxWidth: "20ch", textWrap: "balance" }}>L’étage, quand le terrain se fait rare.</h2>
                </div>
                <p data-reveal="right" data-delay="140" style={{ margin: "0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7", maxWidth: "46ch" }}>Emprise au sol réduite, surface habitable préservée, jardin conservé. C’est la réponse la plus efficace sur les parcelles étroites de la Côtière et des centres-bourgs.</p>
              </div>
              <div className="me-g3" style={{ gap: "clamp(16px,1.8vw,26px)" }}>
                {(modelesEtage ?? []).map((m, i) => (
                  <div data-reveal="" data-delay={m.delay} className="me-card" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.07)", borderRadius: "9px", overflow: "hidden", display: "flex", flexDirection: "column" }} key={i}>
                    <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/11" }}>
                      <img className="me-zoom" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E" alt={`Modèle de maison ${m.name} — maison neuve construite sur-mesure dans l'Ain`} style={{ width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#EDEDE7", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `${m.bg}` }} />
                    </div>
                    <div style={{ padding: "26px 24px 24px", display: "flex", flexDirection: "column", flex: "1" }}>
                      <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "28px", lineHeight: "1.08", color: "#111412" }}>{m.name}</h3>
                      <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14px", lineHeight: "1.65", flex: "1" }}>{m.desc}</p>
                      <button onClick={m.onAsk} className="me-btn" style={{ cursor: "pointer", alignSelf: "flex-start", marginTop: "22px", padding: "0 0 3px", border: "none", borderBottom: "1px solid rgba(46,90,73,0.32)", background: "transparent", color: "#2E5A49", fontFamily: "inherit", fontSize: "13.5px", fontWeight: "600" }} style-hover="color:#111412;border-bottom-color:#111412;">Ce modèle m'intéresse →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="eco" style={{ background: "#F7F7F4", padding: "clamp(64px,8vw,110px) 0", scrollMarginTop: "96px" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "clamp(30px,3.6vw,44px)" }}>
                <div>
                  <div data-reveal="left" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase" }}>Famille 03 · Éco-conçues</span></div>
                  <h2 data-reveal="left" data-delay="80" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,4vw,52px)", lineHeight: "1.04", color: "#111412", maxWidth: "20ch", textWrap: "balance" }}>Bas carbone, sans surcoût déraisonnable.</h2>
                </div>
                <p data-reveal="right" data-delay="140" style={{ margin: "0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7", maxWidth: "46ch" }}>Ossature bois, isolants biosourcés, conception bioclimatique : nos configurations les plus sobres, calculées pour passer largement les seuils RE2020 de 2026 sans exploser le budget.</p>
              </div>
              <div className="me-g3" style={{ gap: "clamp(16px,1.8vw,26px)" }}>
                {(modelesEco ?? []).map((m, i) => (
                  <div data-reveal="" data-delay={m.delay} className="me-card" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.07)", borderRadius: "9px", overflow: "hidden", display: "flex", flexDirection: "column" }} key={i}>
                    <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/11" }}>
                      <img className="me-zoom" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E" alt={`Modèle de maison ${m.name} — maison neuve construite sur-mesure dans l'Ain`} style={{ width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#EDEDE7", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `${m.bg}` }} />
                    </div>
                    <div style={{ padding: "26px 24px 24px", display: "flex", flexDirection: "column", flex: "1" }}>
                      <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "28px", lineHeight: "1.08", color: "#111412" }}>{m.name}</h3>
                      <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14px", lineHeight: "1.65", flex: "1" }}>{m.desc}</p>
                      <button onClick={m.onAsk} className="me-btn" style={{ cursor: "pointer", alignSelf: "flex-start", marginTop: "22px", padding: "0 0 3px", border: "none", borderBottom: "1px solid rgba(46,90,73,0.32)", background: "transparent", color: "#2E5A49", fontFamily: "inherit", fontSize: "13.5px", fontWeight: "600" }} style-hover="color:#111412;border-bottom-color:#111412;">Ce modèle m'intéresse →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ background: "#111412", color: "#F7F7F4", padding: "clamp(64px,8vw,110px) 0" }}>
            <div style={{ maxWidth: "1040px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", textAlign: "center" }}>
              <h2 data-reveal="" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(28px,3.8vw,50px)", lineHeight: "1.06" }}>Aucun de ces modèles ne vous correspond exactement ?</h2>
              <p data-reveal="" data-delay="100" style={{ margin: "18px auto 0", color: "rgba(247,247,244,0.68)", fontSize: "16px", lineHeight: "1.7", maxWidth: "56ch" }}>C'est normal, et c'est même le point de départ habituel. Apportez vos idées et votre terrain, nous dessinons le plan qui va avec — et nous déposons le permis de construire.</p>
              <div data-reveal="" data-delay="180" style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center", marginTop: "32px" }}>
                <a href="#contact" onClick={goContact} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "17px 32px", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontSize: "14px", fontWeight: "600" }} style-hover="background:#3B7059;transform:translateY(-3px);">Parler de mon projet →</a>
                <a href="#realisations" onClick={goRealisations} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "17px 32px", borderRadius: "100px", background: "transparent", border: "1px solid rgba(247,247,244,0.3)", color: "#F7F7F4", fontSize: "14px", fontWeight: "600" }} style-hover="border-color:#9CC4B2;color:#9CC4B2;transform:translateY(-3px);">Voir des maisons livrées</a>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
