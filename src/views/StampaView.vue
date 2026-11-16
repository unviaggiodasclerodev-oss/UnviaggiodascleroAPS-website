<script setup>
import { ref } from 'vue'

// ---------------------------------------------------------------------
// Copy-to-clipboard helper — shared by every "Copia testo" button
// ---------------------------------------------------------------------
const copiedId = ref(null)
async function copyText(id, text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    // Fallback for browsers/contexts without Clipboard API permission
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
  copiedId.value = id
  setTimeout(() => { if (copiedId.value === id) copiedId.value = null }, 2000)
}

// ---------------------------------------------------------------------
// Indice laterale
// ---------------------------------------------------------------------
const indice = [
  { id: 'chi-siamo-breve',  label: 'Chi siamo' },
  { id: 'scheda',           label: 'Scheda sintetica' },
  { id: 'mission',          label: 'Mission e valori' },
  { id: 'storia',           label: 'Storia e tappe' },
  { id: 'cosa-facciamo',    label: 'Cosa facciamo' },
  { id: 'numeri',           label: 'I numeri' },
  { id: 'persone',          label: 'Persone di riferimento' },
  { id: 'citazioni',        label: 'Citazioni' },
  { id: 'comunicati',       label: 'Comunicati e rassegna' },
  { id: 'materiali',        label: 'Materiali scaricabili' },
  { id: 'linee-guida',      label: "Linee guida d'uso" },
  { id: 'faq',              label: 'FAQ' },
  { id: 'contatti-stampa',  label: 'Contatti stampa' },
]

// ---------------------------------------------------------------------
// Contenuti — sourced from the public site where possible; placeholders
// are marked explicitly rather than invented.
// ---------------------------------------------------------------------
const boilerplate = `Un Viaggio da Sclero è un'Associazione di Promozione Sociale (APS) nata da un cammino reale: oltre 2.000 km a piedi attraverso l'Italia, in 4 mesi, convivendo con una diagnosi di sclerosi multipla. L'associazione, costituita nel 2026 e iscritta al RUNTS (Registro Unico Nazionale del Terzo Settore), promuove accessibilità, inclusione e consapevolezza sulla disabilità invisibile attraverso il cammino, la narrazione e la presenza continua sui territori. Nel 2027 l'esperienza del 2022 riparte con una nuova edizione nazionale, con tappe in circa 100 comuni italiani.`

const schedaSintetica = [
  { label: 'Nome completo',        value: 'Un Viaggio da Sclero – Associazione di Promozione Sociale (APS)' },
  { label: 'Anno di fondazione',   value: 'Progetto/cammino: 2022 · Costituzione dell’APS: 2026' },
  { label: 'Forma giuridica',      value: 'Associazione di Promozione Sociale (APS), iscritta al RUNTS' },
  { label: 'C.F. / P.IVA',         value: '05613580264' },
  { label: 'Sede legale',          value: 'Valdobbiadene (TV), Veneto — [DA COMPILARE: indirizzo completo]' },
  { label: 'Sedi operative',       value: '[DA COMPILARE: eventuali altre sedi]' },
  { label: 'Ambito di attività',   value: 'Terzo Settore — cammino, disabilità invisibile (sclerosi multipla), inclusione sociale' },
  { label: 'Soci / volontari',     value: '[DA COMPILARE: numero aggiornato]' },
  { label: 'Area geografica',      value: 'Italia — cammino nazionale, tappe in circa 100 comuni nell’edizione 2027' },
  { label: 'Sito web',             value: 'unviaggiodascleroaps.org' },
  { label: 'Social',               value: 'Instagram @unviaggiodascleroaps · Facebook · LinkedIn' },
]

