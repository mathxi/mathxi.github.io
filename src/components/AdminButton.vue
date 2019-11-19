
<template>
  <span>
    <md-speed-dial class="md-top-left" md-direction="bottom">
      <md-speed-dial-target>
        <md-icon class="md-morph-initial">unfold_more</md-icon>
        <md-icon class="md-morph-final">unfold_less</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button
          v-if="admin.connected"
          @click="disconnectAdmin"
          style="background-color:#F44336"
          class="md-fab"
        >
          <md-icon>toggle_on</md-icon>
        </md-button>
        <md-button v-else to="/admin" class="md-fab md-primary">
          <md-icon>toggle_off</md-icon>
        </md-button>

        <md-button to="/" class="md-fab md-primary">
          <md-icon>home</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  </span>
</template>
<script>
export default {
  name: "AdminButton",
  methods: {
    disconnectAdmin() {
      this.admin.connected = false;
      this.$store.commit("updateSnackBar", {
        M_showSnackbar: true,
        M_style: "background-color: #bd4747;",
        M_message: "Déconnecté"
      });
      setTimeout( oui => {
        this.snackBar.M_showSnackbar = false;
      }, 1000);
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
  }
};
</script>

<style lang="scss">
</style>