"use client"

import Link from "next/link";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import Image from "next/image";
import {useSearchParams} from "next/navigation";

interface GemstoneCardProps {
    id: number
    name: string,
    roughimg: string,
    polishedimg: string
}

export default function GemstoneCard({name, polishedimg, roughimg, id}: GemstoneCardProps) {

    const searchParams = useSearchParams()

    const imgType = searchParams.get("img")
    const imageToShow = imgType !== null ? imgType : "polished"

    return (
        <Link href={`/gemstones/${id}`}>
            <Card>
                <CardContent className={"flex justify-center items-center"}>
                    {imageToShow === "polished" && <Image src={polishedimg} alt={"No Image"} width={160} height={130}/>}
                    {imageToShow === "rough" && <Image src={roughimg} alt={"No Image"} width={160} height={130}/>}
                </CardContent>
                <CardFooter className={"flex justify-center items-center"}>
                    <h3 className={"capitalize"}>{name}</h3>
                </CardFooter>
            </Card>
        </Link>
    )
}
