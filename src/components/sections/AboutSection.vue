<script setup>
import { about } from '../../data/data.js'
import SectionTitle from '../ui/SectionTitle.vue'
</script>

<template>
  <section id="apropos" class="section about">
    <div class="container">
      <SectionTitle
        :title="about.title"
        :subtitle="about.subtitle"
      />

      <div class="about__grid">
        <div class="about__image-wrap animate-on-scroll">
          <img :src="about.image" alt="Atelier Niyo Shoes Factory" loading="lazy" />
        </div>

        <div class="about__content">
          <div class="about__block animate-on-scroll">
            <h3>Notre histoire</h3>
            <p>{{ about.history }}</p>
          </div>
          <div class="about__block animate-on-scroll">
            <h3>Notre mission</h3>
            <p>{{ about.mission }}</p>
          </div>
          <div class="about__block animate-on-scroll">
            <h3>Notre vision</h3>
            <p>{{ about.vision }}</p>
          </div>
        </div>
      </div>

      <div class="about__values">
        <div
          v-for="(value, i) in about.values"
          :key="value.title"
          class="about__value-card animate-on-scroll"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <span class="about__value-icon" aria-hidden="true" />
          <h4>{{ value.title }}</h4>
          <p>{{ value.description }}</p>
        </div>
      </div>

      <div class="about__stats">
        <div
          v-for="(cap, i) in about.capabilities"
          :key="cap.label"
          class="about__stat animate-on-scroll"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <span class="about__stat-value">{{ cap.value }}</span>
          <span class="about__stat-unit">{{ cap.unit }}</span>
          <span class="about__stat-label">{{ cap.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.about {
  background: $color-white;

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-bottom: 80px;
    align-items: center;

    @include respond-to(mobile) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__image-wrap {
    border-radius: $radius-lg;
    overflow: hidden;
    box-shadow: $shadow-lg;

    img {
      width: 100%;
      height: 480px;
      object-fit: cover;
      transition: transform $transition-slow;

      &:hover {
        transform: scale(1.03);
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__block h3 {
    font-size: 1.3rem;
    margin-bottom: 12px;
    color: $color-secondary;
  }

  &__block p {
    color: rgba($color-text, 0.8);
    line-height: 1.8;
  }

  &__values {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-bottom: 80px;

    @include respond-to(mobile) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__value-card {
    @include glass(0.6);
    padding: 32px 24px;
    border-radius: $radius-md;
    text-align: center;
    border: 1px solid rgba($color-accent, 0.15);
    @include hover-lift;
  }

  &__value-icon {
    display: block;
    width: 32px;
    height: 3px;
    background: $color-accent;
    margin: 0 auto 16px;
    border-radius: 2px;
  }

  &__value-card h4 {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }

  &__value-card p {
    font-size: 0.85rem;
    color: rgba($color-text, 0.7);
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @include respond-to(mobile) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__stat {
    text-align: center;
    padding: 40px 20px;
    background: $color-primary;
    border-radius: $radius-md;
    color: $color-white;
    @include hover-lift;
  }

  &__stat-value {
    display: block;
    font-family: $font-heading;
    font-size: 2.5rem;
    font-weight: 700;
    color: $color-accent;
    line-height: 1;
  }

  &__stat-unit {
    display: block;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 8px;
  }

  &__stat-label {
    font-family: $font-button;
    font-size: 0.8rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
}
</style>