import fs from 'node:fs';
import path from 'node:path';
import { toJsx } from './tojsx.mjs';

const SRC = "/workspace/maison-d-excellence/design/Maisons d'Excellence.dc.html";
const ROOT = '/workspace/maison-d-excellence';

const html = fs.readFileSync(SRC, 'utf8');

const iHeader = html.indexOf('<header data-header');
const iFooter = html.lastIndexOf('<footer');
const iFooterEnd = html.indexOf('</footer>', iFooter) + '</footer>'.length;
const mains = [...html.matchAll(/<main data-screen-label="([^"]*)"/g)];

/** Vues -> nom de composant + route Next.js (slugs du sitemap). */
const VIEWS = [
  ['Accueil', 'Accueil', 'accueil'],
  ['Nos modèles', 'NosModeles', 'modeles'],
  ['Contact', 'Contact', 'contact'],
  ['Réalisations', 'Realisations', 'realisations'],
  ["L'entreprise", 'Entreprise', 'entreprise'],
  ['Terrains', 'Terrains', 'terrains'],
  ['Fiche terrain', 'FicheTerrain', 'terrain-detail'],
  ['Investisseurs', 'Investisseurs', 'investisseurs'],
  ['Blog', 'Blog', 'blog'],
  ['Article de blog', 'Article', 'article'],
  ["Zone d'intervention", 'Zone', 'zone'],
  ['Rénovation &amp; extension', 'Renovation', 'renovation'],
  ['Mentions légales', 'Mentions', 'mentions'],
];

