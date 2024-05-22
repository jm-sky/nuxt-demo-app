<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { RouteMap } from '@/router/routeMap'
import { useForm } from '@/helpers/useForm'
import { useAuthStore } from '@/stores'
import type { TSessionData } from '~/server/sessionStore'

useHead({
  title: 'Login',
})

definePageMeta({
  layout: 'guest',
})

const toast = useToast()
const authStore = useAuthStore()
const router = useRouter()
const { user } = storeToRefs(authStore)

const form = useForm({
  email: 'user@example.com',
  password: 'Secret123!',
  remember: false,
  errors: {},
})

const submit = async () => {
  form.post<{ session: TSessionData }>(RouteMap.API.LOGIN, {
    onSuccess: async (response) => {
      form.reset()
      authStore.session = response.session
      router.push(RouteMap.HOME)
    },
    onError: () => toast.error('Could not login'),
  })
}
</script>

<template>
  <NuxtLayout>
    <div
      v-if="user"
      class="text-xl font-bold p-4"
    >
      Hello {{ user?.fullName }}
    </div>

    <form @submit.prevent="submit">
      <div>
        <InputLabel
          for="email"
          value="E-mail"
        />

        <UInput
          id="email"
          v-model="form.email"
          type="email"
          class="mt-1 block w-full"
          :class="{ 'ring-1 ring-red-600': form.hasErrors }"
          required
          autofocus
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
          :class="{ 'ring-1 ring-red-600': form.hasErrors }"
          required
          autocomplete="current-password"
        />

        <InputError
          class="mt-2"
          :message="form.errors.password"
        />
      </div>

      <div class="flex flex-row justify-between gap-2 mt-4">
        <label class="flex items-center">
          <UCheckbox
            v-model:checked="form.remember"
            name="remember"
          />
          <span class="ms-2 text-sm text-gray-600 dark:text-gray-300">Remember me</span>
        </label>

        <RouterLink
          :to="RouteMap.PASSWORD_FORGOT"
          class="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Forgot your password?
        </RouterLink>
      </div>

      <div class="flex items-center justify-center mt-6">
        <UButton
          type="submit"
          :loading="form.processing"
          :disabled="form.processing"
          class="px-6"
        >
          Log in
        </UButton>
      </div>

      <div class="mt-6 text-center text-sm dark:text-gray-300">
        Don't have account?
        <NuxtLink
          :to="RouteMap.REGISTER"
          class="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-gray-900 dark:hover:text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Register
        </NuxtLink>
      </div>
    </form>
  </NuxtLayout>
</template>
