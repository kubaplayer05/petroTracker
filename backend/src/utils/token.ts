import jwt from "jsonwebtoken";

export function createToken(id: string): string {

    const secret = process.env.SECRET

    if (!secret) throw Error("Secret key, not provided in .env file")

    return jwt.sign({id}, secret, {expiresIn: "24h"})
}
