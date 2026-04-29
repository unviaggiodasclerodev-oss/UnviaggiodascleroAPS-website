<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import AssociazioneServizi from '../components/AssociazioneServizi.vue'
import StatutoContattiSection from '../components/StatutoContattiSection.vue'
import SponsorPatrocini from '../components/SponsorPatrocini.vue'
import JourneyLine from '../components/JourneyLine.vue'

useScrollReveal()
</script>

<template>
  <div>
    <main id="main-content" class="pt-24">
      <div class="journey-host">
        <JourneyLine />
        <AssociazioneServizi />
        <StatutoContattiSection :show-contatti="false" :show-faq="false" />
        <SponsorPatrocini />
      </div>
    </main>
  </div>
</template>