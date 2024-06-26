<script setup lang="ts">
import InputError from '@/components/Input/InputError.vue'
import InputLabel from '@/components/Input/InputLabel.vue'
import { useForm } from '@/helpers/useForm'
import { RouteMap } from '@/router/routeMap'
import { useAuthStore } from '@/stores'
import type { User } from '@/types/user.type'

useHead({
  title: 'Profile',
})

defineProps<{
  mustVerifyEmail?: boolean
  status?: string
}>()

const user = useAuthStore().user as User | undefined

const formData = useForm({
  name: user?.name ?? '',
  email: user?.email ?? '',
})

const submit = () => formData.patch(RouteMap.API.PROFILE_UPDATE)
</script>

<template>
  <section>
    <header>
      <h2 class="text-lg font-medium text-gray-900">
        Profile Information
      </h2>

      <p class="mt-1 text-sm text-gray-600">
        Update your account's profile information and email address.
      </p>
    </header>

    <form
      class="mt-6 space-y-6"
      @submit.prevent="submit"
    >
      <div>
        <InputLabel
          for="name"
          value="Name"
        />
        <UInput
          id="name"
          v-model="formData.name"
          type="text"
          class="mt-1 block w-full"
          required
          autofocus
          autocomplete="name"
        />
        <InputError
          class="mt-2"
          :message="formData.errors.name"
        />
      </div>

      <div>
        <InputLabel
          for="email"
          value="Email"
        />
        <UInput
          id="email"
          v-model="formData.email"
          type="email"
          class="mt-1 block w-full"
          required
          autocomplete="username"
        />
        <InputError
          class="mt-2"
          :message="formData.errors.email"
        />
      </div>

      <div v-if="mustVerifyEmail && !user?.emailVerifiedAt">
        <p class="text-sm mt-2 text-gray-800">
          Your email address is unverified.
          <RouterLink
            :to="RouteMap.VERIFICATION_SEND"
            method="post"
            as="button"
            class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Click here to re-send the verification email.
          </RouterLink>
        </p>

        <div
          v-show="status === 'verification-link-sent'"
          class="mt-2 font-medium text-sm text-green-600"
        >
          A new verification link has been sent to your email address.
        </div>
      </div>

      <div class="flex items-center gap-4">
        <UButton
          :disabled="formData.processing"
          :loading="formData.processing"
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
            v-if="formData.recentlySuccessful"
            class="text-sm text-gray-600"
          >
            Saved.
          </p>
        </Transition>
      </div>
    </form>
  </section>
</template>
