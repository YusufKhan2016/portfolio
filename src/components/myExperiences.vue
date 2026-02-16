<template>
  <section id="experiences">
    <div class="container mx-auto px-27 pt-40">
      <div class="flex justify-between">

        <SubHeadingText
          first-title="My"
          second-title="Experience"
        />

        <div class="w-[475px] relative">
          <div
          v-for="(data, idx) in experiencesData"
          :key="idx"
          :ref="el => experiences[idx] = el as HTMLElement"
          class="sticky top-18 flex justify-center items-center gap-x-8 text-amber-50 border-t-1 border-solid border-gray-700 py-12 bg-[#000]  group hover:border-amber-50 transition-all"
          >

            <div class="border-1 border-gray-700 group-hover:border-amber-50 flex items-center justify-center p-6 rounded-3xl">
              {{ data.start_year }} - {{ data.end_year }}
            </div>

            <div class="space-y-3">
              <h2 class="text-2xl">{{ data.designation }}</h2>
              <p class="text-gray-400">{{ data.company }}</p>
            </div>

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
import SubHeadingText from './headings/subHeadingText.vue'

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
      opacity: 1,
      scale:0.98,
      scrollTrigger: {
        trigger: card,
        start: 'top 100px',
        end: 'bottom 100px',
        scrub: true,
      }
    })

  })
})
</script>
