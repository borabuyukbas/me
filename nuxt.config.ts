import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode'
  ],
  unocss: {
    uno: true,
    preflight: true,
    icons: {
      cdn: 'https://esm.sh/',
      prefix: ''
    },
    webFonts: {
      provider: 'google',
      fonts: {
        sans: {
          name: 'Rubik',
          weights: [300, 500, 700]
        }
      }
    }
  },
  colorMode: {
    classSuffix: '',
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
