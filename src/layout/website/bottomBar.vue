<template>
  <footer class="relative overflow-hidden px-5 md:px-27 pt-35">
    <div class="container mx-auto relative">

      <div ref="rafsunName" class="flex justify-center z-0 w-full">
        <h1
        class="uppercase font-black glow-text text-[150px] md:text-[300px] lg:text-[520px] leading-[0.7] scale-x-[0.7] bg-cover bg-left bg-clip-text"
        >
          Rafsun
        </h1>
      </div>

    </div>

    <div class="border-t-1 border-solid border-gray-500 mx-auto uppercase flex justify-center items-center py-2 mt-3">
      <p>© 2026 Rafsun All rights reserved</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const rafsunName = ref<HTMLElement | null>(null);

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const rafsunNameAnimation = gsap.from(rafsunName.value,{
      opacity: 0.5,
      // y:-50,
    })

    ScrollTrigger.create({
      trigger: rafsunName.value,
      animation: rafsunNameAnimation,
      end:"top 55%",
      start: "top 80%",
      toggleActions: 'restart none none reverse',
    })
});

</script>

<style scoped>
.glow-text {
  filter: drop-shadow(0 0 90px rgba(255, 254, 254, 0))
          drop-shadow(0 0 90px rgba(245, 242, 242, 0.463))
          drop-shadow(0 0 100px rgba(255, 255, 255, 0.132));
}
</style>
