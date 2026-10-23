import { Fragment } from 'react';
import type { PageLocale } from '@/lib/data/locales';
import { faqJsonLd } from '@/lib/faq-jsonld';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/site';
import { rendreTexte } from '@/lib/texte';

/**
 * Page locale — les trois pôles et les sept communes rattachées.
 *
 * Ces pages ne figurent pas dans la maquette : elles sont écrites à la main,
 * mais reprennent exactement le vocabulaire visuel du site — bandeau sombre,
 * titres en Cormorant, corps crème, surtitre vert à filet, questions
 * fréquentes dans la grille de components/Faq.tsx. Rien de neuf à l'écran.
 *
 * Le gabarit est commun, le contenu ne l'est pas : il vient entièrement de
 * lib/data/locales.ts, où chaque commune a ses propres sections, son propre
 * nombre de sections et ses propres questions. Voir ce fichier pour les règles
 * d'écriture et pour ce qui reste à compléter.
 *
 * Deux sections s'excluent, et c'est ce qui distingue les deux familles de
 * pages : un pôle liste ses communes voisines, une commune renvoie à son pôle.
 *
 * Les paragraphes admettent des liens internes, notés `[texte](/chemin)` et
 * rendus par lib/texte.tsx, comme dans les articles du blog.
 *
 * Le balisage FAQPage est posé ici, et non dans chaque route, pour qu'il soit
 * construit à partir du même tableau que les questions affichées juste en
 * dessous. Une question ajoutée dans les données apparaît donc aux deux
 * endroits, ou à aucun.
 */
const SURTITRE_TRAIT = { width: '42px', height: '1px', background: '#9CC4B2' } as const;

const H2 = {
  margin: '0',
  fontFamily: "'Cormorant Garamond',serif",
  fontWeight: '400',
  fontSize: 'clamp(24px,2.9vw,36px)',
  lineHeight: 1.12,
  color: '#111412',
} as const;

const P = { margin: '14px 0 0', color: '#4a443c', fontSize: '16px', lineHeight: '1.85' } as const;

const SURTITRE_VERT = {
  color: '#2E5A49',
  fontSize: '11.5px',
  fontWeight: '600',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
} as const;

