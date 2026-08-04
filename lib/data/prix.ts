// Grille de calcul du simulateur, reprise telle quelle de la maquette.
// Valeurs provisoires (marché de l'Ain, 2026) — signalées comme à valider
// avec le client. Tout le calcul dépend uniquement de ce bloc.

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
