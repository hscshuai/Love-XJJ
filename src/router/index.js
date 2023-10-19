import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
