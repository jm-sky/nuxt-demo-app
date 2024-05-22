import { defineNuxtPlugin } from 'nuxt/app'
import Toast from 'vue-toastification'

export default defineNuxtPlugin({
  name: 'toastification',
  enforce: 'post',
  setup: (nuxtApp) => {
    nuxtApp.vueApp.use(Toast)
  },
})
