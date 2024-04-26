<script setup lang="ts">
import { ref } from 'vue'
import InputError from '@/components/Input/InputError.vue'
import InputLabel from '@/components/Input/InputLabel.vue'
import { useForm } from '@/helpers/useForm'
import { RouteMap } from '@/router/routeMap'

const passwordInput = ref<HTMLInputElement | null>(null)
const currentPasswordInput = ref<HTMLInputElement | null>(null)

const form = useForm({
  current_password: '',
  password: '',
  password_confirmation: '',
})

const updatePassword = () => {
  form.put(RouteMap.API.PASSWORD_UPDATE, {
    onSuccess: () => form.reset(),
    onError: () => {
      if (form.errors.password) {
        form.reset('password', 'password_confirmation')
        passwordInput.value?.focus()
      }
      if (form.errors.current_password) {
        form.reset('current_password')
        currentPasswordInput.value?.focus()
      }
    },
  })
}
</script>

<template>
  <section>
    <header>
      <h2 class="text-lg font-medium text-gray-900">
        Update Password
      </h2>

      <p class="mt-1 text-sm text-gray-600">
        Ensure your account is using a long, random password to stay secure.
      </p>
    </header>

    <form
      class="mt-6 space-y-6"
      @submit.prevent="updatePassword"
    >
      <div>
        <InputLabel
          for="current_password"
          value="Current Password"
        />
        <UInput
          id="current_password"
          ref="currentPasswordInput"
          v-model="form.current_password"
          type="password"
          class="mt-1 block w-full"
          autocomplete="current-password"
        />
        <InputError
          :message="form.errors.current_password"
          class="mt-2"
        />
      </div>

      <div>
        <InputLabel
          for="password"
          value="New Password"
        />
        <UInput
          id="password"
          ref="passwordInput"
          v-model="form.password"
          type="password"
          class="mt-1 block w-full"
          autocomplete="new-password"
        />
        <InputError
          :message="form.errors.password"
          class="mt-2"
        />
      </div>

      <div>
        <InputLabel
          for="password_confirmation"
          value="Confirm Password"
        />
        <UInput
          id="password_confirmation"
          v-model="form.password_confirmation"
          type="password"
          class="mt-1 block w-full"
          autocomplete="new-password"
        />
        <InputError
          :message="form.errors.password_confirmation"
          class="mt-2"
        />
      </div>

      <div class="flex items-center gap-4">
        <UButton
          :disabled="form.processing"
          :loading="form.processing"
        >
          Save
        </UButton>

        <Transition
          enter-active-class="transition ease-in-out"
          enter-from-class="opacity-0"
          leave-active-class="transition ease-in-out"
          leave-to-class="opacity-0"
        >
          <p
            v-if="form.recentlySuccessful"
            class="text-sm text-gray-600"
          >
            Saved.
          </p>
        </Transition>
      </div>
    </form>
  </section>
</template>
