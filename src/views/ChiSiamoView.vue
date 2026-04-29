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

        <!-- Sezione 1: La storia -->
        <div class="relative">
          <div class="section-pad pb-0">
            <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-2">01 — La storia</p>
          </div>
          <ChiSiamo :show-journey-cta="false" />
        </div>

        <!-- Sezione 2: L'associazione -->
        <div class="relative">
          <div class="section-pad pb-0">
            <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-2">02 — L'associazione</p>
          </div>
          <AssociazioneServizi :show-services="false" section-id="associazione-aps" />
        </div>

        <!-- Sezione 3: I numeri -->
        <div class="relative">
          <div class="section-pad pb-0">
            <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-2">03 — I numeri</p>
          </div>
          <NumeriChiave :show-chiave="false" />
        </div>

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