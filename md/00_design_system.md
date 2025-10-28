# Charte Graphique et Design System - Présentation Thèse

## Modèle Couplé Richards-AquaCrop pour l'Irrigation au Bénin

---

## 🎨 Palette de Couleurs

### Couleurs Principales

#### Bleu Scientifique (Eau/Physique)

- **Primary Blue**: `#3b82f6` (rgb(59, 130, 246))
- **Dark Blue**: `#1e3a8a` (rgb(30, 58, 138))
- **Light Blue**: `#93c5fd` (rgb(147, 197, 253))
- **Extra Light Blue**: `#dbeafe` (rgb(219, 234, 254))

**Usage**:

- Équation de Richards
- Bulbes d'humectation
- Éléments liés à l'eau
- Fond de la page de garde
- Accents principaux

#### Vert Agriculture (AquaCrop/Plantes)

- **Success Green**: `#10b981` (rgb(16, 185, 129))
- **Dark Green**: `#065f46` (rgb(6, 95, 70))
- **Light Green**: `#d1fae5` (rgb(209, 250, 229))

**Usage**:

- AquaCrop et croissance végétale
- Éléments positifs (H1 confirmée)
- Agriculture et rendements
- Icônes de culture

#### Orange/Ambre (Attention/Données)

- **Warning Orange**: `#f59e0b` (rgb(245, 158, 11))
- **Dark Orange**: `#c07a1a` (rgb(192, 122, 26))
- **Light Orange**: `#fef3c7` (rgb(254, 243, 199))

**Usage**:

- Hypothèse H2 (données globales)
- Avertissements et limites
- Sols sableux/secs
- Goutteurs/émetteurs

#### Rouge (Problèmes/Invalidation)

- **Danger Red**: `#ef4444` (rgb(239, 68, 68))
- **Dark Red**: `#991b1b` (rgb(153, 27, 27))
- **Light Red**: `#fee2e2` (rgb(254, 226, 226))

**Usage**:

- H2 invalidée
- Problèmes de convergence
- Biais SoilGrids
- Zones sèches/stress hydrique

### Couleurs Neutres

#### Grays (Texte/Backgrounds)

- **Dark Gray**: `#1e293b` (rgb(30, 41, 59))
- **Medium Gray**: `#6b7280` (rgb(107, 114, 128))
- **Light Gray**: `#e5e7eb` (rgb(229, 231, 235))
- **Extra Light Gray**: `#f9fafb` (rgb(249, 250, 251))

**Usage**:

- Textes principaux (Dark Gray)
- Textes secondaires (Medium Gray)
- Bordures et séparateurs (Light Gray)
- Backgrounds neutres (Extra Light Gray)

#### Sols (Spécifique)

- **Soil Brown**: `#d4a574` (rgb(212, 165, 116))
- **Dark Soil**: `#8b6f47` (rgb(139, 111, 71))
- **Clay Brown**: `#a0826d` (rgb(160, 130, 109))

**Usage**:

- Représentations du sol
- Textures et particules
- Animations d'infiltration

---

## 📐 Typographie

### Polices

#### Police Principale : **Inter** ou **Segoe UI**

```css
font-family: "Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
```

- **Caractéristiques**: Moderne, lisible, professionnelle
- **Usage**: Tout le texte de présentation

#### Police Monospace : **Fira Code** ou **Consolas**

```css
font-family: "Fira Code", "Consolas", "Courier New", monospace;
```

- **Usage**: Code, équations, variables techniques

### Hiérarchie Typographique

