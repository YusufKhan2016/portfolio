<template>
  <NavBar />
    <router-view />
  <BottomBar />
</template>

<script lang="ts" setup>
import BottomBar from './bottomBar.vue';
import NavBar from './navBar.vue';
</script>
