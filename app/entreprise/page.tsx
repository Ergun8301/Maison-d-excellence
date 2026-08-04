import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/EntrepriseHost';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('entreprise');

export default function Page() {
  return (
    <Site page="entreprise">
      <View />
    </Site>
  );
}
