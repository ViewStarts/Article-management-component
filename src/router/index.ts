import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guanli',
      component: () => import('../views/GuanLi.vue')
    },
    {
      path: '/fabu',
      name: 'fabu',
      component: () => import('../views/FaBu.vue')
    }
  ]
})

export default router
