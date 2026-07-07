<script setup>
defineProps({
  label: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <div class="section-title animate-on-scroll">
    <span v-if="label" class="section-title__label">{{ label }}</span>
    <h2 class="section-title__heading">{{ title }}</h2>
    <p v-if="subtitle" class="section-title__subtitle">{{ subtitle }}</p>
  </div>
</template>