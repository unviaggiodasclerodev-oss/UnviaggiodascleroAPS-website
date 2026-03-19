<script setup>
const perche = [
  { title: 'Cosa è il Viaggio 2027', desc: 'Oltre 2.000 chilometri a piedi, per mesi consecutivi, da Sud a Nord. Un percorso continuo, misurabile e documentato giorno dopo giorno. Non è simbolico. Succede davvero.' },
  { title: 'Perché nasce il Viaggio del 2027', desc: "Nel 2022 un cammino a piedi ha attraversato l'Italia trasformando un'esperienza personale in un racconto collettivo. Il 2027 nasce da lì: non come replica, ma come evoluzione. È una continuità." },
  { title: 'Un racconto che accompagna il cammino', desc: 'Il viaggio viene condiviso lungo il percorso: immagini, video e incontri reali nei territori attraversati. Non per spettacolarizzare, ma per rendere visibile il tempo, la fatica e la presenza.' },
  { title: 'Perché conta', desc: "Il Viaggio 2027 non si esaurisce all'arrivo. Lascia relazioni, memoria, contenuti e una traccia concreta nei territori e nelle persone che lo attraversano." },
]

const tappe = [
  { data: 'Dom 21 feb', luogo: 'Taranto',            desc: 'La prima fermata dopo i primi 100km',           img: '/images/ssevero.jpg' },
  { data: 'Ven 26 feb', luogo: 'Matera',             desc: 'La tappa della Basilicata',                     img: null },
  { data: 'Dom 7 mar',  luogo: 'San Gregorio Magno', desc: 'La prima città della Campania',                 img: null },
  { data: 'Dom 14 mar', luogo: 'Napoli',             desc: 'La città più incredibile del Viaggio',          img: null },
  { data: 'Ven 19 mar', luogo: 'Formia',             desc: 'Per me è come ritornare a casa',                img: null },
  { data: 'Lun 29 mar', luogo: 'Roma',               desc: 'La capitale del mondo',                        img: null },
  { data: 'Mar 6 apr',  luogo: 'Orvieto',            desc: 'In Umbria',                                     img: null },
  { data: 'Dom 11 apr', luogo: 'Torrenieri',         desc: 'Un ultimo saluto al centro Italia',             img: '/images/Sentiero-Torrenieri.jpg' },
  { data: 'Dom 18 apr', luogo: 'Pontedera',          desc: 'Inizia la magia della Toscana',                 img: null },
  { data: 'Sab 24 apr', luogo: 'La Spezia',          desc: 'Verso il Nord',                                 img: '/images/via-dellamore.jpeg' },
  { data: 'Sab 1 mag',  luogo: 'Genova',             desc: 'La fine del mare',                              img: null },
  { data: 'Ven 7 mag',  luogo: 'Nizza Monferrato',   desc: 'Nelle Langhe piemontesi',                       img: null },
  { data: 'Ven 14 mag', luogo: 'Torino',             desc: 'Inizia il rientro verso casa',                  img: null },
  { data: 'Sab 22 mag', luogo: 'Milano',             desc: 'La capitale economica italiana',                img: null },
  { data: 'Dom 30 mag', luogo: 'Verona',             desc: 'La giornata mondiale della Sclerosi Multipla',  img: '/images/verona-arena.jpg' },
]
</script>

<template>
  <!-- Viaggio 2027 -->
  <section id="viaggio-2027" class="section-muted py-24 md:py-32">
    <div class="section-pad">
      <div class="text-center mb-14 reveal">
        <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Affinare ciò che è già successo nel 2022</p>
        <h2 class="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white">Un Viaggio da Sclero 2027</h2>
      </div>
      <div class="grid md:grid-cols-2 gap-5">
        <div v-for="(item, i) in perche" :key="i"
          class="card-lift bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-2xl p-7 hover:border-accent/30 transition-colors">
          <h3 class="text-stone-900 dark:text-white font-semibold mb-3">{{ item.title }}</h3>
          <p class="text-stone-500 dark:text-white/50 text-sm leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Tappe -->
  <section class="section-light py-24 md:py-32">
    <div class="section-pad">
      <div class="text-center mb-14">
        <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Le Tappe</p>
        <h2 class="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-3">
          Qui è dove potremo incontrarci
        </h2>
        <p class="text-stone-500 dark:text-white/50">durante il 2027</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(tappa, i) in tappe" :key="i"
          class="group relative overflow-hidden bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 hover:border-accent/25 rounded-xl transition-all duration-300">
          <div v-if="tappa.img" class="relative h-28 overflow-hidden">
            <img :src="tappa.img" :alt="tappa.luogo" loading="lazy"
              class="w-full h-full object-cover opacity-70 dark:opacity-50 group-hover:scale-105 transition-transform duration-500"/>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
          </div>
          <div class="flex items-start gap-4 p-5">
            <div class="shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-xs font-bold group-hover:bg-accent group-hover:text-white transition-colors">
              {{ String(i + 1).padStart(2, '0') }}
            </div>
            <div>
              <p class="text-stone-400 dark:text-white/40 text-xs mb-0.5">{{ tappa.data }}</p>
              <p class="text-stone-900 dark:text-white font-semibold text-sm">{{ tappa.luogo }}</p>
              <p class="text-stone-500 dark:text-white/50 text-xs mt-1">{{ tappa.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
