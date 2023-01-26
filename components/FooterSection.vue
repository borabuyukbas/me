<script setup lang="ts">
const link_groups = [
    [
        { name: "Home", link: "/" },
        { name: "Instagram", link: "https://instagram.com/borabbs" },
    ],
    [
        { name: "GitHub", link: "https://github.com/borabuyukbas" },
        { name: "GitLab", link: "https://gitlab.com/borabuyukbas" },
    ],
    [
        { name: "LinkedIn", link: "https://www.linkedin.com/in/borabuyukbas" },
    ]
]    
</script>

<template>
  <hr>
  <div class="card">
    <div class="footer">
      <div
        v-for="(group, group_i) of link_groups"
        :key="'link_group_' + group_i"
        class="link-group"
      >
        <div
          v-for="(link, link_i) of group"
          :key="'link_group_' + group_i + '_link_' + link_i"
          class="link"
        >
          <a
            :href="link.link"
            target="_blank"
          >{{ link.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
hr {
    margin-bottom: 2rem;
    border-color: var(--app-active-color);
}

a {
    color: var(--app-inactive-font-color);

    &:hover {
        color: var(--app-font-color);
    }
}

.footer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
}

.link {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>