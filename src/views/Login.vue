<template>
  <div class="login">
    <md-card class="card__login">
      <md-card-header>
        <div class="md-title">Login</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label>Prénom</label>
          <md-input class="inputLogin" v-model="user.prenom" placeholder="Marc"></md-input>
        </md-field>
        <md-field>
          <label>Nom</label>
          <md-input class="inputLogin" v-model="user.nom" placeholder="Janio"></md-input>
        </md-field>
        <md-field>
          <label>Entreprise</label>
          <md-input class="inputLogin" v-model="user.entreprise" placeholder="C2C WorldWide"></md-input>
        </md-field>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-raised md-primary" @click="verifierInscription() ">Commencer le test</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import questionnaires from "@/assets/questionnaires.js";

export default {
  name: "login",
  created() {
    var questionnaire = questionnaires.questionnaires[0];
    /**
     * Shuffle algo
     * par Durstenfeld
     * pour rendre aléatoire les questions du questionnaire
     */
    for (var i = questionnaire.questions.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = questionnaire.questions[i];
      questionnaire.questions[i] = questionnaire.questions[j];
      questionnaire.questions[j] = temp;
    }
    questionnaire.questions = questionnaire.questions.slice(0, 10);
    this.$store.commit("updateQuestionnaire", questionnaire);
  },
  methods: {
    async verifierInscription() {
      if (await this.$store.dispatch("isConnected")) {
        this.$router.push("questionnaire");
      } else {
        this.$store.commit("updateSnackBar", {
          M_showSnackbar: true,
          M_style: "background-color: #bd4747;",
          M_message: "Champs non remplis"
        });
        setTimeout(oui => {
          this.snackBar.M_showSnackbar = false;
        }, 1000);
      }
    }
  },
  computed: {
    user: {
      get() {
        return this.$store.getters.getUser;
      },
      set(value) {
        this.$store.commit("updateUser", value);
      }
    },
    snackBar: {
      get() {
        return this.$store.getters.getSnackBar;
      },
      set(value) {
        this.$store.commit("updateUser", value);
      }
    }
  },
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
h1 {
  line-height: 1.2em;
}
.card__login {
  width: 500px;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.md-input {
  background-color: rgba(195, 195, 195, 0.2) !important;
  padding: 5px !important;
}
</style>
