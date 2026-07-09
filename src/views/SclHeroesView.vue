<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal.js'
import { useSclHeroes } from '../composables/useSclHeroes'
import { useSclHeroesForm } from '../composables/useSclHeroesForm'
import { useCityAutocomplete } from '../composables/useCityAutocomplete'
import { JOURNEY_STEPS } from '../data/sclheroes'
import JourneyLine from '../components/JourneyLine.vue'

useScrollReveal()

const { submissionCount, publishedHeroes, incrementCount } = useSclHeroes()

function formatLive(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long' }) +
    ' · ore ' + d.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
}
const { form, photoPreview, status, errorMessage, handlePhotoChange, removePhoto, submitForm } = useSclHeroesForm(incrementCount)
const { query: cityQuery, isOpen: cityDropdownOpen, containerRef: cityContainerRef, suggestions: citySuggestions, selectCity, handleInput: handleCityInput } = useCityAutocomplete((value) => { form.value.citta = value })
void cityContainerRef // template ref — populated by Vue at runtime
</script>

<template>
  <div class="relative">

    <!-- Background overlay — same treatment as ChiSiamo -->
    <div class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <img src="/images/cammin.jpg" alt="" class="w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-overlay backdrop-blur-sm"></div>
    </div>

    <main id="main-content" class="pt-32 pb-16">
      <div class="journey-host">
        <JourneyLine />

        <section class="section-pad relative">
          <div class="max-w-3xl mx-auto">

            <!-- Page header -->
            <div class="text-center mb-6 reveal">
              <span class="accent-bar accent-bar-center"></span>
              <p class="text-xs font-semibold tracking-widest uppercase mb-4" style="color:#F05022">Community</p>
              <h1 class="text-4xl md:text-5xl font-bold tx mb-4">scl<span style="color:#F05022">HEROES</span></h1>
              <p class="tx2 text-lg max-w-xl mx-auto leading-relaxed">
                Condividi la tua storia: le più toccanti verranno invitate in diretta su YouTube
                per dar voce a una community vera — e diventare episodi di un podcast.
              </p>
            </div>

            <!-- Live submission counter -->
            <div v-if="submissionCount !== null" class="text-center mb-6 reveal">
              <p class="text-sm tx3">
                <span class="text-2xl font-bold" style="color:#F05022">{{ submissionCount }}</span>
                <span class="ml-2">storie condivise finora</span>
              </p>
            </div>

            <!-- Journey steps -->
            <div class="mb-14 reveal">
              <h2 class="text-center text-xs font-bold tracking-wide uppercase mb-8" style="color:#F05022">Il percorso dello sclHERO</h2>
              <div class="relative">
                <!-- Connector line (desktop only) -->
                <div class="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" aria-hidden="true"></div>
                <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div v-for="item in JOURNEY_STEPS" :key="item.step" class="flex flex-col items-center text-center gap-3">
                    <div class="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md" style="background:#F05022">
                      {{ item.step }}
                    </div>
                    <div>
                      <p class="font-semibold tx text-sm">{{ item.title }}</p>
                      <p class="text-xs tx3 leading-relaxed mt-1">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Submission form / success state -->
            <Transition name="scl-fade" mode="out-in">

              <div v-if="status !== 'success'" class="bg-stone-50 dark:bg-stone-800 rounded-2xl p-8 shadow-sm border border-stone-200/50 dark:border-white/10 reveal">
                <form @submit.prevent="submitForm" novalidate class="space-y-6">

                  <!-- Full name -->
                  <div>
                    <label class="block text-sm font-semibold tx mb-1.5" for="nome">
                      Nome e cognome <span style="color:#F05022">*</span>
                    </label>
                    <input
                      id="nome" v-model="form.nome" type="text" required autocomplete="name"
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
                      id="email" v-model="form.email" type="email" required autocomplete="email"
                      placeholder="la-tua@email.it"
                      class="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 tx text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                    />
                  </div>

                  <!-- Phone -->
                  <div>
                    <label class="block text-sm font-semibold tx mb-1.5" for="telefono">
                      Numero di telefono
                      <span class="text-xs tx3 font-normal ml-1">(facoltativo)</span>
                    </label>
                    <input
                      id="telefono" v-model="form.telefono" type="tel" autocomplete="tel"
                      placeholder="+39 333 000 0000"
                      class="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 tx text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                    />
                  </div>

                  <!-- City autocomplete -->
                  <div ref="cityContainerRef">
                    <label class="block text-sm font-semibold tx mb-1.5" for="citta">
                      Da dove scrivi?
                      <span class="text-xs tx3 font-normal ml-1">(facoltativo)</span>
                    </label>
                    <div class="relative">
                      <input
                        id="citta" v-model="cityQuery" type="text" autocomplete="off"
                        placeholder="Cerca la tua città…"
                        class="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 tx text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                        @input="handleCityInput"
                        @focus="cityDropdownOpen = true"
                        @keydown.escape="cityDropdownOpen = false"
                        @keydown.enter.prevent="citySuggestions.length && selectCity(citySuggestions[0])"
                      />
                      <ul v-if="cityDropdownOpen && citySuggestions.length" class="absolute z-50 w-full mt-1 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl shadow-lg max-h-56 overflow-y-auto">
                        <li
                          v-for="city in citySuggestions" :key="city"
                          @mousedown.prevent="selectCity(city)"
                          class="px-4 py-2.5 text-sm tx cursor-pointer hover:bg-stone-100 dark:hover:bg-stone-800 first:rounded-t-xl last:rounded-b-xl"
                        >{{ city }}</li>
                      </ul>
                    </div>
                  </div>

                  <!-- Story -->
                  <div>
                    <label class="block text-sm font-semibold tx mb-1.5" for="storia">
                      La tua storia <span style="color:#F05022">*</span>
                    </label>
                    <textarea
                      id="storia" v-model="form.storia" required rows="7"
                      placeholder="Raccontaci la tua esperienza con la sclerosi multipla. Non esistono storie troppo piccole o troppo grandi."
                      class="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 tx text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none leading-relaxed"
                    ></textarea>
                    <p class="text-xs tx3 mt-1">{{ form.storia.length }} caratteri</p>
                  </div>

                  <!-- Photo upload -->
                  <div>
                    <label class="block text-sm font-semibold tx mb-1.5">
                      Una tua foto
                      <span class="text-xs tx3 font-normal ml-1">(facoltativa, max 5 MB)</span>
                    </label>
                    <div v-if="!photoPreview">
                      <label for="foto" class="flex flex-col items-center justify-center gap-3 w-full h-36 border-2 border-dashed border-stone-300 dark:border-stone-600 rounded-xl cursor-pointer hover:border-accent/60 transition-colors">
                        <svg class="w-8 h-8 tx3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <span class="text-sm tx2">Clicca per caricare una foto</span>
                        <input id="foto" type="file" accept="image/*" class="sr-only" @change="handlePhotoChange" />
                      </label>
                    </div>
                    <div v-else class="relative">
                      <img :src="photoPreview" alt="Anteprima" class="w-full h-48 object-cover rounded-xl" />
                      <button type="button" @click="removePhoto" class="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors" aria-label="Rimuovi foto">
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <!-- Privacy consent -->
                  <div class="flex items-start gap-3">
                    <input id="privacy" v-model="form.consenso_privacy" type="checkbox" required class="mt-0.5 w-4 h-4 accent-accent shrink-0" />
                    <label for="privacy" class="text-xs tx2 leading-relaxed cursor-pointer">
                      Acconsento al trattamento dei miei dati personali ai sensi del GDPR.
                      I dati forniti (nome, email, telefono, città e storia) verranno utilizzati
                      esclusivamente per la valutazione e gestione delle candidature sclHEROES
                      e non saranno condivisi con terze parti.
                      La mia storia potrà essere condivisa (anche in forma anonima) nelle attività
                      dell'associazione, previo accordo con me.
                      <router-link to="/contatti" class="text-accent hover:underline ml-1">Contatti</router-link>
                    </label>
                  </div>

                  <!-- Error message -->
                  <p v-if="errorMessage" class="text-sm text-red-500 dark:text-red-400">{{ errorMessage }}</p>

                  <!-- Submit button -->
                  <button
                    type="submit"
                    :disabled="status === 'loading' || !form.nome || !form.email || !form.storia || !form.consenso_privacy"
                    class="w-full flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-[#cf5e0e] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm tracking-wide shadow-md shadow-accent/20"
                  >
                    <svg v-if="status === 'loading'" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                    </svg>
                    <span>{{ status === 'loading' ? 'Invio in corso…' : 'Invia la tua storia' }}</span>
                  </button>

                </form>
              </div>

              <!-- Success state -->
              <div v-else class="text-center py-20">
                <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl" style="background:#F05022">
                  <svg class="w-11 h-11 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold tx mb-4">Grazie, sei uno sclHERO!</h2>
                <p class="tx2 text-lg max-w-md mx-auto leading-relaxed mb-8">
                  La tua storia è arrivata. La leggeremo con cura e ti contatteremo via email
                  se vorremo invitarti in diretta su YouTube.
                </p>
                <router-link to="/" class="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full hover:opacity-90 transition-all" style="background:#F05022">
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

            <!-- Published stories grid -->
            <div v-if="publishedHeroes.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="hero in publishedHeroes" :key="hero.created_at" class="bg-stone-50 dark:bg-stone-800 rounded-2xl overflow-hidden shadow-sm border border-stone-200/50 dark:border-white/10 flex flex-col">
                <!-- Photo or APS logo placeholder -->
                <div v-if="hero.foto_url" class="h-44 overflow-hidden">
                  <img :src="hero.foto_url" :alt="hero.nome" class="w-full h-full object-cover" />
                </div>
                <div v-else class="h-44 flex items-center justify-center bg-stone-100 dark:bg-stone-800/60">
                  <img src="/logo.png" alt="Un Viaggio da Sclero APS" class="h-16 w-auto object-contain opacity-40" />
                </div>
                <div class="p-5 flex flex-col gap-3">
                  <div class="flex items-start justify-between gap-2">
                    <div>
                      <p class="font-bold tx">{{ hero.nome }}</p>
                      <p v-if="hero.citta" class="text-xs tx3 mt-0.5">{{ hero.citta }}</p>
                    </div>
                    <span class="text-[10px] font-bold tracking-widest uppercase text-white px-2.5 py-1 rounded-full shrink-0" style="background:#F05022">sclHEROES</span>
                  </div>
                  <!-- Diretta date if set -->
                  <p v-if="hero.diretta_at" class="text-xs tx3 flex items-center gap-1.5">
                    <svg class="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                    Diretta {{ formatLive(hero.diretta_at) }}
                  </p>
                  <!-- YouTube CTA — always visible -->
                  <a href="https://www.youtube.com/@unviaggiodasclero"
                    target="_blank" rel="noopener noreferrer"
                    class="group inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-[#cf5e0e] transition-colors mt-auto pt-1">
                    Ecco la prima storia
                    <span class="group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Empty state -->
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
