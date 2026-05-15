import { ref } from 'vue'
import { supabase } from '../lib/supabase'

export type StatoForm = 'idle' | 'loading' | 'success' | 'error'

export function useSclHeroesForm(onSuccess: () => void) {
  const form = ref({
    nome: '',
    email: '',
    citta: '',
    storia: '',
    consenso_privacy: false,
  })
  const foto = ref<File | null>(null)
  const fotoPreview = ref<string | null>(null)
  const stato = ref<StatoForm>('idle')
  const errore = ref('')

  function onFotoChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      errore.value = 'La foto non può superare i 5 MB.'
      return
    }
    foto.value = file
    fotoPreview.value = URL.createObjectURL(file)
    errore.value = ''
  }

  function rimuoviFoto() {
    foto.value = null
    fotoPreview.value = null
  }

  async function invia() {
    errore.value = ''
    stato.value = 'loading'

    try {
      let foto_url: string | null = null

      if (foto.value) {
        const ext = foto.value.name.split('.').pop()
        const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
        const { error: uploadError } = await supabase.storage
          .from('sclheroes-foto')
          .upload(path, foto.value, { contentType: foto.value.type })
        if (uploadError) throw uploadError
        const { data: urlData } = supabase.storage.from('sclheroes-foto').getPublicUrl(path)
        foto_url = urlData.publicUrl
      }

      const { error: insertError } = await supabase.from('sclheroes_submissions').insert({
        nome: form.value.nome.trim(),
        email: form.value.email.trim(),
        citta: form.value.citta.trim() || null,
        storia: form.value.storia.trim(),
        foto_url,
        consenso_privacy: form.value.consenso_privacy,
      })
      if (insertError) throw insertError

      stato.value = 'success'
      onSuccess()
    } catch (e: unknown) {
      console.error(e)
      errore.value = 'Si è verificato un errore. Riprova tra qualche minuto.'
      stato.value = 'error'
    }
  }

  return { form, fotoPreview, stato, errore, onFotoChange, rimuoviFoto, invia }
}
