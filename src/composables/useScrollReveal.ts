import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(selector = '.reveal, .reveal-left, .reveal-scale'): void {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )

    document.querySelectorAll(selector).forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}