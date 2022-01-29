const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const gamesRouter = require('./routers/gamesRouter')

const app = express()
//app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.use('/api/games', gamesRouter)

// app.listen(3000, () => {
//     console.log("Server is listening on port 3000...")
// })

const port = 3000
const hostname = 'localhost'

app.listen(port, hostname, () => {
    console.log(`Server is listening on http://${hostname}:${port}`)
})

