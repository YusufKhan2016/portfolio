<template>
  <UDashboardNavbar
  title="Dashboard"
  :toggle="{
    color: 'primary',
    variant: 'subtle',
    class: 'rounded-full',
  }"
  class="w-full"
  >
    <template #left>
      <UDashboardSidebarCollapse />
      <UBreadcrumb :links="breadcrumbs" />
    </template>
  </UDashboardNavbar>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const breadcrumbs = computed(() => {
  return route.matched
    .filter(r => r.meta?.breadcrumb)
    .map(r => ({
      label: r.meta.breadcrumb,
      to: r.path
    }))
})
</script>
