<template>
  <div class="login">
    <md-card class="card__login">
      <md-card-header>
        <div class="md-title">Administration</div>
      </md-card-header>

      <md-card-content v-if="admin.connected">
        <div>
          <md-list>
            <md-subheader>Liste des réponses</md-subheader>

            <md-list-item v-for="answer in answers" v-bind:key="answer._id">
              <span class="md-list-item-text">{{answer.nom}} {{answer.prenom}}</span>
              <span
                class="md-list-item-text"
              >{{nbGoodQuestions(answer)}} / {{answer.questions.length}}</span>
              <md-button
                :to="{ path: 'resultats', query: { id_questionnaire: answer._id }}"
                class="md-icon-button md-dense md-primary md-raised"
              >
                <md-icon>remove_red_eye</md-icon>
              </md-button>
              <md-button
                style="background-color: #e00e0e;"
                @click="deleteItem(answer)"
                class="md-icon-button md-dense md-primary md-raised"
              >
                <md-icon>delete_forever</md-icon>
              </md-button>
            </md-list-item>
          </md-list>
        </div>
      </md-card-content>
      <md-card-content v-if="!admin.connected">
        <md-field>
          <label>Identifiant</label>
          <md-input v-model="inputID"></md-input>
        </md-field>
        <md-field>
          <label>Mot de passe</label>
          <md-input type="password" v-model="inputPassword"></md-input>
        </md-field>
        <md-button @click="TryConnection" class="md-raised md-accent">Connexion</md-button>
      </md-card-content>

      <md-card-actions></md-card-actions>
    </md-card>
  </div>
</template>

<script>
import PouchDB from "pouchdb";
export default {
  name: "admin",
  created() {
    // const password = "moiun20";
    // var bcrypt = require("bcryptjs");
    // var hash = bcrypt.hashSync(password, 10);
    // console.log("bcrypt", hash);
    var db = new PouchDB("app-questionnaire");
    db.allDocs({
      include_docs: true,
      attachments: true
    }).then(result => {
      result.rows.forEach(row => {
        this.answers.push(row.doc);
      });

    });
  },
  methods: {
    deleteItem(answer) {
      var db = new PouchDB("app-questionnaire");
      db.remove(answer);
      this.answers = this.answers.filter(tempanswer => {
        return answer._id != tempanswer._id;
      });
    },
    TryConnection() {
      if (this.inputID === this.admin.id) {
        var bcrypt = require("bcryptjs");
        if (bcrypt.compareSync(this.inputPassword, this.admin.password)) {
          this.$store.commit("updateSnackBar", {
            M_showSnackbar: true,
            M_style: "background-color: #58b368;",
            M_message: "Connecté"
          });
          setTimeout(oui => {
            this.snackBar.M_showSnackbar = false;
          }, 1000);
          this.admin.connected = true;
        } else {
          this.$store.commit("updateSnackBar", {
            M_showSnackbar: true,
            M_style: "background-color: #bd4747;",
            M_message: "Mot de passe non valide"
          });
          setTimeout(oui => {
            this.snackBar.M_showSnackbar = false;
          }, 1000);
        }
      } else {
        this.$store.commit("updateSnackBar", {
          M_showSnackbar: true,
          M_style: "background-color: #bd4747;",
          M_message: "Identifiant non valide"
        });
        setTimeout(oui => {
          this.snackBar.M_showSnackbar = false;
        }, 1000);
      }
    },
    nbGoodQuestions(questionnaire) {
      var nbGood = 0;
      questionnaire.questions.forEach(question => {
        if (this.isQuestionRight(question)) {
          nbGood++;
        }
      });
      return nbGood;
    },
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
  },
  computed: {
    admin: {
      get() {
        return this.$store.getters.getAdmin;
      },
      set(admin) {
        this.$store.commit("updateAdmin", admin);
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
    return {
      answers: [],
      inputID: "svpdonnez",
      inputPassword: "moiun20"
    };
  }
};
</script>

<style lang="scss">
</style>
