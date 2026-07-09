import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabase'
import type { SclHero } from '../data/sclheroes'

/** Fetches public sclHEROES data: total submission count and published stories. */
export function useSclHeroes() {
  const submissionCount = ref<number | null>(null)
  const publishedHeroes = ref<SclHero[]>([])

  async function fetchData() {
    const { count } = await supabase
      .from('sclheroes_submissions')
      .select('*', { count: 'exact', head: true })
    submissionCount.value = count ?? 0

    const { data } = await supabase
      .from('sclheroes_submissions')
      .select('nome, citta, storia, riassunto, foto_url, diretta_at, created_at')
      .eq('stato', 'pubblicato')
      .order('created_at', { ascending: false })
    publishedHeroes.value = (data as SclHero[]) ?? []
  }

  // Optimistic update after a successful form submission
  function incrementCount() {
    if (submissionCount.value !== null) submissionCount.value++
  }

  onMounted(fetchData)

  return { submissionCount, publishedHeroes, incrementCount }
}
