"use client"

import {useRouter, useSearchParams} from "next/navigation";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {ChangeEvent} from "react";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";

export default function GemstoneFilters() {

    const router = useRouter()
    const searchParams = useSearchParams()

    const searchedName = searchParams.get("name")
    const defaultName = searchedName !== null ? searchedName : ""

    const searchChaneHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value.toLowerCase()
        router.replace(`/gemstones?name=${name}`)
    }

    const imgTypeChange = (imgType: string) => {

        const name = searchParams.get("name")

        if (name) {
            return router.replace(`/gemstones?name=${name}&img=${imgType}`)
        }

        router.replace(`/gemstones?img=${imgType}`)
    }

    return (
        <section className={"py-5 flex items-end justify-between max-w-[1200px] mx-auto border-b-4 border-fuchsia-700"}>
            <div className={"flex flex-col gap-2"}>
                <Label htmlFor={"searchGemstoneByName"}>Search by name</Label>
                <Input defaultValue={defaultName} id={"searchGemstoneByName"} onChange={searchChaneHandler}/>
            </div>
            <ToggleGroup type={"single"} onValueChange={imgTypeChange}>
                <ToggleGroupItem value={"rough"} variant={"outline"}>
                    <p>Rough Image</p>
                </ToggleGroupItem>
                <ToggleGroupItem value={"polished"} variant={"outline"}>
                    <p>Polished Image</p>
                </ToggleGroupItem>
            </ToggleGroup>
        </section>
    )
}
