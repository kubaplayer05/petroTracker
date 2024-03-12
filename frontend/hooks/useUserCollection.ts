import useSWR, {Fetcher} from "swr";
import {UserCollectionItem} from "@/types";
import {fetcher} from "@/lib/fetcher";

interface CollectionResponse {
    collection: UserCollectionItem[]
}

const userCollectionFetcher: Fetcher<CollectionResponse, string> = url => fetcher(url, {
    credentials: "include",
    next: {revalidate: 0}
})

export function useUserCollection() {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const {data, error, isLoading} = useSWR(`${apiUrl}/collection/all`, userCollectionFetcher)

    return {
        data,
        error,
        isLoading
    }
}
