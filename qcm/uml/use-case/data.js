/* data.js — QCM : Use Case Diagram
   Format : { titre, matiere, questions: [ { id, enonce, niveau, choix, reponse, explication } ] }
   Ajouter vos questions ci-dessous en suivant le même modèle.
*/
const DATA = {
  titre:    'Use Case Diagram',
  matiere:  'UML',

  questions: [
    {
      id: 1,
      enonce:  "Qu'est-ce qu'un acteur dans un diagramme de cas d'utilisation UML ?",
      niveau:  'facile',
      choix: [
        { id: 'A', texte: 'Une classe interne du système' },
        { id: 'B', texte: 'Une entité externe qui interagit avec le système' },
        { id: 'C', texte: 'Un composant logiciel' },
        { id: 'D', texte: 'Une base de données relationnelle' }
      ],
      reponse: 'B',
      explication: {
        correcte: "Un acteur représente une entité externe (personne, système tiers, organisation) qui interagit avec le système en échangeant des informations via des cas d'utilisation. Il est TOUJOURS à l'extérieur de la frontière du système.",
        incorrectes: {
          A: "Les classes appartiennent au diagramme de classes. Un acteur n'est pas une classe interne au système.",
          C: "Un composant est une unité de déploiement interne (diagramme de composants). Un acteur est externe au système.",
          D: "Une base de données peut être modélisée comme acteur si elle est externe, mais ce n'est pas la définition générale d'un acteur UML."
        }
      }
    },
    {
      id: 2,
      enonce:  "Quelle relation indique qu'un cas d'utilisation inclut OBLIGATOIREMENT un autre cas ?",
      niveau:  'moyen',
      choix: [
        { id: 'A', texte: 'extend' },
        { id: 'B', texte: 'include' },
        { id: 'C', texte: 'association' },
        { id: 'D', texte: 'généralisation' }
      ],
      reponse: 'B',
      explication: {
        correcte: "La relation <<include>> signifie que le cas d'utilisation de base DÉCLENCHE TOUJOURS le cas inclus. C'est un comportement obligatoire, réutilisé par plusieurs cas de base.",
        incorrectes: {
          A: "<<extend>> est optionnel et conditionnel : le cas étendu s'exécute SEULEMENT si une condition est vérifiée (point d'extension).",
          C: "L'association relie simplement un acteur à un cas d'utilisation. Elle n'exprime pas de dépendance entre deux cas.",
          D: "La généralisation s'applique entre acteurs ou entre cas (héritage), mais ne signifie pas inclusion obligatoire."
        }
      }
    },
    {
      id: 3,
      enonce:  "Que représente le rectangle dans un diagramme de cas d'utilisation ?",
      niveau:  'facile',
      choix: [
        { id: 'A', texte: 'Un acteur principal' },
        { id: 'B', texte: 'La frontière (limite) du système' },
        { id: 'C', texte: 'Un cas d\'utilisation complexe' },
        { id: 'D', texte: 'Un package UML' }
      ],
      reponse: 'B',
      explication: {
        correcte: "Le rectangle (ou ellipse de contexte) représente la FRONTIÈRE du système : il délimite ce qui est à l'intérieur du système (les cas d'utilisation) et ce qui est extérieur (les acteurs).",
        incorrectes: {
          A: "Les acteurs sont représentés par des bonhommes (stick figures) ou des rectangles stéréotypés, et sont TOUJOURS à l'extérieur du rectangle système.",
          C: "Les cas d'utilisation sont représentés par des ellipses à l'intérieur du rectangle, pas par le rectangle lui-même.",
          D: "Un package UML est représenté par un dossier (tabbed rectangle), différent de la frontière de système."
        }
      }
    }
    /* Ajoutez vos questions ici en suivant le même modèle */
  ]
};
