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

export function formatLive(iso: string) {
  const d = new Date(iso)
  const day = d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', timeZone: 'UTC' })
  const hh = String(d.getUTCHours()).padStart(2, '0')
  const mm = String(d.getUTCMinutes()).padStart(2, '0')
  return `${day} · ore ${hh}:${mm}`
}

export function formatLiveDate(iso: string) {
  return new Date(iso).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', timeZone: 'UTC' })
}

// Direct link to a hero's live once it's aired, otherwise the channel page
export const HERO_VIDEO_LINKS: Record<string, string> = {
  'Matteo Boseglio': 'https://www.youtube.com/watch?v=h5O2vBzeXjM',
}
export function heroVideoUrl(hero: { nome: string }) {
  return HERO_VIDEO_LINKS[hero.nome] ?? 'https://www.youtube.com/@unviaggiodasclero'
}

// Lives run for roughly this long; the floating card keeps showing until then, not just until start
export const LIVE_DURATION_MS = 2.75 * 60 * 60 * 1000 // 2h45m
