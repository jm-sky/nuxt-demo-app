<script setup lang="ts">
import type { IUserView } from '~/models/userView.model'
import { UserView } from '~/models/userView.model'
import UsersTable from '~/components/Tables/UsersTable.vue'
import NewUserForm from '~/components/Forms/NewUserForm.vue'

definePageMeta({
  middleware: ['is-logged'],
})

useHead({
  title: 'Admin',
})

const { data } = await useAsyncData(
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
          <div class="text-lg font-bold mb-4">
            Admin
          </div>

          <UsersTable
            v-if="users"
            :users
          />

          <NewUserForm />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
