<script setup>
import { events } from '../../data/data.js'
import SectionTitle from '../ui/SectionTitle.vue'

defineProps({
  showTitle: { type: Boolean, default: true },
})
</script>

<template>
  <section class="section events">
    <div class="container">
      <SectionTitle
        v-if="showTitle"
        title="Événements"
        subtitle="Foires, salons et expositions auxquels nous participons"
      />

      <div class="events__grid">
        <article
          v-for="(event, i) in events"
          :key="event.id"
          class="events__card animate-on-scroll"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <div class="events__card-image">
            <img :src="event.image" :alt="event.name" loading="lazy" />
            <span class="events__date">{{ event.date }}</span>
          </div>
          <div class="events__card-body">
            <h3>{{ event.name }}</h3>
            <p class="events__location">{{ event.location }}</p>
            <p>{{ event.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.events {
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    @include respond-to(mobile) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    background: $color-white;
    border-radius: $radius-lg;
    overflow: hidden;
    box-shadow: $shadow-sm;
    @include hover-lift;
  }

  &__card-image {
    position: relative;
    height: 240px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform $transition-slow;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  &__date {
    position: absolute;
    top: 16px;
    right: 16px;
    background: $color-accent;
    color: $color-white;
    font-family: $font-button;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: $radius-sm;
  }

  &__card-body {
    padding: 28px;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 6px;
    }
  }

  &__location {
    font-size: 0.85rem;
    color: $color-accent;
    font-weight: 500;
    margin-bottom: 12px;
  }

  &__card-body p:last-child {
    font-size: 0.9rem;
    color: rgba($color-text, 0.7);
    line-height: 1.6;
  }
}
</style>