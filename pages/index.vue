<script setup lang="ts">
// import { ref, watch } from "vue";
// import { i18n } from "../src/i18n";

// const locale = ref(i18n.global.locale);

// watch(locale, () => {
//   document.documentElement.setAttribute('lang', locale.value)
// })
</script>

<template>
  <div class="container">
    <Header />
    <PersonalSection />
    <AboutSection />
    <FooterSection />
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
