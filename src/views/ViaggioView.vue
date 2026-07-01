<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'
import { useVideoIntro } from '../composables/useVideoIntro'
import VideoSection from '../components/VideoSection.vue'
import VideoIntroModal from '../components/VideoIntroModal.vue'
import Viaggio2027 from '../components/Viaggio2027.vue'
import NumeriChiave from '../components/NumeriChiave.vue'
import SponsorPatrocini from '../components/SponsorPatrocini.vue'
import CtaBanner from '../components/CtaBanner.vue'
import JourneyLine from '../components/JourneyLine.vue'

useScrollReveal()

const { isFirstVisit, openModal, closeModal } = useVideoIntro()

function handleKeydown(e) {
  if (e.key === 'Escape') closeModal()
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  if (isFirstVisit()) {
    setTimeout(openModal, 800)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div>
    <VideoIntroModal />
    <main id="main-content" class="pt-24">
      <div class="journey-host">
        <JourneyLine />
        <VideoSection />
        <Viaggio2027 />
        <NumeriChiave :show-numeri="false" />
        <SponsorPatrocini />

        <!-- GoFundMe support CTA -->
        <section class="section-light py-10 md:py-20">
          <div class="section-pad">
            <div class="max-w-2xl mx-auto text-center reveal">
              <span class="accent-bar accent-bar-center"></span>
              <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Sostieni il progetto</p>
              <h2 class="text-3xl md:text-4xl font-bold tx mb-4">Rendi possibile il Viaggio 2027</h2>
              <p class="tx2 text-lg leading-relaxed mb-10">
                Ogni contributo conta. Con il tuo supporto possiamo portare avanti 2.000 km a piedi
                attraverso l'Italia e rendere visibile la sclerosi multipla in tutto il paese.
              </p>
              <a
                href="https://www.gofundme.com/f/un-viaggio-da-sclero-2027-2000-km-a-piedi-per-linclusione"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-[#cf5e0e] transition-all text-sm tracking-wide shadow-md shadow-accent/20">
                Sostienici su GoFundMe
                <span class="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

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
