<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { company, navigation } from '../../data/data.js'

const route = useRoute()
const isScrolled = ref(false)
const isHome = computed(() => route.path === '/')
const showSolidNav = computed(() => isScrolled.value || !isHome.value)
const isMenuOpen = ref(false)

const productRoutes = ['/produits', '/sandales-homme', '/sandales-femme']

const isNavActive = (item) => {
  if (item.id === 'produits') {
    return productRoutes.includes(route.path)
  }
  return route.path === item.href
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="navbar"
    :class="{ 'navbar--scrolled': showSolidNav, 'navbar--open': isMenuOpen }"
    role="banner"
  >
    <div class="navbar__inner container">
      <RouterLink to="/" class="navbar__logo" @click="closeMenu">
        <img :src="company.logo" :alt="company.name" class="navbar__logo-img" />
        <span class="navbar__brand-name">{{ company.name }}</span>
      </RouterLink>
      <nav class="navbar__nav" role="navigation" aria-label="Navigation principale">
        <ul class="navbar__list">
          <li v-for="item in navigation" :key="item.id">
            <RouterLink
              :to="item.href"
              class="navbar__link"
              :class="{ 'navbar__link--active': isNavActive(item) }"
              @click="closeMenu"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <button
        class="navbar__toggle"
        :aria-expanded="isMenuOpen"
        aria-label="Menu de navigation"
        @click="toggleMenu"
      >
        <span class="navbar__toggle-bar" />
        <span class="navbar__toggle-bar" />
        <span class="navbar__toggle-bar" />
      </button>
    </div>

    <div class="navbar__mobile" :class="{ 'navbar__mobile--open': isMenuOpen }">
      <ul class="navbar__mobile-list">
        <li v-for="item in navigation" :key="item.id">
          <RouterLink
            :to="item.href"
            class="navbar__mobile-link"
            :class="{ 'navbar__mobile-link--active': isNavActive(item) }"
            @click="closeMenu"
          >
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: $nav-height;
  transition: background $transition, box-shadow $transition;

  &--scrolled {
    @include glass(0.95);
    box-shadow: $shadow-sm;

    .navbar__link {
      color: $color-primary;
    }

    .navbar__toggle-bar {
      background: $color-primary;
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 24px;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }

  &__brand-name {
    font-family: $font-heading;
    font-size: 1rem;
    font-weight: 600;
    color: $color-white;
    transition: color $transition;

    @include respond-to(mobile) {
      display: none;
    }
  }

  &--scrolled &__brand-name {
    color: $color-primary;
  }

  &__logo-img {
    height: 48px;
    width: auto;
    object-fit: contain;
    border-radius: $radius-sm;
    padding: 4px 8px;
    box-shadow: $shadow-sm;
    transition: transform $transition;

    &:hover {
      transform: scale(1.02);
    }

    @include respond-to(mobile) {
      height: 40px;
    }
  }

  &__nav {
    @include respond-to(mobile) {
      display: none;
    }
  }

  &__list {
    display: flex;
    gap: 8px;
  }

  &__link {
    font-family: $font-button;
    font-size: 0.8rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    padding: 8px 14px;
    border-radius: $radius-sm;
    transition: all $transition;
    letter-spacing: 0.3px;

    &:hover,
    &--active {
      color: $color-accent;
      background: rgba(200, 155, 60, 0.1);
    }

    &--active {
      font-weight: 600;
    }
  }

  &__toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 8px;

    @include respond-to(mobile) {
      display: flex;
    }
  }

  &__toggle-bar {
    width: 24px;
    height: 2px;
    background: $color-white;
    transition: all $transition;
    border-radius: 2px;
  }

  &--open &__toggle-bar:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &--open &__toggle-bar:nth-child(2) {
    opacity: 0;
  }

  &--open &__toggle-bar:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  &__mobile {
    display: none;
    position: fixed;
    top: $nav-height;
    left: 0;
    right: 0;
    bottom: 0;
    background: $color-bg;
    padding: 32px 24px;
    transform: translateX(100%);
    transition: transform $transition;

    @include respond-to(mobile) {
      display: block;
    }

    &--open {
      transform: translateX(0);
    }
  }

  &__mobile-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__mobile-link {
    display: block;
    font-family: $font-button;
    font-size: 1.1rem;
    font-weight: 500;
    color: $color-primary;
    padding: 16px 20px;
    border-radius: $radius-sm;
    transition: all $transition;

    &:hover,
    &--active {
      background: rgba(200, 155, 60, 0.12);
      color: $color-accent;
    }
  }
}
</style>