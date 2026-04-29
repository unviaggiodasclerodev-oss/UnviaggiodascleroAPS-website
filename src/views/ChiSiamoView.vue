<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import ChiSiamo from '../components/ChiSiamo.vue'
import NumeriChiave from '../components/NumeriChiave.vue'
import JourneyLine from '../components/JourneyLine.vue'

useScrollReveal()
</script>

<template>
  <div>
    <main id="main-content" class="pt-24">
      <div class="journey-host">
        <JourneyLine />
        <ChiSiamo />
        <NumeriChiave />
      </div>
    </main>
  </div>
</template>