const valori = [
  { title: 'Attraversamento reale dell’Italia', desc: 'Oltre 2.000 km a piedi, per quattro mesi consecutivi: non un simbolo, un fatto verificabile.' },
  { title: 'Progetto già validato',                  desc: 'Il 2027 nasce da un’esperienza concreta e dimostrata nel 2022, non da un’ipotesi.' },
  { title: 'Continuità quotidiana',                   desc: 'La forza del viaggio è nella costanza, non nell’eccezione.' },
  { title: 'Valore che resta',                        desc: 'Contenuti, relazioni e memoria che continuano oltre l’arrivo.' },
]

const tappe = [
  { anno: '2022', fatto: 'Primo "Viaggio da Sclero": oltre 2.000 km a piedi attraverso l’Italia in 4 mesi, con una diagnosi di sclerosi multipla.' },
  { anno: '2026', fatto: 'Nasce a Valdobbiadene (TV) "Un Viaggio da Sclero APS", associazione iscritta al RUNTS.' },
  { anno: '2027', fatto: 'Nuova edizione nazionale del Viaggio, con tappe ufficiali in circa 100 comuni italiani.' },
]

const progetti = [
  { title: 'Il Viaggio 2027',
    desc: 'Cammino nazionale di oltre 2.000 km attraverso l’Italia, con tappe pubbliche in circa 100 comuni, per raccontare la sclerosi multipla e la disabilità invisibile da dentro l’esperienza quotidiana.',
    risultati: 'Edizione 2022: 750+ persone presenti alle tappe, 60 emittenti TV ed oltre 130 testate stampa/online.' },
  { title: 'sclHEROES',
    desc: 'Format podcast/YouTube che raccoglie le storie di persone con sclerosi multipla, raccontate in diretta e trasformate in episodi.',
    risultati: '[DA COMPILARE: numero episodi/storie raccolte ad oggi]' },
  { title: 'Percorsi personalizzati',
    desc: 'Mappatura e valutazione di cammini italiani per accessibilità, difficoltà e contesto, con convenzioni territoriali dedicate a chi convive con la sclerosi multipla.',
    risultati: '[DA COMPILARE: dati di utilizzo/beneficiari]' },
]

const numeri = [
  { value: '2.000+', label: 'km percorsi a piedi', anno: '2022' },
  { value: '4',       label: 'mesi di cammino continuativo', anno: '2022' },
  { value: '60',      label: 'emittenti TV, oltre 6M di share Auditel', anno: '2022' },
  { value: '130+',    label: 'testate stampa/online, oltre 8M di letture Audipress/Nielsen', anno: '2022' },
  { value: '750+',    label: 'persone presenti fisicamente alle tappe', anno: '2022' },
  { value: '~100',    label: 'comuni italiani coinvolti nella nuova edizione', anno: '2027' },
]

const persone = [
  {
    nome: 'Michele Agostinetto',
    ruolo: 'Presidente, Un Viaggio da Sclero APS',
    foto: '/images/michele.JPG',
    bio: 'Ideatore e protagonista del cammino "Un Viaggio da Sclero": oltre 2.000 km a piedi attraverso l’Italia nel 2022 convivendo con una diagnosi di sclerosi multipla. Dal 2026 presidente dell’omonima Associazione di Promozione Sociale, guida l’edizione 2027 del Viaggio.',
    disponibilita: 'Disponibile per interviste (testo, radio, TV). Richieste tramite i contatti stampa in fondo alla pagina.',
  },
]

const citazioni = [
  { testo: 'Nessuno potrà mai dire che nella tua vita non avrai fatto abbastanza strada.', autore: 'Michele Agostinetto, presidente Un Viaggio da Sclero APS' },
  { testo: 'Non hai bisogno di una scusa per aver voglia di stare meglio.', autore: 'Michele Agostinetto, presidente Un Viaggio da Sclero APS' },
  { testo: 'Il Viaggio è solo la partenza, l’obiettivo è la condivisione.', autore: 'Un Viaggio da Sclero APS' },
]

// Comunicati stampa ufficiali dell'associazione — vuoto per ora
const comunicati = []

