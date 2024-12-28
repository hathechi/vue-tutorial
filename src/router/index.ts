import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import GamePage from '../views/GamePage.vue'
import DefaultLayout from '../views/layouts/DefaultLayout.vue'
import DraggablePage from '../views/DraggablePage.vue'
const routers = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomePage
      },
      {
        path: '/game',
        name: 'game',
        component: GamePage
      } ,{
        path: '/drag',
        name: 'drag',
        component: DraggablePage
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers
})

export default router
