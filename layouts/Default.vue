<script setup lang="ts">

</script>

<template>
  <div class="w-screen h-screen bg-gradient-radial from-primary-950 to-black">
    <div class="flex flex-row justify-center gap-4 mb-4 bg-black text-sm p-2 shadow-lg shadow-primary-900">
      <UButton to="/" variant="outline">Home</UButton>
      <UButton to="/contact" variant="outline">Contact</UButton>
      <div class="absolute right-0">
        <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
      </div>
    </div>

    <UContainer class="mt-8">
      <div class="w-full max-w-2xl mx-auto">
        <div class="flex items-center justify-center rounded-lg p-8 font-bold text-4xl text-white bg-gradient-radial from-primary-700 to-primary-900 shadow-lg">
          DEV Made IT
        </div>
        <div class="-mt-5 mx-6 bg-white rounded-lg p-6 shadow-lg text-black">
          <slot />
        </div>
      </div>
    </UContainer>
  </div>
</template>

