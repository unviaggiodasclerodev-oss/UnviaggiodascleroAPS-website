<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { getArticoliOrdinati } from '../data/rassegna'

const items = getArticoliOrdinati()
const trackRef = ref<HTMLElement | null>(null)
const current = ref(0)

function scrollTo(index: number) {
  current.value = index
  const cards = trackRef.value?.children
  if (cards?.[index]) {
    (cards[index] as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }
}

function prev() { if (current.value > 0) scrollTo(current.value - 1) }
function next() { if (current.value < items.length - 1) scrollTo(current.value + 1) }

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}

const categoryLabel: Record<string, string> = {
  articolo: 'Articolo',
  intervista: 'Intervista',
  radio: 'Radio',
  tv: 'Video',
}
</script>

<template>
  <section class="section-light pt-4 md:pt-8 pb-10 md:pb-20">
    <div class="section-pad">

      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 reveal">
        <div>
          <span class="accent-bar"></span>
          <p class="text-xs font-semibold tracking-widest uppercase mb-4" style="color:#F05022">Rassegna stampa</p>
          <h2 class="text-3xl md:text-4xl font-bold font-display tx">
            Parlano di noi
          </h2>
          <p class="tx2 mt-2 max-w-lg leading-relaxed">
            Articoli, interviste e video — la stampa racconta il Viaggio da Sclero.
          </p>
        </div>

        <!-- Nav arrows -->
        <div class="flex items-center gap-3 shrink-0">
          <button
            @click="prev"
            :disabled="current === 0"
            class="w-10 h-10 rounded-full border flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            :class="current === 0 ? 'border-stone-200 text-stone-300' : 'border-accent text-accent hover:bg-accent hover:text-white'"
            aria-label="Precedente"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            @click="next"
            :disabled="current === items.length - 1"
            class="w-10 h-10 rounded-full border flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            :class="current === items.length - 1 ? 'border-stone-200 text-stone-300' : 'border-accent text-accent hover:bg-accent hover:text-white'"
            aria-label="Successivo"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Carousel track -->
      <div
        ref="trackRef"
        class="flex gap-5 overflow-x-auto pb-3 -mx-4 px-4 md:-mx-6 md:px-6"
        style="scroll-snap-type: x mandatory; scrollbar-width: none; -ms-overflow-style: none;"
      >
        <a
          v-for="item in items"
          :key="item.id"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-none w-[82vw] sm:w-[46vw] lg:w-[calc(33.33%-14px)] card-solid rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300 flex flex-col"
          style="scroll-snap-align: start;"
        >
          <!-- Image -->
          <div class="aspect-[16/9] overflow-hidden bg-stone-100">
            <img
              v-if="item.immagine"
              :src="item.immagine"
              :alt="item.titolo"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <svg class="w-10 h-10 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9"/>
              </svg>
            </div>
          </div>

          <!-- Content -->
          <div class="p-5 flex flex-col flex-1">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full" style="background:rgba(240,80,34,0.1); color:#F05022">
                {{ categoryLabel[item.categoria] ?? item.categoria }}
              </span>
              <span class="tx3 text-xs">{{ item.fonte }}</span>
            </div>

            <h3 class="tx font-bold text-sm leading-snug mb-2 line-clamp-3 group-hover:text-accent transition-colors">
              {{ item.titolo }}
            </h3>

            <p class="tx2 text-xs leading-relaxed line-clamp-3 flex-1">
              {{ item.descrizione }}
            </p>

            <p class="tx3 text-xs mt-4 pt-4 border-t border-stone-100 dark:border-white/10">
              {{ formatDate(item.data) }}
            </p>
          </div>
        </a>
      </div>

      <!-- Dots -->
      <div class="flex justify-center gap-2 mt-6">
        <button
          v-for="(_, i) in items"
          :key="i"
          @click="scrollTo(i)"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="i === current ? 'w-5 bg-accent' : 'bg-stone-300 dark:bg-stone-600 hover:bg-stone-400'"
          :aria-label="`Vai all\'articolo ${i + 1}`"
        ></button>
      </div>

      <!-- Link to full press page -->
      <div class="text-center mt-8">
        <RouterLink
          to="/media"
          class="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          Vedi tutta la rassegna stampa
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Hide scrollbar but keep functionality */
div[style*="scrollbar-width"]::-webkit-scrollbar { display: none; }
</style>
