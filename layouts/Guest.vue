<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ApplicationLogo from '@/components/ApplicationLogo.vue'
import { RouteMap } from '@/router/routeMap'
</script>

<template>
  <div class="isolate min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
    <div class="mb-2">
      <img
        src="~/assets/images/guest-bg.jpg"
        alt="background"
        class="absolute inset-0 max-w-full object-cover -z-10"
      >

      <RouterLink :to="RouteMap.HOME">
        <ApplicationLogo class="w-32 h-20 text-lg fill-gray-500/75 dark:text-gray-600/75 hover:fill-primary/75 dark:hover:fill-primary-700/75 scale-125 hover:scale-150 transition" />
      </RouterLink>
    </div>

    <div class="absolute top-2 right-2 flex flex-row gap-2 items-center p-1 bg-white/50 rounded-lg backdrop-blur-md">
      <ColorModeButton />
    </div>

    <div
      class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-md overflow-hidden sm:rounded-lg hover:scale-105 transition"
    >
      <slot />
    </div>
  </div>
</template>
