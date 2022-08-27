<script setup lang="ts">
import Header from "./components/Header.vue";
import Personal from "./components/Personal.vue";
</script>

<template>
  <div class="container">
    <Header />
    <Personal />
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
}
</style>
