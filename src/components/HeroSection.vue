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
      <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10"></div>
      <!-- Subtle warm overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#E8701A]/10 via-transparent to-transparent mix-blend-overlay"></div>
    </div>

    <!-- Content – anchored to bottom left -->
    <div
      class="relative z-10 w-full section-pad pb-20 md:pb-28 transition-all duration-1000"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <div class="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-xs text-white/90 mb-8 tracking-widest uppercase font-medium">
        <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        Il Viaggio 2027
      </div>

      <h1 class="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-7 max-w-4xl">
        Un Viaggio<br>
        <span class="text-accent">da Sclero</span>
      </h1>

      <p class="text-white/75 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
        Oltre 2.000 chilometri a piedi attraverso l'Italia.<br class="hidden sm:block">
        Non è simbolico. Succede davvero.
      </p>

      <div class="flex flex-col sm:flex-row gap-4">
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
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30">
      <span class="text-[10px] tracking-[0.2em] uppercase font-medium">Scorri</span>
      <div class="w-5 h-9 border border-white/30 rounded-full flex items-start justify-center p-1.5">
        <div class="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>
