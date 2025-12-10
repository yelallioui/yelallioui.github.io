/*
 * =====================================================
 * QCM INTERACTIF - DIAGRAMMES DE CAS D'UTILISATION UML
 * =====================================================
 * 
 * COMMENT MODIFIER LES QUESTIONS :
 * 
 * Les questions sont stockées dans le tableau 'questions' ci-dessous.
 * Chaque question est un objet avec la structure suivante :
 * 
 * {
 *   question: "Texte de la question",
 *   choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
 *   correctIndex: 0,  // Index de la bonne réponse (0-3)
 *   explanations: {
 *     correct: "Explication de pourquoi cette réponse est correcte",
 *     incorrect: [
 *       "Pourquoi A est faux (si A n'est pas la bonne réponse)",
 *       "Pourquoi B est faux",
 *       "Pourquoi C est faux",
 *       "Pourquoi D est faux"
 *     ]
 *   }
 * }
 * 
 * Pour ajouter une question : copiez un objet existant et modifiez les valeurs
 * Pour modifier une question : changez directement les valeurs dans l'objet
 * Pour supprimer une question : retirez l'objet du tableau
 */

// =====================================================
// DONNÉES DES QUESTIONS
// =====================================================


const questions = [
    // ==================== NIVEAU FACILE ====================
    {
        question: "Quel est le rôle principal d’un diagramme de cas d'utilisation dans la phase d’analyse ?",
        choices: [
            "Décrire les interactions fonctionnelles entre les utilisateurs et le système",
            "Montrer l’architecture logicielle détaillée",
            "Lister les technologies nécessaires à l’implémentation",
            "Définir la structure de la base de données"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Le diagramme de cas d'utilisation est un outil d'analyse permettant de représenter les interactions fonctionnelles entre les utilisateurs (acteurs) et le système, afin d’identifier clairement les services rendus par celui-ci.",
            incorrect: [
                "",
                "L’architecture logicielle relève des diagrammes de composants ou de classes, pas des cas d’utilisation.",
                "Les choix technologiques appartiennent à la conception ou à la planification du projet.",
                "La structure des données est représentée par des modèles conceptuels (MER, diagrammes de classes), pas par les cas d'utilisation."
            ]
        }
    },
    {
        question: "Qu'est-ce qu'un diagramme de cas d'utilisation en UML ?",
        choices: [
            "Un outil pour modéliser les interactions entre les acteurs et le système",
            "Un schéma de la base de données du système",
            "Un diagramme représentant l'architecture technique",
            "Un plan de développement du logiciel"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Un diagramme de cas d'utilisation UML est effectivement un outil de modélisation qui capture les interactions fonctionnelles entre les acteurs externes (utilisateurs, systèmes) et le système à développer. Il représente les fonctionnalités du système du point de vue des utilisateurs et permet d'identifier les besoins fonctionnels.",
            incorrect: [
                "",
                "Un schéma de base de données relève du diagramme de classes ou du modèle entité-relation, pas des cas d'utilisation.",
                "L'architecture technique est représentée par d'autres diagrammes UML comme les diagrammes de composants ou de déploiement.",
                "Le plan de développement relève de la gestion de projet, pas de la modélisation UML des exigences fonctionnelles."
            ]
        }
    },
    {
    question: "Que doit représenter un acteur dans un diagramme de cas d'utilisation UML ?",
    choices: [
        "Un rôle externe qui interagit avec le système",
        "Une classe interne du système",
        "Un module logiciel du projet",
        "Une étape du processus métier interne"
    ],
    correctIndex: 0,
    explanations: {
        correct: "Un acteur représente un rôle externe au système. Il correspond à une entité (humaine ou logicielle) qui interagit avec le système pour atteindre un objectif fonctionnel.",
        incorrect: [
            "",
            "Les classes internes sont des éléments de conception, pas des acteurs.",
            "Les modules logiciels appartiennent à l’architecture, pas au diagramme de cas d'utilisation.",
            "Les étapes internes d’un processus métier ne sont pas représentées comme acteurs, mais parfois dans des diagrammes d’activité."
        ]
    }
},
{
    question: "Pourquoi les cas d’utilisation doivent-ils être nommés avec un verbe à l’infinitif ?",
    choices: [
        "Pour exprimer clairement l’action ou le service offert",
        "Pour respecter une contrainte grammaticale obligatoire",
        "Pour indiquer le module logiciel correspondant",
        "Pour faciliter la traduction automatique"
    ],
    correctIndex: 0,
    explanations: {
        correct: "Nommer les cas d’utilisation avec un verbe à l’infinitif permet d’exprimer clairement l’action ou le service rendu à l’acteur, facilitant la compréhension pour toutes les parties prenantes.",
        incorrect: [
            "",
            "Ce n’est pas une règle grammaticale imposée mais une bonne pratique de modélisation.",
            "Le nom ne doit jamais contenir de détails techniques comme le module ou le composant.",
            "La traduction automatique n’est pas une justification de modélisation."
        ]
    }
},
    {
        question: "Quelle est la représentation graphique d'un acteur dans un diagramme de cas d'utilisation ?",
        choices: [
            "Un bonhomme stylisé (stick figure)",
            "Un rectangle",
            "Un cercle",
            "Un losange"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Dans la notation UML standard, un acteur est représenté par un bonhomme stylisé (stick figure) accompagné du nom de l'acteur en dessous. Cette représentation iconographique facilite l'identification visuelle des entités externes qui interagissent avec le système.",
            incorrect: [
                "",
                "Un rectangle représente la frontière du système ou une classe dans un diagramme de classes, pas un acteur.",
                "Un cercle n'est pas utilisé dans les diagrammes de cas d'utilisation standard.",
                "Un losange représente un point de décision dans les diagrammes d'activité, pas un acteur."
            ]
        }
    },
    {
        question: "Comment est représenté un cas d'utilisation dans le diagramme ?",
        choices: [
            "Par une ellipse contenant le nom du cas d'utilisation",
            "Par un rectangle avec des compartiments",
            "Par un cercle plein",
            "Par un triangle"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Un cas d'utilisation est représenté par une ellipse (ou ovale) contenant le nom du cas d'utilisation, généralement formulé avec un verbe à l'infinitif. Cette forme distinctive permet de distinguer facilement les cas d'utilisation des autres éléments du diagramme.",
            incorrect: [
                "",
                "Un rectangle avec compartiments représente une classe dans un diagramme de classes UML.",
                "Un cercle plein n'est pas une notation standard pour les cas d'utilisation.",
                "Un triangle n'est pas utilisé pour représenter des cas d'utilisation."
            ]
        }
    },
    {
        question: "Qu'est-ce que la frontière du système dans un diagramme de cas d'utilisation ?",
        choices: [
            "Un rectangle qui délimite les cas d'utilisation du système",
            "Une ligne pointillée entre les acteurs",
            "Le titre du diagramme",
            "La légende du diagramme"
        ],
        correctIndex: 0,
        explanations: {
            correct: "La frontière du système (system boundary) est représentée par un rectangle qui englobe tous les cas d'utilisation du système modélisé. Elle définit clairement ce qui fait partie du système (à l'intérieur) et ce qui en est externe (acteurs à l'extérieur). Le nom du système est généralement inscrit en haut du rectangle.",
            incorrect: [
                "",
                "Les lignes pointillées représentent des relations entre éléments (include, extend), pas la frontière du système.",
                "Le titre du diagramme est un élément de documentation mais ne constitue pas la frontière du système.",
                "La légende est optionnelle et sert à expliquer les symboles, elle ne définit pas la frontière du système."
            ]
        }
    },
    {
        question: "Qu'est-ce qu'un acteur dans un diagramme de cas d'utilisation ?",
        choices: [
            "Une personne, un système externe ou une entité qui interagit avec le système",
            "Un développeur de l'équipe projet",
            "Un composant logiciel interne",
            "Une variable du programme"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Un acteur représente tout rôle joué par une entité externe (utilisateur humain, système informatique, dispositif matériel) qui interagit directement avec le système. L'acteur initie ou reçoit des informations du système mais reste externe à celui-ci. Il représente un rôle, pas nécessairement une personne physique spécifique.",
            incorrect: [
                "",
                "Les développeurs font partie de l'équipe de réalisation du système mais ne sont pas modélisés comme acteurs dans le diagramme de cas d'utilisation.",
                "Les composants internes font partie de l'implémentation du système et ne sont pas représentés comme acteurs externes.",
                "Les variables sont des éléments de programmation qui n'ont pas leur place dans un diagramme de cas d'utilisation de haut niveau."
            ]
        }
    },
    {
        question: "Quelle est la principale finalité d'un diagramme de cas d'utilisation ?",
        choices: [
            "Capturer les exigences fonctionnelles du système du point de vue des utilisateurs",
            "Documenter le code source du projet",
            "Planifier les tests unitaires",
            "Définir l'architecture matérielle"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Le diagramme de cas d'utilisation a pour objectif principal de capturer et documenter les exigences fonctionnelles du système en se plaçant du point de vue des utilisateurs. Il permet de définir ce que le système doit faire (fonctionnalités) sans spécifier comment il le fait (implémentation). C'est un outil de communication entre les parties prenantes.",
            incorrect: [
                "",
                "La documentation du code source se fait via des commentaires et de la documentation technique, pas via des diagrammes de cas d'utilisation.",
                "La planification des tests est une activité ultérieure qui peut s'appuyer sur les cas d'utilisation mais ce n'est pas leur finalité première.",
                "L'architecture matérielle est représentée par des diagrammes de déploiement, pas par des diagrammes de cas d'utilisation."
            ]
        }
    },
    {
        question: "Les cas d'utilisation doivent-ils être placés à l'intérieur ou à l'extérieur de la frontière du système ?",
        choices: [
            "À l'intérieur de la frontière du système",
            "À l'extérieur de la frontière du système",
            "Sur la frontière du système",
            "Il n'y a pas de règle précise"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Les cas d'utilisation doivent toujours être placés à l'intérieur de la frontière du système car ils représentent les fonctionnalités fournies par le système. La frontière délimite précisément ce qui appartient au système (dedans) et ce qui lui est externe (dehors). Les cas d'utilisation sont des services offerts par le système.",
            incorrect: [
                "",
                "Les acteurs sont placés à l'extérieur car ils sont externes au système. Les cas d'utilisation, en revanche, sont internes.",
                "Placer les cas d'utilisation sur la frontière créerait une ambiguïté entre ce qui est interne et externe au système.",
                "La notation UML définit clairement que les cas d'utilisation doivent être à l'intérieur de la frontière du système."
            ]
        }
    },
    {
        question: "Les acteurs doivent-ils être placés à l'intérieur ou à l'extérieur de la frontière du système ?",
        choices: [
            "À l'extérieur de la frontière du système",
            "À l'intérieur de la frontière du système",
            "Sur la frontière du système",
            "Cela dépend du type d'acteur"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Les acteurs doivent toujours être placés à l'extérieur de la frontière du système car ils représentent des entités externes qui interagissent avec le système. Par définition, un acteur n'appartient pas au système modélisé ; il en utilise les services ou lui fournit des informations.",
            incorrect: [
                "",
                "Placer un acteur à l'intérieur signifierait qu'il fait partie du système, ce qui contredit la définition même d'un acteur.",
                "Les acteurs ne doivent pas être placés sur la frontière car cela créerait une confusion sur leur statut externe.",
                "Tous les acteurs, qu'ils soient primaires ou secondaires, doivent être placés à l'extérieur de la frontière du système."
            ]
        }
    },
    {
        question: "Quel type de relation lie directement un acteur à un cas d'utilisation ?",
        choices: [
            "Une association (ligne simple)",
            "Une agrégation",
            "Une composition",
            "Un héritage"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Une association, représentée par une ligne simple (trait plein sans flèche ou avec une flèche simple), relie un acteur à un cas d'utilisation. Cette association indique que l'acteur participe au cas d'utilisation, soit en l'initiant, soit en recevant des informations de celui-ci. C'est la relation la plus fondamentale dans un diagramme de cas d'utilisation.",
            incorrect: [
                "",
                "L'agrégation est une relation de type 'tout-partie' utilisée dans les diagrammes de classes, pas dans les diagrammes de cas d'utilisation.",
                "La composition est une forme forte d'agrégation utilisée dans les diagrammes de classes, pas pour lier acteurs et cas d'utilisation.",
                "L'héritage (généralisation) peut exister entre acteurs ou entre cas d'utilisation, mais pas pour lier directement un acteur à un cas d'utilisation."
            ]
        }
    },
    {
        question: "Un diagramme de cas d'utilisation peut-il montrer plusieurs acteurs ?",
        choices: [
            "Oui, un diagramme peut contenir plusieurs acteurs",
            "Non, un seul acteur par diagramme",
            "Seulement si ce sont des acteurs primaires",
            "Uniquement dans les systèmes complexes"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Un diagramme de cas d'utilisation peut et doit généralement représenter tous les acteurs qui interagissent avec le système. Un système réaliste a souvent plusieurs types d'utilisateurs (acteurs primaires) et peut interagir avec des systèmes externes (acteurs secondaires). Montrer tous les acteurs donne une vision complète des interactions du système.",
            incorrect: [
                "",
                "Limiter à un seul acteur rendrait le diagramme incomplet et peu représentatif de la réalité des systèmes informatiques.",
                "Les acteurs secondaires (systèmes externes, bases de données) doivent également être représentés, pas seulement les acteurs primaires.",
                "Même les systèmes simples ont généralement plusieurs acteurs. La complexité du système ne détermine pas le nombre d'acteurs à représenter."
            ]
        }
    },

    // ==================== NIVEAU MOYEN ====================
    {
    question: "Quel est l’avantage principal d’utiliser une relation « include » entre deux cas d'utilisation ?",
    choices: [
        "Éviter la duplication de comportements communs",
        "Créer une variante optionnelle d’un scénario",
        "Supprimer un cas d’utilisation inutile",
        "Relier directement un acteur à plusieurs scénarios"
    ],
    correctIndex: 0,
    explanations: {
        correct: "La relation «include» permet de factoriser un comportement commun utilisé par plusieurs cas d’utilisation, ce qui améliore la cohérence du modèle et limite la duplication.",
        incorrect: [
            "",
            "Les variantes optionnelles font partie de la relation «extend», pas «include».",
            "La suppression d’un cas d’utilisation n’a aucun lien avec la relation «include».",
            "L’association avec les acteurs se fait par des liens simples, pas via «include»."
        ]
    }
},
{
    question: "Pourquoi une relation « extend » est-elle appropriée pour représenter un traitement d’erreur ?",
    choices: [
        "Parce que le scénario d’erreur ne se produit qu’à certaines conditions",
        "Parce que le traitement d’erreur remplace toujours le scénario principal",
        "Parce que le cas d’erreur est systématiquement exécuté",
        "Parce que les erreurs doivent être placées hors de la frontière du système"
    ],
    correctIndex: 0,
    explanations: {
        correct: "Une relation «extend» permet de modéliser un scénario conditionnel, comme un traitement d’erreur, qui n’intervient que lorsque certaines conditions se produisent lors du scénario de base.",
        incorrect: [
            "",
            "Un scénario d’erreur ne remplace pas le scénario normal, il le complète uniquement si nécessaire.",
            "Un scénario d’erreur n’est jamais systématique, il est conditionnel.",
            "Les scénarios d’erreur restent internes au système puisqu’ils font partie de son comportement."
        ]
    }
},
{
    question: "Qu’indique la présence de plusieurs acteurs liés au même cas d’utilisation ?",
    choices: [
        "Que la même fonctionnalité est accessible à différents rôles",
        "Qu'il s’agit d’une erreur de modélisation",
        "Que le cas d’utilisation doit être supprimé",
        "Que les acteurs doivent être regroupés en un seul"
    ],
    correctIndex: 0,
    explanations: {
        correct: "Lorsqu’un cas d’utilisation est lié à plusieurs acteurs, cela signifie que plusieurs rôles peuvent utiliser cette même fonctionnalité, chacun selon ses besoins.",
        incorrect: [
            "",
            "Ce n’est pas une erreur. Un même cas peut concerner plusieurs acteurs.",
            "Un cas utile ne doit pas être supprimé simplement parce qu’il est partagé.",
            "Il n’est pas nécessaire de fusionner les acteurs : ils représentent des rôles distincts."
        ]
    }
},
    {
        question: "Quelle est la différence entre un acteur primaire et un acteur secondaire ?",
        choices: [
            "L'acteur primaire initie l'interaction, l'acteur secondaire fournit un service au système",
            "L'acteur primaire est humain, l'acteur secondaire est un système",
            "L'acteur primaire a plus de droits que l'acteur secondaire",
            "Il n'y a pas de différence entre les deux"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Un acteur primaire est celui qui initie l'interaction avec le système pour atteindre un objectif (exemple : un client qui passe une commande). Un acteur secondaire est un acteur qui fournit un service au système ou dont le système a besoin pour accomplir un cas d'utilisation (exemple : un système de paiement externe, une base de données). Cette distinction aide à identifier qui bénéficie du système.",
            incorrect: [
                "",
                "Les deux types d'acteurs peuvent être des humains ou des systèmes. La distinction ne repose pas sur leur nature mais sur leur rôle dans l'interaction.",
                "Les droits et permissions relèvent de la sécurité et de l'autorisation, pas de la classification primaire/secondaire des acteurs.",
                "La distinction primaire/secondaire est importante en UML pour comprendre qui tire profit du système et qui le supporte."
            ]
        }
    },
    {
        question: "Quelle relation UML utilise le stéréotype « include » ?",
        choices: [
            "Une relation de dépendance entre cas d'utilisation",
            "Une relation d'héritage entre acteurs",
            "Une association entre acteur et cas d'utilisation",
            "Une relation de composition"
        ],
        correctIndex: 0,
        explanations: {
            correct: "La relation « include » (ou « inclusion ») est une relation de dépendance entre deux cas d'utilisation, représentée par une flèche en pointillés annotée du stéréotype «include». Elle indique qu'un cas d'utilisation source inclut obligatoirement le comportement d'un cas d'utilisation cible. C'est utile pour factoriser un comportement commun.",
            incorrect: [
                "",
                "L'héritage entre acteurs est représenté par une généralisation (flèche avec triangle vide), pas par «include».",
                "L'association acteur-cas d'utilisation est une ligne simple, pas une relation «include».",
                "La composition n'existe pas dans les diagrammes de cas d'utilisation ; c'est un concept des diagrammes de classes."
            ]
        }
    },
    {
        question: "Que signifie la relation « include » entre deux cas d'utilisation ?",
        choices: [
            "Le cas d'utilisation source inclut systématiquement le cas d'utilisation cible",
            "Le cas d'utilisation source peut optionnellement inclure la cible",
            "Les deux cas d'utilisation s'excluent mutuellement",
            "Le cas d'utilisation cible remplace le cas source"
        ],
        correctIndex: 0,
        explanations: {
            correct: "La relation «include» signifie que le cas d'utilisation de base (source) inclut obligatoirement et systématiquement le cas d'utilisation inclus (cible) dans son déroulement. Chaque fois que le cas source s'exécute, le cas inclus s'exécute également. C'est une dépendance forte et obligatoire utilisée pour factoriser des comportements répétitifs.",
            incorrect: [
                "",
                "L'inclusion optionnelle est caractéristique de la relation «extend», pas «include». Avec «include», l'inclusion est obligatoire.",
                "«Include» ne crée pas d'exclusion mutuelle ; au contraire, il établit une dépendance où un cas en appelle un autre.",
                "Le remplacement n'est pas le concept d'«include». Le cas inclus est exécuté en plus du cas de base, il ne le remplace pas."
            ]
        }
    },
    {
        question: "Comment représente-t-on graphiquement la relation « include » ?",
        choices: [
            "Par une flèche en pointillés avec le stéréotype « include »",
            "Par une ligne continue avec une flèche pleine",
            "Par une ligne simple sans flèche",
            "Par une double flèche"
        ],
        correctIndex: 0,
        explanations: {
            correct: "La relation «include» est représentée par une flèche en pointillés (ligne discontinue) allant du cas d'utilisation de base vers le cas d'utilisation inclus, annotée du stéréotype «include» (entre guillemets doubles). Cette notation UML standard distingue clairement les relations de dépendance des associations simples.",
            incorrect: [
                "",
                "Une ligne continue avec flèche pleine représente généralement une association ou une navigation, pas une relation «include».",
                "Une ligne simple sans flèche représente l'association entre un acteur et un cas d'utilisation, pas une relation «include».",
                "Les doubles flèches ne sont pas utilisées dans la notation standard des diagrammes de cas d'utilisation UML."
            ]
        }
    },
    {
        question: "Quelle relation utilise le stéréotype « extend » ?",
        choices: [
            "Une relation conditionnelle entre cas d'utilisation",
            "Une relation obligatoire entre cas d'utilisation",
            "Une relation entre un acteur et le système",
            "Une relation de généralisation"
        ],
        correctIndex: 0,
        explanations: {
            correct: "La relation «extend» est une relation conditionnelle entre cas d'utilisation qui permet à un cas d'utilisation (l'extension) de compléter le comportement d'un cas de base sous certaines conditions spécifiques. L'extension ne se produit que si les conditions sont remplies. C'est utile pour modéliser des variantes ou des comportements optionnels.",
            incorrect: [
                "",
                "Les relations obligatoires entre cas d'utilisation sont modélisées avec «include», pas «extend». «Extend» est par nature conditionnel.",
                "«Extend» ne lie pas un acteur au système ; c'est une relation entre deux cas d'utilisation.",
                "La généralisation est une relation différente (héritage) représentée par une flèche avec triangle vide, pas par le stéréotype «extend»."
            ]
        }
    },
    {
        question: "Quelle est la sémantique de la relation « extend » ?",
        choices: [
            "Le cas d'utilisation source peut être étendu par le cas cible sous certaines conditions",
            "Le cas source doit toujours être étendu par le cas cible",
            "Le cas cible inclut toujours le cas source",
            "Les deux cas sont identiques"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Dans la relation «extend», le cas d'utilisation de base peut être étendu de manière conditionnelle par le cas d'extension. Le cas de base est complet en lui-même et peut s'exécuter sans l'extension. L'extension apporte un comportement supplémentaire uniquement lorsque certaines conditions spécifiées (extension points) sont satisfaites. C'est une relation optionnelle.",
            incorrect: [
                "",
                "L'extension n'est jamais obligatoire avec «extend». Si elle devait toujours se produire, on utiliserait plutôt «include».",
                "C'est l'inverse : le cas d'extension étend le cas de base, pas le cas de base qui inclut l'extension.",
                "Les deux cas ne sont pas identiques ; l'un (extension) ajoute un comportement optionnel à l'autre (cas de base)."
            ]
        }
    },
    {
        question: "Dans quel sens pointe la flèche de la relation « extend » ?",
        choices: [
            "Du cas d'utilisation d'extension vers le cas de base",
            "Du cas de base vers le cas d'extension",
            "Dans les deux sens",
            "Elle n'a pas de direction"
        ],
        correctIndex: 0,
        explanations: {
            correct: "La flèche «extend» pointe du cas d'utilisation d'extension vers le cas d'utilisation de base qu'il étend. C'est contre-intuitif mais c'est la notation UML standard. L'extension 'connaît' le cas de base et peut l'étendre, tandis que le cas de base ignore l'existence de ses extensions potentielles. Cette direction exprime une dépendance de l'extension vers la base.",
            incorrect: [
                "",
                "Pointer du cas de base vers l'extension serait logique sémantiquement mais ce n'est pas la convention UML. La flèche va dans le sens inverse.",
                "Les flèches bidirectionnelles ne sont pas utilisées pour «extend» dans les diagrammes de cas d'utilisation.",
                "La relation «extend» a bien une direction : elle va de l'extension vers la base, même si cela peut sembler contre-intuitif."
            ]
        }
    },
    {
        question: "Peut-on avoir une relation de généralisation entre acteurs ?",
        choices: [
            "Oui, pour modéliser des acteurs qui partagent des caractéristiques communes",
            "Non, seuls les cas d'utilisation peuvent avoir des généralisations",
            "Seulement entre acteurs du même type",
            "Uniquement dans les systèmes distribués"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Oui, la généralisation entre acteurs permet de modéliser une hiérarchie où un acteur spécialisé (fils) hérite des associations de l'acteur général (parent). Par exemple, 'Client particulier' et 'Client entreprise' peuvent être des spécialisations de 'Client'. L'acteur fils peut interagir avec tous les cas d'utilisation de l'acteur parent, plus éventuellement d'autres cas spécifiques.",
            incorrect: [
                "",
                "Les généralisations sont possibles à la fois entre acteurs ET entre cas d'utilisation. Ce n'est pas limité aux cas d'utilisation.",
                "La généralisation n'est pas limitée aux acteurs de même type ; elle peut s'appliquer à tout acteur partageant des caractéristiques communes.",
                "La généralisation d'acteurs n'a rien à voir avec les systèmes distribués ; c'est un concept de modélisation applicable à tout système."
            ]
        }
    },
    {
        question: "Comment représente-t-on la généralisation entre acteurs ?",
        choices: [
            "Par une flèche avec un triangle vide pointant vers l'acteur parent",
            "Par une ligne pointillée avec « extend »",
            "Par une ligne pointillée avec « include »",
            "Par une ligne simple sans flèche"
        ],
        correctIndex: 0,
        explanations: {
            correct: "La généralisation (héritage) entre acteurs est représentée par une flèche avec un triangle vide (flèche creuse) à son extrémité, pointant du ou des acteurs spécialisés (enfants) vers l'acteur général (parent). C'est la même notation que pour l'héritage entre classes en UML. Le triangle vide est le symbole standard de la généralisation.",
            incorrect: [
                "",
                "«Extend» est un stéréotype utilisé pour les relations entre cas d'utilisation, pas pour la généralisation entre acteurs.",
                "«Include» est également un stéréotype pour les relations entre cas d'utilisation, pas pour la généralisation entre acteurs.",
                "Une ligne simple sans flèche représente une association, pas une généralisation. La généralisation requiert le triangle vide caractéristique."
            ]
        }
    },
    {
        question: "Quelle est l'utilité de nommer la frontière du système ?",
        choices: [
            "Identifier clairement le système modélisé",
            "Embellir le diagramme",
            "Respecter une norme graphique",
            "Faciliter l'impression"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Nommer la frontière du système (généralement en haut du rectangle de frontière) permet d'identifier clairement quel système est modélisé, surtout lorsqu'on travaille sur des projets complexes avec plusieurs sous-systèmes ou dans un environnement avec plusieurs systèmes interconnectés. C'est une bonne pratique de documentation qui évite toute ambiguïté.",
            incorrect: [
                "",
                "L'esthétique n'est pas l'objectif principal. Le nom sert avant tout à la clarté et à la documentation.",
                "Bien qu'il soit recommandé de nommer la frontière, ce n'est pas qu'une question de norme graphique mais une nécessité de communication.",
                "La facilité d'impression n'est pas la raison de nommer la frontière. C'est une question de clarté de la modélisation."
            ]
        }
    },

    // ==================== NIVEAU AVANCÉ ====================
    {
    question: "Pourquoi est-il utile de décomposer un cas d'utilisation complexe en plusieurs sous-cas ?",
    choices: [
        "Pour améliorer la lisibilité et clarifier les responsabilités fonctionnelles",
        "Pour augmenter le nombre total de cas d'utilisation",
        "Pour satisfaire une exigence UML obligatoire",
        "Pour rendre le diagramme plus technique"
    ],
    correctIndex: 0,
    explanations: {
        correct: "Décomposer un cas d'utilisation complexe permet d’obtenir un modèle plus lisible, mieux structuré et plus simple à maintenir. Chaque sous-cas représente un comportement cohérent et clairement délimité.",
        incorrect: [
            "",
            "Multiplier artificiellement les cas n’est pas une bonne pratique.",
            "UML n’impose aucune obligation numérique concernant les cas d’utilisation.",
            "L’objectif n’est pas de complexifier mais de simplifier."
        ]
    }
},
{
    question: "Dans quel cas est-il pertinent d’introduire une généralisation entre cas d'utilisation ?",
    choices: [
        "Lorsque plusieurs cas partagent un comportement commun mais possèdent aussi des particularités",
        "Lorsque deux cas ont exactement le même comportement",
        "Lorsque l’on veut supprimer un cas obsolète",
        "Lorsque les acteurs changent fréquemment"
    ],
    correctIndex: 0,
    explanations: {
        correct: "La généralisation entre cas d’utilisation est utile pour modéliser un scénario général dont plusieurs variantes spécialisées héritent. Chaque variante ajoute ou modifie certains aspects du comportement de base.",
        incorrect: [
            "",
            "Dans ce cas, les deux cas devraient être fusionnés plutôt que mis en généralisation.",
            "La suppression d’un cas n’a aucun lien avec la généralisation.",
            "Les changements d’acteurs ne justifient pas une généralisation entre cas d’utilisation."
        ]
    }
},
{
    question: "Quel est le principal risque d’introduire trop de relations « include » dans un diagramme de cas d'utilisation ?",
    choices: [
        "Rendre le modèle difficile à lire en multipliant les dépendances obligatoires",
        "Interdire l’utilisation de relations « extend »",
        "Créer des contradictions entre acteurs",
        "Sortir les cas d’utilisation de la frontière du système"
    ],
    correctIndex: 0,
    explanations: {
        correct: "Un usage excessif de «include» peut rendre le diagramme illisible en le surchargeant de dépendances obligatoires, ce qui complique la compréhension des scénarios principaux.",
        incorrect: [
            "",
            "«include» et «extend» peuvent coexister sans restriction.",
            "Les relations include ne concernent que des cas d’utilisation, pas des conflits d’acteurs.",
            "La frontière du système ne dépend pas des relations entre cas."
        ]
    }
},
    {
        question: "Dans une relation « include » entre A et B, si A inclut B, que se passe-t-il lors de l'exécution de A ?",
        choices: [
            "B est obligatoirement exécuté à chaque fois que A est exécuté",
            "B peut être exécuté si certaines conditions sont remplies",
            "B remplace A dans l'exécution",
            "A et B s'exécutent en parallèle"
        ],
        correctIndex: 0,
        explanations: {
            correct: "La sémantique de «include» est strictement obligatoire : si le cas A inclut le cas B, alors chaque exécution de A entraîne nécessairement l'exécution de B à un moment précis du déroulement. Il n'y a aucun conditionnement. C'est équivalent à un appel de sous-routine obligatoire en programmation. Cette relation sert à factoriser un comportement commun qui doit systématiquement se produire.",
            incorrect: [
                "",
                "L'exécution conditionnelle caractérise la relation «extend», pas «include». Avec «include», l'exécution est toujours obligatoire.",
                "B ne remplace pas A ; il est exécuté en tant que partie intégrante de A. A reste le cas d'utilisation principal.",
                "L'exécution n'est pas parallèle mais séquentielle : B s'exécute à un point défini dans le déroulement de A."
            ]
        }
    },
    {
        question: "Quelle est la différence principale entre « include » et « extend » ?",
        choices: [
            "« include » est obligatoire, « extend » est conditionnel",
            "« include » est conditionnel, « extend » est obligatoire",
            "Les deux sont conditionnels",
            "Les deux sont obligatoires"
        ],
        correctIndex: 0,
        explanations: {
            correct: "La différence fondamentale est que «include» exprime une inclusion obligatoire et systématique (le cas inclus s'exécute toujours), tandis que «extend» exprime une extension conditionnelle et optionnelle (l'extension ne se produit que si certaines conditions sont remplies). Cette distinction est cruciale pour choisir la bonne relation lors de la modélisation.",
            incorrect: [
                "",
                "C'est exactement l'inverse. «Include» est toujours obligatoire et «extend» est conditionnel.",
                "Non, ils ne sont pas tous deux conditionnels. Seul «extend» est conditionnel ; «include» est obligatoire.",
                "Non, ils ne sont pas tous deux obligatoires. Seul «include» est obligatoire ; «extend» est conditionnel."
            ]
        }
    },
    {
        question: "Peut-on avoir plusieurs relations « include » partant d'un même cas d'utilisation ?",
        choices: [
            "Oui, un cas peut inclure plusieurs autres cas",
            "Non, un seul « include » par cas d'utilisation",
            "Seulement si les cas inclus sont indépendants",
            "Uniquement dans les systèmes critiques"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Un cas d'utilisation peut tout à fait inclure plusieurs autres cas d'utilisation via plusieurs relations «include». Cela permet de décomposer un cas complexe en plusieurs sous-cas réutilisables et de factoriser différents comportements communs. Par exemple, 'Passer commande' pourrait inclure 'Vérifier stock', 'Calculer prix' et 'Enregistrer transaction'.",
            incorrect: [
                "",
                "Il n'y a aucune limite au nombre de relations «include» sortant d'un cas d'utilisation. On peut factoriser autant de comportements que nécessaire.",
                "L'indépendance ou la dépendance entre cas inclus n'affecte pas la possibilité d'avoir plusieurs relations «include».",
                "Cette possibilité n'est pas réservée aux systèmes critiques. C'est une pratique de modélisation standard pour tout type de système."
            ]
        }
    },
    {
        question: "Comment modéliser un acteur qui peut jouer plusieurs rôles dans le système ?",
        choices: [
            "Créer plusieurs acteurs spécialisés liés par généralisation à un acteur parent",
            "Créer un seul acteur avec toutes les associations",
            "Utiliser la relation « include » entre acteurs",
            "Dupliquer l'acteur pour chaque rôle"
        ],
        correctIndex: 0,
        explanations: {
            correct: "La meilleure pratique consiste à créer un acteur général (parent) et plusieurs acteurs spécialisés (enfants) reliés par généralisation. Par exemple, un acteur 'Utilisateur' pourrait avoir deux spécialisations : 'Administrateur' et 'Client'. Chaque rôle hérite des associations du parent et peut avoir ses propres associations spécifiques. Cela offre clarté et réutilisabilité.",
            incorrect: [
                "",
                "Un seul acteur avec toutes les associations rendrait le diagramme confus et ne distinguerait pas clairement les différents rôles et leurs responsabilités spécifiques.",
                "La relation «include» n'existe pas entre acteurs ; elle ne s'applique qu'entre cas d'utilisation.",
                "Dupliquer l'acteur créerait de la redondance et rendrait la maintenance du diagramme difficile. La généralisation évite cette duplication."
            ]
        }
    },
    {
        question: "Quelle bonne pratique respecter lors de la nomination des cas d'utilisation ?",
        choices: [
            "Utiliser un verbe à l'infinitif décrivant l'action du point de vue utilisateur",
            "Utiliser un nom technique décrivant le composant",
            "Utiliser un code alphanumérique",
            "Utiliser le nom de la classe correspondante"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Un cas d'utilisation doit être nommé avec un verbe à l'infinitif qui décrit l'action ou l'objectif du point de vue de l'utilisateur, non de l'implémentation. Exemples : 'Retirer de l'argent', 'Consulter le solde', 'Passer commande'. Ce nommage oriente métier rend le diagramme compréhensible par les non-techniques et reflète la valeur apportée à l'utilisateur.",
            incorrect: [
                "",
                "Les noms techniques (composants, modules) relèvent de l'implémentation et n'ont pas leur place dans les cas d'utilisation qui doivent rester à un niveau fonctionnel.",
                "Les codes alphanumériques sont utiles pour la traçabilité mais ne remplacent pas un nom explicite décrivant la fonctionnalité.",
                "Le nom de classe relève de la conception orientée objet, pas de la modélisation des exigences fonctionnelles. Les cas d'utilisation sont indépendants de l'implémentation."
            ]
        }
    },
    {
        question: "Un acteur peut-il interagir directement avec un autre acteur dans le diagramme ?",
        choices: [
            "Non, les interactions entre acteurs ne sont pas modélisées dans ce diagramme",
            "Oui, on utilise une ligne pointillée",
            "Oui, mais seulement entre acteurs primaires",
            "Oui, avec le stéréotype « communicate »"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Un diagramme de cas d'utilisation ne représente pas les interactions directes entre acteurs. Il se concentre exclusivement sur les interactions entre acteurs et système. Si des acteurs doivent communiquer entre eux, ces interactions sont en dehors du périmètre du système et ne sont donc pas représentées. Les interactions acteur-acteur peuvent être modélisées dans d'autres diagrammes UML (séquence, collaboration).",
            incorrect: [
                "",
                "Aucune ligne, pointillée ou non, ne doit relier deux acteurs dans un diagramme de cas d'utilisation standard.",
                "La restriction ne concerne pas seulement certains types d'acteurs : aucun acteur ne doit être directement relié à un autre.",
                "Le stéréotype «communicate» n'est pas standard dans UML pour les diagrammes de cas d'utilisation. Les acteurs ne communiquent pas directement dans ce type de diagramme."
            ]
        }
    },
    {
        question: "Quelle est l'erreur courante à éviter dans un diagramme de cas d'utilisation ?",
        choices: [
            "Placer des détails d'implémentation ou des aspects techniques dans les cas d'utilisation",
            "Utiliser trop d'acteurs",
            "Dessiner la frontière du système",
            "Utiliser des couleurs différentes"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Une erreur fréquente est d'inclure des détails techniques ou d'implémentation dans les cas d'utilisation. Par exemple, 'Valider formulaire HTML' ou 'Interroger base de données' sont trop techniques. Les cas d'utilisation doivent rester au niveau fonctionnel et métier, indépendants de la technologie. On devrait plutôt écrire 'Enregistrer information client' ou 'Consulter historique'.",
            incorrect: [
                "",
                "Avoir plusieurs acteurs n'est pas une erreur si tous interagissent réellement avec le système. C'est même souvent nécessaire pour représenter la réalité.",
                "Dessiner la frontière du système est une bonne pratique recommandée, pas une erreur. Elle clarifie le périmètre du système.",
                "L'utilisation de couleurs est une question de style et peut même améliorer la lisibilité si utilisée judicieusement."
            ]
        }
    },
    {
        question: "Comment représenter un système externe qui fournit des services au système modélisé ?",
        choices: [
            "Comme un acteur secondaire à l'extérieur de la frontière",
            "Comme un cas d'utilisation à l'intérieur de la frontière",
            "Avec un rectangle séparé",
            "Il ne faut pas le représenter"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Un système externe qui fournit des services (base de données, API externe, système de paiement) doit être modélisé comme un acteur secondaire, placé à l'extérieur de la frontière du système. Bien qu'il ne soit pas humain, il joue un rôle d'entité externe avec laquelle le système interagit. Cela montre les dépendances du système envers l'extérieur.",
            incorrect: [
                "",
                "Un système externe ne fait pas partie du système modélisé, il ne peut donc pas être représenté comme un cas d'utilisation interne.",
                "Un rectangle séparé pourrait prêter à confusion. La notation standard d'acteur (bonhomme ou rectangle avec «actor») est préférable pour la cohérence.",
                "Il est important de représenter les systèmes externes pour montrer toutes les dépendances et interactions du système avec son environnement."
            ]
        }
    },
    {
        question: "Quelle relation de généralisation est possible pour les cas d'utilisation ?",
        choices: [
            "Un cas d'utilisation spécialisé hérite du comportement du cas général",
            "Un cas général hérite du cas spécialisé",
            "Les cas d'utilisation ne peuvent pas avoir de généralisation",
            "Seuls les acteurs peuvent avoir des généralisations"
        ],
        correctIndex: 0,
        explanations: {
            correct: "La généralisation entre cas d'utilisation permet de modéliser l'héritage : un cas d'utilisation spécialisé (enfant) hérite du comportement du cas général (parent) et peut y ajouter ou modifier des détails. Par exemple, 'Passer commande express' pourrait être une spécialisation de 'Passer commande', héritant du comportement de base mais avec des contraintes temporelles plus strictes.",
            incorrect: [
                "",
                "L'héritage fonctionne toujours du spécialisé vers le général, jamais dans l'autre sens. C'est le fils qui hérite du parent, pas l'inverse.",
                "Les cas d'utilisation peuvent effectivement avoir des relations de généralisation, tout comme les acteurs.",
                "La généralisation est possible à la fois pour les acteurs ET pour les cas d'utilisation. Ce n'est pas limité aux acteurs."
            ]
        }
    },
    {
        question: "Quel niveau de détail doit avoir un cas d'utilisation dans le diagramme ?",
        choices: [
            "Il doit représenter une fonctionnalité métier complète apportant de la valeur à l'acteur",
            "Il doit décrire chaque clic de l'utilisateur",
            "Il doit lister toutes les méthodes de la classe",
            "Il doit montrer toutes les validations techniques"
        ],
        correctIndex: 0,
        explanations: {
            correct: "Un bon cas d'utilisation représente une fonctionnalité métier complète et cohérente qui apporte une valeur mesurable à l'acteur. Il doit être à un niveau d'abstraction suffisamment élevé pour rester compréhensible mais assez détaillé pour être significatif. Exemple : 'Retirer de l'argent' est un bon cas d'utilisation complet, alors que 'Appuyer sur le bouton' est trop détaillé.",
            incorrect: [
                "",
                "Décrire chaque clic ou action élémentaire de l'interface relève des spécifications d'interface utilisateur, pas des cas d'utilisation de haut niveau.",
                "Les méthodes de classe relèvent de la conception technique et de l'implémentation. Les cas d'utilisation doivent rester indépendants de l'implémentation.",
                "Les validations techniques sont des détails d'implémentation qui n'ont pas leur place dans un cas d'utilisation orienté métier."
            ]
        }
    }
];

