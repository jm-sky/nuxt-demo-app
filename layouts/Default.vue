<script setup lang="ts">

</script>

<template>
  <div class="w-screen h-screen bg-primary-950 bg-gradient-to-t from-primary-900 to-black">
    <div class="flex flex-row justify-center gap-4 mb-4 bg-black text-sm p-1.5 shadow-lg">
      <RouterLink to="/" class="rounded px-3 py-0.5 border text-primary-400 border-primary-500 hover:bg-primary-500/25">Home</RouterLink>
      <RouterLink to="/contact" class="rounded px-3 py-0.5 border text-primary-400 border-primary-500 hover:bg-primary-500/25">Contact</RouterLink>
    </div>

    <div class="w-full max-w-2xl mx-auto">
      <div class="flex items-center justify-center rounded-lg p-6 font-bold text-4xl text-white bg-primary-700 bg-gradient-to-t from-primary-900 to-primary-700 shadow-lg">
        DEV Made IT
      </div>
      <div class="-mt-4 mx-6 bg-white rounded-lg p-6 shadow-lg text-black">
        <slot />
      </div>
    </div>
  </div>
</template>
