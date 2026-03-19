<script setup>
const mediaItems = [
  { label: 'Fanpage Italia',       logo: '/emittenti/fanpage.png',       href: 'https://www.youtube.com/watch?v=5-BgiGPo_iY' },
  { label: 'Rai News 24',          logo: '/emittenti/rai news 24.png',   href: 'https://www.facebook.com/100063700728000/posts/pfbid029ngFYCebKbg2s6VKGceVwUqGVg4TzT6exfjWvhYYcGtRGEDn8f7cyP1XR2T2V4kal/?d=n' },
  { label: 'La Repubblica',        logo: '/emittenti/la repubblica.png', href: 'https://bari.repubblica.it/cronaca/2022/08/03/video/dopo_la_diagnosi_di_sclerosi_multipla_percorre_1600_chilometri_a_piedi_non_mi_arrendo-422945343/' },
  { label: 'Uno Mattina Rai',      logo: '/emittenti/1mattina.png',      href: 'https://www.youtube.com/watch?v=bGVMo7RLOXo&t=45s' },
  { label: 'Antenna 3 Veneto',     logo: '/emittenti/a3.png',            href: 'https://www.youtube.com/watch?v=SEgL0eD8uQk' },
  { label: 'Arezzo TV Italia',     logo: '/emittenti/arezzotv.png',      href: 'https://youtu.be/V3Z4PCxQqPM' },
  { label: 'Il Resto del Carlino', logo: '/emittenti/ilrestodc.png',     href: '#' },
  { label: 'Corriere',             logo: '/emittenti/corriereds.png',    href: '#' },
  { label: 'TV2000',               logo: '/emittenti/tv2000.png',        href: '#' },
  { label: 'Rai',                  logo: '/emittenti/rai.png',           href: '#' },
]
const doubled = [...mediaItems, ...mediaItems, ...mediaItems]
</script>

<template>
  <section id="chi-siamo" class="section-light py-24 md:py-32">
    <div class="section-pad">
      <div class="grid md:grid-cols-2 gap-16 items-start">

        <!-- Text -->
        <div class="reveal">
          <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Chi siamo</p>
          <h2 class="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white leading-tight mb-8">
            Cos&#39;è Un Viaggio<br>da Sclero
          </h2>
          <div class="space-y-5 text-stone-700 dark:text-stone-300 text-base leading-relaxed">
            <p>
              Un Viaggio da Sclero nasce nel 2022 da un cammino reale: oltre
              <strong class="text-stone-900 dark:text-white font-semibold">2.000 chilometri</strong>
              attraversando l&#39;Italia a piedi, giorno dopo giorno, convivendo con una diagnosi di sclerosi multipla.
            </p>
            <p>
              Un&#39;esperienza necessaria, che ha trasformato un gesto personale in un racconto condiviso
              fatto di territori, incontri e presenza continua.
            </p>
            <p class="font-semibold text-stone-900 dark:text-white">
              Nel 2027 quel viaggio riparte.
            </p>
            <p>
              Non come replica, ma come evoluzione: più consapevole, più strutturata, più responsabile.
            </p>
          </div>
          <div class="mt-8 pt-8 border-t border-stone-100 dark:border-white/10">
            <p class="text-stone-500 dark:text-stone-400 text-sm italic leading-relaxed">
              Un Viaggio da Sclero è ciò che è stato,<br>
              e ciò che continua ad andare avanti.
            </p>
          </div>
        </div>

        <!-- Stat cards aside -->
        <div class="reveal grid grid-cols-2 gap-4" style="transition-delay: 0.15s">
          <div class="card-solid p-6">
            <p class="text-4xl font-bold text-accent mb-1 font-display">2.000+</p>
            <p class="text-stone-900 dark:text-white font-semibold text-sm mb-1">km percorsi</p>
            <p class="text-stone-500 dark:text-stone-400 text-xs leading-relaxed">Traversata dell&#39;Italia a piedi nel 2022</p>
          </div>
          <div class="card-solid p-6">
            <p class="text-4xl font-bold text-accent mb-1 font-display">4</p>
            <p class="text-stone-900 dark:text-white font-semibold text-sm mb-1">Mesi in cammino</p>
            <p class="text-stone-500 dark:text-stone-400 text-xs leading-relaxed">Presenza quotidiana lungo il percorso</p>
          </div>
          <div class="card-solid p-6 col-span-2">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
              <div>
                <p class="text-accent font-semibold text-xs tracking-wide uppercase mb-1">Guinness World Records</p>
                <p class="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                  Richiesta ufficiale inoltrata per il cammino più lungo mai percorso da una persona con sclerosi multipla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Media ticker -->
    <div class="mt-20 border-t border-b border-stone-100 dark:border-white/10 py-6 overflow-hidden bg-stone-50 dark:bg-stone-900/20">
      <p class="text-center text-stone-400 text-[10px] tracking-widest uppercase mb-5">Come ci hanno raccontato</p>
      <div class="flex gap-14 animate-ticker whitespace-nowrap items-center px-6">
        <a v-for="(item, i) in doubled" :key="i" :href="item.href"
          target="_blank" rel="noopener"
          class="inline-flex items-center shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300">
          <img :src="item.logo" :alt="item.label"
            class="h-9 w-auto object-contain"
            style="filter: grayscale(100%);"
            @mouseover="e => e.target.style.filter = 'grayscale(0%)'"
            @mouseleave="e => e.target.style.filter = 'grayscale(100%)'" />
        </a>
      </div>
    </div>
  </section>
</template>
