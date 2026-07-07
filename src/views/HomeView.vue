<script setup>
import { onMounted, nextTick } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import ProductsSection from '../components/sections/ProductsSection.vue'
import EventsSection from '../components/sections/EventsSection.vue'
import MarketsSection from '../components/sections/MarketsSection.vue'
import GallerySection from '../components/sections/GallerySection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

useScrollAnimation()

onMounted(async () => {
  await nextTick()
  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
  })
})
</script>

<template>
  <main>
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <EventsSection />
    <MarketsSection />
    <GallerySection />
    <ContactSection />
  </main>
</template>