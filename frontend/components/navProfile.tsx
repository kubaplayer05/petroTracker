"use client"

import {deleteCookie, getUserFromClient} from "@/lib/getUser";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {useEffect, useState} from "react";
import {User} from "@/types";

export default function NavProfile() {

    const [user, setUser] = useState<null | User>(null)

    const logoutHandler = () => {
        deleteCookie("user")
        setUser(null)
    }

    useEffect(() => {
        setUser(getUserFromClient)
    }, [])

    if (!user) {
        return (
            <Link href={"/login"}>
                <Button className={"bg-fuchsia-800 hover:bg-fuchsia-700 text-lg px-5 py-2"}>
                    Login
                </Button>
            </Link>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className={"flex items-center gap-3 bg-fuchsia-700 rounded-l-full rounded-r-full pr-4 shadow-md"}>
                <Avatar>
                    <AvatarImage src={"https://github.com/shadcn.png"}/>
                    <AvatarFallback>{user.username[0]}</AvatarFallback>
                </Avatar>
                <p className={"text-white font-bold"}>{user.username}</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className={"text-red-800 font-semibold hover:cursor-pointer"}
                                  onClick={logoutHandler}>
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
