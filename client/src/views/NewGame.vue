<template>
	<div>
		<div class="page page__block">
			<h1>Add new Game</h1>
			<form class="form" method="POST" action="/" @submit.prevent="addNewGame">
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
				</div>

				<div class="form__col">
					<label class="form__label" for="releasedate">Release Date *</label>
					<input v-model="formData.releasedate" class="form__input" name="releasedate" type="date" required>

					<label class="form__label" for="summary">Summary</label>
					<textarea v-model="formData.summary" class="form__input" name="summary" id="" cols="30" rows="10"></textarea>

					<label class="form__label" for="longdescription">Plot</label>
					<textarea v-model="formData.longdescription" class="form__input" name="longdescription" id="" cols="30" rows="10"></textarea>
				</div>

				<div class="form__col form__col_button">
					<button class="form__button">Add Game</button>
				</div>

				<div>
					<div>{{ formData }}</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import GameService from '@/services/gameService'

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
				releasedate:null,
				summary:null,
				longdescription:null
			}
			
		}	
	},
	methods:{
		async addNewGame(){
			try{
				this.games = (await GameService.addGame(this.formData))
				this.$router.push("/")
			} catch(err){
				console.log(err)
				this.error = err
			}

		}
	}

}


</script>