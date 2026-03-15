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
          :avatar="{ src: 'https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/623425248_2419644031830154_3101286750229057805_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=Z9e8Sbmgb1wQ7kNvwGf0Lf1&_nc_oc=Adm7CRBRPr_alIui8Dr3rltBV_fN2mxzcY5SVAmiyRTl94A_hBp8LC3xxsCYWo27Y0M&_nc_zt=23&_nc_ht=scontent.fdac175-1.fna&_nc_gid=5bYG9dqQNXgOnOTxcOHo1A&_nc_ss=8&oh=00_AfxSQ8O0mH7uC6slXKPjVAfQjDs4VpIlrEv8e_YRuJbqgg&oe=69B47036' }"
          :label="collapsed ? undefined : 'Rafsun'"
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
import { computed } from 'vue';
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'
import { useDark } from '@vueuse/core';
import { ChevronsUpDown } from 'lucide-vue-next';

const isDark = useDark()

const dropDownItems = computed<DropdownMenuItem[][]>(() => [
  [
    {
      label: 'Rafsun',
      avatar: {
        src: 'https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/623425248_2419644031830154_3101286750229057805_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=Z9e8Sbmgb1wQ7kNvwGf0Lf1&_nc_oc=Adm7CRBRPr_alIui8Dr3rltBV_fN2mxzcY5SVAmiyRTl94A_hBp8LC3xxsCYWo27Y0M&_nc_zt=23&_nc_ht=scontent.fdac175-1.fna&_nc_gid=5bYG9dqQNXgOnOTxcOHo1A&_nc_ss=8&oh=00_AfxSQ8O0mH7uC6slXKPjVAfQjDs4VpIlrEv8e_YRuJbqgg&oe=69B47036',
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
      to: '/admin-login'
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
      icon: 'i-lucide-house',
      to: "/dashboard/my-works",
      exact: true
    },
  ]
]
</script>

