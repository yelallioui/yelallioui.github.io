const easyQuestions = [
    {
        question: "Quels sont les trois compartiments classiques d'une classe UML ?",
        choices: [
            "Attributs, relations, instances",
            "Nom, attributs, opérations",
            "Nom, méthodes, relations",
            "Nom, objets, messages"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Les relations ne font pas partie de la structure interne d'une classe.",
            "Correct : Une classe UML est structurée en trois compartiments : le nom (en haut), les attributs (au milieu) et les opérations (en bas).",
            "Incorrect : Les relations sont externes à la classe et ne constituent pas un compartiment.",
            "Incorrect : Les objets et messages concernent les diagrammes d'objets ou de séquence, pas la structure d'une classe."
        ]
    },
    {
        question: "Que signifie le symbole « + » devant un attribut ou une opération UML ?",
        choices: [
            "Visibilité protégée",
            "Visibilité privée",
            "Visibilité package",
            "Visibilité publique"
        ],
        correctIndex: 3,
        explanations: [
            "Incorrect : La visibilité protégée est représentée par « # ».",
            "Incorrect : La visibilité privée est représentée par « - ».",
            "Incorrect : La visibilité package est notée « ~ ».",
            "Correct : Le symbole « + » indique une visibilité publique, accessible depuis n'importe quelle classe."
        ]
    },
    {
        question: "Quelle relation UML représente un lien structurel durable entre deux classes ?",
        choices: [
            "Dépendance",
            "Héritage",
            "Association",
            "Réalisation"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Une dépendance est un lien faible et temporaire.",
            "Incorrect : L'héritage représente une relation de spécialisation.",
            "Correct : L'association représente un lien structurel durable entre deux classes.",
            "Incorrect : La réalisation concerne les interfaces."
        ]
    },
    {
        question: "Quel symbole UML est utilisé pour représenter l'héritage ?",
        choices: [
            "Une flèche pleine",
            "Une flèche triangulaire blanche",
            "Un losange noir",
            "Un losange blanc"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : La flèche pleine n'est pas utilisée pour l'héritage en UML.",
            "Correct : L'héritage est représenté par une flèche avec un triangle vide (blanc) pointant vers la superclasse.",
            "Incorrect : Le losange noir correspond à la composition.",
            "Incorrect : Le losange blanc correspond à l'agrégation."
        ]
    },
    {
        question: "Quelle notation UML représente un attribut privé nommé 'age' de type entier dans une classe ?",
        choices: [
            "+ age : int",
            "# age : int",
            "- age : int",
            "~ age : int"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Le symbole '+' désigne une visibilité publique (public), accessible depuis n'importe quelle classe.",
            "Incorrect : Le symbole '#' désigne une visibilité protégée (protected), accessible uniquement par la classe et ses sous-classes.",
            "Correct : Le symbole '-' désigne une visibilité privée (private), l'attribut n'est accessible que depuis la classe elle-même. La notation complète est : -age : int",
            "Incorrect : Le symbole '~' désigne une visibilité de paquetage (package), accessible par toutes les classes du même paquetage."
        ]
    },
    {
        question: "Dans un diagramme de classes UML, comment représente-t-on une classe ?",
        choices: [
            "Par un cercle avec le nom de la classe au centre",
            "Par une ellipse contenant les attributs",
            "Par un rectangle divisé en trois compartiments",
            "Par un losange avec des connexions"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Un cercle est utilisé pour représenter des états dans les diagrammes d'états-transitions, pas les classes.",
            "Incorrect : Une ellipse est utilisée dans les diagrammes de cas d'utilisation, pas dans les diagrammes de classes.",
            "Correct : Une classe est représentée par un rectangle divisé en trois compartiments : nom de la classe (en haut), attributs (au milieu), et opérations/méthodes (en bas).",
            "Incorrect : Un losange est utilisé pour représenter les agrégations ou compositions, pas les classes elles-mêmes."
        ]
    },
    {
        question: "Quelle flèche représente une relation d'héritage (généralisation) en UML ?",
        choices: [
            "Une flèche en pointillés avec un triangle vide",
            "Une ligne simple avec un losange plein",
            "Une flèche pleine simple",
            "Une flèche continue avec un triangle vide"
        ],
        correctIndex: 3,
        explanations: [
            "Incorrect : Une flèche en pointillés avec un triangle vide représente une réalisation d'interface, pas un héritage de classe.",
            "Incorrect : Une ligne avec un losange plein représente une composition, pas un héritage.",
            "Incorrect : Une flèche pleine simple représente une association orientée ou une dépendance, pas un héritage.",
            "Correct : L'héritage (généralisation) est représenté par une flèche continue avec un triangle vide pointant vers la classe parente (superclasse)."
        ]
    },
    {
        question: "Dans un diagramme de classes, que représente une multiplicité '1..*' sur une association ?",
        choices: [
            "Exactement une instance",
            "Zéro ou une instance",
            "Un ou plusieurs instances",
            "Zéro ou plusieurs instances"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Exactement une instance est représentée par la multiplicité '1' ou '1..1'.",
            "Incorrect : Zéro ou une instance est représentée par la multiplicité '0..1'.",
            "Correct : La multiplicité '1..*' signifie 'un ou plusieurs', c'est-à-dire au minimum une instance et pas de limite supérieure.",
            "Incorrect : Zéro ou plusieurs instances est représenté par la multiplicité '0..*' ou simplement '*'."
        ]
    },
    {
        question: "Qu'indique le soulignement d'un attribut ou d'une méthode dans un diagramme de classes UML ?",
        choices: [
            "L'élément est abstrait",
            "L'élément est statique (appartient à la classe)",
            "L'élément est protégé",
            "L'élément est final et ne peut être modifié"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Un élément abstrait est représenté en italique ou avec le stéréotype <<abstract>>, pas avec un soulignement.",
            "Correct : Le soulignement indique qu'un attribut ou une méthode est statique, c'est-à-dire qu'il appartient à la classe elle-même plutôt qu'aux instances.",
            "Incorrect : Un élément protégé est indiqué par le symbole '#', pas par un soulignement.",
            "Incorrect : Un élément final peut être indiqué par des contraintes textuelles, mais ce n'est pas la convention du soulignement."
        ]
    },
    {
        question: "Quel est le rôle principal d'une association dans un diagramme de classes ?",
        choices: [
            "Définir une hiérarchie entre classes",
            "Représenter une relation structurelle entre deux ou plusieurs classes",
            "Indiquer qu'une classe implémente une interface",
            "Montrer qu'une classe dépend temporairement d'une autre"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Une hiérarchie entre classes est représentée par une relation d'héritage (généralisation), pas par une association.",
            "Correct : Une association représente une relation structurelle durable entre classes, indiquant que les instances de ces classes sont connectées d'une manière ou d'une autre.",
            "Incorrect : L'implémentation d'une interface est représentée par une relation de réalisation (flèche en pointillés avec triangle vide).",
            "Incorrect : Une dépendance temporaire est représentée par une flèche en pointillés, pas par une association."
        ]
    },
    {
        question: "Dans UML, comment note-t-on un attribut nommé 'age' de type entier dans une classe ?",
        choices: [
            "int age",
            "age : int",
            "age(int)",
            "age = int"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Cette notation ressemble au langage C/Java, mais n'est pas la convention UML standard.",
            "Correct : La notation UML standard est 'nomAttribut : type', donc 'age : int' est la notation correcte.",
            "Incorrect : Cette notation ressemble à un appel de méthode ou de constructeur, pas à la déclaration d'un attribut.",
            "Incorrect : Cette notation suggère une affectation, ce qui n'est pas la convention UML pour déclarer un attribut."
        ]
    },
    {
        question: "Quelle est la différence principale entre un attribut et une opération dans une classe UML ?",
        choices: [
            "Il n'y a aucune différence, ce sont des synonymes",
            "Un attribut est statique, une opération est dynamique",
            "Un attribut stocke des données, une opération définit un comportement",
            "Un attribut est toujours public, une opération est toujours privée"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Attributs et opérations sont des concepts distincts en UML avec des rôles différents.",
            "Incorrect : Les attributs et opérations peuvent être statiques ou d'instance, indépendamment de leur nature.",
            "Correct : Un attribut représente une propriété ou donnée de la classe (comme une variable), tandis qu'une opération représente un comportement ou une action que la classe peut effectuer (comme une méthode).",
            "Incorrect : Les attributs et opérations peuvent avoir n'importe quelle visibilité (+, -, #, ~) selon les besoins de conception."
        ]
    },
    {
        question: "Que signifie la multiplicité '0..1' sur une extrémité d'association ?",
        choices: [
            "Au moins une instance",
            "Aucune ou plusieurs instances",
            "Exactement zéro ou exactement une instance",
            "Une et une seule instance obligatoire"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Au moins une instance serait représenté par '1..*', pas '0..1'.",
            "Incorrect : Aucune ou plusieurs instances est représenté par '0..*' ou '*', pas '0..1'.",
            "Correct : La multiplicité '0..1' signifie qu'il peut y avoir soit aucune instance (0), soit exactement une instance (1), c'est une relation optionnelle.",
            "Incorrect : Une instance obligatoire est représentée par '1' ou '1..1', alors que '0..1' indique que l'association est optionnelle."
        ]
    },
    {
        question: "Qu'est-ce qu'une classe abstraite en UML ?",
        choices: [
            "Une classe dont le nom est souligné dans le diagramme",
            "Une classe qui ne peut pas avoir d'attributs",
            "Une classe qui ne peut pas être instanciée directement et dont le nom est en italique",
            "Une classe qui ne peut avoir qu'une seule sous-classe"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Le soulignement en UML indique qu'un attribut ou une méthode est statique (appartient à la classe plutôt qu'aux instances).",
            "Incorrect : Une classe abstraite peut tout à fait contenir des attributs. Elle peut même avoir des méthodes concrètes (implémentées).",
            "Correct : Une classe abstraite ne peut pas être instanciée directement et sert de modèle pour ses sous-classes. En UML, son nom est écrit en italique ou avec le stéréotype <<abstract>>.",
            "Incorrect : Une classe abstraite peut avoir plusieurs sous-classes. Le nombre de sous-classes n'est pas limité."
        ]
    },
    {
        question: "Quelle affirmation concernant les interfaces en UML est correcte ?",
        choices: [
            "Une interface peut contenir des attributs d'instance et des méthodes concrètes",
            "Une interface ne peut être implémentée que par une seule classe",
            "Une interface définit un contrat de méthodes sans implémentation et est notée avec le stéréotype <<interface>>",
            "Une interface est identique à une classe abstraite"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Traditionnellement, une interface ne contient que des signatures de méthodes (sans implémentation) et éventuellement des constantes, pas des attributs d'instance.",
            "Incorrect : Une interface peut être implémentée par plusieurs classes. C'est même l'un des principaux intérêts des interfaces : permettre le polymorphisme.",
            "Correct : Une interface définit un contrat (ensemble de méthodes) que les classes implémentantes doivent respecter. Elle est représentée avec le stéréotype <<interface>> ou par un cercle avec son nom.",
            "Incorrect : Bien que similaires, interfaces et classes abstraites diffèrent : une interface ne peut contenir que des signatures de méthodes (dans la conception classique), tandis qu'une classe abstraite peut avoir des méthodes concrètes et des attributs d'instance."
        ]
    },
    {
        question: "Quelle multiplicité doit-on utiliser pour indiquer qu'un objet peut être associé à zéro, un ou plusieurs objets d'une autre classe ?",
        choices: [
            "1",
            "1..*",
            "0..1",
            "0..*"
        ],
        correctIndex: 3,
        explanations: [
            "Incorrect : La multiplicité '1' signifie exactement un objet, ce qui ne permet ni zéro ni plusieurs associations.",
            "Incorrect : La multiplicité '1..*' signifie au moins un objet (un ou plusieurs), mais exclut la possibilité de zéro.",
            "Incorrect : La multiplicité '0..1' signifie zéro ou un objet uniquement, elle exclut la possibilité d'avoir plusieurs objets associés.",
            "Correct : La multiplicité '0..*' (ou simplement '*') signifie de zéro à plusieurs objets, couvrant tous les cas : aucun, un seul, ou plusieurs objets associés."
        ]
    }
];

