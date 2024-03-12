import {Response, Request} from "express";
import axios from "axios";


export async function detectGemstoneFromImage(req: Request, res: Response) {

    const file = req.file
    const roboflowApiKey = process.env.ROBOFLOW_API_KEY

    if (!file) {
        return res.status(400).json({msg: "image not provided"})
    }

    if (!roboflowApiKey) {
        console.error("ROBOFLOW API KEY not provided")
        return res.status(500)
    }

    const image = file.buffer.toString("base64")

    try {

        const responseFromDetectionApi = await axios({
            method: "POST",
            url: "https://detect.roboflow.com/crystals-yddoa/1",
            params: {
                api_key: roboflowApiKey
            },
            data: image,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })

        return res.status(200).json({data: responseFromDetectionApi.data})

    } catch (err: any) {
        console.error(err.message)
        return res.status(500).json({error: "Image detection failed"})
    }
}

export async function detectGemstoneFromUrl(req: Request, res: Response) {

    const {url} = req.body
    const roboflowApiKey = process.env.ROBOFLOW_API_KEY

    console.log(req.body)

    console.log(url)

    if (!url) {
        return res.status(400).json({msg: "Url for image not provided"})
    }

    try {

        const responseFromDetectionApi = await axios({
            method: "POST",
            url: "https://detect.roboflow.com/crystals-yddoa/1",
            params: {
                api_key: roboflowApiKey,
                image: url
            },
        })

        return res.status(200).json({data: responseFromDetectionApi.data})

    } catch (err: any) {
        console.error(err.message)
        return res.status(500)
    }
}
