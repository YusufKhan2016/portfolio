<template>
  <UDashboardSidebar
    collapsible
    resizable
    :ui="{
      header: 'border-b border-default',
      footer: 'border-t border-default',
    }"
  >
    <template #header="{ collapsed }">

      <router-link to="/" v-if="!collapsed" class="flex gap-1">
        <UIcon name="i-lucide-shield-user" class="size-6 ml-2 shrink-0" />
        <p class="font-bold">Rafsun</p>
      </router-link>

      <router-link to="/" v-else>
        <UIcon name="i-lucide-shield-user" class="size-6 ml-1 shrink-0" />
      </router-link>

    </template>

    <template #default="{ collapsed }">

      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[0]"
        orientation="vertical"
      />

    </template>

    <template #footer="{ collapsed }">

      <UDropdownMenu
        :items="dropDownItems"
        :content="{ align: 'start', sideOffset: 8 }"
        :ui="{ content: '!w-(--reka-dropdown-menu-trigger-width)' }"
      >
        <UButton
          :avatar="{ src: fileServerUrl + user.image_link }"
          :label="collapsed ? undefined : user.name"
          color="neutral"
          variant="ghost"
          class="w-full"
          :block="collapsed"
        >

          <template #trailing>
            <ChevronsUpDown
              :size="18"
              class="ml-auto"
            />
          </template>

        </UButton>
      </UDropdownMenu>
    </template>
  </UDashboardSidebar>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, onMounted } from 'vue';
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'
import { useDark } from '@vueuse/core';
import { ChevronsUpDown } from 'lucide-vue-next';
import { useLoginStore } from '@/stores/login';
import { storeToRefs } from 'pinia';
import { fileServerUrl } from '@/stores/api';

const isDark = useDark()

const store = useLoginStore();

const {
  getAuthUser,
  getUserToken,
  getGuard
} = storeToRefs(store);

const { logout } = store;

const user = getAuthUser.value;

const dropDownItems = computed<DropdownMenuItem[][]>(() => [
  [
    {
      label: user.name,
      avatar: {
        src: fileServerUrl + user.image_link,
        loading: 'lazy'
      },
      type: 'label'
    }
  ],
  [
    {
      label: 'Appearance',
      icon: 'i-lucide-sun-moon',
      children: [
        [
          {
            label: 'Light',
            icon: 'i-lucide-sun',
            type: 'checkbox',
            checked: !isDark.value,
            onUpdateChecked() {
              isDark.value = false
            }
          },
          {
            label: 'Dark',
            icon: 'i-lucide-moon',
            type: 'checkbox',
            checked: isDark.value,
            onUpdateChecked() {
              isDark.value = true
            }
          }
        ]
      ]
    }
  ],
  [
    {
      label: 'Logout',
      icon: 'i-lucide-log-out',
      color: 'error',
      to: '/admin-login',
      onSelect: () => {
        logout();
      }
    }
  ]
])

const items: NavigationMenuItem[][] = [
  [
    {
      label: 'Dashboard',
      icon: 'i-lucide-house',
      to: "/dashboard",
      exact: true,
    },
    {
      label: 'My works',
      icon: 'i-lucide-briefcase-business',
      to: "/dashboard/my-works",
      exact: true
    },
  ]
]
</script>

