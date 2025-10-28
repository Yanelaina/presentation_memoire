## 🧩 SECTION 4 — Les choix scientifiques qui ont guidé la démarche

### (Durée cible : ~3 minutes — environ 6 slides principales + 2 sous-slides verticales d’illustration)

---

## 🟦 Structure générale (Reveal.js)

| Bloc                       | Type                                            | Nb de slides                                                             | Objectif principal       | Transition |
| -------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------ | ------------------------ | ---------- |
| a) Irrigation localisée    | 2 horizontales + 1 verticale                    | Introduire le choix du goutte-à-goutte et montrer le bulbe d’humectation | `slide` (H) / `fade` (V) |            |
| b) Équation de Richards    | 1 horizontale                                   | Ancrer le choix du modèle physique                                       | `slide`                  |            |
| c) AquaCrop                | 1 horizontale                                   | Expliquer le modèle biologique choisi                                    | `slide`                  |            |
| d) Couplage bidirectionnel | 1 horizontale + 1 verticale (comparaison 1D→2D) | Montrer l’innovation du dialogue sol–plante                              | `slide` / `fade`         |            |

➡️ Total : **8 vues** (6 slides horizontales + 2 verticales d’illustration).
Les slides horizontales portent ton discours, les verticales “zooment” sur une idée visuelle clé.

---

## 🔹 (a) Irrigation localisée — le goutte-à-goutte

### **Slide 4.1 – Pourquoi le goutte-à-goutte ?** _(Horizontale)_

- **Contenu textuel :**

  - Titre : “Pourquoi le goutte-à-goutte ?”
  - 3 phrases clés :

    1. Technique la plus efficiente (≈ 90 %, KARIMOV et al. 2025).
    2. Apport ciblé à la zone racinaire.
    3. Requiert une modélisation fine de la dynamique hydrique.

- **Visuel :**

  - Photo réelle ou schéma stylisé d’un système goutte-à-goutte sur sol nu.
  - En overlay : icône “90% efficacité” ou petit badge graphique animé.

- **Animations :**

  - Transition : `slide`.
  - Apparition progressive des trois phrases (`data-fragment-index`).
  - Badge efficacité pulse léger (CSS keyframes scale 1.05 → 1.0).

---

### **Slide 4.2 – Le bulbe d’humectation (visuel principal)** _(Horizontale)_

- **Contenu textuel minimal :**

  - Titre : “Le bulbe d’humectation — cœur de la dynamique hydrique”
  - Une courte phrase :
    “Chaque goutteur crée une zone d’humidité spécifique, dont la forme dépend des propriétés du sol et du débit.”

- **Visuel :**

  - Animation du **bulbe d’humectation 2D** (axe r-z) :

    - Fond : sol (marron clair)
    - Goutteur (point en haut)
    - Forme du bulbe (isohypses bleues concentriques)

  - Ajouter petite légende : “Zone racinaire active”.

- **Animation (le cœur de la slide) :**

  - **Option 1 – Python / Matplotlib animé (recommandé)** :
    Générer un champ d’humidité simulé (contourf avec colormap `Blues`) et animer l’évolution temporelle (frames 0→12 h). Export en `.gif` ou `.mp4`, intégré avec `<video autoplay loop muted>`.
  - **Option 2 – D3.js dynamique (si tu veux du live)** :
    Utiliser D3 contour plots (ou SVG radial gradients) avec animation progressive du rayon humide.
  - **Option 3 – TikZ / LaTeX exporté** :
    Si tu veux du statique stylé : diagramme fixe avec flèches infiltration.

---

### **Slide 4.2.v – Les limites du “Bucket Model”** _(Verticale, sous la précédente)_

- **Texte :**

  - Titre : “Les limites du modèle ‘bucket’”
  - 3 points :

    - Hypothèse de réservoir homogène
    - Pas de représentation spatiale
    - Extraction racinaire uniforme

- **Visuel :**

  - Comparatif côte à côte :

    - À gauche : schéma “bucket” (rectangle uniforme)
    - À droite : bulbe réel (profil elliptique)

  - Inscription : “Uniforme vs. Localisé”

- **Animation suggérée :**

  - Transition verticale `fade`.
  - SVG animé (clipPath) : l’image “bucket” se déforme vers le bulbe réaliste.
  - Tu peux créer ça :

    - en **SVG animé** via CSS (transform scaleY)
    - ou via **Python + Matplotlib** : dessiner deux profils et faire fondu (via Pillow ou MoviePy → mp4 court).

- **Objectif :**

  - Montrer visuellement pourquoi il faut Richards.

---

## 🔹 (b) L’équation de Richards

### **Slide 4.3 – Pourquoi l’équation de Richards ?** _(Horizontale)_

