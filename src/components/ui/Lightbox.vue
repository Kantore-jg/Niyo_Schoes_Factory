<script setup>
defineProps({
  image: { type: Object, default: null },
})

const emit = defineEmits(['close'])

const handleKeydown = (e) => {
  if (e.key === 'Escape') emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="image"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="image.alt || 'Image agrandie'"
      @click.self="emit('close')"
      @keydown="handleKeydown"
    >
      <button class="lightbox__close" aria-label="Fermer" @click="emit('close')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <img :src="image.src" :alt="image.alt || ''" class="lightbox__image" />
      <p v-if="image.caption || image.alt" class="lightbox__caption">
        {{ image.caption || image.alt }}
      </p>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(34, 34, 34, 0.92);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  animation: fadeIn 0.3s ease;

  &__close {
    position: absolute;
    top: 24px;
    right: 24px;
    color: $color-white;
    padding: 8px;
    border-radius: 50%;
    transition: background $transition;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }

  &__image {
    max-width: 90vw;
    max-height: 80vh;
    object-fit: contain;
    border-radius: $radius-md;
    box-shadow: $shadow-lg;
  }

  &__caption {
    color: rgba(255, 255, 255, 0.8);
    margin-top: 16px;
    font-size: 0.9rem;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>