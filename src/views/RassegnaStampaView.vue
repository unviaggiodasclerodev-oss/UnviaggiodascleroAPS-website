<script setup lang="ts">
import { ref, computed } from 'vue'
import { articoli, type ArticoloRassegna, type CategoriaArticolo } from '../data/rassegna.ts'
import { videos, type VideoMedia } from '../data/videos.ts'
import { useScrollReveal } from '../composables/useScrollReveal.js'
import JourneyLine from '../components/JourneyLine.vue'

useScrollReveal()

// ── Tab navigation ───────────────────────────────────────────────────────────
const activeTab = ref<'video' | 'stampa'>('video')

// ── Video ─────────────────────────────────────────────────────────────────────
const videoAperto = ref<VideoMedia | null>(null)
const featuredVideo = computed(() => videos.find(v => v.featured) ?? videos[0] ?? null)
const altriVideo = computed(() => videos.filter(v => v !== featuredVideo.value))

function apriVideo(v: VideoMedia) { videoAperto.value = v }
function chiudiVideo() { videoAperto.value = null }

function embedUrl(v: VideoMedia) {
  const start = v.startTime ? `&start=${v.startTime}` : ''
  return `https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1${start}&rel=0&modestbranding=1`
}
function thumbUrl(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
}

// ── Articoli ──────────────────────────────────────────────────────────────────
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

function apriLightbox(articolo: ArticoloRassegna) { articoloSelezionato.value = articolo }
function chiudiLightbox() { articoloSelezionato.value = null }
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
              <p class="text-xs font-semibold tracking-widest uppercase mb-4" style="color:#F05022">Contenuti</p>
              <h1 class="text-4xl md:text-5xl font-bold tx mb-4">Media</h1>
              <p class="tx2 text-lg max-w-xl mx-auto leading-relaxed">
                Video, articoli, news e apparizioni sui media
              </p>
            </div>

            <!-- Tab nav -->
            <div class="flex items-center justify-center gap-2 mb-12">
              <button
                @click="activeTab = 'video'"
                :class="[
                  'flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200',
                  activeTab === 'video'
                    ? 'bg-accent text-white shadow-md shadow-accent/20'
                    : 'bg-stone-100 dark:bg-stone-800 tx2 hover:bg-stone-200 dark:hover:bg-stone-700'
                ]"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Video
              </button>
              <button
                @click="activeTab = 'stampa'"
                :class="[
                  'flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200',
                  activeTab === 'stampa'
                    ? 'bg-accent text-white shadow-md shadow-accent/20'
                    : 'bg-stone-100 dark:bg-stone-800 tx2 hover:bg-stone-200 dark:hover:bg-stone-700'
                ]"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                </svg>
                Rassegna Stampa
              </button>
            </div>

            <!-- ══ VIDEO TAB ═══════════════════════════════════════════════════ -->
            <div v-show="activeTab === 'video'">

              <!-- Empty state -->
              <div v-if="videos.length === 0" class="text-center py-20">
                <div class="w-20 h-20 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mx-auto mb-6">
                  <svg class="w-9 h-9 tx3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h2 class="text-xl font-semibold tx mb-2">Nessun video disponibile</h2>
                <p class="tx2">I video verranno caricati a breve.</p>
              </div>

              <template v-else>
                <!-- Featured video -->
                <div v-if="featuredVideo" class="mb-10 reveal max-w-3xl mx-auto">
                  <div
                    class="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group border border-stone-200/50 dark:border-white/10"
                    style="background:#0A0A0A;"
                    @click="apriVideo(featuredVideo)"
                  >
                    <!-- Thumbnail -->
                    <div class="aspect-video relative">
                      <img
                        :src="thumbUrl(featuredVideo.youtubeId)"
                        :alt="featuredVideo.titolo"
                        class="w-full h-full object-cover opacity-75 group-hover:opacity-60 transition-opacity duration-300"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                      <!-- Play button -->
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div
                          class="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110"
                          style="background:#F05022;"
                        >
                          <svg class="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>

                      <!-- Info bottom -->
                      <div class="absolute bottom-0 left-0 right-0 p-5">
                        <div class="flex items-center gap-2 mb-2">
                          <span class="inline-block text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                            style="background:#F05022; color:#fff;">
                            {{ featuredVideo.fonte ?? 'Video' }}
                          </span>
                          <time class="text-white/60 text-xs">{{ formatData(featuredVideo.data) }}</time>
                        </div>
                        <h2 class="text-white text-lg md:text-xl font-bold font-display uppercase leading-tight">
                          {{ featuredVideo.titolo }}
                        </h2>
                        <p v-if="featuredVideo.descrizione" class="text-white/65 mt-1 text-xs leading-relaxed">
                          {{ featuredVideo.descrizione }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Grid altri video -->
                <div v-if="altriVideo.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div
                    v-for="v in altriVideo"
                    :key="v.id"
                    class="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-900"
                    @click="apriVideo(v)"
                  >
                    <!-- Thumbnail -->
                    <div class="aspect-video relative" style="background:#0A0A0A;">
                      <img
                        :src="thumbUrl(v.youtubeId)"
                        :alt="v.titolo"
                        class="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                      />
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110"
                          style="background:#F05022;">
                          <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <!-- Info -->
                    <div class="p-4">
                      <div class="flex items-center gap-2 mb-2">
                        <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent uppercase tracking-wide">
                          {{ v.fonte ?? 'Video' }}
                        </span>
                        <time class="text-xs tx3">{{ formatData(v.data) }}</time>
                      </div>
                      <h3 class="tx font-semibold text-sm leading-snug line-clamp-2">{{ v.titolo }}</h3>
                      <p v-if="v.descrizione" class="tx2 text-xs mt-1 leading-relaxed line-clamp-2">{{ v.descrizione }}</p>
                    </div>
                  </div>
                </div>
              </template>
            </div>

            <!-- ══ STAMPA TAB ══════════════════════════════════════════════════ -->
            <div v-show="activeTab === 'stampa'">

              <!-- Filtri categoria -->
              <div class="flex flex-wrap justify-center gap-2 mb-10">
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

              <!-- Griglia articoli -->
              <div v-if="articoliFiltrati.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article
                  v-for="articolo in articoliFiltrati"
                  :key="articolo.id"
                  class="bg-stone-50 dark:bg-stone-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group border border-stone-200/50 dark:border-white/10"
                  @click="apriLightbox(articolo)"
                >
                  <!-- Immagine -->
                  <div v-if="articolo.immagine" class="aspect-video overflow-hidden bg-stone-200 dark:bg-stone-700">
                    <img
                      :src="'/rassegna/' + articolo.immagine"
                      :alt="articolo.titolo"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div v-else class="aspect-video bg-stone-100 dark:bg-stone-700 flex items-center justify-center">
                    <svg class="w-10 h-10 tx3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                    </svg>
                  </div>
                  <!-- Contenuto -->
                  <div class="p-5">
                    <div class="flex items-center gap-3 mb-3">
                      <span :class="[
                        'text-xs font-semibold px-2 py-1 rounded-full uppercase',
                        articolo.categoria === 'news'       ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                        articolo.categoria === 'intervista' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' :
                        articolo.categoria === 'radio'      ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300' :
                        articolo.categoria === 'tv'         ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' :
                        'bg-stone-200 text-stone-700 dark:bg-stone-600 dark:text-stone-300'
                      ]">{{ articolo.categoria }}</span>
                      <span class="text-sm tx2">{{ articolo.fonte }}</span>
                    </div>
                    <h2 class="text-base font-semibold tx mb-2 line-clamp-2">{{ articolo.titolo }}</h2>
                    <p class="text-sm tx2 line-clamp-3 mb-3">{{ articolo.descrizione }}</p>
                    <time class="text-xs tx3">{{ formatData(articolo.data) }}</time>
                  </div>
                </article>
              </div>

              <!-- Empty state articoli -->
              <div v-else class="text-center py-16">
                <div class="w-16 h-16 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mx-auto mb-4">
                  <svg class="w-7 h-7 tx3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                  </svg>
                </div>
                <h2 class="text-xl font-semibold tx mb-2">Nessun articolo trovato</h2>
                <p class="tx2">Non ci sono articoli in questa categoria.</p>
              </div>
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

    <!-- ══ Video modal ════════════════════════════════════════════════════════ -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="videoAperto"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          @click="chiudiVideo"
        >
          <div
            class="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-black"
            @click.stop
          >
            <!-- Close -->
            <div class="flex items-center justify-between px-5 py-3 bg-black/60">
              <p class="text-white font-semibold text-sm truncate pr-4">{{ videoAperto.titolo }}</p>
              <button
                @click="chiudiVideo"
                class="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors shrink-0"
                aria-label="Chiudi"
              >
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <!-- iframe -->
            <div class="aspect-video">
              <iframe
                :src="embedUrl(videoAperto)"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ══ Articolo lightbox ═══════════════════════════════════════════════════ -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="articoloSelezionato"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          @click="chiudiLightbox"
        >
          <div class="bg-white dark:bg-stone-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto relative" @click.stop>
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
                <span class="text-sm tx2">{{ articoloSelezionato.fonte }}</span>
                <span class="tx3">•</span>
                <time class="text-sm tx2">{{ formatData(articoloSelezionato.data) }}</time>
              </div>
              <h2 class="text-2xl font-bold tx mb-4">{{ articoloSelezionato.titolo }}</h2>
              <p class="tx2 mb-6">{{ articoloSelezionato.descrizione }}</p>
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
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
