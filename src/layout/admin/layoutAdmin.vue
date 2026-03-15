<template>
  <UApp>
    <UDashboardGroup>

      <AdminSidebar />
      <UDashboardPanel>
        <AdminNavbar />

          <router-view />

        </UDashboardPanel>
      </UDashboardGroup>
  </UApp>
</template>

<script setup lang="ts">
import AdminSidebar from '@/layout/admin/adminSidebar.vue'
import AdminNavbar from '@/layout/admin/adminNavbar.vue'
</script>
