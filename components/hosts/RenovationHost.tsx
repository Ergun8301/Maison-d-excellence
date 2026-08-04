'use client';

import { useVals } from '@/components/Site';
import Renovation from '@/components/views/Renovation';

/** Relie la vue à la surface de données tenue par <Site>. */
export default function RenovationHost() {
  return <Renovation {...useVals()} />;
}
