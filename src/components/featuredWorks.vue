<template>
  <section ref="sectionRef">
    <div class="container mx-auto px-27 py-40">
      <div class="flex flex-col">
        <div class="flex">

          <div class="flex flex-col items-center">
            <MainHeadingText
            title="Featured"
            title2="Works"
            subtitle="Portfolio"
            align="center"
            />
          </div>
        </div>

        <div class="mx-auto">
          <div
          v-for="(data, idx) in experiencesData"
          :key="idx"
          :ref="el => experiences[idx] = el as HTMLElement"
          class="sticky top-10 bg-amber-800 w-[800px] h-[550px] rounded-2xl"
          >

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import MainHeadingText from '@/components/headings/mainHeadingText.vue'

gsap.registerPlugin(ScrollTrigger)

const experiencesData = [
  {
    start_year: 2025,
    end_year: "Running",
    designation: "Frontend Engineer",
    company: "Datascape IT Limited"
  },
  {
    start_year: 2024,
    end_year: 2025,
    designation: "Web Design Instructor",
    company: "Gen-Z IT Institute"
  },
  {
    start_year: 2023,
    end_year: 2024,
    designation: "Full Stack Developer",
    company: "Tech IT LLC"
  }
]

const experiences = ref<HTMLElement[]>([])

onMounted(async () => {
  await nextTick()
  const cards = experiences.value;

  if (!cards || cards.length === 0) return

  cards.forEach((card, idx) => {

    if (idx === cards.length - 1) return

    gsap.to(card, {
      scale: 0.9,
      scrollTrigger: {
        trigger: card,
        start: 'top 100px',
        end: 'bottom 100px',
        scrub: true,
        markers: false
      }
    })

  })
})
</script>
