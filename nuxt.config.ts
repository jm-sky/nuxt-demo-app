import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    // '@sidebase/nuxt-auth',
    // '@/plugins/toastification',
  ],
  // auth: {
  //   globalAppMiddleware: false,
  // },
  tailwindcss: {
    configPath: 'tailwind.config',
    viewer: false,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  runtimeConfig: {
    public: {
      appName: 'My App', // NUXT_APP_NAME
    },
  },
  // colorMode: {
  //   preference: 'system', // default value of $colorMode.preference
  //   fallback: 'light', // fallback value if not system preference found
  //   hid: 'nuxt-color-mode-script',
  //   globalName: '__NUXT_COLOR_MODE__',
  //   componentName: 'ColorScheme',
  //   classPrefix: '',
  //   classSuffix: '-mode',
  //   storageKey: 'nuxt-color-mode'
  // }
})
