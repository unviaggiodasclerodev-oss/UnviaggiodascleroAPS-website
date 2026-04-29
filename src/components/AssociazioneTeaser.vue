<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <section class="section-light py-10 md:py-20">
    <div class="section-pad">
      <div class="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        <!-- Foto -->
        <div class="reveal-left order-2 md:order-1">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
            <img
              src="/images/spiaggia.jpg"
              alt="Michele Agostinetto"
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>

        <!-- Testo -->
        <div class="reveal order-1 md:order-2">
          <span class="accent-bar"></span>
          <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">L'Associazione APS</p>
          <h2 class="text-4xl md:text-5xl font-bold tx leading-tight mb-8">
            Un progetto collettivo<br>
            <span class="text-accent">a cui puoi far parte</span>
          </h2>
          <p class="tx2 leading-relaxed text-base mb-8">
            Un Viaggio da Sclero è diventata un'Associazione di Promozione Sociale:
            un luogo aperto a chi vuole contribuire con il proprio tempo, le proprie competenze
            o semplicemente la propria presenza.
          </p>
          <div class="flex flex-col gap-3 mb-10">
            <div class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
              <p class="tx2 text-sm">Indipendente e apolitica</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
              <p class="tx2 text-sm">Iscritta al RUNTS — Registro Unico Nazionale del Terzo Settore</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
              <p class="tx2 text-sm">Aperta a soci, volontari e sostenitori</p>
            </div>
          </div>
          <button
            @click="router.push('/associazione')"
            class="group inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#cf5e0e] transition-all text-sm tracking-wide shadow-md shadow-accent/20">
            Come partecipare
            <span class="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </div>

      </div>
    </div>
  </section>
</template>
