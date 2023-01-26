<script setup lang="ts">
const socials = [
  { icon: "ion:logo-github", title: "GitHub", link: "https://github.com/borabuyukbas" },
  { icon: "ion:logo-gitlab", title: "GitLab", link: "https://gitlab.com/borabuyukbas" },
  { icon: "ion:logo-instagram", title: "Instagram", link: "https://instagram.com/borabbs" },
  { icon: "ion:logo-linkedin", title: "LinkedIn", link: "https://www.linkedin.com/in/borabuyukbas" },
  { icon: "ion:mail", title: "Mail", link: "mailto:me@bora.bbs.tr" },
]
</script>

<template>
  <div class="card">
    <div class="personal-left">
      <h1 class="title">
        Bora Büyükbaş
      </h1>
      <h2 class="subtitle">
        {{ $t("subtitle") }}
      </h2>
      <p class="about">
        {{
          $t("short_about_text", { 
            year: Math.floor((new Date().valueOf() - 1062622800000) / 31557600000) // divided by 1000*60*60*24*365.25
          })
        }}
      </p>
      <div class="socials">
        <a
          v-for="(social, i) of socials"
          :key="'Psocial_' + i"
          :href="social.link"
          :title="social.title"
          target="_blank"
        >
          <Icon
            :name="social.icon"
          />
        </a>
      </div>
    </div>
    <div class="personal-right">
      <div class="avatar" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
    @media screen and (max-width: 1024px) {
        flex-direction: column-reverse;
    }
}

.personal-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.title {
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 0.25rem;

    @media screen and (max-width: 1024px) {
        font-size: 2rem;
    }
}

.subtitle {
    margin-bottom: 0.75rem;
}

.about {
    margin-bottom: 0.75rem;
}

.socials {
    svg {
        @include transition;

        font-size: 1.25rem;
        margin-right: 0.5rem;
        color: var(--app-inactive-font-color);

        &:hover {
            color: var(--app-font-color);
        }
    }
}

.personal-right {
    @media screen and (max-width: 1024px) {
        margin-bottom: 1rem;
    }
}

.avatar {
    width: 12rem;
    height: 12rem;
    border-radius: 9999px;
    background-image: url("https://avatars.githubusercontent.com/u/45436094?v=4");
    background-size: cover;

    @media screen and (max-width: 1024px) {
        width: 8rem;
        height: 8rem;
    }
}
</style>
