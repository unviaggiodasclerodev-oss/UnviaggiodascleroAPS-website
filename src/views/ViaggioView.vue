<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import VideoSection from '../components/VideoSection.vue'
import Viaggio2027 from '../components/Viaggio2027.vue'
import NumeriChiave from '../components/NumeriChiave.vue'
import CtaBanner from '../components/CtaBanner.vue'
import JourneyLine from '../components/JourneyLine.vue'

useScrollReveal()
</script>

<template>
  <div>
    <main id="main-content" class="pt-24">
      <div class="journey-host">
        <JourneyLine />
        <VideoSection />
        <Viaggio2027 />
        <NumeriChiave :show-numeri="false" />
        <CtaBanner
          title="Vuoi far parte del viaggio?"
          subtitle="Puoi partecipare come volontario, sostenitore o semplicemente seguendo il racconto."
          primary-label="Contattaci"
          primary-to="/contatti"
          secondary-label="Scopri l'Associazione"
          secondary-to="/associazione"
        />
      </div>
    </main>
  </div>
</template>