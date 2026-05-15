import { ref } from 'vue'
import { supabase } from '../lib/supabase'

export type SubmissionStatus = 'in_attesa' | 'pubblicato' | 'rifiutato'

export interface Submission {
  id: number
  nome: string
  email: string
  citta: string | null
  storia: string
  foto_url: string | null
  stato: SubmissionStatus
  created_at: string
}

/** Fetches and manages sclHEROES submissions for the admin dashboard. */
export function useAdminSubmissions() {
  const submissions = ref<Submission[]>([])
  const isLoading = ref(false)
  const errorMessage = ref('')

  async function fetchAll() {
    isLoading.value = true
    errorMessage.value = ''
    try {
      const { data, error } = await supabase
        .from('sclheroes_submissions')
        .select('id, nome, email, citta, storia, foto_url, stato, created_at')
        .order('created_at', { ascending: false })
      if (error) throw error
      submissions.value = (data as Submission[]) ?? []
    } catch (err) {
      console.error(err)
      errorMessage.value = 'Errore nel caricamento delle submissions.'
    } finally {
      isLoading.value = false
    }
  }

  async function updateStatus(id: number, status: SubmissionStatus) {
    const { error } = await supabase
      .from('sclheroes_submissions')
      .update({ stato: status })
      .eq('id', id)
    if (error) throw error

    const submission = submissions.value.find(s => s.id === id)
    if (submission) submission.stato = status
  }

  async function deleteSubmission(id: number) {
    const submission = submissions.value.find(s => s.id === id)

    // Delete photo from storage if present
    if (submission?.foto_url) {
      const url = new URL(submission.foto_url)
      // Path is everything after /object/public/sclheroes-foto/
      const filePath = url.pathname.split('/sclheroes-foto/')[1]
      if (filePath) {
        await supabase.storage.from('sclheroes-foto').remove([filePath])
      }
    }

    const { error } = await supabase
      .from('sclheroes_submissions')
      .delete()
      .eq('id', id)
    if (error) throw error

    submissions.value = submissions.value.filter(s => s.id !== id)
  }

  return { submissions, isLoading, errorMessage, fetchAll, updateStatus, deleteSubmission }
}
