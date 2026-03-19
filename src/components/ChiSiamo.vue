<script setup>
const mediaItems = [
  { label: 'Fanpage Italia',     logo: '/emittenti/fanpage.png',        href: 'https://www.youtube.com/watch?v=5-BgiGPo_iY' },
  { label: 'Rai News 24',        logo: '/emittenti/rai news 24.png',    href: 'https://www.facebook.com/100063700728000/posts/pfbid029ngFYCebKbg2s6VKGceVwUqGVg4TzT6exfjWvhYYcGtRGEDn8f7cyP1XR2T2V4kal/?d=n' },
  { label: 'La Repubblica',      logo: '/emittenti/la repubblica.png',  href: 'https://bari.repubblica.it/cronaca/2022/08/03/video/dopo_la_diagnosi_di_sclerosi_multipla_percorre_1600_chilometri_a_piedi_non_mi_arrendo-422945343/' },
  { label: 'Uno Mattina Rai',    logo: '/emittenti/1mattina.png',       href: 'https://www.youtube.com/watch?v=bGVMo7RLOXo&t=45s' },
  { label: 'Antenna 3 Veneto',   logo: '/emittenti/a3.png',             href: 'https://www.youtube.com/watch?v=SEgL0eD8uQk' },
  { label: 'Arezzo TV Italia',   logo: '/emittenti/arezzotv.png',       href: 'https://youtu.be/V3Z4PCxQqPM' },
  { label: 'Il Resto del Carlino', logo: '/emittenti/ilrestodc.png',    href: '#' },
  { label: 'Corriere',           logo: '/emittenti/corriereds.png',     href: '#' },
  { label: 'TV2000',             logo: '/emittenti/tv2000.png',         href: '#' },
  { label: 'Rai',                logo: '/emittenti/rai.png',            href: '#' },
]
const doubled = [...mediaItems, ...mediaItems]
</script>

<template>
  <section id="chi-siamo" class="section-light py-24 md:py-32">
    <div class="section-pad">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <!-- Text -->
        <div class="reveal">
          <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Chi siamo</p>
          <h2 class="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white leading-tight mb-8">
            Cos&apos;è Un Viaggio<br>da Sclero
          </h2>
          <div class="space-y-5 text-stone-600 dark:text-white/60 text-lg leading-relaxed">
            <p>Un Viaggio da Sclero nasce nel 2022 da un cammino reale: oltre
              <strong class="text-stone-900 dark:text-white">2.000 chilometri</strong>
              attraversando l&apos;Italia a piedi, giorno dopo giorno, convivendo con una diagnosi di sclerosi multipla.</p>
            <p>Un&apos;esperienza necessaria, che ha trasformato un gesto personale in un racconto condiviso fatto di territori, incontri e presenza continua.</p>
            <p class="text-stone-800 dark:text-white/80">Nel 2027 quel viaggio riparte. Non come replica, ma come evoluzione: più consapevole, più strutturata, più responsabile.</p>
          </div>
          <div class="mt-10 h-px bg-gradient-to-r from-accent to-transparent"></div>
          <p class="mt-6 text-stone-400 dark:text-white/40 text-sm italic">
            Un Viaggio da Sclero è ciò che è stato, e ciò che continua ad andare avanti.
          </p>
        </div>

        <!-- Photo card -->
        <div class="reveal relative rounded-2xl overflow-hidden border border-stone-200 dark:border-white/10" style="transition-delay: 0.15s">
          <img src="/images/IMG_7974.jpg" alt="Il cammino 2022" loading="lazy"
            class="w-full h-80 object-cover opacity-80 dark:opacity-60" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6 space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <p class="text-white font-semibold text-sm">2.000+ km percorsi</p>
                <p class="text-white/60 text-xs">Traversata dell&apos;Italia a piedi, 2022</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <div>
                <p class="text-white font-semibold text-sm">Guinness World Records</p>
                <p class="text-white/60 text-xs">Richiesta ufficiale 2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Media ticker – loghi senza etichetta, grandi -->
    <div class="mt-20 border-t border-b border-stone-100 dark:border-white/10 py-6 overflow-hidden">
      <div class="flex gap-16 animate-ticker whitespace-nowrap items-center">
        <a v-for="(item, i) in doubled" :key="i" :href="item.href"
          target="_blank" rel="noopener"
          class="inline-flex items-center shrink-0 transition-all duration-300">
          <img :src="item.logo" :alt="item.label"
            class="h-10 w-auto object-contain transition-all duration-300"
            style="filter: grayscale(100%) opacity(0.4);"
            @mouseover="e => e.target.style.filter = 'grayscale(0%) opacity(1)'"
            @mouseleave="e => e.target.style.filter = 'grayscale(100%) opacity(0.4)'" />
        </a>
      </div>
    </div>
  </section>
</template>
