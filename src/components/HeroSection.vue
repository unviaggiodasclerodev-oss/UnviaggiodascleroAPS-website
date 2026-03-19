<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => setTimeout(() => (visible.value = true), 150))

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="relative h-screen min-h-[640px] flex items-end justify-center overflow-hidden">
    <!-- Photo background -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/IMG_7974.jpg"
        alt="Michele Agostinetto cammina lungo l'Italia"
        class="w-full h-full object-cover object-center"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20"></div>
    </div>

    <!-- Content – anchored to bottom left -->
    <div
      class="relative z-10 w-full section-pad pb-20 md:pb-28 transition-all duration-1000"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-xs text-white/90 mb-7 tracking-widest uppercase font-medium">
        <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
        Il Viaggio 2027
      </div>

      <h1 class="font-display text-5xl md:text-7xl font-bold text-white leading-none mb-6 max-w-3xl">
        Un Viaggio<br>
        <span class="text-accent">da Sclero</span>
      </h1>

      <p class="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
        Oltre 2.000 chilometri a piedi attraverso l'Italia.<br>
        Non è simbolico. Succede davvero.
      </p>

      <div class="flex flex-col sm:flex-row gap-3">
        <button
          @click="scrollTo('#chi-siamo')"
          class="bg-accent text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#cf5e0e] transition-all text-sm tracking-wide shadow-lg"
        >
          Scopri il progetto
        </button>
        <button
          @click="scrollTo('#viaggio-2027')"
          class="bg-white/15 backdrop-blur-sm border border-white/30 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/25 transition-all text-sm tracking-wide"
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
