<script setup lang="ts">
import { IconifyIcon } from "@iconify/types";
import { Icon } from "@iconify/vue/dist/offline";

import { useI18n } from "vue-i18n";

const { te, t } = useI18n();

const props = defineProps<{
    name: string,
    percentage: number,
    icon: IconifyIcon,
    alt?: string
}>();

const styleObject = { "--percent": `${props.percentage * 100}%` };
</script>

<template>
  <div
    class="skill"
    :style="styleObject"
  >
    <Icon
      class="icon"
      :icon="icon"
    />
    <span class="skill-name">
      {{ props.name }}
      {{ props.alt ?
        "(" + (te(props.alt) ? t(props.alt) : props.alt) + ")"
        : ""
      }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.skill {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin: 0.25rem;
    border-radius: 0.75rem;
    border: 0.1rem var(--app-border-color) solid;

    position: relative;
    overflow: hidden;

    &:after {
        @include transition;
        content: '\A';
        position: absolute;
        background: var(--app-active-color);
        top: 0;
        bottom: 0;
        left: 0;
        width: var(--percent);
        z-index: -1;
    }
}

.icon {
    font-size: 1.25rem;
}
</style>