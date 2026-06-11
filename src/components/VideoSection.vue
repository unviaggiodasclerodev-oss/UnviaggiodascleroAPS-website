<script setup>
import { ref, onMounted } from 'vue'

const videoRef = ref(null)
const isPlaying = ref(false)
const isMuted = ref(true)

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.muted = true
    videoRef.value.play().then(() => { isPlaying.value = true }).catch(() => {})
  }
})

function togglePlay() {
  if (!videoRef.value) return
  isPlaying.value ? videoRef.value.pause() : videoRef.value.play()
}

function toggleMute() {
  if (!videoRef.value) return
  videoRef.value.muted = !videoRef.value.muted
  isMuted.value = videoRef.value.muted
}
</script>

<template>
  <section class="section-muted py-8 md:py-14">
    <div class="section-pad">

      <!-- Video container with background fill -->
      <div class="relative rounded-2xl overflow-hidden min-h-[50vh] md:min-h-[62vh] reveal" style="background:#0A0A0A">
        <video
          ref="videoRef"
          src="/intro_viaggio.mp4"
          class="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsinline
          preload="metadata"
          @play="isPlaying = true"
          @pause="isPlaying = false"
        ></video>

        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 pointer-events-none"></div>

        <!-- Content bottom-left -->
        <div class="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10">
          <p class="text-xs font-semibold tracking-widest uppercase mb-3 text-white/60">Il Viaggio 2027</p>
          <h2 class="text-4xl md:text-5xl font-bold font-display text-white mb-3">
            Un'anteprima del <span style="color:#F05022">Viaggio 2027</span>
          </h2>
          <p class="text-white/65 max-w-xl leading-relaxed">
            Quattro mesi, 2.000 chilometri, una storia che continua.
          </p>
        </div>

        <!-- Controls bottom-right -->
        <div class="absolute bottom-4 right-4 z-10 flex gap-2">
          <button
            @click="toggleMute"
            class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-colors text-white"
            :aria-label="isMuted ? 'Attiva audio' : 'Disattiva audio'"
          >
            <svg v-if="isMuted" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>
            </svg>
            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15.536 8.464a5 5 0 010 7.072M12 6v12M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
            </svg>
          </button>

          <button
            @click="togglePlay"
            class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-colors text-white"
            :aria-label="isPlaying ? 'Pausa' : 'Riproduci'"
          >
            <svg v-if="isPlaying" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
            <svg v-else class="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Stats below video, same container -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mt-7">
        <div class="card-solid p-6 md:p-7 text-center">
          <p class="text-4xl md:text-5xl font-bold font-display" style="color:#F05022">4</p>
          <p class="tx2 text-xs mt-2 uppercase tracking-wide font-semibold">Mesi</p>
        </div>
        <div class="card-solid p-6 md:p-7 text-center">
          <p class="text-4xl md:text-5xl font-bold font-display" style="color:#F05022">2.000+</p>
          <p class="tx2 text-xs mt-2 uppercase tracking-wide font-semibold">Chilometri</p>
        </div>
        <div class="card-solid p-6 md:p-7 text-center">
          <p class="text-4xl md:text-5xl font-bold font-display" style="color:#F05022">2027</p>
          <p class="tx2 text-xs mt-2 uppercase tracking-wide font-semibold">Il prossimo Viaggio</p>
        </div>
      </div>

    </div>
  </section>
</template>
