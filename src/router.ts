import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { supabase } from './lib/supabase'
import HomeView from './views/HomeView.vue'
import ChiSiamoView from './views/ChiSiamoView.vue'
import ViaggioView from './views/ViaggioView.vue'
import ServiziView from './views/ServiziView.vue'
import ContattiView from './views/ContattiView.vue'
import RassegnaStampaView from './views/RassegnaStampaView.vue'
import SosteniView from './views/SosteniView.vue'
import SclHeroesView from './views/SclHeroesView.vue'
import PatrociniView from './views/PatrociniView.vue'
import CookiePolicyView from './views/CookiePolicyView.vue'
import StampaView from './views/StampaView.vue'
import AdminView from './views/AdminView.vue'
import AdminLoginView from './views/AdminLoginView.vue'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    requiresAuth?: boolean
    /** Kept out of nav/footer/sitemap and marked noindex — reachable only by typing the URL. */
    noindex?: boolean
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
  { path: '/sostieni',       name: 'sostieni',         component: SosteniView,       meta: { title: 'Sostieni - Un Viaggio da Sclero APS' } },
  { path: '/sclheroes',      name: 'sclheroes',        component: SclHeroesView,     meta: { title: 'sclHEROES - Un Viaggio da Sclero APS' } },
  { path: '/patrocini',      name: 'patrocini',        component: PatrociniView,     meta: { title: 'Patrocini & Partnership - Un Viaggio da Sclero APS' } },
  { path: '/cookie-policy',  name: 'cookie-policy',   component: CookiePolicyView,  meta: { title: 'Cookie Policy - Un Viaggio da Sclero APS' } },

  // Press kit — intentionally not linked from nav/footer/sitemap, see noindex handling below
  { path: '/stampa',         name: 'stampa',          component: StampaView,        meta: { title: 'Area Stampa - Un Viaggio da Sclero APS', noindex: true } },

  // Admin — requires authenticated session
  { path: '/admin',          name: 'admin',            component: AdminView,         meta: { title: 'Admin - sclHEROES', requiresAuth: true } },
  { path: '/admin/login',    name: 'admin-login',      component: AdminLoginView,    meta: { title: 'Admin Login' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return new Promise(resolve => {
      setTimeout(() => resolve({ top: 0, behavior: 'instant' }), 0)
    })
  },
})

// Set page title
router.beforeEach((to) => {
  document.title = to.meta.title ?? 'Un Viaggio da Sclero APS'
})

// noindex pages (e.g. /stampa) get a robots meta tag; every other route keeps the default indexable behavior
router.beforeEach((to) => {
  const ROBOTS_META_ID = 'route-robots-meta'
  const existing = document.getElementById(ROBOTS_META_ID)
  if (to.meta.noindex) {
    if (existing) {
      existing.setAttribute('content', 'noindex, nofollow')
    } else {
      const meta = document.createElement('meta')
      meta.id = ROBOTS_META_ID
      meta.name = 'robots'
      meta.content = 'noindex, nofollow'
      document.head.appendChild(meta)
    }
  } else if (existing) {
    existing.remove()
  }
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
