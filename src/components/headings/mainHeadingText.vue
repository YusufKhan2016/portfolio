<template>
  <div class="flex flex-col gap-10">
      <div :class="subtitleClass">
        <span class="h-2 w-2 rounded-full bg-amber-50"></span>
        {{ subtitle }}
      </div>

      <h1
      ref="headingText"
      :data-text="title"
      :class="titleClass">
        {{ title }}
      </h1>

    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted, ref } from 'vue';

defineProps({
  title: { type: String, default:"Demo Title"  },
  subtitle: { type: String, default:"Demo Subtitle " },
  titleClass: {
    type: String,
    default: "relative text-[#353535] text-[145px] 2xl:text-[200px] uppercase before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:w-[var(--fill-width)] before:text-amber-50 before:overflow-hidden  font-semibold leading-[0.8]"
  },
  subtitleClass: {
    type: String,
    default:"uppercase flex items-center gap-2 font-sans"
  },

})

const headingText = ref<HTMLElement | null>(null);
gsap.registerPlugin(ScrollTrigger);


onMounted(() => {

  const headingAnimation = gsap.to(headingText.value, {
    "--fill-width": "100%",
    duration: 2,
    ease: "power2.inOut",
  });

  ScrollTrigger.create({
    trigger: headingText.value,
    start: "top bottom",
    end: "top -30%",
    scrub: 1,
    // markers:true,
    animation: headingAnimation,
  });

})
</script>

<style scoped>
h1 {
  --fill-width: 0%;
}
</style>