// =====================================================
// VARIABLES GLOBALES
// =====================================================

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let questionLocked = new Array(questions.length).fill(false);

// =====================================================
// ÉLÉMENTS DOM
// =====================================================

const quizContainer = document.getElementById('quizContainer');
const questionTitle = document.getElementById('questionTitle');
const choicesContainer = document.getElementById('choicesContainer');
const explanationPanel = document.getElementById('explanationPanel');
const explanationContent = document.getElementById('explanationContent');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const answerIndicator = document.getElementById('answerIndicator');

// =====================================================
// FONCTIONS PRINCIPALES
// =====================================================

/**
 * Initialise l'application au chargement
 */
function init() {
    renderQuestion();
    updateProgressBar();
    updateNavigationButtons();
    setupEventListeners();
}

/**
 * Configure les écouteurs d'événements
 */
function setupEventListeners() {
    // Navigation clavier
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Boutons de navigation
    prevButton.addEventListener('click', goToPreviousQuestion);
    nextButton.addEventListener('click', goToNextQuestion);
}

/**
 * Gère la navigation au clavier (flèches gauche/droite)
 */
function handleKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPreviousQuestion();
    } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToNextQuestion();
    }
}

/**
 * Affiche la question courante
 */
function renderQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Animation de sortie
    quizContainer.style.opacity = '0';
    quizContainer.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        // Mettre à jour le titre de la question
        questionTitle.textContent = question.question;
        
        // Effacer les choix précédents
        choicesContainer.innerHTML = '';
        
        // Créer les boutons de choix
        question.choices.forEach((choice, index) => {
            const choiceElement = createChoiceElement(choice, index);
            choicesContainer.appendChild(choiceElement);
        });
        
        // Restaurer l'état si la question a déjà été répondue
        if (questionLocked[currentQuestionIndex]) {
            const selectedIndex = userAnswers[currentQuestionIndex];
            highlightAnswer(selectedIndex);
            showExplanation(selectedIndex);
        } else {
            hideExplanation();
        }
        
        // Animation d'entrée
        setTimeout(() => {
            quizContainer.style.opacity = '1';
            quizContainer.style.transform = 'translateY(0)';
        }, 50);
        
    }, 300);
}

