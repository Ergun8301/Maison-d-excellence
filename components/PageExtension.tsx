import type { MouseEvent, ReactNode } from 'react';
import { faqJsonLd } from '@/lib/faq-jsonld';
import { ORGANISATION_JSONLD } from '@/lib/jsonld';
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/site';
import { rendreTexte } from '@/lib/texte';
import {
  BUDGET,
  BUDGET_FACTEURS,
  COMPARATIF,
  ETAPES_EXTENSION,
  FAQ_EXTENSION,
  INTRO_EXTENSION,
  JONCTION,
  LUMIERE,
  PHOTOS_EXTENSION,
  REGLES_PLU,
  SECTEURS,
  SECTEURS_SUITE,
  SEUILS,
  SOMMAIRE_EXTENSION,
  STRUCTURES,
  SURELEVATION,
  TYPES_EXTENSION,
  URBANISME,
  URBANISME_OUTILS,
  type PhotoExtension,
} from '@/lib/data/extension';

/**
 * Page « Extension de maison » (/renovation-extension).
 *
 * Écrite à la main, hors de la maquette : la vue components/views/Renovation.tsx
 * reste en place pour le générateur, mais l'hôte ne l'affiche plus. Le
 * vocabulaire visuel est celui du site — bandeau photo sous voile sombre,
 * titres en Cormorant, fond crème, surtitre vert à filet, cartes blanches,
 * rangées photo et texte en alternance (`.me-rang`, comme les fiches
 * terrain), étapes en grille (`.me-steps`, comme l'accueil), animations
 * `data-reveal` du runtime. Le contenu vient de lib/data/extension.ts.
 *
 * Les questions fréquentes sont en accordéon natif (`details`) : le texte des
 * réponses reste dans la page, lisible par un moteur, et le balisage FAQPage
 * est construit à partir du même tableau.
 */

const CREME = '#F7F7F4';
const ENCRE = '#111412';
const VERT = '#2E5A49';

const H2 = {
  margin: 0,
  fontFamily: "'Cormorant Garamond',serif",
  fontWeight: 300,
  fontSize: 'clamp(30px,3.8vw,50px)',
  lineHeight: 1.05,
  color: ENCRE,
  maxWidth: '22ch',
} as const;
const H3 = {
  margin: 0,
  fontFamily: "'Cormorant Garamond',serif",
  fontWeight: 400,
  fontSize: 'clamp(23px,2.2vw,28px)',
  lineHeight: 1.15,
  color: ENCRE,
} as const;
const P = { margin: '16px 0 0', color: '#4E534E', fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.8 } as const;
const CONTENEUR = { maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' } as const;
const CARTE = {
  background: '#FFFFFF',
  border: '1px solid rgba(17,20,18,0.08)',
  borderRadius: '10px',
  padding: 'clamp(24px,2.8vw,36px)',
} as const;
const BTN_VERT = {
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  padding: '17px 32px',
  borderRadius: '100px',
  background: VERT,
  color: '#fff',
  fontSize: '14px',
  fontWeight: 600,
  boxShadow: '0 22px 44px -22px rgba(46,90,73,1)',
} as const;

function Surtitre({ children, clair = false }: { children: string; clair?: boolean }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
      <span style={{ width: '42px', height: '1px', background: clair ? '#9CC4B2' : VERT }} />
      <span
        style={{
          color: clair ? '#CFE0D6' : VERT,
          fontSize: '11.5px',
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </span>
    </div>
  );
}

/** `recadre` : rapport largeur/hauteur imposé, pour qu'une photo en hauteur ne dépasse pas l'écran. */
function Photo({ p, sens, recadre }: { p: PhotoExtension; sens: 'unfold-left' | 'unfold-right'; recadre?: string }) {
  return (
    <figure className="me-rang-photo" data-reveal={sens} style={{ margin: 0 }}>
      <img
        src={p.src}
        width={p.w}
        height={p.h}
        alt={p.alt}
        loading="lazy"
        decoding="async"
        style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: recadre, objectFit: 'cover', borderRadius: '10px', background: '#EDEDE7' }}
      />
      <figcaption style={{ margin: '10px 0 0', fontSize: '12.5px', lineHeight: 1.6, color: '#77807A' }}>
        {p.legende}
      </figcaption>
    </figure>
  );
}

