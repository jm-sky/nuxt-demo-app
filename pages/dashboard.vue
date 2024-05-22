<script setup lang="ts">
import type { IUserView } from '~/models/userView.model'
import { UserView } from '~/models/userView.model'
import UsersCards from '~/components/Cards/UsersCards.vue'

useHead({
  title: 'Dashboard',
})

definePageMeta({
  middleware: ['is-logged'],
})

const { data, error } = await useAsyncData(
  'users',
  () => $fetch<{ users: IUserView[] }>('/api/users'),
)

const users = computed<UserView[] | undefined>(() => data.value?.users.map(user => new UserView(user)))
</script>

<template>
  <NuxtLayout>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="p-6 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
          <div class="font-bold text-lg mb-4">
            Dashboard
          </div>

          <UAlert
            v-if="error"
            color="red"
            variant="outline"
            title="Error occured"
            class="my-4"
            :description="error?.message"
          />

          <UsersCards
            v-if="users"
            :users
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
