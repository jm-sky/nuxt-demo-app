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
      class="border rounded-lg bg-slate-100 shadow p-3 flex flex-col gap-2"
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
  </div>
</template>
