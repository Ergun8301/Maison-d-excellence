'use client';

import { useVals } from '@/components/Site';
import Zone from '@/components/views/Zone';
import SecteursLocaux from '@/components/SecteursLocaux';

/**
 * Relie la vue à la surface de données tenue par <Site>.
 *
 * Le renvoi vers les trois pages locales est ajouté ici, après la vue, plutôt
 * que dans le gabarit : celui-ci est régénéré depuis la maquette, où ces pages
 * n'existent pas.
 */
export default function ZoneHost() {
  return (
    <>
      <Zone {...useVals()} />
      <SecteursLocaux />
    </>
  );
}
