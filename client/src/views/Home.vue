<template>
  <div>
    <h3>List of all games</h3>
    <div :games="games" :key="game.id" v-for="game in games">
      <div>{{ game.title }} ({{ game.year }})</div>
    </div>
    <div>{{ error }}</div>
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
      this.games = (await GameService.getGames()).data.games
    } catch(err){
      console.log(err)
      this.error = err
    }
  }
}
</script>
