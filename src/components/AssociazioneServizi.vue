<script setup>
const servizi = [
  { icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    title: 'Mappiamo il territorio',
    desc: 'Con oltre 4.000 chilometri percorsi a piedi in Italia, conosciamo i cammini dal punto di vista di chi li attraversa davvero. Non itinerari sulla carta, ma percorsi testati passo dopo passo.' },
  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    title: 'Valutiamo il percorso giusto per te',
    desc: 'Analizziamo accessibilità, difficoltà, distanze e contesto. Abbiamo studiato i cammini italiani per aiutarti a scegliere quello più adatto alle tue capacità, ai tuoi tempi e alle tue esigenze reali.' },
  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Attiviamo convenzioni sul territorio',
    desc: 'Grazie a una rete di convenzioni selezionate, ti permettiamo di accedere a soluzioni alimentari adeguate al tuo percorso, rispettando necessità fisiche, ritmi e benefici concreti.' },
  { icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
    title: 'Creiamo il tuo viaggio personalizzato',
    desc: "Costruiamo esperienze su misura, da solo o accompagnato, per farti vivere il Viaggio da Sclero reale: non un format turistico, un percorso autentico, adattato a te." },
  { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Dove vuoi, quando vuoi',
    desc: 'Scegli la regione che preferisci e il periodo più adatto: definiamo insieme il cammino migliore in base al territorio, alla stagione e al tempo che hai a disposizione.' },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Pensiamo a tutto noi',
    desc: 'Dalla progettazione alla logistica, dalla preparazione al supporto lungo il percorso. Esperienza, metodo e competenze per un viaggio gestito con attenzione e responsabilità.' },
]
</script>

<template>
  <section id="associazione" class="relative py-24 md:py-32 overflow-hidden">
    <!-- Faint photo background -->
    <div class="absolute inset-0 z-0">
      <img src="/images/cammin.jpg" alt="" class="w-full h-full object-cover opacity-18" />
      <div class="absolute inset-0 section-light opacity-80"></div>
    </div>
    <div class="relative z-10 section-pad">

      <!-- Associazione info -->
      <div class="grid md:grid-cols-2 gap-16 items-center mb-28">

        <!-- Text column -->
        <div class="reveal">
          <span class="accent-bar"></span>
          <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">L&#39;Associazione APS</p>
          <h2 class="text-4xl md:text-5xl font-bold tx leading-tight mb-8">
            Un Viaggio da Sclero diventa<br>
            <span class="text-accent">Associazione di Promozione Sociale</span>
          </h2>
          <div class="space-y-5 tx2 leading-relaxed text-base">
            <p>
              <strong class="tx font-semibold">Un Viaggio da Sclero – Associazione di Promozione Sociale</strong>
              (APS) nasce per dare continuità a un&#39;esperienza reale e trasformarla in un progetto collettivo, strutturato e accessibile.
              Siamo un&#39;associazione indipendente e apolitica che utilizza il cammino, il tempo e la
              presenza sui territori come strumenti di racconto, consapevolezza e relazione.
            </p>
            <p>
              Crediamo che la disabilità, soprattutto quando è invisibile, non vada spiegata con slogan
              ma attraversata con azioni concrete, misurabili e continuative.
              Per questo promuoviamo progetti che uniscono esperienza diretta, documentazione costante
              e rispetto profondo per le persone e i luoghi coinvolti.
            </p>
            <p>
              <strong class="tx font-semibold">Un Viaggio da Sclero APS</strong> è una associazione iscritta al
              <strong class="tx font-semibold">RUNTS</strong>,
              il Registro Unico Nazionale del Terzo Settore, l&#39;elenco ufficiale gestito dal Ministero
              del Lavoro che raccoglie e certifica tutte le realtà del Terzo Settore.
            </p>
            <p class="tx3">
              L&#39;associazione opera in modo trasparente, con una governance chiara e una visione di lungo
              periodo: costruire valore sociale attraverso percorsi reali, capaci di lasciare segni duraturi
              nel tempo, nei territori e nelle comunità.
            </p>
          </div>
          <div class="mt-10 pt-8 border-t edge">
            <p class="tx italic font-display text-lg leading-relaxed">
              Michele Agostinetto, presidente Un Viaggio da Sclero APS
            </p>
          </div>
        </div>

        <!-- Photo + Quote overlay column -->
        <div class="reveal" style="transition-delay:0.15s">
          <div class="relative rounded-2xl overflow-hidden shadow-xl">
            <img src="/images/foto prova.png" alt="Un Viaggio da Sclero — Associazione"
              class="w-full aspect-[3/4] object-cover object-center" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <svg class="w-10 h-10 text-accent/80 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p class="text-white text-xl md:text-2xl leading-snug font-bold font-display mb-3">
                Nessuno potrà mai dire che nella tua vita non avrai fatto abbastanza strada.
              </p>
              <p class="text-white/60 text-sm">
                Non hai bisogno di una scusa per aver voglia di stare meglio
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Section divider -->
      <div class="section-divider mb-20"></div>

      <!-- Servizi -->
      <div>
        <div class="text-center mb-16 reveal">
          <p class="tx font-semibold text-sm tracking-wide mb-5">Cosa facciamo per te</p>
          <h2 class="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
            <span class="text-accent">Vogliamo farti</span> <span class="tx">vivere l&#39;esperienza</span><br>
            <span class="tx">che tutti</span> <span class="text-accent">dovrebbero provare</span>
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, i) in servizi" :key="i"
            class="card-solid p-8 md:p-10 group reveal"
            :style="{ transitionDelay: (i % 3) * 80 + 'ms' }">
            <div class="mb-8">
              <svg class="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="item.icon"/>
              </svg>
            </div>
            <h3 class="tx font-bold text-base mb-3">{{ item.title }}</h3>
            <p class="tx2 text-sm leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
