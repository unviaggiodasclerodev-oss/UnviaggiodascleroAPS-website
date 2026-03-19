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
  <section id="associazione" class="section-light py-24 md:py-32">
    <div class="section-pad">

      <!-- Associazione info -->
      <div class="grid md:grid-cols-2 gap-16 items-start mb-24">

        <!-- Text column -->
        <div class="reveal">
          <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">L&#39;Associazione APS</p>
          <h2 class="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white leading-tight mb-8">
            Un Viaggio da Sclero diventa<br>
            <span class="text-accent">Associazione di Promozione Sociale</span>
          </h2>
          <div class="space-y-5 text-stone-700 dark:text-stone-300 leading-relaxed text-base">
            <p>
              <strong class="text-stone-900 dark:text-white font-semibold">Un Viaggio da Sclero – Associazione di Promozione Sociale</strong>
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
              <strong class="text-stone-900 dark:text-white font-semibold">Un Viaggio da Sclero APS</strong> è una associazione iscritta al
              <strong class="text-stone-900 dark:text-white font-semibold">RUNTS</strong>,
              il Registro Unico Nazionale del Terzo Settore, l&#39;elenco ufficiale gestito dal Ministero
              del Lavoro che raccoglie e certifica tutte le realtà del Terzo Settore.
            </p>
            <p class="text-stone-600 dark:text-stone-400">
              L&#39;associazione opera in modo trasparente, con una governance chiara e una visione di lungo
              periodo: costruire valore sociale attraverso percorsi reali, capaci di lasciare segni duraturi
              nel tempo, nei territori e nelle comunità.
            </p>
          </div>
          <p class="mt-10 text-stone-900 dark:text-white italic font-display text-lg">
            Michele Agostinetto, presidente Un Viaggio da Sclero APS
          </p>
        </div>

        <!-- Photo + Quote overlay column -->
        <div class="reveal" style="transition-delay:0.15s">
          <div class="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="/images/IMG_1301.JPG" alt="Michele Agostinetto"
              class="w-full aspect-[3/4] object-cover object-top" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-7 md:p-9">
              <svg class="w-10 h-10 text-accent mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p class="text-white text-xl md:text-2xl leading-snug font-bold font-display mb-3">
                Nessuno potrà mai dire che nella tua vita non avrai fatto abbastanza strada.
              </p>
              <p class="text-white/70 text-sm">
                Non hai bisogno di una scusa per aver voglia di stare meglio
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Servizi -->
      <div class="border-t border-stone-200 dark:border-white/10 pt-20">
        <div class="text-center mb-12 reveal">
          <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Cosa facciamo per te</p>
          <h2 class="text-4xl font-bold text-stone-900 dark:text-white">
            Vogliamo farti vivere l&#39;esperienza<br>che tutti dovrebbero provare
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="(item, i) in servizi" :key="i"
            class="card-solid p-6 group reveal"
            :style="{ transitionDelay: (i % 3) * 80 + 'ms' }">
            <div class="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
              </svg>
            </div>
            <h3 class="text-stone-900 dark:text-white font-semibold text-sm mb-2">{{ item.title }}</h3>
            <p class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
