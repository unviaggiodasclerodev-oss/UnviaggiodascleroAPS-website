<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDarkMode } from '../composables/useDarkMode.js'

const { isDark, toggle } = useDarkMode()
const isScrolled = ref(false)
const mobileOpen = ref(false)
const scrollProgress = ref(0)

const navLinks = [
  { label: 'Chi siamo', href: '#chi-siamo' },
  { label: '2027', href: '#viaggio-2027' },
  { label: 'Associazione', href: '#associazione' },
  { label: 'Contattaci', href: '#contatti' },
  { label: 'FAQ', href: '#faq' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 60
  const docH = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docH > 0 ? (window.scrollY / docH) * 100 : 0
}
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function scrollTo(href) {
  mobileOpen.value = false
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
    isScrolled
      ? (isDark ? 'bg-stone-900/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-white/95 backdrop-blur-md border-b border-stone-200 py-3')
      : 'bg-transparent py-5'
  ]">
    <!-- Scroll progress bar -->
    <div class="absolute top-0 left-0 h-[2px] bg-accent transition-all duration-100"
      :style="{ width: scrollProgress + '%' }" />
    <div class="section-pad flex items-center justify-between">
      <a href="#hero" @click.prevent="scrollTo('#hero')">
        <img :src="(!isScrolled || isDark) ? '/logo.png' : '/logo-light.jpg'" alt="Un Viaggio da Sclero APS" class="h-14 w-auto object-contain" />
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a v-for="link in navLinks" :key="link.label"
          :href="link.href" @click.prevent="scrollTo(link.href)"
          :class="['text-sm font-medium tracking-wide transition-colors hover:text-accent',
            isScrolled ? (isDark ? 'text-white/70' : 'text-stone-700') : 'text-white/80']">
          {{ link.label }}
        </a>

        <button @click="toggle"
          :class="['w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:border-accent cursor-pointer',
            isScrolled ? (isDark ? 'border-white/20 text-white/60' : 'border-stone-300 text-stone-600') : 'border-white/30 text-white/70']"
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

        <a href="#contatti" @click.prevent="scrollTo('#contatti')"
          class="bg-accent text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#cf5e0e] transition-colors">
          Scrivici
        </a>
      </nav>

      <div class="md:hidden flex items-center gap-3">
        <button @click="toggle" :class="['p-1.5', isScrolled && !isDark ? 'text-stone-800' : 'text-white']">
          <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>
        <button :class="['p-2', isScrolled && !isDark ? 'text-stone-800' : 'text-white']"
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

    <Transition name="slide">
      <div v-if="mobileOpen"
        :class="['md:hidden border-t section-pad py-6 flex flex-col gap-5', isDark ? 'bg-stone-900 border-white/10' : 'bg-white border-stone-200']">
        <a v-for="link in navLinks" :key="link.label"
          :href="link.href" @click.prevent="scrollTo(link.href)"
          :class="['text-base font-medium hover:text-accent transition-colors', isDark ? 'text-white/80' : 'text-stone-800']">
          {{ link.label }}
        </a>
        <a href="#contatti" @click.prevent="scrollTo('#contatti')"
          class="bg-accent text-white text-sm font-semibold px-5 py-3 rounded-full text-center">
          Scrivici
        </a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
