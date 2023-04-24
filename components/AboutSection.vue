<script setup lang="ts">
import SkillBox, { Skill } from "./SkillBox.vue";

const programming_skills: Skill[] = [
  { name: "Typescript", icon: "mdi:language-typescript" },
  { name: "Javascript", icon: "mdi:language-javascript" },
  { name: "Java", icon: "mdi:language-java" },
  { name: "C#", icon: "mdi:language-csharp" },
  { name: "PHP", icon: "mdi:language-php" },
  { name: "Python", icon: "mdi:language-python", },
];

const language_skills: Skill[] = [
  { name: "Türkçe", icon: "twemoji:flag-turkey", alt: "native" },
  { name: "English", icon: "twemoji:flag-united-kingdom", alt: "C1" },
  { name: "Deutsch", icon: "twemoji:flag-germany", alt: "C1" },
]
</script>

<template>
  <div class="flex lg:flex-row flex-col mb-12">
    <div class="flex-shrink-0 flex-basis-75% mb-2 lg:mb-0 mr-0 lg:mr-8 mb-8">
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
      <div class="flex flex-col">
        <div class="flex flex-col flex-grow-1 flex-basis-50% mb-2">
          <div class="flex justify-start items-center lh-normal text-neutral-500 mb-1">
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
            :alt="skill.alt"
          />
        </div>
        <div class="flex flex-col flex-grow-1 flex-basis-50%">
          <div class="flex justify-start items-center lh-normal text-neutral-500 mb-1">
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
