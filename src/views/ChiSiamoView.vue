<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import ChiSiamo from '../components/ChiSiamo.vue'
import NumeriChiave from '../components/NumeriChiave.vue'
import AssociazioneServizi from '../components/AssociazioneServizi.vue'
import JourneyLine from '../components/JourneyLine.vue'

useScrollReveal()
</script>

<template>
  <div>
    <main id="main-content" class="pt-24">
      <div class="journey-host">
        <JourneyLine />
        <ChiSiamo :show-journey-cta="false" />
        <AssociazioneServizi :show-services="false" section-id="associazione-aps" />
        <NumeriChiave />
      </div>
    </main>
  </div>
</template>