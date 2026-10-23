'use client';

import { useVals } from '@/components/Site';
import Blog from '@/components/views/Blog';
import MaillageEditorial from '@/components/MaillageEditorial';

/**
 * Relie la vue à la surface de données tenue par <Site>, puis ajoute le
 * paragraphe de maillage interne (components/MaillageEditorial.tsx) : posé ici
 * plutôt que dans la vue, que la maquette régénère.
 */
export default function BlogHost() {
  return (
    <>
      <Blog {...useVals()} />
      <MaillageEditorial cle="blog" />
    </>
  );
}
