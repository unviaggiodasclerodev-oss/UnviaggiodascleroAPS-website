<script setup>
import { ref } from 'vue'

const playing = ref(false)
const videoRef = ref(null)

function play() {
  playing.value = true
  videoRef.value?.play()
}
</script>

<template>
  <section class="section-muted py-10 md:py-16">
    <div class="section-pad">
      <div class="text-center mb-10 reveal">
        <span class="accent-bar accent-bar-center"></span>
        <p class="text-xs font-semibold tracking-widest uppercase mb-4" style="color:#F05022">Anteprima</p>
        <h2 class="text-3xl md:text-4xl font-bold font-display tx mb-3">
          Il teaser del <span style="color:#F05022">Viaggio 2027</span>
        </h2>
        <p class="tx2 max-w-xl mx-auto leading-relaxed">
          Un assaggio di quello che verrà. Quattro mesi, 2.000 chilometri, una storia che continua.
        </p>
      </div>

      <div class="w-full max-w-3xl mx-auto reveal">
        <div
          class="relative rounded-2xl overflow-hidden shadow-2xl border border-orange-200/30 group aspect-video"
          style="background:#0A0A0A;"
        >
          <!-- Thumbnail overlay -->
          <div
            v-if="!playing"
            class="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer"
            @click="play"
          >
            <img
              src="/images/spiaggia.jpg"
              alt="Anteprima teaser"
              class="absolute inset-0 w-full h-full object-cover object-center opacity-75"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>
            <button
              class="relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110"
              style="background:#F05022;"
            >
              <svg class="w-9 h-9 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <p class="relative z-10 mt-4 text-white/80 text-sm font-medium tracking-wide uppercase">Guarda il teaser</p>
          </div>

          <video
            ref="videoRef"
            src="/hero.mp4"
            class="w-full h-full object-cover"
            controls
            :class="playing ? 'opacity-100' : 'opacity-0'"
            playsinline
          ></video>
        </div>
      </div>
    </div>
  </section>
</template>
