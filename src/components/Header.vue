<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue/dist/offline";

import Sunny from "@iconify/icons-ion/sunny-outline";
import Moon from "@iconify/icons-ion/moon-outline";

import TR from "@iconify/icons-twemoji/flag-turkey";
import EN from "@iconify/icons-twemoji/flag-united-kingdom";
import DE from "@iconify/icons-twemoji/flag-germany";

const isDarkThemeEnabled = ref(
  window.matchMedia("(prefers-color-scheme: dark)").matches
);
if (isDarkThemeEnabled.value)
  document.documentElement.setAttribute("theme", "dark");

function toggleDarkTheme() {
  document.documentElement.setAttribute(
    "theme",
    isDarkThemeEnabled.value ? "light" : "dark"
  );
  isDarkThemeEnabled.value = !isDarkThemeEnabled.value;
}
</script>

<template>
  <div class="header">
    <nav>
      <div class="nav-left">
        <!-- <a href="/">Home</a> -->
      </div>
      <div class="nav-right">
        <a
          class="active"
          href="#"
        >
          <Icon
            :icon="TR"
          />
        </a>
        <a href="#">
          <Icon
            :icon="EN"
          />
        </a>
        <a href="#">
          <Icon
            :icon="DE"
          />
        </a>
        <button
          class="theme-button"
          @click="toggleDarkTheme"
        >
          <Icon
            :icon="isDarkThemeEnabled ? Sunny : Moon"
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
