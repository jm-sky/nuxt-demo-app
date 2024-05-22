import { useAuthStore } from '~/stores'

export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return

  const authStore = useAuthStore()

  if (!authStore.isAuthenticated && to.path !== '/auth/login') {
    return navigateTo('/auth/login')
  }
})