\begin{figure}[htbp]
\centering
\begin{tikzpicture}[
% Styles pour les éléments
cube/.style = {fill=brown!15, draw=brown!60, line width=0.8pt},
flux/.style = {->, >=Latex, thick, blue!70},
annotation/.style = {font=\footnotesize, text=brown!80!black},
equation/.style = {font=\scriptsize, text=blue!80!black},
mass/.style = {font=\small, text=red!70!black}
]

        % ========================
        % Volume élémentaire de sol (cube 3D)
        % ========================

        % Face avant du cube
        \draw[cube] (0,0) rectangle (3,3);

        % Face droite du cube (perspective 3D)
        \draw[cube] (3,0) -- (4,0.8) -- (4,3.8) -- (3,3) -- cycle;

        % Face supérieure du cube (perspective 3D)
        \draw[cube] (0,3) -- (1,3.8) -- (4,3.8) -- (3,3) -- cycle;

        % ========================
        % Flux entrants et sortants
        % ========================

        % Flux horizontal (q_x)
        % Flux entrant (gauche)
        \draw[flux] (-1.2,1.5) -- (-0.1,1.5);
        \node[annotation] at (-1.8,1.5) {$q_x$};

        % Flux sortant (droite)
        \draw[flux] (3.1,1.5) -- (4.2,2.3);
        \node[annotation] at (4.8,2.3) {$q_x + \frac{\partial q_x}{\partial x}dx$};

        % Flux vertical (q_z)
        % Flux entrant (haut)
        \draw[flux] (1.5,4.2) -- (1.5,3.1);
        \node[annotation] at (1.5,4.6) {$q_z$};

        % Flux sortant (bas)
        \draw[flux] (1.5,-0.1) -- (1.5,-1.2);
        \node[annotation] at (1.5,-1.6) {$q_z + \frac{\partial q_z}{\partial z}dz$};

        % ========================
        % Annotations et équations
        % ========================

        % Loi de Darcy
        \node[equation, align=center] at (-2.5,3.5) {
            \textbf{Loi de Darcy:}\\
            $\vec{q} = -K(\theta)\nabla H$
        };

        % Conservation de masse au centre du cube
        \node[mass, align=center] at (1.5,1.5) {
            $\frac{\partial \theta}{\partial t}$\\
            \footnotesize{(variation de}\\
            \footnotesize{teneur en eau)}
        };

        % Équation de continuité
        \node[equation, align=center] at (6,1.5) {
            \textbf{Conservation de masse:}\\
            $\frac{\partial \theta}{\partial t} = -\nabla \cdot \vec{q} + S$
        };

        % Flèche vers équation de Richards
        \draw[->, >=Latex, thick, leafgreen!70, line width=1.2pt]
        (1.5,-2.5) -- (5.5,-2.5)
        node[midway, below, font=\footnotesize, text=leafgreen!80!black]
        {Combinaison des deux principes};

        % Équation de Richards résultante
        \node[draw, rounded corners, fill=leafgreen!10, text=leafgreen!80!black,
            font=\footnotesize, align=center, text width=5cm] at (8.5,-2.5) {
            \textbf{Équation de Richards:}\\
            $\frac{\partial \theta}{\partial t} = \nabla \cdot [K(\theta) \nabla (\psi + z)] + S$
        };

        % Dimensions du volume élémentaire
        \draw[<->, thin, brown!60] (0,-0.3) -- (3,-0.3);
        \node[annotation] at (1.5,-0.6) {$dx$};

        \draw[<->, thin, brown!60] (-0.3,0) -- (-0.3,3);
        \node[annotation] at (-0.6,1.5) {$dz$};

    \end{tikzpicture}
    \caption{Dérivation de l'équation de Richards à partir d'un volume élémentaire de sol. La combinaison de la loi de Darcy (flux proportionnel au gradient de potentiel hydraulique) et du principe de conservation de masse (équation de continuité) conduit naturellement à l'équation de Richards.}
    \label{fig:derivation_richards}

\end{figure}

- **Texte :**

  - 3 idées clés :

    - Principe de conservation de la masse + loi de Darcy.
    - Représente infiltration, redistribution, ET du sol.
    - Non-linéarité décrite via van Genuchten–Mualem.

- **Visuel :**

  - Forme générale de l’équation (LaTeX → MathJax).
  - En arrière-plan, schéma du profil de sol avec flèches de flux (haut ↔ bas).

- **Animation :**

  - Transition `slide`.
  - Apparition séquentielle : 1️⃣ flèche infiltration (Darcy) → 2️⃣ équation → 3️⃣ icône “modèle physique”.

- **Option visuelle :**

  - Pour un effet pro, ajouter une petite vidéo ou GIF “2D infiltration” (si simulation dispo).

---

## 🔹 (c) Le modèle AquaCrop

### **Slide 4.4 – Pourquoi AquaCrop ?** _(Horizontale)_

- **Texte :**

  - AquaCrop = modèle semi-mécaniste FAO, reliant transpiration ↔ rendement.
  - Avantages :

    1. Peu de paramètres → adapté au Bénin
    2. Couplable hydriquement

- **Visuel :**

  - Diagramme du modèle AquaCrop simplifié :

    - Entrées : météo, sol, culture
    - Sorties : LAI, biomasse, rendement

  - (tu peux reprendre celui du mémoire → `assets/images/aquacrop_schema.png`)

- **Animation :**

  - Fragments pour chaque flèche Entrée → Processus → Sortie.

- **Transition :**

  - `slide`.

---

## 🔹 (d) Couplage bidirectionnel

### **Slide 4.5 – Pourquoi un couplage bidirectionnel ?** _(Horizontale)_

- **Texte :**

  - Sol influence la plante ↔ plante rétroagit sur le sol.
  - Exemple : Richards → humidité → AquaCrop → transpiration → Richards.

- **Visuel :**

  - Boucle de rétroaction animée :

    - Deux cercles “Richards” (bleu) et “AquaCrop” (vert)
    - Flèches animées aller-retour (SVG path animateMotion)

  - Petite mention : “vs couplage unidirectionnel (Kanda, 2021)”

- **Animation :**

  - Flèches apparaissent une par une (fragment).
  - Clignotement doux des cercles (CSS pulse).

---

### **Slide 4.5.v – Avantages du couplage bidirectionnel** _(Verticale)_

- **Texte :**

  - 3 points :

    - Cohérence physique améliorée
    - Interaction réelle sol–plante respectée
    - Adaptation temporelle dynamique

- **Visuel :**

  - Mini-graphique “feedback loop” stylisé (SVG simplifié)
  - Illustration de la convergence (flèche vers “Simulations plus stables”)

- **Animation :**

  - `fade` + fragments.

- **Transition :**

  - Descente verticale → synthèse des avantages.

---

## 🧠 Sur les **animations clés (techniques)**

### 1️⃣ **Bulbe d’humectation**

**Objectif :** montrer l’évolution du front d’humidité autour d’un goutteur.
**Outils possibles :**

| Niveau              | Outil                                                    | Description                                                               |
| :------------------ | :------------------------------------------------------- | :------------------------------------------------------------------------ |
| Simple (statique)   | TikZ (LaTeX) → export PNG                                | Courbes iso-humidité stylisées, très propre pour slide académique.        |
| Intermédiaire       | Python (Matplotlib / contourf + animation.FuncAnimation) | Simule la progression de l’humidité (2D axisym). Export `.gif` ou `.mp4`. |
| Avancé / interactif | D3.js (SVG)                                              | Front d’humidité dynamique avec rayon variable dans le navigateur.        |

> 💡 Recommandation : fais une **animation Matplotlib** (contourf + time loop) exportée en **.mp4** puis intégrée dans la slide via `<video autoplay loop muted>`.
> C’est stable, léger et bluffant visuellement.

---

### 2️⃣ **Limites du Bucket Model**

**Objectif :** comparaison schématique bucket (réservoir uniforme) vs profil 2D localisé.

| Option        | Outil                          | Détails                                       |
| :------------ | :----------------------------- | :-------------------------------------------- |
| Simple        | SVG côte à côte, animés en CSS | Une boîte uniforme qui “se déforme” en bulbe. |
| Intermédiaire | Python + Pillow / MoviePy      | Animation morphing entre deux profils.        |
| Avancé        | D3.js                          | Interpolation shape morph entre deux SVGs.    |

> 💡 Recommandation :
> Crée une **animation SVG** :
>
> - à gauche un rectangle “Bucket”
> - à droite un ellipsoïde “Bulbe”
> - puis une transition `transform: scaleY()` sur le rectangle pour le faire se resserrer en ellipse.
>   Simple, lisible, et directement intégrable dans Reveal.

---

## 🎯 Résumé visuel de la section

| Sous-section               | Type           | Nb slides                             | Focus visuel principal |
| -------------------------- | -------------- | ------------------------------------- | ---------------------- |
| a) Goutte-à-goutte         | 2 + 1 vertical | Animation du bulbe, limites du bucket |                        |
| b) Équation de Richards    | 1              | Équation + schéma infiltration        |                        |
| c) AquaCrop                | 1              | Diagramme fonctionnel                 |                        |
| d) Couplage bidirectionnel | 1 + 1 vertical | Boucle interactive sol–plante         |                        |

➡️ **8 slides totales** — durée optimale ~3 min 30, dynamique, scientifique et fluide.
