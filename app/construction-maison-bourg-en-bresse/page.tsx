import type { Metadata } from 'next';
import Site from '@/components/Site';
import Locale from '@/components/views/Locale';
import { pageMetadata } from '@/lib/seo';
import { LOCALE_PAR_SLUG } from '@/lib/data/locales';
import { faqJsonLd } from '@/lib/faq-jsonld';

const PAGE = LOCALE_PAR_SLUG['construction-maison-bourg-en-bresse'];

export const metadata: Metadata = pageMetadata('bourg');

export default function Page() {
  return (
    <Site page="locale">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(PAGE.faq)) }}
      />
      <Locale page={PAGE} />
    </Site>
  );
}
