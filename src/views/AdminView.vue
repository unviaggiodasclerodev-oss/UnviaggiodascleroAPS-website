<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'
import { useAdminSubmissions } from '../composables/useAdminSubmissions'
import type { SubmissionStatus } from '../composables/useAdminSubmissions'

const router = useRouter()
const { signOut } = useAuth()
const { submissions, isLoading, errorMessage, fetchAll, updateStatus, updateExtras, deleteSubmission } = useAdminSubmissions()

type FilterTab = 'in_attesa' | 'pubblicato' | 'rifiutato' | 'tutti'
const activeFilter = ref<FilterTab>('in_attesa')

const filtered = computed(() => {
  if (activeFilter.value === 'tutti') return submissions.value
  return submissions.value.filter(s => s.stato === activeFilter.value)
})

const counts = computed(() => ({
  in_attesa:   submissions.value.filter(s => s.stato === 'in_attesa').length,
  pubblicato:  submissions.value.filter(s => s.stato === 'pubblicato').length,
  rifiutato:   submissions.value.filter(s => s.stato === 'rifiutato').length,
}))

const updatingId = ref<number | null>(null)
const deletingId = ref<number | null>(null)
const savingExtrasId = ref<number | null>(null)
const extrasDraft = ref<Record<number, { riassunto: string; diretta_at: string }>>({})

watch(submissions, (list) => {
  for (const sub of list) {
    if (extrasDraft.value[sub.id] === undefined) {
      extrasDraft.value[sub.id] = {
        riassunto: sub.riassunto ?? '',
        diretta_at: sub.diretta_at ? sub.diretta_at.slice(0, 16) : '',
      }
    }
  }
}, { immediate: true })

async function handleSaveExtras(id: number) {
  savingExtrasId.value = id
  try {
    const d = extrasDraft.value[id]
    const diretta = d.diretta_at ? new Date(d.diretta_at).toISOString() : null
    await updateExtras(id, d.riassunto, diretta)
  } catch {
    alert('Errore durante il salvataggio.')
  } finally {
    savingExtrasId.value = null
  }
}

async function handleStatus(id: number, status: SubmissionStatus) {
  updatingId.value = id
  try {
    await updateStatus(id, status)
  } catch {
    alert('Errore durante l\'aggiornamento. Riprova.')
  } finally {
    updatingId.value = null
  }
}

async function handleDelete(id: number, nome: string) {
  if (!confirm(`Eliminare definitivamente la storia di "${nome}"?\nL'operazione è irreversibile.`)) return
  deletingId.value = id
  try {
    await deleteSubmission(id)
  } catch {
    alert('Errore durante l\'eliminazione. Riprova.')
  } finally {
    deletingId.value = null
  }
}

async function handleLogout() {
  await signOut()
  router.push('/admin/login')
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' })
}

onMounted(fetchAll)
</script>

