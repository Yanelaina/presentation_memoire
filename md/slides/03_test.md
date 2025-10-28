# 🧩 SECTION 5 — MÉTHODOLOGIE

### 🎯 Objectif global

> Présenter la démarche scientifique et technique ayant conduit à la mise en œuvre du couplage bidirextionnel Richards–AquaCrop:
> depuis la conception du pipeline de données jusqu’à l’intégration du couplage et la validation des simulations.

- Sur la première slide, on peut insérer juste une page vide avec le titre "Méthodologie" pour marquer la transition.

- Ensuite, nous avons la slide M1 qui présente l'architecture générale du pipeline de données, avec un schéma clair des entrées, modules et sorties. On peut l'image jointe pour le diagramme de flux (presentation\assets\global_architecture.png)

- Maintenant, nous allons nous concentrer sur le solveur de Richards ! On doit présenter le domaine de simulation et les conditions aux limites sur une première slide (on peut utiliser presentation\assets\domaine.png), et ensuite en vertical successivement (sur des slides successives) :
  v1: le problème variationnel avec les équations différentielles
  v2: le maillage adaptatif (presentation\assets\animations\mesh_comparison_animation.mp4)

  presentation\assets\maillage.png

  (redaction\latex\content\03_methodology\discretisation.tex)
  v3: la méthode de résolution numérique (éléments finis, schéma implicite), le problème numérique à résoudre.
  v4 : algorithme de résolution (Newton-Raphson + Picard, boucle temporelle) (tu peux utiliser à cette étape l'environnement Code de Reveal.js pour afficher le pseudo-code de l'algorithme avec RevealHighlight comme plugin au besoin) redaction\latex\content\03_methodology\numerical_resolution.tex

- Ensuite, une slide sur le wrapper avec AquaCrop-Ospy, qui permet d'interfacer AquaCrop avec Python. Il s'appuie sur la bibliothèque Ospy pour exécuter le moteur AquaCrop en mode batch. Le wrapper nous permet de configurer les paramètres de la culture avant d'être envoyée à Ospy pour exécuter les simulations et ensuite récupérer les résultats (biomasse, rendement, LAI, etc.) pour chaque pas de temps.

- L'interface de couplage bidirectionnel s'en suit : on doit présenter ici quelques transformations et la logique mathématique derrière le couplage entre les deux modèles (redaction\latex\content\03_methodology\interface_couplage.tex).

Et pour finir, une slide sur le module d'extraction des données d'entrée (météo, sol, irrigation, paramètres culture) à partir des différentes sources (ERA5-Land, SoilGrids, etc.) et leur prétraitement pour être utilisées dans le pipeline de simulation (redaction\latex\content\03_methodology\extraction_data.tex).
