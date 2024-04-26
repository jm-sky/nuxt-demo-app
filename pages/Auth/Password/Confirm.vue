<script setup lang="ts">
import InputError from '@/components/Input/InputError.vue'
import InputLabel from '@/components/Input/InputLabel.vue'
import { useForm } from '@/helpers/useForm'

definePageMeta({
  layout: 'guest',
})

const form = useForm({
  password: '',
})

const submit = () => {
  form.post('password.confirm', {
    onFinish: () => {
      form.reset()
    },
  })
}
</script>

<template>
  <NuxtLayout>
    <div class="mb-4 text-sm text-gray-600">
      This is a secure area of the application. Please confirm your password before continuing.
    </div>

    <form @submit.prevent="submit">
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
          required
          autocomplete="current-password"
          autofocus
        />
        <InputError
          class="mt-2"
          :message="form.errors.password"
        />
      </div>

      <div class="flex justify-end mt-4">
        <UButton
          class="ms-4"
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
          Confirm
        </UButton>
      </div>
    </form>
  </NuxtLayout>
</template>
