import { ref } from 'vue'
import { supabase } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'

const currentUser = ref<User | null>(null)

/** Initialise from existing session — call once in App.vue. */
async function init() {
  const { data } = await supabase.auth.getSession()
  currentUser.value = data.session?.user ?? null

  supabase.auth.onAuthStateChange((_event, session) => {
    currentUser.value = session?.user ?? null
  })
}

async function signIn(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
}

async function signOut() {
  await supabase.auth.signOut()
}

export function useAuth() {
  return { currentUser, init, signIn, signOut }
}
