import { defineConfig, presetUno, presetWebFonts, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      cdn: 'https://esm.sh/',
      prefix: ''
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: {
          name: 'Rubik',
          weights: [300, 500, 700]
        }
      }
    }),
  ],
})