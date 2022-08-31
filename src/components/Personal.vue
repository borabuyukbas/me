<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/offline";

import Instagram from "@iconify/icons-ion/logo-instagram";
import Github from "@iconify/icons-ion/logo-github";
import Gitlab from "@iconify/icons-ion/logo-gitlab";
import Linkedin from "@iconify/icons-ion/logo-linkedin";
import Mail from "@iconify/icons-ion/mail";
</script>

<template>
    <div class="card">
        <div class="personal-left">
            <h1 class="title">Bora Büyükbaş</h1>
            <h2 class="subtitle">{{ $t("subtitle") }}</h2>
            <p class="about">Short about text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
                euismod leo.</p>
            <div class="socials">
                <Icon v-for="social in [Instagram, Github, Gitlab, Linkedin, Mail]" :icon="social" />
            </div>
        </div>
        <div class="personal-right">
            <div class="avatar"></div>
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
    margin-bottom: 1.5rem;
}

.about {
    margin-bottom: 0.75rem;
}

.socials {
    svg {
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
