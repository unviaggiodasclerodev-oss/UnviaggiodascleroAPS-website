<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { signIn } = useAuth()

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

async function handleLogin() {
  errorMessage.value = ''
  isLoading.value = true
  try {
    await signIn(email.value, password.value)
    router.push('/admin')
  } catch {
    errorMessage.value = 'Credenziali non valide. Riprova.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-stone-100 dark:bg-stone-900 px-4">
    <div class="w-full max-w-sm bg-white dark:bg-stone-800 rounded-2xl shadow-lg p-8">

      <div class="text-center mb-8">
        <img src="/logo.png" alt="Un Viaggio da Sclero APS" class="h-10 w-auto object-contain mx-auto mb-4" />
        <h1 class="text-xl font-bold tx">Admin</h1>
        <p class="text-sm tx3 mt-1">Accedi per gestire le submissions</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-semibold tx mb-1.5" for="email">Email</label>
          <input
            id="email" v-model="email" type="email" required autocomplete="email"
            placeholder="admin@email.it"
            class="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 tx text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold tx mb-1.5" for="password">Password</label>
          <input
            id="password" v-model="password" type="password" required autocomplete="current-password"
            placeholder="••••••••"
            class="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 tx text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
          />
        </div>

        <p v-if="errorMessage" class="text-sm text-red-500">{{ errorMessage }}</p>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-3 rounded-full hover:bg-[#cf5e0e] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
        >
          <svg v-if="isLoading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
          </svg>
          <span>{{ isLoading ? 'Accesso…' : 'Accedi' }}</span>
        </button>
      </form>

    </div>
  </div>
</template>
