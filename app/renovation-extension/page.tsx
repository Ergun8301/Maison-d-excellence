import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/RenovationHost';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('renovation');

export default function Page() {
  return (
    <Site page="renovation">
      <View />
    </Site>
  );
}
