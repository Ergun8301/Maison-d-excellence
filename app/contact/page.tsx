import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/ContactHost';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('contact');

export default function Page() {
  return (
    <Site page="contact">
      <View />
    </Site>
  );
}
