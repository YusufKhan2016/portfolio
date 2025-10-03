<template>
  <section>
    <div class="container mx-auto px-27 py-40">
      <div class="flex justify-between gap-52">
        <div class="flex flex-col gap-10">
          <div class="uppercase flex items-center gap-2 font-sans">
            <span class="h-2 w-2 rounded-full bg-amber-50"></span>
            About
          </div>

          <h1
          ref="headingText"
          data-text="About Me"
          class="relative text-[#353535] text-[145px] 2xl:text-[200px] uppercase before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:w-[var(--fill-width)] before:text-amber-50 before:overflow-hidden  font-semibold leading-[0.8]">
            About Me
          </h1>

        </div>

        <div class="h-[340px] w-[470px] relative overflow-hidden">
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

const headingText = ref<HTMLElement | null>(null);
const aboutImage = ref<HTMLElement | null>(null);

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: headingText.value,
    start: "top bottom",
    end: "top top",
    scrub: 1,
    // markers: true,
  }
});

tl.to(headingText.value, {
  "--fill-width": "100%",
  duration: 2,
  ease: "power2.inOut",
}, 0)
.from(aboutImage.value, {
  scale: 1.5,
  duration: 2,
}, 0)

})
</script>

<style scoped>
h1 {
  --fill-width: 0%;
}
</style>
