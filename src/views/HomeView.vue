<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import HeroSection from '../components/sections/HeroSection.vue'
import HomeHighlights from '../components/sections/HomeHighlights.vue'

useScrollAnimation()
</script>

<template>
  <main>
    <HeroSection />
    <HomeHighlights />
  </main>
</template>