<script setup lang="ts">
const { localeCodes, setLocale, t } = useI18n()

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

const navActive = useState("navActive", () => false)

useNuxtApp().$router.afterEach(() => {
  navActive.value = false;
})

</script>

<template>
  <div>
    <nav class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="block lg:hidden">
          <button
            class="mr-4 flex justify-center items-center h-8 w-8 hover:bg-light-900 dark:hover:bg-dark-300 transition-colors cursor-pointer rounded-2"
            :class="navActive ? 'bg-light-900 dark:bg-dark-300' : 'bg-light-700 dark:bg-dark-500'"
            @click="navActive = !navActive"
          >
            <div
              :class="!navActive ? 'ion:navicon' : 'ion:close'"
            />
          </button>
        </div>
        <div
          class="lg:block"
          :class="navActive ? 'block' : 'hidden'"
        >
          <NuxtLink
            class="pr-4 py-1 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors font-bold uppercase"
            active-class="text-neutral-700 dark:text-neutral-300"
            href="/"
          >
            {{ t("pages_home") }}
          </NuxtLink>
          <NuxtLink
            class="pr-4 py-1 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors font-bold uppercase"
            active-class="text-neutral-700 dark:text-neutral-300"
            href="/projects"
          >
            {{ t("pages_projects") }}
          </NuxtLink>
        </div>
      </div>
      <div
        class="lg:flex items-center"
        :class="!navActive ? 'flex' : 'hidden'"
      >
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
              :class="currentTheme === 'light' ? 'ion:moon-outline': 'ion:sunny-outline'"
            />
          </ColorScheme>
        </button>
      </div>
    </nav>
  </div>
</template>
