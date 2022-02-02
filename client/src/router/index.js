import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NewGame from "@/views/NewGame.vue";

import Game from "@/views/Game.vue";
import AddGame from "@/views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/add",
		name: "AddGame",
		component: AddGame,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/new-game",
		name: "NewGame",
		component: NewGame,
	},
	{
		path: "/:id/:url",
		name: "Game",
		component: Game,
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