<template>
  <div class="min-h-screen bg-stone-100 dark:bg-stone-900">

    <!-- Top bar -->
    <header class="bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700 px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img src="/logo.png" alt="Admin" class="h-8 w-auto object-contain" />
        <span class="font-bold tx text-sm">sclHEROES — Admin</span>
      </div>
      <button @click="handleLogout" class="text-sm tx3 hover:text-accent transition-colors flex items-center gap-1.5">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
        </svg>
        Logout
      </button>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8">

      <!-- Filter tabs -->
      <div class="flex gap-2 mb-6 flex-wrap">
        <button
          v-for="tab in ([
            { key: 'in_attesa',  label: 'In attesa',  count: counts.in_attesa },
            { key: 'pubblicato', label: 'Pubblicati',  count: counts.pubblicato },
            { key: 'rifiutato',  label: 'Rifiutati',  count: counts.rifiutato },
            { key: 'tutti',      label: 'Tutti',       count: submissions.length },
          ] as const)"
          :key="tab.key"
          @click="activeFilter = tab.key"
          :class="[
            'px-4 py-2 rounded-full text-sm font-semibold transition-all',
            activeFilter === tab.key
              ? 'bg-accent text-white shadow-md'
              : 'bg-white dark:bg-stone-800 tx hover:bg-stone-200 dark:hover:bg-stone-700'
          ]"
        >
          {{ tab.label }}
          <span class="ml-1.5 text-xs opacity-70">({{ tab.count }})</span>
        </button>
      </div>

      <!-- Loading -->
      <div v-if="isLoading" class="text-center py-20 tx3 text-sm">Caricamento…</div>

      <!-- Error -->
      <p v-else-if="errorMessage" class="text-sm text-red-500 text-center py-10">{{ errorMessage }}</p>

      <!-- Empty state -->
      <div v-else-if="filtered.length === 0" class="text-center py-20">
        <p class="tx3 text-sm">Nessuna submission in questa categoria.</p>
      </div>

      <!-- Submissions list -->
      <div v-else class="space-y-4">
        <div
          v-for="sub in filtered"
          :key="sub.id"
          class="bg-white dark:bg-stone-800 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-700 overflow-hidden"
        >
          <div class="flex gap-4 p-5">

            <!-- Photo thumbnail -->
            <div class="shrink-0">
              <img
                v-if="sub.foto_url"
                :src="sub.foto_url"
                :alt="sub.nome"
                class="w-20 h-20 rounded-xl object-cover"
              />
              <div v-else class="w-20 h-20 rounded-xl bg-stone-100 dark:bg-stone-700 flex items-center justify-center">
                <svg class="w-8 h-8 tx3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-2 flex-wrap mb-1">
                <div>
                  <p class="font-bold tx">{{ sub.nome }}</p>
                  <p class="text-xs tx3">{{ sub.email }}{{ sub.telefono ? ` · ${sub.telefono}` : '' }}{{ sub.citta ? ` · ${sub.citta}` : '' }} · {{ formatDate(sub.created_at) }}</p>
                </div>
                <!-- Status badge -->
                <span :class="[
                  'text-xs font-semibold px-3 py-1 rounded-full shrink-0',
                  sub.stato === 'pubblicato' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  sub.stato === 'rifiutato'  ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                  'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                ]">{{ sub.stato.replace('_', ' ') }}</span>
              </div>

              <!-- Story text -->
              <p class="text-sm tx2 leading-relaxed line-clamp-3 mt-2">{{ sub.storia }}</p>
            </div>
          </div>

          <!-- Extras edit: riassunto + diretta -->
          <div v-if="extrasDraft[sub.id]" class="border-t border-stone-100 dark:border-stone-700 px-5 py-4 space-y-3 bg-stone-50/50 dark:bg-stone-900/30">
            <div>
              <label class="block text-xs font-semibold tx mb-1">Riassunto card pubblica</label>
              <textarea v-model="extrasDraft[sub.id].riassunto" rows="2"
                placeholder="Breve riassunto visibile sulla card pubblica…"
                class="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 tx resize-none focus:outline-none focus:ring-1 focus:ring-accent/50 transition">
              </textarea>
            </div>
            <div class="flex items-end gap-3">
              <div class="flex-1">
                <label class="block text-xs font-semibold tx mb-1">Data e ora diretta YouTube</label>
                <input type="datetime-local" v-model="extrasDraft[sub.id].diretta_at"
                  class="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 tx focus:outline-none focus:ring-1 focus:ring-accent/50 transition" />
              </div>
              <button @click="handleSaveExtras(sub.id)" :disabled="savingExtrasId === sub.id"
                class="px-5 py-2 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-[#cf5e0e] transition-all disabled:opacity-50 shrink-0">
                {{ savingExtrasId === sub.id ? '…' : 'Salva' }}
              </button>
            </div>
          </div>

          <!-- Action buttons -->
          <div class="border-t border-stone-100 dark:border-stone-700 px-5 py-3 flex gap-2 justify-between flex-wrap items-center">

            <!-- Status actions -->
            <div class="flex gap-2 flex-wrap">
              <button
                v-if="sub.stato !== 'pubblicato'"
                @click="handleStatus(sub.id, 'pubblicato')"
                :disabled="updatingId === sub.id"
                class="px-4 py-1.5 rounded-full bg-green-500 hover:bg-green-600 text-white text-xs font-semibold transition-all disabled:opacity-50"
              >
                {{ updatingId === sub.id ? '…' : 'Pubblica' }}
              </button>
              <button
                v-if="sub.stato !== 'rifiutato'"
                @click="handleStatus(sub.id, 'rifiutato')"
                :disabled="updatingId === sub.id"
                class="px-4 py-1.5 rounded-full bg-red-100 hover:bg-red-200 text-red-700 text-xs font-semibold transition-all disabled:opacity-50"
              >
                {{ updatingId === sub.id ? '…' : 'Rifiuta' }}
              </button>
              <button
                v-if="sub.stato !== 'in_attesa'"
                @click="handleStatus(sub.id, 'in_attesa')"
                :disabled="updatingId === sub.id"
                class="px-4 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-stone-700 dark:hover:bg-stone-600 tx text-xs font-semibold transition-all disabled:opacity-50"
              >
                Rimetti in attesa
              </button>
            </div>

            <!-- Destructive action -->
            <button
              @click="handleDelete(sub.id, sub.nome)"
              :disabled="deletingId === sub.id"
              class="px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-all disabled:opacity-50 flex items-center gap-1.5"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
              {{ deletingId === sub.id ? '…' : 'Elimina' }}
            </button>

          </div>

        </div>
      </div>

    </main>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
