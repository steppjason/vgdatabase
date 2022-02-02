<template>
	<div>
		<div class="page page__block">
			<h1 :class="{ show: mounted }" class="page__title page__title--hide">Update {{ gameTitle }}</h1>
			<form :class="{ show: mounted }" class="form form__update" method="POST" action="/" @submit.prevent="updateGame">
				<div class="form__col">
					<label class="form__label" for="title">Title *</label>
					<input v-model="formData.title" class="form__input" name="title" type="text" required>

					<label class="form__label" for="publisher">Publisher</label>
					<input v-model="formData.publisher" class="form__input" name="publisher" type="text">

					<label class="form__label" for="developer">Developer</label>
					<input v-model="formData.developer" class="form__input" name="developer" type="text">

					<label class="form__label" for="platform">Platform</label>
					<input v-model="formData.platform" class="form__input" name="platform" type="text">

					<label class="form__label" for="genre">Genre</label>
					<input v-model="formData.genre" class="form__input" name="genre" type="text">

					<label class="form__label" for="coverimage">Cover Image URL</label>
					<input v-model="formData.coverimage" class="form__input" name="coverimage" type="text">
				</div>

				<div class="form__col">
					<label class="form__label" for="releasedate">Release Date</label>
					<input v-model="formData.releasedate" class="form__input" name="releasedate" type="date">

					<label class="form__label" for="summary">Summary</label>
					<textarea v-model="formData.summary" class="form__input" name="summary" id="" cols="30" rows="10"></textarea>

					<label class="form__label" for="longdescription">Plot</label>
					<textarea v-model="formData.longdescription" class="form__input" name="longdescription" id="" cols="30" rows="10"></textarea>
				</div>

				<div class="form__col form__col_button">
					<button id="updategamebutton" class="form__button">Update Game</button>
				</div>

				
			</form>
			
		</div>
	</div>
</template>

<script>
import GameService from '@/services/gameService'
import Helper from '@/services/helperService'

export default {
	name:'CreateGame',
	data(){
		return{

			formData: {
				title:null,
				publisher:null,
				developer:null,
				platform:null,
				genre:null,
				coverimage: null,
				releasedate:null,
				summary:null,
				longdescription:null
			},
			games:{},
			gameTitle: '',
			submitted: false,
			mounted: false,
			hidden: false,
			error: ''
			
		}	
	},
	async mounted(){
		try{
			this.games = (await GameService.getGame(this.$route.params.id, this.$route.params.url)).data.data
			this.gameTitle = this.games[0].title
			
			this.formData.title = this.games[0].title
			this.formData.publisher = this.games[0].publisher
			this.formData.developer = this.games[0].developer
			this.formData.genre = this.games[0].genre
			this.formData.platform = this.games[0].platform
			this.formData.coverimage = this.games[0].coverimage
			this.formData.summary = this.games[0].summary
			this.formData.longdescription = this.games[0].longdescription
			this.formData.releasedate = Helper.formateDateForForm(this.games[0].releasedate)

		} catch(err){
			console.log(err)
			this.error = err
		}
		console.log(this.games)
		this.mounted = true
	},
	methods:{
		async updateGame(){
			try{
				var button = document.getElementById('updategamebutton')
				button.disabled = true

				this.games = (await GameService.updateGame(this.games[0].gameid, this.formData)).data.data
				this.$router.push(`/${this.games[0].gameid}/${Helper.titleToURL(this.games[0].title)}`)
			} catch(err){
				console.log(err)
				this.error = err
			}
		}

	}

}


</script>