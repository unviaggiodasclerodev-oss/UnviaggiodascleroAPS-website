<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import StatutoContattiSection from '../components/StatutoContattiSection.vue'
import JourneyLine from '../components/JourneyLine.vue'

useScrollReveal()
</script>

<template>
  <div>
    <main id="main-content" class="pt-24">
      <div class="journey-host">
        <JourneyLine />
        <StatutoContattiSection :show-statuto="false" />
      </div>
    </main>
  </div>
</template>