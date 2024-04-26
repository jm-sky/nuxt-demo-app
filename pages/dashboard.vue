<script setup lang="ts">
useHead({
  title: 'Dashboard',
})

const { data } = await useFetch('/api/users')
</script>

<template>
  <NuxtLayout>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="p-6 bg-white dark:bg-gray-900 overflow-hidden shadow-sm sm:rounded-lg">
          <div class="font-bold text-lg mb-4">
            Dashboard
          </div>
          <div class="border rounded flex flex-col">
            <div class="grid grid-cols-4 gap-2 font-bold border-b">
              <div class="p-2">
                First name
              </div>
              <div class="p-2">
                Last name
              </div>
              <div class="p-2">
                Email
              </div>
            </div>
            <div
              v-for="user in data.users"
              :key="user.id"
              class="grid grid-cols-4 gap-2"
            >
              <div class="p-2">
                {{ user.firstName }}
              </div>
              <div class="p-2">
                {{ user.lastName }}
              </div>
              <div class="p-2">
                {{ user.email }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
