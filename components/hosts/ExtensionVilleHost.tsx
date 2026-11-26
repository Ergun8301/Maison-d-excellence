'use client';

import { useVals } from '@/components/Site';
import PageExtensionVille from '@/components/PageExtensionVille';
import { EXTENSION_PAR_SLUG } from '@/lib/data/locales-extension';

/** Relie une page « Extension de maison à <ville> » à la surface de données de <Site>. */
export default function ExtensionVilleHost({ slug }: { slug: string }) {
  const v = useVals();
  return <PageExtensionVille page={EXTENSION_PAR_SLUG[slug]} goEstimation={v.goEstimation} goContact={v.goContact} />;
}
