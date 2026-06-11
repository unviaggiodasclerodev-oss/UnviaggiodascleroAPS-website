<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

defineProps({
  title:          { type: String, required: true },
  subtitle:       { type: String, default: '' },
  primaryLabel:   { type: String, default: '' },
  primaryTo:      { type: String, default: '' },
  secondaryLabel: { type: String, default: '' },
  secondaryTo:    { type: String, default: '' },
})
</script>

<template>
  <section class="section-muted py-10 md:py-20">
    <div class="section-pad">
      <div class="max-w-2xl mx-auto text-center reveal">
        <span class="accent-bar accent-bar-center"></span>
        <h2 class="text-3xl md:text-4xl font-bold tx mb-4">{{ title }}</h2>
        <p v-if="subtitle" class="tx2 text-lg leading-relaxed mb-10">{{ subtitle }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center" :class="subtitle ? '' : 'mt-8'">
          <button
            v-if="primaryLabel"
            @click="router.push(primaryTo)"
            class="group inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-[#cf5e0e] transition-all text-sm tracking-wide shadow-md shadow-accent/20">
            {{ primaryLabel }}
            <span class="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
          <button
            v-if="secondaryLabel"
            @click="router.push(secondaryTo)"
            class="group inline-flex items-center justify-center gap-2 border-2 border-accent text-accent font-semibold px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-all text-sm tracking-wide">
            {{ secondaryLabel }}
            <span class="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
