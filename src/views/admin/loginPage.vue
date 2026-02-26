<template>
  <UApp class="h-svh ">
    <UContainer>

      <div class="flex justify-end items-end p-5">
        <UColorModeSwitch />
      </div>

      <UAuthForm
        title="Welcome Boss"
        description="Enter your credentials to access your admin."
        icon="i-lucide-user"
        :fields="fields"
        :schema="schemaValidation"
        @submit="onSubmit"
        :loading="loading"
        class="md:w-100 bg-transparent border border-solid border-[green] rounded-xl mx-auto p-2 sm:p-4 lg:p-5 transform backdrop-blur-3xl translate-y-1/2"
      />

    </UContainer>
  </UApp>
</template>

<script setup lang="ts">
import type { AuthFormField } from '@nuxt/ui'
import { ref } from 'vue';
import * as yup from 'yup';
import type { InferType } from 'yup'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast();
const fields = ref<AuthFormField[]>([
  {
    icon: 'i-lucide-user',
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    size: 'lg',
  },
  {
    icon: 'i-lucide-user-key',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    size: 'lg',
  }
])

const loading = ref(false);

const schemaValidation = yup.object({
  email: yup.string().email().required().label("Email"),
  password: yup.string().required().label("Password")
})

type Schema = InferType<typeof schemaValidation>;

const onSubmit = async (values: FormSubmitEvent<Schema>) => {
  console.log('Form Submitted:', values.data)
  toast.add({
    title: 'Login Successful',
    description: 'Welcome back boss!',
    color: 'success'
  })

}

</script>
