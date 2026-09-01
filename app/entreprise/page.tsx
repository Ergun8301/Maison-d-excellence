import type { Metadata } from 'next';
import Site from '@/components/Site';
import View from '@/components/hosts/EntrepriseHost';
import { pageMetadata } from '@/lib/seo';
import { FAQ } from '@/lib/data/faq';

export const metadata: Metadata = pageMetadata('entreprise');

/**
 * Balisage FAQPage, construit depuis les mêmes questions que la section
 * affichée plus bas dans la page. Il est posé ici et non dans le gabarit
 * commun : une FAQPage décrit une page précise, pas un site entier.
 */
const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.r },
  })),
};

export default function Page() {
  return (
    <Site page="entreprise">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <View />
    </Site>
  );
}
