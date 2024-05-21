<script setup lang="ts">
useHead({
  title: 'Contact',
})
</script>

<template>
  <NuxtLayout>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="p-6 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
          <div class="font-bold text-lg mb-4">
            Contact
          </div>
          <form class="flex flex-col gap-4">
            <UInput placeholder="Title" />
            <UInput placeholder="E-mail" />
            <UTextarea />
            <UButton class="font-semibold">
              Send
            </UButton>
          </form>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
