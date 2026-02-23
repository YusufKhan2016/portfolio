<template>
  <NavBar />
  <MobileNavBar />
  <router-view />
  <BottomBar />
</template>

<script lang="ts" setup>
import BottomBar from '@/layout/bottomBar.vue';
import NavBar from '@/layout/navBar.vue';
import MobileNavBar from '@/layout/mobileNavBar.vue';
</script>