function Encadre({ titre, children }: { titre: string; children: ReactNode }) {
  return (
    <aside
      data-reveal=""
      style={{
        background: '#EDEDE7',
        borderRadius: '10px',
        padding: 'clamp(22px,2.6vw,32px)',
        marginTop: 'clamp(28px,3.4vw,40px)',
      }}
    >
      <div style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: VERT, fontWeight: 700 }}>
        {titre}
      </div>
      <div style={{ margin: '10px 0 0', color: '#333834', fontSize: '15px', lineHeight: 1.75 }}>{children}</div>
    </aside>
  );
}

function Liste({ items }: { items: readonly string[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {items.map((t) => (
        <li key={t} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span aria-hidden="true" style={{ color: VERT, fontSize: '17px', lineHeight: 1.4 }}>✓</span>
          <span style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#333834' }}>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** Bandeau d'appel à l'action, sombre, repris en milieu et en bas de page. */
function Appel({
  titre,
  texte,
  goEstimation,
  goContact,
}: {
  titre: string;
  texte: string;
  goEstimation: (ev?: MouseEvent) => void;
  goContact: (ev?: MouseEvent) => void;
}) {
  return (
    <section style={{ background: ENCRE, color: CREME, padding: 'clamp(52px,6.5vw,92px) 0' }}>
      <div style={CONTENEUR}>
        <div className="me-split" style={{ gap: 'clamp(28px,5vw,80px)', alignItems: 'center' }}>
          <div data-reveal="left">
            <h2 style={{ ...H2, color: CREME }}>{titre}</h2>
            <p style={{ ...P, color: 'rgba(247,247,244,0.72)', maxWidth: '54ch' }}>{texte}</p>
          </div>
          <div data-reveal="right" data-delay="120" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a href="/#estimation" onClick={goEstimation} className="me-btn" style={BTN_VERT} style-hover="background:#3B7059;transform:translateY(-3px);">
              Estimation en ligne →
            </a>
            <a
              href="/contact"
              onClick={goContact}
              className="me-btn"
              style={{ ...BTN_VERT, background: 'transparent', border: '1px solid rgba(247,247,244,0.35)', boxShadow: 'none' }}
              style-hover="border-color:#F7F7F4;transform:translateY(-3px);"
            >
              Nous contacter
            </a>
            <a href={PHONE_HREF} className="me-link" style={{ alignSelf: 'center', color: '#9CC4B2', textDecoration: 'none', fontWeight: 600, fontSize: '14px', marginLeft: '6px', whiteSpace: 'nowrap' }} style-hover="color:#F7F7F4;">
              ✆ {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PageExtension({
  goEstimation,
  goContact,
}: {
  goEstimation: (ev?: MouseEvent) => void;
  goContact: (ev?: MouseEvent) => void;
}) {
  const P_ = PHOTOS_EXTENSION;

  // Le service décrit sur cette page, rattaché à l'entreprise du balisage
  // général, avec la même zone d'intervention que celle-ci.
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Extension de maison',
    name: 'Extension et agrandissement de maison dans l’Ain',
    url: `${SITE_URL}/renovation-extension`,
    provider: { '@id': ORGANISATION_JSONLD['@id'] },
    areaServed: ORGANISATION_JSONLD.areaServed,
  };

  return (
    <main data-screen-label="Extension de maison">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_EXTENSION)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* Bandeau */}
      <section style={{ position: 'relative', minHeight: 'clamp(560px,78vh,760px)', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: ENCRE }}>
          <img
            width={P_.entete.w}
            height={P_.entete.h}
            decoding="async"
            fetchPriority="high"
            src={P_.entete.src}
            alt={P_.entete.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 55%', animation: 'meKb 18s ease-out forwards' }}
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(11,13,12,0.6) 0%,rgba(11,13,12,0.3) 34%,rgba(11,13,12,0.72) 70%,rgba(11,13,12,0.94) 100%)' }} />
        <div style={{ position: 'relative', width: '100%', ...CONTENEUR, paddingTop: 'clamp(110px,11vw,136px)', paddingBottom: 'clamp(44px,5.4vw,76px)' }}>
          <div data-reveal="">
            <Surtitre clair>Extension et agrandissement · Ain</Surtitre>
          </div>
          <h1 data-reveal="" data-delay="120" style={{ margin: 0, color: '#FFFFFF', fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 'clamp(38px,5.6vw,76px)', lineHeight: 1.02, letterSpacing: '-0.02em', maxWidth: '24ch', textShadow: '0 4px 40px rgba(11,13,12,0.7)' }}>
            Extension de maison dans l’Ain, autour de Bourg-en-Bresse et Meximieux
          </h1>
          <p data-reveal="" data-delay="220" style={{ margin: 'clamp(20px,2.2vw,28px) 0 0', color: 'rgba(247,247,244,0.88)', fontSize: 'clamp(15px,1.35vw,17.5px)', lineHeight: 1.7, maxWidth: '62ch', textShadow: '0 2px 20px rgba(11,13,12,0.85)' }}>
            {INTRO_EXTENSION[0]}
          </p>
          <div data-reveal="" data-delay="320" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: 'clamp(24px,2.8vw,34px)' }}>
            <a href="/#estimation" onClick={goEstimation} className="me-btn" style={BTN_VERT} style-hover="background:#3B7059;transform:translateY(-3px);">
              Estimation en ligne →
            </a>
            <a href="/contact" onClick={goContact} className="me-btn" style={{ ...BTN_VERT, background: 'rgba(11,13,12,0.35)', border: '1px solid rgba(247,247,244,0.45)', boxShadow: 'none', backdropFilter: 'blur(4px)' }} style-hover="border-color:#F7F7F4;transform:translateY(-3px);">
              Parler de mon projet
            </a>
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <nav aria-label="Sommaire de la page" style={{ background: '#EDEDE7', borderBottom: '1px solid rgba(17,20,18,0.08)' }}>
        <div style={{ ...CONTENEUR, paddingTop: '18px', paddingBottom: '18px' }}>
          <ol className="me-sommaire">
            {SOMMAIRE_EXTENSION.map((s, i) => (
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

      {/* a) Types d'extension */}
      <section id="types" className="me-ancre" style={{ background: CREME, padding: 'clamp(64px,8vw,112px) 0 clamp(56px,7vw,96px)' }}>
        <div style={CONTENEUR}>
          <div className="me-split" style={{ gap: 'clamp(28px,5vw,80px)', alignItems: 'end' }}>
            <div data-reveal="">
              <Surtitre>Les types d’extension</Surtitre>
              <h2 style={H2}>Agrandir, oui. Mais de quel côté ?</h2>
            </div>
            <p data-reveal="" data-delay="100" style={{ ...P, margin: 0 }}>{INTRO_EXTENSION[1]}</p>
          </div>
          <div className="me-g3" style={{ gap: 'clamp(14px,1.6vw,22px)', marginTop: 'clamp(36px,4.6vw,60px)' }}>
            {TYPES_EXTENSION.map((t, i) => (
              <div key={t.titre} data-reveal="" data-delay={String((i % 3) * 100)} style={CARTE}>
                <div style={{ fontSize: '11px', letterSpacing: '0.18em', color: VERT, fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ ...H3, marginTop: '10px' }}>{t.titre}</h3>
                <p style={{ margin: '12px 0 0', color: '#565B56', fontSize: '14.5px', lineHeight: 1.7 }}>{t.texte}</p>
              </div>
            ))}
            <div data-reveal="" data-delay="200" style={{ ...CARTE, background: ENCRE, border: 'none' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#9CC4B2', fontWeight: 700 }}>ET AUSSI</div>
              <h3 style={{ ...H3, marginTop: '10px', color: CREME }}>La surélévation</h3>
              <p style={{ margin: '12px 0 0', color: 'rgba(247,247,244,0.72)', fontSize: '14.5px', lineHeight: 1.7 }}>{SURELEVATION}</p>
            </div>
          </div>

          <div className="me-rang" style={{ gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(28px,4.5vw,76px)', marginTop: 'clamp(56px,7vw,100px)' }}>
            <Photo p={P_.veranda} sens="unfold-left" recadre="4 / 5" />
            <div data-reveal="right" data-delay="120">
              <h3 style={H3}>La lumière avant la surface</h3>
              <p style={P}>{rendreTexte(LUMIERE)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* b) Structure */}
      <section id="structure" className="me-ancre" style={{ background: '#FFFFFF', padding: 'clamp(64px,8vw,112px) 0' }}>
        <div style={CONTENEUR}>
          <div data-reveal="">
            <Surtitre>Choisir la structure</Surtitre>
            <h2 style={H2}>Brique, béton cellulaire ou ossature bois.</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(48px,6vw,90px)', marginTop: 'clamp(36px,4.6vw,60px)' }}>
            <div className="me-rang" style={{ gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(28px,4.5vw,76px)' }}>
              <Photo p={P_.maconnerie} sens="unfold-left" />
              <div data-reveal="right" data-delay="120">
                <h3 style={H3}>{STRUCTURES[0].titre}</h3>
                {STRUCTURES[0].paragraphes.map((t) => <p key={t} style={P}>{t}</p>)}
                <h3 style={{ ...H3, marginTop: '30px' }}>{STRUCTURES[1].titre}</h3>
                {STRUCTURES[1].paragraphes.map((t) => <p key={t} style={P}>{t}</p>)}
              </div>
            </div>
            <div className="me-rang" style={{ gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(28px,4.5vw,76px)' }}>
              <div data-reveal="left" data-delay="120">
                <h3 style={H3}>{STRUCTURES[2].titre}</h3>
                {STRUCTURES[2].paragraphes.map((t) => <p key={t} style={P}>{t}</p>)}
              </div>
              <Photo p={P_.bois} sens="unfold-right" />
            </div>
          </div>

          {/* Tableau comparatif */}
          <div data-reveal="" style={{ marginTop: 'clamp(48px,6vw,84px)' }}>
            <h3 style={H3}>Comparatif des trois structures</h3>
            <p style={{ ...P, fontSize: '14px', marginTop: '8px', color: '#77807A' }}>
              Appréciations générales, sans chiffre.
            </p>
            <div className="me-tableau" role="region" aria-label="Comparatif des structures d’extension" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Structure</th>
                    {COMPARATIF.criteres.map((c) => <th key={c} scope="col">{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {COMPARATIF.lignes.map((l) => (
                    <tr key={l.solution}>
                      <th scope="row">{l.solution}</th>
                      {l.valeurs.map((v, i) => <td key={i} data-critere={COMPARATIF.criteres[i]}>{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Appel
        titre="Un projet d’extension ? Commencez par un ordre de grandeur."
        texte="L’estimation en ligne donne une première fourchette ; pour une extension, le chiffrage se fait ensuite après visite de votre maison."
        goEstimation={goEstimation}
        goContact={goContact}
      />

      {/* c) Urbanisme */}
      <section id="urbanisme" className="me-ancre" style={{ background: CREME, padding: 'clamp(64px,8vw,112px) 0' }}>
        <div style={CONTENEUR}>
          <div className="me-split" style={{ gap: 'clamp(28px,5vw,80px)', alignItems: 'start' }}>
            <div data-reveal="">
              <Surtitre>Règles d’urbanisme et PLU</Surtitre>
              <h2 style={H2}>Déclaration préalable ou permis de construire ?</h2>
              <p style={P}>
                Le seuil se calcule sur la surface créée. Il ne dit pas tout : le PLU s’applique à toute extension.
              </p>
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

          <div className="me-g2" style={{ gap: 'clamp(16px,2vw,28px)', marginTop: 'clamp(40px,5vw,64px)' }}>
            {URBANISME.map((t, i) => (
              <div key={i} data-reveal="" data-delay={String(i * 100)} style={CARTE}>
                <h3 style={{ ...H3, fontSize: '23px' }}>{i === 0 ? 'Architecte et projet global' : 'Délais d’instruction'}</h3>
                <p style={{ margin: '12px 0 0', color: '#565B56', fontSize: '15px', lineHeight: 1.75 }}>{t}</p>
              </div>
            ))}
          </div>

          <div className="me-split" style={{ gap: 'clamp(28px,5vw,80px)', alignItems: 'start', marginTop: 'clamp(40px,5vw,64px)' }}>
            <div data-reveal="">
              <h3 style={H3}>Ce que le PLU encadre</h3>
              <Liste items={REGLES_PLU} />
            </div>
            <Encadre titre="Où vérifier">{URBANISME_OUTILS}</Encadre>
          </div>
        </div>
      </section>

      {/* d) Budget */}
      <section id="budget" className="me-ancre" style={{ background: '#FFFFFF', padding: 'clamp(64px,8vw,112px) 0' }}>
        <div style={CONTENEUR}>
          <div className="me-rang" style={{ gridTemplateColumns: '1.2fr 0.8fr', gap: 'clamp(28px,4.5vw,76px)' }}>
            <div data-reveal="left">
              <Surtitre>Budget et financement</Surtitre>
              <h2 style={H2}>Ce qui fait varier le prix d’une extension.</h2>
              <p style={P}>Pas de prix au mètre carré sans avoir vu la maison : deux extensions de même surface peuvent coûter très différemment. Ce qui pèse :</p>
              <Liste items={BUDGET_FACTEURS} />
            </div>
            <Photo p={P_.interieur} sens="unfold-right" recadre="4 / 5" />
          </div>
          <div className="me-g3" style={{ gap: 'clamp(14px,1.6vw,22px)', marginTop: 'clamp(40px,5vw,64px)' }}>
            {BUDGET.map((b, i) => (
              <div key={b.titre} data-reveal="" data-delay={String(i * 100)} style={{ ...CARTE, background: CREME }}>
                <h3 style={{ ...H3, fontSize: '24px' }}>{b.titre}</h3>
                <p style={{ margin: '12px 0 0', color: '#565B56', fontSize: '14.5px', lineHeight: 1.75 }}>{b.texte}</p>
              </div>
            ))}
          </div>
          <Encadre titre="À savoir">
            Informations générales, à confirmer pour votre projet : les règles fiscales et les aides évoluent, et chaque mairie applique son propre PLU.
          </Encadre>
        </div>
      </section>

      {/* e) Accompagnement */}
      <section id="accompagnement" className="me-ancre" style={{ background: CREME, padding: 'clamp(64px,8vw,112px) 0' }}>
        <div style={CONTENEUR}>
          <div className="me-split" style={{ gap: 'clamp(28px,5vw,80px)', alignItems: 'end' }}>
            <div data-reveal="">
              <Surtitre>Notre accompagnement</Surtitre>
              <h2 style={H2}>De la première visite à la réception.</h2>
            </div>
            <p data-reveal="" data-delay="100" style={{ ...P, margin: 0 }}>
              Un seul interlocuteur suit le projet, de l’étude à la réception, démarches d’urbanisme comprises.
            </p>
          </div>
          <ol className="me-steps" style={{ listStyle: 'none', padding: 0, margin: 'clamp(36px,4.6vw,60px) 0 0', gap: 'clamp(14px,1.6vw,22px)' }}>
            {ETAPES_EXTENSION.map((e, i) => (
              <li key={e.titre} data-reveal="" data-delay={String(i * 90)} style={{ ...CARTE, padding: 'clamp(22px,2.4vw,30px)' }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '34px', lineHeight: 1, color: VERT }}>{i + 1}</div>
                <h3 style={{ ...H3, fontSize: '22px', marginTop: '14px' }}>{e.titre}</h3>
                <p style={{ margin: '10px 0 0', color: '#565B56', fontSize: '14px', lineHeight: 1.7 }}>{e.texte}</p>
              </li>
            ))}
          </ol>
          <div className="me-rang" style={{ gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(28px,4.5vw,76px)', marginTop: 'clamp(56px,7vw,100px)' }}>
            <Photo p={P_.contemporaine} sens="unfold-left" />
            <div data-reveal="right" data-delay="120">
              <h3 style={H3}>Une extension qui se raccorde sans se voir</h3>
              <p style={P}>{rendreTexte(JONCTION)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* f) Secteurs */}
      <section id="secteurs" className="me-ancre" style={{ background: '#EDEDE7', padding: 'clamp(64px,8vw,112px) 0' }}>
        <div style={CONTENEUR}>
          <div data-reveal="">
            <Surtitre>Zone d’intervention</Surtitre>
            <h2 style={{ ...H2, maxWidth: '26ch' }}>Extension de maison autour de Bourg-en-Bresse, Meximieux et Ambérieu-en-Bugey</h2>
          </div>
          <div className="me-g3" style={{ gap: 'clamp(14px,1.6vw,22px)', marginTop: 'clamp(36px,4.6vw,60px)' }}>
            {SECTEURS.map((s, i) => (
              <div key={s.titre} data-reveal="" data-delay={String(i * 100)} style={CARTE}>
                <h3 style={{ ...H3, fontSize: '24px' }}>{s.titre}</h3>
                <p style={{ margin: '12px 0 0', color: '#4E534E', fontSize: '15px', lineHeight: 1.8 }}>{rendreTexte(s.texte)}</p>
              </div>
            ))}
          </div>
          <p data-reveal="" style={{ ...P, maxWidth: '82ch', marginTop: 'clamp(28px,3.4vw,40px)' }}>{rendreTexte(SECTEURS_SUITE)}</p>
        </div>
      </section>

      {/* g) FAQ */}
      <section id="faq" className="me-ancre" style={{ background: CREME, padding: 'clamp(64px,8vw,112px) 0' }}>
        <div style={{ ...CONTENEUR, maxWidth: '1040px' }}>
          <div data-reveal="">
            <Surtitre>Questions fréquentes</Surtitre>
            <h2 style={H2}>Ce qu’on nous demande sur les extensions.</h2>
          </div>
          <div className="me-accordeon" style={{ marginTop: 'clamp(30px,3.6vw,46px)' }}>
            {FAQ_EXTENSION.map((item) => (
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

      <Appel
        titre="Parlons de votre extension."
        texte="Un premier rendez-vous pour regarder la maison, le terrain et le PLU avant tout chiffrage."
        goEstimation={goEstimation}
        goContact={goContact}
      />
    </main>
  );
}
