import LayoutAdmin from "@/layout/admin/layoutAdmin.vue";
import AdminDashbaord from "@/views/admin/pages/adminDashbaord.vue";
import adminMyWorks from "@/views/admin/pages/adminMyWorks.vue";

export default [
  {
    path: '/dashboard',
    component: LayoutAdmin,
    children: [
      {
        path: '',
        name: 'dashboard',
        meta: {
          breadcrumb: ["Dashboard"]
        },
        component: AdminDashbaord,
      },
      {
        path: 'my-works', 
        name: 'my-works',
        meta: {
          breadcrumb: ["My Works"]
        },
        component: adminMyWorks,
      }

    ]
  }
]
