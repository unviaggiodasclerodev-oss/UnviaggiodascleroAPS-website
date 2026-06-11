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
const doubled = [...mediaItems, ...mediaItems]
</script>

<template>
  <section class="section-light py-8">
    <div class="section-pad">
      <p class="text-center tx3 text-xs tracking-[0.15em] uppercase mb-8 font-semibold">Hanno parlato di noi</p>
    </div>
    <div class="overflow-hidden">
      <div class="flex animate-ticker" style="width: max-content">
        <a v-for="(item, i) in doubled" :key="i" :href="item.href"
          target="_blank" rel="noopener"
          class="inline-flex items-center justify-center shrink-0 px-6 md:px-10 hover:opacity-100 transition-opacity duration-300">
          <img :src="item.logo" :alt="item.label"
            class="media-logo max-h-[40px] max-w-[200px] md:max-h-[56px] md:max-w-[280px] w-auto h-auto" />
        </a>
      </div>
    </div>
  </section>
</template>
