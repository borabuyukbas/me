<script setup lang="ts">

</script>

<template>
  <div class="card">
    <div class="left-section">
      <h3 class="section-header">
        {{ $t("about_title") }}
      </h3>
      <div class="section-content">
        <p>{{ $t("about_text") }}</p>
      </div>
    </div>
    <div class="right-section">
      <h3 class="section-header">
        {{ $t("skills_title") }}
      </h3>
      <div class="section-content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.card {
    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
}

.left-section {
    flex: 2 2 auto;
    margin: 0 2rem 0 0;

    @media screen and (max-width: 1024px) {
        margin: 0 0 2rem 0;
    }
}

.right-section {
    flex: 1 1 auto;
}

.section-header {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
}
</style>