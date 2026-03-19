<script setup>
import { ref, onMounted } from 'vue'

const stats = [
  { value: '60',   unit: 'Media TV',             desc: 'Oltre 60 tv in tutta Italia hanno trasmesso il Viaggio con oltre 6 milioni di Share certificato Auditel.' },
  { value: '130',  unit: 'Testate',              desc: 'Oltre 130 testate stampa e online con più di 8 milioni di letture certificate Audipress/Nielsen.' },
  { value: '750+', unit: 'Impatto territoriale', desc: 'Oltre 750 persone presenti fisicamente alle tappe del Viaggio 2022.' },
  { value: '2',    unit: 'Panchine',             desc: 'A Formia, in Lazio, e a Pietramelara, in Campania, 2 panchine dedicate al Viaggio da Sclero 2022.' },
]

const chiavi = [
  { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Attraversamento reale dell\'Italia',
    desc: 'Oltre 2.000 km a piedi, per quattro mesi consecutivi.' },
  { icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    title: 'Progetto già validato',
    desc: "Il 2027 nasce da un'esperienza concreta e dimostrata nel 2022." },
  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Continuità quotidiana',
    desc: "La forza del viaggio è nella costanza, non nell'eccezione." },
  { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    title: 'Valore che resta',
    desc: "Contenuti, relazioni e memoria che continuano oltre l'arrivo." },
]

const section = ref(null)
const visible = ref(false)
onMounted(() => {
  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) visible.value = true }, { threshold: 0.1 })
  if (section.value) obs.observe(section.value)
})
</script>

<template>
  <!-- I numeri raccolti -->
  <section ref="section" class="section-muted py-24 md:py-32">
    <div class="section-pad">
      <div class="mb-16 reveal">
        <span class="accent-bar"></span>
        <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">I numeri raccolti</p>
        <h2 class="text-4xl md:text-5xl font-bold tx mb-5 max-w-2xl">
          Dal 2021 al 2026<br>siamo apparsi ovunque.
        </h2>
        <p class="tx2 max-w-2xl leading-relaxed">
          Il Viaggio da Sclero è stato su Rai, Sky, Tv locali, Testate giornalistiche Nazionali.
          Siamo stati ospiti a Talk e presentazioni, in scuole e università.
          Siamo fieri di riuscire a far risuonare ancora il Viaggio del 2022 —
          che ha dimostrato così fortemente cosa sia realmente la voglia di vivere.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="(stat, i) in stats" :key="i"
          class="card-solid card-accent-top p-7 transition-all duration-700"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          :style="{ transitionDelay: i * 100 + 'ms' }">
          <p class="text-5xl font-bold text-accent mb-2 font-display">{{ stat.value }}</p>
          <p class="tx font-semibold text-sm mb-3">{{ stat.unit }}</p>
          <p class="tx3 text-sm leading-relaxed">{{ stat.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- La chiave del nuovo Viaggio -->
  <section class="section-light py-24 md:py-32">
    <div class="section-pad">
      <div class="text-center mb-16 reveal">
        <span class="accent-bar accent-bar-center"></span>
        <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">La chiave del nuovo viaggio</p>
        <h2 class="text-4xl md:text-5xl font-bold tx max-w-3xl mx-auto">
          Il Viaggio è solo la partenza,<br>l&#39;obiettivo è la condivisione
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        <div v-for="(item, i) in chiavi" :key="i"
          class="card-warm p-7 reveal group"
          :style="{ transitionDelay: i * 80 + 'ms' }">
          <div class="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
            <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
            </svg>
          </div>
          <h3 class="tx font-semibold text-sm mb-2">{{ item.title }}</h3>
          <p class="tx2 text-sm leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>

      <!-- World Record banner -->
      <div class="bg-gradient-to-r from-accent/5 via-accent/8 to-accent/5 border border-accent/20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-7 reveal">
        <div class="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/25 flex items-center justify-center shrink-0">
          <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
          </svg>
        </div>
        <div>
          <p class="text-accent font-bold text-sm tracking-wide uppercase mb-2">World Record</p>
          <p class="tx2 leading-relaxed text-base">
            Per il cammino 2027 è stata inoltrata la richiesta ufficiale a
            <strong class="tx">Guinness World Records</strong>
            per il riconoscimento come il cammino più lungo mai percorso da una persona con sclerosi multipla.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
