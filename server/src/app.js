const express = require('express')
const https = require('https')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const static = require('serve-static')
const gamesRouter = require('./routers/gamesRouter')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/games', gamesRouter)


// app.listen(3000, () => {
//     console.log("Server is listening on port 3000...")
// })

const port = 3000

https.createServer({
    key: fs.readFileSync(path.join(__dirname,'/certs/server.key')),
    cert: fs.readFileSync(path.join(__dirname,'/certs/server.cert'))
}, app).listen(port, () => {
    console.log(`Server is listening on https://localhost:${port}`)
})

