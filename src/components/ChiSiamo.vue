<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  showJourneyCta: {
    type: Boolean,
    default: true,
  },
  teaser: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()

const mediaItems = [
  { label: 'Fanpage Italia',       logo: '/emittenti/fanpage.png',       href: 'https://www.youtube.com/watch?v=5-BgiGPo_iY' },
  { label: 'Rai News 24',          logo: '/emittenti/rai news 24.png',   href: 'https://www.facebook.com/100063700728000/posts/pfbid029ngFYCebKbg2s6VKGceVwUqGVg4TzT6exfjWvhYYcGtRGEDn8f7cyP1XR2T2V4kal/?d=n' },
  { label: 'La Repubblica',        logo: '/emittenti/la repubblica.png', href: 'https://bari.repubblica.it/cronaca/2022/08/03/video/dopo_la_diagnosi_di_sclerosi_multipla_percorre_1600_chilometri_a_piedi_non_mi_arrendo-422945343/' },
  { label: 'Uno Mattina Rai',      logo: '/emittenti/1mattina.png',      href: 'https://www.youtube.com/watch?v=bGVMo7RLOXo&t=45s' },
  { label: 'Antenna 3 Veneto',     logo: '/emittenti/a3.png',            href: 'https://www.youtube.com/watch?v=SEgL0eD8uQk' },
  { label: 'Arezzo TV Italia',     logo: '/emittenti/arezzotv.png',      href: 'https://youtu.be/V3Z4PCxQqPM' },
  { label: 'Il Resto del Carlino', logo: '/emittenti/ilrestodc.png',     href: '#' },
  { label: 'Corriere',             logo: '/emittenti/corriereds.png',    href: '#' },
  { label: 'TV2000',               logo: '/emittenti/tv2000.png',        href: '#' },
  { label: 'Rai',                  logo: '/emittenti/rai.png',           href: '#' },
]
const doubled = [...mediaItems, ...mediaItems]
</script>

<template>
  <section id="chi-siamo" class="relative py-10 md:py-20 overflow-hidden">
    <!-- Background photo -->
    <div class="absolute inset-0 z-0">
      <img src="/images/IMG_2440.JPG" alt="" class="w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-overlay backdrop-blur-sm"></div>
    </div>

    <div class="relative z-10 section-pad">
      <div :class="['grid gap-16 items-center', props.teaser ? 'max-w-2xl' : 'md:grid-cols-2']">

        <!-- Text -->
        <div class="reveal-left">
          <span class="accent-bar"></span>
          <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Chi siamo</p>
          <h2 class="text-4xl md:text-5xl font-bold tx leading-tight mb-8">
            Cos&#39;è Un Viaggio<br>da Sclero
          </h2>
          <div class="space-y-5 tx2 text-base leading-relaxed">
            <p>
              Un Viaggio da Sclero nasce nel 2022 da un cammino reale: oltre
              <strong class="tx font-semibold">2.000 chilometri</strong>
              attraversando l&#39;Italia a piedi, giorno dopo giorno, convivendo con una diagnosi di sclerosi multipla.
            </p>
            <p>
              Un&#39;esperienza necessaria, che ha trasformato un gesto personale in un racconto condiviso
              fatto di territori, incontri e presenza continua.
            </p>
            <p class="font-semibold tx text-lg">
              Nel 2027 quel viaggio riparte.
            </p>
            <p>
              Non come replica, ma come evoluzione: più consapevole, più strutturata, più responsabile.
            </p>
          </div>
          <div class="mt-8 flex flex-col sm:flex-row items-start gap-4">
            <button v-if="props.showJourneyCta && !props.teaser"
              @click="router.push('/il-viaggio-2027')"
              class="group inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#cf5e0e] transition-all text-sm tracking-wide shadow-md shadow-accent/20">
              Il prossimo Viaggio
              <span class="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
            <button v-if="props.teaser"
              @click="router.push('/chi-siamo')"
              class="group inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#cf5e0e] transition-all text-sm tracking-wide shadow-md shadow-accent/20">
              Scopri chi siamo
              <span class="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </div>
          <div v-if="!props.teaser" class="mt-8 pt-8 border-t edge">
            <p class="tx3 text-sm italic leading-relaxed">
              Un Viaggio da Sclero è ciò che è stato,<br>
              e ciò che continua ad andare avanti.
            </p>
          </div>
        </div>

        <!-- Stat cards aside -->
        <div v-if="!props.teaser" class="reveal grid grid-cols-2 gap-4" style="transition-delay: 0.15s">
          <div class="card-solid p-6 flex flex-col">
            <p class="text-4xl font-bold text-accent mb-1 font-display">2.000+</p>
            <p class="tx font-semibold text-sm mb-1">km percorsi</p>
            <p class="tx3 text-xs leading-relaxed mt-auto">Traversata dell&#39;Italia a piedi nel 2022</p>
          </div>
          <div class="card-solid p-6 flex flex-col">
            <p class="text-4xl font-bold text-accent mb-1 font-display">4</p>
            <p class="tx font-semibold text-sm mb-1">Mesi in cammino</p>
            <p class="tx3 text-xs leading-relaxed mt-auto">Presenza quotidiana lungo il percorso</p>
          </div>
          <!-- Guinness card hidden -->
        </div>
      </div>
    </div>  <!-- end .section-pad -->

    <!-- Media ticker -->
    <!-- Media logos — bottom of section, clearly visible in both themes -->
    <div v-if="!props.teaser" class="relative z-10 mt-16 pt-8 pb-2">
      <div class="section-pad">
        <p class="text-center tx3 text-xs tracking-[0.15em] uppercase mb-8 font-semibold">Hanno parlato di noi</p>
      </div>
      <div class="overflow-hidden">
        <div class="flex animate-ticker" style="width: max-content">
          <a v-for="(item, i) in doubled" :key="i" :href="item.href"
            target="_blank" rel="noopener"
            class="inline-flex items-center justify-center shrink-0 px-6 md:px-10 hover:opacity-100 transition-opacity duration-300">
            <img :src="item.logo" :alt="item.label"
              class="media-logo max-h-[40px] max-w-[200px] md:max-h-[56px] md:max-w-[280px] w-auto h-auto" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
