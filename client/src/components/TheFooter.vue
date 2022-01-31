<template>

    <footer>
        <div class="footer__nav">
            <router-link class="footer__link" :to="{name: 'Home'}">Home</router-link>
            <router-link class="footer__link" :to="{name: 'About'}">About</router-link>
        </div>
        <div class="footer__copy">
            <p class="made-with">Made with <span>🌵</span></p>
            <p>&copy; {{ copyright }}</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter',
    computed:{
        copyright() {
			return new Date().getFullYear();
		}
    }
}
</script>