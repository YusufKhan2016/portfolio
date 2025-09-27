<template>
  <Section>
    <div class="container mx-auto">
      <!-- hero name section  -->
      <div
      class="flex items-center justify-center h-[400px] relative"
      ref="rafsunName">
        <h1
        class="uppercase font-black text-[400px] glow-text scale-x-[0.7] text-transparent bg-cover bg-left bg-clip-text"
        :style="{ backgroundImage: `url(${logoBg})` }">
          Rafsun
        </h1>
      </div>

      <!-- hero intro section   -->
      <div
      class="flex justify-center gap-10 text-amber-50 bg-black uppercase mx-auto px-27 rounded-t-4xl overflow-hidden py-10 relative"
      ref="selfIntro">
        <div class="flex flex-col justify-between">
          <h1 class="text-8xl">Brand & Website Designer</h1>

          <div class="flex items-center gap-10">
            <div class="flex gap-3 text-xl">
              <li class="uppercase flex">Dribble <ArrowRight class="-rotate-45"/></li>
              <li class="uppercase flex">Github <ArrowRight class="-rotate-45"/></li>
              <li class="uppercase flex">Linkedin <ArrowRight class="-rotate-45"/></li>
            </div>

            <div class="bg-white rounded-full h-2 w-14"></div>

            <div>
              <p class="text-[40px]">Let's Talk</p>
            </div>
          </div>
        </div>

        <div class="border-4 border-solid border-amber-50 rounded-full overflow-hidden">
          <img :src="rafsunProfile" class="bg-cover bg-center" alt="rafsun image">
        </div>
      </div>
    </div>
  </Section>
</template>

<script lang="ts" setup>
import { ArrowRight } from "lucide-vue-next";
import { onMounted, ref } from "vue";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import rafsunProfile from "@/assets/images/rafsun.jpg";
import logoBg from "@/assets/images/logo_bg.jpg";

const rafsunName = ref<HTMLElement | null>(null);
const selfIntro = ref<HTMLElement | null>(null);

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(rafsunName.value, {
      filter: "blur(10px)",
      opacity: 0,
      duration:2,
    }
  )

  const nameAnimation = gsap.fromTo(
    rafsunName.value,
    {
      y: 30,
      scale: 1.04,
      ease: "power3.Out"
    },
    {
      scale: 0.98,
      opacity: 0,
      ease: "power3.inOut"
    }
  );

  ScrollTrigger.create({
    start: "top top",
    end: "400px",
    pin: rafsunName.value,
    pinSpacing: false,
    scrub: 1,
    toggleActions: "restart none none reverse",
    // markers: true,
    animation: nameAnimation,
  })

});
</script>

<style scoped>
.glow-text {
  filter: drop-shadow(0 0 8px rgba(255, 254, 254, 0))
          drop-shadow(0 0 8px rgba(245, 242, 242, 0.463))
          drop-shadow(0 0 30px rgba(255, 255, 255, 0.132));
}
</style>
