export interface PassoPercorso {
  numero: string
  titolo: string
  descrizione: string
}

export const PASSI_PERCORSO: PassoPercorso[] = [
  { numero: '01', titolo: 'Scrivi',         descrizione: 'Racconta la tua storia con la sclerosi multipla, liberamente.' },
  { numero: '02', titolo: 'Leggiamo',       descrizione: 'Il team di sclHEROES legge ogni storia con cura e attenzione.' },
  { numero: '03', titolo: 'Selezione',      descrizione: 'Le storie più toccanti vengono scelte per essere amplificate.' },
  { numero: '04', titolo: 'Live Instagram', descrizione: 'Vieni invitato in diretta per raccontare la tua esperienza.' },
  { numero: '05', titolo: 'Podcast',        descrizione: 'La tua storia diventa un episodio del podcast sclHEROES.' },
]

export interface SclHero {
  nome: string
  citta: string | null
  storia: string
  foto_url: string | null
  created_at: string
}
