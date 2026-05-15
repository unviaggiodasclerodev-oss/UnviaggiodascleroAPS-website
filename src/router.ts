import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { supabase } from './lib/supabase'
import HomeView from './views/HomeView.vue'
import ChiSiamoView from './views/ChiSiamoView.vue'
import ViaggioView from './views/ViaggioView.vue'
import ServiziView from './views/ServiziView.vue'
import ContattiView from './views/ContattiView.vue'
import RassegnaStampaView from './views/RassegnaStampaView.vue'
import SclHeroesView from './views/SclHeroesView.vue'
import CookiePolicyView from './views/CookiePolicyView.vue'
import AdminView from './views/AdminView.vue'
import AdminLoginView from './views/AdminLoginView.vue'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    requiresAuth?: boolean
  }
}

declare global {
  function gtag(...args: unknown[]): void
}

const routes: RouteRecordRaw[] = [
  { path: '/',               name: 'home',             component: HomeView,          meta: { title: 'Un Viaggio da Sclero APS' } },
  { path: '/chi-siamo',      name: 'chi-siamo',        component: ChiSiamoView,      meta: { title: 'Chi Siamo - Un Viaggio da Sclero APS' } },
  { path: '/il-viaggio-2027',name: 'il-progetto-2027', component: ViaggioView,       meta: { title: 'Il Viaggio 2027 - Un Viaggio da Sclero APS' } },
  { path: '/associazione',   name: 'associazione',     component: ServiziView,       meta: { title: 'Associazione - Un Viaggio da Sclero APS' } },
  { path: '/contatti',       name: 'contatti',         component: ContattiView,      meta: { title: 'Contatti - Un Viaggio da Sclero APS' } },
  { path: '/media',          name: 'media',            component: RassegnaStampaView,meta: { title: 'Media - Un Viaggio da Sclero APS' } },
  { path: '/sclheroes',      name: 'sclheroes',        component: SclHeroesView,     meta: { title: 'sclHEROES - Un Viaggio da Sclero APS' } },
  { path: '/cookie-policy',  name: 'cookie-policy',   component: CookiePolicyView,  meta: { title: 'Cookie Policy - Un Viaggio da Sclero APS' } },

  // Admin — requires authenticated session
  { path: '/admin',          name: 'admin',            component: AdminView,         meta: { title: 'Admin - sclHEROES', requiresAuth: true } },
  { path: '/admin/login',    name: 'admin-login',      component: AdminLoginView,    meta: { title: 'Admin Login' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})

// Set page title
router.beforeEach((to) => {
  document.title = to.meta.title ?? 'Un Viaggio da Sclero APS'
})

// Guard protected routes
router.beforeEach(async (to) => {
  if (!to.meta.requiresAuth) return true

  const { data } = await supabase.auth.getSession()
  if (!data.session) return { name: 'admin-login' }

  return true
})

// Google Analytics page view tracking
router.afterEach((to) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: to.fullPath,
      page_title: to.meta.title ?? 'Un Viaggio da Sclero APS',
    })
  }
})

export default router
