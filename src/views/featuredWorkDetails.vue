<template>
  <section>
    <div class="container mx-auto px-26 py-20">

      <div class="rounded-2xl overflow-hidden h-[500px] bg-cover">
        <img :src="featured3" :alt="featured3">
      </div>

      <div class="flex justify-between uppercase py-10">

        <h1 class="text-5xl">{{ data.title }}</h1>
        <div class="flex items-center justify-between px-4 rounded-xl text-3xl border-2 border-solid border-amber-50">Visit Site <ArrowRight :size="35" stroke-width="1.4" class="transform rotate-[315deg]"/></div>

      </div>

      <div class="pb-10" v-if="data.project_tags.length !== 0">

        <h1 class="text-2xl uppercase pb-2">Project Tags</h1>
        <div class="text-[#BBBBBB] flex space-x-3">
          <p v-for="(item, idx) in data.project_tags" :key="idx" class="text-md border-2 border-solid border-[#BBBBBB] rounded-lg px-2">{{ item }}</p>
        </div>

      </div>

      <div class="pb-10" v-if="data.about_work">

        <h1 class="text-2xl uppercase pb-2">About Work</h1>
        <p class="text-xl text-[#BBBBBB]">{{ data.about_work }}</p>

      </div>

      <div class="pb-10" v-if="data.tools_img.length !== 0">

        <h1 class="text-2xl uppercase pb-2">Tools</h1>
        <div class="flex space-x-6">
          <img v-for="(item, idx) in data.tools_img"
          :key="idx"
          :src="item"
          :alt="item+ 'image'"
          class="h-8">
        </div>

      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>
import featured3 from '@/assets/images/featuredWorks/featured-3.webp';

import typescript from '@/assets/images/myStacks/ts.svg';
import nextjs from '@/assets/images/myStacks/nextjs.svg';
import reactjs from '@/assets/images/myStacks/reactjs.svg'

import { ref } from 'vue';
import { ArrowRight } from 'lucide-vue-next';

interface projectDataTypes {
  title: string,
  project_link: string,
  project_tags: string[],
  about_work: string,
  tools_img: string[],
}

const data = ref<projectDataTypes>({
  title: "Portfolio 1",
  project_link: "demo-link.com",
  project_tags: ["Portfolio", "Front-end", "Animation", "Professional", "Modern"],
  about_work: "A modern personal portfolio that effectively showcases a developer's experience, services, background, and projects, designed to increase opportunities for finding freelance or remote work.",
  tools_img: [typescript, nextjs, reactjs]
});

console.log(data.value);


</script>
