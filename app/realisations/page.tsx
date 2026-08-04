import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/RealisationsHost';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('realisations');

export default function Page() {
  return (
    <Site page="realisations">
      <View />
    </Site>
  );
}