const mediumQuestions = [
    {
        question: "Quelle multiplicité UML indique qu'une classe peut être liée à zéro ou plusieurs instances d'une autre classe ?",
        choices: [
            "1",
            "0..1",
            "1..*",
            "0..*"
        ],
        correctIndex: 3,
        explanations: [
            "Incorrect : 1 signifie exactement une instance.",
            "Incorrect : 0..1 signifie zéro ou une instance.",
            "Incorrect : 1..* signifie au moins une instance.",
            "Correct : 0..* signifie zéro ou plusieurs instances."
        ]
    },
    {
        question: "Quelle est la différence principale entre agrégation et composition ?",
        choices: [
            "La composition autorise le partage des objets",
            "L'agrégation impose une dépendance de cycle de vie",
            "Il n'existe aucune différence conceptuelle",
            "La composition implique une dépendance forte du cycle de vie"
        ],
        correctIndex: 3,
        explanations: [
            "Incorrect : Le partage est possible en agrégation, pas en composition.",
            "Incorrect : L'agrégation n'impose pas de dépendance forte.",
            "Incorrect : Les deux relations ont des significations différentes.",
            "Correct : En composition, la destruction du tout entraîne celle des parties."
        ]
    },
    {
        question: "Comment modéliser correctement une classe abstraite en UML ?",
        choices: [
            "En utilisant un stéréotype <<interface>>",
            "En écrivant son nom en italique",
            "En ajoutant le mot-clé static",
            "En utilisant une flèche pointillée"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Une interface est différente d'une classe abstraite.",
            "Correct : Le nom d'une classe abstraite est écrit en italique en UML.",
            "Incorrect : static concerne les membres de classe.",
            "Incorrect : Les flèches pointillées concernent la dépendance ou la réalisation."
        ]
    },
    {
        question: "Dans un diagramme UML, à quoi sert le nom de rôle placé près d'une association ?",
        choices: [
            "À définir la visibilité de l'association",
            "À préciser le sens fonctionnel de la relation",
            "À indiquer une méthode associée",
            "À représenter une interface"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : La visibilité ne concerne pas les associations.",
            "Correct : Le rôle précise le point de vue fonctionnel d'une classe dans la relation.",
            "Incorrect : Les méthodes ne sont pas définies dans les associations.",
            "Incorrect : Les interfaces sont des types UML distincts."
        ]
    },
    {
        question: "Dans une relation d'agrégation entre deux classes A et B, que signifie un losange vide du côté de la classe A ?",
        choices: [
            "La classe A contient des instances de B, mais B peut exister indépendamment de A",
            "La classe A hérite de la classe B",
            "La classe A dépend fortement de B et B ne peut exister sans A",
            "La classe A est une interface implémentée par B"
        ],
        correctIndex: 0,
        explanations: [
            "Correct : Le losange vide représente une agrégation, indiquant une relation 'a un' où les parties peuvent exister indépendamment du tout. Par exemple, une Université agrège des Étudiants, mais un Étudiant peut exister sans l'Université.",
            "Incorrect : L'héritage est représenté par une flèche avec un triangle vide, pas par un losange.",
            "Incorrect : Cette description correspond à une composition (losange plein), pas à une agrégation.",
            "Incorrect : L'implémentation d'interface est représentée par une flèche en pointillés avec un triangle vide."
        ]
    },
    {
        question: "Quelle est la différence fondamentale entre une agrégation et une composition en UML ?",
        choices: [
            "L'agrégation utilise un losange plein, la composition un losange vide",
            "L'agrégation permet l'héritage multiple, la composition non",
            "La composition est bidirectionnelle, l'agrégation unidirectionnelle",
            "Dans une composition, la partie ne peut exister sans le tout, contrairement à l'agrégation"
        ],
        correctIndex: 3,
        explanations: [
            "Incorrect : C'est l'inverse : l'agrégation utilise un losange vide et la composition un losange plein.",
            "Incorrect : Ni l'agrégation ni la composition n'ont de lien direct avec l'héritage multiple.",
            "Incorrect : Les deux peuvent être unidirectionnelles ou bidirectionnelles selon le modèle.",
            "Correct : La composition implique une dépendance existentielle forte : si le tout est détruit, les parties le sont aussi. Par exemple, une Maison (tout) et ses Pièces (parties) : sans la Maison, les Pièces n'existent plus. L'agrégation est plus faible : les parties peuvent survivre au tout."
        ]
    },
    {
        question: "Dans un diagramme de classes, comment représente-t-on une classe abstraite ?",
        choices: [
            "En ajoutant le stéréotype <<interface>> au-dessus du nom",
            "En soulignant le nom de la classe",
            "En écrivant le nom de la classe en italique ou en ajoutant {abstract}",
            "En utilisant un rectangle avec des coins arrondis"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Le stéréotype <<interface>> est réservé aux interfaces, pas aux classes abstraites.",
            "Incorrect : Le soulignement indique un élément statique (appartenant à la classe), pas une classe abstraite.",
            "Correct : Une classe abstraite est indiquée soit en écrivant son nom en italique, soit en ajoutant la contrainte {abstract} ou le stéréotype <<abstract>>. Une classe abstraite ne peut pas être instanciée directement.",
            "Incorrect : Un rectangle avec coins arrondis n'est pas une notation UML standard pour les classes abstraites."
        ]
    },
    {
        question: "Qu'est-ce qu'une association qualifiée en UML et à quoi sert-elle ?",
        choices: [
            "Une association entre classes de même niveau hiérarchique",
            "Une association avec un attribut qui sert de clé pour identifier les instances",
            "Une association marquée comme importante dans le système",
            "Une association qui nécessite une qualification professionnelle"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Le niveau hiérarchique n'est pas lié à la notion d'association qualifiée.",
            "Correct : Une association qualifiée utilise un qualificateur (représenté par un petit rectangle) pour identifier de manière unique les instances. Par exemple, une Banque peut identifier ses Comptes par un numéro de compte (le qualificateur).",
            "Incorrect : 'Qualifiée' ne signifie pas 'importante' en UML, c'est un terme technique précis.",
            "Incorrect : Il s'agit d'un terme technique UML sans rapport avec une qualification professionnelle."
        ]
    },
    {
        question: "Dans une relation de dépendance (flèche en pointillés), que signifie cette relation entre deux classes A et B ?",
        choices: [
            "A hérite des propriétés de B",
            "A contient des instances de B de manière permanente",
            "A utilise temporairement B (paramètre, variable locale, etc.)",
            "A et B sont des classes abstraites liées"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : L'héritage est représenté par une flèche continue avec triangle vide, pas par une flèche en pointillés.",
            "Incorrect : Une relation permanente de contenance est représentée par une association, agrégation ou composition, pas par une dépendance.",
            "Correct : Une dépendance indique qu'une classe utilise une autre de manière temporaire ou faible : comme paramètre de méthode, variable locale, ou en appelant ses méthodes statiques. C'est la relation la plus faible en UML.",
            "Incorrect : Le statut abstrait des classes n'a pas de lien direct avec la relation de dépendance."
        ]
    },
    {
        question: "Que signifie une association réflexive dans un diagramme de classes ?",
        choices: [
            "Une classe qui n'a aucune association avec d'autres classes",
            "Une association entre une classe et elle-même",
            "Une classe qui hérite d'elle-même",
            "Une association qui revient à son point de départ après plusieurs étapes"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Une classe sans association n'est pas une association réflexive, c'est simplement une classe isolée.",
            "Correct : Une association réflexive (ou récursive) lie une classe à elle-même. Par exemple, une classe Personne peut avoir une association 'estParentDe' avec elle-même pour modéliser les relations familiales.",
            "Incorrect : Une classe ne peut pas hériter d'elle-même, cela créerait une boucle infinie et n'a pas de sens en programmation orientée objet.",
            "Incorrect : Cette description ne correspond à aucun concept UML standard."
        ]
    },
    {
        question: "Comment représente-t-on une méthode abstraite dans une classe abstraite en UML ?",
        choices: [
            "En la soulignant",
            "En utilisant le symbole '#' devant",
            "En l'écrivant en italique",
            "En ajoutant le mot-clé 'virtual' après"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Le soulignement indique une méthode statique, pas abstraite.",
            "Incorrect : Le symbole '#' indique la visibilité protégée, pas le caractère abstrait.",
            "Correct : Une méthode abstraite est écrite en italique, de la même manière qu'une classe abstraite. Elle n'a pas d'implémentation dans la classe abstraite et doit être implémentée par les sous-classes concrètes.",
            "Incorrect : Le mot-clé 'virtual' n'est pas une notation UML standard, c'est un terme propre à certains langages de programmation."
        ]
    },
    {
        question: "Quelle est la signification d'une contrainte notée '{ordered}' sur une association en UML ?",
        choices: [
            "Les instances doivent être triées par ordre alphabétique",
            "L'ordre des éléments associés est significatif et doit être maintenu",
            "L'association doit être créée dans un ordre spécifique",
            "Les éléments doivent être ordonnés par leur date de création"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : '{ordered}' ne spécifie pas le critère de tri, seulement que l'ordre doit être préservé.",
            "Correct : La contrainte '{ordered}' indique que l'ordre des éléments dans l'association a une importance sémantique. Par exemple, les chapitres d'un livre doivent être ordonnés séquentiellement.",
            "Incorrect : '{ordered}' concerne l'ordre des instances associées, pas l'ordre de création de l'association elle-même.",
            "Incorrect : La date de création n'est pas implicite dans '{ordered}', qui indique seulement que l'ordre a un sens métier."
        ]
    },
    {
        question: "Dans une association n-aire (entre 3 classes ou plus), comment est-elle représentée graphiquement ?",
        choices: [
            "Par plusieurs associations binaires en série",
            "Par une classe d'association spéciale",
            "Par un losange central connecté à toutes les classes participantes",
            "Par des flèches multiples en étoile"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Plusieurs associations binaires ne capturent pas la même sémantique qu'une association n-aire, qui lie simultanément plus de deux classes.",
            "Incorrect : Une classe d'association est différente : elle ajoute des attributs à une association binaire.",
            "Correct : Une association n-aire est représentée par un losange central (différent du losange d'agrégation) connecté par des lignes à toutes les classes participantes. Par exemple : Étudiant-Cours-Professeur pour représenter qu'un étudiant suit un cours avec un professeur spécifique.",
            "Incorrect : Des flèches en étoile ne représentent pas correctement la sémantique d'une association n-aire."
        ]
    },
    {
        question: "Que représente une classe d'association (association class) en UML ?",
        choices: [
            "Une classe qui hérite de plusieurs autres classes",
            "Une classe qui contient uniquement des associations",
            "Une association qui possède ses propres attributs et opérations",
            "Une classe abstraite définissant des associations"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : L'héritage multiple n'a aucun rapport avec les classes d'association.",
            "Incorrect : Une classe d'association n'est pas un conteneur d'associations, c'est une association enrichie.",
            "Correct : Une classe d'association est utilisée lorsqu'une association entre deux classes a besoin de ses propres attributs ou méthodes. Par exemple, l'association 'Emploi' entre Personne et Entreprise peut avoir des attributs comme dateEmbauche et salaire.",
            "Incorrect : Une classe d'association n'est pas nécessairement abstraite et ne définit pas d'autres associations."
        ]
    },
    {
        question: "Dans une application de gestion de bibliothèque, un livre peut avoir plusieurs exemplaires physiques. Quelle relation UML modélise le mieux cette situation ?",
        choices: [
            "Héritage : Exemplaire hérite de Livre",
            "Composition : Livre compose Exemplaire avec multiplicité 1..*",
            "Agrégation : Livre agrège Exemplaire avec multiplicité 1..*",
            "Dépendance : Livre dépend d'Exemplaire"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : L'héritage implique une relation 'est-un'. Or, un exemplaire n'est pas un type de livre, c'est une copie physique d'un livre spécifique.",
            "Correct : La composition (losange noir) est appropriée car les exemplaires n'ont pas de sens sans le livre dont ils sont des copies. Si le livre est supprimé du système, ses exemplaires le sont aussi. La multiplicité 1..* indique qu'un livre doit avoir au moins un exemplaire.",
            "Incorrect : Bien que proche, l'agrégation implique que les exemplaires pourraient exister indépendamment du livre, ce qui n'est pas le cas conceptuellement dans ce domaine métier.",
            "Incorrect : La dépendance indique une utilisation temporaire ou faible. La relation entre Livre et Exemplaire est structurelle et permanente, pas occasionnelle."
        ]
    },
    {
        question: "Soit deux classes : Etudiant et Cours avec une association bidirectionnelle. Un étudiant peut suivre plusieurs cours (0..*) et un cours peut avoir plusieurs étudiants (1..*). Quelle implémentation objet est généralement recommandée ?",
        choices: [
            "Chaque classe contient une liste de références vers l'autre classe",
            "Créer une classe d'association 'Inscription' pour gérer la relation",
            "Utiliser uniquement une liste d'étudiants dans Cours",
            "Fusionner les deux classes en une seule classe EtudiantCours"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Bien que techniquement possible, maintenir deux listes de références peut créer des incohérences et compliquer la synchronisation des deux côtés de l'association.",
            "Correct : Créer une classe d'association 'Inscription' est la meilleure pratique. Elle centralise la gestion de la relation, évite les duplications, et permet d'ajouter facilement des attributs spécifiques à l'inscription (date, note, statut, etc.).",
            "Incorrect : Cette solution ne permet pas à un étudiant de connaître facilement ses cours. La navigation serait unidirectionnelle et limiterait les fonctionnalités.",
            "Incorrect : Fusionner les classes détruit la séparation des concepts et rendrait impossible d'avoir un étudiant sans cours ou un cours sans étudiant, ce qui n'est pas conforme au domaine."
        ]
    },
    {
        question: "Une méthode est déclarée ainsi dans une classe UML : '+ calculerSalaire(heures : float) : float'. Quelle est l'erreur si cette méthode accède directement à un attribut privé '-tauxHoraire : float' d'une autre classe ?",
        choices: [
            "Il n'y a pas d'erreur, une méthode publique peut accéder à n'importe quel attribut",
            "C'est une violation de l'encapsulation : on devrait utiliser un accesseur public",
            "L'erreur est que le type de retour devrait être 'int' et non 'float'",
            "L'erreur est dans la multiplicité qui n'est pas spécifiée"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Une méthode publique d'une classe A ne peut pas accéder directement aux attributs privés d'une classe B. C'est le principe fondamental de l'encapsulation en POO.",
            "Correct : Les attributs privés ne sont accessibles que depuis la classe qui les définit. Pour y accéder depuis l'extérieur, on doit passer par des méthodes publiques (getters/setters) qui contrôlent l'accès. C'est le principe d'encapsulation.",
            "Incorrect : Le type 'float' est approprié pour un calcul de salaire qui peut avoir des décimales. Ce n'est pas le problème ici.",
            "Incorrect : Les multiplicités concernent les associations entre classes, pas les signatures de méthodes. Elles ne sont pas pertinentes dans ce contexte."
        ]
    },
    {
        question: "Dans une hiérarchie de classes, la classe Vehicule est abstraite avec une méthode abstraite 'demarrer()'. Les classes Voiture et Moto héritent de Vehicule. Quelle affirmation est correcte ?",
        choices: [
            "Voiture et Moto peuvent choisir d'implémenter ou non la méthode 'demarrer()'",
            "Seule Voiture doit implémenter 'demarrer()', Moto peut rester abstraite",
            "Voiture et Moto doivent obligatoirement implémenter 'demarrer()' si elles ne sont pas abstraites",
            "La méthode 'demarrer()' doit avoir la même implémentation dans Voiture et Moto"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : En POO, toute classe concrète héritant d'une classe abstraite doit obligatoirement implémenter toutes les méthodes abstraites héritées.",
            "Incorrect : Les deux classes Voiture et Moto sont soumises à la même règle : si elles sont concrètes (non abstraites), elles doivent implémenter toutes les méthodes abstraites héritées.",
            "Correct : Une classe concrète héritant d'une classe abstraite doit fournir une implémentation pour toutes les méthodes abstraites. Si Voiture ou Moto ne l'implémente pas, elle doit elle-même être déclarée abstraite.",
            "Incorrect : Au contraire, le polymorphisme permet à chaque sous-classe d'avoir sa propre implémentation. Une voiture et une moto peuvent démarrer différemment."
        ]
    },
    {
        question: "Une classe Singleton doit garantir qu'une seule instance existe dans tout le système. Comment représenter cela en UML ?",
        choices: [
            "Utiliser une multiplicité de 1..1 sur la classe",
            "Utiliser le stéréotype <<unique>> sur la classe",
            "Marquer le constructeur comme privé (-) et ajouter une méthode statique publique getInstance()",
            "Créer une association réflexive avec multiplicité 1"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Les multiplicités s'appliquent aux associations entre classes, pas à une classe isolée. Elles n'empêchent pas la création de plusieurs instances.",
            "Incorrect : Le stéréotype <<unique>> n'existe pas dans la spécification UML standard. Il faudrait définir un stéréotype personnalisé, mais ce n'est pas la pratique courante.",
            "Correct : Le pattern Singleton se modélise en UML avec : un constructeur privé (empêche l'instanciation externe), un attribut statique privé contenant l'instance unique, et une méthode statique publique getInstance() pour y accéder.",
            "Incorrect : Une association réflexive indique qu'une classe est en relation avec elle-même (exemple : un Employé peut manager d'autres Employés), ce n'est pas adapté pour le Singleton."
        ]
    },
    {
        question: "Dans un système bancaire, un Compte peut avoir plusieurs Transactions. Si un compte est clôturé, toutes ses transactions doivent être archivées mais conservées historiquement. Quelle relation convient le mieux ?",
        choices: [
            "Composition entre Compte et Transaction",
            "Agrégation entre Compte et Transaction",
            "Héritage : Transaction hérite de Compte",
            "Dépendance de Transaction vers Compte"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : La composition impliquerait que les transactions soient détruites avec le compte. Or, on souhaite conserver l'historique même après la clôture du compte.",
            "Correct : L'agrégation est appropriée ici car les transactions sont liées au compte mais peuvent survivre indépendamment (pour l'archivage et la conformité réglementaire). Le compte est un contexte pour les transactions, mais leur existence n'en dépend pas strictement.",
            "Incorrect : L'héritage est une relation 'est-un'. Une transaction n'est pas un type de compte, c'est une opération effectuée sur un compte.",
            "Incorrect : La dépendance est une relation faible et temporaire (utilisation occasionnelle). La relation entre Transaction et Compte est structurelle et permanente."
        ]
    }
];

