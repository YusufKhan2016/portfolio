<template>
  <div class="website-theme">
    <NavBar />
    <MobileNavBar />
    <router-view />
    <BottomBar />
  </div>
</template>

<script lang="ts" setup>
import BottomBar from '@/layout/website/bottomBar.vue';
import NavBar from '@/layout/website/navBar.vue';
import MobileNavBar from '@/layout/website/mobileNavBar.vue';
</script>
