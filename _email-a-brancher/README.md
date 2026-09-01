# Envoi des formulaires par e-mail — prêt à brancher

Les deux formulaires du site passent aujourd'hui par Netlify Forms : l'envoi
est intercepté par l'hébergeur, la demande atterrit dans le tableau de bord du
projet et part par courriel selon les notifications qui y sont réglées. Aucune
clé, aucun compte, et rien à payer.

WhatsApp n'intervient qu'en secours : si l'envoi échoue — réseau coupé, service
indisponible — la demande bascule vers une conversation pré-remplie plutôt que
d'être perdue en silence. Ce n'est pas le chemin normal, c'est le filet.

Ce dossier conserve la tuyauterie d'envoi par e-mail, écrite et fonctionnelle,
mais volontairement sortie de la construction : le site est exporté en pages
statiques, ce qui exclut toute route serveur — et c'est ce qui permet de
l'héberger gratuitement, y compris pour un usage commercial.

## Pour la réactiver

1. Remettre `route.ts` dans `app/api/contact/`, et les trois fichiers `lib/`
   à leur place.
2. Retirer `output: 'export'` de `next.config.mjs`.
3. Renseigner `RESEND_API_KEY` (compte gratuit au nom du client, 3 000 mails
   par mois) ou `WEB3FORMS_ACCESS_KEY`.
4. Dans `components/Site.tsx`, remplacer l'appel à `envoyerVersWhatsApp` par
   `useLeadForm`.

L'hébergement devra alors accepter une route serveur, ce qui n'est plus gratuit
partout.
