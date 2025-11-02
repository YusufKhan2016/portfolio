<template>
  <section>
    <div class="container mx-auto px-27">
      <div class="flex justify-between">

        <SubHeadingText
        first-title="HOW"
        second-title="DO I WORK"
        />

        <div ref="paragraph" class="w-[475px] text-[39px] space-y-8">
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
import SubHeadingText from './headings/subHeadingText.vue';

const paragraph = ref<HTMLElement | null>(null);

onMounted(() => {
  const paraEl = paragraph.value;
  if(!paraEl) return

  const splittedParagraph = new SplitText(paraEl, { type: "chars, words"})
  const lineAnimation = gsap.from(splittedParagraph.chars, {
    opacity: 0.4,
    stagger: 1,
  })

  ScrollTrigger.create({
    trigger: paraEl,
    start: 'top 90%',
    end: 'top -50%',
    scrub: true,
    animation: lineAnimation,
  })

})
</script>
