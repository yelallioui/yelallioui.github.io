/**
 * data.js — Cours magistraux
 *
 * Champs :
 *   module      : intitulé du cours
 *   niveau      : niveau académique
 *   filiere     : filière(s) concernée(s)
 *   institution : établissement
 *   annee       : année(s) d'enseignement
 *   description : résumé du contenu
 *   type        : "Supports-de-cours" | "Polycopies" | "Slides"
 *   liens       : tableau de { label, url } — laisser [] si non disponible
 */
const DATA = [

  /* ── Master IA & Génie Informatique — FPK, USMS ── */
  {
    module:      "Introduction à NumPy",
    niveau:      "Master IA & GI",
    filiere:     "Intelligence Artificielle et Génie Informatique",
    institution: "USMS — Faculté Polydisciplinaire de Khouribga",
    annee:       "2025",
    description: "Introduction complète à NumPy : manipulation des arrays, calcul numérique et algèbre linéaire en Python. Support destiné aux étudiants du Master IA & GI, FPK, USMS.",
    type:        "Supports-de-cours",
    liens: [
      { label: "📊 SlideShare", url: "https://fr.slideshare.net/slideshow/introduction-complete-a-numpy-manipulation-des-arrays-calcul-numerique-et-algebre-lineaire-en-python/284159255" }
    ]
  },
  {
    module:      "Introduction à Matplotlib",
    niveau:      "Master IA & GI",
    filiere:     "Intelligence Artificielle et Génie Informatique",
    institution: "USMS — Faculté Polydisciplinaire de Khouribga",
    annee:       "2025",
    description: "Fondamentaux des graphiques 2D et visualisation 3D en Python avec Matplotlib. Support destiné aux étudiants du Master IA & GI, FPK, USMS.",
    type:        "Supports-de-cours",
    liens: [
      { label: "📊 SlideShare", url: "https://fr.slideshare.net/slideshow/introduction-complete-a-matplotlib-fondamentaux-graphiques-2d-et-visualisation-3d-en-python/284429882" }
    ]
  },
  {
    module:      "Introduction à SciPy",
    niveau:      "Master IA & GI",
    filiere:     "Intelligence Artificielle et Génie Informatique",
    institution: "USMS — Faculté Polydisciplinaire de Khouribga",
    annee:       "2025",
    description: "Calcul scientifique et analyse avancée en Python avec SciPy. Support destiné aux étudiants du Master IA & GI, FPK, USMS.",
    type:        "Supports-de-cours",
    liens: [
      { label: "📊 SlideShare", url: "https://fr.slideshare.net/slideshow/introduction-a-scipy-calcul-scientifique-et-analyse-avancee-en-python/284636885" }
    ]
  },
  {
    module:      "Introduction à Pandas",
    niveau:      "Master IA & GI",
    filiere:     "Intelligence Artificielle et Génie Informatique",
    institution: "USMS — Faculté Polydisciplinaire de Khouribga",
    annee:       "2025",
    description: "Manipulation et analyse de données en Python avec Pandas pour la Data Science. Support destiné aux étudiants du Master IA & GI, FPK, USMS.",
    type:        "Supports-de-cours",
    liens: [
      { label: "📊 SlideShare", url: "https://fr.slideshare.net/slideshow/introduction-a-pandas-manipulation-et-analyse-de-donnees-en-python-pour-la-data-science/284903154" }
    ]
  },
  {
    module:      "Introduction à Scikit-learn",
    niveau:      "Master IA & GI",
    filiere:     "Intelligence Artificielle et Génie Informatique",
    institution: "USMS — Faculté Polydisciplinaire de Khouribga",
    annee:       "2025",
    description: "Machine Learning avec Scikit-learn : classification, régression, clustering et évaluation de modèles. Support destiné aux étudiants du Master IA & GI, FPK, USMS.",
    type:        "Supports-de-cours",
    liens: []
  },
  {
    module:      "Introduction à Seaborn",
    niveau:      "Master IA & GI",
    filiere:     "Intelligence Artificielle et Génie Informatique",
    institution: "USMS — Faculté Polydisciplinaire de Khouribga",
    annee:       "2025",
    description: "Visualisation statistique avancée en Python avec Seaborn. Support destiné aux étudiants du Master IA & GI, FPK, USMS.",
    type:        "Supports-de-cours",
    liens: []
  },

  /* ── SMI / SIIA — Licence S6, FPK, USMS ── */
  {
    module:      "Programmation Web Avancée (PHP – MySQL)",
    niveau:      "Licence, S6",
    filiere:     "SMI & SIIA",
    institution: "USMS — Faculté Polydisciplinaire de Khouribga",
    annee:       "2025",
    description: "Programmation web avancée avec PHP et MySQL : fondamentaux, POO et base de données. Dispensé au S6 des filières SMI et SIIA, FPK, USMS.",
    type:        "Supports-de-cours",
    liens: [
      { label: "📊 SlideShare", url: "https://fr.slideshare.net/slideshow/programmation-web-avancee-php-mysql-fondamentaux-poo-et-base-de-donnees/283926546" }
    ]
  },
  {
    module:      "Programmation Orientée Objets (Python)",
    niveau:      "Licence, S6",
    filiere:     "SMI & SIIA",
    institution: "USMS — Faculté Polydisciplinaire de Khouribga",
    annee:       "2025",
    description: "Concepts, pratiques et applications de la POO en Python. Dispensé au S6 des filières SMI et SIIA, FPK, USMS.",
    type:        "Supports-de-cours",
    liens: [
      { label: "📊 SlideShare", url: "https://fr.slideshare.net/slideshow/programmation-orientee-objets-python-concepts-pratiques-et-applications/283926543" }
    ]
  },

  /* ── TC-MIP — S4, FPK, USMS ── */
  {
    module:      "Programmation Web 2 — Langage JavaScript",
    niveau:      "Licence, S4",
    filiere:     "TC-MIP — Techniques de Communication",
    institution: "USMS — Faculté Polydisciplinaire de Khouribga",
    annee:       "2025",
    description: "Fondamentaux du langage JavaScript pour le développement web côté client. Module de Programmation Web 2, S4, filière TC-MIP, FPK, USMS.",
    type:        "Supports-de-cours",
    liens: [
      { label: "📊 SlideShare", url: "https://fr.slideshare.net/slideshow/programmation-web-2-langage-javascript/283926542" }
    ]
  },

  /* ── Cours existants (supports en préparation) ── */
  {
    module:      "Programmation Orientée Objet (Java)",
    niveau:      "Licence Pro., S6",
    filiere:     "SMI — Sciences Mathématiques et Informatique",
    institution: "USMS — Faculté Polydisciplinaire de Khouribga",
    annee:       "2020 — présent",
    description: "Introduction à la POO avec Java : classes, objets, héritage, polymorphisme, interfaces, packages et gestion des exceptions.",
    type:        "Supports-de-cours",
    liens: []
  },
  {
    module:      "UML & Génie Logiciel",
    niveau:      "Licence, S5",
    filiere:     "SMI — Sciences Mathématiques et Informatique",
    institution: "USMS — Faculté Polydisciplinaire de Khouribga",
    annee:       "2013 — présent",
    description: "Modélisation orientée objet avec UML 2.x. Diagrammes de cas d'utilisation, classes, séquences et états. Introduction aux méthodes agiles.",
    type:        "Supports-de-cours",
    liens: [
      { label: "📊 SlideShare", url: "https://fr.slideshare.net/slideshow/uml-2-2-introduction-complete-a-la-modelisation-orientee-objet-et-aux-diagrammes-uml/283926647" }
    ]
  },
  {
    module:      "Informatique avancée",
    niveau:      "Master II — Formation continue",
    filiere:     "Informatique",
    institution: "FST — Université Sultan Moulay Slimane",
    annee:       "2014 — présent",
    description: "Concepts avancés : bases de données distribuées, architectures Big Data et introduction à l'intelligence artificielle appliquée.",
    type:        "Supports-de-cours",
    liens: []
  },
  {
    module:      "Concepteur Réalisateur Java EE",
    niveau:      "Formation qualifiante",
    filiere:     "Développement Informatique",
    institution: "ISTA Al-Adarissa — OFPPT, Fès",
    annee:       "2008 — 2011",
    description: "Formation professionnelle certifiante : Servlets, JSP, EJB, JSF, Struts, Hibernate et déploiement sur JBoss AS.",
    type:        "Supports-de-cours",
    liens: []
  }

];
