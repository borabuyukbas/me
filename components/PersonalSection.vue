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
  <div class="flex flex-col-reverse lg:flex-row mb-16">
    <div class="flex flex-1 flex-col justify-center">
      <h1 class="mb-2 font-700 text-8 lg:text-12">
        Bora Büyükbaş
      </h1>
      <h2 class="mb-4">
        {{ $t("subtitle") }}
      </h2>
      <p class="mb-4 text-neutral-500">
        {{
          $t("short_about_text", { 
            year: Math.floor((new Date().valueOf() - 1062622800000) / 31557600000) // divided by 1000*60*60*24*365.25
          })
        }}
      </p>
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
    <div class="mb-1 lg:mb-0">
      <div
        class="w-32 h-32 lg:w-48 lg:h-48 rounded-[9999px] bg-cover"
        style="background-image: url('https://avatars.githubusercontent.com/u/45436094?v=4');"
      />
    </div>
  </div>
</template>
