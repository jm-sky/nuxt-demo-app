<script setup lang="ts">

</script>

<template>
  <div class="w-screen h-screen bg-primary-900 bg-gradient-to-t from-primary-600 to-primary-950">
    <div class="flex flex-row justify-center gap-4 mb-4 bg-black text-sm p-1.5 shadow-lg">
      <RouterLink to="/" class="rounded px-3 py-0.5 border text-primary-400 border-primary-500 hover:bg-primary-500/25">Home</RouterLink>
      <RouterLink to="/contact" class="rounded px-3 py-0.5 border text-primary-400 border-primary-500 hover:bg-primary-500/25">Contact</RouterLink>
    </div>

    <div class="w-full max-w-xl mx-auto">
      <div class="flex items-center justify-center rounded-lg p-6 font-bold text-4xl text-white bg-primary-700 bg-gradient-to-t from-primary-700 to-primary-600 shadow-lg">
        DEV Made IT
      </div>
      <div class="-mt-4 mx-4 bg-white rounded-lg p-4 shadow-lg">
  
        <div class="p-4">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
