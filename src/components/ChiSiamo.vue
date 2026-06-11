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
</script>

<template>
  <section id="chi-siamo" class="relative py-10 md:py-20 overflow-hidden">
    <!-- Background photo -->
    <div class="absolute inset-0 z-0">
      <img src="/images/michele.JPG" alt="" class="w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-overlay backdrop-blur-sm"></div>
    </div>

    <div class="relative z-10 section-pad">
      <div class="grid md:grid-cols-2 gap-16 items-center">

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

        <!-- Stat cards — both teaser and full page -->
        <div class="reveal grid grid-cols-2 gap-4" style="transition-delay: 0.15s">
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

  </section>

</template>
