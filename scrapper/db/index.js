import {configDotenv} from "dotenv";
import pkg from "pg";

const {Pool} = pkg

configDotenv()

const pool = new Pool({
    user: process.env.DB_USER,
    host: 'localhost',
    database: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
})

export const query = (text, params) => {
    return pool.query(text, params)
}
