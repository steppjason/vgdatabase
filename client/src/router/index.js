import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";


import Game from "@/views/Game/Game.vue";
import AddGame from "@/views/Game/AddGame.vue";
import AddGameSuccess from "@/views/Game/Success.vue";



const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/:id/:url",
		name: "Game",
		component: Game,
	},
	{
		path: "/add-game",
		name: "AddGame",
		component: AddGame,
	},
	{
		path: "/:id/game-added-successfully",
		name: "AddGameSuccess",
		component: AddGameSuccess,
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
