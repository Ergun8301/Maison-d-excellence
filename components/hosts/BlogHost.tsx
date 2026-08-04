'use client';

import { useVals } from '@/components/Site';
import Blog from '@/components/views/Blog';

/** Relie la vue à la surface de données tenue par <Site>. */
export default function BlogHost() {
  return <Blog {...useVals()} />;
}
