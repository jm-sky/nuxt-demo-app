<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <UDropdown
    v-model:open="open"
  >
    <div class="flex flex-row items-center">
      <slot />
      <FaIcon
        icon="angle-down"
        class="transition-transform"
        :class="{ 'rotate-180': open }"
      />
    </div>
  </UDropdown>
</template>
