<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import PageBanner from '../components/ui/PageBanner.vue'
import GallerySection from '../components/sections/GallerySection.vue'

useScrollAnimation()
</script>

<template>
  <main>
    <PageBanner
      title="Galerie"
      subtitle="Produits, atelier, fabrication et événements en images"
    />
    <GallerySection :show-title="false" />
  </main>
</template>