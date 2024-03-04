import Link from "next/link";
import {getUserFromCookie} from "@/lib/getUser";
import {Button} from "@/components/ui/button";

export default async function Navbar() {

    const user = getUserFromCookie()

    return (
        <header className={"bg-white shadow-lg"}>
            <div className={"flex justify-between items-center max-w-[1200px] py-4 px-2 mx-auto"}>
                <h1 className={"text-slate-800 text-4xl font-semibold"}>Petro Tracker</h1>
                <nav className={"flex gap-5 text-xl"}>
                    <Link href={"/"}>Gemstones</Link>
                    <Link href={"/"}>Minerals</Link>
                    <Link href={"/"}>Gallery</Link>
                    <Link href={"/"}>Collection</Link>
                </nav>
                {!user && <Button className={"bg-fuchsia-800 hover:bg-fuchsia-700 text-lg px-5 py-2"}>
                    <Link href={"/login"}>Login</Link>
                </Button>}
                {user && <p>kubaplayer23</p>}
            </div>
        </header>
    )
}
