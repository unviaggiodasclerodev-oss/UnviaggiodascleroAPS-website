<script setup lang="ts">
import { ref, computed } from 'vue'
import { articoli, type ArticoloRassegna, type CategoriaArticolo } from '../data/rassegna.ts'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()

const categoriaSelezionata = ref<CategoriaArticolo | 'tutti'>('tutti')
const articoloSelezionato = ref<ArticoloRassegna | null>(null)

const categorie: { valore: CategoriaArticolo | 'tutti'; label: string }[] = [
  { valore: 'tutti', label: 'Tutti' },
  { valore: 'news', label: 'News' },
  { valore: 'intervista', label: 'Interviste' },
  { valore: 'articolo', label: 'Articoli' },
  { valore: 'radio', label: 'Radio' },
  { valore: 'tv', label: 'TV' },
]

const articoliFiltrati = computed(() => {
  const ordinati = [...articoli].sort((a, b) => 
    new Date(b.data).getTime() - new Date(a.data).getTime()
  )
  if (categoriaSelezionata.value === 'tutti') return ordinati
  return ordinati.filter(a => a.categoria === categoriaSelezionata.value)
})

function formatData(data: string): string {
  const d = new Date(data)
  return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}

function apriLightbox(articolo: ArticoloRassegna) {
  articoloSelezionato.value = articolo
}

function chiudiLightbox() {
  articoloSelezionato.value = null
}
</script>

<template>
  <div>
    <main id="main-content" class="pt-32 pb-16">
      <section class="section-pad">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Rassegna Stampa</h1>
            <p class="text-lg text-stone-600 dark:text-stone-400">
              Tutti gli articoli, le news e le apparizioni sui media
            </p>
          </div>

          <!-- Filtri categoria -->
          <div class="flex flex-wrap justify-center gap-2 mb-10">
            <button
              v-for="cat in categorie"
              :key="cat.valore"
              @click="categoriaSelezionata = cat.valore"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                categoriaSelezionata === cat.valore
                  ? 'bg-accent text-white'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
              ]"
            >
              {{ cat.label }}
            </button>
          </div>

          <!-- Griglia articoli -->
          <div v-if="articoliFiltrati.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article
              v-for="articolo in articoliFiltrati"
              :key="articolo.id"
              class="bg-stone-50 dark:bg-stone-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              @click="apriLightbox(articolo)"
            >
              <!-- Immagine -->
              <div v-if="articolo.immagina" class="aspect-video overflow-hidden bg-stone-200 dark:bg-stone-700">
                <img 
                  :src="'/rassegna/' + articolo.immagine" 
                  :alt="articolo.titolo"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div v-else class="aspect-video bg-stone-200 dark:bg-stone-700 flex items-center justify-center">
                <span class="text-4xl">📰</span>
              </div>

              <!-- Contenuto -->
              <div class="p-5">
                <div class="flex items-center gap-3 mb-3">
                  <span :class="[
                    'text-xs font-semibold px-2 py-1 rounded-full uppercase',
                    articolo.categoria === 'news' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                    articolo.categoria === 'intervista' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' :
                    articolo.categoria === 'radio' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300' :
                    articolo.categoria === 'tv' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' :
                    'bg-stone-200 text-stone-700 dark:bg-stone-600 dark:text-stone-300'
                  ]">
                    {{ articolo.categoria }}
                  </span>
                  <span class="text-sm text-stone-500">{{ articolo.fonte }}</span>
                </div>
                <h2 class="text-lg font-semibold mb-2 line-clamp-2">{{ articolo.titolo }}</h2>
                <p class="text-sm text-stone-600 dark:text-stone-400 line-clamp-3 mb-3">
                  {{ articolo.descrizione }}
                </p>
                <time class="text-xs text-stone-400">{{ formatData(articolo.data) }}</time>
              </div>
            </article>
          </div>

          <!-- Empty state -->
          <div v-else class="text-center py-16">
            <div class="text-6xl mb-4">📰</div>
            <h2 class="text-xl font-semibold mb-2">Nessun articolo trovato</h2>
            <p class="text-stone-600 dark:text-stone-400">
              Non ci sono articoli in questa categoria.
            </p>
          </div>

          <!-- Info per giornalisti -->
          <div class="mt-16 text-center p-8 bg-stone-100 dark:bg-stone-900 rounded-xl max-w-2xl mx-auto">
            <p class="text-stone-600 dark:text-stone-400">
              Se sei un giornalista e vuoi contattare l'associazione per richiedere informazioni o materiale stampa,
              visita la nostra pagina <router-link to="/contatti" class="text-accent hover:underline">Contatti</router-link>
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="articoloSelezionato" 
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          @click="chiudiLightbox"
        >
          <div class="bg-white dark:bg-stone-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto" @click.stop>
            <div class="p-6">
              <button 
                @click="chiudiLightbox"
                class="absolute top-4 right-4 p-2 rounded-full bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
              
              <div v-if="articoloSelezionato.immagine" class="mb-6">
                <img 
                  :src="'/rassegna/' + articoloSelezionato.immagine" 
                  :alt="articoloSelezionato.titolo"
                  class="w-full rounded-lg"
                />
              </div>
              
              <div class="flex items-center gap-3 mb-4">
                <span class="text-sm text-stone-500">{{ articoloSelezionato.fonte }}</span>
                <span class="text-stone-300">•</span>
                <time class="text-sm text-stone-500">{{ formatData(articoloSelezionato.data) }}</time>
              </div>
              
              <h2 class="text-2xl font-bold mb-4">{{ articoloSelezionato.titolo }}</h2>
              <p class="text-stone-600 dark:text-stone-300 mb-6">{{ articoloSelezionato.descrizione }}</p>
              
              <a 
                v-if="articoloSelezionato.link"
                :href="articoloSelezionato.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-accent hover:underline"
              >
                Leggi l'articolo completo
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>