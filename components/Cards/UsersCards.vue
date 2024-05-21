<script setup lang="ts">
import type { UserView } from '~/models/userView.model'

defineProps<{
  users: UserView[]
}>()
</script>

<template>
  <div class="grid grid-cols-4 gap-2">
    <div
      v-for="user in users"
      :key="user.id"
      class="border rounded-lg bg-slate-100 dark:bg-slate-800 dark:border-slate-600 shadow p-3 flex flex-col gap-2"
    >
      <div class="font-semibold">
        {{ user.fullName }}
      </div>
      <div class="text-sm">
        <FaIcon
          icon="envelope"
          mr
        />
        {{ user.email }}
      </div>
    </div>

    <div
      class="cursor-pointer text-sm text-slate-700 border rounded-lg bg-slate-100 opacity-75 hover:opacity-100 transition dark:bg-slate-800 dark:border-slate-600 shadow p-3 flex flex-col items-center justify-center gap-2"
    >
      <FaIcon
        icon="plus"
        class="fa-2x"
        mr
      />
      Create new user
    </div>
  </div>
</template>
