<template>
  <div class="questionnaire">
    <div class="center__elem">
      <h1>Questionnaire de {{user.nom}} {{user.prenom}}</h1>
      <md-card>
        <md-progress-bar class="md-accent" md-mode="determinate" :md-value="percentresponce"></md-progress-bar>
        <md-card-header>
          <div class="md-title">{{questionnaire.label}}</div>
          <div class="md-subhead">Question: {{questionnaire.currentQuestion +1}} / {{questionnaire.questions.length}}</div>
        </md-card-header>
        <CheckboxQuestion
          v-bind:disable="false"
          :question="questionnaire.questions[curQuestionPosition() -1]"
        ></CheckboxQuestion>

        <md-card-actions>
          <md-button v-if="!isFirstQuestion()" v-on:click="precQuestion">Précédent</md-button>
          <md-button v-if="!isLastQuestion()" v-on:click="nextQuestion">Suivant</md-button>
          <md-button v-if="isLastQuestion()" v-on:click="endSurvey">Terminer</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import CheckboxQuestion from "../components/checkboxquestion.vue";
import PouchDB from "pouchdb";
export default {
  name: "questionnaire",
  computed: {
    percentresponce() {
      const percentresponce =
        (this.questionnaire.currentQuestion * 100) /
        this.questionnaire.questions.length;

      //console.log("percentresponce", percentresponce);
      return percentresponce;
    },
    snackBar: {
      get() {
        return this.$store.getters.getSnackBar;
      },
      set(value) {
        this.$store.commit("updateUser", value);
      }
    },
    questionnaire: {
      get() {
        return this.$store.getters.getQuestionnaire();
      },
      set(value) {
        this.$store.commit("updateQuestionnaire", value);
      }
    },
    user: {
      get() {
        return this.$store.getters.getUser;
      },
      set(value) {
        this.$store.commit("updateUser", value);
      }
    }
  },
  methods: {
    endSurvey() {
      var db = new PouchDB("app-questionnaire");
      const _id =
        this.user.nom +
        this.user.prenom +
        this.user.entreprise +
        this.questionnaire.idQuestionnaire;

      var answer = Object.assign({}, this.questionnaire, this.user);
      answer["_id"] = _id;
      db.put(answer);
      this.snackBar.M_showSnackbar = true;
      this.snackBar.M_style = "background-color: #58b368;";
      this.snackBar.M_message = "Réponses enregistré";
      setTimeout(oui => {
        this.snackBar.M_showSnackbar = false;
      }, 1000);
      this.$router.push({
        path: "resultats",
        query: { id_questionnaire: _id }
      });
    },
    nbuserSurveyQuestion() {
      return this.questionnaire.questions.length;
    },
    curQuestionPosition() {
      return this.questionnaire.currentQuestion + 1;
    },
    nextQuestion: function() {
      this.$store.commit("updateCurrQuestion", 1);
    },
    precQuestion: function() {
      //change la question courante pour la suivante
      if (!this.isFirstQuestion()) {
        this.$store.commit("updateCurrQuestion", -1);
      }
    },
    isFirstQuestion() {
      // retourne un booleen pour savoir si c'est la première question du questionnaire courant
      if (this.curQuestionPosition() - 1 === 0) {
        return true;
      } else {
        return false;
      }
    },
    isLastQuestion() {
      const nbQuestion = this.nbuserSurveyQuestion();
      const curquestion = this.curQuestionPosition();
      // retourne un booleen pour savoir si c'est la dernière question du questionnaire courant

      if (nbQuestion === curquestion) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {},
  components: {
    CheckboxQuestion
  }
};
</script>

<style lang="scss">
.center__elem {
  margin: 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0;
}
.md-card {
  width: 700px;
  padding: 20px;
  max-width: 100%;
}
</style>
