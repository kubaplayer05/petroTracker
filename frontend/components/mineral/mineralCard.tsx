import {Card} from "@/components/ui/card";
import Link from "next/link";

interface MineralCardProps {
    id: number,
    name: string
}

export default function MineralCard({id, name}: MineralCardProps) {

    return (
        <Link href={`/minerals/${id}`}>
            <Card className={"py-2"}>
                <h3 className={"capitalize text-center"}>{name}</h3>
            </Card>
        </Link>
    )
}
