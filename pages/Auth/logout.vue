<script setup lang="ts">
import { onMounted } from 'vue'
import FaIcon from '@/components/FaIcon.vue'
import { RouteMap } from '@/router/routeMap'
import { useAuthStore } from '@/stores'

definePageMeta({
  layout: 'guest',
})

const authStore = useAuthStore()
const router = useRouter()

onMounted(() => authStore.logout().finally(() => router.push(RouteMap.LOGIN)))
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center text-xl p-4">
      <div>Logging out...</div>
      <div class="mt-5">
        <FaIcon
          icon="refresh"
          loading
        />
      </div>
    </div>
  </NuxtLayout>
</template>
