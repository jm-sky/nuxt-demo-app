import { useAuthStore } from '~/stores'

export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return

  const authStore = useAuthStore()

  console.log('[is-logged] isAuthenticated:', authStore.isAuthenticated, authStore.session)

  if (!authStore.isAuthenticated && to.path !== '/auth/login') {
    return navigateTo('/auth/login')
  }
})
