<template>
  <section>
    <div class="container mx-auto px-27">
      <div class="flex justify-between">
        <h1
        ref="fillText"
        class="relative text-[#353535] text-7xl uppercase font-medium w-[400px] overflow-hidden"
        >
          HOW<br/>DO I WORK
        </h1>

        <div ref="paragraph" class="w-[475px] text-[40px] space-y-6">
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
import { ScrollTrigger, SplitText } from 'gsap/all';

const fillText = ref<HTMLElement | null>(null);
const paragraph = ref<HTMLElement | null>(null);

onMounted(() => {
  if(!paragraph.value) return
  const splittedParagraph = new SplitText(paragraph.value, { type: "chars"})

  const lineAnimation = gsap.from(splittedParagraph.chars, {
    opacity: 0.4,
    stagger: 1,
  })

  ScrollTrigger.create({
    trigger: paragraph.value,
    start: 'top 90%',
    end: 'top -50%',
    scrub: true,
    animation: lineAnimation,
  })

  const el = fillText.value;
  if (!el) return;

  const overlay = document.createElement('span')
  console.log(el.dataset);
  overlay.innerHTML = 'HOW <br>DO I WORK';
  overlay.className = 'absolute top-0 left-0 text-amber-50 overflow-hidden whitespace-pre w-0'
  el.appendChild(overlay);

  const subHeadingAnimation = gsap.to(overlay, {
    delay: 0.5,
    width: '100%',
    duration: 2,
    ease: 'power2.out',
  })

  ScrollTrigger.create({
    trigger: fillText.value,
    start: "top bottom",
    end: 'top -200%',
    scrub: true,
    animation: subHeadingAnimation,
  })

  ScrollTrigger.create({
    trigger: fillText.value,
    start: "top 5%",
    end: "+=400",
    pin: true,
  })


})
</script>
