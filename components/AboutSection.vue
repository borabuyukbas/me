<script setup lang="ts">
import SkillBox from "./SkillBox.vue";

const programming_skills = [
  { name: "Typescript", percentage: 0.95, icon: "vscode-icons:file-type-typescript-official" },
  { name: "Javascript", percentage: 0.95, icon: "vscode-icons:file-type-js-official" },
  { name: "C#", percentage: 0.9, icon: "vscode-icons:file-type-csharp2" },
  { name: "Java", percentage: 0.8, icon: "vscode-icons:file-type-java" },
  { name: "PHP", percentage: 0.75, icon: "vscode-icons:file-type-php" },
  { name: "Python", percentage: 0.7, icon: "vscode-icons:file-type-python" },
];

const language_skills = [
  { name: "Türkçe", percentage: 1.0, icon: "twemoji:flag-turkey", alt: "native" },
  { name: "English", percentage: 0.9, icon: "twemoji:flag-united-kingdom", alt: "B2-C1" },
  { name: "Deutsch", percentage: 0.7, icon: "twemoji:flag-germany", alt: "B2" },
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
              name="ion:code"
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
              name="ion:language"
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
  flex-shrink: 0;
  flex-grow: 1;

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