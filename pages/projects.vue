<script setup lang="ts">
const nuxtApp = useNuxtApp();

const { data: response } = await useFetch("/api/projects", {
  getCachedData(key) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
  }
})
</script>

<template>
  <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
    <ProjectCard
      v-for="(project, i) in response.projects"
      :key="`project_${i}`"
      :project="project"
    />
  </div>
</template>
