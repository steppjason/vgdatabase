<template>
    <div class="page">
      <h3 class="page__title">About</h3>
      <div class="page__block">
          <p>Built as a practice project to learn <strong><em>Node.js / Express.js</em></strong> and <strong><em>Vue.js</em></strong>.</p>
          <p>Uses a remote <strong><em>Postgres</em></strong> database on <a target="_blank" title="Heroku.com" href="https://www.heroku.com/">Heroku</a>.</p>
          <p>Made by Jason Stepp. Source code can be found on my <a target="_blank" title="Source code on GitHub" href="https://github.com/steppjason/vgdatabase">GitHub</a></p>
      </div>
    </div>
</template>


<script>
import GameService from '@/services/gameService'

export default {
    name: 'Game',
    data(){
        return{
            games:{},
            error: ''
        }
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