import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/InvestisseursHost';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('investisseurs');

export default function Page() {
  return (
    <Site page="investisseurs">
      <View />
    </Site>
  );
}
