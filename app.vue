<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} | ${config.public.appName}` : config.public.appName,
})
</script>

<template>
  <NuxtPage />
</template>
