"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ChangeEvent, FormEvent, useRef, useState} from "react";
import {ImagePrediction} from "@/types";
import {useAtom} from "jotai";
import {
    isImageChosenAtom,
    isImageDetectionLoadingAtom,
    predictionsAtom,
    previewImageSrcAtom
} from "@/atoms/imageDetectionAtom";

interface DetectionApiResponse {
    image: Object,
    predictions: ImagePrediction[],
    time: number
}

export default function ImageDetectionForm() {

    const fileInputRef = useRef<HTMLInputElement>(null)
    const [urlInputValue, setUrlInputValue] = useState("")

    const [loading, setLoading] = useAtom(isImageDetectionLoadingAtom)
    const [, setPredictions] = useAtom(predictionsAtom)
    const [, setIsImageChosen] = useAtom(isImageChosenAtom)
    const [, setImageSrc] = useAtom(previewImageSrcAtom)

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
        setLoading(true)

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


            setLoading(false)
            setPredictions([...data.predictions])
        } catch (err) {
            setLoading(false)
            console.error(err)
        }
    }

    return (
        <form className={"flex flex-col gap-6 w-1/2"} onSubmit={submitHandler}>
                <div className={"flex flex-col gap-4 border-r-4 border-fuchsia-600 pr-4"}>
                    <div className={"flex flex-col gap-2"}>
                        <Label htmlFor={"image"}>Select your image</Label>
                        <Input ref={fileInputRef} onChange={imageChangeHandler} id={"image"} type={"file"}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <Label htmlFor={"url"}>Or enter image URL</Label>
                        <Input value={urlInputValue} onChange={urlInputOnChange} placeholder={"https://some-image-url"}
                               id={"url"} type={"text"}/>
                    </div>
                    <Button disabled={loading} className={"bg-fuchsia-700 hover:bg-fuchsia-800"}>Submit</Button>
                </div>
        </form>
    )
}
