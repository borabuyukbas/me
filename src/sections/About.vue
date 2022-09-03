<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/offline";

import Language from "@iconify/icons-ion/language";
import Programming from "@iconify/icons-ion/code";

import Typescript from "@iconify/icons-vscode-icons/file-type-typescript-official";
import Javascript from "@iconify/icons-vscode-icons/file-type-js-official";
import CSharp from "@iconify/icons-vscode-icons/file-type-csharp2";
import Java from "@iconify/icons-vscode-icons/file-type-java";
import PHP from "@iconify/icons-vscode-icons/file-type-php";
import Python from "@iconify/icons-vscode-icons/file-type-python";

import TR from "@iconify/icons-twemoji/flag-turkey";
import EN from "@iconify/icons-twemoji/flag-united-kingdom";
import DE from "@iconify/icons-twemoji/flag-germany";

import SkillBox from "../components/SkillBox.vue";

const programming_skills = [
  { name: "Typescript", percentage: 0.95, icon: Typescript },
  { name: "Javascript", percentage: 0.95, icon: Javascript },
  { name: "C#", percentage: 0.9, icon: CSharp },
  { name: "Java", percentage: 0.8, icon: Java },
  { name: "PHP", percentage: 0.75, icon: PHP },
  { name: "Python", percentage: 0.7, icon: Python },
];

const language_skills = [
  { name: "Türkçe", percentage: 1.0, icon: TR, alt: "native" },
  { name: "English", percentage: 0.9, icon: EN, alt: "B2-C1" },
  { name: "Deutsch", percentage: 0.7, icon: DE, alt: "B2" },
]
</script>

<template>
  <div class="card">
    <div class="left-section">
      <h3 class="section-header">
        {{ $t("about_title") }}
      </h3>
      <div class="section-content">
        <pre class="about-text">{{ $t("about_text") }}</pre>
      </div>
    </div>
    <div class="right-section">
      <h3 class="section-header">
        {{ $t("skills_title") }}
      </h3>
      <div class="section-content">
        <div class="skill-group">
          <div class="skill-group-title">
            <Icon
              class="icon"
              :icon="Programming"
            />
            <h4>{{ $t("programming_title") }}</h4>
          </div>
          <SkillBox 
            v-for="skill of programming_skills"
            :key="'programming_skill_'+skill.name"
            :name="skill.name"
            :icon="skill.icon"
            :percentage="skill.percentage"
          />
        </div>
        <div class="skill-group">
          <div class="skill-group-title">
            <Icon
              class="icon"
              :icon="Language"
            />
            <h4>{{ $t("language_title") }}</h4>
          </div>
          <SkillBox 
            v-for="skill of language_skills"
            :key="'language_skill_'+skill.name"
            :name="skill.name"
            :icon="skill.icon"
            :percentage="skill.percentage"
            :alt="skill.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
}

.about-text {
  color: var(--app-inactive-font-color);
  text-align: justify;
}

.left-section {
  flex-basis: 60%;
  flex-shrink: 0;
  margin: 0 2rem 0 0;

  @media screen and (max-width: 1024px) {
    margin: 0 0 2rem 0;
  }
}

.right-section {
  flex-basis: 40%;
  flex-shrink: 0;

  .section-content {
    display: flex;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }

  .skill-group {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 50%;

    @media screen and (max-width: 1024px) {
      margin-bottom: 1rem;
    }

    h4 {
      font-size: 1rem;
      font-weight: 500;
      text-transform: uppercase;
    }
  }
}

.skill-group-title {
  display: flex;
  justify-content: left;
  padding-left: 0.5rem;
  align-items: center;
  line-height: 1.5rem;
  color: var(--app-inactive-font-color);

  .icon {
    font-size: 1.25rem;
    margin-right: 0.25rem;
  }
}

.section-header {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>