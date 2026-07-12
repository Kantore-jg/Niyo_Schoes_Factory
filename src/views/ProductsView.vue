<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import PageBanner from '../components/ui/PageBanner.vue'
import ProductsSection from '../components/sections/ProductsSection.vue'

const route = useRoute()
useScrollAnimation()

const category = computed(() => route.meta.category || null)

const banner = computed(() => {
  if (category.value === 'homme') {
    return {
      title: 'Sandales Homme',
      subtitle: 'Cuir pleine fleur, semelles anatomiques et finitions réalisées à la main',
    }
  }
  if (category.value === 'femme') {
    return {
      title: 'Sandales Femme',
      subtitle: 'Élégance, confort et finitions raffinées pour toutes les occasions',
    }
  }
  return {
    title: 'Nos Produits',
    subtitle: 'Des sandales d\'exception pour hommes et femmes',
  }
})
</script>

<template>
  <main>
    <PageBanner :title="banner.title" :subtitle="banner.subtitle" />
    <ProductsSection
      :show-title="false"
      :initial-category="category || 'homme'"
      :show-tabs="!category"
    />
  </main>
</template>