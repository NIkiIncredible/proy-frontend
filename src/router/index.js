import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/intern',
    name: "Intern",
    component: () => import('../views/layout/layout.vue'),
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: () => import('../views/Overview')
      },
      {
        path: 'new-entry',
        name: 'New Entry',
        component: () => import('../views/New-Entry')
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('../views/User')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
