'use client';

import type { Vals } from '@/components/site-vals';

/**
 * SiteHeader — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function SiteHeader(v: Vals) {
  const { closeMenu, goAccueil, goBlog, goContact, goEntreprise, goEstimation, goInvestisseurs, goModeles, goRealisations, goRenovation, goTerrains, goZone, menuOpen, scrollTop, terrainsInNav, toggleMenu } = v;
  return (
    <>
      <header data-header="" style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "120", color: "#F7F7F4", borderBottom: "1px solid transparent", transition: "background .5s,color .4s,box-shadow .5s,border-color .5s" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(17px,2vw,26px) clamp(20px,5vw,64px)", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "clamp(18px,3.4vw,48px)" }}>
            <a href="#accueil" onClick={goAccueil} data-navitem="" style={{ display: "flex", alignItems: "center", lineHeight: "1", textDecoration: "none", color: "inherit", justifySelf: "start" }}>
              <span className="me-hdr-mark" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: "500", fontSize: "clamp(18px,2vw,25px)", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>MAISONS D'EXCELLENCE</span>
            </a>
            <nav className="me-desk-nav" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(12px,1.6vw,26px)" }}>
              <span aria-hidden="true" style={{ width: "1px", height: "26px", background: "currentColor", opacity: "0.22", marginRight: "clamp(2px,1vw,14px)" }}></span>
              <a href="#modeles" onClick={goModeles} data-navitem="" className="me-navitem" style={{ textDecoration: "none", color: "rgba(247,247,244,0.86)", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.13em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Nos modèles</a>
              <a href="#realisations" onClick={goRealisations} data-navitem="" className="me-navitem" style={{ textDecoration: "none", color: "rgba(247,247,244,0.86)", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.13em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Nos réalisations</a>
              <a href="#entreprise" onClick={goEntreprise} data-navitem="" className="me-navitem" style={{ textDecoration: "none", color: "rgba(247,247,244,0.86)", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.13em", textTransform: "uppercase", whiteSpace: "nowrap" }}>L'entreprise</a>
              {(terrainsInNav) ? (<>
                <a href="#terrains" onClick={goTerrains} data-navitem="" className="me-navitem" style={{ textDecoration: "none", color: "rgba(247,247,244,0.86)", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.13em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Terrains</a>
              </>) : null}
              <a href="#contact" onClick={goContact} data-navitem="" className="me-navitem" style={{ textDecoration: "none", color: "rgba(247,247,244,0.86)", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.13em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Contact</a>
            </nav>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "clamp(12px,1.6vw,22px)" }}>
              <a href="#estimation" onClick={goEstimation} className="me-btn me-hdr-cta" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "9px", padding: "13px 24px", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontSize: "11.5px", fontWeight: "700", letterSpacing: "0.11em", textTransform: "uppercase", whiteSpace: "nowrap", flex: "none", boxShadow: "0 10px 22px -14px rgba(46,90,73,.55)" }} style-hover="background:#3B7059;transform:translateY(-3px);box-shadow:0 18px 36px -16px rgba(46,90,73,1);">Estimation en ligne</a>
              <button className="me-burger" onClick={toggleMenu} aria-label="Menu" style={{ display: "none", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", border: "1px solid currentColor", borderRadius: "100px", background: "transparent", color: "inherit", cursor: "pointer" }}>
              <span style={{ display: "block", width: "18px", height: "10px", borderTop: "1.5px solid currentColor", borderBottom: "1.5px solid currentColor" }}></span>
              </button>
            </div>
          </div>
        </header>

        {/* ===================== MOBILE MENU ===================== */}
        {(menuOpen) ? (<>
          <div onClick={closeMenu} style={{ position: "fixed", inset: "0", zIndex: "200", background: "rgba(11,13,12,0.97)", backdropFilter: "blur(8px)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px clamp(28px,8vw,64px)", overflowY: "auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <a href="#modeles" onClick={goModeles} style={{ textDecoration: "none", color: "#F7F7F4", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,9vw,50px)", lineHeight: "1.18", borderBottom: "1px solid rgba(247,247,244,0.12)", padding: "8px 0" }}>Nos modèles</a>
              <a href="#realisations" onClick={goRealisations} style={{ textDecoration: "none", color: "#F7F7F4", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,9vw,50px)", lineHeight: "1.18", borderBottom: "1px solid rgba(247,247,244,0.12)", padding: "8px 0" }}>Nos réalisations</a>
              <a href="#entreprise" onClick={goEntreprise} style={{ textDecoration: "none", color: "#F7F7F4", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,9vw,50px)", lineHeight: "1.18", borderBottom: "1px solid rgba(247,247,244,0.12)", padding: "8px 0" }}>L'entreprise</a>
              <a href="#estimation" onClick={goEstimation} style={{ textDecoration: "none", color: "#9CC4B2", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(30px,9vw,50px)", lineHeight: "1.18", borderBottom: "1px solid rgba(247,247,244,0.12)", padding: "8px 0" }}>Estimer mon projet</a>
              <a href="#terrains" onClick={goTerrains} style={{ textDecoration: "none", color: "#F7F7F4", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,9vw,50px)", lineHeight: "1.18", borderBottom: "1px solid rgba(247,247,244,0.12)", padding: "8px 0" }}>Terrains</a>
              <a href="#contact" onClick={goContact} style={{ textDecoration: "none", color: "#F7F7F4", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(30px,9vw,50px)", lineHeight: "1.18", padding: "8px 0" }}>Contact</a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px 26px", marginTop: "30px" }}>
              <a href="#investisseurs" onClick={goInvestisseurs} style={{ textDecoration: "none", color: "rgba(247,247,244,0.62)", fontSize: "14px" }}>Investisseurs</a>
              <a href="#renovation" onClick={goRenovation} style={{ textDecoration: "none", color: "rgba(247,247,244,0.62)", fontSize: "14px" }}>Rénovation &amp; extension</a>
              <a href="#blog" onClick={goBlog} style={{ textDecoration: "none", color: "rgba(247,247,244,0.62)", fontSize: "14px" }}>Blog</a>
              <a href="#zone" onClick={goZone} style={{ textDecoration: "none", color: "rgba(247,247,244,0.62)", fontSize: "14px" }}>Zone d'intervention</a>
            </div>
            <a href="tel:+33474346643" style={{ marginTop: "26px", textDecoration: "none", color: "rgba(247,247,244,0.7)", fontSize: "14px", letterSpacing: "0.04em" }}>✆ 04 74 34 66 43 — Meximieux (01)</a>
          </div>
        </>) : null}

        {/* ===================== WHATSAPP ===================== */}
        <a href="https://wa.me/33615191647?text=Bonjour%2C%20je%20vous%20%C3%A9cris%20depuis%20votre%20site.%20J'aimerais%20%C3%A9changer%20sur%20mon%20projet%20de%20construction." target="_blank" rel="noopener" aria-label="Écrire sur WhatsApp au 06 15 19 16 47" title="WhatsApp · 06 15 19 16 47" className="me-wa" style={{ position: "fixed", right: "clamp(16px,2vw,28px)", bottom: "clamp(16px,2vw,28px)", zIndex: "130", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "60px", height: "60px", borderRadius: "50%", background: "#25D366", color: "#fff", textDecoration: "none", boxShadow: "0 18px 40px -14px rgba(11,13,12,.55)", transition: "transform .35s cubic-bezier(.16,.84,.44,1)" }}>
          <svg viewBox="0 0 24 24" width="32" height="32" fill="#fff" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"></path></svg>
        </a>
        <button data-totop="" onClick={scrollTop} className="me-totop" aria-label="Revenir en haut de la page" style={{ position: "fixed", right: "clamp(16px,2vw,28px)", bottom: "calc(clamp(16px,2vw,28px) + 72px)", zIndex: "129", width: "46px", height: "46px", borderRadius: "50%", border: "1px solid rgba(247,247,244,0.22)", background: "#111412", color: "#F7F7F4", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: "0", pointerEvents: "none", transform: "translateY(10px)", boxShadow: "0 14px 30px -14px rgba(11,13,12,.6)" }}>
          <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 13V3M3.5 7.5 8 3l4.5 4.5"></path></svg>
        </button>

        {/* ===================== ACCUEIL ===================== */}
    </>
  );
}
