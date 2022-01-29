const express = require('express')
const cors = require('cors')
const gamesRouter = require('./routers/gamesRouter')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/games', gamesRouter)

app.listen(3000, () => {
    console.log("Server is listening on port 3000...")
})
