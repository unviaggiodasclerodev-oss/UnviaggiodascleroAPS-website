<script setup lang="ts">
import { ref, computed } from 'vue'
import { articoli, type ArticoloRassegna, type CategoriaArticolo } from '../data/rassegna.ts'
import { useScrollReveal } from '../composables/useScrollReveal.js'
import JourneyLine from '../components/JourneyLine.vue'

useScrollReveal()

const categoriaSelezionata = ref<CategoriaArticolo | 'tutti'>('tutti')

const categorie: { valore: CategoriaArticolo | 'tutti'; label: string }[] = [
  { valore: 'tutti', label: 'Tutti' },
  { valore: 'articolo', label: 'Articoli' },
  { valore: 'tv', label: 'TV / Video' },
  { valore: 'intervista', label: 'Interviste' },
  { valore: 'radio', label: 'Radio' },
]

const articoliFiltrati = computed(() => {
  const ordinati = [...articoli].sort((a, b) =>
    new Date(b.data).getTime() - new Date(a.data).getTime()
  )
  if (categoriaSelezionata.value === 'tutti') return ordinati
  return ordinati.filter(a => a.categoria === categoriaSelezionata.value)
})

const articoliPerMese = computed(() => {
  const map = new Map<string, ArticoloRassegna[]>()
  for (const a of articoliFiltrati.value) {
    const d = new Date(a.data)
    const chiave = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
    if (!map.has(chiave)) map.set(chiave, [])
    map.get(chiave)!.push(a)
  }
  return [...map.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([chiave, lista]) => {
      const d = new Date(chiave + '-01')
      const mese = d.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })
      return { chiave, mese: mese.charAt(0).toUpperCase() + mese.slice(1), articoli: lista }
    })
})

function formatData(data: string): string {
  const d = new Date(data)
  return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}

function imgSrc(immagine: string): string {
  if (immagine.startsWith('http') || immagine.startsWith('/')) return immagine
  return '/rassegna/' + immagine
}
</script>

<template>
  <div>
    <main id="main-content" class="pt-32 pb-16">
      <div class="journey-host">
        <JourneyLine />
        <section class="section-pad">
          <div class="max-w-6xl mx-auto">

            <!-- Header -->
            <div class="text-center mb-10 reveal">
              <span class="accent-bar accent-bar-center"></span>
              <p class="text-xs font-semibold tracking-widest uppercase mb-4" style="color:#F05022">Rassegna</p>
              <h1 class="text-4xl md:text-5xl font-bold tx mb-4">Media</h1>
              <p class="tx2 text-lg max-w-xl mx-auto leading-relaxed">
                Articoli, video, interviste e apparizioni sui media
              </p>
            </div>

            <!-- Filtri categoria -->
            <div class="flex flex-wrap justify-center gap-2 mb-12">
              <button
                v-for="cat in categorie"
                :key="cat.valore"
                @click="categoriaSelezionata = cat.valore"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  categoriaSelezionata === cat.valore
                    ? 'bg-accent text-white shadow-md shadow-accent/20'
                    : 'bg-stone-100 dark:bg-stone-800 tx2 hover:bg-stone-200 dark:hover:bg-stone-700'
                ]"
              >
                {{ cat.label }}
              </button>
            </div>

            <!-- Archivio per mese -->
            <div v-if="articoliFiltrati.length > 0" class="space-y-14">
              <div v-for="gruppo in articoliPerMese" :key="gruppo.chiave">

                <!-- Intestazione mese -->
                <div class="flex items-center gap-3 mb-7">
                  <div class="w-1 h-7 rounded-full" style="background:#F05022"></div>
                  <h3 class="text-xl font-bold tx">{{ gruppo.mese }}</h3>
                  <div class="flex-1 h-px bg-stone-200 dark:bg-stone-700"></div>
                  <span class="text-xs tx3 font-medium tabular-nums">
                    {{ gruppo.articoli.length }} {{ gruppo.articoli.length === 1 ? 'articolo' : 'articoli' }}
                  </span>
                </div>

                <!-- Griglia articoli del mese -->
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <a
                    v-for="articolo in gruppo.articoli"
                    :key="articolo.id"
                    :href="articolo.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-stone-50 dark:bg-stone-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 group border border-stone-200/50 dark:border-white/10 flex flex-col no-underline"
                  >
                    <!-- Thumbnail -->
                    <div class="aspect-[16/9] overflow-hidden relative shrink-0">
                      <img
                        :src="imgSrc(articolo.immagine!)"
                        :alt="articolo.titolo"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <!-- Badge categoria -->
                      <div class="absolute top-2.5 left-2.5">
                        <span :class="[
                          'text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow',
                          articolo.categoria === 'articolo'   ? 'bg-blue-600 text-white' :
                          articolo.categoria === 'intervista' ? 'bg-purple-600 text-white' :
                          articolo.categoria === 'radio'      ? 'bg-orange-500 text-white' :
                          articolo.categoria === 'tv'         ? 'bg-red-600 text-white' :
                          'bg-stone-700 text-white'
                        ]">{{ articolo.categoria }}</span>
                      </div>
                      <!-- Overlay play per tv/video -->
                      <div v-if="articolo.categoria === 'tv'" class="absolute inset-0 flex items-center justify-center">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center bg-black/50 group-hover:bg-black/70 transition-colors">
                          <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <!-- Testo -->
                    <div class="p-4 flex flex-col flex-1">
                      <div class="flex items-center gap-2 mb-2">
                        <span class="text-xs font-semibold" style="color:#F05022">{{ articolo.fonte }}</span>
                        <span class="tx3 text-xs">·</span>
                        <time class="text-xs tx3">{{ formatData(articolo.data) }}</time>
                      </div>
                      <h2 class="text-sm font-semibold tx line-clamp-2 leading-snug mb-1.5">{{ articolo.titolo }}</h2>
                      <p class="text-xs tx2 line-clamp-2 leading-relaxed flex-1">{{ articolo.descrizione }}</p>
                      <div class="mt-3 flex items-center gap-1 text-xs font-medium" style="color:#F05022">
                        <span>{{ articolo.categoria === 'tv' ? 'Guarda' : 'Leggi' }}</span>
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!-- Empty state -->
            <div v-else class="text-center py-16">
              <div class="w-16 h-16 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7 tx3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                </svg>
              </div>
              <h2 class="text-xl font-semibold tx mb-2">Nessun contenuto trovato</h2>
              <p class="tx2">Non ci sono elementi in questa categoria.</p>
            </div>

            <!-- Info per giornalisti -->
            <div class="mt-16 text-center p-8 bg-stone-100 dark:bg-stone-900 rounded-xl max-w-2xl mx-auto">
              <p class="tx2">
                Se sei un giornalista e vuoi contattare l'associazione per richiedere informazioni o materiale stampa,
                visita la nostra pagina <router-link to="/contatti" class="text-accent hover:underline">Contatti</router-link>
              </p>
            </div>

            <!-- CTA -->
            <div class="mt-16 text-center">
              <span class="accent-bar accent-bar-center mb-8 block"></span>
              <h2 class="text-3xl md:text-4xl font-bold tx mb-4">Vuoi sapere di più sul viaggio?</h2>
              <p class="tx2 text-lg mb-8">Scopri le tappe, il percorso e come partecipare.</p>
              <router-link
                to="/il-viaggio-2027"
                class="group inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-[#cf5e0e] transition-all text-sm tracking-wide shadow-md shadow-accent/20">
                Il Viaggio 2027
                <span class="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
              </router-link>
            </div>

          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
