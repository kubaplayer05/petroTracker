import {Request, Response} from "express";
import {UserCollection} from "../models/userCollection";
import {DataRequiredForCollection, UserCollectionData} from "../types";

export async function getUserCollection(req: Request, res: Response) {

    // @ts-ignore
    const {id} = req.user

    try {
        const collection: UserCollectionData[] = await UserCollection.getCollectionFromUserId(id)

        return res.status(200).json({
            collection
        })
    } catch (err) {
        return res.status(500).json({
            msg: "Could not get User Collection"
        })
    }
}


export async function addToUserCollection(req: Request, res: Response) {

    // @ts-ignore
    const {id: userId} = req.user
    const {name, type = null, color = null} = req.body
    const file = req.file

    if (!name) {
        return res.status(400).json({
            msg: "Name was not provided"
        })
    }

    const stoneData: DataRequiredForCollection = {
        name: name.toLowerCase().trim(),
        type: type.toLowerCase().trim(),
        color: color.toLowerCase().trim(),
        file
    }

    try {

        if (file) {

            const result = await UserCollection.addToCollectionWithImage(stoneData, userId)

            return res.status(200).json({
                result
            })
            // Add to collection with image
        }

        const result = await UserCollection.addToCollection(stoneData, userId)

        return res.status(200).json({
            result: stoneData
        })

    } catch (err) {
        return res.status(500)
    }
}

export async function getItemImage(req: Request, res: Response) {

    const {path} = req.body

    if (!path) {
        return res.status(400).json({msg: "Path not specified"})
    }

    return res.status(200).sendFile(`/home/jgrzybek/projects/petroTracker/backend/${path}`)
}
