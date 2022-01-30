const {Pool} = require('pg')

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

module.exports = pool