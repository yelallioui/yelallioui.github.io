/* data.js — Chapitres de la matière UML
   Pour ajouter un chapitre : ajouter un objet + créer le répertoire qcm/uml/<id>/
*/
const DATA = [
  {
    id:           'use-case',
    titre:        'Use Case Diagram',
    description:  'Acteurs, cas d\'utilisation, relations include / extend, frontières du système.',
    icon:         '👤',
    lien:         'use-case/index.html',
    nb_questions: 30,
    disponible:   true
  },
  {
    id:           'class-diagram',
    titre:        'Class Diagram',
    description:  'Classes, attributs, méthodes, associations, héritage, composition, agrégation.',
    icon:         '📦',
    lien:         'class-diagram/index.html',
    nb_questions: 30,
    disponible:   true
  },
  {
    id:           'activity-diagram',
    titre:        'Activity Diagram',
    description:  'Flux de contrôle, décisions, parallélisme, partitions.',
    icon:         '🔄',
    lien:         '#',
    nb_questions: 0,
    disponible:   false
  },
  {
    id:           'sequence-diagram',
    titre:        'Sequence Diagram',
    description:  'Interactions temporelles, messages, lignes de vie, fragments combinés.',
    icon:         '📬',
    lien:         '#',
    nb_questions: 0,
    disponible:   false
  },
  {
    id:           'state-diagram',
    titre:        'State Diagram',
    description:  'États, transitions, événements, états composites.',
    icon:         '🔀',
    lien:         '#',
    nb_questions: 0,
    disponible:   false
  }
];