/**
 * Crée un élément de choix
 */
function createChoiceElement(choiceText, index) {
    const labels = ['A', 'B', 'C', 'D'];
    
    const choiceDiv = document.createElement('div');
    choiceDiv.className = 'choice-item';
    choiceDiv.setAttribute('role', 'radio');
    choiceDiv.setAttribute('aria-checked', 'false');
    choiceDiv.setAttribute('tabindex', '0');
    choiceDiv.dataset.index = index;
    
    const labelSpan = document.createElement('span');
    labelSpan.className = 'choice-label';
    labelSpan.textContent = labels[index];
    
    const textSpan = document.createElement('span');
    textSpan.className = 'choice-text';
    textSpan.textContent = choiceText;
    
    choiceDiv.appendChild(labelSpan);
    choiceDiv.appendChild(textSpan);
    
    // Événements
    choiceDiv.addEventListener('click', () => handleChoiceClick(index));
    choiceDiv.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleChoiceClick(index);
        }
    });
    
    return choiceDiv;
}

/**
 * Gère le clic sur un choix
 */
function handleChoiceClick(selectedIndex) {
    // Empêcher de changer de réponse si la question est verrouillée
    if (questionLocked[currentQuestionIndex]) {
        return;
    }
    
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctIndex;
    
    // Enregistrer la réponse
    userAnswers[currentQuestionIndex] = selectedIndex;
    questionLocked[currentQuestionIndex] = true;
    
    // Afficher le feedback visuel
    highlightAnswer(selectedIndex);
    showExplanation(selectedIndex);
    showAnswerIndicator(isCorrect);
    
    // Annoncer le résultat pour les lecteurs d'écran
    announceResult(isCorrect);
}

