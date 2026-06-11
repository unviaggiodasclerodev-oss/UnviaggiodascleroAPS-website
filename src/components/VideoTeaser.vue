<template>
  <section class="section-muted py-10 md:py-16">
    <div class="section-pad">
      <div class="text-center mb-10 reveal">
        <span class="accent-bar accent-bar-center"></span>
        <p class="text-xs font-semibold tracking-widest uppercase mb-4" style="color:#F05022">Anteprima</p>
        <h2 class="text-3xl md:text-4xl font-bold font-display tx mb-3">
          Il teaser del <span style="color:#F05022">Viaggio 2027</span>
        </h2>
        <p class="tx2 max-w-xl mx-auto leading-relaxed">
          Un assaggio di quello che verrà. Quattro mesi, 2.000 chilometri, una storia che continua.
        </p>
      </div>

      <div class="w-full max-w-3xl mx-auto reveal">
        <div
          class="rounded-2xl overflow-hidden shadow-2xl border border-orange-200/30 aspect-video"
          style="background:#0A0A0A;"
        >
          <video
            src="/hero.mp4"
            class="w-full h-full object-cover"
            controls
            playsinline
            preload="metadata"
          ></video>
        </div>
      </div>
    </div>
  </section>
</template>
