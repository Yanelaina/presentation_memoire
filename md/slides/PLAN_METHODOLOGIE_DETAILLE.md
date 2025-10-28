# 📐 PLAN DE CONCEPTION DÉTAILLÉ - SECTION MÉTHODOLOGIE

## 🎯 Vision Globale

**Objectif pédagogique:** Présenter la démarche scientifique complète ayant conduit au développement du modèle couplé Richards-AquaCrop, depuis l'architecture générale jusqu'à la validation, en mettant l'accent sur les aspects techniques et numériques.

**Nombre total de slides:** 12-15 slides (incluant transitions et slides verticales)

**Durée estimée:** 6-8 minutes

**Fil conducteur:** Construire progressivement la compréhension du pipeline complet : Architecture → Solveur Richards → Couplage → Validation

---

## 📋 STRUCTURE DÉTAILLÉE PAR SLIDE

### **SLIDE M0: Page de Transition "MÉTHODOLOGIE"**

**Type:** Slide de transition (plein écran)

**Durée:** 3-5 secondes

**Contenu visuel:**

- Titre central: "MÉTHODOLOGIE" (police grande, couleur #0B3D5B)
- Sous-titre: "Du concept à l'implémentation" (police moyenne, couleur #6B8E23)
- Icône centrale: 🧩 ou ⚙️
- Fond épuré avec dégradé subtil

**Design:**

```html
<section data-background-color="#fbfbfb">
  <div style="text-align: center; padding: 100px 0;">
    <h1 style="font-size: 3.5em; color: #0B3D5B; margin-bottom: 20px;">
      MÉTHODOLOGIE
    </h1>
    <p style="font-size: 1.4em; color: #6B8E23; font-style: italic;">
      Du concept à l'implémentation
    </p>
    <div style="font-size: 5em; margin-top: 40px;">⚙️</div>
  </div>
</section>
```

**Notes orales:**
"Passons maintenant à la méthodologie. Je vais vous présenter comment nous avons concrètement construit ce modèle couplé, depuis l'architecture générale jusqu'à sa validation."

---

### **SLIDE M1: Architecture Générale du Pipeline**

**Type:** Slide horizontale principale

**Durée:** 45-60 secondes

**Ressources:**

- Image: `presentation/assets/global_architecture.png`

**Contenu structuré:**

1. **Titre** (haut de page):

   - "Architecture générale du pipeline de simulation"
   - Police h4, couleur #0B3D5B, bordure inférieure #6B8E23

2. **Introduction** (texte court):

   - "Un système modulaire intégrant données, physique du sol et modèle de culture"
   - Police 0.7em, centrée, max-width 900px

3. **Image principale** (centrée, agrandie):

   - `global_architecture.png`
   - Width: 85-90% de l'écran
   - Box-shadow pour profondeur
   - Fragment fade-in (data-fragment-index="1")

4. **Légende détaillée** (sous l'image):
   - Trois composantes clés:
     - **Entrées** : Données ERA5-Land, SoilGrids, paramètres culture
     - **Modules** : Solveur Richards 2D + AquaCrop + Interface de couplage
     - **Sorties** : θ(r,z,t), rendement, LAI, consommation d'eau
   - Grille 3 colonnes, fragment fade-up (index="2")

**Code structure:**

```html
<section data-background-color="#fbfbfb">
  <h4 style="color: #0B3D5B; border-bottom: 3px solid #6B8E23;">
    Architecture générale du pipeline de simulation
  </h4>

  <p
    style="font-size: 0.7em; text-align: center; margin: 20px auto; max-width: 900px;"
  >
    Un système modulaire intégrant extraction de données, physique du sol et
    modèle de culture
  </p>

  <div class="fragment fade-in" data-fragment-index="1">
    <img
      src="assets/global_architecture.png"
      style="width: 88%; box-shadow: 0 6px 20px rgba(0,0,0,0.15);"
    />
  </div>

  <div
    class="fragment fade-up"
    data-fragment-index="2"
    style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; 
                margin-top: 25px; font-size: 0.6em;"
  >
    <!-- Trois colonnes: Entrées | Modules | Sorties -->
  </div>
</section>
```

**Notes orales:**
"Voici l'architecture complète de notre pipeline. Nous partons de données mondiales ERA5 et SoilGrids, qui sont prétraitées et injectées dans notre système de couplage bidirectionnel. Le cœur du système est le solveur Richards 2D couplé avec AquaCrop. Les sorties nous donnent à la fois l'état hydrique complet du sol et les indicateurs agronomiques comme le rendement et le LAI."

**Points techniques à mentionner:**

- Modularité du système
- Flux de données cohérent
- Couplage bidirectionnel au centre

---

### **SLIDE M2: Solveur Richards - Domaine et Conditions aux Limites**

**Type:** Slide horizontale (début d'une section verticale)

**Durée:** 45 secondes

**Ressources:**

- Image: `presentation/assets/domaine.png`

**Contenu structuré:**

1. **Titre:**

   - "Solveur Richards 2D — Domaine de simulation"

2. **Disposition en deux colonnes:**

   **Colonne gauche (55%):**

   - Image `domaine.png` agrandie
   - Légende technique précise

   **Colonne droite (45%):**

   - **Géométrie axisymétrique:**

     - Rayon R_max = 0.5-1.0 m
     - Profondeur Z_max = 1.0-1.5 m
     - Exploitation symétrie cylindrique

   - **Conditions aux limites:**

     - Γ_surf^irr : flux irrigation q_irr(t)
     - Γ_surf^atm : flux atmosphérique (P-ET)
     - Γ_axe : symétrie (∂ψ/∂r = 0)
     - Γ_lat, Γ_fond : drainage libre ou flux nul

   - Encadrés colorés pour chaque BC

**Code structure:**

```html
<section data-background-color="#fbfbfb">
  <h4>Solveur Richards 2D — Domaine de simulation</h4>

  <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 35px;">
    <!-- Colonne gauche: Image -->
    <div class="fragment fade-in" data-fragment-index="1">
      <img src="assets/domaine.png" style="width: 100%;" />
      <p style="font-size: 0.55em; margin-top: 12px;">
        <strong>Figure:</strong> Domaine axisymétrique (r,z) avec conditions aux
        limites
      </p>
    </div>

    <!-- Colonne droite: Spécifications -->
    <div style="text-align: left;">
      <div class="fragment fade-up" data-fragment-index="2">
        <!-- Géométrie -->
      </div>
      <div class="fragment fade-up" data-fragment-index="3">
        <!-- Conditions aux limites -->
      </div>
    </div>
  </div>
</section>
```

**Notes orales:**
"Pour résoudre l'équation de Richards, nous utilisons un domaine axisymétrique en coordonnées (r,z). Cette géométrie est parfaitement adaptée à l'irrigation goutte-à-goutte qui crée un bulbe circulaire autour du goutteur. Les conditions aux limites sont cruciales : en surface, on impose le flux d'irrigation localisé et les échanges atmosphériques. Sur l'axe, la condition de symétrie. Et sur les bords latéraux et le fond, on peut avoir du drainage libre selon la configuration."

---

### **SLIDE M2v1: Formulation Variationnelle (Verticale)**

**Type:** Slide verticale (détail mathématique)

**Durée:** 60 secondes

**Ressources:**

- Fichier LaTeX: `discretisation.tex` (lignes 1-120)

**Contenu structuré:**

1. **Titre:**

   - "Formulation faible et discrétisation"

2. **Section 1 - Espace fonctionnel** (fragment 1):

   - Encadré bleu clair
   - Équation LaTeX avec MathJax:

   ```latex
   V := H^1_r(\Omega) = \{ v \in L^2_r(\Omega) | \nabla v \in [L^2_r(\Omega)]^2 \}
   ```

   - Explication: espace de Sobolev pondéré par r

3. **Section 2 - Formulation variationnelle** (fragment 2):

   - Encadré jaune avec bordure
   - **Problème:** Trouver ψ(t) ∈ V tel que:

   ```latex
   \int_\Omega C(\psi)\frac{\partial\psi}{\partial t} v \,r\,dr\,dz
   + \int_\Omega K(\psi) \nabla\psi \cdot \nabla v \,r\,dr\,dz
   + \int_\Omega K(\psi) \frac{\partial v}{\partial z} \,r\,dr\,dz
   = \int_\Omega S v \,r\,dr\,dz + \int_{\Gamma_{\text{surf}}} q_{\text{surf}} v \,r\,d\Gamma
   ```

4. **Section 3 - Termes physiques** (fragment 3):
   - Grille 3 colonnes identifiant:
     - Terme capacitif (C∂ψ/∂t)
     - Terme diffusif (K∇ψ)
     - Terme gravitaire (K∂v/∂z)
     - Terme source (S) et flux de bord

**Code structure:**

```html
<section data-background-color="#fbfbfb">
  <h5>Formulation faible et discrétisation</h5>

  <!-- Espace fonctionnel -->
  <div
    class="fragment fade-in"
    data-fragment-index="1"
    style="background: #dbeafe; padding: 15px; border-radius: 8px;"
  >
    \[ V := H^1_r(\Omega) = ... \]
  </div>

  <!-- Formulation variationnelle -->
  <div
    class="fragment fade-up"
    data-fragment-index="2"
    style="background: #fef3c7; border: 3px solid #f59e0b;"
  >
    <!-- Équation complète -->
  </div>

  <!-- Interprétation physique -->
  <div class="fragment fade-up" data-fragment-index="3">
    <!-- Grille 3 colonnes -->
  </div>
</section>
```

**Notes orales:**
"Mathématiquement, on transforme l'EDP forte en formulation faible. On cherche la solution dans un espace de Sobolev pondéré par r pour tenir compte de la géométrie axisymétrique. L'équation variationnelle fait apparaître quatre termes principaux : le terme capacitif qui représente l'accumulation d'eau, le terme diffusif qui capture la diffusion capillaire, le terme gravitaire, et les termes sources incluant l'extraction racinaire."

---

### **SLIDE M2v2: Maillage Adaptatif (Verticale avec Vidéo)**

**Type:** Slide verticale (animation + comparaison)

**Durée:** 50 secondes

**Ressources:**

- Vidéo: `presentation/assets/animations/mesh_comparison_animation.mp4`
- Image: `presentation/assets/maillage.png`

**Contenu structuré:**

1. **Titre:**

   - "Maillage adaptatif pour capture des gradients"

2. **Vidéo d'animation** (fragment 1):

   - Intégration HTML5 video
   - Autoplay, loop
   - Controls visibles
   - Width: 70%, centré

3. **Comparaison texte** (fragment 2):

   - Deux colonnes:

     - **Maillage uniforme:**

       - Simple mais inefficace
       - ~50,000 éléments
       - Gradients mal capturés

     - **Maillage adaptatif:**
       - Raffinement local près goutteur
       - ~15,000 éléments
       - Précision 10x meilleure
       - Coût réduit de 60%

4. **Image statique de référence** (fragment 3):
   - `maillage.png` en complément
   - Zoom sur zone raffinée

**Code structure:**

```html
<section data-background-color="#fbfbfb">
  <h5>Maillage adaptatif pour capture des gradients</h5>

  <!-- Vidéo animation -->
  <div class="fragment fade-in" data-fragment-index="1">
    <video width="70%" controls autoplay loop muted>
      <source
        src="assets/animations/mesh_comparison_animation.mp4"
        type="video/mp4"
      />
    </video>
    <p style="font-size: 0.55em;">
      <strong>Animation:</strong> Comparaison maillage uniforme vs adaptatif
    </p>
  </div>

  <!-- Comparaison -->
  <div
    class="fragment fade-up"
    data-fragment-index="2"
    style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;"
  >
    <!-- Deux encadrés de comparaison -->
  </div>
</section>
```

**Notes orales:**
"Le choix du maillage est crucial. Cette animation montre la différence entre un maillage uniforme et notre maillage adaptatif. On raffine fortement la zone proche du goutteur où les gradients de pression sont très forts. Résultat : on divise le nombre d'éléments par 3 tout en augmentant considérablement la précision. C'est essentiel pour capturer correctement la formation du bulbe d'humectation."

---

### **SLIDE M2v3: Discrétisation Spatiale (Verticale)**

**Type:** Slide verticale (technique FEM)

**Durée:** 45 secondes

**Ressources:**

- Fichier LaTeX: `discretisation.tex` (lignes 120-200)

**Contenu structuré:**

1. **Titre:**

   - "Méthode des Éléments Finis — Discrétisation spatiale"

2. **Approximation de Galerkin** (fragment 1):

   - Encadré vert
   - Équation:

   ```latex
   V_h \subset V, \quad \psi_h(r,z,t) = \sum_{j=1}^N \Psi_j(t) \phi_j(r,z)
   ```

   - Explication: éléments P1 (linéaires par morceaux)

3. **Système matriciel** (fragment 2):

   - Encadré jaune central
   - **Forme compacte:**

   ```latex
   \mathbf{M}(\boldsymbol{\psi}) \frac{d\boldsymbol{\psi}}{dt}
   + \mathbf{A}(\boldsymbol{\psi}) \boldsymbol{\psi}
   + \mathbf{g}(\boldsymbol{\psi})
   = \mathbf{f} + \mathbf{s}(\boldsymbol{\psi})
   ```

4. **Matrices et vecteurs** (fragment 3):
   - Grille 2x2 définissant:
     - **M**: Matrice de masse (capacitive)
     - **A**: Matrice de rigidité (diffusive)
     - **g**: Vecteur gravitaire
     - **f**: Vecteur flux de bord
     - **s**: Vecteur terme source

**Code structure:**

```html
<section data-background-color="#fbfbfb">
  <h6>Méthode des Éléments Finis</h6>

  <!-- Approximation -->
  <div
    class="fragment fade-in"
    data-fragment-index="1"
    style="background: #d1fae5; border-left: 4px solid #10b981;"
  >
    \[ \psi_h(r,z,t) = \sum_{j=1}^N \Psi_j(t) \phi_j(r,z) \]
  </div>

  <!-- Système matriciel -->
  <div
    class="fragment fade-up"
    data-fragment-index="2"
    style="background: #fef3c7; border: 3px solid #f59e0b;"
  >
    \[ \mathbf{M}(\boldsymbol{\psi}) \frac{d\boldsymbol{\psi}}{dt} + ... \]
  </div>

  <!-- Définitions -->
  <div class="fragment fade-up" data-fragment-index="3">
    <!-- Grille 2x2 -->
  </div>
</section>
```

**Notes orales:**
"On discrétise l'espace avec des éléments finis linéaires. La solution est approximée par une combinaison de fonctions de base nodales. Cela transforme notre EDP en un système d'EDO matriciel. On retrouve la matrice de masse M qui représente l'accumulation, la matrice de rigidité A pour la diffusion, et les vecteurs pour la gravité et les sources."

---

### **SLIDE M2v4: Algorithme de Résolution (Verticale avec Code)**

**Type:** Slide verticale (pseudo-code)

**Durée:** 70 secondes

**Ressources:**

- Fichier LaTeX: `numerical_resolution.tex` (lignes 1-150)
- Plugin: RevealHighlight pour coloration syntaxique

**Contenu structuré:**

1. **Titre:**

   - "Algorithme de résolution numérique"

2. **Schéma temporel** (fragment 1):

   - Encadré rouge (importance)
   - **Euler implicite (A-stable):**

   ```latex
   \mathbf{R}(\boldsymbol{\psi}^{n+1}) = \mathbf{M}(\boldsymbol{\psi}^{n+1})
   \frac{\boldsymbol{\psi}^{n+1} - \boldsymbol{\psi}^n}{\Delta t}
   + \mathbf{A}(\boldsymbol{\psi}^{n+1})\boldsymbol{\psi}^{n+1} + ... = \mathbf{0}
   ```

3. **Stratégie de linéarisation** (fragment 2):

   - Deux colonnes:
     - **Picard (2-5 itérations):** Simple, robuste, convergence linéaire
     - **Newton-Raphson:** Jacobien complet, convergence quadratique

4. **Pseudo-code de la boucle** (fragment 3):
   - Block code avec highlight
   - Environnement RevealJS code

```python
# Algorithme hybride Picard-Newton
for n in range(N_timesteps):
    ψ_k = ψ_n  # Initialisation

    # Phase Picard (2-5 itérations)
    for k in range(m_Picard):
        Assemble M(ψ_k), A(ψ_k)
        Solve: [M(ψ_k)/Δt + A(ψ_k)] ψ_{k+1} = RHS(ψ_k)

    # Phase Newton (convergence stricte)
    while ||R(ψ_k)|| > tol:
        Compute Jacobian J(ψ_k)
        Solve: J(ψ_k) δψ = -R(ψ_k)
        ψ_{k+1} = ψ_k + λ δψ  # damping si besoin

    ψ_{n+1} = ψ_k  # Solution convergée
```

**Code structure:**

```html
<section data-background-color="#fbfbfb">
  <h6>Algorithme de résolution numérique</h6>

  <!-- Schéma temporel -->
  <div class="fragment fade-in" data-fragment-index="1">
    <!-- Euler implicite -->
  </div>

  <!-- Stratégie -->
  <div class="fragment fade-up" data-fragment-index="2">
    <!-- Deux colonnes Picard vs Newton -->
  </div>

  <!-- Code -->
  <div class="fragment fade-up" data-fragment-index="3">
    <pre><code class="python" data-trim data-line-numbers>
        # Algorithme hybride
        ...
        </code></pre>
  </div>
</section>
```

**Notes orales:**
"Pour résoudre le système non-linéaire à chaque pas de temps, on utilise une stratégie hybride. D'abord quelques itérations de Picard pour dégrossir, puis on bascule sur Newton-Raphson avec le Jacobien complet pour converger rapidement. Cette approche combine robustesse et efficacité. On utilise aussi un pas de temps adaptatif qui s'ajuste selon la vitesse de convergence."

**Points techniques:**

- A-stabilité d'Euler implicite
- Convergence quadratique de Newton
- Damping si oscillations
- Pas de temps adaptatif (×1.5 ou ×0.5)

---

### **SLIDE M3: Wrapper AquaCrop-OSPy**

**Type:** Slide horizontale

**Durée:** 40 secondes

**Contenu structuré:**

1. **Titre:**

   - "Interface avec AquaCrop via OSPy"

2. **Diagramme de flux** (à créer en SVG):

   - Trois blocs horizontaux:
     - **Configuration** (bleu): Paramètres culture, sol, météo
     - **OSPy Engine** (vert): Exécution batch AquaCrop
     - **Récupération** (orange): Biomasse, LAI, rendement, Tr

3. **Code Python simplifié** (fragment):

```python
from aquacrop import AquaCropModel, Soil, Crop, IrrigationManagement

# Configuration
model = AquaCropModel(
    sim_start_time='2020/04/01',
    sim_end_time='2020/08/31',
    weather_df=meteo_data,
    soil=Soil('SandyLoam'),
    crop=Crop('Maize', planting_date='04/05'),
    irrigation_management=IrrigationManagement(SMT=[50,100])
)

# Exécution
model.run_model()

# Récupération résultats
results = model.get_simulation_results()
LAI = results['Canopy Cover'].values
Biomass = results['Dry above ground biomass'].values
```

4. **Avantages** (grille 3 colonnes):
   - ✅ Interface Python native
   - ✅ Exécution batch rapide
   - ✅ Accès complet aux variables

**Notes orales:**
"Pour interfacer AquaCrop avec notre pipeline Python, on utilise AquaCrop-OSPy, un wrapper Python développé par l'équipe de l'Imperial College London. Il nous permet de configurer tous les paramètres de culture et de sol, d'exécuter AquaCrop en mode batch, et de récupérer toutes les sorties journalières : biomasse, LAI, transpiration, etc. C'est l'outil idéal pour automatiser et intégrer AquaCrop dans notre chaîne de couplage."

---

### **SLIDE M4: Interface de Couplage Bidirectionnel**

**Type:** Slide horizontale (début section verticale)

**Durée:** 60 secondes

**Ressources:**

- Fichier LaTeX: `interface_couplage.tex` (lignes 1-100)

**Contenu structuré:**

1. **Titre:**

   - "Interface de couplage bidirectionnel Richards ↔ AquaCrop"

2. **Problématique des échelles** (fragment 1):

   - Encadré rouge (challenge)
   - Trois incompatibilités:
     - **Spatiale:** 2D hétérogène (Richards) vs 1D homogène (AquaCrop)
     - **Temporelle:** Δt ∈ [1, 60]s vs Δt = 86400s (journalier)
     - **Variables:** ψ(r,z,t) vs θ_i(t) par couche

3. **Diagramme de couplage** (fragment 2):
   - SVG avec deux boucles:
     - **Boucle faible** (séquentielle): AquaCrop → Richards
     - **Boucle forte** (itérative): Convergence mutuelle
4. **Transformations clés** (fragment 3):
   - Grille 2 colonnes:
     - **Downscaling:** θ̄_i → S_pot(r,z,t)
     - **Upscaling:** ψ(r,z,t) → θ̄_i^eff

**Code structure:**

```html
<section data-background-color="#fbfbfb">
  <h4>Interface de couplage bidirectionnel</h4>

  <!-- Problématique -->
  <div
    class="fragment fade-in"
    data-fragment-index="1"
    style="background: #fef2f2; border: 3px solid #ef4444;"
  >
    <!-- Trois incompatibilités -->
  </div>

  <!-- Diagramme SVG -->
  <div class="fragment fade-in" data-fragment-index="2">
    <svg viewBox="0 0 900 400">
      <!-- Diagramme couplage faible vs fort -->
    </svg>
  </div>

  <!-- Transformations -->
  <div class="fragment fade-up" data-fragment-index="3">
    <!-- Grille 2 colonnes -->
  </div>
</section>
```

**Notes orales:**
"Le couplage entre Richards et AquaCrop pose un vrai défi d'échelles. Richards fonctionne en 2D à pas de temps très fin, AquaCrop en 1D homogène à pas journalier. On doit donc construire une interface qui réconcilie ces différences. On a implémenté deux stratégies : un couplage faible séquentiel pour tester, et un couplage fort itératif pour assurer la cohérence physique complète."

---

### **SLIDE M4v1: Couplage Fort - Algorithme Détaillé (Verticale)**

**Type:** Slide verticale (détail technique)

**Durée:** 50 secondes

**Ressources:**

- Fichier LaTeX: `interface_couplage.tex` (lignes 100-200)

**Contenu structuré:**

1. **Titre:**

   - "Couplage fort : boucle de convergence"

2. **Organigramme de l'algorithme** (SVG animé):

   - Flowchart vertical avec branches:

   ```
   [Début pas de temps Δt_c]
         ↓
   [AquaCrop: T_pot(t)]
         ↓
   [Downscaling → S_pot(r,z,t)]
         ↓
   [Richards: résolution avec S_pot]
         ↓
   [Calcul S_max(ψ) et S_réel]
         ↓
   [Upscaling → θ̄_i^eff]
         ↓
   [Convergence T_réel?] ─NO─┐
         YES                  │
         ↓                    │
   [Mise à jour AquaCrop] ←──┘
         ↓
   [Fin pas de temps]
   ```

3. **Critère de convergence** (fragment):

   - Encadré vert

   ```latex
   |T_{\text{réel}}^{(k+1)} - T_{\text{réel}}^{(k)}| / T_{\text{pot}} < \varepsilon
   ```

   - Tolérance typique: ε = 10⁻³ (0.1%)

4. **Équations de transformation** (fragment):
   - **Downscaling:**
   ```latex
   S_{\text{pot}}(r,z,t) = \frac{T_{\text{pot}}(t)}{A_{\text{parcelle}}}
   \cdot \text{RDF}(r,z) \cdot \phi(t)
   ```
   - **Upscaling:**
   ```latex
   \theta_i^{\text{eff}} = \frac{1}{V_i} \int_{V_i} \theta(\psi(r,z)) \, r \, dr \, dz
   ```

**Notes orales:**
"Dans le couplage fort, on itère jusqu'à convergence. AquaCrop propose une demande en transpiration potentielle. On la transforme en terme source 3D spatial pour Richards. Richards simule, on calcule la transpiration réelle permise par l'état hydrique du sol, on renvoie à AquaCrop qui ajuste. On boucle jusqu'à ce que transpiration réelle et potentielle convergent."

---

### **SLIDE M5: Extraction Automatisée des Données**

**Type:** Slide horizontale

**Durée:** 50 secondes

**Ressources:**

- Fichier LaTeX: `extraction_data.tex` (lignes 1-100)

**Contenu structuré:**

1. **Titre:**

   - "Pipeline d'extraction automatisée — ERA5-Land & SoilGrids"

2. **Architecture du pipeline** (diagramme):

   - Trois étapes horizontales:
     - **Acquisition** (bleu): APIs CDS + ISRIC
     - **Prétraitement** (orange): Interpolation, harmonisation
     - **Transformation** (vert): Paramètres Richards + AquaCrop

3. **Sources de données** (fragment 1):

   - Grille 2 colonnes:

     - **ERA5-Land:**

       - Résolution: 9 km, horaire
       - Variables: T, RH, Wind, Radiation, P
       - API: cdsapi Python

     - **SoilGrids 2.0:**
       - Résolution: 250 m
       - Variables: Sand, Clay, Silt, BD, SOC
       - API: REST ISRIC

4. **Code d'exemple** (fragment 2):

```python
# Extraction ERA5-Land
import cdsapi
client = cdsapi.Client()
client.retrieve('reanalysis-era5-land', {
    'variable': ['2m_temperature', 'total_precipitation'],
    'area': [6.5, 2.3, 6.3, 2.5],  # Bénin
    'year': '2020', 'month': ['04', '05', '06']
}, 'meteo.nc')

# Extraction SoilGrids
import requests
url = "https://rest.isric.org/soilgrids/v2.0/properties/query"
response = requests.get(url, params={
    'lon': 2.5, 'lat': 6.4,
    'property': ['sand', 'clay', 'silt', 'bdod']
})
```

**Notes orales:**
"Pour alimenter notre modèle en données, on a développé un pipeline d'extraction automatisé. On récupère les données météo d'ERA5-Land via l'API Copernicus, et les propriétés de sol de SoilGrids via l'API ISRIC. Tout est géolocalisé automatiquement et interpolé spatio-temporellement pour correspondre aux besoins du modèle. C'est complètement automatisé et reproductible."

---

## 🎨 PRINCIPES DE DESIGN TRANSVERSAUX

### **Palette de couleurs cohérente:**

- **Primaire:** #0B3D5B (bleu foncé) - Titres
- **Secondaire:** #6B8E23 (vert olive) - Accents, bordures
- **Highlight:** #f59e0b (orange) - Encadrés importants
- **Info:** #3b82f6 (bleu clair) - Informations techniques
- **Success:** #10b981 (vert) - Validation, résultats positifs
- **Warning:** #ef4444 (rouge) - Problématiques, défis

### **Typographie:**

- Titres h4: 1.8-2em, bold
- Titres h5: 1.4-1.6em
- Titres h6: 1.2em
- Corps: 0.6-0.8em (adapter selon densité)
- Code: monospace, 0.7em

### **Animations fragment:**

- Index progressifs (1, 2, 3...)
- Types: fade-in, fade-up, fade-right, fade-left
- Durée par défaut: 400ms

### **Équations LaTeX:**

- Délimiteurs: `\[ ... \]` pour display, `\( ... \)` pour inline
- Police légèrement agrandie: wrap dans div avec font-size 0.75-0.85em
- Centrage systématique
- Bordures pour équations clés

### **Images et médias:**

- Box-shadow pour profondeur: `0 6px 20px rgba(0,0,0,0.12)`
- Border-radius: 10-12px
- Width optimal: 70-90% selon contenu
- Légendes: font-size 0.55-0.6em, italic, centrées

### **Code blocks:**

- Background: #f8f9fa
- Border-left: 4px solid #3b82f6
- Padding: 15-20px
- Font: monospace, 0.65-0.7em
- Highlight syntax avec plugin RevealHighlight

---

## ✅ CHECKLIST DE VALIDATION PAR SLIDE

Pour chaque slide, vérifier:

- [ ] Titre clair et informatif
- [ ] Durée respectée (30-70s selon complexité)
- [ ] Fragments progressifs pour révélation logique
- [ ] Équilibre texte/visuel (ratio 40/60 ou 50/50)
- [ ] Notes orales rédigées et cohérentes
- [ ] Transitions fluides avec slide précédente
- [ ] Palette de couleurs respectée
- [ ] Équations LaTeX valides (si applicable)
- [ ] Images/vidéos chargées et dimensionnées
- [ ] Accessibilité: contraste suffisant, texte lisible
- [ ] Cohérence avec design global de la présentation

---

## 📊 RÉCAPITULATIF STRUCTURE

```
MÉTHODOLOGIE (12 slides)
│
├─ M0: Transition "MÉTHODOLOGIE"
│
├─ M1: Architecture générale du pipeline
│
├─ M2: Solveur Richards - Domaine & BC
│   ├─ M2v1: Formulation variationnelle
│   ├─ M2v2: Maillage adaptatif (vidéo)
│   ├─ M2v3: Discrétisation FEM
│   └─ M2v4: Algorithme résolution (code)
│
├─ M3: Wrapper AquaCrop-OSPy
│
├─ M4: Interface couplage bidirectionnel
│   └─ M4v1: Couplage fort - Algorithme
│
└─ M5: Extraction données (ERA5 + SoilGrids)
```

**Durée totale estimée:** 7-8 minutes
**Nombre de fragments:** ~35-40
**Médias:** 2 images PNG, 1 vidéo MP4, ~15 équations LaTeX, 3 blocks code

---

## 🔄 PROCHAINES ÉTAPES

1. **Validation du plan:** Confirmer structure et contenu avec utilisateur
2. **Création des slides:** Implémenter HTML/CSS pour chaque slide
3. **Génération des SVG:** Créer diagrammes manquants (couplage, pipeline)
4. **Test des équations:** Valider rendu MathJax de toutes les équations LaTeX
5. **Intégration médias:** Vérifier chargement images/vidéos
6. **Rédaction notes:** Finaliser scripts oraux détaillés
7. **Révision globale:** Test de fluidité et timing

---

**Prêt à procéder à l'implémentation ?** 🚀
