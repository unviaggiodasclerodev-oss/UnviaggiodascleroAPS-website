<script setup>
import { useScrollReveal } from './composables/useScrollReveal.js'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ChiSiamo from './components/ChiSiamo.vue'
import NumeriChiave from './components/NumeriChiave.vue'
import VideoSection from './components/VideoSection.vue'
import Viaggio2027 from './components/Viaggio2027.vue'
import AssociazioneServizi from './components/AssociazioneServizi.vue'
import SponsorPatrocini from './components/SponsorPatrocini.vue'
import StatutoContattiSection from './components/StatutoContattiSection.vue'
import FooterSection from './components/FooterSection.vue'
import BackToTop from './components/BackToTop.vue'
import JourneyLine from './components/JourneyLine.vue'

useScrollReveal()
</script>

<template>
  <a href="#main-content"
    class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold">
    Vai al contenuto principale
  </a>

  <div>
    <NavBar />
    <main id="main-content">
      <HeroSection />
      <!-- Journey line host: relative wrapper so the SVG line can span all sections -->
      <div class="journey-host">
        <JourneyLine />
        <ChiSiamo />
        <NumeriChiave />
        <VideoSection />
        <Viaggio2027 />
        <AssociazioneServizi />
        <SponsorPatrocini />
        <StatutoContattiSection />
      </div>
    </main>
    <FooterSection />
    <BackToTop />
  </div>
</template>
