'use client';

import type { Vals } from '@/components/site-vals';

/**
 * Mentions — balisage repris tel quel de la maquette Claude Design.
 * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds
 * sont identiques au fichier de référence dans design/.
 */
export default function Mentions(v: Vals) {
  return (
    <>
      <main data-screen-label="Mentions légales">
          <section style={{ background: "#111412", color: "#F7F7F4", padding: "clamp(106px,11vw,130px) 0 clamp(30px,3.6vw,44px)" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}><span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span><span style={{ color: "#9CC4B2", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Informations légales</span></div>
              <h1 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(36px,5.4vw,68px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>Mentions légales</h1>
            </div>
          </section>
          <section style={{ background: "#F7F7F4", padding: "clamp(48px,6vw,80px) 0 clamp(72px,9vw,120px)" }}>
            <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", display: "flex", flexDirection: "column", gap: "clamp(28px,3.4vw,42px)" }}>
              <div>
                <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.6vw,32px)", color: "#111412" }}>Éditeur du site</h2>
                <p style={{ margin: "12px 0 0", color: "#4a443c", fontSize: "16px", lineHeight: "1.85" }}>Maisons d'Excellence Constructeurs de Maisons Individuelles — SARL au capital de 50 000 €. Siège social : 6 rue de Genève, 01800 Meximieux, France. SIREN 844 477 794 — SIRET du siège 844 477 794 00011 — RCS Bourg-en-Bresse, immatriculée le 10 décembre 2018 — TVA intracommunautaire FR04844477794 — code APE 41.20A (construction de maisons individuelles). Gérant et responsable de la publication : Aykut Atak. Téléphone : 04 74 34 66 43 — courriel : aykut.atak@sfr.fr.</p>
              </div>
              <div>
                <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.6vw,32px)", color: "#111412" }}>Assurances et garanties professionnelles</h2>
                <p style={{ margin: "12px 0 0", color: "#4a443c", fontSize: "16px", lineHeight: "1.85" }}>L'entreprise est titulaire d'une assurance de responsabilité civile professionnelle et d'une garantie décennale couvrant les travaux réalisés sur le territoire français. Les attestations en vigueur sont annexées à chaque Contrat de Construction de Maison Individuelle et communiquées sur simple demande.</p>
              </div>
              <div>
                <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.6vw,32px)", color: "#111412" }}>Hébergement</h2>
                <p style={{ margin: "12px 0 0", color: "#4a443c", fontSize: "16px", lineHeight: "1.85" }}>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com.</p>
              </div>
              <div>
                <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.6vw,32px)", color: "#111412" }}>Données personnelles (RGPD)</h2>
                <p style={{ margin: "12px 0 0", color: "#4a443c", fontSize: "16px", lineHeight: "1.85" }}>Les informations transmises via les formulaires de contact et d'estimation sont utilisées uniquement pour répondre à votre demande et établir une proposition. Elles ne sont ni revendues ni transmises à des tiers à des fins commerciales, et sont conservées trois ans à compter du dernier échange. Conformément au règlement européen 2016/679, vous disposez d'un droit d'accès, de rectification, d'opposition et d'effacement : écrivez-nous au 6 rue de Genève, 01800 Meximieux, ou appelez le 04 74 34 66 43.</p>
              </div>
              <div>
                <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.6vw,32px)", color: "#111412" }}>Propriété intellectuelle</h2>
                <p style={{ margin: "12px 0 0", color: "#4a443c", fontSize: "16px", lineHeight: "1.85" }}>L'ensemble des textes, plans et photographies présents sur ce site est protégé. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable. Les photographies d'illustration peuvent représenter des réalisations comparables et non le projet exact décrit.</p>
              </div>
              <div>
                <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "400", fontSize: "clamp(22px,2.6vw,32px)", color: "#111412" }}>Estimations et prix affichés</h2>
                <p style={{ margin: "12px 0 0", color: "#4a443c", fontSize: "16px", lineHeight: "1.85" }}>Les fourchettes issues du simulateur et les prix de terrains présentés sont donnés à titre indicatif et ne constituent pas une offre contractuelle. Seul un Contrat de Construction de Maison Individuelle signé engage l'entreprise sur un prix et un délai.</p>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
