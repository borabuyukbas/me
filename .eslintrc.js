module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
    ],
    parserOptions: {
      parser: "@typescript-eslint/parser",
      sourceType: "module"
    },
    plugins: [
      "vue",
      "@typescript-eslint"
    ],
    rules: {
      "vue/multi-word-component-names": "off"
    }
  }
  