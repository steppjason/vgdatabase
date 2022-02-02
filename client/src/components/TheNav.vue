<template>
	<div class="header__nav">
		<router-link class="header__link" :to="{name: 'Home'}">Home</router-link>
		<router-link class="header__link" :to="{name: 'About'}">About</router-link>
		<router-link class="header__link header__link--action" :to="{name: 'AddGame'}">New Game</router-link>
	</div>
</template>

<script>
export default {
	name: 'TheNav'
}
</script>