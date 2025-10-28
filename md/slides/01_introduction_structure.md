# Cohérence graphique (appliquer à l’ensemble des slides)

- Thème Reveal : base claire (tu utilises `theme/white`) → garde fond blanc cassé `#fbfbfb`.
- Palette principale :

  - Bleu pétrole (titres) `#0B3D5B`
  - Vert olive (accents) `#6B8E23`
  - Gris foncé (texte) `#333333`
  - Accent chaud (call-to-action) `#D97706`

- Polices :

  - Titre : **Inter Bold** (ou system sans-serif bold)
  - Texte : **Inter Regular** / Roboto.

- Logos : utiliser tes logos déjà dans `assets/logos/` (gauche/droite header). Les afficher en en-tête sur toutes les slides (miniature, opacité 0.9).
- Footer : petit bandeau discret avec ton nom + date (opac. 0.6).
- Cohérence d’icônes : utiliser un set simple (ex : Feather icons SVG) pour pictogrammes (données, sol, plante, nuage).
- Transitions globales : horizontal = `slide` (par défaut), vertical (sous-slides) = `fade` (meilleure lisibilité). BackgroundTransition = `fade`.

---

# Section A — INTRODUCTION (Total : **4 slides** ; 1 verticale)

> Objectif : capturer l’attention, exposer le titre et la vision (rêve) très visuelle, préparer le passage au réel.

### Slide A1 — _Page de garde (Full slide horizontal)_

- **Contenu textuel principal :**

  - Titre (grand) : _Modélisation de la dynamique hydrique pour l'irrigation goutte-à-goutte_
  - Sous-titre : _Couplage bidirectionnel AquaCrop — Équation de Richards (2D)_
  - Auteur / Encadrement / Date (déjà présent dans ton code)

- **Visuels :**

  - Logos (déjà en header) + grand visuel central : photo champ + overlay semi-transparent montrant un smartphone avec une appli (importer une image libre de droits ou une capture d’écran mockup).
  - Utiliser l’image `Pasted image 20251023...png` extraite de ton Intro.md / filtered PDF si tu l’as (importer depuis ton document).

- **Animations :**

  - Transition d’arrivée : `slide` (par défaut).
  - Apparition: titre fades-in (0.6s), puis sous-titre (stagger 0.2s), puis visuel (zoom-in 0.6s).

- **Notes d’implémentation :**

  - Cette slide est ton « page de garde » ; elle reste 10–15s au début pendant tes salutations.

---

### Slide A2 — _Accroche — Le rêve (horizontal)_

- **Contenu textuel principal (format large bullets, 3 lignes max) :**

  - « Imaginez un monde où : »
  - Bullet 1 : Producteur -> sait combien d’eau appliquer, où et quand.
  - Bullet 2 : Cluster -> prévoit les rendements avec fiabilité.
  - Bullet 3 : Institution -> anticipe les récoltes et planifie.

- **Visuels :**

  - 3 pictogrammes horizontaux (phone / group / government) alignés sous chaque bullet (créer en SVG ou importer icônes).

- **Animations :**

  - Transition : `slide`.
  - Liste apparaissant _une par une_ (fragment Reveal : `data-fragment-index`), pictogramme correspondant apparaît en même temps avec `fade` + slight upward move.

- **Raison :**

  - Brève, émotionnelle. Sert d’intro parlée au script.

---

### Slide A3 — _Qu’est-ce qu’un jumeau numérique agricole ? (vertical stack — 1 principale + 1 sous-slide verticale)_

- **A3a (horizontal main)** — Définitions courtes + phrase d’accroche

  - **Texte :** définition condensée (1 ou 2 phrases) : « réplique virtuelle du système sol–plante–atmosphère capable de simuler, prédire et optimiser ».
  - **Visuel :** mini diagramme (simple) montrant les trois boîtes : Sol ↔ Plante ↔ Atmosphère (créer en SVG / TikZ exporté en PNG).
  - **Animation interne :** diagramme construit en 3 étapes (sol → plante → atmosphère) via fragments.

- **A3b (vertical sub-slide)** — Zoom sur le diagramme / image issue du doc

  - **Texte court :** « Volets : physique (mécanique) & analytique (données/IA) »
  - **Visuel :** image extraite de ta revue (figure de Zhang et al. 2025) — **IMPORTER** depuis ton document PDF (screenshot de la figure).
  - **Animation :** transition verticale `fade`. Sur cette sous-slide, faire un léger _pan & zoom_ (Ken Burns) sur la partie « physique » du schéma (met en exergue le focus de ton travail).

