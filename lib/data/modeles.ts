// Modèles de maisons.
//
// La maquette Claude Design livrait huit fiches illustrées de photos de banque
// d'images et décrites par des textes de remplissage — surfaces, prestations et
// durées inventées pour tenir la mise en page. Les fiches nommées d'après une
// réalisation réelle portent désormais la photo de cette réalisation et une
// description de ce que la photo montre, rien de plus : aucune surface, aucune
// prestation, aucune performance n'est affirmée sans qu'Aykut Atak l'ait
// confirmée. Un constructeur CCMI est tenu par ce qu'il affiche.
//
// Les fiches encore illustrées par une photo d'Unsplash gardent le texte de la
// maquette ; elles attendent leurs vraies photos.

export const MODELES = [
  {
    "name": "Dombes",
    "fam": "pp",
    "niveau": "Plain-pied",
    "desc": "Plain-pied compact à quatre pans, enduit gratté et menuiseries anthracite. Photographié à la livraison, avant l'aménagement des abords.",
    "photo": "/photos/maison-plain-pied-livraison-terrain-nu.webp"
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
    "name": "Lyon",
    "fam": "et",
    "niveau": "Avec étage",
    "desc": "Emprise au sol réduite et garage accolé : l'étage rend au jardin ce que la parcelle ne donne pas. Baies plein sud sur la pièce de vie.",
    "photo": "/photos/maison-lyon-etage-compacte.webp"
  },
  {
    "name": "Bugey",
    "fam": "et",
    "niveau": "Avec étage",
    "desc": "Séjour en double hauteur, étage complet avec salle d'eau indépendante, double garage accolé.",
    "photo": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "name": "Meximieux",
    "fam": "et",
    "niveau": "Avec étage",
    "desc": "Toiture quatre pans, double garage accolé et entrée abritée. Les deux volumes s'étagent pour poser la maison sans l'écraser.",
    "photo": "/photos/maison-meximieux-etage-garage.webp"
  },
  {
    "name": "Viriat",
    "fam": "ec",
    "niveau": "Plain-pied",
    "desc": "Murs en brique de terre cuite, dalle coulée et menuiseries posées : la maison saisie au hors-d'eau, avant doublage et finitions.",
    "photo": "/photos/chantier-viriat-brique-plancher.webp"
  },
  {
    "name": "Ambronay",
    "fam": "ec",
    "niveau": "Avec étage",
    "desc": "Conception bioclimatique : casquettes solaires dimensionnées, inertie maîtrisée, pompe à chaleur et poêle bois en appoint.",
    "photo": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80"
  }
] as const;
