<script setup lang="ts">
const socials = [
  { icon: "ion:logo-github", title: "GitHub", link: "https://github.com/borabuyukbas" },
  { icon: "ion:logo-gitlab", title: "GitLab", link: "https://gitlab.com/borabuyukbas" },
  { icon: "ion:logo-instagram", title: "Instagram", link: "https://instagram.com/borabbs" },
  { icon: "ion:logo-linkedin", title: "LinkedIn", link: "https://www.linkedin.com/in/borabuyukbas" },
  { icon: "ion:mail", title: "Mail", link: "mailto:me@bora.bbs.tr" },
]
</script>

<template>
  <div class="flex-grow flex flex-col-reverse lg:flex-row items-center justify-center">
    <div class="flex lg:flex-grow flex-col justify-center items-center lg:items-start">
      <h1 class="mb-2 font-700 text-8 lg:text-16">
        Bora Büyükbaş
      </h1>
      <h2 class="mb-4">
        {{ $t("subtitle") }}
      </h2>
      <div class="flex">
        <a
          v-for="(social, i) of socials"
          :key="'Psocial_' + i"
          :href="social.link"
          :title="social.title"
          class="text-5 mr-2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          target="_blank"
        >
          <div
            :class="social.icon"
          />
        </a>
      </div>
    </div>
    <div class="mb-8 lg:mb-0 flex flex-col justify-center">
      <div
        class="w-80 h-80 rounded-[9999px] bg-cover"
        style="background-image: url('https://avatars.githubusercontent.com/u/45436094?v=4');"
      />
    </div>
  </div>
</template>
