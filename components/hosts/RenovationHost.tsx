'use client';

import { useVals } from '@/components/Site';
import PageExtension from '@/components/PageExtension';

/**
 * Relie la page Extension à la surface de données tenue par <Site>.
 *
 * La vue générée components/views/Renovation.tsx n'est plus affichée : la page
 * a été réécrite à la main (components/PageExtension.tsx), sur les mêmes
 * styles et les mêmes effets que le reste du site.
 */
export default function RenovationHost() {
  const v = useVals();
  return <PageExtension goEstimation={v.goEstimation} goContact={v.goContact} />;
}
