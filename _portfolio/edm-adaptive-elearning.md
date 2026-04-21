---
title: "Système Adaptatif d'E-learning basé sur l'Educational Data Mining"
excerpt: "Plateforme intelligente de personnalisation des parcours pédagogiques par analyse des comportements d'apprentissage et prédiction des performances des étudiants."
collection: portfolio
---

## Description du Projet

Ce projet vise à concevoir et implémenter un **système e-learning adaptatif** capable de personnaliser les contenus et les activités pédagogiques en fonction du profil de chaque apprenant.

Le système repose sur des techniques d'**Educational Data Mining (EDM)** appliquées aux traces d'apprentissage collectées sur des plateformes en ligne (Moodle, LMS). Il intègre des algorithmes de Machine Learning pour identifier les styles d'apprentissage, prédire les performances, et recommander des ressources adaptées.

---

## Objectifs

- Identifier automatiquement les **styles d'apprentissage** des étudiants (modèle de Felder-Silverman)
- **Prédire les performances académiques** à partir des activités d'apprentissage
- Générer des **recommandations personnalisées** de ressources pédagogiques
- Améliorer le taux de réussite et l'engagement des apprenants

---

## Approche Technique

### Collecte et prétraitement des données
- Extraction des logs d'interactions depuis la plateforme LMS
- Sélection de caractéristiques (feature engineering) : temps passé, fréquence de connexion, résultats aux quiz, séquence de navigation

### Modélisation
- **Clustering** (k-means, fuzzy c-means) pour la détection des profils d'apprenants
- **Classification supervisée** (SVM, Random Forest, Naïve Bayes) pour la prédiction des styles d'apprentissage
- **Régression** (MLR, Ridge) pour la prédiction des notes finales

### Système de recommandation
- Filtrage collaboratif basé sur les similarités entre apprenants
- Filtrage basé sur le contenu (représentation sémantique des ressources via RDF/OWL)

---

## Technologies Utilisées

| Catégorie | Outils |
|-----------|--------|
| Machine Learning | Python, Scikit-learn, Weka |
| Semantic Web | Protégé, Apache Jena, SPARQL |
| Données | MySQL, CSV, Moodle LMS logs |
| Visualisation | Matplotlib, Seaborn |
| Environnement | Jupyter Notebook, PyCharm |

---

## Publications Associées

- El Aissaoui O. et al., **El Allioui Y.** — *A fuzzy classification approach for learning style prediction based on web mining technique in e-learning environments.* **Education and Information Technologies**, Springer, 2019. [DOI](https://doi.org/10.1007/s10639-018-9820-5)
- El Aissaoui O. et al., **El Allioui Y.** — *A Hybrid Machine Learning Approach to Predict Learning Styles in Adaptive E-Learning System.* AI2SD'2018, Springer AISC vol. 915.
- El Aissaoui O. et al., **El Allioui Y.** — *A Multiple Linear Regression-Based Approach to Predict Student Performance.* AI2SD'2019, Springer AISC vol. 1102.
- **El Allioui Y.** — *Advanced prediction of learner's profile based on Felder-Silverman learning styles using web usage mining and fuzzy c-means algorithm.* IJCAET, 11(4/5), 2019. [DOI](https://doi.org/10.1504/IJCAET.2019.100447)
