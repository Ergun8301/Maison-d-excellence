// Grille de calcul du simulateur — SOURCE UNIQUE du chiffrage.
//
// ⚠️ CHIFFRES DE DÉMONSTRATION. À remplacer par la grille d'Aykut Atak avant
// toute mise en ligne : un prix affiché par un constructeur CCMI l'engage.
// Le site peut être montré au client avec ces valeurs, en le lui disant — il
// corrigera plus vite devant un résultat faux que devant un tableau vide.
//
// Ce qui tient : les rapports entre les valeurs. Le 1,07 du plain-pied traduit
// le « 5 à 10 % de plus au m² » écrit ailleurs sur le site (milieu de
// fourchette). Les 4 800 € par chambre, les paliers de garage et le 0,80 du
// prêt-à-finir sont des écarts relatifs cohérents. Corriger `baseM2` seul
// recale donc tout le reste proportionnellement.
//
// Ce qui est arbitraire : `baseM2` (1 580 €/m²) et `fourchette` (±5,5 %,
// calibrée pour qu'une estimation de 120 m² tombe sur environ ±13 000 €).
//
// La maquette lisait ce prix à deux endroits — une propriété de composant
// l'emportait sur cette grille. Cette propriété a été supprimée à
// l'intégration : `estimate()` dans components/Site.tsx ne lit que ce fichier,
// pour qu'une correction ici ait bien un effet.

export const ME_PRIX = {
  baseM2: 1580,              // € / m² habitable, construction seule (hors terrain)
  coefPlainPied: 1.07,       // un plain-pied coûte plus cher au m² (emprise, toiture, fondations)
  coefEtage: 1.00,
  chambresRef: 3,            // configuration de référence
  chambreDelta: 4800,        // € par chambre en plus / en moins
  garage: { 'Sans': 0, 'Simple': 14500, 'Double': 25000 },
  // Niveau de livraison : coefficient appliqué au coût de construction (hors vide sanitaire).
  finition: { 'Clé en main': 1, 'Prêt à finir': 0.80, "Hors d'eau / hors d'air": 0.58 },
  videSanitaire: { 'Oui': 9500, 'Non': 0 },
  fourchette: 0.055,         // ± appliqué au total
  arrondi: 1000              // arrondi d'affichage
};
