<template>
  <NavBar />
  <main class="pt-17">
    <router-view />
  </main>
  <BottomBar />
</template>

<script lang="ts" setup>
import BottomBar from './bottomBar.vue';
import NavBar from './navBar.vue';


</script>
