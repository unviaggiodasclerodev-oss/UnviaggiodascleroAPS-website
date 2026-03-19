<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() { visible.value = window.scrollY > 500 }
function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="btt">
    <button v-if="visible" @click="scrollTop"
      class="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-stone-900 border border-white/20 text-white hover:bg-accent hover:border-accent transition-all duration-300 flex items-center justify-center shadow-lg"
      aria-label="Torna in cima">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.btt-enter-active, .btt-leave-active { transition: all 0.3s ease; }
.btt-enter-from, .btt-leave-to { opacity: 0; transform: translateY(12px); }
</style>
