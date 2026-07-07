import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(selector = '.animate-on-scroll') {
  let observer = null

  const observe = () => {
    observer?.disconnect()
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    observe()
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { observe }
}