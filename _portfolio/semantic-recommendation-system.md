---
title: "Système de Recommandation Sémantique pour Ressources Éducatives"
excerpt: "Moteur de recommandation combinant le filtrage collaboratif et la représentation ontologique des connaissances pour personnaliser l'accès aux ressources d'apprentissage."
collection: portfolio
---

## Description du Projet

Ce projet propose un **système de recommandation hybride** pour les plateformes d'e-learning, combinant le **filtrage collaboratif** et une **modélisation sémantique** des ressources pédagogiques basée sur des ontologies OWL/RDF.

L'objectif est de surmonter les limitations classiques des systèmes de recommandation (problème de démarrage à froid, sparsité des matrices) en enrichissant les profils utilisateurs et les descriptions de ressources avec des représentations sémantiques formelles.

---

## Objectifs

- Modéliser les **profils apprenants** et les **ressources pédagogiques** via des ontologies OWL
- Concevoir un **algorithme de filtrage collaboratif** amélioré basé sur les préférences opposées des voisins
- Réduire le problème de **démarrage à froid** grâce à l'inférence sémantique
- Améliorer la pertinence et la diversité des recommandations

---

## Approche Technique

### Modélisation ontologique
- Ontologie des domaines de connaissances (OWL/RDF)
- Représentation sémantique des styles d'apprentissage et des compétences
- Requêtes SPARQL pour l'inférence et la recherche de ressources similaires

### Filtrage collaboratif amélioré
- Calcul de similarité étendu (cosinus, Pearson, Jaccard sémantique)
- Algorithme innovant basé sur les **préférences des voisins opposés** pour améliorer la diversité
- Pondération hybride : score collaboratif + score sémantique

### Architecture du système
- Interface de recommandation REST API
- Base de connaissances persistante (Apache Jena TDB)
- Interface utilisateur web (Java EE / JSF)

---

## Technologies Utilisées

| Catégorie | Outils |
|-----------|--------|
| Semantic Web | OWL, RDF, SPARQL, Protégé |
| Moteur d'inférence | Apache Jena, Pellet Reasoner |
| Backend | Java EE, JSF, Hibernate |
| Base de données | MySQL, Jena TDB |
| Machine Learning | Python, Scikit-learn |

---

## Publications Associées

- El Fazziki A., El Aissaoui O., El Madani El Alami Y., Benbrahim M., **El Allioui Y.** — *A Novel Collaborative Filtering Approach Based on Opposite Neighbors' Preferences.* In: Embedded Systems and Artificial Intelligence, **Springer** AISC vol. 1076, 2020.
- El Aissaoui O. et al., **El Allioui Y.** — *Mining Learners' Behaviors: An Approach Based on Educational Data Mining Techniques.* In: Embedded Systems and Artificial Intelligence, **Springer** AISC vol. 1076, 2020.
