import LayoutView from '@/layout/layoutView.vue';
import featuredWorkDetails from '@/views/featuredWorkDetails.vue';
import HomePage from '@/views/homePage.vue';
import ScrollTrigger from 'gsap/ScrollTrigger'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: LayoutView,
    children: [

      {
        path: '',
        name: 'home',
        component: HomePage
      },
      {
        path: 'featured-work/:slug',
        component: featuredWorkDetails
      },

    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }
    }

  },
})

router.beforeEach((to, from, next) => {
  if (!document.startViewTransition) {
    next()
    return
  }

  document.startViewTransition(() => {
    next()
  })
})

router.afterEach(() => {
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 1000)
})

export default router;
