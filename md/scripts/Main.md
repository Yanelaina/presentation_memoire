
## 🎙️ SCRIPT – INTRODUCTION, CONTEXTE ET PROBLÉMATIQUE

---

### 🟢 **1. Introduction – Accroche et vision (≈ 2 min)**

> **Excellence Monsieur le Président du Jury,  
> Honorables membres du Jury,  
> Chers Parents, Amis et Invités, bienvenus à cette soutenance qui marque la fin de notre formation en Génie Mathématiques et Modélisation, option  Modélisation et Simulation Numérique.
> Nous ne saurions commencer à exposé ce travail sans présenter nos vifs et sincères remerciements à son excellence Monsieur le président du jury et vous Honorables membres du jury, pour avoir accepter de consacrer votre temps, pour évaluer la qualité de ce travail.

> Excellence Monsieur le Président du Jury, Honorables membres du jury, le travail que nous avons l'honneur de soumettre à votre appréciation est intitulé : 
> Modélisation ....
> Il a été supervisé par le Dr Christian Akowanou et encadré par le Dr Jamal Adetola
> **
> 
### 🟡 **2. Jumeau numérique**
> 
> 
> Permettez-moi de commencer cette présentation en vous vendant un rêve, notre rêve. 
> Alors, imaginez !
> **Imaginez un monde où :**
> 
> - un petit producteur, quelque part au Bénin, peut interroger une application sur son téléphone avant d’irriguer pour savoir **combien d’eau apporter, quand et où**, afin de maximiser son rendement tout en économisant l’eau et l'énergie ;
>     
> - une entreprise agricole ou un cluster peut **prévoir avec fiabilité les rendements** de ses exploitants, en intégrant dans une boucle de simulation les aléas climatiques et les pratiques locales de ces derniers;
>     
> - et où les organismes de conseil agricoles ou les instituts de recherche peuvent **tester virtuellement de nouvelles stratégies agricoles** avant de les déployer en milieur réel sur le terrain.
>     
> 
> Ce monde, Excellence Monsieur le Président du Jury, loin d’être un rêve impossible repose sur une technologie émergente : **un jumeau numérique agricole**.
> 
> Un jumeau numérique, c’est une **réplique virtuelle du système sol–plante–atmosphère**, capable de **simuler, prédire et optimiser** les décisions agricoles en temps réel, à partir de données collectées sur le terrain ou issues de sources globales.
> 
> L’objectif ultime d’un tel outil est de rapprocher la simulation du réel, pour mieux comprendre et piloter les systèmes agricoles, particulièrement dans les zones vulnérables comme les nôtres. 
> L'architecture illustrée à la figure suivante, issue des travaux de Zhang et al 2025, illustre l'interaction bidirectionnelle entre les entités physiques et les entités virtuelles. Plus concrètement, les entités physiques représentent ici un champ réel entouré de capteurs IoT, de drones et de sondes pour les mesures terrains. Ces données sont ensuite stockées, analysées et traités dans du cloud afin d'être utilisées pour produire une représentation virtuelle du champ et de ses processus !
> Les échanges bidirectionnels se font donc pour améliorer et évaluer  la représentation virtuelle du système.

---


> Ces dernières années, les travaux scientifiques ont montré un fort engouement autour des jumeaux numériques agricoles.
> 
> Des études récentes, comme celles de **Zhang et al. (2025)** ou de **Purcell et Neubauer (2023)**, distinguent deux grandes dimensions :
> 
> - un **volet analytique**, basé sur l’assimilation de données, l’intelligence artificielle et la télédétection,
>     
> - et un **volet physique**, qui cherche à reproduire les processus fondamentaux du sol, de la culture et de l’atmosphère.
>     
> 
> Or, la majorité des avancées se concentrent aujourd’hui sur le premier volet — l’analyse et la prédiction à partir de données —, souvent au détriment du second.
> 
> Pourtant, c’est la **base physique** qui détermine la fiabilité d’un jumeau numérique. Sans une bonne compréhension du **mouvement de l’eau dans le sol** ou des **échanges hydriques entre la plante et son environnement**, les prédictions restent fragiles.
> 
> Cette limite est encore plus marquée dans les pays à **faible disponibilité de données**, comme le Bénin, où l’accès aux réseaux de capteurs, aux drones ou aux observations de terrain est restreint.
> 
> Il devient donc essentiel de s’appuyer sur des **modèles mécanistes validés** et des **données globales accessibles**, comme celles d’**ERA5-Land** pour la météo ou de **SoilGrids** pour les propriétés des sols.