/**
 * Met en évidence la réponse sélectionnée
 */
function highlightAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const choiceElements = choicesContainer.querySelectorAll('.choice-item');
    
    choiceElements.forEach((element, index) => {
        element.classList.add('locked');
        
        if (index === selectedIndex) {
            if (index === question.correctIndex) {
                element.classList.add('correct');
                element.setAttribute('aria-checked', 'true');
            } else {
                element.classList.add('incorrect');
                element.setAttribute('aria-checked', 'true');
            }
        } else {
            element.classList.add('dimmed');
        }
    });
}

/**
 * Affiche l'explication pédagogique
 */
function showExplanation(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctIndex;
    const labels = ['A', 'B', 'C', 'D'];
    
    let html = '';
    
    if (isCorrect) {
        html = `
            <div class="explanation-title correct">
                <span class="explanation-icon">✓</span>
                <span>Excellente réponse !</span>
            </div>
            <div class="explanation-text">
                <strong>La réponse ${labels[question.correctIndex]}</strong> est correcte. 
                ${question.explanations.correct}
            </div>
        `;
    } else {
        html = `
            <div class="explanation-title incorrect">
                <span class="explanation-icon">✗</span>
                <span>Réponse incorrecte</span>
            </div>
            <div class="explanation-text">
                <strong>Vous avez choisi ${labels[selectedIndex]}</strong>, mais la bonne réponse est 
                <strong>${labels[question.correctIndex]}</strong>. 
                ${question.explanations.correct}
            </div>
        `;
    }
    
    // Ajouter les explications des réponses incorrectes
    const incorrectExplanations = question.explanations.incorrect
        .map((exp, idx) => {
            if (idx !== question.correctIndex && exp.trim() !== '') {
                return `<li><strong>${labels[idx]}.</strong> ${exp}</li>`;
            }
            return '';
        })
        .filter(exp => exp !== '')
        .join('');
    
    if (incorrectExplanations) {
        html += `
            <div class="explanation-section">
                <div class="explanation-section-title">Pourquoi les autres réponses sont incorrectes :</div>
                <ul class="explanation-list">
                    ${incorrectExplanations}
                </ul>
            </div>
        `;
    }
    
    explanationContent.innerHTML = html;
    explanationPanel.classList.add('visible');
    
    // Ajuster les boutons de navigation pour éviter le chevauchement
    setTimeout(() => {
        const panelHeight = explanationPanel.offsetHeight;
        document.querySelector('.navigation-buttons').style.bottom = `${panelHeight + 24}px`;
    }, 100);
}

