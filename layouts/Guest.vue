<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ApplicationLogo from '@/components/ApplicationLogo.vue'
import { RouteMap } from '@/router/routeMap'
</script>

<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
    <div>
      <RouterLink :to="RouteMap.HOME">
        <ApplicationLogo class="w-32 h-20 text-lg fill-current text-gray-500 dark:text-gray-600" />
      </RouterLink>
    </div>

    <div
      class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg"
    >
      <slot />
    </div>
  </div>
</template>
