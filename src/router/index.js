import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import App from '../App.vue'
import Questionnaire from '../views/Questionnaire.vue'
import Admin from '../views/Admin.vue'
import Resultats from '../views/Resultats.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/resultats',
    name: 'resultats',
    component: Resultats
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/questionnaire',
    name: 'questionnaire',
    component: Questionnaire
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
