import LayoutView from "@/layout/website/layoutView.vue";
import FeaturedWorkDetails from "@/views/website/featuredWorkDetails.vue";
import HomePage from "@/views/website/homePage.vue";

export default [
  {
    path: '/',
    name: 'index',
    component: LayoutView,
    children: [

      {
        path: '',
        name: 'home',
        component: HomePage
      },
      {
        path: 'featured-work/:slug',
        component: FeaturedWorkDetails
      },

    ]
  }
]
