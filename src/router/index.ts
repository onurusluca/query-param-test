import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:contractId?",
    name: "Home",
    component: Home,
  },

  {
    path: "/query:afterQuery(.*)",
    component: () => import("../views/Query.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // short for `routes: routes`
});

export default router;
