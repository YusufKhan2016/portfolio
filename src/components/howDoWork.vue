<template>
  <section>
    <div class="container mx-auto px-27">
      <div class="flex justify-between">
        <h1
          ref="fillText"
          class="relative text-[#353535] text-7xl uppercase font-semibold leading-[0.8] w-[400px] overflow-hidden"
        >
          HOW<br/>DO I WORK
        </h1>

        <div class="w-[475px] space-y-6">
          <div>
            <p>✺ 01</p>
            <p>I focus on clarity, performance and user experience — starting with your goals.</p>
          </div>
          <div>
            <p>✺ 02</p>
            <p>Then crafting sleek, functional designs through research, design, development and refinement.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

const fillText = ref<HTMLElement | null>(null)

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const el = fillText.value;
  if (!el) return

  const overlay = document.createElement('span')
  console.log(el.dataset);
  overlay.innerHTML = 'HOW <br>DO I WORK';
  overlay.className =
    'absolute top-0 left-0 text-amber-50 overflow-hidden whitespace-pre w-0'
  el.appendChild(overlay)

  // Animate the fill from 0% to 100%
  gsap.to(overlay, {
    delay: 0.5,
    width: '100%',
    duration: 2,
    ease: 'power2.out',
  })
})
</script>
