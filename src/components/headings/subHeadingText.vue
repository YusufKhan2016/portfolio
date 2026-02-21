<template>
  <h1
  ref="fillText"
  :class="subtitleClass"
  >
    {{ firstTitle }}<br/>{{ secondTitle }}
  </h1>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

const props = defineProps({
  firstTitle: { type: String, default: "Demo 1"},
  secondTitle: { type: String, default: "Demo 2"},
  subtitleClass: {
    type: String,
    default: "relative text-[#353535] text-5xl  md:text-7xl uppercase font-medium w-[400px] overflow-hidden"
  },
  headingPinLength: { type: String, default: "340"},
  fillTextLength: { type: String, default: "-300%"}
})

const fillText = ref<HTMLElement | null>(null);

onMounted(() => {

  const el = fillText.value;
  if (!el) return;

  const screenWidth = screen.width;
  console.log(screenWidth);

  const overlay = document.createElement('span')
  overlay.innerHTML = `${props.firstTitle} <br>${props.secondTitle}`;
  overlay.className = 'absolute top-0 left-0 text-amber-50 overflow-hidden whitespace-pre w-full'
  el.appendChild(overlay);

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1280px)", () => {

    const subHeadingAnimation = gsap.from(overlay, {
      delay: 0.5,
      width: '0%',
      duration: 2,
      ease: 'power2.out',
    })

    ScrollTrigger.create({
      trigger: fillText.value,
      start: "top bottom",
      end: `top ${props.fillTextLength}`,
      scrub: true,
      animation: subHeadingAnimation,
    })

    if (screenWidth >= 768) {
      ScrollTrigger.create({
        trigger: fillText.value,
        start: "top 10%",
        end: `+=${props.headingPinLength}`,
        pin: true,
        scrub: true,
      })
    }

  })

})
</script>
