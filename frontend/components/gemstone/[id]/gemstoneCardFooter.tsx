"use client"

import {CardFooter} from "@/components/ui/card";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

export default function GemstoneCardFooter({actualId}: { actualId: number }) {

    const router = useRouter()

    const isPreviousBtnDisabled = !(actualId > 1)
    const isNextBtnDisabled = !(actualId < 29)

    const goToNextHandler = () => {
        router.push(`/gemstones/${actualId + 1}`)
    }

    const goToPreviousHandler = () => {
        router.push(`/gemstones/${actualId - 1}`)
    }

    return (
        <CardFooter className={"flex justify-between items-center py-3"}>
            <Button className={"bg-fuchsia-700 font-semibold hover:bg-fuchsia-800"} disabled={isPreviousBtnDisabled}
                    onClick={goToPreviousHandler}>Previous Gemstone</Button>
            <Button className={"bg-fuchsia-700 font-semibold hover:bg-fuchsia-800"} disabled={isNextBtnDisabled}
                    onClick={goToNextHandler}>Next Gemstone</Button>
        </CardFooter>
    )
}
