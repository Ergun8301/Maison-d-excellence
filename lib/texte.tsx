import { Fragment, type ReactNode } from 'react';
import Link from 'next/link';

/**
 * Rend un paragraphe d'article en y activant les liens internes.
 *
 * Les corps d'articles sont stockés en texte brut (lib/data/articles.ts), ce
 * qui interdisait tout lien au fil de la lecture : un article sur le prix au
 * mètre carré ne pouvait pas renvoyer vers le simulateur, ni celui sur le
 * CCMI vers la page qui détaille les garanties. Les seuls liens d'un article
 * étaient les deux boutons de fin.
 *
 * On garde le stockage en texte — c'est ce qui rend les articles relisibles
 * et modifiables sans toucher au balisage — et on y admet une seule notation,
 * celle de Markdown : `[texte affiché](/chemin)`. Rien d'autre n'est
 * interprété, en particulier aucune balise : le texte reste du texte.
 *
 * Les chemins sont internes par construction : la notation n'accepte que ce
 * qui commence par une barre oblique, donc aucun lien sortant ne peut être
 * introduit par mégarde depuis les données.
 */
const LIEN = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export function rendreTexte(texte: string): ReactNode {
  const morceaux: ReactNode[] = [];
  let curseur = 0;
  let m: RegExpExecArray | null;

  LIEN.lastIndex = 0;
  while ((m = LIEN.exec(texte)) !== null) {
    if (m.index > curseur) morceaux.push(texte.slice(curseur, m.index));
    morceaux.push(
      <Link key={`${m.index}-${m[2]}`} href={m[2]} className="me-link-texte">
        {m[1]}
      </Link>
    );
    curseur = m.index + m[0].length;
  }

  if (curseur === 0) return texte;
  if (curseur < texte.length) morceaux.push(texte.slice(curseur));
  return morceaux.map((p, i) => <Fragment key={i}>{p}</Fragment>);
}
