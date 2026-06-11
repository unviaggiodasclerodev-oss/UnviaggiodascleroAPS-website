<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'
import { useVideoIntro } from '../composables/useVideoIntro'
import VideoSection from '../components/VideoSection.vue'
import VideoTeaser from '../components/VideoTeaser.vue'
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
  // Auto-open on first visit with a short delay
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
        <VideoTeaser />
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
