'use client';

import type { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';

/**
 * « Construire ou agrandir ? » — deux portes d'entrée sous le bandeau de
 * l'accueil : la maison neuve (Nos modèles) et l'extension (page Extension).
 *
 * Le bouton « Extension » se perdait dans la barre de navigation ; ce bloc
 * donne à chaque client sa porte dès le premier défilement. Trois mises en
 * page à comparer (VARIANTE), une seule est publiée.
 */

export type Variante = 'v1' | 'v2' | 'v3';
export const VARIANTE: Variante = 'v1';

const PORTES = [
  {
    cle: 'neuf',
    surtitre: 'Maison neuve',
    titre: 'Construire votre maison',
    texte: 'Plans dessinés autour de votre terrain, permis déposé pour vous, contrat CCMI à prix ferme.',
    points: ['Plans sur-mesure', 'CCMI à prix ferme', 'RE2020'],
    lien: '/nos-modeles',
    action: 'Voir nos modèles',
    img: { src: '/photos/maison-meximieux-etage-garage.webp', w: 1400, h: 963, alt: 'Maison neuve à étage, toiture quatre pans et double garage accolé' },
  },
  {
    cle: 'extension',
    surtitre: 'Extension',
    titre: 'Agrandir votre maison',
    texte: 'Une pièce en plus sans déménager : brique, béton cellulaire ou ossature bois, déclaration ou permis compris.',
    points: ['Visite et relevé', 'Démarches d’urbanisme', 'Jonction étudiée'],
    lien: '/renovation-extension',
    action: 'Découvrir l’extension',
    img: { src: '/extension/extension-cube-blanc-jardin.webp', w: 1280, h: 720, alt: 'Extension cubique blanche accolée à une maison au bardage sombre, côté jardin' },
  },
] as const;

const SURTITRE = { color: '#2E5A49', fontSize: '11.5px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' } as const;
const CONTENEUR = { maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' } as const;
const SERIF = "'Cormorant Garamond',serif";

function Entete({ clair = false }: { clair?: boolean }) {
  return (
    <div data-reveal="" style={{ textAlign: 'center', marginBottom: 'clamp(30px,4vw,52px)' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <span style={{ width: '42px', height: '1px', background: clair ? '#9CC4B2' : '#2E5A49' }} />
        <span style={{ ...SURTITRE, color: clair ? '#CFE0D6' : '#2E5A49' }}>Votre projet</span>
        <span style={{ width: '42px', height: '1px', background: clair ? '#9CC4B2' : '#2E5A49' }} />
      </div>
      <h2 style={{ margin: 0, fontFamily: SERIF, fontWeight: 300, fontSize: 'clamp(32px,4.2vw,56px)', lineHeight: 1.05, color: clair ? '#F7F7F4' : '#111412' }}>
        Construire ou agrandir ?
      </h2>
    </div>
  );
}

/** V1 — deux grandes photos plein cadre, texte en bas sur voile sombre. */
function V1({ nav }: { nav: (href: string) => (e: MouseEvent) => void }) {
  return (
    <section style={{ background: '#F7F7F4', padding: 'clamp(64px,8vw,110px) 0' }}>
      <div style={CONTENEUR}>
        <Entete />
        <div className="me-g2" style={{ gap: 'clamp(14px,1.6vw,22px)' }}>
          {PORTES.map((p, i) => (
            <a key={p.cle} href={p.lien} onClick={nav(p.lien)} data-reveal="" data-delay={String(i * 120)} style={{ position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '10px', aspectRatio: '4 / 3', textDecoration: 'none', color: '#F7F7F4' }}>
              <img src={p.img.src} width={p.img.w} height={p.img.h} alt={p.img.alt} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(11,13,12,0) 25%,rgba(11,13,12,0.55) 55%,rgba(11,13,12,0.88) 100%)' }} />
              <span style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(22px,3vw,40px)' }}>
                <span style={{ ...SURTITRE, color: '#CFE0D6', display: 'block' }}>{p.surtitre}</span>
                <span style={{ display: 'block', marginTop: '10px', fontFamily: SERIF, fontWeight: 300, fontSize: 'clamp(30px,3.4vw,48px)', lineHeight: 1.02 }}>{p.titre}</span>
                <span style={{ display: 'block', marginTop: '12px', maxWidth: '44ch', fontSize: '15px', lineHeight: 1.65, color: 'rgba(247,247,244,0.85)' }}>{p.texte}</span>
                <span style={{ display: 'inline-flex', marginTop: '18px', fontSize: '14px', fontWeight: 600, borderBottom: '1px solid #9CC4B2', paddingBottom: '4px' }}>{p.action} →</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/** V2 — bande sombre, deux colonnes éditoriales séparées par un filet, vignette ronde. */
function V2({ nav }: { nav: (href: string) => (e: MouseEvent) => void }) {
  return (
    <section style={{ background: '#111412', color: '#F7F7F4', padding: 'clamp(64px,8vw,110px) 0' }}>
      <div style={CONTENEUR}>
        <Entete clair />
        <div className="me-g2" style={{ gap: 0 }}>
          {PORTES.map((p, i) => (
            <a key={p.cle} href={p.lien} onClick={nav(p.lien)} data-reveal="" data-delay={String(i * 120)} className="me-link" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(18px,2.4vw,32px)', alignItems: 'center', padding: 'clamp(24px,3vw,44px)', textDecoration: 'none', color: '#F7F7F4', borderLeft: i === 1 ? '1px solid rgba(247,247,244,0.14)' : 'none' }}>
              <img src={p.img.src} width={p.img.w} height={p.img.h} alt={p.img.alt} loading="lazy" decoding="async" style={{ width: 'clamp(96px,11vw,150px)', height: 'clamp(96px,11vw,150px)', objectFit: 'cover', borderRadius: '50%', flex: 'none' }} />
              <span>
                <span style={{ ...SURTITRE, color: '#9CC4B2', display: 'block' }}>{String(i + 1).padStart(2, '0')} · {p.surtitre}</span>
                <span style={{ display: 'block', marginTop: '8px', fontFamily: SERIF, fontWeight: 300, fontSize: 'clamp(26px,2.8vw,40px)', lineHeight: 1.05 }}>{p.titre}</span>
                <span style={{ display: 'block', marginTop: '10px', fontSize: '14.5px', lineHeight: 1.65, color: 'rgba(247,247,244,0.7)', maxWidth: '40ch' }}>{p.texte}</span>
                <span style={{ display: 'inline-flex', marginTop: '14px', fontSize: '13.5px', fontWeight: 600, color: '#9CC4B2' }}>{p.action} →</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/** V3 — cartes blanches : photo en haut, trois points cochés, bouton plein. */
function V3({ nav }: { nav: (href: string) => (e: MouseEvent) => void }) {
  return (
    <section style={{ background: '#EDEDE7', padding: 'clamp(64px,8vw,110px) 0' }}>
      <div style={{ ...CONTENEUR, maxWidth: '1180px' }}>
        <Entete />
        <div className="me-g2" style={{ gap: 'clamp(16px,2vw,28px)' }}>
          {PORTES.map((p, i) => (
            <div key={p.cle} data-reveal="" data-delay={String(i * 120)} style={{ background: '#FFFFFF', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(17,20,18,0.08)', display: 'flex', flexDirection: 'column' }}>
              <img src={p.img.src} width={p.img.w} height={p.img.h} alt={p.img.alt} loading="lazy" decoding="async" style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '16 / 9', objectFit: 'cover' }} />
              <div style={{ padding: 'clamp(22px,2.6vw,34px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={SURTITRE}>{p.surtitre}</span>
                <h3 style={{ margin: '8px 0 0', fontFamily: SERIF, fontWeight: 400, fontSize: 'clamp(26px,2.6vw,34px)', color: '#111412' }}>{p.titre}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {p.points.map((t) => (
                    <li key={t} style={{ display: 'flex', gap: '10px', fontSize: '15px', color: '#333834' }}><span aria-hidden="true" style={{ color: '#2E5A49' }}>✓</span>{t}</li>
                  ))}
                </ul>
                <a href={p.lien} onClick={nav(p.lien)} className="me-btn" style={{ alignSelf: 'flex-start', marginTop: 'auto', paddingTop: '0', textDecoration: 'none' }}>
                  <span style={{ display: 'inline-flex', marginTop: '22px', padding: '14px 28px', borderRadius: '100px', background: '#2E5A49', color: '#fff', fontSize: '14px', fontWeight: 600 }}>{p.action} →</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PortesAccueil({ variante = VARIANTE }: { variante?: Variante }) {
  const router = useRouter();
  const go = (href: string) => router.push(href);
  const nav = (href: string) => (e: MouseEvent) => {
    e.preventDefault();
    go(href);
  };
  if (variante === 'v2') return <V2 nav={nav} />;
  if (variante === 'v3') return <V3 nav={nav} />;
  return <V1 nav={nav} />;
}