/** Identifiants de premier niveau consommés par un bloc de gabarit. */
function bindings(block) {
  const loopVars = new Set([...block.matchAll(/<sc-for[^>]*\bas="([^"]+)"/g)].map((m) => m[1]));
  const used = new Set();
  for (const m of block.matchAll(/\{\{\s*([A-Za-z_$][\w$]*)/g)) {
    const id = m[1];
    if (!loopVars.has(id) && id !== 'true' && id !== 'false' && id !== 'null') used.add(id);
  }
  return [...used].sort();
}

/**
 * La maquette référence ses photos en relatif (`photos/…`), ce qui se résout
 * mal depuis une route imbriquée comme /blog/mon-article. On les ancre à la
 * racine : les fichiers vivent dans public/photos/.
 */
const absolutePhotos = (s) =>
  // Ancrage à la racine, et extension alignée sur les fichiers convertis en
  // WebP par scripts/optimise-photos.mjs.
  s.replace(/src="photos\/([^"]+?)\.(png|jpe?g|webp)"/g, 'src="/photos/$1.webp"');

/**
 * Corrections de contenu appliquées à la source avant conversion, pour qu'une
 * régénération ne les perde pas. Elles ne portent que sur du texte : aucun
 * style, aucune classe, aucun nœud n'est touché.
 */
const CORRECTIONS = [
  // La boîte contact@ suppose un domaine qui n'est pas encore déposé. On
  // affiche l'adresse réellement utilisée par le dirigeant.
  ['contact@maisons-dexcellence.fr', 'aykut.atak@sfr.fr'],

  // Mentions légales : SIRET du siège, date d'immatriculation et code APE
  // relevés sur le Kbis, plus une adresse de contact écrite.
  [
    'SIREN 844 477 794 — RCS Bourg-en-Bresse — TVA intracommunautaire FR04844477794. ' +
      'Gérant et responsable de la publication : Aykut Atak. Téléphone : 04 74 34 66 43.',
    'SIREN 844 477 794 — SIRET du siège 844 477 794 00011 — RCS Bourg-en-Bresse, ' +
      'immatriculée le 10 décembre 2018 — TVA intracommunautaire FR04844477794 — ' +
      'code APE 41.20A (construction de maisons individuelles). ' +
      'Gérant et responsable de la publication : Aykut Atak. ' +
      'Téléphone : 04 74 34 66 43 — courriel : aykut.atak@sfr.fr.',
  ],

  // L'article 6 III de la loi pour la confiance dans l'économie numérique
  // impose de nommer l'hébergeur avec ses coordonnées : « disponibles sur
  // demande » ne satisfait pas cette obligation.
  [
    "Le site est hébergé par un prestataire situé dans l'Union européenne. " +
      "Les coordonnées complètes de l'hébergeur sont disponibles sur demande écrite " +
      "adressée au siège de l'entreprise.",
    'Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, ' +
      'CA 91723, États-Unis — vercel.com.',
  ],

  // Signature de réalisation, en bas du pied de page.
  //
  // Le logo est le vrai tracé d'IPPYX, repris depuis public/assets/logo.svg de
  // son dépôt — pas une approximation redessinée. Il est rendu en monochrome
  // sur la couleur du pied de page : c'est le seul traitement qui reste
  // identique d'un site client à l'autre, quelle que soit leur palette.
  //
  // Le lien ne porte pas rel="nofollow" : il transmet volontairement son
  // autorité. Il s'ajoute sous la ligne existante, qui n'est pas touchée — le
  // pied de page s'allonge, rien ne se déplace.
  [
    `<p style="margin:0;font-size:11.5px;color:rgba(247,247,244,0.4);">© {{ year }} — Tous droits réservés</p>
      </div>`,
    `<p style="margin:0;font-size:11.5px;color:rgba(247,247,244,0.4);">© {{ year }} — Tous droits réservés</p>
      </div>
      <div style="padding:0 0 38px;display:flex;justify-content:center;">
        <a href="https://ippyx.com/?utm_source=maisons-excellence&amp;utm_medium=signature&amp;utm_campaign=footer" target="_blank" rel="noopener" class="me-signature" style="display:inline-flex;align-items:center;gap:9px;text-decoration:none;font-size:11.5px;color:rgba(247,247,244,0.34);transition:color .3s ease;">
          <svg width="13" height="13.5" viewBox="0 0 26 27" fill="currentColor" aria-hidden="true" style="flex:none;">
            <rect x="0" y="7" width="4" height="4"></rect>
            <rect x="4" y="11" width="4" height="4"></rect>
            <rect x="8" y="15" width="4" height="4"></rect>
            <rect x="12" y="19" width="4" height="4"></rect>
            <rect x="16" y="23" width="4" height="4"></rect>
            <rect x="16" y="7" width="4" height="4"></rect>
            <rect x="12" y="11" width="4" height="4"></rect>
            <rect x="4" y="19" width="4" height="4"></rect>
            <rect x="0" y="23" width="4" height="4"></rect>
            <rect x="21.6" y="1.4" width="4" height="4"></rect>
          </svg>
          <span>Site réalisé par <span style="font-weight:600;letter-spacing:0.1em;">IPPYX</span></span>
        </a>
      </div>`,
  ],

  // Bandeau de la page Contact. Le cadrage d'origine colle à la vitrine : on
  // est contre la façade, sans recul. La photo de la devanture entière, prise
  // depuis le trottoir d'en face, était fournie mais inutilisée. Le cadrage
  // remonte pour garder l'enseigne dans le champ malgré le zoom lent, qui est
  // conservé tel quel.
  [
    'src="photos/bureau-meximieux-vitrine-bandeau.png" alt="Les vitrines du bureau Maisons d\'Excellence, 6 rue de Genève à Meximieux" style="width:100%;height:100%;object-fit:cover;object-position:50% 46%;animation:meKb 18s ease-out forwards;"',
    'src="photos/devanture-rue.png" alt="La devanture du bureau Maisons d\'Excellence, 6 rue de Genève à Meximieux" style="width:100%;height:100%;object-fit:cover;object-position:50% 47%;animation:meKbDoux 22s ease-out forwards;"',
  ],

  // Bandeau de la page Entreprise. La photo de gros œuvre en brique y servait
  // déjà deux fois, plus une troisième sur l'accueil : trois occurrences de la
  // même image. Le bandeau prend une photo de conception sur plans, plus juste
  // pour une page qui parle de savoir-faire et de garanties. La brique reste
  // dans la section consacrée aux matériaux, où elle est à sa place. Le cadrage
  // descend sur les mains et le plan, ce qui écarte du champ le logo d'une
  // autre entreprise brodé sur le polo.
  [
    '<img src="photos/chantier-gros-oeuvre-brique.png" alt="Chantier de maison individuelle suivi par Maisons d\'Excellence dans l\'Ain" style="width:100%;height:100%;object-fit:cover;object-position:50% 46%;animation:meKb 18s ease-out forwards;">',
    '<img src="photos/entreprise-bandeau.png" alt="Conception des plans d\'une maison individuelle sur mesure par Maisons d\'Excellence" style="width:100%;height:100%;object-fit:cover;object-position:50% 64%;animation:meKb 18s ease-out forwards;">',
  ],

  // Bandeau de la page Terrains : photo fournie par le client à la place du
  // visuel de banque d'images. Le cadrage d'origine est conservé.
  [
    '<img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&amp;fit=crop&amp;w=2000&amp;q=80" alt="Terrain à bâtir constructible dans la Plaine de l\'Ain" style="width:100%;height:100%;object-fit:cover;object-position:50% 54%;animation:meKb 18s ease-out forwards;">',
    '<img src="photos/terrain-a-batir-bandeau.png" alt="Terrain à bâtir constructible dans la Plaine de l\'Ain" style="width:100%;height:100%;object-fit:cover;object-position:50% 54%;animation:meKb 18s ease-out forwards;">',
  ],

  // Hauteur des bandeaux de page intérieure.
  //
  // La hauteur minimale était déjà commune, mais le bandeau s'étire à la
  // hauteur de son contenu : un titre court donnait un bandeau bas. Mesuré au
  // navigateur, Contact tombait à 432 px quand Réalisations et Entreprise
  // atteignaient 600 px — d'où l'impression de photo écrasée en passant d'une
  // page à l'autre. Le plancher est remonté pour que toutes s'alignent sur la
  // plus haute, sans jamais dépasser 600 px sur un petit écran.
  ['min-height:clamp(420px,48vh,580px)', 'min-height:clamp(480px,66vh,600px)'],

  // Confirmation des formulaires. Le message annonçait « votre demande est
  // partie », ce qui est faux : un lien WhatsApp ouvre la conversation avec le
  // texte déjà saisi, mais rien ne part tant que le visiteur n'appuie pas sur
  // Envoyer. Annoncer un envoi qui n'a pas eu lieu fait perdre des demandes
  // sans que personne ne s'en aperçoive.
  ['Merci, votre demande est partie.', 'Dernière étape dans WhatsApp.'],
  [
    'Nous vous répondons sous 48 h ouvrées. Pour une demande urgente, appelez le 04 74 34 66 43 ou écrivez-nous sur WhatsApp.',
    'WhatsApp vient de s\'ouvrir avec votre demande déjà rédigée. Appuyez sur Envoyer : sans ce dernier geste, elle ne nous parviendra pas. Vous préférez le téléphone ? 04 74 34 66 43.',
  ],

  // Liens secondaires du menu mobile. Disposés en ligne avec retour à la
  // ligne, ils se répartissaient de travers — « Zone d'intervention » tombait
  // seul sur une deuxième ligne. Une colonne, séparée du menu principal par un
  // filet, les distingue nettement des entrées principales.
  [
    '<div style="display:flex;flex-wrap:wrap;gap:14px 26px;margin-top:30px;">',
    '<div style="display:flex;flex-direction:column;gap:16px;margin-top:34px;padding-top:26px;border-top:1px solid rgba(247,247,244,0.12);">',
  ],

  // Fermeture du menu mobile. L'ouverture ne laissait aucun repère : le menu
  // se referme au toucher hors des liens, mais rien ne l'indiquait. Une croix
  // reprend l'emplacement et la taille exacts du bouton d'ouverture, si bien
  // qu'elle tombe sous le doigt qui vient d'appuyer.
  [
    '<div onClick="{{ closeMenu }}" style="position:fixed;inset:0;z-index:200;background:rgba(11,13,12,0.97);backdrop-filter:blur(8px);display:flex;flex-direction:column;justify-content:center;padding:40px clamp(28px,8vw,64px);overflow-y:auto;">',
    '<div onClick="{{ closeMenu }}" style="position:fixed;inset:0;z-index:200;background:rgba(11,13,12,0.97);backdrop-filter:blur(8px);display:flex;flex-direction:column;justify-content:center;padding:40px clamp(28px,8vw,64px);overflow-y:auto;">'
    + '<button onClick="{{ closeMenu }}" aria-label="Fermer le menu" class="me-fermer" style="position:absolute;top:clamp(17px,2vw,26px);right:clamp(20px,5vw,64px);width:44px;height:44px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(247,247,244,0.5);border-radius:100px;background:transparent;color:#F7F7F4;cursor:pointer;">'
    + '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M3 3 L13 13 M13 3 L3 13"></path></svg>'
    + '</button>',
  ],

  // Pastille Google en bas à gauche du hero.
  //
  // La mention d'origine était une ligne de texte doré, dans la palette du
  // site : lisible, mais rien n'y signalait Google. Elle devient la pastille
  // que le visiteur reconnaît d'emblée — fond blanc, logo à ses quatre
  // couleurs, étoiles jaunes — et mène à la fiche d'un toucher. C'est le seul
  // endroit du site où la palette de Google prend le pas sur celle du design :
  // une pastille de confiance ne vaut que si elle est reconnaissable.
  [
    `<div data-reveal="" data-delay="560" class="me-hero-avis" style="justify-self:start;display:inline-flex;align-items:center;gap:11px;">
          <span style="color:#D3B27A;font-size:12.5px;letter-spacing:0.16em;">★★★★★</span>
          <span style="color:rgba(247,247,244,0.82);font-size:12.5px;font-weight:500;letter-spacing:0.02em;white-space:nowrap;">5,0 / 5 — {{ avisCount }} avis Google</span>
        </div>`,
    `<a href="{{ avisUrl }}" target="_blank" rel="noopener noreferrer" data-reveal="" data-delay="560" class="me-hero-avis me-pastille-google" aria-label="Voir les avis Google de Maisons d'Excellence" style="justify-self:start;display:inline-flex;align-items:center;gap:11px;text-decoration:none;background:#FFFFFF;border:1px solid rgba(0,0,0,0.08);border-radius:999px;padding:8px 16px;box-shadow:0 6px 18px -6px rgba(0,0,0,0.35);transition:transform .3s cubic-bezier(.16,.84,.44,1),box-shadow .3s;"><svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true" style="flex:none;display:block;"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path></svg><span style="display:flex;flex-direction:column;line-height:1.25;"><span style="display:flex;align-items:center;gap:6px;"><span style="font-weight:700;font-size:14px;color:#202124;">5,0</span><span style="color:#FBBC04;font-size:13px;letter-spacing:1px;">★★★★★</span></span><span style="font-size:12px;color:#5F6368;white-space:nowrap;">{{ avisCount }} avis Google</span></span></a>`,
  ],

  // Les liens WhatsApp de la maquette ouvraient une conversation vide. On y
  // ajoute un message pré-rempli : le visiteur n'a plus à trouver ses mots, et
  // le destinataire sait d'où vient la demande. Le texte reste court et neutre,
  // pour que le visiteur le complète à sa façon.
  [
    'href="https://wa.me/33615191647"',
    'href="https://wa.me/33615191647?text=' +
      encodeURIComponent(
        "Bonjour, je vous écris depuis votre site. J'aimerais échanger sur mon projet de construction."
      ) +
      '"',
  ],

  // Pastille Google dans le bloc « Avis vérifiés ». Placement, dimensions et
  // traitement dictés par Claude Design : le logo signe, il ne décore pas —
  // 16 px, posé à plat, jamais plus haut que la rangée d'étoiles, et une seule
  // fois sur le site. Le bloc devient cliquable vers la fiche Google.
  [
    `<div data-reveal="" data-delay="160" style="display:flex;align-items:baseline;gap:16px;">
            <span style="font-family:'Cormorant Garamond',serif;font-size:clamp(56px,7vw,86px);line-height:0.82;color:#111412;">5,0</span>
            <span style="display:flex;flex-direction:column;gap:6px;padding-bottom:4px;">
              <span style="color:#2E5A49;font-size:15px;letter-spacing:0.18em;">★★★★★</span>
              <span style="font-size:13.5px;color:#565B56;">{{ avisCount }} avis Google vérifiés</span>
            </span>
          </div>`,
    `<a data-reveal="" data-delay="160" href="{{ avisUrl }}" target="_blank" rel="noopener noreferrer" class="me-avis-google" aria-label="Voir les avis Google de Maisons d'Excellence" style="display:flex;align-items:baseline;gap:16px;text-decoration:none;padding:4px 6px;margin:-4px -6px;border-radius:4px;transition:background .25s ease;">
            <span style="font-family:'Cormorant Garamond',serif;font-size:clamp(56px,7vw,86px);line-height:0.82;color:#111412;">5,0</span>
            <span style="display:flex;flex-direction:column;gap:6px;padding-bottom:4px;">
              <span style="color:#2E5A49;font-size:15px;letter-spacing:0.18em;">★★★★★</span>
              <span style="display:flex;align-items:center;gap:7px;font-size:13.5px;color:#565B56;">
                <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true" style="flex:none;">
                  <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path>
                  <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path>
                  <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"></path>
                  <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path>
                </svg>
                <span>{{ avisCount }} avis Google vérifiés</span>
                <span class="me-avis-arrow" style="color:#2E5A49;font-weight:600;">Voir les avis ↗</span>
              </span>
            </span>
          </a>`,
  ],
];

function corrections(s) {
  let out = s;
  for (const [from, to] of CORRECTIONS) {
    if (out.includes(from)) out = out.replaceAll(from, to);
  }
  return out;
}

function componentFile(name, block, { tag = 'div' } = {}) {
  // Le relevé des liaisons se fait APRÈS correction : certaines corrections en
  // introduisent de nouvelles, comme l'adresse de la fiche Google.
  // Corrections d'abord, réécriture des chemins ensuite : les corrections sont
  // écrites contre la source d'origine, où les photos sont encore en relatif.
  const corrige = absolutePhotos(corrections(block));
  const vars = bindings(corrige);
  const jsx = toJsx(corrige);
  const destructure = vars.length ? `  const { ${vars.join(', ')} } = v;\n` : '';
  const besoinCss = jsx.includes('cssToStyle(');
  return (
    "'use client';\n\n" +
    "import type { Vals } from '@/components/site-vals';\n" +
    (besoinCss ? "import { cssToStyle } from '@/lib/css';\n" : '') +
    '\n' +
    '/**\n' +
    ` * ${name} — balisage repris tel quel de la maquette Claude Design.\n` +
    ' * Seule la syntaxe change (JSX) : styles, classes et ordre des nœuds\n' +
    ' * sont identiques au fichier de référence dans design/.\n' +
    ' */\n' +
    `export default function ${name}(v: Vals) {\n` +
    destructure +
    // Fragment systématique : certains blocs ont plusieurs nœuds racine
    // (l'en-tête et son menu mobile, par exemple).
    '  return (\n    <>\n' +
    indent(jsx.trim(), 6) +
    '\n    </>\n  );\n}\n'
  );
}

const indent = (s, n) =>
  s
    .split('\n')
    .map((l) => (l.trim() ? ' '.repeat(n) + l : l))
    .join('\n');

const outViews = path.join(ROOT, 'components/views');
fs.mkdirSync(outViews, { recursive: true });

const report = [];

// En-tête : la barre fixe et le menu mobile, jusqu'à la première vue.
// Les vues sont enveloppées dans un `sc-if` de routage devenu inutile ici :
// chaque vue a désormais sa propre URL, la condition est portée par la route.
const iFirstView = html.indexOf('<sc-if value="{{ isAccueil }}"');
const headerBlock = html.slice(iHeader, iFirstView);
const footerBlock = html.slice(iFooter, iFooterEnd);
fs.writeFileSync(
  path.join(ROOT, 'components/SiteHeader.tsx'),
  componentFile('SiteHeader', headerBlock),
  'utf8'
);
fs.writeFileSync(
  path.join(ROOT, 'components/SiteFooter.tsx'),
  componentFile('SiteFooter', footerBlock),
  'utf8'
);
report.push(['SiteHeader', headerBlock.length, bindings(headerBlock).length]);
report.push(['SiteFooter', footerBlock.length, bindings(footerBlock).length]);

// Les 13 vues
mains.forEach((m, idx) => {
  const label = m[1];
  const entry = VIEWS.find((v) => v[0] === label);
  if (!entry) throw new Error('vue inconnue : ' + label);
  const end = html.indexOf('</main>', m.index) + '</main>'.length;
  const block = html.slice(m.index, end);
  fs.writeFileSync(path.join(outViews, entry[1] + '.tsx'), componentFile(entry[1], block), 'utf8');
  report.push([entry[1], block.length, bindings(block).length]);
});

console.log('composant'.padEnd(16), 'source'.padStart(8), 'liaisons'.padStart(9));
for (const [n, size, b] of report) {
  console.log(n.padEnd(16), String(size).padStart(8), String(b).padStart(9));
}

// Union de toutes les liaisons, pour typer Vals
const all = new Set();
[headerBlock, footerBlock, ...mains.map((m, i) => html.slice(m.index, html.indexOf("</main>", m.index) + 7))].forEach(
  (b) => bindings(b).forEach((x) => all.add(x))
);
fs.writeFileSync('/tmp/design/bindings.json', JSON.stringify([...all].sort(), null, 2));
console.log('\nliaisons distinctes :', all.size);
