<script setup lang="ts">
definePageMeta({
  middleware: ['is-logged'],
})

useHead({
  title: 'Admin',
})
</script>

<template>
  <NuxtLayout>
    <div>Admin</div>
    <div class="mt font-bold">
      Users
    </div>
    <div class="border p-2 rounded">
      <div>
        Janek
      </div>
    </div>
  </NuxtLayout>
</template>
