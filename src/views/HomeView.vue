<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import HeroSection from '../components/HeroSection.vue'
import MediaLogos from '../components/MediaLogos.vue'
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
    <MediaLogos />
    <main id="main-content">
      <div class="journey-host">
        <JourneyLine />
        <ChiSiamo :teaser="true" />

        <!-- Donation CTA -->
        <section class="section-light py-16 md:py-24">
          <div class="section-pad text-center">
            <span class="accent-bar accent-bar-center reveal"></span>
            <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4 reveal">Sostieni il progetto</p>
            <h2 class="text-4xl md:text-6xl font-bold tx leading-tight mb-6 reveal">
              Rendi possibile<br>il Viaggio 2027
            </h2>
            <p class="tx2 text-lg leading-relaxed max-w-xl mx-auto mb-10 reveal">
              Ogni contributo conta. Con il tuo supporto portiamo avanti 2.000&nbsp;km a piedi
              attraverso l'Italia per rendere visibile la sclerosi multipla.
            </p>
            <a
              href="https://www.gofundme.com/f/un-viaggio-da-sclero-2027-2000-km-a-piedi-per-linclusione"
              target="_blank" rel="noopener noreferrer"
              class="group inline-flex items-center gap-3 bg-accent text-white font-bold px-10 py-5 rounded-full hover:bg-[#cf5e0e] transition-all text-base tracking-wide shadow-xl shadow-accent/30 reveal">
              Dona su GoFundMe
              <span class="inline-block group-hover:translate-x-1 transition-transform text-lg">→</span>
            </a>
          </div>
        </section>

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