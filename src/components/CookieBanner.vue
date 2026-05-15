<script setup lang="ts">
import { ref } from 'vue'
import { useCookieConsent } from '../composables/useCookieConsent'

const { bannerVisibile, accettaTutti, soloNecessari, personalizza } = useCookieConsent()

const pannelloAperto = ref(false)
const analiticoAbilitato = ref(false)
</script>

<template>
  <Teleport to="body">
    <Transition name="banner">
      <div
        v-if="bannerVisibile"
        class="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6"
        role="dialog"
        aria-label="Preferenze cookie"
      >
        <div class="max-w-4xl mx-auto bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-white/10 overflow-hidden">

          <!-- Pannello principale -->
          <div class="p-6 md:p-8">
            <div class="flex items-start gap-4 mb-5">
              <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style="background:#F05022">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h2 class="text-base font-bold tx mb-1">Questo sito utilizza i cookie</h2>
                <p class="text-sm tx2 leading-relaxed">
                  Usiamo cookie tecnici (necessari al funzionamento) e cookie analitici (Google Analytics)
                  per migliorare l'esperienza. Puoi accettare tutti i cookie, scegliere solo quelli necessari
                  o personalizzare le tue preferenze.
                  I tuoi dati non vengono ceduti a terzi per fini pubblicitari.
                </p>
              </div>
            </div>

            <!-- Pannello personalizzazione -->
            <Transition name="slide-down">
              <div v-if="pannelloAperto" class="mb-5 p-4 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-white/10 space-y-3">

                <!-- Necessari -->
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="text-sm font-semibold tx">Cookie necessari</p>
                    <p class="text-xs tx3 mt-0.5">Funzionamento del sito, sessione utente. Non disattivabili.</p>
                  </div>
                  <div class="w-10 h-6 rounded-full flex items-center justify-end pr-1 shrink-0" style="background:#F05022">
                    <div class="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                <div class="h-px bg-stone-200 dark:bg-white/10"></div>

                <!-- Analitici -->
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="text-sm font-semibold tx">Cookie analitici</p>
                    <p class="text-xs tx3 mt-0.5">Google Analytics — statistiche anonime di visita.</p>
                  </div>
                  <button
                    type="button"
                    @click="analiticoAbilitato = !analiticoAbilitato"
                    :class="[
                      'w-10 h-6 rounded-full flex items-center transition-all duration-200 shrink-0',
                      analiticoAbilitato ? 'justify-end pr-1' : 'justify-start pl-1'
                    ]"
                    :style="{ background: analiticoAbilitato ? '#F05022' : '#d6d3d1' }"
                    :aria-label="analiticoAbilitato ? 'Disattiva cookie analitici' : 'Attiva cookie analitici'"
                  >
                    <div class="w-4 h-4 bg-white rounded-full shadow"></div>
                  </button>
                </div>
              </div>
            </Transition>

            <!-- Pulsanti — stessa prominenza visiva (requisito Garante) -->
            <div class="flex flex-col sm:flex-row items-center gap-3">
              <div class="sm:mr-auto flex items-center gap-4">
                <button
                  v-if="!pannelloAperto"
                  @click="pannelloAperto = true"
                  class="text-xs tx3 hover:text-accent transition-colors underline underline-offset-2"
                >
                  Personalizza
                </button>
                <button
                  v-else
                  @click="personalizza(analiticoAbilitato); pannelloAperto = false"
                  class="text-xs tx3 hover:text-accent transition-colors underline underline-offset-2"
                >
                  Salva preferenze
                </button>
                <router-link to="/cookie-policy" class="text-xs tx3 hover:text-accent transition-colors underline underline-offset-2">
                  Cookie Policy
                </router-link>
              </div>

              <!-- I due bottoni principali sono visivamente equivalenti (stesso peso, stessa dimensione) -->
              <button
                @click="soloNecessari"
                class="w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-semibold bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-100 hover:bg-stone-300 dark:hover:bg-stone-600 transition-all"
              >
                Solo necessari
              </button>
              <button
                @click="accettaTutti"
                class="w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-all"
                style="background:#F05022"
              >
                Accetta tutti
              </button>
            </div>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.banner-enter-active { transition: transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.35s ease; }
.banner-leave-active { transition: transform 0.25s cubic-bezier(.4,0,.2,1), opacity 0.25s ease; }
.banner-enter-from, .banner-leave-to { transform: translateY(100%); opacity: 0; }

.slide-down-enter-active, .slide-down-leave-active { transition: all 0.25s ease; overflow: hidden; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; max-height: 0; margin-bottom: 0; }
.slide-down-enter-to, .slide-down-leave-from { opacity: 1; max-height: 200px; }
</style>
