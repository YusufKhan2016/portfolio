<template>
  <section>
    <hr class="border-1 border-solid border-amber-50" ref="sectionBorder">
    <div class="container mx-auto">
      <div class="px-27">
        <!-- heading  -->
        <div class="flex items-center justify-between py-7">
          <h2 class="text-[#BBBBBB] w-[400px] text-2xl">
            "I design sleek, high-performance web experience that help brands stand out."
          </h2>
          <h1 class="flex items-center text-[40px] uppercase">My Work <ArrowRight :size="45" stroke-width="1.4" /> </h1>
        </div>
      </div>
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit in ex quam deleniti adipisci nihil error architecto porro labore cumque assumenda eum illum dolorum, perferendis eos vero beatae! Sapiente ullam, illum, quam a dicta laborum quaerat eligendi quis nam magni vitae odio enim reiciendis, fugiat expedita quidem? Accusamus pariatur voluptate nostrum aut error itaque deleniti laboriosam. Cupiditate nobis error tenetur architecto. Incidunt tempore blanditiis, fugit facere soluta ipsam veritatis illum maxime alias optio sit tempora praesentium, eius dolorum, dolores necessitatibus sequi exercitationem animi vero expedita aspernatur. Repellendus autem, numquam soluta aut similique exercitationem dolor earum placeat adipisci expedita ex laudantium perspiciatis? Consequuntur hic laudantium nisi saepe dignissimos, exercitationem ipsa aspernatur molestiae corporis non recusandae soluta totam dolorem nesciunt id blanditiis voluptatem ipsum vel velit enim mollitia adipisci vero odio. Veniam, maiores voluptate. Atque corporis veritatis, omnis facilis neque quia dicta consectetur voluptatum culpa qui itaque quod exercitationem id officia quis officiis distinctio suscipit tempora at excepturi error rem, corrupti debitis. Sapiente laborum maxime reiciendis, sint modi ullam? Incidunt velit odit repellat pariatur, sed fugit architecto aspernatur quo veniam quaerat. Sit dolore, facere officiis assumenda at, reprehenderit similique commodi perferendis reiciendis nisi soluta, nihil architecto minus ipsum id omnis qui quos ex nostrum consectetur saepe dignissimos! Natus accusamus obcaecati illo animi voluptatibus aliquid labore, optio incidunt sed vero ad rerum temporibus iusto quod similique asperiores eum, odio qui adipisci officia sapiente ratione! Pariatur voluptatibus culpa suscipit, quam repellat nisi aliquam atque non asperiores commodi, sint quidem voluptatem laborum animi autem eveniet reiciendis at debitis nulla necessitatibus. Iure dolores ducimus, totam architecto ab saepe accusantium corporis error quibusdam accusamus, distinctio, odit consectetur mollitia velit facere tempore nostrum in consequatur qui assumenda nobis eum voluptatem! Eum laboriosam quod repellat, odit ad tempora, delectus architecto minus voluptate esse repudiandae? Temporibus numquam quia et nisi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi earum hic quas, beatae facere dolores, consequatur nesciunt reprehenderit inventore culpa perferendis explicabo cumque voluptatibus quos dolor. Sit dicta dolorum sed minus rerum. Fugit sunt expedita qui ratione, ex quod, modi vel unde quis deserunt beatae quae. Repudiandae eligendi eveniet doloribus nam dicta sequi earum, nostrum sint ut impedit laudantium hic at molestias officia consectetur labore quibusdam autem totam aliquam. Necessitatibus beatae dolor provident, consequatur molestiae, quam voluptatibus eveniet optio quos incidunt explicabo delectus! Voluptate neque accusamus voluptatibus cum sit placeat inventore eum, sed ex sequi incidunt, et tempora explicabo doloremque nobis exercitationem obcaecati molestias quam illum qui sapiente modi voluptas! Nobis qui vitae eos, excepturi exercitationem iste non dolorum esse totam ullam. Provident est neque eveniet magnam quisquam ab voluptatibus tempora illum voluptatem doloremque, laborum fugit? Accusamus fugit, assumenda quo ducimus minus enim libero dolore sit quas. Dolor cupiditate non praesentium repudiandae itaque eum ratione tempora illum necessitatibus quidem fuga est ullam sapiente recusandae expedita id ipsam ab nostrum omnis nihil, sint quod? Temporibus, et? Facilis id, minus qui quibusdam laborum eligendi blanditiis repellat totam est quos ad exercitationem sapiente. Ipsam aliquam facere cumque placeat praesentium itaque ex dignissimos repellendus quasi, voluptas soluta, inventore amet sequi. Rem vitae debitis, placeat consequuntur blanditiis quas accusantium similique doloribus dicta iure sit rerum fugit deleniti tempora incidunt, nulla, nostrum eius aspernatur voluptatum obcaecati corrupti laudantium illum? Rem nobis minus asperiores ullam! Accusamus sed doloremque et ullam necessitatibus? Nulla eaque facilis adipisci perspiciatis quam nam, minima repudiandae provident dolor consectetur quis ducimus sequi iste deserunt tempora illum expedita illo fuga delectus, ea corporis optio quidem? Ipsa, deserunt nisi? Ex facere reprehenderit tempora accusantium ab saepe illum eligendi unde corrupti eveniet velit reiciendis aut aperiam possimus dolor, consequatur commodi porro cupiditate similique doloribus officia. Magni.
    </div>
  </section>
</template>

<script lang="ts" setup>
import gsap, { ScrollTrigger } from 'gsap/all';

import { ArrowRight } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';

const sectionBorder = ref<HTMLElement | null>(null);

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
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

</script>
