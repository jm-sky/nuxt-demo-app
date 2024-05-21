import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/i18n',
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
})