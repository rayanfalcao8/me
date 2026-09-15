# Rayan Tsolefack — portfolio V2

Première version de travail bilingue. Next.js App Router, TypeScript, Tailwind. Les contenus et visuels restent à valider avant lancement.

## Démarrer

Depuis ce dossier, avec Node.js 22 ou plus récent :

```bash
npm ci
npm run dev
```

Ouvrir `http://localhost:3000/fr/` ou `http://localhost:3000/en/`.

## Vérifier l’export statique

```bash
npm run typecheck
npm run build
npm run preview
```

L’export se trouve dans `out/`. Publier uniquement ce répertoire après validation du contenu et choix de l’hébergement. Le HTML historique à la racine du dépôt n’appartient pas à cet export.

```bash
npx playwright install chromium
npx playwright test
```

Les tests vérifient les routes FR/EN, les destinations internes, le changement de langue sur une étude de cas, les filtres, le menu mobile, les débordements, le clavier et le contact. Un navigateur déjà installé peut être fourni via `PLAYWRIGHT_EXECUTABLE_PATH`.

## Contenu

- `src/content/site.ts` : profil, libellés, parcours et formation.
- `src/content/projects.ts` : projets, statuts et textes bilingues des études de cas.
- `src/components/project-visual.tsx` : capture du site public Pneus Ratté et vues fonctionnelles légendées pour les autres projets.
- `src/components/featured-work.tsx` : sélection interactive des projets à l’accueil.
- `src/app/globals.css` et `src/app/editorial.css` : styles communs, composition et responsive.

Les projets possèdent un statut explicite et, pour les études de cas, un contexte, un rôle, des décisions, des réalisations et des limites. Les textes français et anglais partagent le même modèle de données.

## Structure

La branche de développement est `feat/portfolio-v2`. L’application est isolée dans `v2/` et produit un export statique bilingue. Les pages principales couvrent l’accueil, les réalisations, le parcours, la formation et la présentation personnelle. Le changement de langue conserve la page consultée.

Les composants serveur assurent le rendu initial. Seuls le menu, les filtres et la copie du courriel nécessitent des composants clients. La police est servie localement; les métadonnées sont adaptées à chaque langue.

## Avant publication

Choisir et vérifier le domaine, renseigner `NEXT_PUBLIC_SITE_URL` et activer `PORTFOLIO_INDEXABLE=true` uniquement après validation. Les métadonnées sont localisées; les pages sont non indexables par défaut. Les titres de diplômes, dates ambiguës, contributions et captures doivent être validés avec Rayan. Ajouter le CV général FR/EN actualisé et les véritables captures autorisées.

L’ancien site sur `main` n’est pas modifié par cette version. Aucun workflow de déploiement automatique n’a été ajouté.
