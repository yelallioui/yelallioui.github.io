---
title: "TENEMO — Gestion de Profils Neurologiques en Environnement Mobile"
excerpt: "Plateforme collaborative mobile de télémédecine pour la gestion personnalisée de données neurologiques, développée en partenariat avec le LAAS-CNRS et le CHU Hassan II de Fès."
collection: portfolio
---

## Description du Projet

**TENEMO** (*Télé-NEuroScience Mobile*) est la plateforme qui a constitué le cœur de mes travaux de **thèse de doctorat** (2012). Ce projet ambitieux, réalisé en partenariat avec le **LAAS-CNRS** de Toulouse et le **CHU Hassan II** de Fès (Service de Neurologie), vise à permettre le suivi et la gestion personnalisée de patients neurologiques via des **applications mobiles** connectées à une infrastructure collaborative en ligne.

---

## Contexte et Motivation

Le suivi des patients atteints de maladies neurologiques (épilepsie, Parkinson, AVC, etc.) nécessite une collecte continue de données cliniques et comportementales. L'objectif de TENEMO est de permettre à des équipes médicales géographiquement distribuées de collaborer efficacement en temps réel, tout en personnalisant les interfaces et les informations affichées selon le profil de chaque utilisateur (médecin, infirmier, patient).

---

## Objectifs

- Concevoir un **modèle de profil utilisateur** adaptatif pour personnaliser l'accès aux données médicales
- Développer une **architecture mobile** pour la collecte et la transmission sécurisée de données neurologiques
- Implémenter un **moteur de personnalisation** des réponses selon le contexte et le profil
- Assurer l'**interopérabilité** entre les systèmes d'information hospitaliers (HL7, XML)

---

## Approche Technique

### Modélisation des profils
- Modèle formel de profil utilisateur multicouche (rôle médical, contexte, préférences)
- Représentation ontologique des pathologies et données neurologiques (OWL/RDF)
- Règles de personnalisation basées sur l'inférence sémantique

### Architecture mobile
- Application cliente développée en **Objective-C** (iOS)
- Communication avec le serveur via services Web REST/SOAP
- Synchronisation différentielle pour contextes de connectivité limitée

### Infrastructure collaborative
- Serveur Java EE (JBoss) pour la gestion des sessions et des droits
- Base de données relationnelle Oracle pour les données patients
- Module de collaboration en temps réel (messagerie, partage de dossiers)

---

## Technologies Utilisées

| Catégorie | Outils |
|-----------|--------|
| Mobile | Objective-C, Xcode, iOS SDK |
| Backend | Java EE, EJB, JBoss, Oracle |
| Semantic Web | OWL, RDF, Apache Jena |
| Web Services | REST, SOAP, WSDL |
| Collaboration | WebSockets, HL7 |

---

## Partenaires Institutionnels

| Institution | Rôle |
|-------------|------|
| [LAAS-CNRS](https://www.laas.fr/), Toulouse | Encadrement scientifique et expertise SI médicaux |
| [CHU Hassan II](http://www.chu-fes.ma/), Fès — Service de Neurologie | Partenaire clinique, fourniture des cas d'usage |
| [USMBA](http://www.usmba.ac.ma/), Fès | Institution d'accueil du doctorat |

---

## Impact

Ce projet a posé les bases de mes recherches ultérieures sur la **gestion de profils**, la **personnalisation** et les **systèmes adaptatifs**, thématiques que j'ai ensuite transposées au domaine de l'**e-learning adaptatif** et des **systèmes de recommandation** éducatifs.
