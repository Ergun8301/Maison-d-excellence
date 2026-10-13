import type { QuestionLocale } from '@/lib/data/locales';

/**
 * Balisage FAQPage, construit depuis les questions réellement affichées.
 *
 * Factorisé parce que quatre pages en portent un désormais : l'entreprise et
 * les trois pages locales. Google exige que le balisage reflète un contenu
 * visible ; passer par une fonction commune évite qu'une page finisse par
 * baliser autre chose que ce qu'elle montre.
 */
export function faqJsonLd(questions: readonly QuestionLocale[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.r },
    })),
  };
}
