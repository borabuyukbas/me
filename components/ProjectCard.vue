<script setup lang="ts">
import type { Platforms, Project } from '~/pages/projects.vue';

defineProps<{
  project: Project,
}>()

const platformIcons: Record<Platforms, string> = {
  "GitHub": "ion:logo-github",
  "GitLab": "ion:logo-gitlab",
  "Hugging Face": "logos:hugging-face-icon"
}

const languageColors: Record<string, string> = {
  "ASP.NET": "#9400ff",
  "C": "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  "CSS": "#563d7c",
  "Dart": "#00B4AB",
  "Go": "#00ADD8",
  "HTML": "#e34c26",
  "Java": "#b07219",
  "JavaScript": "#f1e05a",
  "JSON": "#292929",
  "Jupyter Notebook": "#da5b0b",
  "Kotlin": "#a97bff",
  "Nix": "#7e7eff",
  "PHP": "#4F5D95",
  "Python": "#3572A5",
  "Rust": "#dea584",
  "Scala": "#c22d40",
  "Shell": "#89e051",
  "Svelte": "#ff3e00",
  "TypeScript": "#3178c6",
  "Vue": "#41b883",
}

</script>

<template>
  <a
    :href="project.url"
    target="_blank"
    class="flex flex-col justify-between p-6 bg-light-700 hover:bg-light-900 dark:bg-dark-500 dark:hover:bg-dark-300 transition-colors cursor-pointer rounded-2"
  >
    <div>
      <h6 class="font-700 text-5 mb-2 truncate">{{ project.name }}</h6>
      <p class="line-height-normal">{{ project.description }}</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <div class="flex items-center">
        <div
          class="h-4 w-4 rounded-full mr-1"
          :style="{ backgroundColor: project.language ? languageColors[project.language] : '' }"
        />
        <span class="text-[0.8rem]">
          {{ project.language }}
        </span>
      </div>
      <div class="flex items-center">
        <div
          class="mr-1"
          :class="platformIcons[project.platform]"
        />
        <span class="text-[0.8rem]">{{ project.platform }}</span>
      </div>
    </div>
  </a>
</template>
