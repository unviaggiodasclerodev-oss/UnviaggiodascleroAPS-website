<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import VideoSection from '../components/VideoSection.vue'
import Viaggio2027 from '../components/Viaggio2027.vue'

useScrollReveal()
</script>

<template>
  <div>
    <main id="main-content" class="pt-24">
      <div class="journey-host">
        <VideoSection />
        <Viaggio2027 />
      </div>
    </main>
  </div>
</template>