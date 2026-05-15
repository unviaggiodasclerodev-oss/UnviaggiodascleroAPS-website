import { ref, readonly } from 'vue'

export type ConsensoAnalitici = 'granted' | 'denied'

export interface Preferenze {
  necessari: true
  analitici: ConsensoAnalitici
}

const STORAGE_KEY = 'cookie_consent_v1'

const preferenze = ref<Preferenze | null>(null)
const bannerVisibile = ref(false)

function caricaPreferenze() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      preferenze.value = JSON.parse(raw)
      applicaConsento(preferenze.value!)
    } else {
      bannerVisibile.value = true
    }
  } catch {
    bannerVisibile.value = true
  }
}

function applicaConsento(prefs: Preferenze) {
  if (typeof window.gtag !== 'function') return
  window.gtag('consent', 'update', {
    analytics_storage:  prefs.analitici,
    ad_storage:         'denied',
    ad_user_data:       'denied',
    ad_personalization: 'denied',
  })
  if (prefs.analitici === 'granted') {
    window.gtag('event', 'page_view')
  }
}

function salvaPreferenze(prefs: Preferenze) {
  preferenze.value = prefs
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
  applicaConsento(prefs)
  bannerVisibile.value = false
}

function accettaTutti() {
  salvaPreferenze({ necessari: true, analitici: 'granted' })
}

function soloNecessari() {
  salvaPreferenze({ necessari: true, analitici: 'denied' })
}

function personalizza(analitici: boolean) {
  salvaPreferenze({ necessari: true, analitici: analitici ? 'granted' : 'denied' })
}

function riapriBanner() {
  bannerVisibile.value = true
}

export function useCookieConsent() {
  return {
    preferenze: readonly(preferenze),
    bannerVisibile: readonly(bannerVisibile),
    caricaPreferenze,
    accettaTutti,
    soloNecessari,
    personalizza,
    riapriBanner,
  }
}
