<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import { setDynamicPageMeta } from '../composables/usePageMeta.js'
import { getEventBySlug } from '../composables/useEvents.js'
import PageBanner from '../components/ui/PageBanner.vue'
import Lightbox from '../components/ui/Lightbox.vue'

const route = useRoute()
const router = useRouter()
const selectedImage = ref(null)

const event = computed(() => getEventBySlug(route.params.slug))

useScrollAnimation()

watch(
  event,
  (current) => {
    if (!current) {
      router.replace('/evenements')
      return
    }

    setDynamicPageMeta({
      title: `${current.name} — Événements | Niyo Shoes Factory`,
      description: current.description,
      canonicalPath: `/evenements/${current.slug}`,
      image: current.image,
    })
  },
  { immediate: true }
)

const openImage = (image) => {
  selectedImage.value = image
}

const closeLightbox = () => {
  selectedImage.value = null
}
</script>

<template>
  <main v-if="event">
    <PageBanner
      :title="event.name"
      :subtitle="`${event.date} · ${event.location}`"
    />

    <section class="section event-detail">
      <div class="container">
        <RouterLink to="/evenements" class="event-detail__back animate-on-scroll">
          ← Retour aux événements
        </RouterLink>

        <div class="event-detail__intro animate-on-scroll">
          <p class="event-detail__summary">{{ event.summary }}</p>
          <ul v-if="event.highlights?.length" class="event-detail__highlights">
            <li v-for="highlight in event.highlights" :key="highlight">
              {{ highlight }}
            </li>
          </ul>
        </div>

        <div v-if="event.moments?.length" class="event-detail__block">
          <h2 class="event-detail__heading animate-on-scroll">Moments forts</h2>
          <div class="event-detail__moments">
            <article
              v-for="(moment, i) in event.moments"
              :key="moment.id"
              class="event-detail__moment animate-on-scroll"
              :style="{ transitionDelay: `${i * 0.08}s` }"
            >
              <div class="event-detail__moment-image">
                <img :src="moment.image" :alt="moment.title" loading="lazy" />
              </div>
              <div class="event-detail__moment-body">
                <span class="event-detail__moment-date">{{ moment.date }}</span>
                <h3>{{ moment.title }}</h3>
                <p>{{ moment.description }}</p>
              </div>
            </article>
          </div>
        </div>

        <div v-if="event.gallery?.length" class="event-detail__block">
          <h2 class="event-detail__heading animate-on-scroll">Galerie photos</h2>
          <div class="event-detail__gallery">
            <button
              v-for="(image, i) in event.gallery"
              :key="image.id"
              type="button"
              class="event-detail__gallery-item animate-on-scroll"
              :style="{ transitionDelay: `${i * 0.06}s` }"
              :aria-label="image.alt"
              @click="openImage(image)"
            >
              <img :src="image.src" :alt="image.alt" loading="lazy" />
              <span v-if="image.caption" class="event-detail__gallery-caption">{{ image.caption }}</span>
            </button>
          </div>
        </div>

        <div v-if="event.videos?.length" class="event-detail__block">
          <h2 class="event-detail__heading animate-on-scroll">Vidéos</h2>
          <div class="event-detail__videos">
            <article
              v-for="(video, i) in event.videos"
              :key="video.id"
              class="event-detail__video animate-on-scroll"
              :style="{ transitionDelay: `${i * 0.08}s` }"
            >
              <div class="event-detail__video-player">
                <iframe
                  v-if="video.type === 'youtube'"
                  :src="video.url"
                  :title="video.title"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <video
                  v-else
                  :src="video.url"
                  controls
                  :poster="video.thumbnail"
                  :title="video.title"
                />
              </div>
              <h3>{{ video.title }}</h3>
              <p v-if="video.description">{{ video.description }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <Lightbox :image="selectedImage" @close="closeLightbox" />
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.event-detail {
  &__back {
    display: inline-flex;
    align-items: center;
    font-family: $font-button;
    font-size: 0.9rem;
    font-weight: 500;
    color: $color-accent;
    margin-bottom: 40px;
    transition: color $transition;

    &:hover {
      color: $color-primary;
    }
  }

  &__intro {
    max-width: 820px;
    margin-bottom: 64px;
  }

  &__summary {
    font-size: 1.05rem;
    line-height: 1.9;
    color: rgba($color-text, 0.8);
    margin-bottom: 24px;
  }

  &__highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    li {
      font-family: $font-button;
      font-size: 0.8rem;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: $radius-xl;
      background: rgba($color-accent, 0.12);
      color: $color-secondary;
    }
  }

  &__block {
    margin-bottom: 72px;
  }

  &__heading {
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: 32px;
  }

  &__moments {
    display: grid;
    gap: 28px;
  }

  &__moment {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 28px;
    background: $color-white;
    border-radius: $radius-lg;
    overflow: hidden;
    box-shadow: $shadow-sm;

    @include respond-to(mobile) {
      grid-template-columns: 1fr;
    }
  }

  &__moment-image {
    height: 100%;
    min-height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__moment-body {
    padding: 28px 28px 28px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include respond-to(mobile) {
      padding: 0 24px 24px;
    }

    h3 {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    p {
      color: rgba($color-text, 0.75);
      line-height: 1.7;
    }
  }

  &__moment-date {
    font-family: $font-button;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: $color-accent;
    margin-bottom: 8px;
  }

  &__gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @include respond-to(mobile) {
      grid-template-columns: 1fr;
    }

    @media (min-width: $breakpoint-tablet) and (max-width: $breakpoint-laptop - 1) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__gallery-item {
    position: relative;
    border-radius: $radius-lg;
    overflow: hidden;
    aspect-ratio: 4 / 3;
    cursor: pointer;
    box-shadow: $shadow-sm;
    transition: transform $transition;

    &:hover {
      transform: translateY(-4px);

      img {
        transform: scale(1.05);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform $transition-slow;
    }
  }

  &__gallery-caption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 16px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
    color: $color-white;
    font-size: 0.85rem;
    text-align: left;
  }

  &__videos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    @include respond-to(mobile) {
      grid-template-columns: 1fr;
    }
  }

  &__video-player {
    aspect-ratio: 16 / 9;
    border-radius: $radius-lg;
    overflow: hidden;
    background: $color-primary;
    margin-bottom: 16px;

    iframe,
    video {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  &__video h3 {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }

  &__video p {
    font-size: 0.9rem;
    color: rgba($color-text, 0.7);
    line-height: 1.6;
  }
}
</style>