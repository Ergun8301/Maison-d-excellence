import type { MouseEvent } from 'react';
import { faqJsonLd } from '@/lib/faq-jsonld';
import { ORGANISATION_JSONLD } from '@/lib/jsonld';
import { SITE_URL } from '@/lib/site';
import { rendreTexte } from '@/lib/texte';
import { ETAPES_EXTENSION, PHOTOS_EXTENSION, PHOTOS_TYPES, SEUILS, TYPES_EXTENSION, URBANISME_OUTILS } from '@/lib/data/extension';
import { LOCALES_EXTENSION, type PageExtensionVille as Donnees } from '@/lib/data/locales-extension';
import { Appel, BTN_VERT, CARTE, CONTENEUR, CREME, Encadre, H2, H3, P, Photo, Surtitre, VERT } from '@/components/PageExtension';

import GuidesExtension from '@/components/GuidesExtension';
/**
 * Page « Extension de maison à <ville> ».
 *
 * Même vocabulaire visuel que la page Extension (components/PageExtension.tsx) :
 * grande photo en tête (classes me-ext-bandeau), sommaire, cartes des types,
 * rangées photo et texte en alternance, seuils d'urbanisme, étapes, accordéon.
 * Le texte vient de lib/data/locales-extension.ts et change d'une ville à
 * l'autre ; seules les données de droit commun (seuils, étapes, titres des
 * types) sont partagées avec la page Extension.
 */

const SOMMAIRE = [
  { id: 'types', titre: 'Les types d’extension' },
  { id: 'local', titre: 'Ce qui change ici' },
  { id: 'urbanisme', titre: 'Déclaration ou permis' },
  { id: 'accompagnement', titre: 'Les étapes' },
  { id: 'faq', titre: 'Questions fréquentes' },
] as const;

