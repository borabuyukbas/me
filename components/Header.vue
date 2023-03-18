<script setup lang="ts">
const { localeCodes, setLocale } = useI18n()

const currentTheme = computed(() => {
  return useColorMode().value;
})

function toggleDarkTheme() {
  useColorMode().preference = currentTheme.value === 'dark' ? 'light' : 'dark';
}

function flagName(country_code: string) {
  switch (country_code) {
    case "en":
      return "twemoji:flag-united-kingdom";
      break
    case "de":
      return "twemoji:flag-germany";
      break
    default:
    case "tr":
      return "twemoji:flag-turkey";
      break
  }
}

</script>

<template>
  <div class="mb-16">
    <nav class="flex items-center justify-between">
      <div class="flex items-center">
        <NuxtLink
          class="px-4 py-1"
          active-class=""
          href="/"
        >
          Home
        </NuxtLink>
      </div>
      <div class="flex items-center">
        <a
          v-for="locale in localeCodes"
          :key="'localeButton_' + locale"
          :class="{ 'bg-light-700 dark:bg-dark-500': $i18n.locale === locale }"
          class="flex items-center justify-center p-2 mr-2 cursor-pointer hover:bg-light-900 dark:hover:bg-dark-300 transition-colors rounded-2"
          href="/"
          @click.prevent="setLocale(locale)"
        >
          <div
            :class="flagName(locale)"
          />
        </a>
        <button
          class="flex justify-center items-center h-8 w-8 bg-light-700 hover:bg-light-900 dark:bg-dark-500 dark:hover:bg-dark-300 transition-colors cursor-pointer rounded-2"
          aria-label="Toggle Theme"
          @click="toggleDarkTheme"
        >
          <ColorScheme
            class="ion:load-c animate-spin"
            tag="div"
          >
            <div
              :class="currentTheme === 'dark' ? 'ion:moon-outline': 'ion:sunny-outline'"
            />
          </ColorScheme>
        </button>
      </div>
    </nav>
  </div>
</template>