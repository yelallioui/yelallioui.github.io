/* data.js — QCM : Class Diagram
   Format : { titre, matiere, questions: [ { id, enonce, niveau, choix, reponse, explication } ] }
   Ajouter vos questions ci-dessous en suivant le même modèle.
*/
const DATA = {
  titre:    'Class Diagram',
  matiere:  'UML',

  questions: [
    {
      id: 1,
      enonce:  'Quelle notation UML représente une relation de composition entre deux classes ?',
      niveau:  'moyen',
      choix: [
        { id: 'A', texte: 'Une flèche simple en pointillés' },
        { id: 'B', texte: 'Un losange plein (noir) du côté du tout' },
        { id: 'C', texte: 'Un losange vide (blanc) du côté du tout' },
        { id: 'D', texte: 'Une flèche avec triangle creux' }
      ],
      reponse: 'B',
      explication: {
        correcte: "La composition est représentée par un losange PLEIN (rempli en noir) placé du côté de la classe 'tout' (conteneur). Elle exprime une dépendance forte : les parties ne peuvent exister sans le tout.",
        incorrectes: {
          A: "Une flèche en pointillés représente une dépendance ou une réalisation d'interface, pas une composition.",
          C: "Le losange VIDE (creux) représente l'AGRÉGATION, une relation plus faible où les parties peuvent exister indépendamment du tout.",
          D: "Une flèche avec un triangle creux représente l'héritage (généralisation), pas la composition."
        }
      }
    },
    {
      id: 2,
      enonce:  "Quelle est la différence principale entre l'agrégation et la composition en UML ?",
      niveau:  'difficile',
      choix: [
        { id: 'A', texte: "L'agrégation implique une relation de dépendance forte ; la composition est faible" },
        { id: 'B', texte: "En composition, les parties n'existent pas sans le tout ; en agrégation elles peuvent exister indépendamment" },
        { id: 'C', texte: "L'agrégation utilise un losange plein ; la composition utilise un losange vide" },
        { id: 'D', texte: 'Les deux relations sont identiques en UML 2.x' }
      ],
      reponse: 'B',
      explication: {
        correcte: "La COMPOSITION est une relation forte : la partie (composant) ne peut pas exister sans le tout (composite). Si le tout est détruit, les parties le sont aussi. L'AGRÉGATION est plus faible : les parties ont un cycle de vie indépendant.",
        incorrectes: {
          A: "C'est exactement l'inverse : la composition est la relation FORTE, l'agrégation est la relation FAIBLE.",
          C: "C'est l'inverse : la composition = losange PLEIN, l'agrégation = losange VIDE (creux).",
          D: "Les deux relations sont distinctes en UML 2.x avec des sémantiques clairement différentes concernant le cycle de vie."
        }
      }
    },
    {
      id: 3,
      enonce:  'Que signifie la multiplicité "0..*" dans un diagramme de classes ?',
      niveau:  'facile',
      choix: [
        { id: 'A', texte: 'Zéro ou une instance exactement' },
        { id: 'B', texte: 'Zéro ou plusieurs instances (zéro ou plus)' },
        { id: 'C', texte: 'Une ou plusieurs instances obligatoires' },
        { id: 'D', texte: 'Exactement deux instances' }
      ],
      reponse: 'B',
      explication: {
        correcte: '"0..*" signifie de ZÉRO à N instances, sans limite supérieure. C\'est équivalent au symbole "*" seul. La participation est optionnelle (0 possible) et le nombre est illimité.',
        incorrectes: {
          A: '"0..1" signifie zéro ou une instance. "0..*" n\'a pas de limite supérieure.',
          C: '"1..*" signifie une ou plusieurs instances (au moins 1 obligatoire). "0..*" autorise zéro.',
          D: 'Pour exactement deux instances, on écrit "2" ou "2..2". "0..*" est non-borné.'
        }
      }
    }
    /* Ajoutez vos questions ici en suivant le même modèle */
  ]
};
