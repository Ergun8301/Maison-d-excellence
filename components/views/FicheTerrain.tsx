'use client';

import type { Vals } from '@/components/site-vals';
import { cssToStyle } from '@/lib/css';
import { VUES } from '@/lib/data/terrains';

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
              <img src={t.photo} alt={t.photoAlt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: t.photoPos, backgroundSize: "cover", backgroundPosition: "center", animation: "meKb 18s ease-out forwards" }} />
            </div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0.42) 0%,rgba(11,13,12,0.04) 36%,rgba(11,13,12,0.82) 100%)" }}></div>
            <div style={{ position: "relative", width: "100%", maxWidth: "1440px", margin: "0 auto", padding: "clamp(100px,10.5vw,124px) clamp(20px,5vw,64px) clamp(40px,5vw,70px)" }}>
              <a href="/terrains" onClick={goTerrains} className="me-link" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "rgba(247,247,244,0.8)", fontSize: "13px", fontWeight: "600", marginBottom: "18px" }} style-hover="color:#9CC4B2;">← Tous les terrains</a>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "16px" }}>
                <span style={{ padding: "6px 13px", borderRadius: "100px", fontSize: "10.5px", fontWeight: "700", letterSpacing: "0.05em", textTransform: "uppercase", ...cssToStyle(t.badgeStyle) }}>{t.status}</span>
                <span style={{ color: "#CFE0D6", fontSize: "12px", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase" }}>{t.secteur} · Réf. {t.ref}</span>
              </div>
              <h1 style={{ margin: "0", color: "#FFFFFF", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(33px,4.3vw,60px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>Terrain à bâtir à {t.commune}</h1>
            </div>
          </section>

          <section style={{ background: "#F7F7F4", padding: "clamp(44px,5.5vw,76px) 0 0" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div className="me-g3" data-reveal="" style={{ gap: "1px", background: "rgba(17,20,18,0.12)", borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ background: "#FFFFFF", padding: "26px 24px" }}><div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8D948E" }}>Surface</div><div style={{ marginTop: "8px", fontFamily: "'Cormorant Garamond',serif", fontSize: "32px", color: "#111412", lineHeight: "1" }}>{t.surfaceLabel}</div></div>
                <div style={{ background: "#FFFFFF", padding: "26px 24px" }}><div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8D948E" }}>Prix</div><div style={{ marginTop: "8px", fontFamily: "'Cormorant Garamond',serif", fontSize: "32px", color: "#111412", lineHeight: "1" }}>{t.priceLabel}</div></div>
                <div style={{ background: "#FFFFFF", padding: "26px 24px" }}><div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8D948E" }}>Statut</div><div style={{ marginTop: "8px", fontFamily: "'Cormorant Garamond',serif", fontSize: "32px", color: "#111412", lineHeight: "1" }}>{t.status}</div></div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(48px,6vw,96px)", marginTop: "clamp(48px,6vw,88px)" }}>
                {(t.rangees ?? []).map((r, i) => {
                  const vue = VUES[r.vue];
                  const aGauche = i % 2 === 0;
                  const large = vue.w > vue.h * 1.5;
                  const cols = large ? (aGauche ? "1.4fr 1fr" : "1fr 1.4fr") : "1fr 1fr";
                  return (
                    <div className="me-rang" style={{ gridTemplateColumns: cols, gap: "clamp(28px,4.5vw,76px)" }} key={i}>
                      <div className="me-rang-photo" data-reveal={aGauche ? "unfold-left" : "unfold-right"} style={{ gridColumn: aGauche ? "1" : "2", gridRow: "1" }}>
                        <a href={vue.src} target="_blank" rel="noopener" aria-label={`${vue.alt} (ouvrir en grand)`} style={{ display: "block" }}>
                          <img src={vue.src} width={vue.w} height={vue.h} alt={vue.alt} loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto", borderRadius: "10px", background: "#EDEDE7" }} />
                        </a>
                      </div>
                      <div data-reveal={aGauche ? "right" : "left"} data-delay="120" style={{ gridColumn: aGauche ? "2" : "1", gridRow: "1", alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "center", background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.07)", borderRadius: "10px", padding: "clamp(26px,3.4vw,52px)" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase" }}>{String(i + 1).padStart(2, "0")}</span></div>
                        <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(28px,3.4vw,44px)", lineHeight: "1.06", color: "#111412" }}>{r.titre}</h2>
                        {(r.texte) ? (<p style={{ margin: "18px 0 0", color: "#4E534E", fontSize: "clamp(15px,1.35vw,17px)", lineHeight: "1.8" }}>{r.texte}</p>) : null}
                        {(r.points) ? (<div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "22px" }}>
                          {r.points.map((p, j) => (
                            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }} key={j}><span style={{ color: "#2E5A49", fontSize: "18px", lineHeight: "1.3" }}>✓</span><span style={{ fontSize: "16px", lineHeight: "1.6", color: "#333834" }}>{p}</span></div>
                          ))}
                        </div>) : null}
                      </div>
                    </div>
                  );
                })}
              </div>

              <p data-reveal="" style={{ margin: "clamp(36px,4vw,56px) 0 0", fontSize: "13px", color: "#8D948E", lineHeight: "1.6", maxWidth: "78ch" }}>Terrain vendu par notre partenaire foncier. Surface issue du plan de division établi par un géomètre-expert, sur limites bornées. Informations communiquées à titre indicatif et sous réserve de disponibilité.</p>
            </div>
          </section>

          <section style={{ background: "#111412", color: "#F7F7F4", marginTop: "clamp(56px,7vw,100px)", padding: "clamp(52px,6.5vw,92px) 0" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div className="me-split" style={{ gap: "clamp(32px,5vw,80px)", alignItems: "center" }}>
                <div data-reveal="left">
                  <div style={{ fontSize: "11.5px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CC4B2" }}>Réf. {t.ref}</div>
                  {(t.status === 'Vendu') ? (<>
                  <h2 style={{ margin: "16px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,3.6vw,50px)", lineHeight: "1.06" }}>Ce lot est vendu</h2>
                  <p style={{ margin: "16px 0 0", color: "rgba(247,247,244,0.7)", fontSize: "15px", lineHeight: "1.75", maxWidth: "52ch" }}>Les autres lots de cette division se consultent dans la liste des terrains. Nous vérifions avec vous si votre projet de maison y entre.</p>
                  </>) : (<>
                  <h2 style={{ margin: "16px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,3.6vw,50px)", lineHeight: "1.06" }}>Ce terrain m'intéresse</h2>
                  <p style={{ margin: "16px 0 0", color: "rgba(247,247,244,0.7)", fontSize: "15px", lineHeight: "1.75", maxWidth: "52ch" }}>Nous vérifions avec vous si votre projet de maison entre sur cette parcelle : emprise, orientation, règles d'urbanisme, budget global terrain + construction.</p>
                  </>)}
                </div>
                <div data-reveal="right" data-delay="120">
                  {(t.status === 'Vendu') ? (
                  <a href="/terrains" onClick={goTerrains} className="me-btn" style={{ cursor: "pointer", width: "100%", boxSizing: "border-box", display: "block", textAlign: "center", textDecoration: "none", padding: "17px", border: "none", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", boxShadow: "0 22px 44px -22px rgba(46,90,73,1)" }} style-hover="background:#3B7059;transform:translateY(-2px);">Voir les autres terrains →</a>
                  ) : (<>
                  <button onClick={askTerrain} className="me-btn" style={{ cursor: "pointer", width: "100%", padding: "17px", border: "none", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", boxShadow: "0 22px 44px -22px rgba(46,90,73,1)" }} style-hover="background:#3B7059;transform:translateY(-2px);">Ce terrain m'intéresse →</button>
                  <p style={{ margin: "12px 0 0", fontSize: "12px", color: "rgba(247,247,244,0.5)", lineHeight: "1.6" }}>Le formulaire de contact est pré-rempli avec la référence de la parcelle.</p>
                  </>)}
                  <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(247,247,244,0.14)", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <a href="tel:+33474346643" className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.82)", fontSize: "14px", fontWeight: "600" }} style-hover="color:#9CC4B2;">✆ 04 74 34 66 43</a>
                    <a href="https://wa.me/33615191647?text=Bonjour%2C%20je%20vous%20%C3%A9cris%20depuis%20votre%20site.%20J'aimerais%20%C3%A9changer%20sur%20mon%20projet%20de%20construction." target="_blank" rel="noopener" className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.82)", fontSize: "14px", fontWeight: "600" }} style-hover="color:#25D366;">WhatsApp · 06 15 19 16 47</a>
                    <a href="/#estimation" onClick={goEstimation} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.82)", fontSize: "14px", fontWeight: "600" }} style-hover="color:#9CC4B2;">Estimer la maison →</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
