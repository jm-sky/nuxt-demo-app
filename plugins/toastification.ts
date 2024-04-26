import { defineNuxtPlugin } from 'nuxt/app'
import Toast from 'vue-toastification'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast)
})
