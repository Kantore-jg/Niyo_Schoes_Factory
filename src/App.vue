<script setup>
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import WhatsAppButton from './components/layout/WhatsAppButton.vue'
import { usePageMeta } from './composables/usePageMeta.js'

usePageMeta()
</script>

<template>
  <AppNavbar />
  <RouterView />
  <AppFooter />
  <WhatsAppButton />
</template>