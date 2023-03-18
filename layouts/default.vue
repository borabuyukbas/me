<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-white text-dark-900 dark:bg-dark-900 dark:text-neutral-50 transition-all font-sans font-300 lh-none"
  }
})
</script>

<template>
  <div class="p-6 lg:px-48">
    <Header />
    <slot />
  </div>
</template>