<template>
  <section v-if="showSection" id="sponsor-patrocini" class="section-light py-24 md:py-32">
    <div class="section-pad">
      <div class="text-center mb-16 reveal">
        <span class="accent-bar accent-bar-center"></span>
        <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Sponsor & Patrocini</p>
        <h2 class="text-4xl md:text-5xl font-bold tx mb-3">
          I nostri sostenitori
        </h2>
        <p class="tx3 text-lg">Grazie a chi ci supporta e crede nel progetto</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="ente in enti" :key="ente.nome" class="card-solid p-8 flex flex-col items-center text-center">
          <img :src="ente.logo" :alt="ente.nome" class="h-24 w-24 object-contain mb-4 rounded-lg shadow-md" />
          <a :href="ente.link" target="_blank" rel="noopener" class="font-bold text-accent text-lg mb-1 hover:underline">{{ ente.nome }}</a>
          <p class="text-sm text-stone-500 mb-2" v-if="ente.ringraziamento">{{ ente.ringraziamento }}</p>
          <img v-if="ente.foto" :src="ente.foto" :alt="'Foto sponsor ' + ente.nome" class="h-16 w-16 object-cover rounded-full mx-auto mb-2" />
          <p class="text-xs text-stone-400" v-if="ente.descrizione">{{ ente.descrizione }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
// Per ora la sezione è visibile, poi si potrà nascondere con showSection.value = false
const showSection = ref(true)
const enti = ref([
  // Esempio placeholder
  {
    nome: 'Nome Ente',
    logo: '/images/placeholder-logo.png',
    link: '#',
    ringraziamento: 'Grazie per il vostro sostegno!',
    foto: '',
    descrizione: 'Breve descrizione o messaggio di ringraziamento.'
  }
])
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
