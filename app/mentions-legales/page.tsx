import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/MentionsHost';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('mentions');

export default function Page() {
  return (
    <Site page="mentions">
      <View />
    </Site>
  );
}
