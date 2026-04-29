<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import StatutoContattiSection from '../components/StatutoContattiSection.vue'

useScrollReveal()
</script>

<template>
  <div>
    <main id="main-content" class="pt-24">
      <StatutoContattiSection :show-statuto="false" />
    </main>
  </div>
</template>