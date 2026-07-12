<script setup>
import { RouterLink } from 'vue-router'

const highlights = [
  {
    title: 'À propos',
    description: 'Notre histoire, mission et savoir-faire artisanal à Gitega.',
    to: '/a-propos',
  },
  {
    title: 'Produits',
    description: 'Sandales en cuir pour hommes et femmes, fabriquées à la main.',
    to: '/produits',
  },
  {
    title: 'Événements',
    description: 'Salons, foires et expositions où nous présentons nos collections.',
    to: '/evenements',
  },
  {
    title: 'Marchés',
    description: 'Nos points de vente à Gitega, Muyinga, Ngozi et Bujumbura.',
    to: '/marches',
  },
  {
    title: 'Galerie',
    description: 'Photos de nos produits, atelier et processus de fabrication.',
    to: '/galerie',
  },
  {
    title: 'Contact',
    description: 'Commandez ou posez vos questions via WhatsApp ou email.',
    to: '/contact',
  },
]
</script>

<template>
  <section class="section highlights">
    <div class="container">
      <div class="highlights__intro animate-on-scroll">
        <h2 class="highlights__heading">Découvrez Niyo Shoes Factory</h2>
        <p class="highlights__text">
          Fabricant de sandales en cuir haut de gamme au Burundi. Explorez nos collections,
          notre atelier et nos points de vente.
        </p>
      </div>

      <div class="highlights__grid">
        <RouterLink
          v-for="(item, i) in highlights"
          :key="item.to"
          :to="item.to"
          class="highlights__card animate-on-scroll"
          :style="{ transitionDelay: `${i * 0.06}s` }"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <span class="highlights__link">En savoir plus →</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.highlights {
  &__intro {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 56px;
  }

  &__heading {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    margin-bottom: 16px;
  }

  &__text {
    color: rgba($color-text, 0.75);
    line-height: 1.8;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @include respond-to(mobile) {
      grid-template-columns: 1fr;
    }

    @media (min-width: $breakpoint-tablet) and (max-width: $breakpoint-laptop - 1) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    background: $color-white;
    border-radius: $radius-lg;
    padding: 32px;
    box-shadow: $shadow-sm;
    transition: all $transition;
    @include hover-lift;

    h3 {
      font-size: 1.25rem;
      margin-bottom: 10px;
    }

    p {
      flex: 1;
      font-size: 0.9rem;
      color: rgba($color-text, 0.7);
      line-height: 1.7;
      margin-bottom: 20px;
    }
  }

  &__link {
    font-family: $font-button;
    font-size: 0.85rem;
    font-weight: 600;
    color: $color-accent;
  }
}
</style>