'use client';

import { useVals } from '@/components/Site';
import Accueil from '@/components/views/Accueil';

/** Relie la vue à la surface de données tenue par <Site>. */
export default function AccueilHost() {
  return <Accueil {...useVals()} />;
}
