import { createRouter, createWebHistory } from 'vue-router'

import ScrollTrigger from 'gsap/ScrollTrigger'

import website from '@/router/website/website.ts';
import login from '@/router/admin/login';
import admin from '@/router/admin/admin';

const routes = [ ...website, ...login, ...admin];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }
    }

  },
})

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem('guard') === 'true';

  if (to.path === '/admin-login' && isAuth) {
    return next('/dashboard');
  }

  if (to.path.startsWith('/dashboard') && !isAuth) {
    return next('/admin-login');
  }

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
