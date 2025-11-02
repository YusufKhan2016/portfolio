<template>
  <section>
    <div class="container mx-auto px-27 py-40">
      <div class="flex justify-between">
        <SubHeadingText
          first-title="My"
          second-title="Skills"
        />
        <div class="w-[475px] text-[24px] space-y-8 uppercase">
          <div
          v-for="(item, idx) in skills"
          :key="idx"
          class="relative overflow-hidden rounded-full py-2 px-3 outline-[1.1] outline-solid outline-neutral-500 hover:outline-amber-50  outline-offset-3 transition-all">
            <div class="flex justify-between relative z-10 mix-blend-difference text-amber-50">
              <div class="flex">
                <p class="mr-4 ">{{ item.sl }}</p>
                <p>{{ item.title }}</p>
              </div>
              <p>{{ item.value }}</p>
            </div>
            <div
            ref="mixBlender"
            :style="{ width: item.value}"
            class="absolute top-0 left-0 h-full bg-amber-50 rounded-full z-[1]"></div>
          </div>
        </div>
      </div>
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis delectus voluptas nobis quia eaque molestiae ab perferendis debitis sequi illum alias provident id blanditiis totam culpa aspernatur atque, cupiditate, quasi commodi neque voluptatum facilis? Voluptates nemo dolorem doloribus! Voluptatem facilis pariatur nulla sunt perspiciatis voluptatibus, veniam nihil maxime fuga tempore saepe porro et cupiditate reprehenderit sit animi sed? Ad quas eaque repellendus, obcaecati quia aliquid, perferendis fugit vero, debitis natus repudiandae optio asperiores quaerat dolorem animi dolor adipisci eum laborum hic quo id. Sint reprehenderit natus reiciendis similique ab accusamus magnam provident vel ducimus illo cumque quae, harum beatae quo temporibus repudiandae pariatur odit maiores quibusdam dolorem inventore aliquam? Amet ad earum doloremque quis iusto illo, quia dolore laborum officiis mollitia quasi expedita alias quaerat, ut at tenetur inventore illum, reprehenderit dignissimos temporibus magnam necessitatibus. Ab debitis labore quasi sint quibusdam? Recusandae accusantium illo quae sint exercitationem omnis pariatur mollitia sunt blanditiis, iure et porro natus accusamus, quo amet corporis quis? Blanditiis, et. Dicta laborum, aliquam quaerat sed eaque facere commodi sint perferendis animi, voluptate illo sit vel excepturi est alias iure eius molestiae recusandae voluptatibus quos error consequatur hic? Hic, repellat! Saepe modi harum assumenda reiciendis omnis et numquam temporibus natus quod. Suscipit quas, dicta nostrum ex blanditiis ratione. Iure laboriosam accusamus sunt quas nobis obcaecati itaque ea explicabo est tenetur similique aliquid, unde fugit eligendi esse doloribus corporis quae ullam voluptatem nisi amet! Ratione explicabo accusamus aut rerum, quos reprehenderit esse quas amet fuga nobis error facere omnis facilis tempore exercitationem officiis minima, perspiciatis harum necessitatibus! Quia, magnam tempora beatae hic tempore placeat ducimus nemo ex adipisci et alias aperiam at, reprehenderit non! Molestias ipsum quas omnis voluptatem aperiam aspernatur distinctio eveniet optio modi ab, earum id dolore nobis repellendus et nisi, recusandae doloremque eligendi a sunt.
    Praesentium repellendus omnis laudantium dolores reiciendis repellat nobis dolore laborum soluta voluptatum! Veritatis, voluptas omnis. Deserunt veniam fugit autem atque molestiae perferendis iure nostrum officiis vitae possimus. Nihil molestiae voluptatibus quos nam officia deserunt non eius consequatur consectetur praesentium vel velit animi eaque unde ut harum enim ratione accusantium maiores, voluptatem id. Eaque fuga, molestias modi sit eos ex beatae ratione nulla laborum atque corporis cum et tempora dolorum explicabo porro minima quam dolore deserunt consequatur possimus eveniet in iste nesciunt. Eaque ducimus dolores eos eveniet illo. Non, expedita nulla perspiciatis amet omnis alias, iusto qui laboriosam consequuntur earum architecto sit numquam voluptatum ducimus quaerat vitae harum magnam obcaecati officiis ex voluptatem dolores! Saepe, assumenda rerum ad perferendis delectus error voluptatibus molestias nihil porro sapiente ratione quia quibusdam cumque iste possimus! Quasi vel deleniti odit odio deserunt quam quod veniam. Cum, consectetur veniam ullam saepe nisi omnis iste aut minima quia nostrum, asperiores facere, fuga numquam! Enim rerum, officiis iste expedita dicta atque pariatur quia est omnis, repellendus neque nesciunt aperiam nisi reprehenderit voluptas voluptatibus necessitatibus, illo quam aliquid. Atque sit sapiente maxime blanditiis, laborum aliquid nesciunt ipsam voluptatibus quod architecto minima cum doloremque consequuntur consequatur at, iure veniam expedita dolores quaerat! Fuga et, nostrum explicabo ad modi unde. Est laboriosam voluptates quos omnis! Unde sapiente nulla cum architecto deserunt! Magni qui soluta aperiam delectus aliquid eligendi eius quam, reprehenderit accusamus natus quaerat temporibus? Voluptates atque eligendi officiis pariatur possimus facilis iste ad corporis aut amet maiores, ullam consectetur magni expedita, quo sapiente nobis? Neque quas accusantium laboriosam esse, blanditiis beatae et molestiae. Officiis harum obcaecati tenetur enim totam facilis ducimus dicta, optio consequatur numquam. Soluta exercitationem doloremque et iure porro, quae non libero incidunt. Perspiciatis repellat eveniet quas debitis, fuga, odio a corporis quia, ullam impedit minus laboriosam quae?
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import SubHeadingText from './headings/subHeadingText.vue'

type skill = { sl: string, title: string, value: string }
const skills: skill[] = [
  { sl: "01", title: "Responsive Design", value: "100%" },
  { sl: "02", title: "Coding", value: "90%" },
  { sl: "03", title: "Problem Solving", value: "88%" },
  { sl: "04", title: "Communication", value: "92%" },
  { sl: "05", title: "Project Management", value: "79%" },
  { sl: "05", title: "Database Management", value: "75%" },
]

const mixBlender = ref<HTMLElement | null>(null);

onMounted(() => {

  const mixBlenderAnimation = gsap.from(mixBlender.value, {
    duration: 2,
    width: 0,
    ease: "power4.out",
    stagger: 0.1,
  })

  ScrollTrigger.create({
    trigger: mixBlender.value,
    animation: mixBlenderAnimation,
    start: "top 90%",
    end: "top 5%",
    toggleActions: 'restart none none reverse',
  })
})
</script>
