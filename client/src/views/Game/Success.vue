<template>
	<div class="page page__block">
		<div class="page__message" :class="{ show: mounted }">
			<div>
				<h3>Game added successfully!</h3>
			</div>
			<div :key="game.id" v-for="game in games">
				<router-link class="gamelist__link" :to="{name: 'Game', params:{id: game.gameid, url: gameTitle } }">Go to {{ game.title }} page </router-link>
			</div>
		</div>
	</div>
</template>

<script>

import GameService from '@/services/gameService'
import Helper from '@/services/helperService'

export default {
	name: "AddGameSuccess",
	data(){
		return{
			games:{},
			gameTitle: '',
			mounted: false,
			error: ''
		}
	},
	setup(){

	},
	async mounted(){
		try{
			this.games = (await GameService.getGame(this.$route.params.id, this.$route.params.url)).data.data
			this.gameTitle = Helper.titleToURL(this.games[0].title)
		} catch(err){
			console.log(err)
			this.error = err
		}

		this.mounted = true

	}
}
</script>
