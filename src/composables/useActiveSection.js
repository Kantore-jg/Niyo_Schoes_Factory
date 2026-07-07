import { ref, onMounted, onUnmounted } from 'vue'
import { navigation } from '../data/data.js'

export function useActiveSection() {
  const activeSection = ref('accueil')

  const sectionIds = navigation.map((item) => item.id)

  const updateActiveSection = () => {
    const scrollPos = window.scrollY + 120

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i])
      if (el && el.offsetTop <= scrollPos) {
        activeSection.value = sectionIds[i]
        break
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    updateActiveSection()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })

  return { activeSection }
}