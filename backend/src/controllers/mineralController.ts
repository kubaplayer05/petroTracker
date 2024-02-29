import {Request, Response} from "express";
import {Mineral} from "../models/mineralModel";

export async function getAllMinerals(req: Request, res: Response) {

    try {
        const minerals = await Mineral.getAll()

        return res.status(200).json({
            "minerals": minerals
        })

    } catch (err) {
        console.error(err)
        return res.status(500).json({
            msg: "could not get data about minerals"
        })
    }
}

export async function getSingleMineralWithDetails(req: Request, res: Response) {

    const {id} = req.params

    if (isNaN(parseInt(id))) {
        return res.status(400).json({
            "msg": "wrong id provided. Id must be a integer"
        })
    }

    try {
        const mineral = await Mineral.getFromId(id)

        return res.status(200).json({
            mineral: mineral
        })

    } catch (err) {
        console.error(err)
        return res.status(500).json({
            "msg": `could not get information about mineral with id = ${id}`
        })
    }
}
