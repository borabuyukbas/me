<script setup lang="ts">
import Header from "./sections/Header.vue";
import Personal from "./sections/Personal.vue";
import About from "./sections/About.vue";

import { ref, watch } from "vue";
import { i18n } from "./i18n";

const locale = ref(i18n.global.locale);

watch(locale, () => {
  document.documentElement.setAttribute('lang', locale.value)
})
</script>

<template>
  <div class="container">
    <Header />
    <Personal />
    <About />
  </div>
</template>

<style lang="scss">
.container {
  padding: 1rem 12rem;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
}

.card {
  display: flex;
  margin-bottom: 4rem;
}
</style>
