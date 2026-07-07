<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import ProductsSection from '../components/sections/ProductsSection.vue'
import EventsSection from '../components/sections/EventsSection.vue'
import MarketsSection from '../components/sections/MarketsSection.vue'
import GallerySection from '../components/sections/GallerySection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

useScrollAnimation()
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