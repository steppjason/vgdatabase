<template>
	<div class="page page__block">
		<div class="page__message" :class="{ show: mounted }">
			<div>
				<h3>Game deleted successfully!</h3>
			</div>
			
			<router-link class="gamelist__link" :to="'/'">Go to home page </router-link>
			
		</div>
	</div>
</template>

<script>

export default {
	name: "DeleteGameSuccess",
	data(){
		return{
			mounted: false,
			error: ''
		}
	},
	setup(){

	},
	mounted(){
		this.mounted = true
	}
}
</script>
