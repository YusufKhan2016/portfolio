<template>
  <section>
    <div class="container mx-auto px-27 py-40">
      <div class="flex justify-between gap-52">
        <MainHeadingText
        title="About Me"
        subtitle="About"
        />

        <div class="h-[350px] w-[700px] relative overflow-hidden">
          <img
          :src="aboutImg"
          loading="lazy"
          class="-translate-y-18"
          alt="About Image"
          ref="aboutImage"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import aboutImg from '@/assets/images/about.webp'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted, ref } from 'vue';

import MainHeadingText from '@/components/headings/mainHeadingText.vue';

const aboutImage = ref<HTMLElement | null>(null);

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const aboutImageAnimation = gsap.from(aboutImage.value, {
    scale: 1.5,
    duration: 2,
  })

  ScrollTrigger.create({
    trigger: aboutImage.value,
    start: "top bottom",
    end: "top -30%",
    scrub: 1,
    // markers: true,
    animation: aboutImageAnimation,
  })

})
</script>

<style scoped>
h1 {
  --fill-width: 0%;
}
</style>
