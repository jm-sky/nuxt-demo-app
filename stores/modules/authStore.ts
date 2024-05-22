import { defineStore } from 'pinia'
import { watch, computed } from 'vue'
import { useSessionStorage } from '@vueuse/core'
import axiosInstance from '@/helpers/axiosInstance'
import { RouteMap } from '@/router/routeMap'
import type { TSessionData } from '~/server/sessionStore'
import { UserView } from '~/models/userView.model'

export const useAuthStore = defineStore(
  'authStore',
  () => {
    const session = useSessionStorage<TSessionData | undefined>('auth:session', undefined, {
      serializer: {
        read: (value: any) => value ? JSON.parse(value) : null,
        write: (value: any) => JSON.stringify(value),
      },
    })

    const isAuthenticated = computed<boolean>(() => !!session.value?.id)
    const sessionId = computed<string | undefined>(() => session.value?.id)
    const user = computed<UserView | undefined>(() => session.value?.user ? UserView.init(session.value.user) : undefined)
    const userId = computed<string | number | undefined>(() => user.value?.id)

    const loadUserData = async () => {
      const { data } = await axiosInstance.get<TSessionData>('/api/auth/user')

      if (data?.id && data?.user) {
        session.value = data
      }
    }

    const logout = () => axiosInstance.post(RouteMap.API.LOGOUT).finally(() => {
      session.value = null
    })

    watch(sessionId, () => {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${sessionId.value}`
    }, {
      immediate: true,
    })

    return {
      isAuthenticated,
      user,
      userId,
      session,
      sessionId,
      loadUserData,
      logout,
    }
  },
)
