'use client';

import { useVals } from '@/components/Site';
import Realisations from '@/components/views/Realisations';

/** Relie la vue à la surface de données tenue par <Site>. */
export default function RealisationsHost() {
  return <Realisations {...useVals()} />;
}
