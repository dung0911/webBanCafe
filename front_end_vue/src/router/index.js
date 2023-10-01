import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/User/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/User/About/AboutView.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/User/Shop/ShopView.vue"),
  },
  {
    path: "/shopDetail",
    name: "shopDetail",
    component: () => import("../views/User/Shop/ShopDetail.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/User/Blog/Blogs.vue"),
  },
  {
    path: "/blogDetail",
    name: "blogDetail",
    component: () => import("../views/User/Blog/BlogDetail.vue"),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () => import("../views/User/Contact/Contact.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/User/LoginAndRegistration/Login.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("../views/User/LoginAndRegistration/Registration.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

export default router;
