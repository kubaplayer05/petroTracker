import {query} from "../db";

export class Mineral {

    static async getAll() {
        const result = await query("SELECT id, name FROM Minerals ORDER BY id")

        return result.rows
    }

    static async getFromId(id: number | string) {
        const text = "SELECT * FROM Minerals WHERE id=$1"
        const result = await query(text, [id])

        if (!result.rows[0]) throw Error

        return result.rows[0]
    }
}
