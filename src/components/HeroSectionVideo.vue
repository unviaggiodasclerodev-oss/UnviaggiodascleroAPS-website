<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const muted = ref(true)
const videoEl = ref(null)

onMounted(() => setTimeout(() => (visible.value = true), 100))

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

// Unmuting only works as a direct result of a user gesture (browser autoplay
// policy) — this click handler is that gesture, so it's always allowed.
function toggleAudio() {
  if (!videoEl.value) return
  muted.value = !muted.value
  videoEl.value.muted = muted.value
  if (!muted.value) videoEl.value.play().catch(() => {})
}
</script>

<template>
  <section id="hero" class="relative h-screen min-h-[640px] flex items-end justify-center overflow-hidden film-grain">
    <!-- Video background — fills the frame and crops to fit on every screen size/ratio -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <video
        ref="videoEl"
        class="w-full h-full object-cover object-center"
        src="/trailer.mp4"
        poster="/images/michele.JPG"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
      ></video>
      <!-- Progressive gradient from bottom (deep black) to top (light) -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10"></div>
      <!-- Warm accent overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#E8701A]/12 via-transparent to-transparent mix-blend-overlay"></div>
      <!-- Subtle vignette edges -->
      <div class="absolute inset-0" style="background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.45) 100%)"></div>
    </div>

    <!-- Audio toggle -->
    <button
      @click="toggleAudio"
      :aria-label="muted ? 'Attiva audio' : 'Disattiva audio'"
      class="hero-item absolute top-24 right-5 md:right-8 z-[60] w-11 h-11 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/35 transition-all"
      :class="visible ? 'hero-visible' : 'hero-hidden'"
    >
      <svg v-if="muted" class="w-4.5 h-4.5" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5L6 9H2v6h4l5 4V5z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 9l-6 6m0-6l6 6" />
      </svg>
      <svg v-else class="w-4.5 h-4.5" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5L6 9H2v6h4l5 4V5z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" />
      </svg>
    </button>

    <!-- Content — staggered per-element entrance -->
    <div class="relative z-10 w-full section-pad pb-20 md:pb-28">

      <!-- Badge pill -->
      <div
        class="hero-item inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-xs text-white/90 mb-8 tracking-widest uppercase font-medium"
        :class="visible ? 'hero-visible' : 'hero-hidden'"
        :style="{ transitionDelay: '0ms' }"
      >
        <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        Il Viaggio 2027
      </div>

      <!-- Headline -->
      <h1
        class="hero-item font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-7 max-w-4xl"
        :class="visible ? 'hero-visible' : 'hero-hidden'"
        :style="{ transitionDelay: '120ms' }"
      >
        Un Viaggio<br>
        <span class="text-accent">da Sclero</span>
      </h1>

      <!-- Subtitle -->
      <p
        class="hero-item text-white/75 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
        :class="visible ? 'hero-visible' : 'hero-hidden'"
        :style="{ transitionDelay: '280ms' }"
      >
        Oltre 2.000 chilometri a piedi attraverso l'Italia.<br class="hidden sm:block">
        Non è simbolico. Succede davvero.
      </p>

      <!-- CTA buttons -->
      <div
        class="hero-item flex flex-col sm:flex-row gap-4"
        :class="visible ? 'hero-visible' : 'hero-hidden'"
        :style="{ transitionDelay: '440ms' }"
      >
        <button
          @click="scrollTo('#chi-siamo')"
          class="group bg-accent text-white font-semibold px-9 py-4 rounded-full hover:bg-[#cf5e0e] transition-all text-sm tracking-wide shadow-lg shadow-accent/25 hover:shadow-accent/40"
        >
          Scopri il progetto
          <span class="inline-block ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </button>
        <button
          @click="scrollTo('#viaggio-2027')"
          class="bg-white/10 backdrop-blur-sm border border-white/25 text-white font-medium px-9 py-4 rounded-full hover:bg-white/20 hover:border-white/40 transition-all text-sm tracking-wide"
        >
          Il Viaggio 2027
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="hero-item absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30"
      :class="visible ? 'hero-visible' : 'hero-hidden'"
      :style="{ transitionDelay: '660ms' }"
    >
    </div>
  </section>
</template>
