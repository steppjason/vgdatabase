const express = require('express')
const cors = require('cors')
require('dotenv/config')

const gamesRouter = require('./routers/gamesRouter')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use('/api/games', gamesRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + process.env.STATIC_FOLDER ))
    app.get(/.*/, (req, res) => res.sendFile(__dirname + process.env.STATIC_FOLDER + process.env.STATIC_PAGE ))
}

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on :${process.env.PORT}`)
})
