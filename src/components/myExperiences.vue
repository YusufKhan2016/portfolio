<template>
  <section ref="sectionRef">
    <div class="container mx-auto px-27 py-40">
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
          class="sticky top-20 flex justify-center items-center gap-x-8 text-amber-50 border-t-1 border-solid border-gray-700 py-12 bg-[#000]"
          :class="idx === experiencesData.length-1 ? 'border-b-1' : 'border-b-0'"
          >

            <div class="border-1 border-gray-700 flex items-center justify-center p-6 rounded-3xl">
              {{ data.start_year }} - {{ data.end_year }}
            </div>

            <div class="space-y-3">
              <h2 class="text-2xl">{{ data.designation }}</h2>
              <p class="text-gray-400">{{ data.company }}</p>
            </div>

          </div>
        </div>
      </div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque blanditiis deleniti consequuntur alias iusto dolorum ratione natus est quod, doloribus officia asperiores saepe delectus voluptas, labore officiis eius! Asperiores commodi possimus minus. Animi unde pariatur nam voluptas nihil ducimus consequatur! Corrupti libero consequatur assumenda magni voluptatibus nam impedit laudantium dolor temporibus, voluptas odio placeat similique tempora asperiores accusamus repellat illo nesciunt numquam. Deserunt corrupti magni officiis impedit maiores ex nulla, tempore qui at illo soluta praesentium natus delectus minus iste, perspiciatis aliquam est officia saepe placeat vel, ab eum. Modi quis ducimus harum laborum, quisquam placeat at voluptatem doloribus enim cum quidem nemo, quia atque quae a, necessitatibus recusandae pariatur eaque! Deserunt molestiae at maiores blanditiis veritatis! Tempora, nisi atque ad porro, corrupti voluptatibus culpa earum impedit consectetur corporis ab maiores! Veritatis ad ea enim autem saepe cum tempora culpa id similique natus quibusdam blanditiis vel sapiente, consequuntur nihil quos veniam inventore, sint ratione officiis. Eos a pariatur obcaecati fugiat soluta doloribus dicta, at facilis recusandae eligendi earum? Aspernatur, nesciunt maxime illo voluptates neque obcaecati quam aperiam cumque nihil dolore odio laudantium, fuga maiores vel minima voluptatem excepturi nisi explicabo illum ab error repellat nam ipsum. Earum alias eum quam voluptates quaerat mollitia maiores! Distinctio a adipisci sapiente temporibus dignissimos ratione beatae aliquam numquam fugiat? Accusantium sapiente molestias ab quo architecto odio, vel numquam, voluptatibus impedit cumque in neque mollitia voluptatem, tempore dolorum non dolorem maxime? Vero numquam architecto mollitia nulla iure porro suscipit consequatur quis, temporibus illum iusto odit ab labore, distinctio necessitatibus expedita. Maiores, perspiciatis quasi ratione voluptatum, error impedit saepe animi eius molestias facere neque tempore voluptate quae, voluptates aspernatur quas. Sint ipsa veniam ipsam, ab mollitia reprehenderit quae eveniet quis iste, harum recusandae eligendi, quam asperiores amet vitae atque facere minima est. Adipisci ex dolor temporibus?
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
