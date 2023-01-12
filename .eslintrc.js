module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config',
    'prettier',
  ],
  plugins: [],
  rules: {
    'no-irregular-whitespace': 0,
    'vue/attribute-hyphenation': 0,
    'vue/require-explicit-emits': 0,
    'vue/no-v-html': 0,
  },
  globals: {
    useHead: 'readonly',
    useFetch: 'readonly',
    getQuery: 'readonly',
    defineEventHandler: 'readonly',
  },
}
