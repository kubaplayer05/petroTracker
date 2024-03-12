import {GemstoneWithDetails} from "@/types";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import GemstoneCardFooter from "@/components/gemstone/[id]/gemstoneCardFooter";
import {FaCircleQuestion} from "react-icons/fa6";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";

export default function GemstoneCardWIthDetails({gemstone}: { gemstone: GemstoneWithDetails }) {

    const images = [gemstone.roughimg, gemstone.polishedimg]

    return (
        <Card className={"px-5 py-7 mx-auto max-w-[800px] "}>
            <Carousel className={"w-[80%] mx-auto"}>
                <CarouselContent>
                    {images.map(img => {
                        return (
                            <CarouselItem className={"w-full flex justify-center items-center"}>
                                <Image className={"w-[200px] h-[200px]"} src={img} alt={"Gemstone"} width={150} height={150}/>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
            <CardTitle className={"py-2 uppercase text-center"}>{gemstone.name}</CardTitle>
            <CardContent className={"text-xl mt-5 flex flex-col gap-4"}>
                <div>
                    <p><span className={"font-bold"}>Colors:</span> {gemstone.color}</p>
                </div>
                <div>
                    <p><span className={"font-bold"}>Mineral:</span> {gemstone.mineral}</p>
                </div>
                <div className={"flex gap-3 items-center"}>
                    <p><span className={"font-bold"}>Mohs Hardness: </span>
                        {gemstone.mohshardness}
                    </p>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <FaCircleQuestion className={"text-fuchsia-400"}/>
                            </TooltipTrigger>
                            <TooltipContent className={"max-w-[200px]"}>
                                <p>The Mohs scale of mineral hardness is a qualitative ordinal scale, from 1 to 10,
                                    characterizing scratch resistance of minerals through the ability of harder material
                                    to scratch softer material.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className={"flex gap-3 items-center"}>
                    <p><span className={"font-bold"}>Refractive Index:</span> {gemstone.refractiveindex}</p>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <FaCircleQuestion className={"text-fuchsia-400"}/>
                            </TooltipTrigger>
                            <TooltipContent className={"max-w-[200px]"}>
                                <p>Refractive Index (RI) is the characteristic slowing of light as it travels through a
                                    given gem species or substance. The higher the RI, the greater brilliance and luster
                                    is possible.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className={"flex gap-3 items-center"}>
                    <p><span className={"font-bold"}>Birefringence:</span> {gemstone.birefringence}</p>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <FaCircleQuestion className={"text-fuchsia-400"}/>
                            </TooltipTrigger>
                            <TooltipContent className={"max-w-[200px]"}>
                                <p>Birefringence is the strength of double refraction as measured by computing the
                                    difference between the high and low indices of a doubly refractive stone. Gems with
                                    a high birefringence usually show doubling when observed under magnification.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className={"flex gap-3 items-center"}>
                    <p><span className={"font-bold"}>Specific Gravity:</span> {gemstone.specificgravity}</p>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <FaCircleQuestion className={"text-fuchsia-400"}/>
                            </TooltipTrigger>
                            <TooltipContent className={"max-w-[200px]"}>
                                <p>Specific gravity (also known as "relative density") is the ratio between the weight
                                    of a stone in air and the weight of an equal volume in water</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </CardContent>
            <GemstoneCardFooter actualId={gemstone.id}/>
        </Card>
    )
}
