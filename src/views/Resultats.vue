<template>
  <div class="resultats">
    <div class="center__elem">
      <h1>
        Résultats de {{user.nom}} {{user.prenom}}
        <i
          style="font-weight:100; font-size:0.8em;"
        >({{user.entreprise}})</i>
      </h1>
      <div
        class="md-subhead"
      >Total questions:{{nbGoodQuestions}} / {{questionnaire.questions.length}}</div>
      <md-card v-for="curQuestion in questionnaire.questions" v-bind:key="curQuestion.idQuestion">
        <md-card-actions>
          <md-icon class="trueValue" v-if="isQuestionRight(curQuestion)">check_circle</md-icon>
          <md-icon class="falseValue" v-else>clear</md-icon>
        </md-card-actions>
        <checkboxquestion v-bind:disable="true" :question="curQuestion"></checkboxquestion>
        <Collapsible :question="curQuestion"></Collapsible>
      </md-card>
    </div>
    <AdminButton></AdminButton>
  </div>
</template>


<script>
// Vue Compossant servant a afficher les résultats d'un questionnaire

import checkboxquestion from "@/components/checkboxquestion.vue";
import Collapsible from "@/components/Collapsible.vue";
import AdminButton from "@/components/AdminButton.vue";
import PouchDB from "pouchdb";

export default {
  name: "resultats",
  mounted() {
    //console.log("route",this.$router.app.$route.query.id_questionnaire)
    var db = new PouchDB("app-questionnaire");
    db.get(this.$router.app.$route.query.id_questionnaire)
      .then(doc => {
        console.log("doc", doc);
        this.questionnaire = doc;
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    nbGoodQuestions() {
      var nbGood = 0;
      this.questionnaire.questions.forEach(question => {
        if (this.isQuestionRight(question)) {
          nbGood++;
        }
      });
      return nbGood;
    },
    user: {
      get() {
        return this.$store.getters.getUser;
      }
    }
  },

  data() {
    return {
      questionnaire: {
        idQuestionnaire: 0,
        label: "",
        currentQuestion: 0,
        questions: [],
        prenom: "",
        nom: "",
        entreprise: ""
      }
    };
  },
  components: {
    checkboxquestion,
    AdminButton,
    Collapsible
  },
  methods: {
    isQuestionRight(curQuestion) {
      //les methodes find / map ect.. ne marchais pas

      let nbGoodAnswer = 0;

      for (let index = 0; index != curQuestion.choices.length; index++) {
        let isTrue = curQuestion.trueAnswer.some(currentTrue => {
          return (
            curQuestion.choices[index].idChoice == currentTrue.idChoice &&
            curQuestion.choices[index].value == currentTrue.value
          );
        });

        if (isTrue) {
          nbGoodAnswer++;
        }
      }
      if (nbGoodAnswer == curQuestion.choices.length) {
        return true;
      } else {
        false;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.trueValue {
  color: green !important;
}
.falseValue {
  color: red !important;
}
.md-card {
  width: 700px;
  padding: 20px;
  max-width: 100%;
}

.md-checkbox {
  display: flex;
}
.center__elem {
  padding-top: 50px;
  margin: 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
