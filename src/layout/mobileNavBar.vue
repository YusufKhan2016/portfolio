<template>
  <header class="fixed top-40 left-0 z-[111111] h-screen flex items-start">
    <div class="relative flex flex-col space-y-3 rounded-xl bg-gray-700/40 text-amber-50 border-1 border-solid border-amber-50  backdrop-blur-[80px] xl:hidden p-4 transition-transform duration-300"
    :class="!showNavbar ? '-translate-x-[98%]' : '-translate-x-[7%]'"
    >

      <div class="absolute border-1 -right-10 rounded-lg  bg-gray-700/40 backdrop-blur-2xl h-8 w-12 flex justify-center items-center cursor-pointer"
      @click="showNavbar = !showNavbar">
        <Menu />
      </div>

      <router-link to="/#myWorks">My Works</router-link>
      <router-link to="/#aboutMe">About Me</router-link>
      <router-link to="/#mySkills">My Skills</router-link>
      <router-link to="/#techStacks">Tech Stacks</router-link>
      <router-link to="/#experiences">Experiences</router-link>
      <router-link to="/#featuredWorks">Featured Works</router-link>
      <router-link to="/#letsTalk">Let's Talk</router-link>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Menu } from 'lucide-vue-next';

const showNavbar = ref(false);
</script>
