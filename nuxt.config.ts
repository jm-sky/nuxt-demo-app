// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/i18n"],
  tailwindcss: {
    configPath: 'tailwind.config',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
