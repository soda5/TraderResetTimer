import { createRouter, createWebHistory } from 'vue-router'
import Timer from './views/Timer.vue'
import Maps from './views/Maps.vue'

const routes = [
  {
    path: '/',
    name: 'timer',
    component: Timer,
    props: true,
    meta: {
      title: 'Tarkov Timer'
    }
  },
  {
    path: '/Maps',
    name: 'maps',
    component: Maps,
    props: true,
    meta: {
      title: 'Tarkov Maps'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
