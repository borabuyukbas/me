<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css'

useHead({
  bodyAttrs: {
    class: "bg-white text-dark-900 dark:bg-dark-900 dark:text-neutral-50 transition-all font-sans font-300 lh-none min-h-screen"
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
  <div class="p-6 lg:px-48 min-h-screen flex flex-col">
    <NuxtLoadingIndicator :color="useColorMode().value == 'dark' ? 'rgb(250 250 250)' : 'rgb(15 15 15)'" />
    <Header class="mb-8" />
    <slot />
  </div>
</template>

<style>
#__nuxt {
  min-height: 100vh;
}
</style>