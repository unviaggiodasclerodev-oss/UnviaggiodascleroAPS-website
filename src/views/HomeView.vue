<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import HeroSection from '../components/HeroSection.vue'
import ChiSiamo from '../components/ChiSiamo.vue'
import Viaggio2027 from '../components/Viaggio2027.vue'
import AssociazioneTeaser from '../components/AssociazioneTeaser.vue'
import CtaBanner from '../components/CtaBanner.vue'
import JourneyLine from '../components/JourneyLine.vue'

useScrollReveal()
</script>

<template>
  <div>
    <HeroSection />
    <main id="main-content">
      <div class="journey-host">
        <JourneyLine />
        <ChiSiamo :teaser="true" />
        <Viaggio2027 :show-tappe="false" />
        <AssociazioneTeaser />
        <CtaBanner
          title="Hai domande? Siamo qui."
          subtitle="Scrivici per qualsiasi informazione sul viaggio, sull'associazione o per collaborare con noi."
          primary-label="Contattaci"
          primary-to="/contatti"
        />
      </div>
    </main>
  </div>
</template>