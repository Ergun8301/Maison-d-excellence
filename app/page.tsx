import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/AccueilHost';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('accueil');

export default function Page() {
  return (
    <Site page="accueil">
      <View />
    </Site>
  );
}
