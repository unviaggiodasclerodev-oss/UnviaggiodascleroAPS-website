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
          <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src="/images/papa.JPG"
              alt="Michele Agostinetto"
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </div>

        <!-- Testo -->
        <div class="reveal order-1 md:order-2">
          <span class="accent-bar"></span>
          <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">L'Associazione APS</p>
          <h2 class="text-4xl md:text-5xl font-bold tx leading-tight mb-8">
            Un Viaggio da Sclero diventa<br>
            <span class="text-accent">Associazione di Promozione Sociale</span>
          </h2>
          <div class="space-y-4 tx2 leading-relaxed text-base">
            <p>
              <strong class="tx font-semibold">Un Viaggio da Sclero – APS</strong>
              nasce per dare continuità a un'esperienza reale e trasformarla in un progetto collettivo,
              strutturato e accessibile. Un'associazione indipendente e apolitica che utilizza il cammino,
              il tempo e la presenza sui territori come strumenti di racconto, consapevolezza e relazione.
            </p>
            <p>
              Iscritta al <strong class="tx font-semibold">RUNTS</strong>, il Registro Unico Nazionale
              del Terzo Settore.
            </p>
          </div>
          <div class="mt-10">
            <button
              @click="router.push('/associazione')"
              class="group inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#cf5e0e] transition-all text-sm tracking-wide shadow-md shadow-accent/20">
              Scopri l'Associazione
              <span class="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
