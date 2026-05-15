<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal.js'
import { useCookieConsent } from '../composables/useCookieConsent'
import JourneyLine from '../components/JourneyLine.vue'

useScrollReveal()
const { riapriBanner } = useCookieConsent()
</script>

<template>
  <div>
    <main id="main-content" class="pt-32 pb-16">
      <div class="journey-host">
        <JourneyLine />
        <section class="section-pad">
          <div class="max-w-3xl mx-auto">

            <div class="mb-10 reveal">
              <span class="accent-bar"></span>
              <p class="text-xs font-semibold tracking-widest uppercase mb-4" style="color:#F05022">Trasparenza</p>
              <h1 class="text-4xl md:text-5xl font-bold tx mb-4">Cookie Policy</h1>
              <p class="tx2">Ultimo aggiornamento: maggio 2026</p>
            </div>

            <div class="space-y-10 reveal prose-like">

              <div>
                <h2 class="text-xl font-bold tx mb-3">Cosa sono i cookie</h2>
                <p class="tx2 leading-relaxed">
                  I cookie sono piccoli file di testo che i siti web salvano sul tuo dispositivo durante la navigazione.
                  Servono a far funzionare il sito, ricordare le tue preferenze e, in alcuni casi, raccogliere informazioni
                  statistiche anonime sulla visita.
                </p>
              </div>

              <div>
                <h2 class="text-xl font-bold tx mb-3">Cookie che utilizziamo</h2>

                <div class="space-y-4">
                  <!-- Tecnici -->
                  <div class="p-5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-white/10">
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 uppercase">Necessari</span>
                      <span class="text-sm font-semibold tx">Cookie tecnici e funzionali</span>
                    </div>
                    <p class="text-sm tx2 leading-relaxed mb-3">
                      Indispensabili per il corretto funzionamento del sito. Non raccolgono dati personali
                      e non richiedono il tuo consenso.
                    </p>
                    <table class="w-full text-xs tx2">
                      <thead>
                        <tr class="border-b border-stone-200 dark:border-white/10">
                          <th class="text-left pb-2 font-semibold tx">Nome</th>
                          <th class="text-left pb-2 font-semibold tx">Scopo</th>
                          <th class="text-left pb-2 font-semibold tx">Durata</th>
                        </tr>
                      </thead>
                      <tbody class="space-y-1">
                        <tr class="border-b border-stone-100 dark:border-white/5">
                          <td class="py-2 font-mono">cookie_consent_v1</td>
                          <td class="py-2">Salva le tue preferenze cookie</td>
                          <td class="py-2">12 mesi</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- Analitici -->
                  <div class="p-5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-white/10">
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 uppercase">Analitici</span>
                      <span class="text-sm font-semibold tx">Google Analytics 4</span>
                    </div>
                    <p class="text-sm tx2 leading-relaxed mb-3">
                      Utilizziamo Google Analytics 4 per capire come i visitatori usano il sito
                      (pagine visitate, durata della sessione, provenienza geografica aggregata).
                      I dati sono anonimi e aggregati. Attivati <strong class="tx">solo dopo il tuo consenso</strong>
                      tramite Google Consent Mode v2.
                    </p>
                    <table class="w-full text-xs tx2">
                      <thead>
                        <tr class="border-b border-stone-200 dark:border-white/10">
                          <th class="text-left pb-2 font-semibold tx">Nome</th>
                          <th class="text-left pb-2 font-semibold tx">Scopo</th>
                          <th class="text-left pb-2 font-semibold tx">Durata</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-stone-100 dark:border-white/5">
                          <td class="py-2 font-mono">_ga</td>
                          <td class="py-2">Distingue gli utenti univoci</td>
                          <td class="py-2">2 anni</td>
                        </tr>
                        <tr class="border-b border-stone-100 dark:border-white/5">
                          <td class="py-2 font-mono">_ga_*</td>
                          <td class="py-2">Mantiene lo stato della sessione</td>
                          <td class="py-2">2 anni</td>
                        </tr>
                      </tbody>
                    </table>
                    <p class="text-xs tx3 mt-3">
                      Gestore: Google LLC — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="text-accent hover:underline">Privacy Policy Google</a>
                    </p>
                  </div>

                  <!-- Vercel -->
                  <div class="p-5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-white/10">
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-700 dark:bg-stone-600 dark:text-stone-300 uppercase">Tecnici</span>
                      <span class="text-sm font-semibold tx">Vercel Analytics & Speed Insights</span>
                    </div>
                    <p class="text-sm tx2 leading-relaxed">
                      Il sito è ospitato su Vercel, che raccoglie in modo anonimo e aggregato dati
                      sulle performance (tempi di caricamento, errori). Non usa cookie persistenti
                      e non traccia i singoli utenti.
                      <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener" class="text-accent hover:underline ml-1">Privacy Policy Vercel</a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 class="text-xl font-bold tx mb-3">Come gestire le preferenze</h2>
                <p class="tx2 leading-relaxed mb-4">
                  Puoi modificare le tue preferenze in qualsiasi momento. La tua scelta viene
                  salvata nel browser per 12 mesi, dopodiché ti verrà chiesto nuovamente.
                </p>
                <button
                  @click="riapriBanner"
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-all"
                  style="background:#F05022"
                >
                  Gestisci preferenze cookie
                </button>
              </div>

              <div>
                <h2 class="text-xl font-bold tx mb-3">Disattivare i cookie dal browser</h2>
                <p class="tx2 leading-relaxed">
                  Puoi anche disattivare tutti i cookie direttamente dalle impostazioni del tuo browser.
                  Tieni presente che disattivare i cookie tecnici potrebbe compromettere il funzionamento del sito.
                  Per istruzioni specifiche visita la guida del tuo browser:
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" class="text-accent hover:underline">Chrome</a>,
                  <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox" target="_blank" rel="noopener" class="text-accent hover:underline">Firefox</a>,
                  <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener" class="text-accent hover:underline">Safari</a>.
                </p>
              </div>

              <div>
                <h2 class="text-xl font-bold tx mb-3">Contatti</h2>
                <p class="tx2 leading-relaxed">
                  Per qualsiasi domanda relativa ai cookie o alla privacy scrivi a
                  <a href="mailto:info@unviaggiodascleroaps.org" class="text-accent hover:underline">info@unviaggiodascleroaps.org</a>.
                  Il titolare del trattamento è <strong class="tx">Un Viaggio da Sclero APS</strong>, CF 05613580264.
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
