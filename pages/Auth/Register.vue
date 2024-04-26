<script setup lang="ts">
import { RouterLink } from 'vue-router'
import InputError from '@/components/Input/InputError.vue'
import InputLabel from '@/components/Input/InputLabel.vue'
import { useForm } from '@/helpers/useForm'
import { RouteMap } from '@/router/routeMap'
import type { User } from '@/types/user.type'
import { useAuthStore } from '@/stores'

definePageMeta({
  layout: 'guest',
})

const router = useRouter()

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const submit = async () => {
  const user = await form.post<User>(RouteMap.API.REGISTER)
  useAuthStore().user = user
  router.push(RouteMap.HOME)
}
</script>

<template>
  <NuxtLayout>
    <form @submit.prevent="submit">
      <div>
        <InputLabel
          for="name"
          value="Name"
        />

        <UInput
          id="name"
          v-model="form.name"
          type="text"
          class="mt-1 block w-full"
          :error="form.errors.name"
          required
          autofocus
          autocomplete="name"
        />

        <InputError
          class="mt-2"
          :message="form.errors.name"
        />
      </div>

      <div class="mt-4">
        <InputLabel
          for="email"
          value="Email"
        />

        <UInput
          id="email"
          v-model="form.email"
          type="email"
          class="mt-1 block w-full"
          :error="form.errors.email"
          required
          autocomplete="username"
        />

        <InputError
          class="mt-2"
          :message="form.errors.email"
        />
      </div>

      <div class="mt-4">
        <InputLabel
          for="password"
          value="Password"
        />

        <UInput
          id="password"
          v-model="form.password"
          type="password"
          class="mt-1 block w-full"
          :error="form.errors.password"
          required
          autocomplete="new-password"
        />

        <InputError
          class="mt-2"
          :message="form.errors.password"
        />
      </div>

      <div class="mt-4">
        <InputLabel
          for="password_confirmation"
          value="Confirm Password"
        />

        <UInput
          id="password_confirmation"
          v-model="form.password_confirmation"
          type="password"
          class="mt-1 block w-full"
          :error="form.errors.password_confirmation"
          required
          autocomplete="new-password"
        />

        <InputError
          class="mt-2"
          :message="form.errors.password_confirmation"
        />
      </div>

      <div class="flex items-center justify-end mt-4">
        <RouterLink
          :to="RouteMap.LOGIN"
          class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Already registered?
        </RouterLink>

        <UButton
          class="ms-4"
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
          Register
        </UButton>
      </div>
    </form>
  </NuxtLayout>
</template>
