import { defineStore } from 'pinia'
import type { RemovableRef } from '@vueuse/core'
import { useSessionStorage } from '@vueuse/core'
import { computed } from 'vue'
import type { User } from '@/types/user.type'
import { RouteMap } from '@/router/routeMap'

class axiosInstance {
  public static get<T>(url: string) {
    console.log('[axiosInstance][get] url:', url)

    return Promise.resolve({
      data: {
        id: '1',
        name: 'John',
        email: 'jan.madeyski@gmail.com',
        verified: true,
        emailVerifiedAt: null,
      },
    } as {
      data: T
    })
  }

  public static post(url: string) {
    console.log('[axiosInstance][post] url:', url)

    return Promise.resolve(true)
  }
}

export const useAuthStore = defineStore(
  'authStore',
  () => {
    const user: RemovableRef<User | undefined> = useSessionStorage('auth:user', undefined)
    const isAuthenticated = computed<boolean>(() => !!user.value)

    const loadUserData = async () => {
      const { data } = await axiosInstance.get<User>('/api/user')
      user.value = data
    }

    const logout = () => axiosInstance.post(RouteMap.API.LOGOUT).finally(() => user.value = null)

    return {
      isAuthenticated,
      user,
      loadUserData,
      logout,
    }
  },
)
