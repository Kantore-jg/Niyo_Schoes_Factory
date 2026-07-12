<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import PageBanner from '../components/ui/PageBanner.vue'
import EventsSection from '../components/sections/EventsSection.vue'

useScrollAnimation()
</script>

<template>
  <main>
    <PageBanner
      title="Événements"
      subtitle="Foires, salons et expositions auxquels nous participons"
    />
    <EventsSection :show-title="false" />
  </main>
</template>