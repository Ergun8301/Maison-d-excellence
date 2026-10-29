# Consignes du projet

## Photos des bandeaux (haut de page)

- Page Extension (`components/PageExtension.tsx`, classes `me-ext-bandeau`
  dans `app/design.css`) : sur ordinateur, le bandeau remplit exactement le
  premier écran (`height: 100svh`), sans bande blanche en bas. La photo est
  cadrée avec `object-position` pour garder l'extension ; on règle ce
  pourcentage plutôt que de rogner le fichier image.
- Sur téléphone, la photo est montrée entière (`height: auto`) et le texte
  passe dessous.
- Pas de zoom animé sur ces photos.
- Montrer le résultat au client en captures avant tout changement de cadrage.

## Méthode de travail

- Montrer les essais en captures d'écran avant de pousser : chaque push
  déclenche un déploiement Netlify (crédits).
