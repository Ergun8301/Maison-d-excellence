'use client';

import { useVals } from '@/components/Site';
import FicheTerrain from '@/components/views/FicheTerrain';
import TerrainPlan from '@/components/TerrainPlan';

/**
 * Relie la vue à la surface de données tenue par <Site>, puis ajoute le
 * plan de division (components/TerrainPlan.tsx) : posés ici plutôt que
 * dans la vue, que la maquette régénère.
 */
export default function FicheTerrainHost({ slug }: { slug: string }) {
  return (
    <>
      <FicheTerrain {...useVals()} />
      <TerrainPlan slug={slug} />
    </>
  );
}
