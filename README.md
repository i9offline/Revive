# Revive Landing Page

Site web de présentation du produit Revive - Break the Hangover.

## 🚀 Déploiement sur GitHub Pages

Ce projet est configuré pour être déployé automatiquement sur GitHub Pages.

### Configuration automatique

Le projet utilise GitHub Actions pour le déploiement automatique. À chaque push sur la branche `main`, le site sera automatiquement construit et déployé.

### URL du site

Une fois déployé, votre site sera accessible à l'adresse :
**https://i9offline.github.io/Revive**

### Activation de GitHub Pages

Pour activer GitHub Pages sur votre repository :

1. Allez dans les **Settings** de votre repository GitHub
2. Dans la section **Pages** (à gauche)
3. Sous **Source**, sélectionnez **GitHub Actions**
4. Le workflow de déploiement se lancera automatiquement

### Structure du projet

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de déploiement GitHub Actions
├── public/
│   ├── Revive-Logo.png
│   └── Revive-Product.png
├── src/
│   └── pages/
│       ├── index.astro         # Page d'accueil
│       └── product.astro       # Page produit
├── astro.config.mjs           # Configuration Astro pour GitHub Pages
└── package.json
```

## 🧞 Commandes de développement

Toutes les commandes sont exécutées depuis la racine du projet :

| Commande                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installe les dépendances                        |
| `npm run dev`             | Lance le serveur de développement local        |
| `npm run build`           | Construit le site pour la production            |
| `npm run preview`         | Prévisualise le build localement                |

## 📁 Configuration GitHub Pages

Le fichier `astro.config.mjs` est configuré avec :
- **Site URL** : `https://i9offline.github.io`
- **Base path** : `/Revive` (pour la production)
- **Output** : `static` (site statique)

## 🔧 Workflow de déploiement

Le workflow GitHub Actions :
1. **Checkout** du code source
2. **Build** du site avec Astro
3. **Deploy** automatique sur GitHub Pages

Le déploiement se fait automatiquement à chaque push sur `main`.

## 🔍 Dépannage des images

Si les images ne s'affichent pas :

1. **Vérifiez que GitHub Pages est activé** :
   - Settings → Pages → Source : GitHub Actions

2. **Vérifiez l'onglet Actions** :
   - Allez sur https://github.com/i9offline/Revive/actions
   - Assurez-vous que le workflow "Deploy to GitHub Pages" s'exécute sans erreur

3. **Attendez le déploiement** :
   - Le déploiement peut prendre 2-5 minutes après un push

4. **Vérifiez l'URL** :
   - Le site doit être accessible à : https://i9offline.github.io/Revive

## ⚠️ Problème de déploiement "purging_cdn"

Si le déploiement reste bloqué sur "purging_cdn" :

1. **Annulez le workflow en cours** dans l'onglet Actions
2. **Redéclenchez manuellement** : Actions → "Deploy to GitHub Pages" → "Re-run jobs"
3. **Attendez 5-10 minutes** maximum
4. **Si ça persiste**, vérifiez dans Settings → Pages que la source est bien "GitHub Actions"
