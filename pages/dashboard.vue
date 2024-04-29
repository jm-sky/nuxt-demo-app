<script setup lang="ts">
import { useForm } from '~/helpers/useForm'
import type { UserView } from '~/models/userView.model'

const { data, error } = await useAsyncData(
  'users',
  () => $fetch<{ users: UserView[] }>('/api/users'),
)

useHead({
  title: 'Dashboard',
})

const userForm = useForm({
  name: '',
  lastName: '',
  email: '',
})

const onSubmit = () => {
}
</script>

<template>
  <NuxtLayout>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="p-6 bg-white dark:bg-gray-900 overflow-hidden shadow-sm sm:rounded-lg">
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

          <div class="border rounded flex flex-col">
            <div class="grid grid-cols-4 gap-2 font-bold border-b bg-slate-50">
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
              v-for="user in data?.users"
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

          <form
            class="border rounded p-4 flex flex-col gap-2 my-4 w-1/2 mx-auto"
            @submit.prevent="onSubmit"
          >
            <div class="font-bold">
              Create new user
            </div>
            <UInput
              v-model="userForm.name"
              placeholder="Name"
            />
            <UInput
              v-model="userForm.lastName"
              placeholder="Last name"
            />
            <UInput
              v-model="userForm.email"
              placeholder="E-mail"
            />
            <UButton>Create</UButton>
          </form>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
