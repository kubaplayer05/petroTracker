import {Pool} from "pg";

const pool = new Pool({
    user: "root",
    host: 'localhost',
    database: process.env.DB_USER,
    password: "1234",
    port: 5432,
})

export const query = (text: string, params?: any) => {
    return pool.query(text, params)
}
