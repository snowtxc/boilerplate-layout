import { createRouter, createWebHashHistory } from "vue-router";

//layouts
import MainLayout from '@/layouts/MainLayout';

//pages
import DashboardPage from "@/pages/dashboard/Dashboard.vue";
import EarningsPage from "@/pages/earnings/Earnings.vue";
const routes = [
    { path: '/', component: MainLayout, children: [   
        { path: '/', redirect: "dashboard"  },
        {path: "dashboard", component: DashboardPage},
        {path: "earnings", component: EarningsPage}
    ]}
    
  ]
  
  
  const router =  createRouter({
    history: createWebHashHistory(),
    routes, 
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  })

  
  export default router;
  