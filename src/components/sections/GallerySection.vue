<script setup>
import { ref, computed } from 'vue'
import { gallery } from '../../data/data.js'
import SectionTitle from '../ui/SectionTitle.vue'
import Lightbox from '../ui/Lightbox.vue'

const activeFilter = ref('all')
const selectedImage = ref(null)

const filteredImages = computed(() => {
  if (activeFilter.value === 'all') return gallery.images
  return gallery.images.filter((img) => img.category === activeFilter.value)
})

const openImage = (image) => {
  selectedImage.value = image
}

const closeLightbox = () => {
  selectedImage.value = null
}
</script>

<template>
  <section id="galerie" class="section gallery">
    <div class="container">
      <SectionTitle
        title="Galerie"
        subtitle="Découvrez notre univers à travers nos images"
      />

      <div class="gallery__filters animate-on-scroll">
        <button
          v-for="cat in gallery.categories"
          :key="cat.id"
          class="gallery__filter"
          :class="{ 'gallery__filter--active': activeFilter === cat.id }"
          @click="activeFilter = cat.id"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="gallery__masonry">
        <div
          v-for="(image, i) in filteredImages"
          :key="image.id"
          class="gallery__item animate-on-scroll"
          :class="`gallery__item--${(i % 3) + 1}`"
          :style="{ transitionDelay: `${(i % 6) * 0.08}s` }"
          role="button"
          tabindex="0"
          :aria-label="image.alt"
          @click="openImage(image)"
          @keydown.enter="openImage(image)"
        >
          <img :src="image.src" :alt="image.alt" loading="lazy" />
          <div class="gallery__item-overlay">
            <span>{{ image.alt }}</span>
          </div>
        </div>
      </div>
    </div>

    <Lightbox :image="selectedImage" @close="closeLightbox" />
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.gallery {
  &__filters {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 48px;
  }

  &__filter {
    font-family: $font-button;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 8px 20px;
    border-radius: $radius-xl;
    color: $color-secondary;
    transition: all $transition;

    &--active,
    &:hover {
      background: $color-accent;
      color: $color-white;
    }
  }

  &__masonry {
    columns: 3;
    column-gap: 20px;

    @include respond-to(mobile) {
      columns: 1;
    }

    @media (min-width: $breakpoint-tablet) and (max-width: $breakpoint-laptop - 1) {
      columns: 2;
    }
  }

  &__item {
    break-inside: avoid;
    margin-bottom: 20px;
    border-radius: $radius-md;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    &--1 img { height: 280px; }
    &--2 img { height: 360px; }
    &--3 img { height: 240px; }

    img {
      width: 100%;
      object-fit: cover;
      display: block;
      transition: transform $transition-slow;
    }

    &:hover img {
      transform: scale(1.04);
    }
  }

  &__item-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(transparent 50%, rgba($color-primary, 0.8));
    display: flex;
    align-items: flex-end;
    padding: 20px;
    opacity: 0;
    transition: opacity $transition;

    span {
      color: $color-white;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .gallery__item:hover & {
      opacity: 1;
    }
  }
}
</style>