const hardQuestions = [
    {
        question: "Quelle erreur de modélisation UML est la plus critique dans une application métier ?",
        choices: [
            "Oublier les types des attributs",
            "Utiliser une association au lieu d'une composition",
            "Ne pas aligner le diagramme avec les règles métier",
            "Ne pas indiquer la visibilité des méthodes"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : C'est une erreur mineure et facilement corrigeable.",
            "Incorrect : Le choix dépend du contexte métier.",
            "Correct : Un diagramme UML doit refléter fidèlement les règles métier.",
            "Incorrect : La visibilité améliore la clarté mais n'est pas critique."
        ]
    },
    {
        question: "Dans quel cas l'utilisation d'une dépendance UML est-elle la plus appropriée ?",
        choices: [
            "Quand une classe possède une autre",
            "Quand une classe hérite d'une autre",
            "Quand une classe utilise temporairement une autre",
            "Quand deux classes partagent un cycle de vie"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Cela correspond à une composition ou agrégation.",
            "Incorrect : Cela correspond à l'héritage.",
            "Correct : La dépendance modélise un usage ponctuel (paramètre, appel de méthode).",
            "Incorrect : Le partage de cycle de vie correspond à la composition."
        ]
    },
    {
        question: "Quelle bonne pratique UML améliore la maintenabilité d'un système complexe ?",
        choices: [
            "Multiplier les associations bidirectionnelles",
            "Favoriser l'héritage multiple",
            "Utiliser exclusivement des attributs publics",
            "Limiter les responsabilités d'une classe"
        ],
        correctIndex: 3,
        explanations: [
            "Incorrect : Les associations bidirectionnelles augmentent le couplage.",
            "Incorrect : L'héritage multiple complique la conception.",
            "Incorrect : Les attributs publics nuisent à l'encapsulation.",
            "Correct : Une classe doit avoir une responsabilité claire et limitée."
        ]
    },
    {
        question: "Quelle erreur est fréquente lors de la modélisation UML d'une base de données ?",
        choices: [
            "Utiliser des classes abstraites",
            "Confondre association et table de jointure",
            "Ajouter des multiplicités",
            "Utiliser des interfaces"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Les classes abstraites peuvent être pertinentes au niveau conceptuel.",
            "Correct : Une association UML ne correspond pas toujours à une table de jointure.",
            "Incorrect : Les multiplicités sont essentielles en modélisation.",
            "Incorrect : Les interfaces peuvent être utiles dans certaines architectures."
        ]
    },
    {
        question: "Considérez une classe abstraite 'Forme' avec une méthode abstraite 'calculerSurface()'. Quelle affirmation est correcte concernant l'héritage multiple où une classe 'CarreColore' hérite à la fois de 'Carre' et 'Couleur' ?",
        choices: [
            "L'héritage multiple peut causer le problème du diamant si Carre et Couleur héritent toutes deux de Forme",
            "L'héritage multiple est toujours préférable à la composition",
            "Une classe abstraite ne peut pas être utilisée dans un contexte d'héritage multiple",
            "La méthode abstraite doit être redéfinie dans chaque niveau de la hiérarchie"
        ],
        correctIndex: 0,
        explanations: [
            "Correct : Le problème du diamant survient en héritage multiple lorsque deux classes parentes héritent d'une même classe ancêtre, créant une ambiguïté sur quelle version des méthodes/attributs héritées utiliser. C'est pourquoi certains langages comme Java interdisent l'héritage multiple de classes.",
            "Incorrect : La composition est souvent préférable à l'héritage multiple car elle évite la complexité, les ambiguïtés et respecte mieux le principe 'favoriser la composition sur l'héritage'.",
            "Incorrect : Les classes abstraites peuvent participer à l'héritage multiple, c'est un mécanisme standard en UML et dans certains langages.",
            "Incorrect : Une méthode abstraite doit être implémentée uniquement dans les classes concrètes (non abstraites), pas à chaque niveau."
        ]
    },
    {
        question: "Dans un contexte d'héritage, qu'est-ce que le principe de substitution de Liskov implique pour la conception d'un diagramme de classes UML correct ?",
        choices: [
            "Toute sous-classe doit avoir plus de méthodes que sa superclasse",
            "Une instance d'une sous-classe doit pouvoir remplacer une instance de sa superclasse sans altérer la cohérence du programme",
            "Les sous-classes doivent toujours redéfinir toutes les méthodes héritées",
            "L'héritage doit être limité à un seul niveau de profondeur"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Le nombre de méthodes n'est pas le critère du principe de Liskov. Une sous-classe peut avoir le même nombre ou plus de méthodes.",
            "Correct : Le principe de substitution de Liskov (LSP) stipule qu'une sous-classe doit pouvoir être utilisée partout où sa superclasse est attendue, sans provoquer d'erreurs ou comportements inattendus. Cela garantit que l'héritage est utilisé correctement et que la hiérarchie est cohérente.",
            "Incorrect : Redéfinir toutes les méthodes irait à l'encontre du principe de réutilisation de l'héritage. Seules les méthodes nécessitant un comportement spécifique doivent être redéfinies.",
            "Incorrect : Il n'y a pas de limitation de profondeur dans le principe de Liskov, tant que la substitution reste valide à chaque niveau."
        ]
    },
    {
        question: "Quelle est la différence conceptuelle entre une interface et une classe abstraite dans un diagramme de classes UML, en termes de conception ?",
        choices: [
            "Une interface ne peut contenir aucune méthode, une classe abstraite peut en contenir plusieurs",
            "Une interface définit uniquement un contrat (que faire), tandis qu'une classe abstraite peut fournir une implémentation partielle (comment faire)",
            "Une interface est toujours publique, une classe abstraite toujours privée",
            "Il n'y a aucune différence conceptuelle, ce sont deux notations pour la même chose"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Une interface contient des signatures de méthodes (des méthodes sans implémentation dans le modèle classique), elle n'est pas vide.",
            "Correct : Une interface définit un contrat pur (quelles opérations doivent être disponibles) sans implémentation. Une classe abstraite peut contenir à la fois des méthodes abstraites (contrat) et des méthodes concrètes (implémentation partagée), permettant la réutilisation de code. Une classe peut implémenter plusieurs interfaces mais hériter d'une seule classe abstraite.",
            "Incorrect : Les visibilités ne sont pas définies de cette manière. Les deux peuvent avoir différentes visibilités selon les besoins.",
            "Incorrect : Ce sont des concepts distincts avec des usages et objectifs différents en conception orientée objet."
        ]
    },
    {
        question: "Analysez ce scénario : Une classe 'Commande' a une association avec multiplicité '1..*' vers 'LigneCommande', et 'LigneCommande' a une composition vers 'Commande'. Quelle est la principale erreur de conception ?",
        choices: [
            "La multiplicité '1..*' est incorrecte",
            "Une association bidirectionnelle entre une composition et une association simple crée une dépendance cyclique incohérente",
            "Les noms de classes ne suivent pas les conventions UML",
            "Il manque une classe d'association"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : La multiplicité '1..*' peut être correcte (une commande a au moins une ligne), ce n'est pas le problème principal ici.",
            "Correct : Le problème est la confusion entre composition et association. Si LigneCommande est en composition avec Commande, cela signifie que LigneCommande ne peut exister sans Commande (dépendance existentielle forte). Avoir simultanément une association dans l'autre sens crée une incohérence conceptuelle. La bonne approche : une seule relation de composition de Commande vers LigneCommande.",
            "Incorrect : Les noms respectent les conventions (PascalCase), ce n'est pas le problème.",
            "Incorrect : Une classe d'association n'est pas nécessaire ici, et n'est pas le problème identifié."
        ]
    },
    {
        question: "Dans un système de gestion universitaire, vous modélisez 'Etudiant', 'Cours' et 'Inscription'. Quelle est la meilleure approche de modélisation si 'Inscription' doit contenir la date, la note et le statut ?",
        choices: [
            "Créer deux associations binaires distinctes : Etudiant-Cours et Cours-Inscription",
            "Utiliser une association ternaire entre Etudiant, Cours et Inscription",
            "Utiliser une classe d'association 'Inscription' entre Etudiant et Cours",
            "Créer trois classes indépendantes sans associations"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : Cette approche ne capture pas correctement la sémantique : une inscription lie simultanément un étudiant ET un cours, pas séparément.",
            "Incorrect : Une association ternaire impliquerait trois entités égales, mais ici Inscription n'est pas une entité indépendante, c'est la matérialisation de la relation Etudiant-Cours.",
            "Correct : Une classe d'association est parfaite ici car 'Inscription' représente la relation entre Etudiant et Cours avec ses propres attributs (date, note, statut). Elle matérialise l'association et peut avoir ses propres méthodes comme calculerMoyenne().",
            "Incorrect : Sans associations, le modèle ne capture pas les relations fondamentales entre ces concepts, rendant le système incohérent."
        ]
    },
    {
        question: "Quel est l'impact sur la multiplicité si vous transformez une agrégation en composition dans votre diagramme de classes ?",
        choices: [
            "La multiplicité doit obligatoirement devenir '1' du côté du tout",
            "La multiplicité du côté de la partie doit être '0..*'",
            "La composition impose généralement une multiplicité '0..1' ou '1' du côté du tout pour respecter l'appartenance exclusive",
            "La multiplicité n'a aucun lien avec le type de relation"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect : La multiplicité du côté du tout peut être '0..1' ou '1', pas obligatoirement '1'.",
            "Incorrect : La multiplicité du côté de la partie peut varier selon le contexte métier, ce n'est pas contraint à '0..*'.",
            "Correct : En composition, une partie appartient exclusivement à un seul tout (pas de partage), donc la multiplicité du côté du tout devrait être '0..1' ou '1'. Par exemple, une Pièce appartient à une seule Maison. Si vous aviez '0..*' ou '1..*', cela permettrait à une partie d'appartenir à plusieurs touts, ce qui contredit la sémantique de composition.",
            "Incorrect : La multiplicité et le type de relation (agrégation vs composition) sont fortement liés conceptuellement."
        ]
    },
    {
        question: "Vous devez modéliser un système où différentes formes (Cercle, Rectangle, Triangle) peuvent être groupées dans un 'GroupeFormes' qui est lui-même une Forme. Quel pattern de conception cela suggère-t-il et comment le modéliser en UML ?",
        choices: [
            "Pattern Singleton : GroupeFormes hérite de Forme avec une multiplicité '1'",
            "Pattern Composite : GroupeFormes hérite de Forme et a une agrégation/composition vers Forme avec multiplicité '0..*'",
            "Pattern Factory : créer une classe abstraite avec des méthodes de création",
            "Pattern Observer : GroupeFormes observe les changements dans Forme"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Le pattern Singleton concerne l'unicité d'instance, pas la composition récursive de structures arborescentes.",
            "Correct : C'est le pattern Composite, permettant de traiter uniformément objets individuels et compositions d'objets. En UML : Forme (classe abstraite) ← GroupeFormes (hérite) et GroupeFormes → Forme (composition '0..*'). Cela crée une structure récursive permettant des hiérarchies de formes arbitrairement complexes.",
            "Incorrect : Le pattern Factory concerne la création d'objets, pas leur organisation structurelle.",
            "Incorrect : Le pattern Observer gère les notifications de changements, pas la composition structurelle."
        ]
    },
    {
        question: "Dans un diagramme de classes complexe, vous identifiez qu'une classe 'Service' dépend de 'Repository', qui dépend de 'Database', qui dépend de 'ConfigurationManager', qui dépend de 'Service'. Quel problème architectural cela révèle-t-il ?",
        choices: [
            "Un problème de visibilité des attributs",
            "Une dépendance cyclique violant le principe de dépendance acyclique et rendant le système fragile",
            "Un problème de multiplicité incorrecte",
            "Une utilisation incorrecte de l'héritage multiple"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : La visibilité des attributs n'est pas liée aux dépendances cycliques entre classes.",
            "Correct : C'est une dépendance cyclique (Service → Repository → Database → ConfigurationManager → Service), violant le principe ADP (Acyclic Dependencies Principle). Cela crée un couplage fort, rend le code difficile à tester, à maintenir et à réutiliser. Solution : inverser certaines dépendances via des interfaces (Dependency Inversion Principle).",
            "Incorrect : Les multiplicités concernent les associations, pas les dépendances cycliques.",
            "Incorrect : L'héritage multiple n'est pas mentionné ici, le problème concerne les dépendances."
        ]
    },
    {
        question: "Vous modélisez un système de paiement avec une interface 'MethodePaiement' implémentée par 'CarteBancaire', 'PayPal' et 'Crypto'. Si 'CarteBancaire' nécessite une vérification 3D Secure modélisée par une classe 'Verification3DSecure', quelle est la meilleure approche ?",
        choices: [
            "Ajouter la méthode verifier3DSecure() dans l'interface MethodePaiement",
            "Créer une dépendance ou association de CarteBancaire vers Verification3DSecure uniquement",
            "Créer une nouvelle interface qui hérite de MethodePaiement",
            "Utiliser l'héritage multiple pour CarteBancaire"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Cela forcerait PayPal et Crypto à implémenter une méthode non pertinente pour eux, violant le principe de ségrégation des interfaces (ISP).",
            "Correct : Seule CarteBancaire doit avoir une relation avec Verification3DSecure (composition ou dépendance selon que l'objet est créé ou injecté). Cela respecte le principe de ségrégation des interfaces : chaque implémentation n'a que les dépendances dont elle a besoin. L'interface reste générique et cohésive.",
            "Incorrect : Créer une nouvelle interface ajouterait de la complexité inutile si seule CarteBancaire a besoin de cette fonctionnalité.",
            "Incorrect : L'héritage multiple n'est pas nécessaire ici et ajouterait de la complexité. La composition/dépendance est plus appropriée."
        ]
    },
    {
        question: "Dans une hiérarchie d'héritage profonde (5 niveaux ou plus), vous observez que les classes feuilles redéfinissent la majorité des méthodes héritées. Qu'est-ce que cela indique en termes de conception orientée objet ?",
        choices: [
            "C'est une pratique normale et recommandée en POO",
            "Cela suggère une violation du principe de substitution de Liskov et un mauvais usage de l'héritage, favoriser la composition serait plus approprié",
            "La hiérarchie devrait être encore plus profonde",
            "Il faut transformer toutes les classes en interfaces"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Redéfinir massivement les méthodes héritées indique que l'héritage n'apporte pas de réutilisation, ce qui est un anti-pattern.",
            "Correct : C'est un signal d'alerte majeur. Si les sous-classes redéfinissent tout, elles ne bénéficient pas de la réutilisation promise par l'héritage et violent probablement le LSP. Cela indique que les classes n'ont pas de relation 'est-un' véritable. Solution : repenser avec composition ('a-un'), interfaces, ou une hiérarchie plus plate avec des stratégies.",
            "Incorrect : Approfondir la hiérarchie aggraverait le problème en augmentant la complexité et le couplage.",
            "Incorrect : Transformer tout en interfaces ne résout pas le problème fondamental de mauvaise modélisation des relations entre concepts."
        ]
    },
    {
        question: "Un développeur modélise un système de réservation d'hôtel. Il crée une association bidirectionnelle entre Client et Chambre avec multiplicités *..* de chaque côté, sans classe d'association. Quel est le principal problème de cette modélisation ?",
        choices: [
            "Les multiplicités *..* ne sont pas valides en UML",
            "On ne peut pas représenter les informations spécifiques à chaque réservation (dates, prix, statut) de manière naturelle",
            "Une association bidirectionnelle est interdite entre deux classes concrètes",
            "Il faudrait utiliser une composition au lieu d'une association"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Les multiplicités *..* (ou 0..*) sont parfaitement valides en UML et signifient 'de zéro à plusieurs' des deux côtés.",
            "Correct : Sans classe d'association (comme 'Reservation'), on ne peut pas modéliser les attributs propres à chaque réservation particulière (dateDebut, dateFin, montantPaye, statut, etc.). Une classe d'association Reservation est nécessaire pour porter ces informations.",
            "Incorrect : Les associations bidirectionnelles sont tout à fait autorisées en UML entre n'importe quelles classes. Elles indiquent simplement une navigation possible dans les deux sens.",
            "Incorrect : La composition n'est pas appropriée ici. Un client ne 'possède' pas les chambres, et une chambre n'appartient pas existentiellement à un client. C'est une association temporaire."
        ]
    },
    {
        question: "Dans un diagramme UML, vous voyez : Classe A avec attribut '-collection : B[*]' et une ligne de composition de A vers B. Quelle est l'incohérence ou la redondance ?",
        choices: [
            "Un attribut ne peut pas être de type collection en UML",
            "L'attribut et la relation de composition représentent la même information : il y a redondance",
            "La composition devrait être dans le sens inverse (de B vers A)",
            "La multiplicité [*] devrait être remplacée par [0..*]"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Les attributs peuvent tout à fait être des collections (tableaux, listes) en UML. La notation B[*] ou List<B> est valide.",
            "Correct : C'est une modélisation redondante. En UML, on représente généralement les relations structurelles (composition, agrégation, association) par des lignes avec multiplicités plutôt que par des attributs. Montrer les deux crée une duplication d'information. Il faut choisir : soit la relation graphique (préférable), soit l'attribut explicite.",
            "Incorrect : Le sens de la composition (losange du côté du composite) est correct si A contient des instances de B. Ce n'est pas le problème ici.",
            "Incorrect : Les notations [*] et [0..*] sont équivalentes en UML et représentent toutes deux 'de zéro à plusieurs'. Ce n'est pas l'incohérence recherchée."
        ]
    },
    {
        question: "Une équipe modélise un système de paiement avec les classes : Paiement (abstraite), PaiementCarte, PaiementPayPal, PaiementVirement. Chaque type de paiement doit valider ses données différemment. La méthode valider() devrait-elle être abstraite ou concrète dans Paiement ?",
        choices: [
            "Concrète avec une implémentation par défaut que les sous-classes peuvent surcharger",
            "Abstraite pour obliger chaque sous-classe à définir sa propre validation spécifique",
            "Statique pour être appelée sans instanciation",
            "Privée pour empêcher l'accès externe"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Une implémentation par défaut pourrait convenir si les validations étaient similaires avec de légères variations. Mais ici, chaque mode de paiement a des règles de validation fondamentalement différentes (numéro de carte vs compte PayPal vs IBAN). Une méthode abstraite est plus sûre.",
            "Correct : Déclarer valider() comme abstraite garantit que chaque sous-classe concrète fournira obligatoirement sa propre implémentation adaptée à son mode de paiement. Cela évite l'erreur d'oublier de redéfinir la méthode et assure la cohérence du design.",
            "Incorrect : Une méthode statique ne peut pas être abstraite et ne peut pas bénéficier du polymorphisme. Or, on veut justement pouvoir appeler valider() sur une référence de type Paiement qui pointe vers différents types concrets.",
            "Incorrect : Une méthode privée ne serait pas accessible depuis l'extérieur de la classe et ne pourrait pas être redéfinie par les sous-classes, ce qui va à l'encontre de l'objectif."
        ]
    },
    {
        question: "Un système de gestion de bibliothèque universitaire modélise : Personne (abstraite) héritée par Etudiant et Professeur. Les deux peuvent emprunter des livres, mais avec des quotas différents (5 pour étudiant, 20 pour professeur). Comment modéliser proprement la méthode empruntLivre() ?",
        choices: [
            "Méthode concrète dans Personne qui vérifie le type (instanceof) et applique la limite correspondante",
            "Méthode abstraite dans Personne, implémentée différemment dans chaque sous-classe avec sa propre logique de quota",
            "Deux méthodes distinctes : empruntLivreEtudiant() et empruntLivreProfesseur()",
            "Une seule méthode statique dans une classe utilitaire GestionEmprunt"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Utiliser instanceof pour tester le type à l'exécution est un anti-pattern. Cela viole le principe ouvert/fermé et le polymorphisme : on ne devrait pas avoir à connaître le type concret d'un objet. De plus, ajouter un nouveau type (ex: Chercheur) nécessiterait de modifier la classe parente.",
            "Correct : C'est la solution orientée objet correcte. Déclarer empruntLivre() abstraite dans Personne oblige chaque sous-classe à implémenter sa propre logique avec le quota approprié. On bénéficie ainsi du polymorphisme : on peut traiter toute Personne uniformément sans connaître son type exact.",
            "Incorrect : Avoir des méthodes avec des noms différents détruit le polymorphisme et oblige le code client à connaître le type exact de l'objet. C'est contraire aux principes de la POO.",
            "Incorrect : Une méthode statique dans une classe utilitaire ferait perdre l'encapsulation et le lien entre les données (Personne) et le comportement (emprunt). De plus, elle nécessiterait probablement des tests de type (instanceof)."
        ]
    },
    {
        question: "Dans un système e-commerce, on modélise : Commande compose LigneCommande (1..*), et LigneCommande est associée à Produit (1..1). Si on supprime un Produit du catalogue, que devrait-il se passer selon les bonnes pratiques métier ?",
        choices: [
            "Supprimer automatiquement toutes les LigneCommande contenant ce produit",
            "Interdire la suppression du Produit tant qu'il existe des LigneCommande le référençant, ou le marquer comme 'inactif'",
            "Remplacer automatiquement le Produit par un produit générique 'Produit Indisponible'",
            "Supprimer les Commandes entières contenant ce produit"
        ],
        correctIndex: 1,
        explanations: [
            "Incorrect : Supprimer les lignes de commande entraînerait une perte de données historiques importantes pour la traçabilité et la comptabilité. Ce n'est pas une bonne pratique.",
            "Correct : La meilleure pratique est d'empêcher la suppression d'un produit qui est référencé dans des lignes de commande existantes. On peut soit interdire la suppression, soit marquer le produit comme 'inactif' pour qu'il ne soit plus disponible à la vente, tout en conservant les références historiques.",
            "Incorrect : Remplacer par un produit générique pourrait créer de la confusion dans les rapports et analyses. Il est préférable de conserver la référence au produit original pour l'historique.",
            "Incorrect : Supprimer des commandes entières entraînerait une perte de données critiques et n'est pas conforme aux pratiques de gestion des commandes."
        ]
    }
];

        // ============================================================
        // LOGIQUE DE MÉLANGE ET D'ORGANISATION
        // ============================================================

        /**
         * Fonction de mélange aléatoire (algorithme de Fisher-Yates)
         * Permet de randomiser l'ordre des éléments d'un tableau
         */
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        /**
         * Mélange chaque niveau de questions et les combine
         * Ordre final : Facile → Moyen → Difficile (mais mélangé au sein de chaque niveau)
         */
        function prepareQuestions() {
            const shuffledEasy = shuffleArray(easyQuestions).map(q => ({ ...q, level: 'easy' }));
            const shuffledMedium = shuffleArray(mediumQuestions).map(q => ({ ...q, level: 'medium' }));
            const shuffledHard = shuffleArray(hardQuestions).map(q => ({ ...q, level: 'hard' }));
            
            return [...shuffledEasy, ...shuffledMedium, ...shuffledHard];
        }

        // ============================================================
        // VARIABLES GLOBALES
        // ============================================================

        let allQuestions = prepareQuestions();
        let currentQuestionIndex = 0;
        let selectedAnswer = null;

        // ============================================================
        // FONCTIONS D'AFFICHAGE
        // ============================================================

        function displayQuestion() {
            const question = allQuestions[currentQuestionIndex];
            selectedAnswer = null;

            // Mise à jour du texte de la question
            document.getElementById('question').textContent = question.question;

            // Mise à jour de la progression
            document.getElementById('progress').textContent = 
                `Question ${currentQuestionIndex + 1} / ${allQuestions.length}`;

            // Mise à jour du badge de niveau
            const levelBadge = document.getElementById('level-badge');
            levelBadge.className = 'level-badge';
            if (question.level === 'easy') {
                levelBadge.classList.add('level-easy');
                levelBadge.textContent = 'Facile';
            } else if (question.level === 'medium') {
                levelBadge.classList.add('level-medium');
                levelBadge.textContent = 'Intermédiaire';
            } else {
                levelBadge.classList.add('level-hard');
                levelBadge.textContent = 'Difficile';
            }

            // Affichage des choix
            const choicesContainer = document.getElementById('choices');
            choicesContainer.innerHTML = '';
            
            question.choices.forEach((choice, index) => {
                const choiceDiv = document.createElement('div');
                choiceDiv.className = 'choice';
                choiceDiv.textContent = choice;
                choiceDiv.onclick = () => selectAnswer(index);
                choicesContainer.appendChild(choiceDiv);
            });

            // Masquer l'explication
            document.getElementById('explanation').style.display = 'none';

            // Gérer l'état des boutons de navigation
            document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
            document.getElementById('next-btn').disabled = currentQuestionIndex === allQuestions.length - 1;
        }

        function selectAnswer(index) {
            if (selectedAnswer !== null) return; // Empêcher la re-sélection

            selectedAnswer = index;
            const question = allQuestions[currentQuestionIndex];
            const choices = document.querySelectorAll('.choice');

            // Désactiver tous les choix
            choices.forEach(choice => choice.classList.add('disabled'));

            // Marquer la réponse sélectionnée
            if (index === question.correctIndex) {
                choices[index].classList.add('selected-correct');
                // Atténuer les autres réponses
                choices.forEach((choice, i) => {
                    if (i !== index) choice.classList.add('faded');
                });
                showExplanation(true, index);
            } else {
                choices[index].classList.add('selected-incorrect');
                showExplanation(false, index);
            }
        }

        function showExplanation(isCorrect, selectedIndex) {
            const question = allQuestions[currentQuestionIndex];
            const explanationDiv = document.getElementById('explanation');
            explanationDiv.className = 'explanation-section';
            
            let html = '<h3>' + (isCorrect ? '✓ Bonne réponse !' : '✗ Réponse incorrecte') + '</h3>';
            
            if (isCorrect) {
                // Expliquer pourquoi c'est correct
                html += `<p><strong>Explication :</strong> ${question.explanations[selectedIndex]}</p>`;
                // Expliquer pourquoi les autres sont fausses
                html += '<p><strong>Pourquoi les autres réponses sont incorrectes :</strong></p>';
                question.explanations.forEach((exp, i) => {
                    if (i !== selectedIndex) {
                        html += `<p>• ${exp}</p>`;
                    }
                });
            } else {
                // Expliquer pourquoi la réponse choisie est fausse
                html += `<p><strong>Votre réponse :</strong> ${question.explanations[selectedIndex]}</p>`;
                // Donner la bonne réponse
                html += `<p><strong>La bonne réponse était :</strong> ${question.choices[question.correctIndex]}</p>`;
                html += `<p>${question.explanations[question.correctIndex]}</p>`;
            }

            // Ajouter le bouton pour réessayer
            html += '<button class="reset-button" onclick="resetQuestion()">↻ Réessayer</button>';

            explanationDiv.innerHTML = html;
            explanationDiv.style.display = 'block';
        }

        // ============================================================
        // NAVIGATION
        // ============================================================

        function resetQuestion() {
            selectedAnswer = null;
            const choices = document.querySelectorAll('.choice');
            
            // Réactiver tous les choix et supprimer toutes les classes de style
            choices.forEach(choice => {
                choice.classList.remove('disabled', 'selected-correct', 'selected-incorrect', 'faded');
            });

            // Masquer l'explication
            document.getElementById('explanation').style.display = 'none';
        }

        function nextQuestion() {
            if (currentQuestionIndex < allQuestions.length - 1) {
                currentQuestionIndex++;
                displayQuestion();
            }
        }

        function previousQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayQuestion();
            }
         }

        // Navigation au clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                nextQuestion();
            } else if (e.key === 'ArrowLeft') {
                previousQuestion();
            }
        });

        // ============================================================
        // INITIALISATION
        // ============================================================

        displayQuestion();