<template>
    <UDrawer
        title="Add works"
        description="Show case your best works"
        direction="right"
        :handle="false"
        :ui="{ header: 'border-b border-gray-200 dark:border-gray-800 pb-4' }"
    >
        <UButton 
        label="Add works" 
        color="neutral" 
        variant="solid" 
        class="w-auto justify-center"
        icon="i-lucide-briefcase-business" />
        

        <template #body>
            <UForm
                :schema="schemaValidation"
                :state ="state"
                @submit="onSubmit"
            >
                <UFormField name="title" label="Title">
                    <UInput 
                        v-model="state.title"
                        placeholder="Work 1" 
                        id="title" 
                        class="w-full mb-2"
                    />
                </UFormField>

                <UFormField name="img" label="Image Upload">
                    <UFileUpload 
                        v-model="state.img"
                        label="Drop your image here" 
                        id="img" 
                        accept="image/*" 
                        class="w-full min-h-48 mb-2" 
                    />
                </UFormField>

                <div class="flex justify-end mt-4 shrink-0">
                    <UButton type="submit" label="Save Work" color="primary" icon="i-lucide-save" />
                </div>
            </UForm>
        </template>
    </UDrawer>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import * as yup from 'yup'
import type { InferType } from 'yup'
import type { FormSubmitEvent } from '@nuxt/ui'

const state = reactive<any>({
    title: '',
    img: null,
})

const schemaValidation = yup.object({
    title: yup.string().required('Title is required').min(3, 'Title must be at least 3 characters'),
    img: yup.mixed().required('An image is required')
})

type Schema = InferType<typeof schemaValidation>

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    console.log('Form validated successfully:', event.data)
}
</script>
