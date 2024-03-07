"use client"

import {Gemstone} from "@/types";
import GemstoneCard from "@/components/gemstone/gemstoneCard";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

export default function GemstoneList({gemstones}: { gemstones: Gemstone[] }) {

    const searchParams = useSearchParams()
    const name = searchParams.get("name")

    const [filteredGemstones, setFilteredGemstones] = useState<Gemstone[]>([...gemstones])

    useEffect(() => {
        if (name) {
            return setFilteredGemstones(gemstones.filter(gemstone => {
                return gemstone.name.includes(name)
            }))
        }

        setFilteredGemstones([...gemstones])

    }, [name]);

    return (
        <section className={"grid grid-cols-5 mx-auto gap-6 text-center max-w-[1200px] pt-5"}>
            {filteredGemstones.length > 0 && filteredGemstones.map((gem: Gemstone) => {
                return (
                    <GemstoneCard id={gem.id} key={gem.id} name={gem.name} roughimg={gem.roughimg}
                                  polishedimg={gem.polishedimg}/>
                )
            })}
            {filteredGemstones.length === 0 && <h4>No Gemstones to show.</h4>}
        </section>
    )
}
