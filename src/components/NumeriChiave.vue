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
      <!-- Header with background photo accent -->
      <div class="relative rounded-2xl overflow-hidden mb-16 reveal">
        <img src="/images/staystrog.jpg" alt="Il viaggio" class="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div class="relative z-10 p-10 md:p-16">
          <span class="accent-bar"></span>
          <p class="text-xs font-semibold tracking-widest uppercase mb-4" style="color:#F05022">I numeri raccolti</p>
          <h2 class="text-4xl md:text-5xl font-bold tx mb-5 max-w-2xl">
            Dal 2021 al 2026<br>siamo apparsi ovunque.
          </h2>
          <p class="tx2 max-w-2xl leading-relaxed">
            Il Viaggio da Sclero è stato su Rai, Sky, Tv locali, Testate giornalistiche Nazionali.
            Siamo stati ospiti a Talk e presentazioni, in scuole e università.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="(stat, i) in stats" :key="i"
          class="card-solid card-accent-top p-7 transition-all duration-700"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          :style="{ transitionDelay: i * 100 + 'ms' }">
          <p class="text-5xl font-bold mb-2 font-display" style="color:#F05022">{{ stat.value }}</p>
          <p class="tx font-semibold text-sm mb-3 uppercase tracking-wide">{{ stat.unit }}</p>
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
        <p class="text-xs font-semibold tracking-widest uppercase mb-4" style="color:#F05022">La chiave del nuovo viaggio</p>
        <h2 class="text-4xl md:text-5xl font-bold tx max-w-3xl mx-auto">
          Il Viaggio è solo la partenza,<br>l&#39;obiettivo è la condivisione
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        <div v-for="(item, i) in chiavi" :key="i"
          class="card-warm p-7 reveal group"
          :style="{ transitionDelay: i * 80 + 'ms' }">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300"
            style="background:rgba(240,80,34,0.12); border:1px solid rgba(240,80,34,0.25);">
            <svg class="w-5 h-5" style="color:#F05022" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
            </svg>
          </div>
          <h3 class="tx font-bold text-sm mb-2 uppercase tracking-wide">{{ item.title }}</h3>
          <p class="tx2 text-sm leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>

      <!-- ── Guinness World Record banner ────────────────────────────────── -->
      <div class="reveal rounded-2xl overflow-hidden" style="background: linear-gradient(135deg, #0C2B5E 0%, #0d3572 60%, #0C2B5E 100%);">
        <div class="grid md:grid-cols-[1fr_auto] items-center gap-0">
          <!-- Text side -->
          <div class="p-8 md:p-12">
            <div class="flex items-center gap-3 mb-5">
              <span class="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                style="background:#fef700; color:#0C2B5E;">World Record</span>
            </div>
            <h3 class="text-white text-2xl md:text-3xl font-bold font-display uppercase leading-tight mb-4">
              Official Attempt —<br>
              <span style="color:#fef700">Guinness World Records</span>
            </h3>
            <p class="text-white/75 leading-relaxed max-w-xl">
              Per il cammino 2027 è stata inoltrata la richiesta ufficiale a
              <strong class="text-white">Guinness World Records</strong>
              per il riconoscimento come il cammino più lungo mai percorso da una persona con sclerosi multipla.
            </p>
          </div>
          <!-- Badge side — Official Attempt badge -->
          <div class="flex items-center justify-center p-8 md:p-12 bg-white/5 md:border-l border-white/10 min-w-[200px]">
            <div class="flex flex-col items-center text-center">
              <img src="/images/lg.png" alt="Guinness World Records" class="w-36 h-auto mb-4" style="filter: brightness(0) invert(1);" />
              <div class="mt-2 px-4 py-1.5 rounded-full" style="background:#fef700;">
                <p class="font-black text-xs tracking-[0.2em] uppercase" style="color:#0C2B5E">OFFICIAL ATTEMPT</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
