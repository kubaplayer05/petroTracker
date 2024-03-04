import {cookies} from "next/headers";

export function getUserFromCookie() {
    const user = cookies().get("user")?.value
    return user ? JSON.parse(user) : null
}

function getCookie(name: string) {

    const cookies = document.cookie.split(";")

    for (let i = 0; i < cookies.length; i++) {
        let cookiePair = cookies[i].split("=")

        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1])
        }
    }

    return null
}
