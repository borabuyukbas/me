<script setup lang="ts">
const { localeCodes, setLocale } = useI18n()
const colorMode = useColorMode()

const currentTheme = computed(() => {
  return colorMode.value;
})

function toggleDarkTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
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
  <div class="header">
    <nav>
      <div class="nav-left">
        <!-- <a href="/">Home</a> -->
      </div>
      <div class="nav-right">
        <nuxt-link
          v-for="locale in localeCodes"
          :key="'localeButton_' + locale"
          :class="{ active: $i18n.locale === locale }"
          href="/"
          @click.prevent="setLocale(locale)"
        >
          <Icon
            :name="flagName(locale)"
          />
        </nuxt-link>
        <button
          class="theme-button"
          aria-label="Toggle Theme"
          @click="toggleDarkTheme"
        >
          <Icon
            :name="colorMode.unknown ? 'ion:load-c' : (currentTheme === 'dark' ? 'ion:sunny-outline' : 'ion:moon-outline')"
            class="spin"
          />
        </button>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header {
  margin-bottom: 4rem;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-left a {
  margin-right: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.nav-right {
  display: flex;
  align-items: center;

  a {
    @include activateable;
    @include hoverable;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
  }
}

.theme-button {
  cursor: pointer;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
}

svg {
  font-size: 1rem;
}
</style>
