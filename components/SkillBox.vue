<script setup lang="ts">
import { useI18n } from "vue-i18n";

export type Skill = {
    name: string,
    icon: string,
    alt?: string
}

const { te, t } = useI18n();

const props = defineProps<Skill>();
</script>

<template>
  <div
    class="flex justify-between items-center p-2 m-1 rounded-3 border-1 relative overflow-hidden border-neutral-500"
  >
    <div class="flex flex-row items-center">
      <div
        class="text-xl mr-2"
        :class="icon"
      />
      <span class="text-xs">
        {{ props.name }}
      </span>
    </div>
    <span
      v-if="props.alt"
      class="text-xs font-bold"
    >
      {{ (te(props.alt) ? t(props.alt) : props.alt) }}
    </span>
  </div>
</template>
