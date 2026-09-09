/**
 * Politique de confidentialité.
 *
 * Cette page n'existe pas dans la maquette : elle est écrite à la main, mais
 * reprend exactement le vocabulaire visuel de « Mentions légales » — mêmes
 * sections, mêmes styles, mêmes espacements — pour qu'elle ne se remarque pas
 * comme une pièce rapportée.
 *
 * Son contenu n'est pas un modèle recopié. Les sous-traitants nommés plus bas
 * sont ceux que le navigateur du visiteur appelle réellement, relevés page par
 * page en enregistrant le trafic sortant du site construit. Toute modification
 * du site qui ajoute ou retire un appel sortant doit être répercutée ici.
 */
const H2 = {
  margin: '0',
  fontFamily: "'Cormorant Garamond',serif",
  fontWeight: '400',
  fontSize: 'clamp(22px,2.6vw,32px)',
  color: '#111412',
} as const;

const P = { margin: '12px 0 0', color: '#4a443c', fontSize: '16px', lineHeight: '1.85' } as const;

const LI = { ...P, margin: '10px 0 0' } as const;

export default function Confidentialite() {
  return (
    <main data-screen-label="Politique de confidentialité">
      <section style={{ background: "#111412", color: "#F7F7F4", padding: "clamp(106px,11vw,130px) 0 clamp(30px,3.6vw,44px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ width: "42px", height: "1px", background: "#9CC4B2" }}></span>
            <span style={{ color: "#9CC4B2", fontSize: "12px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase" }}>Informations légales</span>
          </div>
          <h1 style={{ margin: "0", fontFamily: "'Cormorant Garamond',serif", fontWeight: "300", fontSize: "clamp(36px,5.4vw,68px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>Politique de confidentialité</h1>
        </div>
      </section>

      <section style={{ background: "#F7F7F4", padding: "clamp(48px,6vw,80px) 0 clamp(72px,9vw,120px)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", display: "flex", flexDirection: "column", gap: "clamp(28px,3.4vw,42px)" }}>

          <div>
            <h2 style={H2}>Qui est responsable de vos données</h2>
            <p style={P}>Maisons d&rsquo;Excellence Constructeurs de Maisons Individuelles, SARL immatriculée au RCS de Bourg-en-Bresse sous le numéro 844&nbsp;477&nbsp;794, dont le siège est au 6 rue de Genève, 01800 Meximieux. Responsable du traitement : Aykut Atak, gérant. Pour toute question ou demande relative à vos données : par courrier à l&rsquo;adresse ci-dessus, par téléphone au 04 74 34 66 43, ou par courriel à aykut.atak@sfr.fr.</p>
          </div>

          <div>
            <h2 style={H2}>Ce que le site collecte</h2>
            <p style={P}>Le site ne recueille des informations que lorsque vous remplissez l&rsquo;un de ses deux formulaires. Aucune donnée n&rsquo;est collectée à la simple consultation des pages.</p>
            <p style={LI}>Le formulaire de contact enregistre votre nom, votre téléphone, votre adresse électronique, la nature de votre projet, la surface envisagée et le message que vous écrivez.</p>
            <p style={LI}>Le formulaire d&rsquo;estimation enregistre votre nom, votre téléphone, votre adresse électronique et la configuration que vous avez choisie dans le simulateur.</p>
            <p style={LI}>Ces informations servent uniquement à vous répondre et à préparer une proposition. Le fondement juridique est l&rsquo;exécution de mesures précontractuelles prises à votre demande, au sens de l&rsquo;article 6.1.b du règlement européen 2016/679. Elles ne sont ni vendues, ni louées, ni transmises à quiconque à des fins commerciales.</p>
            <p style={LI}>Si l&rsquo;envoi du formulaire échoue — coupure réseau, indisponibilité de l&rsquo;hébergeur — le site vous propose de nous transmettre le même message par WhatsApp. Rien n&rsquo;est envoyé automatiquement dans ce cas : le message vous est présenté et c&rsquo;est vous qui décidez de l&rsquo;envoyer. Si vous le faites, il transite alors par WhatsApp Ireland Limited (groupe Meta).</p>
          </div>

          <div>
            <h2 style={H2}>Ce que le site ne fait pas</h2>
            <p style={P}>Le site ne dépose aucun cookie. Il ne comporte aucun outil de mesure d&rsquo;audience, aucune régie publicitaire, aucun bouton de partage traçant, aucun pixel de réseau social. Vous ne verrez donc pas de bandeau de consentement : il n&rsquo;y a rien à consentir. La seule information conservée par votre navigateur est un brouillon temporaire, gardé le temps de vous faire passer d&rsquo;une page à l&rsquo;autre avec votre demande déjà remplie ; il disparaît à la fermeture de l&rsquo;onglet et ne quitte jamais votre appareil.</p>
          </div>

          <div>
            <h2 style={H2}>Les services techniques que votre navigateur appelle</h2>
            <p style={P}>Afficher une page suppose d&rsquo;aller chercher des fichiers, et l&rsquo;ordinateur qui les envoie voit nécessairement votre adresse IP. Voici la liste exacte, relevée sur le site lui-même et non recopiée d&rsquo;un modèle.</p>
            <p style={LI}><strong>Netlify, Inc.</strong> (San Francisco, États-Unis) héberge le site et reçoit les formulaires. Ses serveurs voient votre adresse IP à chaque page consultée et conservent les messages que vous envoyez.</p>
            <p style={LI}><strong>unpkg</strong>, distribué par <strong>Cloudflare, Inc.</strong> (États-Unis), fournit la bibliothèque d&rsquo;affichage des cartes. Elle est appelée sur toutes les pages.</p>
            <p style={LI}><strong>CARTO</strong>, distribué par <strong>Fastly, Inc.</strong> (États-Unis), fournit les fonds de carte. Uniquement sur les pages Contact et Zone d&rsquo;intervention, et seulement lorsque la carte s&rsquo;affiche.</p>
            <p style={LI}><strong>Unsplash</strong> (Montréal, Canada), distribué par Fastly, fournit une partie des photographies d&rsquo;illustration. Uniquement sur la page d&rsquo;accueil, les articles du blog et une fiche modèle.</p>
            <p style={LI}>Les polices de caractères, elles, sont servies depuis ce site et non depuis Google : aucune requête ne part chez Google lorsque vous ouvrez une page.</p>
            <p style={LI}>Ces sociétés sont établies hors de l&rsquo;Union européenne. Les transferts correspondants sont encadrés par les clauses contractuelles types de la Commission européenne et, pour les sociétés américaines qui y adhèrent, par le cadre de protection des données UE&ndash;États-Unis.</p>
          </div>

          <div>
            <h2 style={H2}>Combien de temps vos données sont conservées</h2>
            <p style={P}>Les messages reçus par les formulaires sont conservés trois ans à compter de notre dernier échange, puis supprimés. Ce délai correspond à la durée recommandée par la CNIL pour les demandes de prospects et rejoint l&rsquo;engagement déjà pris dans nos mentions légales. La suppression est faite manuellement dans l&rsquo;interface de Netlify.</p>
            <p style={LI}>Si votre demande aboutit à un contrat, les documents liés à ce contrat relèvent alors des durées légales propres à la construction, notamment les dix ans de la garantie décennale.</p>
            <p style={LI}>Les journaux techniques de l&rsquo;hébergeur — adresse IP, date, page demandée — sont conservés par Netlify selon sa propre politique, pour une durée courte que nous ne paramétrons pas.</p>
          </div>

          <div>
            <h2 style={H2}>Vos droits</h2>
            <p style={P}>Vous pouvez demander à consulter les informations que nous détenons sur vous, les faire corriger, les faire effacer, en obtenir une copie, en limiter l&rsquo;usage ou vous opposer à leur traitement. Écrivez au 6 rue de Genève, 01800 Meximieux, ou à aykut.atak@sfr.fr. Nous répondons dans le mois qui suit la demande.</p>
            <p style={LI}>Si notre réponse ne vous convient pas, vous pouvez saisir la Commission nationale de l&rsquo;informatique et des libertés, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, ou déposer une réclamation sur cnil.fr.</p>
          </div>

          <div>
            <h2 style={H2}>Mise à jour</h2>
            <p style={P}>Cette politique décrit le site tel qu&rsquo;il fonctionne au 9 septembre 2026. Toute modification du site qui ajouterait ou retirerait un service appelé automatiquement sera reportée ici.</p>
          </div>

        </div>
      </section>
    </main>
  );
}
