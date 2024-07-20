import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('../views/StartView.vue')
    },
    {
      path: '/finish',
      name: 'finish',
      component: () => import('../views/FinishView.vue')
    }
  ]
})

export default router