export default function Locale({ page }: { page: PageLocale }) {
  const [titreDebut, titreCommune, titreRepere] = page.h1;

  return (
    <main data-screen-label={page.commune}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(page.faq)) }}
      />

      {/* Bandeau */}
      <section style={{ background: "#111412", color: "#F7F7F4", padding: "clamp(106px,11vw,130px) 0 clamp(34px,4vw,50px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={SURTITRE_TRAIT}></span>
            <span style={{ color: "#9CC4B2", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>{page.surtitre}</span>
          </div>
          {/* Le nom de la commune ne se coupe pas : « Bourg-en-Bresse » rompu
              après un tiret donnait trois lignes de titre sur un téléphone. */}
          <h1 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(34px,5vw,62px)", lineHeight: "1.04", letterSpacing: "-0.02em" }}>
            {titreDebut} <span style={{ whiteSpace: "nowrap" }}>{titreCommune}</span>
            {titreRepere && (
              <>
                , près de <span style={{ whiteSpace: "nowrap" }}>{titreRepere}</span>
              </>
            )}
          </h1>
          {page.intro.map((t, i) => (
            <p key={i} style={{ margin: i === 0 ? "26px 0 0" : "14px 0 0", maxWidth: "62ch", color: "rgba(247,247,244,0.76)", fontSize: "16.5px", lineHeight: "1.8" }}>{t}</p>
          ))}
        </div>
      </section>

      {/* Les sections propres à la commune */}
      <section style={{ background: "#F7F7F4", padding: "clamp(48px,6vw,80px) 0 clamp(40px,5vw,64px)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", display: "flex", flexDirection: "column", gap: "clamp(30px,3.6vw,46px)" }}>
          {page.blocs.map((b, n) => (
            <Fragment key={b.titre}>
              <div>
                <h2 style={H2}>{b.titre}</h2>
                {b.paragraphes.map((t, i) => (
                  <p key={i} style={P}>{rendreTexte(t)}</p>
                ))}
              </div>
              {/* Une photo de réalisation, quand la page en porte une : après
                  la première section, à ses proportions d'origine. */}
              {n === 0 && page.photo && (
                <figure style={{ margin: "0" }}>
                  <img src={page.photo.src} width={page.photo.w} height={page.photo.h} alt={page.photo.alt} loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto", borderRadius: "8px", background: "#EDEDE7" }} />
                </figure>
              )}
            </Fragment>
          ))}
        </div>
      </section>

      {/* Les communes voisines — pages de pôle seulement */}
      {page.voisines && (
        <section style={{ background: "#EDEDE7", padding: "clamp(48px,6vw,80px) 0" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span>
              <span style={SURTITRE_VERT}>Communes voisines</span>
            </div>
            <h2 style={{ ...H2, maxWidth: "24ch" }}>{page.voisines.titre}</h2>
            <p style={{ ...P, maxWidth: "70ch" }}>{rendreTexte(page.voisines.intro)}</p>
            <ul className="me-g3" style={{ listStyle: "none", margin: "clamp(26px,3vw,40px) 0 0", padding: "0", gap: "clamp(14px,1.6vw,22px) clamp(24px,3vw,48px)" }}>
              {page.voisines.liste.map((v) => (
                <li key={v.nom} style={{ paddingTop: "16px", borderTop: "1px solid rgba(17,20,18,0.12)" }}>
                  {/* Les communes qui ont leur page portent un lien, les autres
                      restent du texte : un lien mort serait pire que rien. */}
                  {v.slug ? (
                    <a href={`/${v.slug}`} className="me-link" style={{ display: "block", textDecoration: "none", fontFamily: "'Cormorant Garamond',serif", fontWeight: "500", fontSize: "20px", color: "#2E5A49" }} style-hover="color:#111412;">
                      {v.nom} →
                    </a>
                  ) : (
                    <span style={{ display: "block", fontFamily: "'Cormorant Garamond',serif", fontWeight: "500", fontSize: "20px", color: "#111412" }}>{v.nom}</span>
                  )}
                  <span style={{ display: "block", margin: "6px 0 0", fontSize: "14px", lineHeight: "1.65", color: "#565B56" }}>{v.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Le pôle dont la commune dépend — pages de commune seulement */}
      {page.pole && (
        <section style={{ background: "#EDEDE7", padding: "clamp(44px,5.5vw,72px) 0" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span>
              <span style={SURTITRE_VERT}>Zone de {page.pole.commune}</span>
            </div>
            <p style={{ ...P, margin: "0", maxWidth: "70ch" }}>{rendreTexte(page.pole.texte)}</p>
            <a href={`/${page.pole.slug}`} className="me-btn" style={{ display: "inline-flex", alignItems: "center", gap: "9px", margin: "22px 0 0", textDecoration: "none", padding: "13px 26px", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontSize: "13px", fontWeight: "600" }} style-hover="background:#3B7059;transform:translateY(-3px);">
              Construire à {page.pole.commune} →
            </a>
          </div>
        </section>
      )}

      {/* Questions fréquentes locales — même grille que la FAQ de l'entreprise */}
      <section id="faq" style={{ background: "#F7F7F4", padding: "clamp(56px,7vw,96px) 0", scrollMarginTop: "80px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
            <span style={{ width: "42px", height: "1px", background: "#2E5A49" }}></span>
            <span style={SURTITRE_VERT}>Questions fréquentes</span>
          </div>
          <h2 style={{ ...H2, margin: "0 0 clamp(30px,3.6vw,46px)", fontWeight: "300", fontSize: "clamp(26px,3.4vw,44px)", maxWidth: "24ch" }}>{page.faqTitre}</h2>
          <div className="me-g2" style={{ gap: "clamp(20px,2.4vw,38px) clamp(28px,4vw,72px)" }}>
            {page.faq.map((item) => (
              <div key={item.q} style={{ paddingTop: "22px", borderTop: "1px solid rgba(17,20,18,0.12)" }}>
                <h3 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", fontWeight: "500", fontSize: "clamp(20px,1.9vw,25px)", lineHeight: "1.25", color: "#111412" }}>{item.q}</h3>
                <p style={{ margin: "12px 0 0", color: "#565B56", fontSize: "14.5px", lineHeight: "1.75" }}>{rendreTexte(item.r)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l'estimation */}
      <section style={{ background: "#111412", color: "#F7F7F4", padding: "clamp(56px,7vw,96px) 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", textAlign: "center" }}>
          <h2 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(26px,3.6vw,46px)", lineHeight: "1.1" }}>
            Votre projet à <span style={{ whiteSpace: "nowrap" }}>{page.commune}</span>, chiffré en une minute.
          </h2>
          <p style={{ margin: "18px auto 0", maxWidth: "58ch", color: "rgba(247,247,244,0.72)", fontSize: "16px", lineHeight: "1.8" }}>
            {page.ctaTexte}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginTop: "clamp(26px,3vw,38px)" }}>
            <a href="/#estimation" className="me-btn" style={{ display: "inline-flex", alignItems: "center", gap: "9px", textDecoration: "none", padding: "15px 30px", borderRadius: "100px", background: "#2E5A49", color: "#fff", fontSize: "13.5px", fontWeight: "600" }} style-hover="background:#3B7059;transform:translateY(-3px);">Estimer mon projet →</a>
            <a href="/contact" className="me-btn" style={{ display: "inline-flex", alignItems: "center", gap: "9px", textDecoration: "none", padding: "15px 30px", borderRadius: "100px", background: "transparent", border: "1px solid rgba(247,247,244,0.28)", color: "rgba(247,247,244,0.85)", fontSize: "13.5px", fontWeight: "600" }} style-hover="border-color:#9CC4B2;color:#9CC4B2;transform:translateY(-3px);">Nous écrire</a>
          </div>
          {/* Le numéro est un lien : sur un téléphone, l'invitation ne sert à
              rien si elle oblige à recopier dix chiffres. */}
          <p style={{ margin: "clamp(26px,3vw,38px) 0 0", fontSize: "14px", lineHeight: "1.7", color: "rgba(247,247,244,0.6)" }}>
            {page.invitation}{' '}
            <a href={PHONE_HREF} className="me-link" style={{ color: "#9CC4B2", textDecoration: "none", fontWeight: "600", whiteSpace: "nowrap" }} style-hover="color:#F7F7F4;">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
