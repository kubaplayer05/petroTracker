import {Mineral} from "@/types";
import MineralCard from "@/components/mineral/mineralCard";

async function getMinerals() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const res = await fetch(`${apiUrl}/mineral/all`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function MineralsPage() {

    const {minerals} = await getMinerals()

    return (
        <main className={"py-10"}>
            <section className={"grid grid-cols-6 gap-4 max-w-[1200px] mx-auto"}>
                {minerals.map((mineral: Mineral) => {
                    return (
                        <MineralCard id={mineral.id} name={mineral.name}/>
                    )
                })}
            </section>
        </main>
    )
}
