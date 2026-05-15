<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { supabase } from '../lib/supabase'
import { useScrollReveal } from '../composables/useScrollReveal.js'
import JourneyLine from '../components/JourneyLine.vue'

useScrollReveal()

const form = ref({
  nome: '',
  email: '',
  citta: '',
  storia: '',
  consenso_privacy: false,
})

// --- Autocomplete città ---
const CITTA_ITALIANE = [
  'Agrigento','Alessandria','Ancona','Andria','Aosta','Arezzo','Ascoli Piceno','Asti',
  'Avellino','Bari','Barletta','Belluno','Benevento','Bergamo','Biella','Bologna',
  'Bolzano','Brescia','Brindisi','Cagliari','Caltanissetta','Campobasso','Caserta',
  'Catania','Catanzaro','Chieti','Como','Cosenza','Cremona','Crotone','Cuneo','Enna',
  'Fermo','Ferrara','Firenze','Foggia','Forlì','Frosinone','Genova','Gorizia',
  'Grosseto','Imperia','Isernia',"L'Aquila",'La Spezia','Latina','Lecce','Lecco',
  'Livorno','Lodi','Lucca','Macerata','Mantova','Massa','Matera','Messina','Milano',
  'Modena','Monza','Napoli','Novara','Nuoro','Oristano','Padova','Palermo','Parma',
  'Pavia','Perugia','Pesaro','Pescara','Piacenza','Pisa','Pistoia','Pordenone',
  'Potenza','Prato','Ragusa','Ravenna','Reggio Calabria','Reggio Emilia','Rieti',
  'Rimini','Roma','Rovigo','Salerno','Sassari','Savona','Siena','Siracusa','Sondrio',
  'Taranto','Teramo','Terni','Torino','Trani','Trapani','Trento','Treviso','Trieste',
  'Udine','Varese','Venezia','Verbania','Vercelli','Verona','Vibo Valentia','Vicenza',
  'Viterbo',
  // Comuni più popolosi non capoluogo
  'Acireale','Afragola','Aprilia','Bagheria','Battipaglia','Busto Arsizio','Carpi',
  'Casalnuovo di Napoli','Casoria','Castellammare di Stabia','Cesena','Cinisello Balsamo',
  'Civitavecchia','Collegno','Ercolano','Faenza','Giugliano in Campania','Imola',
  'Misterbianco','Molfetta','Monreale','Mugnano di Napoli','Nola','Novara','Olbia',
  'Pagani','Pomezia','Qualiano','Quarto','Rho','San Giorgio a Cremano','Sesto San Giovanni',
  'Settimo Torinese','Scafati','Somma Vesuviana','Torre Annunziata','Torre del Greco',
  'Vittoria','Vittorio Veneto',
].sort((a, b) => a.localeCompare(b, 'it'))

const cittaQuery = ref('')
const cittaAperta = ref(false)
const cittaWrapper = ref<HTMLElement | null>(null)

const cittaFiltrate = computed(() => {
  const q = cittaQuery.value.trim().toLowerCase()
  if (!q) return CITTA_ITALIANE.slice(0, 8)
  return CITTA_ITALIANE.filter(c => c.toLowerCase().startsWith(q)).slice(0, 10)
})

function selezionaCitta(citta: string) {
  form.value.citta = citta
  cittaQuery.value = citta
  cittaAperta.value = false
}

function onCittaInput() {
  form.value.citta = cittaQuery.value
  cittaAperta.value = true
}

function onClickOutside(e: MouseEvent) {
  if (cittaWrapper.value && !cittaWrapper.value.contains(e.target as Node)) {
    cittaAperta.value = false
  }
}
const foto = ref<File | null>(null)
const fotoPreview = ref<string | null>(null)
const stato = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errore = ref('')

const totaleInvii = ref<number | null>(null)
const wallOfHeroes = ref<{ nome: string; citta: string | null; storia: string; foto_url: string | null; created_at: string }[]>([])

onMounted(async () => {
  document.addEventListener('click', onClickOutside)

  const { count } = await supabase
    .from('sclheroes_submissions')
    .select('*', { count: 'exact', head: true })
  totaleInvii.value = count ?? 0

  const { data } = await supabase
    .from('sclheroes_submissions')
    .select('nome, citta, storia, foto_url, created_at')
    .eq('stato', 'pubblicato')
    .order('created_at', { ascending: false })
  wallOfHeroes.value = data ?? []
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
})

function onFotoChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  if (file.size > 5 * 1024 * 1024) {
    errore.value = 'La foto non può superare i 5 MB.'
    return
  }
  foto.value = file
  fotoPreview.value = URL.createObjectURL(file)
  errore.value = ''
}

function rimuoviFoto() {
  foto.value = null
  fotoPreview.value = null
}

async function invia() {
  errore.value = ''
  stato.value = 'loading'

  try {
    let foto_url: string | null = null

    if (foto.value) {
      const ext = foto.value.name.split('.').pop()
      const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
      const { error: uploadError } = await supabase.storage
        .from('sclheroes-foto')
        .upload(path, foto.value, { contentType: foto.value.type })
      if (uploadError) throw uploadError
      const { data: urlData } = supabase.storage.from('sclheroes-foto').getPublicUrl(path)
      foto_url = urlData.publicUrl
    }

    const { error: insertError } = await supabase.from('sclheroes_submissions').insert({
      nome: form.value.nome.trim(),
      email: form.value.email.trim(),
      citta: form.value.citta.trim() || null,
      storia: form.value.storia.trim(),
      foto_url,
      consenso_privacy: form.value.consenso_privacy,
    })
    if (insertError) throw insertError

    if (totaleInvii.value !== null) totaleInvii.value++
    stato.value = 'success'
  } catch (e: unknown) {
    console.error(e)
    errore.value = 'Si è verificato un errore. Riprova tra qualche minuto.'
    stato.value = 'error'
  }
}

const passi = [
  { numero: '01', titolo: 'Scrivi', descrizione: 'Racconta la tua storia con la sclerosi multipla, liberamente.' },
  { numero: '02', titolo: 'Leggiamo', descrizione: 'Il team di sclHEROES legge ogni storia con cura e attenzione.' },
  { numero: '03', titolo: 'Selezione', descrizione: 'Le storie più toccanti vengono scelte per essere amplificate.' },
  { numero: '04', titolo: 'Live Instagram', descrizione: 'Vieni invitato in diretta per raccontare la tua esperienza.' },
  { numero: '05', titolo: 'Podcast', descrizione: 'La tua storia diventa un episodio del podcast sclHEROES.' },
]
</script>

