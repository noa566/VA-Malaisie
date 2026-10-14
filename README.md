# VA · Voyage apprenant

Landing page one-page pour le voyage apprenant Team Academy (HES-SO Valais, HEG Sierre) à Kuala Lumpur et Singapour.

Stack : **Vite + React + Tailwind CSS + Framer Motion**. Aucun backend. Prête pour **Vercel**.

## Lancer en local

Prérequis : Node.js 20+ et npm.

```bash
npm install
npm run dev
```

Ouvrir l’URL indiquée par Vite (en général `http://localhost:5173`).

Autres commandes :

```bash
npm run build     # build de production dans /dist
npm run preview   # prévisualiser le build
```

## Modifier le contenu

Tout le texte, l’équipe, les liens et les coordonnées sont dans **`src/content.js`**.

À compléter avant d’envoyer le lien aux entreprises :

| Champ | Fichier | Notes |
| --- | --- | --- |
| Nom, email, téléphone de contact | `site.contact` | Le téléphone n’apparaît que s’il est renseigné |
| Lien Calendly | `site.calendly` | Laisser vide pour masquer le bouton |
| Instagram | `site.social.instagram` | Laisser vide pour masquer le lien |
| URL du site une fois en ligne | `site.canonicalUrl` + `index.html` (balises OG) | Pour l’aperçu WhatsApp / LinkedIn |
| Prénoms, rôles, photos | `team.members` | Photo : chemin dans `/public`, ex. `"/team/lea.jpg"` |
| Site principal | `site.mainSiteUrl` | Lien « nos réalisations » |

Les variantes de titre du hero sont commentées dans `hero.titleLines`.

## Déployer sur Vercel

1. Créer un compte sur [vercel.com](https://vercel.com) et y connecter GitHub (ou GitLab / Bitbucket).
2. Pousser ce projet sur un dépôt Git.
3. Dans Vercel : **Add New → Project** → sélectionner le dépôt.
4. Vercel détecte Vite. Réglages attendus :
   - Framework Preset : `Vite`
   - Build Command : `npm run build`
   - Output Directory : `dist`
5. **Deploy**.

En ligne de commande, sans Git :

```bash
npm i -g vercel
vercel
```

Après le premier déploiement, mettre à jour `site.canonicalUrl` dans `src/content.js` et les balises Open Graph dans `index.html` avec l’URL Vercel réelle (ou un domaine personnalisé). Remplacer aussi `public/og-image.png` si besoin : l’image actuelle sert d’aperçu lors du partage du lien.

## Photos d’équipe

Placez les portraits (idéalement carrés, ~800 px, JPG/WebP) dans `public/team/`, puis renseignez le champ `photo` de chaque membre, par exemple `"/team/lea.webp"`. Tant que `photo` vaut `null`, un placeholder sobre (silhouette + initiale) s’affiche.

## Accessibilité et motion

Les animations respectent `prefers-reduced-motion`. Navigation clavier, contrastes sombres, balises sémantiques et lien d’évitement sont en place.
