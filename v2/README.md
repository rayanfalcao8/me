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

- `src/content/site.ts` : profil, compétences principales, libellés, parcours et formation.
- `src/content/projects.ts` : projets, statuts et textes bilingues des études de cas.
- `src/components/project-visual.tsx` : capture du site public Pneus Ratté et vues fonctionnelles légendées pour les autres projets.
- `src/components/featured-work.tsx` : sélection interactive des projets à l’accueil.
- `src/app/globals.css` et `src/app/editorial.css` : styles communs, composition et responsive.

Les projets possèdent un statut explicite et, pour les études de cas, un contexte, un rôle, des décisions, des réalisations et des limites. Les textes français et anglais partagent le même modèle de données. Les CV téléchargeables se trouvent dans `public/cv/`.

## Structure

La branche de développement est `feat/portfolio-v2`. L’application est isolée dans `v2/` et produit un export statique bilingue. Les pages principales couvrent l’accueil, les réalisations, le parcours, la formation et la présentation personnelle. Le changement de langue conserve la page consultée.

Les composants serveur assurent le rendu initial. Seuls le menu, les filtres et la copie du courriel nécessitent des composants clients. La police est servie localement; les métadonnées sont adaptées à chaque langue.

## Déploiement et domaine

La publication est automatisée par [`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml) : chaque fusion sur `main` qui modifie `v2/` construit puis déploie l’export statique vers GitHub Pages. Le workflow définit l’URL de production `https://rayanfalcao8.is-a.dev` et active l’indexation uniquement dans ce contexte.

À faire une seule fois dans GitHub :

1. Dans **Settings → Pages**, choisir **GitHub Actions** comme source de déploiement.
2. Dans **Settings → Pages → Custom domain**, saisir `rayanfalcao8.is-a.dev`, puis activer **Enforce HTTPS** lorsque GitHub l’autorise.
3. Dans le gestionnaire DNS de `is-a.dev`, vérifier que `rayanfalcao8.is-a.dev` est un enregistrement `CNAME` vers `rayanfalcao8.github.io` (sans chemin ni `https://`). Vérifier le domaine dans GitHub avant de l’attacher est recommandé.
4. Fusionner cette branche dans `main`, puis contrôler la première exécution dans l’onglet **Actions**.

`public/CNAME` est volontairement inclus dans l’artefact afin que GitHub Pages conserve le domaine personnalisé à chaque déploiement. Le site publie `sitemap.xml`, `robots.txt`, les URL canoniques et les liens alternatifs FR/EN ; la page `/` est laissée accessible mais non indexée, au profit de `/fr/` comme URL française canonique. Les aperçus LinkedIn, Slack et X utilisent `public/images/og-portfolio.png`.

Les CV FR/EN générés dans `public/cv/` doivent être actualisés lors de chaque changement de parcours; ajouter les véritables captures autorisées.
