<template>
  <section>
    <div class="container mx-auto px-27">
      <div class="flex justify-between">
        <div>
          <div class="uppercase flex items-center gap-2 text-2xl"><span class="h-2 w-2 rounded-full bg-amber-50"></span> About</div>
          <h1 class="uppercase text-amber-50 text-[154px] w-[200px] font-bold leading-none">About Me</h1>
        </div>
        <div>
          <img :src="aboutImg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import aboutImg from "@/assets/images/about.webp";
</script>
