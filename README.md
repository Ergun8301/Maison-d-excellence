# MAISONS D'EXCELLENCE — site web

Site vitrine de **Maisons d'Excellence**, constructeur de maisons individuelles
à Meximieux (01), en Next.js (App Router) + TypeScript + Tailwind.

Remplace le site Wix `maison-excellence.com`, dont l'audit du 31/07/2026 a
relevé : contenu de démonstration jamais retiré, page devis vide, et CTA de
devis pointant vers un Typeform hors service.

## Démarrer

```bash
npm install
cp .env.example .env.local   # puis renseigner les clés
npm run dev
```

## Formulaires

Les deux formulaires du site (contact et simulateur) passent par
`POST /api/contact`. Aucun service tiers n'est câblé en dur : le fournisseur
est choisi à l'exécution selon les variables d'environnement présentes.

| Variable | Fournisseur | Mise en place |
| --- | --- | --- |
| `RESEND_API_KEY` | Resend — **retenu** | Compte gratuit sur resend.com (3 000 mails/mois, sans carte) → API Keys → Create API Key |
| `WEB3FORMS_ACCESS_KEY` | Web3Forms — repli | Saisir une adresse sur web3forms.com, la clé arrive par mail (250 mails/mois) |

**Si aucune clé n'est renseignée**, l'API répond avec un lien WhatsApp
pré-rempli reprenant la saisie du visiteur, et le formulaire y bascule
automatiquement. Le site reste donc pleinement fonctionnel avant même que la
clé ne soit fournie — aucune demande n'est perdue.

`GET /api/contact` renvoie `{ mail: true|false }` pour connaître l'état de la
configuration.

Protections en place : validation serveur, pot de miel anti-robot, et limite de
5 envois par minute et par IP.

### Expéditeur

Tant que le domaine définitif n'est pas vérifié chez Resend, laisser
`MAIL_FROM` vide : `onboarding@resend.dev` est utilisé. Cela fonctionne
puisque les demandes sont envoyées à l'adresse propriétaire du compte Resend.
Une fois le domaine vérifié, renseigner
`MAIL_FROM="Maisons d'Excellence <contact@ledomaine.fr>"`.

## WhatsApp

Le contact WhatsApp utilise les liens « click-to-chat » (`wa.me`) : aucun
compte ni API WhatsApp Business n'est nécessaire, le lien ouvre simplement une
conversation vers le numéro de l'entreprise. Numéro et générateur de liens dans
`lib/site.ts`.

## Structure

```
app/
  api/contact/route.ts   Réception des leads, envoi, repli WhatsApp
lib/
  site.ts                Coordonnées entreprise, liens WhatsApp, URL canonique
  leads.ts               Modèle de lead, gabarits texte/HTML de l'e-mail
  mail.ts                Envoi multi-fournisseur (Resend, Web3Forms)
  useLeadForm.ts         Logique de formulaire côté client, sans rendu
```

## Déploiement

Vercel. Renseigner les mêmes variables dans *Settings → Environment Variables*.

## Reste à intégrer

Depuis le dossier de handoff Claude Design :

- [ ] Tokens (couleurs, typographie, espacements, rayons, ombres, grilles)
- [ ] Les 13 vues et l'ordre définitif de l'accueil
- [ ] Le simulateur et sa formule (ordre des opérations à respecter)
- [ ] Les 2 cartes Leaflet (avec `fadeAnimation:false` et la règle `.leaflet-tile-loaded`)
- [ ] Les 13 couples title/description et le JSON-LD, repris mot pour mot
- [ ] Branchement des 2 formulaires sur `useLeadForm`

Points signalés comme bloquants par le handoff :

- [ ] Grille tarifaire `ME_PRIX` — valeurs provisoires à valider avec le client
- [ ] Remplacement des 21 visuels Unsplash par de vraies photos de chantier
- [ ] Logo — décision client en attente (le PDF n'est pas intégré délibérément)
