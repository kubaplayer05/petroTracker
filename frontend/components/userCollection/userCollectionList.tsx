"use client"

import {useUserCollection} from "@/hooks/useUserCollection";
import UserCollectionItemCard from "@/components/userCollection/userCollectionItemCard";
import {useRouter} from "next/navigation";
import {getUserFromClient} from "@/lib/getUser";
import {useEffect} from "react";

export default function UserCollectionList() {

    const router = useRouter()

    useEffect(() => {
        const user = getUserFromClient()
        if (!user) {
            router.push("/")
        }
    }, []);

    const {data, error, isLoading} = useUserCollection()

    if (isLoading) {
        return <p>Loading</p>
    }

    if (!data || error) {
        return <p>Nothing to show in collection</p>
    }

    console.log(data)

    return (
        <div className={"w-full flex gap-4 flex-wrap"}>
            {data.collection.map(item => {
                return (
                    <UserCollectionItemCard stone={item} key={item.id}/>
                )
            })}
            {data.collection.length === 0 && <h3 className={"text-slate-400 text-2xl"}>No stones in collection yet!</h3>}
        </div>
    )
}
