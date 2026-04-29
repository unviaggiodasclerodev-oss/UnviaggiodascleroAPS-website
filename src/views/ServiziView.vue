<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import AssociazioneServizi from '../components/AssociazioneServizi.vue'
import SponsorPatrocini from '../components/SponsorPatrocini.vue'

useScrollReveal()
</script>

<template>
  <div>
    <main id="main-content" class="pt-24">
      <div class="journey-host">
        <AssociazioneServizi />
        <SponsorPatrocini />
      </div>
    </main>
  </div>
</template>