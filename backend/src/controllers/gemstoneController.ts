import {Request, Response} from "express";
import {Gemstone} from "../models/gemstoneModel";

export async function getAllGemstones(req: Request, res: Response) {

    try {
        const gemstones = await Gemstone.getAll()

        return res.status(200).json({
            "gemstones": gemstones
        })

    } catch (err) {
        console.error(err)
        return res.status(500).json({
            msg: "could not get data about gemstones"
        })
    }
}

export async function getSingleGemstoneWithDetails(req: Request, res: Response) {

    const {id} = req.params

    if (isNaN(parseInt(id))) {
        return res.status(400).json({
            "msg": "wrong id provided. Id must be a integer"
        })
    }

    try {
        const gemstone = await Gemstone.getFromId(id)

        return res.status(200).json({
            "gemstone": gemstone
        })

    } catch (err) {
        console.error(err)
        return res.status(500).json({
            "msg": `could not get information about gemstone with id = ${id}`
        })
    }
}
