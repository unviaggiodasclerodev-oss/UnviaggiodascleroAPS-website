<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => setTimeout(() => (visible.value = true), 200))

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <!-- Video background -->
    <div class="absolute inset-0 z-0">
      <video
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover"
        poster="/images/cammin.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <!-- Dark overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
    >
      <!-- Badge anno -->
      <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-8 tracking-widest uppercase">
        <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        2027
      </div>

      <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6">
        Un Viaggio<br>
        <span class="text-accent">da Sclero</span>
      </h1>

      <p class="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
        Oltre 2.000 chilometri a piedi attraverso l'Italia.<br>
        Non è simbolico. Succede davvero.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="scrollTo('#chi-siamo')"
          class="bg-accent text-black font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-all text-sm tracking-wide"
        >
          Scopri il progetto
        </button>
        <button
          @click="scrollTo('#viaggio-2027')"
          class="border border-white/30 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-all text-sm tracking-wide"
        >
          Il Viaggio 2027
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
      <span class="text-xs tracking-widest uppercase">Scorri</span>
      <div class="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
    </div>
  </section>
</template>
