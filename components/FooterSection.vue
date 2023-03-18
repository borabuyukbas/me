<script setup lang="ts">
const link_groups = [
    [
        { name: "Home", link: "/" },
        { name: "Instagram", link: "https://instagram.com/borabbs" },
    ],
    [
        { name: "GitHub", link: "https://github.com/borabuyukbas" },
        { name: "GitLab", link: "https://gitlab.com/borabuyukbas" },
    ],
    [
        { name: "LinkedIn", link: "https://www.linkedin.com/in/borabuyukbas" },
    ]
]    
</script>

<template>
  <hr class="border-neutral-300 dark:border-neutral-800">
  <div class="flex flex-col-reverse lg:flex-row mb-16">
    <div class="w-full grid grid-cols-3">
      <div
        v-for="(group, group_i) of link_groups"
        :key="'link_group_' + group_i"
      >
        <div
          v-for="(link, link_i) of group"
          :key="'link_group_' + group_i + '_link_' + link_i"
          class="my-4"
        >
          <a
            :href="link.link"
            target="_blank"
            class="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
          >{{ link.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
