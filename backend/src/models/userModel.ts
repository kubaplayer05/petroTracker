import {query} from "../db";
import bcrypt from "bcrypt"

export class User {

    static async register(username: string, password: string) {

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const text = "INSERT INTO Users(username, password) VALUES ($1, $2)"
        return await query(text, [username, hash])
    }

    static async login(username: string, password: string) {

        const text = "SELECT password FROM Users WHERE username=$1"
        const result = await query(text, [username])

        const hash = result.rows[0].password
        return await bcrypt.compare(password, hash)
    }

    static async authentication(username: string) {
        const text = "SELECT * FROM Users WHERE username=$1"
        const result = await query(text, [username])

        return result.rows[0]
    }
}
