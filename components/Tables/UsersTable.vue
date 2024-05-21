<script setup lang="ts">
import type { UserView } from '~/models/userView.model'

defineProps<{
  users: UserView[]
}>()
</script>

<template>
  <div class="border rounded flex flex-col dark:border-slate-700">
    <div class="grid grid-cols-4 rounded-t gap-2 font-bold border-b bg-slate-50 dark:bg-slate-800 dark:border-slate-700">
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
      v-for="user in users"
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
</template>
