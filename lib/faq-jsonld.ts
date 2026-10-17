import type { QuestionLocale } from '@/lib/data/locales';
import { texteBrut } from '@/lib/texte';

/**
 * Balisage FAQPage, construit depuis les questions réellement affichées.
 *
 * Factorisé parce que seize pages en portent un désormais : l'entreprise et
 * les quinze pages locales. Les réponses peuvent contenir des liens notés
 * `[texte](/chemin)` : le balisage en reprend le texte seul. Google exige que le balisage reflète un contenu
 * visible ; passer par une fonction commune évite qu'une page finisse par
 * baliser autre chose que ce qu'elle montre.
 */
export function faqJsonLd(questions: readonly QuestionLocale[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: texteBrut(item.q),
      acceptedAnswer: { '@type': 'Answer', text: texteBrut(item.r) },
    })),
  };
}
