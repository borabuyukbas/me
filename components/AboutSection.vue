<script setup lang="ts">
import SkillBox from "./SkillBox.vue";

const programming_skills = [
  { name: "Typescript", icon: "vscode-icons:file-type-typescript-official" },
  { name: "Javascript", icon: "vscode-icons:file-type-js-official" },
  { name: "C#", icon: "vscode-icons:file-type-csharp2" },
  { name: "Java", icon: "vscode-icons:file-type-java" },
  { name: "PHP", icon: "vscode-icons:file-type-php" },
  { name: "Python", icon: "vscode-icons:file-type-python" },
];

const language_skills = [
  { name: "Türkçe", icon: "twemoji:flag-turkey", alt: "native" },
  { name: "English", icon: "twemoji:flag-united-kingdom", alt: "B2-C1" },
  { name: "Deutsch", icon: "twemoji:flag-germany", alt: "B2" },
]
</script>

<template>
  <div class="flex lg:flex-row flex-col mb-4">
    <div class="flex-shrink-0 flex-basis-60% mb-2 lg:mb-0 mr-0 lg:mr-2 lg:mb-2">
      <h3 class="text-2xl font-bold mb-2">
        {{ $t("about_title") }}
      </h3>
      <div class="text-justify whitespace-pre-line text-neutral-500 lh-snug">
        {{ $t("about_text") }}
      </div>
    </div>
    <div class="flex-shrink-0 flex-grow-1">
      <h3 class="text-2xl font-bold mb-2">
        {{ $t("skills_title") }}
      </h3>
      <div class="flex flex-col lg:flex-row">
        <div class="flex flex-col flex-grow-1 flex-basis-50% mb-1 lg:mb-0">
          <div class="flex justify-start pl-2 items-center lh-normal text-neutral-500">
            <div
              class="text-xl mr-1 ion:code"
            />
            <h4 class="uppercase font-500">
              {{ $t("programming_title") }}
            </h4>
          </div>
          <SkillBox 
            v-for="skill of programming_skills"
            :key="'programming_skill_'+skill.name"
            :name="skill.name"
            :icon="skill.icon"
          />
        </div>
        <div class="flex flex-col flex-grow-1 flex-basis-50% mb-1 lg:mb-0">
          <div class="flex justify-start pl-2 items-center lh-normal text-neutral-500">
            <div
              class="text-xl mr-1 ion:language"
            />
            <h4 class="uppercase font-500">
              {{ $t("language_title") }}
            </h4>
          </div>
          <SkillBox 
            v-for="skill of language_skills"
            :key="'language_skill_'+skill.name"
            :name="skill.name"
            :icon="skill.icon"
            :alt="skill.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>
