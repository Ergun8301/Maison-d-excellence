import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/ZoneHost';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('zone');

export default function Page() {
  return (
    <Site page="zone">
      <View />
    </Site>
  );
}