// Rassegna stampa: copertura di terze parti, dati reali presi da /media
const rassegna = [
  { data: '2026-06-16', titolo: 'Intervista a TV2000 — Un Viaggio da Sclero', fonte: 'TV2000', link: 'https://youtu.be/Fcp2LP0N4TE?si=uG4nnJWdl670TV6M' },
  { data: '2026-05-02', titolo: 'Il Viaggio 2027 — Un Viaggio da Sclero APS', fonte: 'YouTube', link: 'https://www.youtube.com/watch?v=-WPNvso6chY' },
  { data: '2026-05-01', titolo: '2000 km a piedi con la sclerosi multipla: il Viaggio da Sclero riparte nel 2027', fonte: 'TrevisoToday', link: 'https://www.trevisotoday.it/blog/2000-km-piedi-sclerosi-multipla-2027.html' },
  { data: '2026-05-01', titolo: 'Sclerosi multipla: nasce l’APS per il viaggio nazionale del 2027', fonte: 'Zazoom', link: 'https://www.zazoom.it/2026-05-01/sclerosi-multipla-nasce-laps-per-il-viaggio-nazionale-del-2027/19105118/' },
  { data: '2026-04-29', titolo: 'Sclerosi multipla: nasce l’APS per il viaggio nazionale del 2027', fonte: 'AMEVE', link: 'https://ameve.eu/sclerosi-multipla-nasce-laps-per-il-viaggio-nazionale-del-2027/' },
  { data: '2026-04-29', titolo: 'Oltre 2000 km a piedi con la sclerosi multipla: un Viaggio da Sclero riparte nel 2027', fonte: 'Manduria Oggi', link: 'https://www.manduriaoggi.it/?news=74775' },
  { data: '2026-04-29', titolo: '"Un Viaggio da Sclero" diventa associazione e pensa in grande per l’edizione 2027', fonte: 'QDPnews', link: 'https://www.qdpnews.it/comuni/valdobbiadene/un-viaggio-da-sclero-diventa-associazione-e-pensa-in-grande-per-ledizione-2027/' },
]
function formatDataIt(iso) {
  return new Date(iso).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}

const materiali = [
  { nome: 'Logo — versione per sfondi scuri', formato: 'PNG', peso: '—', href: '/logo.png' },
  { nome: 'Logo — versione per sfondi chiari', formato: 'JPG', peso: '—', href: '/logo-light.jpg' },
  { nome: 'Statuto dell’associazione', formato: 'PDF', peso: '—', href: '/statuto/Statuto Unviaggiodasclero.pdf' },
]
const materialiMancanti = [
  'Foto in alta risoluzione con didascalia e crediti — [DA COMPILARE]',
  'Cartella stampa completa in PDF — [DA COMPILARE]',
]
const palette = [
  { nome: 'Accent (arancio)', hex: '#F05022' },
  { nome: 'Giallo',           hex: '#fef700' },
  { nome: 'Testo scuro',      hex: '#1C1917' },
]

function scaricaTutto() {
  for (const m of materiali) {
    const a = document.createElement('a')
    a.href = m.href
    a.target = '_blank'
    a.rel = 'noopener'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }
}

