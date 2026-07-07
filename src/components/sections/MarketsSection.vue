<script setup>
import { markets } from '../../data/data.js'
import SectionTitle from '../ui/SectionTitle.vue'
</script>

<template>
  <section id="marches" class="section markets">
    <div class="container">
      <SectionTitle
        title="Nos Marchés"
        subtitle="Retrouvez nos points de présence avec adresse, téléphone et visuel"
      />

      <div class="markets__grid">
        <article
          v-for="(market, i) in markets"
          :key="market.id"
          class="markets__card animate-on-scroll"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <div class="markets__image-wrap">
            <img :src="market.image" :alt="market.address" loading="lazy" />
          </div>

          <div class="markets__body">
            <p class="markets__label">Adresse</p>
            <h3 class="markets__address">{{ market.address }}</h3>

            <p class="markets__label">Téléphone</p>
            <a class="markets__phone" :href="`tel:${market.phoneHref}`">
              {{ market.phone }}
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.markets {
  background:
    radial-gradient(circle at top left, rgba($color-accent, 0.08), transparent 30%),
    linear-gradient(180deg, $color-bg 0%, $color-white 100%);

  &__grid {
    display: flex;
    flex-wrap: nowrap;
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 12px;
    scroll-snap-type: x proximity;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba($color-primary, 0.2);
      border-radius: 999px;
    }
  }

  &__card {
    flex: 0 0 280px;
    background: $color-white;
    border-radius: $radius-md;
    overflow: hidden;
    box-shadow: $shadow-sm;
    border-top: 4px solid $color-primary;
    @include hover-lift;
    scroll-snap-align: start;

    @include respond-to(mobile) {
      flex-basis: 240px;
    }
  }

  &__image-wrap {
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: $color-bg;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform $transition-slow;
    }
  }

  &__card:hover &__image-wrap img {
    transform: scale(1.05);
  }

  &__body {
    padding: 18px 18px 20px;
  }

  &__label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: $color-primary;
    margin-bottom: 6px;
  }

  &__address {
    font-family: $font-heading;
    font-size: 1.05rem;
    line-height: 1.35;
    margin-bottom: 16px;
  }

  &__phone {
    display: inline-block;
    font-size: 0.92rem;
    font-weight: 600;
    color: $color-secondary;
    transition: color $transition;

    &:hover {
      color: $color-primary;
    }
  }
}
</style>
