'use client';

import type { Vals } from '@/components/site-vals';
import { cssToStyle } from '@/lib/css';

/**
 * Accueil — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function Accueil(v: Vals) {
  const { avis, avisCount, avisUrl, chOptions, estChambres, estFinition, estGarage, estHigh, estLow, estM2, estNiveau, estNotSent, estResume, estSent, estSurface, estVs, finOptions, garOptions, goContact, goEntreprise, goEstimation, goModeles, goRealisations, nivOptions, onEstSubmit, setSurface, vsOptions } = v;
  return (
    <>
      <main data-screen-label="Accueil">

          {/* HERO */}
          <section style={{ position: "relative", minHeight: "max(680px,100vh)", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#111412" }}>
              <div data-slide="0" className="me-slide" role="img" aria-label="Maison individuelle construite dans l'Ain par Maisons d'Excellence" style={{ position: "absolute", inset: "0", opacity: "1", backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div data-slide="1" className="me-slide" role="img" aria-label="Maison individuelle construite dans l'Ain par Maisons d'Excellence" style={{ position: "absolute", inset: "0", opacity: "0", backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=85')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div data-slide="2" className="me-slide" role="img" aria-label="Maison individuelle construite dans l'Ain par Maisons d'Excellence" style={{ position: "absolute", inset: "0", opacity: "0", backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div data-slide="3" className="me-slide" role="img" aria-label="Maison individuelle construite dans l'Ain par Maisons d'Excellence" style={{ position: "absolute", inset: "0", opacity: "0", backgroundImage: "url('https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=2400&q=85')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            </div>
            <div data-veil="radial" style={{ position: "absolute", inset: "0", background: "radial-gradient(120% 92% at 50% 44%,rgba(11,13,12,0.26) 0%,rgba(11,13,12,0.46) 58%,rgba(11,13,12,0.72) 100%)" }}></div>
            <div data-veil="linear" style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0.58) 0%,rgba(11,13,12,0.12) 26%,rgba(11,13,12,0.18) 60%,rgba(11,13,12,0.62) 100%)" }}></div>

            <div data-hero-col="" style={{ position: "relative", flex: "1 1 auto", minHeight: "0", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "clamp(104px,12vw,150px) clamp(20px,5vw,64px) clamp(18px,2.4vw,32px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
              <div data-reveal="" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(17px,2.3vw,30px)", lineHeight: "1.15", letterSpacing: "0.34em", textIndent: "0.34em", color: "#D3B27A", textShadow: "0 2px 18px rgba(11,13,12,0.7)" }}>MAISONS D'EXCELLENCE</div>
              <span data-reveal="" data-delay="60" aria-hidden="true" style={{ position: "relative", display: "block", width: "2px", height: "clamp(34px,4.4vw,60px)", margin: "clamp(12px,1.4vw,18px) 0 clamp(10px,1.2vw,16px)", borderRadius: "2px", overflow: "hidden", background: "linear-gradient(180deg,rgba(211,178,122,0) 0%,rgba(211,178,122,0.42) 20%,rgba(211,178,122,0.42) 80%,rgba(211,178,122,0) 100%)" }}>
                <span className="me-star-halo" style={{ position: "absolute", left: "50%", top: "0", width: "2px", height: "100%", marginLeft: "-1px", background: "rgba(255,231,183,0.35)" }}></span>
                <span className="me-star-dot" style={{ position: "absolute", left: "50%", top: "0", width: "2px", height: "44%", marginLeft: "-1px", borderRadius: "2px", background: "linear-gradient(180deg,rgba(255,231,183,0) 0%,#FFE7B7 42%,#FFF7E6 58%,rgba(255,231,183,0) 100%)", boxShadow: "0 0 16px 4px rgba(255,214,150,0.5)" }}></span>
              </span>
              <h1 data-reveal="mask" data-delay="120" className="me-hero-h1" style={{ margin: "0", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "baseline", gap: "0 0.24em", maxWidth: "20ch", color: "#FFFFFF", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(36px,5.6vw,80px)", lineHeight: "1.22", letterSpacing: "-0.012em", textShadow: "0 4px 40px rgba(11,13,12,0.5)" }}>
                <span className="me-w"><span>Votre</span></span>
                <span className="me-w"><span>maison,</span></span>
                <span className="me-w"><span>bâtie</span></span>
                <span className="me-w"><span>avec</span></span>
                <span className="me-w"><span className="me-shine" style={{ fontStyle: "italic", fontWeight: "400", textShadow: "none", filter: "drop-shadow(0 3px 18px rgba(11,13,12,0.5))" }}>Exigence.</span></span>
              </h1>
              <div data-reveal="" data-delay="380" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(10px,1.4vw,16px)", marginTop: "clamp(26px,3.2vw,40px)" }}>
                <span aria-hidden="true" className="me-hero-rule" style={{ width: "clamp(16px,3vw,38px)", height: "1px", background: "rgba(199,166,110,0.75)" }}></span>
                <span className="me-hero-eyebrow" style={{ color: "rgba(247,247,244,0.84)", fontSize: "clamp(9.5px,0.95vw,11.5px)", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase", textShadow: "0 1px 12px rgba(11,13,12,0.6)" }}>Votre constructeur de maisons individuelles à Meximieux</span>
                <span aria-hidden="true" className="me-hero-rule" style={{ width: "clamp(16px,3vw,38px)", height: "1px", background: "rgba(199,166,110,0.75)" }}></span>
              </div>
              <div data-reveal="" data-delay="440" className="me-hero-cta" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "clamp(26px,3vw,38px)" }}>
                <a href="#estimation" onClick={goEstimation} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box", minWidth: "242px", height: "54px", padding: "0 26px", borderRadius: "100px", border: "1px solid #2E5A49", background: "#2E5A49", color: "#fff", fontSize: "14px", fontWeight: "600", letterSpacing: "0.02em", boxShadow: "0 22px 44px -22px rgba(46,90,73,1)" }} style-hover="background:#3B7059;border-color:#3B7059;transform:translateY(-3px);">Estimation en ligne</a>
                <a href="#modeles" onClick={goModeles} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box", minWidth: "242px", height: "54px", padding: "0 26px", borderRadius: "100px", border: "1px solid rgba(199,166,110,0.6)", background: "rgba(17,20,18,0.28)", color: "#F7F7F4", fontSize: "14px", fontWeight: "600", letterSpacing: "0.02em", backdropFilter: "blur(6px)" }} style-hover="background:rgba(199,166,110,0.18);border-color:rgba(199,166,110,0.95);transform:translateY(-3px);">Découvrir nos modèles</a>
              </div>
              <div data-reveal="" data-delay="520" className="me-hero-proofs" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "10px 16px", marginTop: "clamp(20px,2.4vw,30px)", color: "rgba(247,247,244,0.76)", fontSize: "12.5px", fontWeight: "500", letterSpacing: "0.07em", textShadow: "0 1px 12px rgba(11,13,12,0.6)" }}>
                <span>Contrat CCMI</span>
                <span aria-hidden="true" style={{ color: "#D3B27A" }}>·</span>
                <span>Un seul interlocuteur</span>
                <span aria-hidden="true" style={{ color: "#D3B27A" }}>·</span>
                <span>Délais tenus</span>
              </div>
            </div>

            <div className="me-hero-bar" style={{ position: "relative", flex: "none", width: "100%", height: "60px", marginBottom: "clamp(16px,2vw,28px)", padding: "0 clamp(20px,5vw,64px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto minmax(0,1fr)", alignItems: "center", gap: "20px" }}>
              <a href={avisUrl} target="_blank" rel="noopener noreferrer" data-reveal="" data-delay="560" className="me-hero-avis me-pastille-google" aria-label="Voir les avis Google de Maisons d'Excellence" style={{ justifySelf: "start", display: "inline-flex", alignItems: "center", gap: "11px", textDecoration: "none", background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "999px", padding: "8px 16px", boxShadow: "0 6px 18px -6px rgba(0,0,0,0.35)", transition: "transform .3s cubic-bezier(.16,.84,.44,1),box-shadow .3s" }}><svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true" style={{ flex: "none", display: "block" }}><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path></svg><span style={{ display: "flex", flexDirection: "column", lineHeight: "1.25" }}><span style={{ display: "flex", alignItems: "center", gap: "6px" }}><span style={{ fontWeight: "700", fontSize: "14px", color: "#202124" }}>5,0</span><span style={{ color: "#FBBC04", fontSize: "13px", letterSpacing: "1px" }}>★★★★★</span></span><span style={{ fontSize: "12px", color: "#5F6368", whiteSpace: "nowrap" }}>{avisCount} avis Google</span></span></a>
              <a href="#valeur" data-reveal="" data-delay="620" className="me-scroll" style={{ justifySelf: "center", display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "8px", textDecoration: "none", color: "rgba(247,247,244,0.55)", fontSize: "10px", fontWeight: "600", letterSpacing: "0.24em", textTransform: "uppercase" }} style-hover="color:#F7F7F4;">
                <span>Découvrir</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 3v10M3.5 8.5 8 13l4.5-4.5"></path></svg>
              </a>
              <span aria-hidden="true"></span>
            </div>
          </section>

          {/* PROPOSITION DE VALEUR */}
          <section id="valeur" style={{ background: "#F7F7F4", padding: "clamp(84px,12vw,160px) 0", scrollMarginTop: "80px" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div className="me-split" style={{ gap: "clamp(40px,6vw,96px)", alignItems: "center" }}>
                <div>
                  <div data-reveal="left" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase" }}>Depuis 2019 · Meximieux</span></div>
                  <h2 data-reveal="left" data-delay="100" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(34px,4.6vw,62px)", lineHeight: "1.04", letterSpacing: "-0.01em", color: "#111412", maxWidth: "18ch", textWrap: "balance" }}>Vous arrivez avec un projet. Nous le dessinons, puis nous le bâtissons.</h2>
                  <p data-reveal="" data-delay="180" style={{ margin: "26px 0 0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.75", maxWidth: "52ch" }}>Tout commence par un rendez-vous à notre bureau de Meximieux : vous racontez votre projet, votre terrain, votre façon de vivre. Nous dessinons ensuite des plans entièrement sur-mesure, puis nous construisons — brique, béton cellulaire, charpente traditionnelle, conformité RE2020 — jusqu'à la remise des clés.</p>
                  <a href="#entreprise" onClick={goEntreprise} className="me-link" style={{ display: "inline-flex", alignItems: "center", gap: "9px", marginTop: "30px", textDecoration: "none", color: "#111412", fontWeight: "600", fontSize: "14px", borderBottom: "1px solid #2E5A49", paddingBottom: "5px" }} style-hover="gap:15px;color:#2E5A49;">Découvrir l'entreprise et nos garanties →</a>
                </div>
                <div data-reveal="right" data-delay="120" style={{ position: "relative" }}>
                  <div data-reveal="wipe" style={{ position: "relative", overflow: "hidden", borderRadius: "6px", aspectRatio: "4/5", boxShadow: "0 50px 90px -50px rgba(17,20,18,0.6)" }}>
                    <img data-parallax="0.07" src="/photos/maison-etage-terrain-en-pente.webp" alt="Intérieur lumineux d'une maison neuve sur-mesure livrée dans l'Ain" style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.08)", willChange: "transform" }} />
                  </div>
                  <div style={{ position: "absolute", left: "-22px", bottom: "-26px", background: "#111412", color: "#F7F7F4", padding: "24px 30px", borderRadius: "6px", boxShadow: "0 30px 60px -30px rgba(17,20,18,0.7)" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "46px", fontWeight: "300", lineHeight: "1", color: "#9CC4B2" }}>A → Z</div>
                    <div style={{ fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", marginTop: "8px", opacity: "0.78" }}>Conception<br />et construction</div>
                  </div>
                </div>
              </div>

              <div className="me-g4" style={{ gap: "1px", marginTop: "clamp(56px,8vw,110px)", background: "rgba(17,20,18,0.12)", borderRadius: "6px", overflow: "hidden" }}>
                <div data-reveal="" style={{ background: "#FFFFFF", padding: "34px 30px" }}><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(38px,4vw,54px)", fontWeight: "300", lineHeight: "1", color: "#111412" }}>CCMI</div><div style={{ marginTop: "10px", fontSize: "13px", color: "#77807A", letterSpacing: "0.04em" }}>Contrat encadré par la loi</div></div>
                <div data-reveal="" data-delay="80" style={{ background: "#FFFFFF", padding: "34px 30px" }}><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(38px,4vw,54px)", fontWeight: "300", lineHeight: "1", color: "#111412" }}>5,0<span style={{ fontSize: "0.5em", color: "#2E5A49" }}>/5</span></div><div style={{ marginTop: "10px", fontSize: "13px", color: "#77807A", letterSpacing: "0.04em" }}>{avisCount} avis Google</div></div>
                <div data-reveal="" data-delay="160" style={{ background: "#FFFFFF", padding: "34px 30px" }}><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(38px,4vw,54px)", fontWeight: "300", lineHeight: "1", color: "#111412" }}>RE2020</div><div style={{ marginTop: "10px", fontSize: "13px", color: "#77807A", letterSpacing: "0.04em" }}>Conformité systématique</div></div>
                <div data-reveal="" data-delay="240" style={{ background: "#FFFFFF", padding: "34px 30px" }}><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(38px,4vw,54px)", fontWeight: "300", lineHeight: "1", color: "#111412" }}>100%</div><div style={{ marginTop: "10px", fontSize: "13px", color: "#77807A", letterSpacing: "0.04em" }}>Plans sur-mesure</div></div>
              </div>
            </div>
          </section>

          {/* SIMULATEUR DE PRIX */}
          <section style={{ background: "#EDEDE7", padding: "clamp(80px,11vw,150px) 0" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase" }}>Estimation en ligne</span></div>
              <div className="me-split" style={{ gap: "clamp(24px,4vw,72px)", alignItems: "start", marginBottom: "clamp(30px,3.8vw,50px)" }}>
                <h2 data-reveal="" data-delay="80" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,3.9vw,52px)", lineHeight: "1.04", letterSpacing: "-0.02em", color: "#111412", maxWidth: "17ch" }}>Combien coûterait votre maison ? La réponse en une minute.</h2>
                <p data-reveal="" data-delay="160" style={{ margin: "0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,17.5px)", lineHeight: "1.78", maxWidth: "52ch" }}>Six critères — niveau de livraison, surface, plain-pied ou étage, chambres, garage, vide sanitaire — et vous obtenez une fourchette construite sur nos vrais coûts de chantier dans l'Ain. Pas de formulaire à remplir avant de voir le résultat, pas de rappel commercial imposé.</p>
              </div>

              <div className="me-cx" style={{ gap: "clamp(18px,2.2vw,30px)" }}>

                {/* ① CRITÈRES */}
                <div id="estimation" data-reveal="" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "12px", padding: "clamp(26px,3.4vw,44px)", boxShadow: "0 40px 80px -60px rgba(17,20,18,0.5)", display: "flex", flexDirection: "column", gap: "clamp(26px,2.9vw,36px)" }}>

                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", paddingBottom: "clamp(16px,1.8vw,22px)", borderBottom: "1px solid rgba(17,20,18,0.1)" }}>
                    <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.3vw,30px)", color: "#111412", lineHeight: "1.1" }}>Votre configuration</h3>
                    <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8D948E", whiteSpace: "nowrap" }}>6 critères</span>
                  </div>

                  <div>
                    <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", color: "#77807A", marginBottom: "14px" }}>Niveau de livraison</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {(finOptions ?? []).map((o, i) => (
                        <button onClick={o.onClick} className="me-btn" style={{ cursor: "pointer", flex: "1", minWidth: "92px", padding: "14px 8px", borderRadius: "8px", border: "1px solid", fontFamily: "inherit", fontSize: "12.5px", fontWeight: "600", lineHeight: "1.3", ...cssToStyle(o.style) }} key={i}>{o.label}</button>
                      ))}
                    </div>
                    <p style={{ margin: "12px 0 0", fontSize: "12.5px", color: "#8D948E", lineHeight: "1.55" }}>Clé en main : maison livrée prête à vivre. Prêt à finir : hors d'air, isolation, cloisons et réseaux posés, finitions à votre charge. Hors d'eau / hors d'air : gros œuvre, charpente, couverture et menuiseries extérieures uniquement.</p>
                  </div>

                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                      <label htmlFor="me-surface" style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", color: "#77807A" }}>Surface habitable</label>
                      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "36px", lineHeight: "1", color: "#111412" }}>{estSurface} <span style={{ fontSize: "0.5em", color: "#2E5A49" }}>m²</span></span>
                    </div>
                    <input id="me-surface" className="me-range" type="range" min={80} max={200} step={5} value={estSurface} onChange={setSurface} aria-label="Surface habitable en mètres carrés" />
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", fontSize: "11.5px", color: "#8D948E" }}><span>80 m²</span><span>200 m²</span></div>
                  </div>

                  <div>
                    <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", color: "#77807A", marginBottom: "14px" }}>Plain-pied ou étage</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {(nivOptions ?? []).map((o, i) => (
                        <button onClick={o.onClick} className="me-btn" style={{ cursor: "pointer", flex: "1", minWidth: "140px", padding: "15px 18px", borderRadius: "8px", border: "1px solid", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", ...cssToStyle(o.style) }} key={i}>{o.label}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", color: "#77807A", marginBottom: "14px" }}>Nombre de chambres</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {(chOptions ?? []).map((o, i) => (
                        <button onClick={o.onClick} className="me-btn" style={{ cursor: "pointer", flex: "1", minWidth: "64px", padding: "15px 10px", borderRadius: "8px", border: "1px solid", fontFamily: "inherit", fontSize: "15px", fontWeight: "600", ...cssToStyle(o.style) }} key={i}>{o.label}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", color: "#77807A", marginBottom: "14px" }}>Garage</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {(garOptions ?? []).map((o, i) => (
                        <button onClick={o.onClick} className="me-btn" style={{ cursor: "pointer", flex: "1", minWidth: "100px", padding: "15px 14px", borderRadius: "8px", border: "1px solid", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", ...cssToStyle(o.style) }} key={i}>{o.label}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", color: "#77807A", marginBottom: "14px" }}>Vide sanitaire</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {(vsOptions ?? []).map((o, i) => (
                        <button onClick={o.onClick} className="me-btn" style={{ cursor: "pointer", flex: "1", minWidth: "100px", padding: "15px 14px", borderRadius: "8px", border: "1px solid", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", ...cssToStyle(o.style) }} key={i}>{o.label}</button>
                      ))}
                    </div>
                    <p style={{ margin: "12px 0 0", fontSize: "12.5px", color: "#8D948E", lineHeight: "1.55" }}>Le vide sanitaire isole la maison du sol et facilite le passage des réseaux. Nous le recommandons sur la plupart des terrains de la Plaine de l'Ain.</p>
                  </div>

                </div>

                {/* ② RÉSULTAT */}
                <div data-reveal="" data-delay="120" style={{ display: "flex", flexDirection: "column", gap: "clamp(16px,1.9vw,26px)" }}>
                  <div style={{ flex: "1", background: "#111412", color: "#F7F7F4", borderRadius: "12px", padding: "clamp(28px,3.4vw,44px)", boxShadow: "0 50px 90px -60px rgba(17,20,18,0.9)", display: "flex", flexDirection: "column", gap: "clamp(18px,2vw,26px)" }}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", paddingBottom: "clamp(16px,1.8vw,22px)", borderBottom: "1px solid rgba(247,247,244,0.14)" }}>
                      <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.3vw,30px)", color: "#FFFFFF", lineHeight: "1.1" }}>Votre estimation</h3>
                      <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9CC4B2", whiteSpace: "nowrap" }}>Indicative</span>
                    </div>
                    <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(15px,1.5vw,19px)", color: "rgba(247,247,244,0.6)", letterSpacing: "0.04em" }}>entre</div>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(40px,5.2vw,66px)", lineHeight: "1.02" }}>{estLow} €</div>
                    <div style={{ margin: "6px 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(15px,1.5vw,19px)", color: "rgba(247,247,244,0.6)", letterSpacing: "0.04em" }}>et</div>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(40px,5.2vw,66px)", lineHeight: "1.02", color: "#CFE0D6" }}>{estHigh} €</div>
                    </div>
                    <div style={{ paddingTop: "22px", borderTop: "1px solid rgba(247,247,244,0.14)", display: "flex", flexDirection: "column", gap: "10px", fontSize: "13.5px", color: "rgba(247,247,244,0.72)" }}>
                      <span style={{ display: "flex", justifyContent: "space-between", gap: "14px" }}><span>Niveau de livraison</span><span style={{ color: "#F7F7F4", fontWeight: "600", textAlign: "right" }}>{estFinition}</span></span>
                      <span style={{ display: "flex", justifyContent: "space-between", gap: "14px" }}><span>Surface</span><span style={{ color: "#F7F7F4", fontWeight: "600", whiteSpace: "nowrap" }}>{estSurface} m²</span></span>
                      <span style={{ display: "flex", justifyContent: "space-between", gap: "14px" }}><span>Configuration</span><span style={{ color: "#F7F7F4", fontWeight: "600" }}>{estNiveau}</span></span>
                      <span style={{ display: "flex", justifyContent: "space-between", gap: "14px" }}><span>Chambres</span><span style={{ color: "#F7F7F4", fontWeight: "600" }}>{estChambres}</span></span>
                      <span style={{ display: "flex", justifyContent: "space-between", gap: "14px" }}><span>Garage</span><span style={{ color: "#F7F7F4", fontWeight: "600" }}>{estGarage}</span></span>
                      <span style={{ display: "flex", justifyContent: "space-between", gap: "14px" }}><span>Vide sanitaire</span><span style={{ color: "#F7F7F4", fontWeight: "600" }}>{estVs}</span></span>
                      <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", paddingTop: "10px", borderTop: "1px solid rgba(247,247,244,0.1)" }}><span>Soit environ</span><span style={{ color: "#9CC4B2", fontWeight: "600" }}>{estM2} € / m²</span></span>
                    </div>
                    <p style={{ margin: "0", fontSize: "12px", color: "rgba(247,247,244,0.45)", lineHeight: "1.6" }}>Hors terrain, frais de notaire, viabilisation, taxe d'aménagement et aménagements extérieurs. Seule une étude personnalisée engage l'entreprise.</p>
                  </div>

                  <div style={{ flex: "none", background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "12px", padding: "clamp(24px,3vw,38px)", boxShadow: "0 40px 80px -60px rgba(17,20,18,0.5)" }}>
                    {(estSent) ? (<>
                      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                        <div style={{ width: "50px", height: "50px", flex: "none", borderRadius: "50%", background: "#2E5A49", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "23px" }}>✓</div>
                        <div>
                          <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(21px,2.2vw,27px)", color: "#111412", lineHeight: "1.12" }}>Demande enregistrée</h3>
                          <p style={{ margin: "7px 0 0", color: "#565B56", fontSize: "14px", lineHeight: "1.65" }}>Chiffrage détaillé sous 48 h ouvrées, poste par poste.</p>
                        </div>
                      </div>
                    </>) : null}
                    {(estNotSent) ? (<>
                      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
                        <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(21px,2.2vw,28px)", color: "#111412", lineHeight: "1.12" }}>Recevoir le détail par mail</h3>
                        <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8D948E", whiteSpace: "nowrap" }}>3 champs</span>
                      </div>
                      <form onSubmit={onEstSubmit} name="estimation" method="POST" data-netlify="true" data-netlify-honeypot="piege" style={{ marginTop: "clamp(18px,2vw,24px)", display: "flex", flexDirection: "column", gap: "12px" }}><input type="hidden" name="form-name" value="estimation" /><input type="hidden" name="configuration" value={estResume} /><p style={{ display: "none" }}><label>Ne pas remplir : <input name="piege" /></label></p>
                        <input required={true} name="nom" type="text" placeholder="Nom et prénom" aria-label="Nom et prénom" style={{ width: "100%", padding: "15px 16px", border: "1px solid rgba(17,20,18,0.16)", borderRadius: "6px", background: "#fff", fontFamily: "inherit", fontSize: "15px", color: "#111412", outline: "none" }} style-focus="border-color:#2E5A49;box-shadow:0 0 0 3px rgba(46,90,73,0.14);" />
                        <div className="me-g2" style={{ gap: "12px" }}>
                          <input required={true} name="telephone" type="tel" placeholder="Téléphone" aria-label="Téléphone" style={{ width: "100%", padding: "15px 16px", border: "1px solid rgba(17,20,18,0.16)", borderRadius: "6px", background: "#fff", fontFamily: "inherit", fontSize: "15px", color: "#111412", outline: "none" }} style-focus="border-color:#2E5A49;box-shadow:0 0 0 3px rgba(46,90,73,0.14);" />
                          <input required={true} name="email" type="email" placeholder="Email" aria-label="Email" style={{ width: "100%", padding: "15px 16px", border: "1px solid rgba(17,20,18,0.16)", borderRadius: "6px", background: "#fff", fontFamily: "inherit", fontSize: "15px", color: "#111412", outline: "none" }} style-focus="border-color:#2E5A49;box-shadow:0 0 0 3px rgba(46,90,73,0.14);" />
                        </div>
                        <label style={{ display: "flex", gap: "11px", alignItems: "flex-start", fontSize: "12.5px", color: "#77807A", lineHeight: "1.55", cursor: "pointer" }}>
                          <input required={true} type="checkbox" style={{ marginTop: "1px", width: "17px", height: "17px", accentColor: "#2E5A49", flex: "none" }} />
                          <span>J'accepte que mes données soient utilisées pour me transmettre cette estimation. Aucune revente.</span>
                        </label>
                        <button type="submit" className="me-btn" style={{ cursor: "pointer", width: "100%", padding: "16px", border: "none", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", boxShadow: "0 20px 40px -22px rgba(46,90,73,1)" }} style-hover="background:#3B7059;transform:translateY(-2px);">Recevoir l'estimation détaillée →</button>
                      </form>
                    </>) : null}
                  </div>
                </div>

              </div>

              <div data-reveal="" style={{ marginTop: "clamp(44px,5.4vw,72px)", paddingTop: "clamp(36px,4vw,52px)", borderTop: "1px solid rgba(17,20,18,0.14)" }}>
                <div className="me-g3" style={{ gap: "clamp(20px,2.6vw,40px)" }}>
                  <div>
                    <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "26px", color: "#111412" }}>Ce que la fourchette comprend</h3>
                    <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>En clé en main : gros œuvre (brique ou béton cellulaire), charpente, couverture, menuiseries, isolation RE2020, plomberie, électricité, chauffage, cloisons et finitions courantes. En prêt à finir ou hors d'eau / hors d'air, le périmètre se réduit et le prix suit.</p>
                  </div>
                  <div>
                    <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "26px", color: "#111412" }}>Ce qui reste à ajouter</h3>
                    <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Le terrain et les frais de notaire, la viabilisation, la taxe d'aménagement, la cuisine équipée, les terrasses, clôtures et aménagements extérieurs.</p>
                  </div>
                  <div>
                    <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "26px", color: "#111412" }}>Pourquoi une fourchette</h3>
                    <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Parce qu'un prix au centime avant l'étude de sol et le plan définitif serait un prix d'appel. Le chiffre ferme arrive au CCMI — et il ne bouge plus.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* APERÇU RÉALISATIONS */}
          <section style={{ background: "#F7F7F4", padding: "clamp(84px,12vw,160px) 0" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "clamp(40px,5vw,64px)" }}>
                <div>
                  <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Réalisations</span></div>
                  <h2 data-reveal="" data-delay="100" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(34px,4.6vw,62px)", lineHeight: "1.04", color: "#111412", maxWidth: "16ch" }}>Des maisons pensées dans le moindre détail.</h2>
                </div>
                <a href="#realisations" onClick={goRealisations} className="me-link" style={{ textDecoration: "none", color: "#111412", fontWeight: "600", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "9px", borderBottom: "1px solid #2E5A49", paddingBottom: "5px" }} style-hover="gap:15px;color:#2E5A49;">Toute la galerie →</a>
              </div>
              <div className="me-g3" style={{ gap: "clamp(16px,1.8vw,26px)" }}>
                <div data-reveal="" className="me-card" style={{ borderRadius: "6px", overflow: "hidden", background: "#111412" }}>
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
                    <img className="me-zoom" src="/photos/maison-contemporaine-etage-porche.webp" alt="Maison contemporaine à étage avec porche d'entrée construite dans l'Ain" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,transparent 45%,rgba(11,13,12,0.85) 100%)" }}></div>
                    <div style={{ position: "absolute", left: "24px", bottom: "22px", color: "#F7F7F4" }}><div style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CC4B2" }}>Contemporain</div><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "27px", fontWeight: "400", marginTop: "4px" }}>Maison à étage</div></div>
                  </div>
                </div>
                <div data-reveal="" data-delay="120" className="me-card" style={{ borderRadius: "6px", overflow: "hidden", background: "#111412" }}>
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
                    <img className="me-zoom" src="/photos/maison-plain-pied-en-l.webp" alt="Maison traditionnelle de plain-pied en L, toiture tuile, construite dans l'Ain" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,transparent 45%,rgba(11,13,12,0.85) 100%)" }}></div>
                    <div style={{ position: "absolute", left: "24px", bottom: "22px", color: "#F7F7F4" }}><div style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CC4B2" }}>Traditionnel</div><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "27px", fontWeight: "400", marginTop: "4px" }}>Plain-pied en L</div></div>
                  </div>
                </div>
                <div data-reveal="" data-delay="240" className="me-card" style={{ borderRadius: "6px", overflow: "hidden", background: "#111412" }}>
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
                    <img className="me-zoom" src="/photos/maison-monopente-garage-independant.webp" alt="Maison contemporaine à toit monopente avec garage indépendant, construite dans l'Ain" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,transparent 45%,rgba(11,13,12,0.85) 100%)" }}></div>
                    <div style={{ position: "absolute", left: "24px", bottom: "22px", color: "#F7F7F4" }}><div style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9CC4B2" }}>Contemporain</div><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "27px", fontWeight: "400", marginTop: "4px" }}>Toit monopente</div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PARCOURS */}
          <section style={{ background: "#111412", color: "#F7F7F4", padding: "clamp(84px,12vw,160px) 0", position: "relative" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div style={{ maxWidth: "60ch" }}>
                <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}><span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span><span style={{ color: "#9CC4B2", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Notre fil rouge</span></div>
                <h2 data-reveal="" data-delay="100" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(34px,4.8vw,66px)", lineHeight: "1.02", letterSpacing: "-0.01em" }}>Maîtrise technique, transparence contractuelle.</h2>
              </div>
              <div className="me-steps" style={{ gap: "0", marginTop: "clamp(48px,7vw,90px)", borderTop: "1px solid rgba(247,247,244,0.16)" }}>
                <div data-reveal="" data-delay="60" style={{ padding: "30px 22px 0 0", borderRight: "1px solid rgba(247,247,244,0.12)" }}><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(50px,7vw,96px)", fontWeight: "300", lineHeight: "1", color: "#9CC4B2" }}>01</div><div style={{ marginTop: "18px", fontSize: "17px", fontWeight: "600" }}>Le rendez-vous</div><p style={{ margin: "10px 0 0", color: "rgba(247,247,244,0.6)", fontSize: "13.5px", lineHeight: "1.6" }}>Au bureau, on écoute votre projet, votre terrain et votre budget.</p></div>
                <div data-reveal="" data-delay="140" style={{ padding: "30px 22px 0 22px", borderRight: "1px solid rgba(247,247,244,0.12)" }}><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(50px,7vw,96px)", fontWeight: "300", lineHeight: "1", color: "#9CC4B2" }}>02</div><div style={{ marginTop: "18px", fontSize: "17px", fontWeight: "600" }}>Les plans sur-mesure</div><p style={{ margin: "10px 0 0", color: "rgba(247,247,244,0.6)", fontSize: "13.5px", lineHeight: "1.6" }}>Nous dessinons votre maison, pas un modèle du catalogue.</p></div>
                <div data-reveal="" data-delay="220" style={{ padding: "30px 22px 0 22px", borderRight: "1px solid rgba(247,247,244,0.12)" }}><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(50px,7vw,96px)", fontWeight: "300", lineHeight: "1", color: "#9CC4B2" }}>03</div><div style={{ marginTop: "18px", fontSize: "17px", fontWeight: "600" }}>Le CCMI</div><p style={{ margin: "10px 0 0", color: "rgba(247,247,244,0.6)", fontSize: "13.5px", lineHeight: "1.6" }}>Prix et délais contractuels, échéancier de paiement légal.</p></div>
                <div data-reveal="" data-delay="300" style={{ padding: "30px 22px 0 22px", borderRight: "1px solid rgba(247,247,244,0.12)" }}><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(50px,7vw,96px)", fontWeight: "300", lineHeight: "1", color: "#9CC4B2" }}>04</div><div style={{ marginTop: "18px", fontSize: "17px", fontWeight: "600" }}>Le chantier</div><p style={{ margin: "10px 0 0", color: "rgba(247,247,244,0.6)", fontSize: "13.5px", lineHeight: "1.6" }}>Artisans locaux, un interlocuteur, un point d'avancement régulier.</p></div>
                <div data-reveal="" data-delay="380" style={{ padding: "30px 0 0 22px" }}><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(50px,7vw,96px)", fontWeight: "300", lineHeight: "1", color: "#9CC4B2" }}>05</div><div style={{ marginTop: "18px", fontSize: "17px", fontWeight: "600" }}>La remise des clés</div><p style={{ margin: "10px 0 0", color: "rgba(247,247,244,0.6)", fontSize: "13.5px", lineHeight: "1.6" }}>Toutes garanties réunies, et un SAV qui répond.</p></div>
              </div>
              <div data-reveal="" data-delay="160" style={{ marginTop: "50px" }}><a href="#entreprise" onClick={goEntreprise} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 30px", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontSize: "14px", fontWeight: "600" }} style-hover="background:#3B7059;transform:translateY(-3px);">Notre savoir-faire et nos garanties →</a></div>
            </div>
          </section>

          {/* AVIS GOOGLE */}
          <section style={{ background: "#F7F7F4", padding: "clamp(84px,12vw,150px) 0" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "28px", marginBottom: "clamp(36px,5vw,56px)" }}>
                <div>
                  <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "12px", fontWeight: "600", letterSpacing: "0.24em", textTransform: "uppercase" }}>Avis vérifiés</span></div>
                  <h2 data-reveal="" data-delay="100" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(32px,4.6vw,60px)", lineHeight: "1.04", color: "#111412", maxWidth: "18ch" }}>La meilleure note du secteur, et pas par hasard.</h2>
                </div>
                <a data-reveal="" data-delay="160" href={avisUrl} target="_blank" rel="noopener noreferrer" className="me-avis-google" aria-label="Voir les avis Google de Maisons d'Excellence" style={{ display: "flex", alignItems: "baseline", gap: "16px", textDecoration: "none", padding: "4px 6px", margin: "-4px -6px", borderRadius: "4px", transition: "background .25s ease" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(56px,7vw,86px)", lineHeight: "0.82", color: "#111412" }}>5,0</span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px", paddingBottom: "4px" }}>
                    <span style={{ color: "#2E5A49", fontSize: "15px", letterSpacing: "0.18em" }}>★★★★★</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "13.5px", color: "#565B56" }}>
                      <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true" style={{ flex: "none" }}>
                        <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path>
                        <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path>
                        <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"></path>
                        <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path>
                      </svg>
                      <span>{avisCount} avis Google vérifiés</span>
                      <span className="me-avis-arrow" style={{ color: "#2E5A49", fontWeight: "600" }}>Voir les avis ↗</span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="me-g3" style={{ gap: "clamp(16px,1.8vw,26px)" }}>
                {(avis ?? []).map((a, i) => (
                  <div data-reveal="" data-delay={a.delay} className="me-quote" style={{ borderTop: "1px solid rgba(17,20,18,0.22)", padding: "26px 0 0", display: "flex", flexDirection: "column", transition: "border-color .5s" }} key={i}>
                    <div style={{ color: "#2E5A49", fontSize: "13px", letterSpacing: "0.2em" }}>★★★★★</div>
                    <p style={{ margin: "20px 0 0", color: "#22261F", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(19px,1.7vw,23px)", lineHeight: "1.5", flex: "1", textWrap: "pretty" }}>« {a.text} »</p>
                    <div style={{ marginTop: "26px", display: "flex", alignItems: "baseline", gap: "10px" }}>
                      <span style={{ fontSize: "13.5px", fontWeight: "600", color: "#111412" }}>{a.name}</span>
                      <span style={{ fontSize: "12.5px", color: "#8D948E" }}>— {a.meta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* GARANTIES */}
          <section style={{ position: "relative", overflow: "hidden", color: "#F7F7F4", padding: "clamp(90px,13vw,170px) 0" }}>
            <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}><img data-parallax="0.10" src="/photos/chantier-gros-oeuvre-brique.webp" alt="Chantier de construction de maison individuelle suivi par Maisons d'Excellence" style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.08)", willChange: "transform" }} /></div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(110deg,rgba(11,13,12,0.94) 0%,rgba(11,13,12,0.80) 50%,rgba(11,13,12,0.55) 100%)" }}></div>
            <div style={{ position: "relative", maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div style={{ maxWidth: "62ch" }}>
                <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}><span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span><span style={{ color: "#9CC4B2", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Transparence contractuelle</span></div>
                <h2 data-reveal="" data-delay="100" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(34px,4.8vw,64px)", lineHeight: "1.04" }}>Vous ne payez jamais en avance. Voilà pourquoi.</h2>
                <p data-reveal="" data-delay="180" style={{ margin: "24px 0 0", color: "rgba(247,247,244,0.78)", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.7" }}>Chaque maison est bâtie sous Contrat de Construction de Maison Individuelle. Le prix est ferme, les délais sont contractuels, et les paiements suivent un échéancier fixé par la loi : chaque appel de fonds correspond à une étape de chantier réellement achevée.</p>
                <a href="#entreprise" onClick={goEntreprise} className="me-btn" data-reveal="" data-delay="240" style={{ marginTop: "32px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 30px", borderRadius: "100px", background: "rgba(247,247,244,0.10)", color: "#F7F7F4", fontSize: "14px", fontWeight: "600", border: "1px solid rgba(247,247,244,0.42)" }} style-hover="background:rgba(247,247,244,0.2);transform:translateY(-3px);">Voir l'échéancier en détail →</a>
              </div>
              <div className="me-g4" style={{ gap: "clamp(14px,1.6vw,22px)", marginTop: "clamp(44px,6vw,72px)" }}>
                <div data-reveal="" data-delay="60" style={{ background: "rgba(247,247,244,0.06)", border: "1px solid rgba(247,247,244,0.14)", borderRadius: "6px", padding: "26px 24px", backdropFilter: "blur(4px)" }}><div style={{ color: "#9CC4B2", fontFamily: "'Cormorant Garamond',serif", fontSize: "32px", lineHeight: "1" }}>✓</div><div style={{ marginTop: "14px", fontSize: "15px", fontWeight: "600" }}>Garantie décennale</div><p style={{ margin: "8px 0 0", color: "rgba(247,247,244,0.6)", fontSize: "13px", lineHeight: "1.55" }}>Structure et solidité couvertes pendant 10 ans.</p></div>
                <div data-reveal="" data-delay="140" style={{ background: "rgba(247,247,244,0.06)", border: "1px solid rgba(247,247,244,0.14)", borderRadius: "6px", padding: "26px 24px", backdropFilter: "blur(4px)" }}><div style={{ color: "#9CC4B2", fontFamily: "'Cormorant Garamond',serif", fontSize: "32px", lineHeight: "1" }}>✓</div><div style={{ marginTop: "14px", fontSize: "15px", fontWeight: "600" }}>Dommages-ouvrage</div><p style={{ margin: "8px 0 0", color: "rgba(247,247,244,0.6)", fontSize: "13px", lineHeight: "1.55" }}>Réparation sans attendre de savoir qui est responsable.</p></div>
                <div data-reveal="" data-delay="220" style={{ background: "rgba(247,247,244,0.06)", border: "1px solid rgba(247,247,244,0.14)", borderRadius: "6px", padding: "26px 24px", backdropFilter: "blur(4px)" }}><div style={{ color: "#9CC4B2", fontFamily: "'Cormorant Garamond',serif", fontSize: "32px", lineHeight: "1" }}>✓</div><div style={{ marginTop: "14px", fontSize: "15px", fontWeight: "600" }}>Prix et délais convenus</div><p style={{ margin: "8px 0 0", color: "rgba(247,247,244,0.6)", fontSize: "13px", lineHeight: "1.55" }}>Garantie de livraison : le budget et le calendrier engagent.</p></div>
                <div data-reveal="" data-delay="300" style={{ background: "rgba(247,247,244,0.06)", border: "1px solid rgba(247,247,244,0.14)", borderRadius: "6px", padding: "26px 24px", backdropFilter: "blur(4px)" }}><div style={{ color: "#9CC4B2", fontFamily: "'Cormorant Garamond',serif", fontSize: "32px", lineHeight: "1" }}>✓</div><div style={{ marginTop: "14px", fontSize: "15px", fontWeight: "600" }}>SAV sous 48 h</div><p style={{ margin: "8px 0 0", color: "rgba(247,247,244,0.6)", fontSize: "13px", lineHeight: "1.55" }}>Une réponse en deux jours ouvrés, après la livraison aussi.</p></div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ background: "#F7F7F4", padding: "clamp(84px,12vw,150px) 0" }}>
            <div style={{ maxWidth: "1040px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", textAlign: "center" }}>
              <h2 data-reveal="" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(36px,5.6vw,76px)", lineHeight: "1.02", color: "#111412", textWrap: "balance" }}>Et si l'on parlait de votre future maison ?</h2>
              <p data-reveal="" data-delay="100" style={{ margin: "22px auto 0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.7", maxWidth: "50ch" }}>Un premier rendez-vous gratuit à notre bureau de Meximieux, pour étudier votre terrain, votre budget et vos envies.</p>
              <div data-reveal="" data-delay="180" style={{ marginTop: "38px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                <a href="#contact" onClick={goContact} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "18px 36px", borderRadius: "100px", background: "#111412", color: "#F7F7F4", fontSize: "14px", fontWeight: "600", boxShadow: "0 24px 48px -26px rgba(17,20,18,0.9)" }} style-hover="background:#1C201D;transform:translateY(-3px);">Demander un rendez-vous →</a>
                <a href="tel:+33474346643" className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "18px 36px", borderRadius: "100px", background: "transparent", color: "#111412", fontSize: "14px", fontWeight: "600", border: "1px solid rgba(17,20,18,0.28)" }} style-hover="border-color:#2E5A49;color:#2E5A49;transform:translateY(-3px);">✆ 04 74 34 66 43</a>
              </div>
            </div>
          </section>

        </main>
    </>
  );
}
