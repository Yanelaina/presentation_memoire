# 📸 Guide d'Intégration - Image Zhang et al. (2025)

## 🎯 Objectif

Intégrer l'image du jumeau numérique agricole de Zhang et al. (2025) dans la slide A3b "Les deux volets du jumeau numérique".

---

## 📁 Emplacement de l'Image

**Chemin attendu :**

```
presentation/assets/zhang_digital_twin.png
```

**Emplacement actuel dans le code HTML :**

- **Fichier :** `index.html`
- **Section :** A3b (sous-slide verticale de A3)
- **Ligne approximative :** ~220-250

---

## 🖼️ Image à Utiliser

L'image attachée dans votre conversation montre :

- **Partie gauche :** "Physical entities" (entités physiques)

  - Parcelle agricole avec capteurs IoT
  - Drones de surveillance
  - Tracteurs et équipements
  - Caméras, capteurs de pH, humidité, température

- **Partie centrale :** "Data Storage & Processing" et "Cloud Computing"

  - Stockage cloud
  - Traitement de données
  - Simulation 3D
  - Aide à la décision (Decision Maker)

- **Partie droite :** "Virtual entities" (entités virtuelles)
  - Modélisation 3D de la parcelle
  - Représentation virtuelle des plants

---

## 🔧 Étapes d'Intégration

### Étape 1 : Préparer l'image

1. **Enregistrer l'image** fournie dans la conversation
2. **Renommer** en : `zhang_digital_twin.png`
3. **Placer** dans : `presentation/assets/`

**Recommandations de format :**

- Format : PNG ou JPG
- Résolution recommandée : 1200-1600px de largeur
- Ratio d'aspect : Paysage (environ 16:9 ou 4:3)
- Poids : < 500 KB pour un chargement rapide

### Étape 2 : Vérifier le code HTML

Le code est **déjà intégré** dans `index.html` à la ligne ~220 :

```html
<img
  src="assets/zhang_digital_twin.png"
  alt="Architecture du jumeau numérique agricole - Zhang et al. 2025"
  style="width: 100%; height: auto; border-radius: 10px; border: 2px solid #e5e7eb;"
/>
```

### Étape 3 : Vérifier le CSS

Les styles CSS sont **déjà ajoutés** dans `custom.css` :

```css
/* A3b: Digital Twin Architecture Image - Zhang et al. (2025) */
.dt-architecture-image {
  position: relative;
  animation: fadeInUp 0.6s ease-out;
}

.dt-architecture-image img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: block;
  object-fit: contain;
}

.dt-architecture-image:hover img {
  transform: scale(1.02);
  box-shadow: 0 10px 30px rgba(11, 61, 91, 0.25);
}
```

### Étape 4 : Tester

1. Ouvrir `index.html` dans un navigateur
2. Naviguer jusqu'à la slide A3 "Qu'est-ce qu'un jumeau numérique agricole ?"
3. Appuyer sur `flèche bas` (↓) pour accéder à la sous-slide A3b
4. Vérifier que l'image s'affiche correctement

---

## ✨ Fonctionnalités Intégrées

### Animations

- **Apparition :** Fade-in avec translation verticale (0.6s)
- **Fragment Reveal.js :** L'image apparaît avec `data-fragment-index="1"`
- **Hover effect :** Zoom léger (102%) avec ombre portée au survol

### Mise en page

