'use client';

import { useVals } from '@/components/Site';
import Article from '@/components/views/Article';

/** Relie la vue à la surface de données tenue par <Site>. */
export default function ArticleHost() {
  return <Article {...useVals()} />;
}
