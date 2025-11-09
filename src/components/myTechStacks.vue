<template>
  <section>
    <div class="container mx-auto px-27">
      <div class="flex justify-between items-center">
        <SubHeadingText
          first-title="My"
          second-title="Tech Stacks"
          heading-pin-length="0"
          fill-text-length="-100%"
        />

        <div class="w-[475px] text-[24px] uppercase">
          <div class="grid grid-cols-4 gap-x-4 gap-y-5">
            <div
              v-for="(img, idx) in techStackImages"
              :key="idx"
              ref="techStacks"
              class="tech-stack-item border-1 border-gray-700 hover:border-amber-50 rounded-full w-25 h-25 flex justify-center items-center grayscale hover:grayscale-0 transition-[border-color, filter]"
            >
              <img
                :src="img"
                :width="40"
                :alt="img + 'logo'"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { gsap, ScrollTrigger } from 'gsap/all';
import SubHeadingText from './headings/subHeadingText.vue';

import html from "@/assets/images/myStacks/html.svg";
import css from "@/assets/images/myStacks/css.svg";
import js from "@/assets/images/myStacks/js.svg";
import nextJs from "@/assets/images/myStacks/nextjs.svg";
import reactJs from "@/assets/images/myStacks/reactjs.svg";
import tailwindCss from "@/assets/images/myStacks/tailwind.svg";
import ts from "@/assets/images/myStacks/ts.svg";
import vueJs from "@/assets/images/myStacks/vuejs.svg";

const techStackImages = [
  html,
  css,
  js,
  ts,
  tailwindCss,
  vueJs,
  reactJs,
  nextJs,
]

const techStacks = ref<HTMLElement[]>([]);

onMounted(() => {
  
  if(techStacks.value.length === 0) return;

  const techStacksAnimation = gsap.fromTo(
    techStacks.value,
    {
      y: 70,
      opacity: 0,
    },
    {
      y:0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.1,
      ease: "power3.out",
    }
  )

  ScrollTrigger.create({
    trigger: techStacks.value,
    start: "top 90%",
    animation: techStacksAnimation,
    toggleActions: "restart none none reverse"
  })

})
</script>
