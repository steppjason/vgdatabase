# Video Game Database

A Vue.js + Node.js application that tracks video game collections.

### About

Built as a practice project to learn Node.js / Express.js and Vue.js. Uses a remote Postgres database on Heroku.

Right now it is a proof of concept. It retrieves video game data from a remote database and displays it.

See a working [live site](https://vgd.jasonstepp.me/).

## Goals

Future features will turn it into a fully fleshed out video game collection tracking app. With user authentication, 
adding games, updating games, and deleting games from youor collection.

## Getting Started

Create a postgres database either remotely or locally.

Run the included sql file in the ***/server/src/data*** folder to create a table and sample data.

Change port number in your env variables to the port your app is running on. See ***.env.placeholder***

Change env variables to connect to your database. See ***.env.placeholder***

By default the app uses a database URI to connect to a database. 

If you prefer to use a host, user, password config, in the ***/server/src/controllers/dataController.js** file contains the following code. Comment out the connectionString and uncomment the other lines:

`const {Pool} = require('pg')

try {
    pool = new Pool({
        connectionString: process.env.DB_URI,
        // user: process.env.DB_USER,
        // host: process.env.DB_HOST,
        // database: process.env.DB_DATABASE,
        // password: process.env.DB_PASSWORD, 
        // port: process.env.DB_PORT,
        ssl: {
            rejectUnauthorized: false
        }
    })    
} catch (err) {
    console.error("Connection failed: " + err)    
}

module.exports = pool`

## License

This software is released under the MIT License.
