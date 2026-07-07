<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { hero, company } from '../../data/data.js'
import { useWhatsApp } from '../../composables/useWhatsApp.js'

const { openWhatsApp } = useWhatsApp()
const parallaxOffset = ref(0)

const handleScroll = () => {
  parallaxOffset.value = window.scrollY * 0.4
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section id="accueil" class="hero" aria-label="Accueil">
    <div
      class="hero__bg"
      :style="{
        backgroundImage: `url(${hero.backgroundImage})`,
        transform: `translateY(${parallaxOffset}px)`,
      }"
      role="img"
      :aria-label="hero.title"
    />
    <div class="hero__overlay" />

    <div class="hero__content container">
      <!-- <img :src="company.logo" :alt="company.name" class="hero__logo" /> -->
      <h1 class="sr-only">{{ hero.title }}</h1>
      <p class="hero__subtitle">{{ hero.subtitle }}</p>
      <p class="hero__description">{{ hero.description }}</p>

      <div class="hero__actions">
        <a :href="hero.ctaPrimary.href" class="btn btn--accent">{{ hero.ctaPrimary.label }}</a>
        <button class="btn btn--secondary" @click="openWhatsApp()">
          {{ hero.ctaSecondary.label }}
        </button>
      </div>
    </div>

    <div class="hero__scroll" aria-hidden="true">
      <span />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &__bg {
    position: absolute;
    inset: -20% 0 0;
    background-size: cover;
    background-position: center;
    will-change: transform;
  }

  // &__overlay {
  //   position: absolute;
  //   inset: 0;
  //   background: linear-gradient(
  //     135deg,
  //     rgba(59, 36, 23, 0.75) 0%,
  //     rgba(59, 36, 23, 0.45) 50%,
  //     rgba(59, 36, 23, 0.65) 100%
  //   );
  // }

  &__content {
    font-weight: bold;
    position: relative;
    z-index: 2;
    text-align: center;
    color: $color-white;
    max-width: 800px;
    max-height: 500px;
    padding: 0 24px;
    animation: heroFade 1.2s ease;
  }

  &__logo {
    margin: 0 auto 32px;
    height: clamp(120px, 18vw, 200px);
    width: auto;
    object-fit: contain;
    border-radius: $radius-md;
    background: $color-white;
    padding: 16px 24px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  }

  &__subtitle {
    font-family: $font-heading;
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    font-style: bold,italic;
    color: $color-accent;
    margin-bottom: 24px;
  }

  &__description {
    font-size: 1.05rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  &__actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__scroll {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;

    span {
      display: block;
      width: 24px;
      height: 40px;
      border: 2px solid rgba(255, 255, 255, 0.4);
      border-radius: 12px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 8px;
        background: $color-accent;
        border-radius: 2px;
        animation: scrollDown 2s infinite;
      }
    }
  }
}

@keyframes heroFade {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scrollDown {
  0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
  50% { opacity: 0.3; transform: translateX(-50%) translateY(12px); }
}
</style>