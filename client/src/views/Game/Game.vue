<template>
	<div class="page page__block">
		
		<div :class="{ show: warning, allowclick: warning }" class="game__confirm_delete">
			<div class="game__warning_box">
				<div>Are you sure you want to delete?</div>
				<button v-on:click="cancelDeleteGame()">Cancel</button>
				<button id="confirmdeletebutton" v-on:click="confirm()">Delete</button>
			</div>
		</div>
	
		<div class="game" :class="{ show: mounted }">
			
			<div :key="game.id" v-for="game in games">

				<div class="game__block">
					<h1 class="game__title">{{game.title}}</h1>
					<div class="game__nav">
						<router-link :to="{name:'UpdateGame'}" class="header__link header__link--action">Edit</router-link>
						<span v-on:click="deleteGame()" class="trash_can"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-can" class="svg-inline--fa fa-trash-can" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464C32 490.5 53.5 512 80 512h288c26.5 0 48-21.5 48-48V128H32V464zM304 208C304 199.1 311.1 192 320 192s16 7.125 16 16v224c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM208 208C208 199.1 215.1 192 224 192s16 7.125 16 16v224c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM112 208C112 199.1 119.1 192 128 192s16 7.125 16 16v224C144 440.9 136.9 448 128 448s-16-7.125-16-16V208zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z"></path></svg></span>
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
			res:{},
			mounted: false,
			warning: false,
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
		this.mounted = true
	},
	methods:{
		formatDate(date){
			return date = new Date(date).toLocaleDateString("en-US")
		},

		deleteGame(){
			this.warning = true
		},

		cancelDeleteGame(){
			this.warning = false
			var button = document.getElementById('confirmdeletebutton')
			button.disabled = false;
		},

		async confirm(){
			try{
				var button = document.getElementById('confirmdeletebutton')
				button.disabled = true;
				this.warning = false
				this.res = (await GameService.deleteGame(this.games[0].gameid)).data.data
				setTimeout(()=>this.$router.push(`/game-deleted-successfully`), 500)
			} catch(err){
				console.log(err)
				this.error = err
			}
		}
	}
}
</script>
