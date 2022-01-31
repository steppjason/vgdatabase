<template>
    <div class="page">
      <div class="page__block">
          <h1 class="page__title">About</h1>
          <p>Built as a practice project to learn <strong><em>Node.js / Express.js</em></strong> and <strong><em>Vue.js</em></strong>.</p>
          <p>Uses a remote <strong><em>Postgres</em></strong> database on <a target="_blank" title="Heroku.com" href="https://www.heroku.com/">Heroku</a>.</p>
          <p>Made by Jason Stepp. Source code can be found on my <a target="_blank" title="Source code on Gi" href="https://github.com/steppjason/vgdatabase">GitHub</a></p>
      </div>
    </div>
</template>


<script>


export default {
    name: 'Game',
    data(){
        return{
            games:{},
            error: ''
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