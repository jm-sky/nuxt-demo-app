<script setup lang="ts">
const colorMode = useColorMode()

const icon = computed(() => {
  if (colorMode.preference === 'light') return 'sun'
  if (colorMode.preference === 'dark') return 'moon'

  return 'computer'
})

const next = computed(() => {
  if (colorMode.preference === 'light') return 'dark'
  if (colorMode.preference === 'dark') return 'system'

  return 'light'
})
</script>

<template>
  <ColorScheme tag="span">
    <UButton
      variant="ghost"
      color="slate"
      @click="$colorMode.preference = next"
    >
      <FaIcon
        :icon
        fw
      />
    </UButton>
  </ColorScheme>
</template>
