# Consignes du projet

## Photos des bandeaux (haut de page)

- Une photo de bandeau est montrée **en pleine largeur, sans recadrage, hauteur
  automatique** (`width: 100%; height: auto`) : on doit voir la photo entière,
  dessus et dessous compris.
- Pas de `object-fit: cover` avec une hauteur imposée sur ces photos, pas de
  zoom animé : c'est ce qui coupait et grossissait la photo.
- Sur téléphone, le texte passe sous la photo plutôt que par-dessus.
- Exemple : le bandeau de `components/PageExtension.tsx` (classes
  `me-ext-bandeau` dans `app/design.css`).

## Méthode de travail

- Montrer les essais en captures d'écran avant de pousser : chaque push
  déclenche un déploiement Netlify (crédits).
