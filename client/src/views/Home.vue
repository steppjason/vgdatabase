<template>
  <div>
    <h3>List of all games</h3>
    <div :games="games" :key="game.id" v-for="game in games">
      <div>{{ game.title }}</div>
    </div>
  </div>
</template>

<script>

import GameService from '@/services/gameService'

export default {
  name: "Home",
  data(){
    return{
      games:{}
    }
  },
  async mounted(){
    this.games = (await GameService.getGames()).data.games
    console.log(this.games)
  }
};
</script>
