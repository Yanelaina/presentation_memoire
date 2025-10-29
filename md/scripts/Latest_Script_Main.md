
## 🎙️ SCRIPT – INTRODUCTION, CONTEXTE ET PROBLÉMATIQUE

---
### 🟢 Slide 1 :  **1. Introduction – Accroche et vision (≈ 2 min)**
--- 


Excellence Monsieur le Président du Jury,  
Honorables membres du Jury,  
Chers parents, amis et invités,

merci de votre présence à cette soutenance qui marque la fin de notre formation en Génie Mathématiques et Modélisation, option  Modélisation et Simulation Numérique.

Avant toute chose, permettez-moi d’exprimer nos **vifs et sincères remerciements** à votre endroit, Monsieur le Président du Jury, et à vous, Honorables membres du Jury, pour avoir accepté de consacrer votre temps à l’évaluation de ce travail.

Ce travail, intitulé **« Modélisation de la dynamique hydrique pour l’irrigation goutte-à-goutte : déploiement d’une architecture de couplage bidirectionnel entre AquaCrop et l’équation de Richards 2D »**, a été réalisé sous la supervision  du **Dr Christian Akowanou** et l’encadrement  du **Dr Jamal Adetola**.

---


### 🟡Slide 2 : Le rêve
---
 Permettez-moi de commencer cette présentation en vous vendant un rêve, notre rêve. 
  Alors, imaginez !
 **Imaginez un monde où :**
 
 - un petit producteur, quelque part au Bénin, peut interroger une application sur son téléphone avant d’irriguer pour savoir **combien d’eau apporter, quand et où**, afin de maximiser son rendement tout en économisant l’eau et l'énergie ;
     
 - une entreprise agricole ou un cluster peut **prévoir avec fiabilité les rendements** de ses exploitants, en intégrant dans une boucle de simulation les aléas climatiques et les pratiques locales de ces derniers;
     
 - et où les organismes de conseil agricoles ou les instituts de recherche peuvent **tester virtuellement de nouvelles stratégies agricoles** avant de les déployer en milieu réel sur le terrain.

 Ce monde, Excellence Monsieur le Président du Jury, loin d’être un rêve impossible repose sur une technologie émergente : **un jumeau numérique agricole**.


### 🧠 Slide 3 : Jumeau Numérique
 ---
 
 ####  Slide 3.1
---
 Un jumeau numérique, c’est une **réplique virtuelle du système sol–plante–atmosphère**, capable de **simuler, prédire et optimiser** les décisions agricoles en temps réel, à partir de données collectées sur le terrain ou issues de sources globales.
 
 L’objectif ultime d’un tel outil est de rapprocher la simulation du réel, pour mieux comprendre et piloter les systèmes agricoles, particulièrement dans les zones vulnérables comme les nôtres. 
 L'architecture illustrée à la figure suivante, issue des travaux de Zhang et al 2025, illustre l'interaction bidirectionnelle entre les entités physiques et les entités virtuelles. Plus concrètement, les entités physiques représentent ici un champ réel entouré de capteurs IoT, de drones et de sondes pour les mesures terrains. Ces données sont ensuite stockées, analysées et traités dans du cloud afin d'être utilisées pour produire une représentation virtuelle du champ et de ses processus !
 
  Les échanges bidirectionnels se font donc pour améliorer et évaluer  la représentation virtuelle du système.

---
#### Slide 3.2
---
Cette figure, issue  de Zhang et al (2025) . illustre parfaitement comment un tel système fonctionne concrètement... 

À gauche, nous avons les entités physiques : le champ réel, où des données sont collectées via des capteurs, des drones ou des satellites.

À droite, les entités virtuelles  qui incluent la représentation 3D de la parcelle, les simulations,
le système d'aide à la décision qui permet d'optimiser les interventions.


Le cœur du système, c'est cette **boucle d'échange bidirectionnelle**. Le réel nourrit le virtuel avec des données, et le virtuel informe le réel avec des prédictions et des recommandations. C'est ce dialogue permanent qui rend le jumeau numérique puissant.



Une question toute naturelle apparaît dès lors ! Comment le virtuel reconstruit ou simule le réel à base des données collectées  du réel ?  

---
#### Slide 3.3
---
Les travaux récents, notamment les revues de Purcell & Neubauer 2023 et Zhang et al. 2025 nous éclaire et nous informent que les simulations effectuées par le virtuel pour reconstituer le réel (donc, un vrai champ par exemple), s'appuient sur deux volets complémentaires.
<br><br>
D'une part, le volet analytique, qui utilise l'intelligence artificielle, l'assimilation de données et le machine learning pour analyser massivement les données et faire des prédictions.

D'autre part, le volet physique, qui s'appuie sur les lois fondamentales de la physique – comme les équations différentielles – pour modéliser les processus de croissance ou le transport de l'eau.

 Or, la majorité des avancées se concentrent aujourd’hui sur le premier volet, i.e, l'acquisition, l’analyse et la prédiction à partir de données , souvent au détriment du second.

 Pourtant, c’est la **base physique** qui détermine la fiabilité d’un jumeau numérique. Sans une bonne compréhension du **mouvement de l’eau dans le sol** ou des **échanges hydriques entre la plante et son environnement**, les prédictions restent fragiles.
 

> Cette limite est encore plus marquée dans les pays à **faible disponibilité de données**, comme le Bénin, où l’accès aux réseaux de capteurs, aux drones ou aux observations de terrain est restreint.
> 
> Il devient donc essentiel de s’appuyer sur des **modèles mécanistes validés** et des **données globales accessibles**, comme celles d’**ERA5-Land** pour la météo ou de **SoilGrids** pour les propriétés des sols.

---
#### Slide 3.4
---

C'est d'ailleurs ce que clament Jarvis et al, dans leur excellent article "The Elephant in The Room" publié en 2022, où ils soulignent que la modélisation  physique du continuum sol–plante–atmosphère demeure **le grand oublié** des développements numériques récents. Ils notent que les progrès actuels tels que décrits, délèguent la physique aux modèles existants, qui pour le coup, sont majoritairement empiriques et simplifient la dynamique hydrique. 

Selon eux, l'argument de la complexité algorithmique lié à une représentation plus fidèle de la physique de l'infiltration de l'eau et de son transport dans le sol, qui a conduit précédemment au développement de ces modèles empiriques ne tient plus face aux progrès actuels en méthode numérique et aux capacités actuelles de calcul. 

Ce constat, amplifié par le contexte qui est le nôtre au Bénin,  où l’accès aux réseaux de capteurs, aux drones ou aux observations de terrain est restreint nous a conduits donc à recentrer notre développement sur le fondement physique de la dynamique hydrique.



