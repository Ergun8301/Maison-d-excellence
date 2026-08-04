import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/NosModelesHost';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('modeles');

export default function Page() {
  return (
    <Site page="modeles">
      <View />
    </Site>
  );
}
