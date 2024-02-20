import dotenv from "dotenv";
import {Pool} from "pg";

dotenv.config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: 'localhost',
    database: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
})

export const query = (text: string, params: any) => {
    return pool.query(text, params)
}
