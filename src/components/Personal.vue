<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/offline";
import Instagram from "@iconify/icons-ion/logo-instagram";
</script>

<template>
    <div class="card">
        <div class="personal-left">
            <h1 class="title">Bora Büyükbaş</h1>
            <h2 class="subtitle">Developer</h2>
            <p class="about">Short about text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
                euismod leo.</p>
            <div class="socials">
                <Icon :icon="Instagram" />
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
    margin-bottom: 0.5rem;
}

.socials {
    svg {
        font-size: 1.5rem;
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
