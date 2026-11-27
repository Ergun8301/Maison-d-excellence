'use client';

import type { ModeleCard } from '@/components/site-vals';

/**
 * « Des maisons qui ressemblent à votre projet » — sous le résultat du
 * simulateur de l'accueil. Les modèles affichés suivent ce que le visiteur
 * vient de choisir (plain-pied ou étage, garage) et changent en direct.
 *
 * Les photos sont celles des modèles déjà publiés (lib/data/modeles.ts). On ne
 * prétend PAS qu'elles correspondent au prix affiché : la note le dit.
 * Exclus : Viriat (photo de chantier au hors-d'eau) et Chalamont (photo
 * d'intérieur de banque d'images, pas une maison construite par l'entreprise).
 *
 * Trois mises en page à comparer (VARIANTE), une seule est publiée.
 */

export type Variante = 'v1' | 'v2' | 'v3';
export const VARIANTE: Variante = 'v1';

/** Garage visible sur la photo et décrit dans la fiche. null : non précisé. */
const GARAGE: Record<string, 'Simple' | 'Double' | null> = {
  Dombes: null,
  Pérouges: 'Simple',
  Lyon: 'Simple',
  Bugey: 'Double',
  Meximieux: 'Double',
  Ambronay: 'Simple',
};

const SERIF = "'Cormorant Garamond',serif";
const VERT = '#2E5A49';
const SURTITRE = { color: VERT, fontSize: '11.5px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' } as const;

function choisir(modeles: ModeleCard[], niveau: string, garage: string): ModeleCard[] {
  const liste = modeles.filter((m) => m.niveau === niveau && m.name in GARAGE);
  const score = (m: ModeleCard) => {
    const g = GARAGE[m.name];
    if (garage === 'Sans') return g === null ? 0 : 1;
    return g === garage ? 0 : g === null ? 2 : 1;
  };
  return [...liste].sort((a, b) => score(a) - score(b)).slice(0, 3);
}

function etiquette(m: ModeleCard) {
  const g = GARAGE[m.name];
  return `${m.niveau}${g ? ` · garage ${g.toLowerCase()}` : ''}`;
}

function Entete({ niveau, garage }: { niveau: string; garage: string }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: '14px 28px' }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <span style={{ width: '42px', height: '1px', background: VERT }} />
          <span style={SURTITRE}>Pour vous donner une idée</span>
        </div>
        <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 300, fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1.08, color: '#111412' }}>
          Des maisons qui ressemblent à votre projet
        </h3>
        <p style={{ margin: '8px 0 0', fontSize: '14px', color: '#565B56' }}>
          {niveau}
          {garage !== 'Sans' ? `, garage ${garage.toLowerCase()}` : ''} : des modèles que nous avons construits.
        </p>
      </div>
      <a href="/nos-modeles" className="me-link" style={{ textDecoration: 'none', color: '#111412', fontWeight: 600, fontSize: '14px', borderBottom: `1px solid ${VERT}`, paddingBottom: '4px', whiteSpace: 'nowrap' }}>
        Voir tous nos modèles →
      </a>
    </div>
  );
}

function Note() {
  return (
    <p style={{ margin: 'clamp(16px,2vw,22px) 0 0', fontSize: '12px', lineHeight: 1.6, color: '#77807A' }}>
      Photos de modèles réalisés, pour l’inspiration : chaque maison est redessinée autour de votre terrain, et son prix ne correspond pas forcément à la fourchette affichée.
    </p>
  );
}

/** V1 — trois cartes photo sur fond blanc, bouton « Adapter ce modèle ». */
function V1({ liste }: { liste: ModeleCard[] }) {
  return (
    <div className="me-g3" style={{ gap: 'clamp(14px,1.6vw,22px)', marginTop: 'clamp(22px,2.6vw,32px)' }}>
      {liste.map((m) => (
        <div key={m.name} style={{ background: '#FFFFFF', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(17,20,18,0.08)', display: 'flex', flexDirection: 'column' }}>
          <img src={m.photo} alt={`Modèle ${m.name} : ${m.desc}`} loading="lazy" decoding="async" width={640} height={440} style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '16 / 11', objectFit: 'cover', background: '#EDEDE7' }} />
          <div style={{ padding: 'clamp(16px,1.8vw,22px)', display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: VERT, fontWeight: 700 }}>{etiquette(m)}</span>
            <span style={{ fontFamily: SERIF, fontSize: '24px', color: '#111412' }}>Modèle {m.name}</span>
            <button type="button" onClick={m.onAsk} className="me-btn" style={{ alignSelf: 'flex-start', marginTop: 'auto', cursor: 'pointer', border: 'none', background: 'transparent', padding: '8px 0 0', color: VERT, fontFamily: 'inherit', fontSize: '14px', fontWeight: 600 }}>
              Adapter ce modèle à mon terrain →
            </button>
          </div>
        </div>
      ))}
      {liste.length < 3 && (
        <a href="/nos-modeles" className="me-link" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px', padding: 'clamp(22px,2.6vw,34px)', borderRadius: '10px', background: '#111412', color: '#F7F7F4', textDecoration: 'none', minHeight: '220px' }}>
          <span style={{ ...SURTITRE, color: '#9CC4B2' }}>8 modèles</span>
          <span style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 'clamp(26px,2.6vw,34px)', lineHeight: 1.1 }}>Plain-pied, à étage ou éco-conçus</span>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#9CC4B2' }}>Voir tous nos modèles →</span>
        </a>
      )}
    </div>
  );
}

