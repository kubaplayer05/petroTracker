import {Request, Response} from "express";
import {User} from "../models/userModel";
import {createToken} from "../utils/token";
import {verifyUsername, verifyPassword} from "../utils/verify";

export async function registerHandler(req: Request, res: Response) {

    const {username, password} = req.body

    const {valid: usernameIsValid, msg: usernameMsg} = verifyUsername(username)
    if (!usernameIsValid) {
        return res.status(400).json({
            "error": usernameMsg
        })
    }

    const {valid: passwordIsValid, msg: passwordMsg} = verifyPassword(password)
    if (!passwordIsValid) {
        return res.status(400).json({
            "error": passwordMsg
        })
    }

    User.register(username, password).then(() => {

        const token = createToken(username)

        res.cookie("token", token, {
            httpOnly: true,
        })

        res.cookie("user", JSON.stringify({username}), {
            httpOnly: false
        })

        return res.status(200).json({
            "msg": "User created",
            "user": username
        })

    }).catch((err) => {
        console.error(err)
        return res.status(400).json({
            "error": err
        })
    })
}

export async function loginHandler(req: Request, res: Response) {

    const {username, password} = req.body

    const {valid: usernameIsValid, msg: usernameMsg} = verifyUsername(username)
    if (!usernameIsValid) {
        return res.status(400).json({
            "error": usernameMsg
        })
    }

    const {valid: passwordIsValid, msg: passwordMsg} = verifyPassword(password)
    if (!passwordIsValid) {
        return res.status(400).json({
            "error": passwordMsg
        })
    }

    const loginStatus = await User.login(username, password)

    if (!loginStatus) {
        return res.status(400).json({
            "error": "Wrong password provided"
        })
    }

    const token = createToken(username)

    res.cookie("token", token, {
        httpOnly: true,
    })

    res.cookie("user", JSON.stringify({username}), {
        httpOnly: false
    })

    return res.status(200).json({
        "msg": "Successfully login",
        "user": username
    })
}
