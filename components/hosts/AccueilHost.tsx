'use client';

import { useVals } from '@/components/Site';
import Accueil from '@/components/views/Accueil';
import CommunesAccueil from '@/components/CommunesAccueil';

/**
 * Relie la vue à la surface de données tenue par <Site>.
 *
 * La section « Nous construisons dans ces communes » est ajoutée ici, après la
 * vue, plutôt que dans le gabarit : celui-ci est régénéré depuis la maquette,
 * où les pages locales n'existent pas.
 */
export default function AccueilHost() {
  return (
    <>
      <Accueil {...useVals()} />
      <CommunesAccueil />
    </>
  );
}
