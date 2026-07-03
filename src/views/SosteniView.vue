<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'

useScrollReveal()
</script>

<template>
  <div>
    <main id="main-content" class="pt-24">

      <!-- Hero -->
      <section class="relative py-20 md:py-32 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="/images/cammin.jpg" alt="" class="w-full h-full object-cover object-center" />
          <div class="absolute inset-0" style="background:rgba(0,0,0,0.68)"></div>
        </div>
        <div class="relative z-10 section-pad text-center">
          <span class="accent-bar accent-bar-center"></span>
          <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Fai la tua parte</p>
          <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Sostieni il Cammino,<br>colora il Futuro
          </h1>
          <p class="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Ogni nostro passo è possibile grazie a chi sceglie di camminare al nostro fianco.
            Scegli come fare la tua parte.
          </p>
        </div>
      </section>

      <!-- 4 Opzioni -->
      <section class="section-light py-16 md:py-24">
        <div class="section-pad">
          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            <!-- Opzione 1: GoFundMe -->
            <div class="relative rounded-2xl overflow-hidden reveal" style="transition-delay:0ms">
              <img src="/images/spiaggia.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" />
              <div class="absolute inset-0" style="background:rgba(10,10,10,0.72)"></div>
              <div class="relative z-10 p-8 flex flex-col h-full min-h-[340px]">
                <div class="flex items-center gap-3 mb-4">
                  <span class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style="background:#F05022">01</span>
                  <p class="text-accent text-xs font-semibold tracking-widest uppercase">Crowdfunding</p>
                </div>
                <h2 class="text-2xl font-bold text-white mb-3">Partecipa al Crowdfunding Attivo</h2>
                <p class="text-white/65 text-sm leading-relaxed mb-8 flex-1">
                  Sei nel posto giusto per dare una spinta immediata ai nostri obiettivi! Attraverso la nostra
                  campagna ufficiale puoi seguire l'avanzamento della raccolta in tempo reale e aiutarci a
                  finanziare la logistica e la sicurezza dei prossimi cammini.
                </p>
                <a href="https://gofund.me/c9f494b2d" target="_blank" rel="noopener noreferrer"
                  class="group inline-flex items-center gap-2 bg-accent text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#cf5e0e] transition-all text-sm tracking-wide shadow-lg shadow-accent/30 self-start">
                  Sostienici
                  <span class="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            <!-- Opzione 2: Bonifico -->
            <div class="card-solid p-8 rounded-2xl reveal flex flex-col min-h-[340px]" style="transition-delay:80ms">
              <div class="flex items-center gap-3 mb-4">
                <span class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style="background:#F05022">02</span>
                <p class="text-accent text-xs font-semibold tracking-widest uppercase">Bonifico Bancario</p>
              </div>
              <h2 class="text-2xl font-bold tx mb-3">Sostienici con un Bonifico</h2>
              <p class="tx2 text-sm leading-relaxed mb-6 flex-1">
                Ideale per aziende, partner istituzionali o per chi desidera effettuare una donazione
                libera in modo tradizionale e sicuro.
              </p>
              <div class="rounded-xl p-5 space-y-3" style="background:rgba(240,80,34,0.07); border:1px solid rgba(240,80,34,0.15)">
                <div>
                  <p class="text-accent text-[10px] font-bold tracking-widest uppercase mb-0.5">Intestatario</p>
                  <p class="tx font-semibold text-sm">Un Viaggio da Sclero</p>
                </div>
                <div>
                  <p class="text-accent text-[10px] font-bold tracking-widest uppercase mb-0.5">Banca</p>
                  <p class="tx font-semibold text-sm">Banca Intesa</p>
                </div>
                <div>
                  <p class="text-accent text-[10px] font-bold tracking-widest uppercase mb-0.5">IBAN</p>
                  <p class="tx font-mono font-bold text-sm tracking-wide">IT10T0306909606100000416883</p>
                </div>
                <div>
                  <p class="text-accent text-[10px] font-bold tracking-widest uppercase mb-0.5">Causale</p>
                  <p class="tx2 text-xs leading-snug">Erogazione liberale per progetti associativi e Cammino 2027</p>
                </div>
              </div>
            </div>

            <!-- Opzione 3: 5x1000 -->
            <div class="card-solid p-8 rounded-2xl reveal flex flex-col min-h-[340px]" style="transition-delay:160ms">
              <div class="flex items-center gap-3 mb-4">
                <span class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style="background:#F05022">03</span>
                <p class="text-accent text-xs font-semibold tracking-widest uppercase">5x1000</p>
              </div>
              <h2 class="text-2xl font-bold tx mb-3">Dona il tuo 5x1000</h2>
              <p class="tx2 text-sm leading-relaxed mb-6 flex-1">
                Un gesto totalmente gratuito per te, ma di vitale importanza per la nostra Associazione.
                Nella tua dichiarazione dei redditi (Modello 730 o Redditi), firma nel riquadro
                "Enti del Terzo Settore" e inserisci il nostro codice fiscale.
              </p>
              <div class="rounded-xl p-5 text-center" style="background:rgba(240,80,34,0.07); border:1px solid rgba(240,80,34,0.15)">
                <p class="text-accent text-[10px] font-bold tracking-widest uppercase mb-2">Codice Fiscale APS</p>
                <p class="tx font-mono font-bold text-2xl tracking-widest">05613580264</p>
                <p class="tx3 text-xs mt-3 leading-snug">Fai uno screenshot o segnati il codice per averlo a portata di mano durante la dichiarazione</p>
              </div>
            </div>

            <!-- Opzione 4: Partnership -->
            <div class="relative rounded-2xl overflow-hidden reveal" style="transition-delay:240ms">
              <img src="/images/papa.JPG" alt="" class="absolute inset-0 w-full h-full object-cover object-top" />
              <div class="absolute inset-0" style="background:rgba(10,10,10,0.75)"></div>
              <div class="relative z-10 p-8 flex flex-col h-full min-h-[340px]">
                <div class="flex items-center gap-3 mb-4">
                  <span class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style="background:#F05022">04</span>
                  <p class="text-accent text-xs font-semibold tracking-widest uppercase">CSR</p>
                </div>
                <h2 class="text-2xl font-bold text-white mb-3">Diventa Partner Aziendale</h2>
                <p class="text-white/65 text-sm leading-relaxed mb-8 flex-1">
                  Vuoi legare il marchio della tua azienda a un progetto di forte impatto sociale, resilienza
                  e promozione del turismo accessibile? Sostenere Un Viaggio da Sclero APS significa
                  investire in valore umano e dare visibilità ai tuoi principi di Responsabilità Sociale.
                </p>
                <a href="mailto:info@unviaggiodascleroaps.org"
                  class="group inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white hover:text-stone-900 transition-all text-sm tracking-wide self-start">
                  Scrivici per la partnership
                  <span class="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Benefici fiscali -->
      <section class="section-muted py-14 md:py-20">
        <div class="section-pad max-w-3xl mx-auto reveal">
          <div class="text-center mb-10">
            <span class="accent-bar accent-bar-center"></span>
            <p class="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Agevolazioni</p>
            <h2 class="text-3xl md:text-4xl font-bold tx mb-4">Benefici Fiscali per i Donatori</h2>
            <p class="tx2 leading-relaxed">
              Un Viaggio da Sclero è un'Associazione di Promozione Sociale (APS) iscritta al RUNTS.
              Tutte le donazioni godono dei benefici fiscali previsti dall'Art. 83 del D.Lgs. 117/2017.
            </p>
          </div>
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="card-solid p-7 rounded-2xl">
              <p class="text-accent text-xs font-bold tracking-widest uppercase mb-3">Per i Privati</p>
              <p class="tx2 text-sm leading-relaxed">
                Le donazioni sono <strong class="tx">detraibili dall'IRPEF al 30%</strong> (fino a 30.000 €/anno)
                oppure <strong class="tx">deducibili dal reddito netto</strong> nei limiti del 10%.
              </p>
            </div>
            <div class="card-solid p-7 rounded-2xl">
              <p class="text-accent text-xs font-bold tracking-widest uppercase mb-3">Per le Imprese</p>
              <p class="tx2 text-sm leading-relaxed">
                Le donazioni sono <strong class="tx">deducibili dal reddito complessivo netto</strong>
                nei limiti del 10%.
              </p>
            </div>
          </div>
          <p class="tx3 text-xs text-center mt-8 leading-relaxed">
            Per usufruire delle agevolazioni fiscali, effettua la donazione tramite sistemi tracciabili
            (bonifico o carta) e conserva la ricevuta.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Hai domande sulla donazione?"
        subtitle="Scrivici per qualsiasi informazione su come sostenere il progetto."
        primary-label="Contattaci"
        primary-to="/contatti"
      />

    </main>
  </div>
</template>
