import {GemstoneWithDetails} from "@/types";
import GemstoneCardWIthDetails from "@/components/gemstone/[id]/gemstoneCardWIthDetails";

interface getGemstoneDetailsResponse {
    gemstone: GemstoneWithDetails
}

async function getGemstoneDetails(id: string): Promise<getGemstoneDetailsResponse> {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    console.log(apiUrl)
    const res = await fetch(`${apiUrl}/gemstone/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function GemstoneDetailsPage({params}: { params: { id: string } }) {

    const {gemstone} = await getGemstoneDetails(params.id)

    console.log(gemstone)

    return (
        <main className={"py-10 px-5"}>
            <GemstoneCardWIthDetails gemstone={gemstone}/>
        </main>
    )
}