/**
 * Cache le panneau d'explication
 */
function hideExplanation() {
    explanationPanel.classList.remove('visible');
    document.querySelector('.navigation-buttons').style.bottom = '24px';
}

/**
 * Affiche un indicateur visuel de réponse (✓ ou ✗)
 */
function showAnswerIndicator(isCorrect) {
    answerIndicator.textContent = isCorrect ? '✓' : '✗';
    answerIndicator.className = 'answer-indicator show ' + 
        (isCorrect ? 'correct-indicator' : 'incorrect-indicator');
    
    setTimeout(() => {
        answerIndicator.classList.remove('show');
    }, 1500);
}

/**
 * Annonce le résultat pour les technologies d'assistance
 */
function announceResult(isCorrect) {
    const message = isCorrect 
        ? "Réponse correcte ! Consultez l'explication ci-dessous."
        : "Réponse incorrecte. Consultez l'explication pour comprendre la bonne réponse.";
    
    // Utiliser aria-live pour annoncer le message
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'assertive');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

/**
 * Met à jour la barre de progression
 */
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
}

/**
 * Met à jour l'état des boutons de navigation
 */
function updateNavigationButtons() {
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = currentQuestionIndex === questions.length - 1;
}

/**
 * Va à la question précédente
 */
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        updateProgressBar();
        updateNavigationButtons();
        scrollToTop();
    }
}

/**
 * Va à la question suivante
 */
function goToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        updateProgressBar();
        updateNavigationButtons();
        scrollToTop();
    }
}

/**
 * Fait défiler vers le haut de la page
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// =====================================================
// CLASSE CSS POUR ACCESSIBILITÉ (lecteurs d'écran)
// =====================================================

// Ajouter un style pour les annonces aux lecteurs d'écran
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
`;
document.head.appendChild(style);

// =====================================================
// INITIALISATION
// =====================================================

// Démarrer l'application quand le DOM est chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
