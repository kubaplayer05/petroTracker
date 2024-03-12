import {MineralWithDetails} from "@/types";
import MineralCardWithDetails from "@/components/mineral/[id]/mineralCardWithDetails";

interface getMineralDetailsResponse {
    mineral: MineralWithDetails
}

async function getMineralDetails(id: string): Promise<getMineralDetailsResponse> {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    console.log(apiUrl)
    const res = await fetch(`${apiUrl}/mineral/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function MineralDetailsPage({params}: { params: { id: string } }) {

    const {mineral} = await getMineralDetails(params.id)

    return (
        <main className={"py-10"}>
            <MineralCardWithDetails mineral={mineral}/>
        </main>
    )
}
