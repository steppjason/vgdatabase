<template>

    <footer>
        <div class="footer__nav">About</div>
        <div class="footer__copy">
            <p class="made-with">Made with <span>🌵</span></p>
            <p>&copy; {{ copyright }}</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    computed:{
        copyright() {
			return new Date().getFullYear();
		}
    }
}
</script>