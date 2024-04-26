<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'
import 'vue-toastification/dist/index.css'

const config = useRuntimeConfig()

useHead({
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} | ${config.public.appName}` : config.public.appName,
})
</script>

<template>
  <NuxtPage />
</template>
