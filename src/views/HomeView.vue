<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import HeroSection from '../components/HeroSection.vue'
import ChiSiamo from '../components/ChiSiamo.vue'
import Viaggio2027 from '../components/Viaggio2027.vue'
import AssociazioneTeaser from '../components/AssociazioneTeaser.vue'
import SponsorPatrocini from '../components/SponsorPatrocini.vue'

useScrollReveal()
</script>

<template>
  <div>
    <HeroSection />
    <main id="main-content">
      <div class="journey-host">
        <ChiSiamo />
        <Viaggio2027 />
        <AssociazioneTeaser />
        <SponsorPatrocini />
      </div>
    </main>
  </div>
</template>