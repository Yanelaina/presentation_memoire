# 📊 SECTION B : CHOIX TECHNIQUES - Synthèse

## ✅ Slides créées (5 horizontales + 1 verticale = 6 vues)

### **B5 - Pourquoi un couplage bidirectionnel ?** (Horizontale) ✅

**Contenu :**

- Titre et introduction : "Le sol influence la plante ↔ La plante rétroagit sur le sol"
- **Diagramme SVG animé** avec boucle de rétroaction :
  - Nœud Richards 2D (gauche, bleu) : "Dynamique hydrique θ(r, z, t)"
  - Nœud AquaCrop (droite, vert) : "Croissance culture, LAI, Biomasse"
  - **Flèche avant (orange)** : Humidité du sol θ → Stress hydrique (animation flow-forward)
  - **Flèche retour (violet)** : Transpiration Tr → Extraction racinaire (animation flow-backward)
- Encadré comparatif : vs couplage unidirectionnel (Kanda, 2021)
- Effets hover sur les nœuds

**Script oral intégré** : Explication du dialogue permanent entre les deux modèles

---

### **B5v - Avantages du couplage bidirectionnel** (Verticale) ✅

**Contenu :**

- **3 cartes d'avantages** (grille 3 colonnes) :
  1. 🔄 **Cohérence physique** : Échanges mutuellement ajustés
  2. ⚖️ **Convergence accrue** : Stabilité numérique améliorée
  3. 🎯 **Réalisme accru** : Continuum sol-plante-atmosphère fidèle
- **Encadré résultat** (vert) : "Simulations plus stables, précises et représentatives"
- Animations : fade-up progressif des cartes (fragments 1-3)

**Script oral intégré** : Énumération des trois avantages majeurs

---

## 🎨 Assets créés

### Animations générées (Python + Matplotlib)

1. ✅ **wetting_bulb_animation.gif** (12h, 10 fps)

   - Évolution du bulbe d'humectation 2D
   - Contours d'iso-humidité
   - Zone racinaire indicative

2. ✅ **bucket_vs_bulb_comparison.gif** (8s, 20 fps)

   - Partie A : Modèle bucket (couches homogènes, saturation décroissante)
   - Partie B : Bulbe ellipsoïdal avec gradient radial
   - Flèches d'infiltration
   - Annotations

3. ✅ **wetting_bulb_static.png** (thumbnail t=8h)

---

## 📐 CSS ajouté

### `custom.css` - Nouvelles classes

#### **Section B5 : Couplage Bidirectionnel**

```css
/* Conteneur de la boucle */
.coupling-loop-container { ... }

/* Nœuds Richards et AquaCrop */
.coupling-node { ... }
.coupling-node.richards { background: gradient bleu; }
.coupling-node.aquacrop { background: gradient vert; }

/* Flèches animées */
.coupling-arrow.forward { stroke: orange; }
.coupling-arrow.backward { stroke: violet; }

@keyframes flow-forward { ... }
@keyframes flow-backward { ... }

/* Cartes d'avantages */
.coupling-advantages { grid 3 colonnes; }
.coupling-advantage-card { ... }
```

---

## 🎯 Qualité et Cohérence

### ✅ Points forts

- **Cohérence visuelle** : Palette de couleurs respectée (#0B3D5B, #6B8E23, #D97706, #10b981)
- **Animations fluides** : SVG avec stroke-dasharray et keyframes CSS
- **Progressive reveal** : Fragments Reveal.js bien utilisés
- **Accessibilité** : Textes contrastés, tailles de police lisibles
- **Responsive** : SVG avec viewBox adaptatif

### 🎨 Design System appliqué

- Dégradés : `linear-gradient(135deg, ...)`
- Bordures : `border-left: 4-5px solid`
- Ombres : `box-shadow: 0 6px 20px rgba(...)`
- Border-radius : 10-15px
- Transitions : `all 0.3s ease`
- Hover effects : `translateY(-3px/-5px)`

### 📝 Scripts oraux

- **Notes Reveal.js** complètes pour chaque slide
- Correspondance parfaite avec le fichier `Main.md`
- Timing estimé : ~3-4 minutes pour B5 + B5v

---

## 🚀 Slides restantes à créer

### À compléter dans la Section B (selon `02_choix_techniques.md`)

1. **B1 - Pourquoi le goutte-à-goutte ?** (Horizontale)

   - 3 points clés + badge "90% efficacité"
   - Photo/schéma système goutte-à-goutte

2. **B2 - Le bulbe d'humectation** (Horizontale)

   - Intégration de `wetting_bulb_animation.gif`
   - Légende "Zone racinaire active"

3. **B2v - Les limites du modèle Bucket** (Verticale)

   - Intégration de `bucket_vs_bulb_comparison.gif`
   - Comparaison "Uniforme vs. Localisé"

4. **B3 - Pourquoi l'équation de Richards ?** (Horizontale)

   - Équation LaTeX (MathJax)
   - Schéma cube de sol + flux
   - 3 points clés (conservation masse, Darcy, van Genuchten)

5. **B4 - Pourquoi AquaCrop ?** (Horizontale)
   - Diagramme fonctionnel (Entrées → Processus → Sorties)
   - 2 avantages : peu de paramètres, couplable hydriquement

---

## 📊 Structure complète Section B

```
Section B (Choix Techniques)
├── B1 - Goutte-à-goutte (H) ⏳
├── B2 - Bulbe d'humectation (H) ⏳
│   └── B2v - Limites Bucket (V) ⏳
├── B3 - Équation Richards (H) ⏳
├── B4 - AquaCrop (H) ⏳
├── B5 - Couplage bidirectionnel (H) ✅
└── B5v - Avantages couplage (V) ✅
```

**Total : 6 vues (5H + 1V)**
**Durée estimée : ~3-4 minutes**

---

## 🔧 Prochaines étapes

1. ✅ Créer B1 (Goutte-à-goutte)
2. ✅ Créer B2 + B2v (Bulbe + Limites)
3. ✅ Créer B3 (Richards)
4. ✅ Créer B4 (AquaCrop)
5. ✅ Vérifier cohérence globale Section B
6. ✅ Tester présentation en live (navigation, animations)

---

**Date de création :** 26 octobre 2025  
**Statut :** Section B partiellement complétée (2/6 slides)  
**Prochaine étape :** Création des slides B1-B4
