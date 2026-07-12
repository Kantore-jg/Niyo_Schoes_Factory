<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <section class="page-banner">
    <div class="page-banner__inner container">
      <h1 class="page-banner__title">{{ title }}</h1>
      <p v-if="subtitle" class="page-banner__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;

.page-banner {
  padding: calc($nav-height + 64px) 24px 48px;
  background: linear-gradient(135deg, $color-primary 0%, color-mix(in srgb, $color-primary 85%, $color-secondary) 100%);
  color: $color-white;
  text-align: center;

  &__title {
    font-size: clamp(2rem, 4vw, 3rem);
    color: $color-white;
    margin-bottom: 12px;
  }

  &__subtitle {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 640px;
    margin: 0 auto;
    line-height: 1.7;
  }
}
</style>