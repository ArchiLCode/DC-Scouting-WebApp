import { createRouter, createWebHistory } from 'vue-router'
import EventsView from '../views/EventsView.vue'

const routes = [
  {
    path: '/',
    name: 'enents',
    component: EventsView
  },
  {
    path: '/signin',
    name: 'regitser',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/me',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
