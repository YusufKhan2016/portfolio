<template>
  <header class="">
    <div
      ref="navBar"
      class="hidden md:block fixed translate-x-1/2 right-1/2 z-[111111] mt-1 rounded-[10px_10px_20px_20px] overflow-hidden mx-auto"
    >
      <ul class="relative min-w-[1200px] px-10 py-4 flex justify-between text-md font-semibold bg-gray-700/40 border-b-1 border-solid gap-8">
        <router-link
        to="#myWorks"
        class="cursor-pointer transition-all duration-300"
        :class="activeSection === 'myWorks' ? 'text-amber-50 border-b-2 border-amber-50' : 'text-white hover:text-gray-300'"
        >
          My works
        </router-link>
        <router-link
          to="#aboutMe"
          class="cursor-pointer transition-all duration-300"
          :class="activeSection === 'aboutMe' ? 'text-amber-50 border-b-2 border-amber-50' : 'text-white hover:text-gray-300'"
        >
          About
        </router-link>
        <router-link
          to="#mySkills"
          class="cursor-pointer transition-all duration-300"
          :class="activeSection === 'mySkills' ? 'text-amber-50 border-b-2 border-amber-50' : 'text-white hover:text-gray-300'"
        >
          Skills
        </router-link>
        <router-link
          to="#techStacks"
          class="cursor-pointer transition-all duration-300"
          :class="activeSection === 'techStacks' ? 'text-amber-50 border-b-2 border-amber-50' : 'text-white hover:text-gray-300'"
        >
          Tech stacks
        </router-link>
        <router-link
          to="#experiences"
          class="cursor-pointer transition-all duration-300"
          :class="activeSection === 'experiences' ? 'text-amber-50 border-b-2 border-amber-50' : 'text-white hover:text-gray-300'"
        >
          Experiences
        </router-link>
        <router-link
          to="#featuredWorks"
          class="cursor-pointer transition-all duration-300"
          :class="activeSection === 'featuredWorks' ? 'text-amber-50 border-b-2 border-amber-50' : 'text-white hover:text-gray-300'"
        >
          Featured works
        </router-link>
        <router-link
          to="#letsTalk"
          class="cursor-pointer transition-all duration-300 px-4 rounded"
          :class="activeSection === 'letsTalk' ? 'bg-amber-50 text-black border-b-2 border-black' : 'bg-amber-50 text-black hover:bg-amber-100'"
        >
          Let's Talk
        </router-link>
      </ul>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRoute } from "vue-router";

const navBar = ref<HTMLElement | null>(null);
const routePath = ref<string | null>('/');
const activeSection = ref<string>('aboutMe');

const route = useRoute();

watch(
  () => route.path,
  (val) => {
    routePath.value = val;
  }
)

onMounted(() => {
  if (routePath.value === '/') {
    gsap.set(navBar.value, {
      y: -100,
      opacity: 0,
    });

    const navbarAnimation = gsap.to(navBar.value, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      backdropFilter: "blur(40px)",
    });

    ScrollTrigger.create({
      trigger: document.body,
      start: "top -300",
      toggleActions: "play none none reverse",
      animation: navbarAnimation
    })
  }

  // Scroll detection for active section
  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // Check if section is in viewport (with 150px offset from top for navbar)
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = section.id;
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});

onBeforeUnmount(() => {

})
</script>
