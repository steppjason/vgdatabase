<template>
    <div class="page">
      <h3 class="page__title">List of all games</h3>
      <div class="page__block">
        <div class="gamelist">
          <div class="gamelist__row">
            <div class="gamelist__head">Title</div>
            <div class="gamelist__head">Release Year</div>
          </div>
          <div class="gamelist__row" :key="game.id" v-for="game in games">
              <div class="gamelist__title"><router-link class="gamelist__link" :to="{name: 'Game', params:{id: game.gameid, url: titleToURL(game.title)}}">{{ game.title }}</router-link></div>
              <div class="gamelist__year">{{ releaseYear(game.releasedate) }}</div>
          </div>
        </div>

        <div>{{ error }}</div>
      </div>
    </div>
</template>

<script>

import GameService from '@/services/gameService'

export default {
  name: "Home",
  data(){
    return{
      games:{},
      error: ''
    }
  },
  async mounted(){
    try{
      this.games = (await GameService.getGames()).data.data
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
    },
    titleToURL(title){
      return title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-")
    }
  }
}
</script>
