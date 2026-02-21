<template>
  <section id="featuredWorks">
    <div class="container mx-auto px-5 md:px-27 pt-40">
      <hr
      class="border-1 border-solid border-amber-50"
      ref="sectionBorder" >

      <div class="flex flex-col items-center" >
        <div class="flex my-24" >

          <MainHeadingText
          title="Featured"
          title2="Works"
          subtitle="Portfolio"
          align="items-center"
          />

        </div>

        <div class="mx-auto">
          <div
          v-for="(data, idx) in featuredWorksData"
          :key="idx"
          :ref="el => featuredWork[idx] = el as HTMLElement"
          class="xl:sticky top-18 bg-amber-50 md:w-[900px] md:h-[500px]  rounded-2xl my-4 overflow-hidden"
          >

            <router-link :to="'/featured-work/'+data.slug" class="relative w-full h-full group">
              <div class="absolute z-30 w-full flex justify-between mx-auto px-8 py-4">
                <h1 class="space-x-2 text-2xl -translate-y-[42px] group-hover:translate-y-0 duration-300"><span>{{ data.sl }}</span><span>{{ data.title }}</span></h1>
                <div class="flex">
                  <p
                  v-for="(cats, idx) in data.tags"
                  :key="idx"
                  class="ml-4 bg-black/25 px-3 py-1 rounded-full -translate-y-[48px] group-hover:translate-y-0 duration-300"
                  >
                    {{ cats }}
                  </p>
                </div>
              </div>
              <img
                :src="data.image_link"
                class="w-full h-full object-cover scale-110"
                :style="{ viewTransitionName: `post-img-${data.slug}` }"
                :alt="data.title"
              />

              <div
                class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"
              ></div>
            </router-link>

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

import MainHeadingText from '@/components/headings/mainHeadingText.vue'

import featured1 from '@/assets/images/featuredWorks/featured-1.webp';
import featured2 from '@/assets/images/featuredWorks/featured-2.webp';
import featured3 from '@/assets/images/featuredWorks/featured-3.webp';
import featured4 from '@/assets/images/featuredWorks/featured-4.webp';
import featured5 from '@/assets/images/featuredWorks/featured-5.webp';
import featured6 from '@/assets/images/featuredWorks/featured-6.webp';
import featured7 from '@/assets/images/featuredWorks/featured-7.webp';
import featured8 from '@/assets/images/featuredWorks/featured-8.webp';

gsap.registerPlugin(ScrollTrigger)

const featuredWorksData = [
  { sl: '01', title: "Feature 1", slug: "feature-1", tags: ["Logo", "Design"], image_link: featured1 },
  { sl: '02', title: "Feature 2", slug: "feature-2", tags: ["Logo", "Design"], image_link: featured2 },
  { sl: '03', title: "Feature 3", slug: "feature-3", tags: ["Logo", "Design"], image_link: featured3 },
  { sl: '04', title: "Feature 4", slug: "feature-4", tags: ["Logo", "Design"], image_link: featured4 },
  { sl: '05', title: "Feature 5", slug: "feature-5", tags: ["Logo", "Design"], image_link: featured5 },
  { sl: '06', title: "Feature 6", slug: "feature-6", tags: ["Logo", "Design"], image_link: featured6 },
  { sl: '07', title: "Feature 7", slug: "feature-7", tags: ["Logo", "Design"], image_link: featured7 },
  { sl: '08', title: "Feature 8", slug: "feature-8", tags: ["Logo", "Design"], image_link: featured8 },
];

const sectionBorder = ref<HTMLElement | null>(null);
const featuredWork = ref<HTMLElement[]>([]);

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
    
  })
})

</script>
