<script setup>
import { contact, socialLinks } from '../../data/data.js'
import { useWhatsApp } from '../../composables/useWhatsApp.js'
import SectionTitle from '../ui/SectionTitle.vue'

const { openWhatsApp } = useWhatsApp()
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <SectionTitle
        :title="contact.title"
        :subtitle="contact.subtitle"
      />

      <div class="contact__layout">
        <div class="contact__info animate-on-scroll">
          <div class="contact__card">
            <div class="contact__item">
              <div>
                <h4>Adresse</h4>
                <p>{{ contact.address }}</p>
              </div>
            </div>
            <div class="contact__item">
              <div>
                <h4>Téléphone</h4>
                <p><a :href="`tel:${contact.phone}`">{{ contact.phone }}</a></p>
              </div>
            </div>
            <div class="contact__item">
              <div>
                <h4>Email</h4>
                <p><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></p>
              </div>
            </div>
            <div class="contact__item">
              <div>
                <h4>Réseaux sociaux</h4>
                <div class="contact__social">
                  <a
                    v-for="social in socialLinks"
                    :key="social.id"
                    :href="social.url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ social.label }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button class="btn btn--whatsapp contact__cta" @click="openWhatsApp()">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Nous contacter sur WhatsApp
          </button>
        </div>

        <div class="contact__map animate-on-scroll">
          <iframe
            :src="contact.mapEmbed"
            width="100%"
            height="100%"
            style="border:0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localisation Niyo Shoes Factory"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.contact {
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

  &__card {
    @include glass(0.5);
    border: 1px solid rgba($color-accent, 0.15);
    border-radius: $radius-lg;
    padding: 36px;
    margin-bottom: 32px;
  }

  &__item {
    display: flex;
    gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid rgba($color-text, 0.08);

    &:last-child {
      border-bottom: none;
    }

    h4 {
      font-family: $font-button;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: $color-secondary;
      margin-bottom: 4px;
    }

    p, a {
      font-size: 0.95rem;
      color: $color-text;
      transition: color $transition;

      &:hover {
        color: $color-accent;
      }
    }
  }

  &__icon {
    font-size: 1.3rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  &__social {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    a {
      font-size: 0.85rem;
      font-weight: 500;
      color: $color-accent;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__cta {
    width: 100%;
    padding: 18px 32px;
    font-size: 1rem;
  }

  &__map {
    height: 480px;
    border-radius: $radius-lg;
    overflow: hidden;
    box-shadow: $shadow-md;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>