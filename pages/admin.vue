<script setup lang="ts">
import { IUserView, UserView } from '~/models/userView.model'
import UsersTable from '@/components/Tables/UsersTable'
import NewUserForm from '@/components/Forms/NewUserForm'

definePageMeta({
  middleware: ['is-logged'],
})

useHead({
  title: 'Admin',
})

const { data, error } = await useAsyncData(
  'users',
  () => $fetch<{ users: IUserView[] }>('/api/users'),
)

const users = computed<UserView[]>(() => data.value?.users.map(user => new UserView(user)));
</script>

<template>
  <NuxtLayout>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="p-6 bg-white dark:bg-gray-900 overflow-hidden shadow-sm sm:rounded-lg">
          <div class="text-lg font-bold mb-4">Admin</div>

          <UsersTable :users />

          <NewUserForm />

        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
