<template>
  <UApp>
    <UContainer class="h-svh flex flex-col-reverse justify-center items-center">

      <div class="flex justify-end items-end p-5">
        <UColorModeSwitch color="primary" size="xl"/>
      </div>

      <UAuthForm
        title="Welcome Boss"
        description="Enter your credentials to access your admin."
        icon="i-lucide-user"
        :fields="fields"
        :schema="schemaValidation"
        @submit="onSubmit"
        :loading="loading"
        class="md:w-100 bg-transparent border border-solid border-[green] rounded-xl mx-auto p-2 sm:p-4 lg:p-5 transform backdrop-blur-3xl "
      />

    </UContainer>
  </UApp>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import * as yup from 'yup';
import type { InferType } from 'yup'

import type { AuthFormField } from '@nuxt/ui'
import type { FormSubmitEvent } from '@nuxt/ui'
import { useLoginStore } from '@/stores/login';

const route = useRouter();

const toast = useToast();
const store = useLoginStore();

const { loginRequest } = store;

const fields = ref<AuthFormField[]>([
  {
    icon: 'i-lucide-user',
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    size: 'xl',
  },
  {
    icon: 'i-lucide-user-key',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    size: 'xl',
  }
])

const loading = ref(false);

const schemaValidation = yup.object({
  username: yup.string().required().label("Username"),
  password: yup.string().required().label("Password")
})

type Schema = InferType<typeof schemaValidation>;

const onSubmit = async (values: FormSubmitEvent<Schema>) => {
  loading.value = true;
  loginRequest(values.data)
    .then((res: any) => {
      route.push('/dashboard');
      toast.add({
        title: 'Login Successful',
        description: 'Welcome back boss!',
        color: 'success'
      })
    })
    .catch((error: any) => {
      const message = error?.data?.message || "Something went wrong";
      toast.add({
        title: 'Login failed',
        description: message,
        color: 'error'
      })
    })
    .finally(() => {
      loading.value = false;
    })
}

</script>
