<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import PageBanner from '../components/ui/PageBanner.vue'
import AboutSection from '../components/sections/AboutSection.vue'

useScrollAnimation()
</script>

<template>
  <main>
    <PageBanner
      title="À propos de nous"
      subtitle="Savoir-faire artisanal et excellence du cuir depuis 2020 à Gitega, Burundi"
    />
    <AboutSection :show-title="false" />
  </main>
</template>