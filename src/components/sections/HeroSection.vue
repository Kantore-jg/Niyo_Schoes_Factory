<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { hero } from '../../data/data.js'
import { useWhatsApp } from '../../composables/useWhatsApp.js'

const { openWhatsApp } = useWhatsApp()
const parallaxOffset = ref(0)
const activeSlideIndex = ref(0)
const reduceMotion = ref(false)
let carouselTimer = null

const slides = computed(() => {
  if (hero.backgroundImages?.length) return hero.backgroundImages
  return [{ src: hero.backgroundImage, alt: hero.title }]
})

const handleScroll = () => {
  parallaxOffset.value = window.scrollY * 0.4
}

const nextSlide = () => {
  activeSlideIndex.value = (activeSlideIndex.value + 1) % slides.value.length
}

const goToSlide = (index) => {
  activeSlideIndex.value = index
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (slides.value.length > 1 && !reduceMotion.value) {
    carouselTimer = window.setInterval(nextSlide, 5000)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (carouselTimer) {
    window.clearInterval(carouselTimer)
  }
})
</script>

<template>
  <section id="accueil" class="hero" aria-label="Accueil">
    <div class="hero__bg" aria-hidden="true">
      <div
        v-for="(slide, index) in slides"
        :key="slide.src"
        class="hero__bg-slide"
        :class="{ 'is-active': index === activeSlideIndex }"
        :style="{
          backgroundImage: `url(${slide.src})`,
          transform: `translateY(${parallaxOffset}px) scale(${index === activeSlideIndex ? 1.02 : 1.08})`,
        }"
      />
    </div>
    <div class="hero__overlay" />

    <div class="hero__content container">
      <h1 class="sr-only">{{ hero.title }}</h1>
      <p class="hero__subtitle">{{ hero.subtitle }}</p>
      <p class="hero__description">{{ hero.description }}</p>

      <div class="hero__actions">
        <RouterLink :to="hero.ctaPrimary.href" class="btn btn--accent">{{ hero.ctaPrimary.label }}</RouterLink>
        <button class="btn btn--secondary" @click="openWhatsApp()">
          {{ hero.ctaSecondary.label }}
        </button>
      </div>

      <div v-if="slides.length > 1" class="hero__indicators" aria-label="Sélection des images du hero">
        <button
          v-for="(slide, index) in slides"
          :key="slide.src"
          class="hero__indicator"
          :class="{ 'is-active': index === activeSlideIndex }"
          type="button"
          :aria-label="`Afficher l'image ${index + 1}`"
          :aria-pressed="index === activeSlideIndex"
          @click="goToSlide(index)"
        />
      </div>
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
    overflow: hidden;
    background: linear-gradient(180deg, #08111f 0%, #0d1f33 100%);
    will-change: transform;
  }

  &__bg-slide {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition:
      opacity 900ms ease,
      transform 1200ms ease;
    filter: saturate(1.05) contrast(1.02);

    &.is-active {
      opacity: 1;
    }
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(135deg, rgba(8, 17, 31, 0.78) 0%, rgba(8, 17, 31, 0.42) 45%, rgba(8, 17, 31, 0.72) 100%),
      radial-gradient(circle at top, rgba(117, 167, 49, 0.2) 0%, transparent 42%);
  }

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

  &__indicators {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 28px;
  }

  &__indicator {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    border: 0;
    padding: 0;
    background: rgba($color-white, 0.35);
    transition: all $transition;

    &.is-active {
      width: 30px;
      background: $color-accent;
    }
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

@media (prefers-reduced-motion: reduce) {
  .hero__bg-slide,
  .hero__content,
  .hero__scroll span::after {
    animation: none;
    transition: none;
  }
}
</style>
