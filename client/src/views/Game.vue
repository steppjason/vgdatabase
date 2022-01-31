<template>
    <div class="page">
        <div class="page__header">
            <div><TheNav/></div>
        </div>
        <div :key="game.id" v-for="game in games">
            <div class="page__block game">
                <h1 class="game__title">{{game.title}}</h1>
                <div class="game__block">
                    <div class="game__cover"><img :src="game.coverimage" /></div>
                    <ul class="game__attributes">
                        <li v-if="game.publisher"><div class="game__attributes--title">Publisher</div> {{ game.publisher }}</li>
                        <li v-if="game.developer"><div class="game__attributes--title">Developer</div> {{ game.developer }}</li>
                        <li v-if="game.platform"><div class="game__attributes--title">Platform</div> {{ game.platform }}</li>
                        <li v-if="game.genre"><div class="game__attributes--title">Genre</div> {{ game.genre }}</li>
                        <li v-if="game.releasedate"><div class="game__attributes--title">Release Date</div> {{ formatDate(game.releasedate) }}</li>
                    </ul>
                </div>
                <div v-if="game.summary" class="game__summary">
                    <h4>Summary</h4>
                    {{game.summary}}
                </div>
                <!--<div class="game__description">{{game.longdescription}}</div>-->
            </div>
        </div>
    </div>
</template>


<script>
import GameService from '@/services/gameService'
import TheNav from '../components/TheNav.vue'

export default {
    name: 'Game',
    data(){
        return{
            games:{},
            error: ''
        }
    },
    components:{
        TheNav
    },
    async mounted(){
        try{
            this.games = (await GameService.getGame(this.$route.params.id, this.$route.params.url)).data.data
        } catch(err){
            console.log(err)
            this.error = err
        }
    },
    methods:{
        formatDate(date){
            return date = new Date(date).toLocaleDateString("en-US")
        },
        releaseYear(date){
            return date = new Date(date).getFullYear()
        }
    }
}
</script>