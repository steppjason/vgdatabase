<template>
	<div class="page page__block">

		<h1 class="page__title">List of all games</h1>

		<div class="gamelist" :class="{ show: mounted }" >
			<div class="gamelist__row">
				<div class="gamelist__head">Title</div>
				<div class="gamelist__year gamelist__head">Release Year</div>
			</div>

			<div class="gamelist__row" :key="game.id" v-for="game in games">
				<div v-if="game.title" class="gamelist__title"><router-link class="gamelist__link" :to="{name: 'Game', params:{id: game.gameid, url: titleToURL(game.title)}}">{{ game.title }}</router-link></div>
				<div v-if="game.releasedate" class="gamelist__year"><router-link class="gamelist__link" :to="{name: 'Game', params:{id: game.gameid, url: titleToURL(game.title)}}">{{ releaseYear(game.releasedate) }}</router-link></div>
			</div>
		</div>

		<div>{{ error }}</div>

	</div>
</template>

<script>

import GameService from '@/services/gameService'

export default {
	name: "Home",
	data(){
		return{
			games:{},
			mounted: false,
			error: ''
		}
	},
	async mounted(){
		try{
			this.games = (await GameService.getGames()).data.data
		} catch(err){
			console.log(err)
			this.error = err
		}
		this.mounted = true
	},
	methods:{
		formatDate(date){
			return date = new Date(date).toLocaleDateString("en-US")
		},

		releaseYear(date){
			return date = new Date(date).getFullYear()
		},

		titleToURL(title){
			return title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-")
		}
	}
}
</script>
