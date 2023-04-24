<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

const handleError = () => clearError({ redirect: '/' })

useHead({
  bodyAttrs: {
    class: "bg-white text-dark-900 dark:bg-dark-900 dark:text-neutral-50 transition-all font-sans font-300 lh-none"
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ],
  title: `${props.error.statusCode} - Bora Büyükbaş`
})
</script>

<template>
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="font-black text-8rem lg:text-12rem mb-4">
      {{ props.error.statusCode }}
    </h1>
    <h2 class="font-medium text-xl mb-12 text-neutral-500">
      {{ props.error.message }}
    </h2>
    <button
      class="text-2xl mdi:home"
      @click="handleError"
    />
  </div>
</template>
