# Guide d'Utilisation - Présentation Reveal.js

## 🚀 Démarrage Rapide

### Prérequis

- Navigateur moderne (Chrome, Firefox, Edge, Safari)
- Connexion internet (pour CDN des bibliothèques)

### Lancement de la Présentation

**Option 1 : Serveur Local (Recommandé)**

```bash
# Avec Python 3
cd presentation
python -m http.server 8000

# Puis ouvrir: http://localhost:8000
```

**Option 2 : Extension VS Code**

- Installer "Live Server" extension
- Clic droit sur `index.html` → "Open with Live Server"

**Option 3 : Double-clic Direct**

- Ouvrir `index.html` directement dans le navigateur
- ⚠️ Certaines fonctionnalités peuvent être limitées (CORS)

## 🎮 Navigation

### Contrôles Clavier

- **Flèches** : Navigation entre slides
- **Espace** : Slide suivant
- **Page Up/Down** : Navigation rapide
- **Échap** : Vue d'ensemble (aperçu toutes slides)
- **F** : Plein écran
- **S** : Mode présentateur (notes)
- **B** : Pause (écran noir)

### Contrôles Souris/Tactile

- **Clic gauche** : Avancer
- **Clic droit** : Reculer
- **Swipe** : Navigation tactile

## 🎨 Fonctionnalités Interactives

### Animations du Sol

**Slide 4 : Comparaison Bucket vs Drip**

- Cliquer sur "▶ Lancer l'animation"
- Observe les différences entre modèle bucket et irrigation localisée
- Animation continue automatiquement

**Slide 11 : Bulbe d'Humectation**

- **▶ Démarrer** : Lance la simulation temporelle
- **⏸ Pause** : Met en pause l'animation
- **🔄 Réinitialiser** : Recommence depuis t=0
- Observe l'évolution du bulbe sur 24 heures

### Graphiques Interactifs

**Slide 10 : Validation SoilGrids**

- Graphique Chart.js interactif
- **Hover** : Affiche valeurs précises
- **Clic légende** : Active/désactive séries
- **Zoom** : Scroll pour zoomer (si activé)

### Carte Bénin

**Slide 2 : Contexte**

- Carte SVG interactive avec D3.js
- Taille des cercles = nombre d'échantillons
- Communes d'étude visualisées

## 📝 Mode Présentateur

### Activation

1. Appuyer sur **S** pendant la présentation
2. Fenêtre secondaire s'ouvre avec :
   - Notes de présentation
   - Timer
   - Aperçu slide suivant
   - Contrôles avancés

### Utilisation

- Projeter la fenêtre principale sur écran
- Garder fenêtre présentateur sur ordinateur
- Notes visibles uniquement pour vous

## 🎯 Personnalisation

### Modifier le Contenu

**Texte des Slides**

```html
<!-- Dans index.html -->
<section>
  <h2>Votre Titre</h2>
  <p>Votre contenu...</p>
</section>
```

**Couleurs et Styles**

```css
/* Dans css/custom.css */
:root {
  --primary-blue: #3b82f6; /* Changez les couleurs */
  --dark-blue: #1e3a8a;
}
```

**Animations**

```javascript
// Dans js/animations.js
// Ajustez vitesses, tailles, couleurs
const maxTime = 24; // Durée simulation (heures)
```

### Ajouter des Slides

```html
<!-- Slide simple -->
<section>
  <h2>Nouveau Titre</h2>
  <p>Nouveau contenu</p>
</section>

<!-- Slide avec fragments (apparition progressive) -->
<section>
  <h2>Liste Progressive</h2>
  <ul>
    <li class="fragment">Apparaît en premier</li>
    <li class="fragment">Puis celui-ci</li>
    <li class="fragment">Enfin celui-là</li>
  </ul>
</section>

<!-- Slide avec fond personnalisé -->
<section data-background-color="#1e3a8a">
  <h2 class="white-text">Fond Coloré</h2>
</section>
```

## 📊 Données des Graphiques

### Modifier les Données SoilGrids

```javascript
// Dans js/charts.js, fonction createSoilGridsComparison()
const data = {
  communes: ["Savè", "Bembèrèkè", "N'Dali", "Glazoué"],
  terrain: {
    argile: [6.2, 7.8, 7.5, 7.1], // VOS DONNÉES ICI
    sable: [78.5, 76.2, 75.8, 77.1],
    limon: [15.3, 16.0, 16.7, 15.8],
  },
  // ...
};
```

