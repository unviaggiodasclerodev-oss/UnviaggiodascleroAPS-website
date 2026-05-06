export interface VideoMedia {
  id: string
  youtubeId: string
  startTime?: number
  titolo: string
  descrizione?: string
  data: string
  fonte?: string
  featured?: boolean
}

export const videos: VideoMedia[] = [
  {
    id: '1',
    youtubeId: '-WPNvso6chY',
    startTime: 5,
    titolo: 'Il Viaggio 2027 — Un Viaggio da Sclero APS',
    descrizione: 'Scopri il progetto, l\'associazione e il prossimo cammino di oltre 2.000 km attraverso l\'Italia.',
    data: '2026-05-02',
    fonte: 'YouTube',
    featured: true,
  },
]
