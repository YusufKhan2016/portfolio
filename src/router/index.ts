import LayoutView from '@/layout/layoutView.vue';
import HomePage from '@/views/homePage.vue';
import AboutPage from '@/views/aboutPage.vue';


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
        path: 'about-us',
        name: 'about-us',
        component: AboutPage,
      },

    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
