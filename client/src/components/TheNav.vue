<template>
	<div class="header__nav">
		<router-link class="header__link" :to="{name: 'Home'}">Home</router-link>
		<router-link class="header__link" :to="{name: 'About'}">About</router-link>
	</div>
</template>

<script>
export default {
	name: 'TheNav'
}
</script>