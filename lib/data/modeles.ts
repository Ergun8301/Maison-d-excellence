// Repris tel quel de la maquette Claude Design (modèles de maisons).
// Ne pas reformuler : le rendu des vues en dépend mot pour mot.

export const MODELES = [
  {
    "name": "Dombes",
    "fam": "pp",
    "niveau": "Plain-pied",
    "desc": "Compact et lumineux : séjour traversant, chambres alignées au nord, cellier attenant au garage. Le bon calibre pour un premier achat.",
    "photo": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "name": "Pérouges",
    "fam": "pp",
    "niveau": "Plain-pied",
    "desc": "Un L ouvert plein sud qui abrite la terrasse des vents dominants. Suite parentale d'un côté, chambres de l'autre.",
    "photo": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "name": "Chalamont",
    "fam": "pp",
    "niveau": "Plain-pied",
    "desc": "Le plain-pied familial : double garage, grande pièce de vie sous plafond rampant et terrasse couverte.",
    "photo": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "name": "Côtière",
    "fam": "et",
    "niveau": "Avec étage",
    "desc": "Emprise au sol réduite : conçue pour les parcelles étroites des centres-bourgs, sans sacrifier le jardin.",
    "photo": "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "name": "Bugey",
    "fam": "et",
    "niveau": "Avec étage",
    "desc": "Séjour en double hauteur, étage complet avec salle d'eau indépendante, double garage accolé.",
    "photo": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "name": "Saône",
    "fam": "et",
    "niveau": "Avec étage",
    "desc": "Grande maison familiale : bureau au rez-de-chaussée, buanderie séparée. Pensée pour durer trente ans.",
    "photo": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "name": "Cerdon",
    "fam": "ec",
    "niveau": "Plain-pied",
    "desc": "Ossature bois et isolants biosourcés : chantier sec, très bonne performance d'été, empreinte carbone divisée par deux.",
    "photo": "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "name": "Ambronay",
    "fam": "ec",
    "niveau": "Avec étage",
    "desc": "Conception bioclimatique : casquettes solaires dimensionnées, inertie maîtrisée, pompe à chaleur et poêle bois en appoint.",
    "photo": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80"
  }
] as const;
