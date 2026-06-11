<template>
  <section class="section-muted py-10 md:py-20">
    <div class="section-pad">
      <div class="text-center mb-16 reveal">
        <span class="accent-bar accent-bar-center"></span>
        <p class="text-xs font-semibold tracking-widest uppercase mb-4" style="color:#F05022">Il Viaggio 2027</p>
        <h2 class="text-4xl md:text-5xl font-bold font-display tx mb-4">
          Un'anteprima del <span style="color:#F05022">Viaggio 2027</span>
        </h2>
        <p class="tx2 max-w-xl mx-auto leading-relaxed">
          Quattro mesi, 2.000 chilometri, una storia che continua.
        </p>
      </div>

      <div class="w-full reveal">
        <div class="rounded-2xl overflow-hidden shadow-2xl border border-orange-200/30 aspect-[16/9] md:aspect-[21/8]"
          style="background:#0A0A0A;">
          <video
            src="/videoplayback.mp4"
            class="w-full h-full object-cover"
            controls
            playsinline
            preload="metadata"
          ></video>
        </div>

        <!-- Stats below video -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mt-7">
          <div class="card-solid p-6 md:p-7 text-center">
            <p class="text-4xl md:text-5xl font-bold font-display" style="color:#F05022">4</p>
            <p class="tx2 text-xs mt-2 uppercase tracking-wide font-semibold">Mesi</p>
          </div>
          <div class="card-solid p-6 md:p-7 text-center">
            <p class="text-4xl md:text-5xl font-bold font-display" style="color:#F05022">2.000+</p>
            <p class="tx2 text-xs mt-2 uppercase tracking-wide font-semibold">Chilometri</p>
          </div>
          <div class="card-solid p-6 md:p-7 text-center">
            <p class="text-4xl md:text-5xl font-bold font-display" style="color:#F05022">2027</p>
            <p class="tx2 text-xs mt-2 uppercase tracking-wide font-semibold">Il prossimo Viaggio</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
