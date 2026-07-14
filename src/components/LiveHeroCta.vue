<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useSclHeroes } from '../composables/useSclHeroes'
import { formatLive, heroVideoUrl, LIVE_DURATION_MS } from '../data/sclheroes'

const { publishedHeroes } = useSclHeroes()

// Stays hidden while the page's hero section is in view, so it doesn't cover it on load
const pastHero = ref(false)
let heroObserver: IntersectionObserver | null = null
function onScrollFallback() {
  pastHero.value = window.scrollY > 200
}
onMounted(() => {
  const heroEl = document.getElementById('hero')
  if (heroEl) {
    heroObserver = new IntersectionObserver(([entry]) => { pastHero.value = !entry.isIntersecting })
    heroObserver.observe(heroEl)
  } else {
    window.addEventListener('scroll', onScrollFallback, { passive: true })
    onScrollFallback()
  }
})
onUnmounted(() => {
  heroObserver?.disconnect()
  window.removeEventListener('scroll', onScrollFallback)
})

// Hero whose live hasn't ended yet — automatically moves on to whichever hero
// has the next diretta_at once the current one's window closes
const nextLive = computed(() => {
  const now = Date.now()
  const upcoming = publishedHeroes.value
    .filter(h => h.diretta_at && now < new Date(h.diretta_at).getTime() + LIVE_DURATION_MS)
    .sort((a, b) => new Date(a.diretta_at!).getTime() - new Date(b.diretta_at!).getTime())
  return upcoming[0] ?? null
})

const photoBroken = ref(false)
watch(nextLive, () => { photoBroken.value = false })
const isPlaceholder = computed(() => !nextLive.value?.foto_url || photoBroken.value)

// Dismissal is remembered per-hero, so a new guest's card isn't hidden by an old dismissal
const ctaDismissed = ref(false)
watch(nextLive, (hero) => {
  ctaDismissed.value = hero ? localStorage.getItem(`sclheroes-live-cta-dismissed-${hero.created_at}`) === '1' : false
}, { immediate: true })
function dismissCta() {
  if (!nextLive.value) return
  ctaDismissed.value = true
  localStorage.setItem(`sclheroes-live-cta-dismissed-${nextLive.value.created_at}`, '1')
}
</script>

<template>
  <div v-if="nextLive && !ctaDismissed && pastHero" class="fixed bottom-24 right-6 z-40">
    <button @click="dismissCta" aria-label="Chiudi"
      class="absolute -top-2 -right-2 z-10 w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center shadow hover:bg-stone-700 transition-colors">
      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <a :href="heroVideoUrl(nextLive)" target="_blank" rel="noopener noreferrer"
      class="group relative w-36 flex flex-col rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-105"
      :style="isPlaceholder ? 'min-height:180px;background:#ffffff' : 'min-height:180px;background:#0d0d0d'"
      :aria-label="`Segui la diretta di ${nextLive.nome} su YouTube — ${formatLive(nextLive.diretta_at!)}`">

      <div class="absolute inset-0">
        <img v-if="!isPlaceholder" :src="nextLive.foto_url!" :alt="nextLive.nome" class="w-full h-full object-cover object-top" @error="photoBroken = true" />
        <div v-else class="w-full h-full bg-white flex items-center justify-center">
          <img src="/logo.png" alt="" class="w-14 h-14 object-contain" />
        </div>
        <div v-if="!isPlaceholder" class="absolute inset-0" style="background: linear-gradient(to top, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.15) 100%)"></div>
        <div v-else class="absolute inset-0" style="background: linear-gradient(to top, rgba(255,255,255,0.97) 35%, rgba(255,255,255,0.55) 100%)"></div>
      </div>

      <div class="relative z-10 p-2 flex items-center justify-between gap-1">
        <span class="text-[7px] font-bold tracking-wide uppercase px-1.5 py-0.5 rounded-full backdrop-blur-sm"
          :class="isPlaceholder ? 'text-stone-500 border border-stone-300' : 'text-white/80 border border-white/20'">
          scl<span style="color:#F05022">HEROES</span>
        </span>
        <span class="flex items-center gap-1 shrink-0 text-[7px] font-bold text-white px-1.5 py-0.5 rounded-full" style="background:rgba(240,80,34,0.9)">
          <span class="w-1 h-1 rounded-full bg-white animate-pulse"></span>
          LIVE
        </span>
      </div>

      <div class="relative z-10 mt-auto p-2.5">
        <h3 class="font-bold text-xs leading-tight mb-1" :class="isPlaceholder ? 'text-stone-800' : 'text-white'">{{ nextLive.nome }}</h3>
        <p class="text-[9px] font-medium mb-1.5" :class="isPlaceholder ? 'text-stone-500' : 'text-white/70'">{{ formatLive(nextLive.diretta_at!) }}</p>
        <p class="text-[10px] font-semibold" style="color:#F05022">Guarda la diretta →</p>
      </div>
    </a>
  </div>
</template>
