'use client';

import { useVals } from '@/components/Site';
import NosModeles from '@/components/views/NosModeles';

/** Relie la vue à la surface de données tenue par <Site>. */
export default function NosModelesHost() {
  return <NosModeles {...useVals()} />;
}
