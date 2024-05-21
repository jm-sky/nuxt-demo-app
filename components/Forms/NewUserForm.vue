<script setup lang="ts">
import { useForm } from '~/helpers/useForm'

const userForm = useForm({
  name: '',
  lastName: '',
  email: '',
})

const onSubmit = () => {
}
</script>

<template>
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
</template>