- **Pourquoi vertical ?** Permet d’offrir une lecture en profondeur (définition puis détail visuel) sans encombrer la slide principale.

---

### Slide A4 — _Annonce du plan oral (horizontal)_

- **Contenu textuel :**

  - Titre : _Plan de la présentation_
  - 4 items courts : 1) Contexte & problématique, 2) Méthodologie & architecture, 3) Résultats & discussion, 4) Conclusions & perspectives.

- **Visuels :**

  - Timeline horizontale simple avec icônes pour chaque item.

- **Animations :**

  - Transition `slide`. Timeline apparait en 4 fragments successifs (left-to-right).

- **Utilisation :**

  - Slide qui sert de repère rappelable (référence pendant la soutenance).

---

# Section B — CONTEXTE SCIENTIFIQUE (Total : **5 slides** ; 2 verticales)

> Objectif : contextualiser scientifiquement → pourquoi l’irrigation localisée, état de l’art jumeaux, rôle des données.

### Slide B1 — _Contexte global & enjeux (horizontal)_

- **Texte principal (3 courts paragraphes) :**

  - Pression démographique & besoin + chiffres courts (FAO / ONU) — une ligne.
  - Lien avec l’eau : agriculture = ~70% prélèvements d’eau douce.
  - Phrase de transition : enjeu « more crop per drop ».

- **Visuels :**

  - Carte stylisée Afrique / Bénin (simple) en vignette — créer via SVG or Matplotlib if you want animated reveal of region.

- **Animations :**

  - Paragraphes qui apparaissent un par un (fragments). Carte fade-in.

---

### Slide B2 — _Spécificité Bénin (horizontal)_

- **Texte :**

  - 3 bullets : part de l’agriculture dans le PIB, contraste pluviométrique nord/sud, pourcentage d’exploitations pluviales vs irriguées.

- **Visuels :**

  - Small bar chart montrant précipitations sud vs nord (généré en Python/Matplotlib → exporter PNG).
  - Photo locale (maraîchage) importée depuis ton dossier si disponible.

- **Animations :**

  - Graphique slide-in from right; bullets appear sequentially.

---

### Slide B3 — _Pourquoi l’irrigation localisée ? (horizontal main + vertical deep dive)_

- **B3a (horizontal main)** — Arguments clés

  - **Texte succinct :** efficacité (≈90%), gain de productivité, réduction d’évaporation et lessivage.
  - **Visuels :** pictogramme goutte-à-goutte large + tiny stat badges (90%, +25–40% rendement).
  - **Animations internes :** badges pop-in.

- **B3b (vertical sub-slide 1)** — _Bulbe d’humectation et échelle spatiale_ (détail)

  - **Texte court :** expliquer qu’il y a gradients radiaux et verticaux → besoin d’une modélisation 2D/3D.
  - **Visuel recommandé :** **importer** ou générer une simulation schématique du bulbe (image provenant du PDF ou simulation Matplotlib polar/contour).
  - **Animation :** fade + contour lines drawing (si SVG, stroke-dashoffset animation).

- **B3c (vertical sub-slide 2)** — _Limites des modèles bucket_

  - **Texte :** 3 points sur les défauts du bucket model (homogénéité, pas de dynamique horaire, extraction racinaire uniforme).
  - **Visuel :** comparaison côte à côte (bucket vs bulbe) — tu as un schéma dans ton document; **importer** et afficher.
  - **Animation :** slide `fade` pour cette sous-slide.

---

### Slide B4 — _Etat de l’art Jumeaux & Approches (horizontal)_

- **Texte :**

  - Courte synthèse : progrès concentrés sur assimilation de données & ML ; déficit sur le couplage physique.

- **Visuels :**

  - Timeline ou matrix image (ex : axes « Physique ↔ Analytique ») — créer en SVG.
  - Citation courte : Zhang 2025 et Purcell 2023 (format : small italic).

- **Animations :**

  - Timeline apparait en fade, citations zoom-in.

---

### Slide B5 — _Données disponibles & contraintes (horizontal + 1 vertical sub-slide)_

- **B5a (horizontal main)** — Sources globales

  - **Texte bullet :** ERA5-Land (météo), SoilGrids (pédologie), télédétection NDVI/LAI (satellites).
  - **Visuel :** logos ou mini-cartes d’exemple (screenshot ERA5 map, SoilGrids layer) — **importer** via screenshots.
  - **Animation :** bullets apparaissent en fragments.

