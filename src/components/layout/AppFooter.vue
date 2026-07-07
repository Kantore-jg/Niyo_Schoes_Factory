<script setup>
import { company, footer, contact, socialLinks } from '../../data/data.js'
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__inner container">
      <div class="footer__grid">
        <div class="footer__brand">
          <!-- <div class="footer__logo">
            <img :src="company.logo" :alt="company.name" class="footer__logo-img" />
          </div> -->
          <p class="footer__tagline">{{ footer.tagline }}</p>
        </div>

        <div class="footer__col">
          <h3 class="footer__heading">Navigation</h3>
          <ul>
            <li v-for="link in footer.quickLinks" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__col">
          <h3 class="footer__heading">Produits</h3>
          <ul>
            <li v-for="link in footer.productLinks" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__col">
          <h3 class="footer__heading">Coordonnées</h3>
          <address class="footer__address">
            <p>{{ contact.address }}</p>
            <p><a :href="`tel:${contact.phone}`">{{ contact.phone }}</a></p>
            <p><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></p>
          </address>
          <div class="footer__social">
            <a
              v-for="social in socialLinks"
              :key="social.id"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="footer__social-link"
            >
              {{ social.label.charAt(0) }}
            </a>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>{{ footer.copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.footer {
  background: $color-primary;
  color: rgba(255, 255, 255, 0.85);
  padding: 80px 24px 32px;

  &__grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
    gap: 48px;
    margin-bottom: 48px;

    @include respond-to(mobile) {
      grid-template-columns: 1fr;
      gap: 36px;
    }
  }

  &__logo {
    margin-bottom: 16px;
  }

  &__logo-img {
    height: 72px;
    width: auto;
    object-fit: contain;
    border-radius: $radius-sm;
    background: $color-white;
    padding: 8px 12px;
  }

  &__tagline {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7;
  }

  &__heading {
    font-family: $font-button;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: $color-accent;
    margin-bottom: 20px;
  }

  &__col ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__col a {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    transition: color $transition;

    &:hover {
      color: $color-accent;
    }
  }

  &__address {
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  &__social {
    display: flex;
    gap: 10px;
  }

  &__social-link {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-family: $font-button;
    font-size: 0.75rem;
    font-weight: 600;
    transition: all $transition;

    &:hover {
      background: $color-accent;
      border-color: $color-accent;
      color: $color-white;
    }
  }

  &__bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 24px;
    text-align: center;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>