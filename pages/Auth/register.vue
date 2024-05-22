<script setup lang="ts">
import { RouterLink } from 'vue-router'
import InputError from '@/components/Input/InputError.vue'
import InputLabel from '@/components/Input/InputLabel.vue'
import { useForm } from '@/helpers/useForm'
import { RouteMap } from '@/router/routeMap'
import { useAuthStore } from '@/stores'
import type { TSessionData } from '~/server/sessionStore'

definePageMeta({
  layout: 'guest',
})

const router = useRouter()
const authStore = useAuthStore()

const form = useForm({
  firstName: 'John',
  lastName: 'Doe',
  email: 'user@example.com',
  password: 'Secret123!',
  passwordConfirmation: 'Secret123!',
})

const submit = async () => {
  try {
    const { session } = await form.post<{ session: TSessionData }>(RouteMap.API.REGISTER)
    authStore.session = session
    router.push(RouteMap.HOME)
  }
  catch (error: unknown) {
    form.errors.email = 'E-mail is in use'
  }
}
</script>

<template>
  <NuxtLayout>
    <form @submit.prevent="submit">
      <div class="text-lg font-bold mb-3">
        Create new account
      </div>

      <div class="flex flex-col gap-4">
        <div>
          <InputLabel
            for="firstName"
            value="Name"
          />

          <UInput
            id="firstName"
            v-model="form.firstName"
            type="text"
            class="mt-1 block w-full"
            :input-class="form.errors.firstName ? 'ring-1 ring-red-500' : ''"
            required
            autofocus
            autocomplete="firstName"
          />

          <InputError
            class="mt-2"
            :message="form.errors.firstName"
          />
        </div>

        <div>
          <InputLabel
            for="lastName"
            value="Last name"
          />

          <UInput
            id="lastName"
            v-model="form.lastName"
            type="text"
            class="mt-1 block w-full"
            :input-class="form.errors.lastName ? 'ring-1 ring-red-500' : ''"
            required
            autocomplete="lastName"
          />

          <InputError
            class="mt-2"
            :message="form.errors.lastName"
          />
        </div>

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
            :input-class="form.errors.email ? 'ring-1 ring-red-500' : ''"
            required
            autocomplete="email"
          />

          <InputError
            class="mt-2"
            :message="form.errors.email"
          />
        </div>

        <div>
          <InputLabel
            for="password"
            value="Password"
          />

          <UInput
            id="password"
            v-model="form.password"
            type="password"
            class="mt-1 block w-full"
            :input-class="form.errors.password ? 'ring-1 ring-red-500' : ''"
            required
            autocomplete="new-password"
          />

          <InputError
            class="mt-2"
            :message="form.errors.password"
          />
        </div>

        <div>
          <InputLabel
            for="passwordConfirmation"
            value="Confirm Password"
          />

          <UInput
            id="passwordConfirmation"
            v-model="form.passwordConfirmation"
            type="password"
            class="mt-1 block w-full"
            :input-class="form.errors.passwordConfirmation ? 'ring-1 ring-red-500' : ''"
            required
            autocomplete="new-password"
          />

          <InputError
            class="mt-2"
            :message="form.errors.passwordConfirmation"
          />
        </div>

        <div class="flex items-center justify-end">
          <RouterLink
            :to="RouteMap.LOGIN"
            class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Already registered?
          </RouterLink>

          <UButton
            type="submit"
            class="ms-4"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
          >
            Register
          </UButton>
        </div>
      </div>
    </form>
  </NuxtLayout>
</template>