---

### 🔵 **3. Problématique et orientation du travail (≈ 1 min)**

> C’est dans ce contexte que s’inscrit notre travail.
> 
> L’objectif principal a été de **poser les fondements d’un jumeau numérique agricole** adapté au contexte béninois, en s’appuyant sur un **couplage bidirectionnel entre un modèle hydrologique et un modèle de culture**.
> 
> Plus précisément, notre question de recherche centrale est de savoir :
> 
> **Comment concevoir un jumeau numérique agricole basé sur le couplage robuste entre l’équation de Richards – pour la dynamique de l’eau dans le sol – et AquaCrop – pour la croissance des cultures – capable de fonctionner avec des données globales accessibles, afin de fournir à la fois des prévisions de rendement fiables et des recommandations d’irrigation optimisées ?**
> 
> De nombreuses questions émergent de cette problématique : 
> 
> - Pourquoi avoir choisi **l’irrigation localisée** comme cadre d’étude ?
>     
> - Pourquoi avoir retenu **AquaCrop** et **l’équation de Richards** ?
>     
> - Et surtout, comment mettre en œuvre **un couplage bidirectionnel** entre ces deux mondes, celui de la physique du sol et celui de la physiologie végétale ?
>     
> 
> Ces points nous guideront tout au long de cette présentation.

---

### 💬 **Transitions naturelles vers la suite**

> Nous vous présenterons d’abord les choix scientifiques qui ont guidé notre démarche. 
> Puis nous verrons comment nous avons conçu et implémenté le système, avant de passer aux résultats, aux limites et aux perspectives.

---

Parfait 🌱  
On entre maintenant dans le cœur scientifique de ta soutenance : les **choix de modélisation** et la **méthodologie de développement**.  
Je vais garder le même ton fluide et naturel, calibré pour **≈ 6 à 7 minutes d’oral**, en continuité directe avec ton introduction.

---

### 🟢 **4. Les choix scientifiques qui ont guidé notre démarche (≈ 3 min)**

#### 🔸 a) Pourquoi l’irrigation localisée, et plus particulièrement le goutte-à-goutte ?

> Nous avons choisi de centrer notre étude sur **l’irrigation localisée**, en particulier le **goutte-à-goutte**, car c’est **la technique la plus efficiente** pour l’usage de l’eau en agriculture.
> 
> Contrairement aux méthodes par aspersion ou inondation, où une grande partie de l’eau se perd par évaporation ou ruissellement,  
> le goutte-à-goutte permet d’atteindre, selon KARIMOV et al., 2025, **des efficacités de plus de 90 %**, en apportant l’eau directement à la zone racinaire.
> 
> Mais cette efficacité a un prix : elle impose une **représentation fine de la dynamique de l’eau dans le sol**, car l’infiltration ne se fait plus de manière uniforme, mais **autour de chaque goutteur**. Plus concrètement, comme vous pouvez l'observer à la figure suivante, l'irrigation au goutte à goutte crée une zone humide spécifique autour de chaque goutteur que nous appelons le bulbe d'humectation. 
> 
> La compréhension et la simulation du **bulbe d’humectation** est donc essentielle pour prédire correctement la disponibilité en eau pour la plante.
> 
> C’est cette approche, qui s'oppose aux réservoirs homogènes décrits par les modèles de type "bucket"  qui nous a conduits à utiliser un modèle physique robuste de l’infiltration : **l’équation de Richards**.

