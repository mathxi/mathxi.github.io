export const globalValue = {
    created() {
    },
    methods: {
        M_isConnected() {
            if (
                this.$user.prenom != "" &&
                this.$user.nom != "" &&
                this.$user.entreprise != ""
            ) {
                return true;
            } else {
                return false;
            }
        }
    },
    data() {
        return {
            M_showSnackbar: false,
            M_mdDuration: 2000,
            M_message: ""
        };
    }
}