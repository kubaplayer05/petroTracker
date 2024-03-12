"use client"

import {Card, CardTitle} from "@/components/ui/card";
import {useState} from "react";

export default function LecturesPage() {

    const lectures = [
        <>
            <h2 className={"text-2xl py-4"}>What is Petrology?</h2>
            <p className={"max-w-[700px] text-xl"}>Petrology is the branch of geology that focuses on the study of rocks
                and
                their formation processes. It
                delves into the composition, structure, origin, and classification of rocks, providing insights into
                Earth's history and the processes that have shaped its surface over millions of years. Petrologists
                examine rocks at various scales, from microscopic mineral grains to entire rock formations, utilizing a
                combination of fieldwork, laboratory analysis, and theoretical modeling to unravel the secrets hidden
                within Earth's rocky crust.</p>
        </>,
        <>
            <h2 className={"text-2xl py-4"}>Minerals</h2>
            <p className={"max-w-[700px] text-xl"}>
                Minerals are the building blocks of rocks and the fundamental components of Earth's crust. They are
                naturally occurring, inorganic substances with a characteristic chemical composition and crystal
                structure. Minerals exhibit a wide range of physical and chemical properties, including hardness, color,
                luster, and cleavage, which can be used to identify and classify them. From common minerals like quartz
                and feldspar to rare specimens like beryl and tourmaline, the diversity of minerals on Earth is
                staggering, reflecting the complex interplay of geological processes that have shaped our planet over
                billions of years. Studying minerals is not only essential for understanding Earth's geology but also
                has practical applications in fields such as mining, metallurgy, and materials science.
            </p>
        </>,
        <>
            <h2 className={"text-2xl py-4"}>Gemstones</h2>
            <p className={"max-w-[700px] text-xl"}>Gemstones are precious or semi-precious minerals that are valued for
                their rarity, beauty, and
                durability. They are formed through a combination of geological processes, including crystallization,
                metamorphism, and mineralization, often deep within the Earth's crust or mantle. Gemstones come in a
                dazzling array of colors and varieties, each with its own unique characteristics and properties. From
                the fiery brilliance of diamonds to the iridescent shimmer of opals, gemstones have captivated human
                imagination for millennia, adorning jewelry, artifacts, and ceremonial objects across cultures and
                civilizations. Understanding the geological origins and properties of gemstones is essential for
                gemologists and enthusiasts alike, as it provides insights into their rarity, value, and cultural
                significance.</p>
        </>
    ]

    const [lectureIndex, setLectureIndex] = useState(0)

    return (
        <main className={"flex p-10"}>
            <div className={"w-[30%] h-full flex flex-col gap-4 px-2"}>
                <Card
                    className={`px-4 py-2 border-2 ${lectureIndex === 0 ? " border-fuchsia-600" : "border-slate-200"}`}
                    onClick={() => {
                        setLectureIndex(0)
                    }}>
                    <CardTitle>1. What is Petrology</CardTitle>
                </Card>
                <Card
                    className={`px-4 py-2 border-2 ${lectureIndex === 1 ? " border-fuchsia-600" : "border-slate-200"}`}
                    onClick={() => {
                        setLectureIndex(1)
                    }}>
                    <CardTitle>2. Minerals</CardTitle>
                </Card>
                <Card
                    className={`px-4 py-2 border-2 ${lectureIndex === 2 ? " border-fuchsia-600" : "border-slate-200"}`}
                    onClick={() => {
                        setLectureIndex(2)
                    }}>
                    <CardTitle>3. Gemstones</CardTitle>
                </Card>

            </div>
            <div className={"w-[70%] px-4 flex flex-col items-center"}>
                {lectures[lectureIndex]}
            </div>
        </main>
    )
}