- **B5b (vertical sub-slide)** — _Qualité & limites_ (détail)

  - **Texte :** expliciter incertitudes (résolution, mismatch horizons, absence de capteurs locaux) — 3 bullets.
  - **Visuel :** mini-chart comparatif SoilGrids vs échantillons INRAB (utiliser ton comparatif existant ; screenshot ou bar chart exporté).
  - **Animation :** fade + slide-up pour chart.

---

# Section C — PROBLÉMATIQUE (Total : **3 slides**, 1 verticale)

> Objectif : formuler clairement la question de recherche, hypothèses et les objectifs mesurables.

### Slide C1 — _Question de recherche (horizontal)_

- **Texte (centré, emphase) :**

  - **Question principale, en grande taille :**
    _« Comment concevoir un jumeau numérique agricole, basé sur un couplage bidirectionnel entre une solution Richards 2D et AquaCrop, exploitable avec des données globales (ERA5, SoilGrids) pour optimiser l’irrigation localisée et prévoir les rendements ? »_

- **Visuel :**

  - Aucun visuel lourd — juste une ligne décorative (accent vert) sous la question.

- **Animations :**

  - Fade-in du texte; petite pulsation sur « couplage bidirectionnel » (scale effect).

---

### Slide C2 — _Hypothèses & objectifs (horizontal main + vertical sub-slide)_

- **C2a (horizontal main)** — Hypothèses (liste)

  - **Texte :** H1 / H2 / H3 — 3 bullets courts (présentation concise).
  - **Visuel :** small icons left of each hypothesis (e.g., two-way arrows for H1, globe for H2, gears for H3).
  - **Animation :** apparitions en fragments, icônes slide-in.

- **C2b (vertical sub-slide)** — Objectifs mesurables

  - **Texte :** liste des objectifs spécifiques (développer solveur FEM 2D axisym, RMSE < 5% validation Philip, pipeline ERA5/SoilGrids, métriques RMSE/NSE/R²).
  - **Visuel :** mini-checklist graphique (checks pour objectifs atteints/à atteindre).
  - **Animation :** fade-in for each objective.

---

### Slide C3 — _Impact & retombées attendues (horizontal)_

- **Texte :**

  - 3 bullets : gains pour producteur (eau / rendement), gains pour institutions (prévision), gains scientifiques (couplage bidirectionnel).

- **Visuels :**

  - 3 cards picturales alignées (import icons + 1 photo terrain).

- **Animations :**

  - Cards pan-in sequentially (left to right).

---

# Récapitulatif des slides et navigation

- **INTRODUCTION** : 4 slides → A1 (H), A2 (H), A3 (H + V sub-slide), A4 (H) → **Total 5 vues (A3 adds 1)**
- **CONTEXTE** : 5 slides → B1 (H), B2 (H), B3 (H + 2 V subs), B4 (H), B5 (H + 1 V sub) → **Total 8 vues**
- **PROBLÉMATIQUE** : 3 slides → C1 (H), C2 (H + 1 V sub), C3 (H) → **Total 4 vues**

> **Total sectionnel présentées ici** : environ **17 vues** (combinaison horizontales + verticales).
> Navigation intuitive : avancer horizontalement pour changer de thème, descendre verticalement pour approfondir un point.

---

# Notes techniques & recommandations d’implémentation (Reveal.js)

- **Fragments** : utiliser `<li class="fragment">` pour lists progressive.
- **Vertical slides** : structurer `<section>` imbriquées (Reveal.js vertical).
- **Animations SVG** : pour schémas, préférer SVG animé via CSS (stroke-dasharray) ou utiliser small JS animations (GSAP si dispo).
- **Images du document** : extraire via screenshot (screenshot pages PDF) et placer dans `assets/images/figure_x.png`. Pour figures complexes (TikZ), exporter PNG/SVG depuis ton source LaTeX.
- **Charts dynamiques** : tu peux générer statiques en Python (Matplotlib) puis exporter PNG pour stabilité ; Chart.js/D3 pour interactions seulement si tu veux démonstrations live.
- **Accessibilité** : garder contraste élevé et police ≥ 24px pour texte principal.
- **Notes orateur** : renseigner `data-notes` dans les sections pour ton prompter (Reveal Notes plugin).
