'use client';

import type { Vals } from '@/components/site-vals';

/**
 * Contact — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function Contact(v: Vals) {
  const { formMessage, formNature, goContactForm, goEstimation, goTrouver, goZone, notSubmitted, onSubmit, resetForm, setMessage, setNature, submitted } = v;
  return (
    <>
      <main data-screen-label="Contact">
          {/* EN-TÊTE */}
          <section style={{ position: "relative", minHeight: "clamp(420px,48vh,580px)", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
            <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}><img src="/photos/bureau-meximieux-facade.webp" alt="La devanture du bureau Maisons d'Excellence, 6 rue de Genève à Meximieux" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 16%", animation: "meKb 18s ease-out forwards" }} /></div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0.62) 0%,rgba(11,13,12,0.42) 34%,rgba(11,13,12,0.74) 68%,rgba(11,13,12,0.94) 100%)" }}></div>
            <div style={{ position: "relative", width: "100%", maxWidth: "1440px", margin: "0 auto", padding: "clamp(104px,11vw,128px) clamp(20px,5vw,64px) clamp(44px,5.4vw,76px)" }}>
              <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}><span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span><span style={{ color: "#CFE0D6", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Contact · Meximieux (01)</span></div>
              <h1 data-reveal="" data-delay="120" style={{ margin: "0", color: "#FFFFFF", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(38px,6vw,80px)", lineHeight: "0.99", letterSpacing: "-0.02em", maxWidth: "18ch", textShadow: "0 4px 40px rgba(11,13,12,0.7)" }}>Parlons de votre projet.</h1>
              <p data-reveal="" data-delay="220" style={{ margin: "clamp(20px,2.2vw,28px) 0 0", color: "rgba(247,247,244,0.86)", fontSize: "clamp(15px,1.35vw,17.5px)", lineHeight: "1.7", maxWidth: "52ch", textShadow: "0 2px 20px rgba(11,13,12,0.85)" }}>Un premier échange gratuit et sans engagement, au bureau du 6 rue de Genève ou par téléphone. Réponse sous 48 h ouvrées.</p>
              <a href="#contact" onClick={goContactForm} data-reveal="" data-delay="340" className="me-cue me-scroll" style={{ position: "absolute", right: "clamp(20px,5vw,64px)", bottom: "clamp(30px,4vw,58px)", display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(12px,1.4vw,18px)", textDecoration: "none", color: "#D3B27A" }} style-hover="color:#FFFFFF;">
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(26px,2.7vw,38px)", lineHeight: "1", whiteSpace: "nowrap", textShadow: "0 2px 24px rgba(11,13,12,0.9)" }}>Contactez-nous</span>
                <span style={{ position: "relative", display: "block", width: "1px", height: "clamp(58px,7vw,92px)", overflow: "hidden", background: "linear-gradient(180deg,rgba(211,178,122,0.85) 0%,rgba(211,178,122,0.1) 100%)" }}>
                  <span style={{ position: "absolute", left: "-1px", top: "0", width: "3px", height: "18px", borderRadius: "2px", background: "#FFF6E4", animation: "meDrop 2.6s cubic-bezier(.5,0,.5,1) infinite" }}></span>
                </span>
              </a>
            </div>
          </section>

          {/* SOMMAIRE */}
          <section style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(17,20,18,0.08)", padding: "22px 0" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", display: "flex", flexWrap: "wrap", gap: "10px 26px", alignItems: "center" }}>
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8D948E" }}>Sur cette page</span>
              <a href="#contact" onClick={goContactForm} className="me-link" style={{ textDecoration: "none", color: "#111412", fontSize: "13.5px", fontWeight: "600" }} style-hover="color:#2E5A49;">Nous écrire</a>
              <a href="#nous-trouver" onClick={goTrouver} className="me-link" style={{ textDecoration: "none", color: "#111412", fontSize: "13.5px", fontWeight: "600" }} style-hover="color:#2E5A49;">Coordonnées &amp; plan</a>
              <a href="#estimation" onClick={goEstimation} className="me-link" style={{ textDecoration: "none", color: "#111412", fontSize: "13.5px", fontWeight: "600" }} style-hover="color:#2E5A49;">Estimer le prix</a>
              <a href="tel:+33474346643" className="me-link" style={{ marginLeft: "auto", textDecoration: "none", color: "#2E5A49", fontSize: "13.5px", fontWeight: "600" }} style-hover="color:#111412;">04 74 34 66 43</a>
            </div>
          </section>

          {/* NOUS ÉCRIRE */}
          <section style={{ background: "#F7F7F4", padding: "clamp(38px,4.6vw,64px) 0 clamp(72px,9vw,120px)" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "clamp(22px,2.6vw,32px)" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase" }}>Formulaire de contact</span></div>
                <div id="contact" data-reveal="" data-delay="120" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "12px", padding: "clamp(26px,3.4vw,44px)", boxShadow: "0 40px 80px -60px rgba(17,20,18,0.5)" }}>
                  {(submitted) ? (<>
                    <div style={{ padding: "8px 0" }}>
                      <div style={{ width: "54px", height: "54px", borderRadius: "50%", background: "#111412", display: "flex", alignItems: "center", justifyContent: "center", color: "#9CC4B2", fontSize: "25px" }}>✓</div>
                      <h3 style={{ margin: "20px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.3vw,30px)", color: "#111412", lineHeight: "1.1" }}>Merci, votre demande est partie.</h3>
                      <p style={{ margin: "10px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Nous vous répondons sous 48 h ouvrées. Pour une demande urgente, appelez le 04 74 34 66 43 ou écrivez-nous sur WhatsApp.</p>
                      <button onClick={resetForm} className="me-btn" style={{ marginTop: "24px", cursor: "pointer", padding: "13px 26px", borderRadius: "100px", background: "transparent", border: "1px solid rgba(17,20,18,0.28)", color: "#111412", fontSize: "13.5px", fontWeight: "600", fontFamily: "inherit" }} style-hover="border-color:#2E5A49;color:#2E5A49;">Envoyer un autre message</button>
                    </div>
                  </>) : null}
                  {(notSubmitted) ? (<>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", paddingBottom: "clamp(16px,1.8vw,22px)", borderBottom: "1px solid rgba(17,20,18,0.1)" }}>
                      <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.3vw,30px)", color: "#111412", lineHeight: "1.1" }}>Nous écrire</h3>
                      <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase", color: "#2E5A49", whiteSpace: "nowrap" }}>Réponse 48 h</span>
                    </div>
                    <p style={{ margin: "clamp(16px,1.8vw,22px) 0 0", color: "#77807A", fontSize: "13.5px", lineHeight: "1.7" }}>Décrivez votre projet en quelques lignes. Nous vous rappelons pour fixer un premier rendez-vous au bureau, gratuit et sans engagement.</p>
                    <form onSubmit={onSubmit} style={{ marginTop: "22px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#77807A", marginBottom: "9px" }}>Nom complet *</label>
                          <input required={true} type="text" placeholder="Votre nom" style={{ width: "100%", padding: "15px 16px", border: "1px solid rgba(17,20,18,0.16)", borderRadius: "6px", background: "#fff", fontFamily: "inherit", fontSize: "15px", color: "#111412", outline: "none" }} style-focus="border-color:#2E5A49;box-shadow:0 0 0 3px rgba(46,90,73,0.14);" />
                        </div>
                        <div className="me-g2" style={{ gap: "16px" }}>
                          <div>
                            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#77807A", marginBottom: "9px" }}>Téléphone *</label>
                            <input required={true} type="tel" placeholder="06 00 00 00 00" style={{ width: "100%", padding: "15px 16px", border: "1px solid rgba(17,20,18,0.16)", borderRadius: "6px", background: "#fff", fontFamily: "inherit", fontSize: "15px", color: "#111412", outline: "none" }} style-focus="border-color:#2E5A49;box-shadow:0 0 0 3px rgba(46,90,73,0.14);" />
                          </div>
                          <div>
                            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#77807A", marginBottom: "9px" }}>Email *</label>
                            <input required={true} type="email" placeholder="vous@email.fr" style={{ width: "100%", padding: "15px 16px", border: "1px solid rgba(17,20,18,0.16)", borderRadius: "6px", background: "#fff", fontFamily: "inherit", fontSize: "15px", color: "#111412", outline: "none" }} style-focus="border-color:#2E5A49;box-shadow:0 0 0 3px rgba(46,90,73,0.14);" />
                          </div>
                        </div>
                        <div className="me-g2" style={{ gap: "16px" }}>
                          <div>
                            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#77807A", marginBottom: "9px" }}>Nature du projet *</label>
                            <span style={{ position: "relative", display: "block" }}>
                            <select required={true} className="me-select" value={formNature} onChange={setNature} style={{ width: "100%", padding: "15px 16px", border: "1px solid rgba(17,20,18,0.16)", borderRadius: "6px", backgroundColor: "#fff", fontFamily: "inherit", fontSize: "15px", color: "#111412", outline: "none" }} style-focus="border-color:#2E5A49;box-shadow:0 0 0 3px rgba(46,90,73,0.14);">
                              <option value="Construction neuve">Construction neuve</option>
                              <option value="Rénovation">Rénovation</option>
                              <option value="Extension">Extension</option>
                              <option value="Projet investisseur">Projet investisseur</option>
                            </select>
                            <svg width="12" height="8" fill="none" stroke="#111412" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: "absolute", right: "17px", top: "50%", marginTop: "-4px", pointerEvents: "none" }}><path d="M1 1.5 6 6.5 11 1.5"></path></svg>
                            </span>
                          </div>
                          <div>
                            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#77807A", marginBottom: "9px" }}>Surface souhaitée</label>
                            <input type="text" placeholder="ex. 110 m²" style={{ width: "100%", padding: "15px 16px", border: "1px solid rgba(17,20,18,0.16)", borderRadius: "6px", background: "#fff", fontFamily: "inherit", fontSize: "15px", color: "#111412", outline: "none" }} style-focus="border-color:#2E5A49;box-shadow:0 0 0 3px rgba(46,90,73,0.14);" />
                          </div>
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#77807A", marginBottom: "9px" }}>Votre message *</label>
                          <textarea required={true} rows={5} value={formMessage} onChange={setMessage} placeholder="Terrain, style souhaité, budget approximatif, délais…" style={{ width: "100%", padding: "15px 16px", border: "1px solid rgba(17,20,18,0.16)", borderRadius: "6px", background: "#fff", fontFamily: "inherit", fontSize: "15px", color: "#111412", outline: "none", resize: "vertical", lineHeight: "1.6" }} style-focus="border-color:#2E5A49;box-shadow:0 0 0 3px rgba(46,90,73,0.14);"></textarea>
                        </div>
                        <label style={{ display: "flex", gap: "11px", alignItems: "flex-start", fontSize: "12.5px", color: "#77807A", lineHeight: "1.6", cursor: "pointer" }}>
                          <input required={true} type="checkbox" style={{ marginTop: "2px", width: "17px", height: "17px", accentColor: "#2E5A49", flex: "none" }} />
                          <span>J'accepte que mes données soient collectées pour traiter ma demande, conformément au RGPD. Elles ne sont ni revendues ni transmises à des tiers, et je peux demander leur suppression à tout moment.</span>
                        </label>
                        <button type="submit" className="me-btn" style={{ cursor: "pointer", width: "100%", padding: "17px", border: "none", borderRadius: "100px", background: "#111412", color: "#F7F7F4", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", letterSpacing: "0.02em", boxShadow: "0 20px 40px -24px rgba(17,20,18,0.9)" }} style-hover="background:#1C201D;transform:translateY(-2px);">Envoyer ma demande →</button>
                        <p style={{ margin: "0", fontSize: "11.5px", color: "#8D948E", lineHeight: "1.5" }}>* Champs obligatoires.</p>
                      </div>
                    </form>
                  </>) : null}
                </div>

            </div>
          </section>

          {/* COORDONNÉES + CARTE */}
          <section id="nous-trouver" style={{ background: "#EDEDE7", borderTop: "1px solid rgba(17,20,18,0.1)", padding: "clamp(56px,7vw,92px) 0 clamp(72px,9vw,130px)" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase" }}>Nous trouver</span></div>
              <h2 data-reveal="" data-delay="80" style={{ margin: "0 0 clamp(30px,3.6vw,46px)", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(28px,3.6vw,46px)", lineHeight: "1.05", letterSpacing: "-0.02em", color: "#111412", maxWidth: "24ch" }}>Ou passez directement au bureau.</h2>
              <div className="me-split" style={{ gap: "clamp(28px,3.6vw,56px)", alignItems: "stretch" }}>

                <div data-reveal="" style={{ display: "flex", flexDirection: "column" }}>
                  <a href="tel:+33474346643" className="me-link" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "15px", padding: "20px 0", borderTop: "1px solid rgba(17,20,18,0.14)", color: "#111412" }} style-hover="color:#2E5A49;">
                    <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "50%", background: "#111412", color: "#9CC4B2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>✆</span>
                    <span><span style={{ display: "block", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#77807A", marginBottom: "3px" }}>Appeler</span><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "21px", fontWeight: "500" }}>04 74 34 66 43</span></span>
                  </a>
                  <a href="https://wa.me/33615191647?text=Bonjour%2C%20je%20vous%20%C3%A9cris%20depuis%20votre%20site.%20J'aimerais%20%C3%A9changer%20sur%20mon%20projet%20de%20construction." target="_blank" rel="noopener" className="me-link" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "15px", padding: "20px 0", borderTop: "1px solid rgba(17,20,18,0.14)", color: "#111412" }} style-hover="color:#25D366;">
                    <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="19" height="19" fill="#fff" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"></path></svg></span>
                    <span><span style={{ display: "block", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#77807A", marginBottom: "3px" }}>WhatsApp</span><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "21px", fontWeight: "500" }}>06 15 19 16 47</span></span>
                  </a>
                  <a href="mailto:aykut.atak@sfr.fr" className="me-link" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "15px", padding: "20px 0", borderTop: "1px solid rgba(17,20,18,0.14)", color: "#111412" }} style-hover="color:#2E5A49;">
                    <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "50%", background: "#111412", color: "#9CC4B2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>✉</span>
                    <span><span style={{ display: "block", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#77807A", marginBottom: "3px" }}>Email</span><span style={{ fontSize: "16.5px", fontWeight: "500" }}>aykut.atak@sfr.fr</span></span>
                  </a>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", padding: "20px 0", borderTop: "1px solid rgba(17,20,18,0.14)" }}>
                    <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "50%", background: "#111412", color: "#9CC4B2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>⌖</span>
                    <span><span style={{ display: "block", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#77807A", marginBottom: "3px" }}>Adresse</span><span style={{ fontSize: "16px", color: "#333834", lineHeight: "1.6", display: "block" }}>6 rue de Genève<br />01800 Meximieux</span></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", padding: "20px 0", borderTop: "1px solid rgba(17,20,18,0.14)" }}>
                    <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "50%", background: "#111412", color: "#9CC4B2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>◷</span>
                    <span><span style={{ display: "block", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#77807A", marginBottom: "3px" }}>Horaires</span><span style={{ fontSize: "16px", color: "#333834", lineHeight: "1.6", display: "block" }}>Lundi – vendredi · 8h30 – 18h00<br />Samedi sur rendez-vous</span></span>
                  </div>
                  <a href="#zone" onClick={goZone} className="me-link" style={{ textDecoration: "none", display: "flex", alignItems: "flex-start", gap: "15px", padding: "20px 0", borderTop: "1px solid rgba(17,20,18,0.14)", borderBottom: "1px solid rgba(17,20,18,0.14)", color: "#111412" }} style-hover="color:#2E5A49;">
                    <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "50%", background: "#111412", color: "#9CC4B2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>⌂</span>
                    <span><span style={{ display: "block", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#77807A", marginBottom: "3px" }}>Zone d'intervention</span><span style={{ fontSize: "15px", color: "#333834", lineHeight: "1.6", display: "block" }}>30 km autour de Meximieux, Bourg-en-Bresse et Ambérieu-en-Bugey — voir la carte →</span></span>
                  </a>
                </div>

                <div data-reveal="" data-delay="120" style={{ position: "relative", display: "flex", flexDirection: "column", minHeight: "clamp(320px,38vw,520px)", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(17,20,18,0.12)", boxShadow: "0 40px 80px -55px rgba(17,20,18,0.6)", background: "#EDEDE7" }}>
                  <div id="me-map-bureau" style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}></div>
                  <a href="https://www.google.com/maps/search/?api=1&query=6+rue+de+Gen%C3%A8ve+01800+Meximieux" target="_blank" rel="noopener" className="me-btn" style={{ position: "absolute", zIndex: "500", left: "16px", bottom: "16px", display: "inline-flex", alignItems: "center", gap: "9px", padding: "13px 22px", borderRadius: "100px", background: "#111412", color: "#F7F7F4", fontSize: "13px", fontWeight: "600", textDecoration: "none", boxShadow: "0 18px 34px -18px rgba(17,20,18,0.9)" }} style-hover="background:#2E5A49;transform:translateY(-3px);">Ouvrir l'itinéraire ↗</a>
                </div>

              </div>
            </div>
          </section>
        </main>
    </>
  );
}
