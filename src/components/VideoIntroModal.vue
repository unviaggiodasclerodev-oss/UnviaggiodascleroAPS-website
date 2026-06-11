<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useVideoIntro } from '../composables/useVideoIntro'

const { isOpen, closeModal } = useVideoIntro()
const videoRef = ref<HTMLVideoElement | null>(null)

// Play when modal opens, pause when closes
watch(isOpen, async (open) => {
  if (open) {
    await nextTick()
    videoRef.value?.play()
  } else {
    videoRef.value?.pause()
  }
})

</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8"
        style="background: rgba(0,0,0,0.85);"
      >
        <div class="relative w-full max-w-4xl">

          <!-- Close button -->
          <button
            @click="closeModal"
            class="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white z-10"
            aria-label="Chiudi video"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Video player -->
          <div class="rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
            <video
              ref="videoRef"
              src="/videoplayback.mp4"
              class="w-full h-full object-cover"
              controls
              playsinline
              preload="metadata"
            ></video>
          </div>

          <!-- Skip hint -->
          <p class="text-center text-white/40 text-xs mt-4">
            Premi <span class="font-semibold text-white/60">ESC</span> o clicca fuori per chiudere
          </p>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-fade-enter-active { transition: opacity 0.3s ease; }
.modal-fade-leave-active { transition: opacity 0.2s ease; }
.modal-fade-enter-from,
.modal-fade-leave-to    { opacity: 0; }
</style>
