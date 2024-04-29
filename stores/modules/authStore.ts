import { defineStore } from 'pinia'
import { computed } from 'vue'
import type { RemovableRef } from '@vueuse/core'
import { useSessionStorage } from '@vueuse/core'
import axiosInstance from '@/helpers/axiosInstance'
import type { User } from '@/types/user.type'
import { RouteMap } from '@/router/routeMap'

export const useAuthStore = defineStore(
  'authStore',
  () => {
    const userId: RemovableRef<string | undefined> = useSessionStorage('auth:user:id', undefined)
    const user: RemovableRef<User | undefined> = useSessionStorage('auth:user', undefined)
    const isAuthenticated = computed<boolean>(() => !!user.value)

    const loadUserData = async () => {
      const { data } = await axiosInstance.get<User>(`/api/auth/user?id=${userId.value ?? ''}`)
      user.value = data
    }

    const logout = () => axiosInstance.post(RouteMap.API.LOGOUT).finally(() => {
      userId.value = null
      user.value = null
    })

    return {
      isAuthenticated,
      user,
      userId,
      loadUserData,
      logout,
    }
  },
)
