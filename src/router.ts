import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ChiSiamoView from './views/ChiSiamoView.vue'
import ViaggioView from './views/ViaggioView.vue'
import ServiziView from './views/ServiziView.vue'
import ContattiView from './views/ContattiView.vue'
import RassegnaStampaView from './views/RassegnaStampaView.vue'
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
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
    path: '/il-viaggio-2027',
    name: 'il-progetto-2027',
    component: ViaggioView,
    meta: { title: 'Il Viaggio 2027 - Un Viaggio da Sclero APS' }
  },
  {
    path: '/associazione',
    name: 'associazione',
    component: ServiziView,
    meta: { title: 'Associazione - Un Viaggio da Sclero APS' }
  },
  {
    path: '/contatti',
    name: 'contatti',
    component: ContattiView,
    meta: { title: 'Contatti - Un Viaggio da Sclero APS' }
  },
  {
    path: '/media',
    name: 'media',
    component: RassegnaStampaView,
    meta: { title: 'Media - Un Viaggio da Sclero APS' }
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
  document.title = to.meta.title ?? 'Un Viaggio da Sclero APS'
})

export default router