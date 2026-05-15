import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ITALIAN_CITIES } from '../data/italianCities'

/**
 * Provides city autocomplete behaviour for a text input.
 * @param onChange - called whenever the selected/typed value changes
 */
export function useCityAutocomplete(onChange: (value: string) => void) {
  const query = ref('')
  const isOpen = ref(false)
  const containerRef = ref<HTMLElement | null>(null)

  // Show up to 8 cities when empty, up to 10 when filtering
  const suggestions = computed(() => {
    const q = query.value.trim().toLowerCase()
    if (!q) return ITALIAN_CITIES.slice(0, 8)
    return ITALIAN_CITIES.filter(city => city.toLowerCase().startsWith(q)).slice(0, 10)
  })

  function selectCity(city: string) {
    query.value = city
    onChange(city)
    isOpen.value = false
  }

  function handleInput() {
    onChange(query.value)
    isOpen.value = true
  }

  function handleClickOutside(event: MouseEvent) {
    if (containerRef.value && !containerRef.value.contains(event.target as Node)) {
      isOpen.value = false
    }
  }

  onMounted(() => document.addEventListener('click', handleClickOutside))
  onUnmounted(() => document.removeEventListener('click', handleClickOutside))

  return { query, isOpen, containerRef, suggestions, selectCity, handleInput }
}
