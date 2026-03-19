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
  <section class="section-muted py-24 md:py-32">
    <div class="section-pad">
      <div class="text-center mb-14 reveal">
        <span class="accent-bar accent-bar-center"></span>
        <p class="text-xs font-semibold tracking-widest uppercase mb-4" style="color:#F05022">Il Viaggio 2027</p>
        <h2 class="text-4xl md:text-5xl font-bold font-display tx mb-4">
          Un'anteprima del <span style="color:#F05022">Viaggio 2027</span>
        </h2>
        <p class="tx2 max-w-xl mx-auto leading-relaxed">
          Quattro mesi, 2.000 chilometri, una storia che continua.
        </p>
      </div>

      <!-- Video box -->
      <div class="max-w-4xl mx-auto reveal">
        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-orange-200/30 group"
          style="aspect-ratio: 16/9; background:#0A0A0A;">
          <!-- Thumbnail overlay when not playing -->
          <div v-if="!playing"
            class="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer"
            @click="play">
            <img src="/images/spiaggia.jpg" alt="Video thumbnail"
              class="absolute inset-0 w-full h-full object-cover object-center opacity-75" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>
            <!-- Play button -->
            <button class="relative z-10 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110"
              style="background:#F05022;">
              <svg class="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <p class="relative z-10 mt-5 text-white/80 text-sm font-medium tracking-wide uppercase">Guarda il video</p>
          </div>
          <!-- Actual video -->
          <video
            ref="videoRef"
            src="/hero.mp4"
            class="w-full h-full object-cover"
            controls
            :class="playing ? 'opacity-100' : 'opacity-0'"
            playsinline
          ></video>
        </div>

        <!-- Stats below video -->
        <div class="grid grid-cols-3 gap-4 mt-6">
          <div class="card-solid p-5 text-center">
            <p class="text-3xl font-bold font-display" style="color:#F05022">4</p>
            <p class="tx2 text-xs mt-1 uppercase tracking-wide font-semibold">Mesi</p>
          </div>
          <div class="card-solid p-5 text-center">
            <p class="text-3xl font-bold font-display" style="color:#F05022">2.000+</p>
            <p class="tx2 text-xs mt-1 uppercase tracking-wide font-semibold">Chilometri</p>
          </div>
          <div class="card-solid p-5 text-center">
            <p class="text-3xl font-bold font-display" style="color:#F05022">2027</p>
            <p class="tx2 text-xs mt-1 uppercase tracking-wide font-semibold">Il prossimo Viaggio</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
