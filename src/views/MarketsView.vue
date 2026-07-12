<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import PageBanner from '../components/ui/PageBanner.vue'
import MarketsSection from '../components/sections/MarketsSection.vue'

useScrollAnimation()
</script>

<template>
  <main>
    <PageBanner
      title="Nos Marchés"
      subtitle="Retrouvez nos points de présence avec adresse, téléphone et visuel"
    />
    <MarketsSection :show-title="false" />
  </main>
</template>