// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/index.scss" as *;'
        }
      }
    }
  },
  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'tr', iso: 'tr', file: 'tr.json' },
      { code: 'en', iso: 'en', file: 'en.json' },
      { code: 'de', iso: 'de', file: 'de.json' }
    ],
    lazy: true,
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
      legacy: false,
      locale: 'tr',
      fallbackLocale: 'en',
    }
  }
})
