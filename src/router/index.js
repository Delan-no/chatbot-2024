import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardAdmin from '../views/DashboardAdmin.vue'
import EditionScenario from '../views/EditionScenario.vue'
import ConfigScenario from '../views/ConfigScenario.vue'
import Inscription from '../views/Inscription.vue'
import UserProfil from '../views/UserProfil.vue'
import Connexion from '../views/Connexion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/config',
      name: 'config',
      component: ConfigScenario
    },
    {
      path: '/scenario',
      name: 'scenario',
      component: DashboardAdmin
    },
    {
      path: '/edition',
      name: 'edition',
      component: EditionScenario,
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: Connexion
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: Inscription,
    },
    
    {
      path: '/profil',
      name: 'profil',
      component: UserProfil,
    },
    
 

  ]
})

export default router
