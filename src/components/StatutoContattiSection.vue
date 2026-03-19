<script setup>
import { ref } from 'vue'

const openFaq = ref(null)
function toggleFaq(i) { openFaq.value = openFaq.value === i ? null : i }

const faqs = [
  { q: 'Come posso partecipare ad un viaggio?',
    a: 'Dal 2028 saremmo pronti per seguirti e per personalizzare il tuo viaggio. Nel frattempo puoi scriverci per avere maggiori informazioni e descrivere la tua idea.' },
  { q: 'Posso camminare con voi durante il Viaggio del 2027?',
    a: 'Il Viaggio sarà videodocumentato e monitorato per il Guinness World Record e non potremo seguire altre persone durante le giornate di cammino. Sarà comunque un onore incontrarti nelle tappe.' },
  { q: "Posso sponsorizzare l'associazione?",
    a: "Certamente! Puoi farlo con un contributo economico, con un aiuto durante i Viaggi, con materiale inerente al cammino. Scrivici a info@unviaggiodascleroaps.org per tutti i dettagli." },
  { q: "Posso far parte dell'Associazione?",
    a: "Stiamo lavorando per creare il tesseramento che ti permetterà di entrare a far parte di Un Viaggio da Sclero e ottenere dei benefici. Stay tuned!" },
]
</script>

<template>
  <!-- Statuto APS -->
  <section class="section-muted py-24 md:py-32">
    <div class="section-pad">
      <div class="grid md:grid-cols-2 gap-16 items-start">

        <!-- Left: heading + download -->
        <div class="reveal">
          <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Statuto APS</p>
          <h2 class="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-6">
            Tutto trasparente<br>nero su bianco
          </h2>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed mb-8 text-base">
            Denominazione e spese sostenute
          </p>
          <a href="https://onecdn.io/media/statuto-aps-viaggio-da-sclerodocx-bd60e7d7-1447-48e5-bdce-313ec151b334.pdf"
            target="_blank" rel="noopener"
            class="inline-flex items-center gap-3 bg-accent hover:bg-[#cf5e0e] text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm shadow-md">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Scarica lo Statuto completo
          </a>
        </div>

        <!-- Right: static info cards (no accordion) -->
        <div class="space-y-5 reveal" style="transition-delay:0.15s">
          <div class="card-solid p-7">
            <h3 class="text-stone-900 dark:text-white font-semibold text-sm mb-4">Denominazione e spese sostenute</h3>
            <div class="space-y-3 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              <p>Un Viaggio da Sclero – APS è un&#39;associazione di promozione sociale, indipendente e senza fini di lucro.</p>
              <p>Sosteniamo i nostri progetti attraverso quote associative, donazioni, contributi pubblici e privati, sponsorizzazioni e attività coerenti con le finalità dell&#39;associazione.</p>
              <p>Le cariche associative sono svolte principalmente in forma gratuita. Eventuali compensi o rimborsi, quando previsti, vengono riconosciuti in modo trasparente e nel rispetto della normativa vigente.</p>
            </div>
          </div>

          <div class="card-solid p-7">
            <h3 class="text-stone-900 dark:text-white font-semibold text-sm mb-4">Soci ed Associati</h3>
            <div class="space-y-3 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              <p>Chiunque condivida i valori e le finalità dell&#39;associazione può diventare parte di Un Viaggio da Sclero – APS.</p>
              <p>Essere soci significa partecipare alle attività, contribuire alle scelte dell&#39;associazione e far parte attivamente del suo percorso, con diritto di voto in assemblea.</p>
              <p>L&#39;adesione avviene tramite una semplice richiesta, valutata dal Consiglio Direttivo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contatti -->
  <section id="contatti" class="section-light py-24 md:py-32">
    <div class="section-pad">
      <div class="grid md:grid-cols-2 gap-16 items-start">

        <!-- Left: contact details -->
        <div class="reveal">
          <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Contattaci</p>
          <h2 class="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-6">
            Inviaci la tua mail
          </h2>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
            Ogni richiesta verrà evasa prima possibile.
          </p>
          <div class="space-y-4">
            <a href="mailto:info@unviaggiodascleroaps.org"
              class="flex items-center gap-4 card-solid p-5 group">
              <div class="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="text-stone-900 dark:text-white font-semibold text-sm">Email</p>
                <p class="text-accent text-sm">info@unviaggiodascleroaps.org</p>
              </div>
            </a>
            <a href="https://wa.me/393516200034" target="_blank" rel="noopener"
              class="flex items-center gap-4 card-solid p-5 group">
              <div class="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p class="text-stone-900 dark:text-white font-semibold text-sm">WhatsApp</p>
                <p class="text-accent text-sm">+39 351 620 0034</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Right: social links -->
        <div class="reveal" style="transition-delay:0.15s">
          <p class="text-stone-900 dark:text-white font-semibold text-sm mb-5">Seguici sui social</p>
          <div class="space-y-3">
            <a href="https://www.instagram.com/unviaggiodascleroaps/" target="_blank" rel="noopener"
              class="flex items-center gap-4 card-solid p-5 group">
              <div class="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div>
                <p class="text-stone-900 dark:text-white font-semibold text-sm">Instagram</p>
                <p class="text-stone-500 dark:text-stone-400 text-xs">APS Un Viaggio da Sclero</p>
              </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61587496840130" target="_blank" rel="noopener"
              class="flex items-center gap-4 card-solid p-5 group">
              <div class="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <p class="text-stone-900 dark:text-white font-semibold text-sm">Facebook</p>
                <p class="text-stone-500 dark:text-stone-400 text-xs">APS Un Viaggio da Sclero</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/un-viaggio-da-sclero-aps-8875bb3ab/" target="_blank" rel="noopener"
              class="flex items-center gap-4 card-solid p-5 group">
              <div class="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p class="text-stone-900 dark:text-white font-semibold text-sm">LinkedIn</p>
                <p class="text-stone-500 dark:text-stone-400 text-xs">APS Un Viaggio da Sclero</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="section-muted py-24 md:py-32">
    <div class="section-pad">
      <div class="text-center mb-14 reveal">
        <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">FAQ</p>
        <h2 class="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white">
          Le domande più frequenti
        </h2>
      </div>
      <div class="max-w-2xl mx-auto space-y-3">
        <div v-for="(faq, i) in faqs" :key="i" class="card-solid overflow-hidden">
          <button @click="toggleFaq(i)"
            class="w-full flex items-start justify-between p-6 text-left gap-5 transition-colors"
            :class="openFaq === i ? 'accordion-open' : 'hover:bg-stone-50 dark:hover:bg-stone-800'">
            <span class="text-stone-900 dark:text-white font-semibold text-sm leading-snug">{{ faq.q }}</span>
            <svg :class="['w-5 h-5 text-accent shrink-0 mt-0.5 transition-transform duration-300', openFaq === i ? 'rotate-180' : '']"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <Transition name="accordion">
            <div v-if="openFaq === i" class="border-t border-stone-100 dark:border-white/10">
              <p class="px-6 py-5 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{{ faq.a }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
