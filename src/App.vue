<script setup lang="ts">
import Header from "./components/Header.vue";
import Personal from "./components/Personal.vue";
import About from "./components/About.vue";
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
