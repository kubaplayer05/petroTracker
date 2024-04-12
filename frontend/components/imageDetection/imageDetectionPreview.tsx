"use client"

import Image from "next/image";
import {useAtom} from "jotai";
import {isImageChosenAtom, previewImageSrcAtom} from "@/atoms/imageDetectionAtom";

export default function ImageDetectionPreview() {

    const [imageSrc,] = useAtom(previewImageSrcAtom)
    const [isImageChosen,] = useAtom(isImageChosenAtom)

    return (
        <div
            className={"min-w-[1000px] min-h-[300px] flex justify-center items-center border-4 border-fuchsia-600 bg-zinc-100 shadow-md"}>
            {isImageChosen &&
                <Image className={"w-[650px] h-[350px] aspect-video object-cover"} width={600} height={400}
                       src={imageSrc} alt={"Chosen user image"}/>
            }

            {!isImageChosen && <h3 className={"text-2xl font-semibold"}>No Image To Show</h3>}
        </div>
    )
}
