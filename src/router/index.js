import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import ImprintView from '../views/ImprintView.vue'
import LoveView from '../views/LoveView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:id',
    name: 'project',
    component: ProjectDetailView
  },
  {
    path: '/:id/privacy',
    name: 'privacy',
    component: PrivacyView
  },
  {
    path: '/imprint',
    name: 'imprint',
    component: ImprintView
  },
  {
    path: '/simba/zungenstups/26082021',
    name: 'love',
    component: LoveView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
