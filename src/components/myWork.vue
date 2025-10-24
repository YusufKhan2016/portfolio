<template>
  <section>
    <hr
    class="border-1 border-solid border-amber-50"
    ref="sectionBorder">

    <div class="container mx-auto">
      <div class="px-27">

        <!-- heading  -->
        <div class="flex items-center justify-between py-7">
          <h2 class="text-[#BBBBBB] w-[400px] text-2xl">
            "I design sleek, high-performance web experience that help brands stand out."
          </h2>
          <h1 class="flex items-center text-[40px] uppercase">My Work <ArrowRight :size="45" stroke-width="1.4" /> </h1>
        </div>

      </div>
    </div>

    <div class="overflow-hidden">
      <div class="h-[150vh] scale-[1.2]"
      ref="work">

        <div
        v-for="(imageidx, idx) in flexImages"
        :key="idx"
        class="flex space-x-4 space-y-4">
          <div
          v-for="(img, childIdx) in imageidx"
          :key="childIdx"
          class="flex flex-col rounded-lg overflow-hidden"
          :class="childIdx===1 ? 'translate-y-15' : 'translate-y-0'">
            <img :src="img" class="rounded-lg overflow-hidden" alt="">
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import gsap, { ScrollTrigger } from 'gsap/all';

import { ArrowRight } from 'lucide-vue-next';
import { computed, onMounted, ref } from 'vue';

import work1 from "@/assets/images/myWork/work1.webp";
import work2 from "@/assets/images/myWork/work2.webp";
import work3 from "@/assets/images/myWork/work3.webp";
import work4 from "@/assets/images/myWork/work4.webp";
import work5 from "@/assets/images/myWork/work5.webp";
import work6 from "@/assets/images/myWork/work6.webp";
import work7 from "@/assets/images/myWork/work7.webp";
import work8 from "@/assets/images/myWork/work8.webp";

const sectionBorder = ref<HTMLElement | null>(null);
const work = ref<HTMLElement | null>(null);
const workImages = ref<string[]>(
  [ work1, work2, work3, work4, work5, work6, work7, work8, work1 ]
);

const flexImages = computed(() => {
  const result: string[][] = [];

  for(let i =0;i<workImages.value.length; i+=3) {
    result.push(workImages.value.slice(i, i+3));
  }

  return result;
});

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const sectionBorderAnimation = gsap.from(sectionBorder.value, {
    scaleX: 0,
    transformOrigin: "center center",
    duration: 2,
  })
  const workAnimation = gsap.fromTo(
    work.value,
    { scale:2 },
    { scale: 1.1 }
  )

  ScrollTrigger.create({
    trigger: sectionBorder.value,
    scrub:2,
    animation: sectionBorderAnimation,
    start: "top 90%",
    end: "top 30%",
  })
  ScrollTrigger.create({
    trigger: work.value,
    scrub:2,
    animation: workAnimation,
    start: "top 80%",
    end: "bottom 20%",
    // markers:true,
  })

})

</script>
