'use client';

import { useVals } from '@/components/Site';
import Entreprise from '@/components/views/Entreprise';

/** Relie la vue à la surface de données tenue par <Site>. */
export default function EntrepriseHost() {
  return <Entreprise {...useVals()} />;
}
