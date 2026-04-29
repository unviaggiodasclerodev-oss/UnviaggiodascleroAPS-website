<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import AssociazioneServizi from '../components/AssociazioneServizi.vue'
import StatutoContattiSection from '../components/StatutoContattiSection.vue'
import SponsorPatrocini from '../components/SponsorPatrocini.vue'
import CtaBanner from '../components/CtaBanner.vue'
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
        <CtaBanner
          title="Scopri il progetto che ci ha dato vita"
          primary-label="Il Viaggio 2027"
          primary-to="/il-viaggio-2027"
          secondary-label="Contattaci"
          secondary-to="/contatti"
        />
      </div>
    </main>
  </div>
</template>