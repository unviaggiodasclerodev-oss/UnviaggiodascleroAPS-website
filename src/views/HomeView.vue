<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import HeroSection from '../components/HeroSection.vue'
import MediaLogos from '../components/MediaLogos.vue'
import ChiSiamo from '../components/ChiSiamo.vue'
import Viaggio2027 from '../components/Viaggio2027.vue'
import AssociazioneTeaser from '../components/AssociazioneTeaser.vue'
import CtaBanner from '../components/CtaBanner.vue'
import JourneyLine from '../components/JourneyLine.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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

        <!-- Donation teaser -->
        <section class="section-light py-16 md:py-24">
          <div class="section-pad text-center">
            <span class="accent-bar accent-bar-center reveal"></span>
            <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4 reveal">Sostieni il progetto</p>
            <h2 class="text-4xl md:text-5xl font-bold tx leading-tight mb-6 reveal">
              Rendi possibile<br>il Viaggio 2027
            </h2>
            <p class="tx2 text-lg leading-relaxed max-w-xl mx-auto mb-10 reveal">
              Ogni nostro passo è possibile grazie a chi sceglie di camminare al nostro fianco.
              Crowdfunding, bonifico, 5x1000 o partnership: scegli come fare la tua parte.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center reveal">
              <button
                @click="router.push('/sostieni')"
                class="group inline-flex items-center justify-center gap-2 bg-accent text-white font-bold px-9 py-4 rounded-full hover:bg-[#cf5e0e] transition-all text-sm tracking-wide shadow-lg shadow-accent/30">
                Scopri come sostenerci
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <a href="https://gofund.me/c9f494b2d" target="_blank" rel="noopener noreferrer"
                class="group inline-flex items-center justify-center gap-2 border-2 border-accent text-accent font-semibold px-9 py-4 rounded-full hover:bg-accent hover:text-white transition-all text-sm tracking-wide">
                Dona ora su GoFundMe
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
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