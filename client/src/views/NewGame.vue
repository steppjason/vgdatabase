<template>
	<div>
		<div class="page page__block">
			<h1>Add new Game</h1>
			<form class="form" action="">
				<div class="form__col">
					<label class="form__label" for="">Title</label>
					<input class="form__input" name="gameTitle" type="text">
					<label class="form__label" for="">Publisher</label>
					<input class="form__input" name="gamePublisher" type="text">
					<label class="form__label" for="">Developer</label>
					<input class="form__input" name="gameDeveloper" type="text">
					<label class="form__label" for="">Platform</label>
					<input class="form__input" name="gamePlatform" type="text">
					<label class="form__label" for="">Genre</label>
					<input class="form__input" name="gameGenre" type="text">
				</div>

				<div class="form__col">
					<label class="form__label" for="">Release Date</label>
					<input class="form__input" name="gameReleaseDate" type="date">
					<label class="form__label" for="">Summary</label>
					<textarea class="form__input" name="gameSummary" id="" cols="30" rows="10"></textarea>
					<label class="form__label" for="">Plot</label>
					<textarea class="form__input" name="gamePlot" id="" cols="30" rows="10"></textarea>
				</div>

				<div class="form__col form__col_button">
					<button class="form__button">Add Game</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name:'CreateGame'
}
</script>