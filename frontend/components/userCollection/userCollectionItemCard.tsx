"use client"

import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {UserCollectionItem} from "@/types";
import {useEffect, useState} from "react";
import Image from "next/image";

interface ItemCardProps {
    stone: UserCollectionItem
}

export default function UserCollectionItemCard({stone}: ItemCardProps) {

    const [imageSrc, setImageSrc] = useState("")

    const addedAt = new Date(stone.addedat)

    useEffect(() => {

        const getItemImage = async () => {

            const apiUrl = process.env.NEXT_PUBLIC_API_URL
            const data = {path: stone.filepath}

            const res = await fetch(`${apiUrl}/collection/image`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            return await res.blob()
        }

        getItemImage().then(data => {
            const objectUrl = URL.createObjectURL(data)
            setImageSrc(objectUrl)
        })

    }, []);

    return (
        <Card className={"py-2 px-4"}>
            <Image src={imageSrc} alt={""} className={"h-[250px] w-[300px] rounded-xl py-2 object-cover"} width={300} height={300}/>
            <CardTitle className={"text-center capitalize font-semibold py-4"}>
                <h3>{stone.name}</h3>
            </CardTitle>
            <CardContent>
                <ul>
                    <li>Color: {stone.color}</li>
                    <li>Type: {stone.type}</li>
                    <li>In collection: {addedAt.toLocaleDateString()}</li>
                </ul>
            </CardContent>
        </Card>
    )
}
