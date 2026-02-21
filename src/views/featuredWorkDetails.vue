<template>
  <section>
    <div class="container mx-auto p-4 xl:px-26 lg:py-20 flex flex-col lg:flex-row-reverse gap-7">

      <div class="rounded-2xl overflow-hidden xl:h-[500px] xl:w-[500px] xl:bg-cover">
        <img
          :src="featured3"
          :alt="data.title"
          class="w-full h-full object-cover"
          :style="{ viewTransitionName: `post-img-feature-3` }"
        >
      </div>

      <div>
        <div class="flex flex-col lg:flex-row space-y-5 justify-between uppercase py-10">

          <h1 class="text-5xl">{{ data.title }}</h1>
          <div class="flex items-center w-46 lg:w-auto justify-between px-4 rounded-xl text-3xl border-2 border-solid border-amber-50">Visit Site <ArrowRight :size="35" stroke-width="1.4" class="transform rotate-[315deg]"/></div>

        </div>

        <div class="pb-10" v-if="data.project_tags.length !== 0">

          <h1 class="text-2xl uppercase pb-2">Project Tags</h1>
          <div class="text-[#BBBBBB] flex flex-wrap xl:flex-nowrap space-x-3 space-y-3 lg:space-y-0">
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

</script>
