/* data.js — Template : Questions d'un chapitre QCM

   INSTRUCTIONS :
   1. Copier ce fichier dans qcm/<matiere>/<chapitre>/data.js
   2. Remplir titre, matiere et les questions
   3. Mettre disponible: true dans le data.js de la matière parente
   4. Mettre nb_questions à jour dans le data.js de la matière parente

   NIVEAUX : 'facile' | 'moyen' | 'difficile'
*/
const DATA = {
  titre:   'Titre du chapitre',   // affiché dans la barre de progression
  matiere: 'Nom de la matière',

  questions: [
    {
      id: 1,
      enonce:  'Texte de la question ?',
      niveau:  'facile',
      choix: [
        { id: 'A', texte: 'Proposition A' },
        { id: 'B', texte: 'Proposition B' },
        { id: 'C', texte: 'Proposition C' },
        { id: 'D', texte: 'Proposition D' }
      ],
      reponse: 'A',   // id de la bonne réponse
      explication: {
        correcte: 'Explication détaillée pourquoi A est correct.',
        incorrectes: {
          B: 'Pourquoi B est incorrect.',
          C: 'Pourquoi C est incorrect.',
          D: 'Pourquoi D est incorrect.'
        }
      }
    }
    /* Copier-coller le bloc ci-dessus pour chaque question supplémentaire */
  ]
};
