import {query} from "../db";
import {DataRequiredForCollection, FileData} from "../types";

export class UserCollection {

    static async getCollectionFromUserId(userId: string) {

        const text = "SELECT * FROM UsersCollections c JOIN UsersImages i on c.imageId = i.id WHERE c.userId=$1"
        const result = await query(text, [userId])

        return result.rows
    }

    static async addToCollection(stoneData: DataRequiredForCollection, userId: string) {

        const text = "INSERT INTO UsersCollections (userId, name, color, type) VALUES ($1, $2, $3, $4)"
        const result = await query(text, [userId, stoneData.name, stoneData.color, stoneData.type])

        return result.rows[0]
    }

    static async addToCollectionWithImage(stoneData: DataRequiredForCollection, userId: string) {

        if (!stoneData.file) throw Error("File not provided")

        const {id: imageId} = await this.addCollectionImage(stoneData.file)

        const text = "INSERT INTO UsersCollections (userId, name, color, type, imageId) VALUES ($1, $2, $3, $4, $5) RETURNING *"
        const result = await query(text, [userId, stoneData.name, stoneData.color, stoneData.type, imageId])

        return result.rows[0]
    }

    static async addCollectionImage(fileData: FileData) {

        const text = "INSERT INTO UsersImages (filename, filepath, mimeType, size) VALUES ($1, $2, $3, $4) RETURNING id"
        const result = await query(text, [fileData.filename, fileData.path, fileData.mimetype, fileData.size])

        return result.rows[0]
    }
}
