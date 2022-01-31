<template>
    <div class="header">
        <header>Video Game Database</header>
        <nav>
            <TheNav/>
        </nav>
    </div>
</template>

<script>
import TheNav from './TheNav.vue'

export default {
    name: 'TheHeader',
    components:{
        TheNav
    }
}
</script>