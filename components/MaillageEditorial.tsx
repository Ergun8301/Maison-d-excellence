import { MAILLAGE, type CleMaillage } from '@/lib/data/maillage';
import { rendreTexte } from '@/lib/texte';

/**
 * Paragraphe éditorial posé sous une page issue de la maquette, pour y placer
 * des liens internes au fil du texte. Voir lib/data/maillage.ts.
 *
 * Les styles sont ceux des pages locales — fond gris clair, surtitre vert à
 * filet, titre en Cormorant — pour que le bloc ne se voie pas comme une pièce
 * rapportée. Pas d'animation d'apparition : ce que dit le bloc doit être lisible
 * dès le chargement, et par un moteur de recherche avant tout.
 */
export default function MaillageEditorial({ cle }: { cle: CleMaillage }) {
  const b = MAILLAGE[cle];
  return (
    <section style={{ background: '#EDEDE7', padding: 'clamp(44px,5.5vw,72px) 0' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '42px', height: '1px', background: '#2E5A49' }} />
          <span style={{ color: '#2E5A49', fontSize: '11.5px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            {b.surtitre}
          </span>
        </div>
        <h2 style={{ margin: 0, maxWidth: '30ch', fontFamily: "'Cormorant Garamond',serif", fontWeight: 400, fontSize: 'clamp(24px,2.9vw,36px)', lineHeight: 1.12, color: '#111412' }}>
          {b.titre}
        </h2>
        {b.paragraphes.map((t, i) => (
          <p key={i} style={{ margin: '14px 0 0', maxWidth: '70ch', color: '#4a443c', fontSize: '16px', lineHeight: 1.85 }}>
            {rendreTexte(t)}
          </p>
        ))}
      </div>
    </section>
  );
}
