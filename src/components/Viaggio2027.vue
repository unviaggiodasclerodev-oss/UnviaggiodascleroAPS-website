<script setup>
const perche = [
  { title: 'Cosa è il Viaggio 2027',
    desc: "Oltre 2.000 chilometri a piedi, per mesi consecutivi, da Sud a Nord. Un percorso continuo, misurabile e documentato giorno dopo giorno, senza eventi spot e senza scorciatoie. Non è simbolico. Succede davvero." },
  { title: 'Perché nasce il Viaggio del 2027',
    desc: "Nel 2022 un cammino a piedi ha attraversato l'Italia trasformando un'esperienza personale in un racconto collettivo. Il 2027 nasce da lì: non come replica, ma come evoluzione naturale di ciò che è già accaduto. Questo non è un'idea nuova. È una continuità." },
  { title: 'Un racconto che accompagna il cammino',
    desc: "Il viaggio viene condiviso lungo il percorso: immagini, video e incontri reali nei territori attraversati. Non per spettacolarizzare, ma per rendere visibile il tempo, la fatica e la presenza. Il racconto segue i passi, non li precede." },
  { title: 'Perché conta',
    desc: "Il Viaggio 2027 non si esaurisce all'arrivo. Lascia relazioni, memoria, contenuti e una traccia concreta nei territori e nelle persone che lo attraversano. Un viaggio che continua anche dopo." },
]

const tappe = [
  { data: 'Dom 21 feb', luogo: 'Taranto',            desc: 'La prima "fermata" dopo i primi 100km',          img: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=600&q=70&fit=crop' },
  { data: 'Ven 26 feb', luogo: 'Matera',             desc: 'La tappa della Basilicata',                      img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&q=70&fit=crop' },
  { data: 'Dom 7 mar',  luogo: 'San Gregorio Magno', desc: 'La prima città della Campania',                  img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70&fit=crop' },
  { data: 'Dom 14 mar', luogo: 'Napoli',             desc: 'La città più incredibile del Viaggio',           img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=70&fit=crop' },
  { data: 'Ven 19 mar', luogo: 'Formia',             desc: 'Per me è come ritornare a casa',                 img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=70&fit=crop' },
  { data: 'Lun 29 mar', luogo: 'Roma',               desc: 'La capitale del mondo',                         img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=70&fit=crop' },
  { data: 'Mar 6 apr',  luogo: 'Orvieto',            desc: 'In Umbria',                                      img: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600&q=70&fit=crop' },
  { data: 'Dom 11 apr', luogo: 'Torrenieri',         desc: 'Un ultimo saluto al centro Italia',              img: '/images/Sentiero-Torrenieri.jpg' },
  { data: 'Dom 18 apr', luogo: 'Pontedera',          desc: 'Inizia la magia della Toscana',                  img: 'https://images.unsplash.com/photo-1543429257-3eb0b65d9f58?w=600&q=70&fit=crop' },
  { data: 'Sab 24 apr', luogo: 'La Spezia',          desc: 'Verso il Nord',                                  img: '/images/via-dellamore.jpeg' },
  { data: 'Sab 1 mag',  luogo: 'Genova',             desc: 'La fine del mare',                               img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=70&fit=crop' },
  { data: 'Ven 7 mag',  luogo: 'Nizza Monferrato',   desc: 'Nelle Langhe piemontesi',                        img: 'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=600&q=70&fit=crop' },
  { data: 'Ven 14 mag', luogo: 'Torino',             desc: 'Inizia il rientro verso casa',                   img: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?w=600&q=70&fit=crop' },
  { data: 'Sab 22 mag', luogo: 'Milano',             desc: 'La capitale economica italiana',                 img: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=600&q=70&fit=crop' },
  { data: 'Dom 30 mag', luogo: 'Verona',             desc: 'La giornata mondiale della Sclerosi Multipla',   img: '/images/verona-arena.jpg' },
]
</script>

<template>
  <!-- Viaggio 2027 -->
  <section id="viaggio-2027" class="section-muted py-24 md:py-32">
    <div class="section-pad">
      <div class="text-center mb-14 reveal">
        <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Affinare ciò che è già successo nel 2022</p>
        <h2 class="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4">Un Viaggio da Sclero 2027</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-5">
        <div v-for="(item, i) in perche" :key="i"
          class="card-solid p-7 reveal"
          :style="{ transitionDelay: i * 80 + 'ms' }">
          <h3 class="text-stone-900 dark:text-white font-semibold mb-3">{{ item.title }}</h3>
          <p class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Le Tappe -->
  <section class="section-light py-24 md:py-32">
    <div class="section-pad">
      <div class="text-center mb-14 reveal">
        <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Le Tappe</p>
        <h2 class="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-3">
          Qui è dove potremo incontrarci
        </h2>
        <p class="text-stone-500 dark:text-stone-400">durante il 2027</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="(tappa, i) in tappe" :key="i"
          class="card-solid overflow-hidden group reveal"
          :style="{ transitionDelay: (i % 6) * 60 + 'ms' }">
          <!-- City photo -->
          <div class="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
            <img :src="tappa.img" :alt="tappa.luogo" loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"></div>
            <span class="absolute bottom-2 left-3 text-white font-bold text-sm tracking-wide font-display">{{ tappa.luogo }}</span>
            <span class="absolute top-2 right-2 bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
          </div>
          <!-- Content -->
          <div class="p-4">
            <p class="text-stone-400 dark:text-stone-500 text-xs mb-1">{{ tappa.data }}</p>
            <p class="text-stone-700 dark:text-stone-300 text-sm leading-snug">{{ tappa.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
