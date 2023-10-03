<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css'

useHead({
  bodyAttrs: {
    class: "bg-white text-dark-900 dark:bg-dark-900 dark:text-neutral-50 transition-all font-sans font-300 lh-none"
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Bora Büyükbaş` : 'Bora Büyükbaş';
  },
})
</script>

<template>
  <div class="p-6 lg:px-48">
    <Header />
    <slot />
  </div>
</template>