<script setup>
import { ref, computed } from 'vue'
import { categories, products } from '../../data/data.js'
import { useWhatsApp } from '../../composables/useWhatsApp.js'
import SectionTitle from '../ui/SectionTitle.vue'

const { openWhatsApp } = useWhatsApp()
const activeCategory = ref('homme')

const filteredProducts = computed(() =>
  products.filter((p) => p.category === activeCategory.value)
)

const setCategory = (slug) => {
  activeCategory.value = slug
}
</script>

<template>
  <section id="produits" class="section products">
    <div class="container">
      <SectionTitle
        title="Nos Produits"
        subtitle="Des sandales d'exception pour hommes et femmes"
      />

      <div class="products__tabs animate-on-scroll">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="products__tab"
          :class="{ 'products__tab--active': activeCategory === cat.slug }"
          @click="setCategory(cat.slug)"
        >
          {{ cat.label }}
        </button>
      </div>

      <div :key="activeCategory" class="products__grid">
        <article
          v-for="(product, i) in filteredProducts"
          :key="product.id"
          class="products__card"
          :style="{ animationDelay: `${i * 0.08}s` }"
        >
          <div class="products__card-image">
            <img :src="product.image" :alt="product.name" loading="lazy" />
          </div>
          <div class="products__card-body">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <div class="products__meta">
              <div class="products__colors">
                <span
                  v-for="color in product.colors"
                  :key="color"
                  class="products__color-tag"
                >{{ color }}</span>
              </div>
              <div class="products__sizes">
                <span class="products__sizes-label">Pointures :</span>
                {{ product.sizes.join(', ') }}
              </div>
            </div>
            <button class="btn btn--whatsapp" @click="openWhatsApp(product.name)">
              Demander via WhatsApp
            </button>
          </div>
        </article>

        <p v-if="filteredProducts.length === 0" class="products__empty">
          Aucun produit disponible dans cette catégorie pour le moment.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.products {
  &__tabs {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 48px;
  }

  &__tab {
    font-family: $font-button;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 12px 32px;
    border-radius: $radius-xl;
    color: $color-secondary;
    border: 2px solid transparent;
    transition: all $transition;

    &--active,
    &:hover {
      background: $color-primary;
      color: $color-white;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    @include respond-to(mobile) {
      grid-template-columns: 1fr;
    }

    @media (min-width: $breakpoint-tablet) and (max-width: $breakpoint-laptop - 1) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__empty {
    grid-column: 1 / -1;
    text-align: center;
    color: rgba($color-text, 0.6);
    padding: 48px 24px;
  }

  &__card {
    background: $color-white;
    border-radius: $radius-lg;
    overflow: hidden;
    box-shadow: $shadow-sm;
    animation: productFadeIn 0.4s ease both;
    @include hover-lift;
  }

  &__card-image {
    overflow: hidden;
    height: 280px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform $transition-slow;
    }

    &:hover img {
      transform: scale(1.06);
    }
  }

  &__card-body {
    padding: 28px;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 8px;
    }

    p {
      font-size: 0.9rem;
      color: rgba($color-text, 0.7);
      margin-bottom: 16px;
      line-height: 1.6;
    }
  }

  &__meta {
    margin-bottom: 20px;
  }

  &__colors {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 10px;
  }

  &__color-tag {
    font-size: 0.75rem;
    padding: 4px 10px;
    background: rgba($color-accent, 0.12);
    color: $color-secondary;
    border-radius: $radius-sm;
  }

  &__sizes {
    font-size: 0.8rem;
    color: rgba($color-text, 0.6);
  }

  &__sizes-label {
    font-weight: 600;
    color: $color-text;
  }
}

@keyframes productFadeIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>