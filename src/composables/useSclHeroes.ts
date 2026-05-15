import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabase'
import type { SclHero } from '../data/sclheroes'

export function useSclHeroes() {
  const totaleInvii = ref<number | null>(null)
  const wallOfHeroes = ref<SclHero[]>([])

  async function carica() {
    const { count } = await supabase
      .from('sclheroes_submissions')
      .select('*', { count: 'exact', head: true })
    totaleInvii.value = count ?? 0

    const { data } = await supabase
      .from('sclheroes_submissions')
      .select('nome, citta, storia, foto_url, created_at')
      .eq('stato', 'pubblicato')
      .order('created_at', { ascending: false })
    wallOfHeroes.value = (data as SclHero[]) ?? []
  }

  function incrementaContatore() {
    if (totaleInvii.value !== null) totaleInvii.value++
  }

  onMounted(carica)

  return { totaleInvii, wallOfHeroes, incrementaContatore }
}
