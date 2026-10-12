<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import Patrocini from '../components/Patrocini.vue'
import JourneyLine from '../components/JourneyLine.vue'

useScrollReveal()
</script>

<template>
  <div>
    <main id="main-content" class="pt-24">
      <div class="journey-host">
        <JourneyLine />
        <Patrocini />
      </div>
    </main>
  </div>
</template>
