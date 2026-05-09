/* data.js — Registre des matières QCM
   Pour ajouter une matière : ajouter un objet dans ce tableau
   + créer le répertoire qcm/<id>/ en copiant _template/
*/
const DATA = [
  {
    id:              'uml',
    titre:           'UML – Modélisation',
    description:     'Diagrammes UML : cas d\'utilisation, classes, séquences, activités...',
    icon:            '📐',
    lien:            'uml/index.html',
    chapitres_count: 2,
    disponible:      true
  },
  {
    id:              'data-science',
    titre:           'Data Science',
    description:     'Python scientifique : NumPy, Pandas, Matplotlib, Scikit-learn...',
    icon:            '📊',
    lien:            'data-science/index.html',
    chapitres_count: 0,
    disponible:      false
  },
  {
    id:              'web',
    titre:           'Programmation Web',
    description:     'HTML/CSS, JavaScript, PHP/MySQL, frameworks web...',
    icon:            '🌐',
    lien:            'web/index.html',
    chapitres_count: 0,
    disponible:      false
  }
];
