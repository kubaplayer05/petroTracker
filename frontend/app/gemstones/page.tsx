import {Suspense} from "react";
import GemstoneFilters from "@/components/gemstone/gemstoneFilters";
import GemstoneList from "@/components/gemstone/gemstoneList";

async function getGemstones() {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const res = await fetch(`${apiUrl}/gemstone/all`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function GemstonesPage() {

    const {gemstones} = await getGemstones()

    return (
        <main className={"py-10"}>
            <GemstoneFilters/>
            <Suspense>
                <GemstoneList gemstones={gemstones}/>
            </Suspense>
        </main>
    )
}
