import type { CSSProperties } from 'react';

/**
 * Convertit une déclaration CSS en objet de style React.
 *
 * La maquette compose certains styles à l'exécution : le bouton sélectionné du
 * simulateur, la pastille de statut d'un terrain, le filtre actif de la liste
 * des terrains. Elle écrit alors `style="...statique...;{{ variable }}"`, où la
 * variable porte une chaîne CSS. En JSX, `style` attend un objet — d'où cette
 * conversion.
 */
export function cssToStyle(css: string | null | undefined): CSSProperties {
  if (!css) return {};

  const out: Record<string, string> = {};

  const ajouter = (declaration: string) => {
    const i = declaration.indexOf(':');
    if (i === -1) return;
    const propriete = declaration.slice(0, i).trim();
    const valeur = declaration.slice(i + 1).trim();
    if (!propriete || !valeur) return;
    const cle = propriete.startsWith('--')
      ? propriete
      : propriete.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[cle] = valeur;
  };

  // Découpe sur `;` hors parenthèses, pour ne pas casser rgba(), clamp() ou
  // linear-gradient(), qui contiennent leurs propres séparateurs.
  let profondeur = 0;
  let courant = '';
  for (const c of css) {
    if (c === '(') profondeur++;
    else if (c === ')') profondeur--;
    if (c === ';' && profondeur === 0) {
      ajouter(courant);
      courant = '';
    } else {
      courant += c;
    }
  }
  ajouter(courant);

  return out as CSSProperties;
}
