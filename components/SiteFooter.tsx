'use client';

import type { Vals } from '@/components/site-vals';

/**
 * SiteFooter — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function SiteFooter(v: Vals) {
  const { avisCount, goAccueil, goBlog, goContact, goEntreprise, goEstimation, goInvestisseurs, goMentions, goModeles, goRealisations, goRenovation, goTerrains, goZone, year } = v;
  return (
    <>
      <footer style={{ background: "#0B0D0C", color: "rgba(247,247,244,0.7)", padding: "clamp(60px,8vw,96px) 0 0" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
            <div className="me-split" style={{ gap: "clamp(40px,6vw,90px)", paddingBottom: "clamp(48px,6vw,72px)", borderBottom: "1px solid rgba(247,247,244,0.1)" }}>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: "500", fontSize: "26px", letterSpacing: "0.04em", color: "#F7F7F4" }}>MAISONS D'EXCELLENCE</div>
                <div style={{ fontSize: "9px", fontWeight: "600", letterSpacing: "0.36em", color: "#2E5A49", marginTop: "6px" }}>CONSTRUCTEUR DE MAISONS INDIVIDUELLES · AIN</div>
                <p style={{ margin: "22px 0 0", fontSize: "14px", lineHeight: "1.75", maxWidth: "46ch", color: "rgba(247,247,244,0.6)" }}>Constructeur de maisons individuelles sur-mesure à Meximieux : Bourg-en-Bresse, Ambérieu-en-Bugey, Villefranche-sur-Saône, Montluel, Lagnieu, Pérouges. Plans dessinés sur-mesure, CCMI, conformité RE2020.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "26px" }}>
                  <a href="#estimation" onClick={goEstimation} className="me-btn" style={{ display: "inline-flex", alignItems: "center", gap: "9px", textDecoration: "none", padding: "14px 26px", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontSize: "13.5px", fontWeight: "600" }} style-hover="background:#3B7059;transform:translateY(-3px);">Estimer mon projet →</a>
                  <a href="https://wa.me/33615191647?text=Bonjour%2C%20je%20vous%20%C3%A9cris%20depuis%20votre%20site.%20J'aimerais%20%C3%A9changer%20sur%20mon%20projet%20de%20construction." target="_blank" rel="noopener" className="me-btn" style={{ display: "inline-flex", alignItems: "center", gap: "9px", textDecoration: "none", padding: "14px 26px", borderRadius: "100px", background: "transparent", border: "1px solid rgba(247,247,244,0.28)", color: "rgba(247,247,244,0.85)", fontSize: "13.5px", fontWeight: "600" }} style-hover="border-color:#25D366;color:#25D366;transform:translateY(-3px);">✆ WhatsApp</a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "26px" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(247,247,244,0.45)" }}>Suivez-nous</span>
                  <a href="https://www.instagram.com/maisonsdexcellence" target="_blank" rel="noopener" className="me-soc" aria-label="Maisons d'Excellence sur Instagram" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(247,247,244,0.25)", color: "rgba(247,247,244,0.8)", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0m0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0"></path></svg>
                  </a>
                </div>
              </div>
              <div className="me-g3" style={{ gap: "32px" }}>
                <div>
                  <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(247,247,244,0.45)", marginBottom: "18px" }}>Navigation</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
                    <a href="#accueil" onClick={goAccueil} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.72)", fontSize: "14.5px" }} style-hover="color:#9CC4B2;">Accueil</a>
                    <a href="#modeles" onClick={goModeles} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.72)", fontSize: "14.5px" }} style-hover="color:#9CC4B2;">Nos modèles</a>
                    <a href="#realisations" onClick={goRealisations} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.72)", fontSize: "14.5px" }} style-hover="color:#9CC4B2;">Nos réalisations</a>
                    <a href="#entreprise" onClick={goEntreprise} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.72)", fontSize: "14.5px" }} style-hover="color:#9CC4B2;">L'entreprise</a>
                    <a href="#estimation" onClick={goEstimation} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.72)", fontSize: "14.5px" }} style-hover="color:#9CC4B2;">Estimer mon projet</a>
                    <a href="#contact" onClick={goContact} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.72)", fontSize: "14.5px" }} style-hover="color:#9CC4B2;">Contact</a>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(247,247,244,0.45)", marginBottom: "18px" }}>Aller plus loin</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
                    <a href="#terrains" onClick={goTerrains} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.72)", fontSize: "14.5px" }} style-hover="color:#9CC4B2;">Terrains disponibles</a>
                    <a href="#renovation" onClick={goRenovation} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.72)", fontSize: "14.5px" }} style-hover="color:#9CC4B2;">Rénovation &amp; extension</a>
                    <a href="#investisseurs" onClick={goInvestisseurs} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.72)", fontSize: "14.5px" }} style-hover="color:#9CC4B2;">Projets investisseurs</a>
                    <a href="#blog" onClick={goBlog} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.72)", fontSize: "14.5px" }} style-hover="color:#9CC4B2;">Blog</a>
                    <a href="#zone" onClick={goZone} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.72)", fontSize: "14.5px" }} style-hover="color:#9CC4B2;">Zone d'intervention</a>
                    <a href="#mentions" onClick={goMentions} className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.72)", fontSize: "14.5px" }} style-hover="color:#9CC4B2;">Mentions légales</a>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(247,247,244,0.45)", marginBottom: "18px" }}>Contact</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "13px", fontSize: "14.5px", color: "rgba(247,247,244,0.72)", lineHeight: "1.5" }}>
                    <a href="tel:+33474346643" className="me-link" style={{ textDecoration: "none", color: "rgba(247,247,244,0.72)" }} style-hover="color:#9CC4B2;">04 74 34 66 43</a>
                    <span>6 rue de Genève<br />01800 Meximieux</span>
                    <span>Lun – Ven · 8h30 – 18h00</span>
                    <span style={{ color: "#9CC4B2" }}>5,0 / 5 — {avisCount} avis Google</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: "26px 0 40px", display: "flex", flexWrap: "wrap", gap: "8px 18px", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ margin: "0", fontSize: "11.5px", lineHeight: "1.7", color: "rgba(247,247,244,0.4)", maxWidth: "78ch" }}>Maisons d'Excellence Constructeurs de Maisons Individuelles — SARL au capital de 50 000 € — SIREN 844 477 794 — RCS Bourg-en-Bresse — TVA FR04844477794 — Siège : 6 rue de Genève, 01800 Meximieux.</p>
              <p style={{ margin: "0", fontSize: "11.5px", color: "rgba(247,247,244,0.4)" }}>© {year} — Tous droits réservés</p>
            </div>
            <div style={{ padding: "0 0 38px", display: "flex", justifyContent: "center" }}>
              <a href="https://ippyx.com/?utm_source=maisons-excellence&utm_medium=signature&utm_campaign=footer" target="_blank" rel="noopener" className="me-signature" style={{ display: "inline-flex", alignItems: "center", gap: "9px", textDecoration: "none", fontSize: "11.5px", color: "rgba(247,247,244,0.34)", transition: "color .3s ease" }}>
                <svg width="13" height="13.5" viewBox="0 0 26 27" fill="currentColor" aria-hidden="true" style={{ flex: "none" }}>
                  <rect x="0" y="7" width="4" height="4"></rect>
                  <rect x="4" y="11" width="4" height="4"></rect>
                  <rect x="8" y="15" width="4" height="4"></rect>
                  <rect x="12" y="19" width="4" height="4"></rect>
                  <rect x="16" y="23" width="4" height="4"></rect>
                  <rect x="16" y="7" width="4" height="4"></rect>
                  <rect x="12" y="11" width="4" height="4"></rect>
                  <rect x="4" y="19" width="4" height="4"></rect>
                  <rect x="0" y="23" width="4" height="4"></rect>
                  <rect x="21.6" y="1.4" width="4" height="4"></rect>
                </svg>
                <span>Site réalisé par <span style={{ fontWeight: "600", letterSpacing: "0.1em" }}>IPPYX</span></span>
              </a>
            </div>
          </div>
        </footer>
    </>
  );
}
