import { ref, watchEffect } from 'vue'

// Default: light mode. Dark solo se l'utente lo ha scelto esplicitamente.
const isDark = ref(localStorage.getItem('theme') === 'dark')

watchEffect(() => {
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})

export function useDarkMode() {
  function toggle() {
    isDark.value = !isDark.value
  }
  return { isDark, toggle }
}
