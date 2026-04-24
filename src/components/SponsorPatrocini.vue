<template>
  <section id="sponsor" class="section-light py-10 md:py-20">
    <div class="section-pad">
      <!-- Header -->
      <div class="text-center mb-12 reveal">
        <span class="accent-bar accent-bar-center"></span>
        <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Sponsor & Patrocini</p>
        <h2 class="text-4xl md:text-5xl font-bold tx mb-3">
          I nostri sostenitori
        </h2>
        <p class="tx3 text-lg max-w-2xl mx-auto">Grazie a chi crede nel nostro progetto e ci supporta quotidianamente</p>
      </div>

      <!-- Patrocini -->
      <div v-if="patrocini.length" class="mb-12">
        <h3 class="text-center text-xl font-semibold tx mb-6">Con il patrocinio di</h3>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <a v-for="patrocinio in patrocini" :key="patrocinio.nome"
            :href="patrocinio.link" target="_blank" rel="noopener"
            class="group flex flex-col items-center text-center p-6 rounded-2xl transition-all hover:bg-white/50 dark:hover:bg-white/5">
            <img v-if="patrocinio.logo" :src="patrocinio.logo" :alt="patrocinio.nome"
              class="h-20 w-auto object-contain mb-4" />
            <span v-else class="text-3xl mb-2">🏛️</span>
            <span class="font-semibold tx group-hover:text-accent transition-colors">{{ patrocinio.nome }}</span>
            <span v-if="patrocinio.tipo" class="text-xs text-stone-500 mt-1">{{ patrocinio.tipo }}</span>
          </a>
        </div>
      </div>

      <!-- Sponsor -->
      <!-- <div class="mb-12">
        <h3 class="text-center text-xl font-semibold tx mb-6">Sponsor</h3>
        <div v-if="sponsorList.length" class="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          <span v-for="s in sponsorList" :key="s" class="font-medium tx text-lg px-4 py-2">
            {{ s }}
          </span>
        </div>
        <div v-else class="text-center py-8">
          <p class="tx3 text-lg">Sponsor in fase di definizione</p>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Patrocini (gratuito)
const patrocini = ref([
  {
    nome: 'Comune di Valdobbiadene',
    logo: '/patrocini/Stemma-di-Valdobbiadene.webp',
    link: 'https://comune.valdobbiadene.tv.it',
    tipo: 'Patrocinio'
  }
])

// Sponsor - lista nomi (senza loghi per ora)
const sponsorList = ref([])
</script>

<style scoped>
.card-solid {
  background: #fff;
  border-radius: 1.25rem;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.04);
  border: 1px solid #ececec;
}
html.dark .card-solid {
  background: #181818;
  border-color: #232323;
}
</style>
