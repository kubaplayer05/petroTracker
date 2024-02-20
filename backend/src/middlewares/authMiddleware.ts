import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import {User} from "../models/userModel";

async function authMiddleware(req: Request, res: Response, next: NextFunction) {

    try {
        const {token} = req.cookies

        if (!process.env.SECRET) {
            return res.status(500).json({
                "error": "The SECRET must be provided in .env"
            })
        }

        // @ts-ignore
        const {id: username} = jwt.verify(token, process.env.SECRET)

        const result = await User.authentication(username)

        if (!result) {
            return res.status(403).json({
                error: "Wrong authorization token"
            })
        }

        // @ts-ignore
        req.user = result
        next()

    } catch (err) {
        return res.status(401).json({
            "error": "Request is not authorized"
        })
    }
}

export default authMiddleware
