import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/BlogHost';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('blog');

export default function Page() {
  return (
    <Site page="blog">
      <View />
    </Site>
  );
}