| Élément                  | Taille       | Poids          | Couleur                | Usage                    |
| ------------------------ | ------------ | -------------- | ---------------------- | ------------------------ |
| **Titre Principal (h1)** | 2.5em (80px) | 700 (Bold)     | White sur fond dégradé | Page de garde uniquement |
| **Titre Slide (h2)**     | 2em (64px)   | 600 (Semibold) | Dark Blue (#1e3a8a)    | Titre de chaque slide    |
| **Sous-titre (h3)**      | 1.5em (48px) | 600 (Semibold) | Primary Blue (#3b82f6) | Sections dans slides     |
| **Sous-sous-titre (h4)** | 1.2em (38px) | 600 (Semibold) | Dark Gray (#1e293b)    | Cartes et composants     |
| **Corps de texte (p)**   | 1em (32px)   | 400 (Regular)  | Dark Gray (#1e293b)    | Paragraphes standard     |
| **Texte petit**          | 0.8em (26px) | 400 (Regular)  | Medium Gray (#6b7280)  | Notes, légendes          |
| **Texte emphase**        | 1em          | 600 (Semibold) | Primary Blue           | Mots-clés importants     |

### Espacements

- **Line height (corps)**: 1.6 (optimal pour lisibilité)
- **Line height (titres)**: 1.2
- **Marge après h2**: 30px
- **Marge entre paragraphes**: 20px
- **Padding interne cartes**: 25px

---

## 🎬 Animations et Transitions

### Types de Transitions entre Slides

| Transition | Effet                 | Usage                     |
| ---------- | --------------------- | ------------------------- |
| **slide**  | Glissement horizontal | Par défaut entre sections |
| **fade**   | Fondu                 | Changements de concepts   |
| **convex** | Perspective 3D        | Révélations importantes   |
| **zoom**   | Zoom avant            | Focus sur détails         |
| **none**   | Instantané            | Fragments dans même slide |

### Durées d'Animation

- **Transition slides**: 500ms (default)
- **Apparition fragments**: 400ms
- **Hover effects**: 300ms
- **Animations canvas**: 60fps (requestAnimationFrame)

### Fragments (Apparition Progressive)

| Classe                     | Effet              | Usage               |
| -------------------------- | ------------------ | ------------------- |
| `.fragment`                | Apparition simple  | Par défaut          |
| `.fragment.fade-in`        | Fondu entrant      | Éléments discrets   |
| `.fragment.fade-out`       | Fondu sortant      | Remplacement d'info |
| `.fragment.grow`           | Agrandissement     | Emphase             |
| `.fragment.shrink`         | Rétrécissement     | Minimisation        |
| `.fragment.highlight-blue` | Surbrillance bleue | Mise en valeur      |

---

## 🧩 Composants Réutilisables

### 1. Cards (Cartes)

#### Carte Standard

```
- Background: white
- Border: 2px solid #e5e7eb
- Border-radius: 10px
- Padding: 25px
- Box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
- Transition: transform 0.3s ease
- Hover: translateY(-5px), shadow plus prononcée
```

#### Carte d'Hypothèse

```
- Border-left: 6px solid [couleur H1/H2/H3]
- H1: Primary Blue
- H2: Warning Orange
- H3: Success Green
```

#### Carte de Métrique

```
- Border: 3px solid [couleur performance]
- Bonne: Success Green
- Moyenne: Warning Orange
- Mauvaise: Danger Red
```

### 2. Callout Boxes (Boîtes d'Alerte)

#### Callout Info (Bleu)

```
- Background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)
- Border-left: 6px solid Primary Blue
- Icon: ℹ️ ou 💡
```

#### Callout Warning (Orange)

```
- Background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)
- Border-left: 6px solid Warning Orange
- Icon: ⚠️
```

#### Callout Danger (Rouge)

```
- Background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)
- Border-left: 6px solid Danger Red
- Icon: ❌ ou ⛔
```

### 3. Boutons

#### Bouton Principal (Primary)

```
- Background: Primary Blue (#3b82f6)
- Color: white
- Padding: 15px 40px
- Border-radius: 25px
- Box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
- Hover: Background Dark Blue, translateY(-2px)
```

#### Bouton Secondaire (Secondary)

```
- Background: transparent
- Color: Primary Blue
- Border: 2px solid Primary Blue
- Padding: 13px 38px
- Hover: Background Primary Blue (10% opacity)
```

### 4. Badges/Labels

#### Badge Statut

```
- Padding: 5px 15px
- Border-radius: 12px
- Font-size: 0.8em
- Font-weight: 600

Variantes:
- Confirmé: Background Success Green, Color white
- Invalidé: Background Danger Red, Color white
- En cours: Background Warning Orange, Color white
```

---

## 📊 Iconographie

### Système d'Icônes

#### Source: Emojis Unicode + Font Awesome (si besoin)

| Catégorie          | Icônes        | Usage                              |
| ------------------ | ------------- | ---------------------------------- |
| **Eau/Irrigation** | 💧 💦 🌊 🚿   | Bulbes, flux, irrigation           |
| **Agriculture**    | 🌱 🌾 🌿 🪴   | Plantes, cultures, croissance      |
| **Données**        | 📊 📈 📉 📋   | Graphiques, métriques, résultats   |
| **Localisation**   | 📍 🗺️ 🌍      | Bénin, communes, géolocalisation   |
| **Validation**     | ✅ ✓ ❌ ⚠️ 🔄 | Statuts hypothèses                 |
| **Système**        | ⚙️ 🔧 🧮 🔗   | Architecture, composants, couplage |
| **Temps**          | ⏱️ ⏰ 📅      | Échelles temporelles               |
| **Science**        | 🔬 🧪 🧠 📐   | Recherche, expérimentation         |

### Principes d'Utilisation

1. **Cohérence**: Utiliser le même style d'icône pour même concept
2. **Taille**: 1.5em à 3em selon contexte
3. **Espacement**: 10-15px entre icône et texte
4. **Couleur**: Adapter à la sémantique (bleu pour eau, vert pour plantes)

---

## 🎯 Principes de Design

### 1. Hiérarchie Visuelle

**Ordre d'Importance:**

1. Titre de slide (h2) - Grande taille, couleur forte
2. Éléments visuels (graphiques, animations) - Centre d'attention
3. Sous-titres et sections (h3, h4) - Structure
4. Corps de texte - Information détaillée
5. Notes et légendes - Contexte supplémentaire

### 2. Respiration (Whitespace)

- **Marges internes slides**: 60px (top/bottom), 80px (left/right)
- **Espacement entre composants**: 30-40px
- **Espacement dans listes**: 15px entre items
- **Règle générale**: 30-40% de la slide doit être vide

### 3. Alignement

- **Texte principal**: Aligné à gauche pour lisibilité
- **Titres**: Centrés ou alignés à gauche selon contexte
- **Éléments visuels**: Centrés
- **Grilles**: Utiliser système à 12 colonnes (si applicable)

### 4. Contraste

- **Texte sur fond clair**: Dark Gray minimum (#1e293b)
- **Texte sur fond foncé**: White ou Extra Light Blue
- **Ratio minimum**: 4.5:1 (WCAG AA) pour corps de texte
- **Ratio recommandé**: 7:1 (WCAG AAA) pour titres

### 5. Lisibilité

- **Taille minimale texte**: 26px (0.8em)
- **Longueur ligne maximale**: 70 caractères
- **Nombre points par slide**: 3-5 maximum
- **Mots par point**: 5-10 maximum (règle 6x6 assouplie)

---

## 📱 Responsive Design

### Breakpoints (Si applicable pour export)

| Taille      | Largeur         | Ajustements                     |
| ----------- | --------------- | ------------------------------- |
| **Desktop** | > 1280px        | Taille standard                 |
| **Laptop**  | 1024px - 1280px | Légère réduction padding        |
| **Tablet**  | 768px - 1024px  | Grids → 1-2 colonnes            |
| **Mobile**  | < 768px         | Grids → 1 colonne, texte réduit |

### Adaptation Contenu

- **Graphiques**: Responsive via `maintainAspectRatio: false`
- **Canvas animations**: Width/height relatifs au container
- **Texte**: Unités `em` pour scaling proportionnel
- **Images**: `max-width: 100%`, `height: auto`

---

## 🎨 Dégradés (Gradients)

### Dégradés Principaux

#### Gradient Bleu (Eau/Physique)

```css
background: linear-gradient(to bottom, #1e3a8a, #3b82f6);
background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
```

#### Gradient Vert (Agriculture)

```css
background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
```

#### Gradient Orange (Attention)

```css
background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
```

#### Gradient Rouge (Problème)

```css
background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
```

### Usage des Dégradés

- **Fonds de slides importantes**: Page garde, conclusion
- **Callout boxes**: Attention, info, erreur
- **Hover effects**: Très légers (5-10% opacity)
- **Principe**: Ne pas surcharger, 2-3 dégradés max par présentation

---

## 🔲 Grilles et Layouts

### Layouts Principaux

#### Layout Centré (Default)

```
- Content centré verticalement et horizontalement
- Largeur max: 80% de la slide
- Usage: Titres, slides simples
```

#### Layout 2 Colonnes (Split)

```
- 50/50 ou 60/40
- Gap: 40px
- Usage: Comparaisons, texte + visuel
```

#### Layout 3 Colonnes (Triple)

```
- 33/33/33
- Gap: 30px
- Usage: Hypothèses, métriques, niveaux validation
```

#### Layout Fullscreen (Canvas)

```
- 100% width/height
- Padding: 20px
- Usage: Animations, graphiques interactifs
```

---

## 🎭 Thème Général

### Mood Board

**Mots-clés**:

- Scientifique
- Moderne
- Épuré
- Professionnel
- Accessible
- Dynamique

**Inspirations**:

- Présentations académiques TED
- Design Apple Keynote
- Material Design (Google)
- Flat Design avec profondeur subtile

### Ambiance Visuelle

- **Clarté**: Priorité absolue à la lisibilité
- **Élégance**: Sobre mais pas austère
- **Dynamisme**: Animations subtiles mais présentes
- **Cohérence**: Palette limitée et stricte
- **Professionnalisme**: Académique sans être ennuyeux

---

## ✅ Checklist Qualité Design

### Avant Implémentation

- [ ] Palette de couleurs documentée et validée
- [ ] Typographie hiérarchisée et testée
- [ ] Composants réutilisables définis
- [ ] Grilles et layouts planifiés
- [ ] Iconographie cohérente sélectionnée
- [ ] Animations et transitions spécifiées
- [ ] Principes d'accessibilité respectés

### Pendant Implémentation

- [ ] Variables CSS pour couleurs centralisées
- [ ] Classes utilitaires pour espacements
- [ ] Composants modulaires et réutilisables
- [ ] Animations performantes (60fps)
- [ ] Tests sur différentes résolutions
- [ ] Contraste vérifié (outils accessibilité)

### Validation Finale

- [ ] Cohérence visuelle entre toutes les slides
- [ ] Lisibilité à distance (projection)
- [ ] Animations fluides et non distrayantes
- [ ] Temps de chargement acceptable
- [ ] Export PDF fonctionnel
- [ ] Mode présentateur opérationnel

---

**Version**: 1.0  
**Date**: 22 Octobre 2025  
**Statut**: Prêt pour validation et implémentation
