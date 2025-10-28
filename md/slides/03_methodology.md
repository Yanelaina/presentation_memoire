# 🧩 SECTION 5 — MÉTHODOLOGIE

### 🎯 Objectif global

> Présenter la démarche scientifique et technique ayant conduit à la mise en œuvre du couplage bidirextionnel Richards–AquaCrop:
> depuis la conception du pipeline de données jusqu’à l’intégration du couplage et la validation des simulations.

---

## 🟢 SLIDE M0 — Introduction / Transition

### 🎯 Objectif : introduire la section avec une vue globale.

**Contenu :**

- Titre : _Méthodologie_
- Illustration centrale : schéma pipeline horizontal stylisé (Entrées → Modélisation → Couplage → Simulation → Analyse)
- 5 bulles colorées correspondant aux étapes :

  1. Acquisition des données
  2. Prétraitement et paramétrisation
  3. Modélisation physique (Richards)
  4. Modélisation biologique (AquaCrop)
  5. Couplage & simulation

**Animation :**

- Apparition progressive des bulles avec `fragment fade-in`
- Utilise un `data-transition="zoom"` pour marquer la nouvelle grande partie

---

## 🔹 SLIDE M1 — Architecture générale du pipeline de données

### 🎯 Objectif : donner la vue d’ensemble technique de ton système.

**Contenu :**

- Schéma (style diagramme de flux, SVG ou TikZ exporté) :

  - Entrées : données météo (ERA5-Land), sol (SoilGrids), irrigation, paramètres culture
  - Modules : prétraitement (Python), solveur Richards (FEniCS), modèle AquaCrop (FAO engine / adaptation)
  - Sorties : profils θ(r,z,t), biomasse, rendement, indicateurs de performance

**Animation :**

- Zoom successif sur chaque bloc (`fragment fade-left`)
- Option : flèches animées (Anime.js ou CSS `stroke-dasharray`)

**Transition visuelle :**

> Passage fluide depuis la théorie vers la construction du modèle numérique.

---

## 🔹 SLIDE M2 — Données et paramétrisation

### 🎯 Objectif : présenter l’assise empirique et la préparation des données.

**Contenu :**

- 3 colonnes :

  1. **Climat** : ERA5-Land, variables ETo, pluie, T°, rayonnement
  2. **Sol** : SoilGrids, extraction des paramètres van Genuchten (θr, θs, α, n, Ks)
  3. **Culture** : paramètres AquaCrop calibrés (durée cycle, développement racinaire, Kc)

**Graphiques / images :**

- Carte du site d’étude (Leaflet / PNG)
- Tableau simplifié de paramètres

**Animation :**

- Apparition colonne par colonne (`fragment fade-up`)
- Tu peux superposer un _glow effect_ léger autour des jeux de données pour donner du relief.

---

## 🔹 SLIDE M3 — Résolution numérique de Richards

### 🎯 Objectif : montrer comment tu as implémenté le solveur.

**Contenu :**

- Diagramme d’étapes :

  1. Discrétisation spatiale (éléments finis axisymétriques)
  2. Schéma temporel implicite
  3. Newton–Raphson pour la non-linéarité

- Encadré avec l’équation sous forme discrète
- Image : maillage axisymétrique (sous FEniCS)

**Animation :**

- Apparition progressive des blocs du pipeline numérique
- Effet _fade-in_ sur l’équation pour donner une impression de “mise en mouvement”

**Option technique :**

- Si tu veux aller plus loin : animation matplotlib d’un profil θ(z) évoluant dans le temps.

---

## 🔹 SLIDE M4 — Intégration d’AquaCrop et échanges hydriques

### 🎯 Objectif : introduire comment AquaCrop est intégré au solveur.

**Contenu :**

- Schéma à deux modules :

  - Module Richards : calcule θ(z,t)
  - Module AquaCrop : lit θ, calcule Tr et LAI

- Tableau d’échange des variables :

  | Variable | Direction           | Description          |
  | -------- | ------------------- | -------------------- |
  | θ(r,z,t) | Richards → AquaCrop | Humidité du sol      |
  | Tr(t)    | AquaCrop → Richards | Transpiration totale |
  | S(z,t)   | AquaCrop → Richards | Extraction racinaire |
  | Ks,x     | Richards → AquaCrop | Stress hydrique      |

**Animation :**

- Flèches colorées ↔ (bleue et verte) animées pour matérialiser le couplage bidirectionnel
- Apparition des échanges en cascade (`fragment fade-in`)

---

## 🔹 SLIDE M5 — Schéma du couplage bidirectionnel (itératif)

### 🎯 Objectif : exposer le mécanisme d’interaction entre les modèles.

**Contenu :**

- Boucle schématique :

  ```
  Richards → AquaCrop → Richards
       ↑                     ↓
      (Δθ, Ks, Tr, S)
  ```

- Encadré “Sous-cyclage temporel” :

  > _AquaCrop opère sur Δt_journalier,
  > tandis que Richards utilise des sous-pas horaires (Δt_h)._

- Critère de convergence :
  [
  |\theta^{n+1} - \theta^{n}| < \varepsilon
  ]

**Animation :**

- Boucle animée en SVG (rotation lente)
- Utilise CSS `animation: rotate 10s linear infinite;`
- Ajoute un halo coloré pour la cohérence visuelle avec la section précédente.

---

## 🔹 SLIDE M6 — Calibration et validation du système

### 🎯 Objectif : montrer que le modèle a été confronté à la réalité.

**Contenu :**

- Tableau : paramètres calibrés (Ks, α, n, Tr, CC)
- Graphique : simulation vs mesure (θ ou rendement)
- Courbes : observé vs simulé (corrélation R²)

**Animation :**

- Apparition séquentielle : tableau → courbe → score
- Pour la courbe, tu peux créer un petit graphique matplotlib animé (`FuncAnimation`).

---

## 🔹 SLIDE M7 — Synthèse du workflow

### 🎯 Objectif : conclure la méthodologie et préparer les résultats.

**Contenu :**

- Pipeline complet récapitulatif (données → couplage → résultats)
- Encadré synthèse :

  > _Méthode couplée, validée, extensible et adaptée aux données globales._

**Animation :**

- Lignes de flux qui s’illuminent pour montrer la circulation des données.
- Option : transition de couleur vers vert clair → annonce la section “Résultats”.

---

# ⚙️ Stack technique recommandée (pour Reveal.js)

| Besoin                                    | Outil recommandé                                 | Intégration                          |
| :---------------------------------------- | :----------------------------------------------- | :----------------------------------- |
| Animations SVG (flèches, boucle couplage) | **Anime.js** ou **CSS keyframes**                | directement dans les slides          |
| Graphiques (Richards, calibration)        | **vidéo MP4** exportée depuis Python/Matplotlib  | balise `<video autoplay muted loop>` |
| Schémas pipeline ou architecture          | **TikZ → SVG** ou **Figma → SVG**                | intégration directe via `<img>`      |
| Équations                                 | **MathJax** intégré à Reveal.js                  | déjà présent                         |
| Carte et données                          | **Image PNG** issue de QGIS / Leaflet screenshot | légère, statique                     |
