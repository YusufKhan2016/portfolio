<template>
  <section id="letsTalk">
    <div class="container mx-auto px-5 md:px-27 pt-20 mask-x-from-90%">
      <hr
      class="border-1 border-solid border-amber-50"
      ref="sectionBorder">


      <div class="flex flex-col items-center xl:items-start">

        <div
        class="text-[55px] xl:text-[400px] tracking-tight py-20 xl:py-0 scale-x-75 xl:origin-left uppercase font-bold flex justify-center gap-10 whitespace-nowrap"
        ref="titleSection"

        >
          <h1>Let's Talk</h1>

          <h1 class="text-transparent" style="-webkit-text-stroke: 2px white;">Let's Work</h1>
        </div>

        <div class=" uppercase text-2xl flex flex-col md:flex-row justify-between items-center gap-3">
          <div class="flex flex-col md:flex-row items-center gap-4">
            <p class="border-1 rounded-xl border-gray-500 h-16 w-45 flex items-center justify-center">
              +001647724824
            </p>
            <p class="border-1 rounded-xl border-gray-500 h-16 w-75 flex items-center justify-center">
              hasanrafsun5@gmail.com
            </p>
            <p class="border-1 rounded-xl border-gray-500 h-16 w-55 flex items-center justify-center">
              Dhaka, Bangladesh
            </p>
          </div>

          <p class="px-1 py-2 w-50 flex items-center justify-center text-2xl">
            ✺ Interested in working with me?
          </p>
        </div>
      </div>

      <form action="/" method="post">

        <div class="flex flex-col md:flex-row justify-between gap-3 py-12 bg-black">
          <div class="w-full relative border-1 border-solid border-gray-400 rounded-xl h-24 px-8 flex items-center">
            <label
              for="name"
              class="absolute -top-3 left-8 px-3 bg-black text-sm uppercase tracking-wider text-amber-50"
            >
              Full Name *
            </label>

            <input
              type="text"
              id="name"
              placeholder="Hasan Yusuf Khan"
              class="w-full bg-transparent text-lg text-white
                    placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div class="w-full relative border border-gray-400 rounded-xl h-24 px-8 flex items-center">
            <label
              for="email"
              class="absolute -top-3 left-8 px-3 bg-black text-sm uppercase tracking-wider text-amber-50"
            >
              Email *
            </label>

            <input
              type="email"
              id="email"
              placeholder="hasanrafsun5@email.com"
              class="w-full bg-transparent text-lg text-white
                    placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row  justify-between gap-3 bg-black">
          <div class="w-full relative border border-gray-400 rounded-xl h-24 px-8 flex items-center">
            <label
              for="message"
              class="absolute -top-3 left-8 px-3 bg-black text-sm uppercase tracking-wider text-amber-50"
            >
              Your Message *
            </label>

            <textarea
              type="message"
              id="message"
              placeholder="Write your messsage here..."
              class="w-full bg-transparent text-lg text-white placeholder-gray-400 focus:outline-none pt-4"
            />
          </div>

          <input type="submit" value="Send Message" class="w-full h-14 md:w-[20%] border-1 border-gray-400 rounded-xl bg-amber-50 text-black font-semi text-xl">
        </div>

      </form>

    </div>
  </section>
</template>

<script lang="ts" setup>

import { ref, onMounted } from 'vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const sectionBorder = ref<HTMLElement | null>(null);
const titleSection = ref<HTMLElement | null>(null);

onMounted(() => {

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1280px)", () => {

    const sectionBorderAnimation = gsap.from(sectionBorder.value, {
      scaleX: 0,
      transformOrigin: "center center",
      duration: 2,
    })

    ScrollTrigger.create({
      trigger: sectionBorder.value,
      scrub:2,
      animation: sectionBorderAnimation,
      start: "top 90%",
      end: "top 30%",
    })

    const titleSectionAnimation = gsap.to(titleSection.value, {
      x: "-120%",
    })

    ScrollTrigger.create({
      trigger: titleSection.value,
      animation: titleSectionAnimation,
      scrub: 2,
      start: "top 25%",
      end: "top -260%",
    })

  })
})

</script>
