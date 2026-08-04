'use client';

import type { Vals } from '@/components/site-vals';

/**
 * Entreprise — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function Entreprise(v: Vals) {
  const { avisCount, echeancier, goArticleEch, goContact, goEstimation, goRealisations } = v;
  return (
    <>
      <main data-screen-label="L'entreprise">
          <section style={{ position: "relative", minHeight: "clamp(420px,48vh,580px)", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
            <div style={{ position: "absolute", inset: "0", overflow: "hidden" }}><img src="/photos/chantier-gros-oeuvre-brique.png" alt="Chantier de maison individuelle suivi par Maisons d'Excellence dans l'Ain" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 46%", animation: "meKb 18s ease-out forwards" }} /></div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,13,12,0.62) 0%,rgba(11,13,12,0.42) 34%,rgba(11,13,12,0.74) 68%,rgba(11,13,12,0.94) 100%)" }}></div>
            <div style={{ position: "relative", width: "100%", maxWidth: "1440px", margin: "0 auto", padding: "clamp(104px,11vw,128px) clamp(20px,5vw,64px) clamp(44px,5.4vw,76px)" }}>
              <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}><span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span><span style={{ color: "#CFE0D6", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>L'entreprise</span></div>
              <h1 data-reveal="" data-delay="120" style={{ margin: "0", color: "#FFFFFF", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(38px,6vw,80px)", lineHeight: "0.99", letterSpacing: "-0.02em", maxWidth: "18ch", textShadow: "0 4px 40px rgba(11,13,12,0.7)" }}>Maîtrise technique, transparence contractuelle.</h1>
              <p data-reveal="" data-delay="220" style={{ margin: "clamp(20px,2.2vw,28px) 0 0", color: "rgba(247,247,244,0.86)", fontSize: "clamp(15px,1.35vw,17.5px)", lineHeight: "1.7", maxWidth: "60ch", textShadow: "0 2px 20px rgba(11,13,12,0.85)" }}>Un constructeur à taille humaine basé à Meximieux. Plans dessinés sur-mesure, contrat CCMI, garantie décennale, et un interlocuteur unique du permis de construire à la remise des clés.</p>
            </div>
          </section>

          {/* SOMMAIRE */}
          <section style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(17,20,18,0.08)", padding: "22px 0" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", display: "flex", flexWrap: "wrap", gap: "10px 26px", alignItems: "center" }}>
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8D948E" }}>Sur cette page</span>
              <a href="#qui-nous-sommes" className="me-link" style={{ textDecoration: "none", color: "#111412", fontSize: "13.5px", fontWeight: "600" }} style-hover="color:#2E5A49;">Qui nous sommes</a>
              <a href="#conception" className="me-link" style={{ textDecoration: "none", color: "#111412", fontSize: "13.5px", fontWeight: "600" }} style-hover="color:#2E5A49;">La conception sur-mesure</a>
              <a href="#technique" className="me-link" style={{ textDecoration: "none", color: "#111412", fontSize: "13.5px", fontWeight: "600" }} style-hover="color:#2E5A49;">Savoir-faire technique</a>
              <a href="#garanties" className="me-link" style={{ textDecoration: "none", color: "#111412", fontSize: "13.5px", fontWeight: "600" }} style-hover="color:#2E5A49;">Garanties &amp; CCMI</a>
              <a href="#echeancier" className="me-link" style={{ textDecoration: "none", color: "#111412", fontSize: "13.5px", fontWeight: "600" }} style-hover="color:#2E5A49;">Échéancier de paiement</a>
              <a href="#delais" className="me-link" style={{ textDecoration: "none", color: "#111412", fontSize: "13.5px", fontWeight: "600" }} style-hover="color:#2E5A49;">Délais &amp; SAV</a>
            </div>
          </section>

          {/* QUI NOUS SOMMES */}
          <section id="qui-nous-sommes" style={{ background: "#F7F7F4", padding: "clamp(80px,11vw,150px) 0", scrollMarginTop: "90px" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div className="me-split" style={{ gap: "clamp(40px,6vw,96px)", alignItems: "start" }}>
                <div>
                  <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Qui nous sommes</span></div>
                  <h2 data-reveal="" data-delay="80" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,3.8vw,52px)", lineHeight: "1.06", color: "#111412", maxWidth: "16ch" }}>Un constructeur de l'Ain, depuis 2019.</h2>
                </div>
                <div>
                  <p data-reveal="" style={{ margin: "0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.8" }}>Fondée en 2019 et basée à Meximieux (01800), Maisons d'Excellence est une SARL spécialisée dans la construction de maisons individuelles sur-mesure. Dirigée par <strong style={{ color: "#111412", fontWeight: "600" }}>Aykut Atak</strong>, l'entreprise réunit une équipe de 3 à 5 personnes et un réseau d'artisans locaux : chaque chantier est connu dans le détail par celui qui vous répond au téléphone.</p>
                  <p data-reveal="" data-delay="100" style={{ margin: "20px 0 0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.8" }}>Nous construisons dans un rayon d'environ 30 km autour de Meximieux, Bourg-en-Bresse et Ambérieu-en-Bugey. Maisons traditionnelles ou contemporaines, toujours dessinées sur-mesure, conformes à la RE2020, et bâties dans le cadre d'un CCMI à prix et délais convenus.</p>
                  <div className="me-g3" data-reveal="" data-delay="180" style={{ gap: "1px", marginTop: "34px", background: "rgba(17,20,18,0.12)", borderRadius: "6px", overflow: "hidden" }}>
                    <div style={{ background: "#FFFFFF", padding: "24px 22px" }}><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "34px", lineHeight: "1", color: "#111412" }}>2019</div><div style={{ marginTop: "8px", fontSize: "12.5px", color: "#77807A" }}>SARL créée dans l'Ain</div></div>
                    <div style={{ background: "#FFFFFF", padding: "24px 22px" }}><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "34px", lineHeight: "1", color: "#111412" }}>3–5</div><div style={{ marginTop: "8px", fontSize: "12.5px", color: "#77807A" }}>Personnes, un seul contact</div></div>
                    <div style={{ background: "#FFFFFF", padding: "24px 22px" }}><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "34px", lineHeight: "1", color: "#111412" }}>30 km</div><div style={{ marginTop: "8px", fontSize: "12.5px", color: "#77807A" }}>Rayon d'intervention</div></div>
                  </div>
                </div>
              </div>

              <div className="me-split" style={{ gap: "clamp(32px,5vw,72px)", alignItems: "center", marginTop: "clamp(56px,8vw,110px)" }}>
                <div data-reveal="" className="me-card" style={{ background: "#111412", borderRadius: "8px", padding: "clamp(32px,4vw,56px)", color: "#F7F7F4" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <div style={{ width: "74px", height: "74px", borderRadius: "50%", background: "#2E5A49", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontSize: "30px", color: "#fff", flex: "none" }}>AA</div>
                    <div><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "30px", fontWeight: "400", lineHeight: "1" }}>Aykut Atak</div><div style={{ marginTop: "7px", fontSize: "12.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9CC4B2" }}>Gérant fondateur</div></div>
                  </div>
                  <p style={{ margin: "26px 0 0", color: "rgba(247,247,244,0.74)", fontSize: "15px", lineHeight: "1.75" }}>« Construire une maison, c'est accompagner une famille dans l'un des projets les plus importants de sa vie. Je préfère dire non à un projet que promettre un délai que je ne pourrai pas tenir. C'est aussi pour cela que nous restons une petite structure. »</p>
                </div>
                <div data-reveal="" data-delay="120">
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Une équipe à taille humaine</span></div>
                  <p style={{ margin: "0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.8" }}>Nous ne sous-traitons pas la relation client. Le gérant suit personnellement chaque chantier, avec les mêmes artisans d'un projet à l'autre : maçons, charpentiers, couvreurs, électriciens et plombiers de l'Ain, connus et éprouvés. Cette continuité est ce qui nous permet de tenir à la fois la qualité d'exécution et les délais.</p>
                  <div className="me-g2" style={{ gap: "14px", marginTop: "28px" }}>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><span style={{ color: "#2E5A49", fontSize: "18px", lineHeight: "1.3" }}>✓</span><span style={{ fontSize: "14.5px", color: "#333834" }}>Artisans locaux fidélisés</span></div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><span style={{ color: "#2E5A49", fontSize: "18px", lineHeight: "1.3" }}>✓</span><span style={{ fontSize: "14.5px", color: "#333834" }}>Un interlocuteur unique</span></div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><span style={{ color: "#2E5A49", fontSize: "18px", lineHeight: "1.3" }}>✓</span><span style={{ fontSize: "14.5px", color: "#333834" }}>Plans dessinés en interne</span></div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><span style={{ color: "#2E5A49", fontSize: "18px", lineHeight: "1.3" }}>✓</span><span style={{ fontSize: "14.5px", color: "#333834" }}>5,0 / 5 sur {avisCount} avis Google</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONCEPTION SUR-MESURE */}
          <section id="conception" style={{ background: "#EDEDE7", padding: "clamp(80px,11vw,150px) 0", scrollMarginTop: "90px" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div style={{ maxWidth: "62ch" }}>
                <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>La conception sur-mesure</span></div>
                <h2 data-reveal="" data-delay="80" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(32px,4.4vw,58px)", lineHeight: "1.04", color: "#111412" }}>Tout commence par une conversation, pas par un catalogue.</h2>
                <p data-reveal="" data-delay="160" style={{ margin: "22px 0 0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.75" }}>C'est l'étape que personne ne raconte, et c'est pourtant celle qui décide de tout. Vous venez au bureau avec votre projet — et souvent votre terrain. Nous écoutons, nous questionnons, puis nous dessinons. Aucun plan type, aucun modèle à adapter.</p>
              </div>
              <div className="me-g3" style={{ gap: "clamp(16px,2vw,26px)", marginTop: "clamp(44px,6vw,72px)" }}>
                <div data-reveal="" className="me-card" style={{ background: "#FFFFFF", borderRadius: "10px", padding: "clamp(28px,3vw,40px)" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "44px", color: "#9CC4B2", lineHeight: "1" }}>01</div>
                  <h3 style={{ margin: "16px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "27px", color: "#111412" }}>On écoute votre projet</h3>
                  <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Une heure et demie au bureau, sans engagement : votre terrain, votre budget, le nombre de chambres, la place de la cuisine, la façon dont vous vivez le week-end. Nous disons franchement ce qui est réalisable et à quel prix.</p>
                </div>
                <div data-reveal="" data-delay="120" className="me-card" style={{ background: "#FFFFFF", borderRadius: "10px", padding: "clamp(28px,3vw,40px)" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "44px", color: "#9CC4B2", lineHeight: "1" }}>02</div>
                  <h3 style={{ margin: "16px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "27px", color: "#111412" }}>On dessine vos plans</h3>
                  <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Des plans entièrement sur-mesure, étudiés pour votre parcelle : orientation des pièces de vie, implantation, confort d'été, circulation. Deux à trois allers-retours pour ajuster, autant qu'il faut pour que le plan soit juste.</p>
                </div>
                <div data-reveal="" data-delay="240" className="me-card" style={{ background: "#FFFFFF", borderRadius: "10px", padding: "clamp(28px,3vw,40px)" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "44px", color: "#9CC4B2", lineHeight: "1" }}>03</div>
                  <h3 style={{ margin: "16px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "27px", color: "#111412" }}>On chiffre et on s'engage</h3>
                  <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Le plan validé devient un CCMI : descriptif détaillé, prix ferme, délai contractuel. À partir de cette signature, le budget ne bouge plus — et vous savez exactement ce qui est inclus, ligne par ligne.</p>
                </div>
              </div>
              <div data-reveal="" style={{ marginTop: "clamp(36px,4vw,52px)", display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <a href="#contact" onClick={goContact} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "17px 32px", borderRadius: "100px", background: "#111412", color: "#F7F7F4", fontSize: "14px", fontWeight: "600" }} style-hover="background:#1C201D;transform:translateY(-3px);">Prendre le premier rendez-vous →</a>
                <span style={{ fontSize: "13.5px", color: "#77807A" }}>Gratuit, au bureau de Meximieux, sans engagement.</span>
              </div>
            </div>
          </section>

          {/* SAVOIR-FAIRE TECHNIQUE */}
          <section id="technique" style={{ background: "#F7F7F4", padding: "clamp(80px,11vw,150px) 0", scrollMarginTop: "90px" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div style={{ maxWidth: "62ch" }}>
                <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Savoir-faire technique</span></div>
                <h2 data-reveal="" data-delay="80" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(32px,4.4vw,58px)", lineHeight: "1.04", color: "#111412" }}>Les choix de construction, expliqués sans jargon.</h2>
                <p data-reveal="" data-delay="160" style={{ margin: "22px 0 0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.75" }}>Nous construisons en maçonnerie traditionnelle : brique de terre cuite ou béton cellulaire, charpente bois, vide sanitaire quand le terrain le justifie. Voici ce que chaque option change concrètement pour vous.</p>
              </div>

              <div className="me-g2" style={{ gap: "clamp(16px,2vw,26px)", marginTop: "clamp(44px,6vw,70px)" }}>
                <div data-reveal="" className="me-card" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", overflow: "hidden" }}>
                  <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}><img className="me-zoom" src="/photos/chantier-gros-oeuvre-brique.png" alt="Élévation des murs en brique sur un chantier de maison individuelle dans l'Ain" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
                  <div style={{ padding: "clamp(26px,3vw,38px)" }}>
                    <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "29px", color: "#111412" }}>Brique ou béton cellulaire</h3>
                    <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>La brique de terre cuite à alvéoles offre une bonne inertie et un excellent confort d'été ; le béton cellulaire (siporex) est plus léger, très isolant et rapide à mettre en œuvre. Les deux sont nettement plus performants que le parpaing traditionnel, qui exige davantage d'isolant rapporté pour atteindre la RE2020. Le choix se décide sur votre plan, votre terrain et votre budget — pas par habitude d'entreprise.</p>
                  </div>
                </div>
                <div data-reveal="" data-delay="120" className="me-card" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", overflow: "hidden" }}>
                  <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}><img className="me-zoom" src="/photos/charpente-fermette-bois.jpg" alt="Charpente en bois posée sur une maison neuve : entretoises, contreventement et pannes" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
                  <div style={{ padding: "clamp(26px,3vw,38px)" }}>
                    <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "29px", color: "#111412" }}>Charpente traditionnelle ou fermette</h3>
                    <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>La charpente traditionnelle libère les combles : elle permet de les aménager plus tard, ou dès la construction, et supporte tous les types de couverture. La fermette industrielle coûte moins cher mais encombre le volume sous toiture. Si vous pensez aménager un jour, la traditionnelle est presque toujours le bon calcul.</p>
                  </div>
                </div>
              </div>

              <div className="me-g3" style={{ gap: "clamp(16px,1.8vw,26px)", marginTop: "clamp(16px,2vw,26px)" }}>
                <div data-reveal="" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", padding: "clamp(26px,3vw,36px)" }}>
                  <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "26px", color: "#111412" }}>Le vide sanitaire</h3>
                  <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Un espace ventilé entre le sol et le plancher bas : il isole la maison de l'humidité du terrain, protège des mouvements d'argile et rend les réseaux accessibles. Sur les sols de la Plaine de l'Ain, nous le recommandons dans la grande majorité des cas.</p>
                </div>
                <div data-reveal="" data-delay="110" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", padding: "clamp(26px,3vw,36px)" }}>
                  <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "26px", color: "#111412" }}>La conformité RE2020</h3>
                  <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Chaque maison fait l'objet d'une étude thermique : consommation, empreinte carbone des matériaux et confort d'été. Pompe à chaleur, isolation continue, orientation et protections solaires sont dimensionnées ensemble, dès le plan.</p>
                </div>
                <div data-reveal="" data-delay="220" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", padding: "clamp(26px,3vw,36px)" }}>
                  <h3 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "26px", color: "#111412" }}>Plain-pied ou étage</h3>
                  <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.7" }}>Le plain-pied coûte 5 à 10 % de plus au mètre carré et consomme plus de terrain ; l'étage libère le jardin et réduit l'emprise. L'arbitrage se fait toujours terrain et construction ensemble, avec les chiffres sous les yeux.</p>
                </div>
              </div>
            </div>
          </section>

          {/* GARANTIES / CCMI */}
          <section id="garanties" style={{ background: "#111412", color: "#F7F7F4", padding: "clamp(80px,11vw,150px) 0", scrollMarginTop: "90px" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div style={{ maxWidth: "64ch" }}>
                <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}><span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span><span style={{ color: "#9CC4B2", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Garanties &amp; CCMI</span></div>
                <h2 data-reveal="" data-delay="80" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(32px,4.4vw,58px)", lineHeight: "1.04" }}>Ce que votre contrat protège, concrètement.</h2>
                <p data-reveal="" data-delay="160" style={{ margin: "22px 0 0", color: "rgba(247,247,244,0.74)", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.75" }}>Le Contrat de Construction de Maison Individuelle n'est pas une formalité administrative : c'est le document qui encadre le prix, les délais, les paiements et les recours. Sur un projet à 250 000 € et plus, il mérite d'être lu — et expliqué.</p>
              </div>

              <div className="me-g2" style={{ gap: "clamp(16px,2vw,26px)", marginTop: "clamp(44px,6vw,70px)" }}>
                <div data-reveal="" style={{ background: "#211e19", border: "1px solid rgba(247,247,244,0.1)", borderRadius: "10px", padding: "clamp(28px,3.4vw,44px)" }}>
                  <div style={{ color: "#9CC4B2", fontSize: "11.5px", letterSpacing: "0.2em", textTransform: "uppercase" }}>Le contrat</div>
                  <h3 style={{ margin: "14px 0 0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "31px" }}>Le CCMI avec fourniture de plan</h3>
                  <p style={{ margin: "14px 0 0", color: "rgba(247,247,244,0.7)", fontSize: "14.5px", lineHeight: "1.75" }}>Il fixe un prix ferme et définitif, un délai d'exécution, un descriptif détaillé des prestations et la liste de ce qui reste à votre charge. Il vous ouvre un délai de réflexion de dix jours après réception, et il interdit au constructeur de réclamer un centime en dehors de l'échéancier légal.</p>
                  <div style={{ marginTop: "22px", display: "flex", flexDirection: "column", gap: "11px", fontSize: "14px", color: "rgba(247,247,244,0.78)" }}>
                    <span style={{ display: "flex", gap: "11px" }}><span style={{ color: "#9CC4B2" }}>✓</span> Prix ferme, révisable seulement selon une clause encadrée</span>
                    <span style={{ display: "flex", gap: "11px" }}><span style={{ color: "#9CC4B2" }}>✓</span> Délai de livraison contractuel, avec pénalités de retard</span>
                    <span style={{ display: "flex", gap: "11px" }}><span style={{ color: "#9CC4B2" }}>✓</span> Descriptif détaillé annexé, poste par poste</span>
                    <span style={{ display: "flex", gap: "11px" }}><span style={{ color: "#9CC4B2" }}>✓</span> Dix jours de réflexion avant tout engagement</span>
                  </div>
                </div>
                <div data-reveal="" data-delay="120" style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(247,247,244,0.14)", borderRadius: "10px", overflow: "hidden" }}>
                  <div style={{ background: "#211e19", padding: "24px 28px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}><span style={{ color: "#9CC4B2", fontFamily: "'Cormorant Garamond',serif", fontSize: "26px" }}>10 ans</span><h3 style={{ margin: "0", fontSize: "16px", fontWeight: "600" }}>Garantie décennale</h3></div>
                    <p style={{ margin: "9px 0 0", color: "rgba(247,247,244,0.62)", fontSize: "13.5px", lineHeight: "1.6" }}>Couvre tout dommage compromettant la solidité de la maison ou la rendant inhabitable : structure, toiture, étanchéité. Notre attestation est annexée au contrat.</p>
                  </div>
                  <div style={{ background: "#211e19", padding: "24px 28px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}><span style={{ color: "#9CC4B2", fontFamily: "'Cormorant Garamond',serif", fontSize: "26px" }}>Immédiat</span><h3 style={{ margin: "0", fontSize: "16px", fontWeight: "600" }}>Assurance dommages-ouvrage</h3></div>
                    <p style={{ margin: "9px 0 0", color: "rgba(247,247,244,0.62)", fontSize: "13.5px", lineHeight: "1.6" }}>Elle finance la réparation sans attendre qu'un tribunal désigne un responsable. C'est elle qui évite les années de procédure en cas de désordre grave.</p>
                  </div>
                  <div style={{ background: "#211e19", padding: "24px 28px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}><span style={{ color: "#9CC4B2", fontFamily: "'Cormorant Garamond',serif", fontSize: "26px" }}>Livraison</span><h3 style={{ margin: "0", fontSize: "16px", fontWeight: "600" }}>Garantie de livraison à prix et délais convenus</h3></div>
                    <p style={{ margin: "9px 0 0", color: "rgba(247,247,244,0.62)", fontSize: "13.5px", lineHeight: "1.6" }}>Un établissement financier garantit l'achèvement de votre maison au prix prévu, même en cas de défaillance de l'entreprise. Demandez toujours l'attestation.</p>
                  </div>
                  <div style={{ background: "#211e19", padding: "24px 28px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}><span style={{ color: "#9CC4B2", fontFamily: "'Cormorant Garamond',serif", fontSize: "26px" }}>1 &amp; 2 ans</span><h3 style={{ margin: "0", fontSize: "16px", fontWeight: "600" }}>Parfait achèvement et bon fonctionnement</h3></div>
                    <p style={{ margin: "9px 0 0", color: "rgba(247,247,244,0.62)", fontSize: "13.5px", lineHeight: "1.6" }}>Un an pour faire reprendre tout désordre signalé après la réception ; deux ans sur les équipements dissociables (volets, robinetterie, chauffage).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ÉCHÉANCIER */}
          <section id="echeancier" style={{ background: "#EDEDE7", padding: "clamp(80px,11vw,150px) 0", scrollMarginTop: "90px" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div className="me-split" style={{ gap: "clamp(36px,5vw,80px)", alignItems: "start" }}>
                <div>
                  <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Échéancier de paiement</span></div>
                  <h2 data-reveal="" data-delay="80" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(32px,4.4vw,58px)", lineHeight: "1.04", color: "#111412", maxWidth: "20ch" }}>Vous payez au fur et à mesure du chantier. Jamais en avance.</h2>
                  <p data-reveal="" data-delay="160" style={{ margin: "22px 0 0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.75", maxWidth: "52ch" }}>C'est le point que presque personne n'explique, et c'est pourtant celui qui rassure le plus. Dans un CCMI, les appels de fonds sont <strong style={{ color: "#111412", fontWeight: "600" }}>plafonnés par le Code de la construction</strong> et liés à une étape de chantier réellement achevée. Si l'étape n'est pas atteinte, la somme n'est pas due. Votre banque débloque les fonds sur ce constat.</p>
                  <div data-reveal="" data-delay="220" style={{ marginTop: "28px", background: "#FFFFFF", borderLeft: "0", border: "1px solid rgba(17,20,18,0.1)", borderRadius: "8px", padding: "24px 26px", maxWidth: "52ch" }}>
                    <div style={{ fontSize: "11.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#2E5A49" }}>À vérifier chez tout constructeur</div>
                    <p style={{ margin: "10px 0 0", color: "#4E534E", fontSize: "14px", lineHeight: "1.7" }}>Un professionnel qui demande un versement supérieur à ces plafonds, ou avant l'étape correspondante, est hors la loi. Ces pourcentages sont cumulés — ils ne s'additionnent pas.</p>
                  </div>
                </div>
                <div data-reveal="" data-delay="120" style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(17,20,18,0.1)", borderRadius: "10px", overflow: "hidden" }}>
                  {(echeancier ?? []).map((e, i) => (
                    <div style={{ background: "#FFFFFF", padding: "20px 24px", display: "flex", gap: "20px", alignItems: "flex-start" }} key={i}>
                      <span style={{ flex: "none", width: "62px", fontFamily: "'Cormorant Garamond',serif", fontSize: "28px", lineHeight: "1.1", color: "#2E5A49" }}>{e.pct}</span>
                      <span><span style={{ display: "block", fontSize: "15px", fontWeight: "600", color: "#111412" }}>{e.t}</span><span style={{ display: "block", marginTop: "6px", fontSize: "13.5px", color: "#77807A", lineHeight: "1.6" }}>{e.d}</span></span>
                    </div>
                  ))}
                </div>
              </div>
              <p data-reveal="" style={{ margin: "clamp(28px,3vw,40px) 0 0", fontSize: "12.5px", color: "#8D948E", lineHeight: "1.6", maxWidth: "80ch" }}>Plafonds fixés par les articles L. 231-1 et suivants du Code de la construction et de l'habitation, pour un CCMI avec fourniture de plan. <a href="#blog-echeancier-ccmi" onClick={goArticleEch} style={{ color: "#2E5A49", fontWeight: "600" }}>Lire l'article détaillé →</a></p>
            </div>
          </section>

          {/* DÉLAIS & SAV */}
          <section id="delais" style={{ background: "#F7F7F4", padding: "clamp(80px,11vw,150px) 0", scrollMarginTop: "90px" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div style={{ maxWidth: "60ch" }}>
                <div data-reveal="" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}><span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span><span style={{ color: "#2E5A49", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Nos engagements de délai et de SAV</span></div>
                <h2 data-reveal="" data-delay="80" style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(32px,4.4vw,58px)", lineHeight: "1.04", color: "#111412" }}>Un délai écrit, et quelqu'un qui répond après la livraison.</h2>
                <p data-reveal="" data-delay="160" style={{ margin: "22px 0 0", color: "#4E534E", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.75" }}>Les deux reproches les plus fréquents faits aux constructeurs de la région sont les retards de chantier et le service après-vente injoignable. Nous préférons prendre des engagements chiffrés plutôt que promettre « du sérieux ».</p>
              </div>
              <div className="me-g4" style={{ gap: "clamp(16px,1.8vw,24px)", marginTop: "clamp(44px,6vw,70px)" }}>
                <div data-reveal="" className="me-card" style={{ background: "#111412", color: "#F7F7F4", borderRadius: "10px", padding: "clamp(26px,3vw,36px)" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(40px,4.4vw,58px)", fontWeight: "300", lineHeight: "1", color: "#9CC4B2" }}>12 mois</div>
                  <h3 style={{ margin: "16px 0 0", fontSize: "15.5px", fontWeight: "600" }}>Délai de chantier contractuel</h3>
                  <p style={{ margin: "9px 0 0", color: "rgba(247,247,244,0.62)", fontSize: "13.5px", lineHeight: "1.6" }}>Délai moyen d'un chantier standard, inscrit au CCMI avec pénalités de retard. Nous n'ouvrons pas plus de chantiers que nous pouvons suivre.</p>
                </div>
                <div data-reveal="" data-delay="110" className="me-card" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", padding: "clamp(26px,3vw,36px)" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(40px,4.4vw,58px)", fontWeight: "300", lineHeight: "1", color: "#2E5A49" }}>48 h</div>
                  <h3 style={{ margin: "16px 0 0", fontSize: "15.5px", fontWeight: "600", color: "#111412" }}>Réponse SAV garantie</h3>
                  <p style={{ margin: "9px 0 0", color: "#77807A", fontSize: "13.5px", lineHeight: "1.6" }}>Toute demande après livraison reçoit une réponse sous deux jours ouvrés, par téléphone ou WhatsApp — pas un accusé de réception automatique.</p>
                </div>
                <div data-reveal="" data-delay="220" className="me-card" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", padding: "clamp(26px,3vw,36px)" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(40px,4.4vw,58px)", fontWeight: "300", lineHeight: "1", color: "#2E5A49" }}>15 j</div>
                  <h3 style={{ margin: "16px 0 0", fontSize: "15.5px", fontWeight: "600", color: "#111412" }}>Intervention sur reprise</h3>
                  <p style={{ margin: "9px 0 0", color: "#77807A", fontSize: "13.5px", lineHeight: "1.6" }}>Délai visé pour intervenir sur une reprise signalée pendant l'année de parfait achèvement, hors pièce à commander.</p>
                </div>
                <div data-reveal="" data-delay="330" className="me-card" style={{ background: "#FFFFFF", border: "1px solid rgba(17,20,18,0.08)", borderRadius: "10px", padding: "clamp(26px,3vw,36px)" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(40px,4.4vw,58px)", fontWeight: "300", lineHeight: "1", color: "#2E5A49" }}>1 seul</div>
                  <h3 style={{ margin: "16px 0 0", fontSize: "15.5px", fontWeight: "600", color: "#111412" }}>Interlocuteur, du plan aux clés</h3>
                  <p style={{ margin: "9px 0 0", color: "#77807A", fontSize: "13.5px", lineHeight: "1.6" }}>La même personne suit votre dossier du premier rendez-vous à la dernière reprise. Pas de service commercial qui disparaît après la signature.</p>
                </div>
              </div>
              <div data-reveal="" style={{ marginTop: "clamp(40px,5vw,60px)", display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <a href="#estimation" onClick={goEstimation} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "17px 32px", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontSize: "14px", fontWeight: "600", boxShadow: "0 22px 44px -22px rgba(46,90,73,1)" }} style-hover="background:#3B7059;transform:translateY(-3px);">Estimer mon projet →</a>
                <a href="#realisations" onClick={goRealisations} className="me-btn" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", padding: "17px 32px", borderRadius: "100px", background: "transparent", color: "#111412", fontSize: "14px", fontWeight: "600", border: "1px solid rgba(17,20,18,0.28)" }} style-hover="border-color:#2E5A49;color:#2E5A49;transform:translateY(-3px);">Voir nos réalisations</a>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
