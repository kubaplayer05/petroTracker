import fs from "fs"

export function readImage(path: string) {

    return fs.readFileSync(path, {
        encoding: "base64"
    })
}
