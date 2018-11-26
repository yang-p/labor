import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '../views/UserLogin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userLogin',
      component: UserLogin
    }
  ]
})
