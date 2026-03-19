<script setup>
import { ref, onMounted } from 'vue'

const stats = [
  { value: '60', label: 'Media TV', desc: 'Oltre 60 tv in tutta Italia — 6 milioni di Share certificato Auditel' },
  { value: '130', label: 'Testate', desc: 'Oltre 130 testate e 8 milioni di letture certificate Audipress/Nielsen' },
  { value: '750+', label: 'Impatto territoriale', desc: 'Oltre 750 persone presenti fisicamente alle tappe' },
  { value: '2', label: 'Panchine', desc: 'A Formia (Lazio) e Pietramelara (Campania), dedicate al Viaggio 2022' },
]

const chiavi = [
  { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Attraversamento reale', desc: 'Oltre 2.000 km a piedi, per quattro mesi consecutivi.' },
  { icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    title: 'Progetto già validato', desc: "Il 2027 nasce da un'esperienza concreta e dimostrata nel 2022." },
  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Continuità quotidiana', desc: "La forza del viaggio è nella costanza, non nell'eccezione." },
  { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    title: 'Valore che resta', desc: "Contenuti, relazioni e memoria che continuano oltre l'arrivo." },
]

const section = ref(null)
const visible = ref(false)
onMounted(() => {
  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) visible.value = true }, { threshold: 0.15 })
  if (section.value) obs.observe(section.value)
})
</script>

<template>
  <!-- Numeri -->
  <section ref="section" class="section-muted py-24 md:py-32">
    <div class="section-pad">
      <div class="text-center mb-14 reveal">
        <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">I numeri raccolti</p>
        <h2 class="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4">
          Dal 2021 al 2026<br>siamo apparsi ovunque.
        </h2>
        <p class="text-stone-500 dark:text-white/50 max-w-xl mx-auto">
          Rai, Sky, TV locali, Testate Nazionali. Ospiti a Talk, scuole e università.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div v-for="(stat, i) in stats" :key="i"
          class="card-lift bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-2xl p-6 text-center transition-all duration-700"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          :style="{ transitionDelay: i * 100 + 'ms' }">
          <p class="text-5xl md:text-6xl font-bold text-accent mb-2">{{ stat.value }}</p>
          <p class="text-stone-900 dark:text-white font-semibold text-sm mb-2">{{ stat.label }}</p>
          <p class="text-stone-500 dark:text-white/40 text-xs leading-relaxed">{{ stat.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Chiave -->
  <section class="section-light py-24 md:py-32">
    <div class="section-pad">
      <div class="text-center mb-14">
        <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">La chiave del nuovo viaggio</p>
        <h2 class="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white">
          Il Viaggio è solo la partenza,<br>l&apos;obiettivo è la condivisione
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="(item, i) in chiavi" :key="i"
          class="card-lift group bg-stone-50 dark:bg-white/5 hover:border-accent/30 border border-stone-200 dark:border-white/10 rounded-2xl p-6 transition-all">
          <div class="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
            <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
            </svg>
          </div>
          <h3 class="text-stone-900 dark:text-white font-semibold text-sm mb-2">{{ item.title }}</h3>
          <p class="text-stone-500 dark:text-white/50 text-sm leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>

      <!-- World Record banner -->
      <div class="mt-10 bg-accent/5 border border-accent/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
        <div class="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
          <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
          </svg>
        </div>
        <div>
          <p class="text-accent font-semibold text-sm tracking-wide uppercase mb-1">World Record</p>
          <p class="text-stone-600 dark:text-white/70 leading-relaxed">
            Richiesta ufficiale inoltrata a <strong class="text-stone-900 dark:text-white">Guinness World Records</strong>
            per il cammino più lungo mai percorso da una persona con sclerosi multipla.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
