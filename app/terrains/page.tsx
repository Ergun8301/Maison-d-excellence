import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/TerrainsHost';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('terrains');

export default function Page() {
  return (
    <Site page="terrains">
      <View />
    </Site>
  );
}
