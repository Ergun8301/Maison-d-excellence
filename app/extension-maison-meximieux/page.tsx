import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/ExtensionVilleHost';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('extMeximieux');

export default function Page() {
  return (
    <Site page="locale">
      <View slug="extension-maison-meximieux" />
    </Site>
  );
}
