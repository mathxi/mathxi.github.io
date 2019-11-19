import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        admin: {
            id: "svpdonnez",
            password: "$2a$10$CTXYEAB16CSKKB43yVlno.K5qAUBUyiHm6/vAf2DCUFq2MLqznwVO",//moiun20
            connected:false
        },
        user: {
            prenom: "",
            nom: "",
            entreprise: ""
        },
        globalMessage: {
            M_showSnackbar: false,
            M_mdDuration: 1500,
            M_style: "background-color: #bd4747;",
            M_message: ""
        },
        questionnaire: {
            idQuestionnaire: 0,
            label: "",
            currentQuestion: 0,
            questions: [
                //Liste des question pour ce questionnaire
                {
                    idQuestion: 0,
                    type: "",
                    label: "",
                    choices: [

                    ],
                    trueAnswer: [

                    ],
                },
            ]
        }
    },
    mutations: {
        updateAdmin(state, admin) {
            state.admin = admin
        },
        updateSnackBar(state, snackBar) {
            state.globalMessage = snackBar
        },
        updateUser(state, user) {
            state.user = user
        },
        updateQuestionnaire(state, questionnaire) {
            state.questionnaire = questionnaire
        },
        updateCurrQuestion(state, operation) {
            state.questionnaire.currentQuestion += operation
        },
    },
    getters: {
        getQuestionnaire: state => () => {
            //console.log("getQuestionnaire",state.questionnaires[questionnaireIndex]);
            return state.questionnaire
        },
        getUser: state => {
            return state.user
        },
        getAdmin: state => {
            return state.admin
        },
        getSnackBar: state => {
            return state.globalMessage
        }
    },
    actions: {
        isConnected(context) {
            const user = context.getters.getUser
            console.log("hello user", user)
            //console.log(user)
            if (user.prenom != "" &&
                user.nom != "" &&
                user.entreprise != "") {
                console.log("true")
                return true
            } else {
                return false
            }

        },
    }
})