- **Conteneur :** Largeur max 900px, centré
- **Cadre blanc :** Padding 20px, coins arrondis, ombre portée
- **Bordure image :** 2px gris clair (#e5e7eb)

### Légende académique

- **Format :** "Figure : [description]"
- **Citation :** "Source : Zhang et al. (2025)" en bleu pétrole
- **Style :** Italique, taille 0.75em, centré
- **Background :** Gradient gris clair avec bordure gauche bleue

### Responsive Design

- **Desktop :** Largeur 100% du conteneur (max 900px)
- **Mobile/Tablette :** Adaptation automatique via `width: 100%; height: auto;`

---

## 🎨 Cohérence Visuelle

### Intégration avec le Design System

**Couleurs utilisées :**

- `#0B3D5B` : Bleu pétrole (bordure légende, citation)
- `#e5e7eb` : Gris clair (bordure image)
- `#f9fafb` : Fond légende
- Ombre : `rgba(11, 61, 91, 0.25)` au hover

**Typographie :**

- Légende : 0.75em (12px si base 16px)
- Police : Héritée de Reveal.js (Segoe UI)
- Style : Italique pour la légende

---

## 🔍 Structure HTML Détaillée

```html
<!-- Image illustrative de Zhang et al. (2025) -->
<div class="dt-architecture-image fragment fade-in" data-fragment-index="1">
  <div
    style="background: white; padding: 20px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.1);"
  >
    <!-- Image principale -->
    <img
      src="assets/zhang_digital_twin.png"
      alt="Architecture du jumeau numérique agricole - Zhang et al. 2025"
      style="width: 100%; height: auto; border-radius: 10px; border: 2px solid #e5e7eb;"
    />

    <!-- Légende académique -->
    <p
      style="margin: 15px 0 0 0; font-size: 0.75em; color: #666; text-align: center; font-style: italic;"
    >
      <strong>Figure :</strong> Architecture d'un jumeau numérique agricole
      montrant l'interaction entre entités physiques (capteurs, drones,
      parcelle) et entités virtuelles (stockage cloud, traitement de données,
      simulation 3D, aide à la décision).
      <br />
      <span style="color: #0B3D5B;">Source : Zhang et al. (2025)</span>
    </p>
  </div>
</div>
```

---

## 📝 Notes pour les Speaker Notes

Les notes orales ont été enrichies :

```
Cette figure de Zhang et al. illustre parfaitement l'architecture complète d'un jumeau numérique agricole.
On voit clairement la distinction entre les entités physiques (la vraie parcelle avec ses capteurs IoT,
drones, mesures au sol) et les entités virtuelles (le cloud computing, le stockage de données,
la modélisation 3D, et l'aide à la décision).

Les travaux récents distinguent deux dimensions : le volet analytique basé sur l'IA et les données,
et le volet physique qui reproduit les processus fondamentaux. Notre travail se concentre sur ce dernier,
en développant le cœur de simulation physique qui alimente ce système.
```

---

## ⚠️ Dépannage

### Problème : L'image ne s'affiche pas

**Solutions possibles :**

1. **Vérifier le chemin du fichier**

   ```
   presentation/
   ├── index.html
   └── assets/
       └── zhang_digital_twin.png  ← L'image doit être ICI
   ```

2. **Vérifier l'extension**

   - Si l'image est en `.jpg`, modifier le HTML :
     ```html
     <img src="assets/zhang_digital_twin.jpg" ... />
     ```

3. **Vérifier les permissions**

   - L'image doit être lisible par le navigateur
   - Pas de caractères spéciaux dans le nom de fichier

4. **Ouvrir la console du navigateur (F12)**
   - Onglet "Console" pour voir les erreurs
   - Onglet "Network" pour vérifier si l'image est chargée (Status 200 = OK)

### Problème : L'image est trop grande ou trop petite

**Solutions :**

1. **Modifier la largeur max du conteneur**

   ```html
   <div class="dt-architecture-image ... style="margin: 30px auto; max-width:
   1100px;">
   ```

2. **Ajuster le CSS**
   ```css
   .dt-architecture-image img {
     max-height: 500px; /* Limiter la hauteur */
     object-fit: contain;
   }
   ```

### Problème : L'image est floue

**Solutions :**

1. **Utiliser une image haute résolution** (1600px+ de largeur)
2. **Exporter depuis la source originale** si possible
3. **Éviter les captures d'écran basse résolution**

---

## 🎓 Citation Académique Complète

**Pour la bibliographie :**

```
Zhang, X., et al. (2025). Digital Twin Technology for Precision Agriculture:
A Comprehensive Review. Journal of Agricultural Systems, XX(X), XXX-XXX.
```

_(Remplacer par la référence complète exacte de votre bibliographie)_

---

## ✅ Checklist de Vérification

Avant de valider l'intégration, vérifier :

- [ ] L'image `zhang_digital_twin.png` est dans `presentation/assets/`
- [ ] L'image s'affiche correctement dans le navigateur
- [ ] La légende est lisible et correctement formatée
- [ ] L'animation de fade-in fonctionne (fragment Reveal.js)
- [ ] L'effet hover (zoom + ombre) est actif
- [ ] La citation de la source est visible et bien stylée
- [ ] L'image est responsive (test sur mobile/tablette)
- [ ] Les deux volets (Physique/Analytique) s'affichent en dessous
- [ ] Les speaker notes sont cohérentes avec l'image

---

## 🚀 Améliorations Futures (Optionnel)

Si vous souhaitez aller plus loin :

1. **Zoom interactif :**

   ```javascript
   // Ajouter dans animations.js
   document
     .querySelector(".dt-architecture-image img")
     .addEventListener("click", function () {
       this.classList.toggle("zoomed");
     });
   ```

2. **Annotations interactives :**

   - Ajouter des points cliquables sur l'image
   - Afficher des tooltips explicatifs

3. **Lightbox :**
   - Ouvrir l'image en plein écran au clic
   - Utiliser une bibliothèque comme GLightbox

---

**Dernière mise à jour :** 25 octobre 2025  
**Auteur :** GitHub Copilot  
**Statut :** ✅ Code intégré, en attente de l'image physique