const faqs = [
  { q: 'Chi siete, in breve?',
    a: 'Un Viaggio da Sclero è un’Associazione di Promozione Sociale nata da un cammino reale di oltre 2.000 km attraverso l’Italia nel 2022, con una diagnosi di sclerosi multipla. Dal 2026 è un’APS iscritta al RUNTS; nel 2027 organizza una nuova edizione nazionale del Viaggio.' },
  { q: 'Come siete finanziati?',
    a: 'Attraverso quote associative, donazioni, contributi pubblici e privati, sponsorizzazioni e attività coerenti con le finalità dell’associazione. Le cariche associative sono svolte principalmente in forma gratuita.' },
  { q: 'Il Viaggio 2027 è già iniziato?',
    a: 'No: è in programma, con tappe ufficiali previste in circa 100 comuni italiani. Sarà interamente videodocumentato.' },
  { q: 'Posso camminare insieme a voi durante le tappe?',
    a: 'Il cammino non prevede la partecipazione di altre persone lungo le giornate di percorso, ma sarà possibile incontrare l’associazione nelle tappe pubbliche.' },
  { q: 'Avete patrocini istituzionali?',
    a: 'Sì — tra gli altri, Regione del Veneto, Comune di Valdobbiadene e Colline del Prosecco di Conegliano e Valdobbiadene. L’elenco aggiornato è pubblico sul sito.' },
  { q: 'Come richiedo un’intervista con il presidente?',
    a: 'Scrivendo ai contatti stampa in fondo a questa pagina, indicando testata, formato (testo/radio/TV) e tempistiche della pubblicazione.' },
  { q: 'Posso utilizzare foto, loghi o video del sito nei miei articoli?',
    a: 'Sì, seguendo le linee guida d’uso indicate in questa pagina (sezione "Materiali scaricabili" e "Linee guida d’uso"), citando sempre la fonte.' },
  { q: 'Quali sono i tempi di risposta dell’ufficio stampa?',
    a: '[DA COMPILARE: tempo medio di risposta]' },
]
</script>

