import LayoutView from '@/layout/layoutView.vue';
import HomePage from '@/views/homePage.vue';

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

    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
