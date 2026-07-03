<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useDarkMode } from '../composables/useDarkMode.js'
import { useAuth } from '../composables/useAuth'

const { isDark, toggle } = useDarkMode()
const { currentUser } = useAuth()
const router = useRouter()
const route = useRoute()
const isScrolled = ref(false)
const mobileOpen = ref(false)
const scrollProgress = ref(0)
const showBanner = ref(localStorage.getItem('gofundme-banner-dismissed') !== '1')

function dismissBanner() {
  showBanner.value = false
  localStorage.setItem('gofundme-banner-dismissed', '1')
}
const isInternalPage = computed(() => route.path !== '/')
const hasSolidHeader = computed(() => isScrolled.value || isInternalPage.value)
const logoSrc = computed(() => (!hasSolidHeader.value || isDark.value) ? '/logo.png' : '/logo-light.jpg')

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Sostieni il Viaggio', to: '/sostieni' },
  { label: 'Chi siamo', to: '/chi-siamo' },
  { label: 'Il Viaggio 2027', to: '/il-viaggio-2027' },
  { label: 'Associazione', to: '/associazione' },
  { label: 'sclHEROES', to: '/sclheroes' },
  { label: 'Media', to: '/media' },
  { label: 'Contatti', to: '/contatti' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 60
  const docH = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docH > 0 ? (window.scrollY / docH) * 100 : 0
}
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function navigateTo(path) {
  mobileOpen.value = false
  router.push(path)
}
</script>

<template>
  <header :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
    hasSolidHeader
      ? (isDark ? 'bg-stone-900/95 backdrop-blur-md border-b border-white/10' : 'bg-white/95 backdrop-blur-md border-b border-stone-200')
      : 'bg-transparent'
  ]">
    <!-- Scroll progress bar -->
    <div class="absolute top-0 left-0 h-[2px] bg-accent transition-all duration-100"
      :style="{ width: scrollProgress + '%' }" />
    <div :class="['section-pad flex items-center justify-between', hasSolidHeader ? 'py-3' : 'py-5']">
      <router-link to="/" @click.prevent="navigateTo('/')">
        <img :src="logoSrc" alt="Un Viaggio da Sclero APS" class="h-24 w-auto object-contain" />
      </router-link>

      <nav class="hidden md:flex items-center gap-8">
        <router-link v-for="link in navLinks" :key="link.to"
          :to="link.to"
          :class="['text-sm font-medium tracking-wide transition-colors hover:text-accent',
            hasSolidHeader ? (isDark ? 'text-white/70' : 'text-stone-700') : 'text-white/80']">
          {{ link.label }}
        </router-link>

        <!-- Admin shortcut — only visible when authenticated -->
        <router-link
          v-if="currentUser"
          to="/admin"
          :class="['w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:border-accent hover:text-accent',
            hasSolidHeader ? (isDark ? 'border-white/20 text-white/40' : 'border-stone-300 text-stone-400') : 'border-white/30 text-white/50']"
          title="Pannello admin"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        </router-link>

        <button @click="toggle"
          :class="['w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:border-accent cursor-pointer',
            hasSolidHeader ? (isDark ? 'border-white/20 text-white/60' : 'border-stone-300 text-stone-600') : 'border-white/30 text-white/70']"
          :aria-label="isDark ? 'Passa a light mode' : 'Passa a dark mode'">
          <svg v-if="isDark" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>
      </nav>

      <div class="md:hidden flex items-center gap-3">
        <button @click="toggle" :class="['p-1.5', hasSolidHeader && !isDark ? 'text-stone-800' : 'text-white']">
          <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>
        <button :class="['p-2', hasSolidHeader && !isDark ? 'text-stone-800' : 'text-white']"
          @click="mobileOpen = !mobileOpen" aria-label="Menu">
          <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- GoFundMe ribbon -->
    <Transition name="ribbon">
      <div v-if="showBanner && hasSolidHeader"
        :class="isDark ? 'bg-accent/90' : 'bg-accent'">
        <div class="section-pad py-2 flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 min-w-0 flex-wrap">
            <span :class="['text-xs font-semibold text-white shrink-0']">Sostieni il Viaggio 2027 —</span>
            <router-link
              to="/sostieni"
              class="text-xs font-bold text-white underline underline-offset-2 hover:no-underline truncate">
              Sostienici →
            </router-link>
          </div>
          <button @click="dismissBanner"
            class="shrink-0 text-white/80 hover:text-white transition-colors p-0.5"
            aria-label="Chiudi">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </Transition>

    <Transition name="slide">
      <div v-if="mobileOpen"
        :class="['md:hidden border-t section-pad py-6 flex flex-col gap-5', isDark ? 'bg-stone-900 border-white/10' : 'bg-white border-stone-200']">
        <router-link v-for="link in navLinks" :key="link.to"
          :to="link.to" @click="mobileOpen = false"
          :class="['text-base font-medium hover:text-accent transition-colors', isDark ? 'text-white/80' : 'text-stone-800']">
          {{ link.label }}
        </router-link>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-10px); }
.ribbon-enter-active, .ribbon-leave-active { transition: all 0.25s ease; }
.ribbon-enter-from, .ribbon-leave-to { opacity: 0; max-height: 0; }
</style>
