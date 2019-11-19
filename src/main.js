import Vue from 'vue'
import Default from './App.vue'
import router from './router'
import './registerServiceWorker'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
//import { globalValue } from './mixins/globalValue'
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(Default)
}).$mount('#app')
