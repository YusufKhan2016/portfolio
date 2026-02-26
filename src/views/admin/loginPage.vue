<template>
  <section class="h-svh bg-[url('https://c4.wallpaperflare.com/wallpaper/824/766/324/nebula-4k-teal-turquoise-wallpaper-preview.jpg')]">
    <UContainer>
      <UAuthForm
        title="Welcome Boss"
        description="Enter your credentials to access your admin."
        icon="i-lucide-user"
        :fields="fields"
        class="md:w-[400px] bg-transparent border-1 border-solid border-green-500 rounded-xl mx-auto p-2 sm:p-4 lg:p-5 transform backdrop-blur-3xl translate-y-1/2"
      />
    </UContainer>
  </section>
</template>

<script setup lang="ts">

import type { AuthFormField } from '@nuxt/ui'
import { ref } from 'vue';

const fields = ref<AuthFormField[]>([
  {
    icon: 'i-lucide-user',
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    size:'lg'

  },
  {
    icon: 'i-lucide-user-key',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    size: 'lg'
  }
])

</script>
