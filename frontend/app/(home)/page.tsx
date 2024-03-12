import Image from "next/image";
import gemImgSrc from "@/public/gem.png"
import {Button} from "@/components/ui/button";

export default function HomePage() {

    return (
        <main className={"py-10 flex flex-col gap-48"}>
            <section className={"flex flex-col items-center gap-20"}>
                <Image id={"heroImage"} src={gemImgSrc} alt={"Polished Gemstone"} width={300} height={400}/>
                <h2 className={"text-slate-700 text-6xl font-bold max-w-[1000px] text-center "}>
                    All About Petrology, <span className={"text-fuchsia-400"}>Gemstones</span> and <span
                    className={"text-fuchsia-400"}>Minerals</span>
                </h2>
                <Button
                    className={"bg-fuchsia-700 text-slate-200 hover:bg-fuchsia-600 text-4xl font-semibold px-32 py-8"}>
                    Get Started
                </Button>
            </section>
            <section
                className={"w-full min-h-[450px] py-14 bg-fuchsia-700 text-white flex flex-col items-center"}>
                <h2 className={"text-4xl font-bold"}>PetroTrack Features</h2>
                <div className={"flex justify-center items-center gap-4 mt-20"}>
                    <div className={"max-w-[450px] px-2 border-r-slate-100 border-r-2"}>
                        <h3 className={"text-2xl font-bold py-2"}>List of Gemstones and Mineral</h3>
                        <p className={"text-lg"}>Are you looking for boring data etc. ?
                            Perfect this section is perfect for you. You can find all basic information about stones</p>
                    </div>
                    <div className={"max-w-[450px] px-2 border-r-slate-100 border-r-2"}>
                        <h3 className={"text-2xl font-bold py-2"}>Tracking for User Stones Collection</h3>
                        <p className={"text-lg"}>Are you into collecting various types of stones? Perfect, on this
                            website
                            you can track your progress and lot more</p>
                    </div>
                    <div className={"max-w-[450px] px-2"}>
                        <h3 className={"text-2xl font-bold py-2"}>Educational Lectures</h3>
                        <p className={"text-lg"}>On this website you can find interesting lectures that can you help
                            deepen
                            your knowledge in the field of geology</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
