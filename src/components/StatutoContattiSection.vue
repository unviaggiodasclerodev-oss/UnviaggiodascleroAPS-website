<script setup>
import { ref } from 'vue'

const openFaq = ref(null)
function toggleFaq(i) { openFaq.value = openFaq.value === i ? null : i }

function onBeforeEnter(el) {
  el.style.height = '0'
  el.style.opacity = '0'
  el.style.overflow = 'hidden'
}
function onEnter(el, done) {
  el.style.transition = 'height 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease'
  requestAnimationFrame(() => {
    el.style.height = el.scrollHeight + 'px'
    el.style.opacity = '1'
    el.addEventListener('transitionend', done, { once: true })
  })
}
function onAfterEnter(el) {
  el.style.height = 'auto'
  el.style.overflow = ''
  el.style.transition = ''
  el.style.opacity = ''
}
function onBeforeLeave(el) {
  el.style.height = el.scrollHeight + 'px'
  el.style.overflow = 'hidden'
  el.style.opacity = '1'
}
function onLeave(el, done) {
  el.style.transition = 'height 0.22s cubic-bezier(0.4,0,0.2,1), opacity 0.15s ease'
  requestAnimationFrame(() => {
    el.style.height = '0'
    el.style.opacity = '0'
    el.addEventListener('transitionend', done, { once: true })
  })
}
function onAfterLeave(el) {
  el.style.height = ''
  el.style.overflow = ''
  el.style.opacity = ''
  el.style.transition = ''
}

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
  <section class="relative py-10 md:py-20 overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img src="/images/IMG_2238.JPG" alt="" class="w-full h-full object-cover opacity-15" />
      <div class="absolute inset-0 section-muted opacity-85"></div>
    </div>
    <div class="relative z-10 section-pad">
      <div class="grid md:grid-cols-2 gap-16 items-center">

        <!-- Left: heading + download -->
        <div class="reveal">
          <span class="accent-bar"></span>
          <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Statuto APS</p>
          <h2 class="text-4xl md:text-5xl font-bold tx mb-6">
            Tutto trasparente<br>nero su bianco
          </h2>
          <p class="tx2 leading-relaxed mb-8 text-base">
            Denominazione e spese sostenute
          </p>
          <a href="/statuto/Statuto Unviaggiodasclero.pdf"
            target="_blank" rel="noopener"
            class="group inline-flex items-center gap-3 bg-accent hover:bg-[#cf5e0e] text-white font-semibold px-8 py-4 rounded-full transition-all text-sm shadow-md shadow-accent/20 hover:shadow-accent/30">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Scarica lo Statuto completo
            <span class="inline-block group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </a>
        </div>

        <!-- Right: static info cards -->
        <div class="space-y-5 reveal" style="transition-delay:0.15s">
          <div class="card-solid p-7">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 class="tx font-semibold text-sm">Denominazione e spese sostenute</h3>
            </div>
            <div class="space-y-3 tx2 text-sm leading-relaxed">
              <p>Un Viaggio da Sclero – APS è un&#39;associazione di promozione sociale, indipendente e senza fini di lucro.</p>
              <p>Sosteniamo i nostri progetti attraverso quote associative, donazioni, contributi pubblici e privati, sponsorizzazioni e attività coerenti con le finalità dell&#39;associazione.</p>
              <p>Le cariche associative sono svolte principalmente in forma gratuita. Eventuali compensi o rimborsi, quando previsti, vengono riconosciuti in modo trasparente e nel rispetto della normativa vigente.</p>
            </div>
          </div>

          <div class="card-solid p-7">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="tx font-semibold text-sm">Soci ed Associati</h3>
            </div>
            <div class="space-y-3 tx2 text-sm leading-relaxed">
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
  <section id="contatti" class="relative py-10 md:py-20 overflow-hidden">
    <!-- Background photo with overlay -->
    <div class="absolute inset-0 z-0">
      <img src="/images/spiaggia.jpg" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(240,80,34,0.85) 0%, rgba(10,10,10,0.92) 60%)"></div>
    </div>

    <div class="relative z-10 section-pad">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="accent-bar accent-bar-center" style="background:#fef700"></span>
        <p class="text-xs font-semibold tracking-widest uppercase mb-4" style="color:#fef700">Contattaci</p>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Scrivici, siamo qui
        </h2>
        <p class="text-white/70 max-w-lg mx-auto leading-relaxed">
          Ogni richiesta verrà evasa prima possibile.
        </p>
      </div>

      <!-- Direct contacts: full-width horizontal banners -->
      <div class="grid md:grid-cols-2 gap-5 mb-10 reveal">
        <a href="mailto:info@unviaggiodascleroaps.org"
          class="group flex items-center gap-6 p-7 rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300">
          <div class="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
            style="background:#fef700">
            <svg class="w-6 h-6" style="color:#0A0A0A" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div>
            <p class="text-white/60 text-xs uppercase tracking-widest font-semibold mb-1">Email</p>
            <p class="text-white font-bold text-lg group-hover:underline leading-tight">info@unviaggiodascleroaps.org</p>
          </div>
          <svg class="w-5 h-5 text-white/40 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>

        <a href="https://wa.me/393516200034" target="_blank" rel="noopener"
          class="group flex items-center gap-6 p-7 rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300">
          <div class="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
            style="background:#25D366">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <div>
            <p class="text-white/60 text-xs uppercase tracking-widest font-semibold mb-1">WhatsApp</p>
            <p class="text-white font-bold text-lg group-hover:underline leading-tight">+39 379 366 8397</p>
          </div>
          <svg class="w-5 h-5 text-white/40 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <!-- Social — large icon buttons in a row -->
      <div class="reveal" style="transition-delay:0.1s">
        <p class="text-center text-white/50 text-xs uppercase tracking-widest font-semibold mb-6">Seguici sui social</p>
        <div class="flex items-center justify-center gap-4 flex-wrap">
          <!-- Instagram -->
          <a href="https://www.instagram.com/unviaggiodascleroaps/" target="_blank" rel="noopener"
            class="group flex items-center gap-3 px-7 py-4 rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm hover:bg-white/20 hover:border-white/35 transition-all duration-300">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span class="text-white font-semibold text-sm">Instagram</span>
          </a>
          <!-- Facebook -->
          <a href="https://www.facebook.com/profile.php?id=61587496840130" target="_blank" rel="noopener"
            class="group flex items-center gap-3 px-7 py-4 rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm hover:bg-white/20 hover:border-white/35 transition-all duration-300">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span class="text-white font-semibold text-sm">Facebook</span>
          </a>
          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/company/un-viaggio-da-sclero-aps/?viewAsMember=true" target="_blank" rel="noopener"
            class="group flex items-center gap-3 px-7 py-4 rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm hover:bg-white/20 hover:border-white/35 transition-all duration-300">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span class="text-white font-semibold text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="section-muted py-10 md:py-20">
    <div class="section-pad">
      <div class="text-center mb-16 reveal">
        <span class="accent-bar accent-bar-center"></span>
        <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">FAQ</p>
        <h2 class="text-4xl md:text-5xl font-bold tx">
          Le domande più frequenti
        </h2>
      </div>
      <div class="max-w-2xl mx-auto space-y-3">
        <div v-for="(faq, i) in faqs" :key="i"
          class="card-solid overflow-hidden reveal"
          :style="{ transitionDelay: i * 60 + 'ms' }">
          <button @click="toggleFaq(i)"
            class="w-full flex items-start justify-between p-6 text-left gap-5 transition-colors cursor-pointer"
            :class="openFaq === i ? 'accordion-open' : 'hover-muted'">
            <span class="tx font-semibold text-sm leading-snug">{{ faq.q }}</span>
            <div class="w-7 h-7 rounded-full border border-accent/30 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300"
              :class="openFaq === i ? 'bg-accent border-accent rotate-180' : 'bg-accent/5'">
              <svg class="w-3.5 h-3.5 transition-colors" :class="openFaq === i ? 'text-white' : 'text-accent'"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>
          <Transition
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            @after-enter="onAfterEnter"
            @before-leave="onBeforeLeave"
            @leave="onLeave"
            @after-leave="onAfterLeave"
          >
            <div v-if="openFaq === i" class="border-t edge">
              <p class="px-6 py-5 tx2 text-sm leading-relaxed">{{ faq.a }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
