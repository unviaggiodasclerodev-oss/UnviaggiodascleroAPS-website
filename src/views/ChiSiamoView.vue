<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import ChiSiamo from '../components/ChiSiamo.vue'
import NumeriChiave from '../components/NumeriChiave.vue'
import AssociazioneServizi from '../components/AssociazioneServizi.vue'
import JourneyLine from '../components/JourneyLine.vue'
import CtaBanner from '../components/CtaBanner.vue'

useScrollReveal()
</script>

<template>
  <div>
    <main id="main-content" class="pt-24">
      <div class="journey-host">
        <JourneyLine />

        <ChiSiamo :show-journey-cta="false" />
        <AssociazioneServizi :show-services="false" section-id="associazione-aps" />
        <NumeriChiave :show-chiave="false" />

        <CtaBanner
          title="Scopri il Viaggio 2027"
          subtitle="Oltre 2.000 km a piedi attraverso l'Italia. Non è simbolico. Succede davvero."
          primary-label="Il Viaggio 2027"
          primary-to="/il-viaggio-2027"
        />
      </div>
    </main>
  </div>
</template>