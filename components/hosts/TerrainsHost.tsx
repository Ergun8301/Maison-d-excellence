'use client';

import { useVals } from '@/components/Site';
import Terrains from '@/components/views/Terrains';

/** Relie la vue à la surface de données tenue par <Site>. */
export default function TerrainsHost() {
  return <Terrains {...useVals()} />;
}
