<template>
  <section id="mySkills">
    <div class="container mx-auto px-27 pt-40">
      <div class="flex justify-between">
        <SubHeadingText
          first-title="My"
          second-title="Skills"
        />
        <div class="w-[475px] text-[24px] space-y-8 uppercase">
          <div
          v-for="(item, idx) in skills"
          :key="idx"
          class="relative overflow-hidden rounded-full py-2 px-3 outline-2 outline-solid outline-neutral-500 hover:outline-amber-50  outline-offset-3 transition-all">
            <div class="flex justify-between relative z-10 mix-blend-difference text-amber-50">
              <div class="flex">
                <p class="mr-4 ">{{ item.sl }}</p>
                <p>{{ item.title }}</p>
              </div>
              <p>{{ item.value }}</p>
            </div>
            <div
            ref="mixBlender"
            :style="{ width: item.value}"
            class="absolute top-0 left-0 h-full bg-amber-50 rounded-full z-[1]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import SubHeadingText from './headings/subHeadingText.vue'

type skill = { sl: string, title: string, value: string }
const skills: skill[] = [
  { sl: "01", title: "Responsive Design", value: "100%" },
  { sl: "02", title: "Coding", value: "90%" },
  { sl: "03", title: "Problem Solving", value: "88%" },
  { sl: "04", title: "Communication", value: "92%" },
  { sl: "05", title: "Project Management", value: "79%" },
  { sl: "05", title: "Database Management", value: "75%" },
]

const mixBlender = ref<HTMLElement | null>(null);

onMounted(() => {

  const mixBlenderAnimation = gsap.from(mixBlender.value, {
    duration: 2,
    width: 0,
    ease: "power4.out",
    stagger: 0.1,
  })

  ScrollTrigger.create({
    trigger: mixBlender.value,
    animation: mixBlenderAnimation,
    start: "top 90%",
    end: "top 5%",
    toggleActions: 'restart none none reverse',
  })
})
</script>
