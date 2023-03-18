<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { te, t } = useI18n();

const props = defineProps<{
    name: string,
    icon: string,
    alt?: string
}>();
</script>

<template>
  <div
    class="flex justify-between items-center p-2 m-1 rounded-3 border-1 relative overflow-hidden border-neutral-500"
  >
    <div
      class="text-xl mr-1"
      :class="icon"
    />
    <span class="text-xs">
      {{ props.name }}
      {{ props.alt ?
        "(" + (te(props.alt) ? t(props.alt) : props.alt) + ")"
        : ""
      }}
    </span>
  </div>
</template>