---

#### 🔸 b) Pourquoi l’équation de Richards ?

> L’**équation de Richards** est une équation de référence en hydrologie des sols.  
> Elle dérive du **principe de conservation de la masse** et de la **loi de Darcy**, et permet de décrire le mouvement de l’eau dans le sol en fonction du potentiel matriciel et de la teneur en eau.
> 
> Elle intègre la non-linéarité du comportement du sol à travers des relations empiriques comme celles de **van Genuchten–Mualem**, qui traduisent la rétention et la conductivité hydraulique.
> 
> Cette équation constitue le cœur du **volet physique** de notre jumeau numérique.  
> Elle nous permet de simuler, couche par couche, la dynamique d’infiltration, la redistribution et l’évapotranspiration du sol.

---

#### 🔸 c) Pourquoi AquaCrop ?

> Pour représenter le développement et la production des cultures, nous avons choisi **AquaCrop**, le modèle développé par la FAO.
> 
> AquaCrop est un modèle semi-mécaniste largement validé, conçu pour relier directement la **biomasse** et le **rendement** à la **transpiration** de la plante.
> 
> Il présente deux avantages majeurs :
> 
> - il requiert **peu de paramètres**, donc il reste adapté à des contextes à données limitées ;
>     
> - et il est **compatible avec un couplage hydrique**, car la croissance végétale y est directement liée à la disponibilité en eau dans le sol.
>     
> 
> AquaCrop constitue donc le **volet biologique** de notre jumeau numérique.

---

#### 🔸 d) Pourquoi un couplage bidirectionnel ?

> Enfin, pour relier ces deux modèles, nous avons adopté une approche de **couplage bidirectionnel**. En effet, de nombreuses approches dans la littérature ont tenté de coupler les modèles de croissance végétale et des solveurs basés sur l'équation de Richards ! C'est le cas par exemple de Kanda en 2021 qui a couplé le solveur HYDRUS 2D avec le modèle AquaCrop. Cependant la communication entre ces deux modèles est souvent **unidirectionnelle** :  le modèle du sol fournit l’humidité, et le modèle de culture calcule ensuite la transpiration.
> 
> Or, dans la réalité, le sol influence la plante **et la plante influence rétroactivement le sol**.
> 
> Un couplage bidirectionnel permet donc à AquaCrop d’ajuster la demande en eau selon la croissance réelle de la plante, tandis que Richards met à jour en retour l’état hydrique du sol selon cette demande.
> 
> C’est ce dialogue permanent entre les deux modèles qui rend la simulation **plus cohérente physiquement**.



### 🟡 **5. Méthodologie et développement (≈ 3–4 min)**

> Sur la base de ces choix, nous avons conçu une **architecture de simulation** articulée autour de quatre grands modules :  
> 1️⃣ un module d’extraction et de préparation des données,  
> 2️⃣ un solveur numérique de l’équation de Richards,  
> 3️⃣ un wrapper d’interfaçage avec AquaCrop,  
> 4️⃣ et une interface de couplage assurant la synchronisation des échanges.

---

#### 🔹 a) Architecture générale du système

> L’architecture globale fonctionne comme une **boucle de communication** entre les deux modèles.
> 
> À chaque pas de temps :
> 
> - le modèle de Richards calcule la distribution d’humidité et les flux hydriques dans le sol ;
>     
> - ces informations sont transmises à AquaCrop, qui évalue la transpiration et la croissance ;
>     
> - AquaCrop renvoie ensuite la demande en eau au modèle de Richards, qui met à jour l’état du sol.
>     
> 
> Ce cycle se répète, formant ainsi la **base opérationnelle du jumeau numérique**.

---

#### 🔹 b) Le solveur de Richards 2D

> Pour résoudre l’équation de Richards, nous avons développé un **solveur numérique en deux dimensions**, fondé sur une **formulation en potentiel hydrique (head-based)**. 

