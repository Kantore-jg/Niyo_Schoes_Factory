<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import PageBanner from '../components/ui/PageBanner.vue'
import ContactSection from '../components/sections/ContactSection.vue'

useScrollAnimation()
</script>

<template>
  <main>
    <PageBanner
      title="Contactez-nous"
      subtitle="Nous sommes à votre écoute pour vos commandes et questions"
    />
    <ContactSection :show-title="false" />
  </main>
</template>