<script setup>
// Patrocini istituzionali (gratuiti — Comuni, enti pubblici, enti patrocinanti)
const patrociniIstituzionali = [
  {
    nome: 'Regione del Veneto',
    logo: '/patrocini/regione-veneto.png',
    link: 'https://www.regione.veneto.it',
    // Official monochrome mark (protocollo di concessione patrocinio 45539/2026) —
    // must be used exactly as supplied, not recolored on hover like the others.
    fixedMono: true,
  },
  {
    nome: 'Comune di Valdobbiadene',
    logo: '/patrocini/Stemma-di-Valdobbiadene.webp',
    link: 'https://comune.valdobbiadene.tv.it',
    showLabel: true,
  },
  {
    nome: 'Colline del Prosecco di Conegliano e Valdobbiadene',
    logo: '/patrocini/Associazione_color-positivo (7) (4).png',
    link: 'https://collineconeglianovaldobbiadene.it/',
  },
]

// Partnership / sponsor tecniche — in arrivo
const partnership = []
</script>

<template>
  <section id="patrocini" class="section-light py-16 md:py-24">
    <div class="section-pad">

      <!-- Header -->
      <div class="text-center mb-14 reveal">
        <span class="accent-bar accent-bar-center"></span>
        <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Con il sostegno di</p>
        <h2 class="text-3xl md:text-4xl font-bold tx">Patrocini & Partnership</h2>
      </div>

      <!-- Patrocini istituzionali -->
      <div class="mb-14 reveal">
        <h3 class="text-center text-xs font-semibold tx3 tracking-[0.15em] uppercase mb-8">Patrocini istituzionali</h3>
        <div class="flex flex-wrap justify-center items-center gap-x-14 gap-y-10">
          <a v-for="p in patrociniIstituzionali" :key="p.nome"
            :href="p.link" target="_blank" rel="noopener"
            class="group flex flex-col items-center gap-3 text-center w-32">
            <img :src="p.logo" :alt="p.nome"
              :class="['h-16 md:h-20 w-auto object-contain', p.fixedMono ? '' : 'patrocinio-logo']" />
            <span v-if="p.showLabel" class="text-xs tx3 group-hover:text-accent transition-colors leading-tight">{{ p.nome }}</span>
          </a>
        </div>
      </div>

      <!-- Divider -->
      <div class="section-divider max-w-xs mx-auto mb-14"></div>

      <!-- Partnership / sponsor tecniche -->
      <div class="reveal">
        <h3 class="text-center text-xs font-semibold tx3 tracking-[0.15em] uppercase mb-8">Partnership tecniche</h3>
        <div v-if="partnership.length" class="flex flex-wrap justify-center items-center gap-x-14 gap-y-10">
          <a v-for="p in partnership" :key="p.nome"
            :href="p.link" target="_blank" rel="noopener"
            class="group flex flex-col items-center gap-3 text-center w-32">
            <img :src="p.logo" :alt="p.nome"
              :class="['h-16 md:h-20 w-auto object-contain', p.fixedMono ? '' : 'patrocinio-logo']" />
            <span v-if="p.showLabel" class="text-xs tx3 group-hover:text-accent transition-colors leading-tight">{{ p.nome }}</span>
          </a>
        </div>
        <p v-else class="text-center text-sm tx3">In fase di definizione</p>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Grayscale-with-color-on-hover only where hover actually means something
   (mouse pointer). On touch devices there's no hover, so the logos just
   show in full color from the start instead of staying permanently dim. */
@media (hover: hover) and (pointer: fine) {
  .patrocinio-logo {
    filter: grayscale(1) opacity(0.65);
    transition: filter 0.3s ease, opacity 0.3s ease;
  }
  a:hover .patrocinio-logo {
    filter: none;
    opacity: 1;
  }
}
</style>
