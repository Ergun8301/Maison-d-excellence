// Repris tel quel de la maquette Claude Design (terrains à bâtir).
// Ne pas reformuler : le rendu des vues en dépend mot pour mot.

export const TERRAINS = [
  {
    "ref": "TA-014",
    "slug": "ta-014",
    "commune": "Meximieux",
    "secteur": "Plaine de l'Ain",
    "surface": 612,
    "price": 128000,
    "status": "Disponible",
    "note": "Viabilisé, libre constructeur",
    "desc": "Terrain plat en second rideau, à 8 minutes à pied du centre et de la gare. Viabilisation en limite de parcelle, exposition ouest sur le jardin.",
    "photo": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "ref": "TA-021",
    "slug": "ta-021",
    "commune": "Pérouges",
    "secteur": "Plaine de l'Ain",
    "surface": 540,
    "price": 145000,
    "status": "Dernier lot",
    "note": "Vue dégagée, proche cité médiévale",
    "desc": "Dernier lot d’un petit tènement de quatre parcelles, en léger surplomb. Vue dégagée sur la plaine, à cinq minutes de la cité médiévale.",
    "photo": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "ref": "TA-009",
    "slug": "ta-009",
    "commune": "Villieu-Loyes-Mollon",
    "secteur": "Plaine de l'Ain",
    "surface": 720,
    "price": 119000,
    "status": "Disponible",
    "note": "Au calme, hors lotissement",
    "desc": "Parcelle hors lotissement, sans règlement de copropriété, bordée d’une haie existante. Idéale pour un plain-pied largement ouvert au sud.",
    "photo": "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "ref": "TA-030",
    "slug": "ta-030",
    "commune": "Montluel",
    "secteur": "Côtière",
    "surface": 480,
    "price": 159000,
    "status": "Réservé",
    "note": "Proche A42, commerces à pied",
    "desc": "Parcelle de centre-bourg, commerces et écoles accessibles à pied, entrée d’autoroute à cinq minutes. Emprise adaptée à une maison à étage.",
    "photo": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "ref": "TA-017",
    "slug": "ta-017",
    "commune": "Chazey-sur-Ain",
    "secteur": "Plaine de l'Ain",
    "surface": 845,
    "price": 112000,
    "status": "Disponible",
    "note": "Grand terrain arboré",
    "desc": "Grande parcelle arborée avec beaux sujets conservés. Profondeur suffisante pour implanter la maison en retrait de la voie.",
    "photo": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "ref": "TA-024",
    "slug": "ta-024",
    "commune": "Lagnieu",
    "secteur": "Bugey",
    "surface": 600,
    "price": 98000,
    "status": "Disponible",
    "note": "Belle exposition sud",
    "desc": "Terrain rectangulaire à faible pente, plein sud. Excellent compromis pour une maison RE2020 avec apports solaires maîtrisés.",
    "photo": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "ref": "TA-028",
    "slug": "ta-028",
    "commune": "Dagneux",
    "secteur": "Côtière",
    "surface": 510,
    "price": 152000,
    "status": "Dernier lot",
    "note": "Quartier résidentiel recherché",
    "desc": "Quartier résidentiel calme et déjà bâti, réseaux en place. Bon potentiel locatif pour un projet de maison jumelée.",
    "photo": "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80"
  },
  {
    "ref": "TA-011",
    "slug": "ta-011",
    "commune": "Ambérieu-en-Bugey",
    "secteur": "Bugey",
    "surface": 680,
    "price": 105000,
    "status": "Disponible",
    "note": "Proche gare et écoles",
    "desc": "À dix minutes de la gare d’Ambérieu, secteur familial. Sol favorable au vide sanitaire selon l’étude géotechnique préalable.",
    "photo": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80"
  }
] as const;
