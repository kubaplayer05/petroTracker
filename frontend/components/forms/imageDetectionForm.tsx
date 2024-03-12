"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ChangeEvent, FormEvent, useRef, useState} from "react";
import {ImagePrediction} from "@/types";
import {Card} from "@/components/ui/card";
import {BeatLoader} from "react-spinners";
import Image from "next/image";

interface DetectionApiResponse {
    image: Object,
    predictions: ImagePrediction[],
    time: number
}

export default function ImageDetectionForm() {

    const fileInputRef = useRef<HTMLInputElement>(null)
    const [predictions, setPredictions] = useState<ImagePrediction[]>([])
    const [isImageChosen, setIsImageChosen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [urlInputValue, setUrlInputValue] = useState("")
    const [imageSrc, setImageSrc] = useState("")

    const imageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {

            setUrlInputValue("")

            const reader = new FileReader()
            reader.onload = (onLoadEvent) => {
                setIsImageChosen(true)
                setImageSrc(onLoadEvent.target?.result as string)
            }

            reader.readAsDataURL(e.target.files[0])
        }
    }

    const urlInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {

        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }

        setIsImageChosen(true)
        setUrlInputValue(e.target.value)
        setImageSrc(e.target.value)
    }

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData()
        const apiUrl = process.env.NEXT_PUBLIC_API_URL

        setPredictions([])
        setIsLoading(true)

        if (fileInputRef.current && fileInputRef.current.files) {
            const file = fileInputRef.current?.files[0]
            formData.append("gemstone", file)
        } else {
            return console.error("No file provided")
        }

        try {

            const jsonData = {url: urlInputValue}

            const res = urlInputValue === "" ? await fetch(`${apiUrl}/gemstone/detection`, {
                method: "POST",
                body: formData
            }) : await fetch(`${apiUrl}/gemstone/detection/url`, {
                method: "POST",
                body: JSON.stringify(jsonData),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (!res.ok) {
                throw new Error("Request Failed")
            }

            const {data} = await res.json()

            console.log(data)


            setIsLoading(false)
            setPredictions([...data.predictions])
        } catch (err) {
            setIsLoading(false)
            console.error(err)
        }
    }

    return (
        <form className={"flex flex-col gap-6"} onSubmit={submitHandler}>
            <div
                className={"min-w-[1000px] min-h-[300px] flex justify-center items-center border-4 border-fuchsia-600 bg-zinc-100 shadow-md"}>
                {isImageChosen &&
                    <Image className={"w-[650px] h-[350px] aspect-video object-cover"} width={600} height={400}
                           src={imageSrc} alt={"Chosen user image"}/>
                }

                {!isImageChosen && <h3 className={"text-2xl font-semibold"}>No Image To Show</h3>}
            </div>
            <div className={"flex gap-4"}>
                <div className={"flex flex-col gap-4 w-1/2 border-r-4 border-fuchsia-600 pr-4"}>
                    <div className={"flex flex-col gap-2"}>
                        <Label htmlFor={"image"}>Select your image</Label>
                        <Input ref={fileInputRef} onChange={imageChangeHandler} id={"image"} type={"file"}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <Label htmlFor={"url"}>Or enter image URL</Label>
                        <Input value={urlInputValue} onChange={urlInputOnChange} placeholder={"https://some-image-url"}
                               id={"url"} type={"text"}/>
                    </div>
                    <Button disabled={isLoading} className={"bg-fuchsia-700 hover:bg-fuchsia-800"}>Submit</Button>
                </div>
                <div className={"pl-4 w-1/2 flex flex-col items-center"}>
                    {predictions.length === 0 && !isLoading &&
                        <h3 className={"text-slate-400 text-center text-2xl"}>No Predictions</h3>}
                    {predictions.length > 0 && predictions.map((prediction) => {
                        const roundedConfidence = Math.round(prediction.confidence * 100)

                        return (
                            <Card className={"bg-fuchsia-700 w-full px-6 py-4 text-white shadow-sm"}
                                  key={prediction.detection_id}>
                                <h3 className={"uppercase font-bold"}>{prediction.class}</h3>
                                <p>Confidence: {roundedConfidence}%</p>
                            </Card>
                        )
                    })}
                    <BeatLoader color={"#A21CAF"} className={"mx-auto"} loading={isLoading}/>
                </div>
            </div>

        </form>
    )
}
