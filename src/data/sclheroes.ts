export interface JourneyStep {
  step: string
  title: string
  description: string
}

export const JOURNEY_STEPS: JourneyStep[] = [
  { step: '01', title: 'Scrivi',         description: 'Racconta la tua storia con la sclerosi multipla, liberamente.' },
  { step: '02', title: 'Leggiamo',       description: 'Il team di sclHEROES legge ogni storia con cura e attenzione.' },
  { step: '03', title: 'Selezione',      description: 'Le storie più toccanti vengono scelte per essere amplificate.' },
  { step: '04', title: 'Live YouTube',   description: 'Vieni invitato in diretta su YouTube per raccontare la tua esperienza.' },
  { step: '05', title: 'Podcast',        description: 'La tua storia diventa un episodio del podcast sclHEROES.' },
]

/** Mirrors the Supabase `sclheroes_submissions` table schema. */
export interface SclHero {
  nome: string
  citta: string | null
  storia: string
  riassunto: string | null
  foto_url: string | null
  diretta_at: string | null
  created_at: string
}
