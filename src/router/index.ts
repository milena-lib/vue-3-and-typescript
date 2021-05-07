import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    }      
];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;