<template>
  <div class="relative">

    <!-- Foto di sfondo -->
    <div class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <img
        src="/images/cammin.jpg"
        alt=""
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-overlay backdrop-blur-sm"></div>
    </div>

    <main id="main-content" class="pt-32 pb-16">
      <div class="journey-host">
        <JourneyLine />

        <section class="section-pad relative">
          <div class="max-w-3xl mx-auto">

            <!-- Header -->
            <div class="text-center mb-6 reveal">
              <span class="accent-bar accent-bar-center"></span>
              <p class="text-xs font-semibold tracking-widest uppercase mb-4" style="color:#F05022">Community</p>
              <h1 class="text-4xl md:text-5xl font-bold tx mb-4">scl<span style="color:#F05022">HEROES</span></h1>
              <p class="tx2 text-lg max-w-xl mx-auto leading-relaxed">
                Condividi la tua storia: le più toccanti verranno invitate in diretta su Instagram
                per dar voce a una community vera — e diventare episodi di un podcast.
              </p>
            </div>

            <!-- Contatore -->
            <div v-if="totaleInvii !== null" class="text-center mb-6 reveal">
              <p class="text-sm tx3">
                <span class="text-2xl font-bold tx" style="color:#F05022">{{ totaleInvii }}</span>
                <span class="ml-2">storie condivise finora</span>
              </p>
            </div>

            <!-- Percorso dello sclHERO -->
            <div class="mb-14 reveal">
              <h2 class="text-center text-lg font-bold tx mb-8 tracking-wide uppercase text-xs" style="color:#F05022">Il percorso dello sclHERO</h2>
              <div class="relative">
                <!-- Linea connettore (solo desktop) -->
                <div class="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" aria-hidden="true"></div>

                <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div
                    v-for="passo in passi"
                    :key="passo.numero"
                    class="flex flex-col items-center text-center gap-3"
                  >
                    <div
                      class="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md"
                      style="background:#F05022"
                    >
                      {{ passo.numero }}
                    </div>
                    <div>
                      <p class="font-semibold tx text-sm">{{ passo.titolo }}</p>
                      <p class="text-xs tx3 leading-relaxed mt-1">{{ passo.descrizione }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Form / Successo -->
            <Transition name="scl-fade" mode="out-in">

            <div v-if="stato !== 'success'" class="bg-stone-50 dark:bg-stone-800 rounded-2xl p-8 shadow-sm border border-stone-200/50 dark:border-white/10 reveal">

              <form @submit.prevent="invia" novalidate class="space-y-6">

                <!-- Nome -->
                <div>
                  <label class="block text-sm font-semibold tx mb-1.5" for="nome">
                    Nome e cognome <span style="color:#F05022">*</span>
                  </label>
                  <input
                    id="nome"
                    v-model="form.nome"
                    type="text"
                    required
                    autocomplete="name"
                    placeholder="Il tuo nome"
                    class="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 tx text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-sm font-semibold tx mb-1.5" for="email">
                    Email <span style="color:#F05022">*</span>
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    autocomplete="email"
                    placeholder="la-tua@email.it"
                    class="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 tx text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                  />
                </div>

                <!-- Città autocomplete -->
                <div ref="cittaWrapper">
                  <label class="block text-sm font-semibold tx mb-1.5" for="citta">
                    Da dove scrivi?
                    <span class="text-xs tx3 font-normal ml-1">(facoltativo)</span>
                  </label>
                  <div class="relative">
                    <input
                      id="citta"
                      v-model="cittaQuery"
                      type="text"
                      autocomplete="off"
                      placeholder="Cerca la tua città…"
                      class="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 tx text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                      @input="onCittaInput"
                      @focus="cittaAperta = true"
                      @keydown.escape="cittaAperta = false"
                      @keydown.enter.prevent="cittaFiltrate.length && selezionaCitta(cittaFiltrate[0])"
                    />
                    <ul
                      v-if="cittaAperta && cittaFiltrate.length"
                      class="absolute z-50 w-full mt-1 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl shadow-lg max-h-56 overflow-y-auto"
                    >
                      <li
                        v-for="citta in cittaFiltrate"
                        :key="citta"
                        @mousedown.prevent="selezionaCitta(citta)"
                        class="px-4 py-2.5 text-sm tx cursor-pointer hover:bg-stone-100 dark:hover:bg-stone-800 first:rounded-t-xl last:rounded-b-xl"
                      >
                        {{ citta }}
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Storia -->
                <div>
                  <label class="block text-sm font-semibold tx mb-1.5" for="storia">
                    La tua storia <span style="color:#F05022">*</span>
                  </label>
                  <textarea
                    id="storia"
                    v-model="form.storia"
                    required
                    rows="7"
                    placeholder="Raccontaci la tua esperienza con la sclerosi multipla. Non esistono storie troppo piccole o troppo grandi."
                    class="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 tx text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none leading-relaxed"
                  ></textarea>
                  <p class="text-xs tx3 mt-1">{{ form.storia.length }} caratteri</p>
                </div>

                <!-- Foto -->
                <div>
                  <label class="block text-sm font-semibold tx mb-1.5">
                    Una tua foto
                    <span class="text-xs tx3 font-normal ml-1">(facoltativa, max 5 MB)</span>
                  </label>

                  <div v-if="!fotoPreview">
                    <label
                      for="foto"
                      class="flex flex-col items-center justify-center gap-3 w-full h-36 border-2 border-dashed border-stone-300 dark:border-stone-600 rounded-xl cursor-pointer hover:border-accent/60 transition-colors"
                    >
                      <svg class="w-8 h-8 tx3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span class="text-sm tx2">Clicca per caricare una foto</span>
                      <input id="foto" type="file" accept="image/*" class="sr-only" @change="onFotoChange" />
                    </label>
                  </div>

                  <div v-else class="relative">
                    <img :src="fotoPreview" alt="Anteprima" class="w-full h-48 object-cover rounded-xl" />
                    <button
                      type="button"
                      @click="rimuoviFoto"
                      class="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
                      aria-label="Rimuovi foto"
                    >
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- Privacy -->
                <div class="flex items-start gap-3">
                  <input
                    id="privacy"
                    v-model="form.consenso_privacy"
                    type="checkbox"
                    required
                    class="mt-0.5 w-4 h-4 accent-accent shrink-0"
                  />
                  <label for="privacy" class="text-xs tx2 leading-relaxed cursor-pointer">
                    Acconsento al trattamento dei miei dati personali ai sensi del GDPR.
                    La mia storia potrà essere condivisa (anche in forma anonima) nelle attività dell'associazione,
                    previo accordo con me.
                    <router-link to="/contatti" class="text-accent hover:underline ml-1">Contatti</router-link>
                  </label>
                </div>

                <!-- Errore -->
                <p v-if="errore" class="text-sm text-red-500 dark:text-red-400">{{ errore }}</p>

                <!-- Submit -->
                <button
                  type="submit"
                  :disabled="stato === 'loading' || !form.nome || !form.email || !form.storia || !form.consenso_privacy"
                  class="w-full flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-[#cf5e0e] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm tracking-wide shadow-md shadow-accent/20"
                >
                  <svg v-if="stato === 'loading'" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                  </svg>
                  <span>{{ stato === 'loading' ? 'Invio in corso…' : 'Invia la tua storia' }}</span>
                </button>

              </form>
            </div>

            <!-- Successo -->
            <div v-else class="text-center py-20">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl" style="background:#F05022">
                <svg class="w-11 h-11 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold tx mb-4">Grazie, sei uno sclHERO!</h2>
              <p class="tx2 text-lg max-w-md mx-auto leading-relaxed mb-8">
                La tua storia è arrivata. La leggeremo con cura e ti contatteremo via email
                se vorremo invitarti in diretta su Instagram.
              </p>
              <router-link
                to="/"
                class="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full hover:opacity-90 transition-all"
                style="background:#F05022"
              >
                Torna alla home
              </router-link>
            </div>

            </Transition>

          </div>
        </section>

        <!-- Wall of Heroes -->
        <section class="section-pad">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-10 reveal">
              <span class="accent-bar accent-bar-center"></span>
              <p class="text-xs font-semibold tracking-widest uppercase mb-3" style="color:#F05022">Wall of Heroes</p>
              <h2 class="text-3xl font-bold tx">Le storie dei nostri sclHEROES</h2>
            </div>

            <!-- Storie pubblicate -->
            <div v-if="wallOfHeroes.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="hero in wallOfHeroes"
                :key="hero.created_at"
                class="bg-stone-50 dark:bg-stone-800 rounded-2xl overflow-hidden shadow-sm border border-stone-200/50 dark:border-white/10 reveal flex flex-col"
              >
                <div v-if="hero.foto_url" class="h-44 overflow-hidden">
                  <img :src="hero.foto_url" :alt="hero.nome" class="w-full h-full object-cover" />
                </div>
                <div v-else class="h-44 flex items-center justify-center" style="background:#F05022/10">
                  <svg class="w-12 h-12" style="color:#F05022; opacity:0.3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <div class="p-5 flex flex-col gap-2 flex-1">
                  <div>
                    <p class="font-bold tx text-sm">{{ hero.nome }}</p>
                    <p v-if="hero.citta" class="text-xs tx3">{{ hero.citta }}</p>
                  </div>
                  <p class="text-sm tx2 leading-relaxed line-clamp-4 flex-1">{{ hero.storia }}</p>
                </div>
              </div>
            </div>

            <!-- Placeholder se nessuna storia pubblicata -->
            <div v-else class="text-center py-16 reveal">
              <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-stone-100 dark:bg-stone-800">
                <svg class="w-9 h-9 tx3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
              </div>
              <p class="font-semibold tx mb-2">Le prime storie arriveranno presto</p>
              <p class="text-sm tx3 max-w-sm mx-auto">Sii tra i primi sclHEROES: racconta la tua storia e potresti apparire qui.</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<style scoped>
.scl-fade-enter-active { transition: opacity 0.4s ease, transform 0.4s cubic-bezier(.4,0,.2,1); }
.scl-fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.scl-fade-enter-from   { opacity: 0; transform: translateY(16px); }
.scl-fade-leave-to     { opacity: 0; transform: translateY(-8px); }

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