/** V2 — une grande photo du modèle le plus proche + deux vignettes. */
function V2({ liste }: { liste: ModeleCard[] }) {
  const [premier, ...autres] = liste;
  if (!premier) return null;
  return (
    <div className="me-split" style={{ gap: 'clamp(14px,1.6vw,22px)', marginTop: 'clamp(22px,2.6vw,32px)', alignItems: 'stretch' }}>
      <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', minHeight: '320px' }}>
        <img src={premier.photo} alt={`Modèle ${premier.name} : ${premier.desc}`} loading="lazy" decoding="async" width={900} height={620} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(11,13,12,0) 40%,rgba(11,13,12,0.82) 100%)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(20px,2.4vw,30px)', color: '#F7F7F4' }}>
          <span style={{ ...SURTITRE, color: '#CFE0D6' }}>Le plus proche · {etiquette(premier)}</span>
          <div style={{ fontFamily: SERIF, fontWeight: 300, fontSize: 'clamp(30px,3.2vw,44px)', marginTop: '6px' }}>Modèle {premier.name}</div>
          <button type="button" onClick={premier.onAsk} className="me-btn" style={{ marginTop: '14px', cursor: 'pointer', border: 'none', padding: '13px 24px', borderRadius: '100px', background: VERT, color: '#fff', fontFamily: 'inherit', fontSize: '14px', fontWeight: 600 }}>
            Adapter ce modèle à mon terrain →
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px,1.6vw,22px)' }}>
        {autres.map((m) => (
          <button key={m.name} type="button" onClick={m.onAsk} className="me-link" style={{ display: 'grid', gridTemplateColumns: '42% 1fr', alignItems: 'stretch', textAlign: 'left', cursor: 'pointer', padding: 0, border: '1px solid rgba(17,20,18,0.08)', borderRadius: '10px', overflow: 'hidden', background: '#FFFFFF', fontFamily: 'inherit', flex: 1 }}>
            <img src={m.photo} alt={`Modèle ${m.name}`} loading="lazy" decoding="async" width={400} height={280} style={{ width: '100%', height: '100%', minHeight: '140px', objectFit: 'cover' }} />
            <span style={{ padding: 'clamp(14px,1.6vw,20px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: VERT, fontWeight: 700 }}>{etiquette(m)}</span>
              <span style={{ fontFamily: SERIF, fontSize: '23px', color: '#111412' }}>Modèle {m.name}</span>
              <span style={{ fontSize: '13.5px', color: VERT, fontWeight: 600 }}>Adapter à mon terrain →</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/** V3 — bande sombre, trois photos plein cadre avec le nom dessus. */
function V3({ liste }: { liste: ModeleCard[] }) {
  return (
    <div className="me-g3" style={{ gap: '6px', marginTop: 'clamp(22px,2.6vw,32px)', background: '#111412', padding: '6px', borderRadius: '12px' }}>
      {liste.map((m) => (
        <button key={m.name} type="button" onClick={m.onAsk} style={{ position: 'relative', display: 'block', cursor: 'pointer', padding: 0, border: 'none', borderRadius: '8px', overflow: 'hidden', aspectRatio: '4 / 5', fontFamily: 'inherit', textAlign: 'left' }}>
          <img src={m.photo} alt={`Modèle ${m.name} : ${m.desc}`} loading="lazy" decoding="async" width={600} height={750} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(11,13,12,0) 45%,rgba(11,13,12,0.85) 100%)' }} />
          <span style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '20px', color: '#F7F7F4', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#CFE0D6', fontWeight: 600 }}>{etiquette(m)}</span>
            <span style={{ fontFamily: SERIF, fontWeight: 300, fontSize: '30px' }}>Modèle {m.name}</span>
            <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#9CC4B2' }}>Adapter à mon terrain →</span>
          </span>
        </button>
      ))}
    </div>
  );
}

export default function EstimationModeles({
  niveau,
  garage,
  modeles,
  variante = VARIANTE,
}: {
  niveau: string;
  garage: string;
  modeles: ModeleCard[];
  variante?: Variante;
}) {
  const liste = choisir(modeles, niveau, garage);
  if (liste.length === 0) return null;
  return (
    <div data-reveal="" style={{ marginTop: 'clamp(44px,5.4vw,72px)' }}>
      <Entete niveau={niveau} garage={garage} />
      {variante === 'v2' ? <V2 liste={liste} /> : variante === 'v3' ? <V3 liste={liste} /> : <V1 liste={liste} />}
      <Note />
    </div>
  );
}
