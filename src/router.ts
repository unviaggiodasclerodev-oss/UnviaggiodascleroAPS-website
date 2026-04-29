import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ChiSiamoView from './views/ChiSiamoView.vue'
import ViaggioView from './views/ViaggioView.vue'
import ServiziView from './views/ServiziView.vue'
import ContattiView from './views/ContattiView.vue'
import RassegnaStampaView from './views/RassegnaStampaView.vue'

interface RouteMeta {
  title: string
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Un Viaggio da Sclero APS' }
  },
  {
    path: '/chi-siamo',
    name: 'chi-siamo',
    component: ChiSiamoView,
    meta: { title: 'Chi Siamo - Un Viaggio da Sclero APS' }
  },
  {
    path: '/viaggio',
    name: 'viaggio',
    component: ViaggioView,
    meta: { title: 'Viaggio 2027 - Un Viaggio da Sclero APS' }
  },
  {
    path: '/servizi',
    name: 'servizi',
    component: ServiziView,
    meta: { title: 'Servizi - Un Viaggio da Sclero APS' }
  },
  {
    path: '/contatti',
    name: 'contatti',
    component: ContattiView,
    meta: { title: 'Contatti - Un Viaggio da Sclero APS' }
  },
  {
    path: '/rassegna-stampa',
    name: 'rassegna-stampa',
    component: RassegnaStampaView,
    meta: { title: 'Rassegna Stampa - Un Viaggio da Sclero APS' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to) => {
  const title = to.meta?.title as string | undefined
  document.title = title || 'Un Viaggio da Sclero APS'
})

export default router