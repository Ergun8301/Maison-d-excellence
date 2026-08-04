// Repris tel quel de la maquette Claude Design (échéancier de paiement CCMI).
// Ne pas reformuler : le rendu des vues en dépend mot pour mot.

export const ECHEANCIER = [
  {
    "pct": "5 %",
    "t": "À la signature du contrat",
    "d": "Plafond légal, et uniquement si une garantie de remboursement vous est remise. Sans cette garantie, aucun versement n’est dû à la signature."
  },
  {
    "pct": "15 %",
    "t": "À l’ouverture du chantier",
    "d": "Le terrassement a commencé et le chantier est réellement engagé."
  },
  {
    "pct": "25 %",
    "t": "Achèvement des fondations",
    "d": "Semelles et soubassements terminés, vide sanitaire réalisé le cas échéant."
  },
  {
    "pct": "40 %",
    "t": "Achèvement des murs",
    "p": "",
    "d": "Élévation en brique ou béton cellulaire terminée sur l’ensemble des niveaux."
  },
  {
    "pct": "60 %",
    "t": "Mise hors d’eau",
    "d": "Charpente et couverture posées : la maison est protégée des intempéries."
  },
  {
    "pct": "75 %",
    "t": "Mise hors d’air et cloisons",
    "d": "Menuiseries extérieures posées, cloisons intérieures montées."
  },
  {
    "pct": "95 %",
    "t": "Achèvement des équipements",
    "d": "Plomberie, électricité, chauffage et menuiseries intérieures terminés."
  },
  {
    "pct": "100 %",
    "t": "Remise des clés",
    "d": "Solde de 5 % à la réception. En cas de réserves, il peut être consigné jusqu’à leur levée."
  }
] as const;