<template>
  <div>
    <main id="main-content" class="pt-24 pb-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">

        <!-- 1. Intestazione -->
        <header class="py-12 md:py-16 border-b edge">
          <p class="text-xs font-semibold tracking-widest uppercase mb-3" style="color:#F05022">Media kit</p>
          <h1 class="text-4xl md:text-5xl font-bold tx mb-4">Area Stampa</h1>
          <p class="tx2 text-lg max-w-2xl leading-relaxed mb-6">
            Tutto ciò che serve per scrivere un articolo su Un Viaggio da Sclero APS: dati, numeri,
            materiali e contatti diretti — senza bisogno di chiederci nulla.
          </p>
          <a href="#contatti-stampa"
            class="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-full hover:bg-[#cf5e0e] transition-all text-sm">
            Contatta l'ufficio stampa
          </a>
        </header>

        <div class="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-16 py-10 md:py-16">

          <!-- Indice laterale -->
          <nav aria-label="Indice Area Stampa" class="lg:sticky lg:top-24 lg:self-start">
            <p class="text-xs font-semibold tracking-widest uppercase tx3 mb-3">Indice</p>
            <ul class="flex lg:flex-col gap-x-4 gap-y-2 overflow-x-auto lg:overflow-visible text-sm pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0">
              <li v-for="item in indice" :key="item.id" class="shrink-0">
                <a :href="`#${item.id}`" class="tx2 hover:text-accent transition-colors whitespace-nowrap lg:whitespace-normal">{{ item.label }}</a>
              </li>
            </ul>
          </nav>

          <!-- Contenuto -->
          <div class="space-y-16 min-w-0">

            <!-- 2. Chi siamo in breve -->
            <section id="chi-siamo-breve" class="scroll-mt-24">
              <h2 class="text-2xl font-bold tx mb-4">Chi siamo, in breve</h2>
              <div class="card-solid p-6 md:p-8">
                <p class="tx2 leading-relaxed mb-5">{{ boilerplate }}</p>
                <button @click="copyText('boilerplate', boilerplate)"
                  class="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition-all">
                  {{ copiedId === 'boilerplate' ? 'Copiato ✓' : 'Copia testo' }}
                </button>
              </div>
            </section>

            <!-- 3. Scheda sintetica -->
            <section id="scheda" class="scroll-mt-24">
              <h2 class="text-2xl font-bold tx mb-4">Scheda sintetica</h2>
              <dl class="card-solid divide-y edge">
                <div v-for="row in schedaSintetica" :key="row.label" class="grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-4 p-4 sm:p-5">
                  <dt class="tx3 text-sm font-semibold">{{ row.label }}</dt>
                  <dd class="tx2 text-sm leading-relaxed">{{ row.value }}</dd>
                </div>
              </dl>
            </section>

            <!-- 4. Mission e valori -->
            <section id="mission" class="scroll-mt-24">
              <h2 class="text-2xl font-bold tx mb-4">Mission e valori</h2>
              <p class="card-solid p-6 md:p-8 tx font-semibold text-lg leading-relaxed mb-6">
                Trasformare un cammino personale con la sclerosi multipla in un progetto collettivo di
                consapevolezza, accessibilità e relazione lungo i territori italiani.
              </p>
              <div class="grid sm:grid-cols-2 gap-4">
                <div v-for="v in valori" :key="v.title" class="card-solid p-5">
                  <h3 class="tx font-bold text-sm mb-2">{{ v.title }}</h3>
                  <p class="tx2 text-sm leading-relaxed">{{ v.desc }}</p>
                </div>
              </div>
            </section>

            <!-- 5. Storia e tappe -->
            <section id="storia" class="scroll-mt-24">
              <h2 class="text-2xl font-bold tx mb-4">Storia e tappe principali</h2>
              <ol class="card-solid divide-y edge">
                <li v-for="t in tappe" :key="t.anno" class="grid sm:grid-cols-[100px_1fr] gap-1 sm:gap-4 p-4 sm:p-5">
                  <span class="font-bold font-display text-2xl" style="color:#F05022">{{ t.anno }}</span>
                  <span class="tx2 text-sm leading-relaxed self-center">{{ t.fatto }}</span>
                </li>
              </ol>
            </section>

            <!-- 6. Cosa facciamo -->
            <section id="cosa-facciamo" class="scroll-mt-24">
              <h2 class="text-2xl font-bold tx mb-4">Cosa facciamo</h2>
              <div class="grid md:grid-cols-3 gap-4">
                <div v-for="p in progetti" :key="p.title" class="card-solid p-6 flex flex-col">
                  <h3 class="tx font-bold text-base mb-2">{{ p.title }}</h3>
                  <p class="tx2 text-sm leading-relaxed mb-4">{{ p.desc }}</p>
                  <p class="tx3 text-xs leading-relaxed mt-auto pt-3 border-t edge">{{ p.risultati }}</p>
                </div>
              </div>
            </section>

            <!-- 7. I numeri -->
            <section id="numeri" class="scroll-mt-24">
              <h2 class="text-2xl font-bold tx mb-4">I numeri</h2>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="n in numeri" :key="n.label" class="card-solid p-5">
                  <p class="text-3xl font-bold font-display mb-1" style="color:#F05022">{{ n.value }}</p>
                  <p class="tx text-sm font-semibold leading-snug mb-1">{{ n.label }}</p>
                  <p class="tx3 text-xs">{{ n.anno }}</p>
                </div>
              </div>
            </section>

            <!-- 8. Persone di riferimento -->
            <section id="persone" class="scroll-mt-24">
              <h2 class="text-2xl font-bold tx mb-4">Persone di riferimento</h2>
              <div v-for="p in persone" :key="p.nome" class="card-solid p-6 md:p-8 flex flex-col sm:flex-row gap-6">
                <img :src="p.foto" :alt="p.nome" class="w-28 h-28 rounded-xl object-cover shrink-0" />
                <div>
                  <h3 class="tx font-bold text-lg">{{ p.nome }}</h3>
                  <p class="text-sm font-semibold mb-3" style="color:#F05022">{{ p.ruolo }}</p>
                  <p class="tx2 text-sm leading-relaxed mb-3">{{ p.bio }}</p>
                  <p class="tx3 text-xs leading-relaxed">{{ p.disponibilita }}</p>
                </div>
              </div>
              <p class="tx3 text-xs mt-3">Portavoce: coincide con il presidente, salvo diversa indicazione per singole richieste.</p>
            </section>

            <!-- 9. Citazioni pronte all'uso -->
            <section id="citazioni" class="scroll-mt-24">
              <h2 class="text-2xl font-bold tx mb-4">Citazioni pronte all'uso</h2>
              <p class="tx3 text-xs mb-4">Citabili con attribuzione, come indicato per ciascuna.</p>
              <div class="space-y-3">
                <div v-for="(c, i) in citazioni" :key="i" class="card-solid p-5 flex items-start justify-between gap-4">
                  <blockquote class="tx font-display text-lg leading-snug">
                    &ldquo;{{ c.testo }}&rdquo;
                    <footer class="tx3 text-xs font-sans not-italic mt-2">— {{ c.autore }}</footer>
                  </blockquote>
                  <button @click="copyText('quote-' + i, `${c.testo} — ${c.autore}`)"
                    class="shrink-0 text-xs font-semibold px-3 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition-all whitespace-nowrap">
                    {{ copiedId === 'quote-' + i ? 'Copiato ✓' : 'Copia' }}
                  </button>
                </div>
              </div>
            </section>

            <!-- 10. Comunicati stampa e rassegna stampa -->
            <section id="comunicati" class="scroll-mt-24">
              <h2 class="text-2xl font-bold tx mb-4">Comunicati stampa</h2>
              <div v-if="comunicati.length === 0" class="card-solid p-6 text-center tx3 text-sm mb-10">
                Prossimamente.
              </div>

              <h2 class="text-2xl font-bold tx mb-4">Rassegna stampa</h2>
              <ol class="card-solid divide-y edge">
                <li v-for="r in rassegna" :key="r.link" class="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span class="tx3 text-xs font-semibold shrink-0 sm:w-36">{{ formatDataIt(r.data) }}</span>
                  <a :href="r.link" target="_blank" rel="noopener" class="tx font-medium text-sm hover:text-accent transition-colors">
                    {{ r.titolo }}
                  </a>
                  <span class="tx3 text-xs sm:ml-auto shrink-0">{{ r.fonte }}</span>
                </li>
              </ol>
            </section>

            <!-- 11. Materiali scaricabili -->
            <section id="materiali" class="scroll-mt-24">
              <div class="flex items-center justify-between flex-wrap gap-3 mb-4">
                <h2 class="text-2xl font-bold tx">Materiali scaricabili</h2>
                <button @click="scaricaTutto"
                  class="inline-flex items-center gap-2 bg-accent text-white font-semibold px-5 py-2.5 rounded-full hover:bg-[#cf5e0e] transition-all text-sm">
                  Scarica tutto il kit
                </button>
              </div>
              <ul class="card-solid divide-y edge mb-3">
                <li v-for="m in materiali" :key="m.href" class="p-4 sm:p-5 flex items-center justify-between gap-4">
                  <div>
                    <p class="tx font-semibold text-sm">{{ m.nome }}</p>
                    <p class="tx3 text-xs">{{ m.formato }}</p>
                  </div>
                  <a :href="m.href" target="_blank" rel="noopener" download
                    class="shrink-0 text-xs font-semibold px-4 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition-all">
                    Scarica
                  </a>
                </li>
              </ul>
              <ul class="tx3 text-xs leading-relaxed list-disc list-inside mb-6">
                <li v-for="m in materialiMancanti" :key="m">{{ m }}</li>
              </ul>

              <h3 class="tx font-bold text-sm mb-3">Palette colori</h3>
              <div class="flex flex-wrap gap-4 mb-6">
                <div v-for="c in palette" :key="c.hex" class="flex items-center gap-2">
                  <span class="w-8 h-8 rounded-lg border edge shrink-0" :style="{ background: c.hex }"></span>
                  <span class="tx2 text-xs">{{ c.nome }}<br><span class="tx3">{{ c.hex }}</span></span>
                </div>
              </div>

              <h3 class="tx font-bold text-sm mb-2">Font</h3>
              <p class="tx2 text-sm leading-relaxed">
                Testo: <strong class="tx">Barlow</strong> · Titoli/display:
                <strong class="tx">Barlow Condensed</strong> e <strong class="tx">DM Serif Display</strong>
                — <a href="https://fonts.google.com/" target="_blank" rel="noopener" class="text-accent hover:underline">Google Fonts</a>.
              </p>
            </section>

            <!-- 12. Linee guida d'uso -->
            <section id="linee-guida" class="scroll-mt-24">
              <h2 class="text-2xl font-bold tx mb-4">Linee guida d'uso</h2>
              <div class="card-solid p-6 md:p-8 space-y-5 tx2 text-sm leading-relaxed">
                <div>
                  <h3 class="tx font-semibold mb-1">Come citare il nome</h3>
                  <p>Usare "Un Viaggio da Sclero APS" oppure, per esteso, "Un Viaggio da Sclero – Associazione di Promozione Sociale". Evitare varianti o abbreviazioni non ufficiali.</p>
                </div>
                <div>
                  <h3 class="tx font-semibold mb-1">Come usare logo e foto</h3>
                  <p>Usare i file così come forniti, senza alterare colori, proporzioni o ritagliare lo stemma/logo. Scegliere la variante (sfondo chiaro/scuro) adatta al contesto. Citare sempre il credito fotografico indicato nella didascalia, quando presente.</p>
                </div>
                <div>
                  <h3 class="tx font-semibold mb-1">Cosa non fare</h3>
                  <p>Non associare il nome dell'associazione a sponsorizzazioni commerciali senza autorizzazione. Non alterare il testo delle citazioni. Non presentare il Viaggio 2027 come già avvenuto: è un progetto in programma.</p>
                </div>
              </div>
            </section>

            <!-- 13. FAQ -->
            <section id="faq" class="scroll-mt-24">
              <h2 class="text-2xl font-bold tx mb-4">FAQ per i giornalisti</h2>
              <div class="space-y-3">
                <details v-for="(f, i) in faqs" :key="i" class="card-solid p-5 group">
                  <summary class="tx font-semibold text-sm cursor-pointer list-none flex items-center justify-between gap-4">
                    {{ f.q }}
                    <span class="tx3 shrink-0 transition-transform group-open:rotate-45 text-lg leading-none">+</span>
                  </summary>
                  <p class="tx2 text-sm leading-relaxed mt-3 pt-3 border-t edge">{{ f.a }}</p>
                </details>
              </div>
            </section>

            <!-- 14. Contatti stampa -->
            <section id="contatti-stampa" class="scroll-mt-24">
              <h2 class="text-2xl font-bold tx mb-4">Contatti stampa</h2>
              <div class="card-solid p-6 md:p-8 space-y-3 tx2 text-sm leading-relaxed">
                <p><span class="tx3 font-semibold">Referente:</span> [DA COMPILARE: nome del referente stampa dedicato — in attesa, le richieste vengono gestite all'indirizzo sotto]</p>
                <p><span class="tx3 font-semibold">Email:</span> <a href="mailto:info@unviaggiodascleroaps.org" class="text-accent hover:underline">info@unviaggiodascleroaps.org</a></p>
                <p><span class="tx3 font-semibold">Telefono / WhatsApp:</span> <a href="https://wa.me/393793668397" target="_blank" rel="noopener" class="text-accent hover:underline">+39 379 366 8397</a></p>
                <p><span class="tx3 font-semibold">Orari di disponibilità:</span> [DA COMPILARE]</p>
                <p><span class="tx3 font-semibold">Tempi medi di risposta:</span> [DA COMPILARE]</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
details > summary::-webkit-details-marker { display: none; }
</style>
