import Image from "next/image";
import gemImgSrc from "@/public/gem.png"
import {Button} from "@/components/ui/button";

export default function HomePage() {

    return (
        <main className={"py-10 flex flex-col items-center gap-20"}>
            <Image id={"heroImage"} src={gemImgSrc} alt={"Polished Gemstone"} width={300} height={400}/>
            <h2 className={"text-slate-700 text-6xl font-bold max-w-[1000px] text-center "}>
                All About Petrology, <span className={"text-fuchsia-400"}>Gemstones</span> and <span
                className={"text-fuchsia-400"}>Minerals</span>
            </h2>
            <Button className={"bg-fuchsia-700 text-slate-200 hover:bg-fuchsia-600 text-4xl font-semibold px-32 py-8"}>
                Get Started
            </Button>
        </main>
    )
}
