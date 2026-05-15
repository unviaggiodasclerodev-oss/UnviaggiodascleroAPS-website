import { ref, computed, onMounted, onUnmounted } from 'vue'
import { CITTA_ITALIANE } from '../data/citta'

export function useCittaAutocomplete(onChange: (val: string) => void) {
  const query = ref('')
  const aperta = ref(false)
  const wrapper = ref<HTMLElement | null>(null)

  const filtrate = computed(() => {
    const q = query.value.trim().toLowerCase()
    if (!q) return CITTA_ITALIANE.slice(0, 8)
    return CITTA_ITALIANE.filter(c => c.toLowerCase().startsWith(q)).slice(0, 10)
  })

  function seleziona(citta: string) {
    query.value = citta
    onChange(citta)
    aperta.value = false
  }

  function onInput() {
    onChange(query.value)
    aperta.value = true
  }

  function onClickOutside(e: MouseEvent) {
    if (wrapper.value && !wrapper.value.contains(e.target as Node)) {
      aperta.value = false
    }
  }

  onMounted(() => document.addEventListener('click', onClickOutside))
  onUnmounted(() => document.removeEventListener('click', onClickOutside))

  return { query, aperta, wrapper, filtrate, seleziona, onInput }
}
