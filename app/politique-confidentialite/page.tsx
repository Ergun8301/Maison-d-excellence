import type { Metadata } from 'next';
import Site from '@/components/Site';
import Confidentialite from '@/components/views/Confidentialite';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('confidentialite');

export default function Page() {
  return (
    <Site page="confidentialite">
      <Confidentialite />
    </Site>
  );
}