## 🔧 Configuration Avancée

### Options Reveal.js

```javascript
// Dans index.html, section <script>
Reveal.initialize({
  hash: true,
  controls: true, // Afficher contrôles navigation
  progress: true, // Barre de progression
  center: true, // Centrer slides verticalement
  transition: "slide", // Type transition (slide, fade, convex, etc.)
  transitionSpeed: "default", // Vitesse (slow, default, fast)

  // Autres options possibles :
  autoSlide: 0, // Défilement auto (ms, 0 = désactivé)
  loop: false, // Boucler présentation
  rtl: false, // Right-to-left
  shuffle: false, // Ordre aléatoire
  keyboard: true, // Contrôles clavier
  overview: true, // Mode aperçu (Échap)
  touch: true, // Gestes tactiles
  fragments: true, // Fragments activés
  mouseWheel: false, // Navigation scroll
});
```

### Équations Mathématiques

Les équations utilisent MathJax. Syntaxe LaTeX :

```html
<!-- Équation en ligne -->
<p>La variable \( \theta \) représente...</p>

<!-- Équation bloc -->
<p class="math-display">
  \[ \frac{\partial \theta}{\partial t} = \nabla \cdot (K(\theta) \nabla h) \]
</p>
```

## 🎥 Export et Partage

### PDF

1. Ajouter `?print-pdf` à l'URL
2. `http://localhost:8000/?print-pdf`
3. Imprimer avec Chrome → "Enregistrer en PDF"
4. Paramètres : Paysage, pas de marges

### Hébergement Web

**GitHub Pages (Gratuit)**

```bash
# 1. Créer repo GitHub
# 2. Pousser le dossier presentation/
git init
git add .
git commit -m "Présentation soutenance"
git remote add origin https://github.com/votre-user/presentation.git
git push -u origin main

# 3. Activer GitHub Pages dans Settings
# URL: https://votre-user.github.io/presentation/
```

**Netlify Drop**

- Zipper le dossier `presentation/`
- Drag & drop sur https://app.netlify.com/drop
- Obtenir URL instantané

## 🐛 Résolution de Problèmes

### Animations ne fonctionnent pas

- ✅ Vérifier console JavaScript (F12)
- ✅ Utiliser serveur local (pas double-clic)
- ✅ Navigateur à jour

### Graphiques ne s'affichent pas

- ✅ Connexion internet OK (CDN Chart.js)
- ✅ Canvas IDs corrects dans HTML et JS
- ✅ Attendre chargement complet page

### Équations mal formatées

- ✅ MathJax chargé (vérifier console)
- ✅ Syntaxe LaTeX correcte
- ✅ Délimiteurs `\( \)` ou `\[ \]`

### Performance lente

- ✅ Réduire nombre particules dans animations
- ✅ Limiter résolution canvas
- ✅ Désactiver animations complexes

## 💡 Conseils de Présentation

### Avant la Soutenance

1. **Tester sur écran de projection** (résolution différente)
2. **Vérifier animations** sur ordinateur de présentation
3. **Backup PDF** au cas où (problème technique)
4. **Répéter avec timer** (mode présentateur)

### Pendant la Présentation

1. **Mode plein écran** (F)
2. **Mode présentateur** (S) sur laptop
3. **Projeter fenêtre principale** sur écran
4. **Utiliser pointeur laser** pour graphiques

### Astuces

- **B** pour pause si question longue
- **Échap** pour vue ensemble si perdu
- **Flèches** plus fiables que clic

## 📁 Structure des Fichiers

```
presentation/
├── index.html              # Fichier principal
├── css/
│   └── custom.css         # Styles personnalisés
├── js/
│   ├── animations.js      # Animations sol/bulbe
│   └── charts.js          # Graphiques Chart.js
└── README.md              # Ce fichier
```

## 🔗 Ressources Utiles

- **Reveal.js Docs** : https://revealjs.com/
- **Chart.js Docs** : https://www.chartjs.org/docs/
- **D3.js Docs** : https://d3js.org/
- **MathJax Docs** : https://www.mathjax.org/

## 🎓 Contact & Support

Pour questions ou problèmes :

1. Consulter documentation Reveal.js
2. Vérifier console navigateur (F12)
3. Tester sur navigateur différent

**Bon courage pour votre soutenance ! 🚀**
