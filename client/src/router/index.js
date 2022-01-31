import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Game from "@/views/Game.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id/:url",
    name: "Game",
    component: Game,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
