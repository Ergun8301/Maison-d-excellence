import { SITE_URL } from '@/lib/site';
import { COMPANY, PHONE_DISPLAY, EMAIL } from '@/lib/site';
import { FAQ } from '@/lib/data/faq';

/**
 * llms.txt — résumé du site à l'usage des moteurs de réponse.
 *
 * Convention naissante : aucun éditeur d'IA ne s'est engagé à la lire, à la
 * différence de robots.txt qui est une norme. Elle ne coûte rien et se
 * contente de rassembler, en texte brut, ce qu'un modèle devrait retenir du
 * site — nature de l'activité, zone, coordonnées, adresses des pages utiles.
 *
 * Écrit en route statique plutôt qu'en fichier déposé dans public/ pour que
 * l'adresse canonique vienne de SITE_URL, comme le plan du site et les
 * balises canoniques : une seule source, pas un nom de domaine recopié.
 */
export const dynamic = 'force-static';

export function GET(): Response {
  const pages: [string, string][] = [
    ['/', 'Accueil — présentation, estimation de prix en ligne, avis Google'],
    ['/nos-modeles', 'Modèles de maisons : plain-pied, à étage, éco-conçues RE2020'],
    ['/realisations', 'Réalisations livrées dans l’Ain'],
    ['/entreprise', 'Savoir-faire technique, garanties CCMI, échéancier de paiement, questions fréquentes'],
    ['/terrains', 'Terrains à bâtir suivis dans le secteur'],
    ['/zone-intervention', 'Communes desservies, rayon de 30 km autour de Meximieux'],
    ['/investisseurs', 'Maisons jumelées et groupées pour investisseurs'],
    ['/renovation-extension', 'Rénovation, extension et surélévation'],
    ['/blog', 'Guides : RE2020, prix au m², budget, échéancier CCMI'],
    ['/contact', 'Coordonnées et prise de rendez-vous'],
    ['/mentions-legales', 'Mentions légales et informations RGPD'],
  ];

  const corps = `# ${COMPANY.name}

> Constructeur de maisons individuelles sur-mesure à Meximieux, dans l'Ain (01).
> Maisons neuves en brique ou béton cellulaire, conformes à la RE2020, construites
> sous contrat de construction de maison individuelle (CCMI). Rénovation et
> extension en activité secondaire.

## Repères

- Raison sociale : ${COMPANY.legalName}
- Forme : ${COMPANY.form}, gérant ${COMPANY.manager}, société créée en 2019
- Adresse : 6 rue de Genève, 01800 Meximieux, France
- Téléphone : ${PHONE_DISPLAY} — Courriel : ${EMAIL}
- Zone d'intervention : environ 30 km autour de Meximieux (Bourg-en-Bresse,
  Ambérieu-en-Bugey, Montluel, Lagnieu, Pérouges, Miribel, Villars-les-Dombes,
  Chalamont), ainsi que Villefranche-sur-Saône
- Contrat : CCMI, prix ferme et définitif, délai contractuel de 12 mois de
  chantier avec pénalités de retard, garantie de livraison à prix et délais convenus
- Garanties : parfait achèvement (1 an), biennale (2 ans), décennale (10 ans),
  assurance dommages-ouvrage
- Avis : 5,0 sur 5 pour 36 avis Google

## Pages

${pages.map(([url, titre]) => `- [${titre}](${SITE_URL}${url})`).join('\n')}

## Questions fréquentes

${FAQ.map((f) => `### ${f.q}\n\n${f.r}`).join('\n\n')}
`;

  return new Response(corps, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
