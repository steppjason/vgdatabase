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


async function runQuery(queryString, params, successMessage, errorMessage, req, res) {
    try {
        let query = null

        if (params !== undefined || params.length > 0) {
            query = await pool.query(queryString, params)    
        } else {
            query = await pool.query(queryString)    
        }

        res.status(200).json({ success: true, message: successMessage, data: query.rows })

    } catch (err) {
        console.error(err)
        res.status(404).json({success: false, message: errorMessage, error: err })
    }
}


module.exports = { pool, runQuery }