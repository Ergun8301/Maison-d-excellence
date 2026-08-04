'use client';

import { useVals } from '@/components/Site';
import Mentions from '@/components/views/Mentions';

/** Relie la vue à la surface de données tenue par <Site>. */
export default function MentionsHost() {
  return <Mentions {...useVals()} />;
}
