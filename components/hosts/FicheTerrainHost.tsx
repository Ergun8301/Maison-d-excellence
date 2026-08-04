'use client';

import { useVals } from '@/components/Site';
import FicheTerrain from '@/components/views/FicheTerrain';

/** Relie la vue à la surface de données tenue par <Site>. */
export default function FicheTerrainHost() {
  return <FicheTerrain {...useVals()} />;
}
