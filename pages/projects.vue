<script setup lang="ts">
export type Platforms = "GitHub" | "GitLab" | "Hugging Face"

export interface Project {
  name: string,
  description: string,
  url: string,
  platform: Platforms,

  date: number,

  language?: string,
}

const [{ data: githubResponse }, { data: gitlabResponse }, { data: huggingfaceResponse }] = await Promise.all([
  useFetch<Record<string, string>[]>("https://api.github.com/users/borabuyukbas/repos"),
  useFetch<Record<string, string>[]>("https://gitlab.com/api/v4/users/3331811/projects"),
  useFetch<Record<string, string>[]>("https://huggingface.co/api/models?author=borabuyukbas"),
]);


const allProjects = computed<Project[]>(() => {
  return [
    ...(githubResponse.value ? githubResponse.value.map(e => ({
      name: e.name,
      description: e.description,
      url: e.html_url,
      platform: "GitHub",

      date: Date.parse(e.pushed_at),

      language: e.language,
    } as Project)) : []),
    ...(gitlabResponse.value ? gitlabResponse.value.map(e => ({
      name: e.name,
      description: e.description,
      url: e.web_url,
      platform: "GitLab",

      date: Date.parse(e.last_activity_at),
    } as Project)) : []),
    ...(huggingfaceResponse.value ? huggingfaceResponse.value.map(e => ({
      name: e.id.split("/").at(-1),
      description: `A(n) ${e.pipeline_tag} model built with ${e.library_name} technology available on the Hugging Face.`,
      url: `https://huggingface.co/${e.id}`,
      platform: "Hugging Face",

      date: Date.parse(e.createdAt),

      language: "Jupyter Notebook",
    } as Project)) : []),
  ].sort((a, b) => b.date - a.date);
});
</script>

<template>
  <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
    <ProjectCard
      v-for="(project, i) in allProjects"
      :key="`project_${i}`"
      :project="project"
    />
  </div>
</template>
