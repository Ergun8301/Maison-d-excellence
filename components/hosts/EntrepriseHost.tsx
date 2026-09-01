'use client';

import { useVals } from '@/components/Site';
import Entreprise from '@/components/views/Entreprise';
import Faq from '@/components/Faq';

/**
 * Relie la vue à la surface de données tenue par <Site>.
 *
 * La FAQ est ajoutée ici, après la vue, plutôt que dans le gabarit : celui-ci
 * est régénéré depuis la maquette, où la section n'existe pas.
 */
export default function EntrepriseHost() {
  return (
    <>
      <Entreprise {...useVals()} />
      <Faq />
    </>
  );
}
