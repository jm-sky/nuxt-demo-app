<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  to: string
  active?: boolean
}>()

const classes = computed(() =>
  props.active
    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-primary text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-primary-700 transition duration-150 ease-in-out'
    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-300 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out',
)
</script>

<template>
  <NuxtLink
    :to="to"
    :class="classes"
    class="nav-link"
  >
    <slot />
  </NuxtLink>
</template>

<style>
.nav-link.router-link-active {
  @apply text-primary relative  border-b-2 border-primary;
}
</style>
