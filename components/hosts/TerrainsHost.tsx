'use client';

import { useVals } from '@/components/Site';
import Terrains from '@/components/views/Terrains';
import MaillageEditorial from '@/components/MaillageEditorial';

/**
 * Relie la vue à la surface de données tenue par <Site>, puis ajoute le
 * paragraphe de maillage interne (components/MaillageEditorial.tsx) : posé ici
 * plutôt que dans la vue, que la maquette régénère.
 */
export default function TerrainsHost() {
  return (
    <>
      <Terrains {...useVals()} />
      <MaillageEditorial cle="terrains" />
    </>
  );
}