> Le domaine de simulation est alors passé (on parle de l'axisymétrie en 2D)
> 
> Le domaine est discrétisé à l’aide d’un **maillage triangulaire non structuré**, permettant de représenter finement la géométrie du bulbe d’humectation.
> 
>Enfin, on parle d'une stratégie Picard + Newton et on présente l'algorithme général.
> 


---

#### 🔹 c) Le wrapper de communication et l’interface de couplage

> Pour permettre la communication entre AquaCrop et le solveur de Richards, nous avons développé un **wrapper d’interfaçage**, chargé de convertir les unités, les variables et les fréquences temporelles.
> 
> Ce module fait office de **traducteur** entre le modèle hydrologique et le modèle agronomique.
> 
> L’interface de couplage, quant à elle, gère les **échanges bidirectionnels** à chaque pas de simulation :
> 
> - elle alimente AquaCrop avec les profils d’humidité issus de Richards,
>     
> - et renvoie en retour la demande évaporative et la transpiration estimées.
>     
> 
> L’ensemble constitue ainsi une **plateforme intégrée** où les deux modèles interagissent en continu.

---

#### 🔹 d) Module de données et sources globales

> Enfin, le système repose sur un module d’extraction automatique des données depuis **ERA5-Land** pour la météo et **SoilGrids** pour les propriétés pédologiques.
> 
> Ces données alimentent le modèle en entrée, garantissant son **autonomie** et sa **reproductibilité**, même dans les contextes où les mesures locales sont rares.
> 
> Cette approche nous a permis d’initier un jumeau numérique **fonctionnel**, **basé sur des données accessibles** et **sur des principes physiques solides**.


Parfait 🌾
On va maintenant boucler ton **script complet de soutenance**, avec les **résultats**, la **discussion**, la **conclusion** et les **perspectives**, dans le même ton clair, fluide et professionnel.
Cette dernière partie est conçue pour durer environ **7 à 8 minutes** à l’oral.

---

### 🟢 **1. Résultats et discussion (≈ 4–5 min)**

#### 🔸 a) Module d’extraction et de préparation des données

> Le premier résultat notable concerne le **module d’extraction automatique des données**.
>
> Nous avons développé un script capable de télécharger, formater et interpoler les données météorologiques issues de **ERA5-Land**, ainsi que les données pédologiques issues de **SoilGrids**.
>
> Ces jeux de données fournissent respectivement :
>
> * les variables climatiques nécessaires à la simulation d’évapotranspiration (température, humidité, rayonnement, vent, précipitations),
> * et les propriétés du sol, telles que la texture, la densité apparente, la capacité au champ ou la porosité.
>
> Ces données globales ont été **comparées à des échantillons de sols analysés au laboratoire de pédologie de l’INRAB**.
>
> Le résultat de cette comparaison montre une **cohérence générale des tendances**,
> mais également **des écarts ponctuels** dus à :
>
> * la **résolution spatiale limitée** de SoilGrids,
> * l’absence de données locales précises sur certains points,
> * et la **difficulté d’associer parfaitement** les horizons mesurés en laboratoire avec ceux des modèles globaux.
>
> En conclusion, ces résultats montrent que les données globales peuvent **servir de base initiale fiable**, mais qu’un **calibrage local** reste indispensable pour améliorer la précision.

---

#### 🔸 b) Validation du solveur de Richards

> Concernant le **solveur de Richards**, nous avons d’abord validé la version **unidimensionnelle (1D)** à travers un test de comparaison avec la **solution analytique de Philip**.
>
> Les résultats montrent une **bonne concordance** entre la solution numérique et la solution théorique, confirmant la **stabilité et la précision du schéma numérique** dans le cas 1D.
>
> Nous avons ensuite étendu le solveur en **deux dimensions (2D)** pour simuler le **bulbe d’humectation** généré par un goutteur.
>
> Ce passage en 2D, bien que prometteur, a mis en évidence **des instabilités numériques**, notamment aux interfaces des mailles fines où les gradients d’humidité sont très élevés.
>
> Ces instabilités sont actuellement en cours de traitement à travers des ajustements du pas de temps et des méthodes de linéarisation.
>
> Malgré ces limites, ces premiers tests valident **le comportement général attendu du flux d’infiltration** et ouvrent la voie à un couplage robuste avec AquaCrop.

---

#### 🔸 c) Interfaces de couplage et communication entre modèles

> Enfin, un résultat important est la **mise en place réussie des interfaces de communication** entre le solveur de Richards et AquaCrop.
>
> Concrètement, nous avons développé un **wrapper** qui assure la conversion des variables (par exemple, la teneur en eau en potentiel matriciel) et la **synchronisation temporelle** entre les deux modèles.
>
> Ces interfaces ont été **testées avec des données simulées**, et elles permettent déjà un **échange bidirectionnel fonctionnel**,
> même si le solveur complet 2D n’est pas encore totalement stabilisé.
>
> En d’autres termes, le **cœur du couplage** est désormais opérationnel :
> le jumeau numérique peut faire dialoguer la physique du sol et la physiologie des plantes, dans un cadre extensible et automatisable.


### 🟡 **2. Conclusion (≈ 2 min)**

> En conclusion, ce travail a permis de **poser les fondations théoriques, méthodologiques et logicielles** d’un jumeau numérique agricole adapté au contexte béninois.
>
> Nous avons démontré qu’il est possible de concevoir un modèle couplé **Richards–AquaCrop**, fonctionnant avec **des données globales accessibles**, et reposant sur une **base physique rigoureuse**.
>
> Même si le couplage complet n’est pas encore totalement stabilisé en 2D, les avancées obtenues — notamment sur la construction du solveur, la structuration des modules et la validation du 1D — témoignent de la **robustesse de l’approche et de la cohérence du cadre conceptuel**.
>
> Les hypothèses de départ ont donc été **partiellement validées**,
> et les verrous identifiés fournissent une **feuille de route claire pour les travaux futurs**.

---

### 🔵 **3. Perspectives (≈ 2–3 min)**

> Ces perspectives s’articulent sur trois horizons : **court, moyen et long terme.**

---

#### 🔹 a) À court terme

> À court terme, notre priorité est de **stabiliser le solveur 2D**, d’améliorer la convergence numérique et de finaliser le **couplage complet avec AquaCrop**.
>
> Cela permettra de simuler en continu l’évolution du système sol–culture, depuis l’irrigation jusqu’à la récolte, dans un environnement de test contrôlé.

---

#### 🔹 b) À moyen terme

> À moyen terme, nous prévoyons de **calibrer et valider le modèle** à partir de **mesures locales** obtenues sur des sites expérimentaux.
>
> Ce travail inclura :
>
> * le calibrage des données **SoilGrids** et **ERA5-Land** pour le contexte béninois ;
> * l’intégration d’un **module de dimensionnement de l’irrigation**, permettant de recommander la disposition optimale des goutteurs et les volumes d’eau à appliquer ;
> * et la mise en place d’une **interface utilisateur simplifiée**, destinée aux conseillers agricoles ou aux étudiants en agronomie.

---

#### 🔹 c) À long terme

> À plus long terme, l’objectif est de développer un **jumeau numérique complet**, capable non seulement de prédire les rendements et d’optimiser l’irrigation,
> mais aussi d’intégrer d’autres composantes du système agricole :
> la fertilisation, les stress thermiques, ou encore l’impact des changements climatiques.
>
> Ce jumeau numérique pourra devenir un **outil d’aide à la décision stratégique**, utilisable aussi bien par les producteurs, les chercheurs que par les institutions agricoles.
>
> Au-delà de la recherche, il ouvre la voie à une **transformation numérique du pilotage agricole**, fondée sur la science et sur l’adaptation locale.

---

### 🪶 **Clôture**


---