export default function PageExtensionVille({
  page,
  goEstimation,
  goContact,
}: {
  page: Donnees;
  goEstimation: (ev?: MouseEvent) => void;
  goContact: (ev?: MouseEvent) => void;
}) {
  const P_ = PHOTOS_EXTENSION;
  const entete = P_[page.entete];
  const autres = LOCALES_EXTENSION.filter((l) => l.slug !== page.slug);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Extension de maison',
    name: page.h1,
    url: `${SITE_URL}/${page.slug}`,
    provider: { '@id': ORGANISATION_JSONLD['@id'] },
    areaServed: { '@type': 'City', name: page.commune },
  };

  return (
    <main data-screen-label={page.h1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(page.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* Bandeau photo : mêmes classes que la page Extension. */}
      <section className="me-ext-bandeau" style={{ background: '#111412' }}>
        <div className="me-ext-bandeau-fond">
          <img width={entete.w} height={entete.h} decoding="async" fetchPriority="high" src={entete.src} alt={entete.alt} />
        </div>
        <div aria-hidden="true" className="me-ext-bandeau-voile" />
        <div className="me-ext-bandeau-texte">
          <div data-reveal="">
            <Surtitre clair>{page.surtitre}</Surtitre>
          </div>
          <h1 data-reveal="" data-delay="120" style={{ margin: 0, color: '#FFFFFF', fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 'clamp(38px,6vw,80px)', lineHeight: 0.99, letterSpacing: '-0.02em', maxWidth: '18ch', textShadow: '0 4px 40px rgba(11,13,12,0.7)' }}>
            {page.h1}
          </h1>
          <p data-reveal="" data-delay="220" style={{ margin: 'clamp(20px,2.2vw,28px) 0 0', color: 'rgba(247,247,244,0.9)', fontSize: 'clamp(15px,1.35vw,17.5px)', lineHeight: 1.7, maxWidth: '60ch', textShadow: '0 2px 20px rgba(11,13,12,0.85)' }}>
            {page.accroche}
          </p>
          <div data-reveal="" data-delay="320" className="me-ext-bandeau-cta">
            <a href="/#estimation" onClick={goEstimation} className="me-btn" style={BTN_VERT} style-hover="background:#3B7059;transform:translateY(-3px);">
              Estimation en ligne →
            </a>
            <a href="/contact" onClick={goContact} className="me-btn" style={{ ...BTN_VERT, background: 'rgba(11,13,12,0.3)', border: '1px solid rgba(247,247,244,0.55)', boxShadow: 'none', backdropFilter: 'blur(4px)' }} style-hover="border-color:#F7F7F4;transform:translateY(-3px);">
              Parler de mon projet
            </a>
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <nav aria-label="Sommaire de la page" style={{ background: '#EDEDE7', borderBottom: '1px solid rgba(17,20,18,0.08)' }}>
        <div style={{ ...CONTENEUR, paddingTop: '18px', paddingBottom: '18px' }}>
          <ol className="me-sommaire">
            {SOMMAIRE.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="me-link">
                  <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  {s.titre}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Types d'extension : mêmes cartes, texte propre à la ville */}
      <section id="types" className="me-ancre" style={{ background: CREME, padding: 'clamp(64px,8vw,112px) 0 clamp(56px,7vw,96px)' }}>
        <div style={CONTENEUR}>
          <div className="me-split" style={{ gap: 'clamp(28px,5vw,80px)', alignItems: 'end' }}>
            <div data-reveal="">
              <Surtitre>Les types d’extension</Surtitre>
              <h2 style={H2}>{page.typesTitre}</h2>
            </div>
            <p data-reveal="" data-delay="100" style={{ ...P, margin: 0 }}>{page.typesIntro}</p>
          </div>
          <div className="me-g4" style={{ gap: 'clamp(14px,1.6vw,22px)', marginTop: 'clamp(36px,4.6vw,60px)' }}>
            {TYPES_EXTENSION.map((t, i) => {
              const ph = P_[PHOTOS_TYPES[i]];
              return (
                <div key={t.titre} data-reveal="" data-delay={String(i * 90)} style={{ ...CARTE, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <img src={ph.src} width={ph.w} height={ph.h} alt={ph.alt} loading="lazy" decoding="async" style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '4 / 3', objectFit: 'cover', background: '#EDEDE7' }} />
                  <div style={{ padding: 'clamp(20px,2.2vw,28px)' }}>
                    <div style={{ fontSize: '11px', letterSpacing: '0.18em', color: VERT, fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}</div>
                    <h3 style={{ ...H3, marginTop: '8px' }}>{t.titre}</h3>
                    <p style={{ margin: '10px 0 0', color: '#565B56', fontSize: '14.5px', lineHeight: 1.7 }}>{page.types[i]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ce qui change dans la ville : rangées photo et texte en alternance */}
      <section id="local" className="me-ancre" style={{ background: '#FFFFFF', padding: 'clamp(64px,8vw,112px) 0' }}>
        <div style={CONTENEUR}>
          <div data-reveal="">
            <Surtitre>{page.localSurtitre}</Surtitre>
            <h2 style={H2}>{page.localTitre}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(48px,6vw,90px)', marginTop: 'clamp(36px,4.6vw,60px)' }}>
            {page.rangees.map((r, i) => {
              const gauche = i % 2 === 0;
              const texte = (
                <div data-reveal={gauche ? 'right' : 'left'} data-delay="120">
                  <h3 style={H3}>{r.titre}</h3>
                  {r.paragraphes.map((t) => <p key={t} style={P}>{rendreTexte(t)}</p>)}
                </div>
              );
              const photo = <Photo p={P_[r.photo]} sens={gauche ? 'unfold-left' : 'unfold-right'} />;
              return (
                <div key={r.titre} className="me-rang" style={{ gridTemplateColumns: gauche ? '1.1fr 1fr' : '1fr 1.1fr', gap: 'clamp(28px,4.5vw,76px)' }}>
                  {gauche ? <>{photo}{texte}</> : <>{texte}{photo}</>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Appel titre={`Un projet d’extension à ${page.commune} ?`} texte={page.appelMilieu} goEstimation={goEstimation} goContact={goContact} />

      {/* Urbanisme */}
      <section id="urbanisme" className="me-ancre" style={{ background: CREME, padding: 'clamp(64px,8vw,112px) 0' }}>
        <div style={CONTENEUR}>
          <div className="me-split" style={{ gap: 'clamp(28px,5vw,80px)', alignItems: 'start' }}>
            <div data-reveal="">
              <Surtitre>Règles d’urbanisme</Surtitre>
              <h2 style={H2}>Déclaration préalable ou permis de construire ?</h2>
              <p style={P}>{page.urbanismeIntro}</p>
              <Encadre titre={`À ${page.commune}`}>{page.urbanismeLocal}</Encadre>
            </div>
            <ol data-reveal="" data-delay="120" className="me-seuils">
              {SEUILS.map((s) => (
                <li key={s.surface}>
                  <span>{s.surface}</span>
                  <p>{s.regle}</p>
                </li>
              ))}
            </ol>
          </div>
          <p data-reveal="" style={{ ...P, fontSize: '14px', color: '#77807A', marginTop: 'clamp(28px,3.4vw,40px)' }}>{URBANISME_OUTILS}</p>
        </div>
      </section>

      {/* Étapes */}
      <section id="accompagnement" className="me-ancre" style={{ background: '#FFFFFF', padding: 'clamp(64px,8vw,112px) 0' }}>
        <div style={CONTENEUR}>
          <div className="me-split" style={{ gap: 'clamp(28px,5vw,80px)', alignItems: 'end' }}>
            <div data-reveal="">
              <Surtitre>Notre accompagnement</Surtitre>
              <h2 style={H2}>De la première visite à la réception.</h2>
            </div>
            <p data-reveal="" data-delay="100" style={{ ...P, margin: 0 }}>
              Un seul interlocuteur, du relevé de votre maison à la réception des travaux, démarches d’urbanisme comprises.
            </p>
          </div>
          <ol className="me-steps" style={{ listStyle: 'none', padding: 0, margin: 'clamp(36px,4.6vw,60px) 0 0', gap: 'clamp(14px,1.6vw,22px)' }}>
            {ETAPES_EXTENSION.map((e, i) => (
              <li key={e.titre} data-reveal="" data-delay={String(i * 90)} style={{ ...CARTE, background: CREME, padding: 'clamp(22px,2.4vw,30px)' }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '34px', lineHeight: 1, color: VERT }}>{i + 1}</div>
                <h3 style={{ ...H3, fontSize: '22px', marginTop: '14px' }}>{e.titre}</h3>
                <p style={{ margin: '10px 0 0', color: '#565B56', fontSize: '14px', lineHeight: 1.7 }}>{e.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <GuidesExtension />

      {/* FAQ */}
      <section id="faq" className="me-ancre" style={{ background: CREME, padding: 'clamp(64px,8vw,112px) 0' }}>
        <div style={{ ...CONTENEUR, maxWidth: '1040px' }}>
          <div data-reveal="">
            <Surtitre>Questions fréquentes</Surtitre>
            <h2 style={H2}>{page.faqTitre}</h2>
          </div>
          <div className="me-accordeon" style={{ marginTop: 'clamp(30px,3.6vw,46px)' }}>
            {page.faq.map((item) => (
              <details key={item.q}>
                <summary>
                  <h3>{item.q}</h3>
                  <span aria-hidden="true" className="me-accordeon-signe" />
                </summary>
                <p>{rendreTexte(item.r)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Les autres pages extension */}
      <section style={{ background: '#EDEDE7', padding: 'clamp(56px,7vw,96px) 0' }}>
        <div style={CONTENEUR}>
          <div data-reveal="">
            <Surtitre>Ailleurs dans l’Ain</Surtitre>
            <h2 style={{ ...H2, maxWidth: '26ch' }}>Agrandir sa maison autour de nos trois villes.</h2>
          </div>
          <div className="me-g3" style={{ gap: 'clamp(14px,1.6vw,22px)', marginTop: 'clamp(30px,3.6vw,46px)' }}>
            {autres.map((a, i) => (
              <a key={a.slug} href={`/${a.slug}`} data-reveal="" data-delay={String(i * 100)} className="me-link" style={{ ...CARTE, textDecoration: 'none', display: 'block' }}>
                <h3 style={{ ...H3, fontSize: '24px', color: VERT }}>Extension à {a.commune} →</h3>
                <p style={{ margin: '12px 0 0', color: '#4E534E', fontSize: '15px', lineHeight: 1.75 }}>{a.localTitre}</p>
              </a>
            ))}
            <a href="/renovation-extension" data-reveal="" data-delay="200" className="me-link" style={{ ...CARTE, textDecoration: 'none', display: 'block' }}>
              <h3 style={{ ...H3, fontSize: '24px', color: VERT }}>Tout sur l’extension →</h3>
              <p style={{ margin: '12px 0 0', color: '#4E534E', fontSize: '15px', lineHeight: 1.75 }}>Structures, comparatif, budget et financement.</p>
            </a>
          </div>
        </div>
      </section>

      <Appel titre="Parlons de votre extension." texte={page.appelFin} goEstimation={goEstimation} goContact={goContact} />
    </main>
  );
}
