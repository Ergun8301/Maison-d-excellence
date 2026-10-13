import type { Metadata } from 'next';
import Site from '@/components/Site';
import Locale from '@/components/views/Locale';
import { pageMetadata } from '@/lib/seo';
import { LOCALE_PAR_SLUG } from '@/lib/data/locales';

export const metadata: Metadata = pageMetadata('attignat');

export default function Page() {
  return (
    <Site page="locale">
      <Locale page={LOCALE_PAR_SLUG['construction-maison-attignat']} />
    </Site>
  );
}
