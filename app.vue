<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'
import '@/assets/css/index.scss'

const config = useRuntimeConfig()

useHead({
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} | ${config.public.appName}` : config.public.appName as string ?? 'App',
})
</script>

<template>
  <NuxtPage />
</template>
