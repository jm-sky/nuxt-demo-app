<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'
import { RouteMap } from '@/router/routeMap'
import { useForm } from '@/helpers/useForm'
import { useAuthStore } from '@/stores'

useHead({
  title: 'Login',
})

definePageMeta({
  layout: 'guest',
})

const toast = useToast()
const authStore = useAuthStore()
const router = useRouter()

defineProps<{
  canResetPassword?: boolean
  status?: string
}>()

const form = useForm({
  email: 'user@example.com',
  password: 'Secret123!',
  remember: false,
  errors: {},
})

const submit = () => {
  form.post(RouteMap.API.LOGIN, {
    onSuccess: async () => {
      authStore.userId = form.email
      form.reset()
      await authStore.loadUserData()
      router.push(RouteMap.HOME)
    },
    onError: () => toast.error('Could not login'),
  })
}
</script>

<template>
  <NuxtLayout>
    <div
      v-if="status"
      class="mb-4 font-medium text-sm text-green-600"
    >
      {{ status }}
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

      <div class="block mt-4">
        <label class="flex items-center">
          <UCheckbox
            v-model:checked="form.remember"
            name="remember"
          />
          <span class="ms-2 text-sm text-gray-600">Remember me</span>
        </label>
      </div>

      <div class="flex items-center justify-end mt-4">
        <RouterLink
          v-if="canResetPassword"
          :to="RouteMap.PASSWORD_FORGOT"
          class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Forgot your password?
        </RouterLink>

        <UButton
          type="submit"
          class="ms-4"
          :loading="form.processing"
          :disabled="form.processing"
        >
          Log in
        </UButton>
      </div>

      <div class="mt-6 text-center text-sm dark:text-gray-500">
        Don't have account?
        <NuxtLink
          :to="RouteMap.REGISTER"
          class="text-sm font-semibold text-primary-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Register
        </NuxtLink>
      </div>
    </form>
  </NuxtLayout>
</template>
