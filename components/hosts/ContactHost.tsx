'use client';

import { useVals } from '@/components/Site';
import Contact from '@/components/views/Contact';

/** Relie la vue à la surface de données tenue par <Site>. */
export default function ContactHost() {
  return <Contact {...useVals()} />;
}
