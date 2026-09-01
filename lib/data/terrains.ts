// Terrains à bâtir.
//
// La maquette Claude Design livrait huit fiches complètes — référence TA-0xx,
// commune, surface au mètre carré, prix à l'euro, statut de commercialisation
// et descriptif de voisinage — illustrées de photographies de banque d'images.
// Rien de tout cela n'existait : ni les parcelles, ni les prix, ni les
// références. Un constructeur soumis au CCMI est engagé par ce qu'il affiche,
// et ces fiches annonçaient des biens achetables dans des communes réelles.
//
// Elles sont retirées tant qu'aucun terrain réel n'est à publier. La page et
// son entrée de menu restent en place : la vue bascule sur un état vide
// (voir la condition `sansTerrains` dans components/Site.tsx), et le plan du
// site cesse de son côté de déclarer les huit adresses de fiches.
//
// Pour republier : remplir ce tableau, puis rétablir la route de détail —
// l'export statique refuse une route dynamique sans aucun paramètre, elle a
// donc dû être retirée :
//
//     git show dc13d18:'app/terrains/[slug]/page.tsx' > 'app/terrains/[slug]/page.tsx'
//
// La vue (components/views/FicheTerrain.tsx) et son hôte sont restés en place :
// seule la route manque. La liste, les filtres et le plan du site, eux,
// repartent d'eux-mêmes dès que le tableau n'est plus vide.

export type Terrain = {
  ref: string;
  slug: string;
  commune: string;
  secteur: string;
  surface: number;
  price: number;
  status: string;
  note: string;
  desc: string;
  photo: string;
};

export const TERRAINS: readonly Terrain[] = [];
