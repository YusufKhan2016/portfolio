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
    default: "relative text-[#353535] text-7xl uppercase font-medium w-[400px] overflow-hidden"
  }
})

const fillText = ref<HTMLElement | null>(null);

onMounted(() => {

  const el = fillText.value;
  if (!el) return;

  const overlay = document.createElement('span')
  console.log(el.dataset);
  overlay.innerHTML = `${props.firstTitle} <br>${props.secondTitle}`;
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
    end: "+=340",
    pin: true,
    scrub: true,
  })

})
</script>
