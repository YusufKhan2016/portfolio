<template>
  <div
  class="flex flex-col gap-10"
  :class="align">
      <div :class="subtitleClass">
        <span class="h-2 w-2 rounded-full bg-amber-50"></span>
        {{ subtitle }}
      </div>

      <div
      class="flex flex-col"
      :class="align"
      >
        <h1
        ref="headingText"
        :data-text="title"
        class="relative text-[#353535] text-7xl md:text-[145px] 2xl:text-[200px] uppercase before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:w-[var(--fill-width)] before:text-amber-50 before:overflow-hidden  font-semibold leading-[0.8]">
          {{ title }}
        </h1>

        <h1
        ref="headingText2"
        :data-text="title2"
        class="relative text-[#353535] text-7xl md:text-[145px] 2xl:text-[200px] uppercase before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:w-[var(--fill-width)] before:text-amber-50 before:overflow-hidden  font-semibold leading-[0.8]">
          {{ title2 }}
        </h1>
      </div>


    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted, ref } from 'vue';

defineProps({
  title: { type: String, default:"Demo Title"  },
  title2: { type: String, default:"Demo Title"  },
  subtitle: { type: String, default:"Demo Subtitle" },
  titleClass: {
    type: String,
    default: "relative text-[#353535] text-[145px] 2xl:text-[200px] uppercase before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:w-[var(--fill-width)] before:text-amber-50 before:overflow-hidden  font-semibold leading-[0.8]"
  },
  subtitleClass: {
    type: String,
    default:"uppercase flex items-center gap-2 font-sans"
  },
  align: {
    type: String,
    default: "items-center md:items-start"
  }

})

const headingText = ref<HTMLElement | null>(null);
const headingText2 = ref<HTMLElement | null>(null);

onMounted(() => {

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1280px)", () => {

    const headingAnimation = gsap.from(headingText.value, {
      "--fill-width": "0%",
      duration: 2,
      ease: "power2.inOut",
    });

    ScrollTrigger.create({
      trigger: headingText.value,
      start: "top bottom",
      end: "top -10%",
      scrub: 1,
      // markers:true,
      animation: headingAnimation,
    });

    const headingAnimation2 = gsap.from(headingText2.value, {
      "--fill-width": "0%",
      duration: 2,
      ease: "power2.inOut",
    });

    ScrollTrigger.create({
      trigger: headingText2.value,
      start: "top bottom",
      end: "top 0",
      scrub: 1,
      // markers:true,
      animation: headingAnimation2,
    });
  })


})
</script>

<style scoped>
h1 {
  --fill-width: 100%;
}
</style>
