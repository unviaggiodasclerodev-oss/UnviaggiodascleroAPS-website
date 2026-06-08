import { ref } from 'vue'
import { supabase } from '../lib/supabase'

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

/** Manages the sclHEROES submission form: field state, photo upload, and Supabase insert. */
export function useSclHeroesForm(onSuccess: () => void) {
  const form = ref({
    nome: '',
    email: '',
    citta: '',
    storia: '',
    consenso_privacy: false,
  })
  const photoPreview = ref<string | null>(null)
  const photoFile = ref<File | null>(null)
  const status = ref<FormStatus>('idle')
  const errorMessage = ref('')

  function handlePhotoChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      errorMessage.value = 'La foto non può superare i 5 MB.'
      return
    }
    photoFile.value = file
    photoPreview.value = URL.createObjectURL(file)
    errorMessage.value = ''
  }

  function removePhoto() {
    photoFile.value = null
    photoPreview.value = null
  }

  async function submitForm() {
    errorMessage.value = ''
    status.value = 'loading'

    try {
      let photoUrl: string | null = null

      if (photoFile.value) {
        const fileExt = photoFile.value.name.split('.').pop()
        const filePath = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`
        const { error: uploadError } = await supabase.storage
          .from('sclheroes-foto')
          .upload(filePath, photoFile.value, { contentType: photoFile.value.type })
        if (uploadError) throw uploadError
        const { data: urlResult } = supabase.storage.from('sclheroes-foto').getPublicUrl(filePath)
        photoUrl = urlResult.publicUrl
      }

      const { error: insertError } = await supabase.from('sclheroes_submissions').insert({
        nome: form.value.nome.trim(),
        email: form.value.email.trim(),
        citta: form.value.citta.trim() || null,
        storia: form.value.storia.trim(),
        foto_url: photoUrl,
        consenso_privacy: form.value.consenso_privacy,
      })
      if (insertError) throw insertError

      status.value = 'success'
      onSuccess()
    } catch (err: unknown) {
      console.error('[useSclHeroesForm] submit error:', err)
      const msg = err instanceof Error ? err.message : String(err)
      errorMessage.value = import.meta.env.DEV
        ? `Errore: ${msg}`
        : 'Si è verificato un errore. Riprova tra qualche minuto.'
      status.value = 'error'
    }
  }

  return { form, photoPreview, status, errorMessage, handlePhotoChange, removePhoto, submitForm }
}
