'use client';

import { useVals } from '@/components/Site';
import FicheTerrain from '@/components/views/FicheTerrain';
import TerrainGalerie from '@/components/TerrainGalerie';

/**
 * Relie la vue à la surface de données tenue par <Site>, puis ajoute les
 * photos et le plan (components/TerrainGalerie.tsx) : posés ici plutôt que
 * dans la vue, que la maquette régénère.
 */
export default function FicheTerrainHost({ slug }: { slug: string }) {
  return (
    <>
      <FicheTerrain {...useVals()} />
      <TerrainGalerie slug={slug} />
    </>
  );
}
