import type { Metadata } from 'next';
import Site from '@/components/Site';
import Locale from '@/components/views/Locale';
import { pageMetadata } from '@/lib/seo';
import { EXTENSION_PAR_SLUG } from '@/lib/data/locales-extension';

export const metadata: Metadata = pageMetadata('extMeximieux');

export default function Page() {
  return (
    <Site page="locale">
      <Locale page={EXTENSION_PAR_SLUG['extension-maison-meximieux']} />
    </Site>
  );
}
