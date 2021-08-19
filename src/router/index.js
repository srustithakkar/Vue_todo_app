import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import UserList from '../views/UserList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Home' }
    },
    {
        path: '/userlist',
        name: 'userlist',
        component: UserList,
        meta: { title: 'UserList' }
    }
  ]
})
