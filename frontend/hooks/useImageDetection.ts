import {fetcher} from "@/lib/fetcher";
import useSWR, {Fetcher} from "swr";

interface ResponseFromDetectionApi {

}

interface fetcherWithFormData {
    url: string,
    formData: FormData
}

interface fetcherWithJson {
    url: string,
    jsonData: Object
}

const imageDetectionFromFileFetcher: Fetcher<any, fetcherWithFormData> = (arg) => fetcher(arg.url, {
    method: "POST",
    body: arg.formData
})

const imageDetectionFromURLFetcher: Fetcher<any, fetcherWithJson> = (arg) => fetcher(arg.url, {
    method: "POST",
    body: JSON.stringify(arg.jsonData)
})

export function useImageDetection() {



}
