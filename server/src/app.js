const express = require('express')
const cors = require('cors')
require('dotenv/config')

const gameRouter = require('./routers/gameRouter')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use('/api/game', gameRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'))
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is listening on PORT:${port}`)
    console.log(`Connecting to: ${process.env.DB_URI}`)
    console.log('Ready...')
})
