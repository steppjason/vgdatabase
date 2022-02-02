<template>
	<div class="page page__block">

		<div class="game" :class="{ show: mounted }">
			
			<div :key="game.id" v-for="game in games">

				<div class="game__block">
					<h1 class="game__title">{{game.title}}</h1>
					<div class="game__nav">
						<router-link :to="{name:'UpdateGame'}" class="header__link header__link--action">Edit</router-link>
					</div>
					<div class="game__cover"><img :src="game.coverimage" /></div>
					<ul class="game__attributes">
						<li v-if="game.publisher"><div class="game__attributes--title">Publisher</div> {{ game.publisher }}</li>
						<li v-if="game.developer"><div class="game__attributes--title">Developer</div> {{ game.developer }}</li>
						<li v-if="game.platform"><div class="game__attributes--title">Platform</div> {{ game.platform }}</li>
						<li v-if="game.genre"><div class="game__attributes--title">Genre</div> {{ game.genre }}</li>
						<li v-if="game.releasedate"><div class="game__attributes--title">Release Date</div> {{ formatDate(game.releasedate) }}</li>
					</ul>

					<div v-if="game.summary" class="game__summary">
						<h3>Summary</h3>
						<p style="white-space: pre-line">{{game.summary}}</p>
					</div>

					<div v-if="game.summary" class="game__description">
						<h3>Plot</h3>
						<p style="white-space: pre-line">{{game.longdescription}}</p>
					</div>

				</div>

			</div>

		</div>

		<div class="error" v-if="games.length < 1"><div class="error__message">Game could not be found!</div></div>

	</div>
</template>

<script>

import GameService from '@/services/gameService'

export default {
	name: "Game",
	data(){
		return{
			games:{},
			mounted: false,
			error: ''
		}
	},
	async mounted(){
		try{
			this.games = (await GameService.getGame(this.$route.params.id, this.$route.params.url)).data.data
		} catch(err){
			console.log(err)
			this.error = err
		}
		console.log(this.games)
		this.mounted = true
	},
	methods:{
		formatDate(date){
			return date = new Date(date).toLocaleDateString("en-US")
		}
	}
}
</script>
