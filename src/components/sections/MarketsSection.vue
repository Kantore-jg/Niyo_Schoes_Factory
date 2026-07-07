<script setup>
import { ref } from 'vue'
import { markets } from '../../data/data.js'
import SectionTitle from '../ui/SectionTitle.vue'

const activeMarket = ref(null)

const selectMarket = (market) => {
  activeMarket.value = activeMarket.value?.id === market.id ? null : market
}
</script>

<template>
  <section id="marches" class="section markets">
    <div class="container">
      <SectionTitle
        label="Présence mondiale"
        title="Nos Marchés"
        subtitle="Des sandales Niyo commercialisées à travers le monde"
      />

      <div class="markets__layout">
        <div class="markets__map animate-on-scroll">
          <svg viewBox="0 0 100 60" class="markets__svg" aria-label="Carte des marchés">
            <rect width="100" height="60" fill="#e8e4df" rx="2" />
            <ellipse cx="50" cy="30" rx="48" ry="28" fill="#d4cfc8" opacity="0.5" />

            <circle
              v-for="market in markets"
              :key="market.id"
              :cx="market.x"
              :cy="market.y"
              r="3"
              class="markets__dot"
              :class="{ 'markets__dot--active': activeMarket?.id === market.id }"
              role="button"
              tabindex="0"
              :aria-label="market.country"
              @click="selectMarket(market)"
              @keydown.enter="selectMarket(market)"
            />
          </svg>
          <p class="markets__map-hint">Cliquez sur un point pour voir les détails</p>
        </div>

        <div class="markets__list">
          <div
            v-for="(market, i) in markets"
            :key="market.id"
            class="markets__card animate-on-scroll"
            :class="{ 'markets__card--active': activeMarket?.id === market.id }"
            :style="{ transitionDelay: `${i * 0.08}s` }"
            role="button"
            tabindex="0"
            @click="selectMarket(market)"
            @keydown.enter="selectMarket(market)"
          >
            <div class="markets__card-header">
              <span class="markets__flag">{{ market.code }}</span>
              <h3>{{ market.country }}</h3>
            </div>
            <p>{{ market.description }}</p>
            <span class="markets__distribution">{{ market.distribution }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.markets {
  background: $color-white;

  &__layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;

    @include respond-to(mobile) {
      grid-template-columns: 1fr;
    }
  }

  &__map {
    position: sticky;
    top: 100px;
    background: $color-bg;
    border-radius: $radius-lg;
    padding: 32px;
    box-shadow: $shadow-sm;
  }

  &__svg {
    width: 100%;
    height: auto;
  }

  &__dot {
    fill: $color-accent;
    cursor: pointer;
    transition: all $transition;
    stroke: $color-white;
    stroke-width: 0.5;

    &:hover,
    &--active {
      fill: $color-primary;
      r: 4;
      filter: drop-shadow(0 0 4px rgba($color-accent, 0.6));
    }
  }

  &__map-hint {
    text-align: center;
    font-size: 0.8rem;
    color: rgba($color-text, 0.5);
    margin-top: 16px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__card {
    padding: 24px;
    border-radius: $radius-md;
    border: 2px solid transparent;
    background: $color-bg;
    cursor: pointer;
    transition: all $transition;

    &:hover,
    &--active {
      border-color: $color-accent;
      box-shadow: $shadow-md;
      background: $color-white;
    }
  }

  &__card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
  }

  &__flag {
    font-family: $font-button;
    font-size: 0.7rem;
    font-weight: 700;
    background: $color-primary;
    color: $color-accent;
    padding: 4px 8px;
    border-radius: $radius-sm;
  }

  &__card h3 {
    font-size: 1.1rem;
  }

  &__card p {
    font-size: 0.85rem;
    color: rgba($color-text, 0.7);
    line-height: 1.6;
    margin-bottom: 8px;
  }

  &__distribution {
    font-size: 0.75rem;
    font-weight: 500;
    color: $color-secondary;
  }
}
</style>