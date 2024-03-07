"use client"

import Link from "next/link";
import NavProfile from "@/components/navbar/navProfile";
import {usePathname} from "next/navigation";

export default async function Navbar() {

    const pathname = usePathname()

    if (pathname === "/login" || pathname === "/register") return <></>

    return (
        <header className={"bg-white shadow-lg"}>
            <div className={"flex justify-between items-center max-w-[1200px] py-4 px-2 mx-auto"}>
                <h1 className={"text-slate-800 text-4xl font-semibold"}>
                    <Link href={"/"}>Petro Tracker</Link>
                </h1>
                <nav className={"flex gap-5 text-xl"}>
                    <Link href={"/gemstones"}>Gemstones</Link>
                    <Link href={"/minerals"}>Minerals</Link>
                    <Link href={"/"}>Gallery</Link>
                    <Link href={"/"}>Collection</Link>
                </nav>
                <NavProfile/>
            </div>
        </header>
    )
}
