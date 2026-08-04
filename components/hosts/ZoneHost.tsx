'use client';

import { useVals } from '@/components/Site';
import Zone from '@/components/views/Zone';

/** Relie la vue à la surface de données tenue par <Site>. */
export default function ZoneHost() {
  return <Zone {...useVals()} />;
}
