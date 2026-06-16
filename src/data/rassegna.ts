export type CategoriaArticolo = 'intervista' | 'articolo' | 'radio' | 'tv'

export interface ArticoloRassegna {
  id: string
  titolo: string
  descrizione: string
  data: string
  fonte: string
  immagine?: string
  link?: string
  categoria: CategoriaArticolo
}

export const articoli: ArticoloRassegna[] = [
  {
    id: '7',
    titolo: 'Intervista a TV2000 — Un Viaggio da Sclero',
    descrizione: 'Michele Agostinetto ospite a TV2000 per raccontare il progetto Un Viaggio da Sclero e il prossimo cammino di oltre 2.000 km attraverso l\'Italia nel 2027.',
    data: '2026-06-16',
    fonte: 'TV2000',
    immagine: 'https://img.youtube.com/vi/Fcp2LP0N4TE/hqdefault.jpg',
    link: 'https://youtu.be/Fcp2LP0N4TE?si=uG4nnJWdl670TV6M',
    categoria: 'tv'
  },
  {
    id: '1',
    titolo: '2000 km a piedi con la sclerosi multipla: il Viaggio da Sclero riparte nel 2027',
    descrizione: 'Michele Agostinetto, affetto da sclerosi multipla, rilancia con un nuovo viaggio nazionale nel 2027. L\'iniziativa coinvolgerà circa 100 comuni italiani con tappe ufficiali ed eventi pubblici.',
    data: '2026-05-01',
    fonte: 'TrevisoToday',
    immagine: '/images/cammin.jpg',
    link: 'https://www.trevisotoday.it/blog/2000-km-piedi-sclerosi-multipla-2027.html',
    categoria: 'articolo'
  },
  {
    id: '2',
    titolo: 'Sclerosi multipla: nasce l\'APS per il viaggio nazionale del 2027',
    descrizione: 'Nasce a Valdobbiadene l\'Associazione di Promozione Sociale "Un Viaggio da Sclero" per organizzare un viaggio nazionale nel 2027 che coinvolgerà circa 100 comuni italiani, promuovendo accessibilità e inclusione.',
    data: '2026-04-29',
    fonte: 'AMEVE',
    immagine: '/images/michele.JPG',
    link: 'https://ameve.eu/sclerosi-multipla-nasce-laps-per-il-viaggio-nazionale-del-2027/',
    categoria: 'articolo'
  },
  {
    id: '3',
    titolo: 'Oltre 2000 km a piedi con la sclerosi multipla: un Viaggio da Sclero riparte nel 2027',
    descrizione: 'Michele Agostinetto lancia un nuovo viaggio nazionale per il 2027 dopo il successo del 2022. La nuova associazione no-profit guiderà l\'iniziativa con tappe in circa 100 comuni italiani ed eventi aperti al pubblico.',
    data: '2026-04-29',
    fonte: 'Manduria Oggi',
    immagine: '/images/Taranto.jpg',
    link: 'https://www.manduriaoggi.it/?news=74775',
    categoria: 'articolo'
  },
  {
    id: '4',
    titolo: '"Un Viaggio da Sclero" diventa associazione e pensa in grande per l\'edizione 2027',
    descrizione: 'Il progetto di Michele Agostinetto è diventato ufficialmente un\'associazione no-profit. Per il 2027 è in programma un\'edizione ambiziosa che raggiungerà circa 100 comuni italiani per sensibilizzare su disabilità e connessione umana.',
    data: '2026-04-29',
    fonte: 'QDPnews',
    immagine: '/images/papa.JPG',
    link: 'https://www.qdpnews.it/comuni/valdobbiadene/un-viaggio-da-sclero-diventa-associazione-e-pensa-in-grande-per-ledizione-2027/',
    categoria: 'articolo'
  },
  {
    id: '5',
    titolo: 'Sclerosi multipla: nasce l\'APS per il viaggio nazionale del 2027',
    descrizione: 'Nasce l\'Associazione di Promozione Sociale "Un Viaggio da Sclero" a Valdobbiadene per organizzare un viaggio nazionale nel 2027 che coinvolgerà circa 100 comuni italiani, promuovendo accessibilità e inclusione.',
    data: '2026-05-01',
    fonte: 'Zazoom',
    immagine: '/images/Napoli.jpg',
    link: 'https://www.zazoom.it/2026-05-01/sclerosi-multipla-nasce-laps-per-il-viaggio-nazionale-del-2027/19105118/',
    categoria: 'articolo'
  },
  {
    id: '6',
    titolo: 'Il Viaggio 2027 — Un Viaggio da Sclero APS',
    descrizione: 'Scopri il progetto, l\'associazione e il prossimo cammino di oltre 2.000 km attraverso l\'Italia.',
    data: '2026-05-02',
    fonte: 'YouTube',
    immagine: 'https://img.youtube.com/vi/-WPNvso6chY/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=-WPNvso6chY',
    categoria: 'tv'
  }
]

export function getArticoliOrdinati(): ArticoloRassegna[] {
  return [...articoli].sort((a, b) =>
    new Date(b.data).getTime() - new Date(a.data).getTime()
  )
}

export function filtraPerCategoria(categoria: CategoriaArticolo | 'tutti'): ArticoloRassegna[] {
  if (categoria === 'tutti') return getArticoliOrdinati()
  return getArticoliOrdinati().filter(a => a.categoria === categoria)
}
