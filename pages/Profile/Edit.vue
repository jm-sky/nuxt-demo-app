<script setup lang="ts">
import DeleteUserForm from './partials/DeleteUserForm.vue'
import UpdatePasswordForm from './partials/UpdatePasswordForm.vue'
import UpdateProfileInformationForm from './partials/UpdateProfileInformationForm.vue'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()
const mustVerifyEmail = !authStore.user?.emailVerifiedAt
</script>

<template>
  <NuxtLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Profile
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
          <UpdateProfileInformationForm
            :must-verify-email="mustVerifyEmail"
            class="max-w-xl"
          />
        </div>

        <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
          <UpdatePasswordForm class="max-w-xl" />
        </div>

        <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
          <DeleteUserForm class="max-w-xl" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
