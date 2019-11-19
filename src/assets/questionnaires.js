export default {
    questionnaires: [
        {
            idQuestionnaire: 1,
            label: "Situation dangereuse",
            currentQuestion: 0,
            questions: [
                //Liste des question pour ce questionnaire
                {
                    idQuestion: 1,
                    type: "checkbox",
                    label: "VERMONDEN Daniel est le plus beau ?",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "oui",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "non",
                            value: false
                        }
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "oui",
                            value: true
                        },
                        {
                            idChoice: 2,
                            label: "non",
                            value: false
                        }
                    ]
                },
                {
                    idQuestion: 2,
                    type: "checkbox",
                    label: "Pour décharger le camion de l'entreprise je:",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Demande d'aide",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "m'en charge  💪🏻",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Je ne le decharge pas",
                            value: false
                        }
                    ],
                    trueAnswer: [// les réponses attendu
                        {
                            idChoice: 1,
                            label: "Demande d'aide",
                            value: true
                        },
                        {
                            idChoice: 2,
                            label: "m'en charge  💪🏻",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Je ne le decharge pas",
                            value: false
                        }
                    ],
                    solution: "Je ne prend pas de risques, pour ma santé et le bon fonctionnement de l'entreprise."
                },
                {
                    idQuestion: 3,
                    type: "checkbox",
                    label: "Je manipule un outil dangereux ",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Ce n'est pas grave je gère ",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "J'ai des protections adaptées",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Dieu me protège 🙏🏻",
                            value: false
                        }
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Ce n'est pas grave je gère ",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "J'ai des protections adaptées",
                            value: true
                        },
                        {
                            idChoice: 3,
                            label: "Dieu me protège 🙏🏻",
                            value: false
                        }
                    ],
                    solution: "Je suis compétant dans le domaine que je pratique et j'utilise donc avec intélligence les outils fournis"
                },
                {
                    idQuestion: 4,
                    type: "checkbox",
                    label: "Je travail a proximité des machines dans le datacenter je:",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "suis attentif à mes mouvements ",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "fait un Cache-cache avec le stagiaire !",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "demande les bonnes pratiques à mon collègue",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "suis attentif à mes mouvements ",
                            value: true
                        },
                        {
                            idChoice: 2,
                            label: "fait un Cache-cache avec le stagiaire !",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "demande les bonnes pratiques à mon collègue",
                            value: true
                        },
                    ],
                    solution: "Il est important lorsque lorsque l'on travail sur des points critique pour l'entreprise d'être attentif à ce que l'on fait. De plus il est important de demander à ses collègues usages et les coutumes."
                },
                {
                    idQuestion: 5,
                    type: "checkbox",
                    label: "Les gants me protèges de tout dommages",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Bien sûr!",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Non",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Bien sûr!",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Non",
                            value: true
                        },
                    ],
                    solution: "Malgré qu'ils soient très utile les gants ne sont pas omnipotent."
                },
                {
                    idQuestion: 6,
                    type: "checkbox",
                    label: "Je suis le dernier employer je:",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "J'active l'alarme",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "ferme seulement mon bureau ",
                            value: false
                        },
                        {
                            idChoice: 1,
                            label: "m'assure que tout est bien fermé ",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "J'allume certaines lumières ",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "J'active l'alarme",
                            value: true
                        },
                        {
                            idChoice: 2,
                            label: "ferme seulement mon bureau",
                            value: false
                        },
                        {
                            idChoice: 1,
                            label: "m'assure que tout est bien fermé",
                            value: true
                        },
                        {
                            idChoice: 2,
                            label: "J'éteins toutes les lumière",
                            value: true
                        },
                    ],
                    solution: "Si je suis le dernier à quitter l'établissement il m'incombe de m'assurer que la sécurité du bâtiment est en bon et du forme. L'alarme doit être activé, les portes fermé et certaine lumière allumé pour simuler de la présence."

                },
                {
                    idQuestion: 7,
                    type: "checkbox",
                    label: "Une araignée est au dessus de mon collège qui en a la phobie je:",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Je lance une claquette pour tenter de la tuer",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Je ne dit et fait rien ",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Je la tue avec la super raquette électrique",
                            value: false
                        },
                        {
                            idChoice: 4,
                            label: "Je tente de l'attraper pour ensuite la remettre dans la nature ",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Je lance une claquette pour tenter de la tuer",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Je ne dit et fait rien ",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Je la tue avec la super raquette électrique",
                            value: false
                        },
                        {
                            idChoice: 4,
                            label: "Je tente de l'attraper pour ensuite la remettre dans la nature ",
                            value: true
                        },
                    ],
                    solution: "Oui l'entreprise dispose d'une rauquette électronique ultra-puissante pour tuer tout les moustiques et autres mais les araignées sont importantes au sein de la nature, arrêtons de les tuer et sauvons notre planète. 🌿"
                },
                {
                    idQuestion: 8,
                    type: "checkbox",
                    label: "De l'eau s'infiltre dans l'open space",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Je compte le nombre de gouttes d'eau ",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Je met un sceau avant tout",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "Je préviens le patron",
                            value: false
                        },
                        { 
                            idChoice: 4,
                            label: "Ça passera demain ils ont prévu moins de pluie",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Je compte le nombre de gouttes d'eau 🧐",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Je met un sceau avant tout",
                            value: true
                        },
                        {
                            idChoice: 3,
                            label: "Je préviens le patron 🧙‍",
                            value: true
                        },
                        { 
                            idChoice: 4,
                            label: "Ça passera demain ils ont prévu moins de pluie 💦",
                            value: false
                        },
                    ],
                    solution: "Le matériel est important il faut donc le protéger avant tout puis prévenir mon supérieur."
                },
                {
                    idQuestion: 9,
                    type: "checkbox",
                    label: "Cette question est:",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "Vrais 😈",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Fausse 👿",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "Vrais",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "Fausse",
                            value: false
                        },
                    ],
                    solution: "La vie n'est pas noir ou blanche, c'est un mélange de haut et de bas, il faut donc savoir tempérer.🤣✌"
                },
                {
                    idQuestion: 10,
                    type: "checkbox",
                    label: "Quel est le sens de la vie?",
                    choices: [
                        //les choix pour cette question
                        {
                            idChoice: 1,
                            label: "0",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "1",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "42",
                            value: false
                        },
                    ],
                    trueAnswer: [
                        {
                            idChoice: 1,
                            label: "0",
                            value: false
                        },
                        {
                            idChoice: 2,
                            label: "1",
                            value: false
                        },
                        {
                            idChoice: 3,
                            label: "42",
                            value: false
                        },
                    ],
                    solution: "Il y a quelques temps quand l'on tapais cette question dans google il nous répondait 42. Celà est du au fait que 42 est la réponse a beaucoup de choses en mathématique / physique."
                },
            ]
        }
    